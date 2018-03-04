import unittest

from server.api.FooterLinks import FooterLinks
from unittest.mock import MagicMock


class FooterLinksTest(unittest.TestCase):
    file_contents = {'Links': [{'Github': ''}]}

    def test_response(self):
        FooterLinks.get_values_from_footer_file = MagicMock(return_value=self.file_contents)
        self.assertEqual(self.file_contents['Links'], FooterLinks.get_footer_links())


if __name__ == '__main__':
    unittest.main()
