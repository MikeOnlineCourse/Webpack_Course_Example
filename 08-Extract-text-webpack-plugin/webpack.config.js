var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/[name].css');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js',
        about: './js/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract(['css-loader'])
            }
        ]
    },
    plugins: [
        extractCSS
    ]
}
