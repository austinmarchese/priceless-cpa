---
name: priceless-tax-planning
description: Quarterly tax planning and strategy for Priceless CPA clients. Loads as the primary skill when the user uploads redacted client engagement materials (QBO exports, prior returns, payroll, client profile) and asks for quarterly planning, tax projection, strategy recommendations, or reasonable compensation analysis. Follows Priceless CPA's eight-operator methodology including Capital Deployment for high-income clients (AGI > $750K). Produces internal partner-review drafts that become final client deliverables after QC. Trigger phrases include "quarterly planning memo", "Q1/Q2/Q3/Q4 memo for [client]", "reasonable comp analysis", "tax projection", "strategy review", "year-end planning". This skill is NOT for tax return preparation, bookkeeping cleanup (that's bookkeeping-qa sub-skill), or client-facing communication (partner converts internal memo to client version).
---

# Priceless Tax Planning

> **Scope and status — August 2026 (v0.9.8)**
>
> v0.9.8 adds three findings from finishing the T&A Contracting Q3 2026 memo: (1) Excel models built with `openpyxl` must be recalculated and checked for formula errors before any number in them is trusted — a marginal-tax-bracket `SUMPRODUCT` formula was silently returning `#VALUE!` across 13 cells; (2) baseline/counterfactual headline numbers (e.g., "what your AGI would look like without this year's changes") must be labeled and shown paired with the as-recommended figure, never divided against it; (3) ambiguous "Uncategorized Expense" transactions (cash withdrawals, Zelle to individuals) get asked about, not waved off as routine. See `SKILL.md` Learnings, `bookkeeping-qa/COMMON-CLASSIFICATION-ERRORS.md`, and `shared/CLIENT-FACING-MEMO-TEMPLATE.md`.
>
> v0.9.7 corrects v0.9.6's deliverable density based on direct partner feedback (Anthony): the compact client deliverable is now a **spacious summary deck** — one topic per page, much larger type, no target page count — instead of a crammed one-pager, and the recurring value tracker is named "Your Estimated Tax Savings This Year" (client-outcome framing, not "Advisory Value"). See `shared/CLIENT-FACING-MEMO-TEMPLATE.md` under "Density and type size."
>
> v0.9.6 folded in the first round of real-engagement learnings from the T&A Contracting, LLC Q3 2026 client memo: the two-document deliverable format for payroll-driven Foundational-tier clients, a required cumulative savings tracker, event-grouped cash-need framing, and a plain-language explainer bank (distribution reclassification, S-corp-vs-partnership savings math, basis-vs-cash mismatch) now referenced from `shared/CLIENT-FACING-MEMO-TEMPLATE.md`, `payroll-analysis/REASONABLE-COMP-DEEP-DIVE.md`, and `tax-strategy/strategies/S-CORP-REASONABLE-COMP.md` / `S-CORP-BASIS-TRACKING.md`.
>
> v0.9.5 completes Sprint 5.5 — a uniform depth upgrade across all 17 v0.3-era strategy files to match Sprint 5 depth standard. Every strategy file now includes Post-OBBBA current-law section, Interaction with other strategies, Deliverable Points for documentation skill handoff, Audit Posture, and tabular Update Status. Total strategy library: 25 files, 8,359 lines.
>
> All HIGH and MEDIUM priority files verified against OBBBA 2025 (P.L. 119-21), IRS Rev. Proc. 2025-32 (2026 indexed amounts), and IRS Notice 2025-67 (2026 retirement plan limits).
>
> v0.9 expands coverage with 11 industry vertical playbooks and 8 secondary strategy files (Cost Segregation, Real Estate STR/LTR/REPS, Roth Conversions, S Corp Election Analysis, S Corp Basis Tracking, Installment Sales). The skill library is now substantively complete for Priceless internal engagement use.
>
> Files still marked LOW priority (case-law strategies, templates, procedural methodology) contain content structurally unchanged by OBBBA and will be verified opportunistically. See `VERIFICATION-STATUS.md` for file-by-file tracking.
>
> **Partner review remains non-negotiable for every client memo** — authority citations should always be confirmed against current primary sources, and state-specific rules change on short cycles.

This is the primary skill that orchestrates Priceless CPA's quarterly tax planning engagements. It reads the client's engagement materials, runs the eight cognitive operators, loads relevant sub-skills, applies the strategy selection matrix, and produces a partner-reviewable memo in the appropriate quarterly format.

## Skill architecture

```
priceless-tax-planning/
├── SKILL.md                              (this file - router and workflow)
├── README.md                             (human-facing overview)
├── PREREQUISITES-CHECKLIST.md            (what analyst confirms before starting)
├── ENGAGEMENT-WORKFLOW.md                (step-by-step cookbook for all audiences)
│
├── shared/
│   ├── FIRM-METHODOLOGY.md               (the constitution - how we think)
│   ├── QUARTERLY-CADENCE.md              (what each quarter's engagement covers)
│   ├── CLIENT-PROFILE-TEMPLATE.md        (12-section structured intake)
│   ├── ENGAGEMENT-STANDARDS.md           (Circular 230, QC, §6694, §7216)
│   ├── REDACTION-PROTOCOL.md             (PII handling before upload)
│   ├── REFERRAL-DISCLOSURE-FRAMEWORK.md  (Path B compensation disclosure tiers)
│   ├── OUTPUT-TEMPLATES.md               (internal memo formats by quarter and tier)
│   ├── CLIENT-FACING-MEMO-TEMPLATE.md    (PDF + Excel deliverable templates, conversion rules, sample memo)
│   └── VISUALIZATION-CONVENTIONS.md      (formatting rules for PDF and Excel)
│
├── tax-return-analysis/                  (Phase 0.5 sub-skill — NEW in v0.5)
│   ├── SKILL.md
│   ├── CARRYFORWARD-TRACKING.md
│   ├── BASIS-TRACKING.md
│   └── PRIOR-CPA-PATTERNS.md
│
├── bookkeeping-qa/                       (Phase 1 sub-skill — NEW in v0.5)
│   ├── SKILL.md
│   ├── COMMON-CLASSIFICATION-ERRORS.md
│   └── PAYROLL-RECONCILIATION-METHODOLOGY.md
│
├── tax-projection/                       (Phase 2 sub-skill — NEW in v0.5)
│   ├── SKILL.md
│   ├── FEDERAL-TAX-COMPUTATION.md
│   ├── SAFE-HARBOR-METHODOLOGY.md
│   └── STATE-TAX-BASELINE.md
│
├── payroll-analysis/                     (Phase 2.5 sub-skill — NEW in v0.5)
│   ├── SKILL.md
│   └── REASONABLE-COMP-DEEP-DIVE.md
│
└── tax-strategy/                         (Phase 3 sub-skill)
    ├── SKILL.md
    ├── TIMING-RULES.md
    ├── STRATEGY-SELECTION-MATRIX.md
    ├── CREDITS-REFERENCE.md
    ├── industries/                       (11 industry playbooks — NEW in v0.9)
    │   ├── SKILL.md
    │   ├── E-COMMERCE.md
    │   ├── REAL-ESTATE-OWNER.md
    │   ├── SOFTWARE-AI.md
    │   ├── DOCTORS-MEDICAL.md
    │   ├── CONSTRUCTION.md
    │   ├── REAL-ESTATE-AGENT.md
    │   ├── DIGITAL-MARKETING.md
    │   ├── HOME-SERVICES.md
    │   ├── JEWELRY-STORE.md
    │   ├── INVESTMENT-FIRMS.md
    │   └── CAR-WASHES.md
    ├── capital-deployment/               (Operator 8 — NEW in v0.10 Sprint 7; AGI > $750K Full-Wealth)
    │   ├── CAPITAL-DEPLOYMENT-FRAMEWORK.md    (gateway; 8-gate qualification)
    │   ├── QOZ-FUNDS.md                        (Tier 1 — OBBBA permanent)
    │   ├── DAF-ADVANCED.md                     (Tier 1 — non-cash & succession)
    │   ├── SECTION-1031-ADVANCED.md            (Tier 1 — reverse, improvement, DST)
    │   ├── EQUIPMENT-LEASING-FUNDS.md          (Tier 1 — §469(c)(6) passive)
    │   ├── AIRCRAFT.md                         (Tier 2 — §280F; HIGH audit risk)
    │   ├── OIL-GAS-WORKING-INTERESTS.md        (Tier 2 — §469(c)(3) active)
    │   ├── CRT-CRUT.md                         (Tier 2 — §664 split-interest)
    │   ├── PRIVATE-FOUNDATION.md               (Tier 2 — §509 / §§4940-4945)
    │   ├── CLT.md                              (Tier 3 — wealth transfer leverage)
    │   ├── FOREIGN-GILTI.md                    (Tier 3 — §962; NOT PR Act 60)
    │   ├── MOVIE-TAX-CREDITS.md                (Tier 3 — state credit purchase only)
    │   └── PROMOTER-PATTERNS-PARTNER-DEFENSE.md (partner reference; decline framework)
    └── strategies/                       (25 core strategy files — Sprint 5.5 depth)

states/                                   (State-specific reference files — Sprint State Build v0.11/v0.12)
├── STATE-FILE-TEMPLATE.md                (tiered depth methodology; research source priority)
├── FLORIDA.md                            (Tier 2 — home base; no income tax; Florida home-base mechanics)
├── CALIFORNIA.md                         (Tier 2 — most complex; PTET via SB 132; FTB residency audit)
├── NEW-YORK.md                           (Tier 2 — PTET Article 24-A + NYC 24-B; permanent place of abode)
├── NEW-JERSEY.md                         (Tier 2 — BAIT election; inheritance tax; highest property tax)
├── TEXAS.md                              (Tier 2 — franchise tax 3/1/2026 federal alignment; homestead)
├── ILLINOIS.md                           (Tier 2 — PTE tax made permanent 12/2025; $4M estate exemption)
├── GEORGIA.md                            (Tier 2 — 5.19% flat; Film Tax Credit; HB 149 PTET)
├── NORTH-CAROLINA.md                     (Tier 2 — 3.99% flat; corporate tax phasing to 0% by 2030)
├── PENNSYLVANIA.md                       (Tier 2 — 3.07% flat; NO PTET; partnership credit gap)
├── MASSACHUSETTS.md                      (Tier 2 — 5%+4% millionaire surtax; 63D PTE 90% credit; $2M estate)
├── VIRGINIA.md                           (Tier 2 — PTET extended to 1/1/2027; refundable credit)
└── MARYLAND.md                           (Tier 2 — HB 352 2025 sweeping changes; capital gains surtax)
```

Future state files (Sprint State Build Phases 3-4):
- **Phase 3 Tier 1** (pending): AK, NV, SD, TN, WY, NH — 6 files at 150-250 lines each (shallow; no income tax)
- **Phase 4 Tier 3** (pending): remaining 31 income-tax states at 250-400 lines each

Future sub-skills (post-MVP):
- `financial-products/` — Path B product library (H2 2026)

## How to use this skill

### Step 1: Verify prerequisites

Before running any engagement, the analyst confirms the prerequisites checklist (`PREREQUISITES-CHECKLIST.md`). Engagements with missing prerequisites produce low-quality output.

### Step 2: Read the foundation files

In order:
1. `shared/FIRM-METHODOLOGY.md` — the constitution
2. `shared/QUARTERLY-CADENCE.md` — the quarterly schedule
3. `shared/ENGAGEMENT-STANDARDS.md` — the professional standards
4. `shared/OUTPUT-TEMPLATES.md` — the format of the deliverable
5. `shared/CLIENT-PROFILE-TEMPLATE.md` — the intake format

If the engagement involves Path B products (Comprehensive or Full Wealth tier with affiliate infrastructure available):
6. `shared/REFERRAL-DISCLOSURE-FRAMEWORK.md`

### Step 3: Load the client profile

The analyst has populated a CLIENT-PROFILE per the template. Load it. Read all 12 sections. Note:
- Engagement tier (Foundational / Comprehensive / Full Wealth)
- Current quarter
- Entity structure and industry
- Compliance gates (attest status, licensure check, §7216 consent status)
- Known events for current year
- Open items from prior engagement

### Step 3.5: Client Intake Gate — confirm or ask before running operators

The profile and uploaded documents rarely contain everything the operators need. Before Step 4, run this **confirm-or-ask gate**: for each item below, confirm it from the profile/returns; if it is not there, **ask the analyst — do not assume.** Every item left unconfirmed must be labeled as an explicit assumption in the memo's Open Questions, never buried as a silent default.

Must-confirm-or-ask checklist (each one materially changes the output):

- **Owner age(s)** — sizes any defined-benefit / cash-balance plan; without it, retirement strategy is unquantifiable.
- **Officer vs. staff payroll split, YTD** — the payroll/P&L total is whole-company; back out the officer portion. Confirm how much **officer comp, federal/state withholding, and estimated payments have actually run YTD** (often $0 early in the year — which drives the whole catch-up plan).
- **Existing retirement plan?** (Solo 401(k), SEP, DB, cash balance) — avoid recommending what already exists.
- **Source of capital gains** — portfolio (NIIT applies, taxed as investment) vs. active-business asset disposition (may be NII-excluded). Changes NIIT and the projection.
- **New location / major asset — use and in-service date** — drives cost-seg + bonus-depreciation timing (current year vs. next).
- **Family facts** — age-appropriate children (income-shifting), employed spouse (separate plan capacity).
- **State posture from the prior-year return** — pull the **apportionment percentages** and **existing elections (e.g., PTET)** directly from the filed return; carry the same apportionment forward unless a known event changes it. Do not recompute from scratch when the return already establishes it.

If a return is delivered as scanned images (common for brokerage-heavy 1040s), key figures may not be machine-readable — request the specific line values (e.g., total tax, AGI, capital gains) rather than guessing.

### Step 4: Run the eight cognitive operators

Per `shared/FIRM-METHODOLOGY.md`, in order:

1. **Reconcile** — delegate to `bookkeeping-qa/` sub-skill (Phase 1)
2. **Baseline** — delegate to `tax-projection/` sub-skill (Phase 2)
3. **Reasonable Comp** — for S Corp clients, delegate to `payroll-analysis/` sub-skill
4. **Entity-Arbitrage** — run inline, flag major restructuring for partner
5. **Accelerate / Defer** — run inline via `tax-strategy/` sub-skill (includes two-year comparison per updated Operator 5)
6. **Stack** — run inline via `tax-strategy/` sub-skill compound opportunities
7. **Financial Product Overlay** — for qualifying tiers with affiliate infrastructure
8. **Capital Deployment** — only if AGI > $750K AND foundational planning complete

Pre-phase (runs before Phase 1): `tax-return-analysis/` sub-skill extracts carryforwards, elections, and prior-year methodology from the prior-year returns.

### Step 5: Invoke the strategy sub-skill

Load `tax-strategy/SKILL.md` and run the strategy selection workflow. It will:
- Filter strategies by quarter window (`TIMING-RULES.md`)
- Evaluate each strategy's `applies_when` against client profile
- Skip strategies already in place
- Apply the selection matrix to rank
- Apply tier-based filtering
- Return ranked recommendations with full authority citations and implementation paths

### Step 6: Assemble the quarterly memo

Per `shared/OUTPUT-TEMPLATES.md`, assemble the memo appropriate to:
- Current quarter (Q1 / Q2 / Q3 / Q4)
- Engagement tier (Foundational / Comprehensive / Full Wealth)
- Path B presence (disclosure blocks where products are recommended)

Include the structured task list block at the end of the memo for downstream automation (Karbon task creation, documentation skill handoff).

### Step 7: Flag open questions

Any question the skill could not resolve from available data gets flagged in the memo's "Open Questions for Partner" section. Partner review addresses these before client delivery.

## What this skill does NOT do

- **Does not prepare tax returns.** That's done in Filed (individual) or CCH Engagement (business) after planning is complete.
- **Does not clean up books.** `bookkeeping-qa/` handles QA; actual cleanup is a separate engagement.
- **Does not produce client-facing language.** Output is internal draft. Partner converts to client-facing memo.
- **Does not execute implementation.** Task list goes to Karbon for human execution.
- **Does not generate strategy documentation.** That's the separate `priceless-tax-documentation/` skill.
- **Does not sign returns or provide legal advice.** Partner signs. Attorneys provide legal advice.

## Who operates this skill

- **Offshore analysts** (India, Philippines): run Phases 1-2 (bookkeeping QA, projection)
- **US senior staff**: run Phase 3 (strategy review) and prepare the draft memo
- **Partner (credentialed CPA)**: reviews, signs off on aggressive positions, approves Path B disclosures, converts to client version, signs the final

No memo goes to a client without partner sign-off.

## Learnings from live engagements

Reusable methods surfaced during real engagements. Apply them; deepen the relevant sub-skill when one recurs.

### Reasonable comp ↔ QBI crossover (S Corp, non-SSTB)
For a non-SSTB S Corp owner above the §199A income threshold, the QBI deduction is the lesser of **20% of QBI (the K-1 income)** or **50% of W-2 wages**. Officer salary moves these in opposite directions (every $1 of salary cuts K-1 by $1 but raises the wage limit by $0.50), so the tax-optimal salary is the **crossover where `50% × total W-2 wages = 20% × K-1`**. Solving per owner: `W ≈ (0.10 × EBOC − 0.25 × staff wages) / 0.70`, where EBOC = entity earnings before officer comp.
- **The QBI wage limit uses TOTAL company W-2 wages (all officers + all staff), not officer comp alone.** More staff payroll lowers the officer salary needed to reach the crossover.
- Under-comp does double damage: payroll-tax reclassification risk **and** a throttled QBI deduction. Don't default to "minimize salary."

### Withholding even-pay rule (§6654(g)) and the wage-capacity ceiling
W-2 withholding is **deemed paid evenly across all four quarters** regardless of when withheld, so heavy withholding in Q3/Q4 retroactively cures missed Q1/Q2 — something a late estimate cannot do. But **withholding can never exceed the wage** (after FICA), so K-1 income (no paycheck) must be covered by estimates unless salary is raised. Surface the trade-off: QBI-optimal comp leaves an estimate gap; raising comp to ~the full liability enables 100% withholding (zero estimates) at the cost of some QBI + extra Medicare.

### Safe-harbor percentages by jurisdiction
Pay the lesser of the current-year or prior-year test, per jurisdiction:
- **Federal**: 110% of prior year (AGI > $150K; else 100%) or 90% of current.
- **PA**: 100% of prior or 90% of current (no 110% bump).
- **MA**: 100% of prior or **80%** of current (not 90%).
When income is growing, the current-year test is usually the lower/binding one.

### Multi-state for PA-resident S-corp owners
- **PA has no PTET**, but PA grants resident owners a **credit for out-of-state PTET when the entity is an S corp** (72 P.S. §7314 — the partnership credit gap does NOT apply). Confirm the PA-40 claims it; it can cut PA tax materially.
- **MA**: 63D PTE elective tax (5% base, ~90% refundable member credit) + **4% millionaire surtax** over the indexed threshold; the surtax is generally NOT covered by the 63D credit. Pull MA **apportionment from the prior-year return** and carry it forward.

### Employee-side payroll deductions that reduce withholding capacity
Only employee-paid items reduce the paycheck available for income-tax withholding: **PA employee SUI (~0.07%)**, **MA PFML employee share (~0.46%, if MA-covered)**, **PA local EIT (~1%)**, PA LST (~$52/yr). **MA unemployment is employer-only** and does NOT reduce withholding. >2% S-corp shareholder-officers may be **exempt from SUI/PFML** — confirm with the payroll provider.

### Data extraction
Brokerage-heavy 1040s are often delivered as scanned images whose form values are not machine-readable. Request the specific line figures (total tax, AGI, capital gains) rather than estimating; flag any number that could not be read from source.

### Reclassifying prior draws as wages — no new cash moves
When an S Corp owner has taken distributions YTD but run **no payroll yet**, the catch-up payroll run does not need to hand the owner fresh cash for the whole reasonable-comp target — it can **reclassify part of what's already been drawn** from "distribution" to "wages" on the books. The owner keeps the same dollars; only the categorization (and the withholding math) changes. This also improves the owner's basis position, since wages aren't basis-tested draws the way distributions are. Client memos must say explicitly that no money is moving a second time — this is the single most common point of client confusion in a mid-year comp catch-up. See `payroll-analysis/REASONABLE-COMP-DEEP-DIVE.md` ("Mistake 1") and `shared/CLIENT-FACING-MEMO-TEMPLATE.md` (plain-language explainer bank).

### The "Your Estimated Tax Savings This Year" running tracker
A cumulative table — Recommendation | What We Did | Estimated Value | Status — that starts in the first quarterly memo of the year and **carries forward and updates** in every subsequent quarter's memo, rather than resetting each quarter. It turns "what did we do for this fee" into a running total the client sees compound, and it forces every recommendation to eventually resolve to Estimated → Confirmed or get dropped with a reason. Now a required section in `shared/CLIENT-FACING-MEMO-TEMPLATE.md` for every tier. Name it for what the client got ("Estimated Tax Savings"), never for how the firm wants to be perceived ("Advisory Value") — a partner will call out self-congratulatory framing immediately, and correctly.

### Cash-need framing: group by payroll event, not just by tax type
Clients read "how much do I need in the account, and by when" better than a tax-type-by-tax-type table alone. Pair the tax-type breakdown with a second table grouped by **funding event** (each payroll run, each PTET payment) showing Deposited-to-You vs. To-Agencies vs. Total-Needed per event. Same underlying numbers, but the event view is what actually drives the client's cash management. See the spacious summary deck format in `shared/CLIENT-FACING-MEMO-TEMPLATE.md`.

### Density: one topic per page, big type, no target page count
An early draft of the compact client deliverable crammed a full quarterly summary onto one physical page at 7-9pt type to hit a "one-pager" page count. Partner feedback (Anthony) reversed this outright: blow the text up, put far less on each page, and don't optimize for page count at all — a client should get one idea per glance, not scan a dense sheet. The corrected default is one topic per page at much larger type sizes, merging two adjacent pages only when rendering shows genuine leftover space on both (never by shrinking text to make two things fit). Full sizing guidance and the merge rule are in `shared/CLIENT-FACING-MEMO-TEMPLATE.md` under "Density and type size."

### Recalculate every Excel model before trusting a single number in it
A workbook built or edited with `openpyxl` (or any library that writes formulas as strings) has **no cached values** until something actually recalculates it — `data_only=True` reads back `None` for every formula cell, and worse, a workbook nobody has opened since it was built can carry that all the way to delivery undetected. Before treating any cell's value as real, open the file in Excel/LibreOffice (COM automation works when GUI tools aren't installed) and force a full recalculation, then check for `#VALUE!`/`#REF!`/etc. across every sheet — not just the cells you expect to have changed. One real instance: a marginal-tax-bracket formula using `SUMPRODUCT(MAX(0,MIN(income,ceiling)-floor),rate)` over bracket ranges threw `#VALUE!` in this environment (MIN/MAX aggregate rather than broadcast per-element outside certain array contexts) and cascaded into 13 cells across three downstream tabs. Fix: replace range-level MIN/MAX-in-SUMPRODUCT bracket math with an explicit **row-by-row helper column** (one row per bracket, each cell doing scalar MIN/MAX against that row's own floor/ceiling) — less clever, but it can't silently fail, and it's easier for a partner to audit besides.

### Baseline/counterfactual numbers must be labeled and never mixed with as-recommended figures
A memo sometimes needs to show a client "what your number would look like without this year's changes" — a legitimate, partner-directed choice, not an error. But a bare, unlabeled counterfactual sitting next to figures that already reflect the *recommended* plan (a tax-payment table, an effective rate) reads as a mistake, and worse, invites the reader to divide the wrong pair of numbers together (e.g., a without-plan AGI against a with-plan tax bill), producing a number that looks precise but means nothing. Rule: whenever a headline figure is a "before" or "without" scenario, (1) label it explicitly as such in its own caption, (2) show the "with our plan" figure right alongside it rather than leaving the reader to imagine it, and (3) make sure every *derived* figure built from either side (effective rate, savings delta) states which scenario's numbers went into it. See the before/after AGI comparison band in `shared/CLIENT-FACING-MEMO-TEMPLATE.md`.

## Version history

- **v0.9.8** (August 2026, current): Excel-recalculation requirement (with a real SUMPRODUCT/#VALUE! bracket-calc bug and fix), baseline/counterfactual headline-number labeling rules, and an Uncategorized Expense ask-don't-assume note in bookkeeping QA — all from finishing the T&A Contracting Q3 2026 engagement.
- **v0.9.7** (August 2026): Partner feedback (Anthony) reversed the density of the compact deliverable — one topic per page, much larger type, no target page count — and renamed the recurring value tracker to "Your Estimated Tax Savings This Year" throughout.
- **v0.9.6** (August 2026): Real-engagement refinement from T&A Contracting LLC Q3 2026 memo — compact one-pager + talking-points format, required cumulative advisory-value tracker, event-grouped cash-need framing, plain-language explainer bank, mid-year reasonable-comp reclassification technique.
- **v0.1** (April 2026): Initial skeleton with foundation files
- **v0.2** (April 2026): Methodology, quarterly cadence, Path B framework, strategy matrix, output templates
- **v0.3** (April 2026): Operator 8 (Capital Deployment), real 11 industries, 12 strategy files, client profile template, engagement standards
- **v0.4** (April 2026): Client-facing memo template (PDF + Excel), visualization conventions, engagement workflow cookbook for analysts
- **v0.4.1** (April 2026): GL + prior-year financials intake, multi-audience workflow restructure
- **v0.5** (April 2026): Sprint 3 sub-skill backbone — tax-return-analysis, bookkeeping-qa, tax-projection (revised), payroll-analysis; Operator 5 updated with two-year comparison framing
- **v0.6** (April 2026): QSBS OBBBA update, verification banner added, VERIFICATION-STATUS.md created
- **v0.7** (April 2026): HIGH priority OBBBA verification — QBI, Federal Tax Computation, Credits Reference, PTET Election
- **v0.8** (April 2026): MEDIUM priority OBBBA verification — retirement plan limits (Solo 401(k), Mega Backdoor, Backdoor Roth, HSA, DB Plan), charitable (DAF, QCD), carryforward, family employment, S Corp comp
- **v0.9.5** (April 2026): Sprint 5.5 — uniform depth upgrade. All 17 v0.3-era strategy files rebuilt to Sprint 5 depth standard. Added Post-OBBBA current-law sections, Interaction/stacking detail, Deliverable Points for documentation skill handoff, Audit Posture sections, tabular Update Status. No new files; depth-only upgrade. Total strategy library: 25 files, 8,359 lines.
- **v0.9** (April 2026): Sprint 5 — 11 industry vertical playbooks + 8 secondary strategy files (Cost Segregation, Real Estate STR/LTR/REPS, Roth Conversions, S Corp Election Analysis, S Corp Basis Tracking, Installment Sales)

## Build sequence (remainder of MVP)

- **Sprint 3** (week 2): `tax-return-analysis/`, `bookkeeping-qa/`, revised `tax-projection/`, `payroll-analysis/`
- **Sprint 4** (week 3): 4 quarterly workflow files, `MULTI-STATE-MECHANICS.md`, top 10 state files
- **Sprint 5** (week 4): 11 industry files, 8 secondary strategies
- **Sprint 6** (week 5): `priceless-tax-documentation/` v1 (companion skill)
- **Sprint 7** (week 6): Capital Deployment strategies (aircraft, equipment leasing, FX, charitable structures, oil/gas)
- **Sprint 8** (week 7): Internal testing on 3 prior-year engagements
- **Sprint 9** (week 8): Pilot prep, QC checklist, pilot client identification
- **Sprint 10** (weeks 9-10): Live pilot Q2/Q3 engagements

## Firm identification

The firm is **Priceless CPA** (no suffix). If outputs need suffix (e.g., "LLC", "PLLC", "CPA Firm") the partner appends in the final version.

Path B affiliate entities referenced throughout as:
- `[Insurance Affiliate]` — to be named when formed
- `[RIA Affiliate]` — to be named when formed
