---
strategy: Oil & Gas Working Interests
category: capital-deployment (Operator 8)
authority:
  - IRC §263(c) (intangible drilling costs - IDC election to expense)
  - IRC §469(c)(3) (working interest ACTIVE exception to passive activity)
  - IRC §611-613A (depletion - cost and percentage)
  - IRC §613A (percentage depletion - independent producer / small royalty owner)
  - IRC §57(a)(2) (AMT preference for IDC - small producer exception §57(a)(2)(E))
  - IRC §291 (corporate IDC limitation)
  - Treas. Reg. §1.612-4 (IDC election)
  - Treas. Reg. §1.613A-1 through §1.613A-7 (percentage depletion rules)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — no direct O&G amendment; bonus depreciation on tangibles affected
  - IRC §168 (depreciation of tangible equipment)
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client_AGI > $750000 (Capital Deployment threshold)
  - client has ordinary income (active or passive) seeking shelter
  - client tolerates commodity price risk
  - client understands working interest vs. royalty distinction
earliest_actionable_quarter: Q1-Q3 (drilling timing drives; Q4 rush common for year-end IDC)
latest_actionable_quarter: Q4 (drilling must commence for year-one IDC)
typical_savings_range: $75000 - $500000 (depending on investment size and marginal rate)
typical_savings_as_pct_of_investment: 60-75% year-one deduction on IDC-heavy programs
savings_formula: |
  Year 1 federal benefit (IDC-focused investment):
    Investment × IDC percentage of total project cost × 100% election year 1 × marginal rate
  
  Typical IDC percentage: 65-85% of total well cost (drilling labor, fluids, casing, etc.)
  Tangible equipment: 15-35% (depreciable via MACRS with bonus)
  
  Example: $500K working interest investment
    Assume 75% IDC / 25% tangible equipment
    IDC $375K: 100% year-one deduction via §263(c) election
    Tangible $125K: 100% bonus depreciation (post-OBBBA) if 5-7 year MACRS
    Combined year 1 deduction: $500K = full investment recovered via deductions
    Federal savings at 37%: $185K
  
  Ongoing years (production phase):
    Revenue from well production
    Percentage depletion (§613A): 15% of gross income from property, subject to 65% of taxable income limit
    OR cost depletion (basis recovery) — use whichever yields higher deduction
    Operating expenses deductible
  
  §469(c)(3) ACTIVE exception:
    Working interest in oil/gas is ACTIVE for passive activity purposes
    No material participation required
    Losses offset active AND passive income (not just passive)
    This is what distinguishes working interest from most other alternative investments
  
  Recapture considerations:
    IDC claimed → ordinary income recapture on disposition (§1254)
    Tangible equipment → §1245 recapture
    Working interest sold: full recapture of prior deductions at ordinary rates
feasibility: medium (requires qualified program; due diligence on operator essential)
implementation_complexity: medium (annual K-1; depletion computation; AMT check)
audit_risk: medium (IDC and percentage depletion receive IRS attention; quality operators have clean tracks)
requires_documentation:
  - Subscription agreement / working interest purchase documents
  - Drilling program PPM
  - Annual K-1 from program partnership
  - IDC allocation schedule (taxpayer vs. tangible)
  - Depletion calculation worksheet (annual)
  - Production records (for depletion)
  - §469(c)(3) active classification documentation
  - AMT preference item tracking (§57(a)(2))
requires_partner_signoff: true (Capital Deployment; factually dependent active exception)
requires_separate_engagement: false (within Priceless core engagement)
typical_separate_engagement_fee: null (Priceless); operator program fees: typically 5-15% sponsor markup + ongoing management
compatible_stacks:
  - EQUIPMENT-LEASING-FUNDS.md (both use bonus depreciation; different §469 treatment)
  - COST-SEGREGATION.md (conceptually similar bonus depreciation mechanics)
  - CHARITABLE-BUNCHING-DAF.md (both can generate large current-year deductions; pair in high-income years)
  - SOLO-401K-SEP-COMPARISON.md (stack all pre-tax deductions for maximum AGI reduction)
  - ROTH-CONVERSION-PLANNING.md (use O&G losses to offset Roth conversion income in same year)
incompatible_with:
  - C corporations (§291 reduces IDC benefit for C corps; usually only LLCs/partnerships/individuals)
  - clients with volatility intolerance (oil prices swing 30%+ annually historically)
  - clients needing predictable cash flow (production varies widely; income irregular)
prerequisites:
  - Ordinary income at high marginal rate needing shelter
  - $100K+ typical minimum for credible participation
  - Tolerance for commodity risk and operator risk
  - Understanding of working interest vs. royalty distinction
industries_best_fit:
  - real-estate-owner (passive + active income mix)
  - doctors-medical (high ordinary income; few active business deductions)
  - software-ai-companies (high ordinary income; concentrated risk profile)
  - investment-firms (portfolio diversification)
industries_not_applicable:
  - construction owners already concentrated in one risky industry
  - retirees on fixed income (volatility exposure concerns)
state_specific_considerations: |
  State conformity with federal IDC and depletion varies
  Most states conform to federal IDC election
  State percentage depletion rules vary
  Severance taxes by state (Texas, Oklahoma, Louisiana, North Dakota major producers)
  Income tax on oil/gas income: state-by-state
  
  For Texas operations: no state income tax — production income federal-only
  For California operations: state conforms to federal IDC; state income tax applies
path_b_compensation_tier: 0 (Priceless does not accept compensation from O&G operators; maintain neutral referrals)
---

# Oil & Gas Working Interests

Oil & gas working interest investment is one of the few legitimate tax strategies that produces ACTIVE losses regardless of material participation. This distinction — the §469(c)(3) active exception — is what makes working interests valuable compared to most alternative investments where losses are restricted to passive offset.

For Full-Wealth clients with high ordinary income seeking current-year shelter, working interest investments can produce 60-75% year-one deductions via IDC election combined with 100% bonus depreciation on tangibles (post-OBBBA).

## The basic mechanic

1. Client acquires working interest in drilling program (LLC, LP, or direct fractional interest)
2. Program drills wells during taxable year
3. IDC (Intangible Drilling Costs) — labor, fluids, fuel, survey work, etc. — approximately 65-85% of total well cost
4. Client elects to expense IDC via §263(c) election in year 1
5. Tangible equipment (wellhead, pumping equipment, pipe) — approximately 15-35% of cost — depreciated via MACRS with 100% bonus
6. Year 1: full deduction of most or all investment
7. Production years: revenue with depletion allowance (cost or percentage)
8. Eventually well depletes; economic life 10-20 years typical

## Working interest vs. royalty — the critical distinction

**Working interest**: ownership of the right to explore, develop, and produce oil/gas from a leased tract. The working interest owner bears the cost of development AND receives production revenue. Has §469(c)(3) active exception.

**Royalty interest**: right to a share of production WITHOUT any obligation to bear costs. Treated as passive unless the owner materially participates (rare for royalty holders).

For Capital Deployment strategy, we typically engage with working interests — they generate the deductions; royalty interests just generate income.

## The §469(c)(3) active exception — the key tax feature

### What it says

§469(c)(3)(A): "A working interest in any oil or gas property which the taxpayer holds directly or through an entity which does not limit the liability of the taxpayer with respect to such interest... shall not be treated as a passive activity."

Translation: working interests held directly or through general partnerships / LLCs that don't limit liability are ACTIVE regardless of whether the taxpayer materially participates.

### Why this matters

Most Capital Deployment strategies produce passive losses:
- Equipment leasing: §469(c)(6) categorically passive
- Real estate: passive unless REPS qualified
- Most LP interests: passive

Passive losses only offset passive income. But working interest losses offset ACTIVE income including:
- W-2 wages
- S Corp / partnership K-1 (trade or business)
- Self-employment income
- Dividend / interest income (in some interpretations; portfolio income — check)

### The liability constraint

§469(c)(3)(B) limits the exception: works only if the entity does NOT limit the taxpayer's liability.

- **Qualifies as active**: direct ownership; general partnership; LLC taxed as partnership with unlimited liability feature
- **Does NOT qualify**: limited partnership interest; LLC with limited liability protection

This creates a tradeoff: legal liability protection for client loses the §469 active exception.

Typical structure: Client holds working interest through joint venture structure preserving §469(c)(3) status; operator indemnifies for most operational risks; client's theoretical unlimited liability is contractually managed.

Partner review required for structure — getting this wrong = losing the active exception.

## Intangible Drilling Costs (IDC) — §263(c)

### What qualifies as IDC

Per §1.263-4 and common practice:
- Drilling labor
- Drilling fluids and chemicals
- Fuel and power used in drilling
- Survey and mapping costs
- Geological and geophysical costs (G&G — separate rules under §167(h))
- Casing and cementing (the wellbore itself, distinguished from surface equipment)
- Rig rental
- Well logging and testing

### What does NOT qualify (tangible equipment)

- Tubing and production equipment above the wellhead
- Tanks, flowlines, pumping units
- Meters and gathering systems
- Surface roadways and facilities

Allocation typically 65-85% IDC, 15-35% tangible. Operator's cost breakdown provides the specific allocation.

### The §263(c) election

Taxpayer elects to either:
- **Expense** IDC in year incurred (current deduction) — typical Capital Deployment approach
- **Capitalize** IDC and amortize over 60 months

Election made at entity level (partnership files it); individual investor flows through.

### AMT preference

§57(a)(2): IDC is an AMT preference item — HISTORICALLY.

§57(a)(2)(E) small producer exception: for independent producers (not integrated oil companies), IDC preference reduced and often eliminated. Most working interest investors qualify.

Modern practical AMT treatment: AMT was substantially reduced by TCJA; for most individuals, AMT doesn't bite. Post-OBBBA AMT exemption at $90,100 single / $140,200 MFJ for 2026.

For most Priceless Full-Wealth clients: IDC AMT preference is negligible in practice. But always run AMT check in the projection.

## Depletion — §611 and §613A

### Two types

**Cost depletion** (§611):
- Recovery of basis as property produces
- Basis × (production units this year / estimated remaining recoverable units)
- Deduction limited to remaining basis

**Percentage depletion** (§613A):
- 15% of gross income from property
- Limited to 65% of taxable income (without depletion itself)
- Continues beyond basis recovery (can exceed basis)

Taxpayer uses whichever method produces LARGER deduction in each year.

### Percentage depletion availability (§613A)

Not available to:
- Integrated oil companies
- Retailers
- Refiners of >50,000 bbl/day

Available to:
- Independent producers
- Small royalty owners
- Typical Capital Deployment working interest investors

### Percentage depletion value

Unique feature: percentage depletion can exceed basis. Produces deductions after investment fully recovered.

Example: $500K investment, $350K recovered via IDC + depreciation in year 1
- Remaining basis: $150K
- Year 2-3: additional depreciation recovers remainder
- Year 4+: percentage depletion continues at 15% of production revenue
- Effectively: indefinite deduction stream based on production

For multi-year productive wells: depletion value over life can add materially to investment's total tax benefit.

## Post-OBBBA and current law impact

### No direct OBBBA amendment

OBBBA did not amend §263(c), §613A, §469(c)(3), or §57(a)(2). Oil & gas working interest framework continues as before.

### Indirect OBBBA impacts

**100% bonus depreciation permanent**: Tangible equipment portion (15-35% of typical investment) now gets 100% bonus post-1/19/2025. Combined with IDC election, most or all of investment recovers in year 1.

**§199A QBI**: Working interest K-1 may include trade-or-business income that qualifies for QBI. Sponsor K-1 should specify. Adds small additional benefit when applicable.

**Charitable 0.5% AGI floor / 35% bracket cap**: Year-one deduction reduces AGI, indirectly preserving charitable deduction value.

### AMT (still relevant but less impactful post-TCJA/OBBBA)

Higher AMT exemption ($140,200 MFJ 2026) means most Full-Wealth clients won't hit AMT even with IDC preference. Still required to compute but rarely binding.

### Planning horizon effect

Oil & gas has cyclical boom/bust on commodity prices. Post-OBBBA stable tax framework doesn't change this. Clients need risk tolerance beyond tax consideration.

## Drilling program structures

### Private drilling partnerships

Sponsor drills and operates; investors are limited partners or LLC members:
- Sponsor markup on drilling costs (5-15% typical)
- Management fees for ongoing operations
- Revenue split between sponsor and investors (varies; 80/20 to 50/50 common at production)
- Typical minimum investment $50K-$250K

**If LP interest**: may lose §469(c)(3) active status (liability-limited)
**If LLC with specific structure**: may preserve active status with proper drafting

### Direct working interest

Client acquires direct fractional working interest in specific well/lease:
- No fund structure
- Client listed on lease records
- Mineral owner relationship
- Best for §469(c)(3) active treatment

Complexity: requires operator capability and direct relationship.

### Joint ventures (JV)

Multiple investors + operator form JV for specific project:
- Structure can preserve §469(c)(3) through proper drafting
- Shared drilling cost and revenue
- More operational transparency than private partnership
- Typical for larger investment amounts ($500K+)

### Public oil & gas partnerships

Typically do NOT qualify for §469(c)(3) active treatment (limited partner protection).

Generally not ideal for Capital Deployment purposes. Used for income-focused investors, not shelter strategies.

## Operator (sponsor) due diligence

### Level 1 (minimum)

- Multi-year track record (not first-timer)
- Operator of similar programs
- Realistic drilling cost estimates (avoid operators with highly optimistic cost structures)
- Reasonable sponsor markup (5-15%; above 15% requires scrutiny)
- Fair revenue split at production
- Reasonable exit / termination provisions

### Level 2 (larger investments $250K+)

- Reference calls with prior investors
- Review of prior program K-1s and actual vs. projected returns
- Geological / geophysical data review (if client has advisor capable)
- Operator's financial viability

### Level 3 (first-time operator or unusual structure)

- Outside counsel review of program documents
- Independent reserve evaluation
- Partner personal meetings with operator principals

Priceless maintains operator roster with diligence notes. Common operators used by similar CPA firms provide reference benchmarks.

## Red flags in program structure

- Sponsor markup > 15% on drilling costs
- "Turnkey" drilling promises (fixed cost regardless of actual) — price inflation concern
- Unrealistic production projections (compare to similar-geology wells in area)
- Limited reserve disclosure
- Unusual tax opinions or aggressive IDC allocation percentages
- Syndicated structure with "100% deductible in year 1" marketing — sometimes legitimate, sometimes not
- Operator's own production record unavailable

## When oil & gas working interest makes sense

**All should be true**:

- Client has high ordinary income needing shelter
- Client understands commodity price volatility
- Client has capacity for $100K-$500K+ investment
- Client tolerates 10-15 year economic life with potential variable returns
- Vetted operator available
- Structure preserves §469(c)(3) active treatment

**When it doesn't**:

- Client needs stable income (not oil & gas)
- Client already concentrated in energy or commodities
- Client in California with complex state conformity issues
- Client temperament can't tolerate commodity volatility
- Operator is unvetted or has shaky track record

## Interaction with other strategies

### Stacks with EQUIPMENT-LEASING-FUNDS

Different §469 treatment:
- Oil & gas working interest: ACTIVE (§469(c)(3))
- Equipment leasing: PASSIVE (§469(c)(6))

For client with active income needing shelter: oil & gas
For client with passive income needing shelter: equipment leasing

Both can coexist for multi-income-source client.

### Stacks with AIRCRAFT

Different tax treatment and business purpose but both produce year-one deductions. Can coexist if client has both aircraft business case and oil & gas investment capacity.

### Stacks with CHARITABLE-BUNCHING-DAF

Year of large O&G deduction + charitable bunching:
- O&G deduction shelters active income
- Charitable bunching shelters additional income via DAF
- Combined: significantly reduces taxable income in single year

Effective for sale-year or bonus-year clients.

### Stacks with ROTH-CONVERSION-PLANNING

Large O&G deduction in Roth conversion year:
- Conversion increases ordinary income
- O&G IDC deduction offsets
- Net effective rate on conversion lower than otherwise

Pair both in same year for efficient bracket utilization.

### Stacks with SOLO-401K-SEP-COMPARISON

All pre-tax deductions stack:
- Solo 401(k) maxed
- Oil & gas IDC election
- HSA
- §162(l) health
- Combined multi-strategy AGI reduction

### Coordination with PRIVATE-FOUNDATION

Working interest contribution to private foundation: complex. §4944 jeopardizing investment concerns. Typically not recommended — keep working interest as investor; foundation funded with other assets.

## Audit posture

### Risk profile: medium-high (O&G investments have historical IRS attention)

- **LOW** when program is well-established, IDC allocation reasonable, §469(c)(3) structure clear, depletion calculation documented
- **MEDIUM** when IDC allocation aggressive (>85% of cost claimed as IDC)
- **HIGH** when structure marginal on §469(c)(3) active exception
- **HIGH** when percentage depletion claimed without proper qualification analysis

### Audit trigger scenarios

- Large IDC deduction disproportionate to tangible allocation
- §469(c)(3) active classification on LP-structured interest (liability limit issue)
- Percentage depletion claimed by non-qualifying investor
- AMT preference tracking incomplete
- Recapture mishandled on disposition

### Defense considerations

- **Operator K-1s**: annual reporting establishes bona fide investment
- **PPM and subscription documents**: demonstrate investment structure
- **IDC allocation support**: operator's accounting; industry standards
- **Depletion computation**: annual worksheet with production data
- **§469(c)(3) analysis**: structure memo supporting active classification
- **Production records**: revenue, operating expenses, depletable reserves
- **Liability structure documentation**: confirming §469(c)(3) qualification

### Statute of limitations

- Standard 3-year §6501 limitation
- §6501(e) 6-year if understatement > 25%
- §1254 recapture on disposition: new statute at disposition year

## Deliverable points (documentation skill handoff)

When oil & gas working interest appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Invest $[X] in [Program Name] working interest. Year-one deduction projected at $[Y] ([Z]% of investment) via §263(c) IDC election and bonus depreciation on tangible equipment. Active classification preserves offset against your ordinary income."
- **Why quantification**: Year 1 deduction × marginal rate = federal savings. Multi-year projection including depletion allowance and ongoing production income.
- **Trade-off statement**: Commodity price risk. 10-15 year economic life. Operator risk (vetted via roster). Disposition recapture at ordinary rates.
- **Action items**: 
  - Program selection (vetted operator)
  - Subscription execution
  - Annual K-1 integration
  - §469(c)(3) structure verification
  - AMT projection
- **Deadline**: Drilling must commence by December 31 for year-one IDC

### In the Excel model

- **Tax Projection tab**: IDC deduction via Schedule E (partnership K-1) or Schedule C (direct); tangible depreciation separate; depletion ongoing
- **Multi-Year Projection tab** (Full-Wealth): year-one heavy deduction, production phase income, depletion benefits, ultimate disposition recapture
- **Strategies tab**: row for "Oil & Gas Working Interest" with year-one benefit + multi-year deferral
- **Scenario Comparison**: invest vs. no invest; commodity price scenarios
- **Notes tab**: operator; IDC allocation percentage; §469(c)(3) structure memo reference; depletion methodology

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — §469(c)(3) active exception preserved via structure?]`
- `[REVIEW: scope — operator on vetted roster?]`
- `[REVIEW: quantification — IDC percentage allocation supported? Industry standard?]`
- `[REVIEW: framing — commodity risk explained to client?]`
- `[REVIEW: authority — AMT preference item tracked; small producer exception verified?]`

### Template language

> **Invest $500,000 in [Program Name] oil & gas working interest**. Year-one deduction of approximately $437,500 projected (87.5% of investment) through §263(c) IDC election on drilling costs plus 100% bonus depreciation on tangible equipment.
>
> Federal year-one benefit at your 37% marginal rate: $162,000 saved. The §469(c)(3) active exception preserves this as offset against your active income (S Corp K-1, W-2) — not limited to passive activities like most alternative investments.
>
> Multi-year value: percentage depletion during production phase provides ongoing deductions beyond basis recovery. Realistic commodity price scenarios produce 50-90% of capital recovery over 10-15 year well life, net of tax benefits.
>
> Trade-off: commodity price volatility materially affects returns. Program operator [Name] has 12-year track record on Priceless roster. Structure preserves active classification via [joint venture / LLC structure specifics]. §1254 disposition recapture treats recovered IDC as ordinary income at eventual sale.

## Update status

| Verification | Date | Source |
|---|---|---|
| §263(c) IDC election | Unchanged 2026-04 | Statutory |
| §469(c)(3) working interest active exception | Unchanged 2026-04 | Statutory |
| §613A percentage depletion | Unchanged 2026-04 | Statutory |
| §57(a)(2)(E) small producer AMT exception | Unchanged 2026-04 | Statutory |
| §1254 disposition recapture | Unchanged 2026-04 | Statutory |
| OBBBA 100% bonus depreciation on tangibles | Verified 2026-04 | P.L. 119-21 §70110 |
| OBBBA non-amendment of O&G provisions | Verified 2026-04 | P.L. 119-21 full text |
| 2026 AMT exemption ($140,200 MFJ) | Verified 2026-04 | IRS Rev. Proc. 2025-32 |
| Operator roster | Rolling quarterly | Firm internal |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Next review trigger**: Any O&G-specific legislative amendments (rare); operator roster updates; state severance tax changes affecting net returns
