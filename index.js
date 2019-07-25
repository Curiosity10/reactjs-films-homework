const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const expressStaticGzip = require('express-static-gzip');
const history = require('connect-history-api-fallback');
const webpackConfig = require('./config/webpack/webpack.dev.config');

const compiler = webpack(webpackConfig);
const app = express();

app.use(history());

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

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
