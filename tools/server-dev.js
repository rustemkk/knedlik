// This file configures the development web server which supports hot reloading.
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.dev';
import { chalkProcessing } from './chalk-config';
import messagingSetup from "./messaging-config";


console.log(chalkProcessing('Starting dev server...'));

const bundler = webpack(config);

const instance = browserSync({
  port: 4000,
  ui: { port: 3001 },
  server: {
    baseDir: 'src',
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(bundler, {
        // Dev middleware can't access config, so we provide publicPath
        publicPath: config.output.publicPath,
        // These settings suppress noisy webpack output so only errors are displayed to the console.
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        },
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  files: ['src/*.html']
});

messagingSetup(instance);
