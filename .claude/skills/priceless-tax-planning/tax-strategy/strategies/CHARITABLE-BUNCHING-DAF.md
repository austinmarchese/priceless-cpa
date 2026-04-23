---
strategy: Charitable Bunching via Donor-Advised Fund (DAF)
category: core
authority:
  - IRC §170 - charitable contribution deduction
  - IRC §170(b) - percentage limitations (60% AGI cash made PERMANENT by OBBBA)
  - IRC §170(f)(8) - substantiation requirements
  - IRC §170(f)(11) - appraisal requirements (for non-cash > $5,000)
  - Treas. Reg. §1.170A-13
  - Notice 2007-72 (DAF rules)
  - OBBBA 2025 (P.L. 119-21) - 0.5% AGI floor (2026+), 35% cap on top-bracket deduction value (2026+), new above-the-line deduction for non-itemizers (DAFs excluded)
applies_when:
  - has_charitable_intent: true
  - itemizes_or_could_with_bunching: true
  - has_consistent_annual_giving > $5000
earliest_actionable_quarter: Q1 (planning the multi-year strategy)
latest_actionable_quarter: Q4 (must contribute to DAF by Dec 31 of contribution year)
typical_savings_range: $1500 - $30000
typical_savings_as_pct_of_income: varies based on giving level and bracket
savings_formula: |
  For 2025 contributions (pre-OBBBA charitable changes):
    Bunching benefit = (Bunched contribution - Standard deduction) × marginal_rate × bunch_years
  
  For 2026+ contributions (post-OBBBA charitable changes):
    Bunching benefit adjusted for:
      - 0.5% AGI floor on itemized charitable deductions (first 0.5% of AGI not deductible)
      - 35% cap on deduction value for top-bracket (37%) taxpayers
      - Higher standard deduction ($32,200 MFJ in 2026) makes itemizing threshold higher
      - Non-itemizer above-the-line deduction NEW (but DAFs and private foundations excluded from it)
  
  Net bunching benefit (2026+, MFJ, top bracket):
    = (Bunched contribution - 0.5% × AGI - Standard Deduction) × 35% × years
  
  Appreciated stock to DAF: Avoid capital gains tax on appreciation + deduct FMV
    Stock cost basis $X, FMV $Y, gain Z = Y-X
    Tax savings = (Z × LTCG rate) + (Y × effective deduction rate × 0.5% floor adjustment)
feasibility: high
implementation_complexity: low
audit_risk: low
requires_documentation:
  - DAF account opening with sponsoring organization (Fidelity Charitable, Schwab Charitable, Vanguard, community foundations)
  - Contribution acknowledgment letter from DAF sponsor (date, amount, no goods or services received)
  - For appreciated stock: cost basis documentation, transfer confirmation
  - Form 8283 for non-cash contributions > $500
  - Qualified appraisal for non-cash > $5,000 (other than publicly-traded securities)
requires_partner_signoff: false
requires_separate_engagement: false
typical_separate_engagement_fee: null
compatible_stacks:
  - QBI-Optimization (bunching can move taxable income below SSTB phase-out threshold in bunch year)
  - Roth-Conversion-Planning (large deduction year good for Roth conversion)
  - Business-Sale-Planning (bunching contributions in sale year offsets ordinary income spike)
incompatible_with:
  - Cash bunching is incompatible with using same dollars for QCD (need different dollars)
prerequisites:
  - Charitable intent is genuine and ongoing
  - Multi-year cash flow capacity for advance funding
industries_best_fit:
  - all (any client with charitable intent and meaningful itemizable deductions)
industries_not_applicable:
  - none (universal applicability)
state_specific_considerations: most states conform to federal charitable deduction
path_b_compensation_tier: 0 (Priceless does not earn on DAF sponsor referrals)
---

# Charitable Bunching via Donor-Advised Fund (DAF)

For charitably-inclined clients, bunching multiple years of giving into one tax year (with a DAF as the holding vehicle) recovers itemizing benefits the standard deduction would otherwise consume.

**Critical post-OBBBA update**: OBBBA 2025 (P.L. 119-21) made three substantive changes to charitable giving starting 2026 that materially alter bunching calculus:

1. **0.5% AGI floor** on itemized charitable deductions (2026+). First 0.5% of AGI given to charity is non-deductible for itemizers. Example: MFJ with $500K AGI loses deduction for first $2,500 of charitable giving. Makes bunching MORE valuable (one large bunched gift clears the floor once; annual giving triggers the floor every year).

2. **35% cap on itemized deduction value** for top-bracket (37%) taxpayers. Top earners see charitable deduction capped at 35% rate of benefit, not their 37% marginal rate.

3. **New above-the-line deduction for non-itemizers** (2026+). Cash donations to public charities allow non-itemizers a small above-the-line deduction. **BUT: DAFs and private non-operating foundations are EXCLUDED from this deduction.** Non-itemizers considering DAF contributions should consider direct-to-charity giving for this small benefit.

Additional OBBBA-related context:
- 60% AGI limit for cash to public charity made **PERMANENT** (was scheduled to revert to 50%)
- Standard deduction raised under OBBBA: $31,500 (2025) / $32,200 (2026) MFJ — makes itemizing threshold higher
- SALT cap raised to $40K for 2025-2029 with phase-down — affects itemizing math for middle earners

**Planning implication**: 2025 is a uniquely favorable year to bunch charitable contributions — pre-0.5% floor, pre-35% cap. For clients with major giving plans, accelerating gifts (especially of appreciated assets) into 2025 preserves full deductibility at higher marginal rates.

## The basic mechanic

Post-TCJA (and continuing under OBBBA), the standard deduction is large enough that many clients no longer itemize. A client giving $10K/year to charity who otherwise has $20K in itemizable deductions falls below the $32,200 (2026 MFJ) standard deduction — getting no tax benefit from the giving.

DAF bunching solves this:

1. Year 1: Contribute 3-5 years of giving to DAF in one year. Total itemized deductions now exceed standard deduction. Take itemized.
2. Years 2-4 (or 2-5): Take standard deduction. Recommend grants from DAF to charities at the client's normal pace.
3. Year 5 (or 6): Repeat — fund DAF again, itemize again.

Net effect: charities receive the same total over the cycle. Client gets tax deduction for giving they would have done anyway.

**Post-2026 adjustment to the mechanic**: The 0.5% AGI floor means bunching in the DAF year still has more deductible amount than annual giving (one floor hit vs. 3-5 floor hits across years), but the incremental benefit shrinks slightly. For top-bracket clients, 35% cap also reduces benefit per dollar.

## The appreciated stock multiplier

The strategy gets dramatically more powerful when funded with appreciated long-term capital gain property (typically publicly-traded stock):

- Donor avoids capital gains tax on the appreciation (no recognition event)
- Donor deducts FMV of the stock (not just basis)
- Charity (DAF) receives full FMV, sells tax-free, has full amount available for grants

**Example 2025 (pre-OBBBA charitable changes)**: client with $50K of low-basis stock (basis $10K, FMV $50K), donating to DAF instead of selling:
- Saves $40K × 23.8% (LTCG + NIIT) = $9,520 in capital gains tax avoided
- PLUS deducts $50K × 37% = $18,500 federal benefit (in itemizing year, top bracket)
- Combined value: ~$28K tax savings on a $50K contribution

**Same example 2026 (post-OBBBA)** — for MFJ with $500K AGI, top bracket:
- Saves $40K × 23.8% = $9,520 in capital gains tax avoided (unchanged)
- 0.5% AGI floor: first $2,500 not deductible
- Remaining $47,500 deducted, capped at 35% bracket = $16,625 federal benefit
- Combined value: ~$26K tax savings on $50K contribution
- Lost vs. 2025: ~$1,875 (~7% benefit reduction)

Compare to selling stock and donating cash: lose the $9,520 capital gains avoidance in either year.

**Appreciated stock remains THE most tax-efficient charitable vehicle** — the 0.5% floor applies only once to the overall charitable deduction, and the FMV step-up on appreciated property adds value beyond the deduction itself.

## Limits and timing

- Cash to public charity (including DAF): 60% AGI limit
- Appreciated capital gain property to public charity: 30% AGI limit
- Excess can be carried forward 5 years
- Contribution deadline: Dec 31 of deduction year for cash; for stock, transfer must complete by Dec 31 (initiate by mid-December to be safe)

## DAF mechanics

A DAF is held by a sponsoring 501(c)(3) (Fidelity Charitable, Schwab Charitable, Vanguard Charitable, community foundations). The donor:
- Contributes assets to the DAF (irrevocable; gift complete at contribution)
- Recommends grants to qualified charities over time
- Has investment recommendation authority over DAF assets while held

DAF cannot:
- Provide any benefit back to donor (no quid pro quo, no payment for goods/services from grantee)
- Make grants to private foundations
- Make grants for non-charitable purposes

## When this works

- Client gives meaningful amounts ($5K+/year) consistently
- Client's other itemizable deductions don't already exceed standard deduction by a lot
- Client has appreciated stock or other long-term capital gain property to donate
- Client has multi-year cash flow to fund advance giving
- Client's tax bracket is high enough for deduction value

## When this doesn't work

- Client is below standard deduction with all bunched contributions still
- Client gives small amounts where complexity isn't worth the savings
- Client wants to give to private foundation (DAF cannot grant to private foundations)
- Client wants benefits from giving (gala tickets, sports tickets — quid pro quo limits apply)
- Client doesn't have multi-year cash to advance fund

## Implementation steps

1. Project multi-year giving plan (next 5 years of expected contributions)
2. Identify funding source: cash vs appreciated stock vs combination
3. Open DAF account at sponsoring organization (15 minutes online; minimum often $5K)
4. Transfer assets to DAF before Dec 31 of deduction year:
   - Cash: wire or check
   - Stock: stock transfer initiated through brokerage (allow 1-2 weeks)
5. Receive acknowledgment letter from DAF sponsor (confirms tax-deductibility)
6. File deduction on Form 1040 Schedule A in deduction year
7. For non-cash > $500: complete Form 8283
8. For non-cash > $5,000 (non-public stock): qualified appraisal required, Section B of Form 8283
9. In subsequent years: recommend grants from DAF to client's chosen charities at normal pace

## Common errors we inherit

- **Bunching planned but no DAF set up** — last-minute scramble in December
- **Stock donated below 1-year holding period** — only basis deductible (not FMV); short-term gain property treated less favorably
- **Form 8283 not filed for non-cash > $500** — deduction at risk
- **Appraisal not obtained for non-cash > $5,000** — deduction may be disallowed
- **Transfer not complete by Dec 31** — deduction shifts to next year
- **DAF grant made to non-qualifying organization** — not technically the donor's problem (DAF sponsor screens), but client may be confused on what's allowed
- **Quid pro quo** — donor receives benefits (gala dinner, naming rights) without offset; reduces deductible amount
- **Appreciated stock sold first then cash donated** — defeats the capital gains avoidance

## Stacking opportunities

- **QBI optimization**: Large DAF contribution in bunch year can move taxable income below §199A threshold for SSTB clients, restoring QBI deduction. Compounding benefit.
- **Roth conversion**: Large itemized deduction year is ideal for Roth conversion — the conversion increases taxable income, the contribution offsets it.
- **Business sale year**: Large income spike in sale year can absorb large charitable deduction; AGI-based limits more favorable on bunch year.
- **Capital gains harvesting**: Donate appreciated stock instead of selling; rebalance from after-tax dollars or other sources.

## Documentation skill handoff

- DAF account setup checklist (which sponsor to choose for client's situation)
- Multi-year giving plan template
- Appreciated stock identification worksheet (which lots to donate, basis tracking)
- Stock transfer instructions to brokerage and DAF sponsor
- Form 8283 preparation (for non-cash contributions)
- Annual grant recommendation tracking

## Post-OBBBA and current law impact

OBBBA 2025 substantially reshapes charitable deduction mechanics starting in 2026. Bunching strategy requires recalibration.

### OBBBA Change 1: 0.5% AGI floor on itemized charitable deductions (effective 2026)

OBBBA §70112 introduces a 0.5% of AGI floor on itemized charitable deductions. Only contributions exceeding 0.5% × AGI are deductible.

Example: AGI $600K → floor = $3,000. A $30,000 DAF contribution produces $27,000 deductible (not $30,000).

Impact on bunching calculus:
- Bunching strategy assumes the full contribution is deductible; the floor reduces the deduction by a fixed dollar amount per year
- Over two years, bunching still beats non-bunching (single year with full contribution has one floor; two years of half-contributions have two floors, one of which often loses the benefit entirely when half < standard deduction)
- Net: bunching retains most of its advantage but the dollar benefit per year is reduced

### OBBBA Change 2: 35% bracket cap on charitable deduction value (effective 2026)

OBBBA §70112 also caps the tax rate at which charitable deductions are valued. For taxpayers in 37% bracket, the deduction is valued at 35% — not the marginal 37%.

Effect: the top 2% of brackets are "squeezed." Charitable contribution worth slightly less in tax savings for top earners. Doesn't eliminate value but trims it.

For 37% bracket taxpayer: $50K charitable contribution saves $17,500 federal (at 35%), not $18,500.

### OBBBA Change 3: Non-itemizer above-the-line charitable deduction

OBBBA §70111 creates a new above-the-line deduction for non-itemizers:
- $1,000 single / $2,000 MFJ (indexed)
- Cash only (no appreciated stock)
- DAFs EXCLUDED (§170(f)(18) — DAFs do not qualify)
- Private foundations EXCLUDED

Relevance to bunching: in the off-year (when client takes standard deduction), small amounts of cash giving to public charities (direct, not via DAF) now have tax value. Doesn't replace bunching but reduces the off-year "drought."

### OBBBA Change 4: 60% AGI cash limit made permanent

The 60% AGI limit for cash contributions to public charities was made permanent under OBBBA (previously scheduled to sunset). Structurally unchanged from bunching strategy's perspective but removes sunset risk.

### OBBBA Change 5: Enhanced documentation and basis reporting requirements

No substantive change to documentation requirements, but enforcement focus shifting toward appraisals and contemporaneous acknowledgment.

### Revised bunching math (2026+)

Example 2026 MFJ couple, AGI $600K, bracket 35% (effective):
- Standard deduction: $32,200
- Annual "normal" giving: $20K/year cash
- Annual "normal" itemized: $20K giving + $10K other = $30K (below standard, so standard taken — giving wasted)

Bunching year (2026):
- Contribute $60K to DAF (3 years bunched)
- Floor: 0.5% × $600K = $3K (not deductible)
- Net itemized charitable: $57K
- Plus other itemized (SALT capped $40,400, mortgage $10K): $50K
- Total itemized: $107K > standard $32,200 → take itemized
- Federal benefit: ($107K - $32,200) × 35% = $26,180 (vs. standard deduction)

Off-years (2027, 2028):
- No DAF contribution; grants from DAF are invisible at this level
- Take standard deduction; non-itemizer above-the-line deduction = $2,000 cash to public charity (not DAF) → $700 federal benefit each year

Total over 3 years: $26,180 + $700 × 2 = $27,580

Compare to NOT bunching (annual $20K giving):
- Every year: $20K giving + $50K other itemized = $70K > $32,200 standard → take itemized
- Annual: ($70K - $32,200) × 35% = $13,230
- 3-year total: $39,690

At this income level, NOT bunching actually beats bunching because SALT + mortgage keep the couple itemized every year regardless. Bunching only wins when annual giving alone doesn't push over standard deduction.

Key insight (2026+): bunching analysis is more sensitive post-OBBBA. Run the numbers; don't assume bunching is automatically superior.

## Interaction with other strategies

### Stacks with QBI-Optimization (most important for 2026+)

Bunch year reduces taxable income (charitable deduction is itemized, reduces TI). For SSTB clients in the §199A phase-in range, bunch year can drop TI below threshold, restoring full QBI deduction.

Combined benefit in bunch year:
- Large charitable deduction directly reduces tax
- Restored QBI deduction (phased in/out based on TI) adds second layer of savings
- The "double dip" effect makes bunching more valuable for phase-in SSTB clients than standalone analysis shows

Example 2026 MFJ SSTB owner, $500K taxable income:
- $100K DAF bunch drops TI to $400K
- Lands below §199A MFJ threshold ($406K)
- Full QBI deduction restored (from ~50% phase-in factor to 100%)
- Secondary QBI benefit: $60K QBI × 35% = $21K

### Stacks with Roth-Conversion-Planning

Bunch year is also ideal for Roth conversions. The conversion increases taxable income (Roth conversion is fully taxable in year of conversion), but the large charitable deduction offsets.

Net: pay tax on Roth conversion at reduced effective rate due to charitable deduction shielding AGI. Convert traditional IRA to Roth in bunch year; take standard deduction in off-years (less room for Roth conversion without high tax).

### Stacks with S-Corp distributions (business sale year)

Business sale year creates large capital gain spike. Large charitable deduction in same year offsets a portion of the spike at favorable AGI limits (30% AGI cash to public charity; 20% for long-term appreciated stock to private foundation).

Combined with QSBS §1202 exclusion (if applicable), can reduce effective tax rate on exit to very low levels.

### Stacks with Cost-Segregation

Real estate cost seg creates bonus depreciation. Combined with REPS qualification, produces large active losses. Bunching charitable contributions in same year amplifies: large active loss + large charitable deduction = substantial AGI reduction.

### Non-interaction with HSA

HSA is separate, above-the-line. Stacks additively but not as a combined play.

## Audit posture

### Risk profile: low for straightforward DAF contributions; medium for non-cash > $5K; high for unusual assets

IRS challenge risk by contribution type:
- **LOW**: cash to DAF; cash to public charity
- **MEDIUM**: publicly-traded stock to DAF (needs Form 8283 Section A; straightforward)
- **MEDIUM-HIGH**: non-public stock, LLC interest, business interest (qualified appraisal required)
- **HIGH**: conservation easement (heightened IRS scrutiny; syndicated deals have fraud focus)
- **HIGH**: cryptocurrency (appraisal standards still developing)
- **HIGH**: unusual assets (art, wine, collectibles — appraisal required, fractional concerns)

### Audit trigger scenarios

- Large charitable deduction disproportionate to prior years
- Non-cash contribution > $5,000 without attached Form 8283 Section B (qualified appraisal)
- Contribution to DAF described as supporting a specific cause that isn't yet granted
- Appreciated stock with basis understated or holding period short (would be ordinary income property)
- Quid pro quo where donor received significant benefit (ticket to event, goods)
- Multiple-donor DAF with ambiguous attribution

### Defense considerations

- **Contemporaneous written acknowledgment** for every contribution over $250 (§170(f)(8))
- **Form 8283 Section A** for non-cash over $500 up to $5,000
- **Form 8283 Section B + qualified appraisal** for non-cash over $5,000 (except publicly-traded securities)
- **Receipts/documentation** of transfer for stock: broker confirmation, DAF sponsor acceptance
- **Holding period documentation** for appreciated property (lot selection; basis records)
- **DAF sponsor grant records** for subsequent disbursements (client maintains for advisory purposes)

### Statute of limitations

- Standard 3-year §6501 limitation
- §6501(e) 6-year limitation if understatement > 25%
- §6501(c) no statute if fraud
- §6695A preparer penalty for unsubstantiated deductions

## Deliverable points (documentation skill handoff)

When charitable bunching appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Contribute $[X] to a [DAF sponsor] Donor-Advised Fund by December 31, 2026. Fund with [appreciated stock from [account] / cash] for optimal tax efficiency. Grant to your chosen charities over 2027-2028 at normal pace."
- **Why quantification**: Federal savings = $[X] × (effective marginal rate, max 35% post-OBBBA) - (0.5% AGI floor × 1 year). For appreciated stock: add capital gains avoidance value.
- **Trade-off statement**: Cash/assets commit to charitable use (irrevocable). Off-year giving reverts to standard deduction; non-itemizer above-the-line gives small offset. DAF minimum typically $5,000-$25,000 initial contribution.
- **Action items**: Select DAF sponsor; open account (2 weeks); identify appreciated stock lots; transfer instructions to broker; complete by December 15 buffer for year-end processing.
- **Deadline**: December 31, 2026 for 2026 deduction

### In the Excel model

- **Tax Projection tab**: Itemized Deductions block — charitable contribution with floor adjustment (0.5% AGI); bracket cap adjustment (35% max post-OBBBA)
- **Scenario Comparison tab** (if bunching vs. not-bunching decision): bunch-year itemized total vs. annual itemized under non-bunching pattern; multi-year net benefit
- **Strategies tab**: row for "Charitable Bunching / DAF" with federal savings, capital gains avoidance (if appreciated stock), total
- **Actions tab**: DAF account open by Nov 15; stock selection by Dec 1; transfer initiation by Dec 15; year-end confirmation
- **Notes tab**: DAF sponsor; asset type; future grant pacing; multi-year plan

### In partner-review [REVIEW] callouts

- `[REVIEW: quantification — 2026 AGI floor impact $[X]; bracket cap at 35% applied correctly?]`
- `[REVIEW: scope — appreciated stock with long-term holding period; basis verified?]`
- `[REVIEW: framing — client giving target is $[X]/year; bunch or not? Run both scenarios]`
- `[REVIEW: authority — non-public asset contribution; qualified appraisal required?]`

### Template language

> **Contribute $60,000 to a Fidelity Charitable Giving Account before December 31, 2026**. Fund with appreciated Apple stock from your brokerage account (long-term gain of $42,000 avoided entirely). Grant to your chosen charities (St. Mary's Catholic Church, Miami Children's Museum, others) from the account over 2027-2028 at your normal giving pace.
>
> Net federal benefit: $[27,500] itemized deduction savings (after 0.5% AGI floor of $3,000 and 35% bracket cap) plus $[8,400] capital gains avoidance on the appreciated stock. Total 2026 federal benefit: $[35,900].

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA 0.5% AGI floor (2026+) | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA 35% bracket cap on charitable deductions (2026+) | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA 60% AGI cash limit permanent | Verified 2026-04 | P.L. 119-21 §70111 |
| OBBBA non-itemizer above-the-line ($1K/$2K; DAFs excluded) | Verified 2026-04 | P.L. 119-21 §70111 |
| Form 8283 threshold ($500 non-cash; $5K appraisal) | Unchanged 2026-04 | §170(f)(11) |
| §170(f)(8) contemporaneous written acknowledgment | Unchanged 2026-04 | Statutory |
| DAF mechanics (irrevocable; advisory grants) | Unchanged 2026-04 | §4966-4967 |

**Last full review**: 2026-04 (Sprint 5.5 rebuild — added OBBBA impact, Interaction detail, Audit Posture, Deliverable Points)

**Next review trigger**: 2027 indexed amounts (floor thresholds update); IRS regulations implementing 0.5% floor mechanics; any case law on DAF-specific challenges
