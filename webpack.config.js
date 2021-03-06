var webpack = require('webpack');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');


module.exports = {
  entry: {
    catGrid: './static/javascripts/cat-grid.js',
    catHuge: './static/javascripts/cat-huge.js',
    catRuntime: './static/javascripts/cat-runtime.js',
    cacheInspector: './static/javascripts/cache-inspector.js',
    mainMenu: './static/javascripts/main-menu.js'
  },

  output: {
    path: './dist',
    filename: '[name].js'
  },
  plugins: [
    commonsPlugin,
    new SWPrecacheWebpackPlugin({
      stripPrefix: 'dist',
      staticFileGlobs: ['dist/*.{js,html,css,png,jpg}'],
      cacheId: 'feona',
      filename: 'my-service-worker.js',
      maximumFileSizeToCacheInBytes: 2000000,
      runtimeCaching: [{
        urlPattern: /^https:\/\/drpem3xzef3kf*/,
        handler: 'fastest',
        options: {
          cache: {
            maxEntries: 2,
            name: 'bigcat-cache'
          }
        }
      }]
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'file-loader' }
    ]
  }
};
