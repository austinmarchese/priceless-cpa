"""Reads the state threshold config into typed shapes, and validates it.

The firm's real IP lives in config/state_thresholds.json, a human-editable file
(NOT logic buried in code -- it changes a few times a year). This module loads
that file, checks it is well-formed, and hands back one StateThreshold per state.

What it does NOT do: decide whether a client has crossed a threshold. That
comparison against real totals is the nexus engine's job (Session 2). This module
only reads and validates the structure.

See PROJECT_SPEC.md section 5. Reading this config file is not "ledger storage",
so it does not go through storage.py -- it is the firm's rules, not client data.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Optional


# The four ways the dollar and transaction thresholds can combine.
THRESHOLD_LOGIC_VALUES = ("dollar_only", "transaction_only", "and", "either")

# The window a state measures totals over.
MEASUREMENT_PERIOD_VALUES = (
    "prior_calendar_year",
    "current_calendar_year",
    "trailing_12_months",
)

# config/state_thresholds.json, resolved relative to this file (project root).
DEFAULT_CONFIG_PATH = (
    Path(__file__).resolve().parent.parent / "config" / "state_thresholds.json"
)


class ThresholdConfigError(Exception):
    """The threshold config file is missing or malformed.

    The message is written for a person to read and fix, per PROJECT_SPEC.md
    section 8 (plain-English errors, no stack traces in the user's face).
    """


@dataclass(frozen=True)
class StateThreshold:
    """One state's economic nexus threshold rule."""

    state: str                          # two-letter US postal code, e.g. "CA"
    dollar_threshold: Optional[int]     # in whole US dollars (e.g. 100000), or None
    transaction_threshold: Optional[int]  # number of transactions, or None
    threshold_logic: str                # one of THRESHOLD_LOGIC_VALUES
    measurement_period: str             # one of MEASUREMENT_PERIOD_VALUES
    marketplace_counts: bool            # do marketplace-facilitated sales count here?


def load_thresholds(path: Path = DEFAULT_CONFIG_PATH) -> dict:
    """Load and validate the threshold config.

    Returns a dict mapping state code -> StateThreshold. Keys starting with "_"
    (like "_comment") are ignored, so the file can carry notes. Raises
    ThresholdConfigError with a plain-English message if anything is wrong.
    """
    path = Path(path)

    if not path.exists():
        raise ThresholdConfigError(
            f"Could not find the threshold config file at:\n  {path}\n"
            "Create it (see config/state_thresholds.example.json for the shape)."
        )

    try:
        raw = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        raise ThresholdConfigError(
            f"The threshold config file is not valid JSON:\n  {path}\n"
            f"Problem near line {exc.lineno}, column {exc.colno}: {exc.msg}.\n"
            "A common cause is a missing comma or a trailing comma."
        ) from exc

    if not isinstance(raw, dict):
        raise ThresholdConfigError(
            f"The threshold config file must be a JSON object of states, "
            f"but the top level is a {type(raw).__name__}.\n  {path}"
        )

    thresholds: dict = {}
    for key, entry in raw.items():
        if key.startswith("_"):  # notes like "_comment"
            continue

        state = _normalize_state(key, path)
        if state in thresholds:
            raise ThresholdConfigError(
                f"State '{state}' appears more than once in the config.\n  {path}"
            )
        thresholds[state] = _parse_entry(state, entry, path)

    return thresholds


# --------------------------------------------------------------------------- #
# Validation helpers                                                          #
# --------------------------------------------------------------------------- #

def _normalize_state(key: str, path: Path) -> str:
    state = str(key).strip().upper()
    if len(state) != 2 or not state.isalpha():
        raise ThresholdConfigError(
            f"'{key}' is not a valid state key. Use the two-letter postal code, "
            f"e.g. 'CA' or 'DC'.\n  {path}"
        )
    return state


def _parse_entry(state: str, entry: object, path: Path) -> StateThreshold:
    if not isinstance(entry, dict):
        raise ThresholdConfigError(
            f"The entry for '{state}' must be an object with the threshold "
            f"fields, but it is a {type(entry).__name__}.\n  {path}"
        )

    required = (
        "dollar_threshold",
        "transaction_threshold",
        "threshold_logic",
        "measurement_period",
        "marketplace_counts",
    )
    missing = [f for f in required if f not in entry]
    if missing:
        raise ThresholdConfigError(
            f"The entry for '{state}' is missing: {', '.join(missing)}.\n"
            "See config/state_thresholds.example.json for the shape.\n"
            f"  {path}"
        )

    dollar = _as_optional_int(entry["dollar_threshold"], state, "dollar_threshold", path)
    txns = _as_optional_int(entry["transaction_threshold"], state, "transaction_threshold", path)

    logic = str(entry["threshold_logic"]).strip().lower()
    if logic not in THRESHOLD_LOGIC_VALUES:
        raise ThresholdConfigError(
            f"'{state}' has threshold_logic '{entry['threshold_logic']}'. "
            f"It must be one of: {', '.join(THRESHOLD_LOGIC_VALUES)}.\n  {path}"
        )

    period = str(entry["measurement_period"]).strip().lower()
    if period not in MEASUREMENT_PERIOD_VALUES:
        raise ThresholdConfigError(
            f"'{state}' has measurement_period '{entry['measurement_period']}'. "
            f"It must be one of: {', '.join(MEASUREMENT_PERIOD_VALUES)}.\n  {path}"
        )

    marketplace = entry["marketplace_counts"]
    if not isinstance(marketplace, bool):
        raise ThresholdConfigError(
            f"'{state}' has marketplace_counts {marketplace!r}. "
            f"It must be true or false.\n  {path}"
        )

    _check_logic_has_its_thresholds(state, logic, dollar, txns, path)

    return StateThreshold(
        state=state,
        dollar_threshold=dollar,
        transaction_threshold=txns,
        threshold_logic=logic,
        measurement_period=period,
        marketplace_counts=marketplace,
    )


def _as_optional_int(value: object, state: str, field: str, path: Path) -> Optional[int]:
    if value is None:
        return None
    # Accept whole numbers written as 100000 or 100000.0; reject anything else.
    # bool is a subclass of int in Python, so exclude it explicitly.
    if isinstance(value, bool):
        pass  # falls through to the error below
    elif isinstance(value, int):
        return value
    elif isinstance(value, float) and value.is_integer():
        return int(value)
    raise ThresholdConfigError(
        f"'{state}' has {field} = {value!r}. It must be a whole number "
        f"(e.g. 100000) or null.\n  {path}"
    )


def _check_logic_has_its_thresholds(
    state: str, logic: str, dollar: Optional[int], txns: Optional[int], path: Path
) -> None:
    """A rule must actually carry the numbers its logic depends on."""
    needs_dollar = logic in ("dollar_only", "and", "either")
    needs_txns = logic in ("transaction_only", "and", "either")

    if needs_dollar and dollar is None:
        raise ThresholdConfigError(
            f"'{state}' uses threshold_logic '{logic}' but has no "
            "dollar_threshold. Set a dollar amount or change the logic.\n"
            f"  {path}"
        )
    if needs_txns and txns is None:
        raise ThresholdConfigError(
            f"'{state}' uses threshold_logic '{logic}' but has no "
            "transaction_threshold. Set a count or change the logic.\n"
            f"  {path}"
        )
