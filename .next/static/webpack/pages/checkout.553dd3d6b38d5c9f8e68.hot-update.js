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
/* harmony import */ var _home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Checkoutproduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Checkoutproduct */ "./src/components/Checkoutproduct.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/pages/checkout.js",
    _s = $RefreshSig$();










function Checkout() {
  _s();

  var _this = this;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession)(),
      _useSession2 = (0,_home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.selectItems);
  var total = (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    var num = items.map(function (item, ind) {
      return item.price;
    });

    var _final = num.reduce(function (accu, idx) {
      return accu + idx;
    }, 0);

    console.log(int(_final));
  }, [items]);
  console.log("tins is ", total);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-gray-100 relative mb-1.5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex flex-grow p-15 mx-auto mt-24",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "lg:min-w-min  flex-grow m-5 shadow-sm ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "https://links.papareact.com/ikj",
          width: 1080,
          height: 300,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-x-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? "your Amazon Basket is empty" : "Shopping Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), items.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Checkoutproduct__WEBPACK_IMPORTED_MODULE_4__.default, {
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
              lineNumber: 42,
              columnNumber: 29
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg-gray-200 min-w-min m-16 border shadow-sm m-0",
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "m-10",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["SubTotal (", items.length, " items):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_8___default()), {
                quantity: "a",
                currency: "NGN"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button mt-2 ".concat(!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"),
            children: !session ? "Login to Checkout" : "Click to Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(Checkout, "kJAArOKXkgP7RX2RpqRyi4HPzI8=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJpdGVtcyIsInVzZVNlbGVjdG9yIiwic2VsZWN0SXRlbXMiLCJ0b3RhbCIsInVzZUVmZmVjdCIsIm51bSIsIm1hcCIsIml0ZW0iLCJpbmQiLCJwcmljZSIsImZpbmFsIiwicmVkdWNlIiwiYWNjdSIsImlkeCIsImNvbnNvbGUiLCJsb2ciLCJpbnQiLCJsZW5ndGgiLCJpbmRleCIsImlkIiwidGl0bGUiLCJyYXRpbmciLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJoYXNQcmltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLG9CQUNFQyw0REFBVSxFQURaO0FBQUE7QUFBQSxNQUNUQyxPQURTOztBQUVoQixNQUFNQyxLQUFLLEdBQUdDLHdEQUFXLENBQUNDLDREQUFELENBQXpCO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxnREFBUyxDQUFDLFlBQU07QUFDMUIsUUFBTUMsR0FBRyxHQUFHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUFFLGFBQU9ELElBQUksQ0FBQ0UsS0FBWjtBQUFtQixLQUE5QyxDQUFaOztBQUNBLFFBQU1DLE1BQUssR0FBR0wsR0FBRyxDQUFDTSxNQUFKLENBQVcsVUFBQ0MsSUFBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUMsYUFBT0QsSUFBSSxHQUFHQyxHQUFkO0FBQW1CLEtBQS9DLEVBQWlELENBQWpELENBQWQ7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFHLENBQUNOLE1BQUQsQ0FBZjtBQUNILEdBSnNCLEVBSXBCLENBQUNWLEtBQUQsQ0FKb0IsQ0FBdkI7QUFLQWMsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF5QlosS0FBekI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLDZCQUFmO0FBQUEsNkJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQU0sZUFBUyxFQUFDLHNDQUFoQjtBQUFBLDhCQUVJO0FBQUssaUJBQVMsRUFBQyx3Q0FBZjtBQUFBLGdDQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLGlDQUFYO0FBQ0ksZUFBSyxFQUFFLElBRFg7QUFFSSxnQkFBTSxFQUFFLEdBRlo7QUFHSSxtQkFBUyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUssbUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyx3QkFBZDtBQUFBLHNCQUNLSCxLQUFLLENBQUNpQixNQUFOLEtBQWlCLENBQWpCLEdBQ0ssNkJBREwsR0FFSztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFPS2pCLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT1csS0FBUDtBQUFBLGdDQUNQLDhEQUFDLGdFQUFEO0FBRUksZ0JBQUUsRUFBRVgsSUFBSSxDQUFDWSxFQUZiO0FBR0ksbUJBQUssRUFBRVosSUFBSSxDQUFDYSxLQUhoQjtBQUlJLG9CQUFNLEVBQUViLElBQUksQ0FBQ2MsTUFKakI7QUFLSSxtQkFBSyxFQUFFZCxJQUFJLENBQUNFLEtBTGhCO0FBTUkseUJBQVcsRUFBRUYsSUFBSSxDQUFDZSxXQU50QjtBQU9JLHNCQUFRLEVBQUVmLElBQUksQ0FBQ2dCLFFBUG5CO0FBUUksbUJBQUssRUFBRWhCLElBQUksQ0FBQ2lCLEtBUmhCO0FBU0ksc0JBQVEsRUFBRWpCLElBQUksQ0FBQ2tCO0FBVG5CLGVBQ1NQLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETztBQUFBLFdBQVYsQ0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFvQ0k7QUFBSyxpQkFBUyxFQUFDLGlEQUFmO0FBQUEsa0JBQ0tsQixLQUFLLENBQUNpQixNQUFOLEdBQWUsQ0FBZixpQkFDRztBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBLHFDQUE2Q2pCLEtBQUssQ0FBQ2lCLE1BQW5ELDJCQUNJO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHFDQUNJLDhEQUFDLGlFQUFEO0FBQVUsd0JBQVEsRUFBRSxHQUFwQjtBQUF5Qix3QkFBUSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU1JO0FBQVEscUJBQVMsd0JBQWlCLENBQUNsQixPQUFELElBQzlCLDRFQURhLENBQWpCO0FBQUEsc0JBRUssQ0FBQ0EsT0FBRCxHQUFXLG1CQUFYLEdBQWlDO0FBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZESDs7R0F4RVFGLFE7VUFDYUMsd0QsRUFDSkcsb0Q7OztLQUZUSixRO0FBMEVULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjU1M2RkM2Q2YjM4ZDVjOWY4ZTY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBDaGVja291dHByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tvdXRwcm9kdWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDaGVja291dCgpIHtcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKClcbiAgICBjb25zdCBpdGVtcyA9IHVzZVNlbGVjdG9yKHNlbGVjdEl0ZW1zKTtcblxuICAgIGNvbnN0IHRvdGFsID0gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbnVtID0gaXRlbXMubWFwKChpdGVtLCBpbmQpID0+IHsgcmV0dXJuIGl0ZW0ucHJpY2UgfSlcbiAgICAgICAgY29uc3QgZmluYWwgPSBudW0ucmVkdWNlKChhY2N1ICwgaWR4KSA9PiB7cmV0dXJuIGFjY3UgKyBpZHggfSwgMClcbiAgICAgICAgY29uc29sZS5sb2coaW50KGZpbmFsKSlcbiAgICB9LCBbaXRlbXNdKVxuICAgIGNvbnNvbGUubG9nKFwidGlucyBpcyBcIiAsIHRvdGFsKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCByZWxhdGl2ZSBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImxnOmZsZXggZmxleC1ncm93IHAtMTUgbXgtYXV0byBtdC0yNFwiPlxuICAgICAgICAgICAgICAgIHsvKiBsZWZ0IGhhbmQgc2VjdGlvbiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1pbi13LW1pbiAgZmxleC1ncm93IG0tNSBzaGFkb3ctc20gXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vaWtqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDgwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC01IHNwYWNlLXgtMTAgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBwYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwieW91ciBBbWF6b24gQmFza2V0IGlzIGVtcHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlNob3BwaW5nIEJhc2tldFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRwcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByaW1lPXtpdGVtLmhhc1ByaW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIG1hcCB0aHJvdWdoIGFuZCAgcmVtZGVyIHRoZSBja2Vja291dCBwcm9kdWN0cyBpbiB0aGUgaXRlbSByZWR1Y2VyICovfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIHsvKiBSaWdodCBIYW5kIFNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBtaW4tdy1taW4gbS0xNiBib3JkZXIgc2hhZG93LXNtIG0tMFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXBcIj5TdWJUb3RhbCAoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17XCJhXCJ9IGN1cnJlbmN5PVwiTkdOXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidXR0b24gbXQtMiAkeyFzZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbS1ncmF5LTMwMCB0by1ncmF5LTUwMCBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTMwMCBjdXJzb3Itbm90LWFsbG93ZWRcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZXNzaW9uID8gXCJMb2dpbiB0byBDaGVja291dFwiIDogXCJDbGljayB0byBDaGVja291dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0XG4iXSwic291cmNlUm9vdCI6IiJ9