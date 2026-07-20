"""One-click launcher: start the local web app and open the browser.

Run directly (`python -m nexus_tracker.launch`), or via the double-clickable
start.command (macOS) / start.bat (Windows) wrappers, which also do the one-time
environment setup for non-technical staff.

It picks a free local port (macOS uses 5000 for AirPlay, so we start higher),
prints a plain banner with the address, opens the browser, and serves on
127.0.0.1 only. Because the app opens its data lazily, this always starts even
if the synced folder isn't ready yet -- the first page then explains what to do.
"""

from __future__ import annotations

import socket
import threading
import webbrowser

from .web.app import create_app

HOST = "127.0.0.1"
DEFAULT_PORT = 8765


def _free_port(preferred: int = DEFAULT_PORT) -> int:
    """Return the first bindable port at or after `preferred`."""
    for port in range(preferred, preferred + 25):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
            try:
                probe.bind((HOST, port))
                return port
            except OSError:
                continue
    return preferred


def _open_browser(url: str) -> None:
    try:
        webbrowser.open(url)
    except Exception:
        pass  # if it won't open, the console still shows the address


def main() -> None:
    app = create_app()
    port = _free_port()
    url = f"http://{HOST}:{port}"

    print()
    print("  Sales Tax Nexus Tracker is running.")
    print(f"  Open your browser to:  {url}")
    print("  Your browser should open automatically.")
    print("  To stop, close this window.")
    print()

    # Give the server a moment to come up, then open the browser.
    threading.Timer(1.0, _open_browser, args=(url,)).start()

    try:
        app.run(host=HOST, port=port, debug=False, threaded=False)
    except OSError as exc:
        print()
        print(f"  Could not start the app: {exc}")
        print("  Another copy may already be running. Close it and try again.")
        print()


if __name__ == "__main__":
    main()
