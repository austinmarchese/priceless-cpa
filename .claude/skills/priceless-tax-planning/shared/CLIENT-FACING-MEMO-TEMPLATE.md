# Client-Facing Memo Template

This file defines how the internal partner-review memo is converted into the deliverable the client actually receives. The internal memo (per `OUTPUT-TEMPLATES.md`) is the methodology workpaper; the client-facing deliverable is what gets sent.

## Two-format deliverable

Every quarterly engagement produces **two files** for the client:

1. **PDF Narrative Memo** — the story. What we analyzed, what we recommend, what the client should do, when. Designed to be read top-to-bottom.
2. **Excel / Google Sheets Model** — the numbers. Projection, strategy savings calculations, payment schedule, scenario comparison. Designed to be opened when the client wants to see the math or model alternatives.

The narrative memo references the Excel model at specific points ("see Projection tab for full YTD-through-year-end breakdown"). The Excel model includes a Notes tab that references back to the narrative. They're a set.

Why two files instead of one:
- Clients who are CFO types, investment firm owners, doctors with finance acumen want spreadsheet access
- Less-technical clients read the PDF and ignore the spreadsheet
- Partner review is easier on the narrative; senior staff QC is easier on the spreadsheet
- Automation (Excel updates from structured task block) targets the spreadsheet cleanly

## PDF narrative memo structure

Three tier templates. Structure is tier-dependent; content is engagement-specific.

### Foundational tier (2-3 pages, $4K+/year)

```
================================================================
COVER PAGE
================================================================
Priceless CPA — [Client Name]
Quarterly Tax Plan — [Q1/Q2/Q3/Q4] [Year]
Prepared: [Date] | Partner: [Name, CPA]

================================================================
PAGE 1 — COVER LETTER
================================================================
Dear [Client First Name],

Here is your [Q2 2026] tax plan. Three things to know:

1. [Top line: projected tax, whether ahead/behind safe harbor]
2. [Top priority action with deadline]
3. [Second priority action]

This quarter we focused on [1-2 sentence description of what we worked on].
You should expect to spend about [time estimate] reviewing this and providing 
input on [specific open decisions].

Next quarterly check-in: [date approximately 3 months out].

As always, if [urgent scenario: material income change, property sale, 
hiring decision] comes up before then, reach out immediately — timing 
matters for most strategies.

[Partner signature block]
[CPA, Priceless CPA]
[phone] | [email]

================================================================
PAGE 2 — WHERE YOU STAND
================================================================
[Highlighted numbers box — visual emphasis:
   Projected Total Tax 2026: $XX,XXX
   Already Paid Toward 2026: $XX,XXX
   Next Payment Due: $XX,XXX on [DATE]
]

[2-3 sentence narrative: "Based on your YTD income through [date] and 
our projection for the balance of the year, we project your total 2026 
federal and state tax to be $XX,XXX. You've paid $XX,XXX toward this 
through [payroll withholding + estimated payments + employer-side 
FICA]. To stay ahead of underpayment penalties, the next estimated 
payment of $XX,XXX is due [DATE]."]

[Bulleted list: key assumptions]
Our projection assumes:
  • Your Q2-Q4 revenue will track at roughly [monthly rate]
  • No property sales or major asset dispositions
  • [Client-specific assumption]
If any of these change materially, let us know — the projection and 
recommended payments will shift.

[Reference: See attached Excel model, Projection tab, for detail]

================================================================
PAGE 3 — WHAT WE RECOMMEND
================================================================
Top 3-5 strategies, each in plain language:

1. [Strategy Name — Client-Friendly]
   Estimated tax savings: $X,XXX
   What it is: [2-3 sentences, no IRC citations]
   What we need from you: [specific decision or action with deadline]
   What we'll do: [our part of the work]
   
2. [Strategy 2]
   ...

================================================================
PAGE 3 (continued) — HOW TO PAY
================================================================
Next payment: $X,XXX federal + $X,XXX state, due [date]

Federal payment options:
  • IRS Direct Pay: https://www.irs.gov/payments/direct-pay
  • EFTPS: https://www.eftps.gov/eftps/
  • Mail check with Form 1040-ES voucher (we can provide)

State payment ([state-specific link]):
  • [State portal URL]
  • Instructions: [brief]

If you prefer, we can handle payment submission for you — just confirm 
and we'll process via your payment authorization on file.

================================================================
```

### Comprehensive tier (5-8 pages, $8K+/year)

Everything in Foundational, plus:

```
SECTION: MULTI-ENTITY ROLLUP (if applicable)
Brief narrative explaining how entities interact. Table showing 
each entity's contribution to total tax picture. Reference to 
Excel for detail.

SECTION: STRATEGY DEEP DIVE (top 8 strategies vs. top 5)
For each strategy, add a short "Why this fits you" paragraph 
specific to the client's facts. Still no IRC citations, but 
more substantive reasoning.

SECTION: LOOKING FORWARD
Multi-year considerations (per the updated Operator 5):
"This year's recommendation assumes current income levels. If 
we expect [material change next year], we may want to reconsider 
[specific strategy]. Example: if you close on the commercial 
building sale in early 2027 as discussed, we'd recommend holding 
back some §179 this year rather than front-loading."

SECTION: SEPARATE ENGAGEMENTS AVAILABLE (if recommended)
Clean scope+fee blocks for each:
"Cost Segregation Study — Coconut Grove Property
 Scope: Engineering-based study to identify 5-7, 15-year assets 
        within the building basis, enabling accelerated depreciation.
 Fee: $3,500
 Timeline: 6 weeks
 Expected first-year tax savings: $28,000
 Decision needed by: [date]
 [Accept checkbox / contact link]"

SECTION: FINANCIAL PRODUCT OVERLAY (if applicable, Path B disclosure)
When products are recommended, full Tier 2/3 disclosure block 
per REFERRAL-DISCLOSURE-FRAMEWORK.md is embedded here.
```

### Full Wealth tier (10-15 pages, $14K+/year)

Everything in Comprehensive, plus:

```
SECTION: CAPITAL DEPLOYMENT CONSIDERATIONS (if qualifying)
Operator 8 output. Specific opportunities evaluated. Partner's 
notes on why these fit (or don't) for the client's situation.
Not a product pitch — a considered analysis of where capital 
deployment could reduce total tax burden while fitting client 
profile.

SECTION: ESTATE COORDINATION NOTES
Flags for estate attorney referral, gifting considerations, 
trust planning flags. Not estate planning itself — that's the 
attorney's job. This is tax-adjacent estate coordination.

SECTION: 3-YEAR PLANNING OUTLOOK
Narrative on where client's tax situation is heading based on 
business trajectory, personal events, and planned decisions.
Not a 3-year projection model — a strategic framing.

APPENDICES:
A: Strategy comparison tables
B: Prior-quarter follow-through tracking (what we recommended last 
   quarter, what got done, what moved to this quarter)
C: Affiliate coordination memo (Path B)
D: Partner dedicated time log (how Full Wealth hours were used)
```

## Conversion rules: Internal memo → Client-facing memo

The partner converts the internal draft to client-facing in a target of 30-45 minutes per memo. The rules below make that feasible.

### Things to STRIP from the internal memo

- All "OPEN QUESTIONS FOR PARTNER" sections (resolved before client sees)
- All IRC citations, Treas. Reg. references, case citations in footnotes
- All authority references in body text (e.g., "per §199A(d)(2)") → reword to plain language
- All internal methodology notes ("analyst applied simplified method for home office")
- All data integrity flags that were resolved
- All compliance procedural notes (unless there's a §7216 consent or disclosure the client needs to sign)
- The structured task block (that's for Karbon automation, not for clients)
- Partner QC checklist items
- References to the skill itself or AI assistance

### Things to TRANSLATE (keep meaning, change language)

| Internal language | Client-facing language |
|---|---|
| "S-Corp Reasonable Compensation per §1366" | "Salary optimization review" |
| "§199A QBI phase-out analysis" | "Qualified Business Income deduction" |
| "§280A(g) home rental strategy" | "Augusta Rule — renting your home to your business" |
| "Accelerate §179 under OBBBA 2025" | "Equipment deduction acceleration" |
| "Operator 8 Capital Deployment" | "Advanced investment opportunities" |
| "Tier 2 disclosure required per AICPA §1.520" | [full disclosure block, clearly labeled] |
| "Aggressive position — §6662 disclosure considered" | [either dropped after partner declined, or plainly framed: "This is a less-established position; here's the analysis of the risk and reward"] |

### Things to ADD to the client-facing memo

- Cover letter (the human voice — partner's name, warmth, next check-in date)
- Payment instructions with actual live URLs
- "What we need from you" specificity on each recommendation
- Timeline expectations ("we'll have an answer for you by [date]")
- Invitation to ask questions ("if any of this is unclear, a 15-minute call clears it up — book here: [link]")

### Things to KEEP AS-IS

- Dollar amounts (projections, savings estimates, payment amounts)
- Deadlines and dates
- Strategy recommendations' substantive content
- Assumption statements (clients need to verify these)
- Tier-appropriate sections

### Conversion workflow (for partner)

1. Open internal memo in preferred editor (Word, Google Docs, markdown — partner's choice)
2. Save-as to client-facing draft
3. Strip the sections listed above (takes ~5 minutes)
4. Translate technical language using the table above (~10 minutes)
5. Write the cover letter personally — do not auto-generate (~10 minutes)
6. Verify payment amounts and links are live and correct (~3 minutes)
7. Add any personal notes or context specific to the client relationship (~5 minutes)
8. Final proof-read for tone (~5 minutes)
9. Export to PDF with Priceless letterhead
10. Upload PDF + generated Excel model to client portal / email to client
11. Mark engagement complete in Karbon, create follow-up tasks

Total: 35-45 minutes per memo. Achievable with discipline.

---

## Excel / Sheets model structure

Companion to the PDF. Seven tabs, standardized across all engagements.

### Tab 1: Dashboard

Single page. Shows top-line numbers. Client reads this if nothing else.

Cells include:
- Engagement ID, Client ID, Tax Year, Quarter, Tier (auto-filled)
- Projected Total Tax [current year] — HIGHLIGHTED in box
- Paid Year-to-Date — HIGHLIGHTED in box
- Next Payment Due — HIGHLIGHTED in box, with date and amount
- Total Projected Strategy Savings — HIGHLIGHTED in box
- Safe Harbor Status (green/yellow/red indicator: ahead / on track / behind)
- Link buttons (or cells with URL) to each subsequent tab

### Tab 2: Projection

The actual projection math. Laid out in a transparent, verifiable way.

Columns:
- Line Item (Wages, K-1 Ordinary, Schedule E, etc.)
- Prior Year Actual
- YTD Actual (through [data date])
- Projected Remainder
- Projected Full Year
- Notes / Assumptions

Rows aggregate up to:
- Total Income
- Adjustments
- AGI
- Deductions (standard vs. itemized, whichever is larger)
- Taxable Income
- Regular Tax
- Alternative Minimum Tax (if applicable)
- Credits
- Self-Employment Tax
- Net Investment Income Tax (if applicable)
- Additional Medicare Tax (if applicable)
- State Tax (computed per state, by entity of origin if multi-state)
- **Total Tax** (highlighted)

Below the main table:
- Tax Prepayments section:
  - Federal: Withholding (W-2) + Quarterly Estimated + Prior-Year Overpayment Applied + Employer-Side FICA/Medicare (for S Corp owners — informational, since it's employer obligation but owner is economically paying both sides)
  - State: Same breakdown per state
- **Next Payment Amount + Date** (highlighted)

Formulas visible and traceable. No hidden cells.

### Tab 3: Strategy Savings

Each recommended strategy in its own row.

Columns:
- Strategy Name
- Current-Year Estimated Savings (federal + state)
- Implementation Complexity (Low / Medium / High)
- Client Decision Needed (Y/N + what)
- Priceless Task Required (Y/N + what)
- Separate Engagement Fee (if applicable)
- Net Benefit (Savings − Engagement Fee)
- Status (Recommended / Approved / Implemented / Declined)

Totals row at bottom. Status column drives a pivot-table view of implementation progress.

### Tab 4: Payment Schedule

Quarterly payment plan for the year, federal + state + payroll.

Columns:
- Payment Type (Fed ES, State ES, Payroll Withholding, Employer-Side FICA, etc.)
- Entity / Source (which entity, which person)
- Due Date
- Amount
- Status (Scheduled / Paid / Late)
- Payment Method Used (Direct Pay, EFTPS, Check, Payroll)
- Confirmation Number
- Payment URL / Instructions

Federal Direct Pay and EFTPS URLs embedded. State URLs per state. For S Corp owners, includes the next payroll run's withholding as an implied prepayment.

### Tab 5: Scenario Comparison

Side-by-side columns. Useful for "what if we do/don't do strategy X?"

- Baseline (no strategies)
- Recommended (strategies as described)
- Alternative (another combination partner may want to evaluate)
- Aggressive (if partner includes)

Rows show the full P&L-to-total-tax walkdown for each scenario. Delta column between baseline and recommended. This is where clients can visualize "what am I actually getting for the engagement fee."

### Tab 6: Multi-Year Considerations

Per your Operator 5 expansion. Shows specific decisions where this-year-optimal differs from next-year-optimal.

Columns:
- Strategy / Decision
- This-Year Optimal
- Next-Year Consideration
- Recommended Choice
- Why (brief)

Example row:
- Strategy: Bonus Depreciation on Delivery Vehicles
- This-Year Optimal: Full 80% bonus = $48,000 deduction now
- Next-Year Consideration: Revenue projected up 40% next year (bracket change); deduction worth more then
- Recommended Choice: Take $30,000 this year via §179 limited election, preserve $18,000 basis for 2027 depreciation schedule
- Why: Client expects bracket jump; deferring adds ~$2,000 in permanent savings

### Tab 7: Assumptions & Notes

All the assumptions baked into the projection in one place. Client verifies.

Sections:
- Income assumptions (run-rate, one-time items, client inputs needed)
- Expense assumptions (major categories with notes)
- Strategy assumptions (which strategies assumed implemented, which pending decision)
- Personal situation assumptions (filing status, dependents, state of domicile)
- Planning decisions flagged (multi-year choices pending)

Each row has a "Confirm / Edit" notation for the client.

Methodology notes at the bottom:
- Safe harbor calculation method used (110% of prior year tax since AGI > $150K, or 100%, or 90% of current year estimate — whichever Priceless selected)
- How payroll prepayments are counted
- Any special state-specific assumptions

### Formatting standards

- Highlighted numbers: bold + slightly larger font (12pt vs 10pt body) + in a box/frame
- Currency: $1,234 format (no cents unless amounts are < $100)
- Percentages: 3.5% (one decimal)
- Dates: April 15, 2026 (written out) in narrative cells; 2026-04-15 in date-typed cells
- Negative numbers: red parentheses (1,234) — no minus sign
- N/A cells: "—" (em dash, not blank)
- Formula cells: pale gray fill (visible but not distracting)
- Input cells (client-editable for scenario modeling): pale yellow fill
- Protected cells: no fill, non-editable

### File conventions

- Filename: `[ClientID]_[Year]_[Quarter]_TaxPlanningModel.xlsx`
- Google Sheets alternative: same filename, in client's shared Google Drive folder
- Partner chooses format per client preference (captured in client profile Section 8)
- Master template maintained in Priceless shared drive: `_TEMPLATES/TaxPlanningModel_Master_v0.4.xlsx`

### Automation integration

The structured task block (from internal memo) feeds Excel via a script:
- Strategy rows populate Tab 3 automatically
- Payment schedule rows populate Tab 4
- Assumptions list populates Tab 7
- Dashboard totals calculate automatically

In v0.4, this automation is specified but not yet built. Built in Sprint 8 against a real engagement.

---

## Full sample Q2 Comprehensive memo

Below is a worked example. Client "Sarah Rodriguez" is an e-commerce S Corp owner, FL resident. AGI projected ~$680K. Tier: Comprehensive.

```
================================================================
                        PRICELESS CPA
                  Quarterly Tax Plan — Q2 2026
                     For: Sarah Rodriguez
================================================================

Prepared: June 4, 2026
Partner: Tony Chen, CPA

---

Dear Sarah,

Here is your Q2 2026 tax plan. Three things to know up front:

 1. We project your 2026 total federal + state tax at $218,000. You've 
    paid $142,000 toward it through Q1, and your Q2 estimated payment 
    of $28,400 is due June 15. You're on track for safe harbor.

 2. Top priority this quarter: formalize your accountable plan and 
    begin the Augusta Rule monthly meetings. Combined, these will 
    save approximately $9,200 in 2026 taxes. Both need to be in 
    place by July 1 to capture the full remaining-year benefit. 
    We've attached the documents for your signature.

 3. A strategic decision for you: your Solo 401(k) capacity for 2026 
    is $69,000 combined employee + employer. At current salary of 
    $180K, the optimal split favors more employer contribution. But 
    if we're going to move toward adding a Cash Balance Plan in 2027 
    (as we discussed), we should increase your W-2 salary this year 
    to establish the higher comp baseline. I'd like a 20-minute call 
    to talk through the trade-off.

This quarter we focused on baseline projection, reasonable 
compensation review, and strategy prioritization for the remainder 
of 2026. Next quarterly check-in: early September (Q3 planning).

As always, if anything material changes — new large product launch, 
the Houston warehouse purchase you mentioned, hiring your first 
full-time employee — please reach out. Timing matters for most 
strategies.

Warmly,
Tony Chen, CPA
Priceless CPA
tony@pricelesscpa.com | (305) 555-0199

---

WHERE YOU STAND
================================================================

┌──────────────────────────────────────────────────────────────┐
│  PROJECTED 2026 TOTAL TAX:           $218,000                │
│  PAID YEAR-TO-DATE:                  $142,000                │
│  NEXT PAYMENT (Fed ES, due 6/15):    $28,400                 │
│  PROJECTED TOTAL STRATEGY SAVINGS:   $43,500                 │
└──────────────────────────────────────────────────────────────┘

Based on your YTD revenue through May 31 ($1,147,000) and our 
projection for the balance of the year, we project your 2026 AGI 
at $680,000 and total federal + Florida tax at $218,000. (Florida 
has no state income tax, so this is effectively all federal plus 
self-employment and Medicare additional taxes.)

You've paid $142,000 toward this through:
  • Q1 federal estimated payment: $28,400
  • Withholding from your $180K S Corp salary (YTD): $18,600
  • Employer-side FICA/Medicare paid by the S Corp (YTD): $13,800
  • Payroll tax and S Corp Q1 estimated: $81,200

Based on 110% of 2025's tax ($187,000 × 110% = $205,700), your 
2026 safe harbor target is $205,700. You're on track.

Key assumptions in our projection:
  • Your Q2-Q4 revenue will track at roughly $245,000/month 
    (slight seasonal uptick for Q4 holiday)
  • Amazon gross margin holds at 32%
  • No property sale or major asset disposition
  • Jake stays on the W-2 payroll through year-end at current rate
  • No new employee hires

If any of these change materially, let me know — projection and 
payments will shift.

(See attached Excel, Projection tab, for full detail.)

---

WHAT WE RECOMMEND
================================================================

Five strategies for 2026, in priority order.

1. FORMALIZE THE ACCOUNTABLE PLAN
   Estimated savings: $4,200
   Deadline for 2026 benefit: July 1
   
   Your home office, monthly phone/internet, and business mileage 
   are currently being handled as owner draws. With a formal 
   accountable plan in place, these reimburse to you tax-free and 
   deduct on the S Corp side. Based on your current expense mix, 
   annual deduction is approximately $14,500.
   
   What we need from you: Sign the attached accountable plan 
   document, set up a monthly expense report (template included), 
   start submitting starting July.
   
   What we'll do: Process the first reimbursement transaction to 
   calibrate with your bookkeeper, review first three submissions, 
   lock in for the balance of the year.

2. AUGUSTA RULE — MONTHLY BOARD MEETINGS IN YOUR HOME
   Estimated savings: $5,000
   Deadline for 2026 benefit: July 1 (to capture 6 remaining months)
   
   We can deduct up to 14 days per year of legitimate board 
   meetings held at your home, with the S Corp paying you FMV 
   rent for the meeting space. Annual rent: $2,000/day × 12 
   meetings = $24,000 deduction to the S Corp. The rental income 
   to you is tax-free under §280A(g).
   
   What we need from you: Hold the meetings (yes, actually hold 
   them — they're real business planning sessions), complete the 
   minutes template we've attached, take a photo at each meeting, 
   process the rental payment each month as a separate transaction.
   
   What we'll do: Handle the tax filing side; provide the year-end 
   summary for your records.

3. INCREASE SOLO 401(k) EMPLOYER CONTRIBUTION
   Estimated savings: $14,800
   Decision needed by: October 1
   
   Your current salary is $180,000. Your employee deferral is 
   $23,000. The employer contribution (25% of W-2) is currently 
   $22,500. At your current tax bracket (32% federal), each 
   additional $1,000 of employer contribution saves ~$320 federal 
   tax.
   
   Recommended action: Increase salary to $200,000 effective 
   July 1 (through year-end), enabling $10,000 additional 
   employer contribution and $14,800 total tax savings 
   (accounting for the reasonable comp W-2 side).
   
   Strategic note: This also sets the baseline for a Cash Balance 
   Plan we could layer in 2027 — see "Looking Forward" section.

4. CHARITABLE BUNCHING VIA DAF
   Estimated savings: $6,500
   Deadline: December 31
   
   You mentioned planning to donate $12,000 annually to the 
   [charity]. Over 2026-2028, that's $36,000. By contributing 
   the full $36,000 to a Donor-Advised Fund in 2026 (high-income 
   year for you) and then recommending annual grants from the 
   DAF over the next three years, you capture an itemized 
   deduction of $36,000 this year worth $6,500 tax savings vs. 
   taking the standard deduction in each of the three years.
   
   Funding source: We recommend donating 200 shares of [holding] 
   you've owned 5+ years at a cost basis of $8,000 and current 
   FMV of $36,000 — this avoids $4,500 of additional capital 
   gains tax you'd otherwise pay if you sold the shares to 
   donate cash.
   
   What we need from you: Open DAF at Fidelity Charitable 
   (attached instructions — 15 minutes online), initiate stock 
   transfer by November 30.
   
   Combined value: $6,500 deduction + $4,500 capital gains 
   avoidance = $11,000 effective savings.

5. HIRE JAKE (14 YEARS OLD) FOR PRODUCT PHOTOGRAPHY
   Estimated savings: $3,000
   Setup deadline: September 1 (for meaningful 2026 capture)
   
   Jake has been helping with product photography for the new 
   Shopify line. We can formalize this as legitimate employment. 
   Wages up to $14,600 (2026 standard deduction) are federal 
   income tax free to him. Because your S Corp pays, FICA 
   applies — so actual strategy for 2026 captures ~$3,000 in 
   savings. In 2027 we'll evaluate whether to spin up a family 
   management sole prop for the FICA exemption.
   
   Bonus setup: Jake opens a Roth IRA, contributes his earned 
   income, grows tax-free for decades.
   
   What we need from you: Approve the job description (attached), 
   set hourly rate ($18/hour reasonable for skilled product 
   photography), approve Roth IRA custodial account at Fidelity.

[See attached Excel, Strategy Savings tab, for detail and 
scenario comparison.]

---

LOOKING FORWARD (Multi-Year Considerations)
================================================================

Three decisions this year have 2027 implications worth noting:

1. SALARY TO SUPPORT 2027 CASH BALANCE PLAN
   If we add a Cash Balance Plan in 2027 (which makes sense 
   at your income level — could add $80K-$120K additional 
   deduction), the contribution is based on highest-3-year 
   average comp. Setting salary at $200K this year (recommendation 
   #3) establishes the baseline. Keeping at $180K this year 
   means the CBP capacity in 2027 is lower.

2. BONUS DEPRECIATION ON THE HOUSTON WAREHOUSE
   You mentioned likely purchasing the Houston warehouse in Q4 
   for $850K. Under OBBBA 2025, 100% bonus depreciation is still 
   available. BUT — and this is the multi-year question — your 
   income in 2027 is likely to be higher than 2026 based on the 
   Shopify line growth. Taking full bonus in 2026 saves ~32% on 
   the deductible portion. Deferring via MACRS saves ~35% in 
   2027 on the same deduction spread over 39 years. Partial 
   bonus + spread makes sense.
   
   Decision: Let's plan a 30-minute call in November to finalize.

3. JAKE'S FUTURE EMPLOYMENT STRUCTURE
   If he continues working for the business, moving to a family 
   management sole prop in 2027 captures the FICA exemption for 
   children under 18, saving ~$2,200/year in payroll tax. Setup 
   in January 2027 gives us a clean run.

---

SEPARATE ENGAGEMENTS AVAILABLE
================================================================

Three opportunities we've identified that would be separate 
engagements beyond your quarterly planning retainer.

┌──────────────────────────────────────────────────────────────┐
│ COST SEGREGATION STUDY — Houston Warehouse (post-close)      │
│                                                              │
│ Scope: Engineering-based study to identify 5, 7, and         │
│        15-year property within the building basis,           │
│        enabling accelerated depreciation.                    │
│ Fee: $4,200                                                  │
│ Timeline: 8 weeks from close                                 │
│ Expected first-year savings: $34,000 (federal)               │
│ Net benefit year 1: $29,800                                  │
│ Decision needed by: Before warehouse close (Oct-Nov)         │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ CASH BALANCE PLAN DESIGN — 2027 Implementation               │
│                                                              │
│ Scope: Actuarial design, plan document, custodian setup,     │
│        first-year compliance.                                │
│ Fee: $4,500 setup + $3,200 annual admin                      │
│ Timeline: 90 days to complete before 12/31/2027              │
│ Expected first-year savings: $40,000-$65,000                 │
│ Decision needed by: March 2027                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ S CORP BASIS STUDY — Clean-up from 2021-2023                 │
│                                                              │
│ Scope: Reconstruct basis tracking for periods prior to       │
│        Priceless engagement. Important for future             │
│        distribution planning and potential sale.              │
│ Fee: $1,800                                                  │
│ Timeline: 4 weeks                                            │
│ Expected value: Not about tax savings — risk mitigation      │
│                 for future distribution planning.             │
│ Decision needed by: End of 2026 ideally                      │
└──────────────────────────────────────────────────────────────┘

To accept any of these: reply to this email or schedule a call. 
We'll send a separate engagement letter for each approved item.

---

HOW TO PAY Q2 ESTIMATED TAX
================================================================

Federal Q2 Estimated Payment
  Amount: $28,400
  Due: June 15, 2026
  Payment options:
    • IRS Direct Pay: https://www.irs.gov/payments/direct-pay
      (Recommended — free, takes 3 minutes)
    • EFTPS: https://www.eftps.gov/eftps/
    • Check with Form 1040-ES (we can provide form — reply here)
  
Florida: No state income tax. No state estimated payment required.

Payroll prepayments (automatic, no action needed):
  • Your regular bi-weekly salary continues to withhold
  • S Corp's quarterly 941 and Florida RT-6 continue on schedule
  • These are counted toward the $218,000 total tax picture

If you prefer we handle the payment submission, just reply and 
we'll process it from your payment authorization on file.

---

QUESTIONS OR DISCUSSION
================================================================

A 15-20 minute call clears most questions. Calendar: 
https://calendar.pricelesscpa.com/tony

Otherwise, reply to this email and I'll respond within a business 
day.

Next quarterly check-in: early September.

[END OF NARRATIVE MEMO]
```

The corresponding Excel model has the 7 tabs populated with Sarah's specific numbers: projection math, strategy savings calculations, payment schedule (6/15 Fed ES plus payroll withholding schedule), scenario comparison (baseline vs. recommended), multi-year considerations table (the 3 decisions from "Looking Forward"), and assumptions (revenue run-rate, margin assumption, no property sale, etc.) for Sarah to verify.

---

## Version history

- v1.0 (April 2026, v0.4): Initial template, three tier structures, conversion rules, Excel model specification, full sample Q2 Comprehensive memo (Sarah Rodriguez example)
