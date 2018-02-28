from flask import Flask, send_from_directory, json
from src.server.api.FooterLinks import FooterLinks

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


if __name__ == '__main__':
    app.run(debug=True)
