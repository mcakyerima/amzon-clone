(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ "./src/app/store.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/mcakyerima/amazon-clone-papa/amzon-clone/src/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return (
    /*#__PURE__*/
    //we wrap our components with next auth provider which is installed as nexrt
    //auth provider.. this eneble us to use the next auth variable throughout our app through session
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_4__.Provider, {
      session: pageProps.session,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, undefined)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketSlice": function() { return /* binding */ basketSlice; },
/* harmony export */   "addToBasket": function() { return /* binding */ addToBasket; },
/* harmony export */   "removeFromBasket": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  items: []
};
const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      //check the index of basket item with the id we passed via our chekcout remove item
      const index = state.items.findIndex(basketItems => basketItems.id === action.payload.id); //create a copy of the current basket. so that we can splice and remove the selected product via its id and the set the new basket as the new basket

      let newBasket = [...state.items]; //check if index exist 

      if (index >= 0) {
        //then the item exist..so we remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product (id: ${action.payload.id}) because it does not exist`);
      }

      state.items = newBasket;
    }
  }
}); //actions caller functions in basket

const {
  addToBasket,
  removeFromBasket
} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.basket.items;
/* harmony default export */ __webpack_exports__["default"] = (basketSlice.reducer);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvYXBwL3N0b3JlLmpzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9zbGljZXMvYmFza2V0U2xpY2UuanMiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwiYmFza2V0IiwiYmFza2V0UmVkdWNlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwiYmFza2V0U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbXMiLCJpZCIsIm5ld0Jhc2tldCIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aW9ucyIsInNlbGVjdEl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxLQUFLLEdBQUdDLGdFQUFjLENBQUM7QUFDbENDLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUVDLHdEQUFhQTtBQURkO0FBRHlCLENBQUQsQ0FBNUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDMUM7QUFBQTtBQUNFO0FBQ0E7QUFFQSxrRUFBQyxzREFBRDtBQUFrQixhQUFPLEVBQUVBLFNBQVMsQ0FBQ0MsT0FBckM7QUFBQSw2QkFDRSw4REFBQyxpREFBRDtBQUFVLGFBQUssRUFBRVIsNkNBQWpCO0FBQUEsK0JBQ0UsOERBQUMsU0FBRCxvQkFBZU8sU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQVVELENBWEQ7O0FBYUEsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQSxNQUFNSSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQURZLENBQXJCO0FBSU8sTUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsUUFEK0I7QUFFckNKLGNBRnFDO0FBR3JDSyxVQUFRLEVBQUU7QUFDUkMsZUFBVyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QkQsV0FBSyxDQUFDTixLQUFOLEdBQWMsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLEtBQVYsRUFBaUJPLE1BQU0sQ0FBQ0MsT0FBeEIsQ0FBZDtBQUVELEtBSk87QUFLUkMsb0JBQWdCLEVBQUUsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ25DO0FBQ0EsWUFBTUcsS0FBSyxHQUFHSixLQUFLLENBQUNOLEtBQU4sQ0FBWVcsU0FBWixDQUNYQyxXQUFELElBQWlCQSxXQUFXLENBQUNDLEVBQVosS0FBbUJOLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSyxFQUR2QyxDQUFkLENBRm1DLENBS25DOztBQUNBLFVBQUlDLFNBQVMsR0FBRyxDQUFDLEdBQUdSLEtBQUssQ0FBQ04sS0FBVixDQUFoQixDQU5tQyxDQU9uQzs7QUFDQSxVQUFJVSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkO0FBQ0FJLGlCQUFTLENBQUNDLE1BQVYsQ0FBaUJMLEtBQWpCLEVBQXdCLENBQXhCO0FBQ0QsT0FIRCxNQUdPO0FBQ0xNLGVBQU8sQ0FBQ0MsSUFBUixDQUFjLDRCQUEyQlYsTUFBTSxDQUFDQyxPQUFQLENBQWVLLEVBQUcsNkJBQTNEO0FBQ0Q7O0FBQ0RQLFdBQUssQ0FBQ04sS0FBTixHQUFjYyxTQUFkO0FBRUQ7QUFyQk87QUFIMkIsQ0FBRCxDQUEvQixDLENBNEJQOztBQUNPLE1BQU07QUFBRVQsYUFBRjtBQUFlSTtBQUFmLElBQW9DUixXQUFXLENBQUNpQixPQUF0RCxDLENBRVA7O0FBQ08sTUFBTUMsV0FBVyxHQUFJYixLQUFELElBQVdBLEtBQUssQ0FBQ2IsTUFBTixDQUFhTyxLQUE1QztBQUVQLCtEQUFlQyxXQUFXLENBQUNULE9BQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGJhc2tldFJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBiYXNrZXQ6IGJhc2tldFJlZHVjZXIsXG4gIH0sXG59KTtcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZSdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgTmV4dEF1dGhQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vd2Ugd3JhcCBvdXIgY29tcG9uZW50cyB3aXRoIG5leHQgYXV0aCBwcm92aWRlciB3aGljaCBpcyBpbnN0YWxsZWQgYXMgbmV4cnRcbiAgICAvL2F1dGggcHJvdmlkZXIuLiB0aGlzIGVuZWJsZSB1cyB0byB1c2UgdGhlIG5leHQgYXV0aCB2YXJpYWJsZSB0aHJvdWdob3V0IG91ciBhcHAgdGhyb3VnaCBzZXNzaW9uXG4gICAgXG4gICAgPE5leHRBdXRoUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9OZXh0QXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXRlbXM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGJhc2tldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImJhc2tldFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdXG5cbiAgICB9LFxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAvL2NoZWNrIHRoZSBpbmRleCBvZiBiYXNrZXQgaXRlbSB3aXRoIHRoZSBpZCB3ZSBwYXNzZWQgdmlhIG91ciBjaGVrY291dCByZW1vdmUgaXRlbVxuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgIChiYXNrZXRJdGVtcykgPT4gYmFza2V0SXRlbXMuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICApXG4gICAgICAvL2NyZWF0ZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgYmFza2V0LiBzbyB0aGF0IHdlIGNhbiBzcGxpY2UgYW5kIHJlbW92ZSB0aGUgc2VsZWN0ZWQgcHJvZHVjdCB2aWEgaXRzIGlkIGFuZCB0aGUgc2V0IHRoZSBuZXcgYmFza2V0IGFzIHRoZSBuZXcgYmFza2V0XG4gICAgICBsZXQgbmV3QmFza2V0ID0gWy4uLnN0YXRlLml0ZW1zXVxuICAgICAgLy9jaGVjayBpZiBpbmRleCBleGlzdCBcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIC8vdGhlbiB0aGUgaXRlbSBleGlzdC4uc28gd2UgcmVtb3ZlIGl0XG4gICAgICAgIG5ld0Jhc2tldC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oYGNhbnQgcmVtb3ZlIHByb2R1Y3QgKGlkOiAke2FjdGlvbi5wYXlsb2FkLmlkfSkgYmVjYXVzZSBpdCBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgfVxuICAgICAgc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXQ7XG5cbiAgICB9LFxuICB9XG59KTtcblxuLy9hY3Rpb25zIGNhbGxlciBmdW5jdGlvbnMgaW4gYmFza2V0XG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==