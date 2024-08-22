"use strict";
self["webpackHotUpdatereact01"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
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
    e.preventDefault();
    // setUsername('');
    localStorage.setItem('user', '');
    navigate('/login');
  };
  var handleProfile = function handleProfile(e) {
    //steate me shtu ne app.js, 
    //prej Home tek Banner pastaj tek Nav me props
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: "link",
    to: "/home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "logo"
  }, "FILMFLIX"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: "link",
    to: "/favorites"
  }, "My Favorites")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
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
    className: "accountContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: function onClick(e) {
      return handleProfile(e);
    },
    className: "loggedInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "loggedMsg"
  }, "HI ", username.toLocaleUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "avatar",
    src: "../files/avatar-logo.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    onClick: function onClick(e) {
      return handleLogOut(e);
    },
    className: "link logOut",
    to: "/"
  }, "Log out"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: "link logIn",
    to: "/login"
  }, "Log in"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea8d67d947e4a25d0804")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7SUFBTXlDLENBQUMsRUFBQztFQUE0TyxDQUFFLENBQ25QLENBRUgsQ0FDSixDQUNGLENBQUMsRUFFSGpDLFFBQVEsQ0FBQ2tDLE1BQU0sR0FBRyxDQUFDLGdCQUNuQjFDLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUFLNkIsU0FBUyxFQUFDO0VBQWtCLGdCQUMvQjdCLDBEQUFBO0lBQUttQyxPQUFPLEVBQUUsU0FBQUEsUUFBQWpCLENBQUM7TUFBQSxPQUFJUyxhQUFhLENBQUNULENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ1csU0FBUyxFQUFDO0VBQXFCLGdCQUNsRTdCLDBEQUFBO0lBQUc2QixTQUFTLEVBQUM7RUFBVyxHQUFDLEtBQUcsRUFBQ3JCLFFBQVEsQ0FBQ29DLGlCQUFpQixDQUFDLENBQUssQ0FBQyxlQUM5RDVDLDBEQUFBO0lBQUs2QixTQUFTLEVBQUMsUUFBUTtJQUFDZ0IsR0FBRyxFQUFDO0VBQTBCLENBQU0sQ0FDekQsQ0FBQyxlQUNON0MsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBQ2tDLE9BQU8sRUFBRSxTQUFBQSxRQUFBakIsQ0FBQztNQUFBLE9BQUlNLFlBQVksQ0FBQ04sQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDVyxTQUFTLEVBQUMsYUFBYTtJQUFDQyxFQUFFLEVBQUM7RUFBRyxHQUFDLFNBRTlELENBQ0gsQ0FDTCxDQUFDLGdCQUVIOUIsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBQzRCLFNBQVMsRUFBQyxZQUFZO0lBQUNDLEVBQUUsRUFBQztFQUFRLEdBQUMsUUFFbkMsQ0FFTCxDQUFDO0FBRVY7QUFFQSxpRUFBZXhCLEdBQUc7Ozs7Ozs7O1VDakdsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0MDEvLi9tYWluL2NvbXBvbmVudHMvTmF2L05hdi5qcyIsIndlYnBhY2s6Ly9yZWFjdDAxL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vTmF2LnNjc3NcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBOYXYoeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSkge1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hCYXIsIHNldFNlYXJjaEJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAvL3tjdXJyZW50OiB1bmRlZmluZWR9XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hCYXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2VhcmNoQmFyKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXNlYXJjaEJhcikge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCcnKTtcclxuICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGUgPSAoZSkgPT4ge1xyXG4gICAgLy9zdGVhdGUgbWUgc2h0dSBuZSBhcHAuanMsIFxyXG4gICAgLy9wcmVqIEhvbWUgdGVrIEJhbm5lciBwYXN0YWogdGVrIE5hdiBtZSBwcm9wc1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdkNvbnRhaW5lclwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibGlua1wiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9nb1wiPkZJTE1GTElYPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibGlua1wiIHRvPVwiL2Zhdm9yaXRlc1wiPlxyXG4gICAgICAgICAgICBNeSBGYXZvcml0ZXNcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImxpbmtcIiB0bz1cIi9cIj5cclxuICAgICAgICAgICAge3NlYXJjaEJhciA/IChcclxuICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQmx1cj17ZSA9PiBoYW5kbGVTZWFyY2hCYXIoZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB5b3VyIG1vdmllIGhlcmUuLlwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHN2ZyBvbkNsaWNrPXtlID0+IGhhbmRsZVNlYXJjaEJhcihlKX1cclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIHsodXNlcm5hbWUubGVuZ3RoID4gMCkgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gaGFuZGxlUHJvZmlsZShlKX0gY2xhc3NOYW1lPVwibG9nZ2VkSW5mb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9nZ2VkTXNnJz5ISSB7dXNlcm5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2F2YXRhcicgc3JjPVwiLi4vZmlsZXMvYXZhdGFyLWxvZ28ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBvbkNsaWNrPXtlID0+IGhhbmRsZUxvZ091dChlKX0gY2xhc3NOYW1lPVwibGluayBsb2dPdXRcIiB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICBMb2cgb3V0XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImxpbmsgbG9nSW5cIiB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlYThkNjdkOTQ3ZTRhMjVkMDgwNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVN0YXRlIiwidXNlUmVmIiwiQXBwQ29udGV4dCIsIk5hdiIsIl9yZWYiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibmF2aWdhdGUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWFyY2hCYXIiLCJzZXRTZWFyY2hCYXIiLCJpbnB1dFJlZiIsImhhbmRsZVNlYXJjaEJhciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZTdGF0ZSIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVMb2dPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaGFuZGxlUHJvZmlsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsInJlZiIsInR5cGUiLCJvbkJsdXIiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsImZpbGwiLCJkIiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=