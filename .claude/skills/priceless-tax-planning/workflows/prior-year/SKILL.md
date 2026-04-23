---
workflow: Prior-Year Amended Return Opportunity
priority: HIGH (revenue-generating; statute-of-limitations-driven urgency)
trigger: existing client; prior-year returns on file (2022/2023/2024); engagement renewal or quarterly touch
engagement_type: separate SOW from current-year planning; billed hourly OR fixed-fee by return
statute_constraints: 3-year SOL on amended returns (from later of due date OR filing date); April 15 deadlines binding
related_files:
  - workflows/prior-year/SCREENING-MATRIX.md
  - workflows/prior-year/RETURN-LEVEL-CHECKLIST.md
  - workflows/prior-year/ECONOMICS-BREAK-EVEN.md
  - workflows/prior-year/CLIENT-CONVERSATION-SCRIPTS.md
  - workflows/prior-year/DECISION-LOG-TEMPLATE.md
---

# Prior-Year Amended Return Opportunity Workflow

This workflow exists to systematically identify amended return opportunities across Priceless's existing client book (~200+ clients) before statute of limitations expires. It is distinct from current-year planning (which is forward-looking) and from tax-return-analysis (which reviews a single return).

## Why this workflow exists

Three reasons:
1. **Statute of limitations is binding and approaching.** Tax year 2022 returns filed by April 15, 2023 have a claim-for-refund deadline of **April 15, 2026**. If not amended by that date, money on the table is gone forever. Tony's book has approximately 200 clients with 2022 returns on file — many were prepared by prior CPAs using incomplete methodology.
2. **Missed strategies leave recoverable dollars.** Prior CPAs commonly miss: PTET elections (where state allowed retroactive election or amended claim), §199A QBI maximization (often under-claimed due to aggregation misses or SSTB misclassification), cost segregation catch-up via Form 3115, §174 R&E treatment, missed retirement plan contributions, overlooked credits (R&D, WOTC, state-specific), improper reasonable compensation, missed §1202 qualification.
3. **Amended returns are billable, self-funding work.** A typical recovery on a $500K+ income return is $8K-$30K in refunded tax. Priceless can charge 20-30% of recovered amount (contingent) or $2,500-$5,000 flat per return. The work fits offshore staff for initial screening and prep; senior review for sign-off.

## Who this workflow is for

- **Primary user**: Tony or senior team member running systematic portfolio review
- **Offshore staff role**: Initial screening pass using SCREENING-MATRIX
- **Senior/partner role**: Engagement sign-off; client conversation; technical sign-off on amended return prep
- **Client segment**: Any Priceless client with returns on file for TY 2022, 2023, or 2024

## Workflow stages

### Stage 1 — Portfolio screen (offshore staff, 15-30 min per client)

Run `SCREENING-MATRIX.md` against client facts already in Priceless system. This is a pre-review that flags candidates WITHOUT opening the actual return. Output: Tier 1 / Tier 2 / Tier 3 / Not a candidate classification.

**Tier 1 candidates** (high probability of >$10K recovery): schedule return-level review immediately.
**Tier 2 candidates** (moderate probability $3K-$10K): batch for quarterly review.
**Tier 3 candidates** (possible but low yield <$3K): flag for note in client file; don't pursue unless client asks.
**Not a candidate**: document reason in decision log; move on.

### Stage 2 — Return-level review (offshore staff + senior sign-off, 1-2 hours per return)

For Tier 1 and Tier 2 candidates, pull the actual 1040 + K-1s + supporting schedules and run `RETURN-LEVEL-CHECKLIST.md`. This is line-by-line inspection against 40+ common miss patterns.

Output: Specific list of potential adjustments with estimated tax impact.

### Stage 3 — Economics decision (senior/partner, 30 min)

Run `ECONOMICS-BREAK-EVEN.md` to determine whether to proceed:
- Is the juice worth the squeeze? (Recovery > 3x cost of amended return prep as rule of thumb)
- Are there collateral consequences? (IRS audit risk, state follow-on amendments, basis/carryforward effects)
- Does the statute of limitations window matter? (Tier 1 urgent if < 90 days to SOL)
- What's the cascade effect? (Amending 2022 often triggers 2023/2024 amendments)

Output: Go / No-go decision with written rationale for decision log.

### Stage 4 — Client conversation (Tony or senior, 30-45 min)

Use `CLIENT-CONVERSATION-SCRIPTS.md` to present opportunity. Key elements:
- Frame as discovery from systematic review (not criticism of prior CPA)
- Quantified recovery estimate with range
- Clear pricing (contingent or flat)
- Timeline with SOL urgency
- Risks disclosed (audit exposure, collateral amendments)
- Engagement letter follow-up same day

### Stage 5 — Preparation and filing (offshore + senior review)

Standard amended return prep with extra care on:
- Form 1040X mechanics (TY-specific)
- Supporting schedules and statements
- State amendments if applicable (often automatic cascade)
- Tracking refund via IRS "Where's My Amended Return"
- Documenting method changes (Form 3115) if cost seg or §174 catch-up

### Stage 6 — Decision log and portfolio tracking

Update `DECISION-LOG-TEMPLATE.md` for every client screened — whether amended or not, whether pursued or declined. This creates institutional memory and evidences that Priceless did the portfolio review (important for professional standards and for documenting "we looked at this and declined for X reason").

## Common miss patterns (the 80/20)

Based on what Priceless has seen in prior-CPA work, the highest-yield areas are:

1. **PTET elections missed or under-claimed** — State-specific; 20-30% of S corp / partnership clients in PTET states
2. **QBI §199A aggregation and SSTB reclassification** — 15-25% of pass-through clients with $200K+ income
3. **Cost segregation catch-up via Form 3115** — Real estate owners who depreciated over 27.5 or 39 years without study
4. **Missed or incorrect reasonable compensation** — S corp owners with salaries either too high (over-payroll-tax) or too low (under-reasonable, audit risk)
5. **§174 R&E restoration for tax years 2022-2024** — Software, engineering, product dev businesses
6. **Retirement plan contributions not maximized** — DB/cash balance plans especially missed for 1099 / solo business owners
7. **State credits missed** — Historic rehab, film, R&D, enterprise zone, specific to client state
8. **§1202 QSBS qualification** — Founders who sold without documenting 5-year hold and active business requirement
9. **Oil & gas / working interest §469(c)(3) active treatment** — Investors who reported passive and had unused losses
10. **Augusta Rule §280A(g) 14-day home rental** — Business owners with no documentation or wrong rate
11. **Hiring-children legitimate work** — Family business owners with unreported/misclassified family wages
12. **Accountable plan reimbursements** — Home office, vehicle, phone; commonly treated as wages instead

Full list of 40+ patterns in `RETURN-LEVEL-CHECKLIST.md`.

## Economics at a glance

Conservative portfolio assumptions for Priceless's 200 clients with 2022 returns:
- 30% of clients are Tier 1 or Tier 2 candidates = 60 clients
- Average recovery on candidates pursued = $12,000 tax refund
- Contingent fee (25%): $3,000 per return = $180,000 firm revenue
- OR flat fee ($3,500 per return): $210,000 firm revenue
- Plus cascade 2023 and 2024 amendments for many = 1.5-2x initial opportunity
- Offshore prep cost per return: $400-$600
- **Net firm economics**: $150K-$300K+ on the 2022 wave alone, with similar waves for 2023/2024 as their SOLs approach

## Timing and urgency

| Return Year | Filed By | SOL Expires | Time Remaining (as of April 2026) |
|---|---|---|---|
| TY 2022 | April 15, 2023 | **April 15, 2026** | **~0 weeks — CRITICAL** |
| TY 2022 (extended) | October 15, 2023 | October 15, 2026 | ~6 months |
| TY 2023 | April 15, 2024 | April 15, 2027 | ~12 months |
| TY 2023 (extended) | October 15, 2024 | October 15, 2027 | ~18 months |
| TY 2024 | April 15, 2025 | April 15, 2028 | ~24 months |

**Immediate priority**: TY 2022 returns filed on original deadline. These expire April 15, 2026 and cannot be amended after that date.

## Integration with other Priceless work

- **Distinct from Q1/Q2/Q3/Q4 workflows**: Those are current-year planning. Prior-year work runs in parallel.
- **Uses tax-return-analysis files**: BASIS-TRACKING, CARRYFORWARD-TRACKING, PRIOR-CPA-PATTERNS all feed screening.
- **Uses strategy files**: When identifying potential amendments, reference strategies library for mechanics (e.g., PTET-ELECTION-BY-STATE for state-specific amendment eligibility; QBI-OPTIMIZATION for aggregation election; COST-SEGREGATION for 3115 catch-up).
- **Uses state files**: For state amendment mechanics and deadlines (often differ from federal).

## Quality control

Every amended return prepared must pass partner QC per `qc/PARTNER-QC-CHECKLIST.md` before filing. Amended returns have higher audit risk profile than originals because they explicitly flag an issue for IRS attention — they must be technically pristine.

## When NOT to amend

Not every missed deduction is worth amending. Red flags for declining:

- **Recovery < 3x cost**: Uneconomic; charge for review but don't file
- **Position is aggressive**: If the missed deduction is debatable, amending invites scrutiny on a position that may not survive
- **Collateral damage**: Amendment would open other issues (e.g., basis reconstruction that reveals prior errors)
- **Client reluctance**: If client won't pay for the work or won't sign, document and move on
- **State-only amendment with de minimis refund**: Often not worth prep cost
- **Partner signoff denied**: Technical risk exceeds recovery

Document these in DECISION-LOG-TEMPLATE.md with rationale.
