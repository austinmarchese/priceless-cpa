# MVP Sales Process — Priceless CPA

## Goal

Build the minimum viable sales process that captures every lead, follows up automatically, and gives Anthony visibility into his pipeline — without over-engineering.

---

## Current State


| What | How it works today |
|------|--------------------|
| **Website CTAs** | Link to Calendly (`calendly.com/pricelesscpa/intro`) |
| **Tax Checklist lead magnet** | Form submits to FormSubmit.co → emails Anthony |
| **GHL** | ~298 contacts, mix of leads + clients, two loose opportunity groups |
| **Follow-up** | Manual — Anthony does everything himself |
| **Lead nurture** | None |

**Problem:** Leads come in, Anthony gets an email or Calendly notification, and it's on him to remember to follow up. No system tracks where each lead is, what happened, or what's next.

---

## Phase 1: Foundation (Week 1)

### 1.1 Clean Up GHL Contacts

Before building anything, organize what's already there.

**Step-by-step:**

1. **Log into GHL** → Go to Contacts → Smart Lists
2. **Create a Smart List called "Current Clients"**
   - Filter: Use whatever criteria Anthony already used to separate clients (he mentioned he started doing this manually)
   - Go through the list with Anthony on a screenshare — he knows who's a client and who's a lead
3. **Create Tags in GHL:** Go to Settings → Tags → create these:
   - `status:client` — paying clients
   - `status:lead` — active leads (showed interest, haven't closed)
   - `status:dead` — old leads that never converted
   - `source:website` — came through the website
   - `source:referral` — came through a referral
   - `source:facebook-ad` — came through paid ads (future)
   - `source:organic-content` — found via social content
   - `magnet:tax-checklist` — downloaded/completed the 7 Questions tool
   - `magnet:free-eval` — referral lead magnet (future)
   - `magnet:direct-book` — booked a call without a lead magnet
4. **Create Custom Fields:** Go to Settings → Custom Fields → create:
   - `lead_quality` (dropdown: hot, warm, cold)
   - `lead_score` (number)
   - `business_type` (text)
   - `entity_count` (text)
   - `income_level` (text)
   - `has_real_estate` (yes/no)
5. **Bulk-tag the 298 contacts:**
   - Select all known clients → apply `status:client` tag
   - Select known dead leads → apply `status:dead` tag
   - Everything else gets `status:lead`
   - This will take one working session with Anthony (~30-60 min)

### 1.2 Build One Pipeline

**Step-by-step:**

1. **Go to GHL → Opportunities → Pipelines**
2. **Create a new pipeline called "Sales Pipeline"** with these stages (in order):
   - **New Lead** — Just entered the system, hasn't been contacted
   - **Contacted** — Speed-to-lead automation has fired (SMS + email sent)
   - **Call Booked** — Lead has a Calendly appointment scheduled
   - **Call Completed** — Anthony had the discovery call
   - **Proposal Sent** — Anthony sent pricing/engagement details
   - **Won** — Client signed, deal closed
   - **Lost** — Didn't close (with a required "lost reason" dropdown: too expensive, not ready, went with competitor, no response, not a fit)
3. **Set stage automation triggers** (within GHL pipeline settings):
   - When a contact enters "New Lead" → trigger the speed-to-lead workflow (built in Phase 3)
   - When a contact moves to "Proposal Sent" → trigger the proposal follow-up workflow (built in Phase 3)
   - When a contact moves to "Lost" → trigger the long-term nurture workflow
4. **Delete or archive the old opportunity groups** Anthony had set up so there's only one pipeline to look at

### 1.3 Connect Calendly → GHL

**Step-by-step:**

1. **Log into Zapier** (Anthony already has an account)
2. **Create a new Zap:**
   - **Trigger:** Calendly → "Invitee Created" (fires when someone books a call)
   - **Action 1:** GoHighLevel → "Create or Update Contact"
     - Map Calendly fields: `email` → GHL email, `name` → GHL name, `phone` → GHL phone (if Calendly collects it)
     - Add tag: `magnet:direct-book`
     - Add tag: `source:website` (default — can be overridden later for other sources)
   - **Action 2:** GoHighLevel → "Create Opportunity" (or update if exists)
     - Pipeline: "Sales Pipeline"
     - Stage: "Call Booked"
     - This moves the contact to the correct pipeline stage automatically
3. **Test the Zap:** Book a test appointment on Calendly, confirm the contact appears in GHL in the "Call Booked" stage
4. **Turn the Zap on**

**Alternative (no Zapier):** GHL has a native Calendly integration. Go to GHL → Settings → Integrations → Calendly → connect. This may handle contact creation automatically, but Zapier gives more control over tagging and pipeline placement. Check if the native integration is sufficient first — if it handles contact creation + pipeline stage, skip Zapier here.

---

## Phase 2: Capture All Leads into GHL (Week 2)

### 2.1 Website Form → GHL (Tax Checklist)

Currently the tax checklist form (`app/tax-checklist/page.tsx`) posts to FormSubmit.co which just emails Anthony. We need to also send this data into GHL.

**Step-by-step:**

1. **Get GHL Inbound Webhook URL:**
   - Go to GHL → Automations → Create Workflow
   - Set trigger to "Inbound Webhook"
   - GHL generates a unique webhook URL — copy this
   - Save the workflow (we'll add actions in Phase 3)

2. **Create environment variable:**
   - Add `GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...` to `.env.local`
   - Add same to Vercel environment variables (Settings → Environment Variables)

3. **Create the API route** — new file: `app/api/leads/route.ts`

   ```typescript
   // web/app/api/leads/route.ts
   import { NextRequest, NextResponse } from 'next/server'

   export async function POST(req: NextRequest) {
     const body = await req.json()

     const {
       name,
       email,
       businessType,
       entityCount,
       entityTypes,
       income,
       realEstate,
       frustration,
       source = 'website',
       leadMagnet = 'tax-checklist',
     } = body

     // --- Lead Scoring (Phase 4 logic, but wired in now) ---
     let score = 0
     if (entityCount === '3+' || entityCount === '2') score += 2
     if (income === '$500K - $1M' || income === '$1M+') score += 3
     if (realEstate === 'Yes') score += 1
     if (frustration === 'Very frustrated' || frustration === 'Considering switching') score += 2
     if (source === 'referral') score += 3

     let quality = 'cold'
     if (score >= 6) quality = 'hot'
     else if (score >= 3) quality = 'warm'

     // --- POST to GHL Inbound Webhook ---
     const ghlPayload = {
       first_name: name?.split(' ')[0] || '',
       last_name: name?.split(' ').slice(1).join(' ') || '',
       email,
       phone: body.phone || '',
       tags: [
         `source:${source}`,
         `magnet:${leadMagnet}`,
         `quality:${quality}`,
       ],
       customField: {
         lead_quality: quality,
         lead_score: score.toString(),
         business_type: businessType || '',
         entity_count: entityCount || '',
         income_level: income || '',
         has_real_estate: realEstate || '',
       },
     }

     const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL
     if (ghlWebhookUrl) {
       await fetch(ghlWebhookUrl, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(ghlPayload),
       })
     }

     // --- Backup: still email Anthony via FormSubmit ---
     const formData = new FormData()
     formData.append('name', name)
     formData.append('email', email)
     formData.append('_subject', `New Lead (${quality.toUpperCase()}): ${name}`)
     formData.append('_captcha', 'false')
     formData.append('_template', 'table')
     formData.append('Lead Score', `${score} (${quality})`)
     formData.append('Business Type', businessType || '')
     formData.append('Entity Count', entityCount || '')
     formData.append('Entity Types', Array.isArray(entityTypes) ? entityTypes.join(', ') : '')
     formData.append('Income Level', income || '')
     formData.append('Real Estate', realEstate || '')
     formData.append('Frustration', frustration || '')

     await fetch('https://formsubmit.co/ajax/anthony@priceless.cpa', {
       method: 'POST',
       body: formData,
     }).catch(() => {}) // non-critical, don't fail the request

     return NextResponse.json({ success: true, quality, score })
   }
   ```

4. **Update the tax checklist form** — in `app/tax-checklist/page.tsx`, change `handleSubmit`:

   ```typescript
   // Replace the FormSubmit.co fetch with:
   await fetch('/api/leads', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       name: answers.name,
       email: answers.email,
       businessType: answers.businessType,
       entityCount: answers.entityCount,
       entityTypes: answers.entityTypes,
       income: answers.income,
       realEstate: answers.realEstate,
       frustration: answers.frustration,
       source: 'website',
       leadMagnet: 'tax-checklist',
     }),
   })
   ```

5. **Test end-to-end:**
   - Fill out the tax checklist locally
   - Confirm the API route fires
   - Confirm the contact appears in GHL with correct tags and custom fields
   - Confirm Anthony still gets the backup email
   - Deploy to Vercel, test again in production

### 2.2 Facebook Ads → GHL (When Ads Go Live)

**Step-by-step:**

1. **Create Facebook Lead Form Ad** in Meta Ads Manager
   - Use "Instant Form" lead type (not "Website" — keeps the user on Facebook, higher conversion)
   - Fields to collect: First Name, Last Name, Email, Phone Number
   - Add a custom question: "What's your biggest tax frustration right now?" (free text — gives context for sales call)

2. **Connect to GHL via Zapier:**
   - **Trigger:** Facebook Lead Ads → "New Lead"
   - **Action 1:** GoHighLevel → "Create or Update Contact"
     - Map: first_name, last_name, email, phone
     - Add tags: `source:facebook-ad`, `magnet:direct-book`
     - Set custom field `lead_quality`: `warm` (paid ad leads are warm by default — they clicked an ad)
   - **Action 2:** GoHighLevel → "Create Opportunity"
     - Pipeline: "Sales Pipeline"
     - Stage: "New Lead"
   - This triggers the speed-to-lead workflow automatically

3. **Alternative — native GHL integration:**
   - GHL has a built-in Facebook integration: Settings → Integrations → Facebook
   - Connect Facebook Business account → select the ad account → select the form
   - GHL can natively pull leads from Facebook Lead Forms without Zapier
   - Downside: less control over tagging — may need to add a workflow step inside GHL to add the right tags

4. **Test:** Run a test lead through the Facebook form, confirm it appears in GHL with correct tags and triggers the speed-to-lead sequence

### 2.3 Referral Leads → GHL (When Referral Campaign Launches)

**Step-by-step:**

1. **Build a referral landing page** on the website (e.g., `app/free-tax-evaluation/page.tsx`)
   - Simple page: headline, short copy about the free evaluation, form (name, email, phone, "Who referred you?")
   - Form submits to the same `/api/leads` route with `source: 'referral'` and `leadMagnet: 'free-eval'`

2. **The API route handles the rest:**
   - Referral leads automatically get +3 to their lead score (from the `source === 'referral'` check)
   - They'll almost always land as `hot` leads
   - GHL tags them `source:referral` + `magnet:free-eval` + `quality:hot`

3. **In GHL, the speed-to-lead workflow** (Phase 3) will route hot leads differently — Anthony gets an urgent notification, lead gets a higher-touch SMS

---

## Phase 3: Speed-to-Lead Automation (Week 2-3)

### 3.1 Build the Speed-to-Lead Workflow in GHL

**Step-by-step:**

1. **Go to GHL → Automations → Workflows**
2. **Open the workflow created in Phase 2.1** (the one with the inbound webhook trigger), OR create a new workflow with trigger: "Pipeline Stage Changed → New Lead"
3. **Build the workflow with these steps (in order):**

   **Step 1: Wait 1 minute** (gives GHL time to fully create the contact)

   **Step 2: IF/ELSE branch — check `lead_quality` custom field**

   **→ IF quality = "hot":**

   - **Step 3a: Send SMS** (from Anthony's number — GHL must have Twilio/LC Phone connected)
     ```
     Hey {{contact.first_name}}, it's Anthony from Priceless CPA.
     I saw you reached out — I'd love to connect. What's the best
     time for a quick call this week?
     ```
   - **Step 4a: Send Email**
     - From: anthony@priceless.cpa
     - Subject: "Quick question, {{contact.first_name}}"
     - Body: Short, personal email. Not a marketing blast. Include Calendly link.
   - **Step 5a: Internal Notification → Send SMS to Anthony**
     ```
     🔥 HOT LEAD: {{contact.first_name}} {{contact.last_name}}
     Score: {{contact.lead_score}}
     Email: {{contact.email}}
     Source: [tag info]
     ```
   - **Step 6a: Internal Notification → Send Email to Anthony** with full lead details + link to GHL contact record

   **→ IF quality = "warm":**

   - Same as hot, but the internal notification is a regular email (no SMS to Anthony)
   - SMS to lead is slightly less urgent:
     ```
     Hey {{contact.first_name}}, thanks for checking out Priceless CPA!
     If you're looking for help with your taxes or accounting, I'd love
     to chat. Here's my calendar: [Calendly link]
     ```

   **→ IF quality = "cold":**

   - Email only, no SMS to lead
   - No urgent notification to Anthony (just shows up in GHL dashboard)

   **Step 7: Move Opportunity to "Contacted" stage**

   **Step 8: Wait 24 hours**

   **Step 9: IF/ELSE — Has the contact replied? (check "Last Reply" field or "Has Appointment" condition)**

   **→ IF no reply:**
   - **Send SMS:**
     ```
     Hey {{contact.first_name}}, just wanted to make sure you saw my
     message. Happy to jump on a quick call whenever works — here's
     my calendar: [Calendly link]
     ```

   **→ IF replied or booked:** Stop the workflow (they're engaged)

   **Step 10: Wait 48 more hours (Day 3 total)**

   **Step 11: IF no reply:**
   - **Send Email:** Value-add content email
     - Subject: "3 things most entrepreneurs miss on their taxes"
     - Body: Short, valuable content + soft CTA to book a call
     - This positions Anthony as an expert, not just a salesperson

   **Step 12: Wait 4 more days (Day 7 total)**

   **Step 13: IF no reply:**
   - **Send SMS:**
     ```
     No worries if now isn't the right time, {{contact.first_name}}.
     I'll keep you in the loop with tax tips — feel free to reach out
     whenever. - Anthony
     ```
   - **Add tag:** `status:nurture`
   - **Move Opportunity to "Lost"** with reason "No Response"

4. **Save and activate the workflow**

### 3.2 Build the Post-Call Follow-Up Workflow

**Step-by-step:**

1. **Create new workflow in GHL**
2. **Trigger:** Pipeline Stage Changed → "Proposal Sent"
3. **Steps:**

   **Step 1: Wait 2 days**

   **Step 2: Send Email**
   - Subject: "Following up — {{contact.first_name}}"
   - Body:
     ```
     Hey {{contact.first_name}},

     Just wanted to check in after our call. Let me know if you have
     any questions about what we discussed — happy to hop on another
     quick call.

     - Anthony
     ```

   **Step 3: Wait 3 more days (Day 5 total)**

   **Step 4: IF no reply → Send SMS**
   ```
   Hey {{contact.first_name}}, wanted to see where your head is at.
   Happy to jump on another quick call if helpful. No pressure either way.
   ```

   **Step 5: Wait 7 more days (Day 12 total)**

   **Step 6: IF no reply → Send final Email**
   - Subject: "Last check-in"
   - Body: Brief, respectful close. "Door's always open" tone.

4. **Save and activate**

### 3.3 Build the Lost Lead Nurture Workflow

**Step-by-step:**

1. **Create new workflow in GHL**
2. **Trigger:** Pipeline Stage Changed → "Lost"
3. **Steps:**
   - Remove from all active workflows (stop any speed-to-lead or follow-up sequences)
   - Add to a monthly email drip: 1 value email per month with tax tips/strategies
   - This keeps Priceless CPA top of mind if they're ever ready
   - Content can be repurposed from Anthony's social content
4. **Save and activate**

---

## Phase 4: Lead Qualification (Week 3-4)

### 4.1 Scoring Logic (Already Built Into API Route)

The lead scoring is handled in the `/api/leads` route from Phase 2.1. Here's the full logic:

| Signal | How we detect it | Score |
|--------|-----------------|-------|
| Multiple entities | `entityCount` = "2" or "3+" | +2 |
| High income | `income` = "$500K - $1M" or "$1M+" | +3 |
| Has real estate | `realEstate` = "Yes" | +1 |
| Frustrated with CPA | `frustration` = "Very frustrated" or "Considering switching" | +2 |
| Referral source | `source` = "referral" | +3 |

**Score thresholds:**
- **6+** = Hot → SMS + email to lead, urgent SMS + email notification to Anthony
- **3-5** = Warm → SMS + email to lead, regular email notification to Anthony
- **0-2** = Cold → Email only to lead, no notification to Anthony (just appears in GHL)

This scoring happens **before** the data hits GHL, so the GHL workflow already has the quality tag when it fires.

### 4.2 How to Adjust Scoring Over Time

After running for 2-4 weeks, review which leads actually converted:

1. **Go to GHL → Opportunities → filter by "Won"**
2. **Look at their custom fields:** What did their lead scores look like? What source were they?
3. **Adjust the scoring weights** in the API route if needed
   - If referral leads close at 80% but organic at 10%, increase the referral weight
   - If income level doesn't correlate with close rate, reduce its weight
4. **Update the API route** with new weights, redeploy

---

## Setup Prerequisites — What Anthony Needs to Provide

Before any of this can be built, we need:

| # | What | Where to find it | Why we need it |
|---|------|-------------------|----------------|
| 1 | **GHL login access** (or sub-account access for us) | Anthony provides credentials or creates a user | To build pipelines, workflows, tags, custom fields |
| 2 | **GHL API key or webhook URL** | GHL → Settings → Business Profile → API Keys | For the Next.js API route to send leads to GHL |
| 3 | **Twilio / LC Phone number connected in GHL** | GHL → Settings → Phone Numbers | Required for SMS automations. If not set up, GHL needs a phone number purchased and verified |
| 4 | **Email sending domain verified in GHL** | GHL → Settings → Email Services | So emails come from anthony@priceless.cpa, not a random GHL domain |
| 5 | **Zapier login** | Anthony provides or invites us | For Calendly → GHL and Facebook → GHL connections |
| 6 | **Calendly login** (or admin access) | Anthony provides | To test the Calendly → GHL Zap |
| 7 | **Approval on SMS copy** | We draft, Anthony approves | SMS needs to sound like him, not generic marketing |
| 8 | **30-60 min session to tag existing contacts** | Schedule with Anthony | He knows who's a client vs lead vs dead |

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Get GHL access from Anthony
- [ ] Create tags in GHL (`status:*`, `source:*`, `magnet:*`)
- [ ] Create custom fields in GHL (`lead_quality`, `lead_score`, `business_type`, etc.)
- [ ] Build "Sales Pipeline" with 7 stages
- [ ] Session with Anthony to tag existing 298 contacts
- [ ] Archive/delete old opportunity groups
- [ ] Set up Calendly → GHL Zap (or native integration)
- [ ] Test: book a Calendly appointment, confirm contact + pipeline stage in GHL

### Phase 2: Lead Capture
- [ ] Get GHL webhook URL from inbound webhook trigger
- [ ] Add `GHL_WEBHOOK_URL` to `.env.local` and Vercel env vars
- [ ] Build `/api/leads` route with scoring + GHL webhook POST
- [ ] Update tax checklist form to POST to `/api/leads` instead of FormSubmit.co
- [ ] Test locally: submit form → check GHL for contact with correct tags/fields
- [ ] Deploy to Vercel, test in production
- [ ] (Future) Connect Facebook Lead Forms → GHL via Zapier
- [ ] (Future) Build referral landing page + connect to `/api/leads`

### Phase 3: Automations
- [ ] Verify Twilio/LC Phone is connected in GHL (required for SMS)
- [ ] Verify email sending domain in GHL
- [ ] Draft all SMS/email copy → get Anthony's approval
- [ ] Build speed-to-lead workflow in GHL (instant → 24hr → 3 day → 7 day)
- [ ] Build post-call follow-up workflow (proposal sent → 2 day → 5 day → 12 day)
- [ ] Build lost lead nurture workflow (monthly value email)
- [ ] Test each workflow with a test contact — walk through every branch
- [ ] Turn on all workflows

### Phase 4: Qualification
- [ ] Lead scoring is already built into `/api/leads` — verify it's working
- [ ] Confirm GHL workflows branch correctly based on `lead_quality` tag
- [ ] After 2-4 weeks: review closed deals, adjust scoring weights if needed

---

## What "Done" Looks Like

After this is built, every lead that touches Priceless CPA:

1. **Enters GHL automatically** with source, tags, and quality score
2. **Gets a response within 1 minute** (SMS + email, adjusted by quality)
3. **Gets followed up automatically** if they don't respond (24hr, 3 day, 7 day)
4. **Shows up in one clean pipeline** so Anthony can see where everyone stands
5. **Anthony gets notified** of every new lead — urgently for hot leads
6. **Hot leads get priority treatment** — faster cadence, more personal outreach

Anthony's only job: show up to sales calls and move deals through the pipeline.

---

## Future Add-Ons (Not Now)

- AI-powered lead qualification (LLM analyzes free-text responses)
- ManyChat integration for Instagram DM automation ("Comment TAX")
- Long-term email newsletter for nurture list
- Review/testimonial request automation post-close
- Reporting dashboard (close rate by source, time-to-close, revenue by lead magnet)
- Missed call text-back (GHL feature — auto-SMS when someone calls and Anthony doesn't pick up)
