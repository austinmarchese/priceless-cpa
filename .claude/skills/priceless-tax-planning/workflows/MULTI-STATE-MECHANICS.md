# Multi-State Mechanics

Reference for handling clients with economic or physical presence in multiple states. Cross-cuts every phase of the engagement. Loaded when client profile shows multi-state exposure OR when multi-state facts surface during engagement.

## When this file applies

Activate this file when any of:
- Client profile Section 1 shows secondary state ties
- Entity operates in multiple states (employees, property, customers)
- Client is mid-year relocating
- Client is a partner / shareholder in entity with multi-state operations
- Client has rental property in different state from residence
- Client is PR Act 60 planning candidate (PR + US states)

## The three core concepts

Multi-state taxation rests on three concepts applied in sequence:

### 1. Nexus — where does the taxpayer have enough connection for the state to tax?

**Physical nexus**:
- Domicile / residence (primary state of residence)
- Employees working in the state
- Property located in the state (office, warehouse, rental real estate)
- Inventory in state (relevant for e-commerce with FBA warehouses in various states)

**Economic nexus** (post-Wayfair, 2018):
- Sales threshold in state (varies; commonly $100K or 200 transactions)
- Applies for sales tax; increasingly used for income tax
- Digital services / SaaS triggers economic nexus in many states now

### 2. Sourcing — how is income assigned to each state?

**Apportionment** (for businesses operating in multiple states):
- Three-factor formula: sales + property + payroll (historical)
- Most states now use single-sales-factor (weights sales only)
- Some states use modified formulas

**Direct allocation** (for some income types):
- Real estate income: allocated to state where property is located
- Business income: apportioned across states per above
- Personal service income: to state where services performed
- Capital gains on real estate: to state where property is located
- Capital gains on securities: generally to state of residence

### 3. Residence — how is the client categorized in each state?

**Resident**:
- Taxes worldwide income
- Credit for taxes paid to other states (generally)

**Non-resident**:
- Taxes only income sourced to that state

**Part-year resident**:
- Taxes during residency period at full rate
- Different rules by state for how to split

**Domicile vs. residence**:
- Domicile = legal home, one state at a time
- Residence = physical presence
- Can be resident of two states simultaneously (different rules per state)

## Common client scenarios

### Scenario 1: FL domicile with CA rental property

Client domiciled in FL (no state income tax) owns rental property in CA:
- FL: no income tax, so no FL return
- CA: non-resident filing required for CA-sourced rental income (Form 540NR)
- Depreciation, expenses, and income allocated to CA property
- Net rental income taxed at CA rates as non-resident

Common error: client assumes no state tax because FL has none. CA-sourced income is taxable in CA regardless of domicile.

### Scenario 2: CA domicile with FL S Corp

Client domiciled in CA, owns S Corp operating in FL:
- CA: resident, taxes worldwide income including K-1 from FL S Corp
- FL: no income tax, no filing
- Owner's W-2 from FL S Corp also taxed in CA as CA resident
- No offsetting credit (FL has no income tax to credit against)

This is why many high-income CA residents consider relocating to FL, TX, WA. Not just the business income — all income follows residency.

### Scenario 3: NY resident with VT second home

Client NY resident, has second home in VT:
- NY: resident, taxes worldwide income
- VT: if client physically stays in VT enough days, part-year or non-resident filing may be required
- VT income (rental, capital gains on VT property) taxable to VT
- NY gives credit for VT tax paid on doubly-taxed income

### Scenario 4: Mid-year move from NY to FL

Client moves from NY to FL on June 30:
- NY: part-year resident, tax on income earned Jan-Jun at full rate, plus source rules
- NY source income after move: still taxed (e.g., RSU vesting from NY employer)
- FL: no state income tax after move
- Documentation critical: residence change proven by address, driver's license, voter registration, physical days

Strategic considerations:
- Timing income recognition to pre-move vs. post-move
- Property sale timing (if FL, move before sale for residence exclusion)
- Stock options / RSU vesting timing
- Bonus timing

### Scenario 5: PR Act 60 relocation

Client moves from US state to Puerto Rico for Act 60 treatment:
- Complex "bona fide residency" analysis per IRC §937 three-test framework
- Tax year of move: complicated — two-state return in US state, plus PR return, plus federal 1040 with exclusions
- Form 8898 filing requirement in year of move
- Post-move: PR-source income excluded federally (§933); US-source income still US-taxable
- Ongoing documentation critical

This is specialized enough to warrant separate engagement. Flag for partner.

### Scenario 6: E-commerce with FBA in multiple states

Client sole owner of e-commerce S Corp with Amazon FBA. Inventory warehoused in 10+ states via Amazon:
- Physical nexus through inventory in each warehouse state
- State-specific filing required in each state
- Apportionment of S Corp income to each state based on sales factor
- Owner's K-1 income allocated per apportionment

Complex. Typically use Avalara, TaxJar, or similar tool to manage state filings.

### Scenario 7: Remote workers in multiple states

Client S Corp with fully-remote team in 15 states:
- Nexus in each state where employee works
- State unemployment insurance in each state
- State income tax withholding for each employee
- Potentially state tax filings for the S Corp itself based on nexus
- "Convenience of the employer" rule in some states complicates

Some states have exceptions (NY's convenience rule has been modified; others changing).

## Multi-state tax computation workflow

### Step 1: Map the states

For each client with multi-state exposure, create a state map:
- Domicile state
- States with physical presence (property, employees, inventory)
- States with economic nexus (sales threshold)
- States with income sourcing (rental, capital gains)

### Step 2: Classify the taxpayer in each state

Per state: resident, non-resident, or part-year.

### Step 3: Determine sourcing for each income type

For each income type (wages, business, rental, capital gains, interest, dividends):
- What state is this income sourced to?
- Who's taxing it? (often multiple states)

### Step 4: Compute state tax per state

For each state with filing obligation:
- Apply that state's rules (residence status + sourcing + apportionment)
- Compute state tax liability

### Step 5: Apply credits for doubly-taxed income

Resident state generally gives credit for tax paid to other states on the same income. Limitations:
- Credit only up to resident state's tax on that income
- Specific rules per state for coordination

### Step 6: Net result

Total state tax = sum across all states minus credits.

Often (not always) the net result approximates the tax the highest-state-rate state would charge on full income. But details matter.

## Residency audits — what states scrutinize

High-tax states (especially CA, NY) aggressively audit claimed residency changes.

What auditors look at:
- **Days physically present** in state (state-specific rules — NY 183-day, CA various tests)
- **Driver's license** state of issuance
- **Voter registration**
- **Home ownership and usage**
- **Business location**
- **Professional licenses**
- **Children's school enrollment**
- **Spouse's presence**
- **Church membership / community ties**
- **Club memberships**
- **Physician / dentist / advisor locations**
- **Where safety deposit box located**
- **Where vehicles registered**
- **Where tax returns filed historically**
- **Communications (phone records, email patterns)**

Clients considering relocation for tax purposes must understand: claiming residency change without actually moving is high-audit-risk. Document physical days, update all address records, sever prior-state ties decisively.

## PTET coordination across states

Pass-through Entity Tax elections offer SALT cap workaround but interact across states:

### Multi-state PTET question: elect in one state, all states, or none?

Entity-level PTET in one state generally reduces that state's K-1 income to owner (deduction at entity level). Owner's resident state may or may not give credit for the PTET-taxed income.

### Complex example:

Client is CA resident, owns S Corp operating in CA and NY.

- **CA PTET election**: CA-source income taxed at entity level (9.3%), owner's CA return shows reduced K-1 with credit for PTET paid
- **NY PTET election**: NY-source income taxed at entity level (6.85% max for individuals), NY non-resident return shows reduced K-1 with credit
- **CA resident credit for NY PTET**: CA gives credit for NY state tax paid on NY-source income; the NY PTET may qualify as NY state tax for this purpose (specific CA rules)

Nuances:
- Federal deduction captured at entity level in each state
- State-to-state credit mechanics depend on state
- Some states don't conform to federal deduction of PTET

For multi-state clients, PTET decisions warrant careful per-state analysis.

## Priceless licensure considerations

Priceless CPA practices in FL primarily. When clients have multi-state exposure, licensure questions:

- Filing returns for clients in states where Priceless licensed = no issue
- Filing returns for clients in states where Priceless not licensed = mobility rules apply
- State CPA practice mobility (AICPA Uniform Accountancy Act) — most states recognize out-of-state CPA practice under certain conditions
- Some states require practice registration or notification

Check FL CPA rules (Board of Accountancy) for mobility requirements when serving clients in non-FL states.

For entity returns in states where Priceless isn't licensed, consider:
- Checking mobility rule qualification
- Associating with local CPA as needed
- Declining the work if licensure can't be established

## States worth particular attention

### California
- Highest rates in US
- Aggressive residency audit practice
- Non-conforming on various federal provisions (QSBS, some credits)
- Complex PTET rules

### New York / New York City
- High rates plus NYC additional tax
- "Convenience of the employer" rule for out-of-state workers
- Aggressive on residency claims

### New Jersey
- BAIT election (NJ's PTET mechanism)
- High rates
- Aggressive on tax compliance

### Illinois
- PTET available
- Flat rate structure
- Growing exodus due to tax climate

### Texas / Washington
- No state income tax but franchise taxes and other
- Specific state-level issues

### Puerto Rico
- Separate tax system
- Act 60 decree considerations
- Significant compliance differences

## Documentation requirements

For multi-state engagement:
- State-by-state filing status documented
- Apportionment calculations by entity
- Credit calculations for doubly-taxed income
- Residency documentation (especially for state changes)
- Form-by-form checklist per state

## Referral to specialty

For highly complex multi-state situations:
- 5+ states with material activity
- International + state interactions
- PR Act 60 coordination
- Residency challenge or audit
- Significant relocation planning

Consider engaging specialty multi-state CPA firm or partnering with regional firm.

## Priceless approach to multi-state complexity

Tier considerations:
- **Foundational**: single state preferred; 2-state straightforward cases OK
- **Comprehensive**: up to 3-4 state situations manageable
- **Full Wealth**: complex multi-state welcome; specialty coordination if needed

Separate engagement often warranted for:
- Mid-year relocation planning
- PR Act 60 planning
- Multi-state PTET coordination
- Residency audit defense

## Update cadence

State tax laws change roughly 10-20 states per year. This file gets:
- Annual review and update
- Material change updates immediately
- State-specific deep dives per state in top 10 state files (when built in future sprint)
- All 50 states detailed coverage built in a dedicated batch (deferred per partner direction)

## Reference files

- `../shared/FIRM-METHODOLOGY.md`
- `../tax-projection/STATE-TAX-BASELINE.md` (baseline state rates)
- `../tax-strategy/strategies/PTET-ELECTION-BY-STATE.md` (PTET mechanics)
- Future `../states/*.md` files (deferred per partner direction; build when fresh context available)

## Quality checks for multi-state engagements

Before memo delivery:
- [ ] State map complete (all relevant states identified)
- [ ] Residency status confirmed in each state
- [ ] Sourcing methodology documented
- [ ] Apportionment calculation verified
- [ ] Credits for doubly-taxed income properly applied
- [ ] PTET elections coordinated across states
- [ ] Licensure confirmed for Priceless to practice in each state
- [ ] Any residency change documentation in order
- [ ] Any relocation planning flagged for partner review
