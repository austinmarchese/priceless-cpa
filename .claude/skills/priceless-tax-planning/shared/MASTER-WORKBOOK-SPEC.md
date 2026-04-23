---
purpose: Build specification for the Priceless Master Tax Planning Workbook — detailed blueprint for Excel construction; NOT a working Excel file
user: Tony or senior staff (or delegated offshore) to build the .xlsx from this spec
deliverable: tab-by-tab specification with inputs, formulas, outputs, validation rules, and QA checks
version_target: v1.0 workbook for Q2 2026 pilot
related_files:
  - tax-projection/SKILL.md
  - tax-projection/FEDERAL-TAX-COMPUTATION.md
  - tax-projection/STATE-TAX-BASELINE.md
  - tax-projection/SAFE-HARBOR-METHODOLOGY.md
  - states/ (for state rate lookup tables)
  - workflows/qc/PARTNER-QC-CHECKLIST.md (workbook QC is Part 5 of checklist)
---

# Master Tax Planning Workbook — Build Specification

## What this document is

This is a blueprint for constructing the Priceless Master Tax Planning Workbook. It is NOT a working Excel file. It specifies exactly what each tab contains, what formulas apply, what the inputs and outputs are, and how the tabs interconnect.

A build team (Tony, senior staff, or delegated offshore) uses this spec to construct the .xlsx. Once built, the workbook becomes the core tangible deliverable for every Priceless tax planning engagement — the thing clients see, the thing partners QC, the thing that carries the numbers.

## Why spec instead of ship

Three reasons:
1. **Testability**: A spec lets the build team test every formula against known-answer scenarios. A shipped workbook without rigorous testing is worse than no workbook.
2. **Maintainability**: Tax law changes annually (brackets, phase-outs, state rates). The spec is the single source of truth for what the workbook SHOULD do, versus what it CURRENTLY does. Updates are tracked against spec.
3. **Auditability**: When a client or the IRS questions a number, the spec says what the calculation was supposed to be, and the workbook should match.

## Design principles

- **Input tabs at front**: Client-facing data entry, clear labels, validation
- **Calculation tabs hidden or protected**: Users shouldn't edit formulas
- **Output tabs as deliverables**: Presentation-quality, not working format
- **Single source of truth for rates**: One reference tab per tax year; all calcs pull from it
- **No hardcoded numbers in formulas**: Every rate / threshold / limit comes from a named reference
- **Version stamp on every tab**: Date built, TY covered, last update
- **Color coding**: Blue = input cells; white = calculation; gray = locked/reference; green = output
- **Error handling**: IFERROR wrappers; explicit "see assumption" references where inputs missing
- **Tested with scenarios**: 5 benchmark scenarios with known answers for validation

## Tab structure overview

```
Front-of-book (client-facing inputs and outputs):
  1.  COVER & INSTRUCTIONS
  2.  CLIENT PROFILE INPUTS
  3.  INCOME INPUTS
  4.  DEDUCTION INPUTS
  5.  ENTITY INPUTS (pass-through businesses)
  6.  STATE INPUTS (residency and multi-state)
  7.  STRATEGY SELECTIONS

Middle-of-book (calculations):
  8.  FEDERAL TAX CALC — Ordinary Income
  9.  FEDERAL TAX CALC — Capital Gains & NIIT
  10. FEDERAL TAX CALC — AMT
  11. FEDERAL TAX CALC — SE Tax & Additional Medicare
  12. QBI (§199A) CALCULATOR
  13. REASONABLE COMPENSATION MODEL
  14. STATE TAX CALC
  15. PTET ELECTION CALCULATOR
  16. SAFE HARBOR & ESTIMATED PAYMENTS
  17. SCENARIO COMPARISON

Back-of-book (outputs and references):
  18. TAX PROJECTION OUTPUT (presentation)
  19. STRATEGY COMPARISON OUTPUT
  20. ACTION ITEMS & DEADLINES
  21. REFERENCE — Federal Rates (TY)
  22. REFERENCE — State Rates (by state)
  23. REFERENCE — Inflation-Indexed Amounts
  24. REFERENCE — QBI Thresholds
  25. VERSION LOG
```

---

## TAB 1: COVER & INSTRUCTIONS

### Purpose

Single-page cover identifying the engagement, client, partner, TY, and workbook version. Plus instructions for use.

### Content

**Header section**:
- Priceless logo placeholder
- Client name (input)
- Engagement ID (input; references CRM)
- Tax year covered (input; TY 2025 / 2026 / 2027)
- Date workbook completed (input)
- Prepared by (input)
- Reviewed by (input)
- Partner signoff (input — required before client delivery)
- Workbook version (from VERSION LOG)

**Instructions** (locked text):
- Blue cells = inputs; do not edit anything else
- Complete tabs in order: Profile → Income → Deductions → Entity → State → Strategy
- Calculation tabs update automatically
- Review output tabs before delivery
- Partner QC required (reference PARTNER-QC-CHECKLIST)
- For multi-year projections, duplicate workbook per year

**Disclaimers**:
- Tax planning estimates; actual liability depends on filing
- Strategies require Priceless engagement letter
- Specialist engagement (attorney, CPA other than Priceless, advisor) separate
- Authority current as of [date]; verify before filing

### QA check

- [ ] All header fields populated
- [ ] Version matches VERSION LOG
- [ ] Partner signoff before release

---

## TAB 2: CLIENT PROFILE INPUTS

### Purpose

Capture client facts needed for computation: filing status, ages, dependents, residency.

### Inputs (blue cells)

| Field | Type | Validation | Notes |
|---|---|---|---|
| Primary taxpayer name | Text | Required | |
| Primary DOB | Date | Required | Used for age-based thresholds |
| Primary age at year-end | Calculation | =YEAR(TY end) - YEAR(DOB) | Auto-computed |
| Spouse name (if MFJ) | Text | Required if MFJ | |
| Spouse DOB | Date | Required if MFJ | |
| Spouse age | Calculation | | Auto |
| Filing status | Dropdown | Single / MFJ / MFS / HOH / QSS | Required |
| Dependents count | Number | ≥ 0 | |
| Dependents under 17 | Number | ≤ total dependents | Drives CTC |
| Dependent special notes | Text | Free text | Special needs, college, etc. |
| State of primary residence | Dropdown | All 50 + DC | Links to REFERENCE — State Rates |
| Part-year resident? | Y/N | | If Y: trigger multi-state |
| Additional states w/ nexus | Text | Comma-separated | Links to STATE INPUTS tab |
| 65 or older (T) | Calculation | =IF(Age≥65, Y, N) | Affects std deduction |
| 65 or older (S) | Calculation | | |
| Blind? (T) | Y/N | | Affects std deduction |
| Blind? (S) | Y/N | | |

### Named references created

- `FilingStatus` (used throughout)
- `StateOfResidence` (used throughout)
- `PrimaryAge` / `SpouseAge`

### QA check

- [ ] Filing status consistent with dependent / spouse entries
- [ ] State is valid (matches REFERENCE tab entries)
- [ ] Ages reconcile with DOB

---

## TAB 3: INCOME INPUTS

### Purpose

Capture all income components. Feeds federal and state calcs.

### Inputs

**Wages (W-2)**:
| Field | Notes |
|---|---|
| T — W-2 wages (Box 1) | Federal taxable wages |
| T — Social Security wages (Box 3) | For SE / add'l Medicare calcs |
| T — Medicare wages (Box 5) | |
| T — FIT withheld (Box 2) | Feeds safe harbor |
| T — State wages | |
| T — State withholding | |
| S — [same fields] | |
| Tips (OBBBA TY 2025-2028) | Federal deduction up to $25K; state varies |
| Overtime premium (OBBBA) | Up to $12.5K single / $25K MFJ; state varies |

**Interest and dividends**:
| Field | Notes |
|---|---|
| Taxable interest | |
| Tax-exempt interest | State treatment varies |
| Ordinary dividends | |
| Qualified dividends | LTCG rate |
| Foreign tax credit potential | |

**Business income (from pass-throughs)**:
(Link to ENTITY INPUTS tab for detailed calcs; here just summary)
| Field | Notes |
|---|---|
| Total Schedule C net | |
| Total Schedule E (passive rental) | |
| Total K-1 ordinary income (active) | |
| Total K-1 ordinary income (passive) | |
| Total K-1 interest/dividend/cap gain flow-through | |
| Total K-1 §179 / bonus depreciation flow-through | |

**Capital gains (from Schedule D summary)**:
| Field | Notes |
|---|---|
| Short-term capital gain/loss | Ordinary rates |
| Long-term capital gain/loss | LTCG rates |
| §1202 QSBS excluded gain | Not in AGI |
| §1202 taxable portion | |
| §1250 unrecaptured | 25% rate |
| Collectibles (§1(h)(5)) | 28% rate |
| §1031 deferred gain (none recognized this year) | |
| Installment sale current recognition | |
| State-specific capital gains exclusions (from state file) | |

**Retirement and other income**:
| Field | Notes |
|---|---|
| IRA distributions (taxable) | |
| Pension / annuity (taxable) | |
| Social Security benefits (gross) | Worksheet to compute taxable portion |
| Rental / royalty (from Sch E) | |
| Alimony (pre-2019 agreements) | Excluded post-2018 |
| Other income (describe) | |

**Car loan interest deduction (OBBBA TY 2025-2028)**:
| Field | Notes |
|---|---|
| Personal car loan interest | Up to specified limit; state varies |

### Calculations produced

- Federal AGI (before adjustments) — summed from above
- State AGI (with state-specific additions/subtractions from STATE INPUTS)

### QA check

- [ ] All income sources captured
- [ ] Pass-through summary reconciles to ENTITY INPUTS detail
- [ ] Capital gains character properly segregated

---

## TAB 4: DEDUCTION INPUTS

### Purpose

Capture above-the-line adjustments, standard vs. itemized, and specialty deductions.

### Inputs

**Above-the-line adjustments (Schedule 1 Part II)**:
| Field | Notes |
|---|---|
| Educator expenses | $300 max |
| HSA contribution | Cap based on coverage + age |
| Moving expenses (military only post-TCJA) | |
| Deductible part of SE tax | Auto-calc = SE tax × 50% |
| SEP / SIMPLE / Solo 401(k) contributions | Link to retirement calc |
| Self-employed health insurance (§162(l)) | S corp W-2 reported HI |
| §179 deduction (owner level) | |
| Student loan interest | Phased out by AGI |
| §199A QBI placeholder | (Computed on QBI tab) |

**Itemized deduction inputs (Schedule A)**:
| Field | Notes |
|---|---|
| Medical > 7.5% AGI | |
| State and local income tax paid | SALT capped |
| State and local property tax paid | |
| SALT cap (OBBBA: $40,400 2026; reverts $10K 2030) | Logic driven by TY input |
| SALT cap phase-out start (OBBBA: $505K MAGI) | |
| Mortgage interest — acquisition debt | Cap $750K post-TCJA |
| Mortgage interest — HELOC for acquisition | |
| Investment interest | Limited to inv. income |
| Charitable — cash (60% AGI cap) | |
| Charitable — appreciated stock (30% AGI cap) | |
| Charitable — non-cash (30% / 50% AGI) | |
| Charitable — DAF contribution | Treated as cash |
| Casualty / theft (federal disaster only post-TCJA) | |

**Standard vs. itemized decision**:
- Calculate both; take the larger
- Federal standard deduction (TY 2025/2026): reference tab
- OBBBA enhanced senior deduction: $6,000 / $12,000 TY 2025-2028

### Calculations produced

- Total adjustments (above-line)
- Itemized total
- Standard deduction
- Greater of itemized vs. standard → `DeductionToUse`

### QA check

- [ ] SALT cap correctly applied (phase-out if applicable)
- [ ] Mortgage interest within acquisition debt limits
- [ ] Charitable within AGI percentage limits
- [ ] §162(l) properly linked to entity W-2

---

## TAB 5: ENTITY INPUTS (pass-through businesses)

### Purpose

Per-entity detail for S corps, partnerships, and sole props. Drives QBI, reasonable comp, PTET calcs.

### Structure

One row per entity. Columns:

| Column | Notes |
|---|---|
| Entity name | |
| Entity type | Dropdown: S corp / Partnership / LLC-P / LLC-SMLLC / Sole prop / C corp |
| EIN | |
| State of formation | |
| States of operation | Comma-separated |
| Owner % (T) | |
| Owner % (S) | |
| Business revenue | |
| COGS / direct costs | |
| SG&A | |
| Wages paid (all employees) | |
| W-2 wages to owner-employees | For QBI + reasonable comp analysis |
| Guaranteed payments (partnerships) | |
| Depreciation (book) | |
| §179 deduction at entity | Flows to owner |
| Bonus depreciation at entity | |
| §174 R&E treatment | Capitalized / expensed |
| Net income (pre-tax) | |
| Ordinary income allocable to T | Owner % × net |
| Ordinary income allocable to S | |
| Industry classification | For SSTB check |
| SSTB (specified service trade) | Y/N |
| QBI-eligible? | Y/N based on entity + SSTB |
| State PTET elected | Y/N per state |
| State PTET paid | |
| Owner's share of PTET credit (T) | |
| Owner's share of PTET credit (S) | |
| Owner's tax basis in entity (T) | Tracking |
| Owner's tax basis in entity (S) | |
| Guaranteed payments subject to SE tax (partnerships) | |

### Calculations produced

For each entity:
- Owner's allocable ordinary income
- Owner's QBI (pre-limit)
- Owner's W-2 wages (for §199A phase-in)
- Owner's UBIA (for §199A phase-in)
- Owner's PTET credit
- SE tax exposure

Aggregated (fed to other tabs):
- Total Schedule C / E / K-1 ordinary income to TB 3 (Income Inputs)
- Total QBI to TAB 12 (QBI Calculator)
- Total W-2 wages from owner entities
- Total PTET to TAB 15 (PTET Calculator)

### QA check

- [ ] Each entity has SSTB classification
- [ ] Owner % sum to 100% if sole owner
- [ ] W-2 wages to owner present for reasonable comp analysis
- [ ] PTET election verified against state file availability

---

## TAB 6: STATE INPUTS (residency and multi-state)

### Purpose

Capture state-specific facts for primary residence + any additional nexus.

### Inputs

**Primary state**:
- (Pulled from Client Profile tab)
- State-specific modifications to federal AGI:
  - Tax-exempt interest (in-state vs. out-of-state)
  - State capital gains exclusion (from state file; e.g., MO 100%, WI 30%, OK 100% for qualifying)
  - Retirement income exclusion
  - Social Security exemption rules
  - State-specific depreciation decoupling
  - OBBBA addbacks (TIPS, overtime, car loan interest — varies by state)
  - Other state-specific modifications

**Additional states** (one row per state):
- State name
- Basis for nexus: Employment / Business / Property / Residency (part-year) / Remote work
- Source income by type
- State tax rate (top bracket) — pulled from REFERENCE
- PTET available? Pulled from REFERENCE
- Credit for tax paid to other state (OSC) available in primary state?

**Local tax inputs**:
- City / local income tax (Detroit, NYC, Portland layers, Philadelphia wage, KY occupational, OH municipal, etc.)
- Rate
- Base (residency vs. work location)

### Calculations produced

- State AGI (per state, federal AGI + state modifications)
- State tax liability (per state)
- Credit for other state tax in primary state
- Local tax liability
- Total state + local tax

### QA check

- [ ] Each state has current rate from REFERENCE
- [ ] State modifications align with state file for TY
- [ ] OSC mechanics correct (primary taxes worldwide; credits for other state tax paid)
- [ ] Local taxes captured where applicable

---

## TAB 7: STRATEGY SELECTIONS

### Purpose

User selects strategies being implemented. Each selection toggles calculations and adjusts projected tax.

### Structure

Checkbox column | Strategy | Input cells | Impact cells | Notes

Strategies to include (each with toggle):

**Core (Operators 1-7)**:
- [ ] Reasonable compensation optimization (S corp) → links to REASONABLE COMPENSATION MODEL
- [ ] QBI aggregation → links to QBI CALCULATOR
- [ ] Retirement plan contribution (401k / SEP / Solo) → deduction adjustment
- [ ] Defined benefit plan → deduction adjustment
- [ ] HSA → deduction adjustment
- [ ] S corp election analysis → triggers separate comparison
- [ ] Augusta Rule §280A(g) → income exclusion input
- [ ] Hiring children → Sch C deduction + child income worksheet
- [ ] Home office accountable plan → Sch C deduction
- [ ] Spousal employment → retirement plan opening

**Real estate**:
- [ ] Cost segregation (new acquisition) → depreciation schedule
- [ ] Cost seg catch-up (Form 3115) → §481(a) adjustment
- [ ] Real Estate Professional Status → passive loss release
- [ ] STR material participation → passive loss release

**Charitable**:
- [ ] DAF contribution → charitable deduction
- [ ] QCD → IRA exclusion

**Other**:
- [ ] Installment sale election → deferral calc
- [ ] §1202 QSBS exclusion → cap gain exclusion
- [ ] Backdoor Roth → no current impact (basis tracking)
- [ ] Mega backdoor Roth → no current impact
- [ ] Roth conversion → income addition

**PTET (by state)** — one row per state:
- [ ] Elect PTET for [state]? → moves state tax to entity + federal deduction

**Capital deployment (HNW only; gated)**:
- [ ] QOZ investment → gain deferral
- [ ] §1031 exchange → gain deferral
- [ ] CRT / CRUT → charitable deduction + gain avoidance
- [ ] Oil/gas working interest → IDC deduction
- [ ] Equipment leasing fund → passive income shelter
- [ ] Aircraft (partner signoff required)
- [ ] Movie tax credit purchase → state tax offset

### Calculations produced

For each selected strategy:
- Current-year tax impact (federal)
- Current-year tax impact (state)
- Multi-year tax impact (where applicable; to separate sheet)
- Priceless fee (if any; flat vs. contingent)
- Net benefit to client

Aggregated:
- Total estimated federal savings
- Total estimated state savings
- Total Priceless fees
- Net client benefit

### QA check

- [ ] Every selected strategy has complete input set
- [ ] Strategy combinations don't double-count benefits
- [ ] Capital deployment gate check passed (AGI, Operators 1-7 status)

---

## TAB 8: FEDERAL TAX CALC — Ordinary Income

### Purpose

Calculate federal ordinary income tax liability.

### Inputs (from other tabs)

- Federal AGI (Income Inputs + strategy adjustments)
- Standard vs. itemized (Deduction Inputs)
- QBI deduction (QBI Calculator)
- §199A dividends deduction
- Filing status (Client Profile)

### Calculations

```
Federal AGI
- Above-line adjustments
= Federal AGI adjusted
- Standard OR itemized deduction
- QBI deduction
= Federal taxable income
```

Apply federal brackets for TY (from REFERENCE — Federal Rates):

Example TY 2025 (single):
| Rate | Threshold |
|---|---|
| 10% | $0 |
| 12% | $11,925 |
| 22% | $48,475 |
| 24% | $103,350 |
| 32% | $197,300 |
| 35% | $250,525 |
| 37% | $626,350 |

[VERIFY 2026 brackets once IRS publishes inflation-adjusted]

Formula structure (per bracket):
```
= MAX(0, MIN(BracketCeiling, TaxableIncome) - BracketFloor) × BracketRate
```

Sum across all brackets = Ordinary federal tax.

### Outputs

- Ordinary federal tax
- Effective ordinary rate (Ordinary tax / Federal AGI)
- Marginal ordinary rate (bracket of the highest dollar)

### QA check

- [ ] Brackets match REFERENCE for TY
- [ ] Filing status correct brackets used
- [ ] QBI deduction properly subtracted

---

## TAB 9: FEDERAL TAX CALC — Capital Gains & NIIT

### Purpose

Calculate preferential-rate capital gains tax and Net Investment Income Tax (§1411).

### Inputs

- Short-term capital gain/loss (Income Inputs) → treated as ordinary
- Long-term capital gain (Income Inputs)
- Qualified dividends (Income Inputs)
- Taxable income (from Tab 8)
- Filing status

### Calculations

**LTCG brackets (TY 2025 example, single)**:
| Rate | Threshold |
|---|---|
| 0% | $0 - $48,350 |
| 15% | $48,351 - $533,400 |
| 20% | Above $533,400 |

Qualified dividends taxed at LTCG rates.

Formula: Stack LTCG + qualified dividends on top of ordinary taxable income; tax is the portion of LTCG that falls within each LTCG bracket.

**Special rate items**:
- §1250 unrecaptured: 25% flat
- Collectibles: 28% flat
- §1202 QSBS: excluded (already removed from gain before this calc)

**§1411 NIIT (Net Investment Income Tax)**:
- 3.8% on LESSER of (Net Investment Income) or (MAGI - Threshold)
- Thresholds: $200K single / $250K MFJ / $125K MFS
- MAGI = AGI + certain foreign / exclusion items
- NII = interest + dividends + LTCG + rental (if passive) + royalties + passive K-1 income; EXCLUDES active business income
- Deductions allowed against NII: investment expenses, portion of state tax

### Outputs

- Capital gains tax (preferential portion)
- NIIT
- Additional Medicare tax (0.9% on earned income > $200K single / $250K MFJ) — separate if needed

### QA check

- [ ] LTCG brackets for TY correct
- [ ] §1411 threshold matches filing status
- [ ] Active business K-1 income excluded from NII
- [ ] State capital gains exclusions already reflected in state calc, not federal

---

## TAB 10: FEDERAL TAX CALC — AMT

### Purpose

Calculate Alternative Minimum Tax liability. Less common post-TCJA/OBBBA but still possible for specific profiles (ISO exercises, large itemized deductions, certain state circumstances).

### Inputs

- Taxable income (Tab 8)
- AMT preferences (ISO spread, depreciation differences, etc.)
- AMT adjustments (state tax addback — SALT was preference pre-TCJA; now largely moot at $10K cap)
- AMT exemption (TY-specific from REFERENCE; inflation-indexed)
- Filing status

### Calculations

```
Taxable income
+ AMT preferences
+ AMT adjustments (add back SALT, misc itemized, etc.)
= Alternative Minimum Taxable Income (AMTI)
- AMT exemption (phased out at high AMTI)
= AMTI subject to tax
× AMT rate (26% / 28% with breakpoint)
= Tentative minimum tax

Tentative minimum tax
- Regular tax (from Tab 8 + Tab 9 as applicable)
= AMT liability (if positive; otherwise 0)
```

### Outputs

- AMTI
- Tentative minimum tax
- AMT liability (if any)
- AMT credit carryforward generated (if AMT paid)

### QA check

- [ ] AMT exemption phases out correctly at high AMTI
- [ ] AMT preferences captured (ISO, depreciation, oil/gas, etc.)
- [ ] AMT credit carryforward tracked

---

## TAB 11: FEDERAL TAX CALC — SE Tax & Additional Medicare

### Purpose

Self-employment tax for Schedule C / partnership K-1 active; additional Medicare for high earners.

### Inputs

- Net SE earnings (Schedule C + partnership K-1 subject to SE per §1402)
- Earned income wages (for combined wage base)
- Filing status

### Calculations

**SE tax**:
- Net SE earnings × 92.35% = SE base
- Social Security portion: SE base × 12.4% up to wage base ($168,600 TY 2024; $176,100 TY 2025) LESS W-2 SS wages already paid
- Medicare portion: SE base × 2.9% on ALL earnings (no cap)
- SE tax = SS + Medicare portions

**Additional Medicare (0.9%)**:
- Earned income (wages + SE earnings) - threshold
- Threshold: $200K single / $250K MFJ / $125K MFS
- 0.9% × excess = Additional Medicare

**Deductible portion of SE tax**:
- 50% of SE tax deductible above-the-line (Adjustment to income)

### Outputs

- SE tax total
- Additional Medicare
- Deductible portion of SE tax (feeds Tab 4 Adjustments)

### QA check

- [ ] Wage base TY-specific
- [ ] W-2 wages correctly offset SS portion (don't double-pay)
- [ ] Deductible portion matches 50% of SE tax

---

## TAB 12: QBI (§199A) CALCULATOR

### Purpose

Calculate §199A QBI deduction with aggregation, SSTB, and phase-in mechanics.

### Inputs

- QBI by entity (from Entity Inputs)
- W-2 wages paid (by entity, allocable to owner)
- UBIA of qualified property (by entity, allocable)
- Aggregation election (Y/N per related entity group)
- SSTB classification (per entity)
- Taxable income before QBI (from Tab 8)
- Filing status
- §199A threshold TY (from REFERENCE; TY 2025 ~$383,900 MFJ, ~$191,950 single; phase-in range +$100K MFJ / +$50K single)

### Calculations

**Step 1**: Compute QBI, W-2 wages, UBIA for each entity or aggregated group.

**Step 2**: Check taxable income vs. threshold.

Scenarios:
- **Below threshold**: QBI deduction = 20% × QBI (regardless of SSTB or W-2/UBIA)
- **In phase-in range**:
  - SSTB: phase out portion of QBI/wages/UBIA based on where in range
  - Non-SSTB: phase in W-2/UBIA limit
- **Above threshold**:
  - SSTB: Zero QBI deduction
  - Non-SSTB: QBI deduction = 20% × QBI, LIMITED to greater of (50% × W-2 wages) OR (25% × W-2 + 2.5% × UBIA)

**Step 3**: Apply 20% of (taxable income before QBI - net capital gain) as overall limit.

**Step 4**: Take LESSER of step 2 result and step 3 limit.

### Outputs

- QBI deduction
- Effective rate reduction
- W-2 / UBIA limit applied (if above threshold)

### QA check

- [ ] SSTB classification correct per entity
- [ ] Aggregation election defensible (same ownership, same accounting period, same trade)
- [ ] Phase-in math correct in range
- [ ] Overall 20% × (TI - net capital gain) limit applied

---

## TAB 13: REASONABLE COMPENSATION MODEL

### Purpose

Defend S corp owner's reasonable compensation against IRS §162 reasonableness standard.

### Inputs

Per S corp entity:
- Owner's role title
- Hours per week
- Industry classification (NAICS or similar)
- Geographic market (state + metro)
- Company revenue size
- Comparable compensation data (from Salary.com, BLS, RCReports, or similar sources)

### Calculations

**Benchmarked salary**:
- Percentile-based range: 25th / 50th / 75th percentile comparable
- Defensible minimum: 50th percentile for full-time active owners
- Defensible maximum: 90th percentile (beyond flags "unreasonable" on high side)

**Tax efficiency analysis**:
- Current salary: [input]
- Benchmarked range: [from data]
- Social Security wage base: [TY]
- Medicare (no cap): 1.45% × wages
- If salary = bracket value: FICA impact = wages × 15.3% (up to SS base) + 2.9% (above)
- Distribution portion = Ordinary K-1 income, no FICA but subject to NIIT if passive (usually active so excluded)

**Compare scenarios**:
- Low-bound salary (25th percentile): FICA savings vs. IRS audit risk
- Mid-bound salary (50th percentile): Balanced
- High-bound salary (75th+): QBI benefit (reasonable comp reduces QBI but recharacterized as wage at owner level where QBI doesn't apply)

### Outputs

- Recommended reasonable comp range
- Selected comp for TY
- Supporting documentation requirements (what data to retain)

### QA check

- [ ] Benchmark data source cited
- [ ] Range within defensible percentiles
- [ ] Documentation retained in client file

---

## TAB 14: STATE TAX CALC

### Purpose

Compute state tax for primary + any secondary state.

### Structure

One section per state. Each section:

### Inputs

- State name (from State Inputs)
- State AGI (federal AGI + state modifications)
- State standard / itemized deduction (state-specific)
- State exemptions / credits
- State-specific brackets (from REFERENCE — State Rates)

### Calculations

**Primary state** (worldwide income for residents):
- State taxable income
- Apply state brackets
- Subtract state credits
- PTET credit (if applicable; from PTET tab)
- OSC for tax paid to other states (from other state sections)

**Nonresident / part-year state**:
- Source income only
- Apportionment if applicable
- State tax on source income

### Outputs

- State tax (per state)
- Total state tax (all states)
- Local tax (added if applicable)

### QA check

- [ ] State rates current for TY
- [ ] Multi-state sourcing correct
- [ ] OSC calculated (not double-taxed)

---

## TAB 15: PTET ELECTION CALCULATOR

### Purpose

For each eligible state, determine whether PTET election benefits client.

### Inputs

- State and entity selections (from Entity Inputs × State Inputs)
- Client's federal marginal rate
- Client's MAGI (for SALT cap phase-out analysis)

### Calculations

For each state × entity combination:

**Without PTET**:
- Entity flows K-1 to owner
- Owner pays state tax personally
- Federal deduction: limited by SALT cap ($40K TY 2026 if MAGI < $500K; $10K above; revert $10K 2030)

**With PTET**:
- Entity pays state tax at entity level
- Entity deducts state tax federally (per Notice 2020-75)
- Owner gets state credit (refundable in most states; non-refundable in some)
- Federal deduction at entity level NOT subject to SALT cap

**Benefit**:
- Federal tax savings = (State tax × Federal marginal rate) - (SALT cap absorbed without PTET × Federal marginal rate)

Handle state-specific mechanics:
- CA 12.5% credit reduction for missed June 15 prepayment (TY 2026+)
- NY March 15 hard election deadline
- MA 10% credit haircut (S corp member)
- MN / OR / UT expired / pending re-enactment
- Etc.

### Outputs

- Per-entity PTET benefit
- Total PTET benefit
- Elections recommended

### QA check

- [ ] Elections within deadline
- [ ] Refundable vs. non-refundable credit correctly modeled
- [ ] State-specific mechanics applied

---

## TAB 16: SAFE HARBOR & ESTIMATED PAYMENTS

### Purpose

Compute safe harbor thresholds and quarterly estimated payment schedule.

### Inputs

- Prior year total tax (from prior year workbook or inputs)
- Prior year AGI
- Current year projected tax (from aggregation of tabs 8-15)
- Withholding estimated (from W-2, pensions)

### Calculations

**Safe harbor test**:
- Lesser of:
  - 100% of prior year tax (110% if prior AGI > $150K)
  - 90% of current year tax
- If withholding + estimated ≥ safe harbor → no underpayment penalty
- Otherwise: compute penalty per Form 2210

**Quarterly schedule**:
- Estimated amount (90% current year - withholding) ÷ 4
- Due dates: 4/15, 6/15, 9/15, 1/15

**Annualization (Form 2210 AI)**:
- For uneven income: annualized installment method
- Useful for year-end bonuses, K-1 income, capital gains

### Outputs

- Safe harbor amount required
- Quarterly estimated payment schedule
- Annualization analysis (if applicable)

### QA check

- [ ] 100% vs. 110% correctly triggered
- [ ] Withholding front-loaded properly (if year-end withholding used for safe harbor)

---

## TAB 17: SCENARIO COMPARISON

### Purpose

Compare baseline (no planning) vs. with-strategies scenarios.

### Structure

Side-by-side columns:
- Baseline (current trajectory, no planning)
- Scenario A: Selected strategies
- Scenario B: Alternative strategy mix
- Scenario C: Aggressive (all applicable)

### Rows

- Federal AGI
- QBI deduction
- Taxable income
- Federal tax (ordinary)
- Federal capital gains tax
- NIIT
- AMT
- SE tax
- Total federal
- State tax (per state)
- Local tax
- Total tax
- Priceless fees
- Net client benefit

### Outputs

- Scenario A savings vs. baseline
- Scenario B savings vs. baseline
- Scenario C savings vs. baseline
- Recommendation (best net-to-client)

### QA check

- [ ] All scenarios sum correctly
- [ ] Fee structures realistic (contingent vs. flat)
- [ ] No double-counting of benefits across strategies

---

## TAB 18: TAX PROJECTION OUTPUT (presentation)

### Purpose

Client-facing summary of projected tax and recommendations. Presentation quality; polished formatting.

### Content

- Header with client info
- Executive summary (3-5 key numbers)
- Income breakdown (waterfall chart)
- Tax components (federal / state / local / SE)
- Effective vs. marginal rates (visual)
- Strategy impact (before/after comparison)
- Action items (from Tab 20)
- Authority / disclaimer footer

### Format

- Charts: clean, minimal, consistent color palette
- Tables: no formulas visible; values only
- Text: plain language; technical terms defined

### QA check

- [ ] Numbers match calculation tabs
- [ ] No broken references (#REF, #N/A, #VALUE)
- [ ] Print-ready formatting

---

## TAB 19: STRATEGY COMPARISON OUTPUT

### Purpose

Present strategy selections with tax impact and recommendation rationale.

### Format

Table per strategy:
- Strategy name
- What it does (1 sentence)
- Tax impact (current year)
- Multi-year impact (if applicable)
- Complexity (H/M/L)
- Audit profile (H/M/L)
- Priceless fee
- Net benefit
- Implementation timeline
- Next steps

### QA check

- [ ] All selected strategies present
- [ ] Numbers match Scenario Comparison tab

---

## TAB 20: ACTION ITEMS & DEADLINES

### Purpose

Action-oriented output of what client and Priceless must do and by when.

### Format

Table:
| Action | Owner | Deadline | Status | Notes |
|---|---|---|---|---|
| Make Q2 estimated payment | Client | 6/15 | | |
| Elect PTET for NY | Priceless + entity | 3/15 | | Hard deadline |
| Reasonable comp adjustment via payroll | Client | 12/31 | | |
| (etc.) | | | | |

### QA check

- [ ] All deadlines reflect current TY calendar
- [ ] Owner assignments are clear
- [ ] No missing prerequisites (e.g., strategy selected but no action item)

---

## TAB 21: REFERENCE — Federal Rates (TY-specific)

### Purpose

Single source of truth for federal tax tables, phase-outs, and inflation-indexed amounts per TY.

### Content

- Ordinary brackets per filing status (TY 2023, 2024, 2025, 2026)
- LTCG brackets per filing status
- Standard deduction
- Personal exemption ($0 permanently per OBBBA)
- Child Tax Credit parameters
- QBI thresholds (phase-in start, phase-in completion)
- SALT cap ($10K, $40,400 TY 2026 OBBBA, $10K reversion TY 2030)
- §199A dividends deduction (20%)
- Retirement plan limits (§415, §402(g), §408, §414(v) catch-up)
- HSA limits
- Estate exemption
- AMT exemption and phase-out thresholds
- §1411 NIIT thresholds
- Additional Medicare thresholds

Update annually when IRS releases inflation adjustments (typically October).

### Use

All calculation tabs use `VLOOKUP` or named references to this tab rather than hardcoding. Example: `=VLOOKUP(TY, RefFedBrackets, 2, FALSE)`.

---

## TAB 22: REFERENCE — State Rates

### Purpose

State-by-state tax tables, PTET status, and key features.

### Content

One row per state × TY, with columns:

| State | Top rate | Structure (flat / brackets) | PTET? | PTET rate | Est tax threshold | Cap gains special | Retirement exclusion | Notes |
|---|---|---|---|---|---|---|---|---|

50 states + DC.

### Update

Annually from state file sources (states/ directory). Legislative changes mid-year are urgent updates.

---

## TAB 23: REFERENCE — Inflation-Indexed Amounts

### Purpose

Track amounts that index annually but aren't in the main brackets.

### Content

- QBI thresholds
- Retirement plan limits (§415, §402(g), §408(p), §414(v))
- HSA contribution limits
- Gift tax annual exclusion
- Estate tax exemption
- AMT exemption
- Kiddie tax threshold
- §179 limits
- Bonus depreciation phase-out (now restored 100% post-OBBBA for certain property)
- Etc.

---

## TAB 24: REFERENCE — QBI Thresholds

### Purpose

QBI-specific phase-in thresholds and SSTB list.

### Content

- TY 2025 threshold: single $191,950 / MFJ $383,900; phase-in range +$50K / +$100K
- TY 2026: updated for inflation
- SSTB trades and businesses (per Reg §1.199A-5)

---

## TAB 25: VERSION LOG

### Purpose

Track workbook revisions.

### Content

| Version | Date | Changes | Built by | Reviewed by |
|---|---|---|---|---|
| 1.0 | 2026-Q2 | Initial build | | |

Every change to structure or formulas logs here.

---

## Build sequencing

Recommended order to construct the workbook:

1. **TABS 1, 21, 22, 23, 24** (reference tabs) — must be complete before calc tabs work
2. **TABS 2-6** (input tabs) — defines what data flows where
3. **TABS 8-11** (federal calc tabs) — core tax calculation
4. **TABS 12, 13** (QBI, Reasonable Comp) — depend on entity inputs
5. **TABS 14-15** (State, PTET) — depend on federal calcs
6. **TAB 16** (Safe Harbor) — depends on federal + state totals
7. **TAB 17** (Scenario Comparison) — depends on all calc tabs
8. **TABS 18-20** (output tabs) — depend on scenarios
9. **TAB 25** (Version Log) — final

## Testing protocol

Before releasing any version of the workbook:

1. **Known-answer testing**: Run 5 benchmark scenarios with pre-computed expected results:
   - Simple W-2 + small business (baseline)
   - S corp owner with QBI and PTET
   - Real estate investor with REPS
   - High-income with AMT trigger
   - Multi-state complex

2. **Formula audit**: Every formula reviewed, not just values. Common errors:
   - Hardcoded numbers that should be references
   - Wrong filing status bracket
   - Stale TY rates
   - Circular references

3. **Edge case testing**:
   - Zero income
   - All income from one source
   - Negative AGI
   - Above and below every phase-out

4. **Visual QA**: Every output tab reviewed in print preview; no cut-off text, no #REF errors visible.

## Annual maintenance

Every year (typically October-December for following TY):

1. Update TAB 21 (Federal Rates) with inflation adjustments
2. Update TAB 22 (State Rates) with legislative changes
3. Update TAB 23 (Inflation-Indexed Amounts)
4. Update TAB 24 (QBI Thresholds)
5. Update TAB 25 (Version Log)
6. Re-run known-answer tests with new TY values
7. Update Instructions in TAB 1 for any TY-specific notes

## Partner QC integration

Workbook delivery to client requires QC per `workflows/qc/PARTNER-QC-CHECKLIST.md` — specifically Part 5 (Numbers QC) and Part 6 (Memo and deliverable standards).

## Handoff to companion skill

Workbook is companion to the `priceless-tax-documentation` skill which generates the client-facing memo. Memo references workbook outputs. Workbook and memo should reconcile numerically on every delivery.

## What this spec does NOT cover

- Actual Excel construction (formulas written out here; typing them into Excel is the build team's job)
- Formatting details (color palette, logo placement — Priceless brand team)
- Protection / password for calc tabs (IT decision)
- Integration with Priceless CRM / practice management (separate IT project)
- Automated data import from TaxDome / Karbon (separate integration work)

## Next steps for build team

1. Review this spec top-to-bottom for completeness
2. Flag any ambiguity or missing detail (amend spec)
3. Estimate build time (offshore staff 40-80 hours likely)
4. Build in sequence per Build Sequencing
5. Test per Testing Protocol
6. Partner review and signoff
7. Deploy for Q2 2026 pilot
8. Gather pilot feedback; iterate spec and workbook
