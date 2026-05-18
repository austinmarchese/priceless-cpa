#!/usr/bin/env bash
# Guard website code from non-Austin edits.
#
# Reads PreToolUse JSON from stdin. If the tool is Write/Edit/MultiEdit
# and the file_path is inside web/, compare local git user.email against
# the allowlist. Mismatch -> exit 2 to deny the tool call.
#
# Coverage: web/** -- the entire Next.js deploy surface (app, components,
# lib, public, workflow, scripts, package.json, build config). Anything
# under web/ ships to production on push to main.

set -euo pipefail

ALLOWED_EMAILS=(
  "austin@theincubator.xyz"
  "amarchese3@gmail.com"
)

# Parse PreToolUse payload from stdin.
PAYLOAD="$(cat)"
TOOL_NAME="$(printf '%s' "$PAYLOAD" | jq -r '.tool_name // empty')"
FILE_PATH="$(printf '%s' "$PAYLOAD" | jq -r '.tool_input.file_path // empty')"

# Only gate file-writing tools.
case "$TOOL_NAME" in
  Write|Edit|MultiEdit|NotebookEdit) ;;
  *) exit 0 ;;
esac

[ -z "$FILE_PATH" ] && exit 0

# Resolve repo-relative path. Hook runs from project root, so strip prefix.
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
case "$FILE_PATH" in
  "$REPO_ROOT"/*) REL="${FILE_PATH#$REPO_ROOT/}" ;;
  /*) REL="$FILE_PATH" ;;
  *) REL="$FILE_PATH" ;;
esac

# Only gate web/** paths.
case "$REL" in
  web/*|web) ;;
  *) exit 0 ;;
esac

# Identity check.
GIT_EMAIL="$(git config user.email 2>/dev/null || echo '')"
for ok in "${ALLOWED_EMAILS[@]}"; do
  if [ "$GIT_EMAIL" = "$ok" ]; then
    exit 0
  fi
done

cat >&2 <<EOF
Denied: $REL is inside web/ (Next.js codebase that auto-deploys to production).
Only Austin (allowlisted git user.email) may edit this path directly.

Your git user.email: ${GIT_EMAIL:-(unset)}
Allowed: ${ALLOWED_EMAILS[*]}

If you need a website change:
  1. Create a branch, push, open a PR
  2. Tag Austin for review
  3. Do NOT push directly to main
EOF
exit 2
