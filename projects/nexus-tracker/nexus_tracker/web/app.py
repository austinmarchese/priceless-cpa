"""Entry point for the local web app.

Runs a small local web server the user opens in a browser. It wires together the
client selector, the importers, and the exposure dashboard -- all through the
data-access layer (storage.py).

    Session 4  -- the shell: select or add a client, and a plain home view.
    Session 7  -- the exposure dashboard (state-by-state exposure, crossings with
                  dates, and how close a client is to thresholds not yet hit),
                  framed as exposure facts, never an auto-conclusion of nexus.
    Session 8  -- a one-click way to start the app and open the browser, graceful
                  behavior when the synced folder isn't available, friendly errors.

The web framework choice (kept minimal and mainstream) is confirmed in Session 4.
"""

# TODO(Session 4): build the UI shell wired to fake data.
# TODO(Session 7): build the exposure dashboard.
# TODO(Session 8): one-click launch + friendly errors for non-technical staff.
