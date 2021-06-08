self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/Checkoutproduct.js":
/*!*******************************************!*\
  !*** ./src/components/Checkoutproduct.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/components/Checkoutproduct.js";




function Checkoutproduct(_ref) {
  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      rating = _ref.rating,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image,
      hasPrime = _ref.hasPrime;

  var addItemToBaske = function addItemToBaske() {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " grid grid-cols-5 my-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3  mx-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
            className: "h-5 text-yellow-500 "
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2  line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {
        quantity: price,
        currency: "NGN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          className: "w-12",
          src: "https://links.papareact.com/fdw"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Free Next-day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col justify-self-end my-auto space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("botton", {
        className: "button text-xs",
        onClick: addItemToBasket,
        children: "Add To Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("botton", {
        className: "button text-xs",
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_c = Checkoutproduct;
/* harmony default export */ __webpack_exports__["default"] = (Checkoutproduct);

var _c;

$RefreshReg$(_c, "Checkoutproduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRwcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0cHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIiwiYWRkSXRlbVRvQmFza2UiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImFkZEl0ZW1Ub0Jhc2tldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxPQVNHO0FBQUE7O0FBQUEsTUFSQ0MsRUFRRCxRQVJDQSxFQVFEO0FBQUEsTUFQQ0MsS0FPRCxRQVBDQSxLQU9EO0FBQUEsTUFOQ0MsS0FNRCxRQU5DQSxLQU1EO0FBQUEsTUFMQ0MsTUFLRCxRQUxDQSxNQUtEO0FBQUEsTUFKQ0MsV0FJRCxRQUpDQSxXQUlEO0FBQUEsTUFIQ0MsUUFHRCxRQUhDQSxRQUdEO0FBQUEsTUFGQ0MsS0FFRCxRQUZDQSxLQUVEO0FBQUEsTUFEQ0MsUUFDRCxRQURDQSxRQUNEOztBQUVDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBSSxDQUUxQixDQUZEOztBQUdBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVGLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDSTtBQUFBLGtCQUFJTDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQ0tRLEtBQUssQ0FBQ04sTUFBRCxDQUFMLENBQWNPLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDhCQUN0Qiw4REFBQyw0REFBRDtBQUFrQixxQkFBUyxFQUFDO0FBQTVCLGFBQWVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0I7QUFBQSxTQUF6QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU9JO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBLGtCQUEyQ1Q7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBUUksOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFRixLQUFwQjtBQUEyQixnQkFBUSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixFQVVLSyxRQUFRLGlCQUNMO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLGdDQUNJO0FBQ0ksaUJBQU8sRUFBQyxNQURaO0FBRUksbUJBQVMsRUFBQyxNQUZkO0FBR0ksYUFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBMEJJO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsOEJBQ0k7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUVPLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0NIOztLQWhEUWYsZTtBQWtEVCwrREFBZUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC43ODYyNTNkY2ZmMjkxMzNlZDc4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCJcblxuZnVuY3Rpb24gQ2hlY2tvdXRwcm9kdWN0KHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBwcmljZSxcbiAgICByYXRpbmcsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY2F0ZWdvcnksXG4gICAgaW1hZ2UsXG4gICAgaGFzUHJpbWUsXG59KSB7XG5cbiAgICBjb25zdCBhZGRJdGVtVG9CYXNrZSA9ICgpPT57XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncmlkIGdyaWQtY29scy01IG15LTVcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG5cbiAgICAgICAgICAgIHsvKiBtaWRkbGUgc2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyAgbXgtMTBcIj5cbiAgICAgICAgICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkocmF0aW5nKS5maWxsKCkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24ga2V5PXtpfSBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwIFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXktMiAgbGluZS1jbGFtcC0zXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIk5HTlwiIC8+XG5cbiAgICAgICAgICAgICAgICB7aGFzUHJpbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVlIE5leHQtZGF5IERlbGl2ZXJ5PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc2VsZi1lbmQgbXktYXV0byBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICA8Ym90dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiB0ZXh0LXhzXCIgb25DbGljaz17YWRkSXRlbVRvQmFza2V0fT5BZGQgVG8gQmFza2V0PC9ib3R0b24+XG4gICAgICAgICAgICAgICAgPGJvdHRvbiBjbGFzc05hbWU9XCJidXR0b24gdGV4dC14c1wiPkRlbGV0ZTwvYm90dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dHByb2R1Y3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9