"""Session 5 tests for the CSV importer core (no web layer).

Covers column mapping, money/date/state parsing, refunds from negative amounts,
the marketplace flag, plain-English row errors, position-based ids, and writing
through storage (including the conflict path from Session 3).

Run with:  .venv/bin/python -m unittest
"""

import textwrap
import unittest

from nexus_tracker.importers import csv_importer as csvimp
from nexus_tracker.importers.csv_importer import ColumnMapping, CsvImportError
from nexus_tracker.storage import Storage
from nexus_tracker.ledger import Client

CLIENT = "c1"


def parse(text, **mapping_kwargs):
    mapping = ColumnMapping(**mapping_kwargs)
    return csvimp.parse_csv(textwrap.dedent(text).lstrip("\n"), mapping, CLIENT)


BASIC = """
    Order ID,Date,Ship State,Total
    1001,2026-03-01,CA,"$1,234.56"
    1002,03/05/2026,California,50
    1003,2026-04-01,NY,(25.00)
"""

BASIC_MAP = dict(date="Date", state="Ship State", amount="Total", transaction_id="Order ID")


class ParsingTests(unittest.TestCase):
    def test_basic_rows_map_correctly(self):
        result = parse(BASIC, **BASIC_MAP)
        self.assertEqual(result.errors, ())
        self.assertEqual(len(result.transactions), 3)
        first = result.transactions[0]
        self.assertEqual(first.transaction_id, "1001")
        self.assertEqual(first.date, "2026-03-01")
        self.assertEqual(first.destination_state, "CA")
        self.assertEqual(first.amount_cents, 123456)
        self.assertEqual(first.source, "csv")
        self.assertFalse(first.is_refund)

    def test_full_state_name_and_us_date(self):
        result = parse(BASIC, **BASIC_MAP)
        second = result.transactions[1]
        self.assertEqual(second.destination_state, "CA")   # "California"
        self.assertEqual(second.date, "2026-03-05")        # 03/05/2026 -> month first
        self.assertEqual(second.amount_cents, 5000)

    def test_parentheses_and_negative_amounts_become_refunds(self):
        result = parse(BASIC, **BASIC_MAP)
        third = result.transactions[2]
        self.assertTrue(third.is_refund)
        self.assertEqual(third.amount_cents, 2500)  # magnitude, positive

    def test_month_name_date(self):
        # The date has a comma, so in real CSVs it's quoted.
        result = parse(
            'Date,State,Amount\n"March 1, 2026",TX,100\n',
            date="Date", state="State", amount="Amount",
        )
        self.assertEqual(result.transactions[0].date, "2026-03-01")

    def test_marketplace_column_and_default(self):
        text = "Date,State,Amount,Channel\n2026-01-01,CA,100,Amazon\n2026-01-02,CA,100,Web\n"
        result = parse(text, date="Date", state="State", amount="Amount", marketplace="Channel")
        self.assertTrue(result.transactions[0].marketplace_facilitated)   # "Amazon"
        self.assertFalse(result.transactions[1].marketplace_facilitated)  # "Web"

        default_on = parse(
            "Date,State,Amount\n2026-01-01,CA,100\n",
            date="Date", state="State", amount="Amount", marketplace_default=True,
        )
        self.assertTrue(default_on.transactions[0].marketplace_facilitated)

    def test_no_id_column_uses_row_position(self):
        result = parse(
            "Date,State,Amount\n2026-01-01,CA,100\n2026-01-02,NY,200\n",
            date="Date", state="State", amount="Amount",
        )
        self.assertFalse(result.id_column_used)
        self.assertEqual([t.transaction_id for t in result.transactions], ["row-2", "row-3"])


class RowErrorTests(unittest.TestCase):
    def test_bad_rows_are_reported_and_good_rows_survive(self):
        text = """
            Order ID,Date,State,Amount
            1,2026-03-01,CA,100
            2,2026-03-02,Nowhere,100
            3,notadate,CA,100
            4,2026-03-04,CA,abc
            5,2026-03-05,NY,250
        """
        result = parse(text, date="Date", state="State", amount="Amount", transaction_id="Order ID")
        self.assertEqual(len(result.transactions), 2)  # order ids 1 and 5
        # Bad rows sit on file lines 3, 4, 5 (header is line 1).
        self.assertEqual([e.row_number for e in result.errors], [3, 4, 5])
        problems = " ".join(e.problem for e in result.errors)
        self.assertIn("state", problems.lower())
        self.assertIn("date", problems.lower())
        self.assertIn("amount", problems.lower())

    def test_missing_required_value_is_reported(self):
        result = parse(
            "Date,State,Amount\n2026-03-01,,100\n",
            date="Date", state="State", amount="Amount",
        )
        self.assertEqual(len(result.transactions), 0)
        self.assertIn("Missing state", result.errors[0].problem)

    def test_mapping_a_missing_column_is_a_file_level_error(self):
        with self.assertRaises(CsvImportError):
            parse("Date,State,Amount\n2026-01-01,CA,1\n",
                  date="Date", state="State", amount="NotThere")


class DecodeAndPreviewTests(unittest.TestCase):
    def test_decode_strips_bom(self):
        # encode('utf-8-sig') prepends the BOM Excel writes; decode should drop it.
        raw = "Date,State,Amount\n2026-01-01,CA,1\n".encode("utf-8-sig")
        self.assertTrue(raw.startswith(b"\xef\xbb\xbf"))  # BOM really is there
        text = csvimp.decode_bytes(raw)
        self.assertTrue(text.startswith("Date"))  # and decode removed it

    def test_unreadable_file_gives_friendly_error(self):
        # A NUL byte makes Python's csv reader raise; it should surface friendly.
        with self.assertRaises(CsvImportError):
            csvimp.read_headers_and_preview("Date,State,Amount\n2026-01-01,CA,\x00100\n")

    def test_headers_and_preview(self):
        headers, preview = csvimp.read_headers_and_preview(
            "Date,State,Amount\n2026-01-01,CA,100\n2026-01-02,NY,200\n"
        )
        self.assertEqual(headers, ["Date", "State", "Amount"])
        self.assertEqual(preview[0], ["2026-01-01", "CA", "100"])


class ImportThroughStorageTests(unittest.TestCase):
    def setUp(self):
        self.store = Storage(":memory:")
        self.store.add_client(Client(client_id=CLIENT, client_name="Acme"))

    def tearDown(self):
        self.store.close()

    def _import(self, text):
        return csvimp.import_csv(self.store, CLIENT, textwrap.dedent(text).lstrip("\n"),
                                 ColumnMapping(**BASIC_MAP))

    def test_import_writes_rows_and_counts(self):
        report = self._import(BASIC)
        self.assertEqual(report.parsed, 3)
        self.assertEqual(report.inserted, 3)
        self.assertEqual(self.store.count_transactions(CLIENT), 3)

    def test_reimport_same_file_is_unchanged(self):
        self._import(BASIC)
        report = self._import(BASIC)
        self.assertEqual(report.inserted, 0)
        self.assertEqual(report.unchanged, 3)
        self.assertEqual(report.conflict_count, 0)

    def test_changed_reimport_is_flagged_as_conflict(self):
        self._import(BASIC)
        changed = """
            Order ID,Date,Ship State,Total
            1001,2026-03-01,CA,999.00
        """
        report = self._import(changed)
        self.assertEqual(report.inserted, 0)
        self.assertEqual(report.conflict_count, 1)
        self.assertIn("amount_cents", report.conflicts[0].changed_fields)
        # original preserved
        self.assertEqual(self.store.get_transactions_for_client(CLIENT)[0].amount_cents, 123456)


if __name__ == "__main__":
    unittest.main()
