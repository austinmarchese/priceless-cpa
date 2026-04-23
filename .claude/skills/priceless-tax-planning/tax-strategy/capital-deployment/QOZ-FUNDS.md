---
strategy: Qualified Opportunity Zone (QOZ) Fund Investment
category: capital-deployment (Operator 8)
authority:
  - IRC §1400Z-1 (Opportunity Zone designation)
  - IRC §1400Z-2 (tax benefits for QOF investment)
  - Treas. Reg. §1.1400Z2(a)-1 through §1.1400Z2(f)-1 (final regulations, published 2020)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — made QOZ permanent; added rolling designations
  - IRS Form 8996 (QOF annual reporting)
  - IRS Form 8997 (taxpayer initial and annual QOF investment reporting)
  - Rev. Rul. 2018-29 (leased property treatment)
  - Notice 2020-39, Notice 2021-10 (COVID-era extension relief — expired)
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client_AGI > $750000 (Capital Deployment threshold)
  - has_realized_capital_gain OR expects to realize gain within 180-day deferral window
  - 10-year hold tolerance acceptable
earliest_actionable_quarter: Q1 or Q3 (gain realization quarter typically drives timing)
latest_actionable_quarter: Within 180 days of gain realization — regardless of tax quarter
typical_savings_range: $50000 - $1000000+ (highly dependent on deferred gain size and hold period)
typical_savings_as_pct_of_gain: up to 25% of gain through deferral + step-up mechanics
savings_formula: |
  QOZ tax benefits operate in three layers:
  
  Layer 1: DEFERRAL
    Gain rolled into QOF within 180 days of realization is deferred until:
      - December 31, 2026 (for pre-OBBBA investments), OR
      - Sale/exchange of the QOF investment, OR
      - December 31, 2031 (for post-OBBBA investments, new sunset under OBBBA)
    
    Benefit = deferred tax × time value of money (typical NPV: 8-15% of deferred tax over 5-7 years)
  
  Layer 2: BASIS STEP-UP (pre-OBBBA structure; may be modified post-OBBBA)
    Pre-OBBBA rules (still applicable to pre-OBBBA investments):
      - 5-year hold: 10% basis step-up on deferred gain
      - 7-year hold: additional 5% (total 15%) step-up
    
    Post-OBBBA rules: 
      - OBBBA preserved basis step-up mechanics for eligible investments
      - 5-year hold: 10% step-up
      - 7-year hold: 15% step-up
      - Verify current regulation status before recommending (OBBBA final regs may be published 2026)
  
  Layer 3: 10-YEAR APPRECIATION EXCLUSION
    Hold QOF investment for 10+ years → step-up basis to FMV at sale
    Gain on QOF investment itself (appreciation above deferred gain) = FEDERALLY EXCLUDED
    
    Benefit = all appreciation over 10+ years is federally tax-free
    State: varies by conformity
  
  Total benefit example: $1M capital gain deferred to QOZ
    Year 0: no tax on $1M; invest in QOF
    Years 1-10: QOF appreciates to $3M value
    Year 10+: sale of QOF
      - Deferred $1M triggers (reduced by 15% basis step-up if pre-OBBBA; post-OBBBA equivalent)
        Tax on $850K at 23.8% = $202K (vs. $238K if not deferred)
      - $2M appreciation on QOF: EXCLUDED at federal level
    Total benefit: $476K federal tax avoided on $2M appreciation + $36K reduction in original gain tax
    Plus time-value benefit on the $238K deferred from year 0 to year 10
feasibility: medium (requires qualified fund with sound underlying investment thesis)
implementation_complexity: medium (140 days to execute from gain realization; Form 8997 annually)
audit_risk: medium (QOZ structure subject to regulatory scrutiny; fund-level compliance crucial)
requires_documentation:
  - Form 8997 (taxpayer — filed annually while invested)
  - QOF annual certifications (the fund's Form 8996)
  - Gain realization documentation (Form 8949, Schedule D original entry)
  - 180-day tracking documentation (gain realization date, QOF investment date)
  - QOF subscription agreement
  - Fund sponsor due diligence file (track record, reporting capability, offering documents)
  - Annual K-1 from QOF (if partnership-structured fund)
requires_partner_signoff: true (Capital Deployment strategy; fund sponsor diligence)
requires_separate_engagement: false (within core Priceless engagement for Full-Wealth tier)
typical_separate_engagement_fee: null (Priceless coordination included; fund sponsor has its own fees)
compatible_stacks:
  - INSTALLMENT-SALE-STRUCTURE.md (installment gain realization can fund QOZ deferral in multiple years)
  - QSBS-SECTION-1202.md (post-QSBS gain is still capital gain; can defer into QOZ)
  - COST-SEGREGATION.md (real estate operators with cost seg losses may have less gain to defer; interaction)
  - CHARITABLE-BUNCHING-DAF.md (not directly stacking; alternative uses of appreciated capital)
incompatible_with:
  - Ordinary income (only capital gain can be deferred into QOZ)
  - Gain already recognized before 180-day window closes
  - Gain from sale-and-repurchase of substantially identical property (wash sale doesn't create deferrable gain)
prerequisites:
  - Realized or imminently realizable capital gain (within 180 days)
  - Willingness to commit capital for 10+ years to maximize benefit
  - Acceptance of fund-sponsor risk (underlying investment may underperform or fail)
  - Engagement with vetted QOF sponsor (Priceless does not manage QOFs)
industries_best_fit:
  - real-estate-owner (selling appreciated property; QOZ real estate fund aligned)
  - software-ai-companies (QSBS-qualified exit → defer residual non-QSBS gain)
  - investment-firms (client with concentrated stock position)
  - real-estate-owner (1031 + QOZ combination evaluation)
industries_not_applicable:
  - clients with primarily ordinary income (no capital gain to defer)
  - clients unable to commit 10 years
  - clients with state residency in non-conforming states (check state treatment)
state_specific_considerations: |
  Federal vs. State QOZ conformity varies significantly:
    Fully conforming (federal exclusion follows through): most states
    Partial / modified conformity: California, New York, New Jersey, and others apply state income tax to the federally-excluded appreciation in varying degrees
    
  For California residents especially: federal 10-year exclusion does NOT produce state exclusion. State tax applies to the QOF appreciation.
  
  Analysis required per state; state tax impact may reduce net benefit materially for non-conforming state residents.
path_b_compensation_tier: 1 (some QOF sponsors have sub-advisor arrangements with RIA affiliates; disclosure required)
---

# Qualified Opportunity Zone (QOZ) Funds

QOZ is now a permanent fixture of the tax code, made so by OBBBA 2025. This changes the planning horizon materially — no longer a "use it before it sunsets" strategy.

For Priceless Full-Wealth clients with realized capital gains (or expected gains from business sales, stock liquidations, real estate exits), QOZ deferral + 10-year appreciation exclusion can produce $100K-$1M+ of tax savings depending on magnitude.

## The basic mechanic

QOZ provides three stacking tax benefits for capital gain invested in Qualified Opportunity Funds (QOFs):

1. **Deferral**: original gain deferred until a triggering event
2. **Basis step-up**: partial forgiveness of the deferred gain (5-year, 7-year milestones)
3. **10-year appreciation exclusion**: all gain on the QOF investment itself is federally excluded after 10 years

The 180-day rule: gain must be invested in a QOF within 180 days of realization (some flexibility for partnership-distributed gain where 180 days runs from last day of partnership year).

## Post-OBBBA permanent status (the key 2025 change)

Before OBBBA, the QOZ program had a sunset:
- Deferral maximum triggered December 31, 2026 regardless of hold
- No new designations after 2026
- Uncertainty about the post-2026 landscape

Post-OBBBA:
- **QOZ made permanent** — no sunset on the core program
- **New rolling 10-year zone designations** — zones re-evaluated periodically
- **December 31, 2031 deferral trigger for new investments** — rolling forward from the old 2026 date
- **Basis step-up mechanics preserved** (5-year 10%; 7-year additional 5%)

Practical impact for 2026 planning:
- Clients with 2026 gains have a clean 180-day window to invest in a QOF
- Post-OBBBA investments have the December 31, 2031 deferral trigger (gives some runway)
- No more "deadline panic" around the old 2026 sunset
- Fund sponsors have renewed incentive to raise capital and build pipelines

## When QOZ makes sense

**All of these should be true**:

- Client has realized (or imminent) capital gain of meaningful size ($250K+ typical minimum for practicality)
- Client has 10+ year horizon
- Client has liquidity margin beyond the invested amount (QOF is illiquid; not for grocery money)
- Client accepts fund-sponsor risk
- Client's state treatment doesn't nullify the federal benefit (California residents especially must evaluate)
- Qualified QOF sponsor available with investment thesis matching client's risk tolerance

**When QOZ doesn't make sense**:

- Short-horizon client
- Gain amount < $250K (transaction and compliance costs swamp benefit)
- California or other non-conforming state resident where state tax absorbs most of the federal benefit
- Client without liquidity margin
- No compelling QOF available matching client's preferences

## QOF due diligence (the partner-signoff critical path)

Priceless does NOT recommend specific QOFs without diligence. The partner's role:

### Level 1 diligence (minimum before any recommendation)

- **Sponsor track record**: prior funds, outcomes, team experience
- **Compliance capability**: do they file Form 8996 correctly? Historical violations?
- **Fee structure**: management fees, carried interest, reasonable vs. excessive
- **Investment thesis**: what's the underlying? Real estate, operating business, mixed?
- **Reporting capability**: quarterly reports? K-1 timing? Annual QOF certification delivery?
- **Regulatory status**: SEC-registered if required? RIA?

### Level 2 diligence (for significant recommendations, $1M+)

- Reference calls with other CPA firms using this sponsor
- Review of fund's prior K-1s and compliance history
- Discussion with fund's tax advisor on QOZ compliance posture
- Site visit if real estate-focused and practical

### Level 3 diligence (for first-time sponsors or unusual structures)

- Outside counsel review of fund documents
- Independent compliance verification
- Partner personally meets with fund principals

Priceless maintains a rolling QOF roster with diligence notes. Annual refresh. No recommendation to a client goes out without the fund being on the roster.

## The three layers in detail

### Layer 1: Deferral

Mechanic:
- Capital gain realized (from sale of any property, not just real estate)
- Within 180 days, taxpayer invests gain amount into QOF
- Gain deferred — not reported in year of realization
- Gain triggered at earlier of: (a) sale/exchange of QOF investment, or (b) December 31, 2031 (post-OBBBA) / December 31, 2026 (pre-OBBBA)

Quantification:
- Deferral benefit = time value of the deferred tax
- At 37% federal + 3.8% NIIT on long-term cap gain: tax deferred = 23.8% × gain
- Time value at 5% discount rate, 7-year deferral: ~30% of deferred tax
- For $1M gain: $238K deferred × 30% TVM = $71K deferral benefit

### Layer 2: Basis step-up

5-year hold (pre-OBBBA structure; post-OBBBA preserved):
- 10% of deferred gain is added to basis
- Effectively 10% of deferred gain is forgiven
- For $1M gain: $100K forgiven → $23,800 federal tax saved

7-year hold:
- Additional 5% basis step-up (total 15%)
- For $1M gain: additional $50K forgiven → $11,900 more federal tax saved

**Important for post-OBBBA investments**: the 2031 trigger means investments made in 2026 have until December 31, 2031 before triggering — that's a 5-year (minimum) or 6-year hold option. Investments made in late 2024 (pre-OBBBA) had a December 31, 2026 trigger, limiting their step-up potential.

### Layer 3: 10-year appreciation exclusion

Mechanic:
- Hold QOF investment for 10+ years from investment date
- At sale, basis stepped up to FMV
- Appreciation (FMV over original investment) is FEDERALLY EXCLUDED from income
- State treatment varies (California, New York, New Jersey notably do NOT conform fully)

This is typically the LARGEST benefit of QOZ:
- $1M invested → $3M FMV at year 10 sale
- Appreciation $2M → federally excluded
- Federal tax saved: $2M × 23.8% = $476K

For QOZ to achieve its full potential, client must hold 10+ years. Early exit sacrifices this layer.

## Common QOZ mistakes

### Mistake 1: Missing the 180-day window

The 180-day clock starts at gain realization. Common errors:
- Gain realized Q4; 180 days expires before client gets diligence done on QOF
- Partnership gain with 180 days from last day of partnership year (not from sale date) — misunderstood
- Recycling gain through intermediate vehicles (may not qualify as direct investment)

Always confirm 180-day window at onset; tell client this is a hard deadline.

### Mistake 2: Insufficient diligence on QOF sponsor

Fund underperforms or has compliance issues — client's returns suffer plus tax benefit is compromised if fund loses QOF status. Always diligence before recommending.

### Mistake 3: Not coordinating with other strategies

Client has $2M realized gain + large charitable intent + needs estate planning. QOZ deferral may conflict with charitable use of the gain. Coordinate before executing.

### Mistake 4: State tax surprise

California client invests $1M gain in QOF. Federal: $238K deferred. Over 10 years QOF appreciates $2M. California: no exclusion; pays state tax on full appreciation at sale.

For CA client at 13.3%: $266K state tax on the appreciation. Significantly offsets federal benefit. Run full state analysis before recommending.

### Mistake 5: Gain recognition on death

Investor dies while holding QOF. Gain trigger rules apply; basis step-up at death (§1014) interacts. Complex — requires estate attorney coordination. Not a simple "hold and it disappears" strategy.

### Mistake 6: Fund-level compliance failure

QOF must maintain 90% qualified opportunity zone property test, semi-annually. Failed test = fund loses QOF status = tax benefits may be lost for investors. Sponsor-level risk that Priceless can't fully control but can evaluate via due diligence.

## Post-OBBBA and current law impact

### Direct OBBBA changes (reviewed earlier, summarized here)

- QOZ program made permanent
- Rolling 10-year zone designations
- Deferral trigger date extended to December 31, 2031 for post-OBBBA investments
- Basis step-up mechanics preserved

### Indirect OBBBA impacts

**§199A QBI interaction**: QOF investment doesn't directly affect QBI. But QOF that's real-estate focused may generate passive or active income affecting owner's overall tax picture.

**Charitable 0.5% AGI floor (2026+)**: Reduced AGI from QOF investment may lower the floor slightly, preserving more charitable deduction. Indirect and small.

**SALT cap phase-down**: QOF reduces current-year AGI (via gain deferral); may preserve full SALT cap for borderline clients.

**Estate exemption at $15M**: QOF investments are estate-includible. Large QOF holdings affect estate planning. Coordination with estate counsel important.

### Planning horizon change

Pre-OBBBA: "use it or lose it before 2026 sunset" mentality
Post-OBBBA: long-term permanent strategy; deliberate planning over multiple years

This changes the Priceless conversation. Instead of "quick decision before year-end 2025," it's "where does QOZ fit in a multi-year capital deployment strategy?"

## Interaction with other strategies

### Stacks with INSTALLMENT-SALE-STRUCTURE

Client sells business with installment payment terms. Each year's installment gain can be deferred into QOZ within 180 days of that year's receipt. Creates a multi-year QOZ deployment pattern.

Requires careful coordination with installment method elections (§453) and 180-day tracking per installment.

### Stacks with QSBS-SECTION-1202

Post-QSBS exit often has residual gain beyond the §1202 exclusion cap ($15M post-OBBBA). That residual gain is federal capital gain — eligible for QOZ deferral.

Example: $30M QSBS exit
- $15M QSBS federal exclusion
- $15M residual capital gain
- Defer $15M into QOZ → defer $3.57M federal tax + 10-year exclusion potential on QOF appreciation

### Stacks with COST-SEGREGATION (real estate)

Real estate operator with significant cost seg losses may have lower net income but still have realized gain from property sales. Cost seg losses don't prevent QOZ deferral of gain; they're independent tax accounting events.

For real-estate focused QOFs (common sponsor type), the QOF itself may benefit from cost seg on its underlying properties — client benefits indirectly through fund performance.

### Stacks with CHARITABLE-BUNCHING-DAF

QOZ and charitable bunching use different pools of capital for different purposes. Client with $2M gain may split: $1M to QOZ (deferral + growth) + $500K to DAF (current deduction + philanthropic deployment) + $500K to operating use.

Each gets its own tax benefit; the strategies don't directly stack but coexist.

### Interaction with SECTION-1031-ADVANCED

§1031 defers real estate gain in like-kind exchange; QOZ defers any capital gain but requires QOF investment. Mutually exclusive for the same gain — choose one.

Factors favoring §1031: real estate to real estate; strong replacement property identified; owner wants direct property ownership
Factors favoring QOZ: diversification vs. single replacement property; 10-year appreciation exclusion potential; QOF aligned investment thesis

### Interaction with PRIVATE-FOUNDATION / CRT

Client considering charitable vehicles as alternative to deferral:
- Private Foundation / CRT: gives gain away charitably; creates tax deduction + removes from estate
- QOZ: defers and potentially excludes gain; maintains ownership; wealth-building focused

Different objectives. If client's primary goal is legacy/philanthropy: charitable vehicle. If primary goal is wealth preservation: QOZ.

## Audit posture

### Risk profile: medium; has been subject to IRS scrutiny since program launch

QOZ is not new territory for IRS examination:
- **LOW** when documentation complete, QOF is reputable sponsor, Form 8997 filed annually, 180-day window observed, QOF files Form 8996 correctly
- **MEDIUM** when fund sponsor is new/small, documentation has gaps
- **HIGH** when self-styled "QOF" of owner's own creation without meeting regulatory standards
- **HIGH** when 90% test or 50% gross income test fails at fund level

### Audit trigger scenarios

- Large Form 8997 filings for new taxpayers (flagged for review)
- 180-day window not documented (gain date + investment date not tracked)
- QOF fails annual self-certification (Form 8996)
- Fund's underlying investments don't clearly meet QOZ qualifications (e.g., existing building without "substantial improvement")
- Taxpayer claims 10-year exclusion without actual 10-year hold

### Defense considerations

- **Form 8997 annual filing**: show each QOF investment, basis, gain triggered events
- **Fund subscription agreement**: proves QOF is qualifying
- **Fund annual certifications** (Form 8996 copy): provides fund-level compliance evidence
- **180-day calendar**: gain realization date, investment date, calendar demonstration
- **10-year hold documentation**: investment date, sale date, holding period calculation
- **Sponsor reputation**: track record of compliance; reliance on qualified sponsor is a defense

### Statute of limitations

- 3-year §6501 limitation on tax return claiming deferral
- When triggered event occurs: new return year; new statute
- 10-year exclusion at sale year: separate 3-year statute

## Deliverable points (documentation skill handoff)

When QOZ appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Invest $[X] of your [Year] capital gain in [QOF Name or TBD fund] within 180 days of realization. This defers federal tax of approximately $[Y] (at 23.8% long-term cap gain rate + NIIT) until [trigger date]. A 5-year hold produces a 10% basis step-up; 7-year produces 15% additional step-up (total 15%). At 10-year hold, all QOF appreciation is federally excluded."
- **Why quantification**: deferral benefit + basis step-up + projected 10-year exclusion at estimated QOF performance. Use three scenarios: conservative, base, optimistic.
- **Trade-off statement**: Capital committed 10+ years for full benefit; QOF underperformance risk; state tax treatment varies (especially California, New York residents); additional compliance (Form 8997 annual).
- **Action items**: 
  - Engagement letter extension if needed for QOZ coordination
  - Fund diligence and selection (partner signoff required)
  - Subscription documents execution
  - 180-day tracking established
  - Form 8997 filing set up
- **Deadline**: Specific based on gain realization date (180 days)

### In the Excel model

- **Tax Projection tab**: Capital gain initially reported + QOZ deferral election (separate line), net federal/state capital gain tax
- **Multi-Year Projection tab** (Full-Wealth): year-by-year QOZ status (deferred, step-up milestones, trigger year, 10-year mark)
- **Strategies tab**: row for "QOZ Fund Investment" with deferral + projected 10-year exclusion
- **Scenario Comparison tab**: base case (no QOZ) vs. QOZ with 10-year hold
- **Notes tab**: QOF sponsor; subscription date; 180-day documentation; state tax analysis

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — QOF sponsor on roster? Diligence current?]`
- `[REVIEW: quantification — state tax treatment for [client state]; CA/NY non-conforming impact?]`
- `[REVIEW: scope — coordination with installment sale / QSBS / 1031 decision?]`
- `[REVIEW: framing — 10-year hold commitment; client understands irrevocable nature?]`

### Template language

For Full-Wealth tier client with business sale:
> **Invest $2M of your 2026 business sale gain into the [QOF Name] Opportunity Zone fund within 180 days of closing**. This defers $476K of federal capital gain tax until December 31, 2031 (post-OBBBA trigger date). A 5-year hold through 2031 gives you a 10% basis step-up, reducing the deferred tax to $428K. A 10-year hold to 2036 fully excludes any QOF appreciation — potentially $500K-$1.5M+ of tax-free growth depending on fund performance.
>
> The fund is focused on multifamily real estate development in designated zones in Florida and Texas — aligned with your investment thesis. Priceless has vetted the sponsor (fourth fund; 8-year track record; institutional backing). Fund-level fees: 1% management + 10% carried interest above 8% hurdle.
>
> Trade-off: capital locked through 2036 for full benefit. Florida state tax: $0 (no conformity issue, Florida has no income tax). Additional compliance: Form 8997 annually. Priceless handles.

## Update status

| Verification | Date | Source |
|---|---|---|
| OBBBA QOZ permanent status | Verified 2026-04 | P.L. 119-21 (OBBBA) |
| OBBBA rolling 10-year designations | Verified 2026-04 | P.L. 119-21 |
| OBBBA December 31, 2031 trigger for post-OBBBA investments | Verified 2026-04 | P.L. 119-21 |
| Basis step-up preservation (5-year 10%; 7-year 15%) | Verified 2026-04 | P.L. 119-21 + existing §1400Z-2 |
| 10-year appreciation exclusion | Unchanged 2026-04 | §1400Z-2(c) |
| 180-day window | Unchanged 2026-04 | §1400Z-2(a)(1) |
| Form 8996 / Form 8997 requirements | Current 2026-04 | IRS forms |
| Treas. Reg. §1.1400Z2 final regulations | Current 2026-04 | Treasury; unchanged |
| State conformity landscape (CA, NY non-conforming) | Verified 2026-04 | Per-state review |
| QOF sponsor roster | Rolling; reviewed quarterly | Firm internal |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Next review trigger**: IRS regulations on post-OBBBA zone re-designations (expected 2026-2027); state conformity legislation changes; QOF sponsor roster updates
