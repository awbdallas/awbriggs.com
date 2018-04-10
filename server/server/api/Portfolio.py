import json

import pkg_resources


class Portfolio:
    portfolio_file_location = '/portfolio/portfolio.json'
    extended_file_location = '/portfolio/examples.json'

    @staticmethod
    def get_all_portfolio_values():
        resource_filename = pkg_resources.resource_filename('server.data', '' + Portfolio.portfolio_file_location)
        return json.load(open(resource_filename))

    @staticmethod
    def get_specific_project(id):
        resource_filename = pkg_resources.resource_filename('server.data', '' + Portfolio.extended_file_location)
        loaded_data = json.load(open(resource_filename))

        if loaded_data.get('examples', {}).get(id):
            return loaded_data.get('examples').get(id)

