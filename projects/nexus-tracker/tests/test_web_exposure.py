"""Session 7 tests for the exposure dashboard.

Thresholds are patched so the config file isn't involved, and `as_of` is pinned
via the query string so results don't depend on today's date.
"""

import unittest
from unittest import mock

from nexus_tracker.ledger import Client, Transaction
from nexus_tracker.thresholds import StateThreshold, ThresholdConfigError
from nexus_tracker.web.app import create_app

PATH = "nexus_tracker.web.app.thresholds.load_thresholds"


def th(state, dollars=None, txns=None, logic="dollar_only",
       period="current_calendar_year", marketplace=True):
    return StateThreshold(state, dollars, txns, logic, period, marketplace)


def sale(tid, day, state, dollars):
    return Transaction(transaction_id=tid, client_id="c1", date=day,
                       destination_state=state, amount_cents=dollars * 100, source="csv")


class ExposureDashboardTests(unittest.TestCase):
    def setUp(self):
        self.app = create_app(":memory:")
        self.app.storage.add_client(Client(client_id="c1", client_name="Acme"))
        self.client = self.app.test_client()

    def _seed(self, *transactions):
        self.app.storage.add_transactions(transactions)

    def _get(self, thresholds, as_of="2026-12-31"):
        with mock.patch(PATH, return_value=thresholds):
            return self.client.get(f"/clients/c1/exposure?as_of={as_of}")

    def test_no_data_shows_empty_state(self):
        body = self._get({"CA": th("CA", dollars=100_000)}).get_data(as_text=True)
        self.assertIn("No sales data yet", body)

    def test_crossed_state_is_shown_with_date(self):
        self._seed(
            sale("s1", "2026-02-01", "CA", 60_000),
            sale("s2", "2026-05-01", "CA", 50_000),  # cumulative 110k crosses 100k
        )
        body = self._get({"CA": th("CA", dollars=100_000)}).get_data(as_text=True)
        self.assertIn("Crossed", body)
        self.assertIn("California", body)
        self.assertIn("2026-05-01", body)          # effective date
        self.assertIn("$110,000.00", body)         # measured sales, formatted

    def test_approaching_state_shows_progress_and_remaining(self):
        self._seed(sale("s1", "2026-03-01", "CA", 40_000))  # 40k of 100k
        body = self._get({"CA": th("CA", dollars=100_000)}).get_data(as_text=True)
        self.assertIn("Approaching", body)
        self.assertIn("40% of threshold", body)
        self.assertIn("$60,000.00 to go", body)

    def test_unconfigured_state_is_surfaced_not_judged(self):
        self._seed(sale("s1", "2026-03-01", "WY", 500_000))
        body = self._get({}).get_data(as_text=True)   # no thresholds at all
        self.assertIn("no threshold", body.lower())
        self.assertIn("Wyoming", body)
        self.assertIn("no state thresholds are set yet", body.lower())

    def test_frames_as_exposure_not_a_nexus_conclusion(self):
        self._seed(sale("s1", "2026-02-01", "CA", 200_000))
        body = self._get({"CA": th("CA", dollars=100_000)}).get_data(as_text=True).lower()
        # The disclaimer states the tool does NOT conclude nexus / registration.
        self.assertIn("does not determine that the client has nexus", body)
        # A crossed state is labeled "crossed", not asserted to "have nexus".
        self.assertIn("crossed", body)

    def test_bad_threshold_config_is_friendly(self):
        with mock.patch(PATH, side_effect=ThresholdConfigError("CA has a bad rule")):
            resp = self.client.get("/clients/c1/exposure")
        self.assertEqual(resp.status_code, 500)
        body = resp.get_data(as_text=True)
        self.assertIn("threshold settings", body)
        self.assertNotIn("Traceback", body)

    def test_requires_real_client(self):
        with mock.patch(PATH, return_value={}):
            self.assertEqual(self.client.get("/clients/ghost/exposure").status_code, 404)


if __name__ == "__main__":
    unittest.main()
