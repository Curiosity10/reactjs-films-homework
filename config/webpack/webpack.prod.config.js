const merge = require('webpack-merge');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

const baseConfig = require('./webpack.base.config');

const cleanOptions = {
  verbose: true,
  allowExternal: true,
  beforeEmit: true,
};

const prodConfiguration = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true,
    })],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin('../../build', cleanOptions),
    new BrotliPlugin(),
  ],
};

module.exports = merge.smart(baseConfig, prodConfiguration);
