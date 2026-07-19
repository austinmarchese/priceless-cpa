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
| 3 | Data-access layer over SQLite |
| 4 | Web UI shell (select/add client, home view) |
| 5 | CSV importer with column mapping |
| 6 | Native Shopify connection |
| 7 | Exposure dashboard |
| 8 | Make it usable by non-technical staff |

---

## Status

**Session 2 complete: the nexus engine works (against fake data).**

- `nexus_tracker/ledger.py` — the `Transaction` and `Client` record shapes plus
  the SQL schema for the `transactions` and `clients` tables (money in cents,
  composite uniqueness, refund-references-original, schema version).
- `nexus_tracker/thresholds.py` — loads and validates
  `config/state_thresholds.json` into typed `StateThreshold` objects, with
  plain-English errors on a malformed file.
- `nexus_tracker/engine.py` — a **pure function** over a sequence of
  `Transaction` records: rolling per-state totals, threshold comparison for all
  four logics, and crossing detection with effective dates. It never touches
  storage (that arrives in Session 3) and never concludes "has nexus" — it
  reports exposure facts. The measurement and refund/marketplace semantics are
  documented at the top of the file.
- `tests/` — shape checks plus 13 engine tests with hand-computed answers. Run
  from the project root with `python3 -m unittest`.

No storage access or UI yet. `storage.py`, the importers, and the web modules
are still placeholders that name the session that builds them. How to run the
app will be documented once the web shell exists (Session 4).
