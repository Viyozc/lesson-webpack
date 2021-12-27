const webpack = require("webpack");
const config = require("./webpack.config.js");

const compile = webpack(config);

compile.run((stats) => {
  if (err) {
    console.log(err);
  }
});
