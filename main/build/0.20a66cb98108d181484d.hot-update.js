"use strict";
self["webpackHotUpdatereact01"](0,{

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);


function Details(_ref) {
  var details = _ref.details,
    movie = _ref.movie,
    handleDetailsPopUp = _ref.handleDetailsPopUp,
    handleFavoriteMoviesButton = _ref.handleFavoriteMoviesButton,
    username = _ref.username;
  if (!movie) {
    return null;
  }
  var handleAddToFavorites = function handleAddToFavorites(e) {
    e.preventDefault();
    handleFavoriteMoviesButton(e, username, movie);
    console.log('test');
  };
  return details && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "containerDetalis",
    style: {
      backgroundImage: "url(https://image.tmdb.org/t/p/w1280".concat(movie.backdrop_path, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "closeBtn",
    onClick: handleDetailsPopUp
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, movie.original_title, " - ", movie.release_date.substring(0, 4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, movie.overview), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btnContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnFavorite",
    onClick: function onClick(e) {
      return handleAddToFavorites(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "16px",
    viewBox: "0 0 24 24",
    width: "16px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  })), "Add to Favorites"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c7fcb72a4a3500cb522")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMGE2NmNiOTgxMDhkMTgxNDg0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDNUI7QUFHeEIsU0FBU0csT0FBT0EsQ0FBQUMsSUFBQSxFQUE2RTtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxLQUFLLEdBQUFGLElBQUEsQ0FBTEUsS0FBSztJQUFFQyxrQkFBa0IsR0FBQUgsSUFBQSxDQUFsQkcsa0JBQWtCO0lBQUVDLDBCQUEwQixHQUFBSixJQUFBLENBQTFCSSwwQkFBMEI7SUFBRUMsUUFBUSxHQUFBTCxJQUFBLENBQVJLLFFBQVE7RUFFeEYsSUFBSSxDQUFDSCxLQUFLLEVBQUU7SUFDVixPQUFPLElBQUk7RUFDYjtFQUVBLElBQU1JLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlDLENBQUMsRUFBSztJQUNsQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkosMEJBQTBCLENBQUNHLENBQUMsRUFBQ0YsUUFBUSxFQUFFSCxLQUFLLENBQUM7SUFDN0NPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNyQixDQUFDO0VBRUQsT0FDRVQsT0FBTyxpQkFDTEwsMERBQUE7SUFDRWdCLFNBQVMsRUFBQyxrQkFBa0I7SUFDNUJDLEtBQUssRUFBRTtNQUNMQyxlQUFlLHlDQUFBQyxNQUFBLENBQXlDYixLQUFLLENBQUNjLGFBQWE7SUFDN0U7RUFBRSxnQkFFRnBCLDBEQUFBO0lBQVFnQixTQUFTLEVBQUMsVUFBVTtJQUFDSyxPQUFPLEVBQUVkO0VBQW1CLEdBQUMsR0FFbEQsQ0FBQyxlQUNUUCwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQWtCLGdCQUMvQmhCLDBEQUFBLGFBQUtNLEtBQUssQ0FBQ2dCLGNBQWMsRUFBQyxLQUFHLEVBQUNoQixLQUFLLENBQUNpQixZQUFZLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFNLENBQUMsZUFDckV4QiwwREFBQSxZQUNHTSxLQUFLLENBQUNtQixRQUNOLENBQUMsZUFDSnpCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBYyxnQkFDM0JoQiwwREFBQTtJQUFRZ0IsU0FBUyxFQUFDLGFBQWE7SUFBQ0ssT0FBTyxFQUFFLFNBQUFBLFFBQUNWLENBQUM7TUFBQSxPQUFLRCxvQkFBb0IsQ0FBQ0MsQ0FBQyxDQUFDO0lBQUE7RUFBQyxnQkFDdEVYLDBEQUFBO0lBQ0UwQixLQUFLLEVBQUMsNEJBQTRCO0lBQ2xDQyxNQUFNLEVBQUMsTUFBTTtJQUNiQyxPQUFPLEVBQUMsV0FBVztJQUNuQkMsS0FBSyxFQUFDO0VBQU0sZ0JBRVo3QiwwREFBQTtJQUFNOEIsQ0FBQyxFQUFDLGVBQWU7SUFBQ0MsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUFDLGVBQ3RDL0IsMERBQUE7SUFBTThCLENBQUMsRUFBQztFQUFnTCxDQUFFLENBQ3ZMLENBQUMsb0JBRUEsQ0FFTCxDQUNGLENBQ0YsQ0FDTjtBQUVMO0FBRUEsaUVBQWUzQixPQUFPOzs7Ozs7OztVQ3JEdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdDAxLy4vbWFpbi9jb21wb25lbnRzL0RldGFsaXMvRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9yZWFjdDAxL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9EZXRhaWxzLnNjc3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBEZXRhaWxzKHtkZXRhaWxzLCBtb3ZpZSwgaGFuZGxlRGV0YWlsc1BvcFVwLCBoYW5kbGVGYXZvcml0ZU1vdmllc0J1dHRvbiwgdXNlcm5hbWV9KSB7XHJcblxyXG4gIGlmICghbW92aWUpIHtcclxuICAgIHJldHVybiBudWxsOyBcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvRmF2b3JpdGVzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGhhbmRsZUZhdm9yaXRlTW92aWVzQnV0dG9uKGUsdXNlcm5hbWUsIG1vdmllKTtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgZGV0YWlscyAmJiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJEZXRhbGlzXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxMjgwJHttb3ZpZS5iYWNrZHJvcF9wYXRofSlgXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2VCdG5cIiBvbkNsaWNrPXtoYW5kbGVEZXRhaWxzUG9wVXB9PlxyXG4gICAgICAgICAgWFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyPnttb3ZpZS5vcmlnaW5hbF90aXRsZX0gLSB7bW92aWUucmVsZWFzZV9kYXRlLnN1YnN0cmluZygwLDQpfTwvaDI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge21vdmllLm92ZXJ2aWV3fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5GYXZvcml0ZVwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVBZGRUb0Zhdm9yaXRlcyhlKX0+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIEFkZCB0byBGYXZvcml0ZXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdjN2ZjYjcyYTRhMzUwMGNiNTIyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiRGV0YWlscyIsIl9yZWYiLCJkZXRhaWxzIiwibW92aWUiLCJoYW5kbGVEZXRhaWxzUG9wVXAiLCJoYW5kbGVGYXZvcml0ZU1vdmllc0J1dHRvbiIsInVzZXJuYW1lIiwiaGFuZGxlQWRkVG9GYXZvcml0ZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiYmFja2Ryb3BfcGF0aCIsIm9uQ2xpY2siLCJvcmlnaW5hbF90aXRsZSIsInJlbGVhc2VfZGF0ZSIsInN1YnN0cmluZyIsIm92ZXJ2aWV3IiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJkIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=