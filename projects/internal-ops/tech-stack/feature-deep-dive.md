# Feature Deep Dive: E-Sign, In-Portal Chat, Organizers

Side-by-side: how TaxDome handles it today, Karbon equivalent (or workaround), UI/UX comparison.

Companion to `team-walkthrough.md` Part 3.

---

## 1. E-Signatures (Including 8879 KBA)

### How TaxDome handles today

**Pricing model:** Bundled. Unlimited standard e-signatures included in subscription. KBA charged at $1/signature.

**Workflow:**
1. Firm staff prepares 8879 in tax software (CCH/Drake/UltraTax/etc).
2. Print directly from tax software → TaxDome (via TaxDome Drive virtual printer or direct integration).
3. Inside TaxDome, click "Request Signature" on the document.
4. Choose signature type: standard or KBA-required.
5. Add signers (taxpayer + spouse if MFJ).
6. Set up signature blocks via drag-and-drop.
7. Client receives notification via TaxDome portal + email.
8. Client logs into TaxDome portal (web or mobile app), sees doc in "Action Required" queue.
9. KBA flow: client answers 4 identity questions from public records (LexisNexis-backed). Pass = sign. Fail = locked, firm gets notified.
10. Signed PDF auto-saved to client folder with embedded audit trail certificate page (IP, timestamp, KBA result).
11. Status flips in pipeline automatically (configurable trigger).

**UI feel:**
- Single workflow screen. Document, signers, signature blocks, KBA toggle all on one page.
- Client side: branded portal, clear "sign now" CTA, mobile-optimized.
- Bulk send supported for batch 8879s.

**Compliance:** IRS-approved KBA. 8879 retention auto-handled (3 years from due date).

### Karbon equivalent

**Pricing model:** Credit-based. Standard e-sign = 1 credit. KBA = 2-3 credits per recipient. Credit bundles:

| Bundle | Price | Per-credit |
|---|---|---|
| 100 | $100 | $1.00 |
| 500 | $450 | $0.90 |
| 1,000 | $800 | $0.80 |
| 2,000 | $1,300 | $0.65 |
| 4,000 | $2,000 | $0.50 |

At 200 returns × 1.5 sigs avg × 2 credits per KBA = ~600 credits = $450-550/yr. At 1,000 returns scaling = $2,000-2,400/yr.

**Workflow:**
1. Prep 8879 in tax software (no print integration to Karbon — must save as PDF locally first).
2. Manually upload PDF to Karbon Storage on the relevant work item OR to client's contact record.
3. Click "Request eSignature" on document.
4. Add signers, drag-drop signature blocks.
5. Toggle KBA on (consumes extra credits).
6. Client receives email magic link to Karbon for Clients portal.
7. Client logs in, completes KBA quiz, signs.
8. Signed PDF returns to Karbon Storage. Audit trail attached.
9. Work item must be manually advanced (or via automation rule on custom field/tag).

**UI feel:**
- E-sign is bolted onto Karbon's work item structure. Less integrated than TaxDome.
- Karbon for Clients portal launched July 2025 — 9-12 months mature.
- Single-file upload from client side (matters for incoming docs, not for e-sign itself).
- No bulk send for batch 8879s confirmed in research; verify with Karbon.

**Compliance:** IRS-compliant KBA shipped July 2025. Audit trail PDF certificate page included.

### UI cross-compare

| Dimension | TaxDome | Karbon |
|---|---|---|
| Document source | Direct print from tax software | Manual save + upload |
| Setup screens to send | 1 | 2-3 |
| Bulk send 8879s | Yes | Verify with Karbon |
| Client login flow | Branded portal, persistent | Magic link first, then password |
| Mobile signing | Native app, 4.9 stars | Karbon for Clients app (newer, less polished) |
| Status auto-update | Yes, native | Yes, via automation rule |
| Cost at 200 returns | $0 marginal (bundled) | $450-550/yr |
| Cost at 1,000 returns | $0 marginal | $2,000-2,400/yr |

### What we lose if migrating

- **Print-from-tax-software workflow.** Big deal. Adds 30-60 sec per return × hundreds of returns = real time loss across season.
- **Bundled cost predictability.** E-sign cost goes from $0 marginal to scales-with-volume.
- **Mature client mobile signing UX.** Real risk of client complaints first season.

### Workarounds if no migration

N/A — TaxDome already handles this best.

### Workarounds if migrating
- **Verify Karbon eSign bulk send capability before committing.** If absent, batch 8879s become per-client labor.
- **Pre-purchase the 1,000-credit bundle ($800)** for Y1; revise Y2 based on actual usage.
- **OR use SmartVault Accounting Unlimited** ($65/user/mo annual = $7,800/yr for 10 users). KBA + e-sign bundled unlimited. Trade: another portal for client.
- **OR keep TaxDome JUST for e-sign** during Y1 transition (~$1K standalone). Awkward but de-risks.

### Recommendation

**Always-on use of Karbon native e-sign with credits is fine at our volume.** Cost not a blocker ($550-800/yr). Real loss is the print-from-tax-software step. If migrating, accept this friction and budget 30-60 sec/return overhead.

---

## 2. In-Portal Client Chat

### How TaxDome handles today

**Workflow:**
1. Client logs into TaxDome portal (web or mobile app).
2. Persistent chat thread per client. Like iMessage but inside firm portal.
3. Firm staff see all chats in unified "Inbox+" view across all clients.
4. Messages can attach files, link to specific documents/jobs/invoices.
5. Email + SMS notifications fire when new chat received.
6. Chat threads searchable by keyword, client, date.
7. Two-way SMS optional add-on ($11/mo + $0.04/msg) — clients can text back to a TaxDome firm number.

**UI feel:**
- Client side: chat icon in portal header, mobile push notifications, conversational tone.
- Firm side: combined inbox showing email + chat + SMS in one view.
- Branded with firm logo/colors.

**Why clients use it:**
- Faster than email for small questions ("did you get my W-2?")
- Less formal than email
- Mobile-first (clients chat from phone walking dog)
- Doesn't disappear in a cluttered Gmail inbox

### Karbon equivalent

**No in-portal chat.** Confirmed across multiple research streams.

Karbon has:
- **Email triage** (firm-side superpower, but client experience is just regular email)
- **Karbon for Clients portal** with task lists, document upload, e-sign — but no real-time chat thread
- **Comments on work items** (internal team only, not client-facing)

Closest workaround inside Karbon: client receives an email, reply hits the firm's Triage inbox, threaded conversation builds in email — but the client sees ordinary email in their personal Gmail, not a branded chat experience.

### UI cross-compare

| Dimension | TaxDome | Karbon |
|---|---|---|
| Persistent client chat thread | Yes | No |
| Branded chat UI for client | Yes (web + mobile app) | None |
| Firm unified chat inbox | Yes (Inbox+) | None for chat (Triage is email-only) |
| File attach in chat | Yes | N/A |
| SMS option | $11/mo + $0.04/msg | None native |
| Mobile push notifications | Yes | N/A |

### What we lose if migrating

- **Branded conversational client experience.** Real if our clients use chat today.
- **Quick-question funnel.** Without chat, those messages either flow to email (slower) or to phone (more interrupting).
- **Two-way SMS option.** Karbon has nothing native.

### Workarounds (no equivalent — must compose one)

**Option A: Front or Missive (shared inbox layered over Gmail/Outlook)**
- $19-29/user/mo. For 10 users = $2,280-3,480/yr.
- Provides team-shared email view with assignment, comments, snoozing — similar to Karbon Triage but cross-platform.
- Does NOT add a branded chat experience for clients.
- Useful if Karbon's Triage feels limited or if we want to keep email as primary client channel.

**Option B: GoHighLevel (GHL) for two-way SMS + chat widget**
- $97-297/mo depending on tier.
- Two-way SMS to firm phone number.
- Web chat widget embeddable on priceless.cpa.
- Mobile app for staff.
- Requires us to give clients our GHL number / chat link, separate from Karbon portal.
- Replaces TaxDome's SMS feature one-for-one. Does NOT replace in-portal chat exactly (chat is on firm website, not inside Karbon portal).

**Option C: TextMagic / Twilio for SMS only**
- $50-150/mo at our volume.
- SMS only, no chat widget.
- Cheaper than GHL if we just want to chase document uploads via text.

**Option D: Liscio (replaces Karbon's portal entirely)**
- $99/user/mo for Tax Team plan = $11,880/yr.
- Native client chat, secure messaging, document portal, e-sign.
- Native Karbon integration exists.
- Trade: clients log into Liscio for chat + docs, Karbon stays internal-only.
- Adds significant cost but most directly replaces TaxDome's client chat experience.

**Option E: Accept the loss**
- Tell clients to email or call.
- Most CPA firms operate this way.
- Loses the modern UX edge but eliminates a tool from the stack.

### Recommendation

**Decide based on actual usage.** Pull TaxDome chat stats:
- How many active chat threads in last 90 days?
- What % of client comms is chat vs email vs phone?
- Which client segments use chat heavily?

If <20% of comms = chat: Accept the loss + use GHL/TextMagic for SMS reminders only ($50-150/mo).

If 20-50% = chat: Layer Front or Missive over email ($2-3K/yr) for team-shared inbox parity. Accept that clients see plain email.

If >50% = chat (unlikely but possible): Liscio is the only real replacement. $12K/yr cost might justify staying on TaxDome instead.

---

## 3. Native Organizers

### How TaxDome handles today

**Pricing model:** Bundled. Unlimited organizers included in subscription.

**Workflow:**
1. Firm builds organizer template once. Drag-and-drop sections: personal info, dependents, income, deductions, real estate, business, etc.
2. Conditional logic: "If client has business → show Schedule C section."
3. Document requests embedded inline ("Upload your W-2 here").
4. Prior-year rollover toggle per field: client sees last year's answer pre-populated, just confirms or updates.
5. Multi-year template versioning.
6. Mass-send via pipeline automation: when "Tax Year Open" stage triggers, organizer auto-fires to all clients in that pipeline.
7. Client receives in TaxDome portal. Saves progress as they go.
8. Firm staff monitor completion % live in dashboard.
9. Auto-reminder cadence configurable.
10. Completed organizer responses + uploaded docs land in client folder, auto-categorized by section.
11. Firm reviews answers, asks follow-up Qs in chat or email.

**UI feel:**
- Builder side: Typeform-style editor. Sections, conditional rules, preview mode.
- Client side: progress bar, save-and-resume, mobile-optimized, pre-populated prior-year fields.
- Pre-built tax templates included (1040, S-corp, partnership, etc).

**Why this matters:**
- Organizer is THE entry point to tax season for 80% of clients.
- Quality of organizer UX = client experience for the year.
- Mass-send automation = thousands of dollars in admin time saved.

### Karbon equivalent

**Karbon has NO native organizer.** Two paths:

#### Option A: StanfordTax (via Karbon partnership, launched Dec 2025)

**Workflow:**
1. StanfordTax pulls prior-year data from tax software backups (CCH, Drake, UltraTax, ProConnect).
2. Auto-generates personalized organizer per client (uses prior-year actuals).
3. Sends to client via Karbon for Clients portal.
4. Client completes organizer inside Karbon portal (so it's branded as Karbon, not StanfordTax).
5. Documents flow back to StanfordTax → auto-builds workpaper binder (renames, categorizes, bookmarks, validates).
6. Karbon work item status updates in real time as client progresses.

**UI feel:**
- AI-powered. Less template-building required than TaxDome — StanfordTax generates organizers from prior data.
- Workpaper binder auto-build is genuinely better than TaxDome (which gives you raw uploads, not a structured binder).
- 5-month-old integration as of May 2026. Limited community feedback.

**Pricing:** Not publicly listed. Bundled with Karbon partnership pricing — quote required.

#### Option B: Soraban Collect

**Workflow:**
1. Soraban builds smart questionnaires (AI-generated, conditional logic).
2. Sends to client via Soraban portal (separate from Karbon for Clients).
3. Documents auto-categorized.
4. Karbon work item status updates via integration.

**UI feel:**
- AI-powered intake. Quality reportedly high.
- Adds another portal for clients (Soraban + Karbon = two logins) UNLESS configured as embedded in Karbon flow.
- More mature than StanfordTax (older product).

**Pricing:**
| Module | Per-Return | Min | Annual Floor |
|---|---|---|---|
| Collect only | $25/return | 50 returns/mo | $15,000 |
| Collect + Deliver | $40/return | 50 returns/mo | $24,000 |

50-return/month minimum applies year-round even off-season. Steep.

### UI cross-compare

| Dimension | TaxDome | StanfordTax via Karbon | Soraban |
|---|---|---|---|
| Native to platform | Yes | Add-on integration | Add-on integration |
| Pricing | Bundled $0 marginal | TBD (quote) | $15K/yr min floor |
| Conditional logic | Manual builder | AI-generated | AI-generated |
| Prior-year rollover | Yes (toggle per field) | AI-pulled from tax software backups | Verify |
| Document categorization | Manual sections | Auto via AI | Auto via AI |
| Workpaper binder build | No | Yes (better than TaxDome) | Verify |
| Client-side UI | Branded portal, mobile, save+resume | Karbon for Clients (newer) | Soraban portal (separate) |
| Mass-send via pipeline | Yes | Verify with Karbon | Verify |
| Maturity | 5+ years, mature | 5 months, new | 2-3 years, mature |

### What we lose if migrating

- **Bundled cost.** Goes from $0 marginal to $15K floor (Soraban) or TBD quote (StanfordTax).
- **Maturity.** TaxDome's organizer has 5+ years of refinement vs StanfordTax's 5-month-old launch.
- **Single-platform UX.** Either StanfordTax (still inside Karbon portal — OK) or Soraban (separate portal — friction).

### What we gain

- **AI workpaper binder auto-build (StanfordTax).** Genuinely better than TaxDome. Saves prep staff time on every return.
- **AI-generated organizer questions** based on prior-year actuals — less manual template-building.
- **Better workpaper handoff to preparer.** Categorized + validated docs vs raw uploads.

### Workarounds if migrating

**Option A: StanfordTax via Karbon partnership.**
- Get quote from Karbon's StanfordTax partnership team.
- Validate AI workpaper binder with 5-10 pilot clients before tax season.
- Best long-term fit if it works as advertised.

**Option B: Soraban Collect + Karbon.**
- $15K/yr floor is steep but Soraban is more mature than StanfordTax.
- Would need to validate volume hits the 50-return/mo minimum even off-season.

**Option C: Build organizer in Karbon's Client Tasks (manually).**
- Cheap but loses all AI/conditional logic benefits.
- Roughly equivalent to a 2015-era organizer experience.
- Not recommended.

**Option D: Keep TaxDome for organizers only during Y1.**
- Awkward dual-platform but de-risks tax season.
- $1K/yr for 1 seat to keep organizer functionality.
- Phase out Y2 once StanfordTax/Soraban validated.

### Recommendation

**Get the StanfordTax-via-Karbon quote first.** AI workpaper binder is real upside. If quote is reasonable (<$5K/yr at our volume), this becomes the path. If quote is $10K+, reconsider.

Soraban's $15K floor is too steep for our volume. Skip unless quote shows volume-based discount eliminating off-season minimum.

Do NOT migrate without an organizer solution locked in. Tax season without a working organizer = firm-threatening.

---

## Summary: Cross-Cutting Decisions

For each of these 3 features, the migration math depends on actual usage data we should pull from TaxDome:

1. **E-sign volume:** How many KBA signatures Y1, Y2, Y3? (Determines credit-bundle cost vs SmartVault unlimited)
2. **Chat usage:** What % of client comms uses in-portal chat? (Determines whether to layer Front/Missive/Liscio/GHL)
3. **Organizer completion stats:** How many clients use the prior-year rollover? Which sections most-edited? (Determines AI organizer ROI)

**Discuss:**
- Pull these stats before next walkthrough session.
- Schedule StanfordTax-via-Karbon demo to validate the workpaper binder claim.
- Get quotes on Soraban + StanfordTax before any decision.
