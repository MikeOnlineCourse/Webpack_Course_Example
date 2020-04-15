const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
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
                test: /\.html$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }  
                }],
                include: path.resolve('src'),
                exclude: path.resolve('./node_modules'),
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                include: path.resolve('src/scss'),
                exclude: path.resolve('./node_modules'),
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                include: path.resolve('.'),
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
                ],
                include: path.resolve('src/images'),
                exclude: path.resolve('./node_modules'),
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}
