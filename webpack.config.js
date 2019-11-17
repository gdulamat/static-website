var path = require("path");
const assets_dir = 'dist/';
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/main.js",
    'hammer.min': "./src/js/hammer.min.js",
    'lightbox': "./src/js/lightbox.js",
    'lozad.min': "./src/js/lozad.js",
    'reusable': "./src/js/reusable.js",
    'side-nav': "./src/js/side-nav.js",
  },
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, assets_dir),
    filename: "./js/[name].js",
    publicPath: assets_dir
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              context: './',
              outputPath: '/css',
              publicPath: '/css'
            }
          },
          {
            loader: 'extract-loader',
            options: {
              sourceMap: false,
              url: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: false,
        exclude: /\/node_modules/,
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          output: {
            comments: false
          },
          warnings: false,
          compress: true,
          beautify: false,
          mangle: true,
          toplevel: true,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
        cache: true,
        parallel: 6,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
