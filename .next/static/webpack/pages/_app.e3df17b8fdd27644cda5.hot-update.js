self["webpackHotUpdate_N_E"]("pages/_app",{

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
        console.warn("cant remove product (id: ".concat(action.payload.id, ") because it does not exist"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW1zIiwiaWQiLCJuZXdCYXNrZXQiLCJzcGxpY2UiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQURZLENBQXJCO0FBSU8sSUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsUUFEK0I7QUFFckNKLGNBQVksRUFBWkEsWUFGcUM7QUFHckNLLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUscUJBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM5QkQsV0FBSyxDQUFDTixLQUFOLGdMQUFrQk0sS0FBSyxDQUFDTixLQUF4QixJQUErQk8sTUFBTSxDQUFDQyxPQUF0QztBQUVELEtBSk87QUFLUkMsb0JBQWdCLEVBQUUsMEJBQUNILEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQztBQUNBLFVBQU1HLEtBQUssR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FDWixVQUFBQyxXQUFXO0FBQUEsZUFBSUEsV0FBVyxDQUFDQyxFQUFaLEtBQW1CTixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBdEM7QUFBQSxPQURDLENBQWQsQ0FGbUMsQ0FLbkM7O0FBQ0EsVUFBSUMsU0FBUyxHQUFHLG1LQUFJUixLQUFLLENBQUNOLEtBQWIsQ0FBYixDQU5tQyxDQU9uQzs7O0FBQ0EsVUFBSVUsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZDtBQUNBSSxpQkFBUyxDQUFDQyxNQUFWLENBQWlCTCxLQUFqQixFQUF3QixDQUF4QjtBQUNELE9BSEQsTUFHTztBQUNMTSxlQUFPLENBQUNDLElBQVIsb0NBQXlDVixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBeEQ7QUFDRDtBQUVGO0FBcEJPO0FBSDJCLENBQUQsQ0FBL0IsQyxDQTJCUDs7MkJBQ2lEWixXQUFXLENBQUNpQixPO0lBQTlDYixXLHdCQUFBQSxXO0lBQWFJLGdCLHdCQUFBQSxnQixFQUU1Qjs7O0FBQ08sSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2MsTUFBTixDQUFhcEIsS0FBeEI7QUFBQSxDQUFwQjtBQUVQLCtEQUFlQyxXQUFXLENBQUNvQixPQUEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUzZGYxN2I4ZmRkMjc2NDRjZGE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXRlbXM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGJhc2tldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImJhc2tldFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdXG5cbiAgICB9LFxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAvL2NoZWNrIHRoZSBpbmRleCBvZiBiYXNrZXQgaXRlbSB3aXRoIHRoZSBpZCB3ZSBwYXNzZWQgdmlhIG91ciBjaGVrY291dCByZW1vdmUgaXRlbVxuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgIGJhc2tldEl0ZW1zID0+IGJhc2tldEl0ZW1zLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgKVxuICAgICAgLy9jcmVhdGUgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGJhc2tldC4gc28gdGhhdCB3ZSBjYW4gc3BsaWNlIGFuZCByZW1vdmUgdGhlIHNlbGVjdGVkIHByb2R1Y3QgdmlhIGl0cyBpZCBhbmQgdGhlIHNldCB0aGUgbmV3IGJhc2tldCBhcyB0aGUgbmV3IGJhc2tldFxuICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc11cbiAgICAgIC8vY2hlY2sgaWYgaW5kZXggZXhpc3QgXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAvL3RoZW4gdGhlIGl0ZW0gZXhpc3QuLnNvIHdlIHJlbW92ZSBpdFxuICAgICAgICBuZXdCYXNrZXQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBjYW50IHJlbW92ZSBwcm9kdWN0IChpZDogJHthY3Rpb24ucGF5bG9hZC5pZH0pIGJlY2F1c2UgaXQgZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgIH1cblxuICAgIH0sXG4gIH1cbn0pO1xuXG4vL2FjdGlvbnMgY2FsbGVycyBmdW5jdGlvbnMgaW4gYmFza2V0XG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==