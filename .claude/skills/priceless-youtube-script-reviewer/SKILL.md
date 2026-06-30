---
name: priceless-youtube-script-reviewer
description: Review a completed Priceless CPA YouTube script through 6 parallel sub-agents (consultant panel, voice match, past performance, quality + tax authority audit, packaging alignment, intro validator) and synthesize feedback into a prioritized, section-level review report.
---

# Priceless YouTube Script Reviewer

## When to Use

- **Automatically** after `/priceless-youtube-script-writer` completes a draft (Step W8 → W8.5)
- **Manually** via `/priceless-youtube-script-reviewer` on any existing script in `projects/videos/[slug]/`
- Before locking a script for filming
- When a draft "feels off" but you can't pinpoint where

## How It Works

Launches 6 parallel sub-agents that each analyze the script from a different angle. Synthesizes feedback into a single `script-review.md` in the project folder with a verdict, priority changes, and section-level findings.

All 6 run **simultaneously** (Agent tool, parallel block). Total review time = slowest agent, not sum.

---

## Process

### Step 1: Detect Script

If no script path is provided, detect automatically:

1. Look for `projects/videos/{slug}/script.md` (or `script-v1.md`, `script-final.md`)
2. If multiple project folders have scripts, ask which one
3. Read the full script, plus `brief.md`, `idea.md`, `outline.md`, and `titles.md` if present

### Step 1b: Quote / Citation Verification Rule (ALL Sub-Agents)

Tax content has higher stakes than generic YouTube. Every sub-agent follows this rule:

- **Tax code citations must be real and current.** Every IRC section, Treasury Regulation, Rev. Proc., or Rev. Rul. cited in the script must be a real authority that supports the point being made. Verify against `wiki/knowledge/` if a tax topic file exists for the cited section.
- **OBBBA 2025 conformity.** Flag any cite to law that was modified or repealed by OBBBA 2025 (P.L. 119-21). Common traps: bonus depreciation phase-down (now 100% permanent), §199A QBI deduction (made permanent), §174 R&D expensing (restored), §163(j) interest limit (EBITDA basis restored).
- **Client stories must be anonymized.** No real names, no identifying business names, no exact addresses. Industry + income range + entity count is fine.
- **Attributed quotes need a source.** If the script attributes a quote to a person (a client, a court, the IRS, a known CPA), it must come from a verifiable public source. Never fabricate or paraphrase as a direct quote.
- **No "law firms confirmed" / "according to studies" without a source.** Flag for the writer to add a citation or rewrite as Anthony's own observation.

Flag any violation as a **priority finding** (blocks approval until fixed).

### Step 1c: Quote and Visual Integration Audit (ALL Sub-Agents)

For every direct quote, every `[SHOW: ...]`, and every visual callout in the script, verify integration quality:

- [ ] **Setup line precedes** — Quote/visual is preceded by a sentence that frames tension or question. Not a label like "Here is what the IRS says about X."
- [ ] **Reaction line follows** — Anthony extracts a lesson, reacts, or pushes against the quote. Not just restating it.
- [ ] **Setup variation** — No two setup lines in the script use the same template. "Here is what [X] says about [Y]" used 2+ times is a fail.
- [ ] **No AI tics** — Script does not contain phrases from `wiki/youtube-scripts/script-killers.md`.
- [ ] **No cold opens** — No section starts with `[SHOW: ...]` or a quote as its first content line.

**Output format:** `Quote in Section N (line X): [violation type]. Fix: [specific suggestion].`

Findings here are priority-tier.

---

### Step 2: Launch 6 Parallel Sub-Agents

Use the Agent tool with `subagent_type: "general-purpose"` for each. Send all six in a single message so they run concurrently.

---

#### Agent 1: Consultant Panel (Karlton + Jasmine)

**Purpose:** Run the script through Priceless's two voice consultants. Karlton brings the YouTube hook + title energy lens (how does this land as YouTube content?). Jasmine brings the tax-authority lens (does this teach tax law correctly, with the right depth?).

**Prompt instructions for sub-agent:**

1. Read `wiki/consultants/karlton-dennis/hook-energy.md` and `wiki/consultants/karlton-dennis/title-patterns.md`
2. Read `wiki/consultants/jasmine-dilucci/teaching-authority.md` and `wiki/consultants/jasmine-dilucci/content-patterns.md`
3. Read `wiki/consultants/README.md` if present for any panel rules
4. Review the script section-by-section through both lenses:
   - **Karlton lens:** Does each section have hook energy? Are there re-hooks every 60-90s? Are the title's promises being kept? Is the contrarian take strong enough to compete on YouTube?
   - **Jasmine lens:** Is the tax content correct? Does it teach the law, not just describe it? Does it cite real authority? Is it specific enough that a $1M+ earner walks away with something they can act on?
5. Return a section-by-section report with each consultant's findings labeled.

**Sources:**
```
wiki/consultants/karlton-dennis/hook-energy.md
wiki/consultants/karlton-dennis/title-patterns.md
wiki/consultants/jasmine-dilucci/teaching-authority.md
wiki/consultants/jasmine-dilucci/content-patterns.md
wiki/consultants/README.md
```

---

#### Agent 2: Voice Matcher

**Purpose:** Compare the script's tone, signature phrases, and style against Anthony's brand voice and existing scripts. Flag sections that do not sound like Anthony.

**Prompt instructions for sub-agent:**

1. Read `wiki/youtube-scripts/voice-patterns.md` (signature phrases for scripts)
2. Read `wiki/anthony/voice-patterns.md` (full brand voice)
3. Read `wiki/youtube-scripts/script-killers.md` (banned phrases)
4. Read `wiki/anthony/brand-brief.md` for positioning context
5. Read 3-4 existing scripts from `projects/videos/*/script*.md` that are closest in topic to the current script (entity structuring → load entity-related scripts; real estate → load real estate scripts)
6. For each section of the current script, assess:
   - Does it use Anthony's signature phrases ("Here is what I see all the time," "If your CPA hasn't brought this up, ask them why," etc.)?
   - Are there any script-killers present? (banned phrases list)
   - Does it speak as a peer to $250K-$3M+ earners, or does it sound like generic CPA advice?
   - Does it sound like Anthony talking, or like ChatGPT pretending to be a CPA?
7. Return a section-by-section voice-match report with specific rewrite suggestions for sections that feel off.

**Sources:**
```
wiki/youtube-scripts/voice-patterns.md
wiki/anthony/voice-patterns.md
wiki/youtube-scripts/script-killers.md
wiki/anthony/brand-brief.md
projects/videos/*/script*.md
```

---

#### Agent 3: Past Performance Analyst

**Purpose:** Identify what worked in past scripts (structure, hooks, pacing, density) and check whether this script follows those patterns. Surface any pattern this script breaks for no good reason.

**Prompt instructions for sub-agent:**

1. Read scripts from `projects/videos/*/script*.md` — at minimum 4 of the most relevant. Prioritize any flagged as "posted" in the Notion content DB if accessible.
2. Read `wiki/lived-experiences/` if it contains script-writing learnings (look for files about what worked, what flopped, hook performance).
3. Identify structural patterns of the strongest past scripts:
   - How do they open? (hook length, credibility placement, contrarian angle clarity)
   - How do they transition between body points?
   - How dense are they? (specific numbers per minute, IRC cites per video, client stories per video)
   - Where do they place the strongest content? (front-loaded for hook retention or saved for end?)
   - How do they handle CTAs? (mid-roll soft CTA + end-roll hard CTA pattern?)
   - How do they close? (single ending, not multiple)
4. Compare the current script against these patterns
5. Return: "Past strong scripts did X. This script does/does not do X." with specific sections flagged and the named past script as evidence.

**Sources:**
```
projects/videos/*/script*.md
wiki/lived-experiences/**/*.md
```

---

#### Agent 4: Quality Checklist + Tax Authority Reviewer

**Purpose:** Audit the script against the quality checklist, script structure, and script-killers. Verify every tax citation. Catch anything the other agents miss from a process/correctness perspective.

**Prompt instructions for sub-agent:**

1. Read `wiki/youtube-scripts/quality-checklist.md` (full checklist)
2. Read `wiki/youtube-scripts/script-structure.md` (structure framework)
3. Read `wiki/youtube-scripts/script-killers.md`
4. Read any relevant `wiki/knowledge/` files for tax topics cited in the script (IRC sections, OBBBA 2025 provisions, etc.)
5. Run **every** checklist item against the script. Report pass/fail per item with specific notes on failures.
6. Run **tax authority audit** separately:
   - For each IRC section, Treasury Reg, Rev. Proc., Rev. Rul., or court case cited: is it real, and does it actually support the point being made?
   - Are any cited provisions out of date under OBBBA 2025 (P.L. 119-21)?
   - Are dollar thresholds and indexed amounts current (2025 / 2026 indexing per Rev. Proc. 2025-32, Notice 2025-67)?
   - Are any "the IRS says X" claims real, or paraphrased fabrication?
7. Return: completed checklist (pass/fail per item) + tax-authority report (each cite verified or flagged).

**Sources:**
```
wiki/youtube-scripts/quality-checklist.md
wiki/youtube-scripts/script-structure.md
wiki/youtube-scripts/script-killers.md
wiki/knowledge/**/*.md
```

---

#### Agent 5: Packaging Alignment Check

**Purpose:** Does the script deliver what the title promises? Is the thumbnail-text promise paid off in the body? Is the contrarian angle from the intro carried through?

**Prompt instructions for sub-agent:**

1. Read the project's `titles.md`, `idea.md`, and `brief.md` if they exist
2. Read `wiki/consultants/karlton-dennis/title-patterns.md` for the title energy lens
3. Read `raw/outliers/README.md` and any `raw/outliers/*` files referenced in the brief
4. Check:
   - **Title-script promise delivery:** If the title says "5 strategies," does the body deliver 5 distinct strategies? If it promises a specific dollar amount, is that number actually shown in the script with math?
   - **Curiosity gap payoff:** Where does the script resolve the title's curiosity gap? If it resolves too late (past 60% mark), retention will tank. If it resolves in the intro, the rest of the video is unmotivated.
   - **Viewer focus:** Is the script framed around the viewer's benefit ("here is what this means for you") or Anthony's experience ("here is what I did")? Flag self-focused sections that should be reframed.
   - **Borrowed authority:** When the script invokes the IRS, a court case, a famous client outcome, or a known person (Trump's tax returns, Elon, Buffett) — is it used for leverage or just dropped without consequence?
   - **Outlier pattern fidelity:** If the project brief references an outlier pattern this video is riffing on, does the script actually follow that pattern's structure?
5. Return: packaging alignment assessment with specific flags.

**Sources:**
```
projects/videos/{slug}/titles.md
projects/videos/{slug}/brief.md
projects/videos/{slug}/idea.md
wiki/consultants/karlton-dennis/title-patterns.md
raw/outliers/README.md
raw/outliers/**/*
```

---

#### Agent 6: Intro Validator

**Purpose:** Deep validation of the intro against the 5-part formula from `wiki/youtube-scripts/script-structure.md` (Context > Common Belief > Contrarian > Proof > Plan). Checks structural compliance, timing, and whether the intro's promises pay off in the body.

**Prompt instructions for sub-agent:**

1. Read `wiki/youtube-scripts/script-structure.md` — the INTRO STRUCTURE section is the primary spec
2. Read `wiki/consultants/karlton-dennis/hook-energy.md` for the hook-energy lens
3. Read 2-3 intros from `projects/videos/*/script*.md` to calibrate what "good" looks like in Anthony's voice
4. Isolate the intro section of the current script and run two validation passes:

**Pass 1: 5-Part Structure Validation**

| Part | Check | Fail condition |
|------|-------|----------------|
| 1. Immediate Context (5-10s) | Does the viewer immediately know what the video is about AND who it is for? Anthony's intros call out the persona ("If you own more than one business and you're running everything through the same entity, we need to talk"). | Vague, delayed, or generic topic confirmation. No persona call-out. |
| 2. Common Belief (10-15s) | Is there a clear "most people think X" or "your CPA tells you Y" setup? | No established belief, or a strawman nobody actually holds. |
| 3. Contrarian Take (10-15s) | Does it challenge the common belief with a specific, surprising angle? Anthony uses "but" as a scroll-stop. | Weak contrast ("but actually it is a little different"), generic correction, or no real tension. |
| 4. Proof / Credibility (10-15s) | Specific number, client result, or earned credential. "I restructured 40+ entities this year." | Vague credibility ("I have done a lot of this"), missing proof, or proof that does not connect to the topic. |
| 5. Plan / Promise (10-15s) | Clear "by the end of this video, you will know exactly X" with specificity. | No promise, vague outcome ("you will learn some stuff"), or missing guarantee. |

Compare the intro against the example intros in `wiki/youtube-scripts/script-structure.md` (Examples 1-3). The density and pacing should match.

**Pass 2: Retention / Hook Energy Check**

| Check | What to look for | Fail condition |
|-------|-----------------|----------------|
| Confirm the click (0-7s) | Within 7 seconds, viewer knows they are in the right place. Topic + persona reflected immediately. | Topic buried after 10+ seconds of preamble. Opening does not match title promise. |
| Personal stake established (7-27s) | Anthony's voice is present early — not just credentials, but a perspective ("Here is what I see all the time"). | Generic expertise claim with no Anthony voice. Could be any CPA. |
| Open loop / tease (27-37s) | Plants a question or teases something that makes the viewer need to keep watching past 30s. | Intro closes all loops. No curiosity gap going into the body. |

**Pass 3: Tax-Specific Intro Audit**

| Check | What to look for | Fail condition |
|-------|-----------------|----------------|
| Loss-aversion energy | Does the intro frame stakes as money the viewer is losing right now (not abstract savings)? | Aspirational framing only. "You could save thousands" instead of "$47K is leaving your account this year." |
| Anti-CPA positioning | Does the intro position Anthony against the reactive CPA the viewer already has, without being smug or dismissive? | Either no positioning vs other CPAs, or positioning that punches down. |
| OBBBA / current-law freshness | If the intro hints at a tax strategy or change, is it current under OBBBA 2025? Stale law in the intro kills credibility for the rest. | References pre-OBBBA bonus dep phase-down, expired §199A, etc. |

5. **Timing estimate:** ~150 words/min for YouTube delivery. Flag if intro runs past 60 seconds.

6. **Contrarian payoff check:** Read the body. Does the contrarian angle set up in the intro actually get delivered on?

7. **Promise-delivery check:** If the intro says "3 changes that fix it," does the body have exactly 3? If it guarantees "$147K in savings," does the math close?

8. Return a structured report:
   - **5-Part structure:** Part-by-part pass/fail with quotes from the script
   - **Retention:** Confirm click / Personal stake / Open loop — each pass/fail
   - **Tax-specific:** Loss aversion / Anti-CPA positioning / OBBBA freshness — pass/fail
   - **Timing:** estimated seconds / 60s target
   - **Contrarian payoff:** delivered / partially / missing in body
   - **Promise-delivery:** matched / mismatched (with specifics)
   - **Overall intro grade:** Strong / Needs Work / Weak
   - **Specific rewrite suggestions** for any failing parts

**Sources:**
```
wiki/youtube-scripts/script-structure.md
wiki/consultants/karlton-dennis/hook-energy.md
projects/videos/*/script*.md
```

---

### Step 3: Synthesize Feedback

After all 6 agents return, synthesize into a single report:

1. **Deduplicate:** If multiple agents flag the same issue in the same section, merge into one finding and note which agents agreed.
2. **Rank by priority:** Most impactful changes first.
   - Tax-authority violations (wrong IRC cite, stale OBBBA law, fabricated quote) → **always** priority-tier, block approval
   - Structural issues (missing hook, weak intro, no payoff) > Section-level issues > Line-level polish
   - Issues flagged by 3+ agents rank higher than single-agent flags
   - Voice mismatches and script-killers rank high (the script must sound like Anthony, not ChatGPT)
3. **Assign verdict:**
   - **Approve** — No structural or tax-authority issues; minor polish only
   - **Approve with Changes** — Solid foundation, but specific sections need work
   - **Needs Revision** — Structural problems, tax-authority issues, or pervasive voice mismatch
4. **Section-level mapping:** Every suggestion must be tied to a specific section name from the script.

### Step 4: Write Review Report

Create `projects/videos/{slug}/script-review.md`:

```markdown
# Script Review: {Video Title}

**Reviewed:** {date}
**Script:** script.md
**Agents:** Consultant Panel, Voice Matcher, Past Performance, Quality + Tax Authority, Packaging Alignment, Intro Validator

---

## Verdict: [Approve / Approve with Changes / Needs Revision]

[1-2 sentence summary of overall assessment]

---

## Priority Changes

1. **[Change description]** — Section: [section name] — Flagged by: [agent(s)] — Tier: [tax-authority / structural / voice / polish]
2. ...

---

## Tax Authority Audit

| Citation in script | Verified? | Notes |
|---|---|---|
| §199A | ✅ | Permanent under OBBBA 2025 |
| §168(k) 100% bonus dep | ✅ | Made permanent under OBBBA 2025 |
| [section] | ❌ / ⚠️ | [issue] |

---

## Section-Level Feedback

### INTRO (~0:00-0:55)
| Agent | Finding | Suggestion |
|-------|---------|------------|
| [Agent] | [What is wrong] | [Specific fix] |

### [SECTION NAME] (~timestamp)
| Agent | Finding | Suggestion |
|-------|---------|------------|

...

---

## Voice Match Assessment
[Summary from Voice Matcher]
- Sections that sound like Anthony: [list]
- Sections that need voice work: [list with notes]
- Script-killers found: [list with line numbers]

## Past Performance Patterns
[Summary from Past Performance Analyst]
- Patterns this script follows from past strong scripts: [list]
- Patterns this script breaks: [list with specific recommendations]
- Benchmark scripts referenced: [list]

## Quality Checklist Results
[Pass/fail summary]
- Passing: [count]/[total]
- Failing items: [list with notes]

## Packaging Alignment
[Summary]
- Title-script promise delivery: [assessment]
- Outlier pattern fidelity: [assessment]
- Viewer focus score: [assessment]

## Intro Validation
[Summary]
- **5-Part Structure:** Context [pass/fail] | Common Belief [pass/fail] | Contrarian [pass/fail] | Proof [pass/fail] | Plan [pass/fail]
- **Retention:** Confirm click [pass/fail] | Personal stake [pass/fail] | Open loop [pass/fail]
- **Tax-specific:** Loss aversion [pass/fail] | Anti-CPA positioning [pass/fail] | OBBBA freshness [pass/fail]
- **Timing:** [seconds] / 60s target
- **Contrarian payoff:** [delivered / partial / missing]
- **Promise-delivery match:** [matched / mismatched]
- **Intro grade:** [Strong / Needs Work / Weak]

---

## Full Agent Reports

<details><summary>Consultant Panel</summary>

[Full report from Agent 1]

</details>

<details><summary>Voice Matcher</summary>

[Full report from Agent 2]

</details>

<details><summary>Past Performance</summary>

[Full report from Agent 3]

</details>

<details><summary>Quality + Tax Authority</summary>

[Full report from Agent 4]

</details>

<details><summary>Packaging Alignment</summary>

[Full report from Agent 5]

</details>

<details><summary>Intro Validation</summary>

[Full report from Agent 6]

</details>
```

### Step 5: Present Report

Show the verdict + priority changes + section-level feedback to the user. This is the "show" step before changes are applied.

When called by `/priceless-youtube-script-writer` (Step W8.5), return the full report. The script writer can then apply the priority changes autonomously and present a changelog.

When called standalone, present the report and ask:
> "Review complete. Verdict: **[verdict]**. Apply the priority changes to the script?"

---

## Integration With `/priceless-youtube-script-writer`

After Step W8 (Run Quality Checklist) in the script writer:

1. Script writer calls `/priceless-youtube-script-reviewer` on the draft
2. This skill runs the 6-agent review and writes `script-review.md`
3. Script writer reads the priority changes from the report
4. Script writer applies tax-authority + structural fixes autonomously, then presents the updated script with a changelog
5. Voice and polish suggestions are presented to Anthony for case-by-case approval

If you are updating the script writer, add this between Step W8 and Step W9:

```
## Step W8.5: Run Script Reviewer

Call `/priceless-youtube-script-reviewer`. Read the priority changes from
`projects/videos/{slug}/script-review.md`. Apply tax-authority and structural
fixes autonomously. Present voice/polish suggestions for case-by-case approval.

Show the user the verdict and the diff before continuing to Step W9.
```

---

## Notes

- All 6 agents run in parallel. Review time = slowest agent.
- The review file persists in the project folder for reference during revision rounds.
- If called multiple times on the same script (after revisions), the new review **replaces** the old one.
- Tax-authority findings always block approval. The rest are advisory.
- If `wiki/knowledge/` does not have a file for an IRC section the script cites, that is itself a flag — either the script is reaching beyond the knowledge base (verify externally) or the knowledge base has a gap to fill via `/ingest-source`.
