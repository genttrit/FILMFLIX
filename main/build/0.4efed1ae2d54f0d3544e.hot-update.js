"use strict";
self["webpackHotUpdatereact01"](0,{

/***/ 55:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





function Nav(_ref) {
  var username = _ref.username,
    setUsername = _ref.setUsername;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    searchBar = _useState2[0],
    setSearchBar = _useState2[1];
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  //{current: undefined}

  var handleSearchBar = function handleSearchBar(e) {
    e.preventDefault();
    setSearchBar(function (prevState) {
      return !prevState;
    });
    setTimeout(function () {
      if (!searchBar) {
        inputRef.current.focus();
      }
    }, 0);
  };
  var handleLogOut = function handleLogOut(e) {
    console.log('logout');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "link",
    to: "/home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "logo"
  }, "FILMFLIX"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "link",
    to: "/favorites"
  }, "My Favorites")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "link",
    to: "/"
  }, searchBar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: inputRef,
    type: "text",
    onBlur: function onBlur(e) {
      return handleSearchBar(e);
    },
    placeholder: "Search your movie here.."
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    onClick: function onClick(e) {
      return handleSearchBar(e);
    },
    xmlns: "http://www.w3.org/2000/svg",
    height: "25px",
    viewBox: "0 0 24 24",
    width: "25px",
    fill: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }))))), username.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "loggedInfoContainer",
    onClick: function onClick(e) {
      return handleLogOut(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "loggedMsg"
  }, "HI ", username.toLocaleUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "avatar",
    src: "../files/avatar-logo.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "link",
    to: "/"
  }, "Log out"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "link",
    to: "/login"
  }, "Log in"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e3f7a158dd5a75340833")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFJTSxZQUFZLENBQUNOLENBQUMsQ0FBQztJQUFBO0VBQUMsZ0JBQ2pFaEIsMERBQUE7SUFBRzBCLFNBQVMsRUFBQztFQUFXLEdBQUMsS0FBRyxFQUFDbkIsUUFBUSxDQUFDa0MsaUJBQWlCLENBQUMsQ0FBSyxDQUFDLGVBQzlEekMsMERBQUE7SUFBSzBCLFNBQVMsRUFBQyxRQUFRO0lBQUNnQixHQUFHLEVBQUM7RUFBMEIsQ0FBTSxDQUN6RCxDQUFDLGVBQ04xQywwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBRXlCLFNBQVMsRUFBQyxNQUFNO0lBQUNDLEVBQUUsRUFBQztFQUFHLEdBQUMsU0FFekIsQ0FDSCxDQUNILENBQUMsZ0JBRUQzQiwwREFBQSxDQUFDQyxrREFBSTtJQUFFeUIsU0FBUyxFQUFDLE1BQU07SUFBQ0MsRUFBRSxFQUFDO0VBQVEsR0FBQyxRQUU5QixDQUVQLENBQUM7QUFFVjtBQUVBLGlFQUFldEIsR0FBRzs7Ozs7Ozs7VUN0RmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QwMS8uL21haW4vY29tcG9uZW50cy9OYXYvTmF2LmpzIiwid2VicGFjazovL3JlYWN0MDEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9OYXYuc2Nzc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdih7dXNlcm5hbWUsIHNldFVzZXJuYW1lfSkge1xyXG5cclxuICBjb25zdCBbc2VhcmNoQmFyLCBzZXRTZWFyY2hCYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgLy97Y3VycmVudDogdW5kZWZpbmVkfVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQmFyID0gKGUpID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2VhcmNoQmFyKHByZXZTdGF0ZSA9PiFwcmV2U3RhdGUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghc2VhcmNoQmFyKSB7XHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ091dCA9IChlKSA9PntcclxuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKVxyXG4gIH0gXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZDb250YWluZXJcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImxpbmtcIiB0bz1cIi9ob21lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29cIj5GSUxNRkxJWDwvcD5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImxpbmtcIiB0bz1cIi9mYXZvcml0ZXNcIj5cclxuICAgICAgICAgICAgTXkgRmF2b3JpdGVzXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rXCIgdG89XCIvXCI+XHJcbiAgICAgICAgICAgIHtzZWFyY2hCYXIgPyAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17ZSA9PmhhbmRsZVNlYXJjaEJhcihlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB5b3VyIG1vdmllIGhlcmUuLlwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHN2ZyBvbkNsaWNrPXtlID0+IGhhbmRsZVNlYXJjaEJhcihlKX1cclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIHsodXNlcm5hbWUubGVuZ3RoID4gMCkgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2dlZEluZm9Db250YWluZXJcIiBvbkNsaWNrPXtlID0+IGhhbmRsZUxvZ091dChlKX0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xvZ2dlZE1zZyc+SEkge3VzZXJuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCl9PC9wPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J2F2YXRhcicgc3JjPVwiLi4vZmlsZXMvYXZhdGFyLWxvZ28ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rICBjbGFzc05hbWU9XCJsaW5rXCIgdG89XCIvXCI+XHJcbiAgICAgICAgICAgIExvZyBvdXRcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPExpbmsgIGNsYXNzTmFtZT1cImxpbmtcIiB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlM2Y3YTE1OGRkNWE3NTM0MDgzM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkFwcENvbnRleHQiLCJOYXYiLCJfcmVmIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlYXJjaEJhciIsInNldFNlYXJjaEJhciIsImlucHV0UmVmIiwiaGFuZGxlU2VhcmNoQmFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUxvZ091dCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidG8iLCJyZWYiLCJ0eXBlIiwib25CbHVyIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwid2lkdGgiLCJmaWxsIiwiZCIsImxlbmd0aCIsIkZyYWdtZW50IiwidG9Mb2NhbGVVcHBlckNhc2UiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9