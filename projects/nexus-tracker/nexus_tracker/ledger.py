"""The normalized transaction ledger -- the core data shape.

Every transaction from every source (Shopify, CSV, ...) becomes one row with the
same fields, no matter where it came from. This module defines those shapes only:

    - the `Transaction` and `Client` records (in-memory shapes), and
    - the SQL schema (as plain strings) for the `transactions` and `clients`
      tables, plus the schema version.

It does NOT open the database or read/write anything. Executing this schema and
all reads/writes happen in nexus_tracker/storage.py -- the single data-access
layer (Session 3). Keeping the shapes here and the access there is what lets us
swap SQLite for a hosted database later by changing one file.

See PROJECT_SPEC.md sections 2 and 4.

Decisions baked into these shapes (agreed in Session 0 review):
    - Money is stored as whole cents in an INTEGER column, never a float, so
      totals stay exact when compared against a state's dollar threshold.
    - A transaction is unique per (client_id, source, transaction_id), not by
      transaction_id alone -- ids from different sources or clients can collide.
    - A refund is its OWN row with is_refund = true and refunded_transaction_id
      pointing at the original sale's transaction_id. The engine nets them
      (Session 2). Refund amounts are stored as a positive magnitude; is_refund
      records the direction, so amount_cents is never negative.
    - Dates are stored as ISO 8601 text, "YYYY-MM-DD". Which timezone decides a
      sale's date is an import-time concern (Sessions 5-6), not a shape concern.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional


# Bumped whenever these table shapes change. storage.py stamps it into the
# database (via PRAGMA user_version) so a later session can migrate an existing
# shared file instead of forcing a rebuild.
SCHEMA_VERSION = 1


# --------------------------------------------------------------------------- #
# In-memory record shapes                                                     #
# --------------------------------------------------------------------------- #
# These are plain value objects. They are frozen because the ledger is meant to
# be append-only: you add corrections and refunds as new rows, you do not mutate
# past rows. Booleans here map to 0/1 integer columns in SQLite; that mapping is
# storage.py's job (Session 3).


@dataclass(frozen=True)
class Client:
    """A firm client whose sales we track."""

    client_id: str
    client_name: str
    # Per-client settings (e.g. the encrypted Shopify token) live here and are
    # persisted as a JSON string. Encryption itself is handled in Session 6;
    # this is only the shape that holds it.
    settings: Optional[dict] = None
    created_at: Optional[str] = None  # ISO 8601 timestamp, set when created


@dataclass(frozen=True)
class Transaction:
    """One normalized ledger row. Every importer produces these."""

    transaction_id: str            # unique per (client_id, source)
    client_id: str                 # which client this sale belongs to
    date: str                      # ISO 8601 date, "YYYY-MM-DD"
    destination_state: str         # two-letter US postal code, incl. "DC"
    amount_cents: int              # money in whole cents; non-negative magnitude
    source: str                    # "shopify", "csv", ...
    transaction_count: int = 1     # usually 1; some sources batch several
    marketplace_facilitated: bool = False  # tax collected by a marketplace (e.g. Amazon)?
    is_refund: bool = False        # true => this row reduces running totals
    refunded_transaction_id: Optional[str] = None  # original sale's id (refunds only)


# --------------------------------------------------------------------------- #
# SQL schema (strings only -- executed by storage.py in Session 3)            #
# --------------------------------------------------------------------------- #

CREATE_CLIENTS_TABLE = """
CREATE TABLE IF NOT EXISTS clients (
    client_id     TEXT PRIMARY KEY,
    client_name   TEXT NOT NULL,
    settings_json TEXT,            -- per-client settings as JSON (e.g. encrypted Shopify token)
    created_at    TEXT             -- ISO 8601 timestamp
);
"""

CREATE_TRANSACTIONS_TABLE = """
CREATE TABLE IF NOT EXISTS transactions (
    id                      INTEGER PRIMARY KEY AUTOINCREMENT,
    transaction_id          TEXT    NOT NULL,
    client_id               TEXT    NOT NULL,
    date                    TEXT    NOT NULL,              -- ISO 8601, "YYYY-MM-DD"
    destination_state       TEXT    NOT NULL,              -- two-letter US postal code
    amount_cents            INTEGER NOT NULL,              -- money in whole cents (never a float)
    transaction_count       INTEGER NOT NULL DEFAULT 1 CHECK (transaction_count >= 0),
    source                  TEXT    NOT NULL,              -- "shopify", "csv", ...
    marketplace_facilitated INTEGER NOT NULL DEFAULT 0 CHECK (marketplace_facilitated IN (0, 1)),
    is_refund               INTEGER NOT NULL DEFAULT 0 CHECK (is_refund IN (0, 1)),
    refunded_transaction_id TEXT,                          -- original sale's transaction_id (refunds only)
    FOREIGN KEY (client_id) REFERENCES clients (client_id),
    UNIQUE (client_id, source, transaction_id)
);
"""

# Speeds up the engine's per-client, per-state, date-range reads (Session 2).
CREATE_TRANSACTIONS_INDEX = """
CREATE INDEX IF NOT EXISTS idx_tx_client_state_date
    ON transactions (client_id, destination_state, date);
"""

# Execute in this order: clients before transactions (the foreign key depends on
# it), then indexes. storage.py runs these in Session 3.
SCHEMA_STATEMENTS = (
    CREATE_CLIENTS_TABLE,
    CREATE_TRANSACTIONS_TABLE,
    CREATE_TRANSACTIONS_INDEX,
)
