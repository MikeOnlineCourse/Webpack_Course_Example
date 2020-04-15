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
        ]
    }
}
