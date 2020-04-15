var path = require('path');
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
                test: /\.html$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }  
                }]
            },
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
                test: /\.(jpe?g|png|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name:'[path][name].[ext]?[hash:8]'
                    }
                }]
            }
        ]
    }
}
