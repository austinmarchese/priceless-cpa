# Channel Profit Methodology

## Purpose

Rebuilds each sales channel's blended platform deposit into real gross sales, real costs, and real contribution profit. Supersedes `CHANNEL-PL-TEMPLATE.md` — same core math, now with sourcing, validation, confidence labeling, and review gates attached. Feeds `BLUEPRINT-TEMPLATE.md` §2.

This file produces **contribution profit**, not net profit. It does not include admin payroll, rent, software, insurance, or professional fees. See `data-readiness-rules.md`'s contribution-profit-vs-net-profit rule before writing anything into §1's executive summary.

## When the main skill reads this file

`SKILL.md` Mode 2 Step 2, when building §2, after `intake-and-document-request.md` category A is at least at its required floor (one channel's settlement report for the period).

## Required inputs

- At least one channel's payment/settlement report for the stated period (see `intake-and-document-request.md` category A)
- Ad spend for that channel, if the channel's own settlement report doesn't include it (true for Amazon and Shopify — always a separate pull)
- COGS/landed unit cost — from `inventory-cogs-methodology.md`, not rebuilt here

## Optional inputs

- Multiple channels (Amazon, Shopify, Walmart, eBay, wholesale) — the more present, the more complete §2's "by channel" comparison is, but a single-channel build is valid and should say so explicitly rather than implying full coverage
- Bank statement for the period, to reconcile against (strongly recommended, not strictly required to produce a number, but required to reach High confidence — see Calculation, step 4)

## Input validation rules

1. **Period match** — every channel's report must cover the identical start/end dates. Per `intake-and-document-request.md`, do not blend mismatched periods.
2. **Direct export only** — figures come from the platform's own report, never a client-typed summary.
3. **Scanned/image source documents** — if a report was delivered as a scanned image (not a native export), any OCR-extracted figure must pass the three-way reconciliation in step 4 below before it's used at all. An OCR figure that hasn't been reconciled stays at Preliminary confidence regardless of how clean the extraction looks.
4. **Ad spend is never in the channel settlement report** — always confirm it's been pulled separately from the ad platform (Amazon Ads console, Meta/Google/TikTok billing), not assumed to be zero or embedded elsewhere.

## Step-by-step procedure

**Perform this calculation in an actual spreadsheet (Excel/Sheets), not as freeform narrative arithmetic.** The reconciliation test below involves multiple sums across multiple rows and channels — exactly the kind of multi-step arithmetic where a dropped sign or mis-summed column goes undetected in a chat transcript. Build the working table in a spreadsheet, verify it foots, and paste only the checked, final output into the Blueprint section.

For each channel, for the period stated in the Blueprint header:

1. Pull gross sales, refunds, platform/referral fees, and fulfillment/storage fees from that channel's settlement report (see `intake-and-document-request.md` category A for exact report names and paths).
2. Pull advertising spend from the ad platform directly.
3. Pull COGS per unit from `inventory-cogs-methodology.md`'s output, applied to units sold on that channel.
4. **Reconcile before trusting any number** (see Exact calculation rules below for the concrete test).
5. Assign a confidence label per `data-readiness-rules.md` based on whether reconciliation passed.
6. Flag explicitly if the client had been reading the channel's net deposit as revenue — this is the most common e-commerce bookkeeping error and the strongest hook into ongoing bookkeeping service (Quarterback Tier 2/3), but it belongs in the "what this tells you" narrative, not the table.

## Exact calculation rules

**Per-channel table (all rows in the channel's own currency, USD):**

1. **Gross sales** — total from the settlement report, before any deductions
2. **Refunds / returns** — as reported by the platform (negative)
3. **Platform & referral fees** — referral fee, transaction fee, marketplace commission (negative)
4. **Fulfillment / storage** — fulfillment fees, storage fees, merchant-paid shipping, 3PL fees (negative)
5. **Advertising** — actual ad spend for that channel (negative)
6. **Cost of goods sold** — units sold on that channel × landed unit cost, per `inventory-cogs-methodology.md` (negative)
7. **Contribution profit** = 1 + 2 + 3 + 4 + 5 + 6 (signed sum)
8. **Margin %** = Contribution profit ÷ Gross sales

**Reconciliation test (required before assigning any confidence level above Preliminary):**

Amazon and other platforms that report a top-line summary total (e.g., Amazon's Payments Summary "Income," "Expenses," "Tax," "Transfers" net figures) allow a **three-way tie** that should be run every time a report is used, not just when something looks wrong:

- (a) The platform's own stated net total for a category (e.g., "Income" net)
- (b) The sum of that category's individual detail lines
- (c) Where the report shows separate debit/credit subtotals, the sum of credits alone and the sum of debits alone should each independently foot to a sub-subtotal the report also states

If (a), (b), and (c) all agree, the figure qualifies for **High** confidence. If they're reconciled but required backing into a line the source document didn't state directly (for example, one line item was illegible or missing from a scanned report and was solved for by subtraction against a verified subtotal), the figure is **Moderate** — state explicitly which line was inferred and how. If reconciliation cannot be completed at all, the figure is capped at **Preliminary**, and the specific unreconciled gap must be named rather than silently accepted.

**Tolerance for reconciling channel totals to actual bank deposits:** sum each channel's (Gross sales − Refunds − Fees − Fulfillment − Advertising) — excluding COGS, which is a separate cash outflow to suppliers, not a channel deduction — and compare to actual bank deposits for the period. A variance greater than **2% of gross sales** requires investigation before the figure is used (common causes: ad spend paid outside the platform's own reporting, such as a separate agency invoice, or a missed fee category). Document the resolution; don't silently absorb the variance into the total.

## Missing-data treatment

- Missing COGS: the channel's Gross sales through Advertising rows can still be built and labeled; the Contribution Profit and Margin % rows are Unable to Conclude until `inventory-cogs-methodology.md` supplies a figure — do not compute a partial margin that silently excludes COGS and label it "margin."
- Missing a channel entirely (e.g., Shopify data not yet available): build what's available, state explicitly in the narrative that the channel comparison is partial, and do not total "all channels" figures that don't actually include every channel.
- Missing bank statement for reconciliation: the table can still be built from the settlement report alone, but confidence caps at Moderate until reconciled to actual deposits.

## Assumptions that must be disclosed

- Any inferred (not directly sourced) line item and how it was derived
- Whether COGS was allocated at the channel level by actual channel-specific unit cost or estimated/allocated proportionally
- Whether ad spend for the channel is complete (e.g., excludes off-platform ads driving traffic to the channel, if the client runs those and they weren't captured)

## Exceptions and edge cases

- **Scanned/image-only settlement reports** — apply OCR carefully; never accept a garbled figure (dropped minus signs, misread digits) without the reconciliation test in step 4. A dropped minus sign on an expense line is a common OCR failure mode — if a "debit" column entry appears positive, verify against the subtotal before accepting it at face value.
- **Wholesale channel** — often has no "platform fee" or "advertising" row at all; don't force zeros into cells that are genuinely not applicable versus cells that are applicable but unreported — label appropriately.
- **Off-platform advertising driving on-platform sales** (e.g., Meta ads driving Amazon traffic) — if a channel's advertising % looks unusually low relative to typical e-commerce benchmarks (roughly 5-15% of sales for an actively-advertised brand), flag it as a data-completeness question to the client rather than accepting an unusually low figure as simply "efficient."

## What Claude may conclude

- A channel's contribution profit and margin %, with confidence label, once COGS and reconciliation are both in place
- Which channel is thin vs. healthy on a contribution-margin basis
- That a client has been reading a platform deposit as revenue/profit, when the settlement report shows otherwise

## What Claude must not conclude

- That contribution profit equals net profit, true profit, or "what you actually made" without full opex — see `data-readiness-rules.md`
- A margin figure when COGS is missing
- That an unreconciled figure (failed the three-way tie or the 2%-of-gross-sales bank tolerance) is accurate — it stays capped at Preliminary until resolved
- That an ad-spend figure is complete without confirming off-platform spend was considered

## Items requiring staff, senior, or partner review

| Trigger | Reviewer |
| :---- | :---- |
| Routine report pull, arithmetic reconciliation | Staff |
| Any inferred/backed-into line item; any allocation judgment (e.g., channel-level COGS allocation); the "what this tells you" interpretive narrative | Senior |
| Final figures presented to the client; any case where the client was told a deposit was profit and the correction materially changes their understanding of the business | Partner |

## Expected internal output

The full per-channel table with every cell sourced, confidence-labeled, and any assumption or inference stated, plus the reconciliation test result (pass/fail and variance %).

## Expected client-facing output

`BLUEPRINT-TEMPLATE.md` §2's table and narrative, in plain language, with confidence translated per `data-readiness-rules.md`'s client-facing table (e.g., a Preliminary COGS-based margin is framed as an early estimate, not a bare stated fact).

## Quality-control checklist

- [ ] Every channel's period matches the Blueprint's stated period
- [ ] Ad spend confirmed pulled separately from the settlement report for every channel
- [ ] Three-way reconciliation test run and documented for every settlement report used
- [ ] Bank-deposit tolerance check run (≤2% of gross sales variance, or the gap is explained)
- [ ] No margin % shown without COGS actually included
- [ ] Confidence label attached to every material figure
- [ ] "What this tells you" narrative reviewed by Senior before Partner sees it

## Source list

- [Payment Date Range Transaction and Summary reports — Amazon Seller Central Help](https://sellercentral.amazon.com/help/hub/reference/external/G200989190?locale=en-US)
- [Finance reports — Shopify Help Center](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/finances-report)
- [Payout reconciliation report — Shopify Help Center](https://help.shopify.com/en/manual/payments/shopify-payments/payouts/payout-reconciliation-report)
- `data-readiness-rules.md` — confidence framework and review-gate rules, adopted not duplicated
- `inventory-cogs-methodology.md` — COGS/landed-cost source, not rebuilt here
- Internal precedent: the three-way reconciliation test and OCR-caution rule above were both derived from an actual engagement test (Amazon Payments Summary reconstruction where a scanned-image report required OCR extraction and full reconciliation before use) — this is proven, not theoretical, methodology.

## Last verified

2026-07-14 — Amazon and Shopify report paths confirmed live against official help documentation this session. Re-verify at the next major platform UI change, or annually.
