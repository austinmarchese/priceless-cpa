---
strategy: QBI (§199A) Optimization
category: core
authority:
  - IRC §199A (made permanent by OBBBA 2025)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21, enacted July 4, 2025, §70105
  - IRS Rev. Proc. 2025-32 (2026 inflation adjustments)
  - Treas. Reg. §1.199A-1 through -6
  - Notice 2019-07 (safe harbor for rental real estate)
applies_when:
  - has_qualified_pass_through_income: true (S Corp, partnership, sole prop, Schedule E rental)
  - taxable_income > 0: true (QBI cannot create a loss)
  - for_SSTB_owners: taxable_income evaluated against threshold
earliest_actionable_quarter: Q1 (for annual planning)
latest_actionable_quarter: Q4 (final year-end income adjustments)
typical_savings_range: $3000 - $75000+ (annually)
typical_savings_as_pct_of_income: up to ~7.4% effective rate reduction on QBI
savings_formula: |
  QBI Deduction = lesser of:
    20% × Qualified Business Income, OR
    20% × (Taxable Income - Net Capital Gain)
  
  For non-SSTB above threshold: subject to W-2/UBIA limit:
    greater of (50% × W-2 wages) OR (25% × W-2 + 2.5% × UBIA)
  
  For SSTB above threshold: deduction phases out entirely in phase-in range
    2025 thresholds: $197,300 single / $394,600 MFJ
    2025 phase-in range: $50K (single) / $100K (MFJ) — narrower
    2026+ phase-in range widened: $75K (single) / $175K (MFJ) by OBBBA
  
  New $400 minimum deduction for taxpayers with $1,000+ of QBI (indexed for inflation)
  
  Effective tax savings = QBI deduction × marginal federal rate
  Max federal effective rate reduction: 20% × 37% = 7.4 percentage points
feasibility: high
implementation_complexity: medium (calculation complex above threshold)
audit_risk: low
requires_documentation:
  - Form 8995 (simplified) or Form 8995-A (complex, above threshold)
  - Aggregation statement if election made (Treas. Reg. §1.199A-4)
  - W-2 wages paid by each QBI-generating entity
  - UBIA (unadjusted basis immediately after acquisition) of qualified property per entity
  - Business classification documentation (SSTB vs. non-SSTB)
requires_partner_signoff: false for straightforward; true for aggregation elections and SSTB edge cases
requires_separate_engagement: no
typical_separate_engagement_fee: null
compatible_stacks:
  - S-Corp-Reasonable-Comp (W-2 affects QBI W-2 limit for non-SSTB above threshold)
  - Defined-Benefit-Overlay (reduces taxable income, may drop SSTB owner below threshold)
  - Charitable-Bunching-DAF (reduces taxable income, similar effect)
  - PTET-Election-By-State (reduces K-1 income at entity level, affects QBI base; state tax effective shift)
  - HSA-Optimization (reduces taxable income)
  - Solo-401k-SEP-Comparison (reduces taxable income)
  - Mega-Backdoor-Roth (reduces taxable income via pre-tax election deferrals)
incompatible_with:
  - C corporations (QBI only for pass-throughs)
  - Investment-only holdings (not qualified trade or business)
  - Wage income (not QBI)
prerequisites:
  - Pass-through entity generating trade or business income
  - Taxable income positive
  - If SSTB: taxable income below or within phase-in (above fully eliminated)
industries_best_fit:
  - e-commerce (non-SSTB)
  - digital-marketing (non-SSTB if product-focused; consulting can be SSTB)
  - construction (non-SSTB)
  - real-estate-agents (non-SSTB, performance-based)
  - real-estate-owners (rental — qualifying activity under safe harbor §199A)
  - jewelry-stores (non-SSTB)
  - home-services (non-SSTB)
  - software-ai-companies (non-SSTB)
  - car-washes (non-SSTB)
industries_SSTB_restricted:
  - doctors-medical-practices (SSTB — health)
  - investment-firms/RIAs-as-clients (SSTB — financial services, brokerage)
  - lawyers (SSTB — law)
  - accountants (SSTB — accounting)
  - consultants (SSTB — consulting)
  - financial-advisors (SSTB — financial services)
state_specific_considerations: |
  State conformity varies significantly:
    Conforming states (allow QBI): TX, FL, WA, NV (no tax), most states
    Non-conforming states (don't allow QBI at state level): CA, NY, NJ, PA, others
    Partial conformity: several states
    For non-conforming states, state taxable income differs from federal — adds complexity
path_b_compensation_tier: 0
---

# QBI Optimization (§199A)

The §199A Qualified Business Income deduction is one of the most valuable provisions for pass-through business owners. **The OBBBA (enacted July 4, 2025) made §199A permanent** — eliminating the prior sunset concern. It also widened the phase-in range for 2026 and added a new $400 minimum deduction.

## The basic mechanic

Pass-through entity owners deduct up to 20% of Qualified Business Income (QBI) from taxable income. Effective federal rate reduction up to 7.4 percentage points (20% × 37%).

QBI = net income from qualified trade or business conducted via:
- Sole proprietorship (Schedule C)
- Partnership (K-1)
- S Corporation (K-1)
- Real estate rentals meeting safe harbor (§199A or trade/business level)

Excluded from QBI:
- Wages
- Investment income (interest, dividends, capital gains)
- Guaranteed payments to partners
- Reasonable compensation paid to S Corp shareholder
- Foreign-source income

## Post-OBBBA 2025 changes (key for planning)

**1. Permanent**: §199A made permanent (no longer scheduled to sunset end of 2025). Stability enables long-term planning.

**2. Widened phase-in range for 2026**:
- Single: phase-in widened from $50K to $75K
- MFJ: phase-in widened from $100K to $175K
- Benefit: SSTB owners at the top of the phase-in range now get partial deduction at income levels where the old rule would have fully eliminated

**3. $400 minimum deduction**: For taxpayers with at least $1,000 of QBI, minimum deduction of $400 (indexed for inflation). Ensures small-QBI taxpayers get some benefit.

**4. Thresholds indexed annually**:
- 2025: $197,300 single / $394,600 MFJ
- 2026: approximately $203,000 single / $406,000 MFJ (exact per Rev. Proc. 2025-32)
- Phase-in widened for 2026

## The three zones

QBI deduction mechanics depend on where taxable income falls relative to thresholds.

### Zone 1: Below threshold (simplest)

Taxable income ≤ threshold ($197,300 single / $394,600 MFJ in 2025)

All taxpayers (SSTB or non-SSTB) get full 20% QBI deduction, subject only to the taxable income limitation.

No W-2/UBIA limit applies. Just 20% × QBI, limited to 20% × (TI - net capital gain).

### Zone 2: Phase-in range

Taxable income within phase-in:
- 2025: threshold to threshold+$50K (single) / threshold+$100K (MFJ)
- 2026: threshold to threshold+$75K (single) / threshold+$175K (MFJ) — widened by OBBBA

**For SSTBs**: QBI deduction phases out linearly to zero across the phase-in range.

**For non-SSTBs**: W-2/UBIA limit phases in linearly (from no limit at bottom to full limit at top of range).

This is the planning zone — small changes in taxable income can create big changes in QBI deduction. Reducing taxable income (retirement contributions, DB plan, charitable bunching) can unlock meaningful deduction.

### Zone 3: Above phase-in

**For SSTBs**: QBI deduction completely eliminated. No planning available at the QBI level except to reduce taxable income below or into phase-in.

**For non-SSTBs**: Full W-2/UBIA limit applies:
- QBI deduction = lesser of 20% × QBI OR greater of (50% × W-2 wages) OR (25% × W-2 + 2.5% × UBIA)
- Higher reasonable comp helps QBI deduction (via 50% W-2 rule)
- Real-estate-heavy businesses benefit from UBIA rule

## SSTB vs. non-SSTB

Specified Service Trade or Business (SSTB) categories (fully excluded above Zone 3):
- Health
- Law
- Accounting
- Actuarial science
- Performing arts
- Consulting
- Athletics
- Financial services
- Brokerage services
- Investing and investment management
- Dealing in securities, partnership interests, commodities
- Any trade or business where the principal asset is the reputation or skill of one or more employees

Not SSTBs (eligible at all income levels subject to W-2/UBIA limit):
- Software development
- E-commerce
- Construction
- Manufacturing
- Real estate (rental meeting safe harbor)
- Most retail
- Most product-based businesses
- Digital marketing (if product-focused, not pure consulting)

**SSTB determination edge cases**: Health services that don't involve a licensed professional (e.g., wellness product businesses), consulting with substantial products, multi-service businesses — may fall outside SSTB. Careful analysis and, where material, documented.

## W-2 / UBIA limit (Zone 3 non-SSTB)

For non-SSTB above phase-in:

QBI Deduction limited to greater of:
- 50% × W-2 wages paid by the qualified business, OR
- 25% × W-2 wages + 2.5% × UBIA (unadjusted basis immediately after acquisition of qualified property)

Planning implications:

**50% W-2 path**: High-comp businesses. Raising reasonable comp (if below target) can unlock QBI deduction.

**25% W-2 + 2.5% UBIA path**: Real-estate-heavy businesses. UBIA of real property (not depreciated basis) can support deduction. Relevant for real estate owners, construction firms with significant equipment.

Both paths calculated; taxpayer takes greater. For a client above the threshold, the interaction between reasonable comp and QBI becomes non-trivial.

## Aggregation (§199A(b)(4), Treas. Reg. §1.199A-4)

Taxpayer can aggregate multiple qualified trades or businesses for QBI purposes if:
1. Same owner (>50% direct or indirect ownership by same individual throughout year)
2. Same tax year
3. Non-SSTB
4. Two of three: same trade/business, business operations, serving the same customers

Aggregation allows combining QBI, W-2 wages, and UBIA across entities. Often beneficial for:
- Owner with multiple related entities (e.g., operating + real estate)
- Entities where one has high income, another has high wages or property
- Preserving QBI when one entity would fail W-2 test alone

Aggregation election is made on Form 8995-A Schedule B. Must be made consistently year over year; can be modified only with compelling reason.

## Real estate rental (§199A safe harbor)

Rental real estate is a qualified trade or business if:

**Safe harbor (Notice 2019-07)**:
- Separate books and records maintained for each rental real estate enterprise
- 250 or more hours of rental services performed per year (tenant services, operations)
- Contemporaneous records of time spent

**Outside safe harbor**:
- Must meet general "trade or business" standard (§162 test — regular and continuous)
- Case-by-case analysis

Many clients with a few rentals fail safe harbor but may still qualify under general trade/business standard. Documentation helps.

For triple-net lease properties, the general trade/business standard is harder to meet (minimal taxpayer activity).

## The $400 minimum (new under OBBBA)

OBBBA added §199A(a)(2)(B)(i) — a minimum deduction of $400 for taxpayers with $1,000 or more of QBI (indexed).

Ensures small-business owners get some benefit even when formula calculation would be lower. Particularly relevant for side-business or start-up year scenarios.

## Planning strategies by zone

### Below threshold (Zone 1)

- Deduction already maxed at 20% of QBI
- No specific planning required — confirm correct calculation
- Watch for growth that might push into Zone 2

### In phase-in range (Zone 2)

For SSTB owners — MOST VALUABLE PLANNING

Every dollar of taxable income reduction partially restores the deduction. Strategies:
- Maximize retirement contributions (Solo 401(k), SEP, DB plan)
- DB/Cash Balance plan establishment (major income reduction)
- HSA contribution
- Charitable bunching with DAF (bunching year pushes below or into lower-phase-in)
- §162(l) self-employed health insurance deduction

Dollar impact: for SSTB owner with $450K taxable income (MFJ, partially in phase-in), reducing TI by $50K via DB contribution can restore 25%+ of QBI deduction. Potentially $20K-$40K in tax savings beyond the DB's direct deduction.

For non-SSTB owners — FACTOR INTO STRATEGY SIZING

Reducing TI shifts from W-2/UBIA-limited to pure 20% × QBI at some point. Evaluate whether that's achievable and valuable.

### Above phase-in (Zone 3)

For SSTB owners:

- QBI deduction lost at owner level
- PTET election still valuable (reduces K-1 income, may not help recapture SSTB QBI, but reduces state tax)
- DB/CBP to drop income into phase-in range often impractical (requires very large reduction)
- Consider multi-year planning: big expense year pulls TI down into phase-in

For non-SSTB owners — W-2/UBIA OPTIMIZATION

- Review reasonable comp for QBI W-2 limit impact
- UBIA tracking for real-estate-heavy businesses
- Aggregation election to pool W-2 wages and UBIA across entities

## Common errors inherited

1. **Aggregation not elected** when beneficial (separate calculations miss opportunity)
2. **SSTB classification wrong** — either missed SSTB status or incorrectly classified non-SSTB as SSTB
3. **W-2 wages not properly tracked** per entity
4. **UBIA not tracked** — basis of property at acquisition, before depreciation
5. **Rental real estate treated as passive**, not evaluated for trade/business status
6. **Safe harbor not documented** — 250-hour rule requires contemporaneous records
7. **Form 8995 used** when 8995-A required (above threshold)
8. **Calculation math error** — W-2/UBIA limit computed incorrectly
9. **Net capital gain limitation** missed (QBI deduction capped at 20% of (TI - net capital gain))

## Interaction with S Corp reasonable comp

For S Corp owners above threshold, non-SSTB:
- Higher reasonable comp = lower K-1 income = lower QBI base
- But higher reasonable comp = higher W-2 = higher 50% W-2 limit
- Math: usually net positive at very high incomes (W-2 limit effect dominates)
- But: additional reasonable comp costs FICA/Medicare (15.3%)
- Tradeoff analysis: partner evaluates

For S Corp SSTB owners:
- Above Zone 3: QBI gone entirely; reasonable comp decision driven by FICA/401(k) math only
- In Zone 2: reducing reasonable comp (to allowable floor) can increase K-1 and reduce TI, partially restoring SSTB QBI

## Documentation skill handoff

- Form 8995 / 8995-A preparation
- Aggregation election template (Schedule B)
- SSTB determination memo template
- Rental real estate trade/business analysis memo
- Multi-entity W-2 and UBIA tracking worksheet
- Safe harbor documentation template (250-hour tracking)

## Reference sources

- IRC §199A (as amended by OBBBA 2025)
- Treas. Reg. §1.199A-1 through -6
- Notice 2019-07 (rental real estate safe harbor)
- OBBBA §70105 (permanence, phase-in widening, $400 minimum)
- Rev. Proc. 2025-32 (2026 indexed thresholds)

## Audit posture

### Risk profile: low for straightforward; medium for aggressive positions

IRS challenge risk is:
- **LOW** when QBI is computed on Form 8995/8995-A with standard methodology, properly documented W-2 wages and UBIA, and clear SSTB/non-SSTB classification
- **MEDIUM** when aggregation election is made (Form 8995-A Schedule B) with marginally-fitting facts
- **MEDIUM** when rental real estate qualifies via §199A safe harbor (250-hour rule) with thin documentation
- **HIGH** when SSTB classification is contested (health-adjacent, consulting-adjacent businesses claiming non-SSTB)

### Audit trigger scenarios

- **Form 8995-A QBI deduction disproportionate to income** — raises file for review
- **Aggregation election with weak factual nexus** between entities
- **Rental real estate claimed as QBI-qualifying** without §162 trade/business factual support
- **SSTB classification challenged** for marginal businesses (wellness products, consulting with product, health-adjacent services)
- **QBI on entity with no real activity** (paper entity or investment vehicle)
- **UBIA of unusual property** (non-depreciable property, related-party purchases)
- **W-2 wages paid only to owner** at level that looks engineered for QBI purposes

### Defense considerations

- **Annual §199A workpaper**: W-2 wages, UBIA, QBI, taxable income, SSTB status, calculation details
- **Aggregation election documentation**: factual basis for each of the three-prong test (ownership, tax year, non-SSTB, trade/business + operations + customers)
- **SSTB classification memo** for any business where classification is not obvious
- **Rental real estate trade/business analysis** (safe harbor compliance OR §162 factual analysis)
- **UBIA tracking schedule** per entity (property, date acquired, unadjusted basis, depreciation recapture status)
- **W-2 wages paid to employees** substantiated via Form W-3 reconciliation

### Statute of limitations considerations

- Standard 3-year §6501 limitation
- §6501(e) 6-year limitation if QBI-generating income underreported by 25%+
- Aggregation elections typically bind subsequent years (Treas. Reg. §1.199A-4(c)(1))

## Interaction with other strategies (detailed)

### Stacks with S-Corp-Reasonable-Comp (above-threshold non-SSTB)

For non-SSTB S Corp owners above the QBI threshold, the W-2/UBIA limit applies. Higher W-2 can unlock higher QBI ceiling (50% × W-2 rule).

Example 2026 MFJ non-SSTB, $500K QBI, $500K taxable income (within phase-in):
- W-2 of $100K: 50% × $100K = $50K W-2 ceiling
- W-2 of $200K: 50% × $200K = $100K W-2 ceiling
- Raw QBI: 20% × $500K = $100K
- With $100K W-2: actual QBI = $50K (W-2-limited)
- With $200K W-2: actual QBI = $100K (full benefit)

Trade-off: $100K additional W-2 costs ~$15,400 in payroll taxes above SS wage base; unlocks $50K of QBI worth $18,500 at 37% marginal. Net $3,100 benefit — small but positive.

For SSTB above threshold: QBI is fully phased out; W-2 level doesn't help.

### Stacks with Defined-Benefit-Overlay (and Solo 401(k))

The **highest-value interaction** for SSTB clients in or above the phase-in range.

A DB contribution (or Solo 401(k) contribution) reduces taxable income, which can drop an SSTB owner from Zone 3 (QBI fully phased out) into Zone 2 (partial phase-in, still some deduction) or even Zone 1 (full deduction).

See `DEFINED-BENEFIT-OVERLAY.md` for the worked physician example ($77K+ federal savings from DB + restored QBI).

### Stacks with Charitable-Bunching-DAF

Itemized charitable deductions reduce taxable income. For taxpayer in Zone 2 (phase-in), charitable bunching can drop them back to Zone 1 for that year, restoring full QBI.

OBBBA complication: starting 2026, itemized charitable deductions are subject to a 0.5% AGI floor (only amounts above 0.5% of AGI deductible). Factors into bunching calculus — smaller net charitable benefit means less TI reduction.

### Stacks with PTET-Election-By-State

PTET reduces entity-level K-1 income (via PTET tax paid at entity) and provides a state tax credit to the owner. Impact on QBI:
- K-1 income lower → QBI base lower (QBI is computed on K-1 net ordinary income)
- But: taxpayer also gets federal deduction for PTET tax paid at entity level (not subject to SALT cap)

Net effect on QBI: slightly reduces QBI deduction at federal level; substantially reduces state tax; overall usually net positive.

### Stacks with HSA-Optimization

HSA contribution is above-the-line. Reduces AGI → reduces taxable income → useful for phase-in range management. Smaller effect than retirement plans (HSA 2026 family max $8,750) but stacks additively.

### Stacks with Solo-401k-SEP-Comparison

Directly reduces taxable income → most accessible QBI-phase-in management tool. Solo 401(k) contribution typically drops taxable income $40K-$70K (including employer contribution). At the right level, can restore SSTB owner's full QBI.

Critical path for Priceless's moderate-to-upper middle income clients.

### Stacks with Mega-Backdoor-Roth

Mega backdoor Roth is AFTER-TAX contributions converted to Roth. Does NOT reduce taxable income for the contribution year.

So Mega Backdoor does NOT help QBI phase-in management. Valuable as a separate wealth-building strategy but not coordinated with QBI.

### Non-interaction with Real Estate Professional Status (REPS)

REPS allows passive losses to offset active income. Doesn't directly affect QBI computation on operating businesses. Rental real estate owned by REPS-qualified taxpayer generates losses that reduce taxable income → helps QBI phase-in management indirectly.

If rental meets §199A safe harbor, it's QBI-generating. REPS status doesn't affect QBI qualification of the rentals (different analyses).

## Deliverable points (documentation skill handoff)

When QBI optimization appears in a client memo, documentation skill should produce:

### In the narrative memo

**For below-threshold clients (Zone 1)**:
- **Recommendation statement**: "Your 2026 QBI deduction is $[X] — the full 20% benefit. No specific action needed beyond continuing current entity structure."
- Simple narrative — QBI on autopilot.

**For phase-in range clients (Zone 2)**:
- **Recommendation statement**: "Your QBI deduction is at risk and worth $[X]. At projected taxable income of $[Y], you're $[Z] into the phase-in where your deduction is partially phased out. [Specific strategy — e.g., Solo 401(k) contribution of $40K] restores the full deduction."
- **Why quantification**: Combined benefit = retirement contribution deduction + QBI restoration
- **Trade-off**: Cash commitment to contribution; liquidity reduced
- **Action**: Execute the TI-reducing strategy
- **Deadline**: Before December 31 for that year's QBI

**For above-phase-in SSTB (Zone 3)**:
- **Recommendation statement**: "Your QBI deduction is fully phased out at current income. Restoring it requires dropping taxable income by $[X] — usually not practical via retirement contributions alone."
- Consider multi-year planning horizon, DB plan feasibility, or accept Zone 3 status
- Focus on other tax strategies

**For above-phase-in non-SSTB (Zone 3)**:
- **Recommendation statement**: "Your QBI deduction is subject to the W-2/UBIA limit. Current computation: $[X]. [Analysis of whether higher W-2 or aggregation election would increase deduction.]"
- May recommend W-2 adjustment; aggregation election; UBIA tracking
- Coordinate with reasonable comp decision

### In the Excel model

- **Tax Projection tab QBI block**: complete 12-15 row calculation showing:
  - QBI-eligible income per entity
  - Aggregated QBI (if election)
  - SSTB flag
  - Taxable income before QBI
  - Threshold and phase-in end
  - Zone determination
  - W-2 wages per entity (if above threshold)
  - UBIA per entity (if above threshold)
  - Phase-in factor (if Zone 2)
  - W-2/UBIA limit (if Zone 3 non-SSTB)
  - Final QBI deduction
- **Scenario Comparison tab** (if phase-in management is a driver): base case vs. with-TI-reduction showing QBI delta
- **Notes tab**: methodology (SSTB classification, aggregation rationale), cross-reference to other strategies driving TI

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — SSTB classification for [business name]; defensible as non-SSTB?]`
- `[REVIEW: quantification — aggregation election would pool W-2/UBIA across [entities]; net QBI impact $[X]; election?]`
- `[REVIEW: scope — rental real estate claimed as QBI; confirm §199A safe harbor OR §162 trade/business factual basis]`
- `[REVIEW: framing — SSTB + Zone 3 client — memo should lead with "no QBI this year" not bury it]`

### Template language

For phase-in range SSTB client:
> **Your §199A QBI deduction is at risk and worth $[11,400]**. At $445K projected MFJ income you're above the SSTB phase-in threshold ($406K for 2026 MFJ). A $40K Solo 401(k) contribution drops your taxable income to $405K — below threshold, full QBI deduction preserved. Net savings: the retirement contribution deduction ($14,800 federal at 37%) + QBI restoration ($11,400 × 37% = $4,218 federal) = $19,018 combined federal benefit from one coordinated move.

For non-SSTB above-threshold client:
> **Your 2026 QBI deduction is W-2-limited at $[X]**. Your pass-through entity paid $150K in wages, giving a 50% ceiling of $75K. Raw QBI would be $100K, but the W-2 limit caps it at $75K. Considerations: (a) raising W-2 by $50K would unlock an additional $25K of QBI but costs $7,700 in payroll tax — net benefit $1,550; (b) aggregation with your real estate entity (UBIA of $2M) would use the alternate 25%/2.5% rule for potentially higher ceiling.

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA §199A permanence | Verified 2026-04 | P.L. 119-21 §70105 |
| 2026 MFJ threshold ($406,000) | Verified 2026-04 | IRS Rev. Proc. 2025-32 |
| 2026 single threshold ($203,000) | Verified 2026-04 | IRS Rev. Proc. 2025-32 |
| 2026 phase-in range widening ($75K single / $175K MFJ) | Verified 2026-04 | OBBBA §70105 |
| $400 minimum deduction | Verified 2026-04 | OBBBA §70105 — new §199A(a)(2)(B)(i) |
| 2026 charitable 0.5% AGI floor (indirect impact) | Verified 2026-04 | OBBBA §70112 |
| Notice 2019-07 safe harbor | Still current 2026-04 | IRS; unchanged by OBBBA |
| Treas. Reg. §1.199A-1 through -6 | Still current 2026-04 | Treasury; unchanged |
| Aggregation rules Treas. Reg. §1.199A-4 | Still current 2026-04 | Treasury; unchanged |
| W-2/UBIA calculation mechanics | Unchanged 2026-04 | §199A(b)(2)(B) |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added Audit Posture, Interaction detail, Deliverable Points)
**Next review trigger**: 2027 Rev. Proc. indexed amounts (Oct/Nov 2026); any IRS regulation amendments on aggregation or rental trade/business standards; §199A-related case law developments
