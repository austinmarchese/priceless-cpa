---
name: priceless-youtube-script
description: Write long-form YouTube scripts (10-20 min) for tax/wealth content targeting serial entrepreneurs
---

# YouTube Script Writer

## When to Use

Use `/priceless-youtube-script` when you:
- Need to write a full YouTube video script (10-20 minutes)
- Have a video idea or title from the outlier research to develop into a script
- Want to create a deep-dive on a tax strategy, mistake, or framework

## How to Use

Run `/priceless-youtube-script` with a topic, title, or idea number:
- `/youtube-script cost segregation for real estate investors`
- `/youtube-script --title "The IRS Is Targeting Entrepreneurs With Multiple Entities"`
- `/youtube-script --idea 7` (references idea #7 from outlier titles)

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

Before writing, read these files:

1. **Outlier Research**: `raw/outliers/README.md` (proven patterns and first principles)
2. **Outlier Titles**: `raw/outliers/titles.md` (19 analyzed videos with adapted titles)
3. **Target Persona**: `wiki/audience/serial-entrepreneur/profile.md`
4. **Content Strategy**: `wiki/audience/serial-entrepreneur/content-strategy.md`
5. **Format Library**: `wiki/shorts/format-library.md` (for tone/voice reference)
6. **Example Scripts**: `wiki/shorts/example-scripts.md` (for Anthony's voice)
7. **Lived Experiences**: scan `wiki/lived-experiences/` for relevant learnings
8. **Best Work**: scan `raw/best-work/` for voice/style reference

## Process

### Step 1: Topic and Angle

If no topic provided, present the top 5 adapted titles from outlier research. If a topic is given, match it to a proven pattern:

| Pattern | Structure | When to Use |
|---------|-----------|-------------|
| Aspiration Bridge | "How To [Action] As [Identity]" | Actionable how-tos |
| Contrarian/Status Threat | "Why You Should NOT [Popular Thing]" | Challenging common advice |
| Loss Aversion | "[Life Event]? Avoid This [Bad Outcome]" | Specific mistakes with stakes |
| Inclusion + Hidden Money | "[Number] [Benefit] for [Broad Group]" | Listicle-style content |
| Authority Takedown | "CPA Reacts to [Bad Advice]" | Debunking/reaction content |
| Newsjacking | "[News Event]. What This Means For You" | Timely content |

### Step 2: Lock the Through-Line

Before drafting or packaging, define the through-line: the single arguable thesis the entire video exists to prove. Write it in one sentence, in this shape:

> "The reason [audience pain/outcome] is actually [contrarian root cause], which means [implication that sets up the video's answer]."

Rules:
- One sentence. If it needs two, it isn't focused enough.
- It must be arguable. If no one would disagree, it's a truism.
- State or imply it in the cold open / context.
- Every body section must prove, extend, or complicate it. No orphan tips.
- The close restates it as the final takeaway.

Include the through-line in the output header and reference it when writing each section.

### Step 3: Packaging (Title + Thumbnail)

Before writing the script, define the packaging:

**Title:** Generate 5 variations using the matched pattern. Score each on:
- Curiosity Gap (1-5): Does it create a knowledge gap they need to close?
- Persona Fit (1-5): Would a $1-10M serial entrepreneur click this?

**Thumbnail Text:** 2-4 words max. Must create tension with the title, not repeat it.

**Description:** Write 2-3 sentences for the YouTube description. Include keywords.

Present packaging for approval before writing the script.

### Step 4: Script Structure

Use this structure for 10-20 minute videos:

```
[COLD OPEN — 0:00-0:30]
Hook that creates urgency or curiosity. State the promise of the video.
Pattern: "By the end of this video, you'll know exactly [specific outcome]."

[CONTEXT — 0:30-2:00]
Why this topic matters right now. Who this is for. What's at stake.
Establish Anthony's credibility on this topic.

[SECTION 1 — 2:00-5:00]
First major point. Use specific examples and numbers.
Include a mini-story or client example (anonymized).

[SECTION 2 — 5:00-8:00]
Second major point. Build on Section 1.
Address the "but what about..." objection they're thinking.

[MID-VIDEO CTA — 8:00-8:30]
Soft CTA after the viewer has received real value. 20-30 seconds max.
Acknowledge the value just delivered, name the gap between watching and
implementing, offer the next step (book a strategy call / link in description),
then transition cleanly back into content. Only ONE mid-video CTA per script.

[SECTION 3 — 8:30-11:00]
Third major point or the "how to actually do this" section.
Make it actionable, not just theoretical.

[COMMON MISTAKES — 11:00-14:00]
What most people (or most CPAs) get wrong about this.
This is where Anthony differentiates from generic advice.

[ACTION STEPS — 14:00-16:00]
Specific steps the viewer should take this week.
"Here's what I'd tell you if you were sitting across from me right now."

[CLOSE — 16:00-17:00]
Recap the key insight. Soft CTA.
"If you want help implementing this, link's in the description."
```

### Step 5: Writing Rules

1. **Write for speaking, not reading.** Short sentences. Conversational. How Anthony would actually talk in a meeting.
2. **Use specific numbers.** "$47K" not "thousands." "3 entities" not "multiple entities."
3. **Include client stories.** Anonymized but specific. "I had a client making $1.2M across two businesses..."
4. **Anticipate objections.** Address the "yeah but" moments before they think them.
5. **No jargon without explanation.** If you say "QBI deduction," immediately explain what it means in plain English.
6. **One clear takeaway per section.** Viewer should be able to summarize each section in one sentence.
7. **End sections with transitions.** "Now here's where it gets interesting..." or "But that's only half the picture."
8. **No em dashes.** Use commas, periods, or restructure.
9. **Persona filter.** Every example should feel like it's about THEIR situation ($250K-$3M+, multiple entities, real estate + business).

### Step 6: Persona Check

Before finalizing, verify:

| Check | Requirement |
|-------|-------------|
| Income relevance | Examples use $250K-$3M+ income levels |
| Complexity | Addresses multi-entity or multi-asset situations |
| Proactive angle | Positions proactive planning as the answer |
| Beyond basic | Not something they'd find in a 2-minute Google search |
| Expert positioning | Makes Anthony the CPA who "gets it" |
| Actionable | Viewer can do something specific after watching |
| Through-line | Every body section visibly proves, extends, or complicates the through-line. No orphan tips. |

### Step 7: Output Format

Save to: `projects/videos/[slug]/script.md`

If the project folder doesn't exist yet, create it. If an `idea.md` already exists in the folder, read it first for title options, thumbnail notes, and context.

```markdown
# [Video Title]

**Pattern:** [Which outlier pattern this uses]
**Content Pillar:** [Tax Strategies / Mistakes / Quarterback / Asset Protection / Wealth]
**Target:** Serial entrepreneur, [specific situation]
**Duration:** ~[X] minutes
**Status:** Draft

**Through-line:** [One-sentence arguable thesis every section must reinforce]

---

## Packaging

**Title Options:**
1. [Primary title] — Curiosity: X/5, Fit: X/5
2. [Variation] — Curiosity: X/5, Fit: X/5
3. [Variation] — Curiosity: X/5, Fit: X/5

**Thumbnail Text:** [2-4 words]
**Thumbnail Concept:** [Brief visual description]

**Description:**
[YouTube description text]

---

## Script

### Cold Open (0:00-0:30)

[Script text]

### Context (0:30-2:00)

[Script text]

### Section 1: [Title] (2:00-5:00)

[Script text]

### Section 2: [Title] (5:00-8:00)

[Script text]

### Mid-Video CTA (8:00-8:30)

[20-30s soft CTA tied to value just delivered, then transition back into content]

### Section 3: [Title] (8:30-11:00)

[Script text]

### Common Mistakes (11:00-14:00)

[Script text]

### Action Steps (14:00-16:00)

[Script text]

### Close (16:00-17:00)

[Script text]

---

## Production Notes

- **B-roll ideas:** [Visual suggestions]
- **Graphics needed:** [On-screen text, diagrams, numbers]
- **Tone:** [Delivery notes]

## Shorts Clips

Sections that could be cut into shorts:
1. [Timestamp] — [Why it works as a standalone clip]
2. [Timestamp] — [Why it works as a standalone clip]
```

## Reference

### Top 5 Ready-to-Script Titles

From `raw/outliers/titles.md`:

1. "The IRS Is Targeting Entrepreneurs With Multiple Entities (Here's What Changed)"
2. "Give Me 10 Minutes and I'll Show You Where You're Losing $100K in Taxes"
3. "How Entrepreneurs With $10M+ Structure Their Entities to Pay Almost Nothing in Taxes"
4. "How to Use Your Rental Properties to Offset Your Business Income (Step by Step)"
5. "Every Entrepreneur With $5M+ Needs a Living Trust (And Most Don't Have One)"

### 6 Proven Patterns

From outlier research first principles:
1. Aspiration Bridge + Universal Entry Point
2. Contrarian / Status Threat
3. Loss Aversion + Life Event
4. Inclusion + Hidden Money
5. Controversy Magnet + Authority Takedown
6. Newsjacking + Personal Impact

## Learnings

-
