const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        'index': './source/pages/index/index.js',
        'blog': './source/pages/blog/blog.js'
    },
    output: {
        path: paths.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: './source/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: './source/pages/blog/blog.pug'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
};

const developmentConfig = {
    devServer: {
        stats: 'errors-only',
        port: 9000
    }
};

module.exports = function(env){
    if(env === 'production'){
        return common;
    }
    if(env === 'development'){
        return Object.assign(
            {},
            common,
            developmentConfig
        )
    }
}