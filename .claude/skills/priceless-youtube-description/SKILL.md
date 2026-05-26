---
name: priceless-youtube-description
description: Generate optimized YouTube video descriptions for Priceless CPA with SEO keywords, timestamps, CTAs, and Anthony's bio
---

# YouTube Description Generator

## When to Use

Use `/priceless-youtube-description` when you:
- Have a finished or near-finished YouTube script and need the description
- Want to generate a description for an existing published video
- Need to batch-generate descriptions for multiple videos

## How to Use

Run `/priceless-youtube-description` with a script reference or topic:
- `/priceless-youtube-description` (will ask for input)
- `/youtube-description --script projects/videos/cost-seg/script.md`
- `/youtube-description --title "How Entrepreneurs With $10M+ Structure Their Entities"`
- `/youtube-description --topic cost segregation for real estate investors`

## Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn the user:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

## Pre-flight: Load Context

Before generating, read these files:

1. **Brand Brief**: `wiki/anthony/brand-brief.md`
2. **Voice Patterns**: `wiki/anthony/voice-patterns.md`
3. **AI Patterns to Avoid**: `wiki/brand-voice/ai-writing-patterns-to-avoid.md`
4. **Target Persona**: `wiki/audience/serial-entrepreneur/profile.md`
5. **Marketing Engine**: `wiki/marketing/marketing-growth-engine.md` (for current CTAs and lead magnets)
6. **Script** (if provided): Read the full script for accurate timestamps and content summary

## Process

### Step 1: Gather Inputs

If not provided via flags, ask for:

1. **Video title** (final, locked title)
2. **Script or topic summary** (what the video covers, key points)
3. **Timestamps** (section timestamps from the script, or ask for them)
4. **Related videos** (optional, for linking in description)
5. **Lead magnet** (optional, if there's a relevant lead magnet to link)

The strategy call CTA is locked to `https://www.pricelesscpa.com/booking`. Do not ask the user for a CTA link.

### Step 2: Generate the Description

Use this exact structure. Every description follows the same format for brand consistency.

```
[HOOK LINE]

[2-3 SENTENCE SUMMARY]

[TIMESTAMPS]

[CTA BLOCK]

[RESOURCES / LINKS]

[ABOUT ANTHONY / BIO]
```

The description ends on the bio. Do not add a hashtags/tags line.

#### Section Details

**LEAD MAGNET LINK (Line 1)**
The very first line of every description is the 5 Tax Traps lead magnet link. This appears in the YouTube preview (before "Show more") and drives traffic to the lead capture page:

```
5 Tax Traps Your Accountant Is Missing (free guide): https://www.pricelesscpa.com/5-tax-traps?utm_source=youtube
```

This line is non-negotiable. It goes before the hook line on every video. Keep the link exactly as written, with only `?utm_source=youtube` (no campaign or slug params).

**HOOK LINE (Line 2-3)**
The next 1-2 sentences that appear in the YouTube preview. This is the second most visible text after the lead magnet link. It must:
- Create curiosity or state a specific benefit with a number
- Speak directly to the business owner persona
- Match the energy of the video title
- No generic openers like "In this video..." or "Welcome back..."

Examples:
- "Your CPA filed your return. But did they actually save you money? Here are the 5 strategies most CPAs never bring up."
- "I restructured 40+ entities this year. Every single owner was leaving money on the table."
- "This one change saved my client $47K. And his old CPA never mentioned it."

**SUMMARY (2-3 sentences)**
Brief, direct summary of what the viewer will learn. Written in Anthony's voice. Use specific numbers and outcomes when possible. No AI puffery. No "In this comprehensive video..." Just state what the video covers and why it matters.

**TIMESTAMPS**
Wrap each timestamp in parentheses. Format:
```
(0:00) - [Section name]
(1:29) - [Section name]
(5:16) - [Section name]
...
```

Pull directly from the script structure. Use the actual section titles, not generic labels. If timestamps aren't available, generate reasonable estimates based on the script sections and note them as estimates.

**CTA BLOCK**
Use this exact CTA on every video. The booking link is locked. Do not substitute, shorten, or ask the user to confirm.

```
Ready to stop overpaying? Book a free strategy call:
https://www.pricelesscpa.com/booking
```

Keep to 1-2 lines. No hard sell. Match Anthony's soft CTA style from his closes.

**RESOURCES / LINKS**
Use this exact block. Do not add the quiz, related videos, Twitter, or TikTok:

```
Work with me:
Visit: https://www.pricelesscpa.com

Follow Anthony:
Instagram: https://www.instagram.com/taxtonecpa/
```

This is the locked links block. Do not substitute, add other handles, or ask the user to confirm.

**ABOUT ANTHONY / BIO**
Use this bio block verbatim (do not rewrite each time):

```
If you're new here, I'm Anthony Price. How I got here...

21: Graduated from the University of Nevada with dual degrees in Finance and Accounting, and started in public accounting
22: Worked with complex businesses, high-income individuals, and insurance companies across tax and audit
23: Earned my CPA and built a foundation in both compliance and strategy
25: Started focusing on what I saw mattered most: proactive tax planning and tax reduction strategies for seven-figure earners
26: Grew my CPA firm to 100 clients
27: Crossed 200 clients and built the team to keep up with demand
28: Built the firm to 300+ business owners and high-income earners focused on year-round tax planning
Today: We help high earners and business owners save an average of $50K+ per year through proactive tax strategy
```

This is the last block in the description. End here.

### Step 3: Quality Check

Before presenting the final description, verify:

| Check | Requirement |
|-------|-------------|
| Hook line | Specific, curiosity-driven, no generic openers |
| Voice | Sounds like Anthony, not like a press release |
| Numbers | At least one specific dollar amount or stat |
| No AI words | None from the ban list (delve, robust, comprehensive, leverage, etc.) |
| No em dashes | Commas, periods, or restructured sentences only |
| Timestamps | Present and accurate to the script |
| CTA | Soft, one clear next step |
| Booking link | Exactly `https://www.pricelesscpa.com/booking` (locked, no variants) |
| Lead magnet link | Exactly `...5-tax-traps?utm_source=youtube` (no campaign/slug params) |
| Timestamps | Wrapped in parentheses `(0:00) -` |
| Links block | "Work with me:" + Visit + Instagram only (no quiz, no Twitter/TikTok) |
| No tags line | Description ends on the bio, no hashtags |
| Bio | Exact format from template, not rewritten |
| Length | Under 5,000 characters (YouTube limit) |
| First 2 lines | Compelling in preview (before "Show more") |

### Step 4: Output

Present the full description in a copyable code block so the user can paste it directly into YouTube.

If a script file was provided, also offer to append the description to the script's `## Packaging` section.

## Example

```
User: /priceless-youtube-description --script projects/videos/tax-rate-37-to-12-5/script.md

Claude: [Reads script, generates description]

Here's the YouTube description for "How I Got My Client From 37% to 12.5% Tax Rate on $4M Income":
```

```
5 Tax Traps Your Accountant Is Missing (free guide): https://www.pricelesscpa.com/5-tax-traps?utm_source=youtube

I got my client's effective tax rate down from 37% to 12.5% on $4M of net income without having a single penalty. And the steps I walk through don't require a offshore account, crazy loopholes or any gray areas. This is the exact 3-layer system we used, from entity structure and clean accounting to QBID optimization and strategic asset-backed investments. If you're a high-income business owner still writing seven-figure checks to the IRS, this is the framework most CPAs won't build for you.

(0:00) - Beginning of 2024: the client who wanted under 15%
(1:29) - Layer 1
(5:16) - Layer 2
(8:17) - Layer 3

Ready to stop overpaying? Book a free strategy call:
https://www.pricelesscpa.com/booking

Work with me:
Visit: https://www.pricelesscpa.com

Follow Anthony:
Instagram: https://www.instagram.com/taxtonecpa/

If you're new here, I'm Anthony Price. How I got here...

21: Graduated from the University of Nevada with dual degrees in Finance and Accounting, and started in public accounting
22: Worked with complex businesses, high-income individuals, and insurance companies across tax and audit
23: Earned my CPA and built a foundation in both compliance and strategy
25: Started focusing on what I saw mattered most: proactive tax planning and tax reduction strategies for seven-figure earners
26: Grew my CPA firm to 100 clients
27: Crossed 200 clients and built the team to keep up with demand
28: Built the firm to 300+ business owners and high-income earners focused on year-round tax planning
Today: We help high earners and business owners save an average of $50K+ per year through proactive tax strategy
```

## Learnings

- Description format is locked to the 37%-to-12.5% example: lead magnet line with `?utm_source=youtube` only, parenthesized timestamps, "Work with me:" links block (Visit + Instagram only), bio block, and no hashtags. Don't reintroduce the quiz line, extra social handles, or a tags line.
- Hook + summary length is locked to roughly the 37%-to-12.5% north star: ~4-5 sentences, ~95 words total, in a single paragraph (not two). Don't split into separate hook and summary paragraphs and don't run long — the whole block should fit in the YouTube preview area and read like the north star example above.
