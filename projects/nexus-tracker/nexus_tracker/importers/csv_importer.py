"""CSV importer with column mapping.

Lets the user point at a CSV export (Amazon, WooCommerce, Stripe, QBO, etc.) and
pick which column is the destination state, the amount, the date, and which flags
a marketplace-facilitated sale. Maps each row into the normalized ledger and
writes it through the data-access layer (storage.py).

When rows can't be read, it reports them in plain English so a non-technical user
knows exactly what to fix -- it does not fail silently or crash on one bad row.

This comes before the Shopify connection because CSV export covers Amazon, Woo,
Stripe, and QBO in one path.

Built in Session 5.
"""

# TODO(Session 5): implement CSV loading, user column mapping, mapping into the
# ledger, and a clear plain-English report of any unreadable rows.
