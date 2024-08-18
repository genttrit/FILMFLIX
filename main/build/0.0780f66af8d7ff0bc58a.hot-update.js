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
    handleFavoriteMoviesButton(username, movie);
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
/******/ 	__webpack_require__.h = () => ("ba51526ddabc1300af3a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNzgwZjY2YWY4ZDdmZjBiYzU4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDNUI7QUFHeEIsU0FBU0csT0FBT0EsQ0FBQUMsSUFBQSxFQUE2RTtFQUFBLElBQTNFQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztJQUFFQyxLQUFLLEdBQUFGLElBQUEsQ0FBTEUsS0FBSztJQUFFQyxrQkFBa0IsR0FBQUgsSUFBQSxDQUFsQkcsa0JBQWtCO0lBQUVDLDBCQUEwQixHQUFBSixJQUFBLENBQTFCSSwwQkFBMEI7SUFBRUMsUUFBUSxHQUFBTCxJQUFBLENBQVJLLFFBQVE7RUFFeEYsSUFBSSxDQUFDSCxLQUFLLEVBQUU7SUFDVixPQUFPLElBQUk7RUFDYjtFQUVBLElBQU1JLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlDLENBQUMsRUFBSztJQUNsQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkosMEJBQTBCLENBQUNDLFFBQVEsRUFBRUgsS0FBSyxDQUFDO0lBQzNDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDckIsQ0FBQztFQUVELE9BQ0VULE9BQU8saUJBQ0xMLDBEQUFBO0lBQ0VnQixTQUFTLEVBQUMsa0JBQWtCO0lBQzVCQyxLQUFLLEVBQUU7TUFDTEMsZUFBZSx5Q0FBQUMsTUFBQSxDQUF5Q2IsS0FBSyxDQUFDYyxhQUFhO0lBQzdFO0VBQUUsZ0JBRUZwQiwwREFBQTtJQUFRZ0IsU0FBUyxFQUFDLFVBQVU7SUFBQ0ssT0FBTyxFQUFFZDtFQUFtQixHQUFDLEdBRWxELENBQUMsZUFDVFAsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFrQixnQkFDL0JoQiwwREFBQSxhQUFLTSxLQUFLLENBQUNnQixjQUFjLEVBQUMsS0FBRyxFQUFDaEIsS0FBSyxDQUFDaUIsWUFBWSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBTSxDQUFDLGVBQ3JFeEIsMERBQUEsWUFDR00sS0FBSyxDQUFDbUIsUUFDTixDQUFDLGVBQ0p6QiwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQWMsZ0JBQzNCaEIsMERBQUE7SUFBUWdCLFNBQVMsRUFBQyxhQUFhO0lBQUNLLE9BQU8sRUFBRSxTQUFBQSxRQUFBVixDQUFDO01BQUEsT0FBSUQsb0JBQW9CLENBQUNDLENBQUMsQ0FBQztJQUFBO0VBQUMsZ0JBQ3BFWCwwREFBQTtJQUNFMEIsS0FBSyxFQUFDLDRCQUE0QjtJQUNsQ0MsTUFBTSxFQUFDLE1BQU07SUFDYkMsT0FBTyxFQUFDLFdBQVc7SUFDbkJDLEtBQUssRUFBQztFQUFNLGdCQUVaN0IsMERBQUE7SUFBTThCLENBQUMsRUFBQyxlQUFlO0lBQUNDLElBQUksRUFBQztFQUFNLENBQUUsQ0FBQyxlQUN0Qy9CLDBEQUFBO0lBQU04QixDQUFDLEVBQUM7RUFBZ0wsQ0FBRSxDQUN2TCxDQUFDLG9CQUVBLENBRUwsQ0FDRixDQUNGLENBQ047QUFFTDtBQUVBLGlFQUFlM0IsT0FBTzs7Ozs7Ozs7VUNyRHRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QwMS8uL21haW4vY29tcG9uZW50cy9EZXRhbGlzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QwMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vRGV0YWlscy5zY3NzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gRGV0YWlscyh7ZGV0YWlscywgbW92aWUsIGhhbmRsZURldGFpbHNQb3BVcCwgaGFuZGxlRmF2b3JpdGVNb3ZpZXNCdXR0b24sIHVzZXJuYW1lfSkge1xyXG5cclxuICBpZiAoIW1vdmllKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0Zhdm9yaXRlcyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBoYW5kbGVGYXZvcml0ZU1vdmllc0J1dHRvbih1c2VybmFtZSwgbW92aWUpO1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKVxyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIGRldGFpbHMgJiYgKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyRGV0YWxpc1wiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MTI4MCR7bW92aWUuYmFja2Ryb3BfcGF0aH0pYFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlQnRuXCIgb25DbGljaz17aGFuZGxlRGV0YWlsc1BvcFVwfT5cclxuICAgICAgICAgIFhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMj57bW92aWUub3JpZ2luYWxfdGl0bGV9IC0ge21vdmllLnJlbGVhc2VfZGF0ZS5zdWJzdHJpbmcoMCw0KX08L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHttb3ZpZS5vdmVydmlld31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuRmF2b3JpdGVcIiBvbkNsaWNrPXtlID0+IGhhbmRsZUFkZFRvRmF2b3JpdGVzKGUpfT5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIEZhdm9yaXRlc1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmE1MTUyNmRkYWJjMTMwMGFmM2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJEZXRhaWxzIiwiX3JlZiIsImRldGFpbHMiLCJtb3ZpZSIsImhhbmRsZURldGFpbHNQb3BVcCIsImhhbmRsZUZhdm9yaXRlTW92aWVzQnV0dG9uIiwidXNlcm5hbWUiLCJoYW5kbGVBZGRUb0Zhdm9yaXRlcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb25jYXQiLCJiYWNrZHJvcF9wYXRoIiwib25DbGljayIsIm9yaWdpbmFsX3RpdGxlIiwicmVsZWFzZV9kYXRlIiwic3Vic3RyaW5nIiwib3ZlcnZpZXciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsImQiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==