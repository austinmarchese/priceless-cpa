"""THE data-access layer. The ONLY module in the app that touches storage.

This is the most important boundary in the project (PROJECT_SPEC.md section 2).

    - Importers WRITE transactions into the ledger THROUGH this module.
    - The nexus engine READS transactions from the ledger THROUGH this module.
    - No other file imports sqlite3 or opens the database. Ever.

Today the ledger is a single shared SQLite file in the firm's synced cloud
folder. Later it may become a hosted database. Because every read and write goes
through here, that move is a change to THIS ONE FILE, not a rewrite.

If you find yourself writing storage code somewhere else, stop and reconsider.

Built in Session 3.
"""

# TODO(Session 3): implement the data-access layer over SQLite -- open/create the
# shared database file, apply ledger.SCHEMA_STATEMENTS, stamp ledger.SCHEMA_VERSION
# via PRAGMA user_version, turn on PRAGMA foreign_keys, and expose plain functions
# to add and read the ledger.Transaction / ledger.Client shapes. Write it so a
# future swap to a hosted database is a single-file change (keep the public
# functions stable and storage-agnostic in name and shape).
