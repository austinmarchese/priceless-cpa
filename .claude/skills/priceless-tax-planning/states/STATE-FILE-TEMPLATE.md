# State File Template and Methodology

This document defines the structure, depth tiers, research methodology, and formatting conventions for all state files in the Priceless Tax Planning skill's `states/` directory.

## Purpose

State-level tax complexity varies enormously. California deserves 15+ pages of treatment; Wyoming deserves two. This template enforces consistent structure while accommodating that variation through tiered depth.

Every state file must:
- Be researched from current (within 12 months) authoritative sources
- Cite specific authorities (state code section, DOR publication, or legislative bill number) for every tax rate, threshold, or mechanic
- Flag uncertainty explicitly with `[VERIFY]` callouts and the most recent source consulted
- Follow the depth tier appropriate for client impact
- Include a verification table with per-citation dates and next-review triggers

## Depth tiers

### Tier 1 — No income tax states (7 states; ~150-250 lines each)
Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Wyoming. Plus **New Hampshire** (no wage income tax; repealed interest/dividends tax 2025).

Content scope:
- Confirmation of no personal income tax
- State-level business taxes that DO apply (TX franchise / margin tax, WA B&O, NV Commerce Tax, WY license fees, NH BPT/BET, etc.)
- Sales/use tax nexus rules (post-Wayfair)
- Unemployment and workers' comp basics
- Any city-level taxes worth flagging
- Documentary/transfer taxes
- Residency rules (critical for inbound moves from high-tax states)
- Estate/inheritance tax (where applicable)

### Tier 2 — Priceless client concentration states (12 states; ~500-800 lines each)
Florida (home), California, New York, New Jersey, Texas, Illinois, Georgia, North Carolina, Pennsylvania, Massachusetts, Virginia, Maryland.

Full depth content:
- Complete tax rate structure (brackets, flat rate, surtaxes)
- Post-OBBBA conformity analysis (bonus depreciation, QBI, SALT cap interaction, QOZ, §174 R&D, §162(j))
- Residency rules with state-specific tie-breakers
- PTET election mechanics (deadline, form, payment schedule, credit flow)
- SALT cap workarounds and interactions with OBBBA $40,400 / 2026 cap + $505K phase-out
- Specific credits relevant to Priceless client verticals
- Multi-state allocation mechanics
- Nexus thresholds (income, sales, payroll)
- Entity-level taxes (franchise, LLC fees, unincorporated business taxes)
- Estate/inheritance tax (where applicable)
- Real estate transfer/documentary taxes
- Sales/use tax fundamentals for Priceless clients
- Industry-specific state credits relevant to Priceless verticals

### Tier 3 — Standard state files (31 states; ~250-400 lines each)
All other income-tax states.

Standard content:
- Tax rates and brackets (or flat rate)
- Conformity posture with federal (rolling, fixed-date, selective)
- PTET availability (yes/no, basic mechanics)
- Nexus rules
- Sales/use basics
- Specific credits worth knowing for Priceless client profile
- Estate tax if applicable

Compact but accurate. Detail-on-demand model: file flags complex areas and directs user to get specialist consultation if specific engagement surfaces deep state issue.

## Research methodology

### Step 1 — Verify current law

Primary sources:
- State Department of Revenue (.gov) websites for current-year instructions and forms
- State legislature websites for enacted 2025-2026 legislation
- State statutes (accessible via state government websites)

Secondary sources:
- Tax Foundation (for comparative data and rate verification)
- CCH IntelliConnect / Bloomberg Tax / RIA Checkpoint (if accessible)
- Wolters Kluwer state tax services

Cross-reference secondary against primary. If secondary disagrees with primary, primary wins.

### Step 2 — Verify OBBBA conformity posture

For every state with income tax, determine:
- **Federal bonus depreciation conformity**: Does state conform to 100% bonus post-1/19/2025? (CA: no. Most: yes.)
- **QBI / §199A conformity**: Most states do NOT conform (federal-only deduction at individual level)
- **QOZ / §1400Z conformity**: State tax treatment of QOZ appreciation at 10-year exclusion
- **§163(j) EBITDA vs. EBIT**: State conformity to OBBBA reversion to EBITDA
- **GILTI taxability**: About 20 states still tax GILTI
- **§181 vs. state film credits**: State-by-state
- **OBBBA standard deduction conformity**: Some states lag, still using pre-TCJA amount ($8,350/$16,700 for 2026)

### Step 3 — PTET mechanics

For states with PTET:
- Election deadline (some by March 15, some by June 15, some on return)
- Form (NY: Business Online Services; NJ: Form PTE-100; CA: FTB Form 3893; IL: IL-1065 or IL-1120-ST checkbox)
- Who makes the election (authorized officer vs. shareholder consent)
- Irrevocability
- Quarterly estimated payments
- Credit flow to owner (refundable vs. nonrefundable; carry-forward rules)
- Resident vs. nonresident treatment
- Interaction with post-OBBBA SALT cap ($40,400 + $505K phase-out)

### Step 4 — Residency rules

Particularly important for CA, NY, NJ, IL, MA:
- Domicile definition
- Statutory residency (183-day rule + other factors)
- State-specific tie-breakers
- Recent case law on aggressive residency audits
- Documentation standards to establish non-residency

### Step 5 — Priceless client profile relevance

Industry-specific state credits and traps for your client mix:
- S Corp owners — entity-level taxes, franchise taxes
- Real estate investors — transfer taxes, Prop 13 reassessment (CA), NYC/NYS unique rules
- Software/tech — R&D credits (CA, NY, Georgia), QSBS conformity
- Medical practices — state-specific professional regulation interactions
- E-commerce — sales tax nexus, marketplace facilitator rules
- Construction — state prevailing wage, §179D

### Step 6 — Cite every claim

Every tax rate, threshold, deadline, or mechanic gets a source citation. Format:
- Statutory: "per [State] Rev. Code §XX.XXX" 
- Regulatory: "per [State DOR] Publication [N]; verified YYYY-MM"
- Legislation: "per [Bill #] enacted [Date]"

Never cite "state law generally" — specific or omit.

### Step 7 — Update status table

Every file ends with verification table matching rest of skill's format:

| Verification | Date | Source |
|---|---|---|
| [Rate or rule] | YYYY-MM | [Specific source with URL where applicable] |

Include "Last full review" date and "Next review trigger" commentary.

## File structure template

```
---
state: [STATE NAME]
abbreviation: [XX]
tier: [1 | 2 | 3]
income_tax_type: [none | flat | graduated | capital_gains_only]
ptet_available: [yes | no | N/A-no-income-tax]
client_concentration: [high | medium | low] (Priceless-specific)
---

# [STATE NAME] — State Tax Reference

## The essentials

[2-3 paragraphs summarizing the state's tax posture for a Priceless client]

## Personal income tax

### Rate structure (2026)
[Brackets or flat rate; include single + MFJ]

### Post-OBBBA conformity
- Standard deduction: [Amount; note if state uses pre-OBBBA version]
- Personal exemption: [Amount or none]
- Other federal linkages: [list]

### Residency rules
[Tier 2 only: detailed factors; Tier 3: brief]

## Business taxes

### Entity-level taxes
[Franchise, LLC fees, BPT, etc.]

### Corporate income tax
[Rate, apportionment, add-backs]

### PTET election (if applicable)
**Election deadline**: [Date + form]
**Who makes the election**: 
**Quarterly estimated payments**: 
**Credit flow**: 
**Interaction with post-OBBBA SALT cap**: 

## Post-OBBBA conformity matrix

| Federal provision | State treatment |
|---|---|
| 100% bonus depreciation | [Yes/No/Partial] |
| §199A QBI | [Yes/No] |
| QOZ 10-year exclusion | [Yes/No/Partial] |
| §163(j) EBITDA | [Conforms/does not] |
| GILTI | [Taxable/not] |
| SALT cap workaround via PTET | [Yes/No] |

## Sales and use tax

[Rate, nexus thresholds, marketplace facilitator rules]

## Real estate considerations

[Transfer taxes, property tax features relevant to Priceless clients]

## Estate/inheritance tax

[Tax / exemption / rate, or note that no state estate tax applies]

## Priceless client considerations

[Industry-specific credits, traps, or playbooks for your client verticals]

## Multi-state mechanics

[How this state's rules interact with common Priceless client situations: multi-state operations, relocation, telecommuting]

## Key dates for 2026 engagements

[Filing deadlines, election deadlines, estimated payment dates]

## Update status

[Verification table with all citations]
```

## Quality standards

A good state file:
- Is usable by a Priceless staffer without needing to independently re-research
- Flags its own uncertainties with `[VERIFY]` callouts rather than hiding them
- References specific forms, bill numbers, and code sections rather than vague "the state allows..."
- Notes recent legislative changes (2025 sessions, 2026 changes)
- Identifies where the state's PTET/conformity diverges from federal in ways that affect planning
- Gives the staff enough to write a first-draft memo section, not just summarize

A bad state file:
- Restates federal law without state-specific application
- Uses vague citations ("state tax law")
- Ignores PTET or treats every state's PTET as identical
- Confuses OBBBA (federal) with state response (which varies)
- Lacks verification table

## Known research gaps (to be resolved per file)

Items that often require `[VERIFY]` callouts:
- Very recent legislation (post-February 2026 sessions)
- State R&D credit mechanics (frequently change)
- Industry-specific credit eligibility criteria
- Post-OBBBA conformity for states that haven't legislated yet
- Estate tax thresholds where state law is silent on indexing

When these appear, file says: `[VERIFY: as of YYYY-MM; [source]; recommend direct consultation with state DOR for current-engagement application]`

## Update status

| Verification | Date | Source |
|---|---|---|
| Template methodology | 2026-04 | Firm internal; Sprint-state-build initial |
| Tier definitions | 2026-04 | Firm internal |
| Research source priority | 2026-04 | Per user direction (Sprint state build) |

**Last full review**: 2026-04 (Sprint state build — initial template)

**Next review trigger**: Any material change to firm's state coverage strategy; major federal-state conformity regime shift
