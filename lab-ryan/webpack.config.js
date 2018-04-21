const path = require('path');

const config = {
    mode: 'development',
    entry: '.src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.js$/, 
            loader: 'babel-loader'
            },
            {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
            },
        ]
    }
}

module.exports = config;