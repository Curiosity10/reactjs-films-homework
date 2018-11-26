const express = require('express');
const app = express();
const development = process.env.NODE_ENV !== 'production ';

if (development) {
  const webpack = require('webpack');
  const webpackConfig = require('./frontend/config/webpack/webpack.dev.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);
  const wpmw = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    logLevel: 'warn',
  });
  app.use(wpmw);

  const wphmw = webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
  });
  app.use(wphmw);
  app.use(express.static(`${__dirname}/frontend/build`));
}

if (!development) {
  const expressStaticGzip = require('express-static-gzip');
  app.use(expressStaticGzip(`${__dirname}/frontend/build`, {
    enableBrotli: true,
  }));
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🌎 Listening on port ${PORT}!`);
});
