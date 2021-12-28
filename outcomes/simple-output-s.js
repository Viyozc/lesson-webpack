(() => {
  // webpackBootstrap
  "use strict";
  var __webpack_modules__ = {
    "./src/utils.js": (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.say = void 0;

      var say = function say() {
        return console.log("hi");
      };

      exports.say = say;
    },
  };
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

    var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

    // import React from 'react';
    // import ReactDom from 'react-dom';
    // import App from './elements/home';
    // ReactDom.render(<App />, document.getElementById('root'));
    (0, _utils.say)();
  })();
})();
//# sourceMappingURL=main.js.map
