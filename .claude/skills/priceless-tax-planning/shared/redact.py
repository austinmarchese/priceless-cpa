#!/usr/bin/env python3
"""
Priceless CPA - Tax Document Redaction Tool

Permanently removes SSNs, EINs, account numbers, phone numbers, email
addresses, and client names/addresses from PDFs. Strips all metadata.
Works on both text-based and scanned (image) PDFs including rotated pages.

Usage:
    python redact.py                   # interactive mode
    python redact.py file.pdf          # redact single file
    python redact.py /path/to/folder   # redact all PDFs in a folder

Client list:
    Place a clients.txt file in the same folder as the PDFs.
    One name or address per line. Lines starting with # are ignored.
    Reversed name format (Last, First) is generated automatically.

Requirements:
    pip install pymupdf pytesseract Pillow rapidfuzz

For scanned PDFs (OCR):
    Install Tesseract from https://github.com/UB-Mannheim/tesseract/wiki
    It's found automatically if it's on your PATH or in a standard Windows
    install location. If you installed it somewhere else, set an environment
    variable before running, e.g.: set TESSERACT_PATH=C:/path/to/tesseract.exe
"""

import fitz  # pymupdf
import re
import os
import sys
from pathlib import Path
from datetime import datetime

# ── OCR setup ───────────────────────────────────────────────────────────────
try:
    import pytesseract
    from PIL import Image
    import io
    import shutil as _shutil

    def _find_tesseract():
        """Locate the Tesseract binary without hardcoding a path to one machine.

        Checked in order: a TESSERACT_PATH env var override, PATH, then the
        common Windows install locations. Returns None if it isn't found
        anywhere -- OCR_AVAILABLE below reflects that honestly instead of
        assuming it'll work.
        """
        override = os.environ.get("TESSERACT_PATH")
        if override and os.path.exists(override):
            return override
        found = _shutil.which("tesseract")
        if found:
            return found
        candidates = [
            os.path.expandvars(r"%ProgramFiles%\Tesseract-OCR\tesseract.exe"),
            os.path.expandvars(r"%ProgramFiles(x86)%\Tesseract-OCR\tesseract.exe"),
            os.path.expandvars(r"%LOCALAPPDATA%\Programs\Tesseract-OCR\tesseract.exe"),
        ]
        return next((c for c in candidates if os.path.exists(c)), None)

    _TESSERACT_PATH = _find_tesseract()
    if _TESSERACT_PATH:
        pytesseract.pytesseract.tesseract_cmd = _TESSERACT_PATH
    OCR_AVAILABLE = _TESSERACT_PATH is not None
except ImportError:
    OCR_AVAILABLE = False

# ── Fuzzy matching setup ─────────────────────────────────────────────────────
try:
    from rapidfuzz import fuzz
    FUZZY_AVAILABLE = True
except ImportError:
    FUZZY_AVAILABLE = False

FUZZY_THRESHOLD = 92  # raised to reduce false positives

# ── PII patterns ─────────────────────────────────────────────────────────────
# Body text patterns — separators required to avoid matching financial figures
PATTERNS = {
    "SSN":       re.compile(r"\b\d{3}[- ]\d{2}[- ]\d{4}\b"),
    "EIN":       re.compile(r"\b\d{2}-\d{7}\b"),
    # State EIN: space or no separator, but only when preceded by a known EIN label
    "EIN_state": re.compile(r"(?i)(?:fein|f\.e\.i\.n|federal\s+(?:employer\s+)?(?:id|identification)|employer\s+id(?:entification)?(?:\s+number)?|ein|tax\s+id)[:\s#.]*(\d{2}\s?\d{7})\b"),
    "Phone":     re.compile(r"\b(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}\b"),
    "Email":     re.compile(r"\b[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}\b"),
    "Account":   re.compile(r"(?i)(?:account|acct|routing|aba|bank)[^\d]{0,15}(\d{8,17})\b"),
}

# Form field patterns — no separator needed since fields contain just the raw number
FORM_FIELD_PATTERNS = {
    "SSN":  re.compile(r"^\d{3}[- ]?\d{2}[- ]?\d{4}$"),
    "EIN":  re.compile(r"^\d{2}[-\s]?\d{7}$"),
    "Phone": re.compile(r"^\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}$"),
    "Email": re.compile(r"^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"),
}

# Labels that introduce a name on state forms — redact the text that follows
SIGNATORY_LABELS = re.compile(
    r"(?:"
    r"authorized\s+signatory|"
    r"print\s+(?:full\s+)?name|"
    r"taxpayer(?:'s)?\s+name|"
    r"preparer(?:'s)?\s+name|"
    r"officer(?:'s)?\s+name|"
    r"owner(?:'s)?\s+name|"
    r"partner(?:'s)?\s+name|"
    r"signature\s+of|"
    r"signed\s+by|"
    r"name\s+of\s+(?:officer|partner|member|owner|preparer)"
    r")[:\s]+([A-Za-z][A-Za-z\s,\.]{2,40}?)(?=\s{2,}|\n|$)",
    re.IGNORECASE
)

REDACT_COLOR = (0, 0, 0)  # black

OUTPUT_MARKERS = ("-REDACTED", "-REDACTION-INCOMPLETE")


def find_source_pdfs(folder: Path) -> list:
    """
    Source PDFs in a folder, excluding this script's own outputs.

    Windows filesystems are case-insensitive, so globbing both "*.pdf" and
    "*.PDF" (as earlier versions of this function did, independently, in two
    places) matches every file twice on Windows -- silently doubling
    redaction work and duplicating every log entry. De-dupe by lowercased
    name. Also excludes "-REDACTION-INCOMPLETE" outputs, not just
    "-REDACTED" ones, so a rerun doesn't treat last run's unusable
    placeholder as a fresh source file.
    """
    seen = set()
    pdfs = []
    for p in sorted(folder.glob("*.pdf")) + sorted(folder.glob("*.PDF")):
        key = p.name.lower()
        if key in seen:
            continue
        if any(marker in p.stem for marker in OUTPUT_MARKERS):
            continue
        seen.add(key)
        pdfs.append(p)
    return pdfs


def generate_name_variants(entries: list) -> list:
    """
    For each name entry generate reversed variants so both formats are caught:
      'John Smith'  ->  also adds 'Smith, John' and 'Smith John'
      'Nelson Florentino' -> also 'Florentino, Nelson'
    """
    expanded = list(entries)
    for entry in entries:
        words = [w.strip(",.") for w in entry.split() if len(w.strip(",.")) > 1]
        if 2 <= len(words) <= 4:
            last = words[-1]
            rest = " ".join(words[:-1])
            expanded.append(f"{last}, {rest}")   # Smith, John
            expanded.append(f"{last} {rest}")    # Smith John
    return list(set(expanded))


def load_client_list(folder: Path) -> list:
    """Load names and addresses from clients.txt and generate name variants."""
    client_file = folder / "clients.txt"
    if not client_file.exists():
        return []
    raw = []
    for line in client_file.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#"):
            raw.append(line)
    return generate_name_variants(raw)


def find_fuzzy_matches(full_text: str, client_entries: list) -> list:
    """Sliding window fuzzy match against client entries."""
    if not FUZZY_AVAILABLE or not client_entries:
        return []
    words = full_text.split()
    matched = []
    for entry in client_entries:
        entry_words = entry.split()
        n = len(entry_words)
        # Skip single short words — too many false positives
        if n == 0 or (n == 1 and len(entry) < 6):
            continue
        for i in range(len(words) - n + 1):
            window = " ".join(words[i:i + n])
            if fuzz.ratio(entry.lower(), window.lower()) >= FUZZY_THRESHOLD:
                matched.append(window)
    return list(set(matched))


def find_signatory_names(full_text: str) -> list:
    """Extract names that appear after known signatory/name labels."""
    found = []
    # Common non-name words that can appear after labels — skip these
    skip_words = {"officer", "partner", "member", "owner", "preparer", "signatory",
                  "title", "date", "name", "signature", "print", "sign", "none", "n/a"}
    for match in SIGNATORY_LABELS.finditer(full_text):
        name = match.group(1).strip().strip(",.")
        words = name.split()
        # Must be at least 2 words OR a single long word (>8 chars) that looks like a name
        if len(words) < 2 and (len(name) <= 8 or name.lower() in skip_words):
            continue
        # Skip if first word is a known label word
        if words and words[0].lower() in skip_words:
            continue
        if len(name) > 3:
            found.append(name)
    return list(set(found))


def get_ocr_image(page: fitz.Page) -> "Image":
    """Render page to image, correcting for any rotation."""
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    # Correct rotated pages so OCR reads text upright
    rotation = page.rotation
    if rotation == 90:
        img = img.rotate(-90, expand=True)
    elif rotation == 180:
        img = img.rotate(180, expand=True)
    elif rotation == 270:
        img = img.rotate(90, expand=True)
    return img, pix, rotation


def is_scanned(page: fitz.Page) -> bool:
    return len(page.get_text().strip()) < 50


def redact_page(page: fitz.Page, log: list, client_entries: list, use_ocr: bool = False, known_pii: set = None) -> int:
    count = 0

    if use_ocr and OCR_AVAILABLE:
        img, pix, _rotation = get_ocr_image(page)
        data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT)
        words = [
            (data["text"][i], data["left"][i], data["top"][i],
             data["width"][i], data["height"][i])
            for i in range(len(data["text"]))
            if str(data["conf"][i]) != "-1" and data["text"][i].strip()
        ]

        full_text = " ".join(w[0] for w in words)
        # Use the (possibly rotated) image dimensions for coordinate mapping
        pw, ph = img.width, img.height
        pr = page.rect

        all_targets = list(PATTERNS.items())

        # Pattern-based
        for label, pattern in all_targets:
            for match in pattern.finditer(full_text):
                matched = (match.group(1) if match.lastindex and match.group(1) else match.group()).strip()
                for word, lx, ty, bw, bh in words:
                    if word in matched:
                        x0 = (lx / pw) * pr.width
                        y0 = (ty / ph) * pr.height
                        x1 = ((lx + bw) / pw) * pr.width
                        y1 = ((ty + bh) / ph) * pr.height
                        page.add_redact_annot(fitz.Rect(x0, y0, x1, y1), fill=REDACT_COLOR)
                        count += 1
                        log.append(f"    [{label}] page {page.number + 1} (OCR)")

        # Fuzzy client names + signatory names
        signatory_names = find_signatory_names(full_text)
        all_entries = list(set(client_entries + signatory_names))
        for match_str in find_fuzzy_matches(full_text, all_entries):
            match_words = match_str.split()
            for word, lx, ty, bw, bh in words:
                if word in match_words:
                    x0 = (lx / pw) * pr.width
                    y0 = (ty / ph) * pr.height
                    x1 = ((lx + bw) / pw) * pr.width
                    y1 = ((ty + bh) / ph) * pr.height
                    page.add_redact_annot(fitz.Rect(x0, y0, x1, y1), fill=REDACT_COLOR)
                    count += 1
                    log.append(f"    [CLIENT] '{match_str}' page {page.number + 1} (OCR)")

    else:
        full_text = page.get_text()

        # Pattern-based
        for label, pattern in PATTERNS.items():
            for match in pattern.finditer(full_text):
                search_str = (match.group(1) if match.lastindex and match.group(1) else match.group()).strip()
                rects = page.search_for(search_str)
                for rect in rects:
                    page.add_redact_annot(rect, fill=REDACT_COLOR)
                    count += 1
                    log.append(f"    [{label}] page {page.number + 1}")

        # Fuzzy client names + signatory names
        signatory_names = find_signatory_names(full_text)
        all_entries = list(set(client_entries + signatory_names))
        for match_str in find_fuzzy_matches(full_text, all_entries):
            rects = page.search_for(match_str)
            for rect in rects:
                page.add_redact_annot(rect, fill=REDACT_COLOR)
                count += 1
                log.append(f"    [CLIENT] '{match_str}' page {page.number + 1}")

        # Log signatory names found
        if signatory_names:
            log.append(f"    [SIGNATORY] found: {', '.join(signatory_names[:3])}")

    # Exact search for known PII values found in other documents (e.g. EIN from federal)
    if known_pii and not use_ocr:
        full_text = page.get_text()
        for value in known_pii:
            if value in full_text:
                rects = page.search_for(value)
                for rect in rects:
                    page.add_redact_annot(rect, fill=REDACT_COLOR)
                    count += 1
                    log.append(f"    [KNOWN] '{value}' page {page.number + 1}")

    # Form fields (state returns store EIN/SSN/names in fillable boxes)
    count += redact_form_fields(page, log, client_entries)

    if count:
        page.apply_redactions()
    return count


def redact_form_fields(page: fitz.Page, log: list, client_entries: list) -> int:
    """Redact PII stored inside PDF form fields (common in state returns)."""
    count = 0
    try:
        for widget in page.widgets():
            value = str(widget.field_value or "").strip()
            if not value:
                continue
            matched = False
            for label, pattern in FORM_FIELD_PATTERNS.items():
                if pattern.search(value):
                    page.add_redact_annot(widget.rect, fill=REDACT_COLOR)
                    log.append(f"    [{label}] form field redacted page {page.number + 1}")
                    matched = True
                    count += 1
                    break
            if not matched and FUZZY_AVAILABLE and client_entries:
                for entry in client_entries:
                    if fuzz.ratio(entry.lower(), value.lower()) >= FUZZY_THRESHOLD:
                        page.add_redact_annot(widget.rect, fill=REDACT_COLOR)
                        log.append(f"    [CLIENT] form field '{value[:20]}' page {page.number + 1}")
                        count += 1
                        break
    except Exception:
        pass
    return count


def collect_known_pii(folder: Path) -> set:
    """
    Pre-scan all PDFs and collect confirmed PII values (EINs, SSNs found in
    standard format). Returns all format variants so they can be exact-searched
    in state returns where the format differs.
    """
    ein_pattern = re.compile(r"\b(\d{2})-(\d{7})\b")
    ssn_pattern = re.compile(r"\b(\d{3})[- ](\d{2})[- ](\d{4})\b")
    known = set()
    pdfs = find_source_pdfs(folder)
    for pdf in pdfs:
        try:
            doc = fitz.open(str(pdf))
            for page in doc:
                text = page.get_text()
                for m in ein_pattern.finditer(text):
                    digits = m.group(1) + m.group(2)
                    known.add(digits)                        # 123456789
                    known.add(m.group(1) + " " + m.group(2))  # 12 3456789
                    known.add(m.group())                     # 12-3456789
                for m in ssn_pattern.finditer(text):
                    digits = m.group(1) + m.group(2) + m.group(3)
                    known.add(digits)
                    known.add(f"{m.group(1)}-{m.group(2)}-{m.group(3)}")
                    known.add(f"{m.group(1)} {m.group(2)} {m.group(3)}")
            doc.close()
        except Exception:
            pass
    return known


def debug_page_text(pdf_path: str, page_num: int = None):
    """Print extracted text from a page to diagnose why something isn't caught."""
    doc = fitz.open(pdf_path)
    pages = [doc[page_num - 1]] if page_num else doc
    for page in pages:
        print(f"\n--- Page {page.number + 1} (rotation: {page.rotation}) ---")
        text = page.get_text()
        if text.strip():
            print(text[:2000])
        else:
            print("[Scanned/image page — no extractable text]")
        widgets = list(page.widgets() or [])
        if widgets:
            print(f"\nForm fields ({len(widgets)}):")
            for w in widgets:
                print(f"  [{w.field_name}] = '{w.field_value}'")
    doc.close()


def strip_metadata(doc: fitz.Document):
    doc.set_metadata({k: "" for k in [
        "title", "author", "subject", "keywords",
        "creator", "producer", "creationDate", "modDate"
    ]})


def redact_file(input_path: Path, client_entries: list, known_pii: set = None, output_dir: Path = None) -> tuple:
    log = [f"\n{'-' * 50}", f"File: {input_path.name}"]

    out_dir = output_dir or input_path.parent
    trusted_output_path = out_dir / f"{input_path.stem}-REDACTED.pdf"
    incomplete_output_path = out_dir / f"{input_path.stem}-REDACTION-INCOMPLETE.pdf"

    doc = fitz.open(str(input_path))
    total = 0
    skipped_pages = []

    for page in doc:
        rotation = page.rotation
        scanned = is_scanned(page)
        # Force rotated pages through OCR — coordinate mapping is unreliable otherwise
        force_ocr = (rotation != 0) and OCR_AVAILABLE

        if rotation != 0:
            mode = f"rotated {rotation} deg (OCR)"
        elif scanned:
            mode = "scanned (OCR)"
        else:
            mode = "text-based"
        log.append(f"  Page {page.number + 1}: {mode}")

        if (scanned or force_ocr) and not OCR_AVAILABLE:
            log.append("    [SKIP] Tesseract not installed -- page NOT checked for PII")
            skipped_pages.append(page.number + 1)
            continue

        total += redact_page(page, log, client_entries, use_ocr=(scanned or force_ocr), known_pii=known_pii)

    strip_metadata(doc)

    # Never let a page that couldn't be scanned for PII produce a file named
    # like a trusted, complete redaction. A prior version of this script
    # silently skipped unreadable scanned/image pages here and still wrote
    # "-REDACTED.pdf" -- that shipped a real client SSN and EIN to an
    # engagement folder because nothing downstream had any signal that the
    # file was incomplete. Route incomplete output to a distinctly named
    # file instead of silently downgrading to a partial "REDACTED" file.
    if skipped_pages:
        output_path = incomplete_output_path
        doc.save(str(output_path), garbage=4, deflate=True)
        doc.close()
        log.append(f"  Redactions applied: {total}")
        log.append(f"  Metadata: stripped")
        log.append(f"  [INCOMPLETE] Page(s) {skipped_pages} could not be checked for PII (no OCR engine found).")
        log.append(f"  Saved as: {output_path.name} -- DO NOT use as a redacted deliverable.")
        log.append(f"  Fix: install Tesseract (see script docstring), then rerun this file.")
    else:
        output_path = trusted_output_path
        doc.save(str(output_path), garbage=4, deflate=True)
        doc.close()
        log.append(f"  Redactions applied: {total}")
        log.append(f"  Metadata: stripped")
        log.append(f"  Saved as: {output_path.name}")

    return output_path, total, log, skipped_pages


def process_folder(folder: Path):
    pdfs = find_source_pdfs(folder)

    if not pdfs:
        print("No PDF files found in that folder.")
        return

    client_entries = load_client_list(folder)
    if client_entries:
        print(f"Client list loaded: {len(client_entries)} entries (including name variants)")
    else:
        print("[!] No clients.txt found — skipping name/address redaction")

    print("Pre-scanning for known PII values across all documents...")
    known_pii = collect_known_pii(folder)
    if known_pii:
        print(f"Found {len(known_pii)} known PII values to match across documents")

    print(f"\nFound {len(pdfs)} PDF(s)\n")
    all_log, grand_total = [], 0
    incomplete_files = []

    for pdf in pdfs:
        out, count, log, skipped_pages = redact_file(pdf, client_entries, known_pii=known_pii)
        all_log.extend(log)
        grand_total += count
        if skipped_pages:
            incomplete_files.append((out, skipped_pages))
            mark = "!"
        else:
            mark = "+" if count > 0 else "o"
        print(f"  {mark}  {pdf.name}  ->  {out.name}  ({count} redactions)")

    ts = datetime.now().strftime("%Y%m%d-%H%M%S")
    log_file = folder / f"redaction-log-{ts}.txt"
    log_file.write_text("\n".join(all_log), encoding="utf-8")

    print(f"\n{'-' * 50}")
    print(f"Total: {grand_total} redaction(s) across {len(pdfs)} file(s)")
    print(f"Log saved: {log_file.name}")

    if incomplete_files:
        print(f"\n{'!' * 50}")
        print(f"STOP: {len(incomplete_files)} file(s) are NOT safe to use -- pages could not")
        print(f"be checked for PII because no OCR engine (Tesseract) was found:")
        for out, pages in incomplete_files:
            print(f"  - {out.name}  (page(s) {pages})")
        print(f"\nInstall Tesseract (see redact.py docstring for the link), then rerun")
        print(f"this tool on the ORIGINAL files -- do not hand these -INCOMPLETE files")
        print(f"to anyone as if they were redacted.")
        print(f"{'!' * 50}")


def main():
    print("\nPriceless CPA - Tax Document Redaction Tool")
    print("=" * 50)

    if not OCR_AVAILABLE:
        print("[!] OCR not available — scanned PDFs will be skipped")
    if not FUZZY_AVAILABLE:
        print("[!] rapidfuzz not installed — run: pip install rapidfuzz")

    target = sys.argv[1] if len(sys.argv) > 1 else None

    # Debug mode: python redact.py debug "file.pdf" [page_number]
    if target == "debug" and len(sys.argv) >= 3:
        page_num = int(sys.argv[3]) if len(sys.argv) >= 4 else None
        debug_page_text(sys.argv[2].strip('"'), page_num)
        return

    if not target:
        print("\n1. Redact a single PDF")
        print("2. Redact all PDFs in a folder")
        print("3. Debug — show extracted text from a page")
        choice = input("\nChoose (1, 2, or 3): ").strip()
        if choice == "1":
            target = input("PDF path: ").strip().strip('"')
        elif choice == "2":
            target = input("Folder path: ").strip().strip('"')
        elif choice == "3":
            pdf = input("PDF path: ").strip().strip('"')
            pg = input("Page number (Enter for all): ").strip()
            debug_page_text(pdf, int(pg) if pg else None)
            return
        else:
            print("Invalid choice.")
            return

    p = Path(target)
    if p.is_file():
        client_entries = load_client_list(p.parent)
        if client_entries:
            print(f"Client list loaded: {len(client_entries)} entries")
        out, count, log, skipped_pages = redact_file(p, client_entries)
        print("\n".join(log))
        if skipped_pages:
            print(f"\n{'!' * 50}")
            print(f"STOP: this file is NOT safe to use. Page(s) {skipped_pages} could not")
            print(f"be checked for PII because no OCR engine (Tesseract) was found.")
            print(f"Install Tesseract (see redact.py docstring for the link), then rerun")
            print(f"this file. Do not hand {out.name} to anyone as if it were redacted.")
            print(f"{'!' * 50}")
        else:
            print(f"\nDone - {count} redaction(s). Saved: {out.name}")
    elif p.is_dir():
        process_folder(p)
    else:
        print(f"Error: not found - {target}")


if __name__ == "__main__":
    main()
