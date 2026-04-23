---
name: capital-deployment-screen
description: Utility skill for Operator 8 (Capital Deployment) evaluation on HNW clients. Runs the eight-gate qualification from CAPITAL-DEPLOYMENT-FRAMEWORK.md (AGI > $750K, Full Wealth tier, Operators 1-7 complete, client liquidity, time horizon, risk tolerance, documentation discipline, advisor coordination), then surfaces the 2-3 most relevant capital deployment vehicles from the 13-strategy library (Tier 1: QOZ / DAF-Advanced / §1031 Advanced / Equipment Leasing; Tier 2: Aircraft / Oil & Gas / CRT-CRUT / Private Foundation; Tier 3: CLT / Foreign GILTI / Movie Tax Credits). Screens against PROMOTER-PATTERNS-PARTNER-DEFENSE.md red flags. Used by tax-strategy-5 when running Operator 8, OR standalone by partner eyeing a new HNW prospect's deployment fit before engagement signoff. Partner sign-off required for any Tier 1 or Tier 2 recommendation. Trigger phrases: "capital deployment screen for [client]", "evaluate QOZ fit", "does [client] qualify for Operator 8", "screen HNW deployment options". The library lives under `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/`.
---

# Capital Deployment Screen Utility

## Delegation

This is a thin wrapper. The actual screen logic lives in the main tax planning library:

**Read and follow**: `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/CAPITAL-DEPLOYMENT-SCREEN.md`

Always-loaded foundation files:
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md` (8-gate qualification — run BEFORE screen)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/PROMOTER-PATTERNS-PARTNER-DEFENSE.md` (red-flag patterns to decline regardless of arithmetic fit)

Vehicle files (load based on screen output):

**Tier 1 — highest fit for most HNW clients**:
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/QOZ-FUNDS.md` (OBBBA permanent; rolling designations)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/DAF-ADVANCED.md` (non-cash contributions, succession)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/SECTION-1031-ADVANCED.md` (reverse, improvement, DST)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/EQUIPMENT-LEASING-FUNDS.md` (§469(c)(6) passive shelter)

**Tier 2 — fit for narrower client profiles**:
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/AIRCRAFT.md` (§280F; HIGH audit risk; partner signoff)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/OIL-GAS-WORKING-INTERESTS.md` (§469(c)(3) active; IDC deduction)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/CRT-CRUT.md` (§664 split-interest)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/PRIVATE-FOUNDATION.md` (§509 / §§4940-4945)

**Tier 3 — specialized situations only**:
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/CLT.md` (wealth transfer leverage)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/FOREIGN-GILTI.md` (§962 election; NOT Puerto Rico Act 60)
- `.claude/skills/priceless-tax-planning/tax-strategy/capital-deployment/MOVIE-TAX-CREDITS.md` (state credit purchase only — not sale/sponsor)

Also consult:
- `.claude/skills/priceless-tax-planning/shared/FIRM-METHODOLOGY.md` (Operator 8 positioning in the eight-operator stack)
- `.claude/skills/priceless-tax-planning/workflows/qc/PARTNER-QC-CHECKLIST.md` Part 3 "Capital deployment strategies"
- `.claude/skills/priceless-tax-planning/shared/REFERRAL-DISCLOSURE-FRAMEWORK.md` (if any vehicle involves Priceless affiliate compensation)

## When to invoke this skill

Two typical calls:

1. **From tax-strategy-5** (inside the quarterly flow): Operator 8 runs after Operators 1-7 complete and if AGI > $750K / Full Wealth tier. This screen is called to rank deployment vehicles for the client.

2. **Standalone** (outside the quarterly flow): partner is evaluating a prospect or existing client for a potential capital deployment engagement. Run the screen first to determine whether the client qualifies AND which vehicles fit, before proposing a Full Wealth tier engagement.

## The 8 gates (per CAPITAL-DEPLOYMENT-FRAMEWORK.md)

All eight must pass before proceeding to vehicle recommendation:

1. **AGI > $750K** — threshold for Operator 8 consideration
2. **Full Wealth engagement tier** — Foundational/Comprehensive tiers do NOT get capital deployment
3. **Operators 1-7 optimized** — don't layer capital deployment on top of suboptimal S Corp comp, missed PTET, unoptimized QBI, etc.
4. **Client liquidity** — capital deployment ties up capital for 3-10+ years; client needs liquidity buffer
5. **Time horizon** — most vehicles require 5+ year holds; client's horizon must match
6. **Risk tolerance** — deployment is not tax-arbitrage; it's investing with tax benefits. Client accepts investment risk.
7. **Documentation discipline** — aggressive vehicles (Aircraft, Oil & Gas, QOZ) require meticulous records; client or staff must maintain them
8. **Advisor coordination** — Priceless coordinates, doesn't execute. Attorney, RIA, specialist sponsor must be lined up.

## Screening output

Return:
- **Gate status**: pass/fail per gate; if any fail, decline and note why
- **Vehicle shortlist**: 2-3 most relevant vehicles from the 13-file library (not all 13 — too many choices)
- **Vehicle ranking**: fit score per vehicle based on client profile (industry, state, liquidity, horizon)
- **Red flags**: any pattern matching PROMOTER-PATTERNS-PARTNER-DEFENSE.md → decline regardless of fit
- **Partner escalation**: always required for Tier 1 / Tier 2 recommendations; for Tier 3 the vehicles are narrow enough that partner involvement is de facto always

## Who runs this

- **Partner (Tony)**: always runs the screen. Capital deployment is partner-authority territory.
- **US senior staff**: can prep the client-profile inputs; cannot approve recommendations.
- **Offshore analysts**: do NOT operate this skill. Operator 8 is not offshore scope.

## Output

Capital Deployment Screen Report:
- Client qualification (gate-by-gate)
- Recommended vehicle shortlist with rationale
- Vehicles explicitly considered and declined (with reason)
- Red-flag scan results (clean or declined patterns noted)
- Partner sign-off block
- Next steps: specialist coordination requirements, separate engagement letter scope

Feeds into:
- `/tax-strategy-5` if called inline (strategy recommendations for Operator 8)
- `/quarterly-memo-6` Section 6 (Capital Deployment) if recommendations progress
- Separate engagement letter for deployment execution (specialist engagement)

## Partner sign-off gates (mandatory)

- No capital deployment recommendation surfaces in a client memo without partner sign-off
- Any Tier 1 or Tier 2 vehicle requires written partner approval with client risk acknowledgment
- Any vehicle pattern matching PROMOTER-PATTERNS-PARTNER-DEFENSE.md is declined regardless of arithmetic
- Path B affiliate compensation triggers REFERRAL-DISCLOSURE-FRAMEWORK Tier 2+ disclosure

## What this skill does NOT do

- Does not execute the deployment (specialist sponsor / attorney / RIA does)
- Does not provide investment advice (Priceless is tax advisor; RIA affiliate provides investment advice per its own disclosures)
- Does not substitute for Operators 1-7 (gate 3: foundational planning must be complete first)
- Does not recommend for Foundational or Comprehensive tiers (gate 2)
- Does not recommend Puerto Rico Act 60 domicile changes (explicitly excluded per FOREIGN-GILTI.md scope)
