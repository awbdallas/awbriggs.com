import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='dist')


@app.route('/')
def serve():
    return send_from_directory('dist', 'app.bundle.js')


if __name__ == '__main__':
    app.run()
