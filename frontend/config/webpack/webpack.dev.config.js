const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

const devConfiguration = {
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    ],
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = merge.smart(baseConfig, devConfiguration);
