const express = require('express');
const app = express();

switch (process.env.NODE_ENV) {
  case 'development':
    const webpack = require('webpack');
    const webpackConfig = require('./config/webpack/webpack.dev.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
      logLevel: 'warn',
    }));

    app.use(webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
    }));

    app.use(express.static(`${__dirname}/build`));
    break;

  case 'production':
    const expressStaticGzip = require('express-static-gzip');
    app.use(expressStaticGzip(`${__dirname}/build`, {
      enableBrotli: true,
    }));
    break;
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🌎 Listening on port ${PORT}!`);
});
