---
strategy: Business Aircraft Ownership and Bonus Depreciation
category: capital-deployment (Operator 8)
authority:
  - IRC §168(k) (bonus depreciation — 100% permanent post-OBBBA)
  - IRC §168(g) (ADS depreciation for mixed-use aircraft)
  - IRC §179 (election to expense — rarely applicable at aircraft purchase prices)
  - IRC §280F (business use requirements — CRITICAL)
  - IRC §274 (entertainment use limitations)
  - IRC §162 (ordinary and necessary business expenses)
  - IRC §469 (passive activity — chartering as separate activity)
  - Treas. Reg. §1.280F-6 (aircraft specific rules)
  - Treas. Reg. §1.274-10 (entertainment use of aircraft)
  - FAA Part 91 (business use) vs. Part 135 (commercial / charter) rules
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — bonus depreciation 100% permanent post-1/19/2025
  - IRS FSA 201024006, FSA 201024005 (aircraft audit approach guidance)
  - Sutherland Lumber-Southwest v. Commissioner (aircraft entertainment limitation)
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client_AGI > $750000 AND client has bona fide business use case for aircraft
  - predominant business use achievable (>50% for §280F qualification; higher preferred)
  - client accepts operational cost commitment ($500K-$2M+ annually depending on aircraft size)
  - documentation discipline present
earliest_actionable_quarter: Q1 (for full-year depreciation) OR Q3-Q4 (partial year; year-end rush)
latest_actionable_quarter: Q4 (placed-in-service before December 31 for year-one bonus)
typical_savings_range: $200000 - $2000000+ (depends on aircraft value and marginal rate)
typical_savings_as_pct_of_price: 30-37% federal year-one benefit for qualified business aircraft
savings_formula: |
  Year 1 federal benefit:
    Aircraft purchase price × business use percentage × 100% bonus depreciation × marginal federal rate
  
  Example: $5M aircraft, 60% business use
    Depreciable business basis: $3M (60% × $5M)
    Year 1 bonus: $3M (100% post-OBBBA)
    Federal savings at 37%: $1,110,000
    NIIT: does not apply if active business; applies if passive treatment
    State: varies; many states conform to federal bonus
  
  CRITICAL thresholds (§280F):
    50% minimum business use required for bonus depreciation eligibility
    If business use drops below 50% in any year after year of placement:
      - Bonus depreciation recaptured
      - Must switch to ADS straight-line
      - Significant recapture tax
    
    Above 50%: qualified for bonus
    Below 50%: limited to ADS straight-line over 6 years (no bonus)
  
  §274 entertainment limitation:
    Entertainment flights (not business-related) use portion disallowed
    SIFL method or "primary purpose" method to quantify disallowance
    Sutherland Lumber-Southwest: 50% of entertainment use flight costs disallowed
  
  Ongoing:
    Operating expenses: §162 deductible in proportion to business use
    Fuel, crew, maintenance, hangar, insurance: deductible portion
    Depreciation beyond year 1: accelerated MACRS (5-year or 7-year depending on structure)
    
  Recapture on disposition:
    §1245 depreciation recapture at ordinary rates
    All depreciation claimed recaptured as ordinary income
    Significant tax if aircraft retained < 5 years and disposed
feasibility: medium-high (depends on business case quality and ongoing use)
implementation_complexity: high (ownership structure, usage tracking, §280F testing, §274 analysis)
audit_risk: high (IRS regularly audits aircraft deductions; business use documentation critical)
requires_documentation:
  - Aircraft purchase agreement and FAA registration
  - Flight log for EVERY flight (passengers, purpose, route, hours, business/personal)
  - Monthly business use percentage calculation
  - §280F annual qualified business use recalculation
  - §274 entertainment use calculation
  - Cost allocation methodology (flight costs vs. fixed)
  - Form 4562 annual depreciation
  - Form 2106 or Schedule C/E allocation depending on structure
  - Ownership structure documentation (direct, LLC, partnership)
  - Operating agreement if owned through entity
requires_partner_signoff: true (always — high-value high-risk strategy)
requires_separate_engagement: true (complex implementation; aircraft-specialist attorney and CPA often needed)
typical_separate_engagement_fee: $5,000-$15,000 annually for aircraft tax specialist; $3,000-$10,000 setup for ownership structure
compatible_stacks:
  - SECTION-1031-ADVANCED.md (older aircraft to new aircraft — NOTE: personal property like-kind no longer eligible post-TCJA; only if both treated as real property, which rare)
  - OIL-GAS-WORKING-INTERESTS.md (separate investment; coordinate overall tax strategy)
  - EQUIPMENT-LEASING-FUNDS.md (different structure; aircraft can be syndicated through fund)
  - COST-SEGREGATION.md (cost seg concepts apply to aircraft components; limited benefit beyond standard depreciation)
incompatible_with:
  - Personal-only aircraft (no business use)
  - Client without bona fide business need (audit catastrophe)
  - Service businesses without regular travel patterns (hard to justify >50% business use)
prerequisites:
  - Bona fide business travel patterns justifying aircraft
  - Cash flow for operating costs ($500K-$2M+ annually)
  - Willingness to maintain rigorous usage records
  - Acceptance of audit posture
industries_best_fit:
  - real-estate-owner (multi-property portfolio travel)
  - construction (job site visits, regional operations)
  - investment-firms (investor travel, due diligence)
  - doctors-medical (multi-location practices, specialty consulting travel) — but more commonly, physicians without multi-state practices face challenges
  - software-ai-companies (regional sales/customer travel, but less common given video)
industries_not_applicable:
  - e-commerce (inventory business; limited travel)
  - local service businesses
  - clients whose travel is <50% by any reasonable measure
state_specific_considerations: |
  State conformity to federal bonus depreciation varies
  California: does NOT conform to federal bonus; uses straight-line
  Pennsylvania: partial conformity
  Sales tax on aircraft purchase: state-dependent, often avoidable with fly-away exemptions
  Registration state choice: Delaware, Oregon, South Dakota historically used for favorable treatment
  Property tax on aircraft: varies by state; some states exempt, others heavily tax
  Use tax: can apply when aircraft used in state for extended periods
path_b_compensation_tier: 0 (aircraft brokers and attorneys often have referral relationships; Priceless does not participate — maintain neutral referrals)
---

# Business Aircraft Ownership

Business aircraft ownership sits at the intersection of large capital deployment, aggressive depreciation, and heavy audit scrutiny. Post-OBBBA, 100% bonus depreciation is permanent — making aircraft purchases more tax-efficient than during the phase-down years.

But this is NOT a tax shelter. The aircraft must have real business use, real business case, and the tax benefits must be tail-not-dog to the economic substance. Partner signoff required for every aircraft recommendation — no exceptions.

## The basic mechanic

1. Client identifies bona fide business need for aircraft (travel patterns, multi-location operations, time value)
2. Select aircraft meeting business requirements
3. Structure ownership (direct, LLC, partnership)
4. Place aircraft in service (first qualifying business flight)
5. Claim 100% bonus depreciation on business-use portion in year of placement
6. Ongoing: track every flight; maintain business use percentage above 50%
7. Operating expenses deducted in proportion to business use
8. Monitor §274 entertainment usage for disallowance calculation

## Post-OBBBA 100% bonus depreciation (the key 2025 change)

Before OBBBA, bonus depreciation phasing down:
- 2022: 100%
- 2023: 80%
- 2024: 60%
- 2025: 40%
- 2026 scheduled: 20%
- 2027 scheduled: 0%

Post-OBBBA:
- **100% bonus permanent** for property placed in service after January 19, 2025
- No phase-down
- Applies to qualified aircraft

For aircraft purchases in 2026+: year-one deduction = 100% of business use portion of purchase price.

Example: $5M aircraft, 75% business use
- Depreciable basis: $3.75M
- Year 1 bonus: $3.75M
- Federal tax at 37%: $1,387,500 saved

## The §280F qualified business use framework (CRITICAL)

§280F is the gating rule. Fail §280F = lose bonus depreciation. Every aircraft strategy hinges on this.

### The 50% threshold

Aircraft must be used MORE than 50% for qualified business use to be eligible for:
- Bonus depreciation
- Accelerated MACRS depreciation (5-year or 7-year)
- §179 expensing (rarely relevant at aircraft prices)

If qualified business use drops to 50% or below:
- §280F recapture triggers
- Bonus depreciation claimed is recaptured
- Must depreciate on ADS straight-line (6-year) going forward

### Qualified business use defined

§280F(b)(2) — qualified business use is use in trade or business of taxpayer. Specifically EXCLUDES:
- **Leasing to related parties** (5% rule; complex look-through)
- **Compensation to 5% owners** (flights for owner personal use, reported as compensation, don't count as qualified business use)
- **Commuting to primary work location**

Does INCLUDE:
- Business travel to customers, sites, meetings
- Executive transportation for active business duties
- Certain charter flights (if structured properly)

### The 25% rule within qualified business use

§280F(b)(1) requires at least 25% of total use to be qualified NON-owner business use:
- Flights for employees (not 5% owners) on company business
- Customer flights
- Charter activity

Flights purely for 5%-owner executives (who are ALSO actively engaged in business) may qualify as qualified business use but not as "non-owner" use for the 25% test.

This creates a distinction between "business use" and "qualified business use" that requires careful tracking.

### Testing methodology

Two methods, taxpayer chooses (consistency required):

**Flight hours method**: total business flight hours / total flight hours = business use %
**Flight miles method**: total business miles / total miles = business use %

Flight hours is more common and easier to track.

### Mixed-use flights

A single flight may have both business and personal purposes. Allocation methods:

**Primary purpose method**: 100% business or 100% personal based on primary reason
**Occupied seat hours method**: hours × seats × business use per seat
**Pro rata method**: time allocation within flight

Primary purpose method is simplest; occupied seat hours most defensible for mixed flights.

## The §274 entertainment limitation

Separate from §280F business use test, §274 disallows entertainment-use aircraft costs.

### The Sutherland Lumber rule

Post-2004, taxpayer-employer can provide aircraft entertainment use to employees/owners:
- Entertainment use valued at higher of SIFL (Standard Industry Fare Level) rate OR fair market charter rate
- Employee reports value as compensation on W-2
- Employer's deduction for the entertainment use flight costs limited to the compensation reported
- Essentially: no deduction beyond the taxable compensation amount

### Entertainment disallowance calculation

For flights deemed entertainment:
- Fuel, crew, landing fees, direct operating costs of the entertainment flight: disallowed to the extent they exceed amount compensation paid
- This is on top of §280F business use testing

### The family trap

Common scenario: aircraft used for vacation travel by owner + family
- Owner actively engaged in business (flights may qualify for §280F business if other purpose)
- Family member flights: purely entertainment
- §280F: owner may count; family members do not
- §274: family entertainment flights create compensation reporting requirements + deduction limitation

Complex, fact-intensive analysis. Partner + aircraft tax specialist required.

## Ownership structures

### Direct ownership (sole proprietor or individual)

Simplest. Aircraft owned directly by the individual taxpayer.
- All flights tracked at individual level
- Depreciation claimed on Schedule C or as employee business expense (limited by TCJA)
- Operating costs on Schedule C or E
- Concentration of risk on individual

### LLC ownership

Aircraft owned by single-member LLC (disregarded entity) or multi-member LLC.
- Separates aircraft risk from other assets (liability)
- Flights still tracked; allocations flow to member(s)
- Typical for closely-held business aircraft

### Partnership with active business

Aircraft owned by partnership that's part of active business group.
- K-1 allocations to partners
- Flights for partnership business qualify
- Partner flights for personal use treated as distributions or compensation

### Management company structure

Separate management LLC owns the aircraft and leases/charters to operating business.
- Can create §469 passive activity (management LLC may be passive)
- §280F rules more complex (related party rules apply)
- Requires careful structure

### Fractional ownership

Client owns fraction of aircraft through fractional program (NetJets, Flexjet, etc.):
- Simpler operationally
- Treated as acquisition of fractional interest
- 100% bonus on cost of fractional interest (if business use >50%)
- Less flexibility but less management burden

### Chartering

Client doesn't own aircraft but charters:
- No depreciation (no ownership)
- Fully deductible charter fees for business flights
- Lowest commitment; highest variable cost

Often the right answer for clients whose business justifies SOME travel but not ownership.

## When aircraft ownership makes sense

**All of these should be strongly true**:

- Client has bona fide multi-location business OR regular specialty travel
- Travel patterns suggest aircraft would be cost-justified (time value + flexibility)
- Business use can genuinely exceed 50% (ideally 75%+)
- Cash flow supports $500K-$2M+ annual operating costs
- Documentation discipline will be maintained (or delegated to specialist)
- Client accepts audit risk posture

**When it doesn't make sense**:

- Client wants aircraft for lifestyle; business case is constructed to justify purchase
- Business use will struggle to exceed 50%
- Operating costs strain cash flow
- Client won't maintain documentation
- Primary motivation is tax benefit rather than operational need

### The "tail wagging the dog" test

If the ONLY reason to buy the aircraft is the bonus depreciation, reconsider. Five years later when the tax benefit is captured but operating costs continue, the aircraft is still there.

Reasonable test: would this client buy this aircraft if bonus depreciation were 20% instead of 100%?
- Yes: real business case; proceed
- No: reconsider

## The audit reality

IRS audits aircraft deductions aggressively. FSA 201024006 and 201024005 provide the audit approach:
- Verify qualified business use percentage
- Examine flight logs and purpose documentation
- Scrutinize entertainment use and §274 calculations
- Challenge "business" flights that appear personal
- Recapture bonus if §280F test fails in subsequent years

Clean audit defense requires:
- Contemporaneous flight logs
- Clear business purpose documented for each flight
- Employees and passengers identified
- Business activity records (meetings, customers visited)
- Monthly or quarterly business use percentage calculations
- Separate tracking of entertainment/personal use

Client must accept this documentation burden. Delegating to an aircraft tax specialist is typical.

## Post-OBBBA and current law impact

### Direct OBBBA changes

**100% bonus depreciation permanent** (post-1/19/2025) — primary OBBBA aircraft impact. Removes the "use it before phase-down" pressure of earlier analyses.

### Indirect OBBBA impacts

**§199A QBI**: Aircraft ownership doesn't directly affect QBI. Operating business that owns aircraft may see QBI impact from aircraft expenses reducing business income.

**SALT cap phase-down**: Aircraft expenses flowing through Schedule C or S Corp K-1 reduce owner's AGI. May preserve full SALT cap.

**Charitable 0.5% AGI floor**: Reduced AGI may slightly preserve charitable deduction value.

### §1031 not available for aircraft

Post-TCJA, §1031 doesn't apply to personal property (including aircraft). Aircraft trade-ins now fully taxable events (gain on old aircraft, new basis in replacement).

### State bonus conformity

Post-OBBBA, federal 100% bonus. State conformity varies:
- **California**: does not conform; straight-line depreciation at state level. Major state-tax factor for CA-based aircraft owners.
- **Most states**: conform to federal. Full bonus benefit at state level.

California-based clients: state tax benefit from aircraft is materially less than federal. Factor into decision.

## Interaction with other strategies

### Stacks with COST-SEGREGATION

Cost seg study on aircraft:
- Aircraft as single asset is 5-year MACRS (or 7-year ADS if mixed-use fails)
- Components (avionics, interior, paint) not separately depreciable under typical MACRS
- Limited value from cost seg compared to real estate

Exception: ground facilities (hangar, office) for aircraft operations — cost seg on that real estate is separate strategy.

### Stacks with S-CORP-REASONABLE-COMP (when aircraft owned by S Corp)

S Corp owns aircraft; owner-operator salary must be reasonable. If owner's flights are compensation (not business use), W-2 increases accordingly:
- §280F business use reduces
- Reasonable comp increases
- Bracket management between W-2 and K-1

### Interaction with EQUIPMENT-LEASING-FUNDS

Equipment leasing funds can own aircraft and syndicate to investors:
- Investor gets §469 passive treatment
- Fund handles operational tracking
- Less benefit than direct ownership but less burden

For client with passive income absorbing capacity but no direct aircraft need: aircraft leasing fund is alternative to direct ownership.

### Coordination with OIL-GAS-WORKING-INTERESTS

Separate strategies. Aircraft: business use depreciation with §280F rules. Oil & gas: §263(c) IDC with §469 active exception. Different frameworks.

### Non-interaction with §1031

§1031 no longer applies to aircraft (post-TCJA personal property exclusion). Trade-ins are fully taxable.

## Audit posture

### Risk profile: HIGH — aircraft are among most-audited deductions

- **MEDIUM-HIGH** when documentation is pristine and business use clearly > 50%
- **HIGH** when business use is 50-60% (close to threshold)
- **CRITICAL** when business use < 75% without clear documentation
- **DEFINITELY AUDITED** when owner is top-1% taxpayer with aircraft + aggressive positions

### Audit trigger scenarios

- Large Schedule C or S Corp deduction for aircraft depreciation
- Flight logs missing, incomplete, or reconstructed
- Business use percentage near 50% threshold
- Mismatch between claimed business use and client's role (e.g., passive investor claiming high business use)
- Entertainment flights without §274 calculation
- Related-party leasing arrangements

### FSA 201024006 audit approach

IRS examiners follow specific protocol:
1. Request complete flight logs for all years under examination
2. Verify each flight's purpose and passengers
3. Recalculate qualified business use percentage
4. Test §280F applicability in each year
5. Apply §274 entertainment limitation
6. If business use < 50% in any year: apply recapture rules

### Defense considerations

- **Contemporaneous flight logs**: DAY-OF recording, not reconstructed
- **Passenger manifests**: names, purpose for each passenger
- **Business meeting records**: correlating flights to business activity
- **Monthly usage reports**: business use percentage calculated monthly
- **Annual §280F testing**: formal recalculation each year
- **§274 entertainment calculation**: SIFL rates or charter rate methodology
- **Specialist engagement**: aircraft tax specialist CPA typically engaged; provides audit support

### Statute of limitations

- Standard 3-year §6501 limitation
- §280F recapture in subsequent years: new statute at recapture year
- Significant fraud exposure if records fabricated (§6501(c) unlimited)

## Deliverable points (documentation skill handoff)

When aircraft strategy appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Purchase [aircraft type] for $[X]. Business use projected at [Y]% based on [travel pattern analysis]. Year 1 bonus depreciation = $[X × Y%]. Federal benefit at [rate]: $[Z]."
- **Why quantification**: Year 1 federal benefit + multi-year operating deduction value. Net present value over 5-7 year hold horizon accounting for recapture.
- **Trade-off statement**: Operating costs $[X]/year. §280F business use must remain >50% every year. Audit risk elevated — documentation discipline required. Aircraft tax specialist engagement recommended.
- **Action items**:
  - Aircraft selection and business case documentation
  - Ownership structure formation
  - Aircraft tax specialist engagement
  - Flight log system implementation
  - Monthly business use tracking protocol
  - Annual §280F testing workflow
- **Deadline**: Placed-in-service by December 31 for year-one bonus

### In the Excel model

- **Tax Projection tab**: Aircraft depreciation on Schedule C or K-1 block (depending on structure); business use allocation shown
- **Strategies tab**: row for "Aircraft Acquisition" with year-one benefit + annual operating deduction value + disposition recapture estimate
- **Multi-Year Projection tab** (Full-Wealth): 5-7 year aircraft ownership with annual depreciation, operating costs, recapture at disposition
- **Scenario Comparison**: aircraft ownership vs. chartering vs. no aircraft
- **Notes tab**: business use methodology; §280F monitoring; §274 entertainment documentation; ownership structure

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — business case for aircraft quantified? Real travel patterns?]`
- `[REVIEW: quantification — business use projection defensible at [X]%?]`
- `[REVIEW: framing — audit posture understood; documentation discipline established?]`
- `[REVIEW: scope — aircraft tax specialist engaged for ongoing compliance?]`
- `[REVIEW: authority — ownership structure tax-optimized (LLC vs. direct vs. partnership)?]`
- `[REVIEW: quantification — state conformity (California non-conformity for CA clients)?]`

### Template language

> **Purchase a [mid-size business jet] for $5M**. Your projected business use of 75% (based on multi-property portfolio spanning FL, TX, GA, TN) supports 100% bonus depreciation on $3.75M of basis — federal year-one deduction of $1,387,500 at your 37% marginal rate.
>
> Multi-year operating deduction value: approximately $2.2M over 5-year hold at projected 75% business use. At 5-year disposition, §1245 recapture recovers most accumulated depreciation at ordinary rates; net present value of the strategy vs. chartering: approximately $1.1M over 5 years.
>
> Trade-off: annual operating costs approximately $900K (fuel, crew, maintenance, hangar, insurance). Documentation requirement: every flight logged contemporaneously with business purpose. §280F business use must stay >50% every year — aircraft tax specialist [Firm Name] engaged for ongoing compliance at approximately $8K/year.
>
> Partner-level review required before proceeding. Tony will personally review the business case and draft of the ownership structure documents.

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA 100% bonus depreciation permanent post-1/19/2025 | Verified 2026-04 | P.L. 119-21 §70110 |
| §280F qualified business use requirements | Unchanged 2026-04 | Statutory |
| §274 entertainment limitation / Sutherland Lumber | Current 2026-04 | Case law unchanged |
| TCJA personal property §1031 restriction | Continuing 2026-04 | P.L. 115-97 |
| FSA 201024006 / 201024005 audit guidance | Still operative 2026-04 | IRS |
| Treas. Reg. §1.280F-6 / §1.274-10 | Current 2026-04 | Treasury |
| FAA Part 91 / Part 135 rules | Current 2026-04 | FAA |
| State bonus conformity (California non-conformity) | Reviewed 2026-04 | State-by-state |
| Aircraft tax specialist roster | Firm internal | Rolling |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Partner note**: Aircraft is high-value, high-risk, and high-commitment. Every recommendation requires personal partner review. No senior-staff-led aircraft strategy discussions without partner sign-off.

**Next review trigger**: OBBBA implementation regulations (bonus depreciation procedures); any new §280F or §274 guidance; Tax Court developments on aircraft cases
