# Intake & Document Request

## Purpose

Single consolidated checklist of every document/report needed to prepare an E-Commerce Financial & Tax Blueprint. Replaces the scattered "source data" tables that used to live independently inside each working template (Channel P&L, Nexus Map, Income Tax Nexus, Cash Flow, SKU Profitability) — one place to request from, one place to check receipt against.

This file governs **document collection only**. It does not calculate anything and does not decide what Claude may conclude from partial data — that's `data-readiness-rules.md`. Keep the two separated: this file answers "what do we need and where does it come from," the other answers "what do we do if we don't have it."

## When the main skill reads this file

First, before any Blueprint section is built — `SKILL.md` Mode 2 Step 1. Re-read it whenever a new document arrives mid-engagement to re-check it against the categories below.

## Document request checklist, by category

### A. Channel & payment reports (feeds §2 Channel P&L)

| Item | Exact path | Gives you | Caveat |
| :---- | :---- | :---- | :---- |
| Amazon Payments Date Range Report | Seller Central → Reports → Payments → **Date Range Reports** tab → Generate Report | Summary (PDF: income/expenses/tax/transfers overview) + Transaction (CSV: line-level detail) for the period | Report reflects transactions **cleared for transfer**, which can include not-yet-settled items — note the pull date |
| Amazon Ads spend | Amazon Ads console → Campaign reports | Ad spend — **not included** in the Payments report at all | Always a separate pull |
| Shopify Finance summary | Shopify Admin → Analytics → Reports → filter Category = **Finances** | Sales, payments, gift cards, gross profit overview | |
| Shopify Payout Reconciliation Report | Shopify Admin → Finance → Documents → **Payout Reconciliation Report** | Detailed Shopify Payments balance activity — reconciles to bank deposits | **Only available if the store uses Shopify Payments.** Other gateways (Stripe, PayPal, etc.) need that gateway's own settlement report instead |
| Shopify/other ad spend | Meta/Google/TikTok ad account billing | Ad spend — Shopify doesn't report this | |
| Walmart / eBay / other channel | Platform's own settlement or payout report | Sales, fees, refunds | No single official doc to cite — request by name per platform |
| Wholesale | QBO invoices/deposits for wholesale customers | Gross sales, wholesale-specific discounts | |

### B. Sales-by-state and nexus data (feeds §3a sales tax, §3b income tax)

| Item | Exact path | Gives you | Caveat |
| :---- | :---- | :---- | :---- |
| Amazon Tax Document Library | Seller Central → Reports → **Tax Document Library** → generate **Marketplace Tax Collection Report** (or Combined Sales Tax Report for both Amazon-calculated and Amazon-collected views) | Sales + tax collected/remitted by state | **Requires a Professional selling plan.** Individual-plan sellers have no access — see Exceptions |
| Amazon FBA inventory location | Seller Central → Reports → **Inventory Ledger** (filtered by fulfillment center) | Which states have held the client's inventory during the period | The older "Inventory Event Detail" report (along with five others: Daily/Monthly Inventory History, Inventory Adjustments, Inventory Reconciliation, Received Inventory) was **retired January 31, 2023** — an earlier September 30, 2022 deprecation date had been announced, then extended. Same data now lives in Inventory Ledger with the same filters. `fulfillment-center-id` maps to a state via its airport-code prefix (e.g., DFW = Dallas, TX) |
| Shopify United States sales tax report | Shopify Admin → Reports → search "**United States sales tax**" | Net sales + tax collected by state/county/city/jurisdiction | **Only available if:** store is US-based, uses Shopify Tax, currency is USD |
| Current sales tax registration list | Ask client/bookkeeper, or prior preparer's records | Which states the entity is registered/filing sales tax in today | Not a platform report |
| Current state income tax filing list | Ask client, prior-year returns, Karbon | Which state income tax returns the entity actually files today | Not a platform report |

### C. Entity, prior-year return, and payroll data (feeds §4, §5)

- Prior-year federal + state returns (1120-S / 1065 / 1120, plus personal 1040 if pass-through K-1s flow to the owner)
- S-corp election confirmation (Form 2553 copy or IRS acceptance/CP261 letter) if S-corp status is claimed but not yet verified from a filed return
- Current officer/owner compensation — payroll register or QBO Payroll Summary
- Multi-entity structure documentation, if applicable

### D. COGS source documents (feeds §6 and the COGS line of §2 — see `inventory-cogs-methodology.md` for how these get used)

| Item | Exact path | Gives you |
| :---- | :---- | :---- |
| QBO Inventory Valuation Summary | QBO → Reports → Sales and customers → **Inventory Valuation Summary** | On-hand qty and value per item as of a point in time |
| QBO Inventory Valuation Detail | Same menu → **Inventory Valuation Detail** | Every inventory transaction (purchases in, sales out) |
| Physical inventory count | Client-provided, period start and end | Ground-truth qty when QBO inventory isn't trusted or doesn't exist |
| Supplier invoices / product cost file | Client-provided | Base unit cost |
| Freight forwarder invoices, customs entry summaries (CBP Form 7501), broker fees | Client-provided | Landed-cost inputs (freight-in, duties) |
| Payroll register with production vs. admin split (or QBO Class/Location report if set up) | QBO Payroll, or Class/Location report | Direct labor identification |
| Fixed asset/depreciation schedule (production equipment) | Client's fixed asset schedule | Manufacturing overhead component |
| Facility lease/rent + square footage split | Client-provided | Overhead allocation if production space is shared |
| FBA prep-center invoices, if used | Client-provided | Prep/kitting cost, landed-cost-adjacent |

### E. Current accounting stack (feeds §7)

- Confirm QBO is in use (and which tier — Online vs. Desktop, since inventory costing and landed-cost handling differ between them)
- Whether A2X or an equivalent channel-reconciliation tool is connected
- Which inventory/MRP tool, if any (Cin7 Core, Katana, Fishbowl, Craftybase, or none)
- Which sales tax tool is in use (Shopify Tax, TaxJar, Avalara, none)

### F. Fast Action Bonus extras — request ONLY if the client confirmed the FAB on the sales call (feeds §8, §9)

- Cash flow: QBO bank feed/register, AP bill payment history, ad platform billing history
- SKU profitability: Amazon Business Reports → Detail Page Sales and Traffic (by SKU/ASIN); Shopify Analytics → Sales by product; per-SKU landed cost

## Required vs. optional inputs

**Required minimum floor** (Blueprint cannot start building numbers without these):
- At least one channel's payment/settlement report covering the stated period
- Confirmation of the exact period the Blueprint covers
- Entity type and S-corp election status (needed before §4/§5 can say anything)

**Optional but expected** (absence doesn't block starting, but blocks specific sections from reaching a real number — see `data-readiness-rules.md`):
- Prior-year return
- Physical inventory count / COGS source documents
- Sales-by-state and FBA inventory location reports
- Current accounting stack detail

## Input validation rules

1. **Period consistency** — every report pulled must cover the exact same start/end dates as the Blueprint header. If channels report on mismatched periods (e.g., Amazon calendar year vs. Shopify fiscal year), do not blend them silently — flag it and request a matching re-pull.
2. **Currency** — confirm every report is USD. A non-USD Shopify store cannot produce the United States sales tax report at all; flag as a gap requiring a manual sales-by-state export instead.
3. **Direct export only** — reports must be the platform's own CSV/PDF export, not a client-typed summary. A hand-typed number is not a substitute for the source file.
4. **Pull-date freshness** — note when each report was generated. Amazon/Shopify data can restate after generation (late refunds, chargebacks); if a report is more than a few weeks stale relative to the engagement date, ask whether a fresh pull is needed.

## Step-by-step procedure

1. Confirm the exact period the Blueprint covers (trailing 12 months is the template default).
2. Send the consolidated request (categories A-F above, minus F unless FAB is confirmed) to the client/staff.
3. Log receipt against the checklist as documents arrive — don't wait for 100%, but don't start building a section whose required inputs are still missing.
4. For anything missing, ask for the specific document or report it comes from. Never estimate in its place.
5. Once a category clears its required-input floor, hand off to the corresponding methodology file for that section.

## Missing-data treatment

This file only tracks what's missing at the document level. What Claude is allowed to conclude — or must refuse to conclude — from partial data is governed entirely by `data-readiness-rules.md`. Don't duplicate that framework here.

## Assumptions that must be disclosed

- The actual period each report covers, if it drifts even slightly from the stated Blueprint period
- Whether a document was pulled directly by staff or supplied by the client
- Whether any document received is a summary/redacted version rather than the full original export

## Exceptions and edge cases

- **Amazon Individual selling plan** (not Professional) — Tax Document Library is unavailable; sales-by-state must be reconstructed from order-level export instead. Flag as a data-quality limitation, not a silent gap.
- **Shopify store not on Shopify Payments** — no Payout Reconciliation Report; request the actual payment gateway's settlement report.
- **Non-US Shopify store or non-USD currency** — United States sales tax report unavailable; nexus work for that channel needs a manual export.
- **No bookkeeping system at all** (spreadsheet-only client) — every category becomes "build from source documents" rather than "pull a report." Expect a longer intake cycle and flag turnaround risk against the Blueprint's 14-day target.

## What Claude may conclude from intake alone

- Which categories are complete vs. incomplete
- Which Blueprint sections currently have enough input to proceed to their methodology file
- What specifically is still missing, per category, and what document would close the gap

## What Claude must not conclude from intake alone

- Any dollar figure, margin, nexus position, or tax finding — this file governs collection, not analysis
- That a category is "close enough" when a required input is actually missing

## Review checkpoints

- **Staff** — executes the document request, logs receipt against the checklist
- **Senior** — confirms intake is sufficient before section-building begins
- **Partner** — only engaged at intake if a client relationship issue arises (e.g., client refusing to provide required documents)

## Expected internal output

A completed intake log (this checklist, filled in with received/missing status per item) kept with the engagement file. Not client-facing.

## Expected client-facing output

None directly from this file. The categories above, stripped of internal routing notes, can be sent to the client as a plain-language document request list.

## Quality-control checklist

- [ ] Every category has met its required-input floor, or the gap is explicitly logged
- [ ] Every report's period matches the stated Blueprint period
- [ ] Every report is a direct platform export, not a client-typed summary
- [ ] Selling-plan / payment-gateway / currency exceptions checked and noted where applicable

## Source list

- [Payment Date Range Transaction and Summary reports — Amazon Seller Central Help](https://sellercentral.amazon.com/help/hub/reference/external/G200989190?locale=en-US)
- [Amazon sales tax report (Tax Document Library) — Amazon Seller Central Help](https://sellercentral.amazon.com/gp/help/external/G201706680?language=en_US)
- [Inventory Ledger report — Amazon Seller Central Help](https://sellercentral.amazon.com/help/hub/reference/external/G4FKT5KQWFFJ7LDN?locale=en-US)
- [Amazon Fulfilled Inventory report — Amazon Seller Central Help](https://sellercentral.amazon.com/help/hub/reference/external/G200453180)
- [Finance reports — Shopify Help Center](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/finances-report)
- [Payout reconciliation report — Shopify Help Center](https://help.shopify.com/en/manual/payments/shopify-payments/payouts/payout-reconciliation-report)
- [Tax reports (United States sales tax report) — Shopify Help Center](https://help.shopify.com/en/manual/taxes/tax-reports)
- [Inventory Valuation Summary/Detail — QuickBooks Community](https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/inventory-valuation-summary-report/00/788987)

## Last verified

2026-07-14 — all links checked live against Amazon Seller Central Help, Shopify Help Center, and QuickBooks Community documentation this session. Re-verify at the next major platform UI change, or annually, whichever comes first. (Note: the Inventory Event Detail → Inventory Ledger migration, retired January 31, 2023, is a direct example of why this file cites official docs with a verification date instead of carrying forward a report name from memory — an initial draft of this file had the date wrong, at September 30, 2022, until independently re-verified.)
