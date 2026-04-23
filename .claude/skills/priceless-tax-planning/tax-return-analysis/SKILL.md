---
name: tax-return-analysis
description: Analyzes prior year tax returns (Form 1040, 1120S, 1065, 1120) to establish baseline context for planning. Loaded as Phase 0.5 of any quarterly engagement, between client profile loading and bookkeeping QA. Extracts carryforwards, identifies prior-year errors or missed strategies, tracks basis and AAA, verifies prior-year positions align with documentation, and flags items requiring current-year follow-through. Triggers when analyst uploads a redacted prior-year return and asks "what should I know about this return before I start planning?" Produces a structured Return Analysis Report that feeds Phase 1 (bookkeeping QA), Phase 2 (projection), and Phase 3 (strategy).
---

# Tax Return Analysis Sub-Skill

## Purpose

Before projecting or strategizing, we need to understand what's actually on the prior-year return. The filed return is the baseline. If the return has errors, missed strategies, or unsupported positions, the current-year plan must account for them.

This sub-skill runs as Phase 0.5 of any quarterly engagement. Not Phase 1 — Phase 0.5, because it runs BEFORE bookkeeping QA. Why: the return tells us what to expect in the books (e.g., if prior-year return shows $180K W-2 from the S Corp, YTD payroll should track to ~$90K by June).

## Inputs required

- Prior year personal return (1040 with all schedules, all K-1s received, any state return)
- Prior year business return(s) (1120S, 1065, 1120 — all entities the client owns material interest in)
- Client profile (per CLIENT-PROFILE-TEMPLATE.md)

Optional but valuable:
- Two-years-prior return (catches trend issues, verifies carryforward consistency)
- Prior-year workpapers (if we prepared the return; otherwise often unavailable for new-to-Priceless clients)

## Workflow

### Step 1: Read foundation files

- `../shared/FIRM-METHODOLOGY.md`
- `../shared/CLIENT-PROFILE-TEMPLATE.md`
- `../shared/ENGAGEMENT-STANDARDS.md`

### Step 2: Analyze the personal return (1040)

Read systematically. For each section, extract and flag:

**Filing and identification:**
- Filing status (MFJ, single, HOH, MFS, QW)
- Dependents; any changes expected in current year
- State of residence — confirm matches client profile
- Spouse return status changes (divorce in progress, etc.)

**Income items:**
- W-2 wages — which entity(ies), compare to reasonable comp expectations
- Interest income (taxable and tax-exempt; tax-exempt may indicate muni holdings relevant to NIIT)
- Dividend income (qualified vs. ordinary)
- Capital gains (short-term vs. long-term; realized losses available for future harvesting)
- Schedule C — why isn't this in an entity if it's substantial?
- Schedule E (rentals, K-1s) — flag inconsistent prior-year treatment
- IRA/401k distributions — taxable amounts, RMDs if 73+
- Social Security — taxable amounts
- Other income — unusual items warrant investigation

**Adjustments to income:**
- HSA deduction — confirms §223 contribution; flag if missing when client has HDHP
- Self-employed retirement contributions
- Self-employed health insurance (§162(l)) — specifically flag >2% S Corp shareholders where missing
- Student loan interest
- Educator expenses

**Deductions:**
- Standard vs. itemized
- If itemized: review Schedule A (SALT cap, mortgage interest, charitable)
- Charitable contributions — verify substantiation for large amounts

**Credits:**
- Child tax credit — confirm dependents
- Foreign tax credit — flag international holdings
- Energy credits — often missed, often available

**Taxes:**
- Federal income tax
- Additional Medicare Tax (0.9% above $200K single / $250K MFJ on earned income)
- Net Investment Income Tax (3.8% on investment income above $200K/$250K)
- Self-employment tax
- AMT — if fired, why?

**Payments:**
- Federal withholding
- Estimated payments by quarter
- Prior-year overpayment applied forward
- Refundable credits

**Refund or owed:**
- Was safe harbor met, or was client surprised?

### Step 3: Analyze business returns

For each business return:

**1120S specific:**
- Officer compensation (Line 7) — compare to reasonable comp expectations
- §162(l) health insurance in box 1 wages (and NOT in box 3/5)
- K-1 Schedule K line items
- Schedule L (balance sheet) — reconcile to bookkeeping if required
- Schedule M-1 / M-2 — book-to-tax reconciliation, AAA
- AAA balance — critical for distribution planning
- Shareholder basis — often not tracked; flag if unclear
- State income tax paid at entity level (PTET)
- Any distributions in excess of basis — taxable as capital gain

**1065 specific:**
- Partner shares of income, deductions, credits
- Guaranteed payments
- Capital accounts (tax basis)
- Outside basis (not on return)
- Special allocations
- §754 election status

**1120 specific:**
- Accumulated E&P
- Dividends paid
- Retained earnings
- Reasonable comp (C Corp rules differ from S Corp)
- NOL carryforwards

### Step 4: Extract carryforwards

Catalog every carryforward.

From 1040:
- Net Operating Loss (§172) — year originated, amount, 80% limitation post-TCJA
- Capital loss carryforward — ST and LT split
- Passive Activity Loss (§469) — by activity, at-risk basis
- Charitable contribution carryforward — 5-year limit by year
- Foreign Tax Credit carryover — 10-year limit
- General Business Credit carryover — 10-year limit by year
- AMT Credit carryover
- §179 carryforward (business income limitation)
- Investment Interest Expense carryover

From entity returns:
- Entity-level NOLs
- Passive loss carryforwards at entity level
- §179 at entity level
- AMT credit at entity level

### Step 5: Track basis

**S Corp basis (§1367):**
- Stock basis: prior year end + current year income - current year loss - current year distributions
- Loan basis: loans from shareholder
- At-risk basis
- Any distributions in excess of basis this year or prior?

**Partnership basis (§705):**
- Outside basis
- Tax basis capital account (post-2020 requirement)
- Inside basis
- Recourse vs. nonrecourse debt allocations

Flag any client where basis is unclear — may warrant separate basis study engagement.

### Step 6: Error and missed-strategy detection

**Procedural errors:**
- Missing forms (no 8606 for Roth conversions, no 8275 for disclosed positions, no 8824 for §1031)
- Math errors
- Wrong filing status
- Missing K-1 disclosures

**Missed strategies:**
- S Corp reasonable comp obviously wrong (0 comp, unusually low)
- §199A QBI deduction missing or miscalculated
- §162(l) missing for >2% S Corp shareholders with health insurance
- Home office not claimed when clearly qualifying
- Augusta Rule not applied when client would qualify
- PTET election not made in PTET-offering state for owner above SALT cap
- Missed depreciation
- QBI aggregation election missing (multi-entity owner)
- §121 exclusion not claimed on residence sale
- Cost seg study not done on commercial property
- §1031 exchange botched
- Roth conversion missed in low-income year
- Loss harvesting missed
- HSA contribution not maxed with HDHP

**Aggressive positions requiring attention:**
- Positions without authority support
- Disclosures that should have been made
- Positions hard to defend if challenged

For each finding:
- Amendable? (Within statute of limitations)
- Warrants amendment? (Cost-benefit)
- Requires disclosure on current return?
- How communicated to client?

### Step 7: Prior-CPA assessment

If prepared by another firm:
- Was the return competent? (Thorough elections, proper schedules, defensible positions)
- Systematic issues? (Recurring misses)
- Client-specific issues?
- Any suggestion of bad faith? (Rare; if seen, escalate)

Frame factually for partner. Do not editorialize.

### Step 8: Current-year implications

For each finding:
- Carryforwards: ensure current-year return uses properly
- Basis issues: flag for basis study or distribution analysis
- Errors: amendment decision needed
- Missed strategies: implement current year if still available
- Aggressive positions: continue or unwind decision

### Step 9: Produce Return Analysis Report

```
TAX RETURN ANALYSIS REPORT
================================================================
Client: [ID]
Prepared Year: [YYYY] (filed [DATE])
Prepared By: [Priceless | Prior Firm]
Preparer Competence: [Generally Competent | Competent with Gaps | Material Issues]
Analyzed By: [analyst], [date]

SECTION 1: Filing Summary
[Filing status, state, AGI, taxable income, total tax, refund/owed]

SECTION 2: Income Mix
[Table: W-2, K-1, Schedule C/E, interest, dividends, capital gains]

SECTION 3: Entity Summary (per business return)
[Revenue, net income, officer comp, distributions, K-1 to owner]

SECTION 4: Carryforwards (critical for current year)
[Each carryforward: year originated, amount, expiration]

SECTION 5: Basis Position
[S Corp stock/loan basis, partnership outside basis, gaps]

SECTION 6: Procedural Issues
[Missing forms, math errors, with amendment/disclosure recommendation]

SECTION 7: Missed Strategies
[Strategies that could have been claimed; still available current year?]

SECTION 8: Aggressive Positions
[Positions warranting partner review for continuity]

SECTION 9: Prior-CPA Assessment (if applicable)
[Factual assessment; client communication considerations]

SECTION 10: Current-Year Implications
[What flows into current-year planning]

SECTION 11: Open Questions for Partner
[Requires partner judgment]
```

This report goes into engagement packet and is referenced throughout Phases 1-4.

## Special handling

### Multi-year engagement context

For clients Priceless has served 2+ years, compare against trailing records:
- Did prior recommendations get implemented?
- Are carryforwards tracked consistently?
- Did open items from last year roll into this year's return?

### Foreign considerations

Flag for partner:
- Form 8938 (FATCA) filings or potential requirement
- Form 114 (FBAR) filings or potential requirement
- Schedule B Part III positive answers
- Form 5471, 8865, 8858, 3520 filings
- Foreign tax credit claimed

International tax is high-complexity; material findings warrant partner and possibly specialty counsel.

### Cryptocurrency

Flag for partner:
- Form 1040 crypto question answered "yes"
- Material Schedule D transactions that may be crypto
- References to digital assets anywhere
- Missing crypto reporting despite exchange activity

### PR Act 60 clients

For PR-relocated clients:
- Form 1040 vs. Puerto Rico-source income allocation
- §933 exclusion claims
- Form 8898 filing (year of move)
- Decree compliance and reporting

## What this sub-skill does NOT do

- Does not prepare amended returns (separate engagement decision)
- Does not opine on prior CPA competence to client (partner handles)
- Does not make amendment decisions (partner decides)
- Does not substitute for basis studies when materially unclear
- Does not replace detailed technical review by partner on unusual returns

## Reference files

- `../shared/FIRM-METHODOLOGY.md`
- `../shared/ENGAGEMENT-STANDARDS.md`
- `../shared/CLIENT-PROFILE-TEMPLATE.md`
- `CARRYFORWARD-TRACKING.md`
- `BASIS-TRACKING.md`
- `PRIOR-CPA-PATTERNS.md` (builds over time from live engagements)
