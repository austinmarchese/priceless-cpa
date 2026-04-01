---
name: video-script-research
description: Deep research workflow for YouTube videos. Generates enriched outlines from north star videos, topic research, and personal takes.
---

## When to use

Use `/video-script-research` when you:
- Have a video project and want to do deep research before scripting
- Want to create an enriched outline modeled after a north star video
- Need to gather stats, examples, client stories, and expert takes on a tax topic
- Want to prepare for `/youtube-script`

## How to use

Run `/video-script-research` with a video concept. The skill guides you through:
1. Creating a base outline from a north star video
2. Deep diving on the specific tax topic (iterative)
3. Layering in Anthony's expertise and client examples
4. Curating and cleaning the final outline

---

## Process

### Step 0: Load Context

Before asking the user anything, read these files:

```
Read: context/audience/serial-entrepreneur/profile.md
Read: context/audience/serial-entrepreneur/content-strategy.md
Read: context/shorts/example-scripts.md (for Anthony's voice)
Scan: context/lived-experiences/ (for relevant learnings)
Scan: context/best-work/ (for voice reference)
```

Confirm: "Loaded persona, content strategy, and voice reference."

---

### Step 1: Get Video Info

Ask the user for:

1. **North Star video** - URL or title of reference video to model structure after
2. **Our video title** - What we're making (working title is fine)
3. **Does a project folder exist?** - Check `content/youtube/projects/[slug]/`

---

### Step 2: Set Up Project Folder

If the project folder doesn't exist, create `content/youtube/projects/[slug]/` with:
- `research.md` - Main research document (built up through workflow)
- `outline.md` - Final enriched outline

If the folder already exists and has an `idea.md`, read it for context.

**Initial `research.md` template:**

```markdown
# Research: {Video Title}

## North Star Video
- **Title:** {title}
- **URL:** {url}

## Research Sources

### Topic-Specific Research
_Filled in during Step 4_

### Expert/Authority Sources
_Filled in during Step 5_

## Key Findings
_Summary of most valuable research_

## Discarded Notes
_Good material that didn't fit this video (save for future videos)_
```

---

### Step 3: Generate Base Outline

**Option A: User provides transcript**
> "Paste the north star video transcript, or provide the YouTube URL and I'll fetch it."

**Option B: Fetch transcript**
If URL provided, fetch transcript using:
```bash
yt-dlp --skip-download --write-auto-sub --sub-lang en --convert-subs srt -o "%(title)s" "{url}"
```

**Then generate outline:**

Review the north star video structure and create a general outline adapted for Anthony's video. For each section, add Personal Notes placeholders:

```markdown
## {Section Title}
{outline content}

**Personal Notes:**
_To be filled with research_

**Client Example:**
_Anonymized client story that illustrates this point_
```

Save to `content/youtube/projects/{slug}/outline.md`

Confirm: "Created base outline with {N} sections. Ready for topic research."

---

### Step 4: Topic-Specific Deep Dive (Iterative)

Do a deep dive on the specific tax topic. This is iterative -- continue until there's enough valuable material.

**Goal:** Get research, IRS rules, tax code references, real-world examples, stats, and expert takes specific to the video topic.

**Examples:**
- Video about "How the Rich Avoid IRS Audits" -> Research actual IRS audit triggers, audit rates by income level, DIF scores, common red flags for multi-entity entrepreneurs
- Video about "How to Write Off Your House" -> Research home office deduction rules, Augusta Rule, Section 280A, actual dollar examples at different income levels
- Video about "How Elon Musk Avoids Taxes" -> Research buy-borrow-die strategy, unrealized gains, charitable vehicles, how these translate to $5-50M entrepreneurs

**Research Sources (use all that apply):**

#### 4A: YouTube Videos on Topic

Ask:
> "What are the top-performing YouTube videos on {TOPIC}? Let me find 3-5 and extract key insights."

Options:
- User provides video URLs directly
- Use web search to find relevant videos
- Fetch transcripts using yt-dlp

For each video found:
1. Pull transcript
2. Extract: key quotes, unique insights, statistics, examples
3. Add to outline Personal Notes

#### 4B: Web Research

> "Let me search for authoritative content on {TOPIC}."

Search for:
- IRS publications and tax code references
- Case studies and real-world examples
- Expert opinions from tax attorneys and CPAs
- Statistics and data points (audit rates, savings amounts)
- Recent tax law changes that affect this topic

Synthesize findings into Personal Notes.

#### 4C: Client Story Development

For each section of the outline, ask:
> "Does Anthony have a client story that illustrates this point? Even a general scenario works."

If not, suggest anonymized scenarios based on the serial entrepreneur persona:
- "A client making $1.2M across two businesses who..."
- "An entrepreneur with 3 LLCs and 2 rental properties who..."
- "A client who came to us paying $180K in taxes and..."

These should feel real and specific, not hypothetical.

#### 4D: Iteration Loop

After each research source:

1. Show what was added to outline
2. Update `research.md` with sources used
3. Ask:
   > "Is this enough depth, or should we dig deeper?"

4. If "dig deeper":
   - Suggest specific areas to explore
   - Try alternative search angles
   - Look for adjacent topics that add value

5. Continue until user says "enough" or "move on"

---

### Step 5: Expert/Authority Enhancement

Layer in authoritative sources to add credibility:

#### 5A: IRS Data and Tax Code

Search for:
- Actual IRS statistics (audit rates, collection amounts)
- Relevant tax code sections
- Recent IRS guidance or rulings
- Treasury Department reports

#### 5B: Competitor Video Analysis

Check how competitors covered the same topic:
- What did they include that Anthony should also cover?
- What did they miss that Anthony can add?
- What did they get wrong that Anthony can correct?
- What unique angle can Anthony bring?

#### 5C: Industry Publications

Search for:
- Journal of Accountancy articles
- Tax Foundation research
- AICPA guidance
- Forbes/Bloomberg Tax coverage

---

### Step 6: Curate and Clean

Final curation pass on the outline:

1. Remove notes that aren't valuable enough
2. Ensure all sections work together for a cohesive video
3. Front-load value (best material should support the hook)
4. Check that every section has at least one specific example or number
5. Verify persona fit (every example speaks to serial entrepreneur situation)

Show summary of what was:
- Kept (and why)
- Removed (and why)
- Moved (and why)

Ask: "Approve these curation changes?"

---

### Step 7: Save Final Outline

Update `content/youtube/projects/{slug}/outline.md` with final curated version.

Update `content/youtube/projects/{slug}/research.md` with:
- All sources used
- Key research findings
- Discarded but potentially useful notes (for future videos)
- Stats and data points with citations

Confirm: "Saved final outline and research notes."

---

### Step 8: Next Steps

> "Research complete! Your enriched outline is ready at: `content/youtube/projects/{slug}/outline.md`"
>
> "Run `/youtube-script` to turn this outline into a full script."

---

## Tips

- **Track sources** in research.md -- helpful for video description links
- **Save discarded notes** -- they might be useful for future videos or shorts
- **Iterate on Step 4** until you have rich topic-specific material
- **Front-load value** in curation -- best material should support the hook
- **Use specific numbers** -- "$47K" not "thousands," "39 years" not "decades"
- **Client stories make it real** -- even anonymized, specific scenarios beat abstract advice

## Learnings

-
