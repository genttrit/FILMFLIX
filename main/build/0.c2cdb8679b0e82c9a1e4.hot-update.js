"use strict";
self["webpackHotUpdatereact01"](0,{

/***/ 58:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _Detalis_Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);




function Banner(_ref) {
  var details = _ref.details,
    handleDetailsPopUp = _ref.handleDetailsPopUp,
    username = _ref.username,
    setUsername = _ref.setUsername;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Detalis_Details__WEBPACK_IMPORTED_MODULE_3__["default"], {
    details: details,
    handleDetailsPopUp: handleDetailsPopUp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bannerContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    username: username,
    setUsername: setUsername
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btnContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnFavorite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "32px",
    viewBox: "0 0 24 24",
    width: "22px",
    fill: "#00000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  })), "Favorite"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      return handleDetailsPopUp(e);
    },
    className: "btnDetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#FFFFFF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0,0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11,7h2v2h-2V7z M11,11h2v6h-2V11z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"
  }))), "Details")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

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

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);


function Favorites() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorites);

/***/ }),

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _components_Banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _components_Detalis_Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);





function Home() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_app__WEBPACK_IMPORTED_MODULE_4__.AppContext),
    details = _useContext.details,
    setDetails = _useContext.setDetails;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_app__WEBPACK_IMPORTED_MODULE_4__.AppContext),
    username = _useContext2.username,
    setUsername = _useContext2.setUsername;
  var handleDetailsPopUp = function handleDetailsPopUp(e) {
    e.preventDefault();
    // console.log(details)
    setDetails(function (prevState) {
      return !prevState;
    });
  };
  console.log(details);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Banner_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    details: details,
    username: username,
    setUsername: setUsername,
    handleDetailsPopUp: handleDetailsPopUp
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 57:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.navContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  border: none;
  padding: 10px 10px;
  background-color: rgba(128, 128, 128, 0.1);
}
.navContainer:hover {
  background-color: rgba(128, 128, 128, 0.2);
}
.navContainer .link {
  text-decoration: none;
  color: azure;
}
.navContainer .link:hover {
  background-color: red;
}
.navContainer .logo {
  color: red;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: 900;
}
.navContainer ul {
  list-style-type: none;
  display: flex;
  justify-content: baseline;
  align-items: center;
}
.navContainer li {
  padding: 0 30px;
}
.navContainer input {
  height: 40px;
  width: 200px;
  border-radius: 10px;
  padding: 0 5px;
  margin: 0 auto;
  border: none;
}
.navContainer button {
  width: 120px;
  height: 40px;
  margin-right: 50px;
  border-radius: 10px;
  font-size: 1.2rem;
  border: none;
}
.navContainer .loggedMsg {
  color: rgba(255, 255, 255, 0.807);
  margin-right: 10px;
}
.navContainer .loggedInfoContainer {
  display: flex;
  align-items: center;
}
.navContainer .avatar {
  width: 40px;
  height: 40px;
  border-radius: 15px;
  margin-right: 10px;
}`, "",{"version":3,"sources":["webpack://./main/components/Nav/Nav.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,0CAAA;AACJ;AAAI;EACI,0CAAA;AAER;AAEI;EACI,qBAAA;EACA,YAAA;AAAR;AACQ;EACI,qBAAA;AACZ;AAKI;EACI,UAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;AAHR;AAMI;EACI,qBAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAJR;AAOI;EACI,eAAA;AALR;AAQI;EACI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,cAAA;EACA,YAAA;AANR;AASI;EACI,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;AAPR;AAUI;EACI,iCAAA;EACA,kBAAA;AARR;AAWI;EACI,aAAA;EACA,mBAAA;AATR;AAYI;EACI,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;AAVR","sourcesContent":[".navContainer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content:space-between;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    font-size: 1.2rem;\r\n    border: none;\r\n    padding: 10px 10px;\r\n    background-color: rgba(128, 128, 128, 0.1);\r\n    &:hover{\r\n        background-color: rgba(128, 128, 128, 0.2);\r\n    }\r\n    \r\n\r\n    .link{\r\n        text-decoration: none;\r\n        color: azure;\r\n        &:hover{\r\n            background-color: red;\r\n        }\r\n    }\r\n\r\n\r\n\r\n    .logo{\r\n        color:red;\r\n        text-decoration: none;\r\n        font-size: 2.4rem;\r\n        font-weight: 900;\r\n    }\r\n\r\n    ul{\r\n        list-style-type: none;\r\n        display: flex;\r\n        justify-content: baseline;\r\n        align-items: center;\r\n    }\r\n\r\n    li{\r\n        padding: 0 30px;\r\n    }\r\n\r\n    input{\r\n        height: 40px;\r\n        width: 200px;\r\n        border-radius: 10px;\r\n        padding: 0 5px;\r\n        margin: 0 auto;\r\n        border: none;\r\n    }\r\n\r\n    button{\r\n        width: 120px;\r\n        height: 40px;\r\n        margin-right:50px;\r\n        border-radius: 10px;\r\n        font-size: 1.2rem;\r\n        border: none;\r\n    }\r\n\r\n    .loggedMsg{\r\n        color:rgba(255, 255, 255, 0.807);\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .loggedInfoContainer{\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .avatar{\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 15px;\r\n        margin-right: 10px;\r\n    }\r\n    \r\n\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 56:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      57,
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57);
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4efed1ae2d54f0d3544e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMmNkYjg2NzliMGU4MmM5YTFlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNIO0FBQ007QUFDWTtBQUV6QyxTQUFTRyxNQUFNQSxDQUFBQyxJQUFBLEVBQXNEO0VBQUEsSUFBcERDLE9BQU8sR0FBQUQsSUFBQSxDQUFQQyxPQUFPO0lBQUNDLGtCQUFrQixHQUFBRixJQUFBLENBQWxCRSxrQkFBa0I7SUFBRUMsUUFBUSxHQUFBSCxJQUFBLENBQVJHLFFBQVE7SUFBRUMsV0FBVyxHQUFBSixJQUFBLENBQVhJLFdBQVc7RUFFaEUsb0JBQ0VSLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNBQSwwREFBQSxDQUFDRSx3REFBTztJQUFDRyxPQUFPLEVBQUVBLE9BQVE7SUFBQ0Msa0JBQWtCLEVBQUVBO0VBQW1CLENBQUMsQ0FBQyxlQUNwRU4sMERBQUE7SUFBS1csU0FBUyxFQUFDO0VBQWlCLGdCQUM5QlgsMERBQUEsQ0FBQ0MsZ0RBQUc7SUFBQ00sUUFBUSxFQUFFQSxRQUFTO0lBQ3BCQyxXQUFXLEVBQUVBO0VBQVksQ0FBRSxDQUFDLGVBQ2hDUiwwREFBQTtJQUFLVyxTQUFTLEVBQUM7RUFBVyxnQkFDeEJYLDBEQUFBLDJCQUNFQSwwREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwwREFBQSxZQUFHLE9BQVEsQ0FDUixDQUFDLGVBQ05BLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFjLGdCQUMzQlgsMERBQUE7SUFBUVcsU0FBUyxFQUFDO0VBQWEsZ0JBQzdCWCwwREFBQTtJQUNFWSxLQUFLLEVBQUMsNEJBQTRCO0lBQ2xDQyxNQUFNLEVBQUMsTUFBTTtJQUNiQyxPQUFPLEVBQUMsV0FBVztJQUNuQkMsS0FBSyxFQUFDLE1BQU07SUFDWkMsSUFBSSxFQUFDO0VBQVEsZ0JBRWJoQiwwREFBQTtJQUFNaUIsQ0FBQyxFQUFDLGVBQWU7SUFBQ0QsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUFDLGVBQ3RDaEIsMERBQUE7SUFBTWlCLENBQUMsRUFBQztFQUFnTCxDQUFFLENBQ3ZMLENBQUMsWUFFQSxDQUFDLGVBRVRqQiwwREFBQTtJQUFRa0IsT0FBTyxFQUFFLFNBQUFBLFFBQUFDLENBQUM7TUFBQSxPQUFJYixrQkFBa0IsQ0FBQ2EsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUNwQ1IsU0FBUyxFQUFDO0VBQVksZ0JBQzVCWCwwREFBQTtJQUNFWSxLQUFLLEVBQUMsNEJBQTRCO0lBQ2xDUSxnQkFBZ0IsRUFBQyxlQUFlO0lBQ2hDUCxNQUFNLEVBQUMsTUFBTTtJQUNiQyxPQUFPLEVBQUMsV0FBVztJQUNuQkMsS0FBSyxFQUFDLE1BQU07SUFDWkMsSUFBSSxFQUFDO0VBQVMsZ0JBRWRoQiwwREFBQSx5QkFDRUEsMERBQUE7SUFBTWlCLENBQUMsRUFBQyxpQkFBaUI7SUFBQ0QsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUFDLGVBQ3hDaEIsMERBQUE7SUFBTWlCLENBQUMsRUFBQztFQUF1SyxDQUFFLENBQ2hMLENBQ0EsQ0FBQyxXQUVBLENBQ0wsQ0FDRixDQUNGLENBQ0gsQ0FBQztBQUVQO0FBRUEsaUVBQWVkLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REs7QUFDTjtBQUNvQjtBQUNDO0FBQ0Y7QUFHdkMsU0FBU0YsR0FBR0EsQ0FBQUcsSUFBQSxFQUEwQjtFQUFBLElBQXhCRyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtJQUFFQyxXQUFXLEdBQUFKLElBQUEsQ0FBWEksV0FBVztFQUVqQyxJQUFBaUIsU0FBQSxHQUFrQ0gsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFDOUIsSUFBTUksUUFBUSxHQUFHUCw2Q0FBTSxDQUFDLENBQUM7RUFDekI7O0VBR0EsSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJWixDQUFDLEVBQUk7SUFDNUJBLENBQUMsQ0FBQ2EsY0FBYyxDQUFDLENBQUM7SUFDbEJILFlBQVksQ0FBQyxVQUFBSSxTQUFTO01BQUEsT0FBRyxDQUFDQSxTQUFTO0lBQUEsRUFBQztJQUNwQ0MsVUFBVSxDQUFDLFlBQU07TUFDZixJQUFJLENBQUNOLFNBQVMsRUFBRTtRQUNkRSxRQUFRLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7TUFDMUI7SUFDRixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1AsQ0FBQztFQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJbEIsQ0FBQyxFQUFJO0lBQ3pCbUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3ZCLENBQUM7RUFHRCxvQkFDRXZDLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFjLGdCQUMzQlgsMERBQUEsMEJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDcUIsa0RBQUk7SUFBQ1YsU0FBUyxFQUFDLE1BQU07SUFBQzZCLEVBQUUsRUFBQztFQUFPLGdCQUMvQnhDLDBEQUFBO0lBQUdXLFNBQVMsRUFBQztFQUFNLEdBQUMsVUFBVyxDQUMzQixDQUNKLENBQUMsZUFDTFgsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUNxQixrREFBSTtJQUFDVixTQUFTLEVBQUMsTUFBTTtJQUFDNkIsRUFBRSxFQUFDO0VBQVksR0FBQyxjQUVqQyxDQUNKLENBQUMsZUFDTHhDLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDcUIsa0RBQUk7SUFBQ1YsU0FBUyxFQUFDLE1BQU07SUFBQzZCLEVBQUUsRUFBQztFQUFHLEdBQzFCWixTQUFTLGdCQUNSNUIsMERBQUE7SUFBT3lDLEdBQUcsRUFBRVgsUUFBUztJQUNiWSxJQUFJLEVBQUMsTUFBTTtJQUNYQyxNQUFNLEVBQUUsU0FBQUEsT0FBQXhCLENBQUM7TUFBQSxPQUFHWSxlQUFlLENBQUNaLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDL0J5QixXQUFXLEVBQUM7RUFBMEIsQ0FBRSxDQUFDLGdCQUVqRDVDLDBEQUFBO0lBQUtrQixPQUFPLEVBQUUsU0FBQUEsUUFBQUMsQ0FBQztNQUFBLE9BQUlZLGVBQWUsQ0FBQ1osQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUNwQ1AsS0FBSyxFQUFDLDRCQUE0QjtJQUNsQ0MsTUFBTSxFQUFDLE1BQU07SUFDYkMsT0FBTyxFQUFDLFdBQVc7SUFDbkJDLEtBQUssRUFBQyxNQUFNO0lBQ1pDLElBQUksRUFBQztFQUFPLGdCQUVaaEIsMERBQUE7SUFBTWlCLENBQUMsRUFBQyxlQUFlO0lBQUNELElBQUksRUFBQztFQUFNLENBQUUsQ0FBQyxlQUN0Q2hCLDBEQUFBO0lBQU1pQixDQUFDLEVBQUM7RUFBNE8sQ0FBRSxDQUNuUCxDQUVILENBQ0osQ0FDRixDQUFDLEVBRUhWLFFBQVEsQ0FBQ3NDLE1BQU0sR0FBRyxDQUFDLGdCQUNuQjdDLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNBQSwwREFBQTtJQUFLVyxTQUFTLEVBQUMscUJBQXFCO0lBQUNPLE9BQU8sRUFBRSxTQUFBQSxRQUFBQyxDQUFDO01BQUEsT0FBSWtCLFlBQVksQ0FBQ2xCLENBQUMsQ0FBQztJQUFBO0VBQUMsZ0JBQ2pFbkIsMERBQUE7SUFBR1csU0FBUyxFQUFDO0VBQVcsR0FBQyxLQUFHLEVBQUNKLFFBQVEsQ0FBQ3VDLGlCQUFpQixDQUFDLENBQUssQ0FBQyxlQUM5RDlDLDBEQUFBO0lBQUtXLFNBQVMsRUFBQyxRQUFRO0lBQUNvQyxHQUFHLEVBQUM7RUFBMEIsQ0FBTSxDQUN6RCxDQUFDLGVBQ04vQywwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ3FCLGtEQUFJO0lBQUVWLFNBQVMsRUFBQyxNQUFNO0lBQUM2QixFQUFFLEVBQUM7RUFBRyxHQUFDLFNBRXpCLENBQ0gsQ0FBRyxDQUFDLGdCQUVQeEMsMERBQUEsQ0FBQ3FCLGtEQUFJO0lBQUVWLFNBQVMsRUFBQyxNQUFNO0lBQUM2QixFQUFFLEVBQUM7RUFBUSxHQUFDLFFBRTlCLENBRVAsQ0FBQztBQUVWO0FBRUEsaUVBQWV2QyxHQUFHOzs7Ozs7Ozs7Ozs7OztBQ3JGTztBQUNjO0FBRXZDLFNBQVMrQyxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsb0JBQ0VoRCwwREFBQSxDQUFBQSx1REFBQSxxQkFBRUEsMERBQUEsQ0FBQ0MsMkRBQUcsTUFBRSxDQUFHLENBQUM7QUFFaEI7QUFFQSxpRUFBZStDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDQTtBQUNTO0FBQ0k7QUFDaEI7QUFFcEMsU0FBU0UsSUFBSUEsQ0FBQSxFQUFHO0VBRWQsSUFBQUMsV0FBQSxHQUFnQ0YsaURBQVUsQ0FBQ3pCLDRDQUFVLENBQUM7SUFBOUNuQixPQUFPLEdBQUE4QyxXQUFBLENBQVA5QyxPQUFPO0lBQUUrQyxVQUFVLEdBQUFELFdBQUEsQ0FBVkMsVUFBVTtFQUMzQixJQUFBQyxZQUFBLEdBQWdDSixpREFBVSxDQUFDekIsNENBQVUsQ0FBQztJQUEvQ2pCLFFBQVEsR0FBQThDLFlBQUEsQ0FBUjlDLFFBQVE7SUFBRUMsV0FBVyxHQUFBNkMsWUFBQSxDQUFYN0MsV0FBVztFQUU1QixJQUFNRixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJYSxDQUFDLEVBQUs7SUFDaENBLENBQUMsQ0FBQ2EsY0FBYyxDQUFDLENBQUM7SUFDbEI7SUFDQW9CLFVBQVUsQ0FBQyxVQUFBbkIsU0FBUztNQUFBLE9BQUksQ0FBQ0EsU0FBUztJQUFBLEVBQUM7RUFDckMsQ0FBQztFQUVESyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2xDLE9BQU8sQ0FBQztFQUVwQixvQkFDRUwsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNHLGlFQUFNO0lBQUVFLE9BQU8sRUFBRUEsT0FBUTtJQUNsQkUsUUFBUSxFQUFFQSxRQUFTO0lBQ25CQyxXQUFXLEVBQUVBLFdBQVk7SUFDekJGLGtCQUFrQixFQUFFQTtFQUFtQixDQUFDLENBQ2xELENBQUM7QUFFUDtBQUVBLGlFQUFlNEMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JuQjtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrRkFBK0YsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyx1Q0FBdUMsc0JBQXNCLDRCQUE0QixzQ0FBc0MsNEJBQTRCLDhCQUE4QiwwQkFBMEIscUJBQXFCLDJCQUEyQixtREFBbUQsZ0JBQWdCLHVEQUF1RCxTQUFTLDBCQUEwQixrQ0FBa0MseUJBQXlCLG9CQUFvQixzQ0FBc0MsYUFBYSxTQUFTLDBCQUEwQixzQkFBc0Isa0NBQWtDLDhCQUE4Qiw2QkFBNkIsU0FBUyxlQUFlLGtDQUFrQywwQkFBMEIsc0NBQXNDLGdDQUFnQyxTQUFTLGVBQWUsNEJBQTRCLFNBQVMsa0JBQWtCLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLDJCQUEyQiwyQkFBMkIseUJBQXlCLFNBQVMsbUJBQW1CLHlCQUF5Qix5QkFBeUIsOEJBQThCLGdDQUFnQyw4QkFBOEIseUJBQXlCLFNBQVMsdUJBQXVCLDZDQUE2QywrQkFBK0IsU0FBUyxpQ0FBaUMsMEJBQTBCLGdDQUFnQyxTQUFTLG9CQUFvQix3QkFBd0IseUJBQXlCLGdDQUFnQywrQkFBK0IsU0FBUyxxQkFBcUIsbUJBQW1CO0FBQ3J5RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFdkMsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBc0o7QUFDdEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwSEFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sMEhBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBIQUFPO0FBQ2hDLG9DQUFvQywrR0FBVyxHQUFHLDBIQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLEVBQXlHO0FBQy9HLE1BQU07QUFBQTtBQUNOLHNEQUFzRCwrR0FBVyxHQUFHLDBIQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQywrR0FBVyxHQUFHLDBIQUFPOztBQUUvRCxxQkFBcUIsMEhBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUd3SDtBQUN4SCxPQUFPLGlFQUFlLDBIQUFPLElBQUksMEhBQU8sVUFBVSwwSEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7O1VDM0U3RSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0MDEvLi9tYWluL2NvbXBvbmVudHMvQmFubmVyL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly9yZWFjdDAxLy4vbWFpbi9jb21wb25lbnRzL05hdi9OYXYuanMiLCJ3ZWJwYWNrOi8vcmVhY3QwMS8uL21haW4vcGFnZXMvRmF2b3JpdGVzLmpzIiwid2VicGFjazovL3JlYWN0MDEvLi9tYWluL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QwMS8uL21haW4vY29tcG9uZW50cy9OYXYvTmF2LnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QwMS8uL21haW4vY29tcG9uZW50cy9OYXYvTmF2LnNjc3M/YTQ1MyIsIndlYnBhY2s6Ly9yZWFjdDAxL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vQmFubmVyLnNjc3NcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vTmF2L05hdlwiO1xyXG5pbXBvcnQgRGV0YWlscyBmcm9tIFwiLi4vRGV0YWxpcy9EZXRhaWxzXCI7XHJcblxyXG5mdW5jdGlvbiBCYW5uZXIoe2RldGFpbHMsaGFuZGxlRGV0YWlsc1BvcFVwLCB1c2VybmFtZSwgc2V0VXNlcm5hbWV9KSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPERldGFpbHMgZGV0YWlscz17ZGV0YWlsc30gaGFuZGxlRGV0YWlsc1BvcFVwPXtoYW5kbGVEZXRhaWxzUG9wVXB9Lz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyQ29udGFpbmVyXCI+XHJcbiAgICAgIDxOYXYgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+VGl0bGU8L2gyPlxyXG4gICAgICAgICAgPHA+TG9yZW08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5Db250YWluZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuRmF2b3JpdGVcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMycHhcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjJweFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiMwMDAwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIEZhdm9yaXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gaGFuZGxlRGV0YWlsc1BvcFVwKGUpfSBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuRGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAsMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMSw3aDJ2MmgtMlY3eiBNMTEsMTFoMnY2aC0yVjExeiBNMTIsMkM2LjQ4LDIsMiw2LjQ4LDIsMTJzNC40OCwxMCwxMCwxMHMxMC00LjQ4LDEwLTEwUzE3LjUyLDIsMTIsMnogTTEyLDIwIGMtNC40MSwwLTgtMy41OS04LThzMy41OS04LDgtOHM4LDMuNTksOCw4UzE2LjQxLDIwLDEyLDIwelwiIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9OYXYuc2Nzc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5hdih7dXNlcm5hbWUsIHNldFVzZXJuYW1lfSkge1xyXG5cclxuICBjb25zdCBbc2VhcmNoQmFyLCBzZXRTZWFyY2hCYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgLy97Y3VycmVudDogdW5kZWZpbmVkfVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQmFyID0gKGUpID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2VhcmNoQmFyKHByZXZTdGF0ZSA9PiFwcmV2U3RhdGUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghc2VhcmNoQmFyKSB7XHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ091dCA9IChlKSA9PntcclxuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKVxyXG4gIH0gXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZDb250YWluZXJcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImxpbmtcIiB0bz1cIi9ob21lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29cIj5GSUxNRkxJWDwvcD5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImxpbmtcIiB0bz1cIi9mYXZvcml0ZXNcIj5cclxuICAgICAgICAgICAgTXkgRmF2b3JpdGVzXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rXCIgdG89XCIvXCI+XHJcbiAgICAgICAgICAgIHtzZWFyY2hCYXIgPyAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17ZSA9PmhhbmRsZVNlYXJjaEJhcihlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB5b3VyIG1vdmllIGhlcmUuLlwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHN2ZyBvbkNsaWNrPXtlID0+IGhhbmRsZVNlYXJjaEJhcihlKX1cclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIHsodXNlcm5hbWUubGVuZ3RoID4gMCkgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2dlZEluZm9Db250YWluZXJcIiBvbkNsaWNrPXtlID0+IGhhbmRsZUxvZ091dChlKX0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xvZ2dlZE1zZyc+SEkge3VzZXJuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCl9PC9wPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J2F2YXRhcicgc3JjPVwiLi4vZmlsZXMvYXZhdGFyLWxvZ28ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rICBjbGFzc05hbWU9XCJsaW5rXCIgdG89XCIvXCI+XHJcbiAgICAgICAgICAgIExvZyBvdXRcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj48Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPExpbmsgIGNsYXNzTmFtZT1cImxpbmtcIiB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYvTmF2J1xyXG5cclxuZnVuY3Rpb24gRmF2b3JpdGVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PjxOYXYgLz48Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlcyIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2L05hdidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lci9CYW5uZXInXHJcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWxpcy9EZXRhaWxzJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi9hcHBcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IHsgZGV0YWlscywgc2V0RGV0YWlscyB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICBjb25zdCB7dXNlcm5hbWUsIHNldFVzZXJuYW1lfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURldGFpbHNQb3BVcCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZXRhaWxzKVxyXG4gICAgc2V0RGV0YWlscyhwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coZGV0YWlscyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxCYW5uZXIgIGRldGFpbHM9e2RldGFpbHN9XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZXRhaWxzUG9wVXA9e2hhbmRsZURldGFpbHNQb3BVcH0vPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXZDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XG59XG4ubmF2Q29udGFpbmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xufVxuLm5hdkNvbnRhaW5lciAubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGF6dXJlO1xufVxuLm5hdkNvbnRhaW5lciAubGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5uYXZDb250YWluZXIgLmxvZ28ge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLm5hdkNvbnRhaW5lciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXZDb250YWluZXIgbGkge1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG4ubmF2Q29udGFpbmVyIGlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiBub25lO1xufVxuLm5hdkNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xufVxuLm5hdkNvbnRhaW5lciAubG9nZ2VkTXNnIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MDcpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubmF2Q29udGFpbmVyIC5sb2dnZWRJbmZvQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXZDb250YWluZXIgLmF2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL21haW4vY29tcG9uZW50cy9OYXYvTmF2LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBQ0o7QUFBSTtFQUNJLDBDQUFBO0FBRVI7QUFFSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBQ1E7RUFDSSxxQkFBQTtBQUNaO0FBS0k7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9JO0VBQ0ksZUFBQTtBQUxSO0FBUUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTlI7QUFTSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVBSO0FBVUk7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0FBUlI7QUFXSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVRSO0FBWUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFWUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgLmxpbmt7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogYXp1cmU7XFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAubG9nb3tcXHJcXG4gICAgICAgIGNvbG9yOnJlZDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBsaXtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dHtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbntcXHJcXG4gICAgICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dnZWRNc2d7XFxyXFxuICAgICAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODA3KTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9nZ2VkSW5mb0NvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hdmF0YXJ7XFxyXFxuICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05hdi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTmF2LnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9OYXYuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRlZmVkMWFlMmQ1NGYwZDM1NDRlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2IiwiRGV0YWlscyIsIkJhbm5lciIsIl9yZWYiLCJkZXRhaWxzIiwiaGFuZGxlRGV0YWlsc1BvcFVwIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsImQiLCJvbkNsaWNrIiwiZSIsImVuYWJsZUJhY2tncm91bmQiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJBcHBDb250ZXh0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VhcmNoQmFyIiwic2V0U2VhcmNoQmFyIiwiaW5wdXRSZWYiLCJoYW5kbGVTZWFyY2hCYXIiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZTdGF0ZSIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVMb2dPdXQiLCJjb25zb2xlIiwibG9nIiwidG8iLCJyZWYiLCJ0eXBlIiwib25CbHVyIiwicGxhY2Vob2xkZXIiLCJsZW5ndGgiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInNyYyIsIkZhdm9yaXRlcyIsInVzZUNvbnRleHQiLCJIb21lIiwiX3VzZUNvbnRleHQiLCJzZXREZXRhaWxzIiwiX3VzZUNvbnRleHQyIl0sInNvdXJjZVJvb3QiOiIifQ==