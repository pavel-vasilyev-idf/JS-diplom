/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateJS_diplom"]("main",{

/***/ "./src/modules/modalCallback.js":
/*!**************************************!*\
  !*** ./src/modules/modalCallback.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalCallback = function modalCallback() {\n  var modalCallback = document.querySelector('.modal-callback');\n  var modalOverlay = document.querySelector('.modal-overlay');\n\n  var handlerCallback = function handlerCallback(event) {\n    var target = event.target;\n\n    var displayCallback = function displayCallback() {\n      modalCallback.classList.toggle('_active');\n      modalOverlay.classList.toggle('_active');\n    };\n\n    if (target.closest('.callback-btn') || !target.closest('.modal-callback') && modalCallback.classList.contains('_active') || target.closest('.modal-close')) {\n      event.preventDefault();\n      displayCallback();\n    }\n  };\n\n  document.body.addEventListener('click', handlerCallback);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCallback);\n\n//# sourceURL=webpack://JS-diplom/./src/modules/modalCallback.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("15290af7aa09c6aa829a")
/******/ })();
/******/ 
/******/ }
);