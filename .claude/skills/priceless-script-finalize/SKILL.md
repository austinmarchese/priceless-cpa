---
name: priceless-script-finalize
description: Team-augmenting orchestrator that walks a Draft-status Priceless CPA YouTube script through a 6-phase workflow (Diagnose → Triage → Restructure → Adjust → Re-review → Finalize) with a human approval gate between each phase. Use this whenever a team member needs to take a completed draft script from queue to shippable, whenever the user says "finalize this script", "review and revise", "walk this script through the pipeline", "run the finalize workflow", or any time there is a Draft-status script in projects/videos/*/script.md that needs to be reviewed, restructured, and locked. NOT a fully autonomous loop — every phase pauses for a team member to review, mark findings, and approve or loop back. Blocks progression on any finding tagged needs-Anthony (voice call, aggressive tax position, unverified factual claim).
---

# Priceless Script Finalize

Team-augmenting orchestrator for the "Scripting" queue. Walks one draft script through six phases with human checkpoints between each. This exists so a team member (not just Anthony) can drive a script from Draft to Finalized with the same rigor Anthony would apply, while still routing final judgment calls back to Anthony.

## When to Use

- **Manually**: `/priceless-script-finalize [slug]` on any Draft-status script in `projects/videos/[slug]/`
- **Queue processing**: run one script at a time when working through the Scripting column in Notion
- Whenever a draft "feels done from the writer" but has not been reviewed or restructured
- **Not** for fresh writing (use `/priceless-youtube-script-writer`) or standalone review (use `/priceless-youtube-script-reviewer` directly)

## Design Principles

- **Augment the team, do not replace them.** Every phase transition requires a human "yes". The skill drives the sequence; the team member drives the decisions.
- **Anthony is the escalation path, not the default.** Findings that require Anthony's judgment (voice, aggressive tax position, unverified factual claim) halt the workflow at Phase 2 with a clean handoff note. Everything else the team member can decide.
- **Every decision is logged.** `finalize-log.md` in the project folder captures which findings were applied, which were skipped, which were escalated, and who ran each phase. This is the audit trail.
- **The original draft is preserved.** Before the first revise pass, the incoming `script.md` is copied to `script-draft-original.md`. The team can always diff against the starting point.
- **Loop back, do not force forward.** After Phase 5 re-review, if quality is not there yet, loop back to Phase 3. Two iterations max before escalating to Anthony (thrashing usually means the finding needs a human call).

---

## File Structure

| File | Purpose |
|------|---------|
| `projects/videos/[slug]/script.md` | Working draft (mutated across phases) |
| `projects/videos/[slug]/script-draft-original.md` | Snapshot of the incoming draft, created once at Phase 1 |
| `projects/videos/[slug]/script-review.md` | Latest reviewer report (overwritten by Phase 1 and Phase 5) |
| `projects/videos/[slug]/script-review-initial.md` | Snapshot of the first review, kept for delta comparison in Phase 5 |
| `projects/videos/[slug]/finalize-log.md` | Audit trail: phase, timestamp, team member, findings, decisions |
| `projects/videos/[slug]/script-revisions/` | Written by the underlying writer skill during Phase 3/4/6 |

---

## Prerequisites

Before starting, confirm:

1. `projects/videos/[slug]/script.md` exists and is marked Draft (either in the frontmatter status or in the Notion row)
2. The team member has read the linked `idea.md` and `brief.md` if present, so they have context on what the video is trying to accomplish
3. The team member knows their initials (used to sign each phase in the log)

If any prerequisite is missing, stop and tell the team member what to fix before proceeding.

---

## Process

### Phase 0: Setup

Run once at the start of the workflow.

1. Ask the team member: "What are your initials? (used to sign each phase in the log)"
2. Copy `script.md` → `script-draft-original.md` (do NOT overwrite if this file already exists — the original is sacred)
3. Create `finalize-log.md` with a header, or append to it if it already exists:

```markdown
# Finalize Log — [slug]

## Run started: [YYYY-MM-DD HH:MM]
**Team member:** [initials]
**Starting script:** script.md ([N] words)
**Original preserved as:** script-draft-original.md

---
```

4. Tell the team member: "Setup complete. Ready to run Phase 1: Diagnose. Continue?"

Wait for confirmation before proceeding.

---

### Phase 1: Diagnose

**Goal:** Get a full picture of what needs to change.

1. Invoke `/priceless-youtube-script-reviewer` on `projects/videos/[slug]/script.md`
2. When the reviewer completes, the file `script-review.md` will exist. Copy it to `script-review-initial.md` (this is the baseline for the Phase 5 delta).
3. Read `script-review.md` and extract every finding into a triage table. Each finding gets a priority tier:

| Tier | What it means | Examples |
|------|--------------|----------|
| **P0 — Blocker** | Tax authority violation, factual error, stale OBBBA law, script-killer voice failures across many sections | Wrong IRC cite, "the IRS confirmed" without a source, fabricated quote |
| **P1 — Structural** | Missing hook, weak intro, wrong section order, promise-delivery mismatch, contrarian angle collapses | Intro has no proof line, Section 3 pays off before Section 2 sets it up |
| **P2 — Voice / Tax nuance** | Sections that sound like ChatGPT not Anthony, tax content correct but shallow, packaging half-delivered | "As we discussed earlier" phrasing, missing Anthony signature phrase, tax content stops at the general rule |
| **P3 — Polish** | Line-level rewrites, transition cleanups, minor typos, redundant sentences | Same setup line used twice, one section 15% too long |
| **needs-Anthony** | Escalation-only findings | Aggressive tax position (crypto loss harvesting timing, promoter-adjacent strategy), any factual claim the reviewer flagged as "cannot verify", voice calls where reviewer split ("this could be Anthony or could be ChatGPT — needs a call") |

4. Append to `finalize-log.md`:

```markdown
## Phase 1 — Diagnose ([HH:MM])
Reviewer run: complete
Findings: [N] total ([X] P0, [Y] P1, [Z] P2, [W] P3, [V] needs-Anthony)
Verdict from reviewer: [Approve / Approve with Changes / Needs Revision]
Baseline review saved as: script-review-initial.md
```

5. Present to the team member: the triage table, the verdict, and a summary of what each tier contains. Do not proceed to Phase 2 until they say "continue" or equivalent.

---

### Phase 2: Triage Checkpoint (Human Gate)

**Goal:** Team member decides what to apply, what to skip, and what needs Anthony.

This is the most important gate in the workflow. The team member walks through each finding and marks it:

- **apply** — will be applied in Phase 3 (P0/P1 structural) or Phase 4 (P2 voice/tax nuance)
- **skip** — noted in log, not applied (usually because the finding is a false positive or the team member disagrees)
- **needs-Anthony** — escalated. Any finding marked needs-Anthony halts the workflow.

Present findings one tier at a time, most severe first (P0 → P1 → P2 → P3). For each finding, show:

- The section it applies to
- The finding text from the reviewer
- The reviewer's suggested fix
- Which sub-agent flagged it (voice matcher, tax authority, etc.)

Ask: "Apply / skip / escalate to Anthony?"

**Automatic halt conditions.** The team member does not get to override these — the skill halts the workflow if:

- Any finding is tagged `needs-Anthony` in the reviewer output (the reviewer already made the call)
- Any P0 tax-authority finding is marked `skip` by the team member (skipping a P0 is Anthony-only)
- The team member marks 3+ findings as `needs-Anthony` in a single triage pass (this is a signal the script needs more than a finalize pass — it needs Anthony's rewrite input up front)

When the workflow halts, write a handoff block to `finalize-log.md`:

```markdown
## Phase 2 — Triage HALTED for Anthony ([HH:MM])
**Team member:** [initials]
**Reason:** [halt condition]

**Findings escalated:**
1. [Section] — [Finding] — [why the team member escalated / why the halt fired]
2. ...

**Next step for Anthony:** [specific ask — e.g., "Confirm the S-corp Watson-case citation is applied correctly in Section 3," or "Decide voice call on the Section 5 hook."]
```

Then stop. Tell the team member: "Halted at Phase 2. Handoff written to finalize-log.md. Anthony reviews before this script continues."

If no halt condition fires, append the full triage decisions to `finalize-log.md`:

```markdown
## Phase 2 — Triage complete ([HH:MM])
**Team member:** [initials]
**To apply in Phase 3 (P0/P1):** [list]
**To apply in Phase 4 (P2):** [list]
**Skipped:** [list, with reason]
**Escalated to Anthony:** [none, or list — but if any, workflow already halted above]
```

Then ask: "Triage locked. Ready to run Phase 3: Restructure. Continue?"

---

### Phase 3: Restructure

**Goal:** Apply P0/P1 findings — the structural work. Section order, intro, hook, CTA placement, promise delivery, tax authority fixes.

1. Invoke `/priceless-youtube-script-writer` in **revise mode** on `projects/videos/[slug]/script.md`
2. Pass the writer a scoped instruction: "Apply only the P0/P1 findings from the Phase 2 triage. Do not touch P2 or P3 findings yet — those are Phase 4." Include the specific findings list from `finalize-log.md`.
3. When the writer completes:
   - Show the team member a **diff** of what changed (use `git diff` or a similar tool; if the file is not under git yet, show a section-by-section before/after)
   - Show a short changelog: "Section 2 — reordered the audit-rate stat before the fear framing. Section 3 — replaced 'the IRS says' with 'IRC §274(d) requires' and added the cite. Intro — added a persona call-out at 0:07."
4. Ask the team member: "Approve restructure? (yes / loop this phase / halt)"
   - **yes** → append phase log entry, proceed to Phase 4
   - **loop this phase** → team member tells the writer what to redo, writer runs again, back to step 3
   - **halt** → write halt entry to log with reason, stop

Append to `finalize-log.md`:

```markdown
## Phase 3 — Restructure complete ([HH:MM])
**Team member:** [initials]
**Applied:** [list of P0/P1 findings]
**Changes made:** [short changelog]
**Approvals:** [team member initials]
```

---

### Phase 4: Adjust

**Goal:** Apply P2 findings — voice, tax nuance, pacing, packaging fine-tuning.

Same shape as Phase 3, scoped to P2:

1. Invoke `/priceless-youtube-script-writer` in revise mode
2. Scoped instruction: "Apply only the P2 findings from the Phase 2 triage. Do not touch structural elements — Phase 3 already handled those."
3. Show diff + changelog to team member
4. Approve / loop / halt gate
5. Log the phase

Skip Phase 4 entirely if the Phase 2 triage produced no P2 findings. Note this in the log and proceed to Phase 5.

---

### Phase 5: Re-review

**Goal:** Confirm the changes actually fixed what was flagged and did not introduce new problems.

1. Invoke `/priceless-youtube-script-reviewer` again on the revised script
2. When the reviewer completes, read the new `script-review.md`
3. Diff the new findings against `script-review-initial.md`:
   - **Fixed:** Findings from the initial review that no longer appear
   - **Remaining:** Findings from the initial review that still appear (or appear in modified form)
   - **New:** Findings that only appear in the new review (introduced by the revise passes — this is a signal that Phase 3 or 4 went sideways)
4. Present the delta table to the team member:

```markdown
| Initial finding | Status | Notes |
|----------------|--------|-------|
| Section 2 — audit rate stat placement | Fixed | Moved to top of section |
| Section 3 — IRC cite missing | Fixed | Added §274(d) cite |
| Section 4 — voice sounds AI-ish | Still present | Reviewer flagged same section again |

| New finding (not in initial) | Section | Suggestion |
|-----------------------------|---------|------------|
| Transition into Section 5 lost the callback to Section 2 | Section 5 opener | Restore the two-clients story bridge |
```

5. Ask the team member to pick a path:
   - **Continue to Finalize (Phase 6)** — the delta is acceptable, remaining findings are polish or judgment calls
   - **Loop back to Phase 3** — structural or P0 issues remain, another pass needed (max 2 loop-backs; if it needs a 3rd, escalate to Anthony)
   - **Halt** — something is off that the team member cannot resolve

Append to `finalize-log.md`:

```markdown
## Phase 5 — Re-review complete ([HH:MM])
**Fixed:** [count from initial]
**Remaining:** [count still present]
**New:** [count introduced]
**Team member decision:** [continue / loop-back / halt]
**Loop-back count:** [N/2]
```

If loop-back is chosen, go back to Phase 3 (the same triage from Phase 2 is still valid — the team member just picks which findings to reapply).

---

### Phase 6: Finalize

**Goal:** Lock the script and update metadata.

1. Invoke `/priceless-youtube-script-writer` finalize pass on the script. This is the writer skill's own finalize step (it produces `script-final.md` or updates status in frontmatter — follow whatever the writer skill does).
2. Update the script frontmatter status to `Finalized` (or whatever the standard is in the project template).
3. If the video has a linked Notion row in the "[Priceless] Social Media" database (`collection://3040df1f-244e-803a-b840-000b46f9686c`), update the row's status field from Draft to Ready to Film (or the equivalent stage in the Notion pipeline). Use `notion-update-page` for this — do not create a new row.
4. Append the final log entry:

```markdown
## Phase 6 — Finalized ([HH:MM])
**Team member:** [initials]
**Final word count:** [N]
**Notion row updated:** [yes / no / no row linked]
**Total loop-backs:** [N]
**Total phases run:** [1-6]
**Time from Phase 0 to Phase 6:** [approx duration]

---

## Run complete.
```

Then tell the team member: "Script [slug] finalized. Ready to film. Log at `finalize-log.md`."

---

## Halt and Handoff Behavior

Any halt at any phase writes a clean handoff block to `finalize-log.md`, then stops. The block must be self-contained — Anthony (or the next team member) should be able to pick up the script without re-reading the whole conversation. Include:

- Which phase halted
- Why (halt condition or team member choice)
- Which specific findings need Anthony's call
- What to do to resume (e.g., "After Anthony's decisions, re-run `/priceless-script-finalize [slug]` — it will detect the halt and resume from Phase 2 triage")

---

## Resume Behavior

If `/priceless-script-finalize [slug]` is invoked and `finalize-log.md` already exists with an incomplete run (last entry is a halt or a mid-phase entry with no completion), ask the team member: "Previous run halted at [phase] on [date]. Resume from there, or restart from Phase 1?"

- **Resume** — pick up at the phase after the last completed one
- **Restart** — archive the current `finalize-log.md` as `finalize-log-[timestamp].md` and start fresh (this also re-snapshots the current `script.md` as the new "original" — the team member should be sure)

---

## Notes and Edge Cases

- **Do not skip Phase 1 or Phase 5.** Even if a team member is confident the script is close, the reviewer's structured output is what feeds the triage. Skipping means no audit trail.
- **The writer skill is the only thing that mutates `script.md`.** This skill orchestrates, it does not edit the script directly. If the writer skill needs to be told exactly which findings to apply, pass those findings verbatim from the triage log.
- **The team member can add findings the reviewer missed.** During Phase 2 triage, if the team member spots something the reviewer did not flag, they can add it as a P1/P2/P3 finding. Log it under "team-member-added" so the audit trail shows it did not come from the reviewer.
- **Do not batch scripts.** V1 is one script at a time by design — the team learns the rhythm on one script before automating queue processing. A `--queue` mode can be added later once the loop is proven.
- **`needs-Anthony` is a feature, not a failure.** Escalating a finding is the right call when in doubt. The workflow being able to halt cleanly is what makes it safe to hand to the team.

---

## Integration

- **Upstream:** `/priceless-youtube-script-writer` (produces the Draft) → `/priceless-script-finalize` picks it up
- **Downstream:** After Phase 6, script goes to filming. Shorts can be cut with `/priceless-shorts-script --from-youtube [slug]`. Description is generated with `/priceless-youtube-description`.
- **Called sub-skills:** `/priceless-youtube-script-reviewer` (Phase 1, Phase 5), `/priceless-youtube-script-writer` (Phase 3, Phase 4, Phase 6)
- **Notion:** Uses `notion-update-page` on the "[Priceless] Social Media" database in Phase 6. See `wiki/notion-content-database.md` for schema.
