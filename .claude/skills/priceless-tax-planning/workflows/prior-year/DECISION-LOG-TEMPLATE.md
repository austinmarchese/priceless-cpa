---
parent_workflow: workflows/prior-year/SKILL.md
purpose: Institutional memory for every client screened in prior-year sweep; audit trail for professional diligence
user: all staff on the prior-year engagement
format: one row per client screened; updatable fields
---

# Decision Log Template — Prior Year Amendment Opportunity

Every client touched in the prior-year sweep — Tier 1 through Not-a-candidate — gets an entry in the decision log. This is institutional memory and professional diligence evidence.

## Why every client, not just engagements

Three reasons:
1. **Professional standards**: Documents that Priceless systematically reviewed the portfolio — shows reasonable care even for clients NOT pursued.
2. **Client revisits**: Client comes back asking "what did we look at?" — decision log answers in 30 seconds instead of hours of re-screening.
3. **Pattern recognition**: Across 200 entries, patterns emerge about which client types yield value, which don't, refining the screening matrix over time.

## Log structure

One row per client × tax year reviewed. Tracked fields:

### Identification

| Field | Purpose | Example |
|---|---|---|
| Client name | Identification | Jane Doe |
| Client ID | CRM reference | PL-1042 |
| Tax year | Year screened | 2022 |
| Client segment | Industry / profile | S corp owner, e-commerce |
| State(s) of filing | Multi-state context | NY, NJ |

### Screening

| Field | Purpose | Example |
|---|---|---|
| Screen date | When Stage 1 completed | 2026-04-10 |
| Screener | Staff responsible | Priya K. |
| Y-count | Count from SCREENING-MATRIX | 7 |
| Tier classification | Stage 1 output | Tier 1 |
| Hypotheses to test | Specific items flagged | PTET not claimed; QBI aggregation missed; reasonable comp low |

### Return-level review (Stage 2)

| Field | Purpose | Example |
|---|---|---|
| Stage 2 date | When review completed | 2026-04-18 |
| Stage 2 reviewer | Staff who did deep review | Rahul P. |
| Findings count | Number of discrete findings | 4 |
| Aggregate recovery estimate | Dollar estimate | $28,500 |
| Senior reviewer signoff | Who signed off | Tony (04-19) |

### Decision (Stage 3)

| Field | Purpose | Example |
|---|---|---|
| Decision date | When go/no-go decided | 2026-04-19 |
| Decision | PROCEED / DECLINE / DEFER | PROCEED |
| Rationale | Why this decision | 11x ratio; SOL < 30 days; clean mechanical case |
| Fee structure selected | If proceeding | Contingent 25% |
| Expected firm revenue | Priceless economics | $7,125 |
| Partner approval | If required | Tony — approved |

### Client engagement (Stage 4)

| Field | Purpose | Example |
|---|---|---|
| Client conversation date | When presented | 2026-04-22 |
| Conversation outcome | Accepted / Declined / Deferred | Accepted |
| Engagement letter sent | Date | 2026-04-22 |
| Engagement letter signed | Date | 2026-04-23 |
| Client objections / concerns | Raised in conversation | Wanted flat fee instead of contingent |
| Agreed structure | Final terms | Flat fee $3,500 |

### Preparation and filing (Stage 5)

| Field | Purpose | Example |
|---|---|---|
| 1040X preparation start | Begin date | 2026-04-25 |
| Internal review complete | Date | 2026-05-01 |
| Partner signoff for filing | Date | 2026-05-02 |
| 1040X filed with IRS | Date | 2026-05-05 |
| State amendment filed | State + date | NY — 2026-05-06 |
| Form 3115 filed (if applicable) | Date | — |

### Outcome tracking

| Field | Purpose | Example |
|---|---|---|
| IRS initial response | Date / nature | 2026-07-15 / Accepted |
| Federal refund amount | Actual recovery | $20,250 |
| Federal refund date | When received | 2026-08-12 |
| State refund amount | Actual recovery | $8,100 |
| State refund date | When received | 2026-09-22 |
| IRS questions raised | If any | None |
| Appeal needed | Y/N | N |
| Total actual recovery | Sum | $28,350 |
| Variance from estimate | Actual vs. estimated | -$150 (-0.5%) |
| Final Priceless fee | Billed and collected | $3,500 |
| Engagement closed | Date | 2026-09-30 |

### Cascade tracking

| Field | Purpose | Example |
|---|---|---|
| Cascade to TY 2023 | Y/N | Y |
| TY 2023 status | Cross-ref to separate log entry | See PL-1042-TY2023 |
| Cascade to TY 2024 | Y/N | Y |
| TY 2024 status | Cross-ref | See PL-1042-TY2024 |

### Closed / not pursued entries

For declined clients:

| Field | Purpose | Example |
|---|---|---|
| Decision date | When declined | 2026-04-15 |
| Decline reason | Specific | Recovery $4,500 < 3x prep cost threshold |
| Re-screen trigger | When to revisit | At TY 2025 engagement renewal |
| Client notified | Y/N | N (not presented, internal decision) |

For Not-a-candidate:

| Field | Purpose | Example |
|---|---|---|
| Screen date | When reviewed | 2026-04-08 |
| Not-candidate reason | Why no pursuit | SOL expired (filed late 2023, SOL passed Oct 2025); no income growth year-over-year suggesting material misses |

## Sample log entries

### Entry 1: Tier 1, pursued, successful

```
Client: Smith Enterprises LLC (Jane Smith, owner)
Client ID: PL-1042
Tax year: 2022
Client segment: S corp (e-commerce)
State(s): NY, NJ

Screen date: 2026-04-10
Screener: Priya K.
Y-count: 7
Tier: 1
Hypotheses: NY PTET credit not claimed; NJ BAIT credit missed; §199A under-claimed; reasonable comp low

Stage 2 date: 2026-04-18
Stage 2 reviewer: Rahul P.
Findings: 4 (itemized in file PL-1042-Stage2-Findings.md)
Aggregate recovery: $28,500 (federal $18K / NY $7.5K / NJ $3K)
Senior signoff: Tony — 2026-04-19

Decision date: 2026-04-19
Decision: PROCEED
Rationale: 11.4x recovery/cost ratio; SOL expires 2026-04-15 on NY + NJ state amendments — urgent
Fee structure: Contingent 25%
Expected firm revenue: $7,125

Client conversation: 2026-04-22
Outcome: Accepted (but switched to flat fee $3,500)
Engagement letter signed: 2026-04-23

Prep start: 2026-04-25
Internal review: 2026-05-01
Partner signoff: 2026-05-02
1040X filed: 2026-05-05
NY IT-201-X filed: 2026-05-06
NJ NJ-1040-X filed: 2026-05-06

IRS response: 2026-07-15 — Accepted
Federal refund: $20,250 (2026-08-12)
NY refund: $7,100 (2026-09-05)
NJ refund: $1,000 (2026-09-22)
Total actual: $28,350
Variance: -$150 (-0.5%)
Final fee: $3,500 (flat)
Closed: 2026-09-30

Cascade:
- TY 2023: Y — see entry PL-1042-TY2023 (same issues, similar recovery expected)
- TY 2024: Y — see entry PL-1042-TY2024 (current — will integrate into current-year work)
```

### Entry 2: Tier 3, declined

```
Client: Johnson Consulting (Mike Johnson)
Client ID: PL-1875
Tax year: 2023
Client segment: Sole proprietor consultant

Screen date: 2026-04-12
Screener: Priya K.
Y-count: 2
Tier: 3
Hypotheses: HSA contribution missed ($3,850); no SEP / solo 401(k) contribution ($15K max)

Stage 2 date: N/A (did not advance)

Decision date: 2026-04-12
Decision: NOT PURSUED (Tier 3)
Decline reason: Estimated recovery $5K-$7K; below 3x threshold when factoring prep cost. Items flagged for current-year forward planning.
Re-screen trigger: TY 2024 engagement; if similar pattern, consider bundled amendment for 2023+2024.
Client notified: N
```

### Entry 3: Not a candidate

```
Client: Wilson Medical PLLC (Dr. Paul Wilson)
Client ID: PL-0892
Tax year: 2022
Client segment: Medical practice (SSTB)

Screen date: 2026-04-08
Screener: Priya K.
Y-count: 1
Tier: Not a candidate
Reason: Client joined Priceless in TY 2023; 2022 return not in our file. Insufficient data to screen. Noted for future engagement if client provides 2022 return.
```

## Log hygiene

- **One row per client × tax year** — not per engagement, per screening touch
- **Updated as work progresses** — not backfilled at end
- **Reviewed monthly** — Tony or senior reviews log monthly to catch stalled engagements and pattern-shift
- **Anonymized exports** for pattern analysis — what screening criteria correlate with successful engagements; refines SCREENING-MATRIX over time

## Portfolio-level metrics to track

From aggregated log data, monthly:

| Metric | Purpose |
|---|---|
| Clients screened this month | Throughput |
| Tier 1 conversion rate | Screening accuracy |
| Tier 2 → Stage 2 advancement rate | Follow-through |
| Stage 2 → Stage 4 conversion rate | Economic discipline |
| Stage 4 client acceptance rate | Pricing / presentation quality |
| Average engagement cycle time | Efficiency |
| Estimate-to-actual variance | Calibration quality |
| Firm revenue from prior-year sweep YTD | Business impact |
| Remaining TY 2022 clients un-screened | SOL urgency |

## Storage

Log lives in CRM or a dedicated spreadsheet with one tab per year of sweep (TY 2022 sweep, TY 2023 sweep, TY 2024 sweep). Cross-reference to individual client engagement folders for detailed findings.

Do NOT commingle prior-year engagement data with current-year engagement folders — keep separate for scope clarity and billing discipline.

## Privacy and professional considerations

- Decision log contains sensitive client data — store per Priceless data handling standards
- Anonymize for any external sharing or training data
- Retain per document retention policy (typically 7 years minimum for tax-related work)
- Include in client file if requested (professional requirement — client has right to see their own data)
