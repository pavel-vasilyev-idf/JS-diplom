/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateJS_diplom"]("main",{

/***/ "./src/modules/validateInputs.js":
/*!***************************************!*\
  !*** ./src/modules/validateInputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateInputs = function validateInputs() {\n  var formName = document.querySelectorAll('[name=fio]'),\n      formPhone = document.querySelectorAll('[name=tel]');\n  var error = new Set();\n\n  var validateNumberInputs = function validateNumberInputs() {\n    calcInputs.forEach(function (el) {\n      el.value = el.value.replace(/[^\\d]/g, '');\n    });\n  };\n\n  var validateLetterInputs = function validateLetterInputs(input) {\n    input.value = input.value.replace(/[^а-яё0-9\\.\\,\\:\\-\\!\\? ]/gi, '');\n  };\n\n  var inputsHandler = function inputsHandler(e) {\n    if (e.target.matches('.calc-item')) {\n      validateNumberInputs();\n    }\n\n    if (e.target.matches('[name=fio]')) {\n      e.target.value = e.target.value.replace(/[^а-яё\\-\\ ]/gi, '');\n    }\n\n    if (e.target.matches('#form2-message')) {\n      validateLetterInputs(e.target);\n    }\n\n    if (e.target.matches('[name=user_email]')) {\n      e.target.value = e.target.value.replace(/[^a-z0-9\\@\\_\\-\\.\\!\\~\\*\\']/gi, '');\n    }\n\n    if (e.target.matches('[name=tel]')) {\n      e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-\\+]/g, '');\n\n      if (e.target.value.length > 10) {\n        e.target.value = e.target.value.substring(0, 11);\n      }\n    }\n  };\n\n  var trim = function trim(input) {\n    input.value = input.value.replace(/\\s+/g, ' ');\n    input.value = input.value.replace(/\\-+/g, '-');\n    var inputToExp = new RegExp(\"ReGeX\" + input.value + \"ReGeX\");\n\n    if (/^[/ /-]/.test(inputToExp)) {\n      input.value = input.value.replace(/^[/ /-]/, '');\n    }\n\n    if (/[/ /-]$/.test(inputToExp)) {\n      input.value = input.value.replace(/[/ /-]$/, '');\n    }\n  };\n\n  var capitalize = function capitalize(input) {\n    var inputValue = input.value;\n    return inputValue.split(' ').map(function (item) {\n      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();\n    }).join(' ');\n  };\n\n  var controlInputs = function controlInputs(input, exp) {\n    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Введите корректные данные';\n\n    if (!input.value.match(exp)) {\n      error.add(input.value);\n      input.value = '';\n    }\n  };\n\n  formName.forEach(function (el) {\n    el.addEventListener('blur', function () {\n      trim(el);\n      el.value = capitalize(el);\n      controlInputs(el, /[а-яё]{2,}/gi);\n    });\n  }); // formMessage.forEach(el => {\n  // \tel.addEventListener('blur', () => {\n  // \t\ttrim(el);\n  // \t\tel.value = capitalize(el);\n  // \t\tcontrolInputs(el, /[а-яё]{2,}/gi);\n  // \t})\n  // })\n  // formEmail.forEach(el => {\n  //     el.addEventListener('blur', () => {\n  //         el.value = el.value.replace(/\\s/g, '');\n  //         controlInputs(el, /\\w+@\\w+.\\w{2,3}/g);\n  //     })\n  // })\n\n  formPhone.forEach(function (el) {\n    el.addEventListener('blur', function () {\n      trim(el);\n      controlInputs(el, /\\+?([-()]*\\d){7,10}/g);\n    });\n  });\n  window.addEventListener('input', inputsHandler);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInputs);\n\n//# sourceURL=webpack://JS-diplom/./src/modules/validateInputs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4b8ade3d0a009a7b981b")
/******/ })();
/******/ 
/******/ }
);