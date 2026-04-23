---
strategy: Defined Benefit / Cash Balance Plan Overlay
category: core
authority:
  - IRC §401(a) — qualified plan requirements
  - IRC §404 — employer deduction limits
  - IRC §404(a)(7) — combined DB + DC deduction limit
  - IRC §412 — minimum funding standards
  - IRC §415(b) — DB annual benefit limit ($280,000/year at retirement for 2026; $275,000 for 2025; indexed per Rev. Proc. 2025-32)
  - IRC §401(a)(17) — compensation cap ($360,000 for 2026; $350,000 for 2025)
  - IRC §436 — benefit restrictions (underfunded plans)
  - ERISA Title I — fiduciary standards
  - Pension Protection Act of 2006 — minimum funding reforms
  - SECURE Act (2019) — small plan delayed funding options
  - SECURE 2.0 Act (2022) — various technical changes
  - One Big Beautiful Bill Act (OBBBA), P.L. 119-21 (2025) — no direct §401/§415 amendment
  - IRS Notice 2025-67 (2026 retirement plan limits)
  - IRS Rev. Proc. 2025-32 (2026 indexed amounts)
  - Treas. Reg. §1.401-4 (nondiscrimination), §1.410(b)-1 through -10 (coverage), §1.401(a)(26)-1 (participation minimum)
applies_when:
  - net_business_income >= $250000 (consistent for 5+ years preferred)
  - owner_age >= 40 (younger ages compress benefit; older more valuable)
  - cash_flow_supports_required_funding: true
  - has_solo_401k_or_capacity_to_add: true
  - no_or_few_non_spouse_employees: true (or willing to fund equivalent benefit for them)
earliest_actionable_quarter: Q1 (preferred for analysis; next-year implementation)
latest_actionable_quarter: Q3 (plan must exist by year-end for that year's contribution)
typical_savings_range: $20000 - $120000 (annual tax savings from contribution)
typical_savings_as_pct_of_income: 5% - 25%
savings_formula: |
  Annual contribution × (federal marginal rate + state rate + FICA-Medicare savings on equivalent W-2 substitution)
  
  Contribution amount determined by actuarial valuation; primary drivers:
    - Owner's age (older = larger required contribution to fund target benefit)
    - §401(a)(17)-capped compensation (averaged over highest 3 consecutive years for DB; current-year for Cash Balance)
    - Targeted retirement age (typically 62 or 65)
    - Plan design (DB vs. Cash Balance vs. hybrid)
    - Actuarial assumptions (interest rate, mortality table)
  
  Typical 2026 contribution ranges:
    Age 40, comp $360K cap: $30K-$60K
    Age 45, comp $360K cap: $50K-$100K
    Age 50, comp $360K cap: $100K-$180K
    Age 55, comp $360K cap: $150K-$240K
    Age 60, comp $360K cap: $200K-$300K
    Age 65, comp $360K cap: approaches §415(b) cap of $280K/year benefit
  
  Combined DB + Solo 401(k) maximum (owner-only, high-earning):
    DB: per actuarial (capped by §415(b) benefit → translates to actuarial contribution)
    Solo 401(k): capped at combined §404(a)(7) deduction limit when DB is PBGC-covered or plan meets exception
  
  §404(a)(7) combined deduction limit:
    General rule: 25% of eligible compensation aggregated across DB + DC
    EXCEPTION: For PBGC-covered plans, only the DC-side contributions count against 25%
    EXCEPTION: For plans with certain minimum required contributions, 6% of comp rule applies to DC
feasibility: medium (requires actuary, recordkeeper, compliance burden)
implementation_complexity: high (annual actuarial valuation, Form 5500 long-form if non-spouse employees, PBGC coverage evaluation, coverage and nondiscrimination testing)
audit_risk: low (well-established structures when properly administered); medium if terminated early or if coverage rules fail
requires_documentation:
  - Plan document (drafted by ERISA counsel or specialty TPA; cannot be DIY prototype for DB)
  - Adoption agreement
  - Annual actuarial valuation report (Schedule SB for the 5500)
  - Summary Plan Description (SPD)
  - Participant annual statements
  - Form 5500 (long form if non-spouse employees; 5500-EZ for owner/spouse only)
  - Funding contributions deposited by tax filing deadline with extensions
  - Coverage and nondiscrimination testing results (when non-owner employees exist)
  - §436 benefit restriction analysis if underfunded
requires_partner_signoff: true (high-stakes recommendation; significant ongoing financial commitment)
requires_separate_engagement: true (plan administration separate from tax engagement; TPA/actuary relationship)
typical_separate_engagement_fee: $3000 - $8000 annually for TPA/actuary + $2000-$5000 setup
compatible_stacks:
  - Solo-401k-SEP-Comparison (Solo 401(k) + DB plan is the standard high-earner combination)
  - S-Corp-Reasonable-Comp (DB benefit scales with compensation → coordinate W-2 level with DB design)
  - QBI-Optimization (DB contribution lowers taxable income; powerful QBI phase-out restoration)
  - Spousal-Employment (employing spouse creates separate DB participant + contribution capacity)
  - Cost-Segregation (real estate owners stacking bonus depreciation + DB for maximum deferral)
incompatible_with:
  - SEP IRA (single-plan rule; replace SEP with Solo 401(k) if combining with DB)
  - SIMPLE IRA (same single-plan rule as SEP)
prerequisites:
  - Stable, predictable business income for 5+ years
  - Cash flow tolerance for mandatory minimum funding
  - Owner intent to maintain plan 5+ years (early termination triggers IRS scrutiny)
  - Acceptance of ERISA fiduciary obligations
industries_best_fit:
  - doctors-medical (highest typical use case; stable income, high margins)
  - software-ai-companies (owner-only or small team, consistent high income)
  - investment-firms (high-income RIA owners, single-owner or few-partner structures)
  - professional-services (law, consulting, accounting firms — when owner-only or partnership-of-equals)
  - real-estate-owners (with consistent rental income stream)
industries_not_applicable:
  - early-stage businesses with volatile income
  - businesses with many non-owner employees (cost to cover them often eliminates owner benefit)
  - businesses planning exit within 5 years (early termination complications)
state_specific_considerations: false (federal qualified plan rules uniform)
path_b_compensation_tier: 0 (no Priceless compensation on TPA/actuary referrals; neutral recommendation)
---

# Defined Benefit / Cash Balance Plan Overlay

The most powerful retirement contribution strategy available. For high-income owners ages 45+, can shelter $100K-$300K+ annually beyond Solo 401(k) caps. Also the most complex, with mandatory funding obligations and ERISA compliance burden.

## When this is the right answer

All of the following should be true before recommending:

- **High income**: business net > $300K consistently for 5+ years (demonstrates capacity to fund)
- **Age 45+**: younger owners compress actuarial benefit; strategy works but scale is smaller
- **Cash flow margin**: can fund $50K-$200K annually without straining operations
- **Commitment horizon**: willing to maintain plan 5+ years (early termination attracts IRS review)
- **Employee structure**: either no non-spouse employees, or small number who can be covered at lower benefit tier without destroying the owner's benefit

Any NO on these = strategy probably isn't right. Stop, re-evaluate, consider Solo 401(k) alone or other approaches.

## DB vs. Cash Balance — which design

### Traditional Defined Benefit

- **Benefit defined** as a monthly payment at retirement (e.g., "$10,000/month starting age 62")
- **Contribution calculated** actuarially each year to fund toward that target benefit
- **Older owners benefit more**: fewer years to fund the same target = larger required contribution
- **Investment risk** on plan sponsor (assumed return vs. actual return determines next-year contribution)
- **Contribution volatility**: market downturns require larger contributions to stay funded

### Cash Balance

- **Benefit defined** as a hypothetical account balance with annual pay credit + interest credit
- **Example**: "Your account credited annually with 5% of pay plus 4% interest on balance"
- **More predictable contributions** year-over-year
- **Easier to communicate** to non-owner employees if any
- **Investment risk** on plan sponsor but with smoother experience than traditional DB
- **Credits defined by plan** — not subject to market volatility of investments

### Priceless default: Cash Balance

For most Priceless clients, Cash Balance is preferred. Reasoning:
- Contribution predictability matters for cash planning
- Communication to employees (if any) is simpler
- TPA administration is typically less expensive
- Outcome is similar to DB with less volatility

Use traditional DB only when:
- Owner strongly prefers the classic pension structure
- Maximum deduction is the priority (DB can sometimes produce slightly larger contribution for same benefit target)
- Specific state tax reasons favor DB (rare)

## Contribution capacity scaling

Rough rules of thumb (varies by plan design and §415(b) benefit target):

| Age | Approximate annual DB/CB contribution | Plus Solo 401(k) (2026) | Combined |
|-----|-------------------------------------|------------------------|----------|
| 40 | $40K-$80K | Up to $72K | $112K-$152K |
| 45 | $60K-$130K | Up to $72K | $132K-$202K |
| 50 | $100K-$180K | Up to $80K (w/ catch-up) | $180K-$260K |
| 55 | $150K-$240K | Up to $80K | $230K-$320K |
| 60 | $200K-$300K | Up to $83K (w/ super catch-up ages 60-63) | $283K-$383K |
| 65 | Approaches §415(b) cap | Up to $80K | ~$360K+ |

Actual numbers determined by actuary based on plan design, comp, age, assumptions.

### §401(a)(17) compensation cap impact

DB benefit accruals use a compensation cap:
- 2025: $350,000
- 2026: $360,000 (per Rev. Proc. 2025-32)

Compensation above the cap doesn't increase DB benefit accrual. For owners with W-2 > $360K, the cap limits the "benefit earning" compensation but the §415(b) benefit limit is what ultimately constrains the contribution.

### §415(b) annual benefit cap

- 2025: $275,000 annual benefit at retirement
- 2026: $280,000 annual benefit (per Rev. Proc. 2025-32)

The §415(b) cap is a ceiling on the BENEFIT — the contribution flowing to support that benefit depends on age, remaining funding years, and actuarial assumptions. Older owners with fewer years to fund a $280K benefit require larger current-year contributions.

## Post-OBBBA and current law impact

### OBBBA 2025 did not amend §401/§404/§415

OBBBA P.L. 119-21 contained no direct amendments to qualified plan rules, ERISA, or retirement plan limits. The indexed amounts in Rev. Proc. 2025-32 reflect inflation adjustments under existing law, not OBBBA changes.

### Indirect OBBBA impacts on DB strategy

**QBI preservation (most important indirect impact)**:

OBBBA made §199A permanent with expanded phase-in ranges (2026 MFJ: $406K threshold with $175K phase-in to $581K). For SSTB owners (doctors, attorneys, consultants, RIAs) in this range, QBI phases out as income rises.

DB contribution is the most powerful AGI-reduction tool available:
- A $150K DB contribution for a 55-year-old physician at $550K taxable income drops TI to $400K
- Drops out of QBI phase-out entirely → full QBI deduction restored
- Combined benefit: DB deduction ($150K × 37% = $55K federal) + restored QBI ($70K × 37% = $26K) = ~$81K federal savings
- Plus state savings on both

For high-income SSTB clients, the combined DB + QBI story is often the single largest value proposition Priceless delivers.

**SALT cap phase-down**:

OBBBA's SALT cap of $40,400 (2026) phases down for MAGI > $505K. DB contribution reduces MAGI; may preserve full SALT cap for itemizers.

**Charitable 0.5% AGI floor (2026+)**:

OBBBA introduces a 0.5% AGI floor on itemized charitable deductions. Lower AGI = lower floor = more charitable deduction. Small effect but present.

**Permanent estate tax exemption at $15M**:

OBBBA made the $15M per-person estate exemption permanent (indexed). For Priceless's Full-Wealth clients considering estate strategies, DB plan assets are included in the estate. Pre-retirement death creates large untaxed plan balance subject to estate inclusion (and IRD on distribution). Estate planning coordination matters more with a large DB plan.

### SECURE 2.0 provisions relevant to DB

**Updated mortality tables and interest rates**:

DB actuarial assumptions must use IRS-prescribed mortality tables and interest rate corridors. These are updated periodically. 2026 assumptions follow Notice 2025-[XX] (TBD on exact notice number for 2026 — actuary uses current published figures).

**§401(a)(9) required beginning date**:

For post-2023 plan participants, RMDs begin at age 73 (rising to 75 in 2033). Affects withdrawal planning but not contribution strategy.

## Why this is partner-required

DB plans are major financial commitments. Required partner sign-off because:

- **Mandatory funding obligation**: once plan adopted, minimum contributions are required regardless of business performance
- **Termination penalties**: abandoning plan within 5 years triggers §411(d)(6) anti-cutback issues, PBGC premiums (if applicable), and potential nondiscrimination testing issues
- **Compliance burden**: actuarial valuation, 5500 filing, recordkeeping, fiduciary obligations
- **Coverage rules**: §410(b) coverage and §401(a)(26) participation requirements get complex when non-owner employees exist
- **Nondiscrimination testing**: §401(a)(4) testing can fail if plan design is too owner-favored
- **Client commitment**: client must understand the multi-year obligation they're signing

Partner verifies: client truly fits the profile, cash flow sustains funding, client has been educated on the commitment, TPA relationship is established.

## Implementation timeline

### Year before adoption (Q3-Q4)

1. **Q3**: Identify candidate during annual planning. Run preliminary projection of contribution capacity at current age and various benefit target levels.
2. **Q3**: Discuss with client — explain the commitment, run combined DB + Solo 401(k) model
3. **Q4**: If client proceeds, refer to specialty TPA/actuary. Priceless does not run plans internally.
4. **Q4 (before Dec 31)**: TPA designs plan; plan document drafted; client signs adoption agreement
5. **December 31**: Plan must exist. No retroactive adoption.

### Adoption year

1. **Q1 following year**: TPA completes actuarial valuation for prior year
2. **Q2-Q3**: Priceless coordinates funding — contribution by tax filing deadline (Sept 15 S Corp; Oct 15 if extended)
3. **Q3-Q4**: Form 5500 filing
4. **Ongoing**: annual review at Q3 to confirm design still fits

### TPA selection (Priceless does not run DB plans)

Priceless refers to qualified specialty TPAs. Criteria:
- Credentialed actuary (ASA or EA) on staff
- Small-plan focus (preferably < 25 participants)
- ERISA legal capability or retained counsel
- Track record with similar-size plans
- Transparent fee structure

Priceless does NOT accept referral fees from TPAs (conflict of interest). Referral based solely on client fit and TPA quality.

## Stacking with Solo 401(k) (the standard combination)

This is the standard high-income retirement stack (2026 amounts, owner-only):

**Without DB**: Solo 401(k) alone
- Employee deferral: $24,500
- Employer contribution: 25% × W-2 = up to $72K §415(c) cap
- Total: up to $72,000 (or $80K with age 50+ catch-up)

**With DB stack**:
- DB: $100K-$280K (actuarial, based on age)
- Solo 401(k) employee deferral: $24,500
- Solo 401(k) employer contribution: reduced to 6% of comp when §404(a)(7) combined limit applies (unless PBGC-covered plan or single-employer exception)

The 6% Solo 401(k) employer contribution in stacked design is a deliberate choice. §404(a)(7) limits combined DB + DC employer deduction to 25% of compensation (aggregated), with exceptions:

- PBGC-covered plans get more capacity (26+ participants required for PBGC coverage)
- Single-employer non-PBGC plans: 6% DC allocation when combined with DB

The TPA designs around this. Typical owner-only result at age 50, comp $360K:
- DB: $150,000
- Solo 401(k) deferral: $32,500 (with age 50+ catch-up)
- Solo 401(k) employer: $21,600 (6% of $360K)
- **Combined: $204,100 annually**

## Stacking with QBI (high commercial value)

For high-income SSTB clients (physicians, attorneys, RIA owners), DB contribution is the most reliable way to drop taxable income below the §199A phase-out end and restore the QBI deduction.

Worked example:

**Client**: 52-year-old solo physician
**Projected 2026 net business income**: $600K
**Projected 2026 taxable income (before strategies)**: $550K
**Filing**: MFJ

QBI posture without strategies:
- SSTB; MFJ taxable income $550K
- Phase-in range: $406K-$581K
- 82% through phase-in range ($550K-$406K)/($581K-$406K)
- QBI deduction: 18% of maximum (approximately)
- On $600K QBI: 18% × 20% × $600K = $21,600 QBI deduction

QBI posture with $150K DB contribution:
- Taxable income drops to $400K (below threshold)
- Full QBI deduction: 20% × $600K (capped by 20% of taxable income, if lower) = $80K QBI deduction
- Increase: $58,400 of restored QBI deduction

Total federal benefit:
- DB contribution deduction: $150K × 37% = $55,500
- Restored QBI: $58,400 × 37% = $21,600
- **Combined federal savings: $77,100**

State savings additive (e.g., California 9.3% bracket: $150K + $58K = $208K × 9.3% = $19,344)

Total benefit: **$96,000+ for one year**. Multiply over 10-15 years of plan operation: $1M+ deferred tax.

This is why DB + QBI is the flagship recommendation for Full-Wealth tier physician/attorney clients.

## Stacking with S-Corp-Reasonable-Comp

DB benefit accruals scale with compensation (capped by §401(a)(17) at $360K in 2026). Owner reasonable comp decision interacts with DB design:

- Higher W-2: larger §401(a)(17)-limited pay → larger DB contribution capacity → more tax deduction
- But higher W-2 also means more FICA paid
- Optimization: set W-2 at the level that maximizes COMBINED DB + Solo 401(k) contribution net of FICA cost

Typical high-income S Corp + DB design:
- W-2 set at or slightly above $360K (utilizes full §401(a)(17) cap for DB benefit)
- Solo 401(k) employee deferral + 6% employer
- DB contribution at actuarial maximum
- Remaining business profit flows as distribution (no FICA)

For $1M+ net business income, this pattern is common.

## Stacking with Spousal-Employment

Employing spouse at reasonable comp makes spouse a plan participant. Separate DB accrual + Solo 401(k) for spouse creates additional contribution capacity.

Mechanics:
- Spouse must be bona fide employee (performing real work, reasonable comp)
- Separate Solo 401(k) contribution within spouse's §415(c) limit
- Separate DB accrual based on spouse's compensation and age
- Combined household retirement contribution capacity can double

Caution: spouse must be real employee. Sham employment fails scrutiny (RCReports benchmark needed for spouse as well).

## Stacking with Cost-Segregation (real estate owners)

Real estate owners doing cost seg studies generate large passive losses (non-active unless REPS qualified) or active losses (with REPS). For REPS-qualified owner with significant cost seg bonus depreciation:

- Cost seg in year 1 produces $200K bonus depreciation (active loss under REPS)
- Offsets $200K of ordinary income
- Combined with DB contribution $100K: total $300K reduction in taxable income
- For 37% bracket owner: $111K federal tax savings in year 1

This is the wealth-building stack for Full-Wealth real estate investors.

## Interaction with other strategies

### Incompatible with SEP IRA

SEP IRA and DB plan are both §404 plans, but §404(a)(6) single-plan rule prohibits deducting contributions to both a SEP (which is treated as a simplified §401(a) plan) and a regular qualified plan for the same employer.

Practical rule: replace SEP IRA with Solo 401(k) before adopting DB plan. The rollover is straightforward; SEP assets roll to Solo 401(k) without tax consequence.

### Incompatible with SIMPLE IRA

Same single-plan rule applies. SIMPLE IRA participants must exit SIMPLE before DB adoption.

### Works with other strategies

- **HSA**: entirely separate vehicle; stacks additively
- **Backdoor Roth IRA**: DB plan is not an IRA; no pro-rata interference
- **529 contributions**: unrelated; stacks freely
- **Charitable bunching**: reduces itemized deductions but doesn't affect DB
- **Cost seg / bonus depreciation**: direct complement for real estate owners

## When to refer rather than recommend

Some DB situations are too complex for Priceless to lead even with TPA support:

- **25+ employees**: PBGC coverage triggers complex premium calculations and reporting
- **Multiple owners with conflicting goals**: plan design must accommodate different ages/income; often fails testing
- **Existing plans with frozen benefits to migrate**: requires ERISA counsel and sophisticated actuarial work
- **Plan termination**: termination process has specific sequence requirements; miss a step and plan isn't cleanly terminated
- **M&A context**: seller's plan may be assumed/terminated; requires coordination with buyer's counsel
- **Underfunded plans (§436 restrictions)**: benefit restrictions apply; requires deep actuarial work
- **Non-discrimination testing failures**: requires redesign or corrective action

For these, refer to a specialty firm with actuarial + ERISA legal capability (not just a TPA).

## Common errors we inherit

- **Plan adopted but not funded** — §4971 excise tax 10% of funding deficiency, rising to 100% if not corrected
- **Plan design doesn't match owner's age/income trajectory** — leaves money on the table OR requires unsustainable funding (wrong benefit target for age)
- **Solo 401(k) and DB plan limits not coordinated** — §404(a)(7) combined 25% exceeded, requiring corrective distributions from DC side
- **Coverage rules failed when employees added** — §410(b) ratio percentage test or average benefit test fails; expensive remediation via top-heavy contribution or plan termination
- **5500-EZ not filed** when required (owner-spouse plan assets > $250K) — per-day penalty ($250/day max $150K uncorrected)
- **§401(a)(4) nondiscrimination test failure** — plan over-benefits HCEs; requires redesign or corrective contribution
- **§415(b) cap exceeded** in actuarial target — benefit accrual reduced; plan restated
- **Investments not segregated** — plan assets commingled with owner's personal or business assets; prohibited transaction (§4975)
- **Wrong mortality table used** — actuarial calculation diverges from IRS-required tables; 5500 correction

## Audit posture

### Risk profile: low when properly administered

IRS challenge risk is LOW when:
- Plan is designed by credentialed actuary
- Actuarial valuation completed annually
- Funding contributions timely
- 5500 filed
- Coverage and nondiscrimination tests pass
- No prohibited transactions

### Audit trigger scenarios

- **Early plan termination** (within 5 years): IRS reviews carefully for abusive patterns (establish, deduct, terminate)
- **Consistent underfunding**: §4971 excise tax issues attract attention
- **Top-heavy determination ignored**: if owner account balance > 60% of total plan assets, top-heavy rules apply
- **Controlled group / affiliated service group issues**: owner has multiple businesses; aggregation rules missed
- **Non-discrimination testing failure**: if discovered post-filing, requires corrective action

### Defense considerations

- **Retain actuarial reports permanently**: prior-year valuations are part of the plan's history
- **Document coverage and nondiscrimination testing** each year even if not required to report
- **Keep plan document amendments** — any change to benefit formula or eligibility must be executed formally
- **Trustee records**: if owner is trustee, maintain records of plan asset management
- **Participant communications**: keep copies of SPD, enrollment materials, annual statements
- **Annual valuation**: even when low participant count, the annual actuarial report is required

### Statute of limitations considerations

- Plan-level issues: 3-year statute on return filing; but issues with plan qualification can affect multiple years if not caught
- Nondiscrimination failures: can cause plan disqualification retroactively, in extreme cases
- §4975 prohibited transactions: carry ongoing 15% excise tax until corrected

## Deliverable points (documentation skill handoff)

When a DB/CB recommendation appears in a client memo, the documentation skill should produce:

### In the narrative memo

- **Recommendation statement**: "Establish Cash Balance Plan by December 31, [Year]. Annual contribution targeted at $[X] based on actuarial design. Coordinates with existing Solo 401(k) (now adjusted to $[Y] to fit §404(a)(7))."
- **Why quantification**: Federal savings $[X × federal marginal rate]; state savings; note QBI restoration if applicable. For full benefit picture, reference Scenario Comparison tab showing base case vs. with-DB.
- **Trade-off statement**: Mandatory annual funding obligation. Minimum 5-year commitment (early termination attracts IRS review). ERISA fiduciary obligations. Annual actuarial + TPA fees $3K-$8K. Liquidity reduced (funds locked until age 59½ or plan termination).
- **Action items**: 
  - Immediate: confirm client commitment; review cash flow analysis
  - Pre-Dec 31: TPA referral; plan design; plan document execution; plan adoption
  - Post year-end: actuarial valuation (by TPA); funding by tax deadline
- **Deadline**: December 31, [Year] for plan existence

### In the Excel model

- **Tax Projection tab**: DB contribution as above-the-line deduction in Adjustments section (separate row from Solo 401(k))
- **Strategies tab**: row for "DB/CB Plan Adoption" with federal/state savings + QBI restoration value (where applicable)
- **Actions tab**: TPA referral; plan adoption by Dec 31; funding milestone
- **Scenario Comparison tab** (Comprehensive+): base case vs. with-DB comparing effective tax rate, AGI, QBI deduction
- **Notes tab**: methodology note on actuarial dependency; partner sign-off requirement; TPA referral standard

### In partner-review [REVIEW] callouts

- `[REVIEW: authority — client profile fits DB commitment? Age, income stability, horizon verified?]`
- `[REVIEW: quantification — actuarial preliminary at $[X]; TPA to finalize; memo reflects estimate?]`
- `[REVIEW: scope — TPA referral. Client aware of ongoing fees $3K-$8K/yr?]`
- `[REVIEW: framing — soft-introduction or direct recommendation? Client's first exposure to DB?]`

### Suggested template language

For client memo Recommendation section (Full-Wealth tier):

> **Recommendation: Adopt Cash Balance Plan by December 31, 2026**
>
> **What**: Establish a Cash Balance retirement plan to stack with your existing Solo 401(k), increasing your annual pre-tax retirement contribution from $80,000 to approximately $230,000.
>
> **Why it matters**: Combined federal + state tax savings of $86,000/year at your current bracket. Over a 10-year plan lifetime, deferred tax of $860,000+. Additionally, the contribution drops your taxable income below the §199A phase-in threshold — restoring your full QBI deduction that is currently phased out. The QBI restoration alone adds $22,000 of federal savings.
>
> **How it works**: A Cash Balance plan is a type of defined benefit plan where your contribution is determined actuarially based on your age and compensation, designed to fund a target retirement benefit. For someone in your situation (age 52, $600K business income), the actuarial contribution is approximately $150,000/year. Combined with your Solo 401(k) at $80,000 (reduced slightly from current to fit combined deduction rules), total annual pre-tax retirement contribution is $230,000.
>
> **Trade-off**: Mandatory funding — if adopted, you commit to annual contributions regardless of business performance. Plan must be maintained at least 5 years to avoid IRS scrutiny of early termination. ERISA fiduciary obligations apply. Annual TPA/actuary fees of $4,000-$6,000 plus Priceless coordination.
>
> **Who does what**: We refer you to [TPA Firm Name] — they're the actuary and recordkeeper. They design the plan, draft the plan document, and handle annual valuations. Priceless coordinates with them on funding timing and integrates with your tax filing. You sign adoption documents.
>
> **When**: Plan adoption by December 31, 2026. First actuarial valuation and funding by tax filing deadline (September 15, 2027, or October 15 with extension).

## Update status

| Verification | Date | Source |
|---|---|---|
| 2026 §415(b) annual benefit cap ($280,000) | Verified 2026-04 | IRS Notice 2025-67; Rev. Proc. 2025-32 |
| 2026 §401(a)(17) compensation cap ($360,000) | Verified 2026-04 | IRS Rev. Proc. 2025-32 |
| 2026 Solo 401(k) §415(c) ($72,000) | Verified 2026-04 | IRS Notice 2025-67 |
| §404(a)(7) combined DB + DC 25% rule | Current as of 2026-04 | IRC §404(a)(7); unchanged |
| OBBBA non-amendment of §401/§404/§415 | Verified 2026-04 | P.L. 119-21 full text review |
| QBI interaction with DB (2026 phase-in $406K-$581K MFJ) | Verified 2026-04 | OBBBA §70105 + Rev. Proc. 2025-32 |
| SECURE 2.0 provisions applicable to DB | Reviewed 2026-04 | SECURE 2.0 Act of 2022; various technical provisions |

**Last full review**: 2026-04 (Sprint 5.5 rebuild)
**Next review trigger**: Publication of 2027 indexed amounts (IRS Notice, typically October/November 2026); SECURE 3.0 legislation if enacted; major mortality table or interest rate assumption updates
