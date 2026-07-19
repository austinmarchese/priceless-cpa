"""The normalized transaction ledger -- the core data shape.

Every transaction from every source (Shopify, CSV, ...) becomes one row with the
same fields, no matter where it came from. This module defines those shapes only:
the transaction record and the `transactions` + `clients` table definitions.

It does NOT open the database or read/write anything. All actual storage goes
through nexus_tracker/storage.py (the single data-access layer). Keeping the
shapes here and the access there is what lets us swap SQLite for a hosted
database later without touching the rest of the app.

Fields on a ledger row (see PROJECT_SPEC.md section 4):
    transaction_id           unique ID (dedupe + refund matching)
    client_id                which client this sale belongs to
    date                     date of the sale
    destination_state        US state the sale was sourced/shipped to
    amount                   sale amount in US dollars
    transaction_count        usually 1 (some sources batch)
    source                   "shopify", "csv", ...
    marketplace_facilitated  was tax collected by a marketplace (e.g. Amazon)?
    is_refund                true/false, so refunds reduce running totals

Built in Session 1.
"""

# TODO(Session 1): define the Transaction record and the SQL schema for the
# `transactions` and `clients` tables. Shapes only -- no database logic.
