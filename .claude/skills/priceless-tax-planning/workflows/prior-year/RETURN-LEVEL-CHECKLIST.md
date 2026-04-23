---
parent_workflow: workflows/prior-year/SKILL.md
purpose: Line-by-line inspection of a specific prior-year return against common miss patterns
user: offshore staff for pass 1; senior reviewer for sign-off; 1-2 hours per return
input: full 1040 + all K-1s + supporting schedules + prior year comparison
output: documented list of potential adjustments with estimated tax impact
---

# Return-Level Amendment Checklist

Run this after SCREENING-MATRIX has classified a client as Tier 1 or Tier 2. This is the actual line-by-line return inspection.

**Structure**: Organized by return section (not by strategy), because a reviewer works through the return sequentially. Each item identifies (a) what to look for, (b) how to verify it's a real issue, (c) approximate tax impact per finding, (d) cross-reference to strategy file for mechanics.

## Setup — before starting review

- [ ] Pull complete 1040 including all schedules and statements
- [ ] Pull all K-1s issued to client (business, trust, partnership)
- [ ] Pull supporting documents: W-2s, 1099s, depreciation schedules, closing statements for real estate
- [ ] Pull prior year's 1040 and subsequent year for continuity / carryforward / basis tracking
- [ ] Confirm SOL status and time remaining
- [ ] Reference SCREENING-MATRIX hypotheses — start with those lines first

## Section 1 — Filing status and personal information

- [ ] **Filing status optimization**: Was MFS considered where one spouse has significant medical deductions, SALT limits, or student loan income-driven repayment? Usually not beneficial but worth confirming.
- [ ] **Dependent status**: Are all qualifying dependents claimed? Missed dependents affect credits, ACA subsidies, and standard deduction.
- [ ] **State residency claim**: Does the federal return align with state returns filed? Mismatch flags residency uncertainty.

## Section 2 — Income (Form 1040 Lines 1-11)

### Wages (Line 1)

- [ ] **S corp owner reasonable compensation**: Compare W-2 wages from client's S corp against net business income. Target: 40-60% of net for service businesses, 20-40% for product/retail. If outside bounds, flag.
  - Too low: Under-reasonable-comp audit risk; may need FORWARD correction, not amendment
  - Too high: Over-payroll-tax; recoverable via amendment if clearly documentable
  - Tax impact: 15.3% FICA on the difference × number of years
  - Reference: `tax-strategy/strategies/S-CORP-REASONABLE-COMP.md`

- [ ] **Tips / overtime (TY 2025+ only)**: For TY 2025+ returns, was federal OBBBA TIPS deduction claimed? Was overtime premium deduction claimed? For service workers, this is often missed.
  - Note: Some states don't conform (MO, KY, others) — addback required on state return
  - Tax impact: Up to $25K tips + $12.5K overtime × federal marginal rate

### Interest and dividends (Lines 2-3)

- [ ] **Tax-exempt interest treatment**: Muni bond interest correctly on Line 2a? State tax treatment correct (in-state vs. out-of-state bonds)?
- [ ] **Qualified dividends**: Are LTCG rates applied correctly on Schedule D flow-through?
- [ ] **§1411 NIIT**: Is NIIT calculated on appropriate income? Over-stated NIIT is common error (forgetting business income exclusion for active owners).

### Business income (Line 3 / Schedule C or E)

This is where the majority of recoverable amendments live. Spend time here.

- [ ] **Schedule C vs. Schedule E classification**: Is short-term rental (<7 day average stay) correctly on Schedule C with self-employment tax, or on Schedule E avoiding SE tax?
  - Reference: `tax-strategy/strategies/REAL-ESTATE-STR.md`
  - Tax impact: Varies; major impact if SE tax was incorrectly applied to passive activity

- [ ] **§199A QBI deduction**: Is QBI claimed? Is it maximized?
  - Check aggregation election — multiple pass-throughs combined?
  - Check SSTB classification — was business correctly categorized?
  - Phase-in math: Did prior CPA handle W-2 wages and UBIA correctly above threshold?
  - Tax impact: Up to 20% of QBI × marginal rate; can be $20K-$100K+ for $500K+ income clients
  - Reference: `tax-strategy/strategies/QBI-OPTIMIZATION.md`

- [ ] **PTET election status**: Did the pass-through make a PTET election in the tax year? Check K-1 for credit flow-through.
  - If state allowed retroactive election or extended deadline for the TY, amendment may be possible
  - If election was made at entity but owner forgot to claim credit on personal return, simple 1040X
  - Tax impact: State tax × federal marginal rate (federal SALT workaround value)
  - Reference: `tax-strategy/strategies/PTET-ELECTION-BY-STATE.md` + state-specific file in `states/`

### Capital gains (Line 7 / Schedule D)

- [ ] **§1202 QSBS qualification missed**: Client sold C corp stock held 5+ years. Was §1202 exclusion claimed? Check 5-year hold, active business, original issue.
  - Tax impact: Up to 100% exclusion of gain up to $10M or 10x basis. Can be $500K-$3M+ recovered.
  - Reference: `tax-strategy/strategies/QSBS-SECTION-1202.md`

- [ ] **Installment sale election**: Sale reported as current gain that could have been §453 installment?
  - Tax impact: Deferral value; time value of money
  - Reference: `tax-strategy/strategies/INSTALLMENT-SALE-STRUCTURE.md`

- [ ] **§1031 like-kind exchange**: Real property sale with reinvestment that wasn't structured as §1031?
  - Only fixable if within 180 days of original sale — usually too late for prior-year amendment
  - Document and note for forward planning

- [ ] **Wash sale adjustments**: Were wash sale rules correctly applied? Look for brokers-provided 1099-B basis adjustments.

- [ ] **State capital gains treatment**: Does state allow exclusion or preferential treatment not taken?
  - MO 100% capital gains subtraction (TY 2025+)
  - OK 100% subtraction for >5yr OK property
  - WI 30% general exclusion / 60% farm
  - MT 3.0%/4.1% preferential LTCG rates + 2% capital gains credit
  - NM 40% of up to $1M for NM business
  - AR 50% general exclusion

### Rental real estate (Schedule E)

- [ ] **Real Estate Professional Status (REPS)**: Does the taxpayer spend >750 hours AND >50% of personal services in real estate trades/businesses? If REPS qualifies, rental losses are non-passive and deductible against other income.
  - Was REPS elected and documented? Most commonly missed.
  - Tax impact: Unused rental losses released — can be $50K-$200K+ × marginal rate
  - Reference: `tax-strategy/strategies/REAL-ESTATE-PROFESSIONAL-STATUS.md`

- [ ] **Short-term rental material participation**: <7 day average stays don't require REPS for non-passive treatment; only material participation (§469(c)(7) vs. 469(h)).
  - Tax impact: Same as REPS release
  - Reference: `tax-strategy/strategies/REAL-ESTATE-STR.md`

- [ ] **Cost segregation study**: Was one performed on properties acquired in the tax year? Straight-line depreciation of 27.5 / 39 years is almost always suboptimal.
  - If missed: Form 3115 catch-up in current year captures all prior-year missed depreciation. This is NOT an amendment — it's a method change. But flag as opportunity.
  - Reference: `tax-strategy/strategies/COST-SEGREGATION.md`

- [ ] **§199A rental safe harbor**: Rental with 250+ hours of services can qualify for QBI. Often missed.

- [ ] **Passive activity loss (§469) grouping election**: Multiple rental properties grouped optimally?

### K-1 flow-through income

- [ ] **K-1 basis tracking**: Is the client's basis in the entity being tracked? Distributions in excess of basis = capital gain. Losses in excess of basis = suspended.
  - Reference: `tax-return-analysis/BASIS-TRACKING.md`

- [ ] **§1411 NIIT on K-1 income**: Active business K-1 income is NOT subject to NIIT. Was this correctly excluded?

- [ ] **PTET credit on K-1**: If entity elected PTET, owner should claim refundable credit on personal return. Double-check flow-through.

- [ ] **§179 and bonus depreciation passed through**: Was max §179 taken at entity level, and did it flow to K-1?

### Other income (Line 8)

- [ ] **Form 1099-K and self-employment**: Side income reported correctly? Separate Schedule C / SE if business vs. hobby analysis.
- [ ] **Crypto transactions**: All disposition events reported? Form 8949 complete?
- [ ] **Foreign income**: Form 5471, 8938, FBAR — penalty-generating if missed.

## Section 3 — Adjustments to income (Schedule 1)

- [ ] **Self-employed health insurance §162(l)**: S corp owner had HI on W-2? Deduction claimed on Sch 1?
  - Reference: `tax-strategy/strategies/HEALTH-INSURANCE-S-CORP-162L.md`

- [ ] **HSA contribution**: Max contribution for coverage type ($4,300 single / $8,550 family for TY 2025, plus $1,000 catch-up 55+)?
  - Reference: `tax-strategy/strategies/HSA-OPTIMIZATION.md`

- [ ] **Retirement plan contributions**: Were max contributions made given client's structure?
  - Solo 401(k): $69K + $7.5K catch-up (TY 2024)
  - SEP: 25% of net SE earnings up to $69K
  - DB plan: Potentially $200K+ for older high-income business owners
  - Reference: `tax-strategy/strategies/SOLO-401K-SEP-COMPARISON.md`, `tax-strategy/strategies/DEFINED-BENEFIT-OVERLAY.md`

- [ ] **Half SE tax deduction**: Correctly computed?

## Section 4 — Deductions (Schedule A / Standard)

- [ ] **Standard vs. itemized optimization**: Was the better method used? For some TY 2022-2024 returns, itemizing may have been better with SALT limitations and current standard deduction levels.

- [ ] **State and local tax (SALT) cap**: At $10K pre-OBBBA. Was client properly capped? (No amendment opportunity here; just documentation check.)

- [ ] **Mortgage interest**: Tracking acquisition debt vs. HELOC usage for deductibility?

- [ ] **Charitable contributions**:
  - Was bunching considered? Multi-year bunch via DAF?
  - Was appreciated stock contribution optimal vs. cash?
  - Non-cash contribution >$500 with Form 8283?
  - Reference: `tax-strategy/strategies/CHARITABLE-BUNCHING-DAF.md`, `tax-strategy/strategies/QCD-QUALIFIED-CHARITABLE-DISTRIBUTION.md`

- [ ] **Medical expenses**: AGI threshold met? Long-term care premium deduction claimed?

## Section 5 — Credits (Schedule 3 and business forms)

### Federal credits

- [ ] **R&D Credit (§41)**: Any product development, software, engineering, process improvement activities?
  - Form 6765 for regular; or payroll tax offset election for small businesses
  - Tax impact: 6-20% of qualified research expenses × marginal rate; payroll offset up to $500K/year
  - Reference: `tax-strategy/industries/SOFTWARE-AI.md` for industry context

- [ ] **Work Opportunity Tax Credit (WOTC)**: Hired from targeted groups (veterans, SNAP, long-term unemployed, etc.)? Form 5884?

- [ ] **Disabled Access Credit / §44**: Small businesses with qualified access expenditures.

- [ ] **Employer Health Insurance Credit (small business)**: Applicable through SHOP marketplace.

- [ ] **Qualified Small Employer HRA / ICHRA**: Were these structured properly for small employers?

- [ ] **Retirement Plan Startup Credit**: Up to $5K for starting plan. SECURE 2.0 Act credits for auto-enrollment, matching.

- [ ] **Child and Dependent Care Credit**: Maximum credit claimed?

- [ ] **Foreign Tax Credit**: For international investment income.

### State credits

Reference the client's specific state file in `states/` for state-specific credit opportunities. Common missed credits:

- GA Film Tax Credit (or purchased credit)
- LA Historic Rehabilitation
- NY Brownfield, Excelsior, QETC
- CA R&D, New Employment, Competes Tax Credit
- PA R&D, Keystone Opportunity Zone
- State EITC (varies; MT doubled to 20% in 2026)

## Section 6 — Self-employment tax (Schedule SE)

- [ ] **SE tax on partnership income**: Limited partners and LLC members have nuanced SE tax treatment (§1402(a)(13)). Was correctly applied?

- [ ] **Church worker, statutory employee, ministerial**: Special rules; commonly mis-handled.

- [ ] **S corp distributions not subject to SE tax**: Confirm Schedule K-1 distributions correctly exempt.

## Section 7 — Estimated tax and withholding

- [ ] **Safe harbor calculation**: 100%/110% of prior year OR 90% of current. Was the better of the two used?

- [ ] **Underpayment penalty (Form 2210)**: Exception for annualized income? Uneven income annualization can eliminate penalty.

- [ ] **Withholding treated as paid evenly**: Strategy to place all withholding late in year if penalty exposure.

## Section 8 — Specific structure and strategy checks

### Augusta Rule §280A(g)

- [ ] Business client has legitimate home business meetings, retreats, client entertainment at residence?
- [ ] 14 days or fewer annual rental, documented with fair market comparable rates?
- [ ] Corporate meeting minutes or documentation supporting business purpose?
- [ ] Tax impact: Up to $20K-$50K rental income tax-free × marginal rate
- [ ] Reference: `tax-strategy/strategies/AUGUSTA-RULE-280A.md`

### Hiring children

- [ ] Children 7+ years old in age-appropriate business work (modeling, content creation, filing, cleaning)?
- [ ] Legitimate W-2 / 1099 with documented time and duties?
- [ ] Under $14,600 (2024 standard deduction) = $0 federal income tax for child?
- [ ] Opens Roth IRA funding opportunity for child
- [ ] Reference: `tax-strategy/strategies/HIRING-CHILDREN-LEGITIMATELY.md`

### Home office accountable plan

- [ ] Business reimburses owner for home office on accountable plan basis?
- [ ] Actual expense method (more favorable) vs. simplified?
- [ ] Reference: `tax-strategy/strategies/HOME-OFFICE-ACCOUNTABLE-PLAN.md`

### Spousal employment

- [ ] Spouse performing legitimate business services? W-2 in place?
- [ ] Enables retirement plan contributions for spouse
- [ ] Reference: `tax-strategy/strategies/SPOUSAL-EMPLOYMENT.md`

## Section 9 — Carryforwards and basis

- [ ] **NOL carryforward**: Being tracked correctly? Used optimally (can be carried forward indefinitely post-TCJA)?
- [ ] **Capital loss carryforward**: Schedule D Line 13 shows prior year carryforward?
- [ ] **Passive activity loss carryforward (Form 8582)**: Tracking by activity?
- [ ] **§1202 basis tracking**: For QSBS-eligible stock
- [ ] **AMT credit carryforward**: Less common post-TCJA but still possible
- [ ] **General Business Credit carryforward**: R&D, WOTC, etc. unused credits roll forward 20 years

Reference: `tax-return-analysis/CARRYFORWARD-TRACKING.md`, `tax-return-analysis/BASIS-TRACKING.md`

## Section 10 — State-specific review

For each state the client filed in, pull the state file from `states/` and run the state-specific checks. Common state-only opportunities:

- PTET credit flow-through (state-specific mechanics)
- State R&D credit, state historic rehab, state enterprise zone
- State capital gains exclusions (WI, MT, MO, OK, AR, NM)
- State retirement income exclusions
- State-specific depreciation (federal bonus decouplings)

## Output format for Stage 3 decision

```
Client: [Name]
Return Year: [YYYY]
Review Date: [Date]
Reviewer: [Name]

Findings:
1. [Issue — line reference — mechanism — tax impact]
2. [Issue — line reference — mechanism — tax impact]
...

Aggregate estimated recovery: $[X,XXX]

Unresolved questions requiring client input:
1. [Question]
2. [Question]

Collateral concerns:
- State amendments likely needed: [List]
- Does amendment cascade to other years: [Y/N — which years]
- Basis / carryforward adjustments: [Notes]
- Known audit risk factors: [Notes]

Recommendation to Stage 3: [PROCEED / DECLINE / SENIOR REVIEW NEEDED]
```

## Quality standard

Every finding must have:
1. Line reference in the return
2. Clear identification of the miss or error
3. Authority for the correction (code section, reg, revenue procedure, state statute)
4. Quantified tax impact (at minimum: order of magnitude)
5. Cross-reference to relevant strategy file for mechanics

If any of these are missing, the finding is not ready for Stage 3 decision.

## Common errors to avoid

- **Scope creep into current-year planning**: If you identify something valuable for the current year, note it separately and stay focused on amendment
- **Aggressive positions as findings**: If a position is debatable, flag as `PARTNER REVIEW REQUIRED`, not as a finding
- **Ignoring collateral effects**: State amendments, basis reconstruction, carryforward impacts are often the majority of work
- **Missing SOL constraints**: Always confirm time-remaining before spending hours on a review
- **Over-claiming prior CPA error**: Some decisions were judgment calls, not errors. Distinguish.
