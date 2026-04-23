---
parent_workflow: workflows/prior-year/SKILL.md
purpose: Pre-review screening to classify clients into Tier 1/2/3/Not-a-candidate WITHOUT opening actual return
user: offshore staff; 15-30 min per client
input: client intake data already in Priceless CRM/engagement files
output: tier classification + specific hypotheses to test at return-level review
---

# Prior-Year Screening Matrix

This screen runs BEFORE pulling the actual return. Purpose: triage 200+ clients efficiently; identify the 60-80 worth deep review; document why the other 120+ were screened out.

Run this against facts Priceless already has in the client profile, engagement letter, or CRM. Do NOT spend time pulling historical returns for screening — that's Stage 2.

## Step 1: Basic eligibility

For each client, confirm:

- [ ] Client was a Priceless client during the tax year in question (or a new client whose prior-CPA return is available)
- [ ] At least one tax year remains within statute of limitations (TY 2022, 2023, or 2024)
- [ ] Client has signed a data-sharing engagement OR a prior-year review engagement is plausible
- [ ] Return was filed (not late/not-filed; different workflow for non-filers)

If any "no" → **Not a candidate**. Document reason.

## Step 2: High-yield screening questions

Answer each Y/N using data in CRM. Count "Y" responses.

### Pass-through structures (heavy hitters)

- [ ] Client is S corp or partnership owner with >$200K business income in TY2022/23/24?
- [ ] Client's entity operated in a state with PTET (NY, CA, NJ, CT, IL, GA, NC, others — full list in states/)?
- [ ] Client did NOT make PTET election in the year in question (confirm via CRM notes or prior return Schedule K-1 codes)?
- [ ] Client has multiple pass-through entities that could have benefited from §199A aggregation?
- [ ] Client's business is in a potential SSTB category but may have been misclassified?
- [ ] Client's S corp salary looks either too high (>50% of net) or too low (<20% of net) for industry?

### Real estate

- [ ] Client owns rental real estate with >$500K cost basis (any property type)?
- [ ] Client acquired real estate in the tax year AND no cost segregation study on file?
- [ ] Client's spouse or client could have qualified for Real Estate Professional Status (REPS) but return shows passive treatment?
- [ ] Client has short-term rental (Airbnb/VRBO) reported on Schedule E instead of Schedule C with material participation?
- [ ] Client holds oil/gas working interest reported as passive rather than active under §469(c)(3)?

### Retirement and benefits

- [ ] Client is self-employed or has solo business AND contributions under $50K in retirement plans?
- [ ] Client is 45+ with $500K+ business income AND no defined benefit / cash balance plan in place?
- [ ] Client has HSA eligibility but no HSA contribution on return?
- [ ] Client has S corp but health insurance not reported on W-2 (no §162(l) deduction claimed)?

### Credits (federal and state)

- [ ] Client's business has R&D characteristics (software, engineering, product development, process improvement) and NO R&D credit claimed?
- [ ] Client hired employees from WOTC-eligible categories and NO WOTC claimed?
- [ ] Client is in a state with significant credits (GA film, LA historic, NY brownfield, etc.) and none claimed?

### Family and specialty

- [ ] Client owns a business and has minor children but no legitimate child employment documented?
- [ ] Client owns a business and has not used Augusta Rule (§280A(g)) 14-day rental strategy?
- [ ] Client has home office but used only simplified method or no home office claim?
- [ ] Client makes vehicle use claim but without mileage log or accountable plan documentation?

### Exit events

- [ ] Client sold a business or had significant liquidity event in TY 2022/23/24?
- [ ] Client held stock or business interest for 5+ years that may qualify for §1202 QSBS exclusion?
- [ ] Client had large capital gain without §1031, QOZ, CRT, or installment sale structure?

### Multi-state / residency

- [ ] Client moved between states during the tax year or has homes in multiple states?
- [ ] Client has remote employees in multiple states (potential convenience-of-employer rule exposure)?
- [ ] Client files in high-tax state but had opportunity to establish residency elsewhere?

### Accounting methods

- [ ] Client is cash-basis business with inventory that should have been reported differently?
- [ ] Client capitalized §174 R&E expenditures without catch-up consideration?
- [ ] Client uses straight-line depreciation where MACRS or §168(k) bonus would apply?

## Step 3: Tier classification

Count "Y" responses from Step 2 (exclude Step 1 gate questions).

| Y Count | Likely Tier | Action |
|---|---|---|
| 6 or more | **Tier 1** | Schedule return-level review within 2 weeks |
| 3-5 | **Tier 2** | Batch for quarterly review cycle |
| 1-2 | **Tier 3** | Note in client file; don't actively pursue |
| 0 | **Not a candidate** | Document; close screen |

**Override conditions**: Tier 1 automatically if any of:
- Pass-through with no PTET election in PTET state + >$500K income
- Real estate acquisition >$1M in year with no cost seg
- Business exit event (sold company) with no §1202 analysis
- TY 2022 return is within 60 days of SOL expiration AND any Y response

## Step 4: Specific hypotheses to test at return-level review

For Tier 1 and Tier 2 clients, document which specific hypotheses the Y responses triggered. This directs offshore staff at Stage 2 to inspect specific lines of the return rather than full-return read.

Example output format:

```
Client: [Name]
Tier: 1
Y count: 8
TY to review: 2022 (URGENT — SOL April 15, 2026), 2023, 2024

Hypotheses to test:
1. PTET election missed in NY (S corp; $750K income) — check Article 24-A status
2. §199A aggregation opportunity — 3 LLCs on return; may qualify under §1.199A-4
3. Reasonable comp: W-2 was $200K on $800K net; industry bench suggests $250-350K
4. Cost seg eligibility: $2.3M office building acquired TY 2021; depreciated straight-line; Form 3115 catch-up candidate
5. Child employment: 2 minor children in home; no family wages on 941

Estimated potential recovery (pre-review): $25K-$45K across 3 years

Assigned for Stage 2 review: [Staff name]
Target Stage 2 completion: [Date]
```

## Step 5: Log and batch

Every screen — Tier 1 through Not-a-candidate — gets logged in `DECISION-LOG-TEMPLATE.md`. Even "Not a candidate" clients benefit from documented screening (demonstrates professional diligence; creates institutional memory).

Batch Tier 1 clients by SOL urgency: TY 2022 first, then TY 2023, then TY 2024.

## Efficiency notes

This screen should run in 15-30 min per client for offshore staff familiar with Priceless CRM. If a screen is taking > 45 min, the client profile likely has data gaps that need remediation BEFORE screening (in which case, flag for current-year engagement clean-up, not prior-year amendment).

Do not screen clients Priceless has served for <6 months — insufficient data to screen efficiently. For those, note "insufficient data; re-screen at engagement renewal" and move on.

## Partner signoff on Tier 1 results

Weekly batch review: Tony or senior reviews the week's Tier 1 screen outputs before Stage 2 review begins. Purpose: catch obvious false positives, redirect effort to highest-yield candidates, maintain consistent tier calibration.
