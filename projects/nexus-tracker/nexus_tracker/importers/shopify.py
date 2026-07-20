"""Native Shopify connection.

Connects to a client's Shopify store with a per-store custom app token (stored
encrypted, see nexus_tracker.crypto), pulls orders with their destination and
amount, backfills the trailing 12+ months, and maps them into the ledger through
the data-access layer (storage.py). A bad or expired token produces a plain
message telling the user exactly what to do.

This uses per-store custom app tokens, NOT the Shopify OAuth app flow, which is
deferred (PROJECT_SPEC.md section 7).

Scope notes (flagged for review):
    - Amount per order = total_price - total_tax (sales after discounts,
      including shipping, excluding the sales tax collected). The exact measure
      states use varies; this is a defensible, slightly conservative default.
    - marketplace_facilitated is set False. A direct Shopify store isn't a
      marketplace facilitator; Amazon-style marketplace sales come in via CSV.
    - Refunds are NOT yet netted from Shopify (orders only). A client with heavy
      returns will read slightly high -- the safe direction for a tool that only
      flags exposure for review. Refund handling is a documented follow-up.

The HTTP layer is injectable (`get=`), so the mapping/pagination/error logic is
tested against canned responses without a live store or the network.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import date
from decimal import Decimal, InvalidOperation
from typing import Callable, Iterator, List, Optional, Tuple

from .. import crypto, us_states
from ..ledger import Transaction

SOURCE = "shopify"
API_VERSION = "2024-07"
SETTINGS_KEY = "shopify"          # where creds live inside client.settings
DEFAULT_BACKFILL_MONTHS = 13      # trailing 12+ months, with headroom
_PAGE_LIMIT = 250
_ORDER_FIELDS = "id,created_at,total_price,total_tax,shipping_address,billing_address"


class ShopifyError(Exception):
    """A Shopify problem, described so a non-technical user knows what to do."""


class ShopifyAuthError(ShopifyError):
    """The token was rejected (wrong or expired)."""


@dataclass(frozen=True)
class HttpResponse:
    status_code: int
    headers: dict
    body: dict


@dataclass(frozen=True)
class SkippedOrder:
    order_id: object
    reason: str


@dataclass(frozen=True)
class ShopifyImportReport:
    fetched: int
    parsed: int
    inserted: int
    unchanged: int
    conflicts: tuple
    skipped: tuple      # SkippedOrder

    @property
    def conflict_count(self) -> int:
        return len(self.conflicts)

    @property
    def skipped_count(self) -> int:
        return len(self.skipped)


class _SkipOrder(Exception):
    """One order can't be mapped; the message says why."""


# --------------------------------------------------------------------------- #
# API client                                                                  #
# --------------------------------------------------------------------------- #

def _default_get(url: str, headers: dict, params: Optional[dict]) -> HttpResponse:
    import requests  # imported lazily so tests never need the network stack

    response = requests.get(url, headers=headers, params=params, timeout=30)
    try:
        body = response.json()
    except ValueError:
        body = {}
    return HttpResponse(response.status_code, dict(response.headers), body)


class ShopifyClient:
    """Reads orders from one Shopify store. Inject `get` in tests."""

    def __init__(
        self,
        shop_domain: str,
        token: str,
        api_version: str = API_VERSION,
        get: Callable[..., HttpResponse] = _default_get,
    ):
        self.shop_domain = shop_domain.strip()
        self._token = token
        self._api_version = api_version
        self._get = get

    def iter_orders(self, created_at_min: str) -> Iterator[dict]:
        """Yield order dicts created on/after created_at_min, following pages."""
        url = f"https://{self.shop_domain}/admin/api/{self._api_version}/orders.json"
        headers = {"X-Shopify-Access-Token": self._token, "Accept": "application/json"}
        params: Optional[dict] = {
            "status": "any",
            "limit": _PAGE_LIMIT,
            "created_at_min": created_at_min,
            "fields": _ORDER_FIELDS,
        }
        while url:
            response = self._get(url, headers, params)
            self._raise_for_status(response)
            for order in response.body.get("orders", []):
                yield order
            url = _next_page_url(response.headers)
            params = None  # the cursor carries all state in the next URL

    def _raise_for_status(self, response: HttpResponse) -> None:
        if response.status_code in (401, 403):
            raise ShopifyAuthError(
                f"Shopify rejected the access token for {self.shop_domain}. "
                "It may be wrong or expired.\n"
                "In Shopify: Settings -> Apps and sales channels -> Develop apps "
                "-> your app -> API credentials, then copy a fresh Admin API "
                "access token and paste it here."
            )
        if response.status_code == 404:
            raise ShopifyError(
                f"Couldn't find a Shopify store at {self.shop_domain}. Check the "
                "store address (it should look like your-store.myshopify.com)."
            )
        if response.status_code == 429:
            raise ShopifyError(
                "Shopify is rate-limiting the connection right now. Please wait a "
                "minute and try the sync again."
            )
        if response.status_code >= 400:
            raise ShopifyError(
                f"Shopify returned an unexpected error (code {response.status_code}). "
                "Please try again in a little while."
            )


def _next_page_url(headers: dict) -> Optional[str]:
    """Parse Shopify's Link header for the rel=next cursor URL, if any."""
    link = headers.get("Link") or headers.get("link")
    if not link:
        return None
    for part in link.split(","):
        segments = part.split(";")
        if len(segments) < 2:
            continue
        url = segments[0].strip().strip("<>")
        if any(seg.strip() == 'rel="next"' for seg in segments[1:]):
            return url
    return None


# --------------------------------------------------------------------------- #
# Credentials (encrypted, in the client's settings)                           #
# --------------------------------------------------------------------------- #

def save_credentials(store, client_id: str, shop_domain: str, token: str) -> None:
    client = store.get_client(client_id)
    if client is None:
        raise ShopifyError(f"No client with id '{client_id}'.")
    settings = dict(client.settings or {})
    settings[SETTINGS_KEY] = {
        "shop_domain": shop_domain.strip(),
        "token_encrypted": crypto.encrypt(token.strip()),
    }
    store.update_client_settings(client_id, settings)


def connection(store, client_id: str) -> Optional[dict]:
    """The saved shop domain for a client (no token), or None if not connected."""
    client = store.get_client(client_id)
    saved = (client.settings or {}).get(SETTINGS_KEY) if client else None
    if not saved:
        return None
    return {"shop_domain": saved.get("shop_domain", "")}


def _load_credentials(store, client_id: str) -> Tuple[str, str]:
    client = store.get_client(client_id)
    saved = (client.settings or {}).get(SETTINGS_KEY) if client else None
    if not saved:
        raise ShopifyError("No Shopify store is connected for this client yet.")
    return saved["shop_domain"], crypto.decrypt(saved["token_encrypted"])


# --------------------------------------------------------------------------- #
# Backfill / import                                                           #
# --------------------------------------------------------------------------- #

def import_shopify(
    store,
    client_id: str,
    months: int = DEFAULT_BACKFILL_MONTHS,
    as_of: Optional[date] = None,
    client: Optional[ShopifyClient] = None,
) -> ShopifyImportReport:
    """Pull the trailing `months` of orders and write them into the ledger.

    `client` can be injected for testing; otherwise it is built from the stored,
    encrypted credentials.
    """
    if as_of is None:
        as_of = date.today()
    if client is None:
        shop_domain, token = _load_credentials(store, client_id)
        client = ShopifyClient(shop_domain, token)

    created_at_min = _months_before(as_of, months).isoformat()

    transactions: List[Transaction] = []
    skipped: List[SkippedOrder] = []
    fetched = 0
    for order in client.iter_orders(created_at_min):
        fetched += 1
        try:
            transactions.append(_map_order(order, client_id))
        except _SkipOrder as skip:
            skipped.append(SkippedOrder(order_id=order.get("id"), reason=str(skip)))

    result = store.add_transactions(transactions)
    return ShopifyImportReport(
        fetched=fetched,
        parsed=len(transactions),
        inserted=result.inserted,
        unchanged=result.unchanged,
        conflicts=result.conflicts,
        skipped=tuple(skipped),
    )


def _map_order(order: dict, client_id: str) -> Transaction:
    address = order.get("shipping_address") or order.get("billing_address")
    if not address:
        raise _SkipOrder("no shipping or billing address to source the sale to a state")

    state = us_states.to_code(address.get("province_code") or address.get("province") or "")
    if state is None:
        raise _SkipOrder(f"unrecognized state {address.get('province')!r}")

    order_id = order.get("id")
    if order_id is None:
        raise _SkipOrder("missing order id")

    created = order.get("created_at") or ""
    order_date = created[:10]  # date part of the ISO timestamp (store-local)
    if len(order_date) != 10:
        raise _SkipOrder(f"unreadable order date {created!r}")

    try:
        total = Decimal(str(order.get("total_price", "0")))
        tax = Decimal(str(order.get("total_tax", "0")))
    except InvalidOperation:
        raise _SkipOrder("unreadable amount")
    amount_cents = int(((total - tax) * 100).quantize(Decimal("1")))

    return Transaction(
        transaction_id=str(order_id),
        client_id=client_id,
        date=order_date,
        destination_state=state,
        amount_cents=amount_cents,
        source=SOURCE,
        marketplace_facilitated=False,
        is_refund=False,
    )


def _months_before(anchor: date, months: int) -> date:
    year = anchor.year
    month = anchor.month - months
    while month <= 0:
        month += 12
        year -= 1
    day = min(anchor.day, _days_in_month(year, month))
    return date(year, month, day)


def _days_in_month(year: int, month: int) -> int:
    if month == 12:
        nxt = date(year + 1, 1, 1)
    else:
        nxt = date(year, month + 1, 1)
    return (nxt - date(year, month, 1)).days
