const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: './example-settings.js',
    output: {
        filename: 'plugin-example-settings.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        filename: 'plugin-example-settings.js',
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};