---
strategy: Short-Term Rental (STR) Material Participation
category: secondary
authority:
  - IRC §469 - passive activity losses
  - Treas. Reg. §1.469-1T(e)(3)(ii)(A) - 7-day average stay exception
  - Treas. Reg. §1.469-5T - material participation tests
  - Multiple Tax Court cases (Hakkak v. Comm'r, Eger v. Comm'r) - STR material participation
applies_when:
  - owns_short_term_rental: true
  - average_stay_duration <= 7 days: true (or 30 days with substantial services)
  - owner_personally_manages: true (or willing to do so with material participation)
  - has_non_passive_income_to_offset: true (W-2, active business)
earliest_actionable_quarter: Q1 (planning for material participation hours in current year)
latest_actionable_quarter: Q4 (documenting hours before year-end)
typical_savings_range: $5000 - $100000+ (depends on depreciation, cost seg, and owner's bracket)
typical_savings_as_pct_of_income: varies — often zeros out STR income tax, sometimes offsets other income
savings_formula: |
  STR rental loss × owner's marginal rate = tax savings
  Combined with cost segregation: multi-hundred-thousand year-1 deductions possible
  
  Example: $800K STR acquired 2026, cost seg identifies $200K reclassifiable:
    Year 1 bonus depreciation: $200K
    Operating P&L: $50K net positive cash flow but $150K tax loss
    If non-passive (7-day + material participation): $150K offsets W-2 income
    At 37% marginal rate: $55,500 federal tax savings
feasibility: high (mechanical)
implementation_complexity: medium (documentation-heavy)
audit_risk: medium-high (IRS focus area; documentation critical)
requires_documentation:
  - Average stay calculation (total stays / total rental days)
  - Material participation log (hours by activity)
  - Contemporaneous time tracking
  - Booking records (Airbnb, VRBO, Booking.com, direct)
  - Management activity logs (cleanings coordinated, maintenance performed, guest communication)
requires_partner_signoff: false for routine; true if aggregating multiple properties
requires_separate_engagement: no
typical_separate_engagement_fee: null
compatible_stacks:
  - Cost-Segregation (combining multiplies the benefit)
  - Real-Estate-Owner industry playbook
  - Hiring-Children (legitimate STR roles)
  - Spousal-Employment (spouse manages)
incompatible_with:
  - Passive investor without management (need material participation)
  - Average stay > 7 days (becomes per se passive)
prerequisites:
  - Property rented on short-term basis
  - Owner or spouse available to do management
industries_best_fit:
  - Real Estate Owner (STR portion of portfolio)
  - High-income W-2 earners using STR for tax sheltering
  - Spouses of high-income earners qualifying for material participation
state_specific_considerations: |
  Many states (CA, NY, HI) and localities have STR regulations
  Hotel taxes, transient occupancy taxes, short-term rental licenses
  HOA and zoning restrictions
  Some areas have banned or restricted STRs (always verify locally)
path_b_compensation_tier: 0
---

# Short-Term Rental (STR) Material Participation

The §469 STR loophole allows owners of properties with ≤7-day average stays to treat rental losses as non-passive, offsetting W-2 or other active income — IF material participation test met.

## The basic mechanic

§469 generally classifies rental real estate as per se passive (losses suspend). BUT two exceptions exist:

1. **Real estate professional status (REPS)** — 750 hours + 50% of personal services in real property trades/businesses
2. **Short-term rental exception** — Treas. Reg. §1.469-1T(e)(3)(ii)(A): rentals where average stay ≤7 days are NOT rental activities for §469 purposes. Treated as regular business activity. Material participation test applies.

**Result for STR with ≤7-day average stay AND material participation**: Losses are non-passive. Can offset W-2 income, active business income, anything.

## The average stay test

**Calculation**: Average stay = total days rented / number of stays (rentals).

**Example**: Property rented 30 stays totaling 150 days. Average = 5 days. Qualifies.

**Another example**: Property rented 15 stays totaling 180 days. Average = 12 days. Does NOT qualify under 7-day test.

**30-day + substantial services variant**: Average stay ≤30 days + owner provides substantial services (hotel-like) can also qualify as non-rental. Rare in practice.

## The material participation test (§1.469-5T)

Seven tests — meet ANY ONE:

1. **500+ hours**: Material participation if 500+ hours in the activity during the year
2. **Substantially all hours**: Participation constitutes substantially all of participation in the activity by any individual
3. **100+ hours and more than anyone else**: 100+ hours AND more than any other individual
4. **Significant participation aggregate**: Activity is significant participation (>100 hours) AND aggregate significant participation across activities exceeds 500 hours
5. **Material participation in 5 of 10 prior years**
6. **Personal service activity material participation in 3 prior years**
7. **Facts and circumstances**: Regular, continuous, substantial basis

**Typical STR owner**: Tests 1 (500 hours) or 3 (100 hours + more than anyone else) most relevant.

**Test 3 strategy**: If owner personally handles bookings, guest communication, cleaning coordination, minor maintenance — often exceeds 100 hours AND is more than any other individual (no single cleaner or handyman exceeds owner's hours).

## Documentation requirements

IRS regularly challenges material participation. Required:

1. **Contemporaneous time log** — written record of time, date, activity type
2. **Activity documentation**:
   - Email records (guest communication)
   - Booking platform activity (Airbnb/VRBO/Booking logs)
   - Invoices/receipts for purchases and maintenance
   - Photos of completed work (before/after)
   - Scheduled tasks (pre-arrival, turnover, post-departure)

3. **Average stay calculation** — clear record of all stays and durations

**Common reason IRS wins**: No contemporaneous log, reconstruction after-the-fact.

## Strategies for achieving material participation

### Active owner operation

Most straightforward: owner personally handles:
- Listing management and photography
- Guest communication (pre-booking, pre-arrival, during stay, post-stay)
- Cleaning coordination (scheduling cleaners, verifying quality)
- Maintenance coordination (repairs, service scheduling)
- Supply inventory and restocking
- Marketing (photos, listing optimization, pricing)

For a single property, 100-300 hours easily achievable with active operation.

### Spouse as material participant (common pattern)

High-income W-2 spouse can't be REPS (job takes too much time). Non-working or lower-income spouse does STR management, achieves material participation. MFJ treatment: non-passive losses apply against BOTH spouses' income.

### Multiple properties: aggregation

§469(c)(7) grouping election can aggregate STRs (or any activities) for material participation test. One common election: group all STRs as single activity.

Requires:
- Same owner (>50% direct/indirect)
- Same tax year
- Two of three: same trade/business, operations, customers

## Post-OBBBA amplifiers

### 100% bonus depreciation permanent

Property placed in service after Jan 19, 2025: 100% bonus depreciation permanent.

Combined with cost seg on STR, first-year deductions supersized.

### §163(j) EBITDA restoration

Leveraged STRs: interest deductibility restored to EBITDA basis.

## The combined math

**STR + cost seg + 100% bonus + non-passive treatment** is one of the most aggressive legal tax strategies:

Example: $1M STR property acquired 2026:
- Cost seg study identifies $300K as 5/7/15-year
- Year 1 bonus depreciation on reclassified: $300K
- Remaining 27.5-year basis: $700K, depreciated over 27.5 years = ~$25K/year
- Operating expenses, interest, standard depreciation: additional deductions
- Year 1 tax loss likely: $350K-$450K

If MFJ at 37% bracket: $130K-$170K federal tax savings in year 1.

State benefit additionally. Often offsets client's entire W-2 year-1 tax if high earner.

**This is why STR + cost seg is a household strategy among high-income earners**.

## Common errors and audit risks

- **Average stay not tracked** (or reconstructed)
- **Time log not contemporaneous** (most common IRS challenge)
- **Claiming material participation without enough hours**
- **Treating as non-passive when average stay > 7 days**
- **Using "other participant" that exceeds owner's hours** (breaks Test 3)
- **Cost seg bonus claimed but no material participation documentation**
- **Passive loss carryforward not tracked** if material participation failed

## State and local considerations

- STR regulations vary widely
- Short-term rental licenses (many cities)
- Hotel / transient occupancy taxes (city/county level)
- HOA restrictions
- Mortgage covenants (lender restrictions on STR use)
- Insurance (standard homeowner doesn't cover STR)

**Priceless role**: Tax planning. Regulatory compliance is separate — flag if client seems unaware.

## Deliverable points

STR memo should emphasize:
- Material participation documentation standards (not optional)
- Quantified year-1 benefit with cost seg
- Multi-year trajectory of ongoing depreciation
- Audit posture and documentation standards
- Partner sign-off required if aggregation election

## Cross-references

- `strategies/COST-SEGREGATION.md` — the amplifier
- `strategies/REAL-ESTATE-PROFESSIONAL-STATUS.md` — alternative path to non-passive
- `industries/REAL-ESTATE-OWNER.md` — broader real estate context
- `FEDERAL-TAX-COMPUTATION.md` — bonus depreciation permanence, §163(j)

## Update status

File created 2026-04 reflecting post-OBBBA 100% permanent bonus depreciation. STR §469 exception mechanics unchanged by OBBBA.
