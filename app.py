from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='dist')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory('dist', 'index.html')


if __name__ == '__main__':
    app.run(debug=True)
