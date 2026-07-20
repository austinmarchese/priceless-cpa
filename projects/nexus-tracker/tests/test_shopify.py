"""Session 6 tests for the Shopify importer core.

No live store and no network: the HTTP layer is faked for the API client, and
import_shopify takes an injected client. Covers pagination, auth/other errors,
order-to-transaction mapping, backfill window, credential encryption, and writing
through storage (including the conflict path).
"""

import os
import unittest
from datetime import date

from nexus_tracker import crypto
from nexus_tracker.importers import shopify
from nexus_tracker.importers.shopify import (
    HttpResponse,
    ShopifyAuthError,
    ShopifyClient,
    ShopifyError,
    import_shopify,
)
from nexus_tracker.ledger import Client
from nexus_tracker.storage import Storage


def order(oid, state, total, tax="0.00", created="2026-03-01T10:00:00-05:00",
          use_code=True, address=True):
    o = {"id": oid, "created_at": created, "total_price": total, "total_tax": tax}
    if address:
        o["shipping_address"] = {"province_code": state} if use_code else {"province": state}
    return o


class FakeGet:
    """Returns queued HttpResponses; records the params it was called with."""

    def __init__(self, responses):
        self._responses = list(responses)
        self.calls = []

    def __call__(self, url, headers, params):
        self.calls.append({"url": url, "params": params})
        return self._responses.pop(0)


class FakeClient:
    def __init__(self, orders):
        self.orders = orders
        self.created_at_min = None

    def iter_orders(self, created_at_min):
        self.created_at_min = created_at_min
        return iter(self.orders)


class ApiClientTests(unittest.TestCase):
    def test_pagination_follows_link_header(self):
        page1 = HttpResponse(
            200,
            {"Link": '<https://s/admin/api/2024-07/orders.json?limit=250&page_info=NEXT>; rel="next"'},
            {"orders": [order(1, "CA", "10"), order(2, "NY", "20")]},
        )
        page2 = HttpResponse(200, {}, {"orders": [order(3, "TX", "30")]})
        get = FakeGet([page1, page2])
        client = ShopifyClient("s.myshopify.com", "tok", get=get)

        ids = [o["id"] for o in client.iter_orders("2025-06-01")]
        self.assertEqual(ids, [1, 2, 3])
        self.assertEqual(len(get.calls), 2)
        self.assertIsNone(get.calls[1]["params"])  # second call rides the cursor URL

    def test_bad_token_raises_auth_error(self):
        get = FakeGet([HttpResponse(401, {}, {})])
        client = ShopifyClient("s.myshopify.com", "tok", get=get)
        with self.assertRaises(ShopifyAuthError):
            list(client.iter_orders("2025-06-01"))

    def test_other_http_errors_are_friendly(self):
        for code in (404, 429, 500):
            get = FakeGet([HttpResponse(code, {}, {})])
            client = ShopifyClient("s.myshopify.com", "tok", get=get)
            with self.assertRaises(ShopifyError):
                list(client.iter_orders("2025-06-01"))


class ImportTests(unittest.TestCase):
    def setUp(self):
        self._saved = os.environ.get(crypto.KEY_ENV)
        os.environ[crypto.KEY_ENV] = crypto.generate_key()
        self.store = Storage(":memory:")
        self.store.add_client(Client(client_id="c1", client_name="Acme"))

    def tearDown(self):
        self.store.close()
        if self._saved is None:
            os.environ.pop(crypto.KEY_ENV, None)
        else:
            os.environ[crypto.KEY_ENV] = self._saved

    def test_maps_orders_and_skips_unmappable(self):
        orders = [
            order(1, "CA", "100.00", "8.00"),          # amount = 92.00
            order(2, "New York", "50.00", use_code=False),
            order(3, "CA", "10.00", address=False),     # no address -> skipped
        ]
        report = import_shopify(self.store, "c1", client=FakeClient(orders), as_of=date(2026, 7, 19))
        self.assertEqual((report.fetched, report.parsed, report.inserted), (3, 2, 2))
        self.assertEqual(report.skipped_count, 1)

        rows = {t.transaction_id: t for t in self.store.get_transactions_for_client("c1")}
        self.assertEqual(rows["1"].amount_cents, 9200)   # total minus tax
        self.assertEqual(rows["1"].destination_state, "CA")
        self.assertEqual(rows["1"].source, "shopify")
        self.assertFalse(rows["1"].marketplace_facilitated)
        self.assertEqual(rows["2"].destination_state, "NY")  # "New York" normalized

    def test_backfill_window_is_trailing_months(self):
        fake = FakeClient([])
        import_shopify(self.store, "c1", months=13, client=fake, as_of=date(2026, 7, 19))
        self.assertEqual(fake.created_at_min, "2025-06-19")

    def test_reimport_is_unchanged(self):
        orders = [order(1, "CA", "100.00")]
        import_shopify(self.store, "c1", client=FakeClient(orders), as_of=date(2026, 7, 19))
        report = import_shopify(self.store, "c1", client=FakeClient(orders), as_of=date(2026, 7, 19))
        self.assertEqual((report.inserted, report.unchanged), (0, 1))

    def test_auth_error_propagates(self):
        class Boom:
            def iter_orders(self, _min):
                raise ShopifyAuthError("bad token")

        with self.assertRaises(ShopifyAuthError):
            import_shopify(self.store, "c1", client=Boom())


class CredentialTests(unittest.TestCase):
    def setUp(self):
        self._saved = os.environ.get(crypto.KEY_ENV)
        os.environ[crypto.KEY_ENV] = crypto.generate_key()
        self.store = Storage(":memory:")
        self.store.add_client(Client(client_id="c1", client_name="Acme"))

    def tearDown(self):
        self.store.close()
        if self._saved is None:
            os.environ.pop(crypto.KEY_ENV, None)
        else:
            os.environ[crypto.KEY_ENV] = self._saved

    def test_token_is_stored_encrypted_and_reloads(self):
        shopify.save_credentials(self.store, "c1", "acme.myshopify.com", "shpat_SECRET")

        stored = self.store.get_client("c1").settings["shopify"]
        self.assertEqual(stored["shop_domain"], "acme.myshopify.com")
        self.assertNotIn("shpat_SECRET", stored["token_encrypted"])  # encrypted at rest

        shop, token = shopify._load_credentials(self.store, "c1")
        self.assertEqual((shop, token), ("acme.myshopify.com", "shpat_SECRET"))

    def test_connection_exposes_domain_not_token(self):
        shopify.save_credentials(self.store, "c1", "acme.myshopify.com", "shpat_SECRET")
        conn = shopify.connection(self.store, "c1")
        self.assertEqual(conn, {"shop_domain": "acme.myshopify.com"})

    def test_no_connection_returns_none(self):
        self.assertIsNone(shopify.connection(self.store, "c1"))


if __name__ == "__main__":
    unittest.main()
