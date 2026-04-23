---
purpose: Pre-delivery QC review by partner or senior reviewer; catches errors and confirms authority before any client deliverable goes out
user: Tony or senior designated reviewer; 30-90 min per engagement depending on complexity
trigger: ANY client deliverable — tax plan, memo, Excel model, amended return, projection — prior to client delivery
scope: covers strategies, state specifics, mechanics, documentation, professional standards
related_files:
  - shared/ENGAGEMENT-STANDARDS.md
  - shared/FIRM-METHODOLOGY.md
  - shared/CLIENT-FACING-MEMO-TEMPLATE.md
  - workflows/prior-year/SKILL.md (amendments have additional QC requirements)
---

# Partner QC Checklist

This checklist runs BEFORE any client deliverable leaves Priceless. It exists to catch the specific failure modes that have been observed in tax planning work — most of which are in the strategies library itself — before they reach a client.

Tony's role: final reviewer. Senior staff may do preliminary QC; partner signoff is final authority.

## When to run this checklist

| Deliverable | QC depth | Reviewer |
|---|---|---|
| Tax plan memo (new engagement) | FULL | Partner |
| Tax plan memo (annual refresh) | STANDARD | Senior + partner sample-check |
| Amended return (Form 1040X) | FULL | Partner |
| Tax projection / Excel model | STANDARD | Senior + partner signoff |
| Quarterly estimated tax calculation | STREAMLINED | Senior |
| Advisory memo on specific question | STANDARD | Partner for novel issues |
| Engagement letter | STREAMLINED | Partner for new clients |

- **FULL** = entire checklist; 60-90 min
- **STANDARD** = Parts 1, 2, 3, 7; 30-45 min
- **STREAMLINED** = Part 1 only; 15-30 min

## Part 1: Scope and engagement alignment

These catch scope-related errors that will cause client dissatisfaction regardless of technical accuracy.

- [ ] **Engagement letter matches deliverable scope** — every strategy or recommendation is within the signed SOW
- [ ] **Client facts match CRM** — names, entity structure, filing status, income estimates
- [ ] **Tax year(s) covered is explicit** — no ambiguity about TY 2024 vs. TY 2025
- [ ] **Client-stated goals are addressed** — if client said "minimize tax on exit," the deliverable addresses that
- [ ] **Deliverable format matches expectation** — memo vs. Excel vs. presentation
- [ ] **Fee and billing aligned with engagement terms** — not undercharging, not overcharging

**If any gap**: return to engagement manager to align before proceeding.

## Part 2: Technical authority

Every strategy or recommendation must have clear authority. Authority gaps are the most common QC failure.

- [ ] **Every code section cited is current** — post-OBBBA (2025 P.L. 119-21), post-SECURE 2.0, post-TCJA
- [ ] **Regulations cited are current** — check for recent Treasury/IRS releases on topic
- [ ] **Revenue rulings / procedures cited** are current (not superseded)
- [ ] **State statutes cited** are current (2025/2026 legislative session outputs captured)
- [ ] **Case citations** are current and not overruled / distinguished
- [ ] **State-specific items** reference the current state file in `states/` — no stale information

### Red-flag authority issues

- Pre-TCJA citations used for post-TCJA positions (§199A, SALT cap, estate exemption)
- Pre-OBBBA citations for TY 2025+ items (§174, bonus depreciation, §1202 enhancement, SALT cap $40K)
- State citations not reflecting 2025 session (MT HB 337, OH HB 96, OK HB 2764, LA Act 1, MS HB 1, etc.)
- "Generally" language with no specific authority — flag for specific cite

## Part 3: Strategy-specific QC

The highest-yield section. For each strategy in the deliverable, run the specific QC.

### S Corp reasonable compensation

- [ ] Salary is reasonable per industry benchmark (not 0, not 100%)
- [ ] Reasonable compensation analysis documented (role, hours, comparable salary data, Form W-2 support)
- [ ] Does NOT recommend under-reasonable-comp to minimize FICA (audit bait)
- [ ] §162(l) health insurance on W-2 if applicable
- [ ] QBI deduction flows correctly (reasonable comp reduces QBI)

### PTET election

- [ ] State file confirms PTET still available for the relevant tax year
- [ ] Election deadline is correctly identified and not missed
- [ ] Refundable vs. non-refundable nature of state credit documented
- [ ] Federal SALT deduction flows at entity level (confirming per Notice 2020-75)
- [ ] Owner-level credit correctly claimed (not double-deducted, not missed)
- [ ] State-specific mechanics: CA 12.5% credit reduction for missed June 15 prepayment; NY March 15 hard deadline; MN/OR/UT expiration awareness

### §199A QBI optimization

- [ ] Aggregation election considered where multiple pass-throughs exist
- [ ] SSTB classification is correct (medical, legal, consulting, financial services, brokerage, performing arts, athletics, etc.)
- [ ] Phase-in math correct above threshold ($383,900 MFJ for TY 2024 / $394,600 MFJ for TY 2025)
- [ ] W-2 wages and UBIA optimized (not just QBI)
- [ ] Deduction is permanent post-OBBBA (no sunset to plan around)

### Cost segregation / real estate

- [ ] Property qualifies (non-residential or residential rental > 27.5-year property)
- [ ] Study will be done by qualified engineer (not Priceless; specialist engagement separate)
- [ ] Form 3115 vs. amended return decision is correct (3115 for method change; amended for single-property errors)
- [ ] 100% bonus depreciation availability confirmed for placed-in-service date (post-1/19/2025 for OBBBA 100%)
- [ ] State decoupling considered (CA, NY, NJ, MD, others)
- [ ] Recapture implications at disposition noted

### Real Estate Professional Status (REPS)

- [ ] >750 hours AND >50% of personal services test documented
- [ ] Hour log exists and is contemporaneous (not reconstructed)
- [ ] Real property trades or businesses qualify per §469(c)(7)(C)
- [ ] Material participation in EACH rental activity (or grouping election)
- [ ] Loss release math is correct (passive → non-passive)
- [ ] Audit posture: this is a high-audit position; documentation must be defensible

### §1202 QSBS

- [ ] 5-year hold confirmed
- [ ] Original issue (not secondary purchase)
- [ ] Qualified small business criteria met (C corp, <$50M assets at issuance pre-OBBBA or $75M post-OBBBA, active business)
- [ ] Qualified trade or business (NOT SSTB)
- [ ] $10M / $15M / 10x basis cap applied correctly (OBBBA $15M post-7/4/2025)
- [ ] State conformity checked (CA and PA are notable non-conformers)
- [ ] 3-tier OBBBA exclusion structure for post-7/4/2025 acquired stock (50% at 3yr / 75% at 4yr / 100% at 5yr)

### Cost segregation / bonus depreciation

- [ ] Pre-TCJA vs. TCJA phase-down vs. OBBBA 100% restoration correctly applied by placed-in-service date
- [ ] Property eligibility (qualified property under §168(k))
- [ ] State decoupling (many states do not conform)
- [ ] Recapture at disposition acknowledged

### Augusta Rule §280A(g)

- [ ] 14 days or fewer of rental confirmed
- [ ] Fair market rental rate documented with comparable rates
- [ ] Legitimate business purpose for meetings/events
- [ ] Corporate minutes or documentation supporting business use
- [ ] Not the sole basis for a large rental claim (audit bait)

### Hiring children

- [ ] Children are 7+ years old (age appropriateness)
- [ ] Duties are legitimate and age-appropriate
- [ ] W-2 (preferred) or 1099 with contemporaneous time/task records
- [ ] Pay is reasonable for work performed (not excessive)
- [ ] Under standard deduction ($14,600 TY 2024 / $15,000 TY 2025 single) for zero-tax result
- [ ] Roth IRA contribution considered

### Retirement plans (Solo 401(k), SEP, DB)

- [ ] Plan type matches client profile (Solo 401(k) for sole owner; DB for 45+ high-income)
- [ ] Contribution limits correct for tax year
- [ ] Catch-up provisions for 50+ applied
- [ ] Funding deadline clear (generally tax filing deadline including extension)
- [ ] Combined limits respected (415(c) $69K 2024 / $70K 2025)
- [ ] SECURE 2.0 provisions applied (mega-backdoor Roth, catch-up contributions, etc.)

### Capital deployment strategies (HNW only, AGI >$750K)

- [ ] Client qualifies for eight-gate framework in `capital-deployment/CAPITAL-DEPLOYMENT-FRAMEWORK.md`
- [ ] Strategy is explicitly recommended (not left ambiguous)
- [ ] Specialist engagement is flagged separately (Priceless coordinates, doesn't execute)
- [ ] Risk disclosure includes audit profile for high-audit-risk strategies (aircraft, equipment leasing, oil/gas, QOZ)
- [ ] Partner signoff required on all Tier 1/Tier 2 capital deployment items

### Prior-year amended return (if applicable)

- [ ] Statute of limitations confirmed and time remaining noted
- [ ] Recovery / cost ratio meets 3x threshold
- [ ] Collateral consequences considered (state cascade, year cascade, basis reconstruction)
- [ ] Position defensibility confirmed (not aggressive)
- [ ] Form 1040X prepared per IRS instructions
- [ ] Supporting schedules included
- [ ] Client engagement letter is prior-year-specific (separate from current-year)

## Part 4: State-specific QC

- [ ] State file in `states/` was consulted for each relevant state
- [ ] State rates are current for the tax year (2024 / 2025 / 2026 distinct)
- [ ] State PTET status verified (availability, election deadlines, mechanics)
- [ ] State capital gains treatment noted where applicable
- [ ] State retirement income treatment noted
- [ ] State estate tax threshold checked if estate/gift planning involved
- [ ] Multi-state residency issues identified
- [ ] Reciprocity agreements considered (if applicable)
- [ ] Convenience-of-employer rule considered (CT, NY, NE, DE, PA)
- [ ] Local taxes flagged (Detroit, Portland PFA/Metro, KY occupational, OH municipal, Philadelphia wage, NYC, etc.)

## Part 5: Numbers QC (for Excel models and projections)

- [ ] Every formula reviewed (not just values)
- [ ] Federal tax tables current for the year in question (2024/2025/2026 brackets)
- [ ] State tax tables current
- [ ] AMT considered where applicable
- [ ] NIIT (3.8%) computed correctly
- [ ] Additional Medicare tax (0.9%) considered
- [ ] Self-employment tax computed correctly
- [ ] Safe harbor calculation uses better of 100%/110% prior year or 90% current
- [ ] Inflation-indexed amounts updated (standard deduction, QBI thresholds, §415 limits, retirement caps)
- [ ] Net-to-client calculation is correct (after all taxes, fees)
- [ ] Sensitivity analysis included where material (different assumptions tested)

## Part 6: Memo and deliverable standards

For client-facing memos and deliverables:

- [ ] Memo follows `shared/CLIENT-FACING-MEMO-TEMPLATE.md` structure
- [ ] Executive summary states the recommendation clearly
- [ ] Assumptions are explicit (not buried)
- [ ] Risk disclosures are explicit (not omitted)
- [ ] Alternative strategies considered and reasons for non-selection noted
- [ ] Action items with owners and dates are clear
- [ ] No promises of specific refund or savings amounts (use ranges)
- [ ] Plain language where possible; technical where necessary
- [ ] No confidential information from other clients (redaction check)
- [ ] Priceless branding and disclaimer present
- [ ] Partner signature line

## Part 7: Professional standards

These prevent regulatory / ethical issues.

- [ ] **Circular 230 compliance**: Tax opinions meet §10.35 if applicable; contingent fees meet §10.27 requirements
- [ ] **§6694 preparer standards**: All positions meet "more likely than not" OR "substantial authority" (disclosed if less)
- [ ] **§6662 penalty exposure**: Considered; position documentation supports defense
- [ ] **§7525 federally authorized tax practitioner privilege**: Client communications properly marked if privileged
- [ ] **State bar / CPA ethics**: No unauthorized practice of law (UPL); no unauthorized investment advice
- [ ] **Conflicts of interest**: Client interests are not conflicted with any other Priceless client (disclose if yes)
- [ ] **Independence**: If Priceless also does attest work, independence maintained per AICPA / state standards
- [ ] **Data privacy**: Client PII handled per Priceless data standards; no inappropriate disclosure

### Engagement-specific

- [ ] **Aggressive positions**: Partner signoff required; client letter acknowledging position
- [ ] **Novel strategies**: External opinion considered if the position is first-impression
- [ ] **Promoter-driven strategies**: Red-flagged per `capital-deployment/PROMOTER-PATTERNS-PARTNER-DEFENSE.md`
- [ ] **Clients other practitioners brought in**: Scope limitations documented (Priceless only on its scope)

## Part 8: Documentation and file hygiene

- [ ] Client file contains: engagement letter, deliverable, supporting schedules, research memos, signoff log
- [ ] Research for novel issues is saved in client file
- [ ] Sources consulted are documented
- [ ] Version control: deliverable is clearly marked (v1 final, v2 revised, etc.)
- [ ] Delivered document date-stamped

## Part 9: Partner signoff

The partner (Tony) physically signs off OR digitally signs off via Priceless signoff log system.

Signoff statement:

> "I have reviewed this deliverable for [Client Name] dated [Date], covering [scope]. I have applied the QC checklist and confirm that each element is addressed. I approve release to client. Any exceptions noted below.
>
> Signed: [Tony or senior reviewer]
> Date: [Date]
>
> Exceptions / concerns:
> [Any partial compliance, deferred items, known weaknesses]"

**Do not release to client** without this signoff.

## Escalation triggers

Stop and escalate to partner (even mid-review) if you encounter:

- Position where the reviewer would not personally sign the return
- Client fact that contradicts assumptions in the deliverable
- Strategy not covered in the Priceless strategies library (novel — requires partner research)
- Promoter-driven strategy (see PROMOTER-PATTERNS-PARTNER-DEFENSE)
- Conflict of interest discovered
- Client engagement scope unclear
- IRS or state audit in progress on the topic (different engagement required)
- Criminal exposure indicators (willful non-compliance, fraud)
- Potential §6694 preparer penalty exposure
- Inconsistency between deliverable and prior Priceless work for same client

## Common QC failures (what to watch for)

Based on observed patterns:

1. **Stale state data** — state file updated but deliverable uses old numbers
2. **TY confusion** — TY 2024 strategy applied to TY 2025 return or vice versa
3. **OBBBA conformity gap** — federal OBBBA deduction taken without checking state
4. **PTET deadline miss** — election assumed available when state deadline passed
5. **§199A SSTB misclassification** — aggressive treatment without defensible analysis
6. **Reasonable comp under-benchmarking** — salary too low without industry data
7. **Missing risk disclosure** — high-audit-risk strategy with no risk language
8. **Fee structure mismatch** — engagement letter says flat fee; invoice shows hourly
9. **Scope creep** — deliverable covers items outside engagement letter
10. **Copy-paste errors** — prior client name or facts in current deliverable

## QC log

Every QC review is logged:

| Field | Value |
|---|---|
| Date | |
| Client | |
| Deliverable type | |
| Reviewer | |
| Time spent | |
| Exceptions found | |
| Released to client | Y/N |
| Date released | |

Monthly, Tony reviews QC log for patterns:
- Which staff have highest exception rate?
- Which strategies generate most QC issues?
- Any recurring systemic errors to address via staff training?

## Continuous improvement

After any engagement where an error reached the client (discovered in review, client callback, or IRS challenge):
- Root-cause analysis in QC retrospective
- Update this checklist if a new failure mode identified
- Share lesson with team
- Document in firm methodology

This checklist should evolve. If the same issue shows up three times, it needs its own checkpoint.
