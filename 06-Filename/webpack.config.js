var path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }
}
