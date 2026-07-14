# Multi-State Tax Screening Rules

## Purpose

Covers both multi-state tax exposure questions in the Blueprint as two clearly separated parts of one file, per approved Phase 1 structure:

- **Part A — Sales & Use Tax Nexus** (feeds `BLUEPRINT-TEMPLATE.md` §3a) — supersedes `NEXUS-MAP-TEMPLATE.md`
- **Part B — Income Tax Nexus** (feeds `BLUEPRINT-TEMPLATE.md` §3b) — supersedes `INCOME-TAX-NEXUS-TEMPLATE.md`

These are different legal questions with different triggers, different thresholds, and different consequences. Do not let Part A's threshold or Part B's threshold cross-contaminate — a state can be a sales-tax-nexus state and not an income-tax-nexus state, or the reverse, independently.

## When the main skill reads this file

`SKILL.md` Mode 2, when building §3a and §3b, after `intake-and-document-request.md` category B is at least at its required floor (sales-by-state data for at least one channel).

## Required inputs

- Sales by state, per channel, for the period (see `intake-and-document-request.md` category B)
- Current sales tax registration list and current state income tax filing list

## Optional inputs

- Transaction counts by state, per channel
- FBA inventory location history (Part B only)
- `/state-tax-lookup` output for every state with material sales or FBA presence

## Input validation rules

1. **Never conclude a nexus position from total sales alone.** Every conclusion in both Part A and Part B requires checking the specific applicable trigger for that state — not just comparing a dollar total to a remembered default threshold.
2. **Verify per state before every engagement.** Thresholds change by statute, sometimes mid-year. Call `/state-tax-lookup` for every state with material activity rather than reusing a number from a prior engagement or from memory.
3. **Marketplace-facilitator sales and direct/DTC sales are not interchangeable inputs** — isolate them before testing any threshold, because facilitator coverage changes both the sales tax picture (Part A) and, for some states, whether those sales even count toward the seller's own threshold.
4. **Measurement-period mismatch.** `BLUEPRINT-TEMPLATE.md`'s default review window is a trailing 12 months. Most state economic-nexus and factor-presence statutes test against a **calendar year** (current or immediately preceding), not a rolling window. Before comparing any state's sales to its threshold, confirm that state's actual statutory measurement period. If it doesn't match the Blueprint's trailing-12-month window, pull calendar-year sales-by-state data separately for the threshold test — do not reuse the trailing-12-month total, which can flip the Crossed/Not-Crossed conclusion for a client whose sales pattern straddles the boundary (e.g., a heavy Q4 that falls inside the trailing-12 window but outside either actual calendar year).

## Part A — Sales & Use Tax Nexus

### Step-by-step procedure

1. Pull sales $ and transaction count by state, across all channels, for the period.
2. Separate marketplace-facilitator-collected sales (Amazon, and other marketplaces with facilitator laws) from direct/DTC sales (Shopify and similar) — see the facilitator note below.
3. For each state with material activity, check the current threshold via `/state-tax-lookup` (see table below for the general pattern — verify per state before relying on it).
4. Compare total sales (and, where the state still uses it, transaction count) against the verified current threshold. Mark Crossed Yes/No.
5. Cross-reference against the current registration list. Mark Registered Yes/No.
6. Estimate exposure only for states Crossed = Yes and Registered = No, and only for the sales the client itself was responsible for collecting (see facilitator note).

### Exact calculation rule

**Estimated exposure ≈ uncollected taxable DTC/direct sales in that state × that state's combined sales tax rate**, for states Crossed and not Registered. This is inherently a Preliminary-confidence estimate (see `data-readiness-rules.md`) unless product-level taxability and exemption certificates have been separately reviewed — state so explicitly, don't present it as a precise back-tax bill.

### Marketplace-facilitator note

Amazon collects and remits sales tax directly in every state that has both a sales tax and a marketplace-facilitator law (nearly universal at this point). Shopify/DTC sales carry no such protection — that's the seller's own responsibility. **Some states exclude marketplace-facilitated sales from the seller's own economic-nexus threshold count; others include them.** This varies by state — check it via `/state-tax-lookup`, don't assume either way.

### Sourced threshold pattern (general baseline only — verify every state before use)

| Pattern | Detail | Source |
| :---- | :---- | :---- |
| Most common threshold | $100,000 in sales (transaction-count leg increasingly repealed) | Streamlined Sales Tax Governing Board — Remote Seller State Guidance (official) |
| States that repealed the 200-transaction leg by Jan 1, 2026 | At least 16 states, including Alaska (eff. 1/1/2025), Utah (eff. 7/1/2025), Illinois (eff. 1/1/2026); South Dakota already among them; Kentucky repealing eff. 8/1/2026 | Avalara tax-research summary (market research, not primary source — verify the specific state via `/state-tax-lookup` or the state's own DOR before relying on this list) |

**This table is a sanity-check baseline, not a substitute for per-state verification.** The old `NEXUS-MAP-TEMPLATE.md` said "most states $100K, transaction leg repealed in a growing number" without naming which states or citing a source — this table names specifics and sources them, but the underlying rule (verify per state, every engagement) is unchanged and still binding.

## Part B — Income Tax Nexus

### Why this is a genuinely different question from Part A

Sales tax nexus asks whether the business must collect tax from customers. Income tax nexus asks whether the state can tax the business's own income — a different legal question with two independent triggers.

### Trigger 1 — Physical presence via FBA inventory

Public Law 86-272 protects an out-of-state seller from a state's net income tax **only if the seller's sole in-state activity is soliciting orders for tangible goods shipped in from outside the state.** Inventory physically stored in a state (including an Amazon fulfillment center) is property in that state, and defeats this protection **regardless of sales volume.**

**Important nuance the old template didn't capture:** the Multistate Tax Commission's 2021 revised Statement on P.L. 86-272 (which also treats many common website activities — post-sale chat support, certain cookie-enabled features — as exceeding "mere solicitation") is **the MTC's own interpretation, not binding law.** States may adopt it in whole, in part, or not at all. Check each state's actual adopted posture via `/state-tax-lookup` rather than assuming the MTC's expanded view applies everywhere. FBA inventory presence itself, however, is a more straightforward physical-presence trigger that doesn't depend on whether a state adopted the MTC's internet-activity interpretation — property in the state defeats 86-272 on its own, independent of the website-activity question.

### Trigger 2 — Factor-presence economic nexus

**Correction to the old template's framing:** the old file said factor-presence income tax nexus is "commonly ~$500K, varies by state," implying broad, near-universal adoption. That's not accurate. The Multistate Tax Commission's model **Factor Presence Nexus Standard for Business Activity Taxes** (adopted by the MTC October 17, 2002) sets $500,000 in sales (or $50,000 property, $50,000 payroll, or 25% of total factors) as its model thresholds — but **only eight states have adopted any version of this standard: Alabama, California, Colorado, Connecticut, Michigan, New York, Tennessee, and Virginia** — and most of those eight deviate from the model numbers:

| State | Sales threshold actually used | Deviation from MTC model |
| :---- | :---- | :---- |
| Michigan | $350,000 | Lower than model; also requires active solicitation |
| New York | $1,000,000 | Higher than model |
| California | Indexed for inflation annually | Not a fixed $500K |
| Virginia | No fixed sales threshold — requires only a positive apportionment factor | Materially different test |
| Alabama, Colorado, Connecticut, Tennessee | Closer to the $500K model, but confirm current figure | Verify via `/state-tax-lookup` |

**For every other state, factor-presence income tax nexus simply doesn't exist as a bright-line statute** — income tax nexus in those states depends on traditional physical-presence and case-law-based economic-presence standards, which is a more judgment-dependent, attorney-adjacent question than a threshold check. Do not apply the $500K figure to a state that hasn't adopted a factor-presence standard.

### Step-by-step procedure

1. List every state where FBA inventory was stored during the period (Trigger 1) — each is a nexus state regardless of sales volume.
2. For remaining states with sales but no FBA inventory, check whether that specific state has adopted a factor-presence income tax nexus statute at all (only the eight states above, as of this file's last verification) — if not, this trigger doesn't apply there and any income tax nexus question is a physical-presence/case-law question requiring `/state-tax-lookup` and likely specialist input, not a threshold comparison.
3. For the eight states that have adopted a factor-presence standard, compare sales into that state against **that state's actual current figure** (not the $500K model default) per the table above, verified via `/state-tax-lookup`.
4. Cross-reference both lists against states currently filing income tax returns. The gap is the finding.
5. Estimate exposure carefully — frame as a "start filing here" finding rather than a large back-tax bill unless the math for that specific state's apportioned income and rate actually supports a material number.

## Missing-data treatment

- No sales-by-state data at all: both §3a and §3b are Unable to Conclude — state that the specific report (Amazon Tax Document Library / Shopify United States sales tax report, per `intake-and-document-request.md`) is needed.
- No FBA inventory location history: Part B's Trigger 1 is Unable to Conclude specifically for physical presence — Trigger 2 (factor presence) can still be assessed independently from sales-by-state data alone.
- `/state-tax-lookup` unavailable or a state not covered: that state's threshold determination is Preliminary at best — do not substitute the general baseline table above as if it were a verified per-state figure.

## Assumptions that must be disclosed

- Whether marketplace-facilitated sales were included or excluded from a state's own threshold count, and why
- Which states' thresholds were actually verified via `/state-tax-lookup` versus assumed from the general baseline table
- For Part B, whether a state was confirmed as one of the eight factor-presence-adopting states or was excluded from that analysis entirely

## Exceptions and edge cases

- A state can repeal its transaction-count leg mid-year (three did in this file's own baseline table) — always check effective dates, not just current-year assumptions.
- FBA inventory that was stored only briefly, or in small quantity, still counts as physical presence for Part B Trigger 1 — there is no de minimis exception built into P.L. 86-272 itself.
- A state not on the eight-state factor-presence list is not automatically nexus-free for income tax — it simply means the analysis is a physical-presence/case-law question rather than a bright-line threshold check, which likely needs specialist input rather than a Blueprint-level conclusion either way.

## What Claude may conclude

- Which states show Crossed/Registered status for sales tax, using verified current thresholds
- Which states show FBA physical presence for income tax purposes
- Which of the eight factor-presence states are crossed on sales alone
- That a state's nexus question falls outside a bright-line threshold and needs specialist review, when that's actually the case

## What Claude must not conclude

- Any nexus position based on total sales alone, without checking transaction counts (where still relevant), facilitator carve-outs, and the verified current per-state threshold
- That the MTC's $500K model factor-presence threshold applies in a state that hasn't adopted it
- That the MTC's 2021 internet-activity interpretation of P.L. 86-272 applies in a state that hasn't adopted that specific guidance
- A precise back-tax dollar figure without disclosing that product taxability and exemption certificates weren't independently reviewed
- That a state outside the eight-state factor-presence list is nexus-free for income tax purposes

## Items requiring staff, senior, CPA, attorney, or specialist review

| Trigger | Reviewer |
| :---- | :---- |
| Routine sales-by-state data pull and threshold comparison for a state with a clear, adopted bright-line statute | Staff, with Senior review |
| Any exposure estimate that will appear in the client-facing Blueprint | Senior, then Partner |
| Any P.L. 86-272 posture determination beyond a Preliminary flag; any state not on the eight-state factor-presence list where income tax nexus is a case-law question; any material historical exposure where voluntary disclosure strategy is being considered | Outside counsel / state tax specialist — per `ENGAGEMENT-STANDARDS.md`'s conflict-screening and refuse-the-engagement standards, the Partner decides when to escalate beyond the firm |

## Expected internal output

Both Part A and Part B tables, fully sourced, with every threshold traced to either a verified `/state-tax-lookup` pull or explicitly marked as the unverified general baseline, confidence-labeled per `data-readiness-rules.md`.

## A note on the template's own example brackets

`BLUEPRINT-TEMPLATE.md` §3a shows an illustrative `[$100K / 200 txns]` bracket and §3b shows `[$500K or N/A for inventory]`. Both are placeholders meant to be replaced with real, per-client, per-state figures — do not anchor on the example numbers shown in the template itself. Insert each state's actual verified figure (Part A's baseline table, or Part B's eight-state table) instead.

## Expected client-facing output

`BLUEPRINT-TEMPLATE.md` §3a and §3b tables and narratives, in plain language, framed per `data-readiness-rules.md`'s confidence-to-language table — material exposure estimates always framed with their Preliminary/Moderate qualifier, not as a precise bill.

## Quality-control checklist

- [ ] No nexus conclusion rests on total sales alone
- [ ] Every material state's threshold verified via `/state-tax-lookup`, not assumed from the baseline table
- [ ] Marketplace-facilitator sales isolated from direct/DTC sales before threshold testing
- [ ] Part B's eight-state factor-presence list checked before applying any $500K-style threshold
- [ ] FBA inventory location checked for Part B Trigger 1 independent of the factor-presence analysis
- [ ] Any exposure estimate carries its confidence qualifier into the client-facing draft

## Source list

- [Remote Seller State Guidance — Streamlined Sales Tax Governing Board (official)](https://www.streamlinedsalestax.org/for-businesses/remote-seller-faqs/remote-seller-state-guidance)
- [States eliminating economic nexus transaction thresholds in 2025 — Avalara (market research, verify per state)](https://www.avalara.com/blog/en/north-america/2025/06/states-eliminating-economic-nexus-transaction-thresholds.html)
- [Statement of Information Concerning Practices... Under Public Law 86-272 — Multistate Tax Commission (official)](https://www.mtc.gov/wp-content/uploads/2023/02/StatementofInfoPublicLaw86-272.pdf)
- [MTC Statement on P.L. 86-272 (2023 update) — Multistate Tax Commission (official)](https://www.mtc.gov/wp-content/uploads/2023/04/025-MTC-Statement-on-PL-86-272.pdf)
- [Factor Presence Nexus Standard for Business Activity Taxes — Multistate Tax Commission (official model statute)](https://www.mtc.gov/uniformity/adopted-uniformity-recommendations/factor-presence-nexus-standard-for-business-activity-taxes/)
- [Explanation of the MTC Factor Presence Nexus Standard — Multistate Tax Commission (official)](https://www.mtc.gov/wp-content/uploads/2023/02/Explanation-of-the-MTC-Factor-Presence-Nexus-Standard.pdf)
- `/state-tax-lookup` — internal skill, the primary per-engagement source of truth for current per-state thresholds; this file's tables are a baseline, not a replacement

## Last verified

2026-07-14 — SST and MTC official sources confirmed live this session. The eight-state factor-presence adoption list and its state-specific deviations, and the 16-state 200-transaction-repeal count, are both time-sensitive facts that change as state legislatures act — re-verify at least annually, and always re-verify the specific states in play via `/state-tax-lookup` before finalizing any client-facing conclusion.
