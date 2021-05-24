self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ "./src/components/Products.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/components/ProductFeed.js";


function ProductFeed(_ref) {
  var _this = this;

  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          price = _ref2.price,
          description = _ref2.description,
          category = _ref2.category,
          image = _ref2.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "md:col-span-full ",
      src: "https://links.papareact.com/dyz"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(function (_ref3) {
        var id = _ref3.id,
            title = _ref3.title,
            price = _ref3.price,
            description = _ref3.description,
            category = _ref3.category,
            image = _ref3.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:col-span-2",
      children: products.slice(5, products.lenght).map(function (_ref4) {
        var id = _ref4.id,
            title = _ref4.title,
            price = _ref4.price,
            description = _ref4.description,
            category = _ref4.category,
            image = _ref4.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = ProductFeed;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

var _c;

$RefreshReg$(_c, "ProductFeed");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMiXSwibmFtZXMiOlsiUHJvZHVjdEZlZWQiLCJwcm9kdWN0cyIsInNsaWNlIiwibWFwIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwibGVuZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsV0FBVCxPQUFtQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvQixzQkFDSTtBQUFLLGFBQVMsRUFBQyx5RkFBZjtBQUFBLGVBRUtBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCO0FBQUEsVUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsVUFBT0MsS0FBUCxTQUFPQSxLQUFQO0FBQUEsVUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsVUFBcUJDLFdBQXJCLFNBQXFCQSxXQUFyQjtBQUFBLFVBQWtDQyxRQUFsQyxTQUFrQ0EsUUFBbEM7QUFBQSxVQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsMEJBQ3JCLDhEQUFDLDhDQUFEO0FBRUksVUFBRSxFQUFFTCxFQUZSO0FBR0ksYUFBSyxFQUFFQyxLQUhYO0FBSUksYUFBSyxFQUFFQyxLQUpYO0FBS0ksbUJBQVcsRUFBRUMsV0FMakI7QUFNSSxnQkFBUSxFQUFFQyxRQU5kO0FBT0ksYUFBSyxFQUFFQztBQVBYLFNBQ1NMLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURxQjtBQUFBLEtBQXhCLENBRkwsZUFjSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUNFLFNBQUcsRUFBQztBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSixlQWlCSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsZ0JBQ0tILFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFDQUMsR0FEQSxDQUNJO0FBQUEsWUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsWUFBT0MsS0FBUCxTQUFPQSxLQUFQO0FBQUEsWUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsWUFBcUJDLFdBQXJCLFNBQXFCQSxXQUFyQjtBQUFBLFlBQWtDQyxRQUFsQyxTQUFrQ0EsUUFBbEM7QUFBQSxZQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsNEJBQ0wsOERBQUMsOENBQUQ7QUFFSSxZQUFFLEVBQUVMLEVBRlI7QUFHSSxlQUFLLEVBQUVDLEtBSFg7QUFJSSxlQUFLLEVBQUVDLEtBSlg7QUFLSSxxQkFBVyxFQUFFQyxXQUxqQjtBQU1JLGtCQUFRLEVBQUVDLFFBTmQ7QUFPSSxlQUFLLEVBQUVDO0FBUFgsV0FDU0wsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLO0FBQUEsT0FESjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkosZUFpQ0k7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNLSCxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCRCxRQUFRLENBQUNTLE1BQTFCLEVBQ0FQLEdBREEsQ0FDSTtBQUFBLFlBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFlBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFlBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFlBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxZQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsWUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDRCQUNMLDhEQUFDLDhDQUFEO0FBRUksWUFBRSxFQUFFTCxFQUZSO0FBR0ksZUFBSyxFQUFFQyxLQUhYO0FBSUksZUFBSyxFQUFFQyxLQUpYO0FBS0kscUJBQVcsRUFBRUMsV0FMakI7QUFNSSxrQkFBUSxFQUFFQyxRQU5kO0FBT0ksZUFBSyxFQUFFQztBQVBYLFdBQ1NMLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESztBQUFBLE9BREo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0RIOztLQXZEUUosVztBQXlEVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYzdkZTY2M2IxYjMyZGE3NTY1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuL1Byb2R1Y3RzXCJcblxuZnVuY3Rpb24gUHJvZHVjdEZlZWQoeyBwcm9kdWN0cyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG9cIj5cblxuICAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDAsNCkubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfSAvPlxuXG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi1mdWxsXG4gICAgICAgICAgICBcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCIvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoNCw1KVxuICAgICAgICAgICAgICAgIC5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9IC8+XG5cbiAgICAgICAgICAgICkpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5zbGljZSg1LHByb2R1Y3RzLmxlbmdodClcbiAgICAgICAgICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfSAvPlxuXG4gICAgICAgICAgICApKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==