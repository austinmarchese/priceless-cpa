"""The local web app the user opens in a browser.

Session 4 builds the shell: a home page that lists clients and lets you add one,
and a per-client home view. Plain labels, obvious buttons, no jargon. The later
sessions fill in the actions this shell points at (import in Session 5, Shopify
in Session 6, the exposure dashboard in Session 7).

Like everything else, this reads and writes ONLY through the data-access layer
(nexus_tracker.storage). It never imports sqlite3 or touches the database
directly -- tests/test_architecture.py enforces that.

The app keeps one Storage connection for its lifetime and is served
single-threaded (it is a local, single-user tool -- there is no login or
multi-user server; those are deferred in PROJECT_SPEC.md section 7). It binds to
127.0.0.1 so it is never exposed on the network.
"""

from __future__ import annotations

import re

from flask import Flask, abort, redirect, render_template, request, url_for

from ..ledger import Client
from ..storage import Storage, StorageError


def create_app(db_path: str = None) -> Flask:
    app = Flask(__name__)
    # One connection for the app's life; see module docstring.
    app.storage = Storage(db_path)

    @app.get("/")
    def home():
        clients = [_summarize(app.storage, c) for c in app.storage.list_clients()]
        return render_template("home.html", clients=clients)

    @app.post("/clients")
    def add_client():
        name = (request.form.get("name") or "").strip()
        if not name:
            clients = [_summarize(app.storage, c) for c in app.storage.list_clients()]
            return (
                render_template("home.html", clients=clients,
                                error="Please enter a business name."),
                400,
            )
        client_id = _make_client_id(app.storage, name)
        app.storage.add_client(Client(client_id=client_id, client_name=name))
        return redirect(url_for("client_home", client_id=client_id))

    @app.get("/clients/<client_id>")
    def client_home(client_id):
        client = app.storage.get_client(client_id)
        if client is None:
            abort(404)
        transactions = app.storage.get_transactions_for_client(client_id)
        states = sorted({t.destination_state for t in transactions})
        return render_template(
            "client.html",
            client=client,
            transaction_count=len(transactions),
            states=states,
        )

    @app.errorhandler(404)
    def not_found(_error):
        return (
            render_template(
                "error.html",
                title="We couldn't find that",
                message="That page or client doesn't exist. It may have been "
                        "removed. Head back to your clients and try again.",
            ),
            404,
        )

    @app.errorhandler(StorageError)
    def storage_problem(error):
        # StorageError messages are already written for a person to read.
        return (
            render_template(
                "error.html",
                title="There's a problem reaching your data",
                message=str(error),
            ),
            500,
        )

    return app


def _summarize(store: Storage, client: Client) -> dict:
    """The small facts the home list shows for each client."""
    return {
        "id": client.client_id,
        "name": client.client_name,
        "transaction_count": store.count_transactions(client.client_id),
    }


def _make_client_id(store: Storage, name: str) -> str:
    """Turn a business name into a stable id, so users never invent one.

    'Acme Outdoors, LLC' -> 'acme-outdoors-llc'. If that id is taken, add a
    number so two businesses with the same name don't collide.
    """
    base = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or "client"
    candidate = base
    suffix = 2
    while store.get_client(candidate) is not None:
        candidate = f"{base}-{suffix}"
        suffix += 1
    return candidate


def main() -> None:
    """Run the local web app. Session 8 adds a friendlier one-click launcher."""
    app = create_app()
    # threaded=False: one shared database connection, used from one thread.
    app.run(host="127.0.0.1", port=5000, debug=False, threaded=False)


if __name__ == "__main__":
    main()
