"""Reads and applies the state threshold config.

The firm's real IP lives in config/state_thresholds.json, a human-editable file
(NOT logic buried in code -- it changes a few times a year). This module loads
that file and answers questions like "given these totals for a state, is the
threshold crossed?" using each state's rules:

    dollar_threshold, transaction_threshold, threshold_logic
    ("dollar_only" | "transaction_only" | "and" | "either"),
    measurement_period, marketplace_counts.

See PROJECT_SPEC.md section 5.

Structure to read the config is built in Session 1; applying it (the crossing
logic) is used by the engine in Session 2.
"""

# TODO(Session 1): load and validate config/state_thresholds.json into a usable
# in-memory shape.
# TODO(Session 2): apply a state's rule to per-state totals to decide crossings.
