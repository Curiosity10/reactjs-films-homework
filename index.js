const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const expressStaticGzip = require('express-static-gzip');
const webpackConfig = require('./config/webpack/webpack.dev.config');

const compiler = webpack(webpackConfig);
const app = express();

switch (process.env.NODE_ENV) {
  case 'development':
    app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
      logLevel: 'warn',
    }));

    app.use(webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr',
    }));

    app.use(express.static(`${__dirname}/build`));
    break;

  case 'production':
    app.use(expressStaticGzip(`${__dirname}/build`, {
      enableBrotli: true,
    }));
    break;
  default:
    break;
}

const PORT = process.env.PORT || 3000;

app.listen(PORT);
