import json

import pkg_resources


class About:
    about_file_location = '/about/about.json'

    @staticmethod
    def get_all_about_values():
        resource_filename = pkg_resources.resource_filename('server.data', '' + About.about_file_location)
        return json.load(open(resource_filename))
