---
strategy: Private Foundation Formation and Operation
category: capital-deployment (Operator 8)
authority:
  - IRC §509 (private foundation definition)
  - IRC §4940 (excise tax on net investment income)
  - IRC §4941 (self-dealing prohibitions)
  - IRC §4942 (5% minimum distribution requirement)
  - IRC §4943 (excess business holdings limitation)
  - IRC §4944 (jeopardizing investments)
  - IRC §4945 (taxable expenditures - lobbying, non-charitable distributions)
  - IRC §4946 (disqualified persons definition)
  - IRC §170(b)(1)(B) (30% AGI limit for contributions to private foundations)
  - Treas. Reg. §53.4940 through §53.4948 series
  - Form 990-PF (annual return)
  - Form 1023 (application for tax-exempt status)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — 0.5% AGI floor and 35% bracket cap apply to deductions; non-itemizer above-the-line excludes PFs
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client_AGI > $750000 (Capital Deployment threshold)
  - significant ongoing charitable giving > $250K/year
  - client wants family legacy / governance structure
  - committed to ongoing compliance burden
  - funded at $2M+ scale for compliance economics to work
earliest_actionable_quarter: Q1-Q2 (time to form; IRS determination typically 6-9 months)
latest_actionable_quarter: Q3 (funding for current-year deduction; allow administrative setup time)
typical_savings_range: $200000 - $2000000+ (depends on funding size and asset type)
typical_savings_as_pct_of_contribution: 20-45% combined federal + state + capital gains avoidance, depending on funding asset
savings_formula: |
  PF tax benefits at funding:
    Current charitable deduction (subject to 30% AGI limit for cash, 20% for appreciated property)
    Capital gains avoidance on appreciated asset contributions
    Estate tax removal (contributions removed from estate)
  
  Example: $5M PF funded with appreciated stock (basis $500K)
    Current deduction: $5M (at 20% AGI limit = carry forward 5 years)
    Federal savings over carry-forward period: $5M × 35% (post-OBBBA cap) ≈ $1.75M
    Capital gains avoided: $4.5M × 23.8% = $1,071,000
    Estate tax avoided: $5M × 40% = $2M (if otherwise in estate)
    Total benefit: approximately $4.8M
  
  Ongoing tax burden:
    §4940 excise tax: 1.39% (flat rate) on net investment income annually
    Form 990-PF preparation: $2K-$10K annually
    §4942 5% MDR: forces distribution of 5% of non-charitable-use assets annually
  
  vs. DAF alternative:
    DAF: 60% AGI cash / 30% AGI appreciated property (more generous)
    DAF: no excise tax
    DAF: no MDR
    DAF: minimal ongoing admin
    
  PF advantages over DAF:
    Full governance control
    Investment flexibility
    Payroll for family as foundation officers (compensation reasonable)
    Direct grant-making authority
    Permanence and identity
feasibility: medium-high (well-established; requires proper setup and ongoing administration)
implementation_complexity: high (IRS application; board governance; annual compliance; investment policy)
audit_risk: medium (IRS reviews 990-PFs; self-dealing is common focus)
requires_documentation:
  - Articles of incorporation
  - Bylaws
  - Form 1023 application for §501(c)(3) status
  - IRS determination letter
  - Board minutes (annual)
  - Investment policy statement
  - Distribution policy
  - Grant-making procedures
  - Annual Form 990-PF
  - Self-dealing compliance review
  - Annual valuation (for §4942 MDR computation)
  - State registration (charitable trust registration varies by state)
requires_partner_signoff: true (significant ongoing compliance; family governance coordination)
requires_separate_engagement: true (estate attorney forms PF; Priceless handles Form 990-PF and tax coordination)
typical_separate_engagement_fee: $5,000-$25,000 for formation (attorney); $2,500-$10,000 annually for Form 990-PF preparation; annual audit optional ($5K-$20K)
compatible_stacks:
  - DAF-ADVANCED.md (alternative / companion; DAF often simpler for smaller scale)
  - CRT-CRUT.md (CRT remainder to PF = common structure)
  - QSBS-SECTION-1202.md (pre-exit QSBS gifting to PF; careful rules)
  - CHARITABLE-BUNCHING-DAF.md (DAF alternative considered first usually)
  - ESTATE-PLANNING (cross-skill coordination with estate attorney)
incompatible_with:
  - S Corp stock contributions (PF can hold but §4943 excess business holdings rules apply)
  - debt-financed real estate (§4944 jeopardizing investments concerns)
  - active business contribution (§4943 excess business holdings)
  - small-scale charitable giving (< $250K/year typically; DAF better)
prerequisites:
  - Significant charitable intent and capacity ($2M+ funding practical minimum)
  - Family or advisor capacity for governance
  - Compliance budget ($5K-$20K annually)
  - Estate attorney engagement
industries_best_fit:
  - real-estate-owner (major liquidity event funding PF)
  - investment-firms (family office coordination)
  - software-ai-companies (post-exit philanthropy)
  - multi-generational wealth families (legacy structure)
industries_not_applicable:
  - clients with charitable giving < $250K/year (DAF better)
  - clients without governance capacity
  - active business owners without liquidity
state_specific_considerations: |
  Charitable trust registration required in most states (California, New York, and others)
  State income tax conformity with federal PF rules
  Form 990-PF public disclosure creates disclosure burden (names of foundation principals public)
  
  For Florida: no state income tax; federal treatment only
  For California: Attorney General registration required; strong regulatory oversight
  For New York: charities bureau registration; ongoing reporting
path_b_compensation_tier: 0 (PF-specific compensation flows are rare; trustee / management fees transparent)
---

# Private Foundation

A private foundation is a 501(c)(3) charitable organization funded by a single source (family, individual, or corporation) and controlled by that source. It's the most powerful charitable vehicle for family legacy giving, but comes with substantial compliance burden.

For Priceless Full-Wealth clients considering charitable structures, the decision is typically PF vs. DAF — covered in detail below.

## The basic mechanic

1. Donor forms nonprofit corporation (state law) or charitable trust
2. Files Form 1023 with IRS for §501(c)(3) tax-exempt status
3. Donor contributes assets to PF
4. PF receives §501(c)(3) determination letter
5. PF maintains exempt status via compliance with §§4940-4945 excise tax rules
6. PF makes grants to other charities, pays officer compensation, manages investments
7. Donor (and successor family) retains full governance through board positions

## When PF makes sense vs. DAF

DAF is almost always the easier path. PF wins when:

| PF Wins When | Example |
|---|---|
| Family wants direct control | Board chooses every grant; no sponsor intermediary |
| Family scale justifies compliance | >$2M funding; >$100K annual giving |
| Multi-generational governance intended | Children and grandchildren on board |
| Investment flexibility important | PF can hold private assets, alternatives; DAF sponsor's menu only |
| Compensation to family for services wanted | Reasonable compensation to family officers (§4946 compliance) |
| Distinct philanthropic identity | "The [Family Name] Foundation" |
| Specific grant-making approach | Scholarships, operating programs, research funding |
| Estate legacy embedded | Family name associated with permanent charity |

DAF wins for everyone else:
- Simpler
- Cheaper
- Higher AGI limits for deductions (60% cash vs. 30% cash)
- No §4940 excise tax
- No §4942 MDR
- No Form 990-PF

**Rule of thumb**: Client funding < $2M or giving < $250K/year = DAF. Client with scale and governance intent = evaluate PF.

## Structure choices

### Corporate foundation

- Formed under state nonprofit corporation law
- Board of directors; officers
- Bylaws govern operations
- More common structure

### Charitable trust

- Formed under state trust law
- Trustee(s) manage
- Trust document governs
- Some states treat more favorably

Most modern PFs are corporate structure. Estate attorney selects based on state law and family preference.

## The excise tax framework (§§4940-4945)

Five categories of excise taxes form the compliance framework:

### §4940 — Net Investment Income Excise Tax

- 1.39% flat tax on net investment income
- Interest, dividends, capital gains, rents from investment assets
- Annual payment with Form 990-PF
- Small but consistent tax on PF investment earnings

### §4941 — Self-Dealing Prohibitions

Prohibits transactions between PF and disqualified persons:
- **Disqualified persons** (§4946):
  - Substantial contributors (donor, family)
  - Foundation managers
  - 20%+ owners of substantial contributors
  - Family members of above
- **Prohibited transactions**:
  - Sale/exchange/leasing of property
  - Loans
  - Furnishing goods, services, facilities
  - Payment of compensation (with reasonable compensation exception)
  - Transfer of income/assets to disqualified persons

**Reasonable compensation exception**: family may serve as officers/employees and receive reasonable compensation. Must be:
- For services actually rendered
- Reasonable in amount
- Not part of self-dealing transaction

Priceless commonly sees family members on PF boards receiving modest compensation for governance work. Must be carefully documented.

**Penalty**: 10% of self-dealing amount on disqualified person; 5% on foundation manager who knowingly participated. If uncorrected: additional 200% / 50%.

### §4942 — Minimum Distribution Requirement (MDR)

PF must distribute 5% of non-charitable-use assets annually:

- Calculated on 12-month average value of investment assets
- Must distribute by year-end of following year
- Distributions can be to other charities OR direct charitable programs (PF operating)
- Failure = 30% excise tax on undistributed amount

**Planning implications**:
- PF must maintain grant-making pace
- Investment returns must cover MDR + excise tax + ongoing admin
- Asset growth constrained by MDR outflow
- Typical PF pays 5% out, invests balance, grows at net 3-4% after admin

### §4943 — Excess Business Holdings

PF (plus disqualified persons) cannot hold more than 20% (extended to 35% in limited cases) of any private business enterprise:
- Closely-held corporation stock
- Partnership interests
- Operating business units

**Typical scenario**: Client wants to contribute S Corp stock to PF. The owner plus PF combined can't hold >20% without divestment requirement.

- Disposing within 5-year grace period avoids penalty
- Beyond 5 years: 10% excise tax on excess; 200% if not corrected

**Practical impact**: limits PF as recipient of operating business interests. Better to fund PF with liquid assets or sell business first.

### §4944 — Jeopardizing Investments

PF cannot make investments that jeopardize charitable purposes:
- High-risk speculation
- Inadequate diversification
- Assets not producing return
- Private equity with excessive risk

Penalty: 10% of jeopardizing investment; 25% additional if uncorrected.

**Investment policy**: every PF should have written investment policy statement. Prudent investor standard. Diversification.

### §4945 — Taxable Expenditures

Prohibits certain expenditure categories:
- Lobbying / legislative activity
- Political campaign activity
- Individual grants (without specific documentation)
- Grants to non-public charities (without expenditure responsibility)
- Non-charitable purposes

**Expenditure responsibility**: PF making grants to non-public-charity or non-US entities must establish reasonable due diligence and monitor use.

Penalty: 20% of taxable expenditure; 100% if uncorrected.

## Formation process

### Step 1: Naming and structure

- Choose name ("The [Family] Foundation" or distinctive name)
- Choose state of formation (state of donor residence typical; Delaware common)
- Select corporate vs. trust structure

### Step 2: Legal formation

- Articles of incorporation (or trust document)
- Bylaws
- Initial board resolutions
- EIN application
- State charitable trust registration

### Step 3: IRS exemption application

- Form 1023 or 1023-EZ (for smaller PFs; most donors prefer full 1023 for larger foundations)
- Detailed activities description
- Financial projections (3 years)
- Articles and bylaws attached
- Filing fee: $600-$2,500 depending on size
- **Processing time**: 6-9 months typical; expedited review available for additional fee

### Step 4: Funding

- Transfer cash or appreciated assets to PF
- Establish investment accounts
- Begin investment of funds

### Step 5: Operational setup

- Investment policy statement
- Grant-making procedures
- Board governance schedule
- Compliance calendar
- Record-keeping systems

### Step 6: Annual operations

- Board meetings (minutes required)
- Investment management
- Grant-making activity
- §4942 MDR compliance
- Form 990-PF preparation
- State registrations renewed

## Governance considerations

### Board composition

- Typically 3-5 directors initially
- Donor + spouse + 1-2 children often
- Family + outside advisor occasionally
- Must avoid conflicts of interest

### Family employment

Family members may serve as paid officers (executive director, program officer, etc.):
- Compensation must be reasonable (comparable to similar roles at similar-size PFs)
- Services must be actually rendered
- §4946 disqualified person rules complied with
- Reasonable comp safe harbor documented

Common family compensation:
- Executive Director: $40K-$150K depending on PF scale
- Program Officer: $50K-$100K
- Director fees: $2K-$20K per year

### Succession planning

- Donor typically retains voting control during life
- Successor directors designated (family members, foundation colleagues)
- Plan for post-donor continuation
- Revocability: some PFs include sunset provisions (terminate after X years)

## Post-OBBBA and current law impact

### Direct OBBBA changes affecting PF

**0.5% AGI floor (2026+)**: Applies to itemized charitable deductions including PF contributions. For $750K AGI: $3,750 floor.

**35% bracket cap (2026+)**: Deduction valued at max 35%. Reduces PF funding benefit by ~2 points.

**Non-itemizer above-the-line excludes PFs**: Non-itemizers' small above-the-line deduction doesn't apply to PF contributions. Confirms PF is itemizer strategy.

### AGI limits unchanged

- Cash contributions to PF: 30% AGI limit (vs. 60% to public charity)
- Appreciated property to PF: 20% AGI limit (vs. 30% to public charity)
- 5-year carry-forward for excess

Lower limits reflect PF's non-public-charity status. Meaningful constraint when funding large PFs relative to AGI.

### Estate exemption $15M permanent

Reduces urgency of PF for estate-reduction purpose for estates below $15M. For estates $15M+: PF remains important legacy and estate management tool.

## Interaction with other strategies

### Compared with DAF-ADVANCED

See "When PF vs. DAF" section above. DAF is typically first consideration; PF is for scale + governance.

### Stacks with CRT-CRUT

CRT remainder to PF = common structure for donors wanting:
- Income stream during life (CRT)
- Family-controlled legacy (PF as remainder beneficiary)
- Removal from estate

See `CRT-CRUT.md` for integration details.

### Stacks with DAF-ADVANCED as companion

Many families have BOTH a PF and a DAF:
- PF for major grants and legacy giving
- DAF for more flexible smaller giving
- Each serves different purpose

DAF complementary to PF when PF is inflexible or slow for specific grants.

### Limited compatibility with QSBS-SECTION-1202

Pre-exit QSBS gifting to PF:
- §4943 excess business holdings: limits PF holdings to 20% of any operating business
- Must dispose quickly (5-year grace period) or pay penalty
- §1202 character doesn't transfer to PF

Alternative: gift QSBS to family members (estate planning) rather than PF.

### Stacks with ESTATE-PLANNING

PF integration with estate plan:
- Will or trust directs residue to PF
- Donor's life: PF funded gradually
- At death: remainder passes to PF
- Estate tax deduction at death for amounts to PF (§2055)
- Multi-generational governance established

Estate attorney coordination essential.

## Audit posture

### Risk profile: medium; self-dealing is primary focus

- **LOW** for standard operations: grants to other §501(c)(3) charities; reasonable compensation; compliant MDR
- **MEDIUM** for complex investment structures; family compensation approaching unreasonable
- **HIGH** for self-dealing violations; jeopardizing investment concerns
- **CRITICAL** for sustained non-compliance; §4945 taxable expenditures

### Audit trigger scenarios

- Related-party transactions visible on Form 990-PF
- Family officer compensation exceeding reasonable comp benchmarks
- MDR shortfall
- Investment in private business holdings approaching §4943 limits
- Grants to foreign charities without expenditure responsibility documentation
- Grants to individuals without specific authorization

### Defense considerations

- **Form 990-PF**: annual filing with all required schedules; compensation disclosure accurate
- **Self-dealing policy**: annual review; board minutes documenting compliance
- **Reasonable compensation analysis**: RCReports or similar benchmark for family officer comp
- **Investment policy**: written; reviewed annually; diversified
- **Grant-making records**: documentation of each grant; expenditure responsibility for foreign/non-PC grants
- **MDR calculations**: annual worksheet showing 5% compliance
- **§4943 excess business holdings test**: annual check
- **Board minutes**: documenting governance decisions

### Statute of limitations

- 3-year §6501 on Form 990-PF filings
- §4940 excise tax on net investment income: annual
- §4941 self-dealing penalties: assessed per occurrence; no statute until discovered

## Deliverable points (documentation skill handoff)

When Private Foundation appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Establish [Family Name] Foundation as §501(c)(3) private foundation. Initial funding: $[X] via [asset type]. Family governance through board of directors including [specified members]."
- **Why quantification**: Current deduction × 35% (post-OBBBA cap) × 20% AGI limit for appreciated property (5-year carry-forward); capital gains avoided; estate tax avoided at remainder.
- **Trade-off statement**: Formation cost ~$15K attorney + $2K IRS fee. Annual compliance ~$5K-$10K (Form 990-PF). §4940 excise tax 1.39% on investment income annually. §4942 requires 5% distribution. Public disclosure on 990-PF.
- **Action items**:
  - Estate attorney engagement for formation
  - Form 1023 application (6-9 months processing)
  - Funding mechanism
  - Investment policy development
  - Governance structure setup
  - Annual compliance establishment
- **Deadline**: Formation begins Q1; funding before Dec 31 for current-year deduction

### In the Excel model

- **Tax Projection tab**: Charitable deduction with 20% AGI limit + 5-year carry-forward; capital gains avoided
- **Multi-Year Projection tab**: PF annual operations (MDR outflow, excise tax, admin)
- **Strategies tab**: row for "Private Foundation Funding" with deduction value + gain avoidance + estate benefit
- **Scenario Comparison**: PF vs. DAF analysis explicit
- **Notes tab**: PF name; board composition; funding methodology; investment policy; remainder strategy

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — estate attorney engaged for formation?]`
- `[REVIEW: scope — family governance plan sustainable multi-generational?]`
- `[REVIEW: framing — PF vs. DAF analysis; client truly needs PF scale?]`
- `[REVIEW: quantification — 20% AGI limit properly applied; 5-year carry-forward modeled?]`
- `[REVIEW: authority — §4943 excess business holdings check if S Corp/LLC assets involved?]`
- `[REVIEW: scope — §4946 disqualified person structure documented?]`

### Template language

> **Establish [Family] Foundation as a §501(c)(3) private foundation**. Initial funding: $5M of appreciated Apple stock (basis $500K) contributed in December 2026.
>
> **Current charitable deduction: $5,000,000** (subject to 20% AGI limit for appreciated property contribution; 5-year carry-forward applies). Over 5-year deduction period at 35% marginal (post-OBBBA cap): approximately $1,750,000 federal savings.
>
> **Capital gains avoided**: $4,500,000 × 23.8% = $1,071,000 federal.
>
> **Estate tax avoidance (if otherwise estate-bound)**: $5M × 40% = $2,000,000 at remainder.
>
> **Total benefit approximately**: $4,821,000.
>
> **Structure**:
> - Board: you (Chair), spouse (Secretary), eldest child (Director)
> - Reasonable compensation: $40K/year to spouse as Executive Director (family service benchmark)
> - Investment policy: 80/20 equity/fixed income; diversified
> - Grant-making focus: [stated charitable interests]
> - MDR: $250K annual distribution (5% of $5M assets)
>
> **Formation**: [Attorney Firm] handles Form 1023 application (6-9 months processing; funding can occur before final determination with retroactive effect if timely filed). Priceless coordinates annual Form 990-PF and related compliance at $7,500/year.
>
> **Trade-off**: ongoing public disclosure via 990-PF (foundation principals named; grant recipients listed). Administrative commitment. 30% lower AGI limit vs. DAF means longer carry-forward period.

## Update status

| Verification | Date | Source |
|---|---|---|
| §509 PF definition | Unchanged 2026-04 | Statutory |
| §4940 1.39% excise tax | Unchanged 2026-04 | Statutory |
| §4941 self-dealing rules | Unchanged 2026-04 | Statutory |
| §4942 5% MDR | Unchanged 2026-04 | Statutory |
| §4943 excess business holdings | Unchanged 2026-04 | Statutory |
| §4944 jeopardizing investments | Unchanged 2026-04 | Statutory |
| §4945 taxable expenditures | Unchanged 2026-04 | Statutory |
| OBBBA 0.5% AGI floor | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA 35% bracket cap | Verified 2026-04 | P.L. 119-21 §70112 |
| OBBBA non-itemizer above-the-line (PF excluded) | Verified 2026-04 | P.L. 119-21 §70111 |
| 20% / 30% AGI limits for PF contributions | Unchanged 2026-04 | §170(b)(1)(B) |
| Form 990-PF | Current 2026-04 | IRS |
| Form 1023 application process | Current 2026-04 | IRS |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Next review trigger**: IRS guidance on post-OBBBA charitable deduction floor mechanics; state charitable trust registration changes; any §4940 rate changes
