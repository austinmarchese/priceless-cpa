---
name: tax-projection
description: Phase 2 of quarterly engagement. Produces the baseline tax projection — federal + state — used as the denominator for every strategy recommendation in Phase 3. Reads verified books from Phase 1 (bookkeeping-qa) and the Tax Return Analysis Report from Phase 0.5 to build a current-year projection on actual YTD + annualized remainder, reconciled to OBBBA 2025 law and 2026 indexed amounts (Rev. Proc. 2025-32, Notice 2025-67). Produces a Baseline Projection Memo with federal liability, state liability, safe-harbor target, and variance-to-prior-year analysis. Triggered after Phase 1 passes. Designed for offshore analyst execution with senior staff review of state allocations and aggressive positions.
---

# Tax Projection Sub-Skill

## Purpose

Before we recommend any strategy, we need a defensible baseline. The baseline answers "if we do nothing, what does the client owe?" — and everything in Phase 3 is measured as delta against that number.

A bad projection kills every strategy downstream. If the baseline is off by $20K, the "savings" numbers in the memo are off by $20K. Partners lose credibility with clients when projected-vs-actual diverges without a story.

This sub-skill runs as Phase 2 of any quarterly engagement. Phase 1 (bookkeeping-qa) must have passed — we project from verified books, not from what the client uploaded.

## Inputs required

From Phase 0.5 (tax-return-analysis):
- Tax Return Analysis Report with:
  - Prior-year federal taxable income and tax
  - Prior-year state taxable income and tax (each state)
  - Carryforwards (NOL, capital loss, §179 disallowed, §163(j) interest, §469 passive, QBI, AMT, credits)
  - Basis balances (S Corp stock/debt, partnership outside, at-risk)
  - Elections in place (accounting methods, §168(g) ADS, §179, bonus, §754, §163(j) election-out for RPTB)
  - Prior CPA methodology notes

From Phase 1 (bookkeeping-qa):
- Data Integrity Summary confirming books are clean
- Current YTD P&L by entity
- Current YTD Balance Sheet
- Current YTD payroll register

From client profile:
- Filing status, dependents, state of residence, state ties
- Entity structure (S Corp, partnership, Schedule C, C Corp)
- Industry and business activities
- Known current-year events (sales, acquisitions, major capex, life events)
- W-2 income for owner and spouse
- Passive investment income sources
- Retirement plan contributions YTD

From client upload:
- Prior-year federal return (1040, 1120-S, 1065, 1120) with all schedules
- Prior-year state returns
- Current-year estimated payments made to date
- Current-year W-2s, 1099s available

## Workflow

### Step 1: Read foundation files

- `../shared/FIRM-METHODOLOGY.md`
- `../shared/CLIENT-PROFILE-TEMPLATE.md`
- `../shared/ENGAGEMENT-STANDARDS.md`
- `../shared/OUTPUT-TEMPLATES.md` (Baseline Projection Memo format)
- `FEDERAL-TAX-COMPUTATION.md` (current-year brackets, indexed amounts, OBBBA 2025 modifications)
- `STATE-TAX-BASELINE.md` (state computation shortcuts; load state-specific file from `../states/` as needed)
- `SAFE-HARBOR-METHODOLOGY.md` (§6654 estimated payment safe harbor calculation)

### Step 2: Build entity projections (bottom-up)

For each business entity the client owns:

**Revenue projection**:
- YTD actual revenue from verified P&L
- Remainder-of-year annualization method:
  - If Q1: YTD × 4 baseline, adjusted for known seasonality
  - If Q2: YTD × 2 baseline, adjusted for known Q3/Q4 patterns
  - If Q3: YTD × (12/9) baseline, adjusted for Q4 known events
  - If Q4: YTD + known Q4 remaining
- Override annualization with client-provided forecast where available (flag as client-sourced)

**Expense projection**:
- YTD actual from verified P&L
- Annualize by line item; flag anomalies (one-time items, timing)
- Recurring expenses: YTD × (12/months elapsed)
- Variable expenses: tied to revenue ratio
- Payroll: actual run rate YTD + projected remainder based on headcount

**Depreciation and amortization**:
- Pull §168 schedules from prior-year return (Phase 0.5 extracted)
- Add current-year additions per client capex plan
- Apply OBBBA 2025 rules:
  - 100% bonus depreciation (permanent; property placed in service after 1/19/2025)
  - §179 limits 2026 (indexed per Rev. Proc. 2025-32)
  - §168(k) transition for pre-OBBBA property
- Flag any §168(g) ADS elections (cannot reverse)

**Owner compensation**:
- S Corp: reasonable comp from Phase 2.5 (payroll-analysis) — do not run projection without it
- Partnership: guaranteed payments + §707(c)
- Schedule C: no wage; SE tax on full net
- C Corp: W-2 + 1099 + dividends

**Carryforward application**:
- NOL: 80% of taxable income cap (post-TCJA rule still applies under OBBBA)
- Capital loss: $3,000 ordinary offset cap; remainder carries
- §163(j): current-year business interest expense limit
- §469: passive loss suspension unless passive income offsetting or REPS
- §179 disallowed: carryforward applied to current-year taxable income

### Step 3: Consolidate to owner's 1040

For each owner:

**Income stack**:
- W-2 wages (owner and spouse)
- K-1 from each entity (ordinary, guaranteed payments, §1231, portfolio, §199A)
- Schedule C net
- Schedule E rentals
- Interest, dividends, capital gains
- Retirement distributions
- Other (§83(b), RSUs, options)

**Above-the-line**:
- HSA deduction
- Self-employed retirement (Solo 401(k) / SEP / DB)
- §162(l) SE health insurance (S Corp 2% shareholder)
- SE tax deduction (½ of SE tax)
- Student loan interest (phase-out)

**Itemized vs. standard**:
- Standard deduction 2026: per Rev. Proc. 2025-32
- Itemized components:
  - SALT cap $40,400 (2026; OBBBA; phases down above $500K AGI)
  - Mortgage interest (grandfathered pre-2017 $1M / post-2017 $750K)
  - Charitable: 0.5% AGI floor (OBBBA; cash to public charity 60% ceiling; non-cash 30%/50% depending on type)
  - Medical (> 7.5% AGI)
- Compare; use greater

**§199A QBI deduction**:
- Identify QBI from each entity
- Apply phase-in (OBBBA widened):
  - Single 2026: $191,950 to $241,950 (single)
  - MFJ 2026: $383,900 to $483,900
- SSTB vs. non-SSTB treatment
- W-2 wages and UBIA limits
- Aggregation elections (Treas. Reg. §1.199A-4)

**Taxable income and tax**:
- Apply 2026 brackets (indexed per Rev. Proc. 2025-32)
- OBBBA 35% top rate cap applicable (verify per FEDERAL-TAX-COMPUTATION.md)
- Apply AMT computation (§55; rarely binding post-TCJA but check)
- Capital gains: 0% / 15% / 20% thresholds
- NIIT 3.8% above $250K MFJ / $200K Single thresholds
- Additional Medicare 0.9% above $250K MFJ / $200K Single

**Credits**:
- CTC 2026 amounts
- AOTC / LLC
- Energy credits (residential solar, EV — verify OBBBA modifications)
- Business credits from Schedules K-1 (R&D, WOTC, etc.)

### Step 4: State projection

For each state with nexus:

**Resident state**:
- Load `../states/{STATE}.md` for current-year rules
- Start with federal AGI; apply state modifications
- Apply state deductions, exemptions, credits
- Flat vs. graduated rate per state file
- PTET credit if elected (MOST client S Corps / partnerships should elect where available)

**Nonresident states**:
- Source income to each state per state sourcing rules
- Apply apportionment for businesses (property, payroll, sales; or single-sales-factor per state)
- Credit for tax paid to other states (resident state allows credit up to resident-state tax on same income)
- PTET interaction across states (see `../workflows/MULTI-STATE-MECHANICS.md`)

**Multi-state flag**: if client has presence in 3+ states, escalate to senior staff for apportionment review.

### Step 5: Safe harbor and quarterly estimates

Load `SAFE-HARBOR-METHODOLOGY.md`.

**Federal §6654**:
- Lesser of:
  - 90% of current-year projected tax, OR
  - 110% of prior-year tax (if prior-year AGI > $150K)
- Adjusted for prior-year withholding + estimates already paid
- Remaining quarterly installments computed to hit target

**State**: per state safe harbor rules (vary; most follow §6654 pattern at % of prior or current).

**Withholding optimization**: flag if client can redirect W-2 withholding to cover rather than estimates (withholding treated as ratable; estimates annualized).

### Step 6: Variance-to-prior-year analysis

Compare current-year projection to prior-year actual:
- Federal tax: $X prior → $Y current (variance $Z)
- State tax: $X prior → $Y current (variance $Z)
- Effective rate: X% prior → Y% current
- Top 3 drivers of variance (revenue growth, bonus depreciation, carryforward used, life event, etc.)

Variance > 25% requires narrative explanation and senior staff review.

### Step 7: Produce Baseline Projection Memo

Per `../shared/OUTPUT-TEMPLATES.md` Baseline Projection Memo format:

**Section 1: Summary**
- Federal tax projection: $X
- State tax projection: $X (total across all states)
- Total projected tax: $X
- Effective federal rate: X%
- Effective combined rate: X%
- Variance to prior year: $X (Y%)
- Safe harbor status: on track / short / over

**Section 2: Entity breakdown**
- Each entity P&L projection summarized
- K-1 distributions to owner

**Section 3: Owner 1040 stack**
- Income breakdown
- Deductions breakdown
- QBI breakdown
- Credits breakdown

**Section 4: State detail**
- Each state: allocation, tax, PTET interaction

**Section 5: Safe harbor and quarterly plan**
- Target by installment date
- Paid to date
- Remaining required

**Section 6: Variance analysis**
- Prior vs. current with drivers
- Narrative for variances > 25%

**Section 7: Assumptions and flags**
- All assumptions the projection depends on (explicit list)
- Open items where analyst lacked data
- Partner escalation items (aggressive positions, multi-state allocations, large-variance explanations)

**Section 8: Handoff to Phase 3**
- This baseline becomes the denominator for strategy deltas
- Strategies may shift baseline (e.g., bunching charitable, timing equipment purchase); document which baseline assumptions are mutable vs. locked

## Outputs

Hand off to Phase 3 (`tax-strategy/`):
- Federal taxable income number
- State taxable income numbers
- Marginal federal rate (for strategy delta computation)
- Marginal state rate(s)
- Effective combined rate
- Safe harbor status (drives Q4 urgency)
- Carryforwards available to apply
- Elections in place affecting strategy choice
- Variance drivers (drives strategy targeting)

## Partner escalation required

- Multi-state projection with 3+ states
- Prior-year basis was unclear or prior CPA methodology suspect
- OBBBA transition issues on §168 property placed in service before/after 1/19/2025
- §163(j) limitation hitting; RPTB election consideration
- §199A aggregation decision affecting multiple entities
- NIIT optimization (grouping election under Treas. Reg. §1.469-4)
- AMT binding (rare but material)

## What this sub-skill does NOT do

- Does not set reasonable comp (that's Phase 2.5 payroll-analysis)
- Does not recommend strategies (that's Phase 3 tax-strategy)
- Does not convert projection to client memo (that's Phase 4 synthesis + partner)
- Does not override bookkeeping findings (Phase 1 blockers stop Phase 2)

## Who operates this sub-skill

- **Offshore analysts**: run entity projections, 1040 stack, state projections (where states are Tier 2 client-heavy states with established playbook)
- **US senior staff**: review multi-state, aggressive positions, OBBBA transition issues, variance narrative
- **Partner**: reviews baseline before Phase 3 strategy work begins; baseline becomes the memo denominator

Baseline projection that has not been partner-reviewed does NOT proceed to Phase 3 for Full Wealth tier engagements.
