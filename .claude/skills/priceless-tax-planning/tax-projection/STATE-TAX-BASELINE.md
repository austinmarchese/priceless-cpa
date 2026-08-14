# State Tax Baseline

> **Note:** This file previously shipped with the wrong contents (a duplicate of the Texas state file). Reconstructed 2026-08-13 to match the workflow referenced in `SKILL.md` Step 4. This is the general methodology for building a state tax baseline — it is deliberately NOT state-specific. For actual rates, thresholds, and mechanics, load the relevant file from `../states/{STATE}.md`. This file exists to tell you *how* to use those files, and what to do when one doesn't exist yet.

## Purpose

Every client has at least one state tax posture (even "no income tax" is a posture that needs confirming, not assuming). This file is the general framework for building that baseline before layering in strategy. It is a companion to `FEDERAL-TAX-COMPUTATION.md` (federal side) and `SAFE-HARBOR-METHODOLOGY.md` (payment timing).

## Step 1: Classify the state(s) involved

For every state with client nexus (residence, business operations, property, or income source), classify it:

**No personal income tax on wages/ordinary income**: FL, TX, TN, NV, WA (wages only — WA taxes capital gains above threshold), SD, WY, AK, NH. Confirm no other state-level tax applies at the individual level (WA capital gains tax; NH taxed interest/dividends historically, confirm current status; TX/WA have entity-level taxes that matter for the business even though the owner has no personal state tax).

**Flat-rate income tax**: e.g., NC (3.99% 2026), PA (3.07%), GA (5.19%), MA (5% + 4% surtax — effectively a two-bracket system). Check the state file for the exact current rate — several states (NC, IL) have legislated multi-year rate-reduction schedules, so "flat" doesn't mean "static year over year."

**Graduated-rate income tax**: e.g., CA, NY, NJ. These require full bracket computation, not a single-rate shortcut.

## Step 2: Determine residency and sourcing

**Resident state**: taxes worldwide income (with credit for tax paid to other states on income also taxed there).

**Nonresident/part-year states**: tax only state-source income. Sourcing rules vary — wages generally sourced to where services are physically performed; business income apportioned; rental/real property income sourced to property location. Check the specific state file for sourcing nuances (several states, notably NY, use "convenience of the employer" rules that source remote-work income back to the employer's state).

**Multi-state flag**: per `SKILL.md`, 3+ states triggers senior-staff escalation regardless of dollar amounts — apportionment errors compound across states.

## Step 3: Build the computation

For each state with nexus:

1. Start from federal AGI or federal taxable income (varies by state — check the state file for the correct starting point).
2. Apply state-specific addition/subtraction modifications (common ones: state doesn't conform to federal bonus depreciation and requires an add-back, as with NC's 85% bonus depreciation add-back; state doesn't tax certain retirement income; state has its own standard deduction/exemption amounts independent of federal).
3. Apply state credits (state EITC analogs, state child tax credit analogs, credit for taxes paid to other states for resident-state computations).
4. Apply the state's rate structure (flat or graduated) to arrive at state tax liability.
5. For nonresident/part-year computations: apply apportionment or direct sourcing before computing tax, and compute the resident-state credit for tax paid to the nonresident state (credit is capped at the resident state's tax on the same income — a common error is claiming a credit larger than that cap).

## Step 4: PTET (pass-through entity tax) evaluation

Most Priceless S-corp/partnership clients in a PTET-offering state should elect it — this is a near-default recommendation, not an edge case, per the main `SKILL.md` methodology ("PTET credit if elected (MOST client S Corps / partnerships should elect where available)").

**General mechanics** (verify specifics per state):
- Entity elects to pay state tax at the entity level on behalf of owners
- Entity deducts this payment as a business expense on the federal return (bypassing the individual SALT cap entirely — this is the whole point of PTET)
- Owner receives a credit (sometimes a full offsetting deduction instead — check the state) against their individual state tax liability for their share of the PTET paid
- Election timing and revocability vary sharply by state — some are annual and irrevocable once made (NC), some have specific estimated-payment requirements tied to the election

**Where this matters most**: high-income owners above the SALT cap phase-down threshold (~$500K/$505K AGI per `FEDERAL-TAX-COMPUTATION.md`), and any client in a state with a meaningful flat or graduated rate where the SALT cap would otherwise bite.

**Where it doesn't help**: clients in no-income-tax states (nothing to convert), or clients already comfortably under the SALT cap even without PTET.

## Step 5: What to do when no state file exists yet

The `../states/` directory currently covers FL, CA, NY, NJ, TX, IL, GA, NC, PA, MA, VA, MD (Tier 2 depth) with more Tier 1/Tier 3 states pending per the build roadmap in the main `SKILL.md`. If a client has nexus in a state without a file yet:

1. **Do not guess at rates from memory** — flag it as an open item requiring research before the projection can be finalized for that state.
2. Pull the state's current-year rate structure and PTET availability from the state's Department of Revenue site or Tax Foundation's current-year state tax comparison as a stopgap, and clearly label the figures as unverified/single-source pending a proper state file build.
3. Escalate to senior staff — an unverified state computation should not go into a client-facing memo without review.

## Quick-reference: states with an existing file

| State | Income tax type | PTET available |
|---|---|---|
| Florida | None | N/A |
| Texas | None (personal); franchise/margin tax at entity level | No |
| California | Graduated (top 13.3%) | Yes |
| New York | Graduated (+ NYC local) | Yes |
| New Jersey | Graduated | Yes (BAIT) |
| Illinois | Flat (PTE tax permanent) | Yes |
| Georgia | Flat 5.19% | Yes (HB 149) |
| North Carolina | Flat 3.99% (2026), scheduled reductions | Yes |
| Pennsylvania | Flat 3.07% | **No** — but PA resident S-corp owners get a credit for out-of-state PTET paid (72 P.S. §7314); confirm this is claimed |
| Massachusetts | 5% + 4% surtax over threshold | Yes (63D, ~90% refundable credit) |
| Virginia | Graduated | Yes (extended to 1/1/2027) |
| Maryland | Graduated | Yes |
| Washington | None (wages); 7% capital gains tax above threshold | N/A |

For I Spy Productions specifically: Trevion is a **Florida resident** (no personal income tax) and the entity is **Georgia-registered** with confirmed GA and FL tax payments in the books (see Phase 1 findings) — this is a live multi-state posture requiring the Georgia state file review in Phase 3, not a "no state tax" default just because the owner lives in FL.

## What this file does NOT do

- Does not contain actual rates or thresholds for any specific state — that's each state file's job
- Does not resolve apportionment formulas for a specific industry (check `../workflows/MULTI-STATE-MECHANICS.md` and the relevant state file)
- Does not make the PTET election decision — that's a Phase 3 strategy recommendation with partner sign-off

## Update status

| Item | Status |
|---|---|
| General residency/sourcing framework | Confirmed, standard multi-state principles |
| PTET general mechanics | Confirmed, generally consistent across offering states; state-specific mechanics vary — verify per state file |
| Quick-reference table | Reflects state files existing in `../states/` as of 2026-08-13 |

**Reconstructed**: 2026-08-13.
