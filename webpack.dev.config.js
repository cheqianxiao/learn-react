/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname)
const src = path.resolve(__dirname, 'src/');
const dist = path.resolve(__dirname, 'dist/');

module.exports = {
    entry: `${src}/client.jsx`,
    output: {
        filename: 'bundle.js',
        path: dist,
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devtool: 'eval-source-map',

    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015'],
                    plugins: ['react-html-attrs','transform-decorators-legacy','transform-object-rest-spread']
                },
                exclude: /node_modules/,
            },
            {
                test: /\.json?$/,
                loader: 'json-loader',
            },
            {
                test: /\.css?$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                }
                ]
            },
            {test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader'},
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: `${src}/index.tpl.html`,
    })],
};