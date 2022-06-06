const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /.(jpe?g|svg|png|gif)$/,
        type: "asset/resource",
      },
      {
        test: /.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
      favicon: "./src/images/favicon-32x32.png",
    }),
  ],
};
