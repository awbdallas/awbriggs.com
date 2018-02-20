import unittest

from src.server.api.FooterLinks import FooterLinks


class FooterLinksTest(unittest.TestCase):

    def test_response(self):
        self.assertEqual('b', FooterLinks.get_footer_links())


if __name__ == '__main__':
    unittest.main()
