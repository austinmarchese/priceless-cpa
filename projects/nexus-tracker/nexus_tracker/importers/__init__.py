"""Data-source importers.

Each importer knows the raw shape of ONE data source and maps it into the
normalized ledger by writing through the data-access layer (storage.py). No
importer touches the database directly, and no other part of the app knows a
source's raw shape -- that knowledge stays inside its importer.

    csv_importer.py  -- generic CSV with user-chosen column mapping (Session 5)
    shopify.py       -- native Shopify connection (Session 6)
"""
