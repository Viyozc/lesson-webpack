const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const FilePlugin = require("./plugins/file");
const resolve = (dir) => require("path").resolve(__dirname, dir);
const isProd = false;

const env = process.env.NODE_ENV;
const is = (arr) => arr.includes(env);
const getInput = () => `./src/${env}.js`
module.exports = {
  target: "web",
  mode: isProd ? "production" : "development",
  entry: getInput(),
  devtool: isProd ? false : "source-map",
  output: {
    path: resolve("./output"),
    filename: "main.js",
    publicPath: "/",
  },
  plugins: [
    is(['file']) && new FilePlugin(),
    new HtmlPlugin({
      template: resolve("src/tpl.html"),
    }),
  ].filter(Boolean),
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
