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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRwcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0cHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImFkZEl0ZW1Ub0Jhc2tldCIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiYWRkVG9CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxPQVNHO0FBQUE7O0FBQUE7O0FBQUEsTUFSQ0MsRUFRRCxRQVJDQSxFQVFEO0FBQUEsTUFQQ0MsS0FPRCxRQVBDQSxLQU9EO0FBQUEsTUFOQ0MsS0FNRCxRQU5DQSxLQU1EO0FBQUEsTUFMQ0MsTUFLRCxRQUxDQSxNQUtEO0FBQUEsTUFKQ0MsV0FJRCxRQUpDQSxXQUlEO0FBQUEsTUFIQ0MsUUFHRCxRQUhDQSxRQUdEO0FBQUEsTUFGQ0MsS0FFRCxRQUZDQSxLQUVEO0FBQUEsTUFEQ0MsUUFDRCxRQURDQSxRQUNEO0FBQ0MsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUI7QUFDQSxRQUFNQyxPQUFPLEdBQUc7QUFDWlgsUUFBRSxFQUFGQSxFQURZO0FBRVpDLFdBQUssRUFBTEEsS0FGWTtBQUdaQyxXQUFLLEVBQUxBLEtBSFk7QUFJWkMsWUFBTSxFQUFOQSxNQUpZO0FBS1pDLGlCQUFXLEVBQVhBLFdBTFk7QUFNWkMsY0FBUSxFQUFSQSxRQU5ZO0FBT1pDLFdBQUssRUFBTEEsS0FQWTtBQVFaQyxjQUFRLEVBQVJBO0FBUlksS0FBaEI7QUFVQUssV0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQU8sQ0FBQ1gsRUFBcEIsRUFaMEIsQ0FhMUI7O0FBQ0FRLFlBQVEsQ0FBQ00sZ0VBQVcsQ0FBQ0gsT0FBRCxDQUFaLENBQVI7QUFDSCxHQWZEOztBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFTCxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0k7QUFBQSxrQkFBSUw7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNLYyxLQUFLLENBQUNaLE1BQUQsQ0FBTCxDQUFjYSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDdEIsOERBQUMsNERBQUQ7QUFBa0IscUJBQVMsRUFBQztBQUE1QixhQUFlQSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNCO0FBQUEsU0FBekI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFPSTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQSxrQkFBMkNmO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVFJLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUYsS0FBcEI7QUFBMkIsZ0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFVS0ssUUFBUSxpQkFDTDtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDSTtBQUNJLGlCQUFPLEVBQUMsTUFEWjtBQUVJLG1CQUFTLEVBQUMsTUFGZDtBQUdJLGFBQUcsRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQTBCSTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDhCQUNJO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFRyxlQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtDSDs7R0E5RFFYLGU7VUFVWVUsb0Q7OztLQVZaVixlO0FBZ0VULCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjA1ZTBkYmZlOTllN2UzMjgzNDJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9IGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIlxuXG5mdW5jdGlvbiBDaGVja291dHByb2R1Y3Qoe1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIHByaWNlLFxuICAgIHJhdGluZyxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBjYXRlZ29yeSxcbiAgICBpbWFnZSxcbiAgICBoYXNQcmltZSxcbn0pIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiB7XG4gICAgICAgIC8vZ2V0IGFsbCB0aGUgcHJvZHVjdCBwcm9wc1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0ge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgcmF0aW5nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaGFzUHJpbWUsXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC5pZClcbiAgICAgICAgLy91c2UgdGhlIGRpc3BhdGNoIHRvIGFkZCB0aGUgaXRlbXMgd2UgY2xpY2sgdG8gYmFza2V0c2xpY2UgcmVkdXggc3RvcmVcbiAgICAgICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGdyaWQgZ3JpZC1jb2xzLTUgbXktNVwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cblxuICAgICAgICAgICAgey8qIG1pZGRsZSBzZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zICBteC0xMFwiPlxuICAgICAgICAgICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHtBcnJheShyYXRpbmcpLmZpbGwoKS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2l9IGNsYXNzTmFtZT1cImgtNSB0ZXh0LXllbGxvdy01MDAgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteS0yICBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2V9IGN1cnJlbmN5PVwiTkdOXCIgLz5cblxuICAgICAgICAgICAgICAgIHtoYXNQcmltZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyZWUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zZWxmLWVuZCBteS1hdXRvIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIDxib3R0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHRleHQteHNcIiBvbkNsaWNrPXthZGRJdGVtVG9CYXNrZXR9PkFkZCBUbyBCYXNrZXQ8L2JvdHRvbj5cbiAgICAgICAgICAgICAgICA8Ym90dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiB0ZXh0LXhzXCI+RGVsZXRlPC9ib3R0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0cHJvZHVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=