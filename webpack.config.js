/**
 * WordPress Webpack Config
 */

// Webpack Dependencies
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// Build Config
module.exports = {
  entry: {
    site: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "resolve-url-loader",
            options: {  
              root: path.join(__dirname, '/src/img'),
              includeRoot: true,
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        extractComments: true,
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};
