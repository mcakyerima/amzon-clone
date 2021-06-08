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
    var product = {
      id: id,
      title: title,
      price: price,
      rating: rating,
      description: description,
      category: category,
      image: image,
      hasPrime: hasPrime
    }; //we are gonna use the dispatch to add the items we click to basketslice

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
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3  mx-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
            className: "h-5 text-yellow-500 "
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2  line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {
        quantity: price,
        currency: "NGN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          className: "w-12",
          src: "https://links.papareact.com/fdw"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Free Next-day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col justify-self-end my-auto space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("botton", {
        className: "button text-xs",
        onClick: addItemToBasket,
        children: "Add To Basket"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("botton", {
        className: "button text-xs",
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRwcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0cHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImFkZEl0ZW1Ub0Jhc2tldCIsInByb2R1Y3QiLCJhZGRUb0Jhc2tldCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9BU0c7QUFBQTs7QUFBQTs7QUFBQSxNQVJDQyxFQVFELFFBUkNBLEVBUUQ7QUFBQSxNQVBDQyxLQU9ELFFBUENBLEtBT0Q7QUFBQSxNQU5DQyxLQU1ELFFBTkNBLEtBTUQ7QUFBQSxNQUxDQyxNQUtELFFBTENBLE1BS0Q7QUFBQSxNQUpDQyxXQUlELFFBSkNBLFdBSUQ7QUFBQSxNQUhDQyxRQUdELFFBSENBLFFBR0Q7QUFBQSxNQUZDQyxLQUVELFFBRkNBLEtBRUQ7QUFBQSxNQURDQyxRQUNELFFBRENBLFFBQ0Q7QUFDQyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQixRQUFNQyxPQUFPLEdBQUc7QUFDWlgsUUFBRSxFQUFGQSxFQURZO0FBRVpDLFdBQUssRUFBTEEsS0FGWTtBQUdaQyxXQUFLLEVBQUxBLEtBSFk7QUFJWkMsWUFBTSxFQUFOQSxNQUpZO0FBS1pDLGlCQUFXLEVBQVhBLFdBTFk7QUFNWkMsY0FBUSxFQUFSQSxRQU5ZO0FBT1pDLFdBQUssRUFBTEEsS0FQWTtBQVFaQyxjQUFRLEVBQVJBO0FBUlksS0FBaEIsQ0FEMEIsQ0FXMUI7O0FBQ0FDLFlBQVEsQ0FBQ0ksZ0VBQVcsQ0FBQ0QsT0FBRCxDQUFaLENBQVI7QUFDSCxHQWJEOztBQWNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVMLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDSTtBQUFBLGtCQUFJTDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQ0tZLEtBQUssQ0FBQ1YsTUFBRCxDQUFMLENBQWNXLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDhCQUN0Qiw4REFBQyw0REFBRDtBQUFrQixxQkFBUyxFQUFDO0FBQTVCLGFBQWVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0I7QUFBQSxTQUF6QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU9JO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBLGtCQUEyQ2I7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBUUksOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFRixLQUFwQjtBQUEyQixnQkFBUSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixFQVVLSyxRQUFRLGlCQUNMO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLGdDQUNJO0FBQ0ksaUJBQU8sRUFBQyxNQURaO0FBRUksbUJBQVMsRUFBQyxNQUZkO0FBR0ksYUFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBMEJJO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsOEJBQ0k7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUVHLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0NIOztHQTVEUVgsZTtVQVVZVSxvRDs7O0tBVlpWLGU7QUE4RFQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNjhjMGRkZjdkYzNkYTk5ZWE3OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiXG5cbmZ1bmN0aW9uIENoZWNrb3V0cHJvZHVjdCh7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgcHJpY2UsXG4gICAgcmF0aW5nLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNhdGVnb3J5LFxuICAgIGltYWdlLFxuICAgIGhhc1ByaW1lLFxufSkge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IGFkZEl0ZW1Ub0Jhc2tldCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIHJhdGluZyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGhhc1ByaW1lLFxuICAgICAgICB9XG4gICAgICAgIC8vd2UgYXJlIGdvbm5hIHVzZSB0aGUgZGlzcGF0Y2ggdG8gYWRkIHRoZSBpdGVtcyB3ZSBjbGljayB0byBiYXNrZXRzbGljZVxuICAgICAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZ3JpZCBncmlkLWNvbHMtNSBteS01XCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuXG4gICAgICAgICAgICB7LyogbWlkZGxlIHNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgIG14LTEwXCI+XG4gICAgICAgICAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge0FycmF5KHJhdGluZykuZmlsbCgpLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aX0gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgIGxpbmUtY2xhbXAtM1wiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0gY3VycmVuY3k9XCJOR05cIiAvPlxuXG4gICAgICAgICAgICAgICAge2hhc1ByaW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlZSBOZXh0LWRheSBEZWxpdmVyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXNlbGYtZW5kIG15LWF1dG8gc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgPGJvdHRvbiBjbGFzc05hbWU9XCJidXR0b24gdGV4dC14c1wiIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0+QWRkIFRvIEJhc2tldDwvYm90dG9uPlxuICAgICAgICAgICAgICAgIDxib3R0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHRleHQteHNcIj5EZWxldGU8L2JvdHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRwcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==