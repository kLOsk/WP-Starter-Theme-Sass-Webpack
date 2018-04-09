const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: '#source-map',

  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '../../assets/js')
  },

  plugins: [
    new ExtractTextPlugin('../css/app.bundle.css'),

    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      sourceMap: true,
      minimize: false,
    }),

    new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            beautify: true
          }
        }
      }),

    new BrowserSyncPlugin(
    {
      open: false,
      logFileChanges: false,
      port: 3000,
      ui: { port: 3100 },
      proxy: 'localhost:80',
      files: [
        {
          match: [
            path.join(__dirname, '../../assets/main.bundle.css'),
            path.join(__dirname, '../../assets/main.bundle.js'),
            path.join(__dirname, '../../**/*.php'),
            path.join(__dirname, '../../**/*.html')
          ],
          fn: function(event, file) {
            if (event === "change") {
              const bs = require('browser-sync').get('bs-webpack-plugin');
              bs.reload();
            }
          }
        }
      ]
    },
    {
      reload: true
    })
  ]

});
