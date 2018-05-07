const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${__dirname}/src/main.jsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle-[hash].js' 
  },
  plugins: [new htmlPlugin({template: `${__dirname}/index.html`})],
  module: {
    rule: [
      {
        test: /\.jsx?$/, loader: 'bable.loader'
      },
      {
        test: /\.(css|scss)$/, loader: ['style-loader', 'css-laoder']
      }
    ]
  }
};
