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

import os
import re
import uuid
from datetime import date

from flask import Flask, abort, redirect, render_template, request, url_for

from .. import engine, thresholds, us_states
from ..crypto import CryptoError
from ..importers import csv_importer, shopify
from ..importers.csv_importer import ColumnMapping, CsvImportError
from ..importers.shopify import ShopifyError
from ..ledger import Client
from ..storage import Storage, StorageError
from ..thresholds import ThresholdConfigError

_PERIOD_PHRASE = {
    "current_or_prior_calendar_year": "the current or prior calendar year",
    "prior_calendar_year": "the prior calendar year",
    "current_calendar_year": "the current calendar year",
    "trailing_12_months": "the trailing 12 months",
}
_LOGIC_PHRASE = {
    "dollar_only": "the sales amount reaches the threshold",
    "transaction_only": "the number of transactions reaches the threshold",
    "and": "both the sales amount and the number of transactions reach the thresholds",
    "either": "either the sales amount or the number of transactions reaches its threshold",
}

MAX_UPLOAD_BYTES = 25 * 1024 * 1024  # 25 MB CSV upload cap
MAX_PENDING_UPLOADS = 10  # cap in-memory uploads awaiting column mapping


def create_app(db_path: str = None) -> Flask:
    app = Flask(__name__)
    app.config["MAX_CONTENT_LENGTH"] = MAX_UPLOAD_BYTES
    app.jinja_env.filters["dollars"] = _dollars
    app.jinja_env.filters["state_name"] = us_states.name_for
    app.jinja_env.filters["period_phrase"] = lambda p: _PERIOD_PHRASE.get(p, p or "")
    app.jinja_env.filters["logic_phrase"] = lambda l: _LOGIC_PHRASE.get(l, l or "")
    # The ledger connection is opened lazily and cached, so the app still STARTS
    # when the synced folder isn't available yet (the first request then shows a
    # friendly "can't reach your data" page and retries).
    #
    # It is also re-opened when the database FILE is replaced underneath us. Cloud
    # sync (Drive/Dropbox/OneDrive) applies a teammate's changes by swapping in a
    # new file, which gives it a new inode; a long-lived handle would otherwise
    # keep reading the stale file and then fail writes. So on each request we
    # compare the file's inode and re-open if it changed. (:memory: has no file,
    # so it stays a single persistent connection -- used by the tests.)
    app.config["NEXUS_DB_PATH"] = db_path
    app.storage = None
    app._storage_inode = None

    def require_storage():
        if app.storage is not None and _db_inode(app.storage.db_path) != app._storage_inode:
            app.storage.close()          # file was swapped by sync; drop the stale handle
            app.storage = None
        if app.storage is None:
            app.storage = Storage(app.config["NEXUS_DB_PATH"])
            app._storage_inode = _db_inode(app.storage.db_path)
        return app.storage

    try:
        require_storage()   # open now if we can; a missing folder is tolerated
    except StorageError:
        pass                # a request will retry and show a friendly page

    # Holds an uploaded CSV between the "upload" and "map columns" steps.
    # In-memory is fine: single local process, and a lost upload just means
    # the user picks the file again.
    app.pending_uploads = {}

    def require_client(client_id):
        client = require_storage().get_client(client_id)
        if client is None:
            abort(404)
        return client

    @app.get("/")
    def home():
        store = require_storage()
        clients = [_summarize(store, c) for c in store.list_clients()]
        return render_template("home.html", clients=clients)

    @app.post("/clients")
    def add_client():
        store = require_storage()
        name = (request.form.get("name") or "").strip()
        if not name:
            clients = [_summarize(store, c) for c in store.list_clients()]
            return (
                render_template("home.html", clients=clients,
                                error="Please enter a business name."),
                400,
            )
        client_id = _make_client_id(store, name)
        store.add_client(Client(client_id=client_id, client_name=name))
        return redirect(url_for("client_home", client_id=client_id))

    @app.get("/clients/<client_id>")
    def client_home(client_id):
        client = require_client(client_id)
        transactions = require_storage().get_transactions_for_client(client_id)
        states = sorted({t.destination_state for t in transactions})
        return render_template(
            "client.html",
            client=client,
            transaction_count=len(transactions),
            states=states,
            cleared=bool(request.args.get("cleared")),
        )

    # -- Clear a client's sales data (recovering from a bad import) --------- #

    @app.get("/clients/<client_id>/clear")
    def clear_confirm(client_id):
        client = require_client(client_id)
        count = require_storage().count_transactions(client_id)
        return render_template("clear_confirm.html", client=client, transaction_count=count)

    @app.post("/clients/<client_id>/clear")
    def clear_run(client_id):
        client = require_client(client_id)
        require_storage().delete_transactions_for_client(client_id)
        return redirect(url_for("client_home", client_id=client.client_id, cleared=1))

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
        # Drop the oldest uploads if too many are left un-mapped, so abandoned
        # uploads can't grow memory without bound (dict keeps insertion order).
        while len(app.pending_uploads) > MAX_PENDING_UPLOADS:
            app.pending_uploads.pop(next(iter(app.pending_uploads)), None)
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
            report = csv_importer.import_csv(require_storage(), client_id, pending["text"], mapping)
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

    # -- Shopify connection (Session 6) ------------------------------------ #

    @app.get("/clients/<client_id>/shopify")
    def shopify_connect(client_id):
        client = require_client(client_id)
        return render_template(
            "shopify_connect.html", client=client,
            connection=shopify.connection(require_storage(), client_id),
            saved=bool(request.args.get("saved")),
        )

    @app.post("/clients/<client_id>/shopify")
    def shopify_save(client_id):
        client = require_client(client_id)
        shop = (request.form.get("shop_domain") or "").strip()
        token = (request.form.get("token") or "").strip()
        if not shop or not token:
            return render_template(
                "shopify_connect.html", client=client,
                connection=shopify.connection(require_storage(), client_id),
                error="Please enter both the store address and the access token.",
            ), 400
        try:
            shopify.save_credentials(require_storage(), client_id, shop, token)
        except ShopifyError as exc:
            # e.g. the store address isn't a valid myshopify.com host.
            return render_template(
                "shopify_connect.html", client=client,
                connection=shopify.connection(require_storage(), client_id),
                error=str(exc),
            ), 400
        return redirect(url_for("shopify_connect", client_id=client_id, saved=1))

    @app.post("/clients/<client_id>/shopify/sync")
    def shopify_sync(client_id):
        client = require_client(client_id)
        try:
            report = shopify.import_shopify(require_storage(), client_id)
        except (ShopifyError, CryptoError) as exc:
            # ShopifyAuthError (bad/expired token) is a ShopifyError subclass.
            return render_template(
                "shopify_connect.html", client=client,
                connection=shopify.connection(require_storage(), client_id),
                error=str(exc),
            ), 400
        return render_template("shopify_report.html", client=client, report=report)

    # -- Exposure dashboard (Session 7) ------------------------------------ #

    @app.get("/clients/<client_id>/exposure")
    def exposure(client_id):
        client = require_client(client_id)
        try:
            thresholds_by_state = thresholds.load_thresholds()
        except ThresholdConfigError as exc:
            return render_template(
                "error.html",
                title="There's a problem with the threshold settings",
                message=str(exc),
            ), 500

        as_of = _parse_as_of(request.args.get("as_of"))
        transactions = require_storage().get_transactions_for_client(client_id)
        result = engine.evaluate_client(transactions, thresholds_by_state, as_of, client_id)
        view = _build_exposure_view(result, thresholds_by_state)
        return render_template("exposure.html", client=client, view=view, as_of=as_of)

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

    @app.errorhandler(500)
    def internal_error(_error):
        # Last resort: any unexpected error still shows a plain page, not a trace.
        return (
            render_template(
                "error.html",
                title="Something went wrong",
                message="An unexpected problem came up. Please try again. If it "
                        "keeps happening, let whoever set up this tool know.",
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


def _db_inode(path: str):
    """The database file's inode, or None for :memory: or a missing file.

    A changed inode means the file was replaced (by cloud sync), so the cached
    connection must be re-opened.
    """
    if path == ":memory:":
        return None
    try:
        return os.stat(path).st_ino
    except OSError:
        return None


def _dollars(cents) -> str:
    """Format integer cents as US currency, exactly (no float rounding)."""
    if cents is None:
        return ""
    sign = "-" if cents < 0 else ""
    whole = abs(int(cents))
    return f"{sign}${whole // 100:,}.{whole % 100:02d}"


def _parse_as_of(raw) -> date:
    """The date to measure exposure as of; defaults to today. Accepts YYYY-MM-DD."""
    if raw:
        try:
            return date.fromisoformat(raw)
        except ValueError:
            pass
    return date.today()


def _progress(exposure) -> int:
    """How far a not-yet-crossed state is toward crossing, 0-99%, logic-aware."""
    dollar = (exposure.sales_cents / exposure.dollar_threshold_cents
              if exposure.dollar_threshold_cents else None)
    txn = (exposure.transaction_count / exposure.transaction_threshold
           if exposure.transaction_threshold else None)
    logic = exposure.threshold_logic
    if logic == "transaction_only":
        fraction = txn
    elif logic == "and":                       # need both -> the lagging one gates
        fraction = min(dollar, txn)
    elif logic == "either":                    # either triggers -> the leading one
        fraction = max(dollar, txn)
    else:                                      # dollar_only
        fraction = dollar
    return min(99, int((fraction or 0) * 100))


def _build_exposure_view(result, thresholds_by_state) -> dict:
    """Sort the engine's per-state facts into crossed / approaching / unconfigured."""
    crossed, approaching, unconfigured = [], [], []
    for e in result.states:
        if not e.threshold_configured:
            unconfigured.append({"e": e, "progress": None})
        elif e.crossed:
            crossed.append({"e": e, "progress": None})
        else:
            approaching.append({"e": e, "progress": _progress(e)})

    crossed.sort(key=lambda i: (i["e"].effective_date or date.min, i["e"].state))
    approaching.sort(key=lambda i: (-i["progress"], i["e"].state))
    unconfigured.sort(key=lambda i: (-i["e"].sales_cents, i["e"].state))
    return {
        "crossed": crossed,
        "approaching": approaching,
        "unconfigured": unconfigured,
        "has_states": bool(result.states),
        "any_thresholds": bool(thresholds_by_state),
    }


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
        "amount": _guess_amount(headers),
        "transaction_id": find("order id", "order number", "order #", "transaction id", "order_id"),
        "marketplace": find("marketplace", "channel", "facilitat"),
    }


def _guess_amount(headers: list) -> str:
    """Best-guess amount column, preferring a net-of-discount/refund figure.

    A "Gross sales" or "Total sales" column is a tempting first match (Shopify
    exports list Gross before Net), but it overstates discounted orders and can
    hide refund rows entirely -- a mapping mistake found during a real client
    import (see reports/nexus-tracker/test-analysis-2026-07-21.md, Issue 2).
    Prefer anything with "net" in the name; only fall back to a gross/total
    figure if there's no net-labeled column at all.
    """
    lowered = [h.lower() for h in headers]
    needles = ("total", "amount", "sales", "price", "revenue")
    for header, low in zip(headers, lowered):
        if "net" in low and any(n in low for n in needles):
            return header
    for header, low in zip(headers, lowered):
        if any(n in low for n in needles) and "gross" not in low:
            return header
    for header, low in zip(headers, lowered):
        if any(n in low for n in needles):
            return header
    return ""


def main() -> None:
    """Run the local web app. Session 8 adds a friendlier one-click launcher."""
    app = create_app()
    # threaded=False: one shared database connection, used from one thread.
    app.run(host="127.0.0.1", port=5000, debug=False, threaded=False)


if __name__ == "__main__":
    main()
