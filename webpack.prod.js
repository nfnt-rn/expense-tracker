const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const minicssextractplugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name]-[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /.(jpe?g|svg|png|gif)$/,
        type: "asset/resource",
      },
      {
        test: /.styl$/,
        use: [minicssextractplugin.loader, "css-loader", "stylus-loader"],
      },
    ],
  },
  plugins: [
    new htmlwebpackplugin({
      template: "./src/template.html",
      filename: "index.html",
      favicon: "./src/images/favicon-32x32.png",
    }),
    new minicssextractplugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
