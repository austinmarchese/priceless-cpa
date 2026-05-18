---
name: priceless-shorts-script
description: Write short-form video scripts for tax/wealth content targeting serial entrepreneurs
---

# Shorts Script Writer

## When to Use

Use `/priceless-shorts-script` when you:
- Need to create a short-form video script (45-90 seconds) for Instagram/TikTok/YouTube Shorts
- Have a tax strategy, mistake, or insight to turn into engaging content
- Want to create standalone shorts or clips from long-form YouTube content
- Want to adapt a topic from the content strategy into a shareable format

## How to Use

- `/shorts-script cost segregation` — Write a short about cost segregation
- `/shorts-script --format contrarian` — Write using the contrarian take format
- `/shorts-script --hot-take "Your CPA shouldn't just file taxes"` — Write from a specific hot take
- `/shorts-script --from-youtube [slug]` — Create shorts clips from an existing YouTube script

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

Before writing, read these context files:

1. **Format Library**: `wiki/shorts/format-library.md`
2. **Example Scripts**: `wiki/shorts/example-scripts.md`
3. **Target Persona**: `wiki/audience/serial-entrepreneur/profile.md`
4. **Content Strategy**: `wiki/audience/serial-entrepreneur/content-strategy.md`
5. **Lived Experiences**: scan `wiki/lived-experiences/` for relevant learnings

## Process

### Step 1: Topic Selection

If no topic provided, present options from the content pillars:

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

Available formats (see format library for full details):
- Contrarian Take
- Problem Warning
- POV Reveal
- Before/After
- Challenge
- B-Roll Storytelling
- Split-Screen Reaction

### Step 3: Write the Script

**Script Structure:**

```
[HOOK — First 3 seconds, pattern interrupt]

[CONTEXT — Why this matters, 10-15 seconds]

[CORE CONTENT — The meat, 20-40 seconds]

[LANDING — Insight + soft CTA, 10-15 seconds]
```

**Writing Rules:**

1. **Hook hard** — First line must stop the scroll. Specificity, contrarian angles, or direct challenges.
2. **Write for speaking** — Short sentences. Conversational. How Anthony talks in a meeting.
3. **One idea per short** — Don't cover everything. Go deep on one thing.
4. **Persona filter** — Would a $1-10M serial entrepreneur care about this? Skip if no.
5. **No hard sell** — Position expertise, don't pitch services.
6. **End with value** — Viewer should feel smarter, not sold to.
7. **No em dashes** — Use commas, periods, or restructure.
8. **Use specific numbers** — "$47K" not "thousands."

**Hook Templates:**

- "Your CPA has never told you this, but..."
- "Here's a tax strategy that could save you $X..."
- "The biggest mistake I see entrepreneurs making..."
- "If your CPA can't answer this question, fire them..."
- "Stop [common practice]. Here's why..."
- "I just saved a client $X by asking one question..."
- "Real estate investors: you're probably missing this..."
- "S-corp owners, listen up..."

### Step 4: Persona Check

| Check | Requirement |
|-------|-------------|
| Income relevance | Applies to $250K-$3M+ earners |
| Complexity fit | Addresses multi-entity or complex situations |
| Proactive angle | Positions proactive planning as the solution |
| Not basic | Beyond what they'd Google or ask ChatGPT |
| Shareable | They'd send this to their entrepreneur friend |
| Credibility | Makes Anthony look like the expert who gets it |

### Step 5: Output Format

Save to: `projects/shorts/[slug].md`

```markdown
# [Script Title]

**Format:** [Format Name]
**Topic:** [Content Pillar]
**Target:** Serial entrepreneur, [specific situation]
**Duration:** ~[X] seconds
**Status:** Draft

---

## Script

[Full script text, written for speaking]

---

## Production Notes

- **Visual:** [What should be on screen]
- **Tone:** [How to deliver]
- **B-roll ideas:** [Supporting visuals]
- **CTA:** [What the viewer should do]

## Variations

1. **Alternative hook:** [Option 2]
2. **Shorter version:** [30-sec cut]
```

## Reference

### Formats Quick Reference

| Format | Structure | Duration |
|--------|-----------|----------|
| Contrarian Take | Bold claim → Context → Reasoning → Insight | 45-60s |
| Problem Warning | Problem → Why it happens → What it costs → How to avoid | 45-60s |
| POV Reveal | "POV: [situation]" → Outcome → Context → What changed | 45-60s |
| Before/After | Before situation → Transition → After result → How | 45-60s |
| Challenge | Setup challenge → Show findings → Reveal insight | 45-60s |
| B-Roll Storytelling | Hook over visual → Story narration → Lesson | 45-60s |
| Split-Screen Reaction | Show clip → React → Commentary → Right approach | 45-60s |

### Persona Quick Reference

- **Who:** Serial entrepreneurs, 35-45, $5-50M net worth
- **Situation:** Multiple entities, RE investments, outgrown their CPA
- **Pain:** Reactive CPA, no big picture, leaving money on table
- **Want:** Proactive quarterback who gets modern business
- **Language:** "Aggressive but legal," "I don't want to think about it"

## Learnings

-
