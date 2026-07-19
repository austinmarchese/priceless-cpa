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
import uuid

from flask import Flask, abort, redirect, render_template, request, url_for

from ..importers import csv_importer
from ..importers.csv_importer import ColumnMapping, CsvImportError
from ..ledger import Client
from ..storage import Storage, StorageError

MAX_UPLOAD_BYTES = 25 * 1024 * 1024  # 25 MB CSV upload cap


def create_app(db_path: str = None) -> Flask:
    app = Flask(__name__)
    app.config["MAX_CONTENT_LENGTH"] = MAX_UPLOAD_BYTES
    # One connection for the app's life; see module docstring.
    app.storage = Storage(db_path)
    # Holds an uploaded CSV between the "upload" and "map columns" steps.
    # In-memory is fine: single local process, and a lost upload just means
    # the user picks the file again.
    app.pending_uploads = {}

    def require_client(client_id):
        client = app.storage.get_client(client_id)
        if client is None:
            abort(404)
        return client

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
        client = require_client(client_id)
        transactions = app.storage.get_transactions_for_client(client_id)
        states = sorted({t.destination_state for t in transactions})
        return render_template(
            "client.html",
            client=client,
            transaction_count=len(transactions),
            states=states,
        )

    # -- CSV import (Session 5): upload -> map columns -> run -> report ----- #

    @app.get("/clients/<client_id>/import")
    def import_start(client_id):
        return render_template("import_upload.html", client=require_client(client_id))

    @app.post("/clients/<client_id>/import")
    def import_upload(client_id):
        client = require_client(client_id)
        file = request.files.get("file")
        if file is None or not file.filename:
            return render_template("import_upload.html", client=client,
                                   error="Please choose a CSV file to import."), 400
        try:
            text = csv_importer.decode_bytes(file.read())
            headers, preview = csv_importer.read_headers_and_preview(text)
        except CsvImportError as exc:
            return render_template("import_upload.html", client=client, error=str(exc)), 400

        token = uuid.uuid4().hex
        app.pending_uploads[token] = {"filename": file.filename, "text": text}
        return render_template(
            "import_map.html", client=client, headers=headers, preview=preview,
            token=token, filename=file.filename, guess=_guess_columns(headers),
        )

    @app.post("/clients/<client_id>/import/run")
    def import_run(client_id):
        client = require_client(client_id)
        pending = app.pending_uploads.get(request.form.get("token", ""))
        if pending is None:
            return render_template(
                "import_upload.html", client=client,
                error="That upload expired before it finished. Please choose the file again."
            ), 400

        date = (request.form.get("map_date") or "").strip()
        state = (request.form.get("map_state") or "").strip()
        amount = (request.form.get("map_amount") or "").strip()
        missing = [label for label, value in
                   (("date", date), ("state", state), ("amount", amount)) if not value]
        if missing:
            return _remap(client, pending, request.form.get("token", ""),
                          "Please choose a column for: " + ", ".join(missing) + ".")

        mapping = ColumnMapping(
            date=date, state=state, amount=amount,
            transaction_id=(request.form.get("map_transaction_id") or "").strip() or None,
            marketplace=(request.form.get("map_marketplace") or "").strip() or None,
            marketplace_default=bool(request.form.get("marketplace_all")),
        )
        try:
            report = csv_importer.import_csv(app.storage, client_id, pending["text"], mapping)
        except CsvImportError as exc:
            return _remap(client, pending, request.form.get("token", ""), str(exc))

        app.pending_uploads.pop(request.form.get("token", ""), None)
        return render_template("import_report.html", client=client, report=report)

    def _remap(client, pending, token, error):
        headers, preview = csv_importer.read_headers_and_preview(pending["text"])
        return render_template(
            "import_map.html", client=client, headers=headers, preview=preview,
            token=token, filename=pending["filename"], guess=_guess_columns(headers),
            error=error,
        ), 400

    @app.errorhandler(413)
    def upload_too_large(_error):
        return render_template(
            "error.html",
            title="That file is too large",
            message="Please import a CSV smaller than 25 MB. If your export is "
                    "very large, split it into a few files and import them one at a time.",
        ), 413

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


def _guess_columns(headers: list) -> dict:
    """Best-guess column mapping from header names, to pre-select the dropdowns.

    Only a convenience -- the user confirms or changes every choice.
    """
    def find(*needles):
        for header in headers:
            lowered = header.lower()
            if any(n in lowered for n in needles):
                return header
        return ""

    return {
        "date": find("date"),
        "state": find("state", "province", "ship to state", "destination"),
        "amount": find("total", "amount", "sales", "price", "revenue"),
        "transaction_id": find("order id", "order number", "order #", "transaction id", "order_id"),
        "marketplace": find("marketplace", "channel", "facilitat"),
    }


def main() -> None:
    """Run the local web app. Session 8 adds a friendlier one-click launcher."""
    app = create_app()
    # threaded=False: one shared database connection, used from one thread.
    app.run(host="127.0.0.1", port=5000, debug=False, threaded=False)


if __name__ == "__main__":
    main()
