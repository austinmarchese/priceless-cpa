"""Session 6 tests for secret encryption.

A shared NEXUS_SECRET_KEY is set per test so nothing writes to a real home
directory, and so the wrong-key path can be exercised.
"""

import os
import unittest

from nexus_tracker import crypto


class CryptoTests(unittest.TestCase):
    def setUp(self):
        self._saved = os.environ.get(crypto.KEY_ENV)
        os.environ[crypto.KEY_ENV] = crypto.generate_key()

    def tearDown(self):
        if self._saved is None:
            os.environ.pop(crypto.KEY_ENV, None)
        else:
            os.environ[crypto.KEY_ENV] = self._saved

    def test_round_trip(self):
        token = "shpat_ABC123secret"
        blob = crypto.encrypt(token)
        self.assertNotIn("shpat_", blob)          # not stored in the clear
        self.assertEqual(crypto.decrypt(blob), token)

    def test_wrong_key_is_a_clear_error(self):
        blob = crypto.encrypt("shpat_ABC123secret")
        os.environ[crypto.KEY_ENV] = crypto.generate_key()  # different machine/key
        with self.assertRaises(crypto.CryptoError):
            crypto.decrypt(blob)

    def test_generate_key_is_usable(self):
        os.environ[crypto.KEY_ENV] = crypto.generate_key()
        self.assertEqual(crypto.decrypt(crypto.encrypt("hello")), "hello")


if __name__ == "__main__":
    unittest.main()
