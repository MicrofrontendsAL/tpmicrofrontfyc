"use strict";
(self["webpackChunkdisplay_image"] = self["webpackChunkdisplay_image"] || []).push([[506],{

/***/ 506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap),
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "unmount": () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var home_ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var home_ticket__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(home_ticket__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(265);
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(588);
/* harmony import */ var displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_2__);



const template = `
<div
  class="ticket-image"
  style="display: grid; grid-template-columns: repeat(5, 20%);"
>
</div>
`;
const jsComponent = single_spa_html__WEBPACK_IMPORTED_MODULE_1___default()({
  template
});
jsComponent.originalMount = jsComponent.mount;
jsComponent.mount = function (opts, props) {
  return jsComponent.originalMount(opts, props).then(() => {
    const el = document.querySelector('.ticket-image');
    el.innerHTML = home_ticket__WEBPACK_IMPORTED_MODULE_0___default().map(({
      image
    }, index) => `
<img src="${image}" style="max-width: 100%" data-index="${index}"  alt=""/>
          `).join('');
    document.querySelectorAll('.ticket-image img').forEach(el => el.addEventListener('click', evt => {
      (displayTicket_displayTicket__WEBPACK_IMPORTED_MODULE_2___default().image) = parseInt(evt.target.getAttribute('data-index'));
    }));
  });
};
const bootstrap = jsComponent.bootstrap;
const mount = jsComponent.mount;
const unmount = jsComponent.unmount;

/***/ })

}]);
//# sourceMappingURL=506.js.map