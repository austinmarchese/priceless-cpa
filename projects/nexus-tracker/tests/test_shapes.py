"""Session 1 sanity checks for the ledger schema and the threshold loader.

These verify the *shapes* are real and self-consistent:
    - the SQL schema is valid and its constraints behave, and
    - the threshold config loader reads good files and rejects bad ones with a
      clear message.

The nexus engine's behavioural tests come in Session 2. Run from the project
root with:  python3 -m unittest
"""

import json
import sqlite3
import tempfile
import unittest
from pathlib import Path

from nexus_tracker import ledger, thresholds

CONFIG_DIR = Path(__file__).resolve().parent.parent / "config"


def _fresh_db() -> sqlite3.Connection:
    """An in-memory database with the schema applied.

    This executes the schema only to prove the DDL is well-formed; it is a
    shape check, not the app's storage access. The app reads and writes the
    ledger only through storage.py (Session 3).
    """
    conn = sqlite3.connect(":memory:")
    conn.execute("PRAGMA foreign_keys = ON")
    for statement in ledger.SCHEMA_STATEMENTS:
        conn.execute(statement)
    conn.commit()
    return conn


class SchemaShapeTests(unittest.TestCase):
    def test_schema_creates_both_tables(self):
        conn = _fresh_db()
        try:
            tables = {
                row[0]
                for row in conn.execute(
                    "SELECT name FROM sqlite_master WHERE type = 'table'"
                )
            }
            self.assertIn("clients", tables)
            self.assertIn("transactions", tables)
        finally:
            conn.close()

    def test_duplicate_transaction_is_rejected(self):
        conn = _fresh_db()
        try:
            conn.execute(
                "INSERT INTO clients (client_id, client_name) VALUES (?, ?)",
                ("c1", "Test Client"),
            )
            insert = (
                "INSERT INTO transactions "
                "(transaction_id, client_id, date, destination_state, amount_cents, source) "
                "VALUES (?, ?, ?, ?, ?, ?)"
            )
            row = ("order-1", "c1", "2026-01-15", "CA", 12_345, "csv")
            conn.execute(insert, row)
            # Same (client_id, source, transaction_id) must not be storable twice.
            with self.assertRaises(sqlite3.IntegrityError):
                conn.execute(insert, row)
        finally:
            conn.close()

    def test_same_id_different_source_is_allowed(self):
        conn = _fresh_db()
        try:
            conn.execute(
                "INSERT INTO clients (client_id, client_name) VALUES (?, ?)",
                ("c1", "Test Client"),
            )
            insert = (
                "INSERT INTO transactions "
                "(transaction_id, client_id, date, destination_state, amount_cents, source) "
                "VALUES (?, ?, ?, ?, ?, ?)"
            )
            conn.execute(insert, ("1001", "c1", "2026-01-15", "CA", 500, "shopify"))
            # Same id from a different source is a different transaction -- allowed.
            conn.execute(insert, ("1001", "c1", "2026-01-15", "CA", 500, "csv"))
        finally:
            conn.close()

    def test_boolean_columns_reject_non_boolean(self):
        conn = _fresh_db()
        try:
            conn.execute(
                "INSERT INTO clients (client_id, client_name) VALUES (?, ?)",
                ("c1", "Test Client"),
            )
            with self.assertRaises(sqlite3.IntegrityError):
                conn.execute(
                    "INSERT INTO transactions "
                    "(transaction_id, client_id, date, destination_state, amount_cents, "
                    "source, is_refund) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    ("order-2", "c1", "2026-01-15", "CA", 100, "csv", 7),  # 7 is not 0/1
                )
        finally:
            conn.close()


class ThresholdLoaderTests(unittest.TestCase):
    def test_example_config_loads_and_is_typed(self):
        result = thresholds.load_thresholds(CONFIG_DIR / "state_thresholds.example.json")
        self.assertEqual(set(result), {"CA", "NY", "IL"})

        ca = result["CA"]
        self.assertIsInstance(ca, thresholds.StateThreshold)
        self.assertEqual(ca.dollar_threshold, 500_000)
        self.assertIsNone(ca.transaction_threshold)
        self.assertEqual(ca.threshold_logic, "dollar_only")
        self.assertEqual(ca.measurement_period, "trailing_12_months")
        self.assertTrue(ca.marketplace_counts)

        self.assertEqual(result["NY"].threshold_logic, "and")
        self.assertFalse(result["IL"].marketplace_counts)

    def test_placeholder_config_loads_as_empty(self):
        # The real file currently holds only a "_comment"; that must be fine.
        result = thresholds.load_thresholds(CONFIG_DIR / "state_thresholds.json")
        self.assertEqual(result, {})

    def test_missing_file_is_friendly(self):
        with self.assertRaises(thresholds.ThresholdConfigError):
            thresholds.load_thresholds(CONFIG_DIR / "does_not_exist.json")

    def test_bad_threshold_logic_is_rejected(self):
        self._assert_rejects(
            {
                "CA": {
                    "dollar_threshold": 100_000,
                    "transaction_threshold": None,
                    "threshold_logic": "dollars_maybe",  # not allowed
                    "measurement_period": "trailing_12_months",
                    "marketplace_counts": True,
                }
            }
        )

    def test_logic_without_its_threshold_is_rejected(self):
        # "and" needs both a dollar and a transaction threshold.
        self._assert_rejects(
            {
                "TX": {
                    "dollar_threshold": 500_000,
                    "transaction_threshold": None,  # missing for "and"
                    "threshold_logic": "and",
                    "measurement_period": "current_calendar_year",
                    "marketplace_counts": True,
                }
            }
        )

    def test_underscore_keys_are_ignored(self):
        result = self._load(
            {
                "_comment": "notes here",
                "WA": {
                    "dollar_threshold": 100_000,
                    "transaction_threshold": None,
                    "threshold_logic": "dollar_only",
                    "measurement_period": "current_calendar_year",
                    "marketplace_counts": True,
                },
            }
        )
        self.assertEqual(set(result), {"WA"})

    # -- helpers ----------------------------------------------------------- #

    def _load(self, data: dict) -> dict:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "config.json"
            path.write_text(json.dumps(data), encoding="utf-8")
            return thresholds.load_thresholds(path)

    def _assert_rejects(self, data: dict) -> None:
        with self.assertRaises(thresholds.ThresholdConfigError):
            self._load(data)


if __name__ == "__main__":
    unittest.main()
