const path = require('path');

const config = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/main.js',
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']},
        ]
    }
};

module.exports = config;