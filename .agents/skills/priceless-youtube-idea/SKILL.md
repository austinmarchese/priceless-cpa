---
name: priceless-youtube-idea
description: Generate YouTube video ideas using proven outlier patterns matched to Priceless CPA's audience
---

# YouTube Idea Generator

## When to Use

Use `/priceless-youtube-idea` when you:
- Need fresh video ideas for the content calendar
- Want to apply a proven outlier pattern to a new topic
- Have a topic but need title/packaging help
- Want to brainstorm a batch of ideas for the week or month

## How to Use

- `/priceless-youtube-idea` — Generate 5 ideas across all patterns
- `/youtube-idea entity structure` — Generate ideas on a specific topic
- `/youtube-idea --pattern contrarian` — Generate ideas using a specific pattern
- `/youtube-idea --batch 10` — Generate a larger batch
- `/youtube-idea --trending` — Ideas tied to current tax news or events

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

Before generating, read:

1. **Outlier Research**: `raw/outliers/README.md` (patterns + first principles)
2. **Outlier Titles**: `raw/outliers/titles.md` (what's already been analyzed)
3. **Target Persona**: `wiki/audience/serial-entrepreneur/profile.md`
4. **Content Strategy**: `wiki/audience/serial-entrepreneur/content-strategy.md`
5. **Existing Projects**: scan `projects/videos/` to avoid duplicating topics
6. **Lived Experiences**: scan `wiki/lived-experiences/` for topic inspiration

## Process

### Step 1: Determine Scope

Ask if not specified:
- **Topic area?** (Tax strategies, mistakes, quarterback model, asset protection, wealth building, or open)
- **Format?** (Long-form YouTube, short-form, or both)
- **Pattern preference?** (Or generate across all 6 patterns)

### Step 2: Generate Ideas Using Proven Patterns

For each idea, apply one of the 6 validated structures:

| # | Pattern | Structure | Example |
|---|---------|-----------|---------|
| 1 | Aspiration Bridge | "How To [Action] As [Identity]" | "How To Pay Yourself As an S-Corp Owner Without Triggering an Audit" |
| 2 | Contrarian / Status Threat | "Why You Should NOT [Popular Thing]" | "Why Your S-Corp Is Costing You More Than It Saves" |
| 3 | Loss Aversion + Life Event | "[Event]? Avoid This [Bad Outcome]" | "Selling Your Business? The Tax Mistake That Costs Owners Millions" |
| 4 | Inclusion + Hidden Money | "[Number] [Benefit] for [Group]" | "7 Expenses You're Already Paying That Your CPA Should Be Writing Off" |
| 5 | Authority Takedown | "[Expert] Reacts to [Bad Advice]" | "CPA Reacts to the Tax Advice Entrepreneurs Actually Follow" |
| 6 | Newsjacking | "[News]. What This Means For You" | "TCJA Expiring: What This Means For Your Tax Bill" |

### Step 3: Score Each Idea

Rate each idea on:

| Criterion | Score | What It Measures |
|-----------|-------|------------------|
| **Curiosity Gap** | 1-5 | Does the title create a knowledge gap they need to close? |
| **Persona Fit** | 1-5 | Would a $1-10M serial entrepreneur click this? |
| **Defensibility** | 1-5 | Can Anthony deliver genuine value on this topic? |
| **Shorts Potential** | 1-5 | Can clips from this video work as standalone shorts? |

**Total score out of 20.** Highlight anything 16+.

### Step 4: Persona Filter

Before including an idea, verify:

- Does this apply to $250K-$3M+ income? (Skip if too basic)
- Does this address complex situations? (Multi-entity, RE + business, etc.)
- Is this beyond basic/Google-able? (If they can find this in 2 minutes, skip)
- Does it position Anthony as the expert? (Not generic CPA content)
- Would they share this with a peer? ("You need to watch this")

### Step 5: Output Format

Present ideas in a table:

```markdown
## YouTube Ideas — [Date]

**Topic Area:** [specified or mixed]
**Pattern Focus:** [specified or all]

| # | Title | Pattern | Curiosity | Fit | Defensibility | Shorts | Total | Thumbnail Text |
|---|-------|---------|-----------|-----|---------------|--------|-------|----------------|
| 1 | ... | ... | X/5 | X/5 | X/5 | X/5 | X/20 | ... |

### Top Pick: [Title]

**Why this wins:** [1-2 sentences on why this idea has the highest potential]

**Shorts angles from this video:**
1. [Clip idea]
2. [Clip idea]

**Ready to script?** Run `/youtube-script --title "[title]"` to start writing. Script saves into the same project folder.
```

Save each idea to its own project folder: `projects/videos/[slug]/idea.md`

### Step 6: Short-Form Spin-offs

For each long-form idea, suggest 2-3 short-form clips that could be cut from the video or created as standalone shorts:

```
Long-form: "How to Use Your Rental Properties to Offset Your Business Income"
  → Short 1: "The #1 mistake real estate investors make on their taxes" (Problem Warning, 45s)
  → Short 2: "POV: Your CPA just told you your rental losses can offset your business income" (POV Reveal, 30s)
  → Short 3: "If you own real estate AND a business, watch this" (Hook + quick tip, 40s)
```

## Topic Bank

Topics mapped to content pillars that haven't been scripted yet:

### Tax Strategies
- Cost segregation deep-dive
- S-corp salary optimization
- QBI deduction maximization
- Qualified Opportunity Zones
- Charitable remainder trusts
- Retirement vehicle comparison (SEP, Solo 401k, defined benefit)
- State tax strategies for remote businesses

### Mistakes to Avoid
- Entity structure mistakes at each income level
- When your advisors don't talk to each other
- Tax planning mistakes before an exit
- The real cost of a "cheap" CPA
- Why filing taxes is not tax strategy

### Quarterback Model
- What a proactive CPA relationship looks like (full year walkthrough)
- How to evaluate your current CPA
- The cost of scattered finances

### Asset Protection & Privacy
- Living trusts for entrepreneurs
- Entity structures for privacy
- Asset protection for multi-entity owners

### Wealth Building
- Tax-efficient wealth building
- Generational wealth strategies
- When to reinvest vs. extract from your business

### Family + Tax
- Hiring your kids legally
- Marriage as a wealth strategy
- Family office without being ultra-rich

## Learnings

-
