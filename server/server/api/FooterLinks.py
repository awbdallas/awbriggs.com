import json

import pkg_resources


class FooterLinks:
    footer_file_location = '/footer/footerlinks.json'

    @staticmethod
    def get_footer_links():
        return FooterLinks.get_values_from_footer_file()['Links']

    @staticmethod
    def get_values_from_footer_file():
        resource_filename = pkg_resources.resource_filename('server.data', '' + FooterLinks.footer_file_location)
        return json.load(open(resource_filename))


