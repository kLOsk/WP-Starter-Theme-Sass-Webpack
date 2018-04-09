const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    filename: 'app.bundle.min.js',
    path: path.join(__dirname, '../../assets/js')
  },

  plugins: [
    new ExtractTextPlugin('../css/app.bundle.min.css'),

    // Minimize JS
    new UglifyJsPlugin(),

    //Remove CSS comments
    new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } }
          }),

    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      sourceMap: false,
      minimize: true,
    }),
  ],
});
