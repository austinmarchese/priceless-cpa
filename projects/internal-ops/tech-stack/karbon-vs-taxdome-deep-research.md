# Karbon vs TaxDome: Deep Research

**Date:** 2026-05-06
**Method:** 6 parallel web research subagents covering feature parity, migration risks, portal/e-sign/payments, automation/AI, pricing/TCO, and team adoption risk.
**Status:** Research only. No decisions.

---

## TL;DR

Migrating TaxDome → Karbon trades a mature all-in-one client-facing platform for a more open, API-first internal workflow platform. The migration is real work: $15K-$45K one-time disruption cost, no bulk migration tooling exists, the dominant migration in the market runs the OPPOSITE direction (Karbon → TaxDome), and Karbon's tax-firm features (FIFO queues, StanfordTax organizers, extension management, native portal) are 6-18 months old and largely unvalidated by community adopters.

The strategic case for migrating is API access for AI-powered firm automation. Everything else is roughly a wash or worse on the client-facing side.

**Two viable paths:**
1. **Migrate fully** with paid Guided Implementation, May-July window, 90-day parallel-run, plus SmartVault for docs/KBA. Total Year 1 ~$25K-28K vs current ~$18-19K. Justified only if API automation produces 2+ hrs/week per staff member of saved time.
2. **Stay on TaxDome 18-24 months** and revisit when Karbon's tax-firm features have community validation. TaxDome's price increase trajectory (67% over 3yrs) eventually closes the cost gap anyway.

---

## 1. Feature Parity Matrix

### TaxDome-only features (severity for tax CPA firm)

| Feature | Karbon Status | Severity if Migrating |
|---|---|---|
| Native Form 8879 KBA in unified portal | Shipped July 2025 as credit-based add-on (2-3 credits/KBA at $0.80/credit ≈ $1.60-2.40/KBA) | LOW (now shipped, just costs more at scale) |
| IRS Transcript Integration (official partnership) | TaxNow third-party integration only | HIGH if firm pulls transcripts in workflow |
| Tax Software Print Integration (Drake/Lacerte/UltraTax/CCH/ProSeries/TaxSlayer/ProConnect) | None native; StanfordTax bridges some gap | HIGH for any print-to-portal workflow |
| Native two-way SMS ($0.04/msg + $11/mo) | None | MEDIUM-HIGH (replace with GHL/TextMagic) |
| In-portal client chat | None | MEDIUM |
| Native organizers (mature, conditional, prior-year rollover) | StanfordTax marketplace add-on, launched Dec 2025 | MEDIUM-HIGH (newer, paid add-on, unvalidated) |
| Bookkeeping hub + GL integration | None | MEDIUM (only if firm does bookkeeping) |
| Multi-language client portal | Not documented | LOW-MEDIUM |
| Unlimited e-signatures bundled | Credit-based ($0.80-1.00/credit, 2-3 per KBA) | MEDIUM (cost creeps with volume) |

### Karbon-only features (gain if migrating)

| Feature | TaxDome Status | Value |
|---|---|---|
| Email Triage (shared team inbox, AI-summarized) | Inbox+ exists but not a team command center | HIGH for 10-person teams |
| Native REST API (v3, webhooks, custom fields, work items, time, billing) | Zapier integration limited to contacts | HIGH (this is the reason to migrate) |
| WIP + realization dashboards (real-time profitability) | Not prominently available | HIGH for partner-level visibility |
| Card surcharge passthrough to client | Not documented | MEDIUM |
| AI email composition + quick replies | Not available | MEDIUM |
| Rate plans by role + budget vs actual | Basic time tracking only | MEDIUM-HIGH for multi-role billing |
| Xero two-way (2025), HubSpot CRM sync (Feb 2025) | Zapier workaround only | MEDIUM-HIGH |
| Native integrations: GoProposal, Ignition, Filed, StanfordTax, Soraban | Limited | HIGH (best-of-breed stack possible) |

### Edge cases both miss
- Real per-client cost-to-serve profitability (Karbon closer)
- True document versioning (neither makes it first-class)
- Entity-relationship mapping for layered structures (RE-heavy clients) — both treat each entity as separate account
- Karbon has undocumented monthly automation caps

---

## 2. Migration Risks (Hard Showstoppers)

1. **No bulk migration tooling exists.** Reverse direction (Karbon → TaxDome) is the dominant flow. TaxDome actively markets it with 6 months free. No vendor will hold your hand on TaxDome → Karbon.

2. **Karbon import = contacts only.** Spreadsheet upload of organizations + people. Documents, messages, invoices, time history, workflow templates, organizer responses must be manually rebuilt or archived to read-only storage.

3. **TaxDome chat history is not bulk exportable.** Print-to-PDF one thread at a time. Multi-year message archives effectively lost at scale unless any thread contains scope changes worth manually preserving.

4. **Workflow templates rebuild from scratch.** TaxDome export does not include templates. Karbon template import requires Karbon's own spreadsheet format. 20-60+ hours of rebuild for tuned 1040, S-Corp, extension, notice templates.

5. **Recurring invoices not exportable from TaxDome.** Recurring billing rules, retainer schedules, auto-billing must be re-entered manually.

6. **Organizer responses CSV one-by-one only.** No bulk export. No import path into Karbon (Karbon has no native organizer — requires StanfordTax add-on).

7. **Karbon has NO native tax organizer.** StanfordTax (Dec 2025 launch) is the integrated solution. Soraban Collect is alternative. Both are paid add-ons that TaxDome bundles for free.

8. **Karbon Team plan caps at 1,000 contacts.** A 200-client firm with related parties, spouses, entity contacts, and referral sources can hit this. Business plan ($89/user/mo) raises to 2,000.

9. **TaxDome post-cancellation data window is undefined.** Export everything before canceling — no second chance.

### Soft risks (recoverable but painful)
- Document folder structure: preserved via TaxDome Drive sync, but upload to Karbon is manual per work item (10-30 hrs labor)
- E-signed 8879 audit trails: download all signed PDFs from TaxDome Drive before canceling; verify embedded certificate page exists
- Client portal re-onboarding: 5-15% of clients need hands-on help; 2-4 weeks of re-invitation campaigns
- Time tracking history: exportable as CSV, reference-only in Karbon
- Payment history: same — CSV archive only
- §7216 disclosure: update engagement letters to name Karbon as data processor before migration

### Migration sequence (12-week post-tax-season)
| Week | Action |
|---|---|
| 1-2 | Export everything from TaxDome (Drive sync, all CSVs, signed 8879s, chat threads worth keeping) |
| 3-4 | Set up Karbon: contacts CSV import, permissions, rebuild high-volume templates |
| 5-6 | Upload docs to Karbon Storage. Choose StanfordTax or Soraban for organizer replacement |
| 7-8 | Pilot 10-15 active clients fully through Karbon |
| 9-10 | Bulk-invite remaining clients to Karbon portal |
| 11-12 | Cancel TaxDome (after exports verified). Read-only parallel during remaining billing period |

### Estimated total disruption cost
| Category | Range |
|---|---|
| Karbon subscription delta | $0 to +$4,800/yr |
| Organizer replacement (StanfordTax or Soraban) | +$2,400-15,000/yr |
| Staff time (template rebuild, doc upload, re-onboarding) | $4,500-18,000 one-time |
| Dual-platform overlap 1-2 months | $800-1,600 one-time |
| Client churn risk (2-5% of 200 clients × $2.5K avg revenue) | $10,000-25,000 |
| **Total one-time disruption** | **$15,000-45,000 fully loaded** |

Biggest risk is client churn, not software cost.

---

## 3. Client Portal, E-Sign, Payments

### Portal
- **TaxDome:** Native iOS/Android (4.9 stars), white-labeled, branded mobile app at 25+ seats, in-portal chat, organizers, e-sign, payments, multi-language. Mature.
- **Karbon for Clients:** Launched July 2025. iOS/Android apps now exist. Single-file uploads only from client side. Tax organizers/invoicing/payments features rolling out H2 2025. 9-12 months old. Real risk of being early adopter of immature client-facing stack.

### E-sign / KBA
- **Anchor:** Does NOT support KBA or 8879. Engagement letters and proposals only.
- **Karbon native KBA (shipped July 2025):** Credit-based with 12-month expiry.

| Bundle | Price | Per-credit |
|---|---|---|
| 100 | $100 | $1.00 |
| 500 | $450 | $0.90 |
| 1,000 | $800 | $0.80 |
| 2,000 | $1,300 | $0.65 |
| 4,000 | $2,000 | $0.50 |

  Standard eSign = 1 credit. KBA = 2-3 credits/recipient (verify with Karbon). At 200 returns × 1.5 sigs = ~300 KBA events × 2 credits = 600 credits. Cost: $550-800/yr.
- **TaxDome:** $1/KBA, included in subscription, unlimited e-sign.
- **SmartVault Accounting Unlimited:** KBA bundled (unlimited) at $75/user/mo annual = $9,000/yr for 10 users — but you're buying SmartVault primarily for docs.

### Payments
- **Anchor (current):** $5 flat per payment, passed to client. Firm cost: $0.
- **Karbon Payments (Stripe-powered):** ACH 1%+$0.30 capped $5/transaction. Card 2.6%+$0.30. Surcharge passthrough available. At 200 clients via ACH ≈ $1,000/yr.
- **Ignition:** ACH ~1%, CC 3.6%+$0.30. At $400K billings (80% ACH/20% card): ~$32K/yr in fees. Avoid.
- **Stripe direct, QBO Payments:** Viable but require custom integration or different workflow.

**Recommended:** Keep Anchor for engagement letters ($0). Use Karbon Payments for invoice collection (~$1K/yr ACH). Avoid Ignition.

### Document management
- **Karbon native storage:** No size limit. No download API (the known gap). Single-file upload from client. Not a true DMS.
- **Karbon + OneDrive/SharePoint:** Manual handoff between Karbon and SharePoint. Works but requires process discipline. $0 marginal if M365 already in stack.
- **SmartVault (recommended):** $9,000/yr for 10 users (Accounting Unlimited). Native Karbon integration (formalized July 2025 partnership with Ignition for ProConnect firms). KBA bundled. Branded client portal. Tax-year folder templates. Tradeoff: creates two client-facing portals.
- **Suralink, FileCenter:** Not recommended for tax-focused practice.

---

## 4. Automation + AI

### TaxDome automation ceiling
- Pipeline-centric. Conditional stages via tags. Cannot have conditions on first/last stage.
- TaxDome AI (Aug 2024 launch): document auto-tagging, NL reporting, AI search. No email drafting. Included in subscription.
- **No public REST API.** Zapier integration is contacts-only (create/update/delete contacts). Cannot pull documents, workflows, pipelines, invoices, or organizer data programmatically.

### Karbon automation ceiling
- Trigger-based: status changes, date thresholds, custom field updates (CustomField webhook added Feb 2026).
- FIFO workflow queues for tax season (June 2025).
- Automated extension management (June 2025, unvalidated by community).
- Karbon AI: email summarization, drafting, quick replies, meeting transcript summaries. Bundled in Business tier currently. "Future pricing may apply" language.
- Native REST API v3: contacts, orgs, work items, notes, time, billing, custom fields. **Rate limit: 10,000 req/day per app key — webhook-first architecture mandatory.**
- n8n native node exists. Zapier integration thin (mostly contact triggers).

### AI tax-tool ecosystem (Karbon-integrated)
- **Filed:** AI 1040 prep. Pulls Karbon clients/docs via API, writes back work status. Live integration. Credit-based pricing (not public).
- **StanfordTax:** Smart organizers (launched Dec 2025). AI-builds workpaper binder. Auto-syncs Karbon work items.
- **Ignition + Karbon:** Proposal accept → auto-creates Karbon work item.
- **Soraban Collect:** AI client intake. Native Karbon integration.
- **Aiwyn:** AI tax prep + billing automation (May 2025 acquisition of Taxa). Mid-to-large firms.
- **BlackOre, TaxGPT:** Less established with Karbon specifically.

### Build-on-Karbon opportunities (impossible on TaxDome)
1. Claude-powered email assistant (webhook → Claude → draft reply UI)
2. Real-time firm capacity dashboard (WorkItems + TimeSheets API)
3. Automated client intake → work creation router (Soraban + Claude classification)
4. Custom field AI enrichment (status change → Claude generates work summary → write back to custom field)
5. Tax deadline + extension tracker with risk scoring

None of these are buildable on TaxDome's contacts-only Zapier surface.

---

## 5. Pricing + 3yr TCO

### Karbon (2026)
| Plan | Per user/mo (annual billing) |
|---|---|
| Team | $59 (40 templates, 1K contacts) |
| Business | $89 (75 templates, 2K contacts, automation, AI bundled) |
| Enterprise | Contact |

10 users on Business: **$10,680/yr.** Add-ons: eSign credits, Migration $299, Custom Reporting $6K, White Glove Onboarding from $9,999.

No public record of base price increases 2023-2025.

### TaxDome (2026)
| Plan | 1-yr | 2-yr | 3-yr |
|---|---|---|---|
| Essentials | $800 | $750 | $700 |
| Pro | $1,000 | $950 | $900 |
| Business | $1,200 | $1,150 | $1,100 |

10 users on Pro 1-yr: **$10,000/yr.** 3-yr: $9,000/yr.

**Price history:** $600 (2020-2022) → $800 (Feb 2023, "first-ever price change") → $1,000 (2024-2025 restructure). **+67% over 3 years.**

### Supporting ecosystem
- **Soraban:** $25/return Collect, 50-return/mo minimum = **$15K/yr floor** even off-season
- **Filed:** Credit-based, sales-only quotes. 1 credit = standard 1040, 2 credits = complex
- **CCH Engagement Essentials:** Login-required pricing. Forum reports $800-2,500 not verifiable
- **CCH Axcess Tax Essentials:** 100 returns $2,606, 200 returns $3,740, 400 returns $4,874
- **ProConnect:** 200+ returns $27.92/1040; 200-return bundle + 2 users = $5,868/yr; 10-user access fee $2,100
- **Drake Tax:** ~$2,695/yr unlimited. Best at scale.
- **SmartVault Accounting Unlimited:** $65/user/mo annual = $7,800/yr (10 users); Accounting Pro $45 = $5,400
- **Ignition Pro:** $229/mo (350 clients, 15 seats) = $2,748/yr
- **Liscio Tax Team:** $99/user/mo = $11,880/yr
- **M365 Business Premium:** $22/user/mo = $2,640/yr

### 3-year TCO scenarios

**Stack A: Stay on TaxDome (10 users, 200→1,000 returns)**

| Line | Year 1 | Year 3 |
|---|---|---|
| TaxDome Pro 1-yr | $10,000 | ~$13,310 (10%/yr hike) |
| ProConnect or CCH | $5,868 | ~$11,000 |
| Ignition Pro | $2,748 | $2,748 |
| **Total** | **$18,616** | **~$27,000-28,000** |

**Stack B: Migrate to Karbon full stack**

| Line | Year 1 | Year 3 |
|---|---|---|
| Karbon Business 10 users | $10,680 | $10,680 |
| eSign credits (1.2K credits Y1, 2.5K Y3) | $960 | $2,400 |
| CCH Axcess Essentials (200/400 bundle) | $3,740 | $4,874 |
| Ignition Pro | $2,748 | $2,748 |
| SmartVault Accounting Pro | $5,400 | $5,400 |
| Migration/onboarding (Y1 only) | $2,000-5,000 | -- |
| **Total Y1** | **~$25,528-28,528** | |
| **Total Y3** | | **~$26,102** |

**Stacks converge by Y3** because TaxDome's 67%/3yr trajectory eats its early cost advantage. Productivity claims ("$34K saved per employee/yr" — Karbon marketing) cannot be verified. Real ROI lever is workflow efficiency, not software cost.

### Pricing risk register
- **TaxDome lock-in:** Demonstrated 67%/3yr increases via tier restructures
- **Karbon AI credit-creep:** "Future pricing may apply" — could be $15-25/user/mo = $1,800-3,000/yr
- **Karbon eSign volume:** Linear with returns; +$2K/yr at 1,000 returns
- **CCH bundle cliff:** 400-return bundle is highest transparent tier; firms above must negotiate
- **Soraban minimum:** $15K/yr floor regardless of seasonal concentration
- **ProConnect breaks at 500+ returns:** $27.92/return × 500 = $14K just for individuals

---

## 6. Team Adoption Risk

**Adoption risk score: HIGH.**

### Mental model inversion
TaxDome = document-and-pipeline-centric (work lives in client folders, navigate by client). Karbon = email-and-work-item-centric (work lives in tasks attached to email threads, navigate by inbox state). Tax preparers trained on TaxDome will feel disoriented for 4-8 weeks of daily use.

### Triage misfit for tax firms
Karbon's Triage assumes client communication drives work state changes. Maps well to advisory/bookkeeping. Tax prep is batch-driven (organizer in → prep → review → sign → file) with minimal mid-engagement client back-and-forth. Triage adds noise during the middle of tax prep. Successful tax-firm Karbon adopters configure rigid templates and treat Triage as secondary.

### Role-by-role time to proficiency
| Role | Estimate |
|---|---|
| Prep staff | 6-10 weeks |
| Reviewer | 4-8 weeks |
| Admin | 8-12 weeks (steepest) |
| Partner | 2-4 weeks |

Productivity recovery: 3-6 months for mixed-skill team.

### Mobile gap
TaxDome native iOS/Android: 4.9 stars. Karbon mobile: 3/5 stars. For staff working remotely or doing on-site document intake, this is operationally relevant.

### Tax-firm-specific gaps in Karbon
| Workflow | Status | Risk |
|---|---|---|
| Form 8879 e-sign chain | Native KBA shipped July 2025 (credit-based) | LOW (now functional) |
| Extension tracking | June 2025, unvalidated | MEDIUM |
| IRS transcript download | TaxNow third-party | MEDIUM |
| K-1 tracking/distribution | No documented coverage | HIGH |
| Tax notice handling | No documented coverage | HIGH |
| Multi-state coordination | Custom templates only | MEDIUM |
| Client organizer | StanfordTax add-on (Dec 2025) | MEDIUM |
| Efile status tracking | Not documented; manual | HIGH |
| Client portal | Native (July 2025), feature-incomplete | HIGH |

### Top 5 mitigations if migrating
1. **Never migrate during/before tax season.** May-July only. Implementation must complete before September.
2. **Buy paid Guided Implementation.** Self-service is built for advisory firms with flexible schedules. Tax firms cannot debug templates in real-time during peak.
3. **Pre-build all templates before staff touches the system.** Anthony configures full library; staff land in configured system.
4. **Run parallel for 90 days minimum.** Karbon for new engagements only; TaxDome for in-flight returns.
5. **Designate a Karbon champion from prep staff** — most adaptable non-partner. All staff questions route through them, not Karbon support.

### Hybrid option
Karbon for new clients only. Viable risk-limiting hedge but creates 12-18mo dual-platform burden + client segmentation complexity (new clients get different portal/workflow than existing). Worth doing only as a validated path to full migration, not as permanent state.

---

## 7. Recommended Supporting Tools (If Migrating)

| Need | Tool | Annual Cost | Why |
|---|---|---|---|
| Practice management + workflow | **Karbon Business** | $10,680 (10 users) | Core platform |
| Organizer + workpaper binder | **StanfordTax** (via Karbon) | TBD (bundled with Karbon partnership) | Replaces TaxDome organizer; AI-generated |
| 1040 prep AI | **Filed** | TBD (credit-based, sales quote) | API-integrated 1040 prep, syncs work status to Karbon |
| Document management + KBA bundled | **SmartVault Accounting Unlimited** | $7,800-9,000 | Native Karbon, KBA included, branded client portal |
| Engagement letters | **Anchor (keep)** | $0 firm cost | Already working; client absorbs $5/payment |
| Payment collection | **Karbon Payments** (ACH) | ~$1,000 at 200 clients | Stripe-powered, surcharge passthrough |
| Business return TB | **CCH Engagement Essentials** | $800-2,000 (forum range, unverified) | Flat-fee. Only with CCH Axcess. |
| Client intake AI | **Soraban Collect** | $15K/yr floor | High floor due to 50-return/mo minimum. Validate need. |
| Internal automation | **n8n self-hosted** | $20-50/mo infra | Karbon webhooks → Claude API → write-back |
| SMS replacement (TaxDome had native) | **GHL or TextMagic** | $50-150/mo | Two-way client SMS reminders |
| Tax software (kept) | **CCH Axcess Tax** | ~$10K-15K | No change |

**Stack total Year 1 if all-in:** ~$45-50K vs current ~$20-25K. Net delta of $20-25K/yr.

---

## 8. Recommendation

The research surfaces two defensible paths. The original research notes assumed migration was the question; this round suggests it might not be.

### Path A: Stay on TaxDome 18-24 months, then revisit
**Why:** Migration risk is high. Karbon's tax-firm features are 6-18 months old and unvalidated. Adoption risk is HIGH. Disruption cost $15-45K + 2-5% client churn risk. Total Y1 stack delta is $20-25K just for software. By Y3, TaxDome's price increases close the cost gap anyway.

What you give up by waiting: the AI-firm vision is delayed 18-24 months.

What you gain by waiting: Karbon's tax-firm features mature. KBA, IRS transcripts, organizers, FIFO queues, extension management all get community validation. The 8879/K-1/notice/efile workflow gaps either close or become known-good third-party integrations.

### Path B: Migrate, but only with full mitigation stack
**Required for success:**
- May-July 2026 implementation window (now)
- Paid Guided Implementation (~$2-5K)
- Anthony pre-builds all templates before staff touches it
- 90-day parallel run (Karbon for new, TaxDome for in-flight)
- SmartVault Accounting Unlimited bundled in (covers DMS + KBA gap)
- Designated Karbon champion on prep staff
- Engagement letters updated for §7216 (Karbon as data processor) before any data moves
- StanfordTax or Soraban locked in BEFORE next tax season — do not enter season without organizer solution

If any of those mitigations cannot be funded or executed, the recommendation tilts back to Path A.

### Open questions before deciding
1. Does TaxDome's KBA feature work for the firm's actual 8879 workflow today? (Confirms severity of migration loss)
2. What's Filed's actual per-credit pricing? (Quote needed)
3. Karbon eSign: 2 or 3 credits per KBA? (Verify with Karbon)
4. CCH Engagement Essentials flat-fee quote? (Negotiate)
5. Is Karbon AI staying bundled in Business tier or moving to add-on? (Roadmap risk)
6. What does the firm's staff count of remote/on-site work look like? (Mobile gap severity)
7. Is the firm willing to absorb 2-5% client churn risk to gain API access?

---

## Sources

Full citation list embedded in raw subagent outputs at:
`/private/tmp/claude-501/-Users-austinmarchese-client-code-priceless-cpa/bfd9d77c-2ae1-4949-b031-e014a1825312/tasks/`

Primary sources include: Karbon developer center, Karbon pricing/release notes, TaxDome help center + pricing docs, CPA Practice Advisor (June/July/Dec 2025 announcements), Capterra/G2 reviews, IRS §7216 regs, SmartVault/Ignition/Filed/StanfordTax/Soraban official pricing, Reddit /r/taxpros + /r/Accounting threads, Financial Cents and Uku independent comparisons.
