"""Session 6 tests for the Shopify web flow (connect -> save -> sync).

import_shopify is patched so the sync route never touches the network; the
importer's own logic is covered in test_shopify.py.
"""

import os
import unittest
from unittest import mock

from nexus_tracker import crypto
from nexus_tracker.importers import shopify
from nexus_tracker.importers.shopify import (
    ShopifyAuthError,
    ShopifyImportReport,
)
from nexus_tracker.ledger import Client
from nexus_tracker.web.app import create_app


def a_report(**kw):
    base = dict(fetched=3, parsed=3, inserted=3, unchanged=0, conflicts=(), skipped=())
    base.update(kw)
    return ShopifyImportReport(**base)


class ShopifyWebTests(unittest.TestCase):
    def setUp(self):
        self._saved = os.environ.get(crypto.KEY_ENV)
        os.environ[crypto.KEY_ENV] = crypto.generate_key()
        self.app = create_app(":memory:")
        self.app.storage.add_client(Client(client_id="c1", client_name="Acme"))
        self.client = self.app.test_client()

    def tearDown(self):
        if self._saved is None:
            os.environ.pop(crypto.KEY_ENV, None)
        else:
            os.environ[crypto.KEY_ENV] = self._saved

    def test_connect_page_shows_instructions_when_not_connected(self):
        page = self.client.get("/clients/c1/shopify").get_data(as_text=True)
        self.assertIn("Connect Shopify", page)
        self.assertIn("Admin API access token", page)

    def test_saving_credentials_then_shows_connected(self):
        resp = self.client.post("/clients/c1/shopify", data={
            "shop_domain": "acme.myshopify.com", "token": "shpat_SECRET",
        })
        self.assertEqual(resp.status_code, 302)  # redirect after save

        page = self.client.get("/clients/c1/shopify?saved=1").get_data(as_text=True)
        self.assertIn("Connected to", page)
        self.assertIn("acme.myshopify.com", page)
        self.assertNotIn("shpat_SECRET", page)  # token never rendered back

    def test_saving_a_non_shopify_address_is_rejected(self):
        resp = self.client.post("/clients/c1/shopify", data={
            "shop_domain": "evil.example.com", "token": "shpat_SECRET",
        })
        self.assertEqual(resp.status_code, 400)
        self.assertIn("Shopify store address", resp.get_data(as_text=True))
        # Nothing should have been stored.
        self.assertIsNone(shopify.connection(self.app.storage, "c1"))

    def test_saving_requires_both_fields(self):
        resp = self.client.post("/clients/c1/shopify", data={"shop_domain": "", "token": "x"})
        self.assertEqual(resp.status_code, 400)
        self.assertIn("both the store address and the access token", resp.get_data(as_text=True))

    def test_sync_shows_report(self):
        with mock.patch("nexus_tracker.importers.shopify.import_shopify",
                        return_value=a_report(inserted=2, unchanged=1)):
            resp = self.client.post("/clients/c1/shopify/sync")
        body = resp.get_data(as_text=True)
        self.assertEqual(resp.status_code, 200)
        self.assertIn("Shopify sync results", body)
        self.assertIn("<strong>2</strong>", body)

    def test_sync_with_bad_token_is_friendly(self):
        with mock.patch("nexus_tracker.importers.shopify.import_shopify",
                        side_effect=ShopifyAuthError("token rejected; paste a fresh one")):
            resp = self.client.post("/clients/c1/shopify/sync")
        body = resp.get_data(as_text=True)
        self.assertEqual(resp.status_code, 400)
        self.assertIn("paste a fresh one", body)
        self.assertNotIn("Traceback", body)

    def test_shopify_pages_require_real_client(self):
        self.assertEqual(self.client.get("/clients/ghost/shopify").status_code, 404)


if __name__ == "__main__":
    unittest.main()
