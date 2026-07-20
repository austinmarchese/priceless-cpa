"""Encrypt secrets (the Shopify token) before they go into the ledger database.

The per-store Shopify token is stored in the client's settings, which live in the
shared database file. We encrypt it so the token isn't sitting in plain text if
someone opens that file.

The encryption key comes from:
    1. the NEXUS_SECRET_KEY environment variable, if set (a Fernet key), or
    2. a per-machine key file at ~/.nexus-tracker/secret.key, created on first use.

IMPORTANT for a shared team: the key is what decrypts the token. If each teammate
has a different per-machine key, they can't read a token another teammate saved
(they'll get a clear "re-enter the token" message, not a crash). To let the whole
team share saved tokens, set the SAME NEXUS_SECRET_KEY on each machine, delivered
securely -- NOT by putting the key in the synced folder next to the database,
which would defeat the point. This is a decision for the firm; see the Session 6
notes.
"""

from __future__ import annotations

import os
import stat
from pathlib import Path

from cryptography.fernet import Fernet, InvalidToken

KEY_ENV = "NEXUS_SECRET_KEY"
_KEY_FILE = Path.home() / ".nexus-tracker" / "secret.key"


class CryptoError(Exception):
    """A secret couldn't be encrypted or decrypted, explained for a person."""


def encrypt(plaintext: str) -> str:
    """Encrypt a string; returns text safe to store in the database."""
    return _fernet().encrypt(plaintext.encode("utf-8")).decode("ascii")


def decrypt(ciphertext: str) -> str:
    """Decrypt what encrypt() produced. Raises CryptoError if the key doesn't match."""
    try:
        return _fernet().decrypt(ciphertext.encode("ascii")).decode("utf-8")
    except InvalidToken as exc:
        raise CryptoError(
            "This saved Shopify token couldn't be read on this computer. It was "
            "most likely saved on a different machine. Please re-enter the token "
            "to reconnect."
        ) from exc


def generate_key() -> str:
    """A fresh key you could set as NEXUS_SECRET_KEY to share across the team."""
    return Fernet.generate_key().decode("ascii")


def _fernet() -> Fernet:
    return Fernet(_load_key())


def _load_key() -> bytes:
    env = os.environ.get(KEY_ENV)
    if env:
        return env.encode("ascii")
    if _KEY_FILE.exists():
        return _KEY_FILE.read_bytes()
    # First use on this machine with no shared key: make one and lock it down.
    _KEY_FILE.parent.mkdir(parents=True, exist_ok=True)
    key = Fernet.generate_key()
    _KEY_FILE.write_bytes(key)
    try:
        _KEY_FILE.chmod(stat.S_IRUSR | stat.S_IWUSR)  # owner read/write only
    except OSError:
        pass  # best effort on platforms without POSIX permissions
    return key
