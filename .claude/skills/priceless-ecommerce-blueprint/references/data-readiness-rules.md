# Data Readiness Rules

## Purpose

The cross-cutting gate that governs two things every other Blueprint reference file defers to instead of re-deriving: **(1)** how confident Claude is allowed to sound about any given number, and **(2)** what happens when a required input from `intake-and-document-request.md` is missing. `channel-profit-methodology.md`, `inventory-cogs-methodology.md`, and `sales-tax-screening-rules.md` each apply this framework to their own domain — none of them re-define confidence levels or missing-data handling independently. If a methodology file's instructions ever seem to conflict with this file, this file wins.

This file also adopts, rather than duplicates, the firm-wide professional standards already established in `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md` (Circular 230, AICPA SSTS, §6694/§6695/§6662, the 5-stage QC workflow). That file governs *tax positions and preparer conduct*. This file governs *the specific problem of a diagnostic deliverable built partly on incomplete client data* — a situation the quarterly-memo workflow doesn't fully address because a quarterly engagement typically has a complete client profile before work starts, and a Blueprint often doesn't.

## When the main skill reads this file

Continuously — this isn't a one-time read like the intake file. Every time Claude is about to write a number, a finding, or a recommendation into any Blueprint section, this file's confidence and conclusion rules apply. Read it once at the start of Mode 2 (Build a client Blueprint) and hold its rules active through every section.

## Required inputs

The intake log produced by `intake-and-document-request.md` (which categories are complete vs. incomplete).

## Optional inputs

None — this file is logic applied to whatever inputs exist, not a document-consuming file itself.

## Confidence-level vocabulary (binding across all Blueprint sections)

Every material finding — every dollar figure, every nexus position, every tax-savings estimate — gets one of these four labels internally. Assign the label using the criteria below, not by feel.

| Level | Criteria | Example |
| :---- | :---- | :---- |
| **High** | The figure is either (a) directly quoted from an authoritative source document with no estimation (a filed return, an executed bill, a platform's own stated subtotal), or (b) independently reconciled two ways and both ties match | Amazon's Payments Summary net total, reconciled against the sum of its own detail lines |
| **Moderate** | Built from real source documents, but requires one disclosed, defensible allocation or judgment call | Freight cost allocated across SKUs by unit count because per-SKU freight billing doesn't exist |
| **Preliminary** | Depends on an input that itself couldn't be fully verified — an unverified threshold, a client verbal estimate instead of a document, or a rule that varies by jurisdiction and wasn't individually checked for every jurisdiction in scope | A sales tax exposure figure where the per-state threshold was assumed rather than checked against `/state-tax-lookup` for that specific state |
| **Unable to Conclude** | A required input is missing entirely and no defensible range can be produced | COGS margin with no product cost data of any kind provided |

**Rule:** a finding cannot be labeled High or Moderate merely because a number came out of a calculation. The label describes how trustworthy the *inputs* were, not whether the arithmetic is correct.

**Binding rule for any total that sums multiple findings** (the §3a/§3b exposure totals, the §5 "total estimated first-year opportunity," or any other rolled-up figure): **never present a single total as if it carries one uniform confidence level when its components don't.** State the total's own composite makeup — e.g., "of this $X total, $Y is High/Moderate confidence and $Z is Preliminary" — rather than a single unqualified sum. A blended total is exactly where a confident-sounding but partly-unsupported number is most visible to a client, and the confidence framework above is worthless if it gets bypassed at the one row everyone actually reads.

## Step-by-step procedure

1. For the section being built, identify its required inputs from the relevant methodology file.
2. Check those inputs against the `intake-and-document-request.md` log.
3. If every required input is present and reconciled per that section's methodology file: assign High or Moderate per the table above.
4. If an input exists but carries unverified assumptions (a threshold, an allocation, a client estimate): assign Preliminary.
5. If a required input is simply absent: assign Unable to Conclude for that specific line — do not omit the line silently; state what's missing and what would resolve it.
6. Apply the review-escalation table below based on the section and the confidence level.
7. Write the internal draft with the confidence label attached to every material figure.
8. Translate to client-facing language per the table in "Expected client-facing output" below — the client never sees the literal words "Moderate confidence," they see language calibrated to it.

## Missing-data treatment (the core gate)

**A Blueprint section may proceed with an incomplete answer. It may never proceed with a confident-sounding placeholder.**

- If a required input is missing, the internal draft for that line reads: *"Unable to Conclude — requires [specific document/report]."*
- The client-facing draft for that line either (a) omits the number and states what's needed to produce it, or (b) if the section can't function at all without it, names the gap plainly rather than filling the bracket with an invented figure.
- A missing input in one section does not block other sections that don't depend on it — data readiness is assessed per-section, not for the whole engagement at once.

## Assumptions that must be disclosed

Every Moderate or Preliminary finding must state, in the internal draft, exactly which assumption or allocation was made. A confidence label without a stated assumption is incomplete — "Moderate, because we allocated freight by unit count" is a valid disclosure; "Moderate" alone is not.

## Exceptions and edge cases

- **A figure that would otherwise be High becomes Preliminary if it depends on a threshold or rule that changes by jurisdiction and wasn't checked per-jurisdiction** (this is the direct implementation of "never give a final sales-tax nexus conclusion based only on total sales" — see `sales-tax-screening-rules.md`).
- **A range replaces a point estimate** whenever the available information doesn't support a single defensible number — state the range and what would narrow it, rather than picking the midpoint and presenting it as precise.
- **Partial-period or partial-channel data** (e.g., Amazon data available, Shopify still pending) doesn't block finishing the sections that only need Amazon — but the Blueprint's overall executive summary must not be finalized until every channel that materially affects the total is in.

## The contribution-profit vs. net-profit rule

**Binding rule:** Claude may never label a figure "net profit," "true profit," or "net margin" unless every operating expense — not just the channel-level deductions in §2 (fees, fulfillment, advertising, COGS) — has actually been gathered and included. Channel P&L contribution profit is a real, useful, correctly-labeled number; it is not the same thing as net profit, and the two must never be conflated in the internal draft.

**Known open conflict, not resolved here:** `BLUEPRINT-TEMPLATE.md` §1's approved bracket language currently reads "a real net margin of [Z%]," while §2 only ever produces contribution profit (channel-level, pre-full-opex). This is a genuine tension between the approved client-facing template and this accuracy rule. Per instruction, conflicts get flagged, not silently resolved by Claude. **This file does not authorize editing the approved template.** Instead: filling the §1 bracket is a mandatory Senior-or-above review checkpoint every single time, specifically to decide, with real full-opex data in hand or not, what language is actually defensible for that client. Flag this conflict to firm leadership as an open item — the template's own wording may need a firm-leadership decision, not an in-flight Claude judgment call.

## What Claude may conclude

- A confidence level for any finding, using the table above
- That a section is complete, partial, or blocked, and specifically why
- A range, when a range is what the data supports
- A plain factual statement of what a document shows (e.g., "the Payments Summary shows $X in net deposits")

## What Claude must not conclude

- A specific dollar figure for anything rated Unable to Conclude
- "Net profit" or "net margin" language without full-opex data (see rule above)
- A platform deposit treated as revenue or profit without reconstructing its components (§2's whole purpose)
- A final sales-tax or income-tax nexus position from total sales alone, without checking transaction counts, marketplace-facilitator carve-outs, and the jurisdiction-specific threshold (see `sales-tax-screening-rules.md`)
- Any tax-savings promise without showing the calculation and the assumptions behind it
- That client data is complete just because no one has said otherwise — absence of a stated gap is not confirmation of completeness

## Items requiring staff, senior, CPA, attorney, or specialist review

| Trigger | Required reviewer |
| :---- | :---- |
| Routine data pull, straightforward reconciliation | Staff |
| Any Moderate-or-below confidence finding; any allocation/assumption judgment call; any section's interpretive narrative (see `BLUEPRINT-TEMPLATE.md`'s own role split for exactly which sections — don't hardcode the list here, it's maintained in one place) | Senior |
| Any aggressive tax position; any accounting-method-change recommendation; the §1 net-margin/contribution-profit conflict above; final presentation to the client | Partner (binding per `ENGAGEMENT-STANDARDS.md` — "No memo is delivered to a client without partner sign-off. No exception.") |
| P.L. 86-272 nexus posture beyond a Preliminary flag; material historical sales-tax or income-tax exposure where voluntary disclosure strategy is being considered; foreign-supplier withholding questions beyond a basic W-8 check | Outside counsel / state tax specialist — Partner decides when to bring one in, per `ENGAGEMENT-STANDARDS.md`'s "when to refuse the engagement" and conflict-screening standards |

## Expected internal output

Every material figure in the internal draft carries: the number (or range), its confidence label, the disclosed assumption if Moderate/Preliminary, and the required reviewer.

## Expected client-facing output

Confidence labels are never shown to the client verbatim. Translate:

| Internal label | Client-facing treatment |
| :---- | :---- |
| High | Stated as fact, no hedging |
| Moderate | Stated with a brief, plain-language qualifier ("based on your current cost records...") |
| Preliminary | Framed as an estimate with what would sharpen it ("an early estimate — we'd confirm this once...") |
| Unable to Conclude | No number shown; state what's needed instead |

## Quality-control checklist

- [ ] Every material figure in the internal draft has a confidence label
- [ ] Every Moderate/Preliminary figure states its assumption
- [ ] No "net profit"/"net margin" language appears without full-opex data behind it
- [ ] No nexus conclusion rests on total sales alone
- [ ] Every Unable to Conclude line names what would resolve it
- [ ] Escalation table applied — nothing aggressive reaches the client without Partner sign-off, per `ENGAGEMENT-STANDARDS.md`

## Source list

- `.claude/skills/priceless-tax-planning/shared/ENGAGEMENT-STANDARDS.md` — binding firm-wide professional standards (Circular 230, AICPA SSTS, §6694/§6695/§6662, 5-stage QC workflow), adopted here rather than duplicated
- No external technical sources — this file is internal firm methodology, not a citation of platform or tax authority

## Last verified

2026-07-14 — confirmed `ENGAGEMENT-STANDARDS.md` still exists at the path above and its QC workflow (Analyst → Senior → Partner → client conversion → archive) is compatible with the Blueprint's own Staff/Senior/Partner role split in `BLUEPRINT-TEMPLATE.md`. Re-verify if `ENGAGEMENT-STANDARDS.md` is materially revised.
