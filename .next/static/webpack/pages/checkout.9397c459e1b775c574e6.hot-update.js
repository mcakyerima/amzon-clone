self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.js":
/*!*******************************!*\
  !*** ./src/pages/checkout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Checkoutproduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Checkoutproduct */ "./src/components/Checkoutproduct.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/pages/checkout.js",
    _s = $RefreshSig$();









function Checkout() {
  _s();

  var _this = this;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession)(),
      _useSession2 = (0,_home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useSession, 1),
      session = _useSession2[0];

  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__.selectItems);

  var total = (0,_home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(items.price);

  console.log(total);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-gray-100 relative mb-1.5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex flex-grow p-15 mx-auto mt-24",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "lg:min-w-min  flex-grow m-5 shadow-sm ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
          src: "https://links.papareact.com/ikj",
          width: 1080,
          height: 300,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-x-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? "your Amazon Basket is empty" : "Shopping Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), items.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Checkoutproduct__WEBPACK_IMPORTED_MODULE_5__.default, {
              id: item.id,
              title: item.title,
              rating: item.rating,
              price: item.price,
              description: item.description,
              category: item.category,
              image: item.image,
              hasPrime: item.hasPrime
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg-gray-200 min-w-min m-16 border shadow-sm m-0",
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "m-10",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["SubTotal (", items.length, " items):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_9___default()), {
                quantity: sum(items.price),
                currency: "NGN"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button mt-2 ".concat(!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"),
            children: !session ? "Login to Checkout" : "Click to Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(Checkout, "U/lJ0RYvmDZYcaHt/4ZLPk6SMRs=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
});

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJpdGVtcyIsInVzZVNlbGVjdG9yIiwic2VsZWN0SXRlbXMiLCJ0b3RhbCIsInByaWNlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwidGl0bGUiLCJyYXRpbmciLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJoYXNQcmltZSIsInN1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDRUMsNERBQVUsRUFEWjtBQUFBO0FBQUEsTUFDVEMsT0FEUzs7QUFFaEIsTUFBTUMsS0FBSyxHQUFHQyx3REFBVyxDQUFDQyw0REFBRCxDQUF6Qjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsbUtBQUlILEtBQUssQ0FBQ0ksS0FBYixDQUFYOztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsNkJBQWY7QUFBQSw2QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBTSxlQUFTLEVBQUMsc0NBQWhCO0FBQUEsOEJBRUk7QUFBSyxpQkFBUyxFQUFDLHdDQUFmO0FBQUEsZ0NBQ0ksOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsaUNBQVg7QUFDSSxlQUFLLEVBQUUsSUFEWDtBQUVJLGdCQUFNLEVBQUUsR0FGWjtBQUdJLG1CQUFTLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUk7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLHdCQUFkO0FBQUEsc0JBQ0tILEtBQUssQ0FBQ08sTUFBTixLQUFpQixDQUFqQixHQUNLLDZCQURMLEdBRUs7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBT0tQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGdDQUNQLDhEQUFDLGdFQUFEO0FBRUksZ0JBQUUsRUFBRUQsSUFBSSxDQUFDRSxFQUZiO0FBR0ksbUJBQUssRUFBRUYsSUFBSSxDQUFDRyxLQUhoQjtBQUlJLG9CQUFNLEVBQUVILElBQUksQ0FBQ0ksTUFKakI7QUFLSSxtQkFBSyxFQUFFSixJQUFJLENBQUNMLEtBTGhCO0FBTUkseUJBQVcsRUFBRUssSUFBSSxDQUFDSyxXQU50QjtBQU9JLHNCQUFRLEVBQUVMLElBQUksQ0FBQ00sUUFQbkI7QUFRSSxtQkFBSyxFQUFFTixJQUFJLENBQUNPLEtBUmhCO0FBU0ksc0JBQVEsRUFBRVAsSUFBSSxDQUFDUTtBQVRuQixlQUNTUCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRE87QUFBQSxXQUFWLENBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBb0NJO0FBQUssaUJBQVMsRUFBQyxpREFBZjtBQUFBLGtCQUNLVixLQUFLLENBQUNPLE1BQU4sR0FBZSxDQUFmLGlCQUNHO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLG1CQUFkO0FBQUEscUNBQTZDUCxLQUFLLENBQUNPLE1BQW5ELDJCQUNJO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHFDQUNJLDhEQUFDLGlFQUFEO0FBQVUsd0JBQVEsRUFBRVcsR0FBRyxDQUFDbEIsS0FBSyxDQUFDSSxLQUFQLENBQXZCO0FBQXNDLHdCQUFRLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFBUSxxQkFBUyx3QkFBaUIsQ0FBQ0wsT0FBRCxJQUM5Qiw0RUFEYSxDQUFqQjtBQUFBLHNCQUVLLENBQUNBLE9BQUQsR0FBVyxtQkFBWCxHQUFpQztBQUZ0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2REg7O0dBbEVRRixRO1VBQ2FDLHdELEVBQ0pHLG9EOzs7S0FGVEosUTtBQW9FVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC45Mzk3YzQ1OWUxYjc3NWM1NzRlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgQ2hlY2tvdXRwcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoZWNrb3V0cHJvZHVjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiXG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICAgIGNvbnN0IFtzZXNzaW9uXSA9IHVzZVNlc3Npb24oKVxuICAgIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpO1xuICAgIGNvbnN0IHRvdGFsID0gWy4uLml0ZW1zLnByaWNlXVxuICAgIGNvbnNvbGUubG9nKHRvdGFsKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcmVsYXRpdmUgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJsZzpmbGV4IGZsZXgtZ3JvdyBwLTE1IG14LWF1dG8gbXQtMjRcIj5cbiAgICAgICAgICAgICAgICB7LyogbGVmdCBoYW5kIHNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptaW4tdy1taW4gIGZsZXgtZ3JvdyBtLTUgc2hhZG93LXNtIFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lralwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTA4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS14LTEwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgYm9yZGVyLWIgcGItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInlvdXIgQW1hem9uIEJhc2tldCBpcyBlbXB0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJTaG9wcGluZyBCYXNrZXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrb3V0cHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17aXRlbS5yYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcmltZT17aXRlbS5oYXNQcmltZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBtYXAgdGhyb3VnaCBhbmQgIHJlbWRlciB0aGUgY2tlY2tvdXQgcHJvZHVjdHMgaW4gdGhlIGl0ZW0gcmVkdWNlciAqL31cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICB7LyogUmlnaHQgSGFuZCBTZWN0aW9uICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgbWluLXctbWluIG0tMTYgYm9yZGVyIHNoYWRvdy1zbSBtLTBcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+U3ViVG90YWwgKHtpdGVtcy5sZW5ndGh9IGl0ZW1zKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3N1bShpdGVtcy5wcmljZSl9IGN1cnJlbmN5PVwiTkdOXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ1dHRvbiBtdC0yICR7IXNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tLWdyYXktMzAwIHRvLWdyYXktNTAwIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZFwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlc3Npb24gPyBcIkxvZ2luIHRvIENoZWNrb3V0XCIgOiBcIkNsaWNrIHRvIENoZWNrb3V0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=