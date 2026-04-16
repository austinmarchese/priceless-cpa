---
name: priceless-youtube-script-writer
description: Write and revise long-form YouTube scripts for Priceless CPA with Anthony's voice, tax authority, and lived experiences
---

# Priceless CPA YouTube Script Writer

## When to Use

Use `/youtube-script-writer` when you need to:
- Write a new YouTube script from scratch (10-20 min)
- Revise an existing script based on feedback
- Iterate through multiple revision rounds

This skill handles the full script lifecycle, from first draft to final locked version.

## How to Use

Run `/youtube-script-writer`. The skill detects your project state and branches:

- **No script.md** → Write mode (draft from scratch)
- **script.md exists** → Asks: "Write fresh or revise existing?"

**Quick mode:** If you say "minimal feedback" or "quick pass", the skill skips section-by-section approval and just shows changes, applies them, and creates final version.

---

## File Structure

| File | Purpose |
|------|---------|
| `idea.md` | Video concept from outlier research or idea generation |
| `script.md` | Working draft with inline feedback blocks |
| `script-final.md` | Editor-ready version (created on approval) |
| `script-revisions/` | Archived versions with CHANGELOG |

---

## Process

### Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

### Step 0: Load Context

Read these files before anything else:

1. **Target Persona**: `wiki/audience/serial-entrepreneur/profile.md`
2. **Content Strategy**: `wiki/audience/serial-entrepreneur/content-strategy.md`
3. **Outlier Research**: `raw/outliers/README.md` (proven patterns and first principles)
4. **Outlier Titles**: `raw/outliers/titles.md` (analyzed videos with adapted titles)
5. **Example Scripts**: `wiki/shorts/example-scripts.md` (for Anthony's voice)
6. **Format Library**: `wiki/shorts/format-library.md` (for tone/voice reference)
7. **Lived Experiences**: scan `wiki/lived-experiences/` for relevant learnings
8. **Best Work**: scan `raw/best-work/` for voice/style reference
9. **Knowledge Base**: scan `wiki/knowledge/` for relevant tax topic deep dives

Confirm: "Loaded persona, outlier research, voice reference, and lived experiences."

### Step 1: Ask Which Video Project

> "Which video project is this for?"

List available projects from `projects/videos/` (excluding `_template`).

If user provides a new topic instead, create the project folder.

### Step 2: Load Project & Detect Mode

Read project files:
```
projects/videos/{project-name}/idea.md (if exists)
projects/videos/{project-name}/script.md (if exists)
projects/videos/{project-name}/script-revisions/CHANGELOG.md (if exists)
```

**If no script.md exists:**
> "No script found. Starting in write mode."
→ Go to WRITE MODE

**If script.md exists:**
> "Script found. Would you like to:
> 1. Revise the existing script
> 2. Start fresh (archive current and rewrite)"

→ User choice determines mode

---

# WRITE MODE

## Step W1: Gather Requirements

If idea.md is thin or missing key details, ask:

1. **Core topic**: What is this video actually about?
2. **Target outcome**: What should viewers be able to DO after watching?
3. **Anthony's angle**: What's the contrarian take or unique perspective?
4. **Key examples**: Which client stories or lived experiences are relevant?

## Step W2: Match to Outlier Pattern

Match the topic to a proven pattern from outlier research:

| Pattern | Structure | When to Use |
|---------|-----------|-------------|
| Aspiration Bridge | "How To [Action] As [Identity]" | Actionable how-tos |
| Contrarian/Status Threat | "Why You Should NOT [Popular Thing]" | Challenging common advice |
| Loss Aversion | "[Life Event]? Avoid This [Bad Outcome]" | Specific mistakes with stakes |
| Inclusion + Hidden Money | "[Number] [Benefit] for [Broad Group]" | Listicle-style content |
| Authority Takedown | "CPA Reacts to [Bad Advice]" | Debunking/reaction content |
| Newsjacking | "[News Event]. What This Means For You" | Timely content |

## Step W3: Packaging (Title + Thumbnail)

Before writing the script, define the packaging:

**Title:** Generate 5 variations using the matched pattern. Score each on:
- Curiosity Gap (1-5): Does it create a knowledge gap they need to close?
- Persona Fit (1-5): Would a $1-10M serial entrepreneur click this?

**Thumbnail Text:** 2-4 words max. Must create tension with the title, not repeat it.

**Thumbnail Concept:** Brief visual description.

**Description:** Write 2-3 sentences for the YouTube description. Include keywords.

Present packaging for approval before writing the script.

## Step W4: Lock the Through-Line

Before any drafting, define the **through-line**: the single central argument the entire video exists to prove. Every section, example, and mid-video CTA must reinforce it.

Write it in one sentence, in this shape:

> "The reason [audience pain/outcome] is actually [contrarian root cause], which means [implication that sets up the video's answer]."

Examples:
- "The reason you're overpaying in taxes isn't missing deductions, it's that your entity structure was built for a smaller version of your business, which means no amount of year-end strategy will fix it."
- "The reason your CPA isn't saving you money isn't incompetence, it's that they're playing compliance while your situation needs strategy, which means you need a different role on your team, not a better version of the same one."

**Rules:**
- One sentence. If it needs two, it isn't focused enough.
- It must be **arguable** — if no one would disagree, it's a truism, not a through-line.
- State or clearly imply it in the intro's Contrarian beat.
- Every body section must prove, extend, or complicate it. No orphan tips.
- The close restates it in plain language as the final takeaway.

Present the through-line for approval before continuing to Step W5. Save it near the top of `script.md` as a `**Through-line:**` field so revisions can reference it.

## Step W5: Search for Relevant Material

Before drafting, search for material to weave in:

1. **Lived Experiences**: Search `wiki/lived-experiences/` for relevant stories
2. **Knowledge Base**: Search `wiki/knowledge/` for tax code specifics
3. **Client stories**: Identify anonymized examples that prove the points

**The Authenticity Test**: For each section, ask: "Could any CPA have written this?" If yes, a lived experience or specific client story makes it uniquely Anthony's.

## Step W6: Draft Script

Follow the structure and principles below. The exact section count and timestamps are flexible based on the topic. What matters is the principles, not rigid structure.

---

### INTRO (Under 60 seconds)

**Formula: Context → Common Belief → Contrarian → Proof → Plan**

1. **Immediate Context (5-10s)** — Confirm the click. Viewer knows they're in the right place.
2. **Common Belief (10-15s)** — "Most people think..." / "Everyone says..." Establish what audience already believes.
3. **Contrarian Take (10-15s)** — "But here's the thing..." Stun them with unexpected perspective. Use "but" as a scroll-stop interjection.
4. **Proof/Credibility (10-15s)** — Brief credibility marker. Anthony's experience, client results, or a specific number that earns trust.
5. **Plan (10-15s)** — "By the end of this video, you'll know exactly..." Include guarantee if natural.

### BODY

**Core Principles:**
- Front-load value. Give immediate payoff.
- Each point must be BETTER than the last (ascending value trend)
- Re-hook every 60-90 seconds (see Re-Hook Formulas below)
- Each major point follows: What → Why → How (the Value Loop)

**Value Loop Structure:**
1. **What it is** — Clear, concise, digestible (context)
2. **Why it matters** — Zoom out, fit in bigger picture (framing)
3. **How to do it** — Clear, articulate, relevant examples (application)

**Point Template:**
```
[RE-HOOK if not first point]
"Now that point was important, but if you don't combine it with this next one, you're missing the full picture..."

[WHAT IT IS — Clear statement]
[ONE SENTENCE explaining what it is]

[WHY IT MATTERS — Context]
[Why this is important / what it costs when done wrong — SPECIFIC NUMBERS]

[HOW TO DO IT — Application]
Here's exactly what this looks like:
1. [First step — specific action]
2. [Second step — specific action]
3. [Third step — specific action]

[EXAMPLE — Client story or lived experience]
"I had a client making $1.2M across two businesses..." [WALKTHROUGH]

[RESULT/PROOF]
"And just like that, [OUTCOME with specific number]."
```

### MID-VIEW CTA (Required, ~40-60% through the video)

Place a soft CTA after the viewer has received at least one high-value point, ideally right before or after the strongest value moment in the body. It should feel like a natural aside, not a pitch break.

**Structure (20-30 seconds):**
1. **Acknowledge the value just delivered** — "If what I just walked through is already saving you money, here's what most people do next..."
2. **Name the gap** — The difference between watching and implementing. Reference the reactive-CPA frustration.
3. **Offer the next step** — "If you want us to actually build this out for your situation, there's a link in the description to book a strategy call."
4. **Transition back into content** — "But before you do that, there's one more piece you need to understand, because it's where most people mess this up..."

**Rules:**
- Never interrupt a point mid-thought. Place it between sections, at a natural value peak.
- Keep it 20-30 seconds. Longer breaks churn retention.
- Specific > generic. "Book a strategy call" beats "reach out."
- Tie it to what they just learned, not a generic sales ask.
- Only ONE mid-video CTA per script.

### COMMON MISTAKES (Optional Section)

If the topic has clear pitfalls, include a mistakes section. Structure each as:
1. The mistake itself (one sentence)
2. Why people make it (one sentence)
3. What it costs them (specific number or consequence)
4. What to do instead (one sentence)

At least one mistake should be "what your CPA is probably doing wrong" to reinforce Priceless CPA positioning.

### CLOSE

- Quick recap (categories, not every detail)
- ONE clear action item: "Here's what I'd tell you if you were sitting across from me right now."
- Soft CTA: "If you want help implementing this, link's in the description."
- Tease related video

**Closing Don'ts:**
- Don't summarize every point (wasted time)
- Don't beg for likes/subscribes
- Don't apologize for length
- Don't add new information
- Don't have multiple endings

---

## Step W7: Apply Voice & Style

### Anthony's Voice Markers

**Signature Phrases (USE THESE):**
- "Here's what I see all the time"
- "If your CPA hasn't brought this up, ask them why"
- "That's not a strategy. That's compliance."
- "And that difference costs you thousands every year."
- "Here's what I'd tell you if you were sitting across from me right now."

**Transition Phrases:**
- "And so..." (natural flow)
- "Now here's the thing..." (important point coming)
- "Here's where it gets interesting..." (building anticipation)
- "But that's only half the picture." (before next section)
- "Most people..." → contrarian follow-up

**Number Specificity (ALWAYS USE EXACT NUMBERS):**

| DO | DON'T |
|----|-------|
| "$47K" | "thousands" |
| "3 entities" | "multiple entities" |
| "$1.2M across two businesses" | "a high-income entrepreneur" |
| "Section 199A" | "the tax code" |
| "$200K in accelerated deductions" | "significant deductions" |

### Script Killers (NEVER USE)

**Banned Phrases:**
- "In this video, we'll explore..." (too formal)
- "Without further ado..." (cliche)
- "As you may know..." (assumes knowledge)
- "It goes without saying..." (then don't say it)
- "At the end of the day..." (overused)
- "Basically..." (undermines expertise)
- "I think" / "I believe" (weakens authority)
- "Kind of" / "Sort of" (vague)
- "Amazing" / "Awesome" (overused, generic)
- Em dashes (use commas, periods, or restructure)

**Structural Killers:**
- Starting with "Hey guys" or "What's up everyone"
- Long windups before delivering value
- Apologizing for content length
- Generic transitions like "moving on" or "next up"
- Summarizing what you just said
- Rhetorical questions without immediate answers

**Content Killers:**
- Vague claims without specific numbers
- Hypothetical examples when real client stories exist
- Advice that can't be acted on
- "This works for everyone" (lacks specificity)
- Theory without practical application

### Re-Hook Formulas (Every 60-90 Seconds)

1. "That point was important but if you don't couple it with this one, you're missing the full picture"
2. "Now before you start trying to [action], you need to consider this"
3. "But here's where it gets interesting..."
4. "This next part is probably the most important out of all of them"
5. "Now I know what you're thinking: [objection]. Let me address that."
6. "But wait, there's a catch that nobody talks about..."

## Step W8: Run Quality Checklist

Before presenting draft, verify:

### Structure
- [ ] Through-line is defined in one arguable sentence and stated (or implied) in the intro's Contrarian beat
- [ ] Every body section visibly proves, extends, or complicates the through-line. No orphan tips.
- [ ] Close restates the through-line as the final takeaway
- [ ] Intro follows: Context → Common Belief → Contrarian → Proof → Plan
- [ ] Intro under 60 seconds
- [ ] Body points follow ascending value (each better than the last)
- [ ] Re-hooks every 60-90 seconds
- [ ] Each point has What → Why → How
- [ ] Mid-video CTA placed at 40-60% mark, tied to value just delivered
- [ ] ONE ending, not multiple

### Content & Value
- [ ] All examples use specific numbers ($47K, 3 entities, Section 199A)
- [ ] Client stories are anonymized but specific
- [ ] At least 2 IRC sections, rulings, or specific tax code references
- [ ] Passes the "Could any CPA have written this?" test. If yes, add specificity.
- [ ] Beyond basic. Not something they'd find in a 2-minute Google search.
- [ ] Actionable. Viewer can do something specific after watching.

### Persona Fit
- [ ] Examples use $250K-$3M+ income levels
- [ ] Addresses multi-entity or multi-asset situations
- [ ] Positions proactive planning as the answer
- [ ] Makes Anthony the CPA who "gets it"

### Voice
- [ ] Zero script killers present
- [ ] Contains Anthony's signature phrases
- [ ] Uses Anthony's transition patterns
- [ ] No em dashes
- [ ] Reads like speaking, not writing

### Tax Authority
- [ ] Legal basis cited for major claims (IRC sections, regulations, or rulings)
- [ ] When a multi-part test applies, each element is walked through
- [ ] Evidence is stacked (multiple examples/cases, not just one)
- [ ] Every legal point is translated to plain English immediately after

## Step W9: Present Draft

Create `script.md` with inline feedback blocks after each section:

```markdown
## SECTION NAME (~timestamp)

[Script content here...]

<!-- FEEDBACK
- [ ] More concise
- [ ] Needs more specific numbers
- [ ] Needs to sound more like Anthony
- [ ] Needs client story or lived experience
- [ ] Tax code reference needed

Notes:
-->

---
```

Add global feedback block at the end.

Tell user:
> "Draft complete. Review and add feedback inline, then tell me when you're ready to revise."

→ Continue to REVISE MODE when user returns with feedback

---

# REVISE MODE

## Step R1: Read Feedback

When user says "done" or "ready":

1. Re-read `script.md` to capture all feedback
2. Identify sections with checked boxes or notes
3. Check global feedback block

## Step R2: Proactive Checks

Before revising, automatically check:

**Through-Line Integrity**
- Re-read the `**Through-line:**` field at the top of `script.md`.
- For each body section, ask: "Does this section prove, extend, or complicate the through-line?" If not, flag it.
- If the close doesn't restate the through-line as the final takeaway, flag it.

**Lived Experiences Integration**
- Any generic advice that could use a real client story?
- Any claims without proof that need a specific example?

**Apply Existing Learnings**
- Tighten everything (first drafts are always too long)
- Get to value faster
- Combine related points
- Use real client scenarios, not theoretical
- Cut filler phrases

## Step R3: Section-by-Section Revision

For each section with feedback:

1. **Show current text**
2. **Show feedback** (checked items + notes)
3. **Propose revision** addressing:
   - Checked feedback items
   - Notes from that section
   - Voice patterns from context
4. **Ask**: "Accept this revision? (yes/no/revise differently)"
5. If "revise differently": Get direction, re-propose

### Interpreting Feedback Types

| Feedback | Interpretation |
|----------|----------------|
| "Feels slapped on" | Weave into narrative earlier, don't cut |
| "Jumps around" / "feels like a list" | Through-line drift. Re-anchor each section to the stated through-line. |
| "Clean up" / "tighten" | Keep idea, remove clutter |
| "Cut" / "unnecessary" | Remove entirely |
| "More like Anthony" | Add specificity, client examples, signature phrases |
| Voice note style | Extract intent, integrate cleanly |
| "Problem without solution" | Add actionable fix |
| "Needs authority" | Add IRC section, court case, or specific ruling |
| "Too generic" | Replace with specific numbers, names, scenarios |

## Step R4: Apply Changes

After all sections reviewed:

1. Show summary of all changes
2. Ask: "Apply these changes? (yes/no)"
3. If yes: Update `script.md`, clear feedback checkboxes
4. Ask: "Script approved, or another round?"
   - "Another round" → User adds new feedback → Loop
   - "Approved" → Go to FINALIZATION

---

# FINALIZATION

## Step F1: Create script-final.md

Editor-ready version with:

- All feedback blocks removed
- `**[B-ROLL]**` callouts inline where visuals should change
- `**[ON-SCREEN TEXT]**` where numbers, code sections, or key phrases should appear
- `**[GRAPHIC]**` where diagrams or comparisons should display
- Production sections at bottom:

```markdown
# PRODUCTION ASSETS

## B-Roll & Graphics Checklist

| Section | Asset | Status |
|---------|-------|--------|
| Intro | [Asset] | [ ] |

## On-Screen Text

| Section | Text to Display |
|---------|----------------|
| [Section] | [Text/number] |

## Tax Code Citations (for on-screen display)

| Reference | Type | Section of Script |
|-----------|------|-------------------|
| [IRC Section / Court Case / Ruling] | [Code / Case / Ruling] | [Where used] |

---

# RESOURCE LINKS FOR EDITORS

## Source Material

| Source | URL |
|--------|-----|
| [Source] | [URL] |
```

## Step F2: Archive Version

Save working version to `script-revisions/`:

**Filename:** `v{N}-{YYYY-MM-DD}-{descriptor}.md`

**YAML Frontmatter:**
```yaml
---
version: {N}
date: {YYYY-MM-DD}
parent_version: {N-1 or null}
changes_summary: |
  - [bullet points of what changed]
feedback_applied:
  - "[copied from checked feedback items]"
sections_modified:
  - [list of section names]
---
```

## Step F3: Update CHANGELOG

Add entry to `script-revisions/CHANGELOG.md`

## Step F4: Shorts Clips

Identify sections that could be cut into standalone shorts:

```markdown
## Shorts Clips

1. [Timestamp] — [Why it works as a standalone clip]
2. [Timestamp] — [Why it works as a standalone clip]
3. [Timestamp] — [Why it works as a standalone clip]
```

---

## Output Format

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

### Intro (~0:00-1:00)

[Script text]

### [Body Section 1 Title] (~timestamp)

[Script text]

### [Body Section 2 Title] (~timestamp)

[Script text]

### Mid-Video CTA (~40-60% mark)

[20-30s soft CTA tied to the value just delivered, then transition back into content]

[... as many sections as the topic needs]

### Common Mistakes (~timestamp)

[Script text — if applicable]

### Close (~timestamp)

[Script text]

---

## Production Notes

- **B-roll ideas:** [Visual suggestions]
- **Graphics needed:** [On-screen text, diagrams, numbers to display]
- **On-screen citations:** [IRC sections and court cases to show on screen]
- **Tone notes:** [Delivery guidance]

<!-- GLOBAL FEEDBACK

Notes:
-->
```

---

## Style Principles

These are lessons learned from studying top-performing tax content creators. They're principles to internalize, not rigid templates to copy.

### Hook Energy (Lessons from Karlton Dennis)

- **Identify the viewer in the first line.** Call out exactly who should watch. Make them feel seen. "If you're an entrepreneur running multiple entities and investing in real estate..."
- **Create binary stakes.** Present a clear "path A vs. path B" outcome so the cost of not watching is concrete. "You'll either save $47K with this, or you'll keep overpaying every single year."
- **Be assertive, not hype.** Think authoritative friend who's about to save them serious money. Confident and direct, not loud or manic.
- **Promise a specific outcome.** "By the end of this video, you'll know exactly how to [specific thing]." Not vague, not aspirational. Specific.
- **Use credential stacking sparingly.** When the topic needs authority, stack a stat with personal experience. "I've restructured over X entities this year alone." Don't do it every video.

### Teaching Authority (Lessons from Jasmine DiLucci / Tax Leverage)

- **Build the case, don't just state conclusions.** Walk the viewer through the evidence so they understand WHY, not just WHAT. This is what separates authority from opinion.
- **Cite the actual legal basis.** Name specific IRC sections, regulations, or rulings. "Section 199A of the Internal Revenue Code" not "the tax code says." Specificity creates trust.
- **Walk through legal tests element by element.** If a tax topic has a multi-part test, go through each prong. "The first requirement is... The second part says... And here's the third one, and this is where most people get tripped up."
- **Stack evidence.** Don't just cite one example or case. Stack 2-3 to show a pattern. Patterns are more convincing than anecdotes.
- **Translate every legal point to plain English immediately.** After citing a code section or test, immediately say: "What this means in plain English is..." or "So for you, this looks like..."
- **Don't oversimplify.** Let the content be as long as the topic requires. Respect the viewer's intelligence while making law accessible.
- **Implementation over theory.** Knowing a strategy isn't enough. Emphasize proper implementation and documentation. This is what separates watching a YouTube video from actually saving money.

### Anthony's Differentiator (Thread Throughout)

- **The CPA industry gap.** Tax preparer vs. tax strategist. Compliance vs. strategy. This is Priceless CPA's core message.
- **Proactive, not reactive.** Position proactive planning as the answer to every problem surfaced in the video.
- **The quarterback model.** One person coordinating everything. Bookkeeping, entity accounting, multi-entity tax returns, trust and estate work, advanced strategies.
- **Peer-to-peer with high-net-worth clients.** Not talking down. Not selling. Speaking as equals about complex situations.
- **Speaks to complexity.** Multi-entity, multi-asset, $250K-$3M+ income. Every example should feel like it's about THEIR situation.

---

## Recursive Skill Improvement

After every session, before fully exiting:

1. **Check for user tweaks**: Did user edit `script-final.md` after you created it?
2. **Ask about learnings**:
   > "Any learnings from this session I should add to the skill? Or should I update based on what I observed?"
3. **If patterns are obvious**, update this skill file or relevant context files

### Signals to Watch For

| Signal | Learning to Capture |
|--------|---------------------|
| User adds content you didn't include | What context were you missing? |
| User cuts content you wrote | What made it unnecessary? |
| User rephrases your writing | Voice pattern to avoid or adopt |
| User changes structure/flow | Structural preferences |

---

## Learnings

-
