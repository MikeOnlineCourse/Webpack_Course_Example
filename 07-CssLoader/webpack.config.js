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
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 
                [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
