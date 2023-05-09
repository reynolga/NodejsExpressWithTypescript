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

/***/ 299:
/*!*********************************!*\
  !*** ./src/database/connect.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.connect = void 0;\nvar test_1 = __webpack_require__(/*! src/test/test */ 357);\nvar connect = function () {\n    console.log(\"Connecting..\");\n    (0, test_1.connectNew)();\n    setTimeout(function () { console.log(\"Connected\"); }, 5000);\n};\nexports.connect = connect;\n\n\n//# sourceURL=webpack://app-template/./src/database/connect.ts?");

/***/ }),

/***/ 341:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ 860));\n__webpack_require__(/*! dotenv/config */ 81);\nvar connect_1 = __webpack_require__(/*! src/database/connect */ 299);\n(0, connect_1.connect)();\nvar app = (0, express_1.default)();\nvar port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3001';\napp.get('/', function (_req, res) {\n    res.send('Express + TypeScript Server');\n});\napp.listen(port, function () {\n    console.log(\"[server]: Server is running at http://localhost:\".concat(port));\n});\n\n\n//# sourceURL=webpack://app-template/./src/index.ts?");

/***/ }),

/***/ 357:
/*!**************************!*\
  !*** ./src/test/test.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.connectNew = void 0;\nvar connectNew = function () {\n    console.log(\"Connecting..\");\n    setTimeout(function () { console.log(\"Connected\"); }, 5000);\n};\nexports.connectNew = connectNew;\n\n\n//# sourceURL=webpack://app-template/./src/test/test.ts?");

/***/ }),

/***/ 81:
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ 860:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(341);
/******/ 	
/******/ })()
;