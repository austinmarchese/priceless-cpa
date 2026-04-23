---
name: tax-strategy
description: Identifies, ranks, and presents tax strategies for a client based on their profile, projection, and the current quarter. Loaded by the parent priceless-tax-planning skill during Phase 3 of any quarterly workflow. Reads the strategy library, applies the selection matrix, filters by quarter, and produces ranked recommendations with full authority citations and implementation paths. Handles the eight cognitive operators including Capital Deployment for high-income clients (AGI > $750K).
---

# Tax Strategy Sub-Skill

This sub-skill turns a client profile and projection into a ranked list of applicable, actionable tax strategies for the current quarter. Loaded as Phase 3 of any quarterly workflow.

## Inputs required

From earlier phases:
- Bookkeeping QA output (clean, no blockers)
- Tax projection (full-year baseline)
- Reasonable comp analysis (for S Corp clients)
- Client profile (per `shared/CLIENT-PROFILE-TEMPLATE.md`)

From the workflow:
- Current quarter (Q1 / Q2 / Q3 / Q4)
- Engagement tier (Foundational / Comprehensive / Full Wealth)

## Workflow

### Step 1: Run the eight operators in sequence

Per `shared/FIRM-METHODOLOGY.md`:

1. **Reconcile** — already done in Phase 1, confirm clean
2. **Baseline** — already done in Phase 2, confirm complete
3. **Reasonable Comp** — for S Corp clients, confirm Phase 2's analysis is loaded
4. **Entity-Arbitrage** — evaluate whether entity structure is optimal
5. **Accelerate / Defer** — evaluate timing opportunities
6. **Stack** — identify combination opportunities
7. **Financial Product Overlay** — for Path B engagements (Comprehensive or Full Wealth tier with infrastructure ready)
8. **Capital Deployment** — only if AGI > $750K AND foundational planning complete

### Step 2: Read the strategy selection matrix

Load `STRATEGY-SELECTION-MATRIX.md`. Read the metadata schema and ranking formula.

### Step 3: Filter and evaluate every strategy file

For each file in `strategies/`:
1. Read the YAML frontmatter
2. Evaluate `applies_when` against client profile (all conditions must match)
3. Evaluate quarter window: skip if `latest_actionable_quarter` < current quarter
4. Skip if client already has the strategy in place (per profile section 6)
5. For Path B products: evaluate `suitability_requires` and check attest client screen
6. Estimate savings using the strategy's `savings_formula` against client projections
7. Compute base score per matrix
8. Apply modifiers (recurring, stacked, client-executable, audit risk)

### Step 4: Apply tier-based filtering

- **Foundational tier**: top 5 strategies, no financial product overlay, no capital deployment
- **Comprehensive tier**: top 8 strategies, financial product overlay if available, no capital deployment
- **Full Wealth tier**: top 10 strategies, full financial product overlay, capital deployment if qualifying

### Step 5: Rank and prepare output

Order strategies by final score. For each strategy in the top tier:

```
STRATEGY [N] — [Name]

Estimated Savings: $X,XXX
Quarter to Execute: [Quarter, deadline date]
Earliest Action: [date]
Authority: [citations from strategy file]

Why This Fits This Client:
[2-3 sentences specific to this client's facts — not generic]

Implementation Steps:
1. [Step with specific deadline]
2. [Step]
3. [Step]

Documentation Required:
- [Item from strategy file's requires_documentation]
- [Item]

Stack Opportunities:
- Combines well with: [other strategies in the recommendation list]

Separate Engagement Required: [Yes/No]
If yes: estimated fee $X,XXX, scope: [brief]

[For Path B products: full disclosure block per REFERRAL-DISCLOSURE-FRAMEWORK.md]

Open Questions for Partner:
- [Anything the analyst couldn't resolve]
```

### Step 6: Build the structured task list

After the prose strategy section, append the structured task block (see `shared/OUTPUT-TEMPLATES.md` for format) that downstream automation (Karbon task creation, documentation skill invocation) will consume.

### Step 7: Pass to synthesis phase

Return the ranked strategies + structured task list to the parent skill, which assembles the final memo per the appropriate quarterly template.

## What this sub-skill does NOT do

- Does not invent strategies. Only recommends from the library.
- Does not opine on strategy validity beyond what the strategy file's authority supports.
- Does not skip the suitability/attest screens for Path B items.
- Does not run Operator 8 for clients below the AGI threshold.
- Does not generate documentation. That's the documentation skill's job.
- Does not produce client-facing language. Memos are internal drafts for partner review.

## Special handling

### Multi-entity clients
When client has multiple entities (per profile section 2), evaluate strategies at both entity level and personal level. Some strategies (S Corp election, reasonable comp) are entity-specific. Others (charitable bunching, retirement contributions) are personal-level. The matrix handles this via the strategy's `applies_when` conditions referencing `entity_type` vs `personal_AGI`.

### Multi-state clients
When client has multi-state exposure (per profile section 1), load `shared/MULTI-STATE-MECHANICS.md` (Sprint 4) and the relevant `states/*.md` files. State-specific strategies (PTET elections especially) are state-aware.

### Operator 8 invocation (expanded in v0.10 Sprint 7)

Capital Deployment runs as a final check after Operators 1-7 have produced their recommendations.

**Critical gate**: Load `capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md` FIRST. Walk the eight qualification gates:

1. AGI > $750K (current year projected, not prior year)
2. Operators 1-7 optimized
3. Liquidity margin > $250K beyond operational needs
4. Horizon tolerance for specific strategies considered
5. Audit and compliance tolerance
6. Compliance commitment
7. Partner approval required (every Capital Deployment recommendation)
8. Alignment with client stated goals

If any gate fails, stop — do not surface Capital Deployment strategies. Stay with Operators 1-7.

If all eight gates clear, load the applicable `capital-deployment/` strategy files per client profile and goals. Every Capital Deployment recommendation requires partner signoff before inclusion in client memo.

**Inventory of Capital Deployment files**:
- Tier 1: QOZ-FUNDS, DAF-ADVANCED, SECTION-1031-ADVANCED, EQUIPMENT-LEASING-FUNDS
- Tier 2: AIRCRAFT, OIL-GAS-WORKING-INTERESTS, CRT-CRUT, PRIVATE-FOUNDATION
- Tier 3: CLT, FOREIGN-GILTI, MOVIE-TAX-CREDITS
- Partner reference: PROMOTER-PATTERNS-PARTNER-DEFENSE (consulted when client brings outside-promoted strategy)

**Note**: PR Act 60 is NOT a Capital Deployment strategy within this skill. It's a separate Priceless PR Advisors vertical with its own playbook.

## Reference files

- `STRATEGY-SELECTION-MATRIX.md` — ranking engine and metadata schema
- `TIMING-RULES.md` — which strategies actionable in which quarter
- `IMPLEMENTATION-PLAYBOOKS.md` — detailed execution guidance per strategy (Sprint 5)
- `strategies/*` — the 25-file core strategy library (Operators 1-7)
- `industries/*` — 11 industry vertical playbooks (Sprint 5A)
- `capital-deployment/*` — 13-file Operator 8 cluster (Sprint 7; v0.10)
