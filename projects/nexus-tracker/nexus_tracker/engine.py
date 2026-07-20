"""The nexus engine. Reads from the ledger; reports EXPOSURE, never a conclusion.

Given a client's normalized transactions and the state threshold config, this
computes, per state:

    - the rolling total dollars and transaction count over the state's
      measurement period,
    - whether the client has crossed that state's threshold, and
    - the effective date the crossing first happened,
    - and (for states not yet crossed) how far they still are from the threshold.

It returns exposure facts for a human at the firm to review. It never decides
that a client "has nexus" or must register (PROJECT_SPEC.md section 1).

Architecture (PROJECT_SPEC.md section 2): the engine reads the ledger as a plain
sequence of `Transaction` records passed IN to it. It does NOT import storage,
sqlite3, or any data source. In Session 3 the data-access layer will fetch the
rows and hand them here; in the Session 2 tests the fake rows are handed in
directly. Either way the engine is the same pure function.

------------------------------------------------------------------------------
Semantics (the interpretive choices, spelled out so they are reviewable)
------------------------------------------------------------------------------
Everything is evaluated "as of" a date the caller passes in (today, in the real
app). Nothing here reads the system clock, which keeps it testable.

Measurement windows, given the as-of date:
    - current_calendar_year : Jan 1 of the as-of year ... the as-of date.
    - prior_calendar_year   : Jan 1 ... Dec 31 of the year before the as-of year.
    - trailing_12_months    : the 12 months ending on the as-of date, i.e. dates
      strictly after (as-of minus one year) and up to and including the as-of
      date.

Refunds: a refund row reduces the DOLLAR total by its amount (net revenue). It
does NOT reduce the transaction COUNT, because a sale still happened; a later
refund doesn't un-count it, and this avoids paradoxes with partial refunds.
(Flagged for confirmation -- easy to change in one place if the firm prefers
net counts.)

Marketplace: if a state's `marketplace_counts` is false, transactions marked
`marketplace_facilitated` are excluded from that state's totals entirely.

Crossing / effective date: we scan the client's history under the period's rule
and report the EARLIEST date the totals first met the threshold. `crossed` means
"met the threshold at some point within the measured scope" -- once crossed, it
stays flagged even if later refunds or roll-off push the current total back
below. That is the conservative, exposure-surfacing reading. (Also flagged.)

A state the client sold into but that has NO threshold configured is reported
with crossed = None (cannot determine) so it is surfaced for review rather than
silently treated as safe.
"""

from __future__ import annotations

from collections import namedtuple
from dataclasses import dataclass
from datetime import date
from typing import Iterable, List, Optional, Tuple

from .ledger import Transaction
from .thresholds import StateThreshold


@dataclass(frozen=True)
class StateExposure:
    """Exposure facts for one client in one state."""

    state: str
    threshold_configured: bool

    # How the totals were measured (None when no threshold is configured).
    measurement_period: Optional[str]
    window_start: Optional[date]
    window_end: date
    marketplace_counts: Optional[bool]
    threshold_logic: Optional[str]

    # The measured totals over the window (net of refunds; marketplace filtered).
    # Dollars are in whole cents, matching the ledger.
    sales_cents: int
    transaction_count: int

    # The thresholds this was compared against (dollars converted to cents).
    dollar_threshold_cents: Optional[int]
    transaction_threshold: Optional[int]

    # Results. crossed is None when no threshold is configured.
    crossed: Optional[bool]
    effective_date: Optional[date]

    # How much more would be needed to cross (only when not yet crossed).
    dollar_remaining_cents: Optional[int]
    transaction_remaining: Optional[int]


@dataclass(frozen=True)
class ClientExposure:
    """All per-state exposure for one client, as of a date."""

    client_id: str
    as_of: date
    states: Tuple[StateExposure, ...]

    @property
    def crossings(self) -> List[StateExposure]:
        """States the client has crossed the threshold in."""
        return [s for s in self.states if s.crossed]

    @property
    def unconfigured_states(self) -> List[StateExposure]:
        """States with sales but no threshold configured -- need firm attention."""
        return [s for s in self.states if not s.threshold_configured]


# --------------------------------------------------------------------------- #
# Public entry point                                                          #
# --------------------------------------------------------------------------- #

def evaluate_client(
    transactions: Iterable[Transaction],
    thresholds_by_state: dict,
    as_of: date,
    client_id: str,
) -> ClientExposure:
    """Evaluate one client's exposure across every state they sold into.

    transactions        -- ledger rows (may include other clients; filtered here)
    thresholds_by_state  -- {state code: StateThreshold}, from thresholds.load_thresholds
    as_of               -- the date to measure as of (the caller supplies today)
    client_id           -- which client to evaluate
    """
    thresholds_by_state = {str(k).upper(): v for k, v in thresholds_by_state.items()}

    by_state: dict = {}
    for txn in transactions:
        if txn.client_id != client_id:
            continue
        state = txn.destination_state.strip().upper()
        by_state.setdefault(state, []).append(txn)

    states: List[StateExposure] = []
    for state in sorted(by_state):
        txns = by_state[state]
        threshold = thresholds_by_state.get(state)
        if threshold is None:
            states.append(_evaluate_unconfigured_state(state, txns, as_of))
        else:
            states.append(_evaluate_configured_state(state, threshold, txns, as_of))

    return ClientExposure(client_id=client_id, as_of=as_of, states=tuple(states))


# --------------------------------------------------------------------------- #
# Per-state evaluation                                                        #
# --------------------------------------------------------------------------- #

def _evaluate_configured_state(
    state: str, threshold: StateThreshold, txns: List[Transaction], as_of: date
) -> StateExposure:
    # Marketplace filter + parse dates + drop anything after the as-of date.
    dated = _dated(
        (t for t in txns if threshold.marketplace_counts or not t.marketplace_facilitated),
        as_of,
    )
    dollar_threshold_cents = (
        threshold.dollar_threshold * 100 if threshold.dollar_threshold is not None else None
    )
    logic = threshold.threshold_logic
    txn_threshold = threshold.transaction_threshold
    period = threshold.measurement_period

    if period == "trailing_12_months":
        # Rolling 12-month window; a crossing can pre-date the current window, so
        # the scan slides across the client's whole history.
        window_start, window_end = _window_bounds(period, as_of)
        in_window = [(d, t) for (d, t) in dated if _in_window(period, d, as_of)]
        sales_cents = sum(_signed_amount(t) for (_d, t) in in_window)
        transaction_count = sum(t.transaction_count for (_d, t) in in_window if not t.is_refund)
        effective_date = _first_crossing_trailing(dated, logic, dollar_threshold_cents, txn_threshold)

    elif period == "current_or_prior_calendar_year":
        # Nexus if EITHER calendar year crossed. Report the year that drives the
        # result: the prior year when it crossed (its crossing is the earliest),
        # otherwise the current (live) year.
        cur_start, cur_end = date(as_of.year, 1, 1), as_of
        pri_start, pri_end = date(as_of.year - 1, 1, 1), date(as_of.year - 1, 12, 31)
        current = _measure_window(dated, cur_start, cur_end, logic, dollar_threshold_cents, txn_threshold)
        prior = _measure_window(dated, pri_start, pri_end, logic, dollar_threshold_cents, txn_threshold)
        if prior.effective_date is not None:
            effective_date = prior.effective_date
            sales_cents, transaction_count = prior.sales_cents, prior.transaction_count
            window_start, window_end = pri_start, pri_end
        else:
            effective_date = current.effective_date
            sales_cents, transaction_count = current.sales_cents, current.transaction_count
            window_start, window_end = cur_start, cur_end

    else:  # prior_calendar_year or current_calendar_year -- a single fixed window
        window_start, window_end = _window_bounds(period, as_of)
        in_window = [(d, t) for (d, t) in dated if _in_window(period, d, as_of)]
        sales_cents = sum(_signed_amount(t) for (_d, t) in in_window)
        transaction_count = sum(t.transaction_count for (_d, t) in in_window if not t.is_refund)
        effective_date = _first_crossing_cumulative(in_window, logic, dollar_threshold_cents, txn_threshold)

    crossed = effective_date is not None

    dollar_remaining_cents = None
    transaction_remaining = None
    if not crossed:
        if dollar_threshold_cents is not None:
            dollar_remaining_cents = max(0, dollar_threshold_cents - sales_cents)
        if threshold.transaction_threshold is not None:
            transaction_remaining = max(0, threshold.transaction_threshold - transaction_count)

    return StateExposure(
        state=state,
        threshold_configured=True,
        measurement_period=threshold.measurement_period,
        window_start=window_start,
        window_end=window_end,
        marketplace_counts=threshold.marketplace_counts,
        threshold_logic=threshold.threshold_logic,
        sales_cents=sales_cents,
        transaction_count=transaction_count,
        dollar_threshold_cents=dollar_threshold_cents,
        transaction_threshold=threshold.transaction_threshold,
        crossed=crossed,
        effective_date=effective_date,
        dollar_remaining_cents=dollar_remaining_cents,
        transaction_remaining=transaction_remaining,
    )


def _evaluate_unconfigured_state(
    state: str, txns: List[Transaction], as_of: date
) -> StateExposure:
    # No threshold, so no measurement period and no marketplace rule to apply.
    # Report the client's total standing so the missing config is visible.
    dated = _dated(txns, as_of)
    sales_cents = sum(_signed_amount(t) for (_d, t) in dated)
    transaction_count = sum(t.transaction_count for (_d, t) in dated if not t.is_refund)

    return StateExposure(
        state=state,
        threshold_configured=False,
        measurement_period=None,
        window_start=dated[0][0] if dated else None,
        window_end=as_of,
        marketplace_counts=None,
        threshold_logic=None,
        sales_cents=sales_cents,
        transaction_count=transaction_count,
        dollar_threshold_cents=None,
        transaction_threshold=None,
        crossed=None,
        effective_date=None,
        dollar_remaining_cents=None,
        transaction_remaining=None,
    )


# --------------------------------------------------------------------------- #
# Crossing detection                                                          #
# --------------------------------------------------------------------------- #

_WindowResult = namedtuple("_WindowResult", "sales_cents transaction_count effective_date")


def _measure_window(dated, start, end, logic, dollar_threshold_cents, transaction_threshold):
    """Totals and first-crossing date over one fixed calendar window [start, end]."""
    in_window = [(d, t) for (d, t) in dated if start <= d <= end]
    sales_cents = sum(_signed_amount(t) for (_d, t) in in_window)
    transaction_count = sum(t.transaction_count for (_d, t) in in_window if not t.is_refund)
    effective_date = _first_crossing_cumulative(
        in_window, logic, dollar_threshold_cents, transaction_threshold
    )
    return _WindowResult(sales_cents, transaction_count, effective_date)


def _first_crossing_cumulative(
    window_dated: List[Tuple[date, Transaction]],
    logic: str,
    dollar_threshold_cents: Optional[int],
    transaction_threshold: Optional[int],
) -> Optional[date]:
    """First date the cumulative totals meet the threshold (calendar periods)."""
    run_dollars = 0
    run_count = 0
    for d, txn in window_dated:  # _dated returns them already sorted by date
        run_dollars += _signed_amount(txn)
        if not txn.is_refund:
            run_count += txn.transaction_count
        if _logic_met(logic, run_dollars, run_count, dollar_threshold_cents, transaction_threshold):
            return d
    return None


def _first_crossing_trailing(
    dated: List[Tuple[date, Transaction]],
    logic: str,
    dollar_threshold_cents: Optional[int],
    transaction_threshold: Optional[int],
) -> Optional[date]:
    """First date a trailing-12-month window meets the threshold.

    Slides a window across the client's whole history. For each transaction date
    D (the window's right edge), the window is (D minus one year, D].
    """
    left = 0
    run_dollars = 0
    run_count = 0
    for right in range(len(dated)):
        d_right, txn_right = dated[right]
        run_dollars += _signed_amount(txn_right)
        if not txn_right.is_refund:
            run_count += txn_right.transaction_count

        boundary = _subtract_one_year(d_right)  # window is (boundary, d_right]
        while left <= right and dated[left][0] <= boundary:
            d_left, txn_left = dated[left]
            run_dollars -= _signed_amount(txn_left)
            if not txn_left.is_refund:
                run_count -= txn_left.transaction_count
            left += 1

        if _logic_met(logic, run_dollars, run_count, dollar_threshold_cents, transaction_threshold):
            return d_right
    return None


def _logic_met(
    logic: str,
    run_dollars: int,
    run_count: int,
    dollar_threshold_cents: Optional[int],
    transaction_threshold: Optional[int],
) -> bool:
    dollar_ok = dollar_threshold_cents is not None and run_dollars >= dollar_threshold_cents
    count_ok = transaction_threshold is not None and run_count >= transaction_threshold
    if logic == "dollar_only":
        return dollar_ok
    if logic == "transaction_only":
        return count_ok
    if logic == "and":
        return dollar_ok and count_ok
    if logic == "either":
        return dollar_ok or count_ok
    raise ValueError(f"Unknown threshold_logic: {logic!r}")  # config validation should prevent this


# --------------------------------------------------------------------------- #
# Small date / amount helpers                                                 #
# --------------------------------------------------------------------------- #

def _signed_amount(txn: Transaction) -> int:
    """A refund's amount reduces the dollar total; a sale adds to it."""
    return -txn.amount_cents if txn.is_refund else txn.amount_cents


def _dated(txns: Iterable[Transaction], as_of: date) -> List[Tuple[date, Transaction]]:
    """Pair each transaction with its parsed date, drop future dates, sort by date."""
    dated: List[Tuple[date, Transaction]] = []
    for txn in txns:
        d = _parse_date(txn)
        if d <= as_of:
            dated.append((d, txn))
    dated.sort(key=lambda pair: pair[0])
    return dated


def _parse_date(txn: Transaction) -> date:
    try:
        return date.fromisoformat(txn.date)
    except ValueError as exc:
        raise ValueError(
            f"Transaction {txn.transaction_id!r} has an unreadable date "
            f"{txn.date!r}; expected YYYY-MM-DD."
        ) from exc


def _subtract_one_year(d: date) -> date:
    try:
        return d.replace(year=d.year - 1)
    except ValueError:  # Feb 29 in a leap year -> Feb 28
        return d.replace(year=d.year - 1, day=28)


def _window_bounds(period: str, as_of: date) -> Tuple[date, date]:
    if period == "current_calendar_year":
        return date(as_of.year, 1, 1), as_of
    if period == "prior_calendar_year":
        return date(as_of.year - 1, 1, 1), date(as_of.year - 1, 12, 31)
    if period == "trailing_12_months":
        return _subtract_one_year(as_of), as_of
    raise ValueError(f"Unknown measurement_period: {period!r}")


def _in_window(period: str, d: date, as_of: date) -> bool:
    start, end = _window_bounds(period, as_of)
    if period == "trailing_12_months":
        return start < d <= end  # (start, end], excludes the anniversary day
    return start <= d <= end
