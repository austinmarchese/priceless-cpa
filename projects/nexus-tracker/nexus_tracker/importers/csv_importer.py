"""CSV importer with column mapping.

Lets the user point at a CSV export (Amazon, WooCommerce, Stripe, QuickBooks,
etc.), say which column is the date, the destination state, and the amount (and
optionally the order id and a marketplace flag), and turns each row into a
normalized ledger transaction. Rows it can't read are collected and reported in
plain English -- one bad row never stops the rest of the import.

Like every data source, it WRITES INTO the ledger through the data-access layer
(storage.py). It never touches the database directly.

Assumptions (documented so they're reviewable):
    - One row = one transaction. If an export is line-item level (several rows
      per order) map the order-id column: the repeated ids surface as conflicts
      for review rather than silently miscounting.
    - A negative amount (or one in (parentheses)) is imported as a refund -- it
      reduces running totals -- matching how the ledger represents refunds.
    - Slash/dash dates are read US-style (month/day/year), since this is a US
      sales-tax tool. Pass date_format to override.
    - If no order-id column is mapped, rows are identified by their position in
      the file. That is enough to re-import the SAME file safely, but mapping a
      real order-id column is what makes future imports de-duplicate reliably.
"""

from __future__ import annotations

import csv
import io
from dataclasses import dataclass
from datetime import datetime
from decimal import Decimal, InvalidOperation
from typing import List, Optional, Tuple

from .. import us_states
from ..ledger import Transaction

SOURCE = "csv"

# Values (lowercased) that mean "true" in a yes/no column.
_TRUE_TOKENS = frozenset({"1", "true", "t", "yes", "y", "x", "amazon", "marketplace"})

# Date formats tried in order. Numeric slash/dash dates are read month-first
# (US style). Numeric formats are matched against the date with any time stripped;
# month-name formats are matched against the whole value (they contain spaces).
_NUMERIC_DATE_FORMATS = (
    "%Y-%m-%d", "%Y/%m/%d",
    "%m/%d/%Y", "%m/%d/%y", "%m-%d-%Y", "%m-%d-%y",
)
_NAME_DATE_FORMATS = ("%B %d, %Y", "%b %d, %Y", "%d %b %Y", "%d %B %Y")


class CsvImportError(Exception):
    """A whole-file problem (bad encoding, no columns, a mapping that names a
    column the file doesn't have). Written for a person to read."""


class _RowProblem(Exception):
    """A single row can't be read; the message explains why, in plain English."""


@dataclass(frozen=True)
class ColumnMapping:
    """Which CSV column feeds which ledger field."""

    date: str
    state: str
    amount: str
    transaction_id: Optional[str] = None
    transaction_count: Optional[str] = None
    marketplace: Optional[str] = None      # a column that flags marketplace sales
    is_refund: Optional[str] = None        # a column that flags refunds
    marketplace_default: bool = False      # used when no marketplace column is chosen
    date_format: Optional[str] = None      # strptime override for unusual date formats


@dataclass(frozen=True)
class RowError:
    """A row that couldn't be read, and why."""

    row_number: int   # line in the file (header is line 1), matching a spreadsheet
    problem: str


@dataclass(frozen=True)
class ParseResult:
    transactions: Tuple[Transaction, ...]
    errors: Tuple[RowError, ...]
    total_rows: int
    id_column_used: bool


@dataclass(frozen=True)
class ImportReport:
    """What happened, combined from parsing and from writing to the ledger."""

    total_rows: int
    parsed: int
    inserted: int
    unchanged: int
    conflicts: tuple          # storage.TransactionConflict, for review
    errors: tuple             # RowError, rows we couldn't read
    id_column_used: bool

    @property
    def error_count(self) -> int:
        return len(self.errors)

    @property
    def conflict_count(self) -> int:
        return len(self.conflicts)


# --------------------------------------------------------------------------- #
# Public API                                                                  #
# --------------------------------------------------------------------------- #

def decode_bytes(raw: bytes) -> str:
    """Turn uploaded bytes into text, tolerating Excel's BOM and Windows files."""
    for encoding in ("utf-8-sig", "cp1252"):
        try:
            return raw.decode(encoding)
        except UnicodeDecodeError:
            continue
    raise CsvImportError(
        "We couldn't read this file as text. Please re-export it as a CSV "
        "(UTF-8) and try again."
    )


def read_headers_and_preview(
    text: str, max_rows: int = 5
) -> Tuple[List[str], List[List[str]]]:
    """The column names and first few rows, so the user can map columns."""
    reader = _make_reader(text)
    headers = reader.fieldnames or []
    if not headers:
        raise CsvImportError(
            "This file doesn't seem to have a header row of column names. "
            "Please make sure the first row names the columns."
        )
    preview = []
    for row in reader:
        preview.append([(row.get(h) or "").strip() for h in headers])
        if len(preview) >= max_rows:
            break
    return list(headers), preview


def parse_csv(text: str, mapping: ColumnMapping, client_id: str) -> ParseResult:
    """Turn CSV text into transactions plus a list of rows that couldn't be read."""
    reader = _make_reader(text)
    headers = reader.fieldnames or []
    if not headers:
        raise CsvImportError(
            "This file doesn't seem to have a header row of column names."
        )
    _check_mapped_columns_exist(mapping, headers)

    transactions: List[Transaction] = []
    errors: List[RowError] = []
    total = 0
    for index, row in enumerate(reader):
        total += 1
        line_number = index + 2  # header is line 1
        try:
            transactions.append(_build_transaction(row, mapping, client_id, line_number))
        except _RowProblem as problem:
            errors.append(RowError(row_number=line_number, problem=str(problem)))

    return ParseResult(
        transactions=tuple(transactions),
        errors=tuple(errors),
        total_rows=total,
        id_column_used=mapping.transaction_id is not None,
    )


def import_csv(store, client_id: str, text: str, mapping: ColumnMapping) -> ImportReport:
    """Parse the CSV and write the good rows into the ledger through storage.

    `store` is a nexus_tracker.storage.Storage. Writing goes through it, so the
    importer never touches the database directly.
    """
    parsed = parse_csv(text, mapping, client_id)
    result = store.add_transactions(parsed.transactions)
    return ImportReport(
        total_rows=parsed.total_rows,
        parsed=len(parsed.transactions),
        inserted=result.inserted,
        unchanged=result.unchanged,
        conflicts=result.conflicts,
        errors=parsed.errors,
        id_column_used=parsed.id_column_used,
    )


# --------------------------------------------------------------------------- #
# Row building                                                                #
# --------------------------------------------------------------------------- #

def _build_transaction(row, mapping: ColumnMapping, client_id: str, line_number: int) -> Transaction:
    date_iso = _field_date(row, mapping)
    state = _field_state(row, mapping)
    amount_cents, negative = _field_amount(row, mapping)

    is_refund = negative or _column_true(row, mapping.is_refund)
    marketplace = (
        _column_true(row, mapping.marketplace)
        if mapping.marketplace
        else mapping.marketplace_default
    )
    transaction_count = _field_count(row, mapping)
    transaction_id = _field_transaction_id(row, mapping, line_number)

    return Transaction(
        transaction_id=transaction_id,
        client_id=client_id,
        date=date_iso,
        destination_state=state,
        amount_cents=amount_cents,
        source=SOURCE,
        transaction_count=transaction_count,
        marketplace_facilitated=marketplace,
        is_refund=is_refund,
    )


def _field_date(row, mapping: ColumnMapping) -> str:
    raw = _cell(row, mapping.date)
    if not raw:
        raise _RowProblem("Missing date.")
    if mapping.date_format:
        try:
            return datetime.strptime(raw, mapping.date_format).date().isoformat()
        except ValueError:
            raise _RowProblem(f"Couldn't read the date {raw!r} with the given format.")
    iso = _parse_date(raw)
    if iso is None:
        raise _RowProblem(f"Couldn't read the date {raw!r}.")
    return iso


def _field_state(row, mapping: ColumnMapping) -> str:
    raw = _cell(row, mapping.state)
    if not raw:
        raise _RowProblem("Missing state.")
    code = us_states.to_code(raw)
    if code is None:
        raise _RowProblem(
            f"Unrecognized state {raw!r}. Use a two-letter code (e.g. CA) or a "
            "full state name."
        )
    return code


def _field_amount(row, mapping: ColumnMapping) -> Tuple[int, bool]:
    raw = _cell(row, mapping.amount)
    if not raw:
        raise _RowProblem("Missing amount.")
    try:
        return _parse_amount(raw)
    except ValueError:
        raise _RowProblem(f"Couldn't read the amount {raw!r}.")


def _field_count(row, mapping: ColumnMapping) -> int:
    if not mapping.transaction_count:
        return 1
    raw = _cell(row, mapping.transaction_count)
    if not raw:
        return 1
    try:
        value = int(raw)
    except ValueError:
        raise _RowProblem(f"Couldn't read the transaction count {raw!r}.")
    if value < 0:
        raise _RowProblem(f"Transaction count can't be negative ({raw!r}).")
    return value


def _field_transaction_id(row, mapping: ColumnMapping, line_number: int) -> str:
    if not mapping.transaction_id:
        return f"row-{line_number}"  # position-based; see module docstring
    raw = _cell(row, mapping.transaction_id)
    if not raw:
        raise _RowProblem("Missing order id.")
    return raw


# --------------------------------------------------------------------------- #
# Small parsers / helpers                                                     #
# --------------------------------------------------------------------------- #

def _parse_date(raw: str) -> Optional[str]:
    """Return an ISO 'YYYY-MM-DD' string, or None if no known format matches."""
    head = raw.split("T")[0].split(" ")[0]  # tolerate ISO datetimes / trailing time
    for fmt in _NUMERIC_DATE_FORMATS:
        try:
            return datetime.strptime(head, fmt).date().isoformat()
        except ValueError:
            continue
    for fmt in _NAME_DATE_FORMATS:
        try:
            return datetime.strptime(raw.strip(), fmt).date().isoformat()
        except ValueError:
            continue
    return None


def _parse_amount(raw: str) -> Tuple[int, bool]:
    """Return (cents_magnitude, is_negative). Handles $, commas, and (parentheses)."""
    s = raw.strip()
    if not s:
        raise ValueError("empty amount")
    negative = False
    if s.startswith("(") and s.endswith(")"):
        negative = True
        s = s[1:-1].strip()
    s = s.replace("$", "").replace(",", "").replace(" ", "")
    if s.endswith("-"):  # some exports put the minus at the end
        negative = True
        s = s[:-1]
    try:
        value = Decimal(s)
    except InvalidOperation:
        raise ValueError(f"not a number: {raw!r}")
    if value < 0:
        negative = True
        value = -value
    cents = int((value * 100).quantize(Decimal("1")))
    return cents, negative


def _column_true(row, column: Optional[str]) -> bool:
    if not column:
        return False
    return _cell(row, column).strip().lower() in _TRUE_TOKENS


def _cell(row, column: str) -> str:
    value = row.get(column)
    return value.strip() if isinstance(value, str) else ""


def _make_reader(text: str) -> csv.DictReader:
    dialect = _sniff_dialect(text)
    return csv.DictReader(io.StringIO(text), dialect=dialect)


def _sniff_dialect(text: str):
    sample = text[:4096]
    try:
        return csv.Sniffer().sniff(sample, delimiters=",;\t|")
    except csv.Error:
        return csv.excel  # default comma-separated


def _check_mapped_columns_exist(mapping: ColumnMapping, headers: List[str]) -> None:
    header_set = set(headers)
    named = {
        "date": mapping.date,
        "state": mapping.state,
        "amount": mapping.amount,
        "order id": mapping.transaction_id,
        "transaction count": mapping.transaction_count,
        "marketplace": mapping.marketplace,
        "refund": mapping.is_refund,
    }
    for role, column in named.items():
        if column and column not in header_set:
            raise CsvImportError(
                f"The column chosen for {role} ({column!r}) isn't in this file. "
                "Please map the columns again."
            )
