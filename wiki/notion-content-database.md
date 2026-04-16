# Notion Content Database (Official)

The canonical tracker for every piece of Priceless CPA social content (YouTube longs + Shorts). This is the source of truth for what's in backlog, what's being scripted, what's filmed, and what's posted. Every video project in `projects/videos/` and short in `projects/shorts/` should have a corresponding row here.

## Location

- **Database name:** `[Priceless] Social Media`
- **URL:** https://www.notion.so/3040df1f244e80c98e5be8be6e6e008d
- **Data source ID:** `collection://3040df1f-244e-803a-b840-000b46f9686c`
- **Parent workspace path:** The Incubator → Priceless Company Operating System → Priceless CPA Media Team → [Priceless] Social Media

## Schema

| Property | Type | Notes |
|----------|------|-------|
| `Name` | title | Working title for the video/short |
| `Status` | select | Pipeline stage (see values below) |
| `Video Type` | select | `Short` or `YT Video` |
| `Idea Source` | select | Why the idea exists (see values below) |
| `Editing North Star` | url | Reference video the editor should match |
| `Created time` | created_time | Auto-set |

### Status values (pipeline stages)

`Backlog` → `Content Ideas` → `Scripting` → `Ready to Film` → `Editing` → `Revisions` → `Ready for Review` → `Posted` (or `Trash`)

### Video Type values

- `Short` (Reels / TikTok / YouTube Shorts, output of `/shorts-script`)
- `YT Video` (long-form, output of `/youtube-script` or `/priceless-youtube-script-writer`)

### Idea Source values

- `Client FAQ` — questions clients actually ask
- `Content Gap` — topic no one is covering well
- `Client Quote` — real client lived experience
- `Client Quote + Trending` — client story tied to a trend
- `Trending` — newsjack / timely topic

## Views

| View | URL | Filter |
|------|-----|--------|
| All Content | `view://3040df1f-244e-8016-aeb8-000c98faae47` | none |
| Short Form Content | `view://3340df1f-244e-800a-9144-000cd7c8546a` | Video Type = Short |
| YT Content | `view://3340df1f-244e-80cb-91c1-000c4abf567e` | Video Type = YT Video |

## Templates

| Template | ID |
|----------|----|
| Short | `3340df1f-244e-8088-b44c-c5c9b6ccf79d` |
| YT Video | `3340df1f-244e-80a8-9ee3-cd930b395689` |

## Workflow Integration

1. `/video-idea-research` or `/youtube-idea` generates ideas → create a row in `Backlog` or `Content Ideas` with Video Type and Idea Source set.
2. When scripting starts, move to `Scripting` and run `/youtube-script` (or `/priceless-youtube-script-writer`) or `/shorts-script`. The repo project folder at `projects/videos/[slug]/` or `projects/shorts/[slug].md` should link back to the Notion page URL.
3. `/video-script-research` fills the script body before or during `Scripting`.
4. When the script is locked and assets are ready, move to `Ready to Film`.
5. `Editing` → `Revisions` → `Ready for Review` → `Posted` tracks post-production.
6. After `Posted`, run `/daily-journal` to capture learnings.

## Rules

- Never create a new video project folder in this repo without a matching Notion row (and vice versa).
- `Editing North Star` should be set before moving to `Editing` — editors need a reference.
- `Trash` is terminal. Don't re-open killed ideas; create a new row if the concept comes back.
