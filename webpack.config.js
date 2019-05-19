const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devServer');
const sass = require('./webpack/sass');

const paths = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
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
        ]
    },
    pug()
]);

module.exports = function(env){
    if(env === 'production'){
        return common;
    }
    if(env === 'development'){
        return merge([
            common,
            devserver(),
            sass()
        ])
    }
};