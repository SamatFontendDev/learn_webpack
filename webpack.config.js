const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: paths.source + '/index.js',
    output: {
        path: paths.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app'
        })
    ]
}
