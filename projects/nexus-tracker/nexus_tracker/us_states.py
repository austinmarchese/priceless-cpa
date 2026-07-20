"""US state codes and names, so imports can accept either 'CA' or 'California'.

The ledger stores the two-letter postal code (including 'DC'). This module maps
a messy human value onto that code, or reports that it can't.
"""

from __future__ import annotations

from typing import Optional

# 50 states plus the District of Columbia (PROJECT_SPEC.md covers states + DC).
STATE_CODES = frozenset({
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
    "DC",
})

_NAME_TO_CODE = {
    "alabama": "AL", "alaska": "AK", "arizona": "AZ", "arkansas": "AR",
    "california": "CA", "colorado": "CO", "connecticut": "CT", "delaware": "DE",
    "florida": "FL", "georgia": "GA", "hawaii": "HI", "idaho": "ID",
    "illinois": "IL", "indiana": "IN", "iowa": "IA", "kansas": "KS",
    "kentucky": "KY", "louisiana": "LA", "maine": "ME", "maryland": "MD",
    "massachusetts": "MA", "michigan": "MI", "minnesota": "MN",
    "mississippi": "MS", "missouri": "MO", "montana": "MT", "nebraska": "NE",
    "nevada": "NV", "new hampshire": "NH", "new jersey": "NJ",
    "new mexico": "NM", "new york": "NY", "north carolina": "NC",
    "north dakota": "ND", "ohio": "OH", "oklahoma": "OK", "oregon": "OR",
    "pennsylvania": "PA", "rhode island": "RI", "south carolina": "SC",
    "south dakota": "SD", "tennessee": "TN", "texas": "TX", "utah": "UT",
    "vermont": "VT", "virginia": "VA", "washington": "WA",
    "west virginia": "WV", "wisconsin": "WI", "wyoming": "WY",
    "district of columbia": "DC", "washington dc": "DC", "washington d.c.": "DC",
}


# Reverse lookup for display (first name wins, e.g. DC -> "District Of Columbia").
_CODE_TO_NAME = {}
for _name, _code in _NAME_TO_CODE.items():
    _CODE_TO_NAME.setdefault(_code, _name.title())


def name_for(code: str) -> str:
    """A human-readable state name for a code, or the code itself if unknown."""
    return _CODE_TO_NAME.get(code, code)


def to_code(value: str) -> Optional[str]:
    """Normalize a state value to its two-letter code, or None if unrecognized.

    Accepts a code ('ca', 'CA') or a full name ('California'). Whitespace,
    case, and a trailing period on 'D.C.' are tolerated.
    """
    if value is None:
        return None
    cleaned = value.strip()
    if not cleaned:
        return None

    upper = cleaned.upper()
    if upper in STATE_CODES:
        return upper

    name = cleaned.lower().replace(".", "").replace("  ", " ")
    return _NAME_TO_CODE.get(name)
