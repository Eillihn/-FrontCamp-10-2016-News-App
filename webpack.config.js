const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['whatwg-fetch', 'babel-polyfill', './client/app.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? 'source-map' : null,
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            BROWSER: JSON.stringify(true)
        }),
        new ExtractTextPlugin('bundle.css')
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/, /public/],
            loaders: ['ng-annotate', 'babel']
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style", "css!autoprefixer!less")
        }, {
            test: /\.json$/,
            loader: 'json!custom-json'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    },
    devServer: {
        host: 'localhost',
        port: '8080'
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
