"""Session 5 tests for the CSV import web flow (upload -> map -> run -> report).

Uses Flask's test client against an in-memory database. Exercises the whole
round trip, including the conflict report from Session 3.

Run with:  .venv/bin/python -m unittest
"""

import io
import unittest

from nexus_tracker.ledger import Client
from nexus_tracker.web.app import create_app

CSV = (
    "Order ID,Date,Ship State,Total\n"
    "1001,2026-03-01,CA,100.00\n"
    "1002,2026-04-01,New York,250.00\n"
    "bad,notadate,CA,50.00\n"
)


class ImportFlowTests(unittest.TestCase):
    def setUp(self):
        self.app = create_app(":memory:")
        self.app.storage.add_client(Client(client_id="c1", client_name="Acme"))
        self.client = self.app.test_client()

    def _upload(self, text=CSV, filename="sales.csv"):
        return self.client.post(
            "/clients/c1/import",
            data={"file": (io.BytesIO(text.encode("utf-8")), filename)},
            content_type="multipart/form-data",
        )

    def test_upload_shows_mapping_screen_with_headers(self):
        page = self._upload().get_data(as_text=True)
        self.assertIn("Map the columns", page)
        for header in ("Order ID", "Date", "Ship State", "Total"):
            self.assertIn(header, page)

    def test_full_flow_imports_and_reports(self):
        # Grab the token the mapping screen embedded.
        map_page = self._upload().get_data(as_text=True)
        token = self._token(map_page)

        resp = self.client.post("/clients/c1/import/run", data={
            "token": token,
            "map_date": "Date",
            "map_state": "Ship State",
            "map_amount": "Total",
            "map_transaction_id": "Order ID",
        })
        body = resp.get_data(as_text=True)
        self.assertEqual(resp.status_code, 200)
        self.assertIn("<strong>2</strong>", body)   # 1001, 1002 imported
        self.assertIn("new transaction", body)
        self.assertIn("read (1)", body)             # one unreadable row reported
        self.assertIn("notadate", body)             # the offending value shown
        self.assertIn("<td>4</td>", body)           # the bad row is file line 4
        self.assertEqual(self.app.storage.count_transactions("c1"), 2)

    def test_missing_required_mapping_is_rejected(self):
        token = self._token(self._upload().get_data(as_text=True))
        resp = self.client.post("/clients/c1/import/run", data={
            "token": token, "map_date": "Date", "map_state": "", "map_amount": "Total",
        })
        self.assertEqual(resp.status_code, 400)
        self.assertIn("choose a column for: state", resp.get_data(as_text=True))

    def test_reimport_changed_row_is_flagged_as_conflict(self):
        # First import.
        token = self._token(self._upload().get_data(as_text=True))
        self.client.post("/clients/c1/import/run", data={
            "token": token, "map_date": "Date", "map_state": "Ship State",
            "map_amount": "Total", "map_transaction_id": "Order ID",
        })
        # Re-import with 1001's amount changed.
        changed = "Order ID,Date,Ship State,Total\n1001,2026-03-01,CA,999.00\n"
        token2 = self._token(self._upload(changed).get_data(as_text=True))
        resp = self.client.post("/clients/c1/import/run", data={
            "token": token2, "map_date": "Date", "map_state": "Ship State",
            "map_amount": "Total", "map_transaction_id": "Order ID",
        })
        body = resp.get_data(as_text=True)
        self.assertIn("Already on file, but different", body)
        self.assertIn("amount_cents", body)

    def test_expired_token_is_friendly(self):
        resp = self.client.post("/clients/c1/import/run", data={
            "token": "nope", "map_date": "Date", "map_state": "Ship State", "map_amount": "Total",
        })
        self.assertEqual(resp.status_code, 400)
        self.assertIn("expired", resp.get_data(as_text=True))

    def test_import_page_requires_real_client(self):
        self.assertEqual(self.client.get("/clients/ghost/import").status_code, 404)

    def test_abandoned_uploads_are_capped(self):
        from nexus_tracker.web.app import MAX_PENDING_UPLOADS
        for i in range(MAX_PENDING_UPLOADS + 3):
            self._upload(filename=f"file{i}.csv")  # upload but never map
        self.assertLessEqual(len(self.app.pending_uploads), MAX_PENDING_UPLOADS)

    @staticmethod
    def _token(html):
        marker = 'name="token" value="'
        start = html.index(marker) + len(marker)
        return html[start:html.index('"', start)]


if __name__ == "__main__":
    unittest.main()
