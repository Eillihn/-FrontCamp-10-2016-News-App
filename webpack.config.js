module.exports = {
    entry: ["whatwg-fetch", "babel-polyfill", "./src/app"],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader"
        }]
    }
};