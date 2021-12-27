const resolve = file => require('path').resolve(__dirname, '../output', file)
const pl = 'filePlugin'
class FilePlugin {
    constructor() {
        
    }
    apply(compiler) {
        console.log('apply');
        compiler.hooks.compilation.tap(pl, (compilation) => {
            console.log(Object.keys(compilation))
        })
    }
}
module.exports = FilePlugin;