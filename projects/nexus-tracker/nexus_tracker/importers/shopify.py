"""Native Shopify connection.

Connects to a client's Shopify store using a per-store custom app token (stored
encrypted, per client). Pulls orders with their destination and amount, backfills
the trailing 12+ months, and maps them into the normalized ledger through the
data-access layer (storage.py).

If a token is bad or expired, it shows a plain-English message telling the user
what to do (where to get a new token and where to paste it) -- no stack traces.

Note (PROJECT_SPEC.md section 7): this uses per-store custom app tokens, NOT the
Shopify OAuth app flow, which is deferred.

Built in Session 6.
"""

# TODO(Session 6): implement token storage (encrypted), order pull with
# destination + amount, trailing 12+ month backfill, mapping into the ledger,
# and friendly handling of a bad/expired token.
