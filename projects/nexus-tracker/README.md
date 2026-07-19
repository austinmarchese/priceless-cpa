# Sales Tax Nexus Tracker

An internal tool for Priceless CPA to track **economic sales tax nexus exposure**
for e-commerce clients.

For each client it tracks how much they have sold into each US state and compares
that against each state's economic nexus threshold. When a client crosses a
state's threshold, the tool **flags it for a human to review**.

> The tool reports EXPOSURE. It does not conclude that a client "has nexus" or
> must register. A person at the firm makes that determination.

The full source of truth for this project is [PROJECT_SPEC.md](PROJECT_SPEC.md).
Read it before changing anything.

---

## The one rule that shapes everything

Everything reads from a **single normalized transaction ledger**, and **all
storage goes through one data-access layer** (`nexus_tracker/storage.py`).

- Data sources (Shopify, CSV) **write into** the ledger.
- The nexus engine **reads from** the ledger.
- Nothing else in the app touches storage directly.

This is what lets us move from a shared SQLite file today to a hosted database
later by changing **one file** instead of rewriting the app. If you find yourself
writing storage code anywhere other than `storage.py`, stop (see PROJECT_SPEC.md
section 2).

---

## Project structure

```
nexus-tracker/
├── PROJECT_SPEC.md              Source of truth. Read first.
├── README.md                    This file.
├── requirements.txt             Python dependencies (kept minimal).
├── .gitignore                   Keeps client data + secrets out of git.
├── config/
│   ├── state_thresholds.json          The firm's threshold rules (real values go here).
│   └── state_thresholds.example.json  A worked example showing the shape.
├── nexus_tracker/               The Python package.
│   ├── ledger.py                Ledger + clients data shapes (Session 1).
│   ├── storage.py               THE data-access layer — only file touching storage (Session 3).
│   ├── thresholds.py            Reads and applies the threshold config (Sessions 1-2).
│   ├── engine.py                Nexus engine: rolling totals, crossings (Session 2).
│   ├── importers/
│   │   ├── csv_importer.py      CSV import with column mapping (Session 5).
│   │   └── shopify.py           Native Shopify connection (Session 6).
│   └── web/
│       └── app.py               Local web app the user opens in a browser (Sessions 4 & 7).
└── tests/                       Tests (engine tests start in Session 2).
```

---

## The threshold config

`config/state_thresholds.json` holds the firm's real IP: one entry per state.
It is a plain JSON file so it can be edited a few times a year **without touching
the code**. See `config/state_thresholds.example.json` for the shape. Each entry:

| Field                  | Meaning                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `dollar_threshold`     | e.g. `100000`                                                           |
| `transaction_threshold`| e.g. `200`, or `null` if the state has none                             |
| `threshold_logic`      | `"dollar_only"`, `"transaction_only"`, `"and"`, or `"either"`           |
| `measurement_period`   | `"prior_calendar_year"`, `"current_calendar_year"`, `"trailing_12_months"` |
| `marketplace_counts`   | `true`/`false` — do marketplace-facilitated sales count here?           |

Anthony supplies the real values; the code reads and applies whatever is here.

---

## Build order

One session per phase, in order (PROJECT_SPEC.md section 6). We review and commit
after each. **Do not build multiple phases at once.**

| Session | Phase |
|---------|-------|
| 0 | Scaffold + commit the spec **(done)** |
| 1 | SQLite ledger + clients tables, threshold JSON structure **(done)** |
| 2 | Nexus engine, tested against hand-made fake data **(done)** |
| 3 | Data-access layer over SQLite **(done)** |
| 4 | Web UI shell (select/add client, home view) **(done)** |
| 5 | CSV importer with column mapping |
| 6 | Native Shopify connection |
| 7 | Exposure dashboard |
| 8 | Make it usable by non-technical staff |

---

## Running it (local, for now)

The app is a small local website you open in your browser. It uses Flask, so it
needs a one-time setup in a project-local virtual environment:

```
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

To try it with sample data:

```
.venv/bin/python -m nexus_tracker.sample_data     # loads two "(sample)" clients
.venv/bin/python -m nexus_tracker.web.app         # then open http://127.0.0.1:5000
```

Run the tests with:

```
.venv/bin/python -m unittest
```

A friendlier one-click launcher (and pointing it at the firm's synced folder)
comes in Session 8.

---

## Status

**Session 4 complete: the web shell runs.**

- `nexus_tracker/ledger.py` — the `Transaction` and `Client` record shapes plus
  the SQL schema (money in cents, composite uniqueness, refund-references-original,
  schema version).
- `nexus_tracker/thresholds.py` — loads and validates
  `config/state_thresholds.json` into typed `StateThreshold` objects.
- `nexus_tracker/engine.py` — a **pure function** over a sequence of
  `Transaction` records: rolling totals, threshold comparison, crossing
  detection. Reports exposure facts; never touches storage; never concludes
  "has nexus".
- `nexus_tracker/storage.py` — the **single data-access layer**. A `Storage`
  class over SQLite that speaks only in ledger shapes (add/get/list clients, add
  and read transactions). Re-import is **conflict-aware**: an incoming
  transaction is classified as new (inserted), identical (unchanged), or a
  conflict — already present but with different data, which is left untouched and
  flagged for review rather than silently ignored or silently overwritten.
  Enforces foreign keys, waits on a busy lock, avoids WAL on synced drives,
  stamps the schema version, and raises plain-English `StorageError`s
  (unreachable folder, missing client, locked file). Swapping to a hosted
  database means rewriting this one class with the same methods.
- `nexus_tracker/web/` — a **Flask** app (the UI shell). A home page that lists
  clients and adds one (you type a business name; it makes the id for you), and a
  per-client home view showing sales-on-file counts and the actions still to
  come (import, Shopify, exposure — each marked "Coming soon"). It reads and
  writes only through `storage.py`, binds to `127.0.0.1`, and shows friendly
  pages for a missing client or an unreachable database instead of a stack trace.
- `nexus_tracker/sample_data.py` — seeds two "(sample)" clients so the shell has
  something to show before real importing exists.
- `tests/` — shapes, engine, storage + engine integration, the sqlite boundary
  check, and web-shell tests via Flask's test client. **44 tests**, run with
  `.venv/bin/python -m unittest`.

No importers yet — the ledger is filled only by tests and the sample seeder. The
importers (`csv_importer.py`, `shopify.py`) are still placeholders that name the
session that builds them, and the client-page actions point at them as "Coming
soon".

The database path defaults to `data/nexus.sqlite` (gitignored) locally, or the
`NEXUS_DB_PATH` environment variable if set. Wiring the real synced-folder path
into a friendly setup flow is Session 8.
