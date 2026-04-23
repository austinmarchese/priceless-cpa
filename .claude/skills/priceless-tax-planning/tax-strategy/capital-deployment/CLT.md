---
strategy: Charitable Lead Trust (CLT / CLAT / CLUT)
category: capital-deployment (Operator 8)
authority:
  - IRC §170(f)(2)(B) (grantor CLT income tax deduction)
  - IRC §2055(e)(2)(B) (estate/gift tax deduction on CLT lead interest)
  - IRC §2522 (gift tax charitable deduction)
  - IRC §664 — does NOT apply to CLT (distinguished from CRT)
  - IRC §642(c) (CLT charitable deduction for income distributed to charity)
  - IRC §2642(e) (GST tax rules for CLTs)
  - IRC §2702 (grantor retained interest valuation)
  - Treas. Reg. §1.170A-6 (CLT income tax)
  - Treas. Reg. §25.2522(c)-3 (gift tax)
  - Rev. Proc. 2007-45 and 2007-46 (sample CLT forms - annuity)
  - Rev. Proc. 2008-45 and 2008-46 (sample CLT forms - unitrust)
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — estate exemption $15M permanent; charitable deduction mechanics affected
framework: operator-8 (Capital Deployment)
eligibility_gate: capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md
applies_when:
  - client estate approaching or exceeding $15M exemption threshold
  - wants to transfer appreciating assets to next generation at reduced gift/estate tax
  - has charitable intent for the lead interest
  - horizon of 10-30+ years typical
earliest_actionable_quarter: Q1-Q2 (attorney formation; funding timing)
latest_actionable_quarter: December 31 for year-end funding and deduction
typical_savings_range: $200000 - $5000000+ (estate tax savings; depends on appreciation and terms)
typical_savings_as_pct_of_trust_value: varies widely; leveraged transfer strategy
savings_formula: |
  CLT is OPPOSITE of CRT:
    CRT: income stream to donor; remainder to charity
    CLT: income stream to charity; remainder to family
  
  Primary benefit: REDUCED ESTATE/GIFT TAX ON APPRECIATION TO FAMILY
    
    Funding: donor transfers asset to CLT
    CLT pays charity for term (typically 15-30 years)
    After term: remainder to family beneficiaries
    
    Gift tax valuation:
      Value of taxable gift = FMV of asset - PV of charitable lead interest
      Lead interest PV calculated via §7520 rate and term
      Higher §7520 rate → larger lead PV → smaller taxable remainder
      Longer term → larger lead PV → smaller taxable remainder
    
    If trust earns MORE than §7520 rate, excess passes to family transfer-tax-free
    
  Example: $5M CLAT, 20-year term, 6% payout to charity
    §7520 rate 5%: PV of 20-year 6% annuity on $5M:
      Lead PV ≈ $3.7M (paid to charity over term)
      Remainder PV ≈ $1.3M (taxable gift to family)
      Gift tax impact on $1.3M only (vs. $5M if direct gift)
    
    If trust earns 8% (above §7520):
      Growth above 5% assumed passes to family free
      Over 20 years compounding: potentially $5-10M+ to family at end of term
      Gift tax was paid only on original $1.3M remainder value
  
  Grantor CLT variant:
    Donor receives immediate income tax deduction for PV of lead interest
    BUT donor taxed on CLT income annually (defeats income tax exemption)
    Typically used only in specific strategic scenarios
  
  Non-grantor CLT (typical):
    No income tax deduction at funding
    Trust pays own tax; deducts charitable distributions (§642(c))
    Typically results in near-zero income tax on trust
feasibility: medium (complex; requires sophisticated estate planning integration)
implementation_complexity: high (legal drafting; valuation; GST planning; ongoing administration)
audit_risk: medium (IRS reviews CLT valuations; actuarial calculations scrutinized)
requires_documentation:
  - Trust agreement (estate attorney drafted from Rev. Proc. sample forms)
  - Asset transfer documentation and qualified appraisal
  - Gift tax return (Form 709) reporting remainder interest as taxable gift
  - §7520 rate at funding documented
  - PV calculation with actuarial methodology
  - Annual trust income tax return (Form 1041 typical for non-grantor CLT)
  - Charitable distribution records
  - GST tax analysis if multi-generational
requires_partner_signoff: true (always; coordinate with estate attorney; complex)
requires_separate_engagement: true (estate attorney; trustee; Priceless coordinates tax aspects)
typical_separate_engagement_fee: $10,000-$40,000 for formation (attorney); $3,000-$10,000 annual trustee; $1,500-$5,000 annual tax return (1041 if non-grantor)
compatible_stacks:
  - PRIVATE-FOUNDATION.md (CLT charitable payments to PF)
  - DAF-ADVANCED.md (CLT charitable payments to DAF)
  - CRT-CRUT.md (opposite structure; same family may use both)
  - ESTATE-PLANNING (cross-skill; CLT is fundamentally estate planning tool)
incompatible_with:
  - clients below $15M estate threshold (no estate tax problem to solve)
  - S Corp stock (same limitations as CRT; affects shareholder eligibility)
  - clients without charitable intent
  - short-horizon clients
prerequisites:
  - Estate approaching or exceeding $15M per spouse exemption
  - Asset with expected appreciation above §7520 rate
  - Horizon of 15+ years
  - Family wealth transfer goals
  - Charitable intent for the lead interest
industries_best_fit:
  - software-ai-companies (post-exit wealth concentrated; next-gen transfer planning)
  - real-estate-owner (appreciating real estate portfolio)
  - investment-firms (concentrated equity positions; family wealth building)
  - multi-generational families with estate planning needs
industries_not_applicable:
  - most clients (CLT requires sophistication and scale most don't have)
  - clients without estate tax exposure
state_specific_considerations: |
  State estate tax: some states have estate tax thresholds below federal ($15M post-OBBBA)
  (Massachusetts $2M, Oregon $1M, etc.)
  State CLT treatment typically follows federal
  GST tax implications vary based on beneficiary state of residence
  
  For large-estate clients in high-estate-tax states, CLT addresses both federal and state
path_b_compensation_tier: 0-1 (varies; if charitable remainder to recommended sponsor structures, disclosure needed)
---

# Charitable Lead Trust (CLT / CLAT / CLUT)

CLT is the structural opposite of CRT: charity receives the lead (income stream during term) while family receives the remainder. It's primarily an estate planning tool for transferring appreciating assets to family at reduced transfer tax cost — with charitable component creating current deduction or gift-tax reduction.

For Priceless Full-Wealth clients with estates approaching or exceeding the $15M exemption, CLT can transfer substantial wealth to next generation at significantly reduced gift/estate tax cost — leveraging the spread between trust performance and §7520 rate.

## The basic mechanic (contrast with CRT)

### CRT (covered in CRT-CRUT.md)
1. Donor contributes to trust
2. Trust pays INCOME to donor/non-charitable beneficiaries
3. REMAINDER to charity
4. Benefits: current income deduction + capital gains avoidance + income stream + estate removal

### CLT (this file)
1. Donor contributes to trust
2. Trust pays INCOME to charity
3. REMAINDER to family (children, grandchildren)
4. Benefits: leveraged wealth transfer + reduced gift/estate tax + charitable participation

Same §7520 framework; opposite direction of benefits.

## CLAT vs. CLUT (same structural choice as CRAT vs. CRUT)

### CLAT (Charitable Lead Annuity Trust)

- Fixed dollar amount paid annually to charity
- Common for wealth transfer planning
- "Zeroed-out CLAT" possible — structure so remainder PV = 0 for gift tax purposes

### CLUT (Charitable Lead Unitrust)

- Fixed percentage of trust value paid to charity annually
- Less common for wealth transfer
- No "zeroing out" option due to unitrust nature

**Most CLTs are CLATs** because the fixed-annuity structure enables wealth transfer leverage.

## The leverage mechanic (why CLT transfers wealth)

### Gift tax valuation at funding

When donor creates CLT, taxable gift equals:
- FMV of contribution - PV of charitable lead interest

PV of lead interest calculated via:
- §7520 rate at date of funding
- Term of trust
- Payout pattern

### The spread

If trust earns MORE than §7520 rate → excess accumulates tax-free for family remainder.

Example: $5M CLAT, 20-year term, 6% charitable payout, §7520 rate 5%
- PV of charitable lead interest: ≈ $3.7M (present value of 20-year $300K annuity at 5%)
- Taxable gift (remainder): $5M - $3.7M = $1.3M
- Gift tax impact: $1.3M × 40% estate rate = $520K (reduced from $15M exemption or paid via prior unified credit)

Over 20 years, if trust earns 8% annually:
- Beginning value $5M → compound at 8% for 20 years → $23.3M (gross before charitable payments)
- Charitable payments: $300K × 20 = $6M (roughly)
- Remainder to family: ≈ $17M+

Net: $17M to family at gift tax cost of $1.3M taxable gift (40% = $520K tax or exemption use).

**Leverage: $17M transferred for $1.3M gift tax cost. Effective 7.7% effective transfer tax rate on the amount passed to family.**

### "Zeroed-out" CLAT

Structure payout rate so PV of lead interest = FMV of contribution:
- Taxable gift = $0
- All appreciation above §7520 rate passes to family transfer-tax-free
- Bet: trust can outperform §7520 rate over term

If §7520 rate is 5% and trust earns 8%, the 3% spread compounds over 20 years = substantial wealth transfer at zero gift tax.

Risk: if trust underperforms §7520 rate, charitable payments may exceed trust growth; remainder to family reduced or eliminated.

## The §7520 rate dynamic

§7520 rate varies monthly; affects CLT attractiveness:

- **Low §7520 rate**: PV of lead interest is high → remainder PV low → small taxable gift → CLT attractive
- **High §7520 rate**: PV of lead interest is low → remainder PV high → large taxable gift → CLT less attractive

Optimal timing: fund CLT when §7520 rate is low. January 2026 rate approximately 5.0% — moderate level.

Some advisors recommend waiting for §7520 rate dips. But timing can be unpredictable; better to execute when estate plan calls for it than wait for perfect rate.

## Grantor vs. Non-Grantor CLT

### Non-Grantor CLT (typical)

- Trust is separate taxpayer
- Pays own income tax (Form 1041)
- Deducts charitable distributions under §642(c)
- Typically nets near-zero tax
- Donor has NO current income tax deduction
- Donor has gift tax benefit per above

### Grantor CLT

- Trust income taxed to donor (defeating trust-level tax exemption)
- In exchange: donor gets IMMEDIATE INCOME TAX DEDUCTION for PV of lead interest
- §170(f)(2)(B) specifically permits this
- Used when donor wants income tax benefit in high-income year

Most CLTs are non-grantor. Grantor CLT used in specific situations:
- Donor has unusually high income year
- Income tax deduction exceeds expected estate/gift tax savings
- §170 carry-forward can utilize deduction over multiple years

Partner + estate attorney evaluate which variant suits client.

## When CLT makes sense

**All should be true**:

- Client has significant estate tax exposure (estate > $15M OR approaching exemption)
- Has appreciating assets (real estate, growth stock, business interests)
- Has charitable intent (charitable component must be genuine)
- Multi-generational planning horizon
- Cash flow can support term commitment
- Estate attorney + tax-focused advisors available

**When it doesn't**:

- Estate well below $15M (no estate tax problem)
- Client lacks charitable intent
- Needs asset liquidity
- Short horizon

## Post-OBBBA and current law impact

### Direct OBBBA changes

**Estate exemption $15M permanent**: Reduces CLT urgency for estates below $15M. For estates $15M-$50M: CLT remains powerful tool. For estates > $50M: CLT + other leveraged transfer strategies (GRATs, Sales to IDGTs, etc.) stacked.

**0.5% AGI floor / 35% bracket cap**: Apply to any current charitable deduction in grantor CLT scenario. Non-grantor CLT not directly affected (no current donor deduction).

**No direct §170(f)(2)(B) amendment**: Grantor CLT income tax deduction mechanics unchanged.

### GST tax rate stable at 40%

GST (generation-skipping transfer) rate unchanged post-OBBBA. GST planning integration with CLT requires sophisticated analysis — coordinate with estate attorney.

## Interaction with other strategies

### Stacks with PRIVATE-FOUNDATION

CLT charitable payments directed to client's private foundation:
- Family foundation receives CLT's annual payments
- Creates consistent funding stream for foundation
- Foundation grant-making continues during CLT term
- Family governance of both structures

Common sophisticated structure: CLAT with charitable payments to family PF; remainder to children.

### Stacks with DAF-ADVANCED

CLT charitable payments to DAF:
- Simpler than PF for charitable recipient
- Family advisory role at DAF
- Lower administrative burden

Trade-off: DAF lacks PF's direct governance feel; some donors prefer PF for CLT pairing.

### Coordinated with CRT-CRUT

Same family may use both:
- CRT with appreciated stock → income to donor during life
- CLT with real estate → wealth transfer to children

Different assets, different goals, both charitable vehicles.

### Coordinated with ESTATE-PLANNING overall

CLT is fundamentally estate planning tool. Must integrate with:
- Will / revocable trust
- Life insurance trust (ILIT)
- GRATs, if used
- Generation-skipping planning
- Buy-sell agreements for business interests

Estate attorney's role critical; Priceless plays tax coordination role.

### Non-compatibility with S Corp stock

Same limitation as CRT — §1361 restricts S Corp shareholders. CLT cannot hold S Corp stock without terminating election.

Workaround: convert to C Corp or LLC before contribution; rarely ideal.

## Audit posture

### Risk profile: low-medium; valuation is primary area of scrutiny

- **LOW** when trust drafted from Rev. Proc. 2007-45/46 or 2008-45/46 sample forms; standard valuations
- **MEDIUM** when unusual structures or valuation methodologies
- **HIGH** when "zeroed-out" CLATs with aggressive payout rates

### Audit trigger scenarios

- Form 709 gift tax return with CLT funding
- Very low remainder PV reported (zero or near-zero)
- Qualified appraisal quality for non-liquid contributions
- §7520 rate methodology on annuity calculations
- Termination events before end of term

### Defense considerations

- **Trust agreement**: drafted from Rev. Proc. sample forms
- **Form 709**: complete gift tax return at funding
- **Qualified appraisal** for non-cash contributions
- **§7520 rate documentation**: specific to funding date
- **Actuarial calculations**: PV methodology documented
- **Annual Form 1041**: non-grantor CLT tax return
- **Charitable distribution records**: timing and recipients

## Deliverable points (documentation skill handoff)

When CLT appears in a client memo:

### In the narrative memo

- **Recommendation statement**: "Establish 20-year Charitable Lead Annuity Trust funded with $[X] of [asset]. Charitable lead: [charity name, DAF, or PF] receives [rate]% annuity annually. Remainder to [children/trusts] after 20 years. Taxable gift at funding: $[Y] (approximately [Z]% of funding value)."
- **Why quantification**: Gift tax savings (FMV - lead PV); projected wealth transfer above §7520 rate; charitable deduction for grantor variant if applicable.
- **Trade-off statement**: Irrevocable. 20-year term commitment. Charitable payments must be made even in bad years. Trust performance uncertain. Complex administration.
- **Action items**:
  - Estate attorney engagement
  - Asset selection and appraisal
  - Trust formation
  - Funding
  - Form 709 gift tax return preparation
  - Annual administration setup
- **Deadline**: Formation typically 60-120 days; funding before Dec 31 for current-year

### In the Excel model

- **Tax Projection tab**: Any current-year tax impact (grantor CLT deduction only)
- **Multi-Year Projection**: 20-30 year CLT trajectory
- **Strategies tab**: row for "CLT" with transfer tax savings + projected wealth to family
- **Scenario Comparison**: CLT vs. direct gift vs. GRAT vs. other wealth transfer strategies
- **Notes tab**: Trust type; payout; §7520 rate; term; beneficiaries; remainder amount calculation

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — estate attorney engaged; Rev. Proc. sample forms referenced?]`
- `[REVIEW: framing — CLT vs. GRAT vs. IDGT sale; best structure for client situation?]`
- `[REVIEW: quantification — §7520 rate current; PV calculation methodology?]`
- `[REVIEW: scope — grantor vs. non-grantor CLT; client's income tax picture?]`
- `[REVIEW: authority — GST tax planning for multi-generational transfers?]`

### Template language

> **Establish 20-year Charitable Lead Annuity Trust (CLAT) funded with $5,000,000 of your concentrated stock position**. The trust pays the [Family Foundation / DAF] $300,000 annually (6% annuity) for 20 years. Remainder at year 20 passes to your children's continuing trusts.
>
> **Gift tax value at funding (January 2026, §7520 rate 5.0%)**:
> - Present value of charitable lead interest: approximately $3,700,000
> - Taxable remainder gift: approximately $1,300,000
> - Federal gift tax impact: $520,000 (using remaining lifetime exemption) OR $0 if remaining exemption covers
>
> **Projected wealth transfer to children**: If trust achieves 7% average annual return over 20 years (historical market proxy):
> - Trust value at year 20 end: approximately $11,800,000
> - Less charitable distributions over term: approximately $6,000,000
> - Net remainder to children: approximately $17,800,000
>
> **Effective transfer tax rate**: $520,000 of gift tax for $17.8M ultimate transfer = 2.9% effective rate (vs. 40% direct gift).
>
> **Charitable benefit**: Family foundation receives $6M over 20 years — meaningful funding for ongoing philanthropic activity.
>
> Trade-off: irrevocable commitment. Charitable payments required annually regardless of trust performance. 20-year horizon. Family governance of foundation sustained over term.

## Update status

| Verification | Date | Source |
|---|---|---|
| §170(f)(2)(B) grantor CLT rules | Unchanged 2026-04 | Statutory |
| §2055(e)(2)(B) estate tax CLT rules | Unchanged 2026-04 | Statutory |
| §2522 gift tax CLT rules | Unchanged 2026-04 | Statutory |
| §642(c) trust-level charitable deduction | Unchanged 2026-04 | Statutory |
| §7520 rate (monthly) | Published monthly | IRS |
| Rev. Proc. 2007-45/46 CLAT sample forms | Operative 2026-04 | IRS |
| Rev. Proc. 2008-45/46 CLUT sample forms | Operative 2026-04 | IRS |
| Estate exemption $15M permanent | Verified 2026-04 | P.L. 119-21 |
| GST tax rate 40% | Unchanged 2026-04 | §2641 |
| OBBBA charitable deduction mechanics (floor/cap for grantor CLT) | Verified 2026-04 | P.L. 119-21 |

**Last full review**: 2026-04 (Sprint 7 — initial build)

**Next review trigger**: §7520 rate swings; IRS guidance on CLT mechanics; estate tax legislation changes
