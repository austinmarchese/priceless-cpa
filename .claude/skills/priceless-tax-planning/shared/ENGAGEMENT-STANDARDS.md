# Engagement Standards

This file establishes the professional standards every Priceless CPA engagement must meet. The skill produces drafts; humans deliver final work. This file governs what counts as acceptable final work.

## Governing authorities

- **Circular 230** (31 CFR Subtitle A, Part 10) — practice before the IRS
- **AICPA Code of Professional Conduct** — ethics rules for CPAs
- **AICPA Statements on Standards for Tax Services (SSTS)** — practice standards specific to tax
- **IRC §6694** — preparer penalties for understatements
- **IRC §6695** — preparer penalties for procedural failures
- **IRC §6662** — accuracy-related penalties on taxpayers (relevant to position support)
- **IRC §7216** — confidentiality and use of tax return information
- **State CPA licensing rules** in every state where Priceless practices
- **Florida Board of Accountancy Rule 61H1** — Florida-specific CPA rules

## The four standards every output must meet

### Standard 1: Position support

Every tax position recommended in a Priceless deliverable must meet at least the **substantial authority** standard for non-tax-shelter positions, or the **more likely than not** standard for tax shelters and reportable transactions, per §6662 and §6694.

In practice this means:
- Authority for the position is cited in the strategy file (IRC, regs, rev rul, case law)
- The client's facts fit within the authority
- If the position is aggressive, disclosure under §6662(d)(2)(B)(ii) (Form 8275) is considered
- Reportable transactions per §6011 are disclosed on Form 8886

The skill draws position support from each strategy file's `authority` metadata field. If a strategy file's authority is weak or stale, the partner doesn't recommend the position.

### Standard 2: Documentation contemporaneous with the position

Every position has documentation requirements (per the strategy file's `requires_documentation` field). Documentation is **contemporaneous** — created at the time of the action, not reconstructed later.

Examples:
- Augusta Rule: board minutes signed in the period of the meetings, with FMV rental documented at the time
- Accountable plan: monthly or per-event reimbursement requests with original receipts
- Reasonable comp: board resolution authorizing comp level, dated before the year begins or before adjustment
- Cost segregation: engineering study completed before depreciation claim filed
- §1031: identification within 45 days, exchange completed within 180 days, with QI agreement in place

The documentation skill (`priceless-tax-documentation`) generates the templates. Clients implement and return signed/dated copies. Karbon archives.

### Standard 3: Reasonable inquiry

Per Circular 230 §10.34 and SSTS No. 3, the practitioner must make reasonable inquiries when information appears incorrect, incomplete, or inconsistent. The skill is not a substitute for inquiry.

When the skill outputs a memo with an open question, the analyst or partner must actually resolve the question — not just sign off and ignore it. Flagged questions become Karbon tasks. Unresolved questions block the engagement from closing.

Common situations requiring inquiry:
- YTD payroll suggests reasonable comp dramatically off prior-year basis without explanation
- QBO P&L shows owner personal expenses miscoded as business
- K-1 shows distributions in excess of basis
- Schedule E shows losses not allowed under passive activity rules without active classification documentation
- Foreign income or accounts surface that haven't been previously disclosed

### Standard 4: Conflict of interest screening

Per Circular 230 §10.29, the practitioner must screen for conflicts and obtain informed written consent when conflicts exist. For Priceless, this most commonly means:

- **Affiliated advisor compensation** — when Priceless or its affiliates would earn from a recommendation, written disclosure is required (Tier 2/3 per `REFERRAL-DISCLOSURE-FRAMEWORK.md`)
- **Multiple parties to a transaction** — when Priceless represents both spouses in a divorce, both partners in a partnership dispute, both buyer and seller in a transaction
- **Family-related conflicts** — when Priceless does work for related parties whose interests may diverge
- **Employee/contractor situations** — when classifying a worker creates a conflict between the business client and the worker

The skill checks the client profile's compliance gates section before producing any recommendation involving Path B compensation. Other conflicts are screened by the partner during review.

## Preparer penalty exposure (§6694)

Priceless CPA's signing preparers carry personal exposure for understatements:

- **§6694(a)** — $1,000 or 50% of fee, whichever greater, for understatement due to unreasonable position
- **§6694(b)** — $5,000 or 75% of fee, whichever greater, for willful or reckless conduct

The skill is structured to minimize §6694 exposure by:
- Citing authority for every recommended position
- Filtering aggressive positions through partner review
- Documenting reasonable basis for any disclosed position
- Refusing to recommend strategies whose authority is weak

The signing preparer (always a credentialed Priceless CPA, never the analyst, never offshore staff) takes ultimate responsibility. The skill is a tool used by the preparer; it is not the preparer of record.

## Procedural penalties (§6695)

Standard requirements every Priceless engagement satisfies:
- Preparer signs the return (electronically or wet) and includes PTIN
- Copy of return provided to client
- Records retained per §6107 (3-year minimum, Priceless retains 7 years)
- E-file rules followed for clients required to e-file
- Diligence requirements satisfied for refundable credits (EITC, AOTC, CTC, HoH status)

## Confidentiality (§7216)

Tax return information cannot be used or disclosed for purposes other than preparing the return without taxpayer consent. Priceless's use cases that require §7216 consent:

- Sharing tax information with [Insurance Affiliate] or [RIA Affiliate] for product suitability or portfolio analysis
- Using prior-year tax data in marketing analysis
- Sharing data with deal sponsors for capital deployment evaluations
- Sharing with cost seg firms, business valuation firms, or other specialists outside Priceless

Consent must meet the format requirements of Treas. Reg. §301.7216-3 (specific language, separate document or clearly delineated section, signed and dated, narrowly scoped).

The skill does NOT auto-transmit tax information across boundaries. When a recommendation requires §7216 consent, the memo notes this and a separate consent form is generated and obtained.

## Quality control workflow

Every memo flows through this QC sequence before client delivery:

1. **Analyst self-review** — analyst confirms math reconciles, all sources cited, open questions explicit, no PII slipped through
2. **Senior staff review** — confirms strategy recommendations are appropriate to client profile, documentation requirements are realistic, fee estimates are accurate
3. **Partner review** — confirms position support, signs off on aggressive positions, signs disclosures for Path B items, makes final judgment calls
4. **Client communication conversion** — internal memo converted to client-facing version (removes "open questions for partner," adds plain-language summary)
5. **Karbon archive** — internal memo, client memo, and disclosure receipts all archived under engagement
6. **Implementation tracking** — task list extracted from memo, Karbon tasks created, deadlines set

No memo is delivered to a client without partner sign-off. No exception. The skill produces drafts, period.

## When to refuse the engagement

Some engagements should not happen. The partner refuses when:

- Client requests an aggressive position that lacks substantial authority
- Client refuses to provide documentation needed to substantiate positions
- Client has prior unfiled returns and refuses to address them
- Client has undisclosed foreign accounts and refuses to disclose
- Client wants Priceless to take a position the partner believes is wrong
- Conflict of interest cannot be resolved with informed consent
- Engagement scope expands beyond Priceless's competence (e.g., complex international tax beyond our depth)

The skill flags potential refuse-the-engagement situations in the memo's open questions section. The partner makes the call.

## Records retention

| Record type | Retention period |
|---|---|
| Tax returns and supporting workpapers | 7 years |
| Engagement letters | 7 years |
| Internal memos and analyses | 7 years |
| Karbon task records | 7 years |
| §7216 consents | Indefinite (or 7 years post-engagement-end, whichever is longer) |
| Path B disclosure delivery records | Indefinite (or as required by RIA recordkeeping rules — Books and Records Rule, 17 CFR §275.204-2) |
| Email communications with clients | 7 years |
| Marketing and proposal records | 5 years |
| Employee training records (skill onboarding) | Duration of employment + 3 years |

These periods exceed minimum statutory requirements. Karbon retention policies must align.

## Skill-specific QC

Because the skill is new infrastructure, additional checks during initial deployment:

- Every memo produced in the first 30 days is partner-reviewed line-by-line
- Skill-gap log maintained: any error the skill makes is logged and the underlying file is updated before next quarterly cycle
- Spot-check: weekly random sample of memos reviewed for skill-quality drift
- Annual: full audit of skill output quality, comparison of skill-recommended strategies to actually-claimed positions on filed returns
