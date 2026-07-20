#!/bin/bash
# Sales Tax Nexus Tracker -- double-click this file to start the app (macOS).
# The first run sets things up (needs internet, once); later runs start instantly.

cd "$(dirname "$0")" || exit 1

# ---------------------------------------------------------------------------
# OPTIONAL: keep the data in your firm's shared folder so the team sees the
# same clients. Remove the leading "#" and set the path to a file in your
# Google Drive / OneDrive / Dropbox folder. Otherwise data stays on this Mac
# under the local "data" folder.
#
# export NEXUS_DB_PATH="$HOME/Library/CloudStorage/GoogleDrive-you@firm.com/My Drive/Nexus Tracker/nexus.sqlite"
# ---------------------------------------------------------------------------

pause_and_exit() {
  echo
  echo "$1"
  echo "Press any key to close this window."
  read -n 1 -s
  exit 1
}

if [ ! -d ".venv" ]; then
  echo "First-time setup (this happens only once)..."
  python3 -m venv .venv || pause_and_exit "Could not create the environment. Is Python 3 installed?"
  ./.venv/bin/python -m pip install --quiet --upgrade pip
  ./.venv/bin/python -m pip install --quiet -r requirements.txt \
    || pause_and_exit "Could not download the needed components. Check your internet connection, then try again."
fi

./.venv/bin/python -m nexus_tracker.launch
