"use strict";
(self["webpackChunknav"] = self["webpackChunknav"] || []).push([[132],{

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap),
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "unmount": () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(822);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(468);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(788);
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(588);
/* harmony import */ var displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_3__);




const Header = () => {
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_3___default().count));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_3___default().subscribe(() => {
      setCount((displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_3___default().count));
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mui-appbar mui--appbar-line-height"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      verticalAlign: 'middle'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "mui--appbar-height mui--text-display1",
    style: {
      paddingLeft: '1em'
    }
  }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "mui--appbar-height mui--text-display1",
    align: "right",
    style: {
      paddingRight: '1em'
    }
  }, "Cart Count - ", count)))));
};
const headerLifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_2___default()({
  React: (react__WEBPACK_IMPORTED_MODULE_0___default()),
  ReactDOM: (react_dom__WEBPACK_IMPORTED_MODULE_1___default()),
  rootComponent: Header
});
const bootstrap = headerLifecycles.bootstrap;
const mount = headerLifecycles.mount;
const unmount = headerLifecycles.unmount;

/***/ })

}]);
//# sourceMappingURL=132.js.map