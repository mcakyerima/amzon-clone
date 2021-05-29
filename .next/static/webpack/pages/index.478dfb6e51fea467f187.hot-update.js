self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/components/Header.js",
    _s = $RefreshSig$();





function Header(_ref) {
  _s();

  var products = _ref.products;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)(),
      _useSession2 = (0,_home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "static w-full top-0 flex items-center bg-amazon_blue p-1 flex-grow py-2 z-50 mb-3.5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-2 flex items-center flex-grow md:flex-grow-0 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: "https://links.papareact.com/f90",
          width: 140,
          height: 40,
          objectFit: "contain",
          className: "cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " hidden md:flex flex-grow items-center bg-yellow-400 h-10 cursor-pointer rounded-md shadow w-50 hover:bg-yellow-500",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "flex-grow w-6 h-full fp-2 flex-shrink rounded-l-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {
          className: " h-12 p-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: !session ? next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn : next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signOut,
          className: "link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: !session ? "Sign In" : "Hello ".concat(session.user.name)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrabold md:text-sm ",
            children: "Account & List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Returns"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrabold md:text-sm",
            children: "& orders "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " relative link flex items-center ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("spans", {
            className: "absolute top-0 right-0 bg-yellow-400 h-4 w-4 object-fill rounded-full text-center md:right-10  font-bold text-black",
            children: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ShoppingCartIcon, {
            className: "h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: " hidden md:inline font-extrabold md:text-sm mt-2",
            children: "Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fixed flex my-40 w-full z-50  items-center space-x-3 bg-amazon_blue-light text-white mb-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {
          className: "h-6 mr-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), "All"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link",
        children: "Prime Video"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link",
        children: "Amazon Business"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link",
        children: "Today's Deals"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: "Electronics"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: "Food & Grocery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: "prices"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: "Buy Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: "Shopper Toolkit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: "Health and personal Care"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(Header, "Vxy5gMemEU/s8dbgarDyE2/t+kg=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb2R1Y3RzIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFLQSxTQUFTQSxNQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLG9CQUNSQyw0REFBVSxFQURGO0FBQUE7QUFBQSxNQUNuQkMsT0FEbUI7O0FBRzFCLHNCQUNJO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUMscUZBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsa0RBQWY7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUNJLGFBQUcsRUFBQyxpQ0FEUjtBQUVJLGVBQUssRUFBRSxHQUZYO0FBR0ksZ0JBQU0sRUFBRSxFQUhaO0FBSUksbUJBQVMsRUFBQyxTQUpkO0FBS0ksbUJBQVMsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFhSTtBQUFLLGlCQUFTLEVBQUMscUhBQWY7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLDhEQUFDLGdFQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKLGVBbUJJO0FBQUssaUJBQVMsRUFBQyx1RUFBZjtBQUFBLGdDQUNJO0FBQUssaUJBQU8sRUFBRSxDQUFDQSxPQUFELEdBQVdDLG9EQUFYLEdBQW9CQyxxREFBbEM7QUFBMkMsbUJBQVMsRUFBQyxNQUFyRDtBQUFBLGtDQUNJO0FBQUEsc0JBQ0ssQ0FBQ0YsT0FBRCwrQkFBZ0NBLE9BQU8sQ0FBQ0csSUFBUixDQUFhQyxJQUE3QztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFHLHFCQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBT0k7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQywyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFXSTtBQUFNLG1CQUFTLEVBQUMsbUNBQWhCO0FBQUEsa0NBQ0k7QUFBTyxxQkFBUyxFQUFDLHFIQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLDhEQUFDLHNFQUFEO0FBQWtCLHFCQUFTLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUcscUJBQVMsRUFBQyxrREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBMkNJO0FBQUssZUFBUyxFQUFDLDRGQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsZ0NBQ0ksOERBQUMsOERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosZUFRSTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQVNJO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBVUk7QUFBRyxpQkFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosZUFXSTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixlQVlJO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKLGVBYUk7QUFBRyxpQkFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0RIOztHQWxFUVAsTTtVQUNhRSx3RDs7O0tBRGJGLE07QUFvRVQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDc4ZGZiNmU1MWZlYTQ2N2YxODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcbmltcG9ydCB7XG4gICAgTWVudUljb24sXG4gICAgU2VhcmNoSWNvbixcbiAgICBTaG9wcGluZ0NhcnRJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCJcbmZ1bmN0aW9uIEhlYWRlcih7IHByb2R1Y3RzIH0pIHtcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICB7LyogdG9wIG5hdiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGljIHctZnVsbCB0b3AtMCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSBwLTEgZmxleC1ncm93IHB5LTIgei01MCBtYi0zLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1ncm93IG1kOmZsZXgtZ3Jvdy0wIFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Y5MCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBjdXN0b20gc2VhcmNoIGJhciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoaWRkZW4gbWQ6ZmxleCBmbGV4LWdyb3cgaXRlbXMtY2VudGVyIGJnLXllbGxvdy00MDAgaC0xMCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIHNoYWRvdyB3LTUwIGhvdmVyOmJnLXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZmxleC1ncm93IHctNiBoLWZ1bGwgZnAtMiBmbGV4LXNocmluayByb3VuZGVkLWwtbWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCIgaC0xMiBwLTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFJpZ2h0IENvbnRhaW5lciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyBzcGFjZS14LTYgbXgtNiB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyFzZXNzaW9uID8gc2lnbkluIDogc2lnbk91dH0gY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZXNzaW9uID8gYFNpZ24gSW5gIDogYEhlbGxvICR7c2Vzc2lvbi51c2VyLm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIG1kOnRleHQtc20gXCI+QWNjb3VudCAmIExpc3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJldHVybnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtXCI+JiBvcmRlcnMgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiIHJlbGF0aXZlIGxpbmsgZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbnMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBiZy15ZWxsb3ctNDAwIGgtNCB3LTQgb2JqZWN0LWZpbGwgcm91bmRlZC1mdWxsIHRleHQtY2VudGVyIG1kOnJpZ2h0LTEwICBmb250LWJvbGQgdGV4dC1ibGFja1wiPjA8L3NwYW5zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gY2xhc3NOYW1lPVwiaC0xMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgaGlkZGVuIG1kOmlubGluZSBmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtIG10LTJcIj5CYXNrZXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgey8qIGJ1dHRvbiBuYXYgKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgZmxleCBteS00MCB3LWZ1bGwgei01MCAgaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBiZy1hbWF6b25fYmx1ZS1saWdodCB0ZXh0LXdoaXRlIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5QcmltZSBWaWRlbzwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rXCI+QW1hem9uIEJ1c2luZXNzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5Ub2RheSdzIERlYWxzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+RWxlY3Ryb25pY3M8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluayBoaWRkZW4gbGc6aW5saW5lLWZsZXhcIj5Gb29kICYgR3JvY2VyeTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPnByaWNlczwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkJ1eSBBZ2FpbjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPlNob3BwZXIgVG9vbGtpdDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkhlYWx0aCBhbmQgcGVyc29uYWwgQ2FyZTwvcD5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==