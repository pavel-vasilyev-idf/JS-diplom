/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateJS_diplom"]("main",{

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar carousel = function carousel() {\n  var sliderWrapper = document.querySelector('.services-carousel');\n  var slides = document.querySelectorAll('.services-elements .col-sm-6.col-md-4 .element.relative');\n  var arrowLeft = document.querySelector('.arrow-left');\n  var arrowRight = document.querySelector('.arrow-right');\n  var i = 0; // номер текущей картинки, на экране\n\n  arrowRight.onclick = function () {\n    slides[i].style.overflow = hidden; // прячем текущую картину\n\n    i++;\n\n    if (i >= slides.length) {\n      i = 0; // переменная i равна 0\n    } // slides[i + 1].style.display = 'block';\n\n  };\n\n  arrowLeft.onclick = function () {\n    slides[i].style.display = 'none';\n    i--;\n\n    if (i < 0) {\n      i = slides.length - 1;\n    }\n\n    slides[i - 1].style.display = 'block';\n  }; // /* конфигурация */\n  // let width = 33.33333; // ширина картинки\n  // let count = 3; // видимое количество изображений\n  // let position = 0; // положение ленты прокрутки\n  // arrowLeft.addEventListener('click', () => {\n  //   // сдвиг влево\n  //   position += (width * count);\n  //   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент\n  // //   position = Math.min(position, 0)\n  //   sliderWrapper.style.marginLeft = `${position}px`;\n  // })\n  // arrowRight.addEventListener('click', () => {\n  //   // сдвиг вправо\n  //   position -= width * count;\n  //   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент\n  // //   position = Math.max(position, -width * (slides.length - count));\n  //   sliderWrapper.style.marginRight = `${position}px`;\n  // })\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://JS-diplom/./src/modules/carousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31e18b8fdc7a274d93b2")
/******/ })();
/******/ 
/******/ }
);