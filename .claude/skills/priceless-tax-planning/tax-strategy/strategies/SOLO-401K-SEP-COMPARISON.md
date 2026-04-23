---
strategy: Solo 401(k) vs SEP IRA Comparison
category: core
authority:
  - IRC §401(k), §402(g), §415(c) — 401(k) limits
  - IRC §408(k) — SEP IRA
  - IRC §404 — employer contribution deduction
  - IRC §401(a)(17) — compensation cap
  - SECURE Act (2019) — establishment deadlines expanded
  - SECURE 2.0 Act (2022) — Roth contributions, catch-up changes, mandate for high earners
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — no direct amendment but indirect interactions
  - IRS Notice 2025-67 (2026 retirement plan limits)
  - IRS Rev. Proc. 2025-32 (2026 indexed amounts including §401(a)(17))
applies_when:
  - has_self_employment_income: true (Schedule C, partnership K-1, S Corp owner W-2)
  - no_other_employees_except_spouse: true (Solo 401(k) eligibility)
  - net_se_income > $30000 OR S_corp_W2 > $30000 (meaningful contribution capacity)
earliest_actionable_quarter: Q1 (for new plans and employee deferral elections)
latest_actionable_quarter: Q4 (employee deferrals by Dec 31; employer contribution by tax filing deadline including extensions)
typical_savings_range: $3000 - $25000 (annually)
typical_savings_as_pct_of_income: varies based on contribution and bracket
savings_formula: |
  Annual contribution × (federal marginal rate + state rate)
  
  2025 limits (for reference — prior-year context):
    Solo 401(k) employee deferral: $23,500 ($31,000 with age 50+ catch-up; $34,750 with age 60-63 super catch-up)
    §415(c) total annual additions cap: $70,000 ($77,500 with age 50+; $81,250 with age 60-63)
    §401(a)(17) compensation cap: $350,000
  
  2026 limits (IRS Notice 2025-67 + Rev. Proc. 2025-32):
    Solo 401(k) employee deferral: $24,500 base
    Age 50+ catch-up: $8,000 (total deferral with catch-up: $32,500)
    Age 60-63 super catch-up: $11,250 (total deferral: $35,750 — SUPER replaces standard catch-up, not additive)
    §415(c) total annual additions cap: $72,000 base ($80,000 age 50+; $83,250 age 60-63)
    §401(a)(17) compensation cap: $360,000
    SECURE 2.0 Roth catch-up mandate: if 2025 FICA Box 3 wages > $150,000 from the sponsoring employer, 2026 catch-up contributions MUST be designated Roth
  
  Solo 401(k) contribution capacity = sum of:
    - Employee deferral (up to §402(g) limit), PLUS
    - Employer contribution: 25% × W-2 wages (S Corp) or ~20% × net SE income after ½ SE tax (Schedule C)
    - Total capped at §415(c) limit
  
  SEP IRA contribution capacity = employer-only:
    - 25% × W-2 wages OR ~20% × net SE income after ½ SE tax
    - Capped at §415(c) limit ($72,000 in 2026)
    - No employee deferral available
  
  Roth Solo 401(k) (SECURE 2.0): designate employee deferral as Roth (after-tax contribution, tax-free qualified distribution)
    - No income limit for designation (unlike Roth IRA which phases out at $236K MFJ 2026)
    - Available if plan document permits
    - Required for high-earner catch-up starting 2026
feasibility: high
implementation_complexity: medium (Solo 401(k) requires plan document, SEP is simpler)
audit_risk: low (well-established structures when properly administered)
requires_documentation:
  - Plan adoption agreement (Solo 401(k) only) — prototype from custodian or individually designed
  - Custodian account setup
  - SS-4 for trust EIN if separate trust used (typically not needed with prototype plans)
  - Form 5500-EZ when plan assets exceed $250,000 (or final-year reporting)
  - Annual employee deferral election (executed before any deferral)
  - Funding confirmation records from custodian
  - Payroll records showing deferral for S Corp clients
requires_partner_signoff: false (standard methodology)
requires_separate_engagement: false (covered in core engagement)
typical_separate_engagement_fee: null
compatible_stacks:
  - S-Corp-Reasonable-Comp (W-2 level affects employer contribution capacity — coordinated calculation required)
  - HSA-Optimization (separate vehicle, stacks additively)
  - Defined-Benefit-Overlay (Solo 401(k) + DB plan stack within combined §415 limits)
  - Spousal-Employment (spouse W-2 creates additional Solo 401(k) eligibility for spouse)
  - Backdoor-Roth-IRA (Solo 401(k) doesn't trigger pro-rata rule like SEP does)
  - QBI-Optimization (retirement contribution reduces AGI → preserves QBI deduction zone)
incompatible_with:
  - Cannot stack Solo 401(k) with SEP for same business (only one qualified plan per business)
  - Cannot use Solo 401(k) if non-spouse employees exist who meet eligibility (except by adopting a regular 401(k) with nondiscrimination testing)
prerequisites:
  - Self-employment income OR W-2 from own S Corp
  - No non-spouse employees meeting eligibility requirements
industries_best_fit:
  - all (any owner with SE income or S Corp wages can use)
  - Particularly valuable: high-earning solo practitioners, consultants, specialty contractors
industries_not_applicable:
  - W-2 only with no side income (use employer's 401(k) instead)
  - Sole proprietors with employees (Solo 401(k) not available once non-spouse employees eligible)
state_specific_considerations: false (federal qualified plan rules uniform)
path_b_compensation_tier: 0 (Priceless does not earn on plan custodian referrals; neutral recommendation posture)
---

# Solo 401(k) vs SEP IRA Comparison

For owner-only or owner-plus-spouse businesses, Solo 401(k) almost always beats SEP IRA. The only common exceptions are very low-income years, simplicity-priority situations, or late-year establishment where the plan couldn't exist by December 31.

## The basic mechanic

Both plans let business owners shelter retirement income from current taxation. The differences are substantive:

| Feature | Solo 401(k) | SEP IRA |
|---|---|---|
| Employee deferral 2026 | Yes ($24,500 + $8,000 catch-up age 50+) | No |
| Employer contribution | Yes (25% W-2 / ~20% SE) | Yes (same) |
| Combined max 2026 | Up to $72,000 ($80,000 w/ age 50+ catch-up) | Up to $72,000 (employer only) |
| Loan provision | Yes (up to $50K or 50% balance) | No |
| Roth option | Yes (SECURE 2.0, with plan adoption) | Roth SEP per SECURE 2.0; custodian adoption varies |
| Establishment deadline | Employer contrib by tax deadline; deferrals by Dec 31 | By tax filing deadline (incl. extensions) |
| Setup complexity | Higher (plan document, possible 5500-EZ) | Lower (Form 5305-SEP) |
| 5500 filing | Yes when assets > $250K | Never |
| Backdoor Roth IRA interference | None | SEP balance triggers pro-rata rule |

## When Solo 401(k) wins (most cases)

**Scenario**: Owner W-2 is under approximately $230K (S Corp) or net SE is under ~$300K (Schedule C). Employee deferral provides meaningful additional capacity beyond the 25% / 20% employer contribution.

Example 2026:
- S Corp owner with $150K W-2
- Employer contribution capacity: 25% × $150K = $37,500
- Solo 401(k) also allows: $24,500 employee deferral
- Total Solo 401(k): $62,000
- SEP would only allow: $37,500
- Delta: $24,500 — the full employee deferral

**Other Solo 401(k) wins**:
- Owner wants Roth option (SEP Roth is newer and less universally custodian-adopted)
- Owner doing backdoor Roth IRA contributions (SEP triggers pro-rata; Solo 401(k) doesn't)
- Owner wants loan provision (SEP has none)
- Owner plans to add DB plan later (Solo 401(k) + DB stack is standard; SEP + DB is structurally awkward)
- High-earner subject to 2026 Roth catch-up mandate (Solo 401(k) supports Roth; SEP varies by custodian)

## When SEP IRA wins (narrow)

**Scenario 1: Very high-income, plan not yet established**

Owner with $400K net SE hasn't set up a plan by December 31. 
- Solo 401(k) employee deferral window is closed (must elect and defer during the year)
- Solo 401(k) employer contribution still available by tax deadline, but only captures 20% × ~$360K (compensation cap) = $72,000 — reaches §415(c) cap anyway
- SEP captures the same $72,000 with simpler setup
- Result: equivalent outcome; SEP wins on simplicity

**Scenario 2: Very low-maintenance priority**

Owner has no interest in plan document maintenance, 5500-EZ filings, or Roth optimization. Will never contribute above 25%/20% employer level. SEP is simpler; contribution capacity adequate.

**Scenario 3: Temporary use with exit planned**

Owner setting up a plan for one year (exit expected). Solo 401(k) establishment cost + termination cost may exceed one-year benefit. SEP has no termination cost.

## When neither: Defined Benefit Plan

For very high-income clients (net business income > $300K consistently for 5+ years), DB plan or Cash Balance plan can shelter $100K-$300K+ annually, far beyond Solo 401(k) limits. Often stacked with Solo 401(k) for combined maximization. See `DEFINED-BENEFIT-OVERLAY.md`.

Indicators:
- Age 45+ (older = larger actuarial contribution)
- 5+ year income consistency
- Willingness to commit to 3-5 year funding schedule
- Cash flow supports required annual funding

## Post-OBBBA and current law impact

### OBBBA 2025 did not directly amend §401(k) or §408(k)

The retirement plan structure and limits remain governed by IRC and the annual IRS indexing. OBBBA's primary impact on this strategy is **indirect**:

**Indirect impact 1: QBI preservation via retirement contribution**

OBBBA made §199A QBI permanent with expanded phase-in ranges (2026 MFJ phase-in spans $406K to $581K, per Rev. Proc. 2025-32). For SSTB owners above the threshold, QBI phases out completely; for non-SSTB owners, the W-2/UBIA limitation applies.

A Solo 401(k) contribution reduces AGI → reduces taxable income → can keep an SSTB owner below the phase-in end, preserving the full QBI deduction. This is often the **largest stacking benefit** of a Solo 401(k) strategy for middle-to-upper income clients.

Example 2026 MFJ:
- Consulting S Corp owner (SSTB), projected taxable income $445K
- Without Solo 401(k): taxable income $445K > $581K phase-in end? No, $445K is within phase-in range — QBI partially phased out
- QBI reduction with no contribution: approximately 22% phase-out factor → QBI deduction cut 22%
- With $40K Solo 401(k) contribution: taxable income drops to $405K — below threshold, full QBI deduction preserved
- Combined benefit: retirement tax savings + QBI preservation

**Indirect impact 2: SALT cap phase-down interaction**

OBBBA retains the $40,400 SALT cap but with MAGI-based phase-down beginning at $505K (2026). A Solo 401(k) contribution reduces MAGI, potentially keeping the taxpayer below the phase-down threshold and preserving full SALT deduction for itemizers.

**Indirect impact 3: Charitable 0.5% AGI floor (2026+)**

OBBBA imposes a 0.5% AGI floor on itemized charitable deductions starting 2026. Reducing AGI via Solo 401(k) contribution slightly lowers the floor, marginally preserving charitable deduction. Not a large effect, but present.

### SECURE 2.0 implementation status (2026 is the key year)

**SECURE 2.0 Roth catch-up mandate — EFFECTIVE 2026**:

For tax years beginning after December 31, 2025, participants whose prior-year FICA Box 3 wages from the sponsoring employer exceed $145,000 (2025 threshold; $150,000 projected 2026 indexed) MUST make catch-up contributions as designated Roth (after-tax). No pre-tax catch-up allowed for these high earners.

Mechanics:
- Applies at the employer level (FICA wages from this employer, not aggregate)
- For Solo 401(k), the owner IS the employer — S Corp owner with W-2 > threshold triggers the mandate
- Plan document must permit Roth contributions for the catch-up to be available
- If plan has no Roth feature and owner exceeds wage threshold: catch-up capacity lost entirely

For Priceless S Corp clients at moderate-to-high W-2 levels:
- Clients with W-2 > $150K in 2025 must use Roth catch-up in 2026
- Clients with W-2 > $150K in 2026 must use Roth catch-up in 2027
- Plan document must be verified to allow Roth designation; amend if not

**SECURE 2.0 age 60-63 super catch-up** (effective 2025):

Participants ages 60-63 (inclusive) during the plan year may contribute $11,250 (2025 and 2026) as catch-up, replacing the standard $7,500/$8,000 catch-up. Super catch-up does NOT stack on top of standard catch-up — it REPLACES it for the eligible age window.

Age 64+ reverts to standard catch-up ($8,000 in 2026).

**SECURE 2.0 establishment deadline expansion** (effective 2023+):

Solo 401(k) plans can now be **established** after year-end, by tax filing deadline (including extensions), for **employer** contributions. But **employee deferrals** still require the plan to exist before the deferral occurs — practically, before December 31 of the contribution year.

This creates a split window:
- Owner forgot to set up plan by Dec 31, 2025: can still establish by April 15, 2026 (or extension) for 2025 employer contributions
- But employee deferrals for 2025 are foreclosed
- For moderate-income owners where employer contribution captures most of the capacity, this is workable
- For higher-income owners where the $23,500 deferral was the marginal capacity, it's a real loss

## Establishment deadlines (2026 calendar)

### For Solo 401(k) — 2026 contributions

| Action | Deadline |
|---|---|
| Plan must exist for employee deferrals | December 31, 2026 |
| Employee deferral election (annual) | Before first deferral of 2026 |
| Employee deferrals funded (Schedule C clients) | December 31, 2026 |
| Employee deferrals funded (S Corp via payroll) | Final 2026 payroll (typically Dec 31) |
| Employer contribution funded | Tax filing deadline including extensions |
|   — For Schedule C: October 15, 2027 with extension |
|   — For S Corp: September 15, 2027 with extension |
| Plan establishment (for employer contributions ONLY — post-SECURE 2.0) | Tax filing deadline including extensions |
| Form 5500-EZ (if assets > $250K at year-end) | July 31, 2027 (with extension to Oct 15) |

### For SEP IRA — 2026 contributions

| Action | Deadline |
|---|---|
| Plan establishment | Tax filing deadline including extensions |
| Contribution funding | Tax filing deadline including extensions |

SEP's simpler deadline structure is part of its appeal for late-year establishment.

## Catch-up contribution details (2026)

| Age bracket | Standard catch-up | Super catch-up | Total deferral cap |
|---|---|---|---|
| Under 50 | $0 | $0 | $24,500 |
| 50-59 | $8,000 | N/A | $32,500 |
| 60-63 | N/A (replaced) | $11,250 | $35,750 |
| 64+ | $8,000 | N/A (reverted) | $32,500 |

**Roth catch-up mandate**: For any age above, if 2025 FICA wages from sponsoring employer exceeded $150K, the catch-up portion must be Roth. Base $24,500 deferral may remain pre-tax.

## Implementation steps for Solo 401(k)

1. **Choose custodian** — Fidelity, Schwab, Vanguard, or eTrade are standard no-fee options. Specialty self-directed custodians exist for real estate investing or alternative assets (higher fees, added complexity; recommend only when specific use case justifies).
2. **Adopt plan document** — custodian prototype works for most; individually designed plan only if advanced features needed (e.g., in-service distributions, specific loan rules).
3. **Obtain trust EIN** if separate trust used — typically not needed with custodian-prototype plans; custodian administers trust.
4. **Make annual employee deferral election** — executed before any deferral. For S Corp via payroll, coordinate with payroll provider (Gusto, etc.) to begin deductions.
5. **Execute employee deferrals**:
   - S Corp: via payroll throughout the year
   - Schedule C: direct contribution to custodian by December 31
6. **Compute employer contribution** (after year-end, when final compensation known):
   - S Corp: 25% × W-2 wages
   - Schedule C: ~20% × net SE income after ½ SE tax deduction
7. **Fund employer contribution** by tax filing deadline (including extensions).
8. **File Form 5500-EZ** when plan assets exceed $250K — required annually once threshold crossed, even if assets subsequently decline.

## Common errors we inherit from prior preparers

- **Both Solo 401(k) and SEP for same business** — not allowed; only one plan per business entity
- **Employee deferral made without annual election** — technical violation; IRS could treat as excess contribution
- **Deferral made through wrong entity** — must be from employer where W-2 received
- **Maxed contribution computation wrong** — 25% rule (W-2) vs 20% rule (SE after ½ SE tax) confused
- **Spouse working in business not enrolled** — losing potential additional deferral capacity
- **5500-EZ not filed** when assets > $250K — penalty per day late, can be substantial (up to $250/day, max $150K per year without abatement)
- **Roth contributions made when plan doesn't allow** — must amend plan first or contribution is treated as pre-tax
- **SEP IRA used while doing backdoor Roth** — pro-rata rule destroys Roth conversion strategy
- **2026 catch-up made pre-tax for high earner** — SECURE 2.0 violation starting 2026; must be Roth if prior FICA > $150K
- **§401(a)(17) compensation cap ignored** — contribution computed on $380K when cap is $360K (2026); excess contribution issue

## §415(c) stacking with DB plan

Solo 401(k) and DB plan can coexist. Combined annual contribution limit is NOT simply added:

- §415(c) limit applies to Solo 401(k) alone: $72,000 (2026)
- §415(b) applies to DB plan separately: annual benefit limit $280,000 (2026) → translates to contribution of $100K-$300K+ depending on age and actuarial assumptions
- Owner can contribute to both simultaneously, up to respective limits

Typical stack for 50-year-old high earner:
- Solo 401(k): $80,000 ($72K + $8K age 50+ catch-up)
- DB plan: $150,000 (actuarial)
- Combined: $230,000 annual pre-tax contribution

Requires coordination — DB plan design and Solo 401(k) profit-sharing employer contribution must be calibrated to hit, but not exceed, combined limits. Typically handled by actuary + recordkeeper.

## Interaction with other strategies

### Stacks with S-Corp-Reasonable-Comp

The reasonable compensation decision drives Solo 401(k) capacity:
- Higher W-2 → higher 25% employer contribution → higher combined Solo 401(k)
- Lower W-2 → lower FICA but also lower employer contribution ceiling

Optimization is joint — neither strategy stands alone. Typical iteration:
1. Set W-2 at reasonable comp benchmark (e.g., $95K for consulting)
2. Compute §401(a)(17)-capped comp for Solo 401(k) (lesser of $95K and $360K = $95K)
3. Compute employer contribution: 25% × $95K = $23,750
4. Add employee deferral: $24,500
5. Total: $48,250 — below §415(c) of $72,000, room to spare

To max out §415(c) at $72,000: would need W-2 of approximately $191,000 (25% × $191K = $47,750 + $24,500 deferral = $72,250 hitting cap). For many clients, that exceeds reasonable comp benchmark — FICA savings from staying at benchmark outweighs marginal Solo 401(k) capacity.

This joint optimization is the core S Corp planning insight.

### Stacks with HSA-Optimization

HSA is a separate pre-tax vehicle with its own limits ($8,750 family / $4,400 self-only 2026, plus $1,000 age 55+ catch-up). Stacks additively with Solo 401(k) — no interference.

Combined age 55+ MFJ maximum 2026:
- Solo 401(k): $80,000 (with age 50+ catch-up)
- HSA family: $9,750 ($8,750 + $1,000 catch-up, one spouse; second spouse age 55+ gets separate $1,000)
- Total pre-tax: $89,750+

### Stacks with Spousal-Employment

Employing spouse in the S Corp at reasonable comp enables separate Solo 401(k) for spouse. Both spouses can contribute within their respective §415(c) limits.

Example 2026, both spouses age 50:
- Spouse A (primary): W-2 $150K, Solo 401(k) up to $80,000
- Spouse B (employed in business): W-2 $50K, Solo 401(k) up to $20,500 (deferral $32,500 capped by total §415(c) of $50K × 100% since deferrals allowed up to 100% of comp for first contribution)

Actually, let me restate — employee deferral is capped at the lesser of $24,500 (2026) or 100% of compensation. Employer contribution is 25% of comp. For low-comp spouse, the employee deferral may exceed what the employer contribution would permit alone.

Spouse B with $50K W-2: deferral up to $24,500 (under 100% comp) + employer contrib 25% × $50K = $12,500 → total $37,000. §415(c) limit per participant is separate, so both spouses can contribute to respective limits.

### Stacks with Backdoor-Roth-IRA

Solo 401(k) does NOT trigger pro-rata rule for traditional IRA → Roth conversions. SEP IRA DOES trigger it. For clients executing backdoor Roth IRA annually, Solo 401(k) is strictly superior to SEP for this reason alone (even before other considerations).

Mechanics:
- Backdoor Roth: non-deductible contribution to traditional IRA → immediate conversion to Roth IRA
- Pro-rata rule: §408(d)(2) — all traditional IRAs (including SEP) are aggregated for basis calculation
- If $100K in SEP IRA and $7,000 non-deductible traditional IRA contribution → only 6.54% of conversion is basis-free; 93.46% is ordinary income on conversion

Solo 401(k) is a qualified plan, not an IRA — not subject to §408(d)(2) aggregation. Backdoor Roth strategy preserved.

### Stacks with Defined-Benefit-Overlay

See `DEFINED-BENEFIT-OVERLAY.md`. Solo 401(k) + DB is a standard high-earner combination when DB thresholds are met. Combined pre-tax contribution capacity $150K-$300K+ depending on age and compensation.

### Stacks with QBI-Optimization

This is the **most commercially important** interaction for Priceless's clientele.

For SSTB owners in the 2026 phase-in range ($406K-$581K MFJ), every dollar of taxable income reduction preserves a meaningful fraction of QBI deduction. Solo 401(k) contribution is the cleanest, highest-magnitude AGI reduction tool.

Marginal analysis:
- SSTB owner at $460K taxable income (MFJ, 2026) — 31% into the phase-in range
- QBI deduction at $460K: roughly 69% of full deduction
- Drop TI to $405K via $55K pre-tax contributions: 100% QBI
- Federal savings: 69% QBI phase-in restored × full deduction value + retirement contribution deduction

This coordinated play is why the Solo 401(k) decision is usually NOT "how much to contribute" but "what contribution level restores full QBI" — the QBI zone drives the contribution amount more than the general tax deduction value.

## Audit posture

### Risk profile: low

Solo 401(k) and SEP IRA are both mainstream, well-understood vehicles. IRS challenge risk is low when:
- Plan is properly established (custodian prototype or bona fide individually designed plan)
- Contributions are properly computed and do not exceed §415(c) or §402(g) limits
- 5500-EZ filed when required
- Deferral elections and funding are timely
- For S Corp clients, W-2 wages are bona fide (reasonable comp) and paid through proper payroll

### Audit trigger scenarios

- Excess contribution that isn't withdrawn (§4973 6% excise tax per year until corrected)
- Contribution exceeding §401(a)(17) compensation cap (subtle error — using gross comp of $380K when cap is $360K)
- Failure to file 5500-EZ when required
- Employee deferral without election or through wrong entity
- Related employer aggregation issue (if owner has other businesses with employees, controlled group rules may prevent Solo 401(k) qualification)

### Defense considerations

- Keep plan document, adoption agreement, and all custodian statements
- Maintain annual deferral elections (dated and signed before deferrals)
- Document contribution computation worksheets each year
- File 5500-EZ by July 31 following year plan assets cross $250K
- If audited, produce plan records and compensation documentation; audits typically resolve in taxpayer's favor when records are complete

### Related-employer risk

§414(b) controlled group and §414(c) common control rules can aggregate businesses for plan qualification purposes. If Solo 401(k) owner has ownership in another business with employees, those employees may need coverage under the plan → Solo 401(k) eligibility lost.

Example: Client owns 100% of consulting S Corp (Solo 401(k) plan) AND 60% of separate LLC with 5 employees. §414(c) may aggregate the two businesses; LLC employees may be treated as eligible employees of the consulting S Corp plan → Solo 401(k) status fails.

Always screen for controlled group issues when setting up Solo 401(k) for clients with multiple business interests.

## Deliverable points (documentation skill handoff)

When a Solo 401(k) or SEP IRA recommendation appears in a client memo, the documentation skill should produce:

### In the narrative memo

- **Recommendation statement**: "Establish Solo 401(k) with [custodian] by [date]. Employee deferral of $[X]; employer contribution of $[Y]; total $[Z]."
- **Why quantification**: Federal savings $[X × federal marginal rate]; state savings $[X × state rate]. If QBI preservation is the driver: note the QBI-restoration mechanic.
- **Trade-off statement**: Cash contribution reduces current-year liquid capital; funds locked (with loan option up to $50K / 50%). Setup is one-time ($0 for prototype at major custodians); annual 5500-EZ filing once assets > $250K.
- **Action items**: Custodian selection (recommend Schwab or Fidelity default), plan adoption signature, annual deferral election, payroll setup for deferrals (S Corp clients).
- **Deadline**: December 31, 2026 for plan existence (if first year); tax filing deadline (with extension) for employer contribution funding.

### In the Excel model

- **Tax Projection tab**: Solo 401(k) contribution as above-the-line deduction in Adjustments section (row 15)
- **Strategies tab**: row for "Solo 401(k) Establishment & Contribution" with federal/state savings breakdown
- **Actions tab**: plan setup milestone; annual deferral election; contribution funding deadline
- **Notes tab**: methodology note on contribution capacity calculation (25% W-2 or 20% SE after ½ SE tax); note on QBI-preservation coordination if applicable

### In partner-review [REVIEW] callouts

- `[REVIEW: quantification — Solo 401(k) capacity computed at $X; confirm W-2 level being recommended]`
- `[REVIEW: custodian recommendation — Schwab vs. Fidelity neutral to firm; any client preference?]`
- `[REVIEW: Roth catch-up mandate — if client W-2 > $150K in prior year, catch-up must be Roth; plan document amendment needed if not already Roth-enabled]`

### Suggested template language

For client memo Recommendation section:
> **What**: Establish Solo 401(k) with Schwab before December 31, 2026. Contribute $24,500 employee deferral plus $[Y] employer contribution.
>
> **Why it matters**: Saves $[X] federal plus $[Y] state, totaling $[Z]. Of this, $[W] is from preserving your §199A QBI deduction by keeping taxable income below the phase-in end.
>
> **How it works**: Solo 401(k) is a single-participant retirement plan for owner-only businesses. Employee deferral of $24,500 plus employer contribution of 25% of your W-2 produces $[Z] of pre-tax retirement savings.
>
> **Trade-off**: Cash tied up in retirement account; loan option available up to $50K. Annual Form 5500-EZ filing begins once plan assets exceed $250K.
>
> **Who does what**: We send you the Schwab application package this week. You sign and establish the plan by December 31. We set up the payroll deduction through Gusto for 2026 deferrals.

## Update status

| Verification | Date | Source |
|---|---|---|
| 2026 §402(g) elective deferral ($24,500) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 age 50+ catch-up ($8,000) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 age 60-63 super catch-up ($11,250) | Verified 2026-04 | IRS Notice 2025-67 + SECURE 2.0 §109 |
| 2026 §415(c) limit ($72,000) | Verified 2026-04 | IRS Notice 2025-67 |
| 2026 §401(a)(17) compensation cap ($360,000) | Verified 2026-04 | IRS Rev. Proc. 2025-32 |
| SECURE 2.0 Roth catch-up mandate (effective 2026) | Verified 2026-04 | SECURE 2.0 §603; IRS Notice 2023-62 transition relief expired 12/31/2025 |
| SECURE 2.0 establishment deadline expansion | Verified 2026-04 | SECURE Act §201 as amended by SECURE 2.0 §317 |
| OBBBA non-amendment of §401(k)/§408(k) | Verified 2026-04 | P.L. 119-21 full text review |
| QBI interaction (2026 phase-in ranges) | Verified 2026-04 | OBBBA §70105 + Rev. Proc. 2025-32 |

**Last full review**: 2026-04 (Sprint 5.5 rebuild)
**Next review trigger**: Publication of 2027 indexed amounts (IRS Notice, typically October/November 2026) or any SECURE 3.0 / retirement-focused legislation
