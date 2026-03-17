---
name: shorts-script
description: Write short-form video scripts for tax/wealth content targeting serial entrepreneurs
triggers:
  - shorts script
  - write a short
  - short form content
  - reels script
  - tiktok script
  - youtube short
  - video script
tools:
  - Read
  - Write
---

## When to use

Use `/shorts-script` when you:
- Need to create a short-form video script (60-90 seconds) for Instagram/TikTok/YouTube Shorts
- Have a tax strategy, mistake, or insight to turn into engaging content
- Want to adapt a topic from the content strategy into a shareable format

## How to use

Run `/shorts-script` with a topic or angle:
- `/shorts-script cost segregation` — Write a short about cost segregation
- `/shorts-script --format contrarian` — Write using the contrarian take format
- `/shorts-script --hot-take "Your CPA shouldn't just file taxes"` — Write from a specific hot take

## Pre-flight: Load Context

Before writing, read these context files:

1. **Format Library**: `context/shorts/format-library.md`
2. **Example Scripts**: `context/shorts/example-scripts.md`
3. **Target Persona**: `context/audience/serial-entrepreneur/profile.md`
4. **Content Strategy**: `context/audience/serial-entrepreneur/content-strategy.md`
5. **Brand Voice**: `context/brand-voice/tone-guide.md` (if exists)

## Process

### Step 1: Topic Selection

If no topic provided, present options from the content pillars:

**Which topic area?**

1. **Tax Strategies** — Cost seg, QBI, S-corp salary, entity structure, retirement vehicles
2. **Mistakes to Avoid** — Common CPA mistakes, entity structure errors, reactive vs proactive
3. **Quarterback Model** — What proactive tax planning looks like, unified approach
4. **Real Estate** — REP status, 1031 exchanges, short-term rental loophole
5. **High Income Strategies** — Charitable giving, strategic investments, estate coordination

### Step 2: Format Selection

If no format specified, recommend based on topic:

| Topic Type | Recommended Format | Why |
|------------|-------------------|-----|
| Tax strategy | Contrarian Take or Problem Warning | Positions Anthony as the expert who sees what others miss |
| Common mistake | Problem Warning or Before/After | Creates "that's me" recognition |
| Proactive planning | POV Reveal or B-Roll Storytelling | Shows the outcome of working with Anthony |
| Comparison | Split-Screen or Before/After | Visual contrast is compelling |
| Hot take | Contrarian Take | Direct, opinionated, shareable |

### Step 3: Write the Script

**Script Structure:**

```
[HOOK — First 3 seconds, pattern interrupt]

[CONTEXT — Why this matters, 10-15 seconds]

[CORE CONTENT — The meat, 30-40 seconds]

[LANDING — Insight + soft CTA, 10-15 seconds]
```

**Writing Rules:**

1. **Hook hard** — First line must stop the scroll. Use specificity, contrarian angles, or direct challenges.
2. **Write for speaking** — Short sentences. Conversational tone. No jargon without explanation.
3. **One idea per short** — Don't try to cover everything. Go deep on one thing.
4. **Persona filter** — Would a $1-10M serial entrepreneur care about this? Skip if no.
5. **No hard sell** — Position Anthony as the expert, but don't pitch services directly.
6. **End with value** — The viewer should feel smarter, not sold to.

**Hook Templates for Tax Content:**

- "Your CPA has never told you this, but..."
- "Here's a tax strategy that could save you $X..."
- "The biggest mistake I see entrepreneurs making..."
- "If your CPA can't answer this question, fire them..."
- "Stop [common practice]. Here's why..."
- "I just saved a client $X by asking one question..."
- "The IRS doesn't care about this — but your CPA should..."
- "Real estate investors: you're probably missing this..."
- "S-corp owners, listen up..."

### Step 4: Persona Check

Before finalizing, verify the script passes the serial entrepreneur filter:

| Check | Requirement |
|-------|-------------|
| **Income relevance** | Does this apply to $250K-$3M+ earners? |
| **Complexity fit** | Does this address multi-entity or complex situations? |
| **Proactive angle** | Does this position proactive planning as the solution? |
| **Not basic** | Is this beyond what they'd Google or ask ChatGPT? |
| **Shareable** | Would they send this to their entrepreneur friend? |
| **Credibility** | Does it make Anthony look like the expert who gets it? |

### Step 5: Output Format

Present the final script:

```markdown
## [Script Title]

**Format:** [Format Name]
**Topic:** [Content Pillar]
**Target:** Serial entrepreneur, [specific situation]
**Duration:** ~[X] seconds

---

### Script

[HOOK]
[Line that stops the scroll]

[CONTEXT]
[Why this matters to them]

[CORE]
[The meat of the content]

[LANDING]
[Insight + soft positioning]

---

### Production Notes

- **Visual:** [What should be on screen]
- **Tone:** [How to deliver]
- **B-roll ideas:** [Supporting visuals]

### Variations

1. **Alternative hook:** [Option 2]
2. **Shorter version:** [30-sec cut]
```

## Examples

See `context/shorts/example-scripts.md` for full examples.

**Quick Example — Contrarian Take:**

```
Here's a hot take that'll make your CPA uncomfortable:

If they only call you during tax season, you don't have a tax strategist.

You have a tax preparer.

And that difference? It's costing you thousands every year.

A real tax strategy happens in January, in June, in October.

It's quarterly projections. It's entity reviews as you scale.

It's someone who reaches out to YOU before the deadline.

Most CPAs wait until April to tell you what you owe.

The good ones tell you in November what you're going to owe — and how to change it.

If that's not what you're getting, it might be time to ask some harder questions.
```

## Reference

### Content Pillars

From `context/audience/serial-entrepreneur/content-strategy.md`:

1. Tax Strategies (The Hook)
2. Mistakes to Avoid (The Wake-Up Call)
3. Quarterback Model (The Differentiator)
4. Asset Protection & Privacy (Next Level)
5. Wealth Building (Big Picture)

### Persona Quick Reference

From `context/audience/serial-entrepreneur/profile.md`:

- **Who:** Serial entrepreneurs, 35-45, $5-50M net worth
- **Situation:** Multiple entities, invest in RE, outgrown their CPA
- **Pain:** Reactive CPA, no one sees big picture, leaving money on table
- **Want:** Proactive quarterback who gets modern business
- **Language:** "Aggressive but legal," "I don't want to think about it"

### Formats Available

See `context/shorts/format-library.md` for full details:

- Challenge
- B-Roll Storytelling
- Split-Screen Reaction
- POV Reveal
- Speed Demo
- Before/After
- Contrarian Take
- Problem Warning
