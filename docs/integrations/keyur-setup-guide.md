# Client Profile Sync — Setup & Testing Guide

**For:** Keyur (and anyone configuring the Karbon + Ping integration)
**Prepared by:** Austin · July 2026

---

## What this is

A new Claude Code skill, `/client-profile-sync`, that builds the client profile for tax planning engagements automatically instead of you typing client context by hand.

- **From Karbon** it pulls the structured facts: client age (from date of birth), entity structure, incorporation dates and states, EIN, revenue ranges, engagement history, and custom fields.
- **From Ping** it pulls the soft context: goals, life events, and planning intentions mentioned in your client calls, meetings, and emails, each with a citation showing which meeting it came from.

It merges both into a draft of the standard 12-section Client Profile, marks anything it couldn't find as `[NEEDS INPUT]`, and you review and fill only the gaps. The finished profile gets uploaded to Karbon under the engagement, same as today.

Austin doesn't have Karbon or Ping logins, so **you are the first person to configure and test this**. This guide walks through everything. Budget about 30 minutes for setup and 20 for the first test.

---

## Before you start, confirm these

| Check | Why |
|---|---|
| You have **admin access** to Karbon settings | Needed to create the API application |
| The firm's Karbon plan is **Business or Enterprise** | Karbon's API is only available on these tiers. If we're on Team, stop here and tell Austin — this is a hard blocker |
| You have a Ping Assistant login | Ping's connection is per-user |
| Claude Code is installed and working in the priceless-cpa folder | The skill runs inside it. Run `/update-system` first so you have the latest version including this skill |

---

## Part 1: Karbon API keys (~10 min, one time for the firm)

1. In Karbon, go to **Settings → Connected Apps → API Applications**.
2. Create a new API application. Name it `Claude Profile Sync`.
   - Note: Karbon allows **one API application per account**. If one already exists, tell Austin before touching it.
3. You'll receive two credentials:
   - **Application ID** — a 36-character code like `a1b2c3d4-....` (Karbon delivers this by secure message when the application is registered)
   - **Access Key** — a long token starting with `eyJ`, visible on the API Applications page
4. Store them on your Mac so Claude Code can use them. In Terminal:

   ```bash
   echo 'export KARBON_BEARER_TOKEN="paste-the-Application-ID-here"' >> ~/.zshrc
   echo 'export KARBON_ACCESS_KEY="paste-the-Access-Key-here"' >> ~/.zshrc
   source ~/.zshrc
   ```

   (On Windows, ping Austin for the equivalent.)

**Security, please read:** these keys can read **every client in the firm's Karbon account**, regardless of per-user permissions. Never paste them into Slack, email, or any document. They live only in your shell profile. If a key is ever exposed, use the **Rotate** button on the same Karbon settings page — rotation kills the old key instantly.

---

## Part 2: Connect Ping to Claude (~5 min, per person)

Ping ships an official connection for Claude (their "MCP server"). In Terminal:

```bash
claude mcp add --transport http ping https://app.pingassistant.com/api/mcp
```

Then start Claude Code. It will open a browser window asking you to log in to Ping and authorize. Use your own Ping login — your Ping client visibility (assignment groups) carries through automatically.

Ping's own instructions, if needed: https://www.pingassistant.com/help-center/integrations/connect-to-claude-mcp

Also confirm in Quo (OpenPhone): **auto-record and transcription must be ON**, otherwise phone calls never reach Ping at all. (Calls under 30 seconds are skipped by Ping — that's normal.)

---

## Part 3: One-time setup run (~5 min)

In Claude Code, inside the priceless-cpa folder, run:

```
/client-profile-sync --setup
```

This does three things and reports each:

1. **Smoke-tests the Karbon keys** (a harmless settings lookup).
2. **Creates six custom fields in Karbon** (Filing Status, Client Goals, Entity History, Planning Notes, Engagement Tier, Ping Client Name). These become visible on client records in the Karbon UI, and they're where planning context gets stored permanently going forward.
3. **Checks the Ping connection** with a simple search.

Expected result: "Karbon OK / custom fields created / Ping OK." Anything else, see Troubleshooting below.

---

## Part 4: First test (~20 min)

Pick **one real client you know well** — ideally someone with an S Corp, a few Ping calls on record, and whose situation you could recite from memory. You knowing the ground truth is the whole test.

Run:

```
/client-profile-sync [Client Name]
```

What should happen:

1. Claude finds the client in Karbon and asks you to confirm the match.
2. It pulls their Karbon data (contact, entities, work history).
3. It pairs the client with their Ping record. First time, it may show you the Ping match and ask you to confirm — that confirmation is remembered permanently (saved to the "Ping Client Name" field in Karbon), so you're only asked once per client.
4. It searches Ping for goals, life events, and planning intent from the last 12 months.
5. It writes a draft profile to `~/client-profiles/` on your Mac and summarizes what it found.

### Review checklist — grade it against what you know

- [ ] **Age correct?** (Comes from the Date of Birth field in Karbon. If blank, that means DOB isn't in Karbon — note it.)
- [ ] **All entities present?** Every S Corp, LLC, partnership the client owns, with the right entity type and state.
- [ ] **Engagement history sensible?** Past work items listed, newest first.
- [ ] **Goals section:** are the Ping-extracted goals real things the client actually said? Check 2-3 citations against the actual meeting in Ping.
- [ ] **Nothing invented:** anything the systems didn't have should say `[NEEDS INPUT]`, not a guess.
- [ ] **Anything marked `[VERIFY]`:** these are things mentioned in calls but missing from Karbon — each one is either a data-hygiene gap or a genuine discovery. Both are useful to know.

Then repeat with 1-2 more clients, including one **weaker** case (few Ping calls, thin Karbon record) so we see how it degrades.

---

## Part 5: What to report back to Austin

1. For each test client: rough % of the profile that was auto-filled correctly vs `[NEEDS INPUT]` vs wrong.
2. **Which fields you still had to type manually** — this is the exact list we use to improve the next version.
3. Whether the Ping pairing matched the right client on the first try.
4. Any errors, copied verbatim.
5. Gut check: does this actually save you time vs. the old way?

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| "KARBON_BEARER_TOKEN not set" | Keys not in your shell profile | Redo Part 1 step 4, then fully restart Claude Code |
| HTTP 401 | The two keys are swapped, or mistyped | Application ID goes in `KARBON_BEARER_TOKEN`, the long `eyJ...` token goes in `KARBON_ACCESS_KEY` |
| HTTP 403 | Endpoint not enabled for the API application, or plan below Business | In Karbon Connected Apps, grant the application access to Contacts, Organizations, Client Groups, Work Items, Custom Fields, Notes, Files. If plan tier is the issue, tell Austin |
| HTTP 429 | Rate limit (120 requests/min) | Just wait a minute and re-run; a single client sync never hits this on its own |
| Ping finds nothing for a real client | Client's email/phone missing in Ping contacts | Add the client's primary email and mobile number to their Ping contact, re-run. Same data should exist in Karbon's contact details — the match runs on email and phone |
| Ping pairing picks the wrong client | Similar names, shared phone | Say no when asked to confirm; correct it once and it's remembered |
| Browser login for Ping never appears | MCP not added | Re-run the `claude mcp add` command from Part 2, restart Claude Code |

---

## One rule going forward

The Karbon↔Ping matching runs on **email addresses and phone numbers**. From now on, when onboarding any client: their primary email and mobile number go into **both** Karbon (contact details) and Ping (contacts) on day one. That single habit keeps the whole pipeline reliable.
