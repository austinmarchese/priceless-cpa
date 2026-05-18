---
name: ingest-source
description: Ingest a raw source (article, transcript, research dump, notes) into the Priceless CPA knowledge base, summarize it, update wiki pages, and cross-reference with wikilinks
---

# Ingest Source

Process a new raw source into the knowledge base. Summarizes the source, identifies entities and concepts, updates wiki pages, and adds `[[wikilinks]]` for cross-referencing.

## When to Use

Run `/ingest-source` when:
- You drop a new article, transcript, or research dump into `raw/research/` or `raw/transcripts/`
- You want to connect a source to the wiki layer at `wiki/knowledge/`
- You want to extract people, tax concepts, or IRC references from a source and link them

## Pre-flight: Sync Check

Before starting, check if there are updates on main:

```bash
git fetch origin main
BEHIND=$(git rev-list HEAD..origin/main --count)
```

If `$BEHIND` > 0, warn:
> "There are [N] new commits on main. Run `git pull origin main` to get the latest context files before continuing?"

If up to date, proceed silently.

## Process

### Step 1: Identify the Source File

If the user provides a file path, use it. Otherwise ask:

> "Which file should I ingest? Paste the path or tell me where you put it."

Expected source locations:
- `raw/research/` (research dumps, articles, case studies)
- `raw/transcripts/` (video/podcast transcripts)
- `raw/best-work/` (high-performing content examples)

Read the source file. Confirm:
> "Found: `[filename]` ([word count] words). Processing."

### Step 2: Load Wiki Index

Read `wiki/knowledge/_index.md` to see all existing wiki pages.

If the file does not exist, create it:

```markdown
# Knowledge Wiki Index

Entity and concept pages for Priceless CPA's knowledge base. Auto-maintained by `/ingest-source`.

## People

## Concepts

## Tax Code & Rulings

## Sources Log
```

Also scan the `wiki/knowledge/` directory for any pages not yet in the index.

### Step 3: Summarize the Source

If the source file does not already have a `## Summary` section near the top, add one after any frontmatter or title:

```markdown
## Summary

[2-4 sentence summary of what this source covers, key claims, and why it matters to Priceless CPA content]

**Source type:** [article / transcript / interview / ruling / research dump / notes]
**Relevance:** [Which content pillar or audience pain point this serves]
**Key entities:** [[Person A]], [[Concept B]], [[IRC Section 199A]]
**Ingested:** [YYYY-MM-DD]
```

If a summary already exists, skip this step.

### Step 4: Extract Entities and Concepts

Read through the source and identify:

**People (CPAs, influencers, authorities):**
- Tax professionals mentioned by name (Karlton Dennis, Jasmine DiLucci, etc.)
- Industry authorities, researchers, or court figures
- Client archetypes if substantively discussed (not specific clients)

**Concepts (tax strategies, frameworks, patterns):**
- Named tax strategies (cost segregation, REPS, Augusta rule)
- Entity structures and planning frameworks
- Recurring ideas worth tracking across sources

**Tax Code & Rulings (unique to this project):**
- IRC sections cited (e.g., Section 199A, Section 1031)
- Revenue rulings, court cases, Treasury regulations
- IRS forms or procedures referenced substantively

Filter aggressively. Only extract items that are:
1. Discussed substantively (not just name-dropped)
2. Likely to appear in other sources (worth cross-referencing)
3. Relevant to the serial entrepreneur audience ($250K-$3M+ income, multi-entity)

List what you found:
> "Identified [N] entities, [N] concepts, [N] tax code references:
> - **People:** [list]
> - **Concepts:** [list]
> - **Tax Code:** [list]
>
> Should I proceed with updating wiki pages?"

### Step 5: Update Wiki Pages

For each item identified:

**If a wiki page already exists** (`wiki/knowledge/[name].md`):
1. Read the existing page
2. Add the new source to the `## Sources` section
3. Update any facts or context based on what the new source adds
4. Do not duplicate information already present

**If no wiki page exists**, create one at `wiki/knowledge/[name].md`:

For **people**:
```markdown
# [Person Name]

[1-2 sentence description: who they are, why they matter to Priceless CPA]

## Key Ideas

- [Idea or position from the source]

## How We Use Them

- [Consultant frameworks we apply, style we reference, or positioning vs. them]

## Sources

- [[path/to/source-file]] - [one-line note on what this source says about them]
```

For **concepts**:
```markdown
# [Concept Name]

[1-2 sentence definition in plain English]

## Key Points

- [Point from the source]

## Legal Basis

- [IRC section, regulation, or ruling if applicable]

## Client Application

- [Who this applies to, when it's useful, example income/entity profile]

## Related Concepts

- [[Related Concept]] (if obvious connections)

## Sources

- [[path/to/source-file]] - [one-line note on what this source says about the concept]
```

For **tax code / rulings**:
```markdown
# [IRC Section X / Case Name / Rev. Rul. YYYY-NN]

[1-2 sentence plain English summary of what this code or ruling does]

## What It Says

- [Key provisions or holding]

## Plain English

- [What this means for a serial entrepreneur]

## Common Applications

- [Strategies or scenarios where this applies]

## Limits / Pitfalls

- [Phase-outs, substantiation requirements, or common errors]

## Sources

- [[path/to/source-file]] - [one-line note on what this source says]
```

### Step 6: Add Wikilinks to the Source File

Go back to the source file and add `[[wikilinks]]` around the first mention of each item that has a wiki page. Only link the first occurrence, not every mention.

Rules:
- Link the exact name as it appears in the wiki page filename
- If the source says "Karlton Dennis" and the wiki page is `karlton-dennis.md`, use `[[Karlton Dennis]]`
- For IRC sections, use the canonical form: `[[IRC Section 199A]]`
- Do not add links inside code blocks or URLs
- Do not over-link. If a name appears 10 times, link it once.

### Step 7: Update Wiki Index

Add any newly created pages to `wiki/knowledge/_index.md` under the correct section (People, Concepts, Tax Code & Rulings). Keep each section alphabetically sorted.

Add an entry to the Sources Log:
```markdown
- [YYYY-MM-DD] Ingested `[filename]` - [N] entities, [N] concepts, [N] tax references ([list new pages created])
```

### Step 8: Report

> "Done. Here's what changed:
>
> **Source:** `[filepath]`
> - Added summary section
> - Linked [N] entities/concepts/tax references
>
> **Wiki pages updated:** [list]
> **Wiki pages created:** [list]
> **Index updated:** Yes/No"

---

## Batch Mode

If the user says "ingest everything in [folder]" or provides multiple files:

1. List all files in the folder
2. Process each one through Steps 3-6
3. Batch the wiki updates (Step 5) to avoid redundant reads
4. Single index update at the end (Step 7)
5. Single summary report

---

## File Naming Conventions

Wiki pages use lowercase kebab-case filenames:
- `karlton-dennis.md` (person)
- `cost-segregation.md` (concept)
- `augusta-rule.md` (concept)
- `irc-section-199a.md` (tax code)
- `rev-rul-2008-16.md` (ruling)

---

## Error Handling

- If the source file doesn't exist: "File not found at `[path]`. Check the path and try again."
- If the wiki directory doesn't exist: Create `wiki/knowledge/` and `_index.md` automatically.
- If a wiki page has diverged significantly from what the source says: Flag it instead of overwriting. "The existing page for [[X]] says [A], but this source says [B]. Want me to update it?"

---

## Learnings

(None yet. Add learnings here as the skill is used.)
