/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_GajoActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GajoActive */ \"./src/modules/GajoActive.js\");\n/* harmony import */ var _modules_GajoDataSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GajoDataSet */ \"./src/modules/GajoDataSet.js\");\n/* harmony import */ var _modules_GajoSay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/GajoSay */ \"./src/modules/GajoSay.js\");\n/**\r\n * Importar todos los gajos de la mandarina\r\n */\n\n\n\n/**\r\n * Configuraciones iniciales\r\n */\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  /**\r\n   * Propiedades básicas dataSet\r\n   */\n  (0,_modules_GajoDataSet__WEBPACK_IMPORTED_MODULE_1__.listenDataSet)();\n  /**\r\n   * Iniciar Gajo Say\r\n   */\n\n  var say = document.createElement(\"div\");\n  say.setAttribute(\"class\", \"say\");\n  say.setAttribute(\"id\", \"gajo-say\");\n  document.querySelector(\"body\").appendChild(say);\n  /**\r\n   * Iniciar Gajo Spinner\r\n   */\n\n  var spinner = document.createElement(\"div\");\n  var content = document.createElement(\"div\");\n  var mask1 = document.createElement(\"div\");\n  var mask2 = document.createElement(\"div\");\n  spinner.setAttribute(\"class\", \"spinner\");\n  spinner.setAttribute(\"id\", \"gajo-spinner\");\n  content.setAttribute(\"class\", \"spinner-content\");\n  mask1.setAttribute(\"class\", \"mask1\");\n  mask2.setAttribute(\"class\", \"mask2\");\n  spinner.appendChild(content);\n  spinner.appendChild(mask1);\n  spinner.appendChild(mask2);\n  document.querySelector(\"body\").appendChild(spinner);\n  /**\r\n   * Iniciar Gajo Cabinet\r\n   */\n\n  document.querySelectorAll(\".cabinet\").forEach(function (cabinet) {\n    var id = \"#\" + cabinet.id; //#DRAWER1\n\n    document.querySelectorAll(\".cabinet-open\").forEach(function (btn) {\n      if (btn.dataset.target == id) {\n        btn.addEventListener(\"click\", function () {\n          cabinet.classList.toggle(\"active\");\n          btn.classList.toggle(\"active\");\n        });\n      }\n    });\n  });\n  /**\r\n   * Iniciar Gajo Modal\r\n   */\n\n  document.querySelectorAll(\".modal\").forEach(function (modal) {\n    var id = \"#\" + modal.id; // #MODAL1\n    // Abrir Modal\n\n    document.querySelectorAll(\".modal-open\").forEach(function (btn) {\n      if (btn.dataset.target == id) {\n        btn.addEventListener(\"click\", function () {\n          document.querySelector(id).classList.add(\"active\");\n        });\n      }\n    }); // Cerrar Modal\n\n    document.querySelectorAll(id + \" .modal-close\").forEach(function (btn) {\n      btn.addEventListener(\"click\", function () {\n        document.querySelector(id).classList.remove(\"active\");\n      });\n    });\n  });\n  /**\r\n   * Iniciar Gajo Navbar\r\n   */\n\n  document.querySelectorAll(\".navbar .menu\").forEach(function (menu) {\n    var id = \"#\" + menu.id; // #MENU1\n\n    document.querySelectorAll(\".menu-open\").forEach(function (btn) {\n      if (btn.dataset.target == id) {\n        btn.addEventListener(\"click\", function () {\n          menu.classList.toggle(\"active\");\n          btn.classList.toggle(\"active\");\n        });\n      }\n    });\n  });\n  /**\r\n   * Iniciar Gajo Tab\r\n   */\n\n  document.querySelectorAll(\".tab\").forEach(function (tab) {\n    var id = \"#\" + tab.id;\n    document.querySelectorAll(id + \">.tab-header>.tab-open\").forEach(function (tabOpen) {\n      if (tabOpen.classList.contains(\"disabled\")) {\n        return;\n      }\n\n      tabOpen.addEventListener(\"click\", function (e) {\n        // Desactivar todos los Tabs\n        document.querySelectorAll(id + \">.tab-header>.tab-open, \" + id + \">.tab-body>.tab-content\").forEach(function (elem) {\n          elem.classList.remove(\"active\");\n        }); // Activar Tab\n\n        tabOpen.classList.add(\"active\");\n        document.querySelector(id + \">.tab-body>.tab-content\" + tabOpen.dataset.target).classList.add(\"active\");\n      });\n    });\n  }); // Ready\n\n  console.log(\"Mandarina is ready...\\nCheck the documentation: https://mandarinacss.github.io/mandarina/\");\n});\n/**\r\n * Test de Cheatsheet\r\n */\n\ndocument.querySelector('#testSpinner').addEventListener('click', function () {\n  (0,_modules_GajoActive__WEBPACK_IMPORTED_MODULE_0__.show)('#gajo-spinner');\n  setTimeout(function () {\n    (0,_modules_GajoActive__WEBPACK_IMPORTED_MODULE_0__.hide)('#gajo-spinner');\n  }, 3000);\n});\ndocument.querySelector('#testSayOk').addEventListener('click', function () {\n  return (0,_modules_GajoSay__WEBPACK_IMPORTED_MODULE_2__.sayOk)();\n});\ndocument.querySelector('#testSayError').addEventListener('click', function () {\n  return (0,_modules_GajoSay__WEBPACK_IMPORTED_MODULE_2__.sayError)();\n});\ndocument.querySelector('#testSayWarning').addEventListener('click', function () {\n  return (0,_modules_GajoSay__WEBPACK_IMPORTED_MODULE_2__.sayWarning)();\n});\ndocument.querySelector('#testSayInfo').addEventListener('click', function () {\n  return (0,_modules_GajoSay__WEBPACK_IMPORTED_MODULE_2__.sayInfo)();\n});\ndocument.querySelector('#testSayAny').addEventListener('click', function () {\n  return (0,_modules_GajoSay__WEBPACK_IMPORTED_MODULE_2__.sayAny)({\n    title: 'Título',\n    text: 'Algún texto personalizado',\n    icon: '&#8987;'\n  });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/GajoActive.js":
/*!***********************************!*\
  !*** ./src/modules/GajoActive.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"hide\": () => (/* binding */ hide)\n/* harmony export */ });\n/**\r\n * Activa un componente\r\n * @param {String} selector Selector de etiqueta\r\n * @returns {void}\r\n */\nvar show = function show(selector) {\n  return document.querySelector(selector).classList.add(\"active\");\n};\n/**\r\n * Desactiva un componente\r\n * @param {String} selector Selector de etiqueta\r\n * @returns {void}\r\n */\n\nvar hide = function hide(selector) {\n  return document.querySelector(selector).classList.remove(\"active\");\n};\n\n//# sourceURL=webpack:///./src/modules/GajoActive.js?");

/***/ }),

/***/ "./src/modules/GajoDataSet.js":
/*!************************************!*\
  !*** ./src/modules/GajoDataSet.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenDataSet\": () => (/* binding */ listenDataSet)\n/* harmony export */ });\n/**\r\n * Activar los dataset\r\n */\nvar listenDataSet = function listenDataSet() {\n  document.querySelectorAll(\"body *\").forEach(function (item) {\n    if (item.dataset.height) item.style.height += item.dataset.height;\n    if (item.dataset.minHeight) item.style.minHeight += item.dataset.minHeight;\n    if (item.dataset.maxHeight) item.style.maxHeight += item.dataset.maxHeight;\n    if (item.dataset.width) item.style.width += item.dataset.width;\n    if (item.dataset.minWidth) item.style.minWidth += item.dataset.minWidth;\n    if (item.dataset.maxWidth) item.style.maxWidth += item.dataset.maxWidth;\n    if (item.dataset.bg) item.style.backgroundImage += \"url(\" + item.dataset.bg + \")\";\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/GajoDataSet.js?");

/***/ }),

/***/ "./src/modules/GajoSay.js":
/*!********************************!*\
  !*** ./src/modules/GajoSay.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sayAny\": () => (/* binding */ sayAny),\n/* harmony export */   \"sayOk\": () => (/* binding */ sayOk),\n/* harmony export */   \"sayError\": () => (/* binding */ sayError),\n/* harmony export */   \"sayWarning\": () => (/* binding */ sayWarning),\n/* harmony export */   \"sayInfo\": () => (/* binding */ sayInfo)\n/* harmony export */ });\n/**\r\n * Array de botones para enviar al gajo Say dentro del objeto Message\r\n * @typedef {Object} btn\r\n * @property {String} text Texto del boton\r\n * @property {String} color Color del boton\r\n */\n\n/**\r\n * Objeto mensaje que recibe el gajo Say\r\n * @typedef {Object} Message\r\n * @property {String} title Titulo del mensaje\r\n * @property {String} text Cuerpo del mensaje\r\n * @property {String} icon Presets o iconos personalizados en formato decimal\r\n * @property {Array<btn>} btn Configuracion de botones indexados\r\n */\n\n/**\r\n * Muestra un mensaje cualquiera\r\n * @param {Message} message {title:'', text:'', btn:'', icon:''}\r\n * @returns {void}\r\n */\nvar sayAny = function sayAny(message) {\n  return new Promise(function (resolve, reject) {\n    // Establecer icono\n    var icon;\n\n    switch (message.icon) {\n      case false:\n        icon = \"❔\";\n        break;\n\n      case \"ok\":\n        icon = \"✔️\";\n        break;\n\n      case \"error\":\n        icon = \"❌\";\n        break;\n\n      case \"warning\":\n        icon = \"⚠️\";\n        break;\n\n      case \"info\":\n        icon = \"❔\";\n        break;\n\n      default:\n        icon = message.icon;\n        break;\n    } // Desagregar objeto mensaje\n\n\n    var title = message.title ? message.title : \"Aviso\";\n    var text = message.text;\n    var arrBtns = message.btn ? message.btn : [{\n      text: \"Ok\",\n      color: \"notify\"\n    }];\n    var body = \"\\n            <div class=\\\"say-content white\\\">\\n                <div class=\\\"say-header\\\" id=\\\"say-title\\\">\\n                    <h1>\".concat(icon, \"</h1>\\n                    <h5>\").concat(title, \"</h5>\\n                </div>\\n                <div class=\\\"say-body\\\" id=\\\"say-text\\\">\\n                    <p>\").concat(text, \"</p>\\n                </div>\\n                <div class=\\\"say-footer\\\" id=\\\"say-btns\\\"></div>\\n            </div>\\n        \"); // Escribir mensaje\n\n    var say = document.querySelector(\"#gajo-say\");\n    say.innerHTML = body;\n    say.classList.add(\"active\");\n    document.querySelector(\"#gajo-say .say-content\").classList.add(\"active\"); // Insertar botones\n\n    var i = 0;\n    arrBtns.forEach(function (btn) {\n      document.querySelector(\"#gajo-say #say-btns\").innerHTML += \"\\n                <button class=\\\"btn \".concat(btn.color, \"\\\" data-index=\\\"\").concat(i++, \"\\\">\").concat(btn.text, \"</button>\\n            \");\n    });\n    document.querySelectorAll(\"#gajo-say button\").forEach(function (btn) {\n      btn.addEventListener(\"click\", function (e) {\n        // Limpiar mensaje y resolver\n        say.innerHTML = \"\";\n        say.classList.remove(\"active\");\n        resolve(e.target.dataset.index);\n      });\n    });\n  });\n};\n/**\r\n * Muestra un mensaje de conformidad\r\n * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}\r\n * @returns {void}\r\n */\n\nvar sayOk = function sayOk() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return new Promise(function (resolve, reject) {\n    var title = obj.title ? obj.title : \"Enhorabuena\";\n    var text = obj.text ? obj.text : \"Se completó la tarea con éxito\";\n    var arrBtns = [{\n      text: \"Ok\",\n      color: \"green\"\n    }];\n    sayAny({\n      title: title,\n      text: text,\n      btn: arrBtns,\n      icon: \"ok\"\n    }).then(function (index) {\n      return resolve(index);\n    });\n  });\n};\n/**\r\n * Muestra un mensaje de error\r\n * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}\r\n * @returns {void}\r\n */\n\nvar sayError = function sayError() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return new Promise(function (resolve, reject) {\n    var title = obj.title ? obj.title : \"Error\";\n    var text = obj.text ? obj.text : \"No se pudo completar la tarea\";\n    var arrBtns = [{\n      text: \"Ok\",\n      color: \"red\"\n    }];\n    sayAny({\n      title: title,\n      text: text,\n      btn: arrBtns,\n      icon: \"error\"\n    }).then(function (index) {\n      return resolve(index);\n    });\n  });\n};\n/**\r\n * Muestra un mensaje de advertencia\r\n * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}\r\n * @returns {void}\r\n */\n\nvar sayWarning = function sayWarning() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return new Promise(function (resolve, reject) {\n    var title = obj.title ? obj.title : \"Atención\";\n    var text = obj.text ? obj.text : \"¿Confirma que desea proceder con los cambios?\";\n    var arrBtns = [{\n      text: \"Sí\",\n      color: \"green\"\n    }, {\n      text: \"No\",\n      color: \"red\"\n    }];\n    sayAny({\n      title: title,\n      text: text,\n      btn: arrBtns,\n      icon: \"warning\"\n    }).then(function (index) {\n      return resolve(index);\n    });\n  });\n};\n/**\r\n * Muestra un mensaje informativo\r\n * @param {Object} [obj] {title:'', text:'', btn:'', icon:''}\r\n * @returns {void}\r\n */\n\nvar sayInfo = function sayInfo() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return new Promise(function (resolve, reject) {\n    var title = obj.title ? obj.title : \"Notificación\";\n    var text = obj.text ? obj.text : \"¿Confirma que desea proceder con los cambios?\";\n    var arrBtns = [{\n      text: \"Sí\",\n      color: \"green\"\n    }, {\n      text: \"No\",\n      color: \"red\"\n    }];\n    sayAny({\n      title: title,\n      text: text,\n      btn: arrBtns,\n      icon: \"info\"\n    }).then(function (index) {\n      return resolve(index);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/GajoSay.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;