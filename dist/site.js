/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://underscores/./sass/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./sass/style.scss\");\n/**\r\n * Site Entry Point\r\n */\r\n\r\n// Global Javascript\r\n\r\n\r\n// Global Styles\r\n\r\n\n\n//# sourceURL=webpack://underscores/./src/index.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ (() => {

eval("/**\n * File navigation.js.\n *\n * Handles toggling the navigation menu for small screens and enables TAB key\n * navigation support for dropdown menus.\n */\n( function() {\n\tconst siteNavigation = document.getElementById( 'site-navigation' );\n\n\t// Return early if the navigation don't exist.\n\tif ( ! siteNavigation ) {\n\t\treturn;\n\t}\n\n\tconst button = siteNavigation.getElementsByTagName( 'button' )[ 0 ];\n\n\t// Return early if the button don't exist.\n\tif ( 'undefined' === typeof button ) {\n\t\treturn;\n\t}\n\n\tconst menu = siteNavigation.getElementsByTagName( 'ul' )[ 0 ];\n\n\t// Hide menu toggle button if menu is empty and return early.\n\tif ( 'undefined' === typeof menu ) {\n\t\tbutton.style.display = 'none';\n\t\treturn;\n\t}\n\n\tif ( ! menu.classList.contains( 'nav-menu' ) ) {\n\t\tmenu.classList.add( 'nav-menu' );\n\t}\n\n\t// Toggle the .toggled class and the aria-expanded value each time the button is clicked.\n\tbutton.addEventListener( 'click', function() {\n\t\tsiteNavigation.classList.toggle( 'toggled' );\n\n\t\tif ( button.getAttribute( 'aria-expanded' ) === 'true' ) {\n\t\t\tbutton.setAttribute( 'aria-expanded', 'false' );\n\t\t} else {\n\t\t\tbutton.setAttribute( 'aria-expanded', 'true' );\n\t\t}\n\t} );\n\n\t// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.\n\tdocument.addEventListener( 'click', function( event ) {\n\t\tconst isClickInside = siteNavigation.contains( event.target );\n\n\t\tif ( ! isClickInside ) {\n\t\t\tsiteNavigation.classList.remove( 'toggled' );\n\t\t\tbutton.setAttribute( 'aria-expanded', 'false' );\n\t\t}\n\t} );\n\n\t// Get all the link elements within the menu.\n\tconst links = menu.getElementsByTagName( 'a' );\n\n\t// Get all the link elements with children within the menu.\n\tconst linksWithChildren = menu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );\n\n\t// Toggle focus each time a menu link is focused or blurred.\n\tfor ( const link of links ) {\n\t\tlink.addEventListener( 'focus', toggleFocus, true );\n\t\tlink.addEventListener( 'blur', toggleFocus, true );\n\t}\n\n\t// Toggle focus each time a menu link with children receive a touch event.\n\tfor ( const link of linksWithChildren ) {\n\t\tlink.addEventListener( 'touchstart', toggleFocus, false );\n\t}\n\n\t/**\n\t * Sets or removes .focus class on an element.\n\t */\n\tfunction toggleFocus() {\n\t\tif ( event.type === 'focus' || event.type === 'blur' ) {\n\t\t\tlet self = this;\n\t\t\t// Move up through the ancestors of the current link until we hit .nav-menu.\n\t\t\twhile ( ! self.classList.contains( 'nav-menu' ) ) {\n\t\t\t\t// On li elements toggle the class .focus.\n\t\t\t\tif ( 'li' === self.tagName.toLowerCase() ) {\n\t\t\t\t\tself.classList.toggle( 'focus' );\n\t\t\t\t}\n\t\t\t\tself = self.parentNode;\n\t\t\t}\n\t\t}\n\n\t\tif ( event.type === 'touchstart' ) {\n\t\t\tconst menuItem = this.parentNode;\n\t\t\tevent.preventDefault();\n\t\t\tfor ( const link of menuItem.parentNode.children ) {\n\t\t\t\tif ( menuItem !== link ) {\n\t\t\t\t\tlink.classList.remove( 'focus' );\n\t\t\t\t}\n\t\t\t}\n\t\t\tmenuItem.classList.toggle( 'focus' );\n\t\t}\n\t}\n}() );\n\n\n//# sourceURL=webpack://underscores/./src/navigation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;