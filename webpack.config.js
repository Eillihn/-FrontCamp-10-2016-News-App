const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['whatwg-fetch', 'babel-polyfill', './index'],
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
            test: /\.jsx?$/,
            exclude: [/node_modules/, /public/],
            loader: process.env.NODE_ENV == 'development' ? 'react-hot!babel' : 'babel'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style", "css!autoprefixer!less")
        }, {
            test: /\.json$/,
            loader: 'json!custom-json'
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
