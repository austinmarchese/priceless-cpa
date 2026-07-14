---
name: priceless-ecommerce-blueprint
description: E-commerce niche offer (from Anthony). Two uses — (1) Sales reference: explain/quote the E-Commerce Blueprint + Quarterback pricing, tiers, qualification, and sales scripts during a sales conversation. (2) Deliverable production: build the actual client-facing E-Commerce Financial & Tax Blueprint from a client's channel/financial data. Trigger phrases: "e-commerce offer", "e-commerce pricing", "Blueprint pricing", "build the blueprint for [client]", "e-commerce Blueprint for [client]", "what tier should I present". NOT for tax prep or bookkeeping cleanup themselves — this produces the diagnostic deliverable and its sales framing, not the underlying tax return or books.
---

# E-Commerce Financial & Tax Blueprint

Anthony's offer architecture for the e-commerce niche (Amazon FBA, Shopify/DTC, multi-channel, wholesale, $500K-$5M+ revenue). Two clean one-call closes: a paid diagnostic (**the Blueprint**) on the sales call, an ongoing retainer (**the Quarterback**) on the delivery call.

This file is the workflow controller. It doesn't contain methodology itself — it tells you which file to read at each step, in order. Every methodology, sourcing, and confidence-labeling decision lives in `references/`, not here.

## Library

**Commercial content — locked, do not modify (Mode 1):**
- `OFFER-ARCHITECTURE.md` — pricing bands, tiers, qualification guide, sales scripts, credit mechanic, rollout plan.

**Client-facing deliverable — locked structure/wording (Mode 2 output):**
- `BLUEPRINT-TEMPLATE.md` — the 10-section skeleton. Its internal prep-instructions header (deleted before client delivery) names who reviews what — read it before Step 2 below.

**Governing framework — read first, applies to every section:**
- `references/data-readiness-rules.md` — confidence-level vocabulary (High/Moderate/Preliminary/Unable to Conclude), missing-data gates, review-escalation rules, and the no-blended-totals rule. Every other file in this library defers to this one; if anything below seems to conflict with it, this file wins.

**Methodology reference files — read the one that matches the section you're building:**
- `references/intake-and-document-request.md` → read in full at Step 1, before anything else
- `references/channel-profit-methodology.md` → §2
- `references/sales-tax-screening-rules.md` (Part A) → §3a; (Part B) → §3b
- `references/inventory-cogs-methodology.md` → the COGS line of §2, and all of §6
- `.claude/skills/priceless-tax-planning/tax-strategy/industries/E-COMMERCE.md` (external, owned by a different skill — read live, don't duplicate) → §5's strategy menu

**FAB-only working templates — unchanged, still current:**
- `CASH-FLOW-MODEL-TEMPLATE.md` → §8, only if the Fast Action Bonus was confirmed
- `SKU-PROFITABILITY-TEMPLATE.md` → §9, only if the Fast Action Bonus was confirmed

**Retired — superseded, kept only for history, do not build from these:**
- `CHANNEL-PL-TEMPLATE.md`, `NEXUS-MAP-TEMPLATE.md`, `INCOME-TAX-NEXUS-TEMPLATE.md` — each carries a banner pointing to its replacement above.

## Mode 1 — Sales / pricing reference

Use when someone asks about pricing, tiers, qualification, or what to say on a call. Read `OFFER-ARCHITECTURE.md` and answer directly from it — the numbers, bands, and scripts there are Anthony's, not to be recalculated or softened. If a number looks off or a client's situation doesn't cleanly match a band, flag it rather than improvising a new one.

Quick anchors (see file for full detail):
- Blueprint bands: Lite $1,500 / Standard $2,500 / Complex $3,500 (up to $5,000 for 3+ entities or 20+ states)
- Quarterback tiers: Tier 1 $800/qtr + $2K tax prep / Tier 2 $1,600/mo / Tier 3 $2,850/mo
- Blueprint fee is 100% creditable toward the first 12-month term if they enroll within 30 days, credit vests only on completing the term, applied to the final invoice(s)
- One offer per call: Blueprint on the sales call, Quarterback on the delivery call, never both

## Mode 2 — Build a client Blueprint

Use when asked to produce the actual deliverable for a named client. This becomes a paid work product a partner presents live — treat it with the same rigor as a quarterly tax memo, not a first draft.

### Step 0: Load the governing framework

Read `references/data-readiness-rules.md` before doing anything else. Hold its confidence-level rules, missing-data gates, and review-escalation table active through every step below — they're not restated in full here.

### Step 1: Confirm inputs before writing anything

Read `references/intake-and-document-request.md` in full and follow its procedure. Never fabricate a number — if a required input is missing, ask for it or the specific report it comes from. That file's required-vs-optional split and per-category document list govern what "enough to proceed" means; don't improvise a shorter list.

### Step 2: Build section by section, in this order

Work through `BLUEPRINT-TEMPLATE.md` sections 2 through 10 first; write the Executive Summary (§1) **last**, once the real numbers exist.

- **§2 Channel P&L** — read `references/channel-profit-methodology.md` and follow it fully (sourcing, the three-way reconciliation test, confidence labeling). Flag explicitly if the client had been reading a platform's net deposit as revenue.
- **§3a Sales tax nexus** — read `references/sales-tax-screening-rules.md` Part A. Verify each state's current threshold and measurement period — never assume a uniform $100K/200-transaction rule, and never conclude from total sales alone.
- **§3b Income tax nexus** — a *different* question from 3a, read `references/sales-tax-screening-rules.md` Part B. Check both independent triggers (FBA inventory physical presence; factor-presence economic nexus, which only 8 states have actually adopted and rarely at $500K). Frame exposure carefully — this is often a "start filing here" finding, not a large back-tax bill.
- **§4 Entity & structure review** — S-corp election status, reasonable comp balance, multi-entity fit. E-commerce is non-SSTB, so full QBI is in play — coordinate with §5.
- **§5 12-18 month tax plan** — read `.claude/skills/priceless-tax-planning/tax-strategy/industries/E-COMMERCE.md` for the current strategy menu. Keep only strategies that actually apply, delete the rest, put a real dollar estimate on every row. Only surface exit-planning strategies (QSBS/§1202) if a sale is realistically 3-5+ years out. **QBI row:** confirm the client's actual taxable income against the current QBI phase-in threshold before writing "full 20% available" — the W-2 wage/UBIA limitation applies above it; state the actual applicable treatment if the client is in or above the phase-in range. **Total row:** per `references/data-readiness-rules.md`'s no-blended-totals rule, state the total's composite confidence rather than one unqualified number. Partner sign-off required on anything aggressive.
- **§6 Inventory/COGS assessment** — read `references/inventory-cogs-methodology.md` and follow it fully (the 13 scenarios, the sourced §448(c) threshold table, the method-change-vs-bookkeeping-fix wording rule). This is an assessment, not a rebuild — if a full historical SKU rebuild is warranted, name it as a separate scoped project.
- **§7 Accounting system blueprint** — recommend the stack (QBO + A2X + inventory tool + cash flow + sales tax tool); the tooling comparison in `references/inventory-cogs-methodology.md` is a starting point (market-research-sourced, verify with the vendor before it's a firm recommendation). Be honest about what the client can DIY versus what needs a managed hand.
- **§8/§9 (Fast Action Bonus)** — include ONLY if the client committed to the FAB on the sales call. If confirmed: `CASH-FLOW-MODEL-TEMPLATE.md` for §8, `SKU-PROFITABILITY-TEMPLATE.md` for §9 — both still current, not superseded. If unconfirmed, ask before building these; do not include them by default.
- **§10 Implementation roadmap** — sequence everything above by quarter, end with how ongoing service would run this for them, name the Tier (1/2/3) that fits. Don't hard-sell — let the roadmap make the case.
- **§1 Executive summary** — write last. 5-7 sentences max: true profit + tax number, then the 2-3 biggest dollar opportunities, then the bottom line. **Mandatory gate:** the template's own bracket language says "a real net margin of [Z%]," but §2 only ever produces contribution profit (channel-level fees/COGS, not full operating expenses). Do not fill that bracket with contribution-profit figures under "net margin" language. This is a known, unresolved conflict between the approved template's wording and basic accuracy — flag it to firm leadership rather than silently picking a side, and require Senior-or-above review of this specific bracket every time, per `references/data-readiness-rules.md`.

### Step 3: Voice and QC

- Plain language, no accounting jargon, no em dashes, quarterback tone — same brand-voice rules as the rest of Priceless content.
- Every dollar figure must tie to a source pulled in Step 1 and carry a confidence label per `references/data-readiness-rules.md`. If you can't source it, don't put a number on it — say what's needed to get one.
- Before moving from one section to the next, run that section's own methodology file's QC checklist — don't defer all QC to the end.
- Before delivering, run the template's own final checklist: every `[bracket]` filled, every PREP NOTE deleted, executive summary matches the sections, FAB sections included only if earned, partner has reviewed.
- Per `BLUEPRINT-TEMPLATE.md`'s internal prep header, Senior reviews §2, §4, §5, §6, §7, §8, §9 interpretation — not just §4-§6.
- **Partner sign-off required before this goes to a client.** This is a paid deliverable presented live, never emailed cold.
