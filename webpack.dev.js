const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /.(jpe?g|svg|png|gif)$/,
        use: "asset/resource",
      },
      {
        test: /.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
      favicon: "./src/images/favicon-32x32.png",
    }),
  ],
};
