"""Session 3 tests for the SQLite data-access layer.

Covers client and transaction round-trips, dedupe on re-import, foreign-key
protection, a friendly error when the folder isn't reachable, the stamped schema
version, and an end-to-end pass where stored rows are read back and fed to the
nexus engine across the storage boundary.

Run from the project root with:  python3 -m unittest
"""

import sqlite3
import tempfile
import unittest
from datetime import date
from pathlib import Path

from nexus_tracker import engine
from nexus_tracker.ledger import Client, Transaction
from nexus_tracker.storage import Storage, StorageError
from nexus_tracker.thresholds import StateThreshold


def memory_store() -> Storage:
    return Storage(":memory:")


def a_client(client_id="c1", name="Acme LLC", settings=None):
    return Client(client_id=client_id, client_name=name, settings=settings)


def a_sale(tid, client_id="c1", day="2026-03-01", state="CA", dollars=1000,
           source="csv", marketplace=False):
    return Transaction(
        transaction_id=tid,
        client_id=client_id,
        date=day,
        destination_state=state,
        amount_cents=dollars * 100,
        source=source,
        marketplace_facilitated=marketplace,
    )


class ClientTests(unittest.TestCase):
    def test_add_and_get_round_trip(self):
        with memory_store() as store:
            store.add_client(a_client(settings={"shopify_token": "enc:abc"}))
            got = store.get_client("c1")
            self.assertIsNotNone(got)
            self.assertEqual(got.client_name, "Acme LLC")
            self.assertEqual(got.settings, {"shopify_token": "enc:abc"})
            self.assertIsNotNone(got.created_at)  # stamped on insert

    def test_list_clients_sorted(self):
        with memory_store() as store:
            store.add_client(a_client("c2", "Zebra Co"))
            store.add_client(a_client("c1", "Acme LLC"))
            names = [c.client_name for c in store.list_clients()]
            self.assertEqual(names, ["Acme LLC", "Zebra Co"])

    def test_duplicate_client_is_rejected(self):
        with memory_store() as store:
            store.add_client(a_client())
            with self.assertRaises(StorageError):
                store.add_client(a_client())

    def test_update_settings(self):
        with memory_store() as store:
            store.add_client(a_client())
            store.update_client_settings("c1", {"shopify_token": "enc:xyz"})
            self.assertEqual(store.get_client("c1").settings, {"shopify_token": "enc:xyz"})

    def test_update_settings_unknown_client(self):
        with memory_store() as store:
            with self.assertRaises(StorageError):
                store.update_client_settings("nope", {"x": 1})


class TransactionTests(unittest.TestCase):
    def test_round_trip_preserves_flags_and_refund_link(self):
        with memory_store() as store:
            store.add_client(a_client())
            refund = Transaction(
                transaction_id="r1", client_id="c1", date="2026-04-01",
                destination_state="CA", amount_cents=5000, source="csv",
                marketplace_facilitated=True, is_refund=True,
                refunded_transaction_id="s1",
            )
            store.add_transactions([a_sale("s1"), refund])
            rows = store.get_transactions_for_client("c1")
            self.assertEqual([t.transaction_id for t in rows], ["s1", "r1"])  # ordered by date
            got_refund = rows[1]
            self.assertTrue(got_refund.is_refund)
            self.assertTrue(got_refund.marketplace_facilitated)
            self.assertEqual(got_refund.refunded_transaction_id, "s1")
            self.assertIsInstance(got_refund.is_refund, bool)

    def test_reimport_identical_rows_are_unchanged(self):
        with memory_store() as store:
            store.add_client(a_client())
            first = store.add_transactions([a_sale("s1"), a_sale("s2")])
            self.assertEqual((first.inserted, first.unchanged, len(first.conflicts)), (2, 0, 0))
            again = store.add_transactions([a_sale("s1"), a_sale("s2"), a_sale("s3")])
            self.assertEqual((again.inserted, again.unchanged, len(again.conflicts)), (1, 2, 0))
            self.assertEqual(store.count_transactions("c1"), 3)

    def test_reimport_with_changed_data_is_flagged_not_applied(self):
        with memory_store() as store:
            store.add_client(a_client())
            store.add_transactions([a_sale("s1", dollars=1000, state="CA")])
            # Same id + source, different amount and state -> a conflict.
            result = store.add_transactions([a_sale("s1", dollars=2000, state="NY")])
            self.assertEqual((result.inserted, result.unchanged), (0, 0))
            self.assertEqual(len(result.conflicts), 1)

            conflict = result.conflicts[0]
            self.assertEqual(conflict.transaction_id, "s1")
            self.assertIn("amount_cents", conflict.changed_fields)
            self.assertIn("destination_state", conflict.changed_fields)

            # The stored row is preserved untouched -- no silent overwrite.
            stored = store.get_transactions_for_client("c1")
            self.assertEqual(len(stored), 1)
            self.assertEqual(stored[0].amount_cents, 1000 * 100)
            self.assertEqual(stored[0].destination_state, "CA")

    def test_same_id_different_source_both_stored(self):
        with memory_store() as store:
            store.add_client(a_client())
            store.add_transactions([
                a_sale("1001", source="shopify"),
                a_sale("1001", source="csv"),
            ])
            self.assertEqual(store.count_transactions("c1"), 2)

    def test_transaction_for_unknown_client_is_friendly(self):
        with memory_store() as store:
            with self.assertRaises(StorageError) as ctx:
                store.add_transactions([a_sale("s1", client_id="ghost")])
            self.assertIn("client", str(ctx.exception).lower())  # FK-specific message

    def test_same_date_rows_return_in_insertion_order(self):
        with memory_store() as store:
            store.add_client(a_client())
            store.add_transactions([
                a_sale("s1", day="2026-03-01"),
                a_sale("s2", day="2026-03-01"),
                a_sale("s3", day="2026-03-01"),
            ])
            ids = [t.transaction_id for t in store.get_transactions_for_client("c1")]
            self.assertEqual(ids, ["s1", "s2", "s3"])  # deterministic via id tiebreaker

    def test_delete_transactions_for_client(self):
        with memory_store() as store:
            store.add_client(a_client())
            store.add_client(a_client("c2", "Other Co"))
            store.add_transactions([a_sale("s1"), a_sale("s2"), a_sale("s3", client_id="c2")])

            removed = store.delete_transactions_for_client("c1")

            self.assertEqual(removed, 2)
            self.assertEqual(store.count_transactions("c1"), 0)
            self.assertEqual(store.get_transactions_for_client("c1"), [])
            self.assertIsNotNone(store.get_client("c1"))         # client record kept
            self.assertEqual(store.count_transactions("c2"), 1)  # other clients untouched

    def test_delete_transactions_for_unknown_client_is_friendly(self):
        with memory_store() as store:
            with self.assertRaises(StorageError):
                store.delete_transactions_for_client("ghost")


class OpeningTests(unittest.TestCase):
    def test_unreachable_folder_is_friendly(self):
        missing = Path("/no/such/folder/that/exists/nexus.sqlite")
        with self.assertRaises(StorageError):
            Storage(str(missing))

    def test_schema_version_is_stamped(self):
        with tempfile.TemporaryDirectory() as tmp:
            db_path = str(Path(tmp) / "nexus.sqlite")
            Storage(db_path).close()
            # Re-open with a plain connection to confirm the version was written.
            conn = sqlite3.connect(db_path)
            try:
                version = conn.execute("PRAGMA user_version").fetchone()[0]
            finally:
                conn.close()
            self.assertEqual(version, 1)

    def test_reopen_existing_file_works(self):
        with tempfile.TemporaryDirectory() as tmp:
            db_path = str(Path(tmp) / "nexus.sqlite")
            with Storage(db_path) as store:
                store.add_client(a_client())
                store.add_transactions([a_sale("s1")])
            with Storage(db_path) as reopened:  # idempotent schema init on existing file
                self.assertEqual(reopened.count_transactions("c1"), 1)


class EngineIntegrationTests(unittest.TestCase):
    def test_stored_rows_feed_the_engine(self):
        with memory_store() as store:
            store.add_client(a_client())
            store.add_transactions([
                a_sale("s1", day="2026-03-01", dollars=40_000),
                a_sale("s2", day="2026-06-01", dollars=40_000),
                a_sale("s3", day="2026-09-01", dollars=30_000),  # cumulative 110k
            ])
            transactions = store.get_transactions_for_client("c1")

        thresholds = {
            "CA": StateThreshold(
                state="CA", dollar_threshold=100_000, transaction_threshold=None,
                threshold_logic="dollar_only", measurement_period="current_calendar_year",
                marketplace_counts=True,
            )
        }
        result = engine.evaluate_client(transactions, thresholds, date(2026, 12, 31), "c1")
        ca = next(s for s in result.states if s.state == "CA")
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2026, 9, 1))
        self.assertEqual(ca.sales_cents, 110_000 * 100)


if __name__ == "__main__":
    unittest.main()
