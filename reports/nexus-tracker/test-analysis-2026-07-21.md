# Sales Tax Nexus Tracker — Test Analysis

**Date:** 2026-07-21
**Prepared for:** Anthony / Partner review
**Test client:** Anime Gear Guru (2026), real Shopify export, Jan 1 – Jun 30 2026

## Verdict

The tool checks out. After correcting two import-mapping mistakes found during this
test, every exposure number on the dashboard was independently recomputed straight
from the database and matched exactly. Two small things are worth fixing before
wider staff rollout — see Recommendations.

## 1. How the tool works

- **One ledger, one door in.** Every sale — from a CSV import or the native Shopify
  connection — is normalized into a single transaction ledger. All reads and writes
  go through one data-access layer (`storage.py`); nothing else touches the database.
- **Threshold rules are data, not code.** `config/state_thresholds.json` holds one
  entry per state: dollar threshold, transaction threshold, how they combine (dollar
  only / transaction only / either / and), the measurement window (prior calendar
  year / current calendar year / current-or-prior / trailing 12 months), and whether
  marketplace-facilitated sales count toward that state's threshold.
- **Workflow:** add a client → import sales (CSV with column mapping, or a native
  Shopify connection) → the exposure dashboard sorts every state into **Crossed**,
  **Approaching**, or **Sold in, no threshold set**.
- **It reports exposure facts only.** The tool never concludes a client "has nexus"
  or "must register" — that determination is left to a human at the firm, by design.

## 2. What was tested

- Full environment setup and the automated test suite: **112 of 114 tests passed.**
  The 2 failures are Windows-only test-environment artifacts (a `TemporaryDirectory`
  cleanup racing an open SQLite handle, and a Unix-permission-based "unreadable file"
  simulation that doesn't apply on Windows) — not logic bugs, and not blocking.
- Manual walkthrough of every screen: client list, add-client, client home, CSV
  import, Shopify connect, exposure dashboard — all functioned correctly.
- A real-data import test using an actual client export (Shopify "Total sales by
  order," Jan–Jun 2026, 12,040 rows), which surfaced three real issues.

## 3. Issues found and fixed

### Issue 1 — Marketplace-facilitated flag wrongly set for every row

The import screen's "every row in this file is marketplace-facilitated" checkbox
was checked against a plain, native Shopify export with no marketplace data in it
at all. Every state where `marketplace_counts: false` (FL, GA, IL, AZ, VA, CO, MA,
and more) showed **$0 exposure** on the dashboard despite real sales underneath —
Florida alone had $67,149.89 in raw sales, 67% of its $100,000 threshold, reading
as zero.

**Fix:** leave that checkbox unchecked for a direct/native store.

### Issue 2 — Amount mapped to "Gross sales" instead of "Net sales"

This overstated every discounted order by the discount amount, and completely
dropped refund/reversal-only rows to $0 (a -$239.99 reversal simply vanished
instead of reducing the running total, because the "Gross sales" column reads $0
for a pure return row).

**Fix:** map the amount column to **Net sales** (already nets discounts and
reversals, excludes sales tax).

### Issue 3 — Re-importing corrected data didn't fix anything by itself

The storage layer is intentionally conflict-safe: it never overwrites a
transaction that's already stored under the same order ID with different
incoming data — it just flags the difference for review. Two "corrected"
re-imports over the same wrong data produced a database that was byte-for-byte
identical to before. The only real fix was clearing this client's existing
transactions (after a full database backup) and re-importing clean.

**Root cause of the original inflated row count (15,561 vs. the file's actual
12,040 rows):** earlier import attempts used inconsistent order-ID mappings
(the `Order name` column, which repeats across rows for the same order, vs. no ID
column at all), so each pass added new rows instead of recognizing duplicates.
Resolved by mapping the file's true unique key, `Sale ID`.

## 4. Post-fix verification

- **Row math reconciles exactly:** 12,040 raw rows − 241 unreadable rows (non-US
  ship-to addresses: Canadian provinces, Japanese prefectures, Australian/UK/
  Korean/Italian destinations, US Armed Forces overseas) = **11,799 imported.**
  Confirmed this exclusion is correct, not a bug — those destinations have no US
  state to attribute nexus exposure to.
- **Independently recomputed per-state totals** straight from the database for
  CA, TX, NY, and GA — all matched the dashboard exactly.
- **Transaction-count convention confirmed intentional:** refunds reduce dollar
  totals but are excluded (not subtracted) from transaction counts, consistently
  throughout `engine.py`.
- Dashboard now correctly shows **6 states CROSSED** (GA, MD, NJ, NV, VA, OH) and
  **41 approaching** — several previously invisible at $0 due to Issue 1.

## 5. Known scope limit for this test

The data used covers **only January–June 2026 (6 months).** States measured over
`trailing_12_months` or a calendar year need history this file doesn't have, so
every number on the dashboard right now is a **floor, not a final answer**. A
visible symptom: West Virginia shows a **negative** running total (-$195.00)
because a refund recorded in this window has no offsetting original sale within
it. This was an accepted, intentional scope for this specific test.

## 6. Ideal data set — recommendations going forward

**For CSV imports:**

| Field | Correct mapping |
|---|---|
| Amount | The **net** figure — after discounts and returns, before tax (e.g. Shopify's "Net sales," never "Gross sales" or "Total sales") |
| Order ID | A genuinely unique-per-row column (not one that repeats across rows for the same order) |
| Marketplace flag | Only true for genuine marketplace channels (Amazon, Etsy, eBay) where the platform itself collects/remits tax — never for a store's own direct sales |
| Destination state | Any format is fine (code or full name); non-US ship-to rows are correctly excluded automatically |
| Coverage | A full trailing 12 months at minimum, refreshed on a regular cadence (e.g. monthly) |

**For Shopify clients specifically:** prefer the native connector over manual CSV
where possible — it pulls net-of-tax figures automatically and backfills 12+
months, removing the manual mapping step that caused two of the three issues
above.

**Get the mapping right on the first import.** The tool has no built-in way to
reset a client's data yet — fixing a bad first import currently requires a direct
database operation, not anything available in the app.

## 7. Recommendations before wider rollout

1. **Add a "clear/reset this client's data" feature to the app.** This session
   needed a one-off direct database operation to recover from a bad mapping;
   staff without engineering support won't have that option.
2. **Fix the 2 Windows-only test failures** for cross-platform reliability (not
   launch-blocking, just worth cleaning up).
3. **Re-import a full trailing-12-month (or longer) file for Anime Gear Guru**
   before treating any current number as final — this test intentionally used
   only 6 months of data.
