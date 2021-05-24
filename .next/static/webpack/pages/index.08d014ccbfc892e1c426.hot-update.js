self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Products.js":
/*!************************************!*\
  !*** ./src/components/Products.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/components/Products.js",
    _s = $RefreshSig$();





var MAX_RATING = 5;
var MIN_RATING = 1;

function Products(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;

  // create a star state for randon star rating generation
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),
      rating = _useState[0]; //generate values for hasprime component


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative flex flex-col m-5  bg-white  z-30 p-10 shadow-lg hover:scale",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-center relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "",
        src: image,
        height: 200,
        width: 200,
        objectFit: "contain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
          className: "h-5 text-yellow-400"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "NGN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-grey-500",
        children: "Free Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: " mt-auto button",
      children: "Add to Basket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(Products, "iAFI4jNUmIsuo72nUPAkXMwMyHY=");

_c = Products;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

$RefreshReg$(_c, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdHMuanMiXSwibmFtZXMiOlsiTUFYX1JBVElORyIsIk1JTl9SQVRJTkciLCJQcm9kdWN0cyIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInVzZVN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5COztBQUVBLFNBQVNDLFFBQVQsT0FBc0U7QUFBQTs7QUFBQTs7QUFBQSxNQUFsREMsRUFBa0QsUUFBbERBLEVBQWtEO0FBQUEsTUFBOUNDLEtBQThDLFFBQTlDQSxLQUE4QztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsV0FBZ0MsUUFBaENBLFdBQWdDO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDbEU7QUFEa0Usa0JBRWpEQywrQ0FBUSxDQUNyQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQlosVUFBVSxHQUFHQyxVQUFiLEdBQTBCLENBQTNDLENBQVgsSUFBNERBLFVBRHZDLENBRnlDO0FBQUEsTUFFM0RZLE1BRjJELGlCQUtsRTs7O0FBTGtFLG1CQU0vQ0osK0NBQVEsQ0FBQ0MsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBTnVDO0FBQUEsTUFNM0RFLFFBTjJEOztBQU9sRSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFDLHFEQUFiO0FBQUEsZ0JBQW9FUDtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQUNJLDhEQUFDLG1EQUFEO0FBQU8saUJBQVMsRUFBQyxFQUFqQjtBQUFvQixXQUFHLEVBQUVDLEtBQXpCO0FBQWdDLGNBQU0sRUFBRSxHQUF4QztBQUE2QyxhQUFLLEVBQUUsR0FBcEQ7QUFBeUQsaUJBQVMsRUFBQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBS0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLGdCQUFzQko7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBT0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNLVyxLQUFLLENBQUNGLE1BQUQsQ0FBTCxDQUFjRyxJQUFkLEdBQ0lDLEdBREosQ0FDUSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw0QkFDRCw4REFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQztBQUFBLE9BRFI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFnQkk7QUFBRyxlQUFTLEVBQUMsMkJBQWI7QUFBQSxnQkFBMENiO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkosZUFrQkk7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNJLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUQsS0FBcEI7QUFBMkIsZ0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSixFQXFCS1MsUUFBUSxpQkFDTDtBQUFLLGVBQVMsRUFBQyxtQ0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLFdBQUcsRUFBQyxpQ0FBMUI7QUFBNEQsV0FBRyxFQUFDO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCUixlQTJCSTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQ0g7O0dBeENRWixROztLQUFBQSxRO0FBMENULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4ZDAxNGNjYmZjODkyZTFjNDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xuXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcbmNvbnN0IE1JTl9SQVRJTkcgPSAxO1xuXG5mdW5jdGlvbiBQcm9kdWN0cyh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkge1xuICAgIC8vIGNyZWF0ZSBhIHN0YXIgc3RhdGUgZm9yIHJhbmRvbiBzdGFyIHJhdGluZyBnZW5lcmF0aW9uXG4gICAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xuICAgICk7XG4gICAgLy9nZW5lcmF0ZSB2YWx1ZXMgZm9yIGhhc3ByaW1lIGNvbXBvbmVudFxuICAgIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtLTUgIGJnLXdoaXRlICB6LTMwIHAtMTAgc2hhZG93LWxnIGhvdmVyOnNjYWxlXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHRleHQteHMgaXRhbGljIHRleHQtZ3JheS00MDBcIj57Y2F0ZWdvcnl9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cIlwiIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTNcIj57dGl0bGV9PC9oND5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAge0FycmF5KHJhdGluZykuZmlsbCgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXktMiBsaW5lLWNsYW1wLTJcIj57ZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIk5HTlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtoYXNQcmltZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgLW10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEyXCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmV5LTUwMFwiPkZyZWUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgbXQtYXV0byBidXR0b25cIj5BZGQgdG8gQmFza2V0PC9idXR0b24+XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==