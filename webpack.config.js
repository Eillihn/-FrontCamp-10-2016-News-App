const NODE_ENV = process.env.NODE_ENV || 'DEV';
const webpack = require('webpack');

module.exports = {
    entry: ['whatwg-fetch', 'babel-polyfill', './src/app'],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    watch: NODE_ENV == 'DEV',
    watchOptions: {
        aggregateTime: 100
    },
    devtool: NODE_ENV == 'DEV' ? 'source-map' : null,
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js'],
        alias: {
            'custom-json': __dirname + '/tasks/custom-json-loader'
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        },{
            test: /\.less$/,
            loader: 'style!css!less!autoprefixer?browsers=last 2 versions'
        },{
            test: /\.json$/,
            loader: 'json!custom-json'
        }]
    },
    devServer: {
        host: 'localhost',
        port: '8080'
    }
};

if (NODE_ENV == 'PROD') {
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