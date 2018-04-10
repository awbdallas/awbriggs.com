import unittest
import json

from server.api.Portfolio import Portfolio
from unittest.mock import MagicMock


class FooterLinksTest(unittest.TestCase):
    example_file_contents = {
        "examples": {
            "1": {
                "hello": "hello is it me you're looking for"
            }
        }
    }

    def test_example_response_should_return_value(self):
        json.load = MagicMock(return_value=self.example_file_contents)
        self.assertEqual("hello is it me you're looking for", Portfolio.get_specific_project('1').get("hello"))

    def test_example_response_failure_should_return_none(self):
        json.load = MagicMock(return_value=self.example_file_contents)
        self.assertEqual(None, Portfolio.get_specific_project("2"))


if __name__ == '__main__':
    unittest.main()
