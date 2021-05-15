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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollUp = function scrollUp() {\n  var upBtn = document.querySelector('.up');\n  var services = document.getElementById('services');\n  var sec = document.querySelector('.services-section');\n  window.addEventListener('scroll', function () {\n    // console.log(document.documentElement.scrollTop);\n    console.log(sec.clientTop); // if (document.documentElement.scrollTop >= sec.scrollHeight) {\n    //     upBtn.classList.add('up_active')\n    //     console.log(1);\n    // } else if(document.documentElement.scrollTop < sec.scrollTop) {\n    //     upBtn.classList.remove('up_active');\n    //     console.log(2);\n    // }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://JS-diplom/./src/modules/scrollUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0a9d2d7bf5aae8e1c4b")
/******/ })();
/******/ 
/******/ }
);