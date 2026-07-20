"""Session 2 nexus engine tests: hand-made data with known, hand-computed answers.

No real data and no storage. Each test builds a small list of Transaction rows
and a small StateThreshold config where the expected crossing can be worked out
by hand, then checks the engine agrees.

Run from the project root with:  python3 -m unittest
"""

import unittest
from datetime import date

from nexus_tracker import engine
from nexus_tracker.ledger import Transaction
from nexus_tracker.thresholds import StateThreshold

CLIENT = "client-1"


def sale(day, dollars, state="CA", tid=None, marketplace=False, count=1):
    """A non-refund sale of `dollars` (whole dollars) on ISO date `day`."""
    return Transaction(
        transaction_id=tid or f"{state}-{day}-{dollars}",
        client_id=CLIENT,
        date=day,
        destination_state=state,
        amount_cents=dollars * 100,
        source="csv",
        transaction_count=count,
        marketplace_facilitated=marketplace,
        is_refund=False,
    )


def refund(day, dollars, state="CA", original="orig", count=1):
    return Transaction(
        transaction_id=f"refund-{state}-{day}-{dollars}",
        client_id=CLIENT,
        date=day,
        destination_state=state,
        amount_cents=dollars * 100,
        source="csv",
        transaction_count=count,
        marketplace_facilitated=False,
        is_refund=True,
        refunded_transaction_id=original,
    )


def threshold(state="CA", dollars=None, txns=None, logic="dollar_only",
              period="current_calendar_year", marketplace=True):
    return StateThreshold(
        state=state,
        dollar_threshold=dollars,
        transaction_threshold=txns,
        threshold_logic=logic,
        measurement_period=period,
        marketplace_counts=marketplace,
    )


def evaluate(transactions, thresholds, as_of):
    return engine.evaluate_client(transactions, thresholds, as_of, CLIENT)


def only_state(result, state="CA"):
    return next(s for s in result.states if s.state == state)


class DollarOnlyTests(unittest.TestCase):
    def test_crosses_mid_year_on_correct_date(self):
        txns = [
            sale("2025-12-01", 200_000),  # prior year -- ignored for current_calendar_year
            sale("2026-03-01", 40_000),
            sale("2026-06-01", 40_000),
            sale("2026-09-01", 30_000),   # cumulative 110k >= 100k here
        ]
        result = evaluate(txns, {"CA": threshold(dollars=100_000)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2026, 9, 1))
        self.assertEqual(ca.sales_cents, 110_000 * 100)  # 2025 excluded
        self.assertEqual(ca.transaction_count, 3)
        self.assertIsNone(ca.dollar_remaining_cents)  # crossed -> not applicable

    def test_not_crossed_reports_how_close(self):
        txns = [sale("2026-03-01", 40_000), sale("2026-06-01", 25_000)]  # 65k
        result = evaluate(txns, {"CA": threshold(dollars=100_000)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertFalse(ca.crossed)
        self.assertIsNone(ca.effective_date)
        self.assertEqual(ca.sales_cents, 65_000 * 100)
        self.assertEqual(ca.dollar_remaining_cents, 35_000 * 100)


class TransactionAndCombinationTests(unittest.TestCase):
    def test_transaction_only(self):
        txns = [sale(f"2026-01-0{i}", 10, count=1, tid=f"t{i}") for i in range(1, 5)]  # 4 sales
        result = evaluate(txns, {"CA": threshold(logic="transaction_only", txns=3)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2026, 1, 3))  # the 3rd sale
        self.assertEqual(ca.transaction_count, 4)

    def test_and_requires_both(self):
        txns = [
            sale("2026-01-01", 50, tid="a"),
            sale("2026-02-01", 60, tid="b"),  # dollars 110>=100 but count 2 < 3
            sale("2026-03-01", 10, tid="c"),  # count 3 -> both now met
        ]
        result = evaluate(txns, {"CA": threshold(logic="and", dollars=100, txns=3)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2026, 3, 1))

    def test_either_takes_first_to_hit(self):
        txns = [
            sale("2026-01-01", 50, tid="a"),
            sale("2026-02-01", 60, tid="b"),  # dollars 110 >= 100 -> either satisfied here
            sale("2026-03-01", 10, tid="c"),
        ]
        result = evaluate(txns, {"CA": threshold(logic="either", dollars=100, txns=10)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2026, 2, 1))


class MarketplaceTests(unittest.TestCase):
    def test_marketplace_sales_excluded_when_state_says_so(self):
        txns = [
            sale("2026-01-01", 80, marketplace=True, tid="m"),   # excluded
            sale("2026-02-01", 80, marketplace=False, tid="d"),  # counts: 80 only
        ]
        result = evaluate(txns, {"CA": threshold(dollars=100, marketplace=False)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertFalse(ca.crossed)
        self.assertEqual(ca.sales_cents, 80 * 100)
        self.assertEqual(ca.dollar_remaining_cents, 20 * 100)

    def test_marketplace_sales_included_when_state_counts_them(self):
        txns = [
            sale("2026-01-01", 80, marketplace=True, tid="m"),   # counts now: cum 80
            sale("2026-02-01", 80, marketplace=False, tid="d"),  # cum 160 >= 100
        ]
        result = evaluate(txns, {"CA": threshold(dollars=100, marketplace=True)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2026, 2, 1))
        self.assertEqual(ca.sales_cents, 160 * 100)


class RefundTests(unittest.TestCase):
    def test_refund_reduces_dollars_but_not_count_and_crossing_sticks(self):
        txns = [
            sale("2026-01-01", 80, tid="a"),
            sale("2026-02-01", 80, tid="b"),   # cum 160 >= 100 -> crossed here
            refund("2026-03-01", 100, original="b"),  # net now 60
        ]
        result = evaluate(txns, {"CA": threshold(dollars=100)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertTrue(ca.crossed)                      # once crossed, stays flagged
        self.assertEqual(ca.effective_date, date(2026, 2, 1))
        self.assertEqual(ca.sales_cents, 60 * 100)       # dollars netted down
        self.assertEqual(ca.transaction_count, 2)        # refund did not reduce count


class MeasurementPeriodTests(unittest.TestCase):
    def test_prior_calendar_year_uses_only_the_prior_year(self):
        txns = [
            sale("2025-04-01", 120, tid="a"),   # prior year, crosses
            sale("2026-01-01", 500, tid="b"),   # current year -- ignored
        ]
        result = evaluate(
            txns, {"CA": threshold(dollars=100, period="prior_calendar_year")}, date(2026, 6, 30)
        )
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2025, 4, 1))
        self.assertEqual(ca.sales_cents, 120 * 100)
        self.assertEqual(ca.transaction_count, 1)

    def test_trailing_12_months_detects_past_crossing_that_rolled_off(self):
        txns = [
            sale("2025-02-01", 70, tid="a"),
            sale("2025-05-01", 70, tid="b"),  # trailing window here holds 140 >= 100
        ]
        result = evaluate(
            txns, {"CA": threshold(dollars=100, period="trailing_12_months")}, date(2026, 6, 30)
        )
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2025, 5, 1))
        # As of 2026-06-30 the trailing window is (2025-06-30, 2026-06-30]; both
        # sales rolled off, so current standing is zero -- but it stays flagged.
        self.assertEqual(ca.sales_cents, 0)
        self.assertEqual(ca.transaction_count, 0)

    def test_trailing_12_months_current_window_totals(self):
        txns = [
            sale("2025-05-01", 40, tid="a"),  # outside (2025-06-30, 2026-06-30]
            sale("2025-08-01", 40, tid="b"),  # inside
            sale("2026-06-01", 30, tid="c"),  # inside -> 70 total, below 100
        ]
        result = evaluate(
            txns, {"CA": threshold(dollars=100, period="trailing_12_months")}, date(2026, 6, 30)
        )
        ca = only_state(result)
        self.assertFalse(ca.crossed)
        self.assertEqual(ca.sales_cents, 70 * 100)  # only the two inside the window
        self.assertEqual(ca.dollar_remaining_cents, 30 * 100)


class SameDateDeterminismTests(unittest.TestCase):
    """A crossing must not depend on row order within a single day."""

    def _cross(self, txns, period="current_calendar_year"):
        r = evaluate(txns, {"CA": threshold(dollars=100, period=period)}, date(2026, 12, 31))
        s = only_state(r)
        return s.crossed, s.effective_date

    def test_same_day_sale_then_refund_order_independent(self):
        sale_first = [sale("2026-03-01", 150, tid="s"), refund("2026-03-01", 120, original="s")]
        refund_first = list(reversed(sale_first))
        # The day nets +$30, below the $100 threshold -> not crossed, either order.
        self.assertEqual(self._cross(sale_first), (False, None))
        self.assertEqual(self._cross(refund_first), (False, None))

    def test_same_day_two_sales_cross_on_that_day(self):
        crossed, eff = self._cross([sale("2026-03-01", 60, tid="a"), sale("2026-03-01", 60, tid="b")])
        self.assertTrue(crossed)
        self.assertEqual(eff, date(2026, 3, 1))

    def test_trailing_same_day_order_independent(self):
        rows = [sale("2026-03-01", 150, tid="s"), refund("2026-03-01", 120, original="s")]
        for txns in (rows, list(reversed(rows))):
            r = evaluate(txns, {"CA": threshold(dollars=100, period="trailing_12_months")},
                         date(2026, 7, 19))
            self.assertFalse(only_state(r).crossed)


class CurrentOrPriorYearTests(unittest.TestCase):
    """The dominant real-world rule: nexus if EITHER calendar year crossed."""

    PERIOD = "current_or_prior_calendar_year"

    def test_crossed_in_prior_year_only(self):
        txns = [sale("2025-04-01", 120, tid="a")]  # prior year over; nothing this year
        result = evaluate(txns, {"CA": threshold(dollars=100, period=self.PERIOD)}, date(2026, 7, 19))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2025, 4, 1))
        self.assertEqual(ca.sales_cents, 120 * 100)  # prior-year figure drives

    def test_crossed_in_current_year_only(self):
        txns = [sale("2025-04-01", 40, tid="a"), sale("2026-05-01", 120, tid="b")]
        result = evaluate(txns, {"CA": threshold(dollars=100, period=self.PERIOD)}, date(2026, 7, 19))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2026, 5, 1))
        self.assertEqual(ca.sales_cents, 120 * 100)  # current-year figure drives

    def test_not_crossed_reports_current_year_progress(self):
        txns = [sale("2025-04-01", 40, tid="a"), sale("2026-05-01", 30, tid="b")]
        result = evaluate(txns, {"CA": threshold(dollars=100, period=self.PERIOD)}, date(2026, 7, 19))
        ca = only_state(result)
        self.assertFalse(ca.crossed)
        self.assertEqual(ca.sales_cents, 30 * 100)          # the live current year
        self.assertEqual(ca.dollar_remaining_cents, 70 * 100)

    def test_both_years_cross_reports_earliest(self):
        txns = [sale("2025-04-01", 150, tid="a"), sale("2026-05-01", 150, tid="b")]
        result = evaluate(txns, {"CA": threshold(dollars=100, period=self.PERIOD)}, date(2026, 7, 19))
        ca = only_state(result)
        self.assertTrue(ca.crossed)
        self.assertEqual(ca.effective_date, date(2025, 4, 1))  # prior year is earliest
        self.assertEqual(ca.sales_cents, 150 * 100)


class UnconfiguredStateTests(unittest.TestCase):
    def test_state_without_threshold_is_surfaced_not_judged(self):
        txns = [sale("2026-01-01", 500, state="WY", tid="w")]
        result = evaluate(txns, {}, date(2026, 12, 31))  # no WY config
        wy = only_state(result, "WY")
        self.assertFalse(wy.threshold_configured)
        self.assertIsNone(wy.crossed)          # cannot determine -> not "safe"
        self.assertEqual(wy.sales_cents, 500 * 100)
        self.assertIn(wy, result.unconfigured_states)


class MultiStateTests(unittest.TestCase):
    def test_only_the_evaluated_clients_rows_count(self):
        mine = sale("2026-01-01", 200, state="CA", tid="mine")
        other = Transaction(
            transaction_id="other", client_id="someone-else", date="2026-01-01",
            destination_state="CA", amount_cents=999_999_00, source="csv",
        )
        result = evaluate([mine, other], {"CA": threshold(dollars=100)}, date(2026, 12, 31))
        ca = only_state(result)
        self.assertEqual(ca.sales_cents, 200 * 100)  # the other client's row ignored
        self.assertEqual(result.crossings, [ca])


if __name__ == "__main__":
    unittest.main()
