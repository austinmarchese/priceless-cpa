---
strategy: Equipment Leasing Fund Investment
category: capital-deployment (Operator 8)
authority:
  - IRC §179 (election to expense certain depreciable property)
  - IRC §168(k) (bonus depreciation — 100% permanent post-OBBBA)
  - IRC §167 (depreciation generally)
  - IRC §469 (passive activity limitations)
  - IRC §469(c)(6) (equipment leasing as passive activity — specifically)
  - IRC §465 (at-risk rules)
  - IRC §163(j) (business interest limitation)
  - Treas. Reg. §1.469-1(e)(3) (rental activity definition)
  - Rev. Rul. 70-47 (equipment leasing as trade or business)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — bonus depreciation 100% permanent for property placed in service after 1/19/2025; §179 limits increased to $2.5M/$4M
  - IRS Rev. Proc. 2025-32 (2026 §179 indexed amounts)
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client_AGI > $750000 (Capital Deployment threshold)
  - client has ordinary business income needing shelter (not just capital gain)
  - client tolerates 7-10 year hold typical for equipment leasing funds
  - passive activity context understood (losses offset only passive income)
earliest_actionable_quarter: Any (fund availability is timing factor)
latest_actionable_quarter: Q4 (for year-end placed-in-service benefit)
typical_savings_range: $50000 - $300000 (depending on investment size and marginal rate)
typical_savings_as_pct_of_investment: 25-35% federal year-one benefit for 100% bonus-eligible equipment
savings_formula: |
  Year 1 primary benefit:
    Invested capital × (percentage deductible in year 1 via bonus depreciation)
      × client's marginal rate (fed + state + NIIT where applicable)
  
  Post-OBBBA math (property placed in service after January 19, 2025):
    100% bonus depreciation permanent
    Equipment typically 5-year MACRS property: 100% expensing year 1
  
  Example: $500K equipment leasing fund investment, 100% bonus eligible
    Year 1 deduction: $500K
    Federal savings at 37% marginal: $185K
    NIIT applicability: 3.8% on net investment income (passive)
    State savings: varies by state
  
  Passive activity framework (CRITICAL):
    §469(c)(6): equipment leasing is PASSIVE activity regardless of participation
    Passive losses offset ONLY passive income (not wages, portfolio, or active business)
    Suspended losses carry forward indefinitely
    Released at final disposition of investor's entire interest
  
  Planning: coordinate equipment leasing losses with passive income sources
    - Net rental real estate income (without REPS)
    - Other equipment leasing income
    - Passive K-1 distributions from other partnerships
  
  Recapture risk: §1245 ordinary income recapture on disposition of depreciated property
    - Equipment: full recapture of accumulated depreciation as ordinary income
    - Fund disposition of assets triggers recapture
    - Typical fund timeline: sell remaining equipment at end of fund life; investor gets residual distribution
feasibility: medium (requires qualified fund; passive-activity-income coordination needed for benefit)
implementation_complexity: medium (fund subscription; annual K-1; multi-year compliance)
audit_risk: medium (equipment leasing funds have been subject to IRS scrutiny; quality sponsors have clean track records)
requires_documentation:
  - Fund subscription agreement
  - Private Placement Memorandum (PPM) review
  - Annual K-1 from fund partnership
  - Form 8582 (passive activity loss tracking)
  - Form 8283 if contributed property (uncommon for cash investments)
  - Sponsor's annual compliance reporting
  - Basis tracking (investor's adjusted basis in fund interest)
requires_partner_signoff: false (well-established strategy; partner involvement for fund selection via roster)
requires_separate_engagement: false (within Priceless core engagement)
typical_separate_engagement_fee: null (Priceless); fund-level fees: typically 1-2% annual + 15-25% carried interest
compatible_stacks:
  - QOZ-FUNDS.md (different investment vehicle; capital gain → QOZ, business income → equipment leasing for shelter)
  - COST-SEGREGATION.md (both use bonus depreciation mechanics; real estate vs. equipment)
  - REAL-ESTATE-LTR.md (rental income can absorb equipment leasing passive losses)
  - AIRCRAFT.md (aircraft is specialized form of equipment leasing for active business use)
  - OIL-GAS-WORKING-INTERESTS.md (both capital deployment; different depreciation schedules and §469 treatment)
  - SOLO-401K-SEP-COMPARISON.md (coordinate retirement + equipment leasing for max AGI reduction)
incompatible_with:
  - clients with only W-2 income (no passive income to absorb losses)
  - clients with NO other passive activities (equipment leasing losses suspend indefinitely)
  - clients needing immediate liquidity (funds typically 5-10 year hold)
prerequisites:
  - Passive income source(s) to absorb equipment leasing losses
  - Capital $250K-$1M+ for practical fund minimums
  - Tolerance for illiquidity
  - Fund sponsor vetted by Priceless
industries_best_fit:
  - real-estate-owner (net rental income absorbs equipment leasing losses)
  - investment-firms (portfolio diversification + shelter)
  - doctors-medical (supplemental income from medical practice real estate or investments)
  - construction (active construction income is NOT absorbed; passive income outside business needed)
industries_not_applicable:
  - W-2-only clients (no passive income to absorb losses)
  - software-ai-companies (unless owner has separate passive investments)
  - service-businesses without passive sidecar activities
state_specific_considerations: |
  Most states conform to federal depreciation including bonus and §179
  California: does NOT conform to federal bonus depreciation; California computes depreciation on straight-line
  Pennsylvania: partial conformity; complex
  State-specific passive activity rules may also differ
  
  For California residents: equipment leasing fund year-one benefit is primarily federal; state follows straight-line
path_b_compensation_tier: 0 (fund sponsor selection neutral; Priceless does not take compensation from sponsors)
---

# Equipment Leasing Fund Investment

Equipment leasing funds pool investor capital to acquire depreciable equipment that's leased to third-party operators. Post-OBBBA, bonus depreciation is 100% permanent, making these funds highly tax-efficient in year one — but the §469 passive activity framework is the defining constraint.

This is a Capital Deployment strategy, not a retail investment. For clients with passive income streams to absorb the losses, equipment leasing funds produce meaningful year-one tax savings while building a diversified equipment portfolio.

## The basic mechanic

1. Investor commits capital to equipment leasing fund partnership
2. Fund uses capital (plus typically 30-50% debt leverage) to acquire equipment
3. Equipment leased to creditworthy operators (airlines, rail, trucking, industrial, medical, technology)
4. Lease income flows to fund; depreciation shelters the income
5. First year: 100% bonus depreciation on eligible property creates large deduction
6. Subsequent years: lease income, reduced depreciation, eventually equipment sold
7. Investor receives K-1 annually; claims deductions subject to §469 passive activity rules
8. Fund dissolves at end of life (typically 7-10 years); remaining equipment sold, proceeds distributed

## Post-OBBBA bonus depreciation impact (the 2025 game-changer)

Before OBBBA, bonus depreciation was phasing down:
- 2022: 100%
- 2023: 80%
- 2024: 60%
- 2025: 40% (before OBBBA)
- 2026 scheduled: 20%
- 2027 scheduled: 0%

Post-OBBBA:
- **Bonus depreciation made 100% permanent** for property placed in service AFTER January 19, 2025
- Phase-down schedule eliminated
- No sunset

This is the largest OBBBA change affecting equipment leasing strategy. Investments made in 2026+ get 100% bonus on 5- and 7-year MACRS property — the majority of leased equipment qualifies.

For §179 (covered separately below):
- 2025 limit: $1.25M with $3.13M phase-out
- 2026 limit: $2.5M with $4M phase-out (OBBBA increased both amounts dramatically)

§179 and bonus can combine: §179 used first up to income limits; remainder eligible for bonus.

## The passive activity framework (§469) — MUST UNDERSTAND

§469(c)(6) specifically categorizes equipment leasing as passive activity — regardless of investor participation level. This has critical implications:

### What this means

Losses from equipment leasing fund flow to investor as PASSIVE LOSSES. Passive losses offset ONLY passive income.

**Passive income sources** (can absorb equipment leasing losses):
- Net rental real estate income (without REPS qualification)
- Limited partner interests in other passive activities
- Passive royalties (certain oil & gas with careful structuring)
- Other equipment leasing fund income
- Certain trust or estate distributions

**NOT passive income** (cannot absorb equipment leasing losses):
- W-2 wages
- Active business income (S Corp, sole prop)
- Portfolio income (interest, dividends, capital gains from stocks)
- Active rental where owner materially participates
- Real Estate Professional (REPS) rental income — becomes active for qualified REPS

### The coordination problem

Many Priceless Full-Wealth clients are active business operators without significant passive income. They SHOULDN'T invest in equipment leasing funds — losses suspend indefinitely without benefit.

Clients who DO benefit:
- Real estate investors with net rental income (not REPS-qualified)
- Clients with multiple passive activities creating net passive income
- Clients planning large passive activity wind-downs (releases suspended losses)

Partner assessment before recommending: what's this client's expected passive income over the fund's life? Is there enough to absorb projected losses?

### Suspended losses

Passive losses that exceed passive income in any year carry forward:
- No time limit (unlike capital losses)
- Released at final disposition of investor's entire interest in the activity
- Release means the suspended losses become usable against ALL income (including active and portfolio)

For equipment leasing, final disposition = investor sells fund interest OR fund dissolves and distributes remaining proceeds.

### Planning implications

1. Time equipment leasing investment to coincide with passive income years
2. Consider a "release year" strategy — plan for eventual disposition to release suspended losses into an otherwise-high-income year
3. Coordinate with other passive activities — don't over-invest in equipment leasing if it creates large suspended losses

## When equipment leasing fund makes sense

**All of these should be true**:

- Client has meaningful passive income (current and projected)
- Client tolerates 5-10 year hold
- Client has $250K+ allocatable (fund minimums and overhead scale unfavorably below)
- Client's overall tax posture benefits from deferring ordinary income (ordinary → capital on equipment disposition after §1245 recapture)
- Quality fund sponsor available with investment thesis aligned

**When it doesn't**:

- Client is primarily active-business with no passive income
- Client needs liquidity
- Client is in California and doesn't get state bonus benefit (reduces federal gain materially)
- Fund sponsor is unvetted or has sketchy track record

## Equipment types and MACRS classification

Fund investments span categories:

**5-year MACRS**:
- Rail cars, locomotives
- Trucks (over-the-road)
- Computer equipment, software (§197 different treatment for certain software)
- Manufacturing equipment
- Medical imaging, diagnostic equipment

**7-year MACRS**:
- Office furniture and equipment
- Certain specialty manufacturing
- Agricultural equipment
- Musical instruments

**10-year or 15-year**:
- Land improvements
- Aircraft (20 year long-life exceptions apply)

**Longer life**:
- Aircraft (generally 7-year ADS or different lives based on qualifications)
- Some specialty equipment

For 100% bonus depreciation (post-OBBBA), 5 and 7-year MACRS property qualifies. Longer-life property may get partial bonus or require cost analysis.

## Fund structures

### Single-asset funds

Fund owns one major asset (e.g., one aircraft, one large ship). Investor gets concentrated exposure.
- Higher return potential
- Higher concentration risk
- Simpler analysis

### Diversified portfolio funds

Fund owns multiple assets across types and operators.
- Diversification reduces concentration risk
- Returns tend to moderate (no home-run upside)
- More complex K-1 reporting

### Fund-of-funds

Fund invests in multiple lease funds across sectors. Extra fee layer but maximum diversification.

### Structure notes

- Most funds structured as limited partnerships (LP) or LLC taxed as partnership
- Partnership K-1 to investors annually
- Some structures use hybrid REIT/partnership for enhanced investor tax efficiency
- Accredited investor requirement typical

## Fund sponsor universe (partner roster management)

Active equipment leasing fund sponsors (verify current status):
- AerCap (aircraft) — institutional, highly rated
- Carlisle Companies Leasing
- ATEL Capital Equipment Associates
- ICON Capital Leasing Funds (diversified)
- Macquarie Infrastructure Partners (rail, shipping)
- Various private equity-backed platforms

Partner roster criteria:
- Multi-fund track record (not first-timers)
- Credit quality of lessees (creditworthy operators)
- Fee structure competitiveness (1-2% annual + reasonable carried interest)
- Reporting quality and timeliness
- §469(c)(6) compliance knowledge
- Investor relations responsiveness

Initial recommendation: avoid new sponsors without Priceless history. Use established sponsors with multi-fund track records.

## §179 vs. bonus depreciation decision

**§179 advantages**:
- Full expensing in year of placement (no calculation complexity)
- 2026 limit $2.5M with phase-out beginning $4M
- Business income limitation (deduction can't create loss)

**Bonus depreciation advantages**:
- No income limitation (can create loss for NOL use)
- No phase-out
- Permanent at 100% post-OBBBA

**For equipment leasing funds**: bonus depreciation is typically preferred because:
- §179 limited by investor's business income (fund-level income, not investor-level)
- Bonus has no such limit; creates the full loss regardless of income

Fund-level decision: sponsor elects on behalf of fund. Investor's K-1 reflects result.

## Deprecation recapture risk (§1245)

Critical to understand: at eventual sale of equipment, §1245 requires ordinary income recapture of prior depreciation.

Example:
- Year 1: $500K equipment, 100% bonus; basis zero
- Year 5: equipment sold for $150K (residual value)
- §1245 recapture: $150K recaptured as ordinary income (not capital gain)
- Capital gain: $0 ($150K - $0 basis, minus $150K recapture)

Impact: deferred tax, not eliminated. Paid at ordinary rates on recapture.

Fund life timing affects recapture:
- Year 5-7 sale: moderate recapture
- Year 10 sale after full depreciation: most or all proceeds recaptured as ordinary

Coordination: for investors in high ordinary brackets, recapture is recovered at 37% rate. Original deduction saved at 37%. Net deferral value = time value, not bracket arbitrage.

## Interaction with other strategies

### Stacks with REAL-ESTATE-LTR

Real estate owner with substantial rental income (not REPS):
- Rental income: passive
- Equipment leasing losses: passive
- Stack: leasing losses offset rental income

Example client: 4 rental properties netting $120K/year passive income
- Invest $400K equipment leasing fund; year 1 bonus loss $400K
- $120K absorbs against rental income → zero tax on rental that year
- $280K suspends forward
- Following years: rental continues absorbing as available

Over 5-7 year horizon, most losses absorbed; remaining suspended, released at fund dissolution.

### Non-interaction with REPS-qualified owner

REPS taxpayer's rental income becomes ACTIVE (not passive). Equipment leasing losses (still passive under §469(c)(6)) cannot offset active rental income.

For REPS-qualified investor considering equipment leasing: look for separate passive income source, or accept that losses will suspend.

### Stacks with QOZ-FUNDS

Capital gain → QOZ fund (capital gains deferral)
Ordinary/passive income → Equipment leasing (ordinary income shelter)

Different investment profiles for different tax circumstances. Client with both capital gains and passive income can use both.

### Stacks with COST-SEGREGATION

Both use bonus depreciation mechanics:
- Cost seg on real estate: carves out short-life components for 100% bonus
- Equipment leasing: naturally 5-7 year property with 100% bonus

Combined real estate cost seg + equipment leasing fund + passive income management = comprehensive passive loss generation strategy.

### Interaction with AIRCRAFT

Aircraft ownership (see `AIRCRAFT.md`) is specialized equipment leasing when structured for business use. §280F business use rules apply. Different treatment from fund-based equipment leasing where investor has no direct operational connection.

Combined possibility: direct aircraft ownership (Schedule C or S Corp) + equipment leasing fund (passive) = different tax treatment for each.

### Interaction with OIL-GAS-WORKING-INTERESTS

Oil & gas working interests have §469(c)(3) ACTIVE exception (working interest not passive even without material participation). Equipment leasing has §469(c)(6) PASSIVE categorization.

For investor needing ACTIVE losses: oil & gas working interests
For investor with PASSIVE income to shelter: equipment leasing funds

Different tools for different situations.

## Audit posture

### Risk profile: low-to-medium when quality fund and straightforward structure

- **LOW** when investor in established fund (multi-year track record), 100% bonus on straightforward 5-7 year MACRS property
- **LOW-MEDIUM** when §469 passive activity allocations correctly reported
- **MEDIUM** when creative structures or related-party involvement
- **HIGH** when fund sponsor has compliance issues or structure pushes §469(c)(6) boundaries

### Audit trigger scenarios

- Large K-1 loss disproportionate to investor's other passive income
- Form 8582 passive loss allocation errors
- Related-party transactions involving fund or leased property
- Sponsor-level compliance issues (§1245 recapture errors, §179 over-claims)
- Cost segregation-like reclassifications on leasing fund property

### Defense considerations

- **Fund K-1s**: retain all years
- **Form 8582**: annual passive loss / passive income tracking
- **Subscription documents**: establish bona fide investment
- **Fund PPM and annual report**: establish fund operation
- **Basis schedule**: investor's adjusted basis in fund interest
- **Suspended loss tracking**: carryforward schedules
- **Disposition documentation**: at fund dissolution

### Statute of limitations

- Standard 3-year §6501 limitation on the investor's return
- Fund-level adjustments can flow through via TEFRA / BBA partnership rules
- §1245 recapture on disposition: new statute at recapture year

## Deliverable points (documentation skill handoff)

When equipment leasing fund appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Invest $[X] in [Fund Name]. Year-one bonus depreciation expected at $[Y] (100% post-OBBBA on eligible equipment). Passive loss generated; coordinate with your [passive income source] for absorption."
- **Why quantification**: Year 1 federal savings = $Y × marginal rate × absorption percentage. Multi-year projection showing loss absorption against available passive income.
- **Trade-off statement**: Passive loss only absorbs passive income. Fund illiquid (5-10 year hold). §1245 recapture at disposition. Sponsor fees (1-2% annual + carried interest).
- **Action items**: 
  - Fund selection (vetted roster)
  - Investment amount aligned with passive income capacity
  - Subscription execution (typically 30-60 day process for accredited investors)
  - Passive income projection for absorption
  - Annual K-1 integration
- **Deadline**: Typically year-end for year-one bonus benefit

### In the Excel model

- **Tax Projection tab**: Passive loss from equipment leasing as Schedule E entry; Form 8582 allocation; available passive income absorbing loss; suspended loss forward
- **Multi-Year Projection tab** (Full-Wealth): fund life span showing annual K-1 estimates, passive absorption, suspended carryover
- **Strategies tab**: row for "Equipment Leasing Fund" with year-one benefit + multi-year deferral value + recapture cost at disposition
- **Scenario Comparison**: investment vs. no investment; passive income utilization scenarios
- **Notes tab**: Fund sponsor; investment size; absorption projection methodology; §469 compliance

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — fund sponsor on roster?]`
- `[REVIEW: quantification — passive income projection for absorption; enough income?]`
- `[REVIEW: scope — client's active vs. passive income mix verified?]`
- `[REVIEW: framing — §1245 recapture at disposition explained to client?]`
- `[REVIEW: authority — state conformity (California bonus non-conformity) addressed?]`

### Template language

> **Invest $500,000 in [Fund Name] before December 31, 2026**. Your rental portfolio generates $125K/year of passive income — this fund's first-year bonus depreciation of $500K (100% post-OBBBA on 5/7-year MACRS equipment) will offset your rental income plus create $375K of suspended passive losses carrying forward.
>
> Federal benefit year 1: $125K absorbed × 37% marginal = $46,250 saved
> Multi-year deferral value (5-year horizon): additional $125K absorbed each year as rental continues; approximately $185K additional federal savings over 4 years
> Total projected benefit: approximately $231K federal savings over 5 years
>
> Trade-offs: Fund illiquid through 2032-2033 typical dissolution. §1245 recapture at fund disposition — recapture as ordinary income at that time. Florida state: no adjustment (federal deduction only; no state bonus benefit nor issue).

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA bonus depreciation 100% permanent post-1/19/2025 | Verified 2026-04 | P.L. 119-21 §70110 |
| OBBBA §179 limits: $2.5M / $4M phase-out (2026) | Verified 2026-04 | P.L. 119-21 |
| §469(c)(6) equipment leasing as passive activity | Unchanged 2026-04 | Statutory |
| §1245 ordinary income recapture | Unchanged 2026-04 | Statutory |
| 5 / 7-year MACRS property classification | Unchanged 2026-04 | Rev. Proc. 87-56 |
| Equipment leasing fund sponsor roster | Rolling quarterly | Firm internal |
| State conformity (especially California non-conformity) | Ongoing state-by-state | Per state |

**Last full review**: 2026-04 (Sprint 7 initial build)

**Next review trigger**: OBBBA implementation regulations; material changes to §469 framework; sponsor roster updates
