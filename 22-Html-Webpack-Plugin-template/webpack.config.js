const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
    },
    devServer: {
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        },
    },
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('src/js'),
            path.resolve('src/scss'),
            path.resolve('src/images'),
            path.resolve('node_modules')
        ],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                            name:'[path][name].[ext]?[hash:8]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack前端自動化開發',
            filename: 'index.html',
            template: 'html/template.html',
            viewport: 'width=640, user-scalable=no',
            description: 'Webpack前端自動化開發，讓你熟悉現代前端工程師開發的方法',
            Keywords: 'Webpack前端自動化開發、前端、工程師、線上教學、教學範例',
            chunks: ['index' ],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}
