# Skill Overview

All Claude Code skills for Priceless CPA, organized by workflow phase.

> **Maintainer note:** Update this file whenever a skill is added, removed, or significantly changed.

---

## YouTube Content Workflow

The primary workflow for creating YouTube videos. Skills listed in order of use.

```
1. /video-idea-research   -> Generate titles (new concept, riff on outliers, translate competitors)
2. /video-script-research -> Deep research: north star video, topic deep dive, enriched outline
3. /priceless-youtube-script-writer -> Full script lifecycle: draft, revise, finalize
4. /shorts-script         -> Cut shorts clips from the long-form script
5. Film + edit
6. /daily-journal         -> Capture what worked after publishing
```

---

## Skills by Phase

| Phase | Skill | What It Does | Wiki Context Loaded |
|-------|-------|--------------|---------------------|
| Ideation | `/video-idea-research` | Generate title options from new concept, your outliers, or competitor translation | `raw/outliers/`, `wiki/audience/` |
| Ideation | `/youtube-idea` | Score video ideas matched to audience and outlier patterns | `raw/outliers/`, `wiki/audience/` |
| Research | `/video-script-research` | Deep research for script body: stats, tax code, examples, enriched outline | `wiki/knowledge/`, `wiki/consultants/` |
| Writing | `/priceless-youtube-script-writer` | Full script lifecycle: draft, revise, finalize. Karlton hooks + Jasmine authority + Anthony's voice | `wiki/youtube-scripts/`, `wiki/anthony/`, `wiki/consultants/` |
| Writing | `/youtube-script` | Quick script draft (10-20 min) from outline or topic | `wiki/youtube-scripts/`, `wiki/anthony/` |
| Shorts | `/shorts-script` | Short-form video scripts (45-90s) for Reels/TikTok/Shorts | `wiki/shorts/`, `wiki/anthony/` |
| Capture | `/daily-journal` | Log today's learnings into lived experiences | `wiki/lived-experiences/` |
| Website | `/industry-page` | Build industry landing page through interview | `wiki/audience/`, `wiki/marketing/` |
| Website | `/lead-magnet` | Generate lead magnet page with route and interactive quiz | `wiki/audience/`, `wiki/marketing/` |
| Website | `/code-review` | Audit codebase for branding consistency and best practices | - |
| System | `/create-skill` | Create a new reusable workflow | - |
| System | `/improve-skill` | Enhance a skill based on learnings | - |
| System | `/create-consultant` | Clone an expert's frameworks into a consultant file | `wiki/consultants/` |
| Deploy | `/git-push` | Commit and push changes to GitHub | - |

---

## Quick Reference

| Goal | Run This |
|------|----------|
| Generate title ideas for a video | `/video-idea-research` |
| Score and rank video ideas | `/youtube-idea` |
| Research before writing a script | `/video-script-research` |
| Write a full script with revisions | `/priceless-youtube-script-writer` |
| Write a quick script draft | `/youtube-script` |
| Write a short-form script | `/shorts-script` |
| Log what I learned today | `/daily-journal` |
| Build an industry landing page | `/industry-page` |
| Create a lead magnet | `/lead-magnet` |
| Clone an expert's framework | `/create-consultant` |
| Improve a skill | `/improve-skill` |

---

## Adding New Skills

When adding a new skill:

1. Create folder: `skills/{skill-name}/`
2. Create `SKILL.md` with the skill process
3. **Update this file** with the new skill in the appropriate phase
4. **Update CLAUDE.md** skill registry
5. **Update PROJECT-RECIPES.md** if the skill changes folder recommendations

---

## Skill Count

**Total:** 14 skills
- Content creation: 7 (ideation through shorts)
- Website/marketing: 3
- System: 3
- Deploy: 1

*Last updated: 2026-04-14*
