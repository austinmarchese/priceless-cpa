"""Enforces the one architecture rule: only storage.py may touch storage.

PROJECT_SPEC.md section 2 says all storage goes through the single data-access
layer. This test parses every module in the application package and fails if any
module other than storage.py *imports* sqlite3, so the boundary can't quietly
rot.

It reads the code as a syntax tree (the `ast` module), so a module is free to
mention "sqlite3" in a docstring or comment -- only a real import counts.
Test files live outside the package and may use sqlite3 to check the schema
directly, so they are not scanned.
"""

import ast
import unittest
from pathlib import Path

PACKAGE = Path(__file__).resolve().parent.parent / "nexus_tracker"
ALLOWED = {"storage.py"}
FORBIDDEN_MODULE = "sqlite3"


def _imports_sqlite3(source: str) -> bool:
    tree = ast.parse(source)
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            if any(alias.name.split(".")[0] == FORBIDDEN_MODULE for alias in node.names):
                return True
        elif isinstance(node, ast.ImportFrom):
            if (node.module or "").split(".")[0] == FORBIDDEN_MODULE:
                return True
    return False


class ArchitectureBoundaryTests(unittest.TestCase):
    def test_only_storage_module_imports_sqlite3(self):
        offenders = [
            str(module.relative_to(PACKAGE.parent))
            for module in PACKAGE.rglob("*.py")
            if module.name not in ALLOWED
            and _imports_sqlite3(module.read_text(encoding="utf-8"))
        ]
        self.assertEqual(
            offenders,
            [],
            "Only storage.py may import sqlite3; storage leaked into: " + ", ".join(offenders),
        )


if __name__ == "__main__":
    unittest.main()
