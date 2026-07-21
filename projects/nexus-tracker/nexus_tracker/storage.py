"""THE data-access layer. The ONLY module in the app that touches storage.

This is the most important boundary in the project (PROJECT_SPEC.md section 2).

    - Importers WRITE transactions into the ledger THROUGH this module.
    - The nexus engine READS transactions from the ledger THROUGH this module.
    - No other file imports sqlite3 or opens the database. Ever.
      (tests/test_architecture.py fails the build if that rule is broken.)

Today the ledger is a single shared SQLite file in the firm's synced cloud
folder. Later it may become a hosted database. Because every read and write goes
through the `Storage` class below, that move is a change to THIS ONE FILE: you
write a new class with the SAME public methods (add_client, get_client,
list_clients, update_client_settings, add_transactions,
get_transactions_for_client, count_transactions,
delete_transactions_for_client) backed by the new database, and nothing else in
the app changes.

The public methods speak in the ledger's own shapes (ledger.Client,
ledger.Transaction) and plain Python types. They never expose SQLite, cursors,
or rows, so callers cannot accidentally depend on the storage technology.

Synced-folder notes (the shared-file reality of PROJECT_SPEC.md section 3):
    - Foreign keys are enforced, and a 5-second busy timeout lets a second team
      member's write wait for a lock instead of failing instantly.
    - WAL journaling is deliberately NOT used: it does not work safely on
      cloud-synced / networked folders and can corrupt the file.
    - The polished "folder isn't available" experience and backups are Session 8;
      this layer already raises plain-English StorageError messages so that work
      has something friendly to surface.
"""

from __future__ import annotations

import json
import os
import sqlite3
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable, List, Optional

from . import ledger
from .ledger import Client, Transaction

IN_MEMORY = ":memory:"

# Columns selected when rebuilding a Transaction (the internal surrogate `id`
# is storage's own bookkeeping and never leaves this module).
_TXN_COLUMNS = (
    "transaction_id, client_id, date, destination_state, amount_cents, "
    "transaction_count, source, marketplace_facilitated, is_refund, "
    "refunded_transaction_id"
)
_CLIENT_COLUMNS = "client_id, client_name, settings_json, created_at"

# A transaction's identity is (client_id, source, transaction_id). These are the
# remaining fields -- its "payload". If a re-imported transaction has the same
# identity but different payload, that's a conflict, not a duplicate.
_PAYLOAD_FIELDS = (
    "date",
    "destination_state",
    "amount_cents",
    "transaction_count",
    "marketplace_facilitated",
    "is_refund",
    "refunded_transaction_id",
)


class StorageError(Exception):
    """A storage problem, described so a non-technical user knows what to do."""


@dataclass(frozen=True)
class TransactionConflict:
    """A re-imported transaction whose data differs from what's already stored.

    The stored row is left untouched. This is surfaced (not silently ignored,
    not silently overwritten) so a person can decide what to do -- the importer
    shows these in Session 5.
    """

    stored: Transaction
    incoming: Transaction

    @property
    def transaction_id(self) -> str:
        return self.incoming.transaction_id

    @property
    def source(self) -> str:
        return self.incoming.source

    @property
    def client_id(self) -> str:
        return self.incoming.client_id

    @property
    def changed_fields(self) -> tuple:
        """Which payload fields differ, for a plain-English 'what changed' report."""
        return tuple(
            field
            for field in _PAYLOAD_FIELDS
            if getattr(self.stored, field) != getattr(self.incoming, field)
        )


@dataclass(frozen=True)
class AddTransactionsResult:
    """Outcome of an import, split so nothing diverges silently."""

    inserted: int                            # genuinely new rows written
    unchanged: int                           # already present, identical -- left as-is
    conflicts: tuple                         # already present but DIFFERENT -- left as-is, flagged

    @property
    def total(self) -> int:
        return self.inserted + self.unchanged + len(self.conflicts)


class Storage:
    """The ledger, backed by SQLite. Open one, use it, close it (or use `with`)."""

    def __init__(self, db_path: Optional[str] = None):
        self.db_path = self._resolve_path(db_path)
        self._conn = self._connect()
        self._init_schema()

    # -- lifecycle --------------------------------------------------------- #

    def __enter__(self) -> "Storage":
        return self

    def __exit__(self, *_exc) -> None:
        self.close()

    def close(self) -> None:
        self._conn.close()

    # -- clients ----------------------------------------------------------- #

    def add_client(self, client: Client) -> None:
        """Add a new client. Raises if the client id is already in use."""
        if self.get_client(client.client_id) is not None:
            raise StorageError(
                f"A client with id '{client.client_id}' already exists. "
                "Pick a different id, or open the existing client instead."
            )
        created_at = client.created_at or _now_iso()
        settings_json = json.dumps(client.settings) if client.settings is not None else None
        with self._writing():
            self._conn.execute(
                "INSERT INTO clients (client_id, client_name, settings_json, created_at) "
                "VALUES (?, ?, ?, ?)",
                (client.client_id, client.client_name, settings_json, created_at),
            )

    def get_client(self, client_id: str) -> Optional[Client]:
        row = self._conn.execute(
            f"SELECT {_CLIENT_COLUMNS} FROM clients WHERE client_id = ?", (client_id,)
        ).fetchone()
        return _row_to_client(row) if row is not None else None

    def list_clients(self) -> List[Client]:
        rows = self._conn.execute(
            f"SELECT {_CLIENT_COLUMNS} FROM clients ORDER BY client_name"
        ).fetchall()
        return [_row_to_client(row) for row in rows]

    def update_client_settings(self, client_id: str, settings: dict) -> None:
        """Replace a client's stored settings (e.g. the encrypted Shopify token)."""
        if self.get_client(client_id) is None:
            raise StorageError(f"No client with id '{client_id}' to update.")
        with self._writing():
            self._conn.execute(
                "UPDATE clients SET settings_json = ? WHERE client_id = ?",
                (json.dumps(settings), client_id),
            )

    # -- transactions ------------------------------------------------------ #

    def add_transactions(self, transactions: Iterable[Transaction]) -> AddTransactionsResult:
        """Write transactions into the ledger, without ever diverging silently.

        Each incoming transaction is classified by its identity
        (client_id + source + transaction_id):

            - not present  -> inserted.
            - present, and every other field matches -> unchanged (a safe
              re-import; nothing to do).
            - present, but some field differs -> a conflict. The stored row is
              LEFT AS-IS and the difference is returned for review. We neither
              silently ignore the change (stale data) nor silently overwrite
              good data. The importer decides what to do with conflicts.

        This means a backfill can be re-run safely, while a genuine correction
        or a mis-mapped column is surfaced instead of quietly swallowed.
        """
        insert_sql = (
            "INSERT INTO transactions "
            "(transaction_id, client_id, date, destination_state, amount_cents, "
            "transaction_count, source, marketplace_facilitated, is_refund, "
            "refunded_transaction_id) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        )
        inserted = 0
        unchanged = 0
        conflicts: List[TransactionConflict] = []
        with self._writing():
            for txn in transactions:
                existing = self._get_transaction(txn.client_id, txn.source, txn.transaction_id)
                if existing is None:
                    self._conn.execute(insert_sql, _txn_to_params(txn))
                    inserted += 1
                elif _same_payload(existing, txn):
                    unchanged += 1
                else:
                    conflicts.append(TransactionConflict(stored=existing, incoming=txn))
        return AddTransactionsResult(
            inserted=inserted, unchanged=unchanged, conflicts=tuple(conflicts)
        )

    def _get_transaction(
        self, client_id: str, source: str, transaction_id: str
    ) -> Optional[Transaction]:
        row = self._conn.execute(
            f"SELECT {_TXN_COLUMNS} FROM transactions "
            "WHERE client_id = ? AND source = ? AND transaction_id = ?",
            (client_id, source, transaction_id),
        ).fetchone()
        return _row_to_txn(row) if row is not None else None

    def get_transactions_for_client(self, client_id: str) -> List[Transaction]:
        """Every ledger row for a client, oldest first. This is what the engine reads."""
        rows = self._conn.execute(
            f"SELECT {_TXN_COLUMNS} FROM transactions WHERE client_id = ? "
            "ORDER BY date, id",  # id tiebreaker => deterministic same-date order
            (client_id,),
        ).fetchall()
        return [_row_to_txn(row) for row in rows]

    def count_transactions(self, client_id: Optional[str] = None) -> int:
        if client_id is None:
            row = self._conn.execute("SELECT COUNT(*) FROM transactions").fetchone()
        else:
            row = self._conn.execute(
                "SELECT COUNT(*) FROM transactions WHERE client_id = ?", (client_id,)
            ).fetchone()
        return int(row[0])

    def delete_transactions_for_client(self, client_id: str) -> int:
        """Remove every transaction on file for a client. The client record itself
        is kept, so a corrected re-import can go straight back in.

        For recovering from a bad import (wrong column mapping, wrong marketplace
        flag) -- there is no way to selectively "fix" rows already on file, since
        add_transactions treats a changed value as a conflict rather than an
        overwrite. Clearing and re-importing clean is the supported path.

        Returns the number of rows removed.
        """
        if self.get_client(client_id) is None:
            raise StorageError(f"No client with id '{client_id}' to clear.")
        with self._writing():
            cur = self._conn.execute(
                "DELETE FROM transactions WHERE client_id = ?", (client_id,)
            )
            return cur.rowcount

    # -- internals --------------------------------------------------------- #

    def _resolve_path(self, db_path: Optional[str]) -> str:
        """Work out the database file path and make sure its folder is reachable.

        A caller-supplied path (or NEXUS_DB_PATH) must already exist -- if the
        folder is missing we assume the synced drive isn't available and say so,
        rather than silently creating a second, empty database somewhere local.
        Only the built-in default folder is created automatically.
        """
        auto_create = False
        if db_path is None:
            env = os.environ.get("NEXUS_DB_PATH")
            if env:
                db_path = env
            else:
                db_path = Path(__file__).resolve().parent.parent / "data" / "nexus.sqlite"
                auto_create = True

        db_path = str(db_path)
        if db_path == IN_MEMORY:
            return db_path

        parent = Path(db_path).parent
        if auto_create:
            parent.mkdir(parents=True, exist_ok=True)
        if not parent.exists():
            raise StorageError(
                "Can't reach the folder for the database:\n"
                f"  {parent}\n"
                "If the database is in a synced cloud folder (Google Drive, "
                "OneDrive, Dropbox), make sure that app is running and the folder "
                "has finished syncing, then try again."
            )
        return db_path

    def _connect(self) -> sqlite3.Connection:
        try:
            conn = sqlite3.connect(self.db_path)
        except sqlite3.OperationalError as exc:
            raise StorageError(
                f"Could not open the database file:\n  {self.db_path}\n"
                "Make sure the folder is available and you have permission to "
                "write there, then try again."
            ) from exc
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA foreign_keys = ON")
        conn.execute("PRAGMA busy_timeout = 5000")  # wait for another writer, don't fail instantly
        return conn

    def _init_schema(self) -> None:
        version = self._conn.execute("PRAGMA user_version").fetchone()[0]
        if version > ledger.SCHEMA_VERSION:
            raise StorageError(
                "This database was created by a newer version of the app "
                f"(layout v{version}, this app expects v{ledger.SCHEMA_VERSION}). "
                "Please update the app before opening it."
            )
        if 0 < version < ledger.SCHEMA_VERSION:
            # No older layouts exist yet; when they do, migration steps go here.
            raise StorageError(
                f"This database uses an older layout (v{version}) that this app "
                "version can't upgrade automatically yet."
            )
        with self._writing():
            for statement in ledger.SCHEMA_STATEMENTS:
                self._conn.execute(statement)
            # PRAGMA can't be parameterized; SCHEMA_VERSION is our own integer.
            self._conn.execute(f"PRAGMA user_version = {int(ledger.SCHEMA_VERSION)}")

    def _writing(self):
        """Context manager: commit on success, roll back and explain on failure."""
        return _WriteTransaction(self._conn)


class _WriteTransaction:
    def __init__(self, conn: sqlite3.Connection):
        self._conn = conn

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc, _tb):
        if exc_type is None:
            self._conn.commit()
            return False
        self._conn.rollback()
        if isinstance(exc, sqlite3.IntegrityError):
            detail = str(exc)
            if "FOREIGN KEY" in detail:
                message = (
                    "That write is for a client that doesn't exist yet. Add the "
                    "client first, then import its transactions."
                )
            elif "UNIQUE" in detail:
                message = "That record already exists."
            else:
                message = "That write breaks a ledger rule: " + detail + "."
            raise StorageError(message) from exc
        if isinstance(exc, sqlite3.OperationalError):
            raise StorageError(
                "The database couldn't complete the write: " + str(exc) + ".\n"
                "If someone else is using the shared file, wait a moment and try "
                "again."
            ) from exc
        return False  # re-raise anything else unchanged


# --------------------------------------------------------------------------- #
# Row <-> dataclass mapping (booleans are 0/1 in SQLite; settings are JSON)    #
# --------------------------------------------------------------------------- #

def _txn_to_params(txn: Transaction) -> tuple:
    return (
        txn.transaction_id,
        txn.client_id,
        txn.date,
        txn.destination_state,
        txn.amount_cents,
        txn.transaction_count,
        txn.source,
        1 if txn.marketplace_facilitated else 0,
        1 if txn.is_refund else 0,
        txn.refunded_transaction_id,
    )


def _row_to_txn(row: sqlite3.Row) -> Transaction:
    return Transaction(
        transaction_id=row["transaction_id"],
        client_id=row["client_id"],
        date=row["date"],
        destination_state=row["destination_state"],
        amount_cents=row["amount_cents"],
        source=row["source"],
        transaction_count=row["transaction_count"],
        marketplace_facilitated=bool(row["marketplace_facilitated"]),
        is_refund=bool(row["is_refund"]),
        refunded_transaction_id=row["refunded_transaction_id"],
    )


def _same_payload(a: Transaction, b: Transaction) -> bool:
    """True if two transactions with the same identity carry identical data."""
    return all(getattr(a, field) == getattr(b, field) for field in _PAYLOAD_FIELDS)


def _row_to_client(row: sqlite3.Row) -> Client:
    settings_json = row["settings_json"]
    return Client(
        client_id=row["client_id"],
        client_name=row["client_name"],
        settings=json.loads(settings_json) if settings_json else None,
        created_at=row["created_at"],
    )


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")
