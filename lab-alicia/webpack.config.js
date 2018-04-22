const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  mode: 'development',
  devtool: 'source-map', 
  entry: `${__dirname}/src/main.jsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle-[hash].js',
  },
  module: {
    rules: [
      {test: /\.(js$|jsx$)/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: `${__dirname}/index.html`})
  ],
};

module.exports = config;