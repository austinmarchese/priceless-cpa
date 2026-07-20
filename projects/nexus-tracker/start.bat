@echo off
REM Sales Tax Nexus Tracker -- double-click this file to start the app (Windows).
REM The first run sets things up (needs internet, once); later runs start instantly.

cd /d "%~dp0"

REM ---------------------------------------------------------------------------
REM OPTIONAL: keep the data in your firm's shared folder so the team sees the
REM same clients. Remove the "REM" and set the path to a file in your OneDrive /
REM Google Drive / Dropbox folder. Otherwise data stays on this PC under "data".
REM
REM set NEXUS_DB_PATH=C:\Users\you\OneDrive\Nexus Tracker\nexus.sqlite
REM ---------------------------------------------------------------------------

if not exist ".venv" (
  echo First-time setup (this happens only once)...
  python -m venv .venv || goto :setupfail
  ".venv\Scripts\python.exe" -m pip install --quiet --upgrade pip
  ".venv\Scripts\python.exe" -m pip install --quiet -r requirements.txt || goto :setupfail
)

".venv\Scripts\python.exe" -m nexus_tracker.launch
goto :eof

:setupfail
echo.
echo Setup failed. Make sure Python 3 is installed and you have internet access.
pause
