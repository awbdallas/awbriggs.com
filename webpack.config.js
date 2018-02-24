const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src/client'),
    JS: path.resolve(__dirname, 'src/client/js')
};

module.exports = {
    entry: [path.join(paths.JS, 'index.js'), 'font-awesome/scss/font-awesome.scss'],
    output: {
        publicPath: '/dist',
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://127.0.0.1:5000'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }, {
                test: /\.scss$/,
                loaders: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },{
                    loader: "sass-loader"
                }]
            }, {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {}
    }
};
