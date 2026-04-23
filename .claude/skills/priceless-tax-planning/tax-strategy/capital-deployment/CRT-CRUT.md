---
strategy: Charitable Remainder Trust (CRT / CRAT / CRUT)
category: capital-deployment (Operator 8)
authority:
  - IRC §664 (charitable remainder trust rules)
  - IRC §664(d)(1) (CRAT - annuity trust requirements)
  - IRC §664(d)(2) (CRUT - unitrust requirements)
  - IRC §170 (charitable deduction on remainder interest contribution)
  - IRC §2055 / §2522 (estate and gift tax charitable deductions)
  - IRC §4941-4945 (private foundation rules applied to CRTs - self-dealing, etc.)
  - IRC §4947 (split-interest trust rules)
  - IRC §1361 (limitation on CRT ownership of S Corp stock - CRTs cannot hold S Corp stock)
  - Treas. Reg. §1.664-1 through §1.664-4
  - Rev. Proc. 2003-53 through 2003-60 (sample CRT forms)
  - Rev. Proc. 2005-52 through 2005-59 (additional sample forms)
  - Notice 2008-99 (reducing term CRT tax shelter)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — charitable deduction 0.5% AGI floor and 35% bracket cap apply to CRT remainder deduction
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client_AGI > $750000 (Capital Deployment threshold)
  - has_significant_appreciated_asset (stock, real estate, business interest)
  - has_charitable_intent (legacy giving component)
  - wants_income_stream (during life or term years)
earliest_actionable_quarter: Any; Q3-Q4 often drives for year-end funding
latest_actionable_quarter: December 31 (for year-end contribution and deduction)
typical_savings_range: $100000 - $2000000+ (depends on appreciated asset value and terms)
typical_savings_as_pct_of_trust_value: 30-50% present value of remainder + capital gains avoidance
savings_formula: |
  CRT provides multiple tax benefits:
  
  Benefit 1: CURRENT CHARITABLE DEDUCTION
    Present value of remainder interest = tax deduction in year of funding
    Calculated via IRS tables (§7520 rate at time of funding, applicable federal rate)
    Formula: FMV of trust assets × remainder interest factor (depends on term, payout rate, §7520 rate)
    
    For CRUT with 6% payout to 50-year-old donor:
      Remainder factor approximately 0.25-0.35 depending on §7520 rate
      $1M funded → $250K-$350K current deduction
      Federal savings at 35% (post-OBBBA cap): $87K-$122K
  
  Benefit 2: CAPITAL GAINS AVOIDANCE ON FUNDING
    Appreciated asset contributed to CRT; CRT sells (no tax — charity)
    CRT invests proceeds; pays income to donor
    Gain never recognized at donor level
    
    For $1M stock (basis $100K, built-in gain $900K):
      Direct sale: $900K × 23.8% = $214K capital gains tax
      CRT: $0 tax on sale inside trust
      Value: $214K tax avoidance (or deferral into income stream, depending on structure)
  
  Benefit 3: INCOME STREAM
    CRAT: fixed annuity amount annually for term
    CRUT: fixed percentage (5-50% per §664(d)(2)(A)) of trust value annually
    Income taxed to donor at tier system (ordinary, capital gain, tax-exempt based on CRT income)
    
  Benefit 4: ESTATE REMOVAL
    Trust assets out of donor's estate (after term)
    Remainder passes to charity; no estate tax on remainder
    
  Total structure value for $1M CRT:
    Current deduction: $250K-$350K → federal savings $90K-$120K
    Capital gains avoidance at funding: $214K
    Present value of income stream: varies by rate and term
    Estate tax avoidance: $400K (40% × $1M remainder) if fully in estate otherwise
    
  Compared to direct sale + reinvestment + eventual charitable gift:
    CRT is substantially more tax-efficient for donors with charitable intent
feasibility: medium (requires trust formation; trustee selection; ongoing administration)
implementation_complexity: high (legal drafting; investment management; annual trust tax returns; term management)
audit_risk: low-medium (structurally straightforward; trustee administration is the compliance front)
requires_documentation:
  - Trust agreement (drafted by estate attorney using Rev. Proc. sample forms)
  - Funding transfer documentation
  - Qualified appraisal for non-cash funding
  - §7520 rate documentation (date of funding)
  - Remainder factor calculation (actuarial)
  - Form 5227 (annual trust information return)
  - Schedule K-1 (donor/beneficiary income reporting)
  - Annual trustee accounting
  - Self-dealing policy compliance
  - §664 qualification annual review
requires_partner_signoff: true (always — coordination with estate attorney; complex)
requires_separate_engagement: true (estate attorney drafts; trustee administers; Priceless coordinates tax)
typical_separate_engagement_fee: $5,000-$25,000 for trust formation (attorney); $2,000-$10,000 annual trustee fees; $500-$2,500 annual trust tax return preparation
compatible_stacks:
  - DAF-ADVANCED.md (CRT remainder to DAF = common structure)
  - PRIVATE-FOUNDATION.md (CRT remainder to PF = alternative structure)
  - QSBS-SECTION-1202.md (contribute QSBS pre-exit; but specific rules on QSBS + CRT)
  - QOZ-FUNDS.md (alternative use of appreciated gain; different objectives)
  - SECTION-1031-ADVANCED.md (alternative: defer vs. give charitably)
  - INSTALLMENT-SALE-STRUCTURE.md (similar income stream mechanics; different tax treatment)
  - CLT.md (companion charitable structure; opposite timing of benefits)
incompatible_with:
  - S Corp stock funding (CRT cannot hold S Corp stock under §1361)
  - Encumbered real estate (debt relief issues)
  - Active business operations inside trust (UBTI - unrelated business taxable income)
  - Primary residence (§121 preferred; CRT inefficient)
prerequisites:
  - Significant appreciated asset suitable for CRT
  - Charitable intent (genuine; not manufactured)
  - Estate attorney engagement for drafting
  - Trustee selection (corporate or qualified individual)
  - Investment management strategy for CRT assets
industries_best_fit:
  - real-estate-owner (appreciated real estate funding CRT before sale)
  - software-ai-companies (pre-IPO stock; QSBS coordination)
  - investment-firms (concentrated equity positions)
  - doctors-medical (retirement planning; income stream during retirement years)
  - owners near retirement (5-10 year horizon to retirement; income stream fits transition)
industries_not_applicable:
  - S Corp-only business owners (cannot fund with S Corp stock)
  - clients without charitable intent (no tax-only justification for complexity)
state_specific_considerations: |
  State income tax on CRT distributions
  Most states treat CRT income similarly to federal (four-tier system)
  
  Key state-level variables:
  - Florida: no state income tax; CRT distributions federal only
  - California: conforms to federal four-tier; state tax on ordinary and capital gain tiers
  - New York: generally conforms; specific rules on grantor trust provisions for CRT
  - Estate tax: CRT remainder excluded from federal and most state estate taxes
  
  Trust situs may differ from donor residence; consider Delaware, South Dakota, Nevada for trust-friendly jurisdictions
path_b_compensation_tier: 0-1 (varies — if Priceless coordinates with specific trustee companies, disclosure required)
---

# Charitable Remainder Trust (CRT / CRAT / CRUT)

CRTs are split-interest trusts that provide an income stream to the donor (and/or other non-charitable beneficiaries) for a term, with the remainder passing to charity. They're a classic estate planning + charitable + tax efficiency structure for donors with appreciated assets and charitable intent.

For Priceless Full-Wealth clients, CRTs work well for:
- Pre-exit sale of appreciated business with charitable legacy intent
- Retirement income planning with tax efficiency
- Estate size reduction for clients approaching estate tax exposure
- Conversion of concentrated equity position to diversified income

## The basic mechanic

1. Donor creates irrevocable trust (legal instrument drafted by estate attorney)
2. Donor contributes appreciated asset(s) to trust
3. Trust is tax-exempt entity (charity for tax purposes)
4. Trust sells contributed asset (NO TAX — charity sells)
5. Trust invests proceeds
6. Trust pays income stream to donor (and/or other non-charitable beneficiaries)
7. Income payment structure:
   - **CRAT (Annuity Trust)**: fixed $ amount annually (must be ≥5% of initial value)
   - **CRUT (Unitrust)**: fixed % annually (must be ≥5% of current value)
8. Trust term: donor's life, term of years (≤20), or combination
9. At trust termination: remainder passes to charitable beneficiary
10. Donor receives current charitable deduction for present value of remainder

## CRAT vs. CRUT — the fundamental choice

### CRAT (Charitable Remainder Annuity Trust)

- Fixed dollar amount paid annually (e.g., $60K/year for 20 years)
- Amount set at funding; doesn't change
- No additional contributions to trust (§664(d)(1)(C))
- Inflation risk: fixed amount loses purchasing power
- Investment risk: if trust underperforms, could deplete
- Simpler to administer

**When CRAT makes sense**: Donor wants predictable fixed income; shorter term; less concerned about inflation; simplicity preferred.

### CRUT (Charitable Remainder Unitrust)

- Fixed percentage of trust value paid annually (e.g., 6% of current year's trust value)
- Amount varies as trust value changes
- Additional contributions permitted
- Inflation hedge: growing trust → growing income
- Requires annual valuation
- More flexibility

**When CRUT makes sense**: Donor wants inflation-protected income; longer term; wants flexibility to add assets; more common choice.

### Special CRUTs

**NIMCRUT (Net Income Makeup CRUT)**: payments limited to trust's net income, with catch-up when excess income available. Useful for asset types producing irregular income.

**FLIP CRUT**: starts as NIMCRUT, converts to standard CRUT upon triggering event (typically sale of non-liquid asset). Common structure for funding with real estate or business interest that must be sold before income stream begins.

## The §664 qualification requirements

For tax-exempt status, CRT must satisfy §664:

### Payout rate (§664(d)(1)(A), §664(d)(2)(A))

- Minimum 5% of initial value (CRAT) or current value (CRUT)
- Maximum 50% of initial/current value (added by §664(d)(1)(D), §664(d)(2)(D))
- Higher payout = lower remainder = smaller charitable deduction
- Lower payout = higher remainder = larger charitable deduction

### 10% minimum remainder (§664(d)(1)(D), §664(d)(2)(D))

Present value of remainder must be at least 10% of initial contribution.

This constrains CRT structure:
- Very high payout rates (40%+) may not qualify
- Very long terms for young donors may not qualify
- Actuarial calculation determines qualification

### Probability test (abolished by §664 amendments, then reinstated by Notice 2008-99)

Various provisions address whether CRT could distribute all assets before term ends. Modern structures handle this routinely.

### Permissible beneficiaries

**Non-charitable income beneficiaries**: donor, donor's spouse, other individuals; must be identifiable
**Charitable remainder beneficiaries**: §170(b)(1)(A) public charities OR private foundations OR DAFs (common modern structure)

## The four-tier income taxation system

CRT distributions to non-charitable beneficiaries classified under §664(b):

**Tier 1 — Ordinary income**:
- Distributed first
- Includes CRT's current and accumulated ordinary income
- Dividends, interest, short-term capital gains, §1245 recapture

**Tier 2 — Capital gains**:
- Long-term capital gains distributed after ordinary income exhausted
- Short-term gain treated as ordinary (Tier 1)

**Tier 3 — Other income**:
- Tax-exempt income
- Usually rare

**Tier 4 — Return of corpus**:
- Non-taxable return of trust principal
- Only after prior tiers exhausted

For planning, tier treatment matters:
- Funding with appreciated stock → built-in gain realized in trust → Tier 2 distributions to donor as capital gains over term
- Funding with interest-bearing assets → Tier 1 ordinary income to donor
- Structured correctly, CRT can deliver favorable tier mix

## The current charitable deduction

### Calculation

Present value of remainder = FMV × remainder factor

Remainder factor depends on:
- CRT type (CRAT or CRUT)
- Payout rate
- Term (years or life expectancy)
- §7520 rate (monthly published IRS rate; January 2026 approximately 5.0%)

### IRS tables

For CRUT:
- Single life age 55, 6% payout, §7520 rate 5%: remainder factor ~0.30
- Single life age 65, 5% payout, §7520 rate 5%: remainder factor ~0.45
- 20-year term, 6% payout, §7520 rate 5%: remainder factor ~0.45

### Deduction value example

Client age 60 funds $1M CRUT, 5% payout, joint life with spouse (age 58), §7520 rate 5%:
- Remainder factor approximately 0.35
- Remainder interest: $350K
- Current charitable deduction: $350K
- Federal savings at 35% (post-OBBBA cap): $122,500
- State savings varies

### 30% AGI limit

Deduction for appreciated property to public charity (most CRT remainders): 30% of AGI. Excess carries forward 5 years.

For $750K AGI client: $225K deductible year 1; remainder forward. With $350K remainder value, first-year deduction $225K; $125K forward.

## Post-OBBBA and current law impact

### Direct OBBBA changes affecting CRT

**0.5% AGI floor (2026+)**: Applies to charitable deductions including CRT remainder deduction. For $750K AGI client: $3,750 floor. Reduces deduction but preserves most value.

**35% bracket cap (2026+)**: Charitable deduction valued at max 35%, not 37%. Two percentage points of reduced value.

**60% AGI cash limit permanent**: Doesn't directly affect CRT (30% limit for appreciated property applies).

### Planning considerations

CRT remains highly tax-efficient but slightly less so post-OBBBA:
- $1M CRT with $350K remainder:
- Pre-OBBBA at 37%: $129,500 federal
- Post-OBBBA at 35% + 0.5% floor: $121,275 federal (approximately $8K less)

Still a major tax benefit; trade-off worth noting in client communication.

### Indirect OBBBA impacts

**Estate exemption $15M permanent**: Large estate exemption reduces urgency for CRT's estate-reduction benefit for clients below $15M. For estates $15M-$30M+, CRT + remainder to foundation/DAF remains highly valuable.

**SALT cap / AGI management**: CRT funding may involve large deduction year affecting AGI. Pair with other high-deduction strategies.

## Interaction with other strategies

### Stacks with DAF-ADVANCED (most common modern structure)

CRT remainder beneficiary designation: DAF

Flow:
1. Donor funds CRT
2. Current charitable deduction = present value of remainder
3. Income stream to donor for life/term
4. At termination, remainder to DAF
5. Family continues advising DAF grants after donor's death

Benefits:
- Flexibility (donor chooses final charities over time via DAF)
- Multi-generational (successor advisors at DAF)
- Administrative simplicity (DAF sponsor handles ongoing)
- Charitable legacy preserved

This is the predominant modern CRT structure. Covered in `DAF-ADVANCED.md` Section 7.

### Stacks with PRIVATE-FOUNDATION (alternative)

CRT remainder beneficiary: private foundation (donor's or family's)

Benefits:
- Direct family control post-termination
- Signature philanthropy identity
- Board/officer structure

Trade-offs:
- Higher ongoing compliance
- Requires scale to justify foundation

When PF > DAF for CRT remainder:
- Large estate (>$15M)
- Specific philanthropic identity
- Multi-generational family governance intended
- Sufficient scale (>$2M remainder)

### Stacks with QSBS-SECTION-1202

Pre-exit QSBS contribution to CRT is complex:
- QSBS character does NOT transfer to CRT
- Gain realized in CRT: no §1202 exclusion (CRT is exempt anyway)
- $1202 gifting rules preserve QSBS to family if contributed (§1202(h))
- CRT contribution = appreciation donated to charity, not family

Decision point: CRT vs. gifting to family vs. straight sale with QSBS exclusion.

Generally: if donor wants income + charitable intent → CRT with QSBS
If donor wants family wealth transfer with QSBS → family gifts, not CRT

### Stacks with QOZ-FUNDS (alternative)

Both defer/eliminate capital gains tax but different mechanisms:
- CRT: irrevocable charitable commitment; income stream
- QOZ: retained ownership; 10-year exclusion on appreciation

Decision:
- Charitable intent → CRT
- Wealth preservation → QOZ
- Different tools for different objectives

### Stacks with SECTION-1031-ADVANCED (alternative)

Real estate with built-in gain:
- §1031: continue real estate ownership
- CRT: convert to income stream + charitable legacy

Different futures for the donor. Coordinate with client goals.

### Stacks with INSTALLMENT-SALE-STRUCTURE

Both provide income streams, different treatments:
- Installment sale: gain realized over time; interest portion
- CRT: tiered distribution; capital gains at trust level not donor
- CRT more tax-efficient but requires irrevocability

### Non-compatibility with S Corp stock

§1361(b)(1)(B) limits S Corp shareholders to specific types. CRTs are NOT permitted S Corp shareholders. Contributing S Corp stock to CRT terminates S election.

Workaround: convert S Corp to C Corp (or LLC) before contribution. Complex; rarely ideal.

For S Corp owners: CRT is NOT the right structure. Consider CRT with non-S-Corp assets, or alternative strategies.

### Non-compatibility with encumbered real estate

Debt-financed real estate in CRT creates UBTI (unrelated business taxable income) issues. CRT as exempt entity taxed on UBTI at corporate rates. Defeats the purpose.

Workaround: pay off debt before contribution; contribute unencumbered property.

## Audit posture

### Risk profile: low when properly structured and administered; medium for non-standard structures

- **LOW** when trust drafted from Rev. Proc. 2003-53 sample forms; straightforward asset contribution; bona fide charitable intent
- **LOW-MEDIUM** when non-cash funding with qualified appraisal
- **MEDIUM** for unusual structures (non-sample form CRTs)
- **HIGH** for pre-arranged sale doctrine scenarios (contribute to CRT shortly before sale of specific asset to pre-identified buyer)

### Audit trigger scenarios

- Large charitable deduction on Schedule A
- Pre-sale CRT funding with subsequent sale to known buyer
- Non-qualifying CRT (fails §664 requirements)
- Self-dealing between donor and CRT
- UBTI generation from debt-financed assets or active business income

### Defense considerations

- **Trust agreement**: drafted by qualified estate attorney using Rev. Proc. sample forms or equivalent-quality custom drafting
- **Funding documentation**: contributions properly titled in trust name
- **Qualified appraisal** for non-cash > $5K
- **Form 5227**: annual filing by trustee
- **K-1**: annual distribution reporting
- **§664 annual review**: ongoing qualification
- **Self-dealing log**: trustee documents absence of prohibited transactions

### Statute of limitations

- Current-year charitable deduction: standard 3-year §6501 limitation
- Trust-level issues: 3-year on Form 5227 filings
- Self-dealing penalties: §4941 assessments per occurrence

## Deliverable points (documentation skill handoff)

When CRT appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Establish a Charitable Remainder [Unitrust / Annuity Trust] to receive [specific asset]. Terms: [term], [payout rate], [remainder beneficiary]. Current charitable deduction approximately $[X]. Capital gains avoidance at funding: $[Y]."
- **Why quantification**: Current deduction × rate (post-OBBBA 35% max) + capital gains avoided at 23.8% + present value of income stream + estate tax avoidance at remainder.
- **Trade-off statement**: Irrevocable (cannot retract). Requires estate attorney (formation cost ~$10-25K). Requires trustee (institutional or qualified individual). Annual compliance (Form 5227). Income stream set by terms; no change post-funding.
- **Action items**:
  - Estate attorney engagement and drafting
  - Trustee selection
  - Asset transfer mechanics
  - Investment strategy for CRT assets
  - Coordination with estate planning documents
- **Deadline**: Depends on asset being contributed; often tied to pre-sale timing

### In the Excel model

- **Tax Projection tab**: Current charitable deduction (Schedule A); capital gains avoided (removed from Schedule D)
- **Multi-Year Projection tab**: Annual CRT distribution to donor with tier classification (ordinary, capital gain, etc.); ongoing tax impact
- **Strategies tab**: row for "CRT" with current deduction + gain avoidance + present value of income + estate tax benefit
- **Scenario Comparison**: CRT vs. direct sale + charitable bunching + retained investment
- **Notes tab**: Trust type (CRAT/CRUT); term; payout rate; remainder beneficiary; trustee; estate attorney

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — trust drafted by qualified estate attorney? Rev. Proc. forms referenced?]`
- `[REVIEW: framing — pre-sale funding with known buyer; pre-arranged sale doctrine risk?]`
- `[REVIEW: scope — S Corp stock excluded? CRT cannot hold S Corp stock]`
- `[REVIEW: quantification — §7520 rate and remainder factor current; 10% minimum remainder test satisfied?]`
- `[REVIEW: authority — four-tier income system implications for client income picture?]`
- `[REVIEW: scope — remainder beneficiary designated (DAF, PF, specific charity)?]`

### Template language

> **Establish a Charitable Remainder Unitrust (CRUT) funded with $2,000,000 of appreciated Apple stock (basis $200K)**. Terms: joint life with spouse (ages 58/56), 5% unitrust payout rate, remainder to Fidelity Charitable Giving Account with successor advisors designated (children).
>
> **Current charitable deduction: approximately $620,000** (remainder factor 0.31 based on §7520 rate 5.0% at funding). Federal savings at 35% (post-OBBBA cap): $217,000 (partially limited by 30% AGI carry-forward).
>
> **Capital gains avoided at funding: $428,400** (23.8% federal LTCG+NIIT on $1.8M gain).
>
> **Estimated income stream**: 5% of trust value annually, varying with trust performance. Years 1-5 expected distributions: $100K/year if trust achieves 5-7% total return. Tax treatment per four-tier system: primarily Tier 2 capital gains initially (favorable).
>
> **Estate benefit**: Trust assets removed from estate at end of term. Estate tax avoided on remainder: $248K (at 40% estate rate; subject to exemption).
>
> Trade-off: Irrevocable commitment. Formation cost $15K (estate attorney). Annual administration $3K (trustee, tax preparation). Priceless coordinates with [Estate Attorney Firm Name].

## Update status

| Verification | Date | Source |
|---|---|---|
| §664 qualification rules | Unchanged 2026-04 | Statutory |
| §664(b) four-tier distribution | Unchanged 2026-04 | Statutory |
| §1361 S Corp stock exclusion from CRT ownership | Unchanged 2026-04 | Statutory |
| §7520 rate (monthly) | Published monthly | IRS |
| 10% minimum remainder test | Unchanged 2026-04 | §664(d)(1)(D), (d)(2)(D) |
| OBBBA 0.5% AGI floor affecting CRT deduction | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA 35% bracket cap affecting CRT deduction | Verified 2026-04 | P.L. 119-21 §70112 |
| 30% AGI limit for appreciated property to public charity | Unchanged 2026-04 | §170(b)(1)(C) |
| Rev. Proc. 2003-53 through 2005-59 sample forms | Operative 2026-04 | IRS |
| Estate exemption $15M permanent | Verified 2026-04 | P.L. 119-21 |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Next review trigger**: IRS updates to Rev. Proc. sample forms; any §664 amendments; state conformity to OBBBA changes
