/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateJS_diplom"]("main",{

/***/ "./src/modules/accordeonBlock.js":
/*!***************************************!*\
  !*** ./src/modules/accordeonBlock.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeonBlock = function accordeonBlock() {\n  var accordeon = document.querySelector('.accordeon');\n  var title = accordeon.querySelector('.title');\n  accordeon.addEventListener('click', function (event) {\n    var target = event.target;\n    console.log('target: ', target);\n\n    if (target.closest('.title')) {}\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeonBlock);\n\n//# sourceURL=webpack://JS-diplom/./src/modules/accordeonBlock.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("55026e8f0a946a6d9f2b")
/******/ })();
/******/ 
/******/ }
);