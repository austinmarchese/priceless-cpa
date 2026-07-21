"""Session 8 tests: the launcher helpers and graceful behavior when the data
folder isn't available.

The web server itself isn't started here (that blocks); we test the pure port
picker and that the app boots and degrades gracefully.
"""

import socket
import unittest

from nexus_tracker import launch
from nexus_tracker.web.app import create_app

MISSING = "/no/such/synced/folder/that/exists/nexus.sqlite"


class FreePortTests(unittest.TestCase):
    def test_returns_a_bindable_port(self):
        port = launch._free_port(launch.DEFAULT_PORT)
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind((launch.HOST, port))  # should not raise

    def test_skips_a_port_already_in_use(self):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as taken:
            taken.bind((launch.HOST, 0))
            busy_port = taken.getsockname()[1]
            chosen = launch._free_port(busy_port)
            self.assertNotEqual(chosen, busy_port)


class StorageResilienceTests(unittest.TestCase):
    def test_app_boots_even_when_folder_is_missing(self):
        # create_app must not raise just because the data folder isn't reachable.
        app = create_app(MISSING)
        self.assertIsNone(app.storage)  # not opened

    def test_request_shows_friendly_page_when_folder_missing(self):
        app = create_app(MISSING)
        resp = app.test_client().get("/")
        body = resp.get_data(as_text=True)
        self.assertEqual(resp.status_code, 500)
        self.assertIn("synced cloud folder", body)   # the actionable guidance
        self.assertNotIn("Traceback", body)

    def test_recovers_once_the_folder_is_available(self):
        app = create_app(MISSING)
        self.assertEqual(app.test_client().get("/").status_code, 500)
        # Point at a usable database; the next request should retry and succeed.
        app.config["NEXUS_DB_PATH"] = ":memory:"
        self.assertEqual(app.test_client().get("/").status_code, 200)

    def test_memory_app_still_opens_eagerly(self):
        app = create_app(":memory:")
        self.assertIsNotNone(app.storage)  # happy path unchanged

    def test_reopens_when_the_db_file_is_replaced_by_sync(self):
        import os
        import tempfile
        from nexus_tracker.ledger import Client
        from nexus_tracker.storage import Storage

        with tempfile.TemporaryDirectory() as tmp:
            live = os.path.join(tmp, "nexus.sqlite")
            with Storage(live) as s:                      # original file: client c1
                s.add_client(Client(client_id="c1", client_name="Original"))

            app = create_app(live)
            try:
                client_page = app.test_client()
                self.assertIn("Original", client_page.get("/").get_data(as_text=True))

                # A teammate's change lands: sync swaps in a new file (new inode).
                #
                # On Windows, sqlite3 doesn't open files with FILE_SHARE_DELETE,
                # so a rename-based replace of a file this app still has open
                # fails outright there (verified directly: os.replace raises
                # PermissionError every time while any connection to the
                # destination is open, even fully idle -- retrying doesn't help).
                # A real sync client's rename would hit the same OS restriction,
                # so release our handle first, same as would have to happen on
                # Windows for the swap to land at all. This still exercises the
                # thing actually under test: detecting the new inode and
                # reopening on the next request.
                app.storage.close()

                replacement = os.path.join(tmp, "replacement.sqlite")
                with Storage(replacement) as s:
                    s.add_client(Client(client_id="c2", client_name="FromTeammate"))
                os.replace(replacement, live)             # atomic swap -> new inode

                body = client_page.get("/").get_data(as_text=True)
                self.assertIn("FromTeammate", body)       # picked up the new file
                self.assertNotIn("Original", body)        # not the stale one
            finally:
                # The app keeps its own long-lived connection to `live` open for
                # its whole process lifetime (by design -- see app.py). On
                # Windows, an open handle blocks the tempdir cleanup below, so
                # close it explicitly here rather than relying on GC timing.
                if app.storage is not None:
                    app.storage.close()


if __name__ == "__main__":
    unittest.main()
