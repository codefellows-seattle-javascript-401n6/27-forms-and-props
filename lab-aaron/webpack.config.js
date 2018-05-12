// 'use strict';

// const path = require('path');

// const config = {
//   mode: 'development',
//   entry: path.resolve(__dirname, './src/js/components/app.js'),
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filepath: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {test: /\.js$/, 
//         // include: path.resolve(__dirname, './src/app.js'),
//        loader: 'babel-loader'
//       },
//       {test: /\.css$/, 
//        loader: ['style-loader', 'css-loader']
//       },
//     ]
//   }
// };

// module.exports = config;

'use strict';

const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
// const ExtractPlugin = require('extract-text-webpack-plugin');

const config = {
  context: path.join(__dirname, './src'),
  mode: 'development',
  entry: './js/components/app.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve('./src')
  },
  plugins: [
    new HTMLPlugin({
      filename: '../index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractPlugin.extract({
      //     use: [
      //       'css-loader',
      //       'resolve-url-loader',
      //       {
      //         loader: 'sass-loader',
      //         options: {
      //           sourceMap: true,
      //           includePaths: [`${__dirname}/src/style`],
      //         },
      //       },
      //     ],
      //   }),
      // },
    ],
  },
};

module.exports = config;