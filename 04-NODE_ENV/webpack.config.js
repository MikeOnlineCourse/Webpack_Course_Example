console.log("====== NODE_ENV ======:", process.env.NODE_ENV);
var path = require('path');
module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: process.env.NODE_ENV + ".js",
    }
}

