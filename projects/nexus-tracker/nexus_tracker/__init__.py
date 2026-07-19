"""Sales Tax Nexus Tracker.

An internal tool for Priceless CPA that tracks economic sales tax nexus
*exposure* for e-commerce clients. It reports facts (how much a client sold into
each state, and whether that crossed the state's threshold). It never concludes
that a client "has nexus" -- a person at the firm makes that call.

See PROJECT_SPEC.md for the full design. The one rule that shapes the whole
package: everything reads from a single normalized transaction ledger, and all
storage goes through one data-access layer (nexus_tracker/storage.py).
"""

__version__ = "0.1.0"  # Session 1: ledger + client shapes and threshold config loader.
