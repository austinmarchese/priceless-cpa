"""Session 4 tests for the web UI shell.

Uses Flask's test client against an in-memory database, so no live server or
real data is involved. Checks the home page, adding a client, the per-client
view wired to stored data, and friendly handling of a missing client.

Run from the project root with the venv Python:  .venv/bin/python -m unittest
"""

import unittest

from nexus_tracker.sample_data import seed
from nexus_tracker.web.app import create_app


class WebShellTests(unittest.TestCase):
    def setUp(self):
        self.app = create_app(":memory:")
        self.client = self.app.test_client()

    def test_home_shows_empty_state_when_no_clients(self):
        page = self.client.get("/")
        self.assertEqual(page.status_code, 200)
        self.assertIn("No clients yet", page.get_data(as_text=True))

    def test_add_client_then_it_appears_and_opens(self):
        # Adding redirects to the new client's page (post/redirect/get).
        resp = self.client.post("/clients", data={"name": "Acme Outdoors, LLC"})
        self.assertEqual(resp.status_code, 302)
        self.assertIn("/clients/acme-outdoors-llc", resp.headers["Location"])

        # It now shows on the home list...
        home = self.client.get("/").get_data(as_text=True)
        self.assertIn("Acme Outdoors, LLC", home)

        # ...and its own page loads.
        page = self.client.get("/clients/acme-outdoors-llc")
        self.assertEqual(page.status_code, 200)
        self.assertIn("Acme Outdoors, LLC", page.get_data(as_text=True))

    def test_blank_name_is_rejected_kindly(self):
        resp = self.client.post("/clients", data={"name": "   "})
        self.assertEqual(resp.status_code, 400)
        self.assertIn("Please enter a business name", resp.get_data(as_text=True))

    def test_client_page_reflects_stored_data(self):
        seed(self.app.storage)  # sample clients + transactions
        page = self.client.get("/clients/sample-acme").get_data(as_text=True)
        # Acme has sales into CA, NY, TX in the sample data.
        self.assertIn("CA", page)
        self.assertIn("NY", page)
        self.assertIn("TX", page)
        self.assertIn("transaction", page)

    def test_unknown_client_is_friendly_not_a_crash(self):
        resp = self.client.get("/clients/does-not-exist")
        self.assertEqual(resp.status_code, 404)
        body = resp.get_data(as_text=True)
        self.assertIn("It may have been removed", body)  # the friendly message
        self.assertIn("Back to your clients", body)
        self.assertNotIn("Traceback", body)

    def test_home_lists_clients_with_transaction_counts(self):
        seed(self.app.storage)
        home = self.client.get("/").get_data(as_text=True)
        self.assertIn("Acme Outdoors (sample)", home)
        self.assertIn("Riverbend Goods (sample)", home)
        self.assertIn("on file", home)


if __name__ == "__main__":
    unittest.main()
