---
strategy: Mega Backdoor Roth (After-Tax 401(k) to Roth)
category: core
authority:
  - IRC §401(k) - qualified plan rules
  - IRC §415(c) - annual additions limit
  - IRC §402(c)(2) - rollover treatment
  - Notice 2014-54 (clarifying in-service distributions)
  - Plan-specific provisions (must be explicitly allowed)
applies_when:
  - has_qualified_401k_plan_allowing_after_tax_contributions: true
  - has_in_service_distribution_feature OR has_in_plan_Roth_rollover: true
  - earned_income > elective_deferral_limit: true (so room for after-tax)
earliest_actionable_quarter: Q1 (set up process early)
latest_actionable_quarter: Q4 (contributions by Dec 31)
typical_savings_range: $5000 - $50000+ (per year, compounding)
typical_savings_as_pct_of_income: 2% - 15%
savings_formula: |
  Annual after-tax contribution × years × compound return × tax differential
  
  2025 §415(c) combined limit: $70,000 ($77,500 with age 50+ catch-up; $81,250 with age 60-63 catch-up)
  2026 §415(c) combined limit: $72,000 ($80,000 with age 50+ catch-up; $83,250 with age 60-63 catch-up)
  
  Less: elective deferrals ($23,500 in 2025 / $24,500 in 2026; plus catch-ups)
  Less: employer contributions (match, profit-sharing)
  = Remaining capacity for after-tax contributions (up to ~$45K-$47K typical)
  
  Roth conversion makes this Roth forever (tax-free growth)
  Net present value: typically $50K-$200K per contribution year compounded over career
feasibility: medium (depends on plan features)
implementation_complexity: medium (plan permitting required)
audit_risk: low
requires_documentation:
  - Plan document confirming after-tax contribution feature
  - Plan document confirming in-service distribution or in-plan Roth rollover
  - Year-end contribution records
  - In-service distribution or rollover confirmation
  - Form 1099-R showing conversion (with code G if direct; code 1 if distributed then rolled)
requires_partner_signoff: false (standard strategy when plan allows)
requires_separate_engagement: false (but may require plan amendment if Priceless's Solo 401(k) structure)
typical_separate_engagement_fee: null (for client's own plan); $500-$1,500 if plan amendment needed
compatible_stacks:
  - Backdoor-Roth-IRA (separate, stack both for $53K+ Roth annually)
  - Solo-401k-SEP-Comparison (if Solo 401(k), need plan amendment for mega backdoor feature)
  - Defined-Benefit-Overlay (stacking DB + DC limits apply, plan design required)
incompatible_with:
  - Plans that don't allow after-tax contributions (most employer plans)
  - Plans that don't allow in-service distributions or in-plan Roth rollovers
prerequisites:
  - Qualifying 401(k) plan with the right features
  - Earned income exceeding regular deferral capacity
  - Cash flow to fund after-tax contributions
industries_best_fit:
  - software-ai-companies (employer plans often sophisticated)
  - investment-firms (often have custom plan design)
  - doctors-medical-practices (practice group plans sometimes)
  - high-earning-professionals (via employer plan or custom Solo 401(k))
industries_not_applicable:
  - Clients without access to qualifying plan
state_specific_considerations: federal treatment; states follow
path_b_compensation_tier: 0
---

# Mega Backdoor Roth

For clients whose 401(k) plan allows after-tax contributions AND in-service distributions or in-plan Roth rollovers, this strategy captures up to ~$46K annually of additional Roth capacity — far beyond the $7K/year direct or backdoor Roth IRA.

## The basic mechanic

Three moving pieces:

1. **After-tax contributions to 401(k)** — separate from employee pre-tax/Roth deferrals and employer contributions. Within the §415(c) annual additions limit.
2. **In-service distribution OR in-plan Roth rollover** — plan feature allowing movement of after-tax balance.
3. **Rollover to Roth** — either in-plan (to Roth 401(k) sub-account) or to outside Roth IRA.

Net effect: convert after-tax basis contributions to Roth-form savings with tax-free growth forever.

## The math

2025 combined §415(c) annual additions limit: $70,000 ($77,500 age 50+; $81,250 age 60-63)
2026 combined §415(c) annual additions limit: $72,000 ($80,000 age 50+; $83,250 age 60-63)

Subtract:
- Employee deferrals: $23,500 (2025) / $24,500 (2026); plus applicable catch-up
- Employer match and profit-sharing: varies by plan

Remaining is after-tax contribution capacity. Common scenarios (using 2026 limits):

**Software engineer at tech company, $260K salary, 6% employer match:**
- §415(c) limit: $72,000
- Employee pre-tax: $24,500
- Employer match: $15,600
- Remaining after-tax capacity: $31,900
- 30 years × $32K at 7% compounded = $3M+ tax-free

**Solo 401(k) for self-employed at $360K compensation cap (S Corp W-2):**
- §415(c) limit: $72,000
- Employee pre-tax: $24,500
- Employer contribution: 25% × W-2 wages up to $360K cap
- Depending on W-2 level: if employer contribution already maxes remaining room, no mega backdoor capacity; if employer contributes less, room for after-tax
- For Solo 401(k), mega backdoor requires custom plan document (standard custodian prototypes typically don't allow)

For Solo 401(k), the strategy typically requires deliberate plan design to allow after-tax + enable the rollover.

## Plan feature requirements

Plan must explicitly permit:

### After-tax contributions

Distinct from Roth 401(k) contributions. After-tax contributions are:
- Post-tax dollars going in
- Grow tax-deferred until distribution
- Principal is tax-free on distribution (basis); earnings taxable unless converted to Roth

Not all plans offer this. Most large corporate 401(k)s do; most standard Solo 401(k) custodian prototypes do NOT.

### In-service distribution (of after-tax money)

Allows withdrawal from after-tax sub-account while still employed. Required to roll out to an external Roth IRA.

Or alternatively:

### In-plan Roth rollover

Allows conversion from after-tax sub-account to Roth 401(k) sub-account within the same plan. Doesn't require in-service distribution.

## Timing

**Contribute then convert quickly**. Similar to backdoor Roth IRA logic:
- Contributions can happen throughout the year
- Convert each contribution (or accumulated after-tax balance) quickly to minimize earnings growth in the taxable after-tax portion
- Earnings between contribution and conversion are ordinary income at conversion

**Annual checkpoint**: Before year-end, verify:
- Total 401(k) contributions under §415(c) limit
- All after-tax contributions converted (or nearly so)
- Form 5498 from custodian received

## Implementation for Priceless clients

### Client with employer 401(k) that allows mega backdoor

- Verify plan features (after-tax contributions + in-service or in-plan Roth)
- Enroll in after-tax contributions at payroll (usually separate election)
- Set up automatic in-service distribution or in-plan Roth rollover (often quarterly)
- Document flow each year

### Client with Solo 401(k)

Standard custodian prototypes (Fidelity, Schwab) typically do NOT offer mega backdoor features. Workarounds:

- **Amend plan document** to add after-tax contribution and in-service distribution features (requires third-party administrator / plan attorney)
- **Switch to custom plan** with full features (various TPAs offer, $500-$1,500/year admin fee)
- **Accept limitation** — skip mega backdoor, use other strategies

For high-net-worth Solo 401(k) clients where mega backdoor would capture $30K+/year, the $500-$1,500 admin fee easily justified.

### Employer plan verification

Many clients don't know whether their plan allows mega backdoor. Request:
- Plan document from HR or plan administrator
- Summary Plan Description (SPD)
- Contribution election forms (often reveal categories)

If plan allows but client hasn't been using the feature, material opportunity.

## Critical considerations

### Basis tracking

After-tax contributions create basis. If not converted to Roth immediately, basis must be tracked (similar to non-deductible IRA contributions).

Form 8606 (?): 8606 is for IRA basis, not 401(k). 401(k) basis tracked by plan administrator and reflected on 1099-R at distribution.

### §402(g) vs. §415(c) confusion

§402(g) = elective deferral limit ($23K + catch-up) — covers pre-tax and Roth 401(k).

§415(c) = annual additions limit ($69K + catch-up) — covers ALL contributions (employee deferrals + employer + after-tax).

After-tax is limited by §415(c) minus everything else, NOT by §402(g).

### "Pro-rata" in-service distributions

Some plans require in-service distribution to be pro-rata (portion of pre-tax + portion of after-tax). This can defeat the strategy — you'd pull out pre-tax money you can't roll to Roth IRA without paying tax.

Plan features matter. Ideal: in-service distribution of after-tax balance ONLY. If plan requires pro-rata, workaround needed (often in-plan Roth rollover of after-tax portion only, which is allowed).

### Rollover mechanics

**In-plan Roth rollover** (easier, no transfer):
- After-tax balance converted to Roth 401(k) sub-account within plan
- Basis portion tax-free; earnings portion (if any accumulated) ordinary income at conversion
- Form 1099-R issued with conversion code

**In-service distribution to Roth IRA** (more flexible):
- After-tax balance distributed from plan
- Basis portion rolled to Roth IRA (tax-free)
- Earnings portion: can roll to Traditional IRA (preserves tax deferral) or take as taxable distribution
- Form 1099-R issued

For most clients, in-plan Roth rollover is simpler. For clients wanting Roth IRA flexibility (more investment options, no RMDs in retirement), in-service distribution to Roth IRA better.

## Common errors

- **Client unaware plan offers the feature** — missing massive opportunity
- **Contribution exceeded §415(c) limit** — corrective distribution required, complicated
- **Conversion delayed too long** — earnings accumulate that become taxable at conversion
- **Pro-rata distribution from plan** not handled properly
- **Solo 401(k) standard plan used** — no mega backdoor capability, never amended

## Stacking opportunities

- **Backdoor Roth IRA**: Separate $7,500/year (2026) / $8,600 age 50+ catch-up. Stack for ~$50K+/year Roth capacity.
- **Spousal Backdoor + Mega Backdoor**: For couples, double up. Potential $100K+/year combined if both spouses have mega backdoor-eligible plans.
- **DB Plan**: Cash Balance Plan or traditional DB stacks within §415 limits (DB and DC limits coordinated). Plan design required.
- **HSA**: Separate vehicle, $8,750 family / $4,400 self-only (2026). Plus $1,000 catch-up age 55+.

Total Roth + Retirement capacity for high-income couple age 50+ with all features, 2026:
- Solo 401(k) employee deferral: $32,500 ($24,500 + $8,000 catch-up) — pre-tax or Roth
- Solo 401(k) employer contribution: balance of $80,000 §415(c) limit
- After-tax / mega backdoor: up to §415(c) limit minus other contributions
- Backdoor Roth IRA: $7,500 + $1,100 catch-up = $8,600
- Spouse backdoor Roth IRA: $8,600
- Spouse Solo 401(k) (if employed): $32,500 + employer
- HSA (family): $8,750 + $1,000 catch-up per spouse over 55 = up to $10,750
- Cash Balance Plan: $100K-$300K+ additional

Combined sheltering capacity for high-income 55+ couple: $200K-$500K+ annually with all features.

**SECURE 2.0 Roth catch-up mandate (2026+)**: If W-2 wages from the employer exceeded $150K in prior year, all catch-up contributions for 2026 must be Roth (after-tax), not pre-tax. Plan must allow Roth for the catch-up to be made at all.

## Documentation skill handoff

- Plan feature verification checklist
- After-tax contribution election template
- Rollover instruction template (to Roth IRA) or in-plan Roth rollover request
- Annual contribution tracking worksheet
- Coordination with backdoor Roth IRA
- Solo 401(k) plan amendment template (when needed)

## When to refer out

- Solo 401(k) plan amendment (use plan attorney or specialty TPA)
- DB + DC stacking design (actuary required)
- Correcting §415(c) limit overages (complicated remediation)
- Large employer plans with multiple custom features

Priceless identifies opportunities and coordinates; specialty providers handle plan design.

## Update status

File updated 2026-04 with:
- 2025/2026 §415(c) limits ($70K/$72K)
- 2025/2026 elective deferral limits ($23,500/$24,500)
- 2025/2026 age 50+ catch-up ($7,500/$8,000)
- SECURE 2.0 age 60-63 catch-up ($11,250)
- SECURE 2.0 Roth catch-up mandate effective 2026 for high earners
- 2026 HSA limits

## Post-OBBBA and current law impact

OBBBA 2025 did not amend §401(k) or Mega Backdoor Roth mechanics. Strategy continues unchanged under SECURE 2.0 framework.

### Indirect OBBBA impacts

**QBI interaction**: Mega Backdoor contributions are AFTER-TAX — do NOT reduce taxable income. Strategy doesn't help §199A phase-in management. Use Solo 401(k) pre-tax contributions for TI reduction; use Mega Backdoor for tax-free growth.

**Estate exemption at $15M permanent**: Large Roth balances compound pre-tax and pass tax-free at death (subject to §401(a)(9)(H) 10-year rule for non-spouse beneficiaries). Mega Backdoor builds substantial Roth balances quickly for high earners — material estate planning benefit.

**SECURE 2.0 Roth catch-up mandate (2026)**: Indirect effect. Mandatory Roth catch-up for W-2 > $150K clients means more Roth already happening in the plan. Mega Backdoor stacks on top — still available.

## Interaction with other strategies

### Stacks with Backdoor-Roth-IRA

Both can execute in same year. Distinct vehicles:
- Backdoor Roth IRA: $7,500 (2026; $8,600 age 50+) via IRA → Roth IRA
- Mega Backdoor Roth: up to $47,500 (2026) via 401(k) → Roth subaccount or Roth IRA

Annual combined Roth contribution capacity for age 50+ high earner in qualifying plan: $56,100.

### Stacks with Solo-401k-SEP-Comparison

Requires Solo 401(k) (SEP cannot do Mega Backdoor; no after-tax subaccount). This is one of the key reasons Solo 401(k) > SEP for high-income owners.

Mega Backdoor within Solo 401(k):
- Employee pre-tax deferral: $24,500 (2026)
- Employer contribution (25% × W-2, capped at §415(c)): up to $47,500
- After-tax subaccount contribution: §415(c) - pre-tax deferral - employer = remaining capacity
- Immediate in-service conversion to Roth subaccount

Total Solo 401(k) account flow: $72,000 (all of §415(c)) with substantial Roth portion.

### Stacks with S-Corp-Reasonable-Comp

W-2 level drives Mega Backdoor capacity (employer contribution based on W-2; after-tax room = §415(c) - pre-tax - employer).

Optimization:
- Higher W-2 → larger employer contribution → less after-tax room (but same §415(c) total)
- Lower W-2 → smaller employer contribution → more after-tax room for Mega Backdoor
- Trade-off: FICA cost vs. Roth conversion value

For high-income S Corp owners aiming to maximize Roth: set W-2 moderately, rely on Mega Backdoor to fill §415(c) with after-tax → Roth flow.

### Stacks with Defined-Benefit-Overlay

When stacking DB with Solo 401(k), §404(a)(7) combined 25% rule may limit employer DC contribution. But employee deferral ($24,500) and after-tax contributions STILL available up to §415(c).

Mega Backdoor can continue even when DB stack limits employer DC contribution. Valuable capacity preservation.

### Stacks with QBI — NO direct interaction

Mega Backdoor is after-tax. No TI reduction. Does not help QBI phase-in management.

## Audit posture

### Risk profile: low when plan properly supports; high when plan doesn't actually support after-tax contributions

- **LOW** when Solo 401(k) plan document explicitly permits after-tax contributions AND in-service distributions/conversions AND after-tax subaccount properly segregated
- **LOW** when §415(c) limit tracked and not exceeded
- **HIGH** when plan document doesn't permit (contributions treated as excess; 6% excise tax)
- **HIGH** when §415(c) limit exceeded across all contribution sources
- **HIGH** when after-tax contributions reported as pre-tax (misclassification on W-2 Box 12)

### Audit trigger scenarios

- Large in-service Roth conversion from after-tax subaccount (unusual pattern)
- §415(c) excess contribution reported
- Plan document doesn't support after-tax (verified via TPA audit)
- Form 1099-R reporting mismatch with Form 5498 (conversion reporting)
- Controlled group / ASG issue (owner has other businesses; plan treated as single-employer when actually part of aggregated employer)

### Defense considerations

- **Plan document explicitly permits after-tax contributions and in-service conversions** — this is non-negotiable
- **§415(c) tracking schedule**: pre-tax deferral + employer + after-tax = within limit
- **Custodian statements** showing after-tax subaccount separate from pre-tax
- **1099-R and 5498 reconciliation**: after-tax contribution + conversion properly reported
- **Controlled group screening**: owner's other business interests reviewed for aggregation issues

### Statute of limitations

- Standard 3-year §6501 limitation
- Excess contribution: §4973 6% excise tax per year until corrected; long runway if uncaught

## Deliverable points (documentation skill handoff)

When Mega Backdoor Roth appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Execute Mega Backdoor Roth in your Solo 401(k). Contribute $[X] after-tax to the plan; convert immediately to Roth subaccount. Total 2026 Roth flow: $[Y] (combining with your $24,500 employee deferral if also elected as Roth)."
- **Why quantification**: Current-year deduction: $0 (after-tax contribution). Long-term value: tax-free growth over decades on $[X] annually. Compounded over 20 years at 7% return: original $47,500 becomes $183,000+ of tax-free wealth.
- **Trade-off statement**: After-tax contribution not currently deductible. Liquidity reduced (retirement account). §415(c) cap requires coordination with other plan contributions.
- **Action items**: Verify plan permits after-tax and in-service conversion; contribute; convert same day or near-same-day
- **Deadline**: December 31, 2026

### In the Excel model

- **Tax Projection tab**: No current-year deduction impact (line item only for informational purposes)
- **Strategies tab**: row for "Mega Backdoor Roth" showing annual Roth contribution and long-term value
- **Actions tab**: After-tax contribution; immediate conversion; annual cycle
- **Notes tab**: Plan document verification; §415(c) tracking; controlled group screening confirmed

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — plan document permits after-tax? In-service conversion?]`
- `[REVIEW: scope — controlled group check for other businesses?]`
- `[REVIEW: quantification — §415(c) aggregate across all contribution sources verified?]`

### Template language

> **Execute your 2026 Mega Backdoor Roth**: Contribute $47,500 after-tax to your Solo 401(k) after-tax subaccount (the remaining §415(c) capacity after your $24,500 pre-tax deferral). Convert immediately to the Roth subaccount within the same plan. No current-year deduction, but $47,500 compounds tax-free going forward — substantial long-term wealth building.

## Update status

| Verification | Date | Source |
|---|---|---|
| 2026 §415(c) cap ($72,000) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 elective deferral ($24,500) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 age 50+ catch-up ($8,000) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 age 60-63 super catch-up ($11,250) | Verified 2026-04 | IRS Notice 2025-67; SECURE 2.0 §109 |
| SECURE 2.0 Roth catch-up mandate (effective 2026) | Verified 2026-04 | SECURE 2.0 §603 |
| After-tax contribution mechanics | Unchanged 2026-04 | §402A; Treas. Reg. |
| In-service distribution / conversion rules | Unchanged 2026-04 | Plan document controls; §401(k)(2) |
| OBBBA non-amendment | Verified 2026-04 | P.L. 119-21 full text review |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Post-OBBBA, Interaction, Audit Posture, Deliverable Points)

**Next review trigger**: 2027 indexed amounts; any SECURE 3.0 legislation; IRS guidance on after-tax subaccount conversion mechanics
