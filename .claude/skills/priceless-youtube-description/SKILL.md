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
4. **Primary CTA** (default: book a strategy call)
5. **Related videos** (optional, for linking in description)
6. **Lead magnet** (optional, if there's a relevant lead magnet to link)

### Step 2: Generate the Description

Use this exact structure. Every description follows the same format for brand consistency.

```
[HOOK LINE]

[2-3 SENTENCE SUMMARY]

[TIMESTAMPS]

[CTA BLOCK]

[RESOURCES / LINKS]

[ABOUT ANTHONY / BIO]

[TAGS LINE]
```

#### Section Details

**LEAD MAGNET LINK (Line 1)**
The very first line of every description is the 5 Tax Traps lead magnet link. This appears in the YouTube preview (before "Show more") and drives traffic to the lead capture page:

```
5 Tax Traps Your Accountant Is Missing (free guide): https://www.pricelesscpa.com/5-tax-traps?utm_source=youtube&utm_campaign=[VIDEO_SLUG]
```

Replace `[VIDEO_SLUG]` with the video's slug (e.g., `entity-restructuring`, `cost-seg-explained`). This lets PostHog and the lead form track which video drove each lead.

This line is non-negotiable. It goes before the hook line on every video.

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
Format:
```
0:00 - [Section name]
0:30 - [Section name]
2:00 - [Section name]
...
```

Pull directly from the script structure. Use the actual section titles, not generic labels. If timestamps aren't available, generate reasonable estimates based on the script sections and note them as estimates.

**CTA BLOCK**
Default CTA (adjust based on current marketing priorities):
```
Ready to stop overpaying? Book a free strategy call:
[LINK - ask user or use default booking link]
```

Keep to 1-2 lines. No hard sell. Match Anthony's soft CTA style from his closes.

**RESOURCES / LINKS**
Include relevant links:
- Lead magnet (if applicable): "Take the 7 Questions Quiz: [link]"
- Related videos: "Watch next: [title] [link]"
- Social links
- Website: https://www.pricelesscpa.com

Format:
```
Free Resources:
Take the 7 Questions Quiz: https://www.pricelesscpa.com/tax-checklist
Visit: https://www.pricelesscpa.com

Follow Anthony:
Instagram: https://www.instagram.com/taxtonecpa/
Twitter: https://x.com/anthonypricecpa
TikTok: https://www.tiktok.com/@anthonypricecpa
```

These are the locked social handles. Do not substitute or ask the user to confirm.

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

**TAGS LINE**
Generate 5-10 relevant hashtags and a keyword-rich tags line. Focus on:
- Tax-specific terms from the video (e.g., #CostSegregation, #SCorp, #TaxStrategy)
- Audience terms (e.g., #Entrepreneur, #RealEstateInvestor, #BusinessOwner)
- General discovery (e.g., #CPA, #TaxPlanning, #TaxTips)

Format:
```
#TaxStrategy #CPA #Entrepreneur #[TopicSpecific] #[TopicSpecific] #TaxPlanning #BusinessOwner #TaxTips
```

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
| Bio | Exact format from template, not rewritten |
| Length | Under 5,000 characters (YouTube limit) |
| First 2 lines | Compelling in preview (before "Show more") |

### Step 4: Output

Present the full description in a copyable code block so the user can paste it directly into YouTube.

If a script file was provided, also offer to append the description to the script's `## Packaging` section.

## Example

```
User: /priceless-youtube-description --script projects/videos/entity-restructuring/script.md

Claude: [Reads script, generates description]

Here's the YouTube description for "The IRS Is Targeting Entrepreneurs With Multiple Entities":
```

```
I restructured 40+ entities this year. Every single owner was leaving money on the table.

If you own multiple businesses and everything runs through one entity, your "simple" setup is probably costing you $20K-$50K per year in unnecessary taxes. In this video, I break down exactly how to tell if your structure is wrong, the three changes that fix it, and why most CPAs never bring this up.

0:00 - Why your entity structure matters more than you think
0:28 - The #1 sign your current setup is costing you
2:15 - How multi-entity structuring actually works
5:30 - The three changes that save the most
8:00 - What to ask your CPA this week
8:25 - Common mistakes I see with S-Corps and LLCs
11:00 - Action steps you can take today
14:30 - The one thing to do before year-end

Ready to stop overpaying? Book a free strategy call:
https://www.pricelesscpa.com/book

Free Resources:
Take the 7 Questions Quiz: https://www.pricelesscpa.com/tax-checklist
Visit: https://www.pricelesscpa.com

Follow Anthony:
Instagram: https://www.instagram.com/taxtonecpa/
Twitter: https://x.com/anthonypricecpa
TikTok: https://www.tiktok.com/@anthonypricecpa

If you're new here, I'm Anthony Price, CPA.

21: Graduated from the University of Nevada with dual degrees in Finance and Accounting, started in public accounting
22: Worked with complex businesses, high-income individuals, and insurance companies across tax and audit
23: Earned my CPA and built a foundation in both compliance and strategy
25: Focused on what I saw mattered most: proactive tax planning and tax reduction strategies for seven-figure earners
26: Grew my CPA firm to 100 clients
27: Crossed 200 clients and built the team to keep up with demand
28: Built the firm to 300+ business owners and high-income earners focused on year-round tax planning
Today: We help high earners and business owners save an average of $50K+ per year through proactive tax strategy

#TaxStrategy #CPA #EntityStructuring #SCorp #LLC #Entrepreneur #TaxPlanning #BusinessOwner #TaxTips #RealEstate
```

## Learnings

-
