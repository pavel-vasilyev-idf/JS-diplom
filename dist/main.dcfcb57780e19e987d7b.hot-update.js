/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateJS_diplom"]("main",{

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollUp = function scrollUp() {\n  var upBtn = document.querySelector('.up');\n  var sec = document.querySelector('.services-section');\n  window.addEventListener('scroll', function () {\n    if (document.documentElement.scrollTop >= sec.offsetTop) {\n      upBtn.classList.add('up_active');\n    } else if (document.documentElement.scrollTop < sec.offsetTop) {\n      upBtn.classList.remove('up_active');\n    }\n  });\n  upBtn.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  }); //scrollToSections\n\n  var headerWrapper = document.querySelector('.header-wrapper');\n  var topMenu = document.querySelector('.top-menu');\n  topMenu.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.hash === '#services') {\n      var heightEl = document.body.querySelector('#services');\n      window.scrollTo({\n        top: heightEl.offsetTop - headerWrapper.clientHeight + 2,\n        behavior: 'smooth'\n      });\n    }\n\n    if (target.hash === '#faq') {\n      var _heightEl = document.body.querySelector('#faq');\n\n      window.scrollTo({\n        top: _heightEl.offsetTop - headerWrapper.clientHeight + 2,\n        behavior: 'smooth'\n      });\n    }\n\n    if (target.hash === '#contacts') {\n      var _heightEl2 = document.body.querySelector('#contacts');\n\n      window.scrollTo({\n        top: _heightEl2.offsetTop - headerWrapper.clientHeight + 2,\n        behavior: 'smooth'\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://JS-diplom/./src/modules/scrollUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a13bce5916237f42fcd")
/******/ })();
/******/ 
/******/ }
);