const resolve = (file) => require("path").resolve(__dirname, "../output", file);
const write = (data, name) =>
  require("fs").writeFileSync(resolve(name), JSON.stringify(data));
const clone = require('../utils/clone').clone
const pl = "filePlugin";
class FilePlugin {
  constructor() {}
  apply(compiler) {
    console.log("apply");
    compiler.hooks.compilation.tap(pl, (compilation) => {
      compilation.hooks.succeedModule.tap(pl, (mod) => {
        // console.log(clone(mod))
        // write(clone(mod), 'mod')
      });
    });
  }
}
module.exports = FilePlugin;
