const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const FilePlugin = require("./plugins/file");
const resolve = (dir) => require("path").resolve(__dirname, dir);
const isProd = false;
module.exports = {
  target: "web",
  mode: isProd ? "production" : "development",
  entry: "./src/index.js",
  devtool: isProd ? false : "source-map",
  output: {
    path: resolve("./output"),
    filename: "main.js",
    publicPath: "/",
  },
  plugins: [
    new FilePlugin(),
    new HtmlPlugin({
      template: resolve("src/tpl.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(c|le)ss$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader",
              name: `[name].[hash:8].[ext]`,
              outputPath: `/output/imgs`,
            },
          },
        ],
      },

      {
        test: /\.(eot|ttf|woff|woff2|pdf|doc|zip|mp3)$/,
        issuer: /\.(less|css)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `[name].[hash:8].[ext]`,
              publicPath: "../assets",
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: [".js", ".less"] },
  devServer: {
    port: 9100,
    open: true,
  },
};
