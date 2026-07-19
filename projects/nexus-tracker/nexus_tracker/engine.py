"""The nexus engine. Reads from the ledger; reports EXPOSURE, never a conclusion.

For a given client it computes rolling per-state totals (dollars and transaction
counts) over each state's measurement period, compares them against that state's
threshold (via thresholds.py), and detects crossings with their effective dates.
It also reports how close a client is to thresholds not yet hit.

It reads transactions only through the data-access layer (storage.py) -- it never
touches the database itself. Its output is a set of exposure facts for a human to
review; it never decides that a client "has nexus" or must register.

Refunds (is_refund) reduce running totals, and marketplace-facilitated sales are
included or excluded per each state's `marketplace_counts` rule.

Built in Session 2, tested first against hand-made fake data with known answers.
"""

# TODO(Session 2): implement rolling per-client, per-state totals; threshold
# comparison; and crossing detection with effective dates. Test against
# hand-made fake data before any real data or UI exists.
