# PROJECT_SPEC.md — Sales Tax Nexus Tracker

This document is the source of truth for the project. Read it fully at the
start of every session before writing any code. Do not deviate from the
architecture principle below without flagging it to me first.

---

## 1. What this project is

An internal tool for a CPA firm (Priceless CPA Tax & Accounting) to track
economic sales tax nexus for e-commerce clients.

For each client, the tool tracks how much they have sold into each US state
and compares that against each state's economic nexus threshold. When a client
crosses a state's threshold, the tool flags it so the firm can review it.

The tool reports EXPOSURE. It does not conclude that a client "has nexus" or
must register. A human at the firm makes that determination.

The users are accountants, not software professionals. Everything they touch
must be simple, plainly labeled, and forgiving of mistakes.

---

## 2. The one architecture principle (most important thing in this doc)

Everything reads from a single normalized transaction ledger. Nothing else in
the app knows where data came from or where it is stored.

- Data sources (Shopify, CSV imports) WRITE INTO the ledger.
- The nexus engine READS FROM the ledger.
- All storage (reading/writing the ledger) goes through ONE data-access layer.
  No other part of the app touches storage directly.

Why this matters: today the data lives in a shared SQLite database file in the
firm's synced cloud folder (multiple team members, no server). Later it may move
to a hosted database so the team logs in through a browser. Because everything
goes through the data-access layer, that future move is a change to ONE file,
not a rewrite.

If you ever find yourself writing storage code outside the data-access layer, or
reading a data source's raw shape outside its importer, stop and reconsider.

---

## 3. The stack

- Backend and all logic: Python.
- Storage now: a single shared SQLite database file, intended to live in the
  firm's synced cloud folder (Google Drive / OneDrive / Dropbox).
- Interface: a simple local web app the user opens in a browser (select a
  client, import data or sync Shopify, view the exposure dashboard).
- Version control: git, from the first commit.

Keep dependencies minimal and mainstream. Prefer legibility over cleverness;
I may read this code myself.

---

## 4. The normalized transaction ledger (the core data shape)

Every transaction from every source becomes one row with these fields:

- `transaction_id`  — unique ID (used to avoid duplicates and to match refunds)
- `client_id`       — which client this sale belongs to
- `date`            — date of the sale
- `destination_state` — the US state the sale shipped/was sourced to
- `amount`          — sale amount in US dollars
- `transaction_count` — usually 1 (some sources may batch)
- `source`          — where it came from: "shopify", "csv", etc.
- `marketplace_facilitated` — true/false: was tax collected by a marketplace
  facilitator (e.g. Amazon)? This flag changes whether the sale counts toward
  a state's economic threshold, so it must survive import intact.
- `is_refund`       — true/false, so refunds can reduce running totals

There is also a simple `clients` table: `client_id`, `client_name`, and any
per-client settings (e.g. stored Shopify credentials, encrypted).

---

## 5. The state threshold config (the firm's real IP)

A standalone, human-editable JSON file. NOT logic buried in code — it changes a
few times a year and must be editable without touching the app.

One entry per state, each with:

- `dollar_threshold`        — e.g. 100000
- `transaction_threshold`   — e.g. 200 (or null if the state has none)
- `threshold_logic`         — how the two combine: "dollar_only",
  "transaction_only", "and", or "either"
- `measurement_period`      — which window the totals are measured over:
  "current_or_prior_calendar_year", "prior_calendar_year", "current_calendar_year",
  or "trailing_12_months". ("current_or_prior_calendar_year" — nexus if EITHER
  the current or the prior calendar year crosses — is the most common real-world
  rule and was added during threshold population; the engine evaluates both
  year-windows and flags a crossing in either.)
- `marketplace_counts`      — true/false: do marketplace-facilitated sales count
  toward this state's threshold?

I (Anthony) will supply the actual threshold values. Build the structure that
reads and applies them.

---

## 6. Build order (one session per phase)

Do these in order. Each phase is its own session. After each, we review, commit,
and move on. Do not attempt multiple phases at once.

- **Session 0** — Scaffold the project and commit this spec. Create the empty
  project structure that matches this document.
- **Session 1** — Build the SQLite ledger + clients tables, and the state
  threshold JSON config structure. No app logic yet, just the shapes.
- **Session 2** — Build the nexus engine (rolling per-client, per-state totals;
  threshold comparison; crossing detection with effective dates). Test it only
  against hand-made fake data with known answers. No UI, no real data yet.
- **Session 3** — Build the data-access layer over SQLite. Enforce that nothing
  else touches storage. Write it so a future swap to a hosted database is a
  single-file change.
- **Session 4** — Build the web UI shell: select or add a client, and a home
  view. Plain labels, obvious buttons, no jargon. Wire it to the fake data.
- **Session 5** — Build the CSV importer with column mapping (user picks which
  column is state, amount, date; flags marketplace-facilitated) and a clear,
  plain-English report of any rows it couldn't read. Comes before Shopify
  because it gives Amazon/Woo/Stripe/QBO coverage via their exports.
- **Session 6** — Build the native Shopify connection: per-store custom app
  token stored encrypted; pull orders with destination and amount; backfill
  the trailing 12+ months; map into the ledger. Handle a bad/expired token with
  a plain message telling the user what to do.
- **Session 7** — Build the exposure dashboard: per client, state-by-state
  exposure, crossings with dates, and how close they are to thresholds not yet
  hit. Framed as exposure facts, never an auto-conclusion of nexus.
- **Session 8** — Make it usable by non-technical staff: a single-click way to
  start the app and open the browser; graceful behavior when the synced folder
  isn't available; friendly errors everywhere.

---

## 7. Deferred — DO NOT build these in v1

Flag them if relevant, but do not build them unless I say so:

- Physical nexus (inventory locations, employees, affiliates) — judgment-heavy;
  surface for human review only, do not automate.
- Any automatic conclusion that a client "has nexus" or "must register."
- Native Amazon (SP-API), WooCommerce, or Stripe integrations — handled via CSV
  import for now.
- Shopify OAuth app flow — using per-store custom app tokens instead.
- Hosted deployment, user login/authentication, multi-tenant server.
- Actual tax filing or remittance of any kind.

---

## 8. Working rules for every session

- Read this whole document first.
- Keep everything readable and plainly labeled; the users are accountants.
- Commit to git at the end of each phase.
- If a change would break the architecture principle in section 2, stop and
  raise it with me before proceeding.
- When something can fail (bad file, expired token, missing folder), show a
  plain-English message that tells a non-technical user what to do next.
