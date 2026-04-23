---
strategy: Self-Employed Health Insurance Deduction (§162(l)) for S Corp Owners
category: core
authority:
  - IRC §162(l) - SE health insurance deduction
  - IRC §1372 - >2% S Corp shareholder treatment as partner for fringe benefits
  - Notice 2008-1 (proper W-2 treatment)
applies_when:
  - entity_type in [S-Corp, LLC-S-Election]
  - owner_W2 > $0 (must have wages from S Corp)
  - owner_pays_health_insurance: true
  - greater_than_2_pct_shareholder: true
earliest_actionable_quarter: Q1 (set up correctly for the year)
latest_actionable_quarter: Q4 (must be on W-2 by year-end)
typical_savings_range: $1500 - $6000
typical_savings_as_pct_of_income: 0.5% - 2%
savings_formula: |
  Annual health insurance premiums × marginal_federal_tax_rate
  Premiums include: medical, dental, vision, qualified LTC for owner, spouse, dependents
  Cannot exceed owner's W-2 wages from S Corp
  Cannot duplicate employer-provided coverage from another employer (own or spouse's)
feasibility: high (for S Corp owners with health coverage)
implementation_complexity: low (mostly a payroll setup issue)
audit_risk: low (standard provision when properly executed)
requires_documentation:
  - Health insurance premium statements showing total annual premiums
  - W-2 with proper box 1 inclusion and box 14 disclosure
  - Form 1120S Schedule K-1 showing the §162(l) information
requires_partner_signoff: false
requires_separate_engagement: false
typical_separate_engagement_fee: null
compatible_stacks:
  - S-Corp-Reasonable-Comp (premiums add to W-2; affects comp analysis)
  - HSA-Optimization (separate strategy; HSA contributions also via W-2 for >2% shareholders)
incompatible_with:
  - Coverage from spouse's employer-sponsored plan that owner is enrolled in (no §162(l) deduction)
prerequisites:
  - S Corp election in place
  - Owner is paid W-2 wages from S Corp
  - Owner owns > 2% of S Corp
industries_best_fit:
  - all S Corp clients
industries_not_applicable:
  - non-S Corp entities
state_specific_considerations: most states conform to federal §162(l) deduction
path_b_compensation_tier: 0
---

# Self-Employed Health Insurance Deduction (§162(l)) for S Corp Owners

A frequently-mishandled procedural strategy. The deduction itself is automatic and substantial; the failure mode is payroll setup, not the strategy itself.

## The basic mechanic

For >2% S Corp shareholders, health insurance premiums paid by the S Corp on behalf of the owner are:

1. **Included in W-2 box 1 wages** (taxable for federal income tax)
2. **Excluded from W-2 box 3 SS wages and box 5 Medicare wages** (no FICA/Medicare on the premium amount)
3. **Disclosed in W-2 box 14** (typically labeled "Health Insurance" or "162L")
4. **Deducted by owner on Form 1040 Schedule 1 line 17** (above-the-line, reduces AGI)

Net effect: federal income tax is neutral (in W-2, out as deduction), but FICA/Medicare savings on the premium amount.

## Who qualifies

- More-than-2% S Corp shareholder (per §1372)
- Receives W-2 from the S Corp
- Pays health insurance premiums (or S Corp pays on owner's behalf)
- NOT eligible if owner or spouse is eligible for subsidized coverage from another employer

## What premiums qualify

- Medical insurance (major medical, ACA marketplace, group plan via S Corp)
- Dental insurance
- Vision insurance
- Qualified long-term care insurance (subject to age-based caps under §213(d)(10))
- Coverage for owner, spouse, dependents, and children under age 27 (whether dependents or not)

What does NOT qualify:
- Disability insurance premiums
- Insurance for a different employer's coverage owner is enrolled in
- After-tax premiums for coverage already provided by another employer

## The W-2 setup that makes this work

The most common Priceless intake error: payroll provider includes the premium in box 3 and box 5 wages, causing FICA/Medicare overpayment.

Correct setup:
- Box 1 (federal wages): Includes premium
- Box 3 (SS wages): Does NOT include premium (subject to SS wage base limit)
- Box 5 (Medicare wages): Does NOT include premium
- Box 14 (other): Disclose the §162(l) amount

If wrong, file W-2c to correct. Refund of FICA/Medicare requested via Form 941-X.

## Deductibility cap

§162(l) deduction cannot exceed:
- Owner's W-2 wages from the S Corp (the wages must be earned income)
- Cannot create or increase a loss

So a low-W-2 S Corp owner with high health insurance premiums may not be able to fully deduct. Coordinate with reasonable comp analysis.

## Implementation steps

1. Confirm S Corp pays health insurance for owner (or set up if not — direct payment by S Corp or reimbursement to owner under accountable plan)
2. Get total annual premium amount from carrier or broker
3. Instruct payroll provider on proper W-2 coding:
   - Add premium to box 1 wages
   - Do NOT add to boxes 3 or 5
   - Disclose in box 14
4. Owner deducts on Schedule 1 line 17
5. Verify K-1 (Schedule K-1, line 17 with code AC for >2% shareholder) shows the SEH info

## Common errors we inherit

- **Premium not on W-2 at all** — owner pays personally, gets no §162(l) deduction
- **Premium in boxes 3 and 5** — FICA/Medicare overpaid, refund recovery needed
- **Premium added to box 1 but no box 14 disclosure** — IRS questioning compliance
- **Spouse coverage included from spouse's employer** — disallowed
- **Deduction taken in year premiums paid by owner directly without S Corp involvement** — may be disallowed; must be paid by S Corp or reimbursed under accountable plan
- **Long-term care deducted at full amount** — subject to age-based caps under §213(d)(10)

## Coordination with reasonable comp

The §162(l) premium amount is part of W-2 wages for purposes of:
- Calculating reasonable comp (premium amount counts as comp paid)
- Calculating Solo 401(k) capacity (employer 25% × W-2 includes premium)
- Calculating HSA contribution timing (both go through W-2 for >2% shareholders)

When advising on reasonable comp, ensure the analysis includes the §162(l) premium component.

## Stacking with HSA

Both flow through W-2 for >2% shareholders. Both are excluded from FICA/Medicare wages. Process is similar but separate amounts:
- §162(l) for health insurance premiums
- §223 for HSA contributions

Both reduce FICA/Medicare base. Both create above-the-line deductions on personal return. Layer them together on the W-2 setup.

## Documentation skill handoff

- W-2 setup instructions for payroll provider
- Premium tracking schedule
- K-1 verification checklist
- §162(l) deduction worksheet for personal return
- Annual review checklist

## Post-OBBBA and current law impact

OBBBA 2025 did not amend §162(l) or §1372(b). §162(l) above-the-line self-employed health insurance deduction continues unchanged.

### Indirect OBBBA impacts

**QBI interaction**: §162(l) deduction reduces AGI (above-the-line deduction on Schedule 1). Reduces taxable income → helps §199A phase-in management. Small but present.

**SALT cap phase-down**: Lower AGI from §162(l) may preserve full SALT cap for affected clients (threshold $505K MAGI 2026).

**Charitable 0.5% AGI floor (2026+)**: Lower AGI = lower floor = more charitable deduction. Secondary effect.

### ACA marketplace coordination

For S Corp owners purchasing on individual marketplace:
- Premium paid through S Corp; included in W-2 Box 1 (not Box 3 for FICA)
- §162(l) deduction taken on Schedule 1
- Advanced Premium Tax Credit reconciliation on Form 8962
- S Corp owners with APTC must reconcile carefully; health insurance treatment affects MAGI which affects APTC eligibility

## Interaction with other strategies

### Coordinates with S-Corp-Reasonable-Comp (critical)

W-2 must cover the health insurance premium amount. If RCReports median is $60K but health insurance costs $20K, W-2 at $60K comfortably covers.

However, if client's reasonable comp is lower (e.g., $30K at 25th percentile for specific situations), and health insurance is $20K, the W-2 amount must still include the $20K premium (non-negotiable per §162(l) procedure). Effective W-2 Box 1 of at least $20K required, even if base comp is lower.

### Coordinates with HSA-Optimization

If client's health plan is HDHP qualifying for HSA, both strategies coexist:
- Health insurance premium: §162(l) deduction
- HSA contribution: separate above-the-line deduction

Both reduce AGI. Stack additively.

### Non-interaction with Hiring-Children / Spousal-Employment

Children's and spouse's wages are separate. Their health insurance (if any) follows different rules — typically treated as standard employer-provided benefits, NOT subject to §1372(b) exclusion from benefits exclusion.

### Coordinates with Solo-401k-SEP-Comparison

Both are deductions. §162(l) reduces AGI directly (Schedule 1 above-the-line). Solo 401(k) employer contribution reduces AGI via Schedule 1 line (one-half SE tax / SEP and qualified plans deduction).

Both can apply in same year. Stack for maximum AGI reduction.

### Non-interaction with QBI beyond AGI reduction

§162(l) deduction is personal; doesn't directly affect QBI computation on the business income side.

## Audit posture

### Risk profile: low when procedure followed; medium when payroll not run correctly

- **LOW** when insurance paid by S Corp, included in owner's W-2 Box 1 (not Box 3), deducted on Schedule 1 line 17, W-2 reconciles correctly
- **MEDIUM** when W-2 incorrect (premium not included in Box 1, or included in Box 3 incorrectly)
- **MEDIUM** when payment not flowing through S Corp (owner pays personally from personal account)
- **HIGH** when §1372(b) benefits treatment attempted for >2% shareholder (cafeteria plan pre-tax salary reduction)
- **HIGH** when spouse as non-2% shareholder added to plan incorrectly

### Audit trigger scenarios

- W-2 Box 1 vs. Box 3 discrepancy (health insurance in Box 1 but not reconciled)
- §162(l) deduction on 1040 without W-2 reporting support
- Cafeteria plan contribution reported for S Corp >2% shareholder (violates §1372(b))
- Health insurance deducted at S Corp level but NOT passed through W-2 to shareholder
- Premium exceeds shareholder's W-2 (§162(l) deduction limited to earned income)

### Defense considerations

- **W-2 reconciliation schedule**: Box 1 includes premium; Box 3 excludes premium
- **Payroll provider documentation**: Gusto or ADP typically handles this correctly if properly set up
- **§162(l) calculation worksheet**: premium + other SE earned income limits
- **§1372(b) compliance**: confirming >2% shareholder treatment
- **Spouse/child coverage**: properly reported if they're also shareholders

### Statute of limitations

- Standard 3-year §6501 limitation

## Deliverable points (documentation skill handoff)

When §162(l) health insurance appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Your 2026 health insurance premium of $[X] is paid by your S Corp and reported as compensation in your W-2 Box 1 (not Box 3 — no FICA impact). You deduct the same $[X] on Schedule 1 as self-employed health insurance, producing a federal deduction with no FICA cost."
- **Why quantification**: Federal savings = $X × marginal rate. Trade-off: premium appears in federal/state taxable income on W-2 Box 1, but the Schedule 1 deduction offsets. Net: FICA savings on the premium amount.
- **Trade-off statement**: Procedure must be followed exactly. Premium MUST flow through S Corp payroll. Cafeteria plan is NOT available for >2% shareholders.
- **Action items**: Confirm payroll provider set up correctly; W-2 reconciliation at year-end
- **Deadline**: Ongoing; W-2 finalization by January

### In the Excel model

- **Tax Projection tab**: §162(l) deduction on Adjustments line
- **Strategies tab**: row for "§162(l) Health Insurance" with federal savings
- **Actions tab**: Payroll provider coordination; W-2 verification
- **Notes tab**: Procedure confirmed; §1372(b) compliance

### In partner-review [REVIEW] callouts

- `[REVIEW: scope — payroll provider set up correctly? Gusto handles; manual client payroll needs verification]`
- `[REVIEW: quantification — premium $[X]; W-2 Box 1 impact confirmed]`
- `[REVIEW: authority — any cafeteria plan for other employees? Exclude owner to prevent §1372(b) issue]`

## Update status

| Verification | Date | Source |
|---|---|---|
| §162(l) above-the-line deduction mechanics | Unchanged 2026-04 | Statutory |
| §1372(b) benefits exclusion for >2% shareholders | Unchanged 2026-04 | Statutory |
| Notice 2008-1 (reporting guidance) | Continuing 2026-04 | IRS |
| OBBBA non-amendment of §162(l) | Verified 2026-04 | P.L. 119-21 full text review |
| W-2 reporting procedure | Unchanged 2026-04 | IRS; Form W-2 instructions |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Post-OBBBA, Interaction, Audit Posture, Deliverable Points)

**Next review trigger**: Changes to §162(l) scope; ACA-related legislation affecting premium tax credit reconciliation
