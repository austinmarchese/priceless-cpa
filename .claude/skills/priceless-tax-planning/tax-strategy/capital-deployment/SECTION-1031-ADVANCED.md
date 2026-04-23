---
strategy: §1031 Advanced — Reverse, Improvement, and Delaware Statutory Trust (DST) Exchanges
category: capital-deployment (Operator 8)
authority:
  - IRC §1031 (like-kind exchange of real property)
  - IRC §1031(a)(3) (45-day identification; 180-day exchange period)
  - Treas. Reg. §1.1031(a)-1 through §1.1031(k)-1 (final regulations)
  - Rev. Proc. 2000-37 (safe harbor for reverse exchanges)
  - Rev. Proc. 2002-22 (DST structure safe harbor)
  - Rev. Proc. 2004-86 (DST operational requirements)
  - Rev. Rul. 2004-86 (DST treatment)
  - Rev. Rul. 75-292 (related party rules)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — no direct §1031 amendment; bonus depreciation permanent at 100% affects analysis
  - Tax Cuts and Jobs Act of 2017 — restricted §1031 to real property only (no longer personal property)
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client has real property with built-in gain wanting to defer
  - client has replacement property goals
  - reverse exchange: client has identified replacement before selling relinquished
  - improvement exchange: client wants to use exchange proceeds to improve newly acquired property
  - DST: client wants passive real estate exposure without direct property management
earliest_actionable_quarter: Any (triggered by property transaction timing)
latest_actionable_quarter: Per 45-day / 180-day rule from relinquished property closing
typical_savings_range: deferred capital gain tax, typically $100K - $1M+ depending on gain size
typical_savings_as_pct_of_gain: up to 23.8% federal + state (tax deferred, not eliminated)
savings_formula: |
  §1031 defers capital gain tax — does NOT eliminate it (except via step-up at death).
  
  Benefit = (federal + state tax on deferred gain) × (discount rate × deferral period)
  
  Basic structure:
    Gain deferred: FMV of property exchanged - adjusted basis
    Boot: cash or non-like-kind property received — taxable
    Replacement property basis: basis of relinquished + recognized gain (boot)
  
  Reverse exchange value:
    Client who needs to acquire replacement BEFORE selling relinquished
    Parking arrangement via Exchange Accommodation Titleholder (EAT)
    180-day rule: must sell relinquished within 180 days of EAT acquisition
  
  Improvement exchange value:
    Use exchange funds to improve replacement property
    Improvements must be complete by 180 days
    Value of improvements counts as "property received" for exchange purposes
  
  DST (Delaware Statutory Trust) value:
    Beneficial interest in DST treated as direct ownership in underlying real estate (Rev. Proc. 2002-22)
    Client acquires DST interest as replacement property
    Provides passive real estate exposure without management burden
    Typical DST structure: triple-net commercial property with institutional sponsor
  
  Key insight: §1031 preserves "basis momentum" — basis of relinquished carries into replacement. Tax eventually paid on eventual sale (unless stepped up at death).
feasibility: medium-to-high (well-established structures; requires specialized intermediaries)
implementation_complexity: medium (reverse and improvement) to high (improvement with complex construction)
audit_risk: low-to-medium (standard exchanges well-established; reverse and improvement draw more scrutiny)
requires_documentation:
  - Exchange agreement with Qualified Intermediary (QI)
  - Form 8824 (taxpayer's exchange report)
  - EAT/Qualified Intermediary agreements (reverse)
  - Parking arrangement documentation (reverse)
  - Improvement contracts and completion certifications (improvement)
  - Title transfer records
  - 45-day identification documents (taxpayer-signed)
  - 180-day completion documentation
  - DST subscription and purchase documents
requires_partner_signoff: |
  Standard like-kind exchange (simple DST purchase): false (well-established)
  Reverse exchange: true (complexity, parking, Rev. Proc. 2000-37 compliance)
  Improvement exchange: true (construction risk, 180-day deadline pressure)
  DST in unusual structure: true
requires_separate_engagement: false (within Priceless engagement; QI handles exchange mechanics)
typical_separate_engagement_fee: null (Priceless); QI fees $1,500-$5,000; DST sponsor fees separate
compatible_stacks:
  - QOZ-FUNDS.md (1031 vs. QOZ analysis for real estate gain deferral; mutually exclusive for same gain)
  - COST-SEGREGATION.md (replacement property cost seg resets depreciation; valuable combination)
  - REAL-ESTATE-LTR.md / REAL-ESTATE-STR.md (exchange-funded property operations)
  - REAL-ESTATE-PROFESSIONAL-STATUS.md (REPS qualification impacts passive-activity treatment)
  - CHARITABLE-BUNCHING-DAF.md (alternative: donate instead of exchange; different objectives)
  - PRIVATE-FOUNDATION.md (alternative: contribute to foundation with private-benefit rules)
incompatible_with:
  - Personal property (TCJA removed personal property from §1031; real property only since 2018)
  - Primary residence (§121 exclusion applies instead, or specific combined strategy)
  - Property held primarily for sale (inventory; dealer property)
  - Cross-border (US-foreign not like-kind; removed pre-TCJA)
prerequisites:
  - Real property held for investment or used in trade or business
  - Replacement property also held for investment/business (not personal use)
  - 45-day identification requirements met
  - 180-day completion requirements met
  - Qualified Intermediary (QI) engaged BEFORE relinquished property closing
industries_best_fit:
  - real-estate-owner (core use case; property-to-property exchange)
  - construction (contractor/developer with held properties for rental)
  - doctors-medical (medical office building ownership; portfolio management)
  - investment-firms (direct real estate positions; passive exposure through DST)
industries_not_applicable:
  - software-ai-companies (personal property and intangibles not eligible since TCJA)
  - service businesses without real property
  - e-commerce (inventory not eligible)
state_specific_considerations: |
  Federal §1031 deferral: applies in all states
  State conformity: most states conform for income tax
  Transfer tax: state and local deed transfer/realty transfer taxes may apply to each property transfer in reverse or improvement structures (stacking costs)
  Property tax reassessment: many states reassess on ownership transfer (Proposition 13 states like California are exceptions; even there, DST interests or certain structures may trigger reassessment)
  
  California specific: §13 (Prop 19 implications), complex rules on parent-child transfers; §60(d) changes
  Florida: no state income tax; no state §1031 conformity issue
  New York: complex state rules; transfer tax implications of each step in reverse/improvement
path_b_compensation_tier: 0 (QI referrals: Priceless maintains relationships with qualified QIs; no compensation flow; client chooses)
---

# §1031 Advanced — Reverse, Improvement, and DST Exchanges

Standard §1031 exchanges (sell A, buy B with QI intermediary, within 180 days) are bread-and-butter real estate work. This file covers the advanced variants:

1. **Reverse exchanges** — acquire replacement BEFORE selling relinquished
2. **Improvement exchanges** — use exchange proceeds to improve replacement
3. **Delaware Statutory Trust (DST) exchanges** — passive replacement via DST

Each has specific mechanics, audit considerations, and practical applications for Full-Wealth real estate clients.

## The basic §1031 mechanic (foundation context)

Before advanced variants, the standard §1031:

1. Taxpayer owns real property (relinquished)
2. Property has built-in gain
3. Taxpayer wants to dispose without immediate tax
4. Identify replacement property
5. Engage Qualified Intermediary (QI) — cannot be related party
6. QI holds proceeds from sale of relinquished
7. Within 45 days of relinquished sale closing, formally identify replacement(s) — up to 3 without restriction, or more with FMV/percentage rules
8. Within 180 days of relinquished sale closing, close on replacement property
9. QI transfers proceeds to replacement seller
10. Taxpayer reports on Form 8824

Deferral achieved: gain carries as basis reduction in replacement property. Tax paid eventually on sale of replacement (or stepped up at death).

TCJA note: §1031 now applies to REAL PROPERTY ONLY since 2018. Personal property (equipment, vehicles, intangibles) no longer eligible.

## Variant 1: Reverse Exchange

### The challenge reverse exchange solves

Standard §1031 requires identifying replacement within 45 days and closing within 180 days, all AFTER relinquished property sale.

Reality: desirable replacement property may not be available at relinquished sale timing. Or client needs to secure replacement before competing buyers.

Reverse exchange: acquire replacement FIRST, sell relinquished SECOND.

### The mechanic (Rev. Proc. 2000-37 safe harbor)

1. **Exchange Accommodation Titleholder (EAT)** — typically a subsidiary of QI — acquires the replacement property
2. Taxpayer provides funds or loan for EAT to purchase
3. EAT holds title (this is the "parking")
4. Taxpayer has up to 180 days to sell relinquished property
5. Upon relinquished sale, QI transfers EAT-held replacement to taxpayer
6. Parking period formally ends; basis allocation follows §1031 rules

### The 180-day rule (hard deadline)

From EAT acquisition of replacement to completion of relinquished sale: 180 days max.

Example:
- January 15: EAT acquires replacement property ($2M)
- July 14: deadline to sell relinquished property
- If relinquished not sold by July 14: reverse exchange fails; not §1031-qualifying

### Complexity drivers

- **Financing**: who funds the EAT's purchase? Taxpayer typically provides funds (either cash or through loan backed by taxpayer's credit). Tax law doesn't treat taxpayer's funding as constructive ownership as long as Rev. Proc. 2000-37 structure followed.
- **EAT obligations**: EAT holds title; taxpayer typically has net lease or management agreement. All benefits/burdens run to taxpayer economically.
- **Holding costs**: EAT's costs of ownership (property tax, insurance, maintenance) allocated per agreement.
- **Title and transfer taxes**: two sets of transfer fees (EAT acquires, then taxpayer acquires). Budget for these.

### When reverse exchange makes sense

- Replacement property is exceptional and won't be available later
- Relinquished property is difficult to sell quickly (unique asset, specific buyer)
- Timing mismatch: good buying opportunity precedes good selling opportunity
- Client has liquidity to fund EAT temporarily
- 180-day window provides comfortable runway to sell relinquished

### Partner signoff required

Reverse exchanges are complex and Rev. Proc. 2000-37 has specific compliance requirements. Partner reviews:
- EAT structure and agreement terms
- Financing arrangements
- 180-day timeline feasibility
- Transfer tax planning
- Post-structure basis allocation plan

## Variant 2: Improvement Exchange

### The challenge improvement exchange solves

Replacement property is raw land or has lower FMV than relinquished. Client wants to use exchange proceeds (beyond purchase price) to improve replacement, preserving §1031 deferral on the full exchange value.

Pure §1031: if replacement FMV = $1.5M and relinquished sale = $2M, the $500K excess is boot (taxable).

Improvement exchange: structure the transaction so improvements made DURING the exchange period count as replacement property value.

### The mechanic (within 180-day window)

1. Identify raw land or underimproved property as replacement
2. Plan specific improvements (construction, renovation)
3. QI (or EAT in "build-to-suit" structure) takes title
4. QI holds title during improvement period
5. Improvements completed within 180 days of relinquished sale
6. Upon completion, QI transfers improved property to taxpayer
7. Taxpayer's basis includes original property + improvements; total treated as like-kind replacement

### Critical timing

180 days is absolute. Every day must be tracked:
- Day 0: relinquished property closing
- Day 45: identification of replacement + improvement scope
- Day 180: improvements must be complete AND title transferred

Typical construction realistic for 180 days:
- Light renovation / cosmetic: feasible
- Tenant improvements on existing building: typically feasible
- New construction on raw land: often NOT feasible in 180 days
- Ground-up multifamily: almost never feasible

If improvements extend past 180 days, exchange may partially fail (incomplete improvements treated as not-acquired value).

### Complexity drivers

- **Construction risk**: schedule slippage, change orders, permit delays — all threaten the 180-day deadline
- **Financing**: typically taxpayer-funded; construction loan mechanics
- **Insurance and risk during construction**: who bears loss if property damaged during build?
- **Ownership structure**: QI or EAT holds title until completion; taxpayer's relationship is indirect
- **Cost accounting**: which costs count toward improvement value? Hard costs (materials, labor) generally yes; soft costs (permits, fees) often yes; financing costs typically no

### When improvement exchange makes sense

- Replacement property is raw land or underimproved
- Specific improvements can complete in 180 days
- Client has capacity to fund construction
- Improvements add significant value, justifying deferred gain preservation

### Partner signoff required

Construction schedule feasibility is the critical gate. Partner reviews:
- Construction timeline with specific milestones
- Contractor track record on 180-day timelines
- Financing and cost certainty
- Contingency for schedule risk
- Fallback plan if improvements incomplete at Day 180

## Variant 3: Delaware Statutory Trust (DST) Exchange

### The challenge DST solves

Full-Wealth client sells appreciated investment property but doesn't want:
- Active management responsibility
- Specific replacement property decisions
- Geographic/asset-type commitment
- Single-tenant concentration risk

DST: beneficial interest in a trust that owns real estate. Passive investment qualifying as like-kind replacement.

### The mechanic (Rev. Proc. 2002-22 safe harbor)

1. Sponsor forms Delaware Statutory Trust
2. DST acquires one or more real estate assets (typically triple-net commercial, multi-family, or similar)
3. DST divides into beneficial interests
4. Taxpayer acquires beneficial interest as §1031 replacement
5. Taxpayer's interest in DST is treated as direct ownership in underlying real estate for §1031 purposes
6. DST operations: sponsor or property manager; passive from investor's standpoint

Key requirements (safe harbor):
- DST holds real property (not personal property)
- DST cannot refinance or substitute assets (static structure)
- DST must distribute cash to beneficiaries
- Beneficial interests are not securities for §1031 purposes (Rev. Proc. 2002-22)

### DST structure restrictions (the "seven deadly sins")

Rev. Proc. 2004-86 prohibits:
1. Once DST formed, no new contributions of property by trustee/beneficiaries
2. Trustee cannot renegotiate debt
3. Trustee cannot reinvest sale proceeds
4. Trustee can make only specific enumerated capital expenditures
5. Trustee may have reserves only for non-recurring items
6. Distributions must be pro-rata
7. Trustee's investment discretion limited to specific enumerated actions

These restrictions create DST's "static" nature — once formed, limited ongoing decisions.

### When DST makes sense

- Client wants passive real estate exposure (no management)
- Specific replacement property not identified or not desirable
- Diversification across multiple properties within DST
- Scale (DST purchase amounts typically $100K-$2M+ per interest)
- Client accepts sponsor risk (DST sponsor reputation + property performance)

### DST sponsor universe (partner vets)

Active DST sponsors include:
- Inland Real Estate (large scale; long track record)
- Passco (institutional quality)
- JLL Income Property Trust / JLL DST (REIT-affiliated)
- ExchangeRight (triple-net focus)
- Several dozen others — varying scale and focus

Partner maintains diligence on sponsor roster. Sponsors are evaluated annually.

### DST returns and fee structure

Typical DST:
- 5-7 year hold
- 4-6% current income distribution
- Sponsor fees: 2-4% upfront + ongoing asset management
- Exit: typically sold to institutional buyer or refinanced

Net returns after fees: 4-6% IRR range typical. Lower than leveraged direct real estate but with passive nature, diversification, and liquidity (most sponsors facilitate interim sale).

### Partner signoff

Partner verifies:
- Sponsor on vetted roster OR new sponsor fully diligenced
- Fund's property mix aligned with client risk tolerance
- Fee structure transparent and competitive
- Client's full 1031 picture (exit, basis, subsequent dispositions)

## Post-OBBBA and current law impact

### No direct §1031 amendment by OBBBA

OBBBA preserved §1031 as-is for real property. Not broadened, not restricted.

### Indirect OBBBA impacts

**Bonus depreciation 100% permanent (post-OBBBA)**: For exchange of depreciable real property, replacement property's depreciable improvements qualify for 100% bonus depreciation. Cost seg study on replacement unlocks significant year-one deduction.

Example:
- Client exchanges $3M apartment building for $4M office building
- Replacement includes $800K of cost-seg-identified 5-year property
- 100% bonus depreciation on cost-seg portion: $800K deduction in year of exchange
- Partial offset of "boot" recognized + ongoing income stream

Combined with §1031: defer gain on land + continuing real property; take 100% bonus on shorter-life components of replacement.

**§199A interaction**: Rental real estate may qualify for QBI under safe harbor. §1031 doesn't trigger new QBI entry but continuing operations may. Coordinate with `REAL-ESTATE-LTR.md`.

**SALT cap phase-down / 0.5% charitable floor**: §1031 deferral reduces current-year income → indirect AGI management. Small relative to exchange's main purpose.

**Estate at $15M permanent**: §1031 deferral means gain never realized at death (basis step-up at death). Estate exemption increase means more gain can be sheltered in estate. §1031 + step-up at death = indefinite deferral.

### TCJA interaction preserved

TCJA's restriction of §1031 to real property only (no personal property) continues. Coordinate when exchanges involve mixed real/personal property (office building + equipment).

### Post-TCJA enforcement posture

IRS has continued to scrutinize §1031 structures, particularly:
- Reverse exchanges with weak EAT structures
- Improvement exchanges with aggressive "complete" claims
- DST sponsor-level compliance with Rev. Proc. 2002-22 restrictions
- Related party transactions

## Interaction with other strategies

### Stacks with COST-SEGREGATION

Replacement property almost always benefits from cost seg study:
- Identifies 5, 7, 15-year property components
- 100% bonus depreciation on eligible components (post-OBBBA permanent)
- First-year deduction can be substantial
- Combined with §1031 deferral: maximum tax efficiency

This combination is arguably the single highest-value real estate planning stack for Priceless Full-Wealth real estate clients.

### Stacks with REAL-ESTATE-PROFESSIONAL-STATUS (REPS)

Real estate owner with REPS status:
- Cost seg losses become active losses (not passive)
- Offset ordinary income from other sources
- §1031 preserves underlying real estate; cost seg on replacement unlocks new depreciation

See `REAL-ESTATE-PROFESSIONAL-STATUS.md` for REPS qualification.

### Alternative: QOZ-FUNDS

For real estate gain, client chooses between §1031 and QOZ:
- §1031: like-kind replacement; defer gain; basis step-down
- QOZ: invest in QOF within 180 days; defer + partial forgiveness + 10-year exclusion potential

Decision factors:
| Factor | §1031 | QOZ |
|---|---|---|
| Required investment | Real property | Any QOF investment |
| Deferral mechanic | Until replacement sold | Until 2031 or QOF sale |
| Forgiveness | Basis step-up at death only | 10-15% via hold; 10-year exclusion |
| Illiquidity | Replacement property liquidity | QOF typically 10-year lock |
| Concentration | Single property (or similar) | Diversified via fund |
| Active management | Often required | Passive |

For passive-seeking client: DST or QOZ. For active real estate operator: §1031 to identified replacement.

### Stacks with CRT-CRUT (alternative structure)

Charitable Remainder Trust can receive appreciated real estate, sell tax-free (CRT is charity), invest proceeds. Compare:

- §1031: defer, continue ownership, eventual tax
- CRT: gift, sell tax-free in trust, income stream, charitable residual

Different objectives. CRT suits client with charitable intent; §1031 suits wealth-preservation focus.

### Stacks with CHARITABLE-BUNCHING-DAF

Real estate donation (to DAF or charity) as alternative:
- DAF contribution: FMV deduction (30% AGI limit for appreciated property); no gain recognized
- §1031: defer gain; continue ownership

Charitable option suits client with significant giving intent + appreciated property. Coordinate charitable vs. investment priorities.

### Coordination with PRIVATE-FOUNDATION

Private foundation can receive real estate contribution. Subject to §4944 jeopardizing investments and §4943 excess business holdings. Typically not ideal for operating real estate but possible for non-leveraged investment properties. See `PRIVATE-FOUNDATION.md`.

## Audit posture

### Risk profile: low for standard DST; medium for reverse/improvement; specific trigger areas

- **LOW** for standard DST purchase as replacement (vetted sponsor; Rev. Proc. 2002-22 compliance)
- **LOW-MEDIUM** for standard like-kind exchange (QI structure, 45/180 compliance)
- **MEDIUM** for reverse exchange (Rev. Proc. 2000-37 compliance, EAT structure, financing)
- **MEDIUM** for improvement exchange (schedule compliance, construction completion)
- **HIGH** for multi-step exchange involving related parties
- **HIGH** for pre-arranged transactions where exchange appears pretextual

### Audit trigger scenarios

- Form 8824 with complex or unusual property descriptions
- Reverse or improvement exchanges (more scrutiny than standard)
- Large gain deferral (>$1M attracts review)
- Related-party transactions (§1031(f) two-year rule)
- Primary residence conversion (§121 vs. §1031 timing)
- DST interests with sponsor-level compliance issues

### Rev. Proc. 2000-37 (reverse) compliance checklist

For IRS acceptance:
- EAT acquires property before relinquished sale
- Taxpayer and EAT enter parking agreement at outset
- Taxpayer has reasonable basis to treat EAT as beneficial owner for regulatory purposes
- Relinquished property sold within 180 days of EAT acquisition
- Replacement property identified within 45 days of relinquished sale
- Taxpayer takes title to replacement at or after relinquished sale

Missing any element: structure fails safe harbor; IRS may treat as taxable transaction.

### Defense considerations

- **QI engagement letter**: dated before relinquished property closing
- **Form 8824**: complete property descriptions, dates, and FMVs
- **Identification records**: 45-day written identifications, taxpayer-signed
- **Closing statements**: relinquished and replacement
- **EAT documentation (reverse)**: parking agreement, financing, title, property management
- **Construction records (improvement)**: contractor agreements, completion certifications, cost records
- **DST subscription documents**: Rev. Proc. 2002-22 compliant structure
- **Title insurance policies**: both properties
- **Appraisals**: not required but recommended for large transactions

### Statute of limitations

- Standard 3-year §6501 limitation on return claiming exchange
- Deferred gain: recognized in subsequent year of replacement sale; new statute starts
- §1031 doesn't extend statute

### Related-party rule (§1031(f))

If exchange involves related party (generally §267 family members, controlled entities), both taxpayer and related party must hold their respective properties for 2 years. If either disposes within 2 years, §1031 deferral recaptured.

Common failure: brother sells to taxpayer who does §1031 into brother's nephew's LLC. Related-party analysis required before proceeding.

## Deliverable points (documentation skill handoff)

When §1031 Advanced strategy appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Execute §1031 exchange of [relinquished property] for [replacement property/DST interest]. Exchange proceeds of $[X] deferred via [reverse/improvement/standard DST] structure."
- **Why quantification**: Federal + state tax deferred. For DST: add projected current income + appreciation. For improvement exchange: include cost seg benefit on improvements.
- **Trade-off statement**: Gain not eliminated — deferred until eventual sale. 45/180 day deadlines absolute. QI fees ($1,500-$5,000). For reverse: interim financing cost. For improvement: construction execution risk.
- **Action items**:
  - QI engagement (before relinquished closing)
  - Property identification within 45 days
  - Closing within 180 days
  - Form 8824 preparation
  - For DST: subscription execution
  - For reverse: EAT setup + relinquished sale push
  - For improvement: construction schedule management
- **Deadline**: Per 45-day / 180-day rules from specific closing date

### In the Excel model

- **Tax Projection tab**: Realized gain NOT included in capital gain line; deferral noted with basis allocation to replacement
- **Strategies tab**: row for "§1031 Exchange" with deferred tax (federal + state) + any cost seg / bonus depreciation benefits on replacement
- **Multi-Year Projection tab** (Full-Wealth): forward-year basis tracking; eventual sale scenarios
- **Actions tab**: QI engagement milestone; 45-day identification deadline; 180-day close deadline; cost seg study (if applicable)
- **Notes tab**: QI identity; EAT identity (reverse); DST sponsor (DST); property descriptions; basis allocation methodology

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — QI relationship is bona fide (not related party)?]`
- `[REVIEW: framing — reverse exchange structure; Rev. Proc. 2000-37 compliance?]`
- `[REVIEW: scope — improvement exchange; 180-day construction feasibility verified?]`
- `[REVIEW: quantification — basis allocation in replacement property computed correctly?]`
- `[REVIEW: authority — DST sponsor vetted? On roster?]`
- `[REVIEW: scope — cost seg on replacement? Combined with §1031 for maximum efficiency?]`

### Template language

**For DST exchange (Full-Wealth client selling appreciated commercial property)**:
> **Execute §1031 exchange of your [Miami commercial property] for beneficial interest in [DST Fund Name]**. Sale proceeds of $2,800,000 deferred via DST structure. DST acquires diversified portfolio of triple-net commercial properties; you receive 4-6% annual current income plus potential appreciation at eventual DST exit (5-7 year typical hold).
>
> Federal deferral: $570,000 of capital gains tax. State (Florida): $0. Total deferred: $570,000.
>
> Trade-off: Gain deferred, not eliminated. Illiquid beneficial interest (DST sponsor facilitates interim sale but not guaranteed). Sponsor fees integrated into fund performance.
>
> Priceless handles: QI engagement (Starker Exchange), 45-day identification filing, 180-day deadline coordination, DST subscription, Form 8824 preparation.

**For reverse exchange (client acquiring before selling)**:
> **Execute REVERSE §1031 exchange**: Your target replacement property [address] is available now; your relinquished property [address] needs 4-6 months to market. We'll use an Exchange Accommodation Titleholder (EAT) structure to acquire replacement first, then sell relinquished within 180 days.
>
> Timeline:
> - EAT acquires replacement: March 1, 2026
> - 180-day deadline to sell relinquished: August 28, 2026
> - Projected relinquished sale target: July 15, 2026 (45 days buffer)
>
> Structure costs: EAT fees $15,000; financing interest on parking period $45,000 (6 months × 6%). Tax deferral benefit: $380,000 federal + state. Net benefit: $320,000.

## Update status

| Verification | Date | Source |
|---|---|---|
| §1031 real property only (post-TCJA) | Unchanged 2026-04 | P.L. 115-97 (TCJA) |
| OBBBA non-amendment of §1031 | Verified 2026-04 | P.L. 119-21 full text review |
| 45-day identification / 180-day close | Unchanged 2026-04 | §1031(a)(3) |
| Rev. Proc. 2000-37 reverse exchange safe harbor | Continuing 2026-04 | IRS |
| Rev. Proc. 2002-22 DST safe harbor | Continuing 2026-04 | IRS |
| Rev. Proc. 2004-86 DST operational restrictions | Continuing 2026-04 | IRS |
| §1031(f) related party two-year rule | Unchanged 2026-04 | Statutory |
| OBBBA bonus depreciation 100% permanent (affects replacement property) | Verified 2026-04 | P.L. 119-21 §70110 |
| State conformity | State-by-state review; most conform | Per state |
| QI / EAT / DST sponsor roster | Rolling quarterly review | Firm internal |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Next review trigger**: New IRS guidance on §1031 mechanics (rare but watch); DST sponsor market consolidation; material changes to related-party rules
