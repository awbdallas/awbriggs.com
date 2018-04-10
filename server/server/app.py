from flask import Flask, send_from_directory, json
from server.api.FooterLinks import FooterLinks
from server.api.About import About
from server.api.Portfolio import Portfolio

app = Flask(__name__, static_folder='../../dist')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory('../../dist', 'index.html')


@app.route('/api/footer-links')
def get_footer_links():
    return app.response_class(
        response=json.dumps(FooterLinks.get_footer_links()),
        status=200,
        mimetype='application/json'
    )


@app.route('/api/about')
def get_about_info():
    return app.response_class(
        response=json.dumps(About.get_all_about_values()),
        status=200,
        mimetype='application/json'
    )


@app.route('/api/portfolio')
def get_portfolio_info():
    return app.response_class(
        response=json.dumps(Portfolio.get_all_portfolio_values()),
        status=200,
        mimetype='application/json'
    )


@app.route('/api/portfolio/<string:example_id>')
def get_specific_example(example_id):
    dict_response = Portfolio.get_specific_project(example_id)

    if dict_response:
        return app.response_class(
            response=json.dumps(dict_response),
            status=200,
            mimetype='application/json'
        )

    return app.response_class(
        response=json.dumps(),
        status=500,
        mimetype='application/json'
    )


if __name__ == '__main__':
    app.run()
