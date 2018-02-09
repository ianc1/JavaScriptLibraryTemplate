var Webpack = require("webpack");
var Path = require("path");

module.exports = {
    entry: {
        "mylibrary": "./src/mylibrary.js"
    },
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".js"],
        modules: [Path.join(__dirname, "src"), "node_modules"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    failOnError: true,
                }
            }
        ]
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: ["mylibrary"]
        })
    ]
};