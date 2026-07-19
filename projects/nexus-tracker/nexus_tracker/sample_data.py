"""Sample data, so you can try the app before real importing exists.

This seeds a couple of clearly-labeled "(sample)" clients with some made-up
sales into a handful of states, so the Session 4 web shell has something to
show. It is NOT production data and is safe to delete.

Run it from the project root, against your local development database:

    .venv/bin/python -m nexus_tracker.sample_data

It writes to the default database (data/nexus.sqlite, which is gitignored) or to
NEXUS_DB_PATH if that is set. Re-running is safe: existing sample clients are
left alone and duplicate transactions are skipped.
"""

from __future__ import annotations

from typing import List

from .ledger import Client, Transaction
from .storage import Storage

_SAMPLE_CLIENTS = [
    ("sample-acme", "Acme Outdoors (sample)"),
    ("sample-riverbend", "Riverbend Goods (sample)"),
]


def _txn(client_id, tid, day, state, dollars, marketplace=False, is_refund=False,
         refunded=None):
    return Transaction(
        transaction_id=tid,
        client_id=client_id,
        date=day,
        destination_state=state,
        amount_cents=dollars * 100,
        source="csv",
        marketplace_facilitated=marketplace,
        is_refund=is_refund,
        refunded_transaction_id=refunded,
    )


def _sample_transactions() -> List[Transaction]:
    acme = "sample-acme"
    river = "sample-riverbend"
    return [
        _txn(acme, "a1", "2025-11-02", "CA", 42_000),
        _txn(acme, "a2", "2026-01-14", "CA", 38_000, marketplace=True),
        _txn(acme, "a3", "2026-02-20", "NY", 21_500),
        _txn(acme, "a4", "2026-03-08", "TX", 12_750),
        _txn(acme, "a5", "2026-04-19", "CA", 9_900),
        _txn(acme, "a6", "2026-05-01", "NY", 4_100, is_refund=True, refunded="a3"),
        _txn(river, "r1", "2026-01-05", "WA", 6_200),
        _txn(river, "r2", "2026-02-11", "OR", 3_400),
        _txn(river, "r3", "2026-03-30", "WA", 8_800),
    ]


def seed(store: Storage) -> None:
    for client_id, name in _SAMPLE_CLIENTS:
        if store.get_client(client_id) is None:
            store.add_client(Client(client_id=client_id, client_name=name))
    store.add_transactions(_sample_transactions())


def main() -> None:
    store = Storage()
    try:
        seed(store)
        print(f"Seeded sample data into {store.db_path}")
        print("Start the app with:  .venv/bin/python -m nexus_tracker.web.app")
    finally:
        store.close()


if __name__ == "__main__":
    main()
