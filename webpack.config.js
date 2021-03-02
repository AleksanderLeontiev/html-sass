const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");
const pages = glob.sync("pages/*.html");

module.exports = {
  entry: {
    index: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3001,
        proxy: "http://localhost:9000/",
      },
      {
        reload: false,
      }
    ),
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
    ...pages.map(
      (el) =>
        new HtmlWebpackPlugin({
          filename: el.replace(/^pages\//, ""),
          template: el,
          minify: false,
        })
    ),
  ],
};
