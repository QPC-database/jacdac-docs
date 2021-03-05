(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "eCSt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardRealTimeClock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfHV");
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYIP");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ofer");




function DashboardRealTimeClock(props) {
  var service = props.service;

  var _useRegisterUnpackedV = Object(_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__[/* useRegisterUnpackedValue */ "e"])(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__[/* RealTimeClockReg */ "Yc"].LocalTime)),
      year = _useRegisterUnpackedV[0],
      month = _useRegisterUnpackedV[1],
      dayOfMonth = _useRegisterUnpackedV[2],
      day = _useRegisterUnpackedV[3],
      hour = _useRegisterUnpackedV[4],
      min = _useRegisterUnpackedV[5],
      seconds = _useRegisterUnpackedV[6];

  if (year === undefined) return null;
  var t = new Date(year, month - 1, dayOfMonth, hour, min, seconds);
  var date = t.toLocaleDateString();
  var time = t.toLocaleTimeString();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    align: "center",
    tabIndex: 0,
    role: "timer",
    "aria-label": date,
    variant: "body2"
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    align: "center",
    tabIndex: 0,
    role: "timer",
    "aria-label": time,
    variant: "body1"
  }, time));
}

/***/ })

}]);
//# sourceMappingURL=76-b226723a30033ee7c330.js.map