---
name: payroll-analysis
description: Phase 2.5 of quarterly engagement (runs after Phase 2 projection, before Phase 3 strategy). Deep-dive analysis of payroll structure for S Corp clients — specifically reasonable compensation sizing, §162(l) health insurance treatment, HSA coordination, retirement plan capacity, and family member employment. Produces a Payroll Position memo that feeds strategy recommendations. Loads when the engagement involves S Corp ownership and wages.
---

# Payroll Analysis Sub-Skill

## Purpose

S Corp payroll is Priceless's most-frequent optimization area. This sub-skill runs a focused analysis of the client's payroll structure to surface:

- Whether reasonable compensation is defensible (audit posture) and optimal (tax efficiency)
- Whether §162(l) health insurance flows correctly (procedural)
- Whether HSA and retirement plans coordinate with payroll
- Whether family employment (spouse, children) is structured correctly
- Whether payroll tax prepayments are sized properly for Phase 2 projection safe harbor

Phase 2.5 (not Phase 3) because these findings feed strategy ranking in Phase 3 but aren't themselves "strategies" — they're payroll architecture questions that set the stage.

## When this sub-skill runs

- Client is S Corp (any tier) OR
- Client has complex payroll with family employment OR
- Client's prior year has payroll-related issues flagged in Return Analysis

Not run for:
- Sole proprietor clients (no W-2 from the business)
- Partnership clients (guaranteed payments, not W-2)
- C Corp clients (different reasonable comp rules — specialty analysis if needed)
- Clients with no owner compensation (investor-only pass-throughs)

## Inputs required

From Phase 0.5 (Return Analysis Report):
- Prior year W-2 officer compensation (Form 1120S Line 7)
- Prior year §162(l) deduction (personal 1040)
- Prior year reasonable comp methodology if documented

From Phase 1 (Data Integrity Summary):
- Current YTD payroll register (Gusto or equivalent)
- 941 filings YTD with wage and tax details
- W-2s year-to-date

From Phase 2 (Projection):
- Projected current-year net income (S Corp)
- Projected current-year owner total income

From client profile:
- Owner role, hours worked, responsibilities
- Industry
- Number of employees
- Any family members employed
- Existing retirement plans

## Workflow

### Step 1: Read foundation files

- `../shared/FIRM-METHODOLOGY.md` (Operator 3 reasonable comp)
- `../shared/CLIENT-PROFILE-TEMPLATE.md`
- `../tax-strategy/strategies/S-CORP-REASONABLE-COMP.md`
- `../tax-strategy/strategies/HEALTH-INSURANCE-S-CORP-162L.md`
- `../tax-strategy/strategies/HSA-OPTIMIZATION.md`
- `../tax-strategy/strategies/SOLO-401K-SEP-COMPARISON.md`

### Step 2: Current reasonable comp position

Gather:
- Current year YTD W-2 wages (owner) from Gusto
- Projected current-year W-2 (run-rate or explicit plan)
- §162(l) health insurance amount (expected annual premium)
- Any pre-tax benefit amounts (HSA, retirement plan, commuter, etc.)

Compute the composition of projected W-2:
```
Projected W-2 Box 1 wages:
  Base salary                          $X
  §162(l) health insurance             $X  (for >2% shareholder, included in Box 1)
  HSA contribution (if through W-2)    $X  (for >2% shareholder, included in Box 1)
  (minus) 401(k) employee deferral    ($X) (reduces Box 1 for pre-tax deferrals)
  = Total Box 1                        $X

Projected W-2 Box 3 SS wages:
  Base salary                          $X
  (not including §162(l) for >2%)
  (not including HSA for >2%)
  (plus 401(k) deferral included)
  = Total Box 3                        $X (subject to SS wage base)

Projected W-2 Box 5 Medicare wages:
  Same as Box 3 structure              $X (no wage base cap)
```

Red flags:
- §162(l) premium in Box 3/5 (FICA overpayment)
- HSA contribution in Box 3/5 (FICA overpayment)  
- Missing 401(k) Box 12 Code D (deferral not properly reported)

### Step 3: Reasonable comp sizing analysis

The three-step methodology:

**Step 3a: Role benchmarking**

Source: RCReports output (if available), OR BLS OES data (https://www.bls.gov/oes/), OR industry salary surveys.

For the owner's role(s), get:
- Median wage for the role, industry, geographic area, time commitment
- Adjusted for owner's specific credentials (CPA, JD, advanced degrees → upward)
- Adjusted for owner's experience
- Adjusted for firm size (solo vs. small team)
- Adjusted for time commitment (full-time vs. part-time)

Output: Reasonable Comp Benchmark Range (e.g., $180K-$220K for this client's role).

**Step 3b: Entity income context**

Check the relationships:
- Total S Corp net income (projected): $X
- Projected W-2 Box 1 (owner): $Y
- Non-owner employee wages: $Z

Ratios to check:
- Owner's comp as % of total distributable income: Y / (Y + net income) — is this reasonable?
- Owner's comp vs. next-highest-paid non-owner employee: ratio of Y / Z, if Z exists
- Industry norms for owner-to-employee ratios

Red flags:
- Owner at $50K while S Corp profits are $500K (under-comped)
- Owner at $500K while S Corp profits are $100K (over-comped — unusual)
- Owner at $60K while senior employees earn $180K (out-of-line)

**Step 3c: Target recommendation**

Given benchmark range and entity context, select target W-2.

Default approach:
- If current W-2 in benchmark range: no change needed (maintain)
- If current W-2 below benchmark: recommend increase (dollar amount specific)
- If current W-2 above benchmark: evaluate — is over-comp intentional (DB plan funding, QBI positioning)?

Target W-2 = specific dollar recommendation with rationale.

### Step 4: Coordination with other strategies

Reasonable comp isn't isolated. Cross-check against:

**Solo 401(k) capacity**:
- Employer contribution is 25% of W-2 wages
- Higher W-2 → larger employer contribution capacity
- But higher W-2 = more FICA/Medicare cost
- Net: $X additional W-2 creates $X × 15.3% FICA cost but $X × 25% = $0.25X of 401(k) capacity at the marginal federal rate
- For most clients, 401(k) stacking beats FICA savings above the employer contribution threshold

**Defined Benefit Plan**:
- DB contribution is actuarially determined based on highest-3-year average comp
- Higher W-2 supports larger DB contribution
- For Full Wealth tier clients planning DB for 2027+, current-year W-2 sets baseline

**§162(l) health insurance**:
- Deductible up to lesser of premium amount or W-2 wages
- Under-comped S Corp owner can't fully deduct large premium
- Comp must be at least premium amount for full §162(l)

**QBI (§199A)**:
- For SSTB above threshold: higher W-2 reduces QBI (since QBI = income - reasonable comp)
- For non-SSTB above threshold: higher W-2 supports 50% × W-2 QBI limit (which can increase deduction)
- Zone analysis critical here (below threshold, phase-in, above)

**Social Security wage crediting**:
- Paying up to SS wage base ($168,600 in 2024, ~$178K projected 2026) credits fully
- Beyond wage base, SS crediting continues via Medicare (unlimited) but SS benefit cap reached
- Marginal retirement benefit diminishes after SS wage base — usually not a reason to comp higher

### Step 5: §162(l) health insurance review

Check current setup:

Correct setup:
- Premium paid by S Corp (not owner personally)
- Included in W-2 Box 1 wages
- NOT in Box 3 (SS wages)
- NOT in Box 5 (Medicare wages)
- Disclosed in Box 14 (labeled "Health Insurance" or "§162(l)")
- Owner deducts on Schedule 1 line 17

Red flags:
- Owner paying premium personally (no S Corp involvement) — no §162(l)
- Premium in Box 3/5 — FICA overpayment, 941-X correction needed
- Premium not in Box 1 — FICA savings fine but §162(l) deduction missed
- Premium disclosed on W-2 without matching Schedule 1 deduction

Output: §162(l) correctness verified, or corrections needed.

### Step 6: HSA coordination

If client has HDHP and HSA:

Correct setup for >2% shareholder:
- S Corp pays HSA contribution (or reimburses owner)
- Amount in W-2 Box 1 (taxable for federal income tax)
- NOT in Box 3 (no SS tax)
- NOT in Box 5 (no Medicare)
- Owner deducts on Schedule 1 line 13 (HSA deduction)

Alternative (simpler but doesn't save FICA):
- Owner contributes to HSA personally
- Deducts on Schedule 1 line 13
- S Corp not involved (no FICA savings)

Red flags:
- Contribution through cafeteria plan (not allowed for >2% shareholder)
- Amount in Box 3/5 (FICA overpayment)
- Amount in Box 12 Code W (cafeteria plan coding wrong for >2% shareholder)

Spouse (non-shareholder) and other W-2 employees can use cafeteria plan normally.

### Step 7: Retirement plan capacity analysis

Given projected W-2 and current retirement plan setup:

**If Solo 401(k)**:
- Employee deferral capacity: $23,500 (2025 projected) + $7,500 catch-up if 50+
- Employer capacity: 25% of W-2 Box 3 wages (adjusted for SS wage base), less employee deferral
- Total capacity: up to $70,000 (2025, +$7,500 catch-up)

**If SEP-IRA**:
- Employer contribution only: 25% of W-2 Box 3
- Same $70K cap
- No employee deferral
- No Roth option
- Simpler administration

**If DB Plan (stacked)**:
- Actuarially determined
- Typical range $80K-$250K depending on age and comp

**Recommendation**:
- Current-year contribution target
- Deadlines (employee deferral by Dec 31; employer by tax filing deadline incl. extension)
- Any contribution change recommendations

### Step 8: Family employment review

If spouse or children on payroll:

**Spouse**:
- Confirm role, wages reasonable
- Separate W-2 with own retirement plan capacity (doubles 401(k) potential for married couple)
- Health insurance: spouse as non-owner employee can participate in cafeteria plan normally
- Review coordination with owner's reasonable comp

**Children (under 18, sole prop / parent-partnership only)**:
- FICA exemption if structure qualifies
- Wages up to standard deduction ($14,600 2024) tax-free to child
- Document legitimate work
- Set up Roth IRA for decades of tax-free growth

**Children (S Corp employer)**:
- FICA applies (no exemption via S Corp)
- Consider family management sole prop structure as workaround (flagged in hiring children strategy file)

Red flags:
- Family member W-2 with no legitimate work (disguised gift/distribution)
- Wages massively above market rate
- Spouse "employed" 60 hours/week while also full-time elsewhere

### Step 9: Produce Payroll Position Memo

```
PAYROLL POSITION MEMO
================================================================
Client: [ID]
Data as of: [DATE]
Analyst: [name]

SECTION 1: Reasonable Compensation Position
Current W-2 Box 1 (projected):    $X
Benchmark Range (RCReports):      $X - $X
Recommended Target:               $X
Rationale: [methodology and specific factors]

SECTION 2: W-2 Composition
Projected Box 1:                  $X
Projected Box 3 (SS wages):       $X
Projected Box 5 (Medicare):       $X
Box 14 (§162(l)):                 $X
Box 12 codes: [list]

[Red flags if any; corrections needed]

SECTION 3: §162(l) Health Insurance
Annual Premium:                   $X
Current W-2 Treatment: [correct | corrections needed]
Annual Federal Tax Savings: $X (premium × marginal federal rate)
FICA/Medicare Savings: $X (premium × 15.3% or 2.9%)

SECTION 4: HSA Coordination
Annual Contribution Target:       $X
Current W-2 Treatment: [correct | corrections needed]
>2% Shareholder Rules Applied: [yes/no]

SECTION 5: Retirement Plan Capacity
Plan Type: [Solo 401(k) | SEP | DB | Other]
Maximum Contribution Given Projected W-2: $X
Current Contribution Plan: $X
Recommendation: $X

SECTION 6: Family Employment
Spouse: [employed/not employed; wages; rationale]
Children: [employment status; wages; compliance]

SECTION 7: Payroll Prepayment Summary (for Phase 3)
Federal Withholding YTD:          $X
Employer-Side FICA (informational): $X
State Withholding:                 $X
[Flows into safe harbor analysis]

SECTION 8: Recommendations (priority order)
1. [Specific action, deadline, savings estimate]
2. [Specific action]
...

SECTION 9: Open Questions for Partner
[Anything requiring judgment]
```

### Step 10: Pass to Phase 3

Phase 3 (strategy) uses payroll position to:
- Properly size reasonable comp recommendation (don't recommend change if already optimal)
- Size retirement plan strategies correctly
- Flag §162(l) or HSA corrections as priority strategies
- Consider family employment strategies already in place

## Quality checks

- [ ] Benchmark data source documented (RCReports, BLS, survey)
- [ ] W-2 composition checked for Box 1 / 3 / 5 correctness
- [ ] §162(l) treatment verified
- [ ] HSA treatment verified (especially >2% shareholder rules)
- [ ] Retirement plan capacity computed
- [ ] Family employment reviewed if applicable
- [ ] Corrections identified separately from strategic recommendations

## What this sub-skill does NOT do

- Does not prepare W-2c corrections or 941-X (separate engagement)
- Does not establish new retirement plans (refer to TPA or custodian)
- Does not size DB plan contributions (actuary required)
- Does not replace partner review of reasonable comp methodology
- Does not opine on whether a family member's work is "legitimate enough" (partner judgment)

## Reference files

- `../shared/FIRM-METHODOLOGY.md`
- `../tax-strategy/strategies/S-CORP-REASONABLE-COMP.md`
- `../tax-strategy/strategies/HEALTH-INSURANCE-S-CORP-162L.md`
- `../tax-strategy/strategies/HSA-OPTIMIZATION.md`
- `../tax-strategy/strategies/SOLO-401K-SEP-COMPARISON.md`
- `../tax-strategy/strategies/DEFINED-BENEFIT-OVERLAY.md`
- `../tax-strategy/strategies/SPOUSAL-EMPLOYMENT.md`
- `../tax-strategy/strategies/HIRING-CHILDREN-LEGITIMATELY.md`
- `REASONABLE-COMP-DEEP-DIVE.md`
