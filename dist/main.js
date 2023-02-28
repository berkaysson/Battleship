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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background-image.jpg */ \"./src/style/background-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --background-color:#22223b;\\r\\n  --font-color:#eaf4f4 ;\\r\\n  --grid-color:#90e0ef ;\\r\\n  --grid-color-alt:#caf0f8 ;\\r\\n  --hit-color:#d32525 ;\\r\\n  --miss-color:#03045e ;\\r\\n  --ship-color:#DAA520 ;\\r\\n  --font-light:#ccf0f0 ;\\r\\n\\r\\n  --gap: 0.7rem;\\r\\n  --grid-gap: 2px;\\r\\n  --padding: 1rem;\\r\\n  --padding-sl: 0.5rem;\\r\\n  --padding-lg: 3rem;\\r\\n  --btn-padding: 0.5rem;\\r\\n  --margin: 1.2rem;\\r\\n\\r\\n  --grid-size: 45px;\\r\\n\\r\\n  --grid-border-radius: 3px;\\r\\n  --button-border-radius: 8px;\\r\\n\\r\\n  --font-bold: 900;\\r\\n\\r\\n  --font-lg: 1.5rem;\\r\\n  --font-xlg: 3rem;\\r\\n  --font-sl: 0.9rem;\\r\\n  --font-md: 1.2rem;\\r\\n}\\r\\n\\r\\n@keyframes scale {\\r\\n  0% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n  50% {\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n  65% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n  75% {\\r\\n    transform: scale(0.9);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scale(0.75);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes opacity {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n    transform: scale(0);\\r\\n  }\\r\\n  20% {\\r\\n    opacity: 0.2;\\r\\n    transform: scale(0.4);\\r\\n  }\\r\\n  40% {\\r\\n    opacity: 0.4;\\r\\n    transform: scale(0.8);\\r\\n  }\\r\\n  60% {\\r\\n    opacity: 0.6;\\r\\n    transform: scale(1);\\r\\n  }\\r\\n  80% {\\r\\n    opacity: 0.8;\\r\\n  }\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Main Styles */\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: inherit;\\r\\n  color: var(--font-color);\\r\\n  transition: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: var(--gap);\\r\\n  background-color: var(--background-color);\\r\\n  font-family: 'Titillium Web', sans-serif;\\r\\n  transition: all 0.1s ease-out;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nbody::before{\\r\\n  content: \\\"\\\";\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: -1;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size:auto;\\r\\n  background-repeat: no-repeat;\\r\\n  filter: blur(4px) brightness(.7) saturate(2) contrast(1.2);\\r\\n  box-shadow: inset 0 0 100px 50px rgba(0,0,0,0.7);\\r\\n}\\r\\n\\r\\nheader{\\r\\n  font-size: var(--font-xlg);\\r\\n  font-weight: var(--font-bold);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* Ship Placement */\\r\\n\\r\\n#placement-form{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: var(--gap);\\r\\n}\\r\\n\\r\\n#placement-header{\\r\\n  width: 420px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#placement-header > *{\\r\\n  margin-bottom: .5rem;\\r\\n  margin-right: .5rem;\\r\\n}\\r\\n\\r\\n#placement-approve-btn{\\r\\n  margin-top: 1rem;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n/* Game */\\r\\n\\r\\n#game {\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  width: calc(2*(10*var(--grid-size) + var(--grid-gap)*9) + 150px);\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  grid-template-rows: 1fr 50px;\\r\\n  grid-gap: 4rem;\\r\\n  padding: 0.5rem;\\r\\n  margin: 0.2rem;\\r\\n  margin-bottom: 1rem;\\r\\n  border-radius: 2rem;\\r\\n  backdrop-filter: blur(15px) brightness(2);\\r\\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\\r\\n}\\r\\n\\r\\n#restart-btn{\\r\\n  grid-row: 2/3;\\r\\n  grid-column: 1/3;\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.player-info{\\r\\n  text-align: center;\\r\\n  margin-bottom: var(--margin);\\r\\n  font-weight: var(--font-bold);\\r\\n  font-size: var(--font-lg);\\r\\n}\\r\\n\\r\\n/* Boards */\\r\\n\\r\\n.gameboard {\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  grid-template-columns: repeat(10, 1fr);\\r\\n  grid-template-rows: repeat(10, 1fr);\\r\\n  grid-gap: var(--grid-gap);\\r\\n  width: calc(10*var(--grid-size) + var(--grid-gap)*9);\\r\\n  backdrop-filter: blur(10px);\\r\\n}\\r\\n\\r\\n#player2-gameboard{\\r\\n  cursor: crosshair;\\r\\n}\\r\\n\\r\\n/* Grids */\\r\\n\\r\\n.grid {\\r\\n  background-color: var(--grid-color);\\r\\n  border-radius: var(--grid-border-radius);\\r\\n  height: var(--grid-size);\\r\\n  aspect-ratio: 1/1;\\r\\n  border:1px solid var(--font-light);\\r\\n}\\r\\n\\r\\n#placement-board>.place {\\r\\n  background-color: var(--ship-color);\\r\\n  opacity: 0.9;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#placement-board>.notplace {\\r\\n  background-color: var(--hit-color);\\r\\n  opacity: 0.9;\\r\\n  cursor: not-allowed;\\r\\n}\\r\\n\\r\\n\\r\\n#player2-gameboard>.grid{\\r\\n  background-color: var(--grid-color-alt);\\r\\n  border: 1px var(--grid-color) solid;\\r\\n}\\r\\n\\r\\n.grid:hover:not(#player1-gameboard>.grid,.hit,.miss,#placement-board>.ship, #placement-board>.grid){\\r\\n  border-radius: calc(var(--grid-border-radius)*3);\\r\\n  background-color: var(--grid-color);\\r\\n}\\r\\n\\r\\n/* Ships */\\r\\n\\r\\n.ship:not(#player2-gameboard>.ship) {\\r\\n  background-color: var(--ship-color);\\r\\n  border-radius: 3px;\\r\\n  border:none;\\r\\n  transform: scale(1.08);\\r\\n}\\r\\n\\r\\n.hit {\\r\\n  background-color: var(--hit-color) !important;\\r\\n  border-radius: 2px;\\r\\n}\\r\\n\\r\\n.miss {\\r\\n  border-radius: 6px;\\r\\n  background-color: var(--miss-color) !important;\\r\\n}\\r\\n\\r\\n.hit, .miss {\\r\\n  transform: scale(0.75);\\r\\n  animation: scale 0.3s;\\r\\n}\\r\\n\\r\\n.hit:not(#player1-gameboard>.hit), .miss:not(#player1-gameboard>.miss) {\\r\\n  cursor: not-allowed !important;\\r\\n}\\r\\n\\r\\n/* Buttons */\\r\\n.btn{\\r\\n  background-color: var(--font-light);\\r\\n  color: var(--background-color);\\r\\n  border: 1px solid var(--font-color);\\r\\n  border-radius: var(--button-border-radius);\\r\\n  padding: var(--btn-padding);\\r\\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\\r\\n}\\r\\n\\r\\n.btn>i{\\r\\n  color: inherit;\\r\\n  font-size: var(--font-md);\\r\\n  padding: 0 0.3rem;\\r\\n}\\r\\n\\r\\n.btn:hover{\\r\\n  cursor: pointer;\\r\\n  background-color: var(--font-color);\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n.btn.active{\\r\\n  background-color: var(--background-color);\\r\\n  color: var(--font-color);\\r\\n}\\r\\n\\r\\n.btn[disabled]{\\r\\n  cursor: not-allowed;\\r\\n  opacity: 0.8;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n.close-btn{\\r\\n  background-color: var(--hit-color);\\r\\n  color: var(--font-color);\\r\\n}\\r\\n\\r\\n/* Modal */\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgba(4, 5, 39, 0.8);\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.modal.show {\\r\\n  display: block;\\r\\n  animation: opacity 0.2s;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  font-size: var(--font-lg);\\r\\n  background-color: var(--background-color);\\r\\n  margin: 10% auto;\\r\\n  padding: var(--padding);\\r\\n  border: 1px solid var(--font-light);\\r\\n  border-radius: var(--button-border-radius);\\r\\n  width: 40%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.modal-content>button {\\r\\n  margin-top: var(--padding);\\r\\n}\\r\\n\\r\\n#winner {\\r\\n  font-weight: var(--font-bold);\\r\\n}\\r\\n\\r\\n#win-modal{\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#win-modal>button {\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n#info-modal{\\r\\n  display: none;\\r\\n  padding: var(--padding);\\r\\n  font-size: var(--font-sl);\\r\\n  text-align:justify;\\r\\n}\\r\\n\\r\\n#info-modal>button{\\r\\n  display: block;\\r\\n  width: 25%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n#info-modal>ol{\\r\\n  margin-top: 1rem;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n#info-modal>ol>li{\\r\\n  line-height: 1.2;\\r\\n}\\r\\n\\r\\n/* Responsive */\\r\\n\\r\\n@media screen and (max-width: 1200px) {\\r\\n  :root {\\r\\n    --grid-gap: 1px;\\r\\n    --padding-lg: 2rem;\\r\\n    --margin: 1rem;\\r\\n  \\r\\n    --grid-size: 40px;\\r\\n  \\r\\n    --grid-border-radius: 2px;\\r\\n  \\r\\n    --font-lg: 1.2rem;\\r\\n    --font-xlg: 2rem;\\r\\n    --font-md: 1rem;\\r\\n  }\\r\\n\\r\\n  body::before{\\r\\n    box-shadow: inset 0 0 30px 10px rgba(0,0,0,0.9);\\r\\n  }\\r\\n\\r\\n  #game {\\r\\n    grid-template-columns: 1fr;\\r\\n    grid-template-rows: 1fr 1fr auto;\\r\\n    grid-gap: 0;\\r\\n    width: calc((10*var(--grid-size) + var(--grid-gap)*9) + 4rem);\\r\\n  }\\r\\n\\r\\n  #Player1{\\r\\n    grid-row: 1/2;\\r\\n  }\\r\\n\\r\\n  #Player2{\\r\\n    margin-top: 1.5rem;\\r\\n    grid-row: 2/3;\\r\\n  }\\r\\n\\r\\n  #restart-btn {\\r\\n    margin-top:1rem;\\r\\n    margin-bottom:1rem;\\r\\n    grid-row: 3/4;\\r\\n    height: auto;\\r\\n  }\\r\\n\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n  :root {\\r\\n    --margin: 0.8rem;\\r\\n  \\r\\n    --grid-size: 35px;\\r\\n  \\r\\n    --grid-border-radius: 2px;\\r\\n  }\\r\\n\\r\\n  body{font-size: 12px;}\\r\\n\\r\\n  body::before{\\r\\n    box-shadow: inset 0 0 25px 10px rgba(0,0,0,0.9);\\r\\n  }\\r\\n\\r\\n  #game {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Game/AI.js":
/*!************************!*\
  !*** ./src/Game/AI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AI)\n/* harmony export */ });\nclass AI{\r\n  static getRandomPosition(){\r\n    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\r\n  }\r\n\r\n  static getRandomDirection(){\r\n    const dir = ['hor', 'ver'];\r\n    return dir[Math.floor(Math.random() * dir.length)];\r\n  }\r\n}\n\n//# sourceURL=webpack://battleship/./src/Game/AI.js?");

/***/ }),

/***/ "./src/Game/DOM.js":
/*!*************************!*\
  !*** ./src/Game/DOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  gameDiv: document.getElementById(\"game\"),\r\n  player1Info: document.getElementById(\"player1-info\"),\r\n  player1Gameboard: document.getElementById(\"player1-gameboard\"),\r\n  player2Info: document.getElementById(\"player2-info\"),\r\n  player2Gameboard: document.getElementById(\"player2-gameboard\"),\r\n  restartBtn:  document.getElementById(\"restart-btn\"),\r\n  placementForm: document.getElementById(\"placement-form\"),\r\n  placementBoard: document.getElementById(\"placement-board\"),\r\n  placementInfo: document.getElementById(\"placement-info\"),\r\n  approveBtn: document.getElementById(\"placement-approve-btn\"),\r\n  rotateBtn:  document.getElementById(\"rotate-placement-btn\"),\r\n  removeBtn:  document.getElementById(\"remove-placement-btn\"),\r\n  shipDirInfo: document.getElementById(\"ship-direction\"),\r\n  shipLengthInfo: document.getElementById(\"ship-length\"),\r\n  modal: document.getElementById(\"gameover-modal\"),\r\n  winModal: document.getElementById(\"win-modal\"),\r\n  winnerModal: document.getElementById(\"winner\"),\r\n  restartModalBtn: document.getElementById(\"restart-modal-btn\"),\r\n  statsModal: document.getElementById(\"stats-modal\"),\r\n  infoBtn: document.querySelectorAll(\".info-btn\"),\r\n  infoModal: document.getElementById(\"info-modal\"),\r\n  infoCloseBtn: document.getElementById('modal-close-btn')\r\n});\n\n//# sourceURL=webpack://battleship/./src/Game/DOM.js?");

/***/ }),

/***/ "./src/Game/Game.js":
/*!**************************!*\
  !*** ./src/Game/Game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Ship */ \"./src/modules/Ship.js\");\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AI */ \"./src/Game/AI.js\");\n\r\n\r\n\r\n\r\nconst Game = () => {\r\n  let player1 = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  let player2 = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  let isGameOver = false;\r\n  let winner = '';\r\n\r\n  const placeShipsPerson = (pos) => {\r\n    if (\r\n      player1.gameboard.placeShip([pos[0], pos[1]], pos[2], player1.getShip()) ===\r\n      \"Ship is placed\"\r\n    ) {\r\n      player1.dequeShip();\r\n    }\r\n  }\r\n\r\n  const removeShipsPerson = (shipID) => {\r\n    player1.gameboard.removeShip(shipID);\r\n    player1.addShip(Number(shipID[7]));\r\n  }\r\n\r\n  const placeShipsAI = () => {\r\n    while(player2.getShip() != 'No ship left.'){\r\n      if(player2.gameboard.placeShip(_AI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRandomPosition(), _AI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRandomDirection(), player2.getShip()) === \r\n        \"Ship is placed\"){\r\n          player2.dequeShip()\r\n        }\r\n    }\r\n  }\r\n\r\n  const attackPerson = (position) => {\r\n    checkWinner();\r\n    if(isGameOver === true) return;\r\n    return player2.gameboard.receiveAttack(position);\r\n  }\r\n\r\n  const attackAI = () => {\r\n    let attackPos = _AI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRandomPosition();\r\n    if(!(player1.gameboard.isAvailableToHit(attackPos))){\r\n      attackAI();\r\n    }\r\n    else{\r\n      checkWinner();\r\n      if(isGameOver === true) return;\r\n      player1.gameboard.receiveAttack(attackPos)\r\n      return;\r\n    }\r\n  }\r\n\r\n  const checkWinner = () => {\r\n    if (player1.checkWin(player2)) {\r\n      winner = 'Player 1';\r\n      isGameOver = true \r\n    } else if (player2.checkWin(player1)) {\r\n      winner = 'Computer';\r\n      isGameOver = true ;\r\n    } else {\r\n      isGameOver = false; \r\n    }\r\n  }\r\n\r\n  const getisGameOver = () => {\r\n    return isGameOver;\r\n  }\r\n\r\n  const getWinner = () => {\r\n    return winner;\r\n  }\r\n\r\n  return {\r\n    placeShipsPerson,\r\n    placeShipsAI,\r\n    attackAI,\r\n    checkWinner,\r\n    removeShipsPerson,\r\n    attackPerson,\r\n    attackAI,\r\n    getisGameOver,\r\n    getWinner,\r\n    player1,\r\n    player2,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship/./src/Game/Game.js?");

/***/ }),

/***/ "./src/Game/UI.js":
/*!************************!*\
  !*** ./src/Game/UI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game/Game.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/Game/DOM.js\");\n\r\n\r\n\r\nconst {\r\n  gameDiv,\r\n  player1Info,\r\n  player1Gameboard,\r\n  player2Info,\r\n  player2Gameboard,\r\n  restartBtn,\r\n  placementForm,\r\n  placementBoard,\r\n  placementInfo,\r\n  approveBtn,\r\n  rotateBtn,\r\n  removeBtn,\r\n  shipDirInfo,\r\n  shipLengthInfo,\r\n  modal,\r\n  winModal,\r\n  winnerModal,\r\n  restartModalBtn,\r\n  statsModal,\r\n  infoBtn,\r\n  infoModal,\r\n  infoCloseBtn\r\n} = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\nclass UI{\r\n  static game = (0,_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  static placementMode = 'place';\r\n\r\n  static render(){\r\n    UI.initPlacementBoard();\r\n    UI.initButtons();\r\n  }\r\n\r\n  static initPlacementBoard(){\r\n    for(let row = 0; row < UI.game.player1.gameboard.board.length; row++){\r\n      for(let col = 0; col < UI.game.player1.gameboard.board.length; col++){\r\n        let grid = document.createElement(\"div\");\r\n        grid.className = \"grid\";\r\n        grid.id = `grid-${row}-${col}-P`;\r\n        grid.addEventListener(\"click\", () => {\r\n          if(UI.placementMode === 'place')  UI.#placementHelper(row, col);\r\n          else if(UI.placementMode === 'remove') UI.#removeHelper(Array.from(grid.classList).find(cls => cls.includes('ID')));\r\n        });\r\n        grid.addEventListener('mouseover', () => {  // hover effect\r\n          if(UI.placementMode === 'place') UI.#placementHoverHelper(row, col, 'hover');\r\n          \r\n        });\r\n        grid.addEventListener('mouseout', () => {\r\n          if(UI.placementMode === 'place') UI.#placementHoverHelper(row, col, 'unhover');\r\n        });\r\n\r\n        placementBoard.appendChild(grid);\r\n      }\r\n    }\r\n  }\r\n\r\n  static #placementHelper(row, col){\r\n    if (UI.game.placeShipsPerson([\r\n      row,\r\n      col,\r\n      rotateBtn.getAttribute(\"data-direction\")]) !== false) {\r\n      UI.#infoDisplay();\r\n      if(!(UI.game.player1.getShip() instanceof Object)) approveBtn.removeAttribute('disabled');\r\n  }\r\n  UI.#updateBoard(placementBoard);\r\n  }\r\n\r\n  static #placementHoverHelper(row, col, hover){\r\n    if (!(UI.game.player1.getShip() instanceof Object)) return;\r\n    const axis = rotateBtn.getAttribute(\"data-direction\") === 'ver' ? 'x' : 'y';\r\n    const length = UI.game.player1.getShip().length;\r\n\r\n    for (let i = 0; i < length; i++) {\r\n    const axisValue = axis === 'x' ? row + i : col + i;\r\n    const grid = document.getElementById(`grid-${axis === 'x' ? axisValue : row}-${axis === 'y' ? axisValue : col}-P`);\r\n    if (grid) {\r\n      if (hover === 'hover') grid.classList.add('place');\r\n      else grid.classList.remove('place');\r\n    } else {\r\n      if(hover === 'hover') document.querySelectorAll('.place').forEach((e) => e.classList.add('notplace'));\r\n      else document.querySelectorAll('.notplace').forEach((e) => e.classList.remove('notplace'));\r\n    }\r\n    }\r\n  }\r\n\r\n  static #removeHelper(shipID){\r\n    if(shipID === undefined) return;\r\n    UI.game.removeShipsPerson(shipID);\r\n    UI.#infoDisplay();\r\n    approveBtn.setAttribute('disabled', '');\r\n    UI.#updateBoard(placementBoard);\r\n  }\r\n\r\n  static initGameboards(){\r\n    placementForm.style.display = 'none';\r\n    gameDiv.style.display = 'grid';\r\n    UI.#createBoard(player1Gameboard, 'player1');\r\n    UI.#createBoard(player2Gameboard, 'player2');\r\n    UI.#updateBoard(player1Gameboard, 'player1');\r\n    UI.#updateBoard(player2Gameboard, 'player2');\r\n  }\r\n\r\n  static #updateBoard(boardDiv, player = 'player1'){\r\n    let children = boardDiv.children;\r\n    let board_ = UI.game[`${player}`].gameboard.board;\r\n    for (let child of children) {\r\n      let [posX, posY] = UI.#getGridPosition(child)\r\n      if (board_[posX][posY] instanceof Object && player === 'player1') {\r\n        child.classList.add('ship');\r\n        child.classList.add(`${board_[posX][posY].getID()}`);\r\n        if(child.classList.contains('place')) child.classList.remove('place');\r\n      }\r\n      else if (board_[posX][posY] == null){\r\n        child.setAttribute('class', 'grid');\r\n      }\r\n      if (board_[posX][posY] === 'Hit!'){\r\n        child.setAttribute('class', 'grid hit');\r\n      }\r\n      else if (board_[posX][posY] === 'Miss!'){\r\n        child.setAttribute('class', 'grid miss');\r\n      }\r\n    }\r\n  }\r\n\r\n  static #createBoard(boardDiv, player, className = \"grid\") {\r\n    let gameboard = (player === 'player1') ? UI.game.player1.gameboard : UI.game.player2.gameboard;\r\n    for (let row = 0; row < gameboard.board.length; row++) {\r\n      for (let col = 0; col < gameboard.board.length; col++) {\r\n        let grid = UI.#createGrid(row, col, player[6], className);\r\n        if(player === 'player2'){\r\n          grid.addEventListener('click', () =>{\r\n            UI.#BoardAttackManager(grid);\r\n          });\r\n        }\r\n        boardDiv.appendChild(grid);\r\n      }\r\n    }\r\n  }\r\n\r\n  static #BoardAttackManager(grid){\r\n    if((UI.game.attackPerson(UI.#getGridPosition(grid))) != false){\r\n      UI.game.attackAI();\r\n    }\r\n    if(UI.game.getisGameOver()) UI.#gameOver();\r\n    UI.#updateBoard(player2Gameboard, 'player2');\r\n    UI.#updateBoard(player1Gameboard, 'player1');\r\n  }\r\n\r\n  static #createGrid(row, col, player, className = \"grid\") {\r\n    let grid = document.createElement(\"div\");\r\n    grid.className = className;\r\n    grid.id = `grid-${row}-${col}-G-${player}`;\r\n    return grid;\r\n  }\r\n\r\n  static #getGridPosition(grid){\r\n    return [Number(grid.id[5]), Number(grid.id[7])];\r\n  }\r\n\r\n  static #infoDisplay(){\r\n    shipLengthInfo.textContent =\r\n      UI.game.player1.getShip() instanceof Object\r\n        ? UI.game.player1.getShip().length\r\n        : UI.game.player1.getShip();\r\n  }\r\n\r\n  static initButtons(){\r\n    UI.#initRotateButton();\r\n    UI.#initApproveButton();\r\n    UI.#initRemoveButton();\r\n    UI.#initRestartButtons();\r\n    UI.#initInfoButton();\r\n    UI.#initCloseBtn();\r\n  }\r\n\r\n  static #initRotateButton(){\r\n    rotateBtn.addEventListener(\"click\", () => {\r\n      let currentDirection = rotateBtn.getAttribute(\"data-direction\");\r\n      if (currentDirection === \"hor\") {\r\n        rotateBtn.setAttribute(\"data-direction\", \"ver\");\r\n        shipDirInfo.textContent = \"Vertically\"; // implement into infoDisplay method\r\n      } else {\r\n        rotateBtn.setAttribute(\"data-direction\", \"hor\");\r\n        shipDirInfo.textContent = \"Horizantally\"; // implement into infoDisplay method\r\n      }\r\n    });\r\n  }\r\n\r\n  static #initApproveButton(){\r\n    approveBtn.addEventListener(\"click\", () => {\r\n      UI.game.placeShipsAI();\r\n      UI.initGameboards();\r\n    });\r\n  }\r\n\r\n  static #initRemoveButton(){\r\n    removeBtn.addEventListener('click', () => {\r\n      removeBtn.classList.toggle('active');\r\n      if(removeBtn.textContent === 'Remove Ship'){\r\n        removeBtn.textContent = 'Remove mode active';\r\n        placementInfo.textContent = 'Click ships to remove.';\r\n        shipDirInfo.style.display = 'none';\r\n        shipLengthInfo.style.display = 'none';\r\n        UI.placementMode = 'remove';\r\n      } \r\n      else if(removeBtn.textContent === 'Remove mode active'){\r\n        removeBtn.textContent = 'Remove Ship';\r\n        placementInfo.textContent = 'Please place ship of this length :';\r\n        shipDirInfo.style.display = 'inline-block';\r\n        shipLengthInfo.style.display = 'inline-block';\r\n        UI.placementMode = 'place';\r\n      }\r\n    });\r\n  }\r\n\r\n  static #initRestartButtons(){\r\n    restartBtn.addEventListener('click', () => {\r\n      UI.#restartGame();\r\n    });\r\n\r\n    restartModalBtn.addEventListener('click', () => {\r\n      UI.#restartGame();\r\n      modal.classList.remove('show');\r\n    });\r\n  }\r\n\r\n  static #initInfoButton(){\r\n    infoBtn.forEach(btn => {\r\n      btn.addEventListener('click',() =>{\r\n      modal.classList.add('show');\r\n      infoModal.style.display = 'block';\r\n      });\r\n    })\r\n  }\r\n\r\n  static #initCloseBtn(){\r\n    infoCloseBtn.addEventListener('click', () => {\r\n      modal.classList.remove('show');\r\n      infoModal.style.display = 'none';\r\n    });\r\n  }\r\n\r\n  static #gameOver(){\r\n    modal.classList.add('show');\r\n    winModal.style.display = 'block';\r\n    winnerModal.textContent = UI.game.getWinner();\r\n  }\r\n\r\n  static #restartGame(){\r\n    UI.game = (0,_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    UI.placementMode = 'place';\r\n    placementForm.style.display = 'flex';\r\n    gameDiv.style.display = 'none';\r\n    player1Gameboard.textContent = '';\r\n    player2Gameboard.textContent = '';\r\n    UI.#updateBoard(placementBoard);\r\n    UI.#updateBoard(player1Gameboard, 'player1');\r\n    UI.#updateBoard(player2Gameboard, 'player2');\r\n    approveBtn.setAttribute('disabled', '');\r\n    removeBtn.classList.remove('active');\r\n    UI.#infoDisplay();\r\n    winModal.style.display = 'none';\r\n  }\r\n}\n\n//# sourceURL=webpack://battleship/./src/Game/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/UI */ \"./src/Game/UI.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n\r\n\r\n\r\n_Game_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = (size) => {\r\n  let board = createBoard(size);\r\n\r\n  function placeShip(startPos, dir, ship) {\r\n    const endPos = getEndPosition(startPos, dir, ship.length);\r\n    if (isAvailableToPlace(startPos, endPos)) {\r\n      for (let x = startPos[0]; x <= endPos[0]; x++) {\r\n        for (let y = startPos[1]; y <= endPos[1]; y++) {\r\n          board[x][y] = ship;\r\n        }\r\n      }\r\n      return \"Ship is placed\";\r\n    } else {\r\n      return \"Invalid position.\";\r\n    }\r\n  }\r\n\r\n  function receiveAttack(hitPos) {\r\n    if (isInBoard(hitPos)) {\r\n      if (\r\n        board[hitPos[0]][hitPos[1]] === \"Hit!\" ||\r\n        board[hitPos[0]][hitPos[1]] === \"Miss!\"\r\n      )\r\n        return false;\r\n      else if (board[hitPos[0]][hitPos[1]] instanceof Object) {\r\n        board[hitPos[0]][hitPos[1]].hit();\r\n        if (board[hitPos[0]][hitPos[1]].isSunk()) {\r\n          board[hitPos[0]][hitPos[1]] = \"Hit!\";\r\n          return \"Ship Sunk!\";\r\n        }\r\n        board[hitPos[0]][hitPos[1]] = \"Hit!\";\r\n      } else if (board[hitPos[0]][hitPos[1]] == null) {\r\n        board[hitPos[0]][hitPos[1]] = \"Miss!\";\r\n      }\r\n    } else return false;\r\n  }\r\n\r\n  function removeShip(shipID) {\r\n    for (let x = 0; x < board.length; x++) {\r\n      for (let y = 0; y < board.length; y++) {\r\n        if (board[x][y] instanceof Object) {\r\n          if (board[x][y].getID() === shipID) {\r\n            board[x][y] = null;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  function isShipLeft() {\r\n    for (let x = 0; x < board.length; x++) {\r\n      for (let y = 0; y < board.length; y++) {\r\n        if (board[x][y] instanceof Object) {\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  function isInBoard(position) {\r\n    if (\r\n      position[0] < 0 ||\r\n      position[1] < 0 ||\r\n      position[0] > board.length - 1 ||\r\n      position[1] > board.length - 1\r\n    ) {\r\n      return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  function isEmpty(position) {\r\n    if (board[position[0]][position[1]] == null) return true;\r\n    else return false;\r\n  }\r\n\r\n  function isAvailableToPlace(startPos, endPos) {\r\n    if (isInBoard(startPos) && isInBoard(endPos)) {\r\n      for (let x = startPos[0]; x <= endPos[0]; x++) {\r\n        for (let y = startPos[1]; y <= endPos[1]; y++) {\r\n          if (!isEmpty([x, y])) return false;\r\n        }\r\n      }\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  function isAvailableToHit(position) {\r\n    if (\r\n      board[position[0]][position[1]] !== \"Hit!\" &&\r\n      board[position[0]][position[1]] !== \"Miss!\"  && isInBoard(position)\r\n    )\r\n      return true;\r\n    else return false;\r\n  }\r\n\r\n  function getEndPosition(startPos, dir, distance) {\r\n    let endPos;\r\n    if (dir === \"hor\") endPos = [startPos[0], startPos[1] + distance - 1];\r\n    else if (dir === \"ver\") endPos = [startPos[0] + distance - 1, startPos[1]];\r\n    else return false;\r\n\r\n    return endPos;\r\n  }\r\n\r\n  return {\r\n    board,\r\n    placeShip,\r\n    receiveAttack,\r\n    isShipLeft,\r\n    isInBoard,\r\n    isEmpty,\r\n    getEndPosition,\r\n    removeShip,\r\n    isAvailableToHit,\r\n  };\r\n};\r\n\r\nfunction createBoard(size) {\r\n  if (typeof size !== \"number\") return \"Size must be number.\";\r\n\r\n  let board = [];\r\n  for (let i = 0; i < size; i++) {\r\n    let row = [];\r\n    for (let j = 0; j < size; j++) {\r\n      row.push(null);\r\n    }\r\n    board.push(row);\r\n  }\r\n  return board;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\r\n\r\n\r\nconst Player = () => {\r\n  let gameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10); // gameboard size idetifier\r\n  let ships = [(0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(5), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2)];\r\n\r\n  function attack(enemy, hitPos) {\r\n    if (checkEnemy(enemy)) {\r\n      enemy.gameboard.receiveAttack(hitPos);\r\n    } else return \"Invalid Player.\";\r\n  }\r\n\r\n  function checkWin(enemy) {\r\n    if (checkEnemy(enemy)) {\r\n      if (!enemy.gameboard.isShipLeft()) return true;\r\n      else return false;\r\n    } else return \"Invalid Player.\";\r\n  }\r\n\r\n  function getShip() {\r\n    if (ships.length === 0) return \"No ship left.\";\r\n    ships = ships.sort((b, a) => a.length - b.length);\r\n    return ships[0];\r\n  }\r\n\r\n  function dequeShip() {\r\n    ships.shift();\r\n  }\r\n\r\n  function addShip(shipLength) {\r\n    ships.unshift((0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipLength));\r\n  }\r\n\r\n  function checkEnemy(enemy) {\r\n    if (enemy instanceof Object) {\r\n      return true;\r\n    } else return false;\r\n  }\r\n\r\n  return {\r\n    gameboard,\r\n    attack,\r\n    checkWin,\r\n    getShip,\r\n    dequeShip,\r\n    addShip,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\r\n  let hits = 0;\r\n  const id = `shipID-${length}-${Date.now()}${Math.floor(Math.random() * 10)}`;\r\n\r\n  return {\r\n    hit: () => hits++,\r\n    isSunk: () => hits === length,\r\n    getID: () => id,\r\n    length,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Ship.js?");

/***/ }),

/***/ "./src/style/background-image.jpg":
/*!****************************************!*\
  !*** ./src/style/background-image.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a133eafd14c8a66648a9.jpg\";\n\n//# sourceURL=webpack://battleship/./src/style/background-image.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;