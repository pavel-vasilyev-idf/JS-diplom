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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeonBlock = function accordeonBlock() {\n  var accordeon = document.querySelector('.accordeon');\n  var accordeonTitle = accordeon.querySelectorAll('.title');\n  var accordeonContent = accordeon.querySelectorAll('.element-content');\n\n  var toggleAccordeon = function toggleAccordeon(index) {\n    for (var i = 0; i < accordeonContent.length; i++) {\n      if (index === i) {\n        accordeonTitle[i].classList.add('active');\n        accordeonContent[i].classList.remove('element-content_active');\n      } else {\n        accordeonTitle[i].classList.remove('active');\n        accordeonContent[i].classList.add('element-content_active');\n      }\n    }\n  };\n\n  accordeon.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('title')) {\n      accordeonTitle.forEach(function (item, i) {\n        if (item === target) {\n          toggleAccordeon(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeonBlock);\n\n//# sourceURL=webpack://JS-diplom/./src/modules/accordeonBlock.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("139209322d8498ec3837")
/******/ })();
/******/ 
/******/ }
);