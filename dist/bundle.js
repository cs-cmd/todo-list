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

/***/ "./node_modules/css-loader/dist/cjs.js!./res/styles/main-style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./res/styles/main-style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/noto-sans/NotoSans-Regular.ttf */ \"./res/fonts/noto-sans/NotoSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: Noto;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n/* page setup styles */\nhtml {\n    height: 100vh;\n    font-family: Noto, sans-serif;\n}\n\nbody {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 0px;\n    padding: 0px;\n    overflow: scroll;\n    background-color: var(--main-bg);\n}\n\nbutton {\n    border: none;\n    background-color: var(--main-bg);\n    color: white;\n    border-radius: 5px;\n}\n\n.todo-header {\n    display: flex;\n    justify-content: center;\n    color: white;\n    text-decoration: underline;\n}\n\n.main-section {\n    display: flex;\n    overflow: scroll;\n    height: 100%;\n}\n\n:root {\n    --main-bg: #00293C;\n    --container-bg: #B6E8FF;\n    --proj-unselected: #2EBDFF;\n    --proj-selected: #0075AB;\n\n    --low-prio-border: #25DAB4;\n    --low-prio-bg: #25DAB490;\n    --med-prio-border: #E8F10E;\n    --med-prio-bg: #E8F10E90;\n    --high-prio-border: #EE8C11;\n    --high-prio-bg: #EE8C1190;\n    --urge-prio-border: #FB0409;\n    --urge-prio-bg: #FB040990;\n}\n\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 5px;\n    overflow: scroll;\n    padding: 10px;\n    gap: 15px;\n    background-color: var(--container-bg);\n    border-radius: 1rem;\n}\n\n.project-container {\n    flex: 1 1 auto;\n    max-width: 500px;\n    overflow: scroll;\n}\n\n.todo-container {\n    flex: 1 1 auto;\n}\n\n.item {\n    display: flex;\n    justify-content: space-between;\n    transition: background-color .5s,\n        border-radius .5s;\n}\n\n.display {\n    width: 90%;\n    background-color: var(--proj-unselected);\n}\n\n.display.is-selected {\n    background-color: var(--proj-selected) !important;\n    border-radius: 15px;\n}\n\n.todo-page-item {\n    width: min(50%, 500px);\n    cursor: pointer;\n}\n\n.todo-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.low-prio {\n    border: 2px solid var(--low-prio-border);\n    background-color: var(--low-prio-bg);\n}\n\n.med-prio {\n    border: 2px solid var(--med-prio-bg);\n    background-color: var(--med-prio-bg);\n}\n\n.high-prio {\n    border: 2px solid var(--high-prio-bg);\n    background-color: var(--high-prio-bg);\n}\n\n.urge-prio {\n    border: 2px solid var(--urge-prio-bg);\n    background-color: var(--urge-prio-bg);\n    color: white;\n}\n\n.todo-title {\n    overflow:hidden;\n    white-space: nowrap;\n}\n\n.todo-notes {\n    height: 0ch;\n    margin: 0px;\n    overflow: hidden;\n    word-wrap: break-word;\n    text-overflow: ellipsis;\n    transition: height .25s;\n    width: 100%;\n}\n\n.todo-notes.hovering {\n    height: 3ch;\n}\n\n.todo-notes.dropped {\n    height: 10ch !important;\n    overflow: scroll;\n}\n\n#todo-entry-form{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; \n    gap: 1rem;\n    width: min(500px, 90%);\n}\n\n#priority-select {\n    grid-column: 2 / 3;\n}\n\n#todo-title-field {\n    grid-column: 1/3;\n}\n\n#todo-notes-field {\n    grid-column: 1 / 4;\n    grid-row: 3 / 5;\n    resize: none;\n}\n\n#add-todo-button {\n    grid-row: 5/6;\n    grid-column: 2/3;\n}\n\n.entry {\n    padding: 1rem;\n    width: 80%;\n}\n.project-title {\n    margin-left: 15px;\n}\n\n.item-buttons {\n    align-self: center;\n    justify-self: flex-end;\n    margin-right: 15px;\n}\n\n.page-footer {\n    width: 100%;\n    text-align: center;\n    color: white;\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n}\n\n.footer-text {\n    margin: 0px;\n}\n\n.source-link {\n    transition: filter .5s;\n}\n.source-link:visited, \n.source-link:active,\n.source-link:link {\n    color: white;\n}\n\n.source-link:hover {\n    filter: brightness(50%)\n}\n\n\n.project-container-mobile {\n\n}\n\n\n\n\n\n\n\n@media screen and (max-width: 500px) {\n    .project-container {\n        display: none;    \n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./res/styles/main-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./res/styles/main-style.css":
/*!***********************************!*\
  !*** ./res/styles/main-style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main-style.css */ \"./node_modules/css-loader/dist/cjs.js!./res/styles/main-style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./res/styles/main-style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/controller/ButtonState.js":
/*!***********************************************!*\
  !*** ./src/classes/controller/ButtonState.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buttonState = (() => {\n    let currentButton = null;\n\n    // returns boolean (true if button changed, false if else)\n    const changeButton = (newButton) => {\n        if (currentButton === newButton) {\n            return false;\n        }\n\n        if (currentButton !== null) {\n            currentButton.classList.remove('is-selected');\n        } \n\n        newButton.classList.add('is-selected');\n        currentButton = newButton;\n        return true;\n    };\n\n    return { changeButton };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonState);\n\n//# sourceURL=webpack://odin-todo/./src/classes/controller/ButtonState.js?");

/***/ }),

/***/ "./src/classes/controller/UI.js":
/*!**************************************!*\
  !*** ./src/classes/controller/UI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_ProjectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ProjectManager */ \"./src/classes/model/ProjectManager.js\");\n/* harmony import */ var _model_TodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/TodoItem */ \"./src/classes/model/TodoItem.js\");\n/* harmony import */ var _ButtonState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonState */ \"./src/classes/controller/ButtonState.js\");\n\n\n\n\nconst UI = (() => {\n    const todoContainer = document.getElementById('main-todo-container');\n    const projectContainer = document.getElementById('main-project-container');\n\n    let currentProject = null;\n\n    const clearTodoContainer = () => {\n        // clear current children in todo container\n        if(todoContainer.childElementCount > 0) {\n            todoContainer.querySelectorAll('*').forEach((e) => { e.remove(); });\n        }\n    };\n\n    const loadProject = (project) => {\n        project.getItems().forEach((item) => {\n            addTodoPageItem(item, project);\n        });\n        addTodoEntryItem(); \n    };\n\n    const addProjectItem = (project) => {\n        // add project filter button to nav\n        addProjectButton(project);\n    };\n\n    // Add project button to top nav bar\n    const addProjectButton = (project) => {\n        const addProjectPageItem = document.getElementById('project-item-add-div');\n\n        // add to main project container\n        const projectName = project.getName();\n\n        // create project div\n        const projectItem = document.createElement('div');\n        projectItem.classList.add('item');\n        projectItem.classList.add('display');\n\n        // when clicked, display items in project\n        projectItem.addEventListener('click', (e) => {\n            // if the target is either of the buttons, return\n            if(e.target === editButton ||\n                e.target === deleteButton) {\n                return;\n            }\n\n            updateItems(project, projectItem);           \n        });\n\n        // create title for project item\n        const projectNameHeader = document.createElement('h2');\n        projectNameHeader.classList.add('project-title');\n        projectNameHeader.innerText = projectName;\n\n        // create buttons section\n        const buttonsSection = document.createElement('section');\n        buttonsSection.classList.add('item-buttons');\n\n        // create edit and delete buttons\n        const editButton = document.createElement('button');\n        editButton.innerText = 'Edit';\n        editButton.type = 'button';\n\n        const deleteButton = document.createElement('button');\n        deleteButton.innerText = 'Delete';\n        deleteButton.type = 'button';\n        deleteButton.addEventListener('click', () => {\n            const wasDeleted = _model_ProjectManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(project);\n\n            // if project wasn't deleted, notify user\n            if(!wasDeleted) {\n                console.log(`:: Project ${project.getName()} was not deleted. ::`);\n                return;\n            }\n\n            projectItem.remove();\n        });\n\n        // add buttons to button section\n        buttonsSection.appendChild(editButton);\n        buttonsSection.appendChild(deleteButton);\n\n        // add header and button to parent div\n        projectItem.appendChild(projectNameHeader);\n        projectItem.appendChild(buttonsSection);\n\n        projectContainer.insertBefore(projectItem, addProjectPageItem);\n    };\n\n    const addTodoPageItem = (todoItem, project) => {\n        const pageItem = createTodoPageItem(todoItem, project);\n        const entryItem = todoContainer.querySelector('#todo-item-add-div');\n        todoContainer.insertBefore(pageItem, entryItem);\n    };\n\n    // add todo item element to page\n    const createTodoPageItem = (todoItem, project) => {\n        const pageItem = document.createElement('div');\n        pageItem.classList.add('todo-page-item');\n        pageItem.addEventListener('mouseover', () => {\n            if (todoNotes.innerText.length > 0) {\n                todoNotes.classList.add('hovering');\n            }\n        });\n        pageItem.addEventListener('mouseout', () => {\n            todoNotes.classList.remove('hovering');\n        });\n        pageItem.addEventListener('click', () => {\n            if (todoNotes.innerText.length > 0) {\n                todoNotes.classList.toggle('dropped');\n            }\n        });\n\n        // contains all todo info but the notes\n        const todoInfo = document.createElement('section');\n        todoInfo.classList.add('todo-info');\n\n        const todoTitle = document.createElement('h1');\n        todoTitle.classList.add('todo-title');\n        todoTitle.innerText = todoItem.getTitle();\n\n        const todoDueDate = document.createElement('h3');\n        todoDueDate.classList.add('todo-date');\n        todoDueDate.innerText = todoItem.getDueDate();\n\n        const todoPriority = document.createElement('h5');\n        todoPriority.innerText = todoItem.getPriority();\n\n        // determine urgency CSS class based on priority of todo item\n        let prioClass;\n        switch(todoItem.getPriority()) {\n        case 'Low':\n            prioClass = 'low-prio';\n            break;\n        case 'Medium':\n            prioClass = 'med-prio';\n            break;\n        case 'High':\n            prioClass = 'high-prio';\n            break;\n        case 'Urgent':\n            prioClass = 'urge-prio';\n            break;\n        }\n\n        const todoNotes = document.createElement('p');\n        todoNotes.classList.add('todo-notes');\n        todoNotes.innerText = todoItem.getNotes();\n\n        // add button that deletes item from project list \n        const deleteButton = document.createElement('button');\n        deleteButton.innerText = 'Delete';\n        deleteButton.addEventListener('click', () => {\n            project.removeItem(todoItem);\n            pageItem.remove();\n        });\n\n        todoInfo.appendChild(todoTitle);\n        todoInfo.appendChild(todoDueDate);\n        todoInfo.appendChild(todoPriority);\n        todoInfo.appendChild(deleteButton);\n\n        pageItem.appendChild(todoInfo);\n        pageItem.appendChild(todoNotes);\n    \n        pageItem.classList.add(prioClass);\n\n        return pageItem;\n    };\n\n    // Updates items in todo container\n    const updateItems = (project, projButton) => {\n        if(!_ButtonState__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeButton(projButton)) {\n            // button is same\n            return;\n        }\n        // clear container and load project elements\n        clearTodoContainer();\n\n        loadProject(project);\n        currentProject = project;\n\n    };\n\n    const addProjectEntryItem = () => {\n        const entryDiv = document.createElement('div');\n        entryDiv.classList.add('item');\n        entryDiv.classList.add('entry');\n        entryDiv.id = 'project-item-add-div';\n        \n        const projNameField = document.createElement('input');\n        projNameField.classList.add('project-name-field');\n        projNameField.id = 'project-name-field';\n        projNameField.type = 'text';\n        projNameField.addEventListener('input', () => {\n            projNameField.setCustomValidity('');\n            projNameField.reportValidity();\n        });\n        \n        const addButton = document.createElement('button');\n        addButton.type = 'button';\n        addButton.style.backgroundImage = '../../../res/images/plus.svg';\n        addButton.innerText = 'Add';\n        addButton.addEventListener('click', () => {\n            const projName = projNameField.value;\n            let errorMsg = null;\n\n            if(projName.length < 1) {\n                errorMsg = 'The project name must be at least 1 character long';\n            }\n            else if (projName.length > 25) {\n                errorMsg = 'The project name must be at most 25 characters long';\n            }\n            else if (_model_ProjectManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkIfProjExists(projName)) {\n                errorMsg = 'This project already exists';\n            }\n            else {\n                errorMsg = '';\n            }\n\n            if(errorMsg) { \n                projNameField.setCustomValidity(errorMsg);\n                projNameField.reportValidity();\n                return;\n            }\n\n            const newProj = _model_ProjectManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projName);\n            addProjectItem(newProj);\n            projNameField.value = '';\n        });\n\n        entryDiv.appendChild(projNameField);\n        entryDiv.appendChild(addButton);\n\n        projectContainer.appendChild(entryDiv);\n    };\n\n\n    const addTodoEntryItem = () => {\n        const todoItemForm = document.createElement('form');\n        todoItemForm.classList.add('item');\n        todoItemForm.classList.add('entry');\n        todoItemForm.method = 'POST';\n        todoItemForm.action = '#';\n        todoItemForm.id = 'todo-entry-form';\n\n        const todoTitleField = document.createElement('input');\n        todoTitleField.type = 'text';\n        todoTitleField.id = 'todo-title-field';\n        todoTitleField.required = true;\n\n        const todoDueDateField = document.createElement('input');\n        todoDueDateField.type = 'date';\n        todoDueDateField.id = 'todo-date-field';\n        todoDueDateField.required = true;\n\n        const prioritySelect = document.createElement('select');\n        prioritySelect.id = 'priority-select';\n\n        const lowPrio = document.createElement('option');\n        lowPrio.innerText = 'Low Priority';\n        lowPrio.value = 'Low';\n        lowPrio.selected = true;\n\n        const medPrio = document.createElement('option');\n        medPrio.innerText = 'Medium Priority';\n        medPrio.value = 'Medium';\n\n        const highPrio = document.createElement('option');\n        highPrio.innerText = 'High Priority';\n        highPrio.value = 'High';\n\n        const urgePrio = document.createElement('option');\n        urgePrio.innerText = 'Urgent Priority';\n        urgePrio.value = 'Urgent';\n\n        const addTodoButton = document.createElement('button');\n        addTodoButton.id = 'add-todo-button';\n        addTodoButton.type = 'submit';\n        addTodoButton.innerText = 'Add';\n\n        prioritySelect.appendChild(lowPrio);\n        prioritySelect.appendChild(medPrio);\n        prioritySelect.appendChild(highPrio);\n        prioritySelect.appendChild(urgePrio);\n\n        const notesField = document.createElement('textarea');\n        notesField.id = 'todo-notes-field';\n        notesField.placeholder = 'Notes...';\n\n        todoItemForm.appendChild(todoTitleField);\n        todoItemForm.appendChild(todoDueDateField);\n        todoItemForm.appendChild(prioritySelect);\n        todoItemForm.appendChild(notesField);\n\n        todoItemForm.appendChild(addTodoButton);\n\n        todoItemForm.addEventListener('submit', (e) => {\n            e.preventDefault();\n\n            // make new todo\n            const newTodo = new _model_TodoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](todoTitleField.value, todoDueDateField.value, notesField.value, prioritySelect.value);\n            // if project has max items, done add and return\n            _model_ProjectManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addItemToProject(currentProject, newTodo);\n            \n            const pageItem = createTodoPageItem(newTodo, currentProject);\n\n            todoContainer.insertBefore(pageItem, todoItemForm);\n\n            todoTitleField.value = '';\n            todoDueDateField.value = null;\n            notesField.value = '';\n        });\n\n\n        todoContainer.appendChild(todoItemForm);\n    };\n\n    // initial setup\n    const setup = () => {\n        \n        const unassigned = _model_ProjectManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject('Unassigned');\n        addProjectItem(unassigned);\n\n        const firstProjButton = projectContainer.querySelector('div.item');\n        updateItems(unassigned, firstProjButton);\n\n        addProjectEntryItem();\n    };\n\n\n    return { setup };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://odin-todo/./src/classes/controller/UI.js?");

/***/ }),

/***/ "./src/classes/model/Project.js":
/*!**************************************!*\
  !*** ./src/classes/model/Project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.items = [];\n    }\n\n    getName = () => this.name;\n    getItems = () => this.items;\n    \n    addItem(item) {\n        this.items.push(item);\n    }\n\n    removeItem(item) {\n        const len = this.items.length;\n        for (let i = 0; i < len; ++i) {\n            if (this.items[i] === item) {\n                this.items.splice(i, 1);\n                return;\n            }\n        }\n    }\n\n    printInfo() {\n        console.log(`${this.name} :: ${this.items}`);\n    }\n}\n\n//# sourceURL=webpack://odin-todo/./src/classes/model/Project.js?");

/***/ }),

/***/ "./src/classes/model/ProjectManager.js":
/*!*********************************************!*\
  !*** ./src/classes/model/ProjectManager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem */ \"./src/classes/model/TodoItem.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/classes/model/Project.js\");\n\n\n\nclass ProjectManager {\n    constructor() {\n        this.projects = new Map();\n    }\n\n    addProject(projectName) {\n        const proj = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName);\n        this.projects.set(projectName, proj);\n        return proj;\n    }\n\n    // if project is a string, query map for object, otherwise return object\n    determineProject(project) {\n        return typeof project === 'string' ? this.projects.get(project) : project;\n    }\n\n    createTodoItem(itemName, itemDueDate, itemNotes, itemPriority) {\n        return new _TodoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](itemName, itemDueDate, itemNotes, itemPriority);\n    }\n\n    addItemToProject(project, item) {\n        const proj = this.determineProject(project);\n\n        return proj.addItem(item);\n    }\n\n    getProject(projectName) {\n        return this.projects.get(projectName);\n    }\n\n    // returns true if project exists, false otherwise (undefined)\n    checkIfProjExists(projectName) { \n        return this.projects.get(projectName) ? true : false;\n    }\n\n    deleteProject = (project) => {\n        return this.projects.delete(project.getName());\n    };\n}\n\nconst projectManager = new ProjectManager();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);\n\n//# sourceURL=webpack://odin-todo/./src/classes/model/ProjectManager.js?");

/***/ }),

/***/ "./src/classes/model/TodoItem.js":
/*!***************************************!*\
  !*** ./src/classes/model/TodoItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nclass TodoItem {\n    constructor(title, dueDate, notes, priority) {\n        this.title = title;\n        this.dueDate = dueDate;\n        this.notes = notes;\n        this.priority = priority;\n        this.complete = false;\n    }\n\n    getTitle = () => this.title;\n    getDueDate = () => this.dueDate;\n    getNotes = () => this.notes;\n    getPriority = () => this.priority;\n    isComplete = () => this.complete;\n    toggleComplete = () => { this.complete = !this.complete; };\n\n    getInfo = () => { return`${this.title} :: ${this.dueDate} :: ${this.notes} :: ${this.priority} :: ${this.complete}`; };\n    printInfo = () => { console.log(this.getInfo()); };\n}\n\n//# sourceURL=webpack://odin-todo/./src/classes/model/TodoItem.js?");

/***/ }),

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _res_styles_main_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../res/styles/main-style.css */ \"./res/styles/main-style.css\");\n/* harmony import */ var _classes_controller_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/controller/UI */ \"./src/classes/controller/UI.js\");\n\n\n\n_classes_controller_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setup();\n\n//# sourceURL=webpack://odin-todo/./src/driver.js?");

/***/ }),

/***/ "./res/fonts/noto-sans/NotoSans-Regular.ttf":
/*!**************************************************!*\
  !*** ./res/fonts/noto-sans/NotoSans-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c6776e8228bee1ff1106.ttf\";\n\n//# sourceURL=webpack://odin-todo/./res/fonts/noto-sans/NotoSans-Regular.ttf?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/driver.js");
/******/ 	
/******/ })()
;