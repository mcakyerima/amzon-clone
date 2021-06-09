self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketSlice": function() { return /* binding */ basketSlice; },
/* harmony export */   "addToBasket": function() { return /* binding */ addToBasket; },
/* harmony export */   "removeFromBasket": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; }
/* harmony export */ });
/* harmony import */ var _home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var initialState = {
  items: []
};
var basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: "basket",
  initialState: initialState,
  reducers: {
    addToBasket: function addToBasket(state, action) {
      state.items = [].concat((0,_home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items), [action.payload]);
    },
    removeFromBasket: function removeFromBasket(state, action) {
      //check the index of basket item with the id we passed via our chekcout remove item
      var index = state.items.findIndex(function (basketItems) {
        return basketItems.id === action.payload.id;
      }); //create a copy of the current basket. so that we can splice and remove the selected product via its id and the set the new basket as the new basket

      var newBasket = (0,_home_mcakyerima_amazon_clone_papa_amzon_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items); //check if index exist 


      if (index >= 0) {
        //then the item exist..so we remove it
        newBasket.splice(index, 1);
      } else {
        console.warn("");
      }
    }
  }
}); //actions callers functions in basket

var _basketSlice$actions = basketSlice.actions,
    addToBasket = _basketSlice$actions.addToBasket,
    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice


var selectItems = function selectItems(state) {
  return state.basket.items;
};
/* harmony default export */ __webpack_exports__["default"] = (basketSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW1zIiwiaWQiLCJuZXdCYXNrZXQiLCJzcGxpY2UiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQURZLENBQXJCO0FBSU8sSUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsUUFEK0I7QUFFckNKLGNBQVksRUFBWkEsWUFGcUM7QUFHckNLLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUscUJBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM5QkQsV0FBSyxDQUFDTixLQUFOLGdMQUFrQk0sS0FBSyxDQUFDTixLQUF4QixJQUErQk8sTUFBTSxDQUFDQyxPQUF0QztBQUVELEtBSk87QUFLUkMsb0JBQWdCLEVBQUUsMEJBQUNILEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQztBQUNBLFVBQU1HLEtBQUssR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FDWixVQUFBQyxXQUFXO0FBQUEsZUFBSUEsV0FBVyxDQUFDQyxFQUFaLEtBQW1CTixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBdEM7QUFBQSxPQURDLENBQWQsQ0FGbUMsQ0FLbkM7O0FBQ0EsVUFBSUMsU0FBUyxHQUFHLG1LQUFJUixLQUFLLENBQUNOLEtBQWIsQ0FBYixDQU5tQyxDQU9uQzs7O0FBQ0EsVUFBSVUsS0FBSyxJQUFHLENBQVosRUFBZTtBQUNiO0FBQ0FJLGlCQUFTLENBQUNDLE1BQVYsQ0FBaUJMLEtBQWpCLEVBQXVCLENBQXZCO0FBQ0QsT0FIRCxNQUdLO0FBQ0hNLGVBQU8sQ0FBQ0MsSUFBUixDQUFhLEVBQWI7QUFDRDtBQUVKO0FBcEJTO0FBSDJCLENBQUQsQ0FBL0IsQyxDQTBCUDs7MkJBQ2lEaEIsV0FBVyxDQUFDaUIsTztJQUE5Q2IsVyx3QkFBQUEsVztJQUFhSSxnQix3QkFBQUEsZ0IsRUFFNUI7OztBQUNPLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNiLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNjLE1BQU4sQ0FBYXBCLEtBQXhCO0FBQUEsQ0FBcEI7QUFFUCwrREFBZUMsV0FBVyxDQUFDb0IsT0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuYmIyZDZlZWZjMWUzMGJlNmU4OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYmFza2V0XCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF1cblxuICAgIH0sXG4gICAgcmVtb3ZlRnJvbUJhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8vY2hlY2sgdGhlIGluZGV4IG9mIGJhc2tldCBpdGVtIHdpdGggdGhlIGlkIHdlIHBhc3NlZCB2aWEgb3VyIGNoZWtjb3V0IHJlbW92ZSBpdGVtXG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcbiAgICAgICAgYmFza2V0SXRlbXMgPT4gYmFza2V0SXRlbXMuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICApXG4gICAgICAvL2NyZWF0ZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgYmFza2V0LiBzbyB0aGF0IHdlIGNhbiBzcGxpY2UgYW5kIHJlbW92ZSB0aGUgc2VsZWN0ZWQgcHJvZHVjdCB2aWEgaXRzIGlkIGFuZCB0aGUgc2V0IHRoZSBuZXcgYmFza2V0IGFzIHRoZSBuZXcgYmFza2V0XG4gICAgICBsZXQgbmV3QmFza2V0ID0gWy4uLnN0YXRlLml0ZW1zXVxuICAgICAgLy9jaGVjayBpZiBpbmRleCBleGlzdCBcbiAgICAgIGlmIChpbmRleCA+PTAgKXtcbiAgICAgICAgLy90aGVuIHRoZSBpdGVtIGV4aXN0Li5zbyB3ZSByZW1vdmUgaXRcbiAgICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwxKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlwiKVxuICAgICAgfVxuICAgICAgXG4gIH0sXG59fSk7XG5cbi8vYWN0aW9ucyBjYWxsZXJzIGZ1bmN0aW9ucyBpbiBiYXNrZXRcbmV4cG9ydCBjb25zdCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zO1xuXG4vLyBTZWxlY3RvcnMgLSBUaGlzIGlzIGhvdyB3ZSBwdWxsIGluZm9ybWF0aW9uIGZyb20gdGhlIEdsb2JhbCBzdG9yZSBzbGljZVxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXM7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2tldFNsaWNlLnJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9