---
strategy: S Corp Election Analysis
category: secondary
authority:
  - IRC §1361 - S Corp definition and eligibility
  - IRC §1362 - S Corp election mechanics
  - Form 2553 - Election by Small Business Corporation
  - Rev. Proc. 2013-30 - late S election relief
  - Rev. Proc. 2022-19 - broader automatic relief procedures
applies_when:
  - net_self_employment_income > $80000: true (lower bound)
  - ideally net_SE_income > $150000: true (typical break-even)
  - is_currently_sole_prop_or_SMLLC_or_LLC_partnership: true
  - has_consistent_income_pattern: true (not one-time windfall)
  - owner_willing_to_run_payroll: true
earliest_actionable_quarter: Q1 (for current year, must elect by March 15)
latest_actionable_quarter: Q4 (late election possible under Rev. Proc. 2013-30)
typical_savings_range: $5000 - $25000 per year (FICA savings on distribution portion)
typical_savings_as_pct_of_income: 3-10% of net income
savings_formula: |
  Without S election: 15.3% SE tax on 92.35% of net SE income (up to SS wage base), then 2.9% Medicare on all, plus 0.9% additional Medicare above thresholds
  
  With S election: Only W-2 wages subject to FICA (15.3% on wage portion). Distributions NOT subject to FICA.
  
  Net savings = (Distribution amount) × 15.3% up to SS wage base; × 2.9% above
  Minus: Additional admin costs (payroll, separate return, state filings): $2K-$5K/year
  Minus: Any increased reasonable comp vs. natural comp
feasibility: high (mechanical)
implementation_complexity: medium (election + ongoing compliance)
audit_risk: medium (reasonable comp scrutiny ongoing)
requires_documentation:
  - Form 2553 (timely filed OR late election relief narrative)
  - RCReports or similar reasonable comp benchmark
  - Payroll records
  - Corporate formalities documentation
  - Entity form (state LLC registration with federal S election)
requires_partner_signoff: true
requires_separate_engagement: no (generally)
typical_separate_engagement_fee: null
compatible_stacks:
  - S-Corp-Reasonable-Comp (downstream requirement)
  - QBI-Optimization (non-SSTB W-2/UBIA play)
  - Solo-401k-SEP-Comparison
  - PTET-Election-By-State
incompatible_with:
  - Net SE income < $80K (admin costs exceed savings)
  - Foreign or non-resident alien shareholder (S Corp eligibility)
  - Corporate shareholder (generally)
  - >100 shareholders
  - Single-class-of-stock violations
prerequisites:
  - US entity (or foreign eligible entity with election)
  - All shareholders US individuals (or certain trusts/estates)
  - ≤100 shareholders
  - Single class of stock (voting differences OK, economic rights must match)
  - No ineligible shareholders (no C Corps, partnerships as shareholders)
industries_best_fit:
  - Real Estate Agents at $150K+
  - Professional services (Law, CPA, Consulting) non-SSTB for QBI
  - Medical Practice owners
  - Any profitable service business with consistent $150K+ net
industries_less_fit:
  - High-SE-income earners already maxing SS wage base (diminishing returns)
  - Income under $80K (admin costs wash savings)
state_specific_considerations: |
  CA: $800 min franchise tax + 1.5% net income (diminishes S Corp value)
  NY: $25-$200 fixed tax, reasonable
  IL: Personal property replacement tax 1.5% of net
  TN: Franchise/excise tax 6.5% on S Corp income (material)
  TX, FL, NV, WY, SD, WA: No state income tax (pure S Corp benefit)
  NH: Does not conform to federal S election (treats as C Corp) — careful
path_b_compensation_tier: 0
---

# S Corp Election Analysis

Evaluating whether a self-employed taxpayer or LLC should elect S Corp status for federal tax purposes. The core mechanic: trade simpler admin for FICA savings on profit distributions.

## The basic mechanic

### Without S Corp election (sole prop, SMLLC, partnership)

- Net SE income × 92.35% × 15.3% SE tax (up to SS wage base) + 2.9% Medicare above
- Plus 0.9% additional Medicare above $200K single / $250K MFJ
- All net profit subject to SE tax (up to SS wage base for Social Security portion)

### With S Corp election

- Owner must be W-2 employee paid "reasonable compensation"
- W-2 wages subject to FICA (7.65% employer + 7.65% employee = 15.3% on SS portion; 1.45% + 1.45% = 2.9% Medicare; 0.9% additional above thresholds on employee side)
- Remaining profit distributed as shareholder distribution — NOT subject to FICA
- Savings = distribution amount × 15.3% (up to SS wage base) and × 2.9% (above)

## Break-even analysis

**Admin cost overhead for S Corp**:
- Separate federal Form 1120-S return: $500-$1,500 prep cost
- State S Corp return: varies
- Payroll service (Gusto, ADP, etc.): $30-$100/month
- State payroll tax registrations
- Partnership of time in onboarding

Total: $2,000-$5,000/year additional admin vs. sole prop.

**Break-even net SE income**: where FICA savings > admin cost.

Approximate: $80K net income minimum. Below that, admin eats savings.

**Clean economic win**: $150K+ net income.

**Strong economic win**: $250K+ net income.

## Detailed break-even example

**Sole prop with $200K net SE income (2026)**:

- SE tax: $200K × 92.35% × 15.3% up to SS wage base ($184,500) = ~$25,887 + 2.9% on balance
- Precise: $184,500 × 15.3% = $28,229 (SS+Medicare on wage base) + ($185,000 - $184,500) × 2.9% = ~$14.50 additional — minor above wage base
- Total SE tax: ~$28,243
- Deduction for ½ SE tax on 1040: $14,122

**Same income with S Corp election, reasonable comp $100K, distribution $100K**:

- W-2 $100K: FICA = $100K × 15.3% = $15,300 (employer + employee combined)
- Distribution $100K: no FICA
- Total FICA: $15,300
- Saved vs. sole prop: ~$12,943 (FICA savings)
- Less admin: $3,000
- Net savings: $9,943/year

**Breakeven math check**: Net savings $9,943 vs. admin $3,000 = strong positive. At $200K income, S Corp wins easily.

## Reasonable comp considerations

The S Corp savings require correct reasonable comp setting. Too low → IRS reclassification risk. Too high → no savings.

**Common targets** (typical ranges, industry-specific):
- 40-60% of net income as W-2 (conservative approach)
- 30-50% of net income (more aggressive, defensible with benchmarks)

**RCReports** or similar benchmarking critical. See `strategies/S-CORP-REASONABLE-COMP.md` for methodology.

## Coordination with QBI

Non-SSTB S Corp above QBI threshold: W-2 wages enable QBI deduction via W-2/UBIA limit (50% of W-2 + 2.5% UBIA). Increasing W-2 can increase QBI deduction.

Trade-off: Higher W-2 = lower FICA savings + higher QBI deduction potential.

**Optimization zone**: Set W-2 where QBI deduction is maximized without over-paying FICA. Analytical sweet spot exists for above-threshold taxpayers.

See `strategies/QBI-OPTIMIZATION.md` for optimization framework.

## Election mechanics

### Timely election

**Form 2553**: Must be filed by the 15th day of the 3rd month of the tax year for which election effective.
- Calendar year entity: March 15 for current-year effective
- Election effective beginning of tax year

**All shareholders must consent** — Form 2553 signed by all shareholders.

### Late election relief (Rev. Proc. 2013-30)

If Form 2553 not filed timely, automatic relief available if:
- Intended S Corp status from proposed effective date
- Failure to file was inadvertent
- Reasonable cause explanation
- Entity eligible otherwise
- Within 3 years 75 days of intended effective date
- Shareholders reported income consistent with S Corp (or can now amend)

**Procedure**: File Form 2553 with "FILED PURSUANT TO REV. PROC. 2013-30" at top, reasonable cause statement attached, and shareholder certifications.

**Broader relief (Rev. Proc. 2022-19)**: Additional automatic procedures for broader situations (missed QSST elections, missed ESBT elections, etc.).

### State election

Some states require separate S Corp election. Most conform automatically; some require filing (e.g., NY, NJ, CA have state-specific forms).

## Single class of stock issues

§1361(b)(1)(D): S Corp cannot have more than one class of stock.

**Governing provisions affecting economic rights** violate:
- Different dividend rights among shares
- Different liquidation rights
- Different distribution timing

**Voting differences OK**:
- Voting vs. non-voting shares permitted
- Different voting rights, same economic rights

**Common violations**:
- Disproportionate distributions (paying one shareholder more than another, despite same ownership %)
- Side-letter agreements modifying economic rights
- Variable compensation structures that functionally are distribution substitutes

**Consequence**: S Corp election terminated (inadvertently). Becomes C Corp retroactively. Retroactive relief possible under Rev. Proc. 2022-19.

## Shareholder eligibility

Eligible:
- US individuals
- US resident aliens (green card / substantial presence)
- Estates
- Certain trusts (Grantor Trust, QSST, ESBT, Voting Trust, certain retirement plans)

Ineligible:
- Foreign individuals/entities
- C corporations
- Partnerships
- Most non-qualifying trusts
- Non-resident aliens

**Inherited problem**: Client adds foreign spouse or business partner. S status terminates.

## Common decision-tree scenarios

### Scenario: Real Estate Agent at $200K net commission

- Break-even clear
- Non-SSTB → QBI optimization benefit
- RCReports benchmark → $80-$120K W-2 reasonable range
- Election recommended

### Scenario: Doctor at $500K net (SSTB)

- Break-even clear for FICA savings alone
- SSTB → QBI already phased out, W-2/UBIA play not relevant
- Benchmark W-2 typically $250-$350K for physician owners
- Election recommended

### Scenario: Consultant at $80K net

- Break-even marginal
- Admin costs substantial fraction of savings
- Consider timing: elect once income grows to $120K+
- Or elect if client wants structure for growth

### Scenario: Real Estate Agent at $500K net in California

- Federal break-even clear
- CA adds $800 min + 1.5% of net income ($7,500 on $500K)
- Additional CA cost: ~$8,300
- Still positive but smaller
- Run full comparison

### Scenario: Professional with fluctuating income

- Year 1: $80K (sole prop)
- Year 2: $300K (S Corp clearly wins)
- Year 3: $90K (borderline)
- Decision: elect if pattern trending up; keep sole prop if volatile

## Late/retroactive elections

Client comes in mid-year or Year 2 with sole-prop structure, wants retroactive S election.

**Rev. Proc. 2013-30** path: within 3 years 75 days of intended effective date, automatic relief.

**Requirements**:
- Reasonable cause (e.g., "didn't know about S election" OR "intended to elect but overlooked filing" OR "relied on prior advisor")
- Consistent income reporting (can be achieved through amendment if needed)
- Shareholder consistency

**Process**:
1. Determine intended effective date
2. File Form 2553 with required language and statements
3. Amend prior returns if necessary (from Schedule C to S Corp K-1)
4. State conformity

## Revocation and re-election

Once S election revoked or terminated, cannot re-elect for 5 tax years (§1362(g)) without IRS consent. Plan carefully.

## Ongoing compliance

After S election:
- Annual Form 1120-S
- Schedule K-1 to each shareholder
- Reasonable comp maintenance (annual review)
- Basis tracking per shareholder (§1367)
- Single class of stock vigilance
- Distribution equality monitoring
- Separate state filings

## Red flags / common errors

- Sole prop at $300K+ never elected (massive FICA savings left on table)
- Late election relief available but not claimed
- Reasonable comp unreasonable after election (underpayment reclassification risk)
- Disproportionate distributions violating single-class-of-stock
- Prior CPA set S Corp but inappropriate for size/situation
- Foreign spouse added, S status silently terminated

## Cross-references

- `strategies/S-CORP-REASONABLE-COMP.md` — downstream
- `strategies/S-CORP-BASIS-TRACKING.md` — downstream
- `strategies/QBI-OPTIMIZATION.md` — W-2 coordination
- `strategies/PTET-ELECTION-BY-STATE.md` — state layer

## Update status

File created 2026-04. S Corp election mechanics structurally unchanged by OBBBA. 2026 SS wage base $184,500 reflected.
