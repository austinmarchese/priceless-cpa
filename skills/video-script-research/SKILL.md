---
name: video-script-research
description: Research the body content of a YouTube video. Takes a locked title and builds an enriched outline with stats, examples, tax code references, and client stories.
---

## When to use

Use `/video-script-research` when you:
- Have a locked video title and need to research what the video should actually cover
- Want to build a research-backed outline before writing the script
- Need stats, IRS data, tax code references, and client story ideas for a specific topic

**Prerequisite:** The video title should already be decided (via `/video-idea-research` or manually). A project folder should already exist at `content/youtube/projects/[slug]/`.

## How to use

Run `/video-script-research [slug]` where slug is the project folder name:
- `/video-script-research how-rich-avoid-irs-audits`
- `/video-script-research write-off-your-house`

Or just run `/video-script-research` and pick from existing projects.

---

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

### Step 0: Load the Project

1. If a slug was provided, read `content/youtube/projects/[slug]/idea.md`
2. If no slug, list all project folders and ask which one to research
3. Read the persona: `context/audience/serial-entrepreneur/profile.md`
4. Scan `context/lived-experiences/` for relevant learnings on this topic

Confirm: "Researching: [Video Title]. Project folder: [slug]."

---

### Step 1: Find a North Star Video

Ask:
> "Is there a reference video you want to model the structure after? This could be a competitor video on the same topic, or a video with a structure you liked."

Options:
- User provides a YouTube URL
- User provides a title to search for
- Skip (build outline from scratch based on the topic)

If a URL is provided, fetch the transcript:
```bash
yt-dlp --skip-download --write-auto-sub --sub-lang en --convert-subs srt -o "%(title)s" "{url}"
```

Extract the structure (not the content): how many sections, what order, how the hook works, how examples are placed, pacing.

---

### Step 2: Build Base Outline

Using the north star structure (or a standard structure if skipped), create an outline specific to this video's topic.

Each section gets two placeholders to fill through research:

```markdown
## {Section Title}
{What this section covers}

**Research Notes:**
_Stats, tax code references, expert takes_

**Client Example:**
_Anonymized story that illustrates this point_
```

Save to `content/youtube/projects/{slug}/outline.md`

---

### Step 3: Topic Deep Dive (Iterative)

This is the core of the skill. Research the actual substance of the video.

**Goal:** Fill every section of the outline with specific, defensible content Anthony can speak to.

#### 3A: Tax Code and IRS Data

Search for the actual rules, not summaries:
- IRS publications (e.g., Pub 587 for home office, Pub 946 for depreciation)
- Relevant IRC sections (e.g., Section 280A, Section 469)
- IRS audit statistics by income level and filing type
- Recent IRS guidance, revenue rulings, or court cases
- Treasury Department reports

**What to capture:** Specific numbers, thresholds, percentages, and rules Anthony can cite in the video.

#### 3B: Competitor Video Analysis

Find 3-5 top-performing videos on the same topic from:
- Karlton Dennis
- Mark J Kohler
- Navi Maraj CPA
- Jasmine DiLucci
- LYFE Accounting

For each:
1. Pull transcript if possible
2. Extract: key points they made, examples they used, stats they cited
3. Note: what did they miss? What did they get wrong? What angle did they NOT take?

**The goal is differentiation.** Anthony's video needs to go deeper or take an angle competitors missed.

#### 3C: Web Research

Search for:
- Case studies and real-world examples
- Expert opinions from tax attorneys
- Recent news or law changes affecting this topic
- Data points that make abstract concepts concrete

#### 3D: Client Story Development

For each section of the outline, ask:
> "Does Anthony have a real client story for this? Even a general scenario works."

If not, suggest specific anonymized scenarios based on the persona:
- "A client making $1.2M across an S-corp and two LLCs who..."
- "An entrepreneur with 3 rental properties who was depreciating over 39 years when..."
- "A married couple running separate businesses who didn't realize..."

**Good client stories have:** A specific starting situation, a specific problem or miss, a specific dollar outcome.

#### 3E: Iteration Loop

After each research pass:

1. Show what was added to the outline
2. Update `research.md` with sources
3. Ask: "Is this enough depth, or should we dig deeper on anything?"
4. If "dig deeper," suggest specific areas to explore
5. Continue until the outline feels substantive

---

### Step 4: Identify the Unique Angle

After research is done, answer these questions:

1. **What does Anthony know that competitors didn't cover?** (This becomes the core differentiator)
2. **What's the one thing viewers will remember?** (This anchors the hook and the close)
3. **What's the "aha moment"?** (The point where the viewer thinks "my CPA never told me this")

Write these answers into the top of the outline.

---

### Step 5: Curate and Clean

Final pass:

1. Remove research notes that aren't strong enough to make the video
2. Ensure each section has at least one specific number or example
3. Front-load the best material (strongest stats and stories support the hook)
4. Check that every example speaks to the serial entrepreneur ($250K-$3M+, multi-entity)
5. Move any good material that doesn't fit to "Discarded Notes" in research.md (future video fodder)

Show what was kept, removed, and moved. Ask for approval.

---

### Step 6: Save Everything

Update `content/youtube/projects/{slug}/outline.md` with the final enriched outline.

Update `content/youtube/projects/{slug}/research.md` with:
- All sources used (URLs, IRS publications, tax code sections)
- Key findings organized by section
- Discarded notes for future videos
- Competitor video analysis

Confirm: "Research complete. Outline saved to [path]."

Suggest: "Ready to write the script? Run `/youtube-script [slug]`."

---

## What Good Research Looks Like

| Weak | Strong |
|------|--------|
| "Home office deductions can save you money" | "Section 280A allows you to deduct $5/sq ft (simplified) or actual expenses. For a 300 sq ft office in a $500K home, that's $1,500 simplified or potentially $8K+ actual method" |
| "The IRS audits high earners more" | "IRS data shows 0.4% audit rate for returns under $200K, but 1.1% for $1-5M and 8.7% for $10M+. Multi-entity filers get flagged more because of related-party transactions" |
| "Cost segregation saves taxes" | "A cost seg study on a $1.2M commercial property reclassified $340K from 39-year to 5/7/15-year depreciation, generating $95K in first-year deductions" |

## Learnings

-
