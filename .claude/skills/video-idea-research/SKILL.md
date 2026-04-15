---
name: video-idea-research
description: "Title generation: (1) New video concept, (2) Riff on our outliers, (3) Translate competitor outliers"
---

## When to use

Use `/video-idea-research` when you:
- Have a video concept and need title options
- Want to riff on your own best-performing titles
- Want to translate competitor outliers to Priceless CPA's audience
- Need to test titles against the serial entrepreneur persona

## How to use

Run `/video-idea-research` -- you'll pick from 3 modes, then iterate.

## Process

### Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn the user:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

### Step 0: Load Context (Do This First)

Before asking the user anything, read these files:

```
Read: raw/outliers/README.md (patterns + first principles)
Read: raw/outliers/titles.md (19 analyzed videos with adapted titles)
Read: wiki/audience/serial-entrepreneur/profile.md
Read: wiki/audience/serial-entrepreneur/content-strategy.md
Read: wiki/shorts/format-library.md (for hook patterns)
Scan: projects/videos/ (existing video ideas to avoid duplicates)
Scan: wiki/lived-experiences/ (for relevant learnings)
```

After loading, confirm: "Loaded outlier research (6 patterns, 19 analyzed videos), persona profile, and content strategy."

### Step 1: Present Options

Ask the user:

**What would you like to do?**

1. **New Video Concept** - I have a video idea and need title options
2. **Riff on Our Outliers** - Generate variations of our best-adapted titles
3. **Translate Competitor Outliers** - Take winning titles from other channels and adapt for Priceless CPA

Wait for the user to choose before proceeding.

---

## MODE 1: New Video Concept

### Step 1A: Gather Information

Ask the user:
- **What's the video about?** (core concept in 1-2 sentences)
- **Any title ideas already?** (optional)
- **Which pattern appeals to you?** (optional, reference the 6 proven patterns)

### Step 1B: Generate First Round

Generate 10 title options across different patterns:

**Include a mix of:**
- IRS Fear/Urgency: "The IRS Is [Doing X]..." / "What Actually Triggers..."
- "How the Rich [Do X]": Aspirational insider knowledge
- Bold Time-for-Money: "Give Me X Minutes, I'll Show You..."
- "Write Off [Thing] (Legally)": Tangible deduction content
- Family + Tax: Kids on payroll, marriage strategy, generational wealth
- Elite Structures Made Accessible: "You Don't Need $100M to..."
- Contrarian/Status Threat: "Why You Should NOT [Popular Thing]"
- Loss Aversion + Life Event: "[Event]? Avoid This [Bad Outcome]"

**For each title, present in this table format:**

| # | Title | Chars | Pattern | Persona Fit | Curiosity | Notes |
|---|-------|-------|---------|-------------|-----------|-------|
| 1 | [title] | [count] | [pattern] | 1-5 | 1-5 | ... |

### Step 1C: Persona Check

Run each title through the serial entrepreneur filter:

| Check | Requirement |
|-------|-------------|
| **Income relevance** | Does this apply to $250K-$3M+ earners? |
| **Complexity fit** | Multi-entity, RE + business, complex structures? |
| **Not basic** | Beyond what they'd Google or ask ChatGPT? |
| **Expert positioning** | Makes Anthony the CPA who "gets it"? |
| **Shareability** | Would they send to a peer at a mastermind? |
| **Proactive angle** | Positions proactive planning as the answer? |
| **No hard sell** | Positions expertise, doesn't pitch services? |

Flag titles that fail 2+ checks.

### Step 1D: Iterate

Ask: "Which 2-3 titles resonate? I'll generate 5 variations of each."

Then:
- Take their favorites
- Generate 5 variations using different angles
- Push toward curiosity gap without crossing into clickbait
- Test against persona pain points

### Step 1E: Final Selection

Present top 3 recommendations with:
- The title
- Why it works (pattern + persona fit)
- Thumbnail text concept (2-4 words that create tension with title)
- Potential weakness to watch for
- Shorts clips that could come from this video

---

## MODE 2: Riff on Our Outliers

### Step 2A: Pull Outlier Data

Read from `raw/outliers/titles.md` for the 19 analyzed outliers and 5 adapted titles.

If Anthony's channel has published videos, check performance data to identify which adapted titles actually performed.

### Step 2B: Identify Winning Patterns

From the outlier data, present the 6 ranked patterns:

| # | Pattern | Proof | Best For |
|---|---------|-------|----------|
| 1 | IRS Fear/Urgency | 387K (8.1x), 293K (4.7x) | Audit anxiety, compliance fear |
| 2 | "How the Rich [Do X]" | 266K (13.2x), 199K (10.8x) | Aspirational strategies |
| 3 | Bold Time-for-Money | 244K (6.4x) | ROI on attention |
| 4 | "Write Off [Thing] (Legally)" | 172K (4.8x), 92K | Tangible deductions |
| 5 | Family + Tax | 80K (2.8x), 68K (2.8x) | Parents/couples |
| 6 | Elite Structures Accessible | 13K (8.6x) | Sophisticated strategies |

Ask: "Which pattern do you want to riff on?"

### Step 2C: Generate Variations

For each selected pattern, generate 5 variations that:
- Keep the same core structure
- Apply to different tax topics
- Maintain the curiosity gap strength
- Stay relevant to serial entrepreneurs ($250K-$3M+, multi-entity)

**Format:**

```
PATTERN: "How the Rich [Do X]" (13.2x proven)

VARIATIONS:
1. "How Wealthy Entrepreneurs Structure Their Companies to Pay Almost Nothing in Taxes"
2. "How the Rich Actually Use Real Estate to Eliminate Their Tax Bill"
3. "How $10M+ Entrepreneurs Retire Without Paying Capital Gains"
4. "How the Rich Pass Wealth to Their Kids Tax-Free"
5. "How Multi-Entity Entrepreneurs Pay Less Than W-2 Employees"
```

### Step 2D: Rank and Refine

For each variation:
- Score curiosity gap (1-5)
- Score persona fit (1-5)
- Check defensibility (can Anthony deliver real value?)
- Score shorts potential (1-5)
- Flag any that feel too broad or too basic

Present top picks with thumbnail text concepts.

---

## MODE 3: Translate Competitor Outliers

### Step 3A: Get Outlier Data

Ask: "Want me to search for recent outliers from the tracked channels, or do you have specific titles to translate?"

**Tracked competitor channels:**

| Channel | Subs | Why Track |
|---------|------|-----------|
| Karlton Dennis | 1.05M | Tax strategy, LLC/entity content |
| Mark J Kohler | 580K | Trust/estate/entity frameworks |
| Navi Maraj CPA | ~500K | Reaction format, IRS content |
| Jasmine DiLucci | 579K | Debunk format, authority takedown |
| LYFE Accounting | 577K | Beginner tax content, broad reach |

If pulling fresh outliers, use web search to check recent videos from these channels.

### Step 3B: Select Titles to Translate

Present outliers organized by topic. Ask user to pick 3-5 titles they want to translate.

### Step 3C: Create Translation Table

For each selected title:

| Field | Value |
|-------|-------|
| **Original Title** | [exact title] |
| **Creator** | [channel name] |
| **Views / Multiplier** | [stats if available] |
| **Priceless CPA Version** | [reframed for serial entrepreneur] |
| **Why It Works for Our Audience** | [specific reason tied to persona] |
| **Repeatable Format?** | [Yes/No + template if yes] |

**Persona Filter for Translations:**
Before finalizing, check:
- Does it speak to $250K-$3M+ income? (not beginners)
- Does it address complex situations? (multi-entity, RE + business)
- Does it position Anthony as the expert? (not generic CPA advice)
- Would the serial entrepreneur share this? ("you need to watch this")
- Is there a proactive angle? (not just compliance info)

### Step 3D: Generate Variations

For each translation, generate 3-5 topic variations using the same structure.

---

## Iteration Loop (All Modes)

After any round, ask: "Want to keep iterating, try a different angle, or lock one in?"

If locking one in:
1. Create project folder at `projects/videos/[slug]/`
2. Save `idea.md` with title, thumbnail concept, pattern, persona fit, shorts potential
3. Suggest: "Ready to script? Run `/youtube-script` to start."

Continue until the user is satisfied.

## Title Rules

- Under 70 characters (60 ideal)
- Creates curiosity gap
- Has specificity (numbers, dollar amounts, timeframes)
- Readable by a non-accountant
- Persona fit (serial entrepreneur, $250K-$3M+, multi-entity)
- Thumbnail text should create tension with title, not repeat it

## Learnings

### Lock the Topic BEFORE Iterating on Titles

Different framings (IRS fear, aspirational, educational, contrarian) are actually different videos. Before generating variations, confirm:
- What's the ONE thing Anthony is teaching?
- What will viewers know/do after watching?
- What client story or example proves it?

### Specificity Beats Generality

| Specific (Works) | Generic (Doesn't) |
|-------------------|-------------------|
| "$47K in savings" | "thousands in savings" |
| "5 LLCs" | "multiple entities" |
| "making $1.2M" | "high income" |
| "12-year-old on payroll" | "hiring your kids" |

### "(Legally)" Is a Superpower

Adding "(Legally)" to any aggressive-sounding title:
- Removes the scam filter
- Adds credibility
- Gives permission to click
- Maps to persona's "aggressive but compliant" desire

### Thumbnail Text Creates Tension

The thumbnail text should NOT repeat the title. It should create tension or add information:

| Title | Good Thumbnail | Bad Thumbnail |
|-------|---------------|---------------|
| "How the Rich Avoid Audits" | "ONE KEY STEP" | "AVOID AUDITS" |
| "How the Rich Become Poor" | "51% DO THIS" | "RICH TO POOR" |

---

## Session Log

| Date | Learning | Source |
|------|----------|--------|
| | | |
