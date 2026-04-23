# Reasonable Compensation Deep Dive

Operational reference for reasonable comp analysis. The strategy file (`../tax-strategy/strategies/S-CORP-REASONABLE-COMP.md`) covers the strategy design; this file covers how to actually size it.

## The IRS's nine factors

Synthesized from case law (*Watson*, *Glass Blocks*, *Sean McAlary Ltd.*, others):

1. **Training and experience** — formal education, certifications, years in field
2. **Duties and responsibilities** — scope of role, decision-making authority, oversight responsibilities
3. **Time and effort devoted** — hours per week, full-time vs. part-time
4. **Dividend history** — distribution patterns (proxy for whether entity is under-comping)
5. **Payments to non-shareholder employees** — comparison points
6. **Timing and manner of paying bonuses** — structured vs. arbitrary
7. **What comparable businesses pay for similar services** — benchmark data
8. **Compensation agreements** — employment contracts, board resolutions
9. **Use of a formula to determine compensation** — methodology documentation

Priceless addresses each factor in the methodology memo backing every reasonable comp recommendation.

## Benchmarking sources

### RCReports (Priceless default)

Commercial service purpose-built for reasonable comp defense. Provides:
- Industry, role, geography, time-commitment matched benchmark
- Written methodology output
- Audit-defense documentation

Typical cost: ~$250-$500 per engagement. Covered by quarterly planning retainer.

Output is typically used verbatim in the methodology memo.

### BLS OES (alternative)

Bureau of Labor Statistics Occupational Employment Statistics:
- https://www.bls.gov/oes/
- Free
- Median, 25th, 75th percentile wages by occupation and area
- Granular occupation codes (SOC)
- National and state/metro breakdowns

Limitations:
- Doesn't capture specific entity context (solo vs. small firm)
- Occupation codes may not precisely match client role
- Lags current market by 1-2 years

Use when: RCReports unavailable for specific role, or cross-reference.

### Industry salary surveys

Trade association surveys often available:
- Association of General Contractors (construction)
- AICPA or state CPA society (for accounting firms)
- AMA (medical practices)
- Jeweler associations
- Software industry compensation surveys

Use when: Highly specialized role, or RCReports lacks depth in specific industry.

### Salary.com, PayScale, Glassdoor

Consumer-facing. Less defensible in audit but useful for triangulation.

### Court cases as benchmarks

For unusual situations, relevant case law provides reference points:
- *Watson*: accountant, ~$90K salary on $200K profit deemed too low, moved to $91K
- *Glass Blocks Unlimited*: corporate officer, $30K on $877K revenue too low
- *Sean McAlary Ltd.*: real estate, $24K on $243K profit, recharacterized substantially
- *Davis v. US*: anesthesiologist, comprehensive analysis of professional services comp

## The dollar-specific methodology

### Step 1: Define the role

Specific. Not "CEO" — too generic. Something like:

"Full-time owner-operator of e-commerce S Corp. Duties: product sourcing and development, marketing strategy and execution, financial management, team management (3 W-2 employees). 50+ hours per week. MBA, 8 years industry experience. Primary decision-maker for all business operations."

### Step 2: Find the benchmark

RCReports or equivalent. Get the median, 25th, and 75th percentile for the role.

### Step 3: Adjust for specific factors

Starting from benchmark median:

Upward adjustments:
- Advanced credentials relevant to role (CPA, JD, MD, MBA in relevant field)
- Exceptional experience (15+ years vs. median 5-10)
- Unusual skill scarcity in market
- Running multi-entity or multi-state operation
- Serving specialized niche (PR Act 60, complex real estate)

Downward adjustments:
- Limited time commitment (part-time ownership)
- Early career (<3 years experience)
- Using significant outsourced help that reduces owner scope
- Small business (sole owner doing everything at small scale)

Range: typically ±30% from benchmark median.

### Step 4: Check against entity income

Sanity check: what's the entity's total distributable income (net income + W-2 expense)?

If projected entity net income is $500K and W-2 recommendation is $300K:
- Ratio: 300/(300+500) = 37.5% of total income as W-2
- Compare to industry norms: some industries (professional services) higher, some (commodity services) lower
- Ratio 30-50% often reasonable for owner-operator

Red flags:
- W-2 above distributable income (pre-W-2 income negative — means reasonable comp leaving no room for profit, which itself is suspicious)
- W-2 below 10% of pre-W-2 income for full-time owner (under-comped)

### Step 5: Document the methodology

Memo to file:

```
REASONABLE COMPENSATION METHODOLOGY MEMO
========================================
Client: [ID]
Tax Year: [YYYY]
Prepared By: [analyst], [date]
Approved By: [partner], [date]

ROLE DEFINITION
[Specific role description, hours, duties]

BENCHMARK SOURCE AND OUTPUT
[RCReports report, BLS data, or other]
[Median, 25th%, 75th% for role/industry/geography]

ADJUSTMENTS TO BENCHMARK
[Each upward or downward factor with rationale]
[Net adjusted benchmark: $X]

ENTITY INCOME CONTEXT
[Projected net income pre-W-2]
[Non-owner employee wages for comparison]
[Distribution history]

NINE-FACTOR ANALYSIS (per Watson case law)
1. Training and experience: [client's specific credentials]
2. Duties and responsibilities: [specific to this client]
3. Time and effort: [hours per week, documented]
4. Dividend history: [distribution pattern]
5. Non-shareholder employee pay: [comparison]
6. Bonus timing: [structured]
7. Comparable business pay: [benchmark source]
8. Compensation agreements: [board resolution reference]
9. Methodology: [this document]

RECOMMENDATION
Target Annual W-2 Compensation: $X
Effective: [date]
Monthly/Bi-weekly Amount: $X

RATIONALE
[Specific reasoning tying benchmark to client situation]
```

### Step 6: Board resolution

Comp level adopted via board resolution. Template:

```
RESOLUTION OF THE BOARD OF DIRECTORS OF [S CORP NAME]

WHEREAS, [Owner Name] serves as [Title] of the Corporation with 
responsibility for [description];

WHEREAS, the Corporation has reviewed industry compensation data 
and [Owner Name]'s specific qualifications;

WHEREAS, the Corporation has determined that the compensation set 
forth below represents reasonable compensation for services rendered 
by [Owner Name] as [Title];

RESOLVED, that effective [date], [Owner Name] shall receive annual 
compensation of $X, payable in [bi-weekly/semi-monthly/monthly] 
installments, plus employer-paid health insurance of approximately 
$X annually (reportable per IRC §162(l)), plus HSA contribution of 
up to $X annually (per IRC §223), plus employer contributions to 
the Corporation's 401(k) plan up to the maximum permitted by law.

FURTHER RESOLVED, that the Corporation shall review this compensation 
level annually.

This resolution adopted by unanimous consent of the Board of Directors 
on [date].

[Signature]
[Name], Director
```

Maintained in corporate minute book. Revisited annually.

## Year-end adjustments

Reasonable comp can be adjusted mid-year or year-end. Common scenarios:

### Catch-up when comp was set low

Reasonable comp decided too low in January; growth means it should be higher. Options:
- Bi-weekly increase starting immediately (prospective)
- Year-end bonus to true-up
- Both

Bonus implications:
- Subject to supplemental withholding rates (22% federal flat, up to 37% for amounts >$1M)
- Counts as W-2 wages for all purposes
- If structured as bonus, should have some bonus structure documentation (discretionary bonus vs. performance-based)

### Adjustment when comp was set high

Less common. If comp was set high and then business slowed:
- Reduce remaining pay periods
- Do NOT attempt to claw back already-paid comp (that's improper)
- Could impact Social Security calculations if wage base already exceeded

### Year-end gross-up for withholding

Sometimes needed to ensure federal/state withholding meets safe harbor. Methodology:
- Calculate desired withholding
- Gross up the bonus amount so net comp plus withholding equals target
- Structure: "additional compensation of $X, with $Y federal withholding"

Supplemental withholding rates:
- Federal: 22% flat on bonuses under $1M; 37% flat over $1M
- State: varies

## Common mistakes we inherit

### Mistake 1: $0 comp with significant income

Classic. S Corp with $500K net income, owner takes $0 W-2, all distributions.

Fix approach:
- Reasonable comp analysis (current year)
- Adjustment going forward
- Amendment consideration for prior years within statute (cost/benefit)
- Document client conversation on approach

### Mistake 2: Comp set once, never adjusted

Owner comp set at $60K in 2018 when business was small. Business now $1M net income. Comp still $60K.

Fix: reasonable comp analysis to current benchmark. Expect material increase.

### Mistake 3: Comp tied to % of profit

"I pay myself 20% of profits" — that's distribution-like behavior, not a comp methodology. IRS sees this as disguised distributions.

Fix: formula-based comp grounded in role benchmark, not profit-based.

### Mistake 4: Spouse on payroll at implausibly high rate

"Spouse makes $150K/year doing admin" — with no documented role, hours, or deliverables.

Fix: either document real work at market rate, or remove spouse from payroll.

### Mistake 5: Health insurance outside §162(l)

Owner paying premium personally, no S Corp involvement. No §162(l) deduction claimed.

Fix: S Corp takes over premium payment, proper W-2 treatment, §162(l) deduction.

### Mistake 6: HSA contribution in Box 3/5

Payroll provider defaulted to cafeteria plan treatment, didn't account for >2% shareholder rules.

Fix: 941-X for FICA recovery, W-2c for box corrections, going forward proper coding.

## Integration with other strategies

### With Solo 401(k)

Employer contribution = 25% of W-2 Box 3 wages (subject to SS wage base). Specific math:

If W-2 Box 3 = $184,500 (2026 SS wage base): employer max = $46,125 (25% of wage base).
Plus employee deferral: $24,500 + $8,000 catch-up if 50+ = $32,500 total deferral capacity (2026).
Total potential at wage base: $78,625 (ages 50+, within §415(c) cap of $80,000).

For 2026 with no catch-up: $46,125 employer + $24,500 deferral = $70,625 (within $72,000 §415(c) cap).

Note: 2025 comparison — $176,100 SS wage base, $44,025 employer max; $23,500 deferral + $7,500 catch-up = $31,000; total at wage base $75,025 (within $77,500 §415(c) cap for 50+).

Higher W-2 does NOT increase 401(k) beyond the §415(c) total cap ($72,000 in 2026 / $80,000 with age 50+ catch-up / $83,250 with age 60-63 catch-up). Beyond a certain point, additional W-2 just costs FICA without adding plan capacity.

Threshold where 25% employer contribution maxes out the non-catch-up §415(c) cap of $72,000 (2026): W-2 Box 3 ≈ $190,000 (at the $47,500 employer contribution level that leaves room for $24,500 employee deferral).

### With DB Plan

DB contribution based on highest-3-year average compensation. To support the largest DB contribution, establishing the W-2 baseline in 3 years before peak contribution is strategic.

Example: Owner age 50 wants large DB contribution at age 55. Set W-2 at desired level age 52-54. DB at age 55 based on 52-54 average = high capacity.

### With §199A QBI (non-SSTB above threshold)

Higher W-2 = higher 50% × W-2 limit for QBI. May support larger QBI deduction.

But: higher W-2 = lower S Corp net income = lower base QBI.

The math: evaluate both effects together. Usually the W-2 limit effect dominates at very high incomes, making higher W-2 QBI-positive.

### With §199A QBI (SSTB above threshold)

Higher W-2 doesn't help (SSTB phase-out has no W-2 safe harbor). Instead, focus on dropping taxable income below threshold via DB plan, charitable bunching, etc.

## Quality check for Priceless methodology

Before partner sign-off on reasonable comp recommendation:

- [ ] Benchmark source documented (RCReports preferred)
- [ ] Role specifically defined (not "CEO" generic)
- [ ] Specific dollar recommendation with rationale
- [ ] Nine-factor analysis completed
- [ ] Coordination with retirement plan capacity verified
- [ ] §162(l) impact quantified
- [ ] Effective date specified
- [ ] Implementation steps documented
- [ ] Board resolution drafted
- [ ] Client conversation framing prepared (for partner use)

## Audit posture

Reasonable comp audits focus on:
- Does the comp level seem reasonable on its face?
- Is there methodology documentation?
- Do the nine factors support the conclusion?
- Are board resolutions contemporaneous?

Priceless's methodology + RCReports documentation + board resolution = strong audit posture. Most RCReports-backed positions prevail or result in minor adjustment.

Positions that fail: $0 comp, arbitrary comp, comp far below benchmark without rationale, no documentation.

## Scoring our recommendations

After the analysis:

- **Green zone**: current comp within benchmark range, no change needed
- **Yellow zone**: current comp 10-20% off benchmark, gradual adjustment recommended
- **Red zone**: current comp >20% off benchmark, immediate action recommended

Savings quantification for the memo:
- Tax savings if moving from over-comped to benchmark: (current - target) × 15.3% FICA/Medicare
- Tax cost if moving from under-comped to benchmark: (target - current) × 15.3% FICA/Medicare
- But: under-comped recommendation usually unlocks other benefits (§162(l), retirement, QBI, DB plan) that more than offset the FICA increase

Always present both the FICA math and the stacking benefits — so client sees the full picture, not just "we're adding $15K of FICA cost."

## Update status

File updated 2026-04 with:
- 2025 SS wage base: $176,100; 2026 SS wage base: $184,500
- 2025/2026 §415(c) caps ($70,000/$72,000; with catch-up variants)
- 2025/2026 employee deferral limits ($23,500/$24,500) and catch-ups
- Solo 401(k) capacity math recalculated using 2026 amounts
