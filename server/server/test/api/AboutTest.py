import unittest

from server.api.About import About
from unittest.mock import MagicMock


class FooterLinksTest(unittest.TestCase):
    file_contents = [{
        'section': 'header',
        'content': 'hello'
    }, {'section': 'testing',
        'content': 'whatever'
        }]

    def test_all_response(self):
        About.get_all_about_values = MagicMock(return_value=self.file_contents)
        self.assertEqual(self.file_contents, About.get_all_about_values())


if __name__ == '__main__':
    unittest.main()
