---
strategy: S Corp Reasonable Compensation
category: core
authority:
  - IRC §1366 — pass-through items
  - IRC §3121 (FICA wage base), §3306 (FUTA wage base)
  - IRC §162(a)(1) — reasonable comp as deductible wages
  - Treas. Reg. §1.1366-1
  - Rev. Rul. 59-221 (S corp distributions vs wages)
  - Rev. Rul. 73-361 (officer compensation standards)
  - Rev. Rul. 74-44 (reclassification of distributions as wages)
  - Rev. Proc. 2008-25 (employment tax payment for officers, late W-2 correction)
  - Watson v. Commissioner, 668 F.3d 1008 (8th Cir. 2012) — accountant case, W-2 increased from $24K to $93K
  - Glass Blocks Unlimited v. Commissioner, T.C. Memo 2013-180 — construction S Corp reclassified
  - Sean McAlary Ltd. v. Commissioner, T.C. Summary 2013-62 — realtor W-2 increased from $24K to $83K
  - Fleischer v. Commissioner, T.C. Memo 2016-238 — financial advisor reclassification
  - Davis v. U.S., 114 AFTR 2d 2014-7053 (6th Cir.) — absentee owner, no comp required
  - IRS Fact Sheet 2008-25 — nine factors for reasonable compensation
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — no direct §1366 amendment
  - IRS Notice 2025-67 (2026 retirement plan limits, including §401(a)(17) $360,000 cap affecting W-2 coordination)
applies_when:
  - entity_type in [S-Corp, LLC-with-S-election]
  - owner_active_in_business: true
  - entity_net_income > $50000
earliest_actionable_quarter: Q1 (annual comp setting)
latest_actionable_quarter: Q4 (true-up payroll if W-2 off-target)
typical_savings_range: $2000 - $25000 (annually from optimization)
typical_savings_as_pct_of_income: 1% - 8%
savings_formula: |
  Current vs. optimized W-2 analysis:
    - Current W-2 = historical or analyst-estimated
    - Optimized W-2 = result of reasonable comp study (RCReports or equivalent)
    - If optimized < current: savings = (current - optimized) × (15.3% FICA on amount below SS wage base; 2.9% Medicare above; plus 0.9% additional Medicare if wages > $200K single / $250K MFJ)
    - If optimized > current: NEGATIVE savings (additional payroll tax) BUT reduces audit risk; quantify both sides and present trade-off
  
  2026 relevant amounts:
    SS wage base: $184,500
    Medicare additional threshold (FICA side on employer): $200,000 (single filers), $250,000 (MFJ)
    §401(a)(17) compensation cap affecting retirement plan design: $360,000
  
  FICA/Medicare tax rates on W-2 wages:
    Employee side: 6.2% SS (up to wage base) + 1.45% Medicare + 0.9% additional Medicare above threshold
    Employer side: 6.2% SS (up to wage base) + 1.45% Medicare
    S Corp owner pays both sides on own W-2 effectively (through the entity)
  
  Typical adjustment example:
    Owner at $24K W-2 on $300K S Corp net; RCReports median $95K
    Current "reasonable comp": $24K
    Proposed: $95K
    Additional payroll tax: ($95K - $24K) × 15.3% = $10,863
    Risk mitigation: substantial (near-certain audit reclassification failure otherwise)
feasibility: high (standard methodology available via RCReports)
implementation_complexity: low (annual analysis; ongoing payroll through Gusto/ADP)
audit_risk: low when methodology sound; HIGH when W-2 artificially low
requires_documentation:
  - Annual RCReports analysis (or equivalent benchmark study)
  - Methodology memo explaining selection within benchmark range
  - Board resolution authorizing compensation level (for corporate formalities)
  - Payroll records confirming actual W-2 paid
  - Form W-2 and Form 941 reconciliation
  - Records of comparable employee wages at the company
  - Documentation of owner's role, duties, time commitment
requires_partner_signoff: false (standard methodology) — UNLESS W-2 deviates materially from benchmark (above 75th percentile or below 25th percentile of RCReports range)
requires_separate_engagement: false (covered in core engagement)
typical_separate_engagement_fee: null (RCReports subscription is firm-level, ~$250-500/analysis included)
compatible_stacks:
  - Solo-401k-SEP-Comparison (Solo 401(k) employer contribution is 25% of W-2 → W-2 level drives capacity)
  - Defined-Benefit-Overlay (DB benefit scales with comp subject to §401(a)(17) cap)
  - Health-Insurance-S-Corp-162L (§162(l) requires W-2 wages; comp level must cover insurance cost)
  - HSA-Optimization (HSA contributions separate from W-2 decision)
  - Hiring-Children-Legitimately (child wages are separate; parent owner W-2 unaffected)
  - Spousal-Employment (spouse's W-2 is separate; owner's W-2 not affected by spouse)
  - QBI-Optimization (W-2 level drives W-2/UBIA limitation for QBI above threshold)
  - S-Corp-Basis-Tracking (W-2 doesn't affect basis; distributions do)
incompatible_with:
  - Partnership or sole proprietorship entities (not S Corp; SE tax applies to full net)
  - C Corporation (different tax regime; reasonable comp still applies but for different reason — avoid double taxation)
prerequisites:
  - S Corp election in effect
  - Owner performs services for the corporation
  - Entity has positive net income meaningful enough to support distributions above W-2
industries_best_fit:
  - all (every profitable S Corp owner uses this strategy)
  - Particularly impactful: solo professional services (consulting, RIA, medical, legal)
industries_not_applicable:
  - Absentee investors with no services rendered (no comp required — Davis v. U.S.)
  - Businesses operating at loss (comp analysis different — must be affordable)
state_specific_considerations: partial (state unemployment taxes may apply; state income tax on wages vs. distributions varies)
path_b_compensation_tier: 0 (core tax engagement, not Path B affiliate-driven)
---

# S Corp Reasonable Compensation

The most frequently-executed Priceless strategy. Every S Corp owner has it; the methodology is mature; the downside of getting it wrong is substantial audit reclassification risk.

The optimization is finding the lowest defensible W-2.

## The basic mechanic

S Corp owner-employees pay themselves through two mechanisms:

1. **W-2 wages** — subject to 15.3% FICA/Medicare on the first $184,500 (2026 SS wage base) plus 2.9% Medicare above that, plus 0.9% additional Medicare above $200K single / $250K MFJ (employee-side)
2. **Distributions** — not subject to FICA/Medicare (shareholder's pro-rata share of S Corp earnings)

The IRS requires W-2 wages to reflect **reasonable compensation** for services rendered. Too low = reclassification risk + payroll tax + penalties. Too high = unnecessarily paid payroll tax on wages that could have been distributed.

Core optimization: set W-2 at the lowest defensible level supported by benchmark data.

## Why this is our most-frequent strategy

- Every active S Corp owner has it
- Annual review cadence (comp is set for the year)
- Wrong setup is one of the most common errors inherited from prior preparers
- Even well-set plans drift as the business grows
- Typical savings: $5K-$15K annually on a $300K-$500K net S Corp
- Simple methodology once RCReports is in place

## When it works

- Owner is actively rendering services (officer of the corp, not absentee investor)
- Entity has positive net income meaningful enough to support distributions beyond W-2
- Other employees paid market wages (otherwise IRS argues more of the profit is wages)
- Documentation supports the methodology used

## When it doesn't work

- **Owner is absentee**: no compensation required (Davis v. U.S., 6th Cir. 2014). Distribution-only treatment fine.
- **Entity has losses or low income**: comp recommendation becomes a different conversation (can the client afford to pay themselves at all, or is the business paying owner through distributions that aren't really profit?)
- **Personal services entity where owner's services ARE the product**: single-owner consulting, single-owner law firm — IRS argues more aggressively that profit IS the owner's labor, so W-2 should be higher
- **Service business where owner provides nearly all the value**: solo designer, writer, freelance consultant — courts and IRS often require W-2 reflecting the majority of profit

## Defensible methodology

Priceless default: **RCReports**. Provides industry-comparable wage data, written methodology, and audit-defense documentation.

Alternative methodologies acceptable when fact pattern requires:
- **BLS OES data** (Occupational Employment and Wage Statistics) + role-specific adjustments
- **Salary survey data** from industry sources (e.g., Robert Half for accounting, MGMA for medical practices)
- **Expert witness valuation** for unusual cases (high-profile professional athletes with S Corps, entertainment industry, etc.)

### The IRS's nine factors (from Fact Sheet 2008-25 and case law)

1. **Training and experience**
2. **Duties and responsibilities**
3. **Time and effort devoted to the business**
4. **Dividend history** (i.e., distributions taken)
5. **Payments to non-shareholder employees**
6. **Timing and manner of paying bonuses**
7. **What comparable businesses pay for similar services**
8. **Compensation agreements**
9. **Use of a formula to determine compensation**

Methodology document references how each factor applies to the specific client. RCReports output embeds most of these into its analysis.

### Selecting within the RCReports range

RCReports typically provides 25th percentile / median / 75th percentile outputs. Selection criteria:

- **25th percentile**: aggressive; use when owner time commitment is below typical OR owner role is less experienced than typical OR compensation reflects explicit below-market pattern supported by business reality
- **Median**: standard Priceless default; defensible in most situations
- **75th percentile**: conservative; use when business pays other employees well (creating an internal wage ceiling reference) OR owner has exceptional experience OR prior audit history suggests conservative posture
- **Above 75th percentile**: rare; only when custom facts warrant (equity-unusual compensation, geographic anomaly)

Partner sign-off REQUIRED for 25th percentile selections or 75th+ selections.

## Implementation steps

1. **Annual cadence (Q1)**: Pull updated RCReports analysis for client's role, location, industry, time commitment
2. **Gap analysis**: Compare RCReports output to current W-2 level
3. **Compute payroll tax delta**: what changes if W-2 adjusted?
4. **Methodology documentation**: memo to file explaining the selection within range
5. **Board resolution** (corporate formalities): authorize the year's compensation level
6. **Payroll update**: work with payroll provider (Gusto default for Priceless clients) to implement effective [date]
7. **Gross-up calculation**: if mid-year change, compute needed payroll adjustment to hit target annual W-2
8. **Q3 mid-year check**: verify YTD W-2 tracking to target; adjust if business performance differs from projection
9. **Q4 true-up**: final payroll ensures year-end W-2 hits target

## Common errors we inherit from prior preparers

- **$0 reasonable comp on profitable S Corp** — the most common AND most exposing. Reclassification risk substantial, especially in audit.
- **Comp set once and never adjusted** — business grew 4x, comp stayed the same. RCReports recommendation will have grown too.
- **Comp tied to percentage of profit with no business rationale** — looks like distributions in disguise (e.g., "I'll take 15% of profit as W-2" when profit swings 300%)
- **Officer comp skipped entirely**, all profit taken as distributions — same as $0 comp issue
- **W-2 that doesn't include §162(l) self-employed health insurance** for >2% shareholders — procedural error costing the §162(l) above-the-line deduction
- **Health insurance through cafeteria plan for >2% shareholder** — not allowed (§1372(b)); must be paid through W-2 then deducted as self-employed health insurance
- **Reasonable comp set based on owner's "take home" goal** — no benchmark reasoning; not defensible
- **W-2 set using "50/50" or "1/3 — 2/3" rules** — urban legend methodologies without authority; IRS has rejected these patterns
- **Different reasonable comp on 1120-S vs. 1040** — payroll W-2 differs from what return claims; mechanical error

## Post-OBBBA and current law impact

### No direct §1366 amendment by OBBBA

OBBBA P.L. 119-21 did not amend §1366 or the reasonable compensation framework. IRS enforcement posture unchanged.

### Indirect OBBBA impacts on reasonable comp strategy

**QBI coordination (above-threshold clients)**:

OBBBA made §199A permanent with 2026 phase-in ranges: $406K threshold / $581K end (MFJ). For non-SSTB S Corp owners above threshold, the §199A(b)(2)(B) W-2/UBIA limitation applies — QBI deduction capped at the greater of:
- 50% × W-2 wages paid
- 25% × W-2 wages paid + 2.5% × UBIA

This creates a **higher W-2 incentive** for non-SSTB above threshold: more W-2 = larger QBI deduction ceiling.

Example 2026 MFJ non-SSTB S Corp owner at $500K QBI, $500K taxable income (above threshold, in phase-in):
- W-2 of $100K: 50% × $100K = $50K QBI ceiling
- W-2 of $200K: 50% × $200K = $100K QBI ceiling
- Raw QBI: 20% × $500K = $100K
- With $100K W-2: actual QBI = min($100K, $50K) = $50K (capped by W-2/UBIA)
- With $200K W-2: actual QBI = min($100K, $100K) = $100K (full benefit)

This changes the reasonable comp calculus for non-SSTB above-threshold clients:
- Additional $100K W-2 costs: $15,400 FICA/Medicare (above SS wage base of $184,500, so lower than $15.3%)
- Additional QBI benefit: $50K × marginal rate (37%) = $18,500
- Net benefit from higher W-2: $3,100

For SSTB clients above threshold, no W-2 incentive (QBI phases out regardless of W-2).

**§401(a)(17) coordination with DB strategy**:

For clients using DB plan stacking, W-2 should be set at or above §401(a)(17) cap ($360,000 for 2026) to max DB benefit accrual. Combined with the QBI W-2 benefit above, high-income non-SSTB clients often set W-2 around $360K — above typical RCReports median but defensible given the operational role.

**Additional Medicare 0.9% unchanged**:

$200K single / $250K MFJ thresholds unchanged by OBBBA. Continues to apply to W-2 wages above threshold.

### SECURE 2.0 Roth catch-up mandate (effective 2026)

Indirect impact: for S Corp owners with prior-year W-2 > $150K, 2026 retirement plan catch-up contributions must be Roth. Reasonable comp level doesn't change, but downstream retirement planning (Solo 401(k), DB catch-up for age 50+) must accommodate Roth designation.

### No changes to case law posture

Watson, Glass Blocks, McAlary, Fleischer remain controlling. IRS enforcement continues via the same 9-factor framework. RCReports methodology remains the standard.

## Interaction with other strategies

### Stacks with Solo-401k-SEP-Comparison

This is the **core stacking interaction** — every Priceless S Corp client has both decisions in play.

Joint optimization:
- Higher W-2: larger 25% employer contribution capacity; larger QBI W-2 ceiling (if above threshold non-SSTB); larger DB benefit accrual base
- Lower W-2: less FICA paid; more capacity in distributions

Typical 2026 analysis for non-SSTB above-threshold client:
1. Set W-2 at RCReports median OR at §401(a)(17) cap, whichever is lower and defensible
2. Compute Solo 401(k) employer contribution (25% × W-2)
3. Add Solo 401(k) employee deferral ($24,500)
4. Verify total within §415(c) ($72,000)
5. If owner age 50+: add catch-up capacity
6. Confirm combined (W-2 + FICA paid + distributions + retirement contribution) optimizes net household tax

Software often does this iteratively; Priceless runs it through the Excel model.

### Stacks with Defined-Benefit-Overlay

For high-income clients using DB plan:
- DB benefit scales with comp, capped by §401(a)(17)
- Optimal W-2 often at or slightly above cap ($360K 2026)
- RCReports at 75th percentile or higher may be appropriate for high-earning specialty practices
- Coordinate with TPA on DB design before finalizing W-2

### Stacks with Health-Insurance-S-Corp-162L

§162(l) above-the-line deduction requires health insurance paid through the S Corp for the >2% shareholder. Mechanics:
- Insurance premium paid by S Corp and included in owner's W-2 wages (§162(l))
- Owner reports premium as compensation on W-2 Box 1 (taxable income)
- Owner deducts premium as self-employed health insurance on Schedule 1 (above-the-line)
- Net: deduction without FICA impact (W-2 Box 3 excludes the insurance premium)

Coordinate: reasonable comp W-2 must cover the insurance premium amount. If RCReports suggests $60K W-2 and health insurance costs $18K/year, W-2 must be at least $18K for §162(l) to apply; actual RCReports amount of $60K comfortably covers.

### Stacks with Hiring-Children-Legitimately

Children's wages are separate from owner's W-2. Doesn't affect reasonable comp analysis directly.

Indirect effect: children's wages reduce S Corp net income → reduces distributions → reduces owner's pass-through income. Separate optimization.

### Stacks with Spousal-Employment

Spouse's W-2 is separate from owner's. Each shareholder-employee has their own reasonable comp analysis.

If spouse is bona fide employee rendering services, separate RCReports analysis for spouse's role. Spouse's W-2 also enables separate Solo 401(k) and separate DB participation (discussed in `SPOUSAL-EMPLOYMENT.md`).

### Stacks with QBI-Optimization

Coordinated optimization described above. For above-threshold non-SSTB clients, higher W-2 can unlock QBI ceiling. For below-threshold or SSTB clients, W-2 decision independent of QBI (which is fixed by underlying business income regardless of W-2 split).

### Non-interaction with S-Corp-Basis-Tracking

W-2 is a deductible wage expense at the S Corp level, reducing net income flowing to K-1. Basis tracking is independent of the W-2 decision (basis tracks shareholder's investment in the S Corp, not the W-2 vs. distribution split).

## Audit posture

### Risk profile: low when methodology sound; HIGH when W-2 artificially low

IRS challenge risk is:
- **LOW** when W-2 reflects RCReports (or equivalent benchmark) median with documented methodology
- **MEDIUM** when W-2 is at 25th percentile of benchmark with specific factual support for lower end
- **HIGH** when W-2 is nominal ($24K, $30K on a $300K+ S Corp) without methodology
- **CRITICAL** when W-2 is zero on a profitable services S Corp

### Audit trigger scenarios

- **Under-reported W-2 + high distributions** creates a statistical flag (IRS has internal "dividend-to-wage ratio" screens)
- **IRS letter audits of S Corp returns** often focus on officer compensation
- **1099 payments from third parties to the corporation** that don't correspond to any W-2 for officers
- **Sudden decrease in W-2** in a year of high distributions (signals reclassification attempt)
- **Prior audit adjustment** in the industry (increases IRS focus)
- **Industry-specific scrutiny** (medical practices, consulting firms, construction contractors have elevated IRS attention)

### Defense considerations

- **Annual RCReports file** for each year — do not rely on prior years' analyses
- **Methodology memo** documenting selection within range
- **Board resolution** authorizing the year's compensation
- **Payroll records** reconciling to W-2 and 1120-S
- **Officer job description** updated annually
- **Comparable wages documentation** — what the S Corp pays non-owner employees at similar levels
- **Time records** supporting the owner's actual time commitment

### Reclassification consequences

If IRS prevails on reclassification:
- **Back FICA/Medicare taxes**: additional 15.3% on reclassified amount
- **Penalties**: 20% accuracy-related penalty under §6662 common; up to 75% fraud penalty §6663 if egregious
- **Interest**: accrues from original due date
- **State payroll tax**: often follows federal reclassification
- **Typical total**: 20-35% of reclassified amount

### Watson-case anchor

*Watson v. Commissioner* (2012) is the canonical reasonable comp case. Accountant S Corp owner paid himself $24K W-2 and took $175K+ distributions. IRS reclassified $67,000 to wages. 8th Circuit affirmed. Case cited in virtually every IRS reasonable comp challenge.

Lesson: low nominal W-2 on a profitable professional services S Corp is the textbook reclassification case. Don't do it.

## Open questions for partner (typical)

At annual comp review, partner confirms:
- Is the role description in our file current?
- Has the owner taken on materially different duties this year (more management, less hands-on)?
- Are there sub-wage payments to family members that change the §162(a) analysis?
- Is the entity expecting a transaction event (sale, recap) where comp choices affect basis?
- Any audit exposure from prior years that affects posture?

## What this strategy does NOT do

- **Does not eliminate FICA/Medicare entirely**. Owner-employee MUST pay reasonable comp. Strategies promising "$0 comp on $500K profit" are reclassification time bombs.
- **Does not apply to non-S Corp entities**. Schedule C, partnerships, and sole props have SE tax on full net SE income via §1401.
- **Does not change the entity's tax position**. S Corp is pass-through regardless of W-2 vs. distribution split. Entity-level tax (at state with PTET) is separate.
- **Does not protect against piercing the corporate veil** if other corporate formalities ignored. Reasonable comp is ONE piece of S Corp discipline.

## Deliverable points (documentation skill handoff)

When reasonable comp appears in a client memo, documentation skill should produce:

### In the narrative memo

- **Recommendation statement**: "Your 2026 W-2 is set at $[X]. Supporting: RCReports benchmark for [role / market / revenue band] shows 25th percentile $[A], median $[B], 75th percentile $[C]. We're at the [percentile] for [reason]."
- **Why quantification**: Current W-2 $[Y] vs. optimized $[X]; FICA/Medicare savings (or cost if increase) of $[delta].
- **Trade-off statement**: Payroll tax cost on full W-2 amount; offset by distribution flexibility. [If QBI or DB coordination: additional benefits quantified.]
- **Action items**: 
  - Update Gusto payroll to $[monthly amount]
  - Partner signs board resolution
  - Q3 mid-year verification
  - Q4 true-up if needed
- **Deadline**: First pay period of year for new comp level; Dec 31 for any true-up

### In the Excel model

- **Tax Projection tab**: W-2 in Income section with clear labeling; remaining S Corp net flows as distributions
- **Strategies tab**: row for "S Corp Reasonable Comp Setting" showing FICA savings (or note "compliance posture — no savings; risk mitigation")
- **Actions tab**: Q1 payroll update; Q3 mid-year check; Q4 true-up
- **Notes tab**: RCReports report ID; methodology selection (percentile and reasoning); date of analysis

### In partner-review [REVIEW] callouts

- `[REVIEW: quantification — W-2 at $[X] = [percentile] of RCReports; partner confirm defensibility]`
- `[REVIEW: framing — first-year client? Prior W-2 was $[Y]; substantial change to $[X] needs client explanation]`
- `[REVIEW: scope — health insurance through W-2 per §162(l); confirm implementation]`
- `[REVIEW: tone — language about prior CPA's methodology if applicable]`

### Template language

For annual cover letter reference:
> "Your 2026 W-2 is set at $95,000. This is the median of our RCReports benchmark for Miami-based [role] at your revenue level. Supports your Solo 401(k) maximum and meets reasonable compensation standards. Full analysis in our file; board resolution for signature attached."

For the "why this saves you money" explanation — clients respond better to the worked partnership-vs-S-corp comparison than to a bare FICA-savings number. Use real client figures:
> "As an S-corp, only the wages you run through payroll are subject to Social Security and Medicare tax, 15.3% combined. Distributions are completely free of that tax, since that income was already taxed as ordinary income on your K-1 when it was earned, not again when it is later withdrawn. If [entity] were taxed as a partnership instead, the full $[total business income] would be subject to self-employment tax, since the IRS would treat all of it as earnings from your own labor. As an S-corp paying $[wage] in wages, your payroll tax on that amount is $[X]. The difference, $[delta], is real money you keep by running the business as an S-corp with a properly benchmarked wage instead of taking everything as self-employment income. The important caveat: this only works because $[wage] is a defensible, benchmarked wage for your role — if the wage were set artificially low just to dodge payroll tax, that's exactly the pattern the IRS reclassifies on audit, so this savings is the reward for doing the wage analysis properly, not a shortcut."

See the full plain-language explainer bank in `shared/CLIENT-FACING-MEMO-TEMPLATE.md`.

## Update status

| Verification | Date | Source |
|---|---|---|
| 2026 SS wage base ($184,500) | Verified 2026-04 | SSA COLA announcement October 2025 |
| 2025 SS wage base ($176,100) | Verified 2026-04 | SSA (historical reference) |
| 2026 Additional Medicare thresholds ($200K/$250K) | Current | §1411 / §3101(b)(2) — unchanged |
| 2026 §401(a)(17) comp cap ($360,000) | Verified 2026-04 | IRS Rev. Proc. 2025-32 |
| OBBBA non-amendment of §1366 | Verified 2026-04 | P.L. 119-21 full text review |
| QBI W-2/UBIA interaction (2026) | Verified 2026-04 | §199A(b)(2)(B); OBBBA §70105 |
| SECURE 2.0 Roth catch-up (indirect) | Reviewed 2026-04 | SECURE 2.0 §603 |
| RCReports methodology current | Continuously updated | RCReports firm subscription |
| Watson, Glass Blocks, McAlary, Fleischer case status | Reviewed 2026-04 | Case law unchanged |
| Worked partnership-vs-S-corp template language added | 2026-08 | Live engagement, T&A Contracting LLC Q3 2026 |

**Last full review**: 2026-04 (Sprint 5.5 rebuild)
**Next review trigger**: Annual SSA wage base update (October); annual IRS retirement limits (Notice, October/November); major new reasonable comp case law; RCReports methodology updates
