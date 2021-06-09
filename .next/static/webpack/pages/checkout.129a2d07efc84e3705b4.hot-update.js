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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/components/Checkoutproduct.js",
    _s = $RefreshSig$();







function Checkoutproduct(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      rating = _ref.rating,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image,
      hasPrime = _ref.hasPrime;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var addItemToBasket = function addItemToBasket() {
    //get all the product props
    var product = {
      id: id,
      title: title,
      price: price,
      rating: rating,
      description: description,
      category: category,
      image: image,
      hasPrime: hasPrime
    };
    console.log(product.id); //use the dispatch to add the items we click to basketslice redux store

    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.addToBasket)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " grid grid-cols-5 my-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3  mx-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
            className: "h-5 text-yellow-500 "
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2  line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {
        quantity: price,
        currency: "NGN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          className: "w-12",
          src: "https://links.papareact.com/fdw"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Free Next-day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col justify-self-end my-auto space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("botton", {
        className: "button text-xs",
        onClick: addItemToBasket,
        children: "Add To Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("botton", {
        className: "button text-xs",
        onCl: true,
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

_s(Checkoutproduct, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRwcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0cHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImFkZEl0ZW1Ub0Jhc2tldCIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiYWRkVG9CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxPQVNHO0FBQUE7O0FBQUE7O0FBQUEsTUFSQ0MsRUFRRCxRQVJDQSxFQVFEO0FBQUEsTUFQQ0MsS0FPRCxRQVBDQSxLQU9EO0FBQUEsTUFOQ0MsS0FNRCxRQU5DQSxLQU1EO0FBQUEsTUFMQ0MsTUFLRCxRQUxDQSxNQUtEO0FBQUEsTUFKQ0MsV0FJRCxRQUpDQSxXQUlEO0FBQUEsTUFIQ0MsUUFHRCxRQUhDQSxRQUdEO0FBQUEsTUFGQ0MsS0FFRCxRQUZDQSxLQUVEO0FBQUEsTUFEQ0MsUUFDRCxRQURDQSxRQUNEO0FBQ0MsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUI7QUFDQSxRQUFNQyxPQUFPLEdBQUc7QUFDWlgsUUFBRSxFQUFGQSxFQURZO0FBRVpDLFdBQUssRUFBTEEsS0FGWTtBQUdaQyxXQUFLLEVBQUxBLEtBSFk7QUFJWkMsWUFBTSxFQUFOQSxNQUpZO0FBS1pDLGlCQUFXLEVBQVhBLFdBTFk7QUFNWkMsY0FBUSxFQUFSQSxRQU5ZO0FBT1pDLFdBQUssRUFBTEEsS0FQWTtBQVFaQyxjQUFRLEVBQVJBO0FBUlksS0FBaEI7QUFVQUssV0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQU8sQ0FBQ1gsRUFBcEIsRUFaMEIsQ0FhMUI7O0FBQ0FRLFlBQVEsQ0FBQ00sZ0VBQVcsQ0FBQ0gsT0FBRCxDQUFaLENBQVI7QUFDSCxHQWZEOztBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFTCxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0k7QUFBQSxrQkFBSUw7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNLYyxLQUFLLENBQUNaLE1BQUQsQ0FBTCxDQUFjYSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDdEIsOERBQUMsNERBQUQ7QUFBa0IscUJBQVMsRUFBQztBQUE1QixhQUFlQSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNCO0FBQUEsU0FBekI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFPSTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQSxrQkFBMkNmO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVFJLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUYsS0FBcEI7QUFBMkIsZ0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFVS0ssUUFBUSxpQkFDTDtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDSTtBQUNJLGlCQUFPLEVBQUMsTUFEWjtBQUVJLG1CQUFTLEVBQUMsTUFGZDtBQUdJLGFBQUcsRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQTBCSTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDhCQUNJO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFRyxlQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxZQUFJLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0NIOztHQTlEUVgsZTtVQVVZVSxvRDs7O0tBVlpWLGU7QUFnRVQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuMTI5YTJkMDdlZmM4NGUzNzA1YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiXG5cbmZ1bmN0aW9uIENoZWNrb3V0cHJvZHVjdCh7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgcHJpY2UsXG4gICAgcmF0aW5nLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNhdGVnb3J5LFxuICAgIGltYWdlLFxuICAgIGhhc1ByaW1lLFxufSkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IGFkZEl0ZW1Ub0Jhc2tldCA9ICgpID0+IHtcbiAgICAgICAgLy9nZXQgYWxsIHRoZSBwcm9kdWN0IHByb3BzXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICByYXRpbmcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBoYXNQcmltZSxcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0LmlkKVxuICAgICAgICAvL3VzZSB0aGUgZGlzcGF0Y2ggdG8gYWRkIHRoZSBpdGVtcyB3ZSBjbGljayB0byBiYXNrZXRzbGljZSByZWR1eCBzdG9yZVxuICAgICAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZ3JpZCBncmlkLWNvbHMtNSBteS01XCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuXG4gICAgICAgICAgICB7LyogbWlkZGxlIHNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgIG14LTEwXCI+XG4gICAgICAgICAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge0FycmF5KHJhdGluZykuZmlsbCgpLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aX0gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgIGxpbmUtY2xhbXAtM1wiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0gY3VycmVuY3k9XCJOR05cIiAvPlxuXG4gICAgICAgICAgICAgICAge2hhc1ByaW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlZSBOZXh0LWRheSBEZWxpdmVyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXNlbGYtZW5kIG15LWF1dG8gc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgPGJvdHRvbiBjbGFzc05hbWU9XCJidXR0b24gdGV4dC14c1wiIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0+QWRkIFRvIEJhc2tldDwvYm90dG9uPlxuICAgICAgICAgICAgICAgIDxib3R0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHRleHQteHNcIiBvbkNsPkRlbGV0ZTwvYm90dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dHByb2R1Y3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9