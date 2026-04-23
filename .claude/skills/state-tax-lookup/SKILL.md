---
name: state-tax-lookup
description: Utility skill for pulling state-specific tax rules for a client. Given a state (or list of states the client has ties to), returns the relevant reference material: rate structure, brackets, PTET election status and mechanics, residency audit posture, state conformity to OBBBA 2025, income sourcing rules for businesses and individuals, state credits, estate tax thresholds, and sales tax where relevant. Called on-demand — typically by tax-projection-3 (to build the state baseline), by tax-strategy-5 (to surface state-specific strategies like CA PTET, IL PTE, NY PTET + NYC PTET), and by the analyst directly when a state-specific question comes up. Covers all 50 states + DC. Trigger phrases: "pull state rules for [state]", "California tax treatment", "what's NJ BAIT", "state-tax-lookup [state]". This is a reference utility, not a phase sub-skill. The library lives under `.claude/skills/priceless-tax-planning/states/`.
---

# State Tax Lookup Utility

## Purpose

Pull state-specific tax rules on demand. The main library has a file for every state + DC; this wrapper makes those files accessible as a standalone slash command so analysts, senior staff, and partners can query state rules without loading the full engagement skill.

Three typical calls:

1. **From tax-projection-3** — "what's the 2026 CA rate structure and PTET credit mechanics for this projection?"
2. **From tax-strategy-5** — "what state-specific strategies apply for a Georgia resident with a NY K-1?"
3. **Standalone** — "client asks if moving to FL saves tax vs. staying in NY; pull both state files."

## How to use

### Input

One of:
- Single state: `state-tax-lookup California` or `state-tax-lookup CA`
- Multiple states: `state-tax-lookup CA, NY, NJ` (for multi-state clients)
- By scenario: `state-tax-lookup [residency change from NY to FL]`

### Step 1: Resolve state file

State files live under `.claude/skills/priceless-tax-planning/states/`. Map full name or two-letter code to filename:
- California → `CALIFORNIA.md`
- NY → `NEW-YORK.md`
- etc.

All 50 states + DC are present. If the user asks for a state not covered, fall back to `STATE-FILE-TEMPLATE.md` and flag missing coverage.

### Step 2: Read the state file(s)

Each state file follows the tiered depth template:
- **Tier 1** (no-income-tax states): AK, FL, NV, NH, SD, TN, TX, WA, WY — shallow files, no income tax mechanics
- **Tier 2** (Priceless client-heavy states): CA, NY, NJ, TX, IL, GA, NC, PA, MA, VA, MD, FL — deep files (300-750+ lines)
- **Tier 3** (remaining income-tax states): 150-400 lines each

Every Tier 2+ state file covers, at minimum:
- Rate structure (flat or graduated with brackets)
- Standard/itemized deduction interaction with federal
- PTET election status (critical for passthrough clients)
- Residency rules and audit posture
- Income sourcing (for businesses and individuals)
- Nonresident allocation / apportionment
- OBBBA 2025 conformity (explicit conformity, decoupled, rolling vs. static conformity date)
- State credits relevant to Priceless clients
- Estate tax if applicable
- Recent legislative changes and pending items
- Last-review date

### Step 3: Apply to the caller's context

Based on what called this skill:

**If called from tax-projection-3**:
- Return the rate structure and brackets
- PTET election status (was it made? credit flow mechanics)
- Federal conformity differences affecting state taxable income
- Safe harbor rules for state estimates
- Residency/nonresident allocation posture

**If called from tax-strategy-5**:
- State-specific strategies to surface (PTET if not elected, state credits, residency planning, estate tax mitigation)
- Strategy interactions with federal (e.g., OR PTET stacking with federal QBI)
- Multi-state ordering rules if 2+ states

**If called standalone**:
- Return the summary section plus the sections the user's question maps to
- Flag partner review items (aggressive positions specific to that state)

### Step 4: Multi-state engagements

If the caller specified 2+ states, also load:
- `.claude/skills/priceless-tax-planning/workflows/MULTI-STATE-MECHANICS.md`

This file covers:
- Residency vs. nonresidency determination
- Apportionment methodology (property, payroll, sales; single-sales-factor states)
- Credit for tax paid to other states (resident state mechanics)
- PTET interaction across states
- Statutory resident traps (e.g., NY 183-day rule with permanent place of abode)

### Step 5: Flag partner escalation

Surface to partner:
- Any state where `last_full_review` in the frontmatter is > 6 months old
- Any state with recent legislation that may not yet be reflected
- Aggressive positions specific to that state (residency audit defense, PTET timing)
- Multi-state with 3+ states (always partner review)

## What this skill does NOT do

- Does not compute actual state tax (that's tax-projection-3)
- Does not recommend strategies (that's tax-strategy-5; this just surfaces the state-specific context)
- Does not replace reading the full state file for high-value engagements — partner should still review
- Does not include city tax beyond what's in the state file (NYC is in NEW-YORK.md; Portland local taxes in OREGON.md; but not every municipal tax is covered)

## Output format

Concise reference brief:

```
State: {STATE}
Tier: {1/2/3}
Rate: {structure + top rate}
PTET: {available/not available + mechanics}
OBBBA conformity: {summary}
Residency: {key rule}
Relevant to caller: {context-specific bullet points}
Partner flags: {any escalation items}
Last reviewed: {date}
Source file: .claude/skills/priceless-tax-planning/states/{STATE}.md
```

For multi-state queries, return one block per state plus a multi-state coordination block.
