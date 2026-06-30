# CLAUDE.md - Priceless CPA Operating System

This file provides guidance to Claude Code when working in this repository.

## Operator Permissions (read first)

This repo is shared. Multiple operators run Claude Code against it. Anything inside `web/` ships to production on push to `main` (Vercel auto-deploy), so it is treated differently from content.

**Rule:** only Austin edits `web/`. Everyone else proposes website changes via a branch + PR tagged for Austin's review.

**Hard-blocked path (enforced by `.claude/hooks/guard-website.sh`):**
- `web/**` -- entire Next.js codebase (app, components, lib, public, workflow, scripts, package.json, build config). Write/Edit/MultiEdit/NotebookEdit denied unless `git config user.email` is on the allowlist.

**Allowed without restriction (content OS):** `wiki/`, `raw/`, `projects/`, `dashboard/`, `reports/`, `clients/`, `.claude/skills/`, `.agents/skills/`, `docs/`.

**New top-level directory at repo root** -- ask Austin first. Don't invent new buckets.

Update the allowlist in `.claude/hooks/guard-website.sh` when a new trusted operator is onboarded.

## Repo Layout (after web/ refactor)

```
priceless-cpa/
├── web/             # Next.js site (deploys to prod) -- guarded
├── wiki/            # organized knowledge base
├── raw/             # unprocessed source material
├── projects/        # active video/short/VSL work
├── dashboard/       # video pipeline data
├── reports/         # generated reports
├── .claude/         # Claude Code skills, hooks, settings
├── .agents/         # Codex skill mirror
├── CLAUDE.md
├── AGENTS.md
└── README.md
```

Vercel project must have **Root Directory** set to `web` for builds to work.

## What This Is

Priceless CPA's internal operating system. Two things live here:

1. **The Website** -- Next.js app for priceless.cpa (landing pages, lead magnets, industry pages)
2. **The Content OS** -- Everything needed to create YouTube videos, shorts, and marketing content without re-deriving context

## How This Repo Is Organized

The repo uses three top-level content folders with distinct purposes:

| Folder | Purpose |
|--------|---------|
| `raw/` | Unprocessed source material. Outlier screenshots, photos, research dumps, transcripts, best-work examples. Files here are inputs, not polished docs. |
| `wiki/` | Organized knowledge base. Audience profiles, brand voice, script systems, marketing strategy, lived experiences, consultant frameworks. Each wiki page references specific raw files when needed. |
| `projects/` | Active work. Each video or short gets its own folder with idea, script, and production notes. |

**Entry point:** Start with `wiki/_Home.md` to navigate the wiki.

## How to Use This Context

When helping with content:

1. **Check lived experiences** in `wiki/lived-experiences/` for relevant past learnings about what works
2. **Reference best work** in `raw/best-work/` when matching voice/style for new content
3. **Apply consultant frameworks** from `wiki/consultants/` for strategic feedback on copy
4. **Use audience profiles** in `wiki/audience/` to speak directly to their pain points
5. **Check outlier research** in `raw/outliers/` before creating YouTube content (proven patterns and titles)

## Key Folders

### Wiki (organized knowledge base)

| Folder | Purpose |
|--------|---------|
| `wiki/audience/` | Target personas and content strategies |
| `wiki/anthony/` | Brand source of truth |
| `wiki/brand-voice/` | Voice enforcement rules |
| `wiki/youtube-scripts/` | Script writing system |
| `wiki/thumbnails-and-titles/` | Packaging resources |
| `wiki/shorts/` | Format library and example scripts for short-form video |
| `wiki/lived-experiences/` | Daily learnings, what's working, what's not |
| `wiki/consultants/` | Expert frameworks to apply (copywriting, marketing) |
| `wiki/knowledge/` | Tax topic knowledge base for script reference |
| `wiki/marketing/` | Growth engine, sales process, lead magnets |

### Raw (unprocessed source material)

| Folder | Purpose |
|--------|---------|
| `raw/outliers/` | Outlier research: analyzed videos, proven patterns, adapted titles |
| `raw/best-work/` | Examples of content that performed well |
| `raw/photos/` | Raw photos for thumbnails and content |
| `raw/transcripts/` | Video transcripts |
| `raw/research/` | Research dumps |

### Projects (active work)

| Folder | Purpose |
|--------|---------|
| `projects/videos/` | Each video is its own folder with idea, script, production notes |
| `projects/videos/_template/` | Video project template |
| `projects/shorts/` | Short-form scripts ready to film (output of `/shorts-script`) |
| `projects/vsls/` | VSL scripts for landing pages, funnels, and service offers (output of `/vsl-script`) |

### Website (`web/`)

All Next.js code lives under `web/`. See "Operator Permissions" at the top of this file -- only Austin edits this tree.

| Folder | Purpose |
|--------|---------|
| `web/app/` | Next.js pages (homepage, industries, lead magnets, services) |
| `web/components/` | Shared React components |
| `web/lib/` | Shared utilities (funnel data, posthog, etc.) |
| `web/workflow/` | Content data for industry pages |
| `web/public/` | Static assets (logo, illustrations) |
| `web/scripts/` | Dev tooling (auto-restart wrapper) |

### Marketing & Sales

| File | Purpose |
|------|---------|
| `wiki/marketing/marketing-growth-engine.md` | Full marketing funnel: lead gen, sales process, lead magnets |
| `wiki/marketing/mvp-sales-process.md` | GHL pipeline, automations, lead scoring, implementation checklist |

### Official Content Database (Notion)

The single source of truth for every video and short is the **[Priceless] Social Media** Notion database. See `wiki/notion-content-database.md` for schema, status pipeline, views, and workflow integration.

- **URL:** https://www.notion.so/3040df1f244e80c98e5be8be6e6e008d
- **Data source ID:** `collection://3040df1f-244e-803a-b840-000b46f9686c`

Every project folder in `projects/videos/` or `projects/shorts/` must correspond to a row in this database. Use the Notion MCP tools (`notion-fetch`, `notion-create-pages`, `notion-update-page`) to read and write.

## Skills

Skills are in `.claude/skills/[name]/SKILL.md`. When the user runs `/[skill-name]`, read the SKILL.md and follow the process.

**Content Creation:**

| Command | What it does |
|---------|--------------|
| `/priceless-video-idea-research` | Title generation: new concept, riff on outliers, or translate competitor titles |
| `/priceless-video-script-research` | Research the body content of a locked video: stats, tax code, examples, enriched outline |
| `/priceless-youtube-script-writer` | Write + revise long-form YouTube scripts (10-20 min). Full lifecycle: draft, revise, finalize. Karlton hooks + Jasmine authority + Anthony's voice |
| `/priceless-youtube-script-reviewer` | 6-parallel-agent QA pass on a finished script: consultants, voice match, past performance, quality + tax authority audit, packaging, intro validator |
| `/priceless-youtube-idea` | Generate scored video ideas matched to audience and outlier patterns |
| `/priceless-shorts-script` | Write short-form video scripts (45-90s) for Reels/TikTok/Shorts |
| `/priceless-youtube-description` | Generate optimized YouTube descriptions with timestamps, CTAs, and Anthony's bio |
| `/daily-journal` | Capture today's learnings into lived experiences |

**Sales & Marketing:**

| Command | What it does |
|---------|--------------|
| `/priceless-vsl-script` | Write Video Sales Letter scripts for landing pages, funnels, and service offers |
| `/priceless-industry-page` | Build a new industry landing page through interview |
| `/priceless-lead-magnet` | Generate a new lead magnet page with route and interactive quiz |
| `/code-review` | Audit codebase for branding consistency and best practices |

**Tax Planning (quarterly engagement — run in numbered order):**

| Command | What it does |
|---------|--------------|
| `/priceless-tax-planning` | Main router for quarterly tax planning. Orchestrates the 8 operators and loads sub-skills. Start here for any full engagement. |
| `/tax-return-analysis-1` | Phase 0.5 — extract carryforwards, basis, elections, prior-CPA methodology from prior-year returns |
| `/bookkeeping-qa-2` | Phase 1 — verify QBO books reconcile before any projection work |
| `/tax-projection-3` | Phase 2 — build baseline federal + state tax projection (the denominator for strategy deltas) |
| `/payroll-analysis-4` | Phase 2.5 — S Corp reasonable comp + §162(l) health + HSA + retirement coordination |
| `/tax-strategy-5` | Phase 3 — run eight operators, filter 25-strategy library, apply selection matrix, return ranked recommendations |
| `/quarterly-memo-6` | Phase 4 — synthesize all phases into partner-reviewable Q1/Q2/Q3/Q4 memo + Karbon task block |

**Tax Planning utilities (called on-demand by the numbered skills or directly):**

| Command | What it does |
|---------|--------------|
| `/state-tax-lookup` | Pull state-specific rules for a client: rate structure, PTET mechanics, residency posture, OBBBA conformity, sourcing rules. Covers all 50 states + DC. |
| `/industry-playbook` | Pull the industry-specific strategy playbook: what works, what doesn't, industry tax code triggers, audit posture. Covers 11 industries (E-Commerce, Real Estate Owner, Software/AI, Doctors, Construction, RE Agent, Digital Marketing, Home Services, Jewelry, Investment Firms, Car Washes). |
| `/capital-deployment-screen` | Operator 8 evaluation for HNW clients (AGI > $750K, Full Wealth tier). Runs the 8-gate qualification and surfaces the 2-3 most relevant deployment vehicles from the 13-file library. Partner sign-off required for any Tier 1/2 recommendation. |

**Tax Planning — standalone engagement workflows (separate SOW from quarterly):**

| Command | What it does |
|---------|--------------|
| `/prior-year-amendments` | Revenue-generating SOL-urgent sweep: Stage 1 screening matrix → Stage 2 return-level checklist → Stage 3 economics break-even → Stage 4 client conversation (if PROCEED). Produces decision log for every client touched. Separate engagement letter from current-year planning. |

All tax planning reference material (methodology, strategies, industries, capital deployment, 52 state files, workflows) lives under `.claude/skills/priceless-tax-planning/`. The numbered wrapper skills delegate into that library.

**System:**

| Command | What it does |
|---------|--------------|
| `/create-skill` | Create a new reusable workflow |
| `/improve-skill` | Enhance a skill based on learnings |
| `/create-consultant` | Clone an expert's frameworks |
| `/ingest-source` | Ingest a raw source into `wiki/knowledge/`, summarize, extract entities/concepts/tax refs, add wikilinks |
| `/update-system` | Pull latest main, preview changes, and brief you on what's new |
| `/push-system` | Review changes, flag risky modifications, and push to main or create a PR |

## YouTube Content Workflow

The typical flow for creating YouTube content:

```
1. /priceless-video-idea-research   -> Generate titles (new concept, riff on outliers, or translate competitors)
2. /priceless-video-script-research -> Deep research: north star video, topic deep dive, enriched outline
3. /priceless-youtube-script-writer  -> Write + revise script. Full lifecycle (draft, revise, finalize)
4. /priceless-youtube-script-reviewer  -> 6-agent QA pass on the draft (consultants, voice, past performance, quality + tax authority, packaging, intro)
5. /priceless-shorts-script --from-youtube [slug]  -> Cut shorts clips from the long-form script
6. Film + edit
7. /daily-journal                   -> Capture what worked after publishing
```

All YouTube context lives in one place:
- **Outlier research**: `raw/outliers/` (patterns, titles, screenshots)
- **Projects**: `projects/videos/[slug]/` (each video is its own folder: idea.md, script.md, production notes)
- **Shorts**: `projects/shorts/` (standalone shorts and clips from long-form)

## Content Creation Principles

1. **Speak to specific pain** -- "Tax surprises" not "tax issues"
2. **Use their language** -- Industry-specific terms, not accounting jargon
3. **Reference lived experiences** -- Real learnings beat generic advice
4. **Match proven voice** -- Use examples in `raw/best-work/` to match style
5. **Apply frameworks** -- Use consultant frameworks for strategic feedback
6. **Use proven patterns** -- Every YouTube video should map to an outlier pattern
7. **No em dashes** -- Use commas, periods, or restructure

## Target Audience (Quick Reference)

**Primary persona:** Serial entrepreneurs, 35-45, $5-50M net worth. Built wealth through operating businesses, reinvested into real estate. Multiple entities, complex structures. Frustrated with reactive CPAs who don't see the big picture.

**Full profile:** `wiki/audience/serial-entrepreneur/profile.md`

## Improving Skills

After running any skill, look for opportunities to improve it. If the user mentions something that could be better, or if you notice a pattern, suggest:

> "Should I add this to the skill so it works better next time?"

## Agents and Templates

- **Agents**: `.claude/agents/` contains agents organized by department
- **Templates**: `.claude/templates/` contains reusable templates

## This is a Next.js Project

The website lives in `web/`. Run from inside that folder: `cd web && npm run dev`. Key files:
- `web/app/page.tsx` -- Homepage
- `web/app/industries/` -- Industry landing pages
- `web/app/tax-checklist/` -- Lead magnet (7 Questions tool)
- `web/workflow/industries-content.ts` -- Content for industry pages

**Vercel:** project's **Root Directory** setting must be `web` (set in Vercel dashboard, not in this repo).
