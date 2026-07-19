"""The local web app the user opens in a browser.

A simple interface for accountants (not software professionals): select a client,
import data or sync Shopify, and view the exposure dashboard. Everything is
plainly labeled, with obvious buttons and no jargon.

Like everything else, it reads and writes only through the data-access layer
(storage.py); it never touches storage itself.
"""
