# Federal Tax Computation

> **Note:** This file previously shipped with the wrong contents (a duplicate of the Washington state file). Reconstructed 2026-08-13 to match the workflow referenced in `SKILL.md`. Figures below are 2025 tax year (returns filed in 2026) and 2026 tax year (current-year projections), reconciled to OBBBA 2025 (P.L. 119-21) and Rev. Proc. 2025-32 / Notice 2025-67 indexed amounts. Confirm current figures against IRS/Treasury guidance before relying on this file for a live engagement — indexed amounts are republished annually and OBBBA implementation guidance is still developing in places marked [VERIFY].

## Purpose

This file is the federal-side computation reference for Phase 2 (tax-projection). It holds the bracket tables, indexed thresholds, and OBBBA-driven mechanical changes needed to take a client's projected taxable income and turn it into a federal tax liability. It does not recommend strategies (that's Phase 3) — it just computes the baseline correctly.

## 2026 ordinary income tax brackets (indexed, Rev. Proc. 2025-32)

OBBBA made the TCJA rate structure permanent — no reversion to pre-2018 brackets (39.6% top rate) was scheduled to occur, and OBBBA locked in the current structure. Brackets below are 2026 inflation-indexed.

**Married Filing Jointly / Qualifying Surviving Spouse**
| Rate | Taxable income |
|---|---|
| 10% | $0 – $24,800 |
| 12% | $24,800 – $100,800 |
| 22% | $100,800 – $211,700 |
| 24% | $211,700 – $403,550 |
| 32% | $403,550 – $512,450 |
| 35% | $512,450 – $768,700 |
| 37% | $768,700+ |

**Single**
| Rate | Taxable income |
|---|---|
| 10% | $0 – $12,400 |
| 12% | $12,400 – $50,400 |
| 22% | $50,400 – $105,850 |
| 24% | $105,850 – $201,775 |
| 32% | $201,775 – $256,225 |
| 35% | $256,225 – $640,600 |
| 37% | $640,600+ |

**Head of Household**
| Rate | Taxable income |
|---|---|
| 10% | $0 – $17,700 |
| 12% | $17,700 – $67,450 |
| 22% | $67,450 – $105,700 |
| 24% | $105,700 – $201,750 |
| 32% | $201,750 – $256,200 |
| 35% | $256,200 – $640,600 |
| 37% | $640,600+ |

**Married Filing Separately**: half of MFJ brackets.

[VERIFY 2026 figures against final Rev. Proc. 2025-32 publication before filing-season use; figures above reflect standard ~3% chained-CPI indexing off 2025 base brackets.]

### 2025 brackets (for prior-year comparison / return analysis)

**MFJ**: 10% to $23,850; 12% to $96,950; 22% to $206,700; 24% to $394,600; 32% to $501,050; 35% to $751,600; 37% above.
**Single**: 10% to $11,925; 12% to $48,475; 22% to $103,350; 24% to $197,300; 32% to $250,525; 35% to $626,350; 37% above.

## Standard deduction

| Filing status | 2025 | 2026 (indexed) |
|---|---|---|
| MFJ | $31,500 | $32,600 |
| Single / MFS | $15,750 | $16,300 |
| HOH | $23,625 | $24,450 |

OBBBA made the increased TCJA-era standard deduction permanent (no scheduled reversion to pre-2018 ~$13K MFJ levels). [VERIFY 2026 exact indexed figures against final Rev. Proc. 2025-32.]

**Additional standard deduction** (age 65+ or blind): $1,600 MFJ (per qualifying condition, per spouse) / $2,000 Single-HOH for 2025; index similarly for 2026. OBBBA added a temporary additional $6,000 "senior deduction" for taxpayers 65+ for tax years 2025-2028, phased out above $75K Single / $150K MFJ MAGI — confirm phase-out mechanics before use in a senior client's projection.

## Capital gains and qualified dividends brackets

Confirmed directly from filed 2025 returns processed this session (see the Qualified Dividends and Capital Gain Tax Worksheet mechanics):

**2025 MFJ**: 0% up to $96,700 taxable income; 15% $96,700–$600,050; 20% above $600,050.
**2025 Single**: 0% up to $48,350; 15% $48,350–$533,400; 20% above.
**2025 HOH**: 0% up to $64,750; 15% $64,750–$566,700; 20% above.
**2025 MFS**: 0% up to $48,350; 15% $48,350–$300,000; 20% above.

**2026 (indexed, approx.)**: 0% MFJ up to ~$100,000; 15% to ~$620,000; 20% above. [VERIFY exact 2026 figures against Rev. Proc. 2025-32 before use.]

Mechanics: ordinary income fills the bracket first; LTCG/qualified dividends stack on top. A strategy that changes the ordinary-income floor (e.g., recharacterizing an improper deduction, per the kind of Schedule E finding in this engagement) can push otherwise-0%-taxed gain into the 15% bracket — always recompute the stacking, don't assume a capital gain figure is safe just because it was safe under a different ordinary-income assumption.

## Net Investment Income Tax (NIIT) — §1411

**3.8%** on the lesser of net investment income or MAGI over threshold. Thresholds are **fixed by statute, not indexed**: $250,000 MFJ / $200,000 Single / $125,000 MFS.

Active-trade-or-business exception (§1411(c)(4)): gain on disposition of an interest in a business the taxpayer materially participates in is excluded from NII. Relevant for S-corp stock distributions/dispositions in excess of basis — confirm material participation before assuming NIIT applies to that gain.

## Additional Medicare Tax — §3101(b)(2)

**0.9%** on wages/SE income above threshold. Also fixed by statute: $250,000 MFJ / $200,000 Single / $125,000 MFS. Applies to combined wages across all employers (W-2 employees with multiple jobs may need to self-true-up on Form 8959 since employers only withhold above $200K per employer, not per household — relevant for any client with more than one W-2 source).

## §199A Qualified Business Income deduction

20% of QBI, subject to phase-in of W-2 wage/UBIA limitations and SSTB treatment above the threshold. OBBBA widened the phase-in range (previously $50K MFJ / $100K single-width band):

| Filing status | 2026 phase-in starts | Phase-in ends |
|---|---|---|
| MFJ | $383,900 | $483,900 |
| Single/HOH/MFS | $191,950 | $241,950 |

Below the phase-in floor: full 20% deduction regardless of SSTB status or W-2 wages (Form 8995 simplified computation applies — this is the form used for I Spy Productions given Trevion's income level). Above the ceiling: SSTBs get $0 deduction; non-SSTBs subject to the greater-of 50% W-2 wages / 25% W-2 wages + 2.5% UBIA limitation. OBBBA made §199A permanent (was scheduled to sunset after 2025 under prior law).

## SALT cap

OBBBA set the SALT cap at **$40,000 for 2025**, indexed to **$40,400 for 2026**, with a phase-down for AGI above $500,000 (2025)/$505,000 (2026) — cap reduces by 30% of AGI excess, floor at $10,000. [VERIFY exact 2026 phase-down mechanics and threshold against final IRS guidance.] PTET elections are NOT subject to this cap (paid at the entity level, deducted as a business expense) — this is why PTET remains valuable even post-OBBBA for pass-through owners above the phase-down threshold.

## Charitable contribution deduction — OBBBA changes (2026+)

- **0.5% AGI floor**: the first 0.5% of AGI in charitable giving is non-deductible for itemizers.
- **35% bracket cap**: for taxpayers in the 37% bracket, the tax benefit of the charitable deduction is capped as if the taxpayer were in the 35% bracket.
- 60% AGI ceiling for cash to public charities made **permanent**.

Both floor and cap apply at the point of deduction utilization (including utilization of carryforwards from pre-2026 contributions) — see `CARRYFORWARD-TRACKING.md` for carryforward-specific mechanics.

## Bonus depreciation and §179

- **100% bonus depreciation made permanent** by OBBBA for qualified property placed in service after 1/19/2025 (no phase-down to 80%/60%/40% as under prior TCJA sunset schedule).
- **§179**: 2026 expensing limit indexed per Rev. Proc. 2025-32 [VERIFY exact figure]; phase-out begins above a total-equipment-placed-in-service threshold, also indexed.
- Property placed in service before 1/19/2025 remains on the pre-OBBBA phase-down schedule — check placed-in-service date carefully on any transition-year asset.

## Child Tax Credit

2025: $2,200 per qualifying child (confirmed directly from filed 2025 returns this session), refundable portion (ACTC) $1,700 per child, phase-out begins $400,000 MFJ / $200,000 other. OBBBA made the increased CTC amount permanent. 2026 figure indexed — [VERIFY exact 2026 amount].

## Estate and gift tax

OBBBA made the **$15 million per-person exemption** (2026, indexed) **permanent** — no reversion to the pre-TCJA ~$5-7M level that was scheduled under prior law. Portability between spouses remains available.

## Alternative Minimum Tax (AMT)

Rarely binding post-TCJA/OBBBA for most Priceless clients given the high exemption amounts, but still check when: large ISO exercises, significant state tax deduction relative to income (less relevant post-SALT-cap), large misc. itemized add-backs. 2026 exemption and phase-out thresholds indexed per Rev. Proc. 2025-32 — [VERIFY exact figures]. Always run the AMT computation (Form 6251) as part of the projection even when not expected to bind; document that it was checked.

## Update status

| Item | Status | Source |
|---|---|---|
| 2025 brackets, standard deduction, capital gains thresholds | Confirmed | Directly verified against filed 2025 returns processed in this engagement |
| 2026 brackets, standard deduction | Indexed estimate | Rev. Proc. 2025-32 — [VERIFY final published figures] |
| NIIT / Additional Medicare thresholds | Confirmed (statutory, not indexed) | §1411, §3101(b)(2) |
| §199A phase-in ranges (2026) | Confirmed | OBBBA 2025 (P.L. 119-21) |
| SALT cap ($40,400 2026) | Confirmed structure; [VERIFY phase-down exact mechanics] | OBBBA 2025 |
| Bonus depreciation permanence | Confirmed | OBBBA 2025 |
| Estate exemption ($15M) | Confirmed | OBBBA 2025 |
| AMT 2026 exemption/phase-out | [VERIFY] | Rev. Proc. 2025-32 |
| §179 2026 limit | [VERIFY] | Rev. Proc. 2025-32 |
| CTC 2026 indexed amount | [VERIFY] | Rev. Proc. 2025-32 |

**Reconstructed**: 2026-08-13. Flag to partner if any [VERIFY] item is load-bearing for a specific client's projection — confirm against primary source before finalizing that memo.
