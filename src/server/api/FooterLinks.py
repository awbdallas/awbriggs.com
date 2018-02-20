# grab data from resource files (read from json) (may get images later)
# return json
import json
import pkg_resources


class FooterLinks:
    footer_file_location = '/footer/footerlinks.json'

    @staticmethod
    def get_footer_links():
        return FooterLinks.get_values_from_footer_file()['a']

    @staticmethod
    def get_values_from_footer_file():
        resource_filename = pkg_resources.resource_filename("src.server.data", "") + FooterLinks.footer_file_location
        return json.load(open(resource_filename))


