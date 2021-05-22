self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_ProductFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/ProductFeed */ "./src/app/ProductFeed.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ "./src/components/Banner.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/pages/index.js";




var __N_SSP = true;
function Home(_ref) {
  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "bg-grey-100": true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Amazon 2.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ProductFeed__WEBPACK_IMPORTED_MODULE_2__.default, {
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
} // we need to export our page a an async page..we can achieve that using next.js, if we export our page as an async, this tells next.js that this is no longer a static page, it needs to have that middle server step
// this means next.js should perform some calculation b4 delivering it to the user

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUE0QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxzQkFDRTtBQUFLLHVCQUFMO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQU1FO0FBQU0sZUFBUyxFQUFDLDBCQUFoQjtBQUFBLDhCQUdFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU1FLDhEQUFDLHFEQUFEO0FBQWEsZ0JBQVEsRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JELEMsQ0FFRDtBQUNBOztLQTFCd0JELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2IzMmYwNjczOWQzOTIxZTJiMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBQcm9kdWN0RmVlZCBmcm9tIFwiLi4vYXBwL1Byb2R1Y3RGZWVkXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhbm5lclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgge3Byb2R1Y3RzfSApIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGJnLWdyZXktMTAwPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BbWF6b24gMi4wPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cblxuICAgICAgICB7LyogQmFubmVyICovfVxuICAgICAgICA8QmFubmVyLz5cblxuICAgICAgICB7LyogcHJvZHVjdCBGZWVkICovfVxuICAgICAgICA8UHJvZHVjdEZlZWQgcHJvZHVjdHM9e3Byb2R1Y3RzfS8+XG4gICAgICAgICBcbiAgICAgIDwvbWFpbj5cblxuICAgICAgIFxuICAgICAgey8qIGhlYWRlciovfVxuICAgICAgey8qIGJhbm5lciAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gd2UgbmVlZCB0byBleHBvcnQgb3VyIHBhZ2UgYSBhbiBhc3luYyBwYWdlLi53ZSBjYW4gYWNoaWV2ZSB0aGF0IHVzaW5nIG5leHQuanMsIGlmIHdlIGV4cG9ydCBvdXIgcGFnZSBhcyBhbiBhc3luYywgdGhpcyB0ZWxscyBuZXh0LmpzIHRoYXQgdGhpcyBpcyBubyBsb25nZXIgYSBzdGF0aWMgcGFnZSwgaXQgbmVlZHMgdG8gaGF2ZSB0aGF0IG1pZGRsZSBzZXJ2ZXIgc3RlcFxuLy8gdGhpcyBtZWFucyBuZXh0LmpzIHNob3VsZCBwZXJmb3JtIHNvbWUgY2FsY3VsYXRpb24gYjQgZGVsaXZlcmluZyBpdCB0byB0aGUgdXNlclxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKVxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICBcblxuICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBwcm9kdWN0cyxcbiAgICAgIH0sXG4gIH07XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=