# Inventory & COGS Methodology

## Purpose

The single canonical procedure for building a defensible COGS figure and assessing a client's inventory accounting method. Feeds `channel-profit-methodology.md`'s COGS line, `BLUEPRINT-TEMPLATE.md` §6 (Inventory & COGS Method Assessment), and the §7 accounting-stack recommendation. Consolidates everything that was previously a one-line treatment in `CHANNEL-PL-TEMPLATE.md` plus scattered narrative in `BLUEPRINT-TEMPLATE.md` §6 and the external `E-COMMERCE.md` playbook — this is now the one place COGS methodology lives for the Blueprint.

**§6 is an assessment, not a rebuild.** This file supports diagnosing what's wrong and building a defensible period COGS figure for the Blueprint. A full historical SKU-level cost-accounting rebuild is explicitly a separate scoped project — say so, don't fold it in here.

## When the main skill reads this file

`SKILL.md` Mode 2, when building the COGS line of §2 and all of §6, after `intake-and-document-request.md` category D has at least its required floor.

## Required inputs

- Units sold for the period (from channel reports, already pulled for §2)
- Some form of product cost — either a COGS figure from the client's books, or the source documents to build one (supplier invoices, freight/customs records)

## Optional inputs

- QBO Inventory Valuation Summary/Detail
- Physical inventory count (period start and end)
- Payroll register with production/admin split, or QBO Class/Location report
- Fixed asset/depreciation schedule for production equipment
- Freight forwarder invoices, customs entry summaries (CBP Form 7501)

## Input validation rules

1. **Balance Sheet tie-out** — if QBO inventory tracking is in use, the Inventory Valuation Summary's total asset value must match the Inventory account balance on the Balance Sheet. If it doesn't, the books have an integrity problem beyond this Blueprint's scope — flag it, don't try to force a reconciliation here.
2. **Costing method identification** — confirm whether the client is on QuickBooks Online or Desktop before assuming a costing method; the two use different native methods (see Scenario 2 below). Never assume FIFO or average cost without checking which QBO product is in use.
3. **Landed cost presence check** — for every cost figure obtained, confirm whether freight and duties are already included or were expensed separately. This single check resolves most of the scenarios below.

## The core formula

**True COGS = Beginning Inventory (fully landed value) + Purchases and Production Costs During the Period − Ending Inventory (fully landed value)**

For a diagnostic-level Blueprint (not a full cost-accounting rebuild), the practical build is:

**COGS ≈ (Beginning materials inventory + Landed material purchases − Ending materials inventory) + Direct labor incurred during the period + Manufacturing overhead incurred during the period**

This treats labor and overhead as period costs added straight to COGS rather than absorbed into unsold ending inventory value — a reasonable, defensible simplification for a diagnostic deliverable. **State this simplification explicitly in the internal draft; it is a disclosed assumption, not a silent one.** A full cost-accounting rebuild that properly absorbs labor/overhead into ending inventory is a separate scoped project.

## Step-by-step procedure

**Perform the core-formula build and any per-scenario allocation (freight/duty per unit, labor/overhead allocation, etc.) in an actual spreadsheet, not as freeform narrative arithmetic.** Thirteen possible scenarios, each with its own allocation logic, compounding across a period is exactly the kind of calculation where an error propagates silently if done as chat-based reasoning. Paste only the checked, final figures into the Blueprint.

1. Determine whether the client tracks inventory at all (QBO Inventory feature, a 3rd-party tool, or neither).
2. Run the input validation rules above.
3. Work through the applicable scenarios below — most clients will have 3-5 of the 13 apply, not all of them.
4. Build the formula above with whatever real data exists; mark any component Unable to Conclude if no source document supports it (see Missing-data treatment).
5. Assign a confidence label per `data-readiness-rules.md` to the resulting COGS figure and to each scenario finding.
6. Write the §6 assessment: what's happening today, what's off, what the right method looks like going forward — and separately, whether a §7 tool change is warranted (see Tooling recommendations below).

## The 13 scenarios

### 1. Material purchases expensed directly (never tracked as inventory)

Cash-basis-in-substance: COGS on the P&L reflects cash paid for inventory that period, not inventory actually sold — distorts margin around any lumpy inventory buy (e.g., pre-Q4 stocking). **Ask for:** the expense account's full transaction detail for the period, plus a physical count (or best estimate) at period start and end to convert via the core formula.

### 2. Material purchases as Bills, tracked as QuickBooks Inventory

Better setup, but two gaps are common even here:
- **QuickBooks Online uses FIFO costing natively; QuickBooks Desktop uses average cost.** These produce different COGS for the same transaction history — confirm which product the client is on, especially if they migrated from Desktop to Online at some point (source: QuickBooks official documentation, see Sources).
- **QuickBooks Online has no native landed-cost feature.** Freight/duty allocation into per-unit cost is a QuickBooks Desktop Enterprise capability only. In QBO, freight only enters item cost if someone manually adds it on the bill (dividing total freight by units received, adding the per-unit result to the item's cost field) — a real, deliberate extra step, not an automatic system behavior. **Ask the client/bookkeeper directly:** is this manual step actually happening on every inventory bill, or does freight go to its own expense account instead? The answer determines whether the "Cost" field in QBO already reflects landed cost or just factory price.

**Ask for:** Inventory Valuation Summary and Detail reports; the Products/Services list with the Cost field visible; confirmation of QBO Online vs. Desktop; confirmation of the landed-cost manual-entry question above.

### 3. Direct labor (manufacturing/assembly)

Wages of people actually making or assembling the product are a COGS component, not opex. The common error is the entire payroll run — including production workers — sits in one "Payroll Expense" opex account. **Ask for:** payroll register or QBO Payroll Summary; which employees/hours are production vs. admin (trivial if QBO Classes/Locations separate them, otherwise a manual identification exercise with the client).

### 4. Manufacturing overhead

Production-space rent (or its allocated share), production equipment depreciation, indirect production supplies, QC/supervisor payroll, production utilities. Under §263A (UNICAP — see Sourced thresholds below), this is **required** to be capitalized into inventory for taxpayers over the small-business exception threshold. Even under the threshold and exempt for tax purposes, it should still appear in COGS for the Blueprint's true-margin picture — the tax return can take the exemption while the diagnostic numbers reflect reality; this is a disclosed book-tax difference, not an inconsistency. **Ask for:** rent/lease allocation (square footage split if shared space), fixed asset/depreciation schedule for production equipment, indirect production supplies spend, production supervisor/QC payroll (folds into #3's request).

### 5. Inbound freight/duties not covered by the platform

Amazon's "Fulfillment/storage" fee only covers Amazon's own warehousing and pick-pack-ship — never the cost of getting product from factory to Amazon's warehouse. That inbound leg (ocean/air freight, customs duties, broker fees, port-to-warehouse drayage) is landed cost and is commonly expensed separately as "Shipping"/"Freight Expense" instead. **Ask for:** freight forwarder invoices, customs entry summaries (CBP Form 7501), broker fees, domestic drayage; allocate total landed freight+duty across the units in that shipment (e.g., $50K ÷ 10,000 units = $5/unit add-on).

### 6. Amazon FBA prep-center fees

Poly-bagging, labeling, kitting before inbound shipment — landed-cost-adjacent, commonly expensed separately just like freight. **Ask for:** prep-center invoices; fold into the per-unit landed cost the same way as freight.

### 7. Inventory write-offs / shrinkage

Damaged, expired, or FBA "removal order" unsellable units need to actually hit COGS as a loss. If they just sit as a stale balance-sheet asset, ending inventory is overstated and COGS is understated. **Ask for:** any FBA removal-order history, a note on whether write-offs have ever been recorded.

### 8. Amazon FBA inventory reimbursements/credits

Amazon reimbursing for lost/damaged inventory, or liquidating unsellable stock, shows up as a credit line (e.g., "FBA inventory credit," "FBA liquidation proceeds") on the Payments report. **These offset a COGS write-off — they are not ordinary sales revenue and must not be counted as such in §2's Gross Sales row.** Cross-reference `channel-profit-methodology.md` — this line item needs to be excluded from Gross Sales and instead netted against the write-off in #7.

### 9. Private-label tooling/mold/NRE costs

One-time upfront tooling for a custom product should be capitalized as a fixed asset and amortized over units produced or over its useful life, not expensed entirely in the month paid (which would create a massive one-period margin distortion). **Ask for:** any tooling/mold invoices and whether they were capitalized or expensed; this is a tax-method question requiring CPA judgment, not just a bookkeeping fix — see review gates below.

### 10. Inventory financing fees

Amazon Lending, Payability, Clearco-style revenue-based financing fees are interest/financing expense, **not** COGS — the opposite-direction error from the rest of this list (overstating COGS instead of understating it). **Ask for:** confirmation these fees haven't drifted into a COGS-adjacent account.

### 11. Multi-channel/multi-warehouse cost consistency

The same SKU sold on Amazon vs. Shopify vs. wholesale needs one consistent landed-cost basis, not a figure that silently drifts by channel. **Ask for:** confirmation that per-unit cost is the same input across all channel builds in `channel-profit-methodology.md`, unless there's a real reason (e.g., different sourcing) it shouldn't be.

### 12. Kitting/bundled SKUs

Multi-packs/bundles need cost built up from component SKUs; a separately (and often wrongly) costed bundle SKU is a common miss. **Ask for:** whether bundle SKUs have their own cost entry or are built from components; verify the build-up if not already checked.

### 13. Obsolete/slow-moving inventory (lower of cost or market)

Old or discontinued SKUs sitting on the books at full original cost overstate ending inventory and defer the COGS hit to a later period. **Ask for:** any SKUs with materially reduced sell-through in the trailing period; flag if a write-down assessment hasn't been done. Lighter-touch than the other scenarios — note it in §6 if evident, don't force a full NRV study inside the Blueprint.

## Sourced thresholds (updateable table — check before every engagement, don't rely on last quarter's number)

| Threshold | Applies to | 2025 figure | 2026 figure | Source |
| :---- | :---- | :---- | :---- | :---- |
| §448(c) average gross receipts test (3-year lookback) | Gates both the §471(c) small-business inventory exemption AND the §263A UNICAP exemption | $31,000,000 | $32,000,000 | Rev. Proc. 2025-32 (modifying Rev. Proc. 2024-40 to incorporate OBBBA / P.L. 119-21) |

**This corrects a real inconsistency found in the existing skill:** `E-COMMERCE.md`, the old `BLUEPRINT-TEMPLATE.md` §6 PREP NOTE, and the old `SKILL.md` all independently stated "~$30M" — none cited a Rev. Proc. or distinguished the 2025 figure ($31M) from the 2026 figure ($32M). Use the table above going forward; flag the other files' "~$30M" language in the Phase 5 consistency review rather than silently overwriting a file outside this one's scope.

## Missing-data treatment

- No COGS data of any kind: the COGS row in §2 and the entire §6 assessment are Unable to Conclude. State plainly what's needed (at minimum: unit cost and units sold) rather than presenting an estimated margin.
- Partial data (e.g., material cost known, but no labor/overhead breakdown, and the client is clearly a manufacturer not a reseller): build the materials-only figure, label it explicitly as excluding labor/overhead, and mark the full COGS figure Preliminary rather than presenting the partial number as complete.
- No physical inventory count available: use QBO's inventory valuation if it exists and reconciles to the Balance Sheet (input validation rule 1); if neither is available, state that ending inventory is unverified and cap confidence at Preliminary.

## Assumptions that must be disclosed

- Labor/overhead treated as period costs rather than absorbed into ending inventory (the core-formula simplification)
- Any per-unit landed cost that required allocating shared freight/duty across a shipment rather than being individually billed per unit
- Whether tooling/NRE costs were confirmed capitalized vs. expensed, and by whom

## Exceptions and edge cases

Covered inline within each of the 13 scenarios above. The two edge cases most likely to actually surface in a real engagement: QBO Online vs. Desktop costing-method mismatch after a migration (#2), and FBA reimbursement credits miscounted as revenue (#8) — check both explicitly on every engagement, not just when something looks off.

## What Claude may conclude

- Which of the 13 scenarios apply to this client, based on their actual books/documents
- A COGS figure and confidence label, once the core formula's inputs are sourced
- That a specific practice (e.g., expensing freight separately) is understating COGS, when the source documents show it

## What Claude must not conclude

- A COGS figure or margin when no product cost data exists at all
- That §263A capitalization or an inventory method change is the correct tax position for this client without CPA/Partner review — this file identifies the accounting-methodology question, it does not make the tax-method decision
- That a tooling cost should be capitalized/amortized over a specific life without CPA sign-off on the useful life and method
- That a specific inventory/MRP tool (Craftybase, Cin7, Katana, Fishbowl) is definitively the right fit for a specific client based on the market-research comparison below — that comparison is sourced from third-party review/comparison sites, not each vendor's own official documentation, and should be verified directly with the vendor before being presented as a firm recommendation

## Items requiring staff, senior, CPA, or specialist review

| Trigger | Reviewer |
| :---- | :---- |
| Routine document collection, arithmetic build of the core formula | Staff |
| Scenario identification and interpretation; §6 narrative | Senior |
| Any §471(c)/§263A threshold determination; any inventory accounting method assessment or recommended method change (Form 3115 territory); tooling capitalization treatment | Partner — accounting method changes carry their own contemporaneous-documentation and preparer-penalty exposure under `ENGAGEMENT-STANDARDS.md` |
| A recommended method change that would actually be implemented (not just flagged) | CPA sign-off on the Form 3115 position specifically, per `ENGAGEMENT-STANDARDS.md` Standard 1 (position support) and Standard 2 (contemporaneous documentation) |

## Tooling recommendations for §7 (market research, not official-source — see caveat)

| Tool | Best fit | Note |
| :---- | :---- | :---- |
| Craftybase | Light manufacturing/private-label needing labor+overhead absorbed into COGS | Calculates COGS from material + labor + overhead, syncs to QBO as a journal entry — closest match to the labor/overhead gap in scenarios 3-4 |
| Cin7 Core (formerly DEAR Systems) | Multi-channel e-commerce with landed cost, light assembly/BOM | QBO sync fully compatible only on Plus/Advanced plans |
| Katana | Real manufacturers needing MRP (BOM, subassemblies, make-to-order) | Strongest manufacturing-first fit of the group |
| Fishbowl | Deepest QuickBooks integration specifically | Cheapest cloud entry point of the group |

**Caveat, stated per the accuracy safeguards:** this comparison is sourced from third-party software-comparison sites (Software Advice, Qoblex, Brahmin Solutions — see Sources), not each vendor's own official documentation, because no government or platform-official source exists for competitive SaaS feature comparison. Treat this table as a starting point for a §7 conversation, verify current pricing/features directly with the vendor before it becomes a firm recommendation to a specific client, and never present it with the same confidence as the sourced tax thresholds above.

## Expected internal output

The core-formula build with every component sourced and confidence-labeled; a list of which of the 13 scenarios apply with their specific findings; the sourced threshold table; a §7 tool suggestion flagged as market-research-sourced.

## Expected client-facing output

`BLUEPRINT-TEMPLATE.md` §6's plain-language assessment (current method, what's off, right method going forward) and the COGS line feeding §2 — translated per `data-readiness-rules.md`'s confidence-to-language table. No Form 3115 or method-change mechanics belong in the client-facing version; that's a Partner conversation, not a Blueprint deliverable.

**Binding wording rule:** if the recommended method differs from what the client currently files on their tax return (not just how their books are categorized day-to-day), §6's client-facing language must state that implementing it requires a formal accounting method change (Form 3115, §446(e)) that hasn't happened yet — never phrase a method recommendation as already decided, in progress, or fixed. A bookkeeping correction (recategorizing a transaction) and a tax accounting method change (changing how the entity reports inventory to the IRS) are different things with different procedural requirements, and the Blueprint's language must not blur them.

## Quality-control checklist

- [ ] QBO Online vs. Desktop confirmed before assuming a costing method
- [ ] Landed-cost manual-entry question asked directly, not assumed
- [ ] FBA inventory credits/reimbursements checked and excluded from Gross Sales if present
- [ ] Balance Sheet inventory value reconciled to Inventory Valuation Summary, or the mismatch is flagged
- [ ] Labor/overhead treatment (period cost simplification) disclosed if used
- [ ] Current §448(c) threshold pulled from the table above, not from memory or another file's copy
- [ ] Any §7 tool suggestion labeled as market-research-sourced, not vendor-verified

## Source list

- [Section 448(c) Gross Receipts Test — 2026 Inflation Adjustments, Rev. Proc. 2025-32 analysis](https://www.currentfederaltaxdevelopments.com/blog/2025/10/9/2026-inflation-adjustments-for-tax-professionals-revenue-procedure-2025-32-analysis)
- [26 U.S. Code § 448 — Cornell Legal Information Institute](https://www.law.cornell.edu/uscode/text/26/448)
- [26 U.S. Code § 471 — Cornell Legal Information Institute](https://www.law.cornell.edu/uscode/text/26/471)
- [Inventory valuation methods for cost accounting — QuickBooks official](https://quickbooks.intuit.com/learn-support/en-us/help-article/inventory-management/fifo-used-inventory-cost-accounting/L1x3hkunE_US_en_US)
- [Inventory Valuation Summary Report — QuickBooks Community](https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/inventory-valuation-summary-report/00/788987)
- Market-research tier (not official source, flagged per the caveat above): Software Advice, Qoblex, and Brahmin Solutions product-comparison pages reviewed this session for the §7 tooling table

## Last verified

2026-07-14 — §448(c) figures confirmed against Rev. Proc. 2025-32 coverage this session; QBO costing-method and report-path facts confirmed against QuickBooks official documentation this session. Tool comparison table sourced from third-party market research, not vendor-official docs — re-verify directly with vendors before any specific client recommendation. Re-verify the threshold table every year at minimum (it changes annually by statute).
