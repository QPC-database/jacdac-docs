(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6540],{

/***/ 81857:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceSpecification; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/PacketSpecification.tsx + 10 modules
var PacketSpecification = __webpack_require__(40602);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
;// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx



function EnumSpecification(props) {
  var serviceClass = props.serviceClass;
  var spec = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);
  var enums = Object.values((spec === null || spec === void 0 ? void 0 : spec.enums) || {}).filter(function (en) {
    return !en.derived;
  });
  if (!enums.length) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, "Enums"), enums.map(function (e) {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: e.name
    }, /*#__PURE__*/react.createElement("h3", null, e.name, " ", e.isFlags && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      label: "flags",
      size: "small"
    })), /*#__PURE__*/react.createElement("ul", null, Object.keys(e.members).map(function (en) {
      return /*#__PURE__*/react.createElement("li", {
        key: en
      }, en, ": ", /*#__PURE__*/react.createElement("code", null, "0x", e.members[en].toString(16)));
    })));
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(8266);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49102);
// EXTERNAL MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
var useServiceProviderFromServiceClass = __webpack_require__(36134);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
// EXTERNAL MODULE: ./src/components/vm/VMBlockEditor.tsx + 30 modules
var VMBlockEditor = __webpack_require__(71519);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
;// CONCATENATED MODULE: ./src/components/ServiceSpecification.tsx
















function DashboardServiceDevices(props) {
  var serviceClass = props.serviceClass;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var devices = (0,useChange/* default */.Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass
    });
  });
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, devices.map(function (device) {
    return /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
      key: device.id,
      device: device,
      showAvatar: true,
      showHeader: true
    });
  }));
}

function ServiceSpecification(props) {
  var _node$extends;

  var node = props.service,
      showDerived = props.showDerived;
  var shortId = node.shortId,
      name = node.name,
      classIdentifier = node.classIdentifier;
  var packets = node.packets.filter(function (pkt) {
    return showDerived || !pkt.derived;
  });
  var registers = packets.filter(jdom_spec/* isRegister */.x5);
  var events = packets.filter(jdom_spec/* isEvent */.cO);
  var commands = packets.filter(jdom_spec/* isCommand */.ao);
  var reports = packets.filter(function (r) {
    return r.secondary;
  });
  var pipeReports = packets.filter(jdom_spec/* isPipeReport */._5);
  var others = packets.filter(function (r) {
    return registers.indexOf(r) < 0 && events.indexOf(r) < 0 && commands.indexOf(r) < 0 && reports.indexOf(r) < 0 && pipeReports.indexOf(r) < 0;
  }); // spin up provider on demand

  (0,useServiceProviderFromServiceClass/* default */.Z)(node.classIdentifier);

  var reportOf = function reportOf(pkt) {
    return reports.find(function (rep) {
      return (0,jdom_spec/* isReportOf */.Dm)(pkt, rep);
    });
  };

  var pipeReportOf = function pipeReportOf(pkt) {
    return pipeReports.find(function (rep) {
      return (0,jdom_spec/* isPipeReportOf */.yr)(pkt, rep);
    });
  };

  return /*#__PURE__*/react.createElement(react.Fragment, {
    key: "servicespec" + shortId
  }, /*#__PURE__*/react.createElement("h1", {
    key: "title"
  }, name, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    component: "span"
  }, /*#__PURE__*/react.createElement(IDChip/* default */.Z, {
    id: node.classIdentifier,
    filter: "srv:" + shortId
  }))), /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: node
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "notesshort",
    source: node.notes.short
  }), !!((_node$extends = node.extends) !== null && _node$extends !== void 0 && _node$extends.length) && /*#__PURE__*/react.createElement("p", {
    key: "extends"
  }, /*#__PURE__*/react.createElement("span", null, "Extends "), node.extends.map(function (extend, i) {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: "extend" + extend
    }, i > 0 && /*#__PURE__*/react.createElement("span", null, ", "), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      key: "extend" + extend,
      to: "/services/" + extend + "/"
    }, (0,jdom_spec/* serviceSpecificationFromName */.kB)(extend).name));
  }), "."), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "noteslong",
    source: node.notes.long || ""
  }), /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(VMBlockEditor/* default */.Z, null)), /*#__PURE__*/react.createElement(DashboardServiceDevices, {
    serviceClass: classIdentifier
  }), /*#__PURE__*/react.createElement(EnumSpecification, {
    key: "enums",
    serviceClass: classIdentifier
  }), [{
    name: "Registers",
    packets: registers,
    note: node.notes["registers"]
  }, {
    name: "Events",
    packets: events,
    note: node.notes["events"]
  }, {
    name: "Commands",
    packets: commands,
    note: node.notes["commands"]
  }, {
    name: "Others",
    packets: others,
    note: node.notes["others"]
  }].filter(function (group) {
    return group.packets.length;
  }).map(function (group) {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: "group" + group.name
    }, /*#__PURE__*/react.createElement("h2", null, group.name), group.note && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      key: "node" + group.name,
      source: group.note
    }), group.packets.sort(function (l, r) {
      return (l.derived ? 1 : -1) - (r.derived ? 1 : -1);
    }).map(function (pkt, i) {
      return /*#__PURE__*/react.createElement(PacketSpecification/* default */.Z, {
        key: "pkt" + pkt.name,
        serviceClass: node.classIdentifier,
        packetInfo: pkt,
        reportInfo: reportOf(pkt),
        pipeReportInfo: pipeReportOf(pkt),
        showDevices: true
      });
    }));
  }));
}

/***/ }),

/***/ 97230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _components_ServiceSpecification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81857);



function Page(props) {
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(props.pageContext.node.classIdentifier);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ServiceSpecification__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    service: spec
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-playground-tsx-1d089e2798253fbd913c.js.map