---
strategy: Backdoor Roth IRA
category: core
authority:
  - IRC §408 - IRA rules
  - IRC §408A - Roth IRA rules
  - IRC §408(d)(3) - IRA distribution rules
  - Notice 2014-54 (pro-rata rule in retirement plan distributions)
  - Tax Cuts and Jobs Act (TCJA) permanent blessing of strategy
applies_when:
  - AGI_above_Roth_direct_contribution_limit: true
    (Single: phase-out $150K-$165K in 2025, $153K-$168K in 2026; MFJ: $236K-$246K in 2025, $242K-$252K in 2026)
  - no_pretax_traditional_IRA_balance: true OR willing_to_address_pro_rata
  - has_earned_income: true
earliest_actionable_quarter: Q1 (contribution year) | Q4 (year-end)
latest_actionable_quarter: Q1 following tax year (contributions allowed through April 15)
typical_savings_range: $2000 - $10000 (per year, compounding for decades)
typical_savings_as_pct_of_income: varies; long-term compounding matters most
savings_formula: |
  Annual contribution × years to retirement × compound growth rate × marginal tax rate saved
  2025: $7,000 annual contribution (+$1,000 catch-up age 50+) = $8,000 for 50+
  2026: $7,500 annual contribution (+$1,100 catch-up age 50+) = $8,600 for 50+
  MFJ couple: double capacity via spousal Roth IRA
  Net present value of tax-free growth depends on time horizon, return assumptions, and retirement bracket
  Typical decade-scale value: $30K-$150K per contribution year
feasibility: high (when pro-rata rule doesn't apply)
implementation_complexity: low
audit_risk: low (post-TCJA explicitly blessed by Congress)
requires_documentation:
  - Form 8606 (Non-deductible IRA Contributions) — CRITICAL, tracks basis
  - Non-deductible IRA contribution records
  - Conversion Form 5498 (from custodian)
  - 1099-R reporting conversion
requires_partner_signoff: false (standard strategy)
requires_partner_signoff_if: existing pre-tax IRA balance and pro-rata rule management
requires_separate_engagement: false
typical_separate_engagement_fee: null
compatible_stacks:
  - Mega-Backdoor-Roth (after-tax 401(k) to Roth, separate strategy)
  - Charitable-Bunching-DAF (large deduction year pairs with Roth conversion)
  - Roth-Conversion-Planning (traditional IRA to Roth, different mechanism)
incompatible_with:
  - SEP-IRA (SEP balance triggers pro-rata rule)
  - SIMPLE IRA (same issue)
  - Existing rollover IRA with pre-tax balance (triggers pro-rata)
prerequisites:
  - Earned income
  - No material pre-tax traditional IRA balance (or willingness to manage pro-rata)
industries_best_fit:
  - all (any earner above Roth direct limit)
industries_not_applicable:
  - None universally; pro-rata rule is the gating issue
state_specific_considerations: most states follow federal treatment
path_b_compensation_tier: 0
---

# Backdoor Roth IRA

For high-income clients above the direct Roth contribution limit, the backdoor Roth uses a legitimate two-step process: non-deductible traditional IRA contribution followed by conversion to Roth. TCJA permanently blessed this strategy.

## The basic mechanic

1. Make non-deductible traditional IRA contribution (2025: $7,000 / $8,000 age 50+; 2026: $7,500 / $8,600 age 50+)
2. Immediately (or shortly after) convert traditional IRA to Roth IRA
3. File Form 8606 tracking the contribution as non-deductible (establishes basis)
4. Conversion is tax-free (to the extent of basis) — contribution already taxed
5. Growth in Roth is tax-free forever

Net effect: client captures $7K/year of Roth capacity despite exceeding direct Roth limits.

## Why this matters at scale

$7K/year for 30 years compounded at 7% = $662K. All tax-free in retirement.

Compared to putting the same $7K in taxable account at 7% then paying capital gains: effective after-tax wealth meaningfully lower.

For married couple (spousal Roth), double that: $14K/year into Roth.

## The pro-rata problem

IRC §408(d)(2) aggregates all traditional IRA balances for conversion basis calculation.

Example of the problem:
- Client has $100K pre-tax rollover IRA (from old 401(k))
- Client makes $7K non-deductible contribution to traditional IRA
- Total traditional IRA = $107K ($100K pre-tax + $7K basis)
- Client converts $7K to Roth
- Pro-rata rule: only $7K/$107K = 6.5% of conversion is basis (tax-free)
- Remaining 93.5% ($6,545) is taxable as ordinary income

This defeats the strategy.

## Pro-rata rule workarounds

### Option 1: Reverse rollover to 401(k)

If client has an active 401(k) (with employer, or Solo 401(k)) that accepts rollovers:
- Roll the pre-tax IRA into the 401(k)
- Pre-tax balance now outside IRA system for pro-rata calc
- Proceed with backdoor Roth cleanly

Limitations:
- 401(k) must accept rollovers (check plan document)
- Basis cannot be rolled into 401(k) — only pre-tax balance
- Solo 401(k) typically accepts; employer plans vary

### Option 2: Convert everything, take the tax hit

Convert entire traditional IRA to Roth (one large tax event). After conversion, balance is zero, no pro-rata issue going forward.

Works when:
- Pre-tax balance is small (say <$25K)
- Client has ability to pay tax on conversion from non-retirement funds
- Client is in a low-income year (conversion tax less painful)

### Option 3: Accept pro-rata

Just do the backdoor Roth with pro-rata applying. Reduced but non-zero benefit:
- Portion of conversion is taxable
- Still get Roth capacity for the basis portion
- Document basis correctly for future conversions

### Option 4: Don't do backdoor Roth

For clients with large pre-tax IRA balances where workarounds aren't feasible, the backdoor Roth may not be worth the complexity.

## Critical: Form 8606

Form 8606 MUST be filed in any year with non-deductible traditional IRA contribution. Tracks basis.

Common errors:
- Form 8606 not filed — basis not tracked, future conversions fully taxed despite basis existing
- Prior years' missed 8606s — reconstruct basis, file retroactively where possible
- Form 8606 lost — request from IRS or reconstruct from custodian records

For clients Priceless inherits with inconsistent 8606 filing: this is a cleanup task, usually worth amending returns where statute still open.

## Timing

**Best practice**: Contribute and convert same day (or within days). Minimizes:
- Growth on the contribution between steps (small amount, but taxable at conversion)
- Any pro-rata aggregation timing issues

**Contribution deadline**: April 15 of following year for contribution year (per §219(f)(3)). Conversion can happen any time.

**Conversion deadline**: By December 31 of conversion year. No extensions.

## Strategy for couple

Married filing jointly can do TWO backdoor Roths (one each) — 2026 combined $15,000 (or $17,200 if both age 50+). Each spouse needs own earned income (or spousal IRA rules for non-earning spouse).

Spousal IRA: non-earning spouse can contribute based on earning spouse's income. Backdoor still works.

## Interaction with Mega Backdoor Roth

Different strategies. Can stack:
- Backdoor Roth: $7,500/year (2026) via traditional IRA → Roth IRA
- Mega Backdoor Roth: up to ~$45K-$47K/year via after-tax 401(k) → Roth 401(k) or Roth IRA

Both can be done in the same year by the same client.

## Common errors

- **Form 8606 not filed** (the single biggest error)
- **Pro-rata not managed** (client has SEP-IRA balance, doesn't address, backdoor mostly taxable)
- **Step transaction concern** (IRS has accepted this post-TCJA; no longer a real risk for traditional 2-step backdoor)
- **Conversion to Roth IRA of deceased spouse's beneficiary IRA** (different rules)
- **Contribution limit exceeded** (mixing backdoor with direct contributions when partial direct is allowed in phase-out range)

## Implementation steps

1. Verify no material pre-tax IRA balance (or plan to address via workaround)
2. Open traditional IRA and Roth IRA at same custodian if not already (Fidelity, Vanguard, Schwab preferred)
3. Make non-deductible contribution to traditional IRA (2025: $7,000 or $8,000 age 50+; 2026: $7,500 or $8,600 age 50+)
4. Convert entire traditional IRA balance to Roth IRA (custodian has internal conversion function)
5. File Form 8606 with year's 1040
6. Track basis for future years
7. Repeat annually

## Documentation skill handoff

- Backdoor Roth implementation checklist
- Form 8606 tracking worksheet (multi-year basis)
- Pro-rata rule analysis worksheet
- 401(k) rollover instructions (for Option 1)
- Client-facing explanation of the strategy

## When to refer out

For clients with material complications:
- Inherited IRAs in the picture
- Multiple pre-tax IRA balances across custodians
- Prior-year compliance issues with 8606s
- Conversion in year of Roth recharacterization rules change

These warrant extra care. Partner-level or specialty referral.

## Update status

File updated 2026-04 with:
- 2025 Roth IRA phase-out: Single $150K-$165K / MFJ $236K-$246K
- 2026 Roth IRA phase-out: Single $153K-$168K / MFJ $242K-$252K (per IRS Notice 2025-67)
- 2025 IRA contribution limit: $7,000 ($8,000 age 50+)
- 2026 IRA contribution limit: $7,500 ($8,600 age 50+, using new $1,100 catch-up)
- Stacking examples updated with 2026 amounts

## Post-OBBBA and current law impact

OBBBA 2025 did not amend §408 (IRA rules) or §408A (Roth IRA rules). Backdoor Roth mechanics unchanged by OBBBA.

### Indirect OBBBA impacts

**SECURE 2.0 Roth catch-up mandate (effective 2026)**: For owners with prior-year W-2 > $150K, 2026 catch-up contributions to employer plans (Solo 401(k), etc.) must be Roth. Doesn't affect backdoor Roth IRA directly but reinforces the Roth-preference environment for high earners.

**OBBBA estate exemption at $15M permanent**: Roth IRA balances included in estate but grow tax-free. For high-net-worth clients, Roth IRA + backdoor strategy compounds with estate planning. Larger Roth balances at death mean more tax-free inheritance to beneficiaries (though §401(a)(9)(H) 10-year distribution rule for non-spouse heirs limits the runway).

**No direct §408 amendments**: contribution limits, phase-out thresholds, pro-rata rule (§408(d)(2)) all operate as before.

### 2026 contribution limits (IRS Notice 2025-67)

- IRA contribution: $7,500 base (up from $7,000 in 2025)
- IRA catch-up age 50+: $1,100 (up from $1,000 in 2025, first increase in years)
- Total age 50+ contribution: $8,600
- Roth IRA phase-out MFJ: $242,000 - $252,000
- Roth IRA phase-out Single: $153,000 - $168,000

## Interaction with other strategies

### Stacks with Solo-401k-SEP-Comparison (critical)

Solo 401(k) does NOT count for §408(d)(2) pro-rata purposes — qualified plans are separate from IRA aggregation. For clients executing backdoor Roth annually, Solo 401(k) is strictly preferred over SEP IRA.

If client has SEP IRA and wants backdoor Roth:
- Roll SEP balance INTO Solo 401(k) (qualified plan-to-qualified plan rollover)
- SEP balance no longer counts for IRA pro-rata
- Backdoor Roth strategy preserved

This rollover is a common Priceless recommendation when migrating SEP client to combined Solo 401(k) + backdoor Roth strategy.

### Stacks with Mega-Backdoor-Roth

Mega Backdoor Roth (after-tax employee contribution to Solo 401(k) or employer 401(k) converted to Roth) is separate from backdoor Roth IRA. Both can be executed in the same year.

Annual potential for high-income W-2 employee (age 50+):
- Backdoor Roth IRA: $8,600 (2026 with catch-up)
- Mega Backdoor Roth in 401(k): up to $47,500 (§415(c) - $24,500 deferral - employer match if any)
- Combined: up to $56,100 of Roth contributions annually

### Stacks with QBI-Optimization

Backdoor Roth is an after-tax contribution — does NOT reduce current-year taxable income. So it does NOT help manage §199A phase-in.

Distinction from traditional IRA contribution (which does reduce taxable income, but is typically non-deductible for high-earners due to phase-out, making the backdoor strategy the practical path).

### Stacks with Roth-Conversion-Planning

Backdoor Roth is a specific subset of Roth conversion — non-deductible traditional IRA contribution, then immediate conversion. Broader Roth conversion planning (converting existing pre-tax IRA or 401(k) balances) is separate strategy; backdoor is the "get new money in" pathway.

For clients doing both: backdoor Roth each year (new money) + strategic Roth conversions in low-income years (existing pre-tax balances).

## Audit posture

### Risk profile: low when Form 8606 filed consistently; medium when pro-rata rule mishandled

- **LOW** when non-deductible contribution + immediate conversion + Form 8606 + no pre-tax IRA balance
- **LOW-MEDIUM** when executed over multiple years with consistent 8606 filings
- **MEDIUM** when Form 8606 missing for any year (basis not established; pro-rata rule applied incorrectly)
- **HIGH** when pre-tax IRA balance exists at year-end and Form 8606 reports 100% of conversion as basis (incorrect — pro-rata required)

### Audit trigger scenarios

- Pattern of large Roth conversions from "newly contributed" IRA without basis documentation
- Roth conversions exceeding total non-deductible IRA contributions (suggests pro-rata missed)
- Form 8606 missing for contribution years
- IRA-to-Roth conversion in same year as contribution (normal for backdoor, but watched for pattern)
- Large SEP IRA balance + backdoor Roth claim (pro-rata violation)

### Defense considerations

- **Form 8606 for EVERY year with non-deductible IRA contribution**, even if no conversion that year
- **Pro-rata rule documentation**: Dec 31 balance of all traditional/SEP/SIMPLE IRAs; basis tracking; conversion amount reconciled
- **Custodian statements**: confirming contribution made to traditional IRA; conversion to Roth IRA
- **Prior year 8606s** cumulative (basis carries forward)
- **Timing records**: contribution date and conversion date (typically days apart for pure backdoor)

### Statute of limitations

- Standard 3-year §6501 limitation on the year of conversion
- Basis errors can carry forward and affect all future conversions — practically unlimited window
- §6501(e) 6-year if understatement > 25% (rare for backdoor)

## Deliverable points (documentation skill handoff)

When backdoor Roth appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Execute backdoor Roth IRA contribution of $7,500 ($8,600 if age 50+) for 2026. Make non-deductible traditional IRA contribution by April 15, 2027; convert to Roth IRA within days of contribution."
- **Why quantification**: Current-year deduction value: $0 (after-tax contribution). Long-term value: Roth growth is tax-free; avoid income limit on direct Roth contributions.
- **Trade-off statement**: No current-year deduction. Pro-rata rule applies if client has ANY pre-tax IRA balance — must address before executing (typically by rolling to Solo 401(k) if available).
- **Action items**: 
  - Verify no pre-tax IRA balance (or plan to eliminate)
  - Open traditional IRA at custodian (if none exists)
  - Non-deductible contribution
  - Conversion
  - File Form 8606
- **Deadline**: April 15, 2027 for 2026 contribution; conversion typically same calendar year for simplicity

### In the Excel model

- **Tax Projection tab**: No current-year deduction impact. Informational line item only.
- **Strategies tab**: Row for "Backdoor Roth IRA" with long-term value (future tax-free growth; no current-year savings)
- **Actions tab**: Annual contribution + conversion milestones
- **Notes tab**: Pro-rata rule check confirmed; Form 8606 tracking; basis carryforward

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — client has pre-tax IRA balance of $[X]; pro-rata rule destroys strategy; plan to eliminate?]`
- `[REVIEW: scope — Form 8606 for [prior year] missing; basis unestablished; recommend amended return?]`
- `[REVIEW: quantification — spouse also doing backdoor? Separate analysis?]`

### Template language

> **Execute your 2026 backdoor Roth IRA**: Contribute $7,500 to your traditional IRA (non-deductible, since your income exceeds Roth IRA contribution limit of $242,000 MFJ), then convert to your Roth IRA. We confirm you have no pre-tax traditional IRA balance — pro-rata rule doesn't apply. File Form 8606 to establish basis. Long-term value: all future growth in the Roth IRA is tax-free.
>
> Consider adding the spousal backdoor Roth — $7,500 parallel contribution for your spouse. Combined couple: $15,000 of Roth-IRA capacity annually.

## Update status

| Verification | Date | Source |
|---|---|---|
| 2026 IRA contribution limit ($7,500) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 IRA catch-up age 50+ ($1,100) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 Roth IRA phase-out MFJ ($242K-$252K) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 Roth IRA phase-out Single ($153K-$168K) | Verified 2026-04 | IRS Notice 2025-67 |
| §408(d)(2) pro-rata rule mechanics | Unchanged 2026-04 | Statutory |
| Form 8606 requirement | Unchanged 2026-04 | §408(o) |
| OBBBA non-amendment of §408 / §408A | Verified 2026-04 | P.L. 119-21 full text review |
| SECURE 2.0 §602 Roth catch-up mandate (indirect) | Effective 2026-01-01 | SECURE 2.0 |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Post-OBBBA, Interaction, Audit Posture, Deliverable Points)

**Next review trigger**: 2027 indexed amounts (IRS Notice, Oct/Nov 2026); any case law on backdoor Roth step-transaction doctrine arguments
