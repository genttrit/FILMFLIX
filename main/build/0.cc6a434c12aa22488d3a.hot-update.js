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
/******/ 	__webpack_require__.h = () => ("fb1aeb2f2df65fffc3b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzZhNDM0YzEyYWEyMjQ4OGQzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTjtBQUNrQztBQUNiO0FBQ0Y7QUFJdkMsU0FBU00sR0FBR0EsQ0FBQUMsSUFBQSxFQUE0QjtFQUFBLElBQXpCQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtJQUFFQyxXQUFXLEdBQUFGLElBQUEsQ0FBWEUsV0FBVztFQUVsQyxJQUFNQyxRQUFRLEdBQUdSLDZEQUFXLENBQUMsQ0FBQztFQUU5QixJQUFBUyxTQUFBLEdBQWtDUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUM5QixJQUFNSSxRQUFRLEdBQUdaLDZDQUFNLENBQUMsQ0FBQztFQUN6Qjs7RUFHQSxJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLENBQUMsRUFBSztJQUM3QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkosWUFBWSxDQUFDLFVBQUFLLFNBQVM7TUFBQSxPQUFJLENBQUNBLFNBQVM7SUFBQSxFQUFDO0lBQ3JDQyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUksQ0FBQ1AsU0FBUyxFQUFFO1FBQ2RFLFFBQVEsQ0FBQ00sT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBQztNQUMxQjtJQUNGLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDUCxDQUFDO0VBRUQsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlOLENBQUMsRUFBSztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQjtJQUNBTSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsRUFBRSxDQUFDO0lBQy9CaEIsUUFBUSxDQUFDLFFBQVEsQ0FBQztFQUVwQixDQUFDO0VBRUQsSUFBTWlCLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSVQsQ0FBQyxFQUFLO0lBQzNCO0lBQ0E7RUFBQSxDQUNEO0VBR0Qsb0JBQ0VsQiwwREFBQTtJQUFLNkIsU0FBUyxFQUFDO0VBQWMsZ0JBQzNCN0IsMERBQUEsMEJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDQyxrREFBSTtJQUFDNEIsU0FBUyxFQUFDLE1BQU07SUFBQ0MsRUFBRSxFQUFDO0VBQU8sZ0JBQy9COUIsMERBQUE7SUFBRzZCLFNBQVMsRUFBQztFQUFNLEdBQUMsVUFBVyxDQUMzQixDQUNKLENBQUMsZUFDTDdCLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDQyxrREFBSTtJQUFDNEIsU0FBUyxFQUFDLE1BQU07SUFBQ0MsRUFBRSxFQUFDO0VBQVksR0FBQyxjQUVqQyxDQUNKLENBQUMsZUFDTDlCLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDQyxrREFBSTtJQUFDNEIsU0FBUyxFQUFDLE1BQU07SUFBQ0MsRUFBRSxFQUFDO0VBQUcsR0FDMUJoQixTQUFTLGdCQUNSZCwwREFBQTtJQUFPK0IsR0FBRyxFQUFFZixRQUFTO0lBQ25CZ0IsSUFBSSxFQUFDLE1BQU07SUFDWEMsTUFBTSxFQUFFLFNBQUFBLE9BQUFmLENBQUM7TUFBQSxPQUFJRCxlQUFlLENBQUNDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDaENnQixXQUFXLEVBQUM7RUFBMEIsQ0FBRSxDQUFDLGdCQUUzQ2xDLDBEQUFBO0lBQUttQyxPQUFPLEVBQUUsU0FBQUEsUUFBQWpCLENBQUM7TUFBQSxPQUFJRCxlQUFlLENBQUNDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDcENrQixLQUFLLEVBQUMsNEJBQTRCO0lBQ2xDQyxNQUFNLEVBQUMsTUFBTTtJQUNiQyxPQUFPLEVBQUMsV0FBVztJQUNuQkMsS0FBSyxFQUFDLE1BQU07SUFDWkMsSUFBSSxFQUFDO0VBQU8sZ0JBRVp4QywwREFBQTtJQUFNeUMsQ0FBQyxFQUFDLGVBQWU7SUFBQ0QsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUFDLGVBQ3RDeEMsMERBQUE7SUFBTXlDLENBQUMsRUFBQztFQUE0TyxDQUFFLENBQ25QLENBRUgsQ0FDSixDQUNGLENBQUMsRUFFSGpDLFFBQVEsQ0FBQ2tDLE1BQU0sR0FBRyxDQUFDLGdCQUNuQjFDLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUFLNkIsU0FBUyxFQUFDO0VBQWtCLGdCQUMvQjdCLDBEQUFBO0lBQUttQyxPQUFPLEVBQUUsU0FBQUEsUUFBQWpCLENBQUM7TUFBQSxPQUFJUyxhQUFhLENBQUNULENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ1csU0FBUyxFQUFDO0VBQXFCLGdCQUNsRTdCLDBEQUFBO0lBQUc2QixTQUFTLEVBQUM7RUFBVyxHQUFDLEtBQUcsRUFBQ3JCLFFBQVEsQ0FBQ29DLGlCQUFpQixDQUFDLENBQUssQ0FBQyxlQUM5RDVDLDBEQUFBO0lBQUs2QixTQUFTLEVBQUMsUUFBUTtJQUFDZ0IsR0FBRyxFQUFDO0VBQTBCLENBQU0sQ0FDekQsQ0FBQyxlQUNON0MsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBQ2tDLE9BQU8sRUFBRSxTQUFBQSxRQUFBakIsQ0FBQztNQUFBLE9BQUlNLFlBQVksQ0FBQ04sQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDVyxTQUFTLEVBQUMsYUFBYTtJQUFDQyxFQUFFLEVBQUM7RUFBRyxHQUFDLFNBRTlELENBQ0gsQ0FDTCxDQUFDLGdCQUVIOUIsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBQzRCLFNBQVMsRUFBQyxZQUFZO0lBQUNDLEVBQUUsRUFBQztFQUFRLEdBQUMsUUFFbkMsQ0FFTCxDQUFDO0FBRVY7QUFFQSxpRUFBZXhCLEdBQUc7Ozs7Ozs7O1VDbEdsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0MDEvLi9tYWluL2NvbXBvbmVudHMvTmF2L05hdi5qcyIsIndlYnBhY2s6Ly9yZWFjdDAxL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vTmF2LnNjc3NcIjtcclxuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBOYXYoeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSkge1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hCYXIsIHNldFNlYXJjaEJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAvL3tjdXJyZW50OiB1bmRlZmluZWR9XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hCYXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2VhcmNoQmFyKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXNlYXJjaEJhcikge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCcnKTtcclxuICAgIG5hdmlnYXRlKCcvbG9naW4nKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZSA9IChlKSA9PiB7XHJcbiAgICAvL3N0ZWF0ZSBtZSBzaHR1IG5lIGFwcC5qcywgXHJcbiAgICAvL3ByZWogSG9tZSB0ZWsgQmFubmVyIHBhc3RhaiB0ZWsgTmF2IG1lIHByb3BzXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2Q29udGFpbmVyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rXCIgdG89XCIvaG9tZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2dvXCI+RklMTUZMSVg8L3A+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rXCIgdG89XCIvZmF2b3JpdGVzXCI+XHJcbiAgICAgICAgICAgIE15IEZhdm9yaXRlc1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibGlua1wiIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICB7c2VhcmNoQmFyID8gKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IGhhbmRsZVNlYXJjaEJhcihlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHlvdXIgbW92aWUgaGVyZS4uXCIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8c3ZnIG9uQ2xpY2s9e2UgPT4gaGFuZGxlU2VhcmNoQmFyKGUpfVxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgeyh1c2VybmFtZS5sZW5ndGggPiAwKSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZSA9PiBoYW5kbGVQcm9maWxlKGUpfSBjbGFzc05hbWU9XCJsb2dnZWRJbmZvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2dnZWRNc2cnPkhJIHt1c2VybmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpfTwvcD5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYXZhdGFyJyBzcmM9XCIuLi9maWxlcy9hdmF0YXItbG9nby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e2UgPT4gaGFuZGxlTG9nT3V0KGUpfSBjbGFzc05hbWU9XCJsaW5rIGxvZ091dFwiIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgIExvZyBvdXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibGluayBsb2dJblwiIHRvPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICBMb2cgaW5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZiMWFlYjJmMmRmNjVmZmZjM2I3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZU5hdmlnYXRlIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJBcHBDb250ZXh0IiwiTmF2IiwiX3JlZiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJuYXZpZ2F0ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlYXJjaEJhciIsInNldFNlYXJjaEJhciIsImlucHV0UmVmIiwiaGFuZGxlU2VhcmNoQmFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUxvZ091dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJoYW5kbGVQcm9maWxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwicmVmIiwidHlwZSIsIm9uQmx1ciIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsImQiLCJsZW5ndGgiLCJGcmFnbWVudCIsInRvTG9jYWxlVXBwZXJDYXNlIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==