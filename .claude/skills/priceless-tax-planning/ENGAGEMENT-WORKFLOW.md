# Engagement Workflow — Cookbook for the Team

This file is the step-by-step guide to running a quarterly tax planning engagement using the Priceless CPA tax planning skill.

## Who should read what

This document has four parts. Read the parts relevant to your role.

| Part | Primary audience | Purpose |
|------|-----------------|---------|
| Part 1: Core workflow | Everyone | The 4-phase structure, what each phase does, prompts |
| Part 2: Offshore analyst deep dive | Offshore analysts (India, Philippines) | Tutorials, common mistakes, detailed QC checklists, escalation |
| Part 3: Senior planning staff additions | US senior staff | Judgment prompts, edge case handling, upstream/downstream coordination, cross-engagement pattern recognition |
| Part 4: Partner-specific content | Partners (credentialed CPAs) | Review checklists, risk assessment, client conversion guidance, engagement profitability, firm-strategic signals |

**New team members**: read Part 1 + Part 2 end-to-end before running your first engagement.

**Experienced offshore analysts**: reference Part 1 and Part 2 as needed; skip tutorials you've outgrown.

**Senior staff moving up from analyst role**: Part 1 + Part 3 (Part 2 is still useful reference).

**Partners**: Part 1 is shared vocabulary with the team; Part 4 is yours.

---

# PART 1: Core Workflow (All Audiences)

---

## Why quarterly tax planning matters to Priceless

Before we get into mechanics, the context you need:

Priceless CPA charges clients $4,000-$14,000+ per year for quarterly tax planning as a retainer service. That's a premium fee. Clients pay it because we do three things well that DIY and other accountants don't:

1. **We project forward, not just report backward.** Most CPAs tell clients what happened last year. We tell them what will happen this year and what to do about it.
2. **We surface strategies the client didn't know existed.** Most business owners know about S Corp elections. They don't know about Augusta Rule, accountable plans, DB plan overlays, or capital deployment strategies. We do.
3. **We coordinate across tax, payroll, bookkeeping, and planning** so nothing falls through cracks. Most other firms have these services siloed.

Your job as the analyst is to produce the draft that the partner reviews and converts into the client deliverable. You are the first 80% of the work. The partner is the final 20% — review, risk judgment, client relationship.

If your draft is sloppy or incomplete, the partner spends hours fixing it. That's unit-economically bad for the firm. If your draft is thorough, the partner spends 30-60 minutes reviewing and signing off. That's how we make the service profitable.

Quality matters. Take the time.

---

## The four phases of a quarterly engagement

Every engagement runs through four phases in sequence:

**Phase 1: Data Intake and Bookkeeping QA**
Verify the client's books are clean enough to project from. If they're not, stop and flag.

**Phase 2: Projection**
Build the baseline — what would the client's tax look like if they did nothing different?

**Phase 3: Strategy**
Identify strategies from the library that fit the client's situation; rank by value and timing.

**Phase 4: Synthesis**
Assemble the internal memo and the Excel model. Flag open questions for partner.

Each phase has its own prompts, quality checks, and handoffs. Do not skip phases. Do not combine phases into a single Claude prompt — each phase needs Claude's full attention.

---

## Before you start: prerequisites checklist

Do not open the Claude session until all of these are true. If any are missing, the engagement produces bad output.

### Required documents (all redacted per REDACTION-PROTOCOL.md)

**Prior year (for reference, comparison, and trend analysis):**
- [ ] Prior year personal return (1040 with all schedules and K-1s)
- [ ] Prior year business return(s) (1120S, 1065, or 1120, as applicable)
- [ ] Prior year full-year P&L from QBO
- [ ] Prior year full-year Balance Sheet from QBO
- [ ] Prior year full-year General Ledger from QBO (transaction detail; can be summarized for very old engagements, full detail for most recent year)

**Current year (for projection and planning):**
- [ ] Current year YTD P&L from QBO (accrual basis, by month)
- [ ] Current year YTD Balance Sheet from QBO
- [ ] Current year YTD Trial Balance from QBO
- [ ] Current year YTD General Ledger from QBO (full transaction detail)
- [ ] Current year YTD payroll register (Gusto or equivalent)
- [ ] Any brokerage 1099s or realized gain/loss summaries for YTD
- [ ] Quarterly 941 filings for current year (federal payroll tax paid)
- [ ] State unemployment filings for current year

**Why GL and prior-year financials matter:**
- GL detail is where classification errors show up. The P&L might look clean at the summary level while the GL reveals that "$8,400 of 'office supplies'" is actually the owner's Amazon personal purchases.
- Prior-year financials (not just the prior-year tax return) let us see trend. Is revenue really up 20%, or is this just seasonality? Is the gross margin normal, or shifting?
- Trial balance is the fastest way to catch obvious classification errors (negative asset balances, positive contra-account balances, etc.) before diving into GL detail.

**Reference materials:**
- [ ] Client profile document (CLIENT-PROFILE-TEMPLATE.md completed for this client, current year)
- [ ] Any notes from the engagement manager on current-year events or client context

### Required metadata

- [ ] Client's Karbon engagement ID recorded
- [ ] Current quarter confirmed (Q1 / Q2 / Q3 / Q4)
- [ ] Engagement tier confirmed (Foundational / Comprehensive / Full Wealth)
- [ ] Any known events for current year documented in client profile Section 10

### Required compliance checks

- [ ] Client is NOT an attest client of Priceless (if they are, flag — blocks Path B recommendations)
- [ ] Engagement letter signed for current year, including AI disclosure
- [ ] §7216 consent in place if affiliate information sharing is anticipated
- [ ] Priceless is licensed to practice in the client's state (check licensure list)

### Required reconciliation pre-check

- [ ] Bank accounts in QBO reconcile to bank statements through month prior
- [ ] Payroll 941 filings match QBO payroll expense through month prior
- [ ] No obvious classification errors in P&L (owner personal expenses not in business expenses, etc.)

If any of these are missing or uncertain, stop and raise with the engagement manager before starting the Claude session. Running Claude on bad inputs produces bad output. Don't waste the partner's review time.

---

## Phase 1: Data Intake and Bookkeeping QA

### What this phase does

Verifies the client's books are in good enough shape to project from. Identifies data integrity issues that would distort projection. Produces a short summary: "books are clean — proceed to projection" OR "books have issues — here they are, they block projection."

### Typical time

15-30 minutes of Claude session time + 5-10 minutes for your QC.

### Prompts

**Prompt 1 — Initialize the engagement:**

```
I'm starting Q[N] [YEAR] quarterly tax planning for [Client ID] using the 
priceless-tax-planning skill.

Engagement details:
- Karbon engagement ID: [ID]
- Current quarter: Q[N] [YEAR]
- Engagement tier: [Foundational | Comprehensive | Full Wealth]
- Client state: [state]
- Entity types: [S Corp | Partnership | Sole Prop | Multiple]

Attached (all redacted per firm protocol):

Prior year reference materials:
- Prior year 1040 with all schedules and K-1s
- Prior year [1120S/1065] for [entity name]
- Prior year full P&L, Balance Sheet, and General Ledger from QBO

Current year materials:
- YTD P&L through [date] (accrual, by month)
- YTD Balance Sheet through [date]
- YTD Trial Balance through [date]
- YTD General Ledger through [date]
- YTD payroll register
- Quarterly 941 filings YTD
- Brokerage 1099s / realized gain-loss if applicable

Reference:
- Client profile (completed template)
- Engagement manager notes (if any)

Please run Phase 1 — Data Intake and Bookkeeping QA — per the skill's 
workflow. Report:
1. Whether the data is complete or what's missing
2. Any reconciliation issues:
   - QBO balance vs. bank statement
   - Payroll expense vs. 941 filings
   - Prior year ending balances carried to current year opening
3. Any classification issues (scan GL for owner personal expenses miscoded, 
   vendor consistency, unusual one-time items misclassified as recurring)
4. Any trend anomalies (current year vs. prior year — revenue/margin/expense 
   categories that look materially different and may warrant investigation)
5. Any basis issues surfaced from the prior-year return
6. Your recommendation: proceed to Phase 2, or stop and fix data issues first

Do NOT begin projection or strategy work. This is QA only.
```

### What good Phase 1 output looks like

- Clear statement of data completeness (what's present, what's missing)
- Specific reconciliation findings with dollar amounts
- Classification flags with specific transactions identified
- Basis tracking confirmation or flag
- A clear "proceed" or "stop" recommendation

### What bad Phase 1 output looks like

- Generic statement like "books look fine" without specifics
- Skipping the reconciliation check
- Surfacing strategy recommendations (wrong phase)
- Not flagging obvious issues (e.g., $50K of "consulting" income with no matching 1099 source)

### Your QC on Phase 1

Before moving to Phase 2, verify:

- Does the reconciliation narrative make sense given what you can see in the documents?
- Are the flagged issues real, or did Claude invent concerns?
- Are there issues in the documents Claude missed?
- Is the "proceed/stop" recommendation appropriate?

If Claude's Phase 1 output is wrong or thin, say so:

```
Phase 1 output has issues:
1. You said bank reconciles but the Feb ending balance differs from 
   the QBO balance by $4,200 — please investigate
2. You did not flag the $12K "owner loan" that looks like it's actually 
   a distribution
3. Please redo Phase 1 with these corrections.
```

### When to stop instead of proceed

If Phase 1 surfaces material issues that would distort projection, STOP. Do not run Phase 2. Options:

- **Data completeness issues**: request missing documents from engagement manager, reschedule
- **Reconciliation issues**: ask bookkeeping team to clean up, reschedule
- **Classification issues**: if minor, proceed with Phase 2 adjusting for them; if major, fix first
- **Basis issues**: depending on severity, may still proceed with Phase 2 but note as open question for partner

When in doubt, stop and ask the engagement manager. It's much cheaper to fix data in Phase 1 than to discover the problem in Phase 4.

---

## Phase 2: Projection

### What this phase does

Builds the baseline projection: what would this client's 2026 tax picture look like if they did nothing different? This is the counterfactual against which every strategy's savings will be measured.

Also: projection must work for all 50 states and must include all forms of tax prepayment (including payroll withholding and employer-side payroll taxes for S Corp owners, per Q2 feedback).

### Typical time

30-60 minutes Claude session + 15-20 minutes for your QC.

### Prompts

**Prompt 2 — Run the projection:**

```
Phase 1 complete. Books are [clean / adjusted for X, Y, Z]. 

Proceed to Phase 2 — Tax Projection — per the skill's tax-projection 
sub-skill.

Produce:
1. Full-year projection with Prior Year Actual / YTD Actual / Projected 
   Remainder / Projected Full Year columns
2. All major line items from Gross Income through Total Tax
3. State tax for [client's state] (full treatment, not placeholder)
4. All forms of tax prepayment counted:
   - Federal withholding (W-2)
   - Federal quarterly estimated payments made
   - Prior-year overpayment applied forward
   - Employer-side FICA/Medicare paid by S Corp (owner is economically 
     paying both sides)
   - State withholding
   - State quarterly estimated payments
5. Safe harbor calculation (110% of prior year if AGI > $150K, else 100%)
6. Next payment amount and due date
7. Explicit assumptions statement (revenue run-rate, margin holds, etc.) 
   for client to verify
8. Forward-looking considerations per Operator 5 expansion: 
   specific decisions where this-year-optimal may differ from 
   next-year-optimal

Do NOT begin strategy recommendations yet.
```

### What good Phase 2 output looks like

- Complete projection table with all columns
- Math reconciles (Prior Year Actual matches filed return; YTD Actual matches QBO; Projected Full Year = YTD + Projected Remainder)
- State tax computed (not just "state tax applies")
- All prepayments counted including payroll side
- Safe harbor status clear (ahead/on track/behind)
- Next payment specific (amount + date + which form/portal)
- Assumptions explicit and testable
- Forward-looking flags where applicable

### What bad Phase 2 output looks like

- Math that doesn't reconcile (fix before moving on)
- Missing state tax or placeholder treatment
- Missing payroll prepayments from the prepayment total
- Vague assumption statements
- Surfacing strategy recommendations (wrong phase)

### Your QC on Phase 2

Verify:

- Prior year column matches the filed return you have in hand
- YTD column matches the QBO data
- Remainder projection has a clear methodology (run-rate, seasonally adjusted, known events)
- State tax is reasonable given the state's rate structure and the client's income level
- Prepayments total is correct
- Safe harbor calculation uses the right prior-year number and threshold
- Assumptions are stated, not assumed

If the projection has issues, provide specific feedback and ask Claude to redo.

### When Phase 2 produces unexpected results

Sometimes projection reveals something the team didn't know. Examples:

- Projected tax is 40% higher than prior year — investigate. Is revenue really up that much? Did a carryforward expire? Did something change in client's situation?
- Projected refund instead of owed — investigate. Are withholdings higher than needed? Did the client overpay estimates?
- Safe harbor status shows "behind" when team thought client was on track — investigate. Did an estimated payment fail? Did client miss a quarter?

Don't just accept Phase 2 output. Investigate surprises. The partner will catch them if you don't, and it's slower that way.

---

## Phase 3: Strategy

### What this phase does

Identifies strategies from the library that fit the client's profile. Ranks by estimated savings, timing window, implementation complexity, and tier appropriateness. Runs the eight cognitive operators including Operator 8 (Capital Deployment) for clients with AGI > $750K.

### Typical time

45-90 minutes Claude session + 20-30 minutes for your QC.

### Prompts

**Prompt 3 — Run strategy analysis:**

```
Phase 2 complete. Projection reconciled. Baseline total tax: $[amount].

Proceed to Phase 3 — Strategy — per the tax-strategy sub-skill.

Client tier: [Foundational / Comprehensive / Full Wealth]
Client AGI projection: $[amount]
Current quarter: Q[N]

Please:
1. Run the eight cognitive operators in sequence:
   1. Reconcile (confirm Phase 1 clean)
   2. Baseline (confirm Phase 2 complete)
   3. Reasonable Comp (if S Corp)
   4. Entity-Arbitrage (evaluate entity structure fit)
   5. Accelerate/Defer (evaluate timing with multi-year considerations)
   6. Stack (identify combinations)
   7. Financial Product Overlay (if Path B engagement and infrastructure 
      available)
   8. Capital Deployment (only if AGI > $750K AND foundational planning 
      is in place — confirm both before invoking)

2. For each applicable strategy:
   - Evaluate applies_when against client profile
   - Skip if already in place per profile Section 6
   - Estimate savings using strategy's savings_formula
   - Apply tier-based filtering
   - Rank by score

3. Produce ranked list of strategies with:
   - Estimated savings (federal + state)
   - Quarter/deadline for execution
   - Authority citations (for partner review, will be stripped from 
     client version)
   - Why this fits THIS client (specific to their facts, not generic)
   - Implementation steps
   - Documentation required
   - Stacking notes
   - Separate engagement required (Y/N + fee estimate)
   - Path B compensation tier (0-4)
   - Open questions for partner

4. Flag any strategies where this-year-optimal differs from next-year 
   optimal per Operator 5.
```

### What good Phase 3 output looks like

- Ranked list of strategies fit to the client's specific facts
- Each strategy has specific (not generic) "why this fits" reasoning
- Savings estimates grounded in the client's actual numbers
- Clear deadlines tied to the current quarter and tax calendar
- Authority citations present (for partner review)
- Open questions for partner explicitly flagged
- Multi-year considerations surfaced where applicable

### What bad Phase 3 output looks like

- Generic strategy recommendations that could apply to any client
- "$X savings" without the math showing how it was calculated
- Recommendations for strategies client already has (per profile Section 6)
- Missing deadlines or vague timing
- Recommending Capital Deployment for a $200K AGI client (wrong threshold)
- Skipping operators

### Your QC on Phase 3

Verify:

- Each strategy actually fits this client (check applies_when fields)
- No recommendations for strategies already in place
- Savings math checks out against client's numbers
- Deadlines are real and achievable given current date
- Capital Deployment appears only if AGI > $750K
- Path B items have appropriate compensation tier flagged
- Authority citations are current (not citing repealed provisions)
- Multi-year considerations flagged where relevant

### Edge cases

- **Multi-entity clients**: make sure strategies are evaluated at both entity and personal levels
- **Multi-state clients**: make sure state-specific strategies (PTET especially) are recommended for the right state
- **New-to-Priceless clients**: flag anything from the prior CPA's approach that needs unwinding
- **Complex life events**: major sale, divorce, relocation — may warrant tier upgrade recommendation

---

## Phase 4: Synthesis

### What this phase does

Assembles the internal partner-review memo and specifies the Excel model structure. This is what the partner reviews, revises, and signs off on before client-facing conversion.

### Typical time

20-40 minutes Claude session + 20-30 minutes for your QC.

### Prompts

**Prompt 4 — Assemble the memo:**

```
Phase 3 complete. Strategies ranked.

Proceed to Phase 4 — Synthesis — per the skill.

Assemble the internal partner-review memo using OUTPUT-TEMPLATES.md 
format for Q[N] [tier] tier.

Include:
1. Universal header with all metadata
2. All sections appropriate to tier
3. Forward-looking considerations (per Operator 5 expansion)
4. Multi-year decision table
5. Separate engagement scope blocks (if applicable)
6. Path B disclosure blocks (if applicable)
7. All open questions for partner explicitly flagged
8. Structured task block at end for Karbon automation

Also: specify the Excel model content for this engagement:
- Dashboard highlights
- Projection tab data
- Strategy savings tab rows
- Payment schedule entries
- Scenario comparison (baseline vs. recommended)
- Multi-year considerations
- Assumptions list for client verification
```

### What good Phase 4 output looks like

- Complete memo in OUTPUT-TEMPLATES format
- All tier-appropriate sections populated
- Math consistent with Phase 2 projection and Phase 3 strategy savings
- Clear open questions for partner (resolved before client sees)
- Structured task block valid and machine-parseable
- Excel model content fully specified (data to populate each tab)

### What bad Phase 4 output looks like

- Memo shorter than tier warrants
- Sections missing or perfunctory
- Math that doesn't tie back to prior phases
- Open questions either missing (bad) or unresolved items in client-facing language (bad)
- Structured task block malformed

### Your QC on Phase 4

This is the most important QC step. You are preparing the partner's reading material.

Verify:

- Header metadata complete and accurate
- Every dollar amount in the memo ties to Phase 2 or 3 output
- Every recommended strategy has: savings, deadline, action, documentation
- Open questions section surfaces real decisions the partner needs to make
- Path B disclosures appear where needed
- Structured task block parses as valid YAML
- Excel model content lets the senior staff populate the spreadsheet without guessing

### Handoff to senior staff / partner

Once Phase 4 is complete and QCed, you produce a handoff packet:

```
ENGAGEMENT PACKET — READY FOR SENIOR STAFF REVIEW
- Client ID: [ID]
- Karbon engagement: [ID]
- Quarter: Q[N] [year]
- Tier: [tier]

Attachments:
1. Internal partner-review memo (markdown)
2. Redacted source documents (as provided for Phase 1)
3. My QC notes (any concerns flagged for partner attention)
4. Excel model content specification (for senior staff to build the actual file)

Open questions for partner:
[list]

Special notes:
[anything unusual the partner should know]

Submitted by: [your name], [date]
```

Upload to Karbon under the engagement. Tag senior staff for review.

---

## Partner review checklist (what happens after your handoff)

You don't do this step, but knowing what comes next helps you produce better drafts.

The partner reviews:
- [ ] Baseline projection math sanity check
- [ ] Safe harbor calculation is right
- [ ] Reasonable comp recommendation is defensible (if S Corp)
- [ ] Each strategy is appropriate and authority is current
- [ ] Aggressive positions have disclosure considered
- [ ] Path B disclosures are complete and signed if product recommended
- [ ] Multi-year considerations are correctly framed
- [ ] Separate engagement scope+fee blocks are accurate
- [ ] Client relationship context is addressed (known events, open items from prior)
- [ ] Open questions resolved through partner judgment

Partner then converts to client-facing memo per CLIENT-FACING-MEMO-TEMPLATE.md. Takes 30-45 minutes when analyst work is good.

---

---

# PART 2: Offshore Analyst Deep Dive

This part is written for analysts new to the workflow or building fluency with it. US senior staff can skim; partners can skip. The content below is expansion on Part 1 — common mistakes, timing, escalation — written with more context.

## Common analyst mistakes and how to avoid them

### Mistake 1: Treating Claude output as final

**Problem**: You paste Claude's Phase 2 output into the memo without verifying the math.

**Fix**: Always verify by checking dollar amounts against source documents. Claude is a capable assistant but can make arithmetic errors, misread documents, or hallucinate numbers that look plausible. Your job is to catch that.

### Mistake 2: Not phasing the work

**Problem**: You paste everything into Claude and ask "give me the full Q2 memo."

**Fix**: Run each phase separately. Claude produces dramatically better output when focused on one phase at a time. Also your QC is better — you catch issues at the phase they originate, not after they've propagated through the memo.

### Mistake 3: Generic strategy recommendations

**Problem**: Claude outputs "Consider an accountable plan" without explaining why THIS client should do it.

**Fix**: Push back. "For this client specifically, given [facts], explain why this strategy fits and what the dollar impact is." Generic recommendations get stripped by the partner; you might as well produce the specific version.

### Mistake 4: Not investigating surprises

**Problem**: Projection shows tax is 40% higher than prior year, you accept and move on.

**Fix**: Investigate. Large changes usually have an explanation (income really did grow, carryforward expired, etc.). If you don't find the explanation, the partner will — and wonder why you didn't.

### Mistake 5: Skipping the structured task block

**Problem**: You leave the structured task block out of Phase 4 because "it's just automation stuff."

**Fix**: The task block drives Karbon task creation and handoff to the documentation skill. Without it, the engagement doesn't flow through to implementation. Always include.

### Mistake 6: Asking Claude to do legal reasoning

**Problem**: "Claude, should we take this aggressive position?"

**Fix**: That's the partner's job. You can ask Claude to analyze the position — pros/cons, authority, fact pattern fit — but the "should we do this" judgment stays with the credentialed human. Your output is analysis; partner provides judgment.

### Mistake 7: Not redacting properly

**Problem**: You upload documents with PII to the Claude project.

**Fix**: Follow REDACTION-PROTOCOL.md strictly. SSN, names, specific addresses, account numbers — all must be replaced with placeholders. This is a compliance requirement, not a nice-to-have.

### Mistake 8: Stopping at Phase 4 without thinking

**Problem**: You produce the memo and move on without reflecting on whether it's good.

**Fix**: Before submitting the handoff packet, ask yourself: "If I were the partner, would I find this useful? Would I trust the math? Would I have confidence signing off?" If any answer is no, fix it before handing off.

---

## Timing expectations

Under normal conditions, a quarterly engagement takes:

- **Foundational tier**: 2-3 hours analyst time + 45-60 minutes partner time
- **Comprehensive tier**: 4-5 hours analyst time + 60-90 minutes partner time
- **Full Wealth tier**: 6-10 hours analyst time + 90-120 minutes partner time

Your first 3-5 engagements will take longer. That's expected. Speed comes with repetition, not with cutting corners.

If you find yourself taking materially longer than these estimates, flag to your engagement manager. Something may be wrong with the source data, the client profile, or the workflow.

---

## When to escalate immediately to partner

Some things you do not handle at the analyst level. Escalate on these:

- Client data reveals undisclosed foreign accounts or assets (FBAR / Form 8938 exposure)
- Client data reveals unreported cryptocurrency transactions
- Client has unfiled prior-year returns
- Active IRS or state audit surfaced
- Material related-party transactions without documented arm's-length pricing
- Client claims a position that lacks any authority support
- Client is an attest client of Priceless (blocks Path B recommendations — flag for partner)
- Conflict of interest surfaces (both spouses in divorce, multiple parties to transaction)

Do not try to resolve these in Claude. Flag immediately to the partner and stop the engagement until they direct.

---

---

# PART 3: Senior Planning Staff Additions

This part is for US senior staff who run engagements beyond the analyst draft role — typically taking over from Phase 3 onward, handling edge cases, and preparing the full packet for partner review.

Part 3 assumes you've read Part 1. Part 2 is still useful reference when onboarding new analysts.

## When Claude's recommendation isn't right

Claude is a capable assistant but not a senior tax professional. Your judgment override matters in these situations:

### Client facts Claude can't see

The client profile captures most facts, but not all. You know things like:
- Client's actual risk tolerance (not just what they wrote in the profile)
- Prior conversations where client expressed preferences
- Partner's read on the client's temperament toward aggressive positions
- Family dynamics affecting decisions (spouse's concerns, estate intentions)
- Business trajectory rumors that haven't been formalized yet

When Claude recommends a strategy that fits on paper but doesn't fit the real client, override. Document your reasoning briefly so the partner understands why the recommendation deviated from what Claude produced.

### Authority drift

Tax law changes. Sometimes a strategy file in the library has authority that's been superseded (case overturned, Rev Rul revoked, statute amended) and the library hasn't been updated yet. If you see a recommendation that cites authority you know has changed, flag it:

1. Do not use the outdated citation
2. Verify current authority
3. If current authority still supports the strategy, update the reasoning
4. If current authority no longer supports the strategy, drop it and note why
5. Report the library gap to the engagement manager for skill-file update

### Calculation overrides

Claude makes arithmetic errors. You're the second check. When Claude's computation doesn't match your independent calculation:

1. Redo the math yourself from source data
2. If you're right and Claude is wrong, use your number and note the correction
3. If you're wrong, fix your understanding
4. Never just accept Claude's number because "the skill said so"

## Edge case handling

Edge cases the standard workflow doesn't handle cleanly. When you see these, slow down and think.

### Multi-entity clients with conflicting objectives

Client owns S Corp + rental real estate + a partnership interest. Each entity has its own planning logic but they interact. Problems you'll see:

- S Corp reasonable comp optimization reduces QBI, but rental QBI (if qualifying under §199A safe harbor) doesn't care about the S Corp's wages
- Real estate losses may be subject to passive loss limits that depend on client's material participation — which differs per entity
- Basis tracking across entities, especially if capital is circulating between them (loans, distributions, contributions)

**Your approach**: map the client's entities on one page. Draw the income flows. Identify where strategies cross entity lines. Run each entity's analysis separately, then do a combined-level reconciliation. Flag anywhere the entity-level optimum conflicts with the combined optimum.

### Multi-state clients

Client domiciled in FL, operating S Corp in TX, owning rental in CA, plans to move to PR. Problems you'll see:

- State tax calculations per state, with credits for taxes paid to other states
- PTET elections in the right states with timing per state
- PR Act 60 residency timing creates a Jan 1 / Dec 31 asymmetry
- State nexus issues triggered by employees, property, or substantial operations
- State-specific QBI conformity (some states conform, some don't)

**Your approach**: Map states where client has economic presence. Confirm licensure (Priceless practice). Run base federal analysis, then layer state treatment per state. Coordinate PTET election decisions across states. Flag PR Act 60 timing if relevant.

### Books in genuinely broken state

Sometimes Phase 1 surfaces that books are too broken to project from reliably. Not just "a few classification errors" — fundamentally broken, like:

- 6 months of transactions uncategorized in "Ask My Accountant"
- Revenue figures don't tie to bank deposits by material amounts
- Owner distributions untracked; basis impossible to compute
- Multiple entities' transactions commingled in one QBO file
- Prior-year ending balances don't match filed return

**Your approach**: Do not produce a projection on broken books. Stop the engagement. Options to present to the partner:

1. Pause planning engagement, run a bookkeeping cleanup engagement first (separate fee, 2-6 weeks)
2. Run planning on prior-year tax return basis only, deferring current-year projection until books are fixed
3. Refer bookkeeping to another firm that handles cleanup (if Priceless doesn't want the work)

The partner makes the call. Your job is to surface the problem clearly with dollar-magnitude of the uncertainty.

### Prior CPA made material errors

Sometimes onboarding a new client reveals the prior CPA got something materially wrong. Examples:

- S Corp that should have been a partnership (or vice versa) — entity election error
- Missing QBI aggregation that would have been beneficial
- Taking positions without authority support
- Missing §199A calculations entirely
- Depreciation mistakes (wrong class lives, no cost seg where clearly applicable)
- Failed §1031 exchange with unfiled 8824
- Section 162(l) deduction missed for S Corp owner health insurance

**Your approach**: Do not ignore. Do not "just move forward." Each error needs a decision:

1. **Amendable?** If within statute, worth filing 1040X / 1120S amended?
2. **Disclosure?** Does the error rise to a level requiring Form 8275 disclosure on current return?
3. **Client conversation?** How will the partner tell the client about the prior CPA's mistake?
4. **Professional issue?** If the error suggests ongoing malpractice by the prior CPA, any duty to report? (Check state board rules; rare but sometimes applies)

Flag each error in the open questions section. Partner decides.

### Conflicts of interest mid-engagement

Sometimes a conflict surfaces mid-engagement. Examples:

- Client is a partner in a partnership where Priceless does the 1065 — now you're advising one partner on a transaction that affects the other partners
- Client is getting divorced and wants you to help structure the settlement in their favor — but Priceless has done joint returns for both spouses
- Client wants to hire family member for a role — family member is also a Priceless client with their own planning needs

**Your approach**: Stop. Flag to partner immediately. Do not continue the engagement without partner direction. Circular 230 §10.29 governs; the partner may need to obtain informed written consent or decline the engagement.

## Upstream / downstream coordination

### When to push work back vs. absorb it

Analyst hands you a draft with data issues. Options:

1. **Push back to bookkeeping team** — the cleanup is material and falls outside planning scope
2. **Absorb in planning** — the issue is small enough that fixing it yourself is faster than the ping-pong
3. **Stop the engagement and reschedule** — the cleanup will take long enough that the quarterly planning should wait

Rule of thumb: if the fix is under 30 minutes and doesn't require access to documents you don't have, absorb. Otherwise, push back or pause.

### When to pull partner in mid-engagement

Default is: partner reviews at the end. Pull them in mid-engagement when:

- Aggressive position being considered requires partner's judgment before you invest time building it out
- Client facts surface that suggest a tier upgrade is warranted (and the partner should know before the memo reaches the client)
- Ethical issue surfaces (conflict, disclosure, refuse-the-engagement)
- Client has reached out mid-engagement with material new information
- You're stuck and need direction rather than producing a draft with bad assumptions

Pulling partner early on real issues is better than handing a polished memo built on wrong assumptions.

### Coordinating with the bookkeeping team

Planning engagement depends on bookkeeping quality. When you see recurring issues:

- Write them down
- End of each month, send a summary to the bookkeeping team lead: "these 4 client engagements had these 7 classification issues that we had to fix in Phase 1"
- Patterns drive bookkeeping process improvements
- This is how firm-level quality compounds

## Cross-engagement pattern recognition

Senior staff see across clients. Analysts work one at a time. Your pattern recognition is valuable.

Watch for:

- **New strategies** not in the library that clients ask about. If 3+ clients ask about the same thing in a quarter, it belongs in the library.
- **Recurring data issues** that suggest a workflow or skill improvement. E.g., "every home services client has vehicle expenses miscoded — should we add a specific check?"
- **Missing industries** — if you encounter clients in an industry not on Priceless's canonical list (current list is 11 industries + PR), and the client type is coming up repeatedly, flag to partner for potential industry file addition.
- **State-specific issues** that show up repeatedly — state PTET mechanics, state-specific credits, state-specific traps.
- **Tier fit issues** — clients paying Foundational but actually needing Comprehensive, or vice versa. Flag to partner for engagement scope discussions.

Feedback channel: quarterly "cross-engagement patterns" email to partner, collecting what you've seen. Becomes input to methodology updates.

## Partner handoff quality

The packet you hand to the partner is what the partner works from. Make it good.

### The packet should include

1. Final internal memo (your edit of Claude's draft, with your reasoning documented where you overrode Claude)
2. Source documents (redacted, as provided by the engagement manager)
3. Your QC notes — what you checked, what you found, what you overrode
4. Open questions organized by priority:
   - Urgent (blocks delivery — partner must resolve)
   - Standard (partner should resolve but not blocking)
   - FYI (information the partner should have, no action required)
5. Any suggested tier adjustments or engagement-scope observations for future
6. Your recommendation on aggressive positions: include, include with disclosure, drop
7. Structured task block validated and ready for Karbon

### The packet should NOT include

- Unresolved questions you should have answered yourself
- Claude's raw output without your review
- Strategies that don't fit this client
- Calculation errors (you're the second check)
- Data reconciliation issues that haven't been addressed or flagged
- Client-facing language (partner does the conversion)

### Your cover note to the partner

Brief. Half a page max. Includes:

- Client ID and tier
- Summary of what you did
- What's uncertain or needs partner judgment
- Anything you think partner should know that isn't in the memo (e.g., "client called during the engagement to mention they're buying a second property in Q4 — worth following up")
- Expected time for partner review (to help them plan)

---

# PART 4: Partner-Specific Content

This part is for credentialed partners. Assumes you've skimmed Part 1 for shared vocabulary. Parts 2 and 3 are reference for when you're coaching team members; not required reading for your direct work.

## Partner review checklist

Brief version. You know how to review a memo. This ensures consistency across partners and quarterly engagements.

### Memo review (target 30-60 minutes depending on tier)

**Math and reconciliation (10 minutes)**
- [ ] Baseline projection math sanity check — does total tax reconcile to the underlying table?
- [ ] Safe harbor calculation uses the right prior-year number and threshold
- [ ] Payroll prepayments included in prepayment total (per Q2 feedback)
- [ ] State tax reasonable for the client's state and income level
- [ ] Strategy savings estimates pass smell test

**Strategy appropriateness (15-25 minutes)**
- [ ] Each strategy actually fits this client
- [ ] Reasonable comp recommendation is defensible (if S Corp)
- [ ] Authority is current (not citing repealed or superseded law)
- [ ] Aggressive positions are flagged and have disclosure considered
- [ ] Path B disclosures are complete where products are recommended
- [ ] Capital Deployment evaluated only if AGI > $750K
- [ ] Multi-year considerations correctly framed per updated Operator 5

**Client context (10-15 minutes)**
- [ ] Known events for current year addressed
- [ ] Open items from prior engagement followed through
- [ ] Life events or client circumstances integrated
- [ ] Separate engagement scope+fee blocks accurate
- [ ] Tier is right for this client's needs

**Compliance gates (5 minutes)**
- [ ] Attest client screen — no Tier 2/3 if attest
- [ ] Licensure — Priceless can practice in client's state
- [ ] §7216 consent confirmed if affiliate information sharing involved
- [ ] Conflict of interest screen clean

**Open questions resolved (5-10 minutes)**
- [ ] Each urgent question answered
- [ ] Standard questions resolved or deferred with rationale
- [ ] Any analyst recommendations you're overriding documented

After sign-off, convert to client-facing per CLIENT-FACING-MEMO-TEMPLATE.md.

## Risk assessment framework

### What makes a position aggressive

Standard → aggressive gradient:

- **Standard**: clear authority, facts fit the authority, majority interpretation. Example: S Corp reasonable comp methodology using RCReports. Expected to prevail on examination.
- **Moderate**: authority present, facts reasonable fit, but interpretation more favorable than majority. Example: Augusta Rule for 12 monthly meetings at $2,000/day when local comparables support $1,500. Likely to prevail with documentation; possible IRS adjustment to FMV.
- **Aggressive**: authority technically supports but facts are on the edge, or position is minority interpretation. Example: home office + Augusta + accountable plan stacked on same residence at simultaneous highest amounts. Could prevail but audit risk material.
- **Very aggressive**: position has authority for it AND against it; you're choosing the taxpayer-favorable side on a genuinely unsettled question. Example: §199A aggregation election that depends on borderline SSTB classification. Disclosure under §6662 likely appropriate.
- **Beyond aggressive**: position lacks substantial authority. Priceless doesn't take these.

### When to disclose under §6662

Form 8275 (Disclosure Statement) or 8275-R (Regulation Disclosure Statement) disclosure is appropriate when:

- Position has reasonable basis but lacks substantial authority
- Position is contrary to a revenue ruling, notice, or regulation
- Position depends on an interpretation that differs from majority practitioner view

Disclosure is NOT a free pass. It limits accuracy penalty but doesn't make the position right. Think about it this way: disclosure says "here's what we did and our reasoning — if you disagree, IRS, we'll talk about it; we're not hiding it." That framing helps on examination.

### When to refuse the engagement

Per ENGAGEMENT-STANDARDS.md, refuse when:

- Client requests aggressive position that lacks substantial authority
- Client refuses to provide documentation
- Client has prior unfiled returns and refuses to address
- Client has undisclosed foreign accounts and refuses to disclose
- Client wants position you believe is wrong
- Conflict of interest unresolvable
- Engagement scope exceeds Priceless competence

Refusing is a real option. Not every engagement should be taken.

## Path B disclosure obligations

### Triggering events

Specific situations requiring written disclosure before any compensation flows:

- Insurance product recommendation (Tier 2) — before application
- RIA engagement introduction (Tier 3) — before any RIA fees charged
- Any product with commission to Priceless affiliate
- Any product where Priceless benefits from AUM

### Disclosure content requirements (AICPA §1.520, Circular 230 §10.29)

- Nature of compensation (commission, fee, referral payment)
- Amount or calculation method
- Who receives it (Priceless, specific affiliate)
- Client's option to pursue the product elsewhere without Priceless involvement
- Acknowledgment of receipt by client (signed)

Delivery: written, before transaction, in a separate document or clearly delineated section. Verbal disclosure doesn't count.

Archive: indefinitely, or at minimum per RIA books-and-records rule (17 CFR §275.204-2).

### §7216 consent triggers

Per Treas. Reg. §301.7216-3:

- Sharing tax information with affiliate for product suitability: requires specific written consent
- Sharing tax information with deal sponsor (Operator 8 capital deployment): requires specific written consent
- Sharing with cost seg firm or business valuation firm: requires written consent

Consent must:
- Be in writing, signed and dated
- State specifically what will be shared with whom
- Be dated before the sharing occurs
- Use the statutory language per regs

## Client communication conversion guidance

Converting internal memo to client-facing per CLIENT-FACING-MEMO-TEMPLATE.md. Beyond the template's standard rules, partner-specific notes:

### Uncomfortable findings

When Phase 1 surfaced errors from prior CPA, or client-disclosed positions that need to be unwound:

- Lead with fact, not judgment. "We identified that the §199A calculation on your 2024 return didn't include the rental property's contribution to QBI, which may warrant an amended return" — not "your prior CPA missed this."
- Offer path forward. "We can prepare the amended return as a separate engagement ($X, 4 weeks)."
- Protect the relationship. The prior CPA isn't the enemy; the mistake is just a fact. Sometimes the prior CPA will defend their choice when the client asks.
- Document the conversation. If client declines to amend or disclose, note it in the engagement record and consider a covering note in your files.

### Aggressive position communications

When the memo includes aggressive positions:

- Explain the tradeoff plainly. "This position would save $15K but has moderate audit risk. If the IRS challenges, we'd defend by showing [authority]. Worst case they win, you pay the $15K plus 20% penalty, and we help you through the examination."
- Get client acknowledgment. For moderately aggressive positions, email response affirming they understand is fine. For very aggressive, sign-off on a memo describing the position and risks.
- Document Priceless's recommendation. "We recommended X because Y." Cover the firm.

### Tier upgrade conversations

When the memo suggests the client has outgrown their current tier:

- Frame as their benefit, not your revenue. "Based on your growth and the complexity of this quarter's work, a Comprehensive tier engagement would better serve you because [specific benefits]."
- Specific triggers: AGI crossing threshold, multi-entity, material transactions planned, capital deployment becoming relevant, estate coordination needs surfacing.
- Never force. If client declines, continue serving at current tier with clear scope boundaries.

## Engagement profitability monitoring

Quarterly planning can become unprofitable if scope expands without fee adjustment. Watch for:

- Engagement hours consistently exceeding tier budget (>20% overage)
- Scope creep into bookkeeping, tax prep, or advisory work not covered
- Partner review time exceeding budget repeatedly
- Client questions that require separate research or analysis outside the memo

When you see these patterns:

1. Track hours honestly
2. End of engagement, calculate profitability (gross fee - staff cost - partner time)
3. If consistently unprofitable, have the tier upgrade conversation
4. If client declines upgrade, consider scope adjustment — what comes out so the engagement fits the fee
5. In extreme cases, tier them down or disengage

This isn't about squeezing clients. It's about ensuring you have time to serve them well.

## Firm-strategic inputs

Patterns you observe across engagements should feed firm-level decisions.

### Methodology updates

Quarterly review of FIRM-METHODOLOGY.md. When to update:

- A new cognitive operator needed (like Operator 8 was)
- Existing operator's scoping is wrong based on observed results
- Industry list needs adjustment
- Tier structure needs adjustment
- New strategy category emerging that doesn't fit existing taxonomy

### Library additions / updates

Monthly review of strategy library. When to update:

- New strategy surfaces in multiple engagements (add file)
- Authority changes for existing strategy (update file)
- Strategy isn't working in practice (revise or retire)
- Industry overlay gaps identified (build new overlay)
- State-specific treatment changes (update state file)

### Skill training needs

Cross-engagement patterns sometimes reveal analyst training gaps:

- Recurring data issues that suggest bookkeeping pattern training
- Recurring strategy misunderstandings suggesting strategy training
- Common language that analysts use in draft that needs standardization
- QC failure modes that need specific coaching

Quarterly team meeting: walk through 2-3 anonymized engagements where issues came up, use as training.

### Pricing calibration

Watch for:

- Clients asking for scope that doesn't fit their tier — pricing tier signals mismatch
- Clients declining to upgrade when clearly needing higher tier — pricing fence too high
- Consistent engagement margin under/over target — pricing calibration needed

Annual pricing review informed by trailing 12-month engagement data.

### Skill evolution

This skill is living infrastructure. Quarterly (at minimum), check:

- Skill gap log — what did analysts or partners have to work around?
- Library completeness — are there strategies/industries/states still missing?
- Output quality trajectory — are memos getting better or drifting?
- Team adoption — are all analysts using the skill consistently, or are some bypassing?
- Client reception — are clients responding well to the deliverable format?

Feed observations into Sprint 9+ post-MVP planning.

---

---

## Questions and feedback

This document is living. When you hit something not covered here, or something that's wrong, tell the engagement manager. Updates get published quarterly.

Feedback channels:
- Skill gaps: Karbon workspace "Skill Development — Tax Planning"
- Workflow issues: team Slack channel #tax-planning-ops
- Urgent issues during live engagement: direct message to partner

---

## Version

v1.1 — April 2026, v0.4.1 of the Priceless tax planning skill
Audiences: offshore analysts, US senior staff, partners (4-part structure)
Review cycle: quarterly, by partner
