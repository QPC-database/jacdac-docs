(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6091,9819],{

/***/ 12531:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports.Z = _default;

/***/ }),

/***/ 99330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80453);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: -2
    }
  };
};
var AlertTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AlertTitle(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    gutterBottom: true,
    component: "div",
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className)
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiAlertTitle'
})(AlertTitle));

/***/ }),

/***/ 14247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceSpecificationSelect; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    root: {
      minWidth: "18rem"
    }
  });
});
function ServiceSpecificationSelect(props) {
  var label = props.label,
      serviceClass = props.serviceClass,
      setServiceClass = props.setServiceClass,
      variant = props.variant,
      fullWidth = props.fullWidth,
      error = props.error;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('select-' + Math.random()),
      labelId = _useState[0];

  var classes = useStyles();
  var specs = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(function (spec) {
    return !/^_/.test(spec.shortId);
  });

  var handleChange = function handleChange(event) {
    return setServiceClass(parseInt(event.target.value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    id: labelId,
    className: classes.root,
    label: label,
    error: !!error,
    helperText: error,
    value: serviceClass,
    select: true,
    variant: variant,
    fullWidth: fullWidth,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: "NaN"
  }, "No service selected"), specs.map(function (spec) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      key: spec.classIdentifier,
      value: spec.classIdentifier
    }, spec.name);
  }));
}

/***/ }),

/***/ 99819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nJ": function() { return /* binding */ GITHUB_API_KEY; },
  "pY": function() { return /* binding */ fetchLatestRelease; },
  "dW": function() { return /* binding */ fetchReleaseBinary; },
  "s8": function() { return /* binding */ fetchText; },
  "Jo": function() { return /* binding */ parseRepoUrl; },
  "G$": function() { return /* binding */ useLatestRelease; },
  "Fm": function() { return /* binding */ useLatestReleases; },
  "Ux": function() { return /* binding */ useRepository; }
});

// UNUSED EXPORTS: normalizeSlug

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/components/semver.ts
function cmp(a, b) {
  if (!a) {
    if (!b) return 0;else return 1;
  } else if (!b) return -1;else {
    var d = a.major - b.major || a.minor - b.minor || a.patch - b.patch;
    if (d) return d;
    if (a.pre.length == 0 && b.pre.length > 0) return 1;
    if (a.pre.length > 0 && b.pre.length == 0) return -1;

    for (var i = 0; i < a.pre.length + 1; ++i) {
      var aa = a.pre[i];
      var bb = b.pre[i];
      if (!aa) {
        if (!bb) return 0;else return -1;
      } else if (!bb) return 1;else if (/^\d+$/.test(aa)) {
        if (/^\d+$/.test(bb)) {
          d = parseInt(aa) - parseInt(bb);
          if (d) return d;
        } else return -1;
      } else if (/^\d+$/.test(bb)) return 1;else {
        d = strcmp(aa, bb);
        if (d) return d;
      }
    }

    return 0;
  }
}

function tryParse(v) {
  if (!v) return null;

  if ("*" === v) {
    return {
      major: Number.MAX_SAFE_INTEGER,
      minor: Number.MAX_SAFE_INTEGER,
      patch: Number.MAX_SAFE_INTEGER,
      pre: [],
      build: []
    };
  }

  if (/^v\d/i.test(v)) v = v.slice(1);
  var m = /^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);
  if (m) return {
    major: parseInt(m[1]),
    minor: parseInt(m[2]),
    patch: parseInt(m[3]),
    pre: m[5] ? m[5].split(".") : [],
    build: m[7] ? m[7].split(".") : []
  };
  return null;
}

function strcmp(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;else return 1;
}

function semverCmp(a, b) {
  var aa = tryParse(a);
  var bb = tryParse(b);
  if (!aa && !bb) return strcmp(a, b);else return cmp(aa, bb);
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useFetch.ts




function useFetch(url, options) {
  var _useState = (0,react.useState)(undefined),
      response = _useState[0],
      setResponse = _useState[1]; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useState2 = (0,react.useState)(undefined),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      status = _useState3[0],
      setStatus = _useState3[1];

  var _useState4 = (0,react.useState)(true),
      loading = _useState4[0],
      setLoading = _useState4[1]; // start in loading mode


  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(mounted) {
      var res, _status, json;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch(url, options);

            case 4:
              res = _context.sent;

              if (mounted()) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              _status = res.status;
              setStatus(_status);

              if (!(_status >= 200 && _status <= 204)) {
                _context.next = 16;
                break;
              }

              _context.next = 12;
              return res.json();

            case 12:
              json = _context.sent;

              if (mounted()) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              setResponse(json);

            case 16:
              _context.next = 23;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](1);

              if (mounted()) {
                _context.next = 22;
                break;
              }

              return _context.abrupt("return");

            case 22:
              setError(_context.t0);

            case 23:
              _context.prev = 23;
              if (mounted()) setLoading(false);
              return _context.finish(23);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 18, 23, 26]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [url]);
  return {
    response: response,
    error: error,
    status: status,
    loading: loading
  };
}
;// CONCATENATED MODULE: ./src/components/github.ts




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ROOT = "https://api.github.com/";
var GITHUB_API_KEY = "githubtoken";

function contentToFirmwareRelease(content) {
  var _$exec;

  // filter out non-file, non-uf2
  var version = (content === null || content === void 0 ? void 0 : content.type) === "file" && ((_$exec = /^fw-(\d+\.\d+.\d+)\.uf2$/.exec(content.name)) === null || _$exec === void 0 ? void 0 : _$exec[1]);
  if (!version) return undefined;
  return {
    version: version,
    sha: content.sha,
    size: content.size,
    html_url: content.html_url,
    download_url: content.download_url
  };
}

function contentsToFirmwareReleases(contents) {
  return contents === null || contents === void 0 ? void 0 : contents.map(contentToFirmwareRelease).filter(function (r) {
    return !!r;
  }).sort(function (l, r) {
    return -semverCmp(l.version, r.version);
  });
}

function normalizeSlug(slug) {
  return slug.replace(/^https:\/\/github.com\//, "");
}
function parseRepoUrl(url) {
  var m = /^https:\/\/github\.com\/([^/ \t]+)\/([^/ \t]+)\/?$/.exec(url || "");
  if (m) return {
    owner: m[1],
    name: m[2]
  };
  return undefined;
}
function fetchLatestRelease(_x, _x2) {
  return _fetchLatestRelease.apply(this, arguments);
}

function _fetchLatestRelease() {
  _fetchLatestRelease = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(slug, options) {
    var uri, resp, contents, releases;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // https://api.github.com/repos/microsoft/jacdac-msr-modules/contents/dist
            uri = ROOT + "repos/" + normalizeSlug(slug) + "/contents/dist";
            _context.next = 3;
            return fetch(uri);

          case 3:
            resp = _context.sent;
            _context.t0 = resp.status;
            _context.next = _context.t0 === 200 ? 7 : _context.t0 === 204 ? 7 : _context.t0 === 404 ? 12 : _context.t0 === 403 ? 13 : 16;
            break;

          case 7:
            _context.next = 9;
            return resp.json();

          case 9:
            contents = _context.sent;
            releases = contentsToFirmwareReleases(contents);
            return _context.abrupt("return", releases[0]);

          case 12:
            return _context.abrupt("return", undefined);

          case 13:
            if (!(options !== null && options !== void 0 && options.ignoreThrottled)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", undefined);

          case 15:
            throw new Error("Too many calls to GitHub, try again later");

          case 16:
            throw new Error("unknown status code " + resp.status);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchLatestRelease.apply(this, arguments);
}

function fetchReleaseBinary(_x3, _x4) {
  return _fetchReleaseBinary.apply(this, arguments);
}

function _fetchReleaseBinary() {
  _fetchReleaseBinary = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(slug, version) {
    var downloadUrl, req, firmware;
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // we are not using the release api because of CORS.
            downloadUrl = "https://raw.githubusercontent.com/" + normalizeSlug(slug) + "/main/dist/fw-" + version + ".uf2";
            _context2.next = 3;
            return fetch(downloadUrl, {
              headers: {
                Accept: "application/octet-stream"
              }
            });

          case 3:
            req = _context2.sent;

            if (!(req.status == 200)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return req.blob();

          case 7:
            firmware = _context2.sent;
            return _context2.abrupt("return", firmware);

          case 9:
            return _context2.abrupt("return", undefined);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchReleaseBinary.apply(this, arguments);
}

function fetchText(_x5, _x6, _x7, _x8) {
  return _fetchText.apply(this, arguments);
}

function _fetchText() {
  _fetchText = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(slug, tag, path, mimeType) {
    var downloadUrl, req, src;
    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            downloadUrl = "https://raw.githubusercontent.com/" + normalizeSlug(slug) + "/" + tag + "/" + path;
            _context3.next = 3;
            return fetch(downloadUrl, {
              headers: {
                Accept: mimeType
              }
            });

          case 3:
            req = _context3.sent;

            if (!(req.status == 200)) {
              _context3.next = 9;
              break;
            }

            _context3.next = 7;
            return req.text();

          case 7:
            src = _context3.sent;
            return _context3.abrupt("return", src);

          case 9:
            return _context3.abrupt("return", undefined);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchText.apply(this, arguments);
}

function useFetchApi(path, options) {
  var res = useFetch("" + ROOT + path);
  if (res.status !== undefined) switch (res.status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
      break;

    case 404:
      // unknow repo or no access
      res.response = undefined;
      break;

    case 403:
      // throttled
      if (options !== null && options !== void 0 && options.ignoreThrottled) {
        res.response = undefined;
        return res;
      } else throw new Error("Too many calls to GitHub, try again later");

    default:
      console.log("unknown status", res);
      throw new Error("Unknown response from GitHub " + res.status);
  }
  return res;
}

function useRepository(slug) {
  var path = "repos/" + normalizeSlug(slug);
  var res = useFetchApi(path, {
    ignoreThrottled: true
  });
  return res;
}
function useLatestRelease(slug, options) {
  var _resp$response;

  var resp = useLatestReleases(slug, options);
  return _objectSpread(_objectSpread({}, resp), {}, {
    response: (_resp$response = resp.response) === null || _resp$response === void 0 ? void 0 : _resp$response[0]
  });
}
function useLatestReleases(slug, options) {
  if (!slug) return {
    response: undefined,
    loading: false,
    error: undefined,
    status: undefined
  };
  var uri = "repos/" + normalizeSlug(slug) + "/contents/dist";
  var res = useFetchApi(uri, _objectSpread(_objectSpread({}, options || {}), {}, {
    ignoreThrottled: true
  }));
  return _objectSpread(_objectSpread({}, res), {}, {
    response: contentsToFirmwareReleases(res.response)
  });
}

/***/ }),

/***/ 27169:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceTest; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(99330);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__(12531);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 24 modules
var servers = __webpack_require__(25606);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts + 1 modules
var testspec = __webpack_require__(45831);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
;// CONCATENATED MODULE: ./src/components/SelectService.tsx







function SelectService(props) {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  var services = (0,useChange/* default */.Z)(bus, function (n) {
    return n.services({
      serviceClass: serviceClass
    });
  }, []);
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();

  var handleSelect = function handleSelect(service) {
    return function () {
      return onSelect(service);
    };
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, !!services.length && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
      key: service.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
      device: service.device,
      showAvatar: true
    }), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
      variant: "contained",
      color: "primary",
      onClick: handleSelect(service)
    }, "Select"))));
  })), !(services !== null && services !== void 0 && services.length) && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Not seeing your device? Try some of the following.", /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "Check that your device is connected"), /*#__PURE__*/react.createElement("li", null, "Use the ", /*#__PURE__*/react.createElement("strong", null, "packet console"), " to monitor packets on the bus"), /*#__PURE__*/react.createElement("li", null, "Check the class identifier in your annoucement packets"))));
}
// EXTERNAL MODULE: ./src/components/test/ServiceTestRunner.tsx + 2 modules
var ServiceTestRunner = __webpack_require__(43676);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
;// CONCATENATED MODULE: ./src/components/test/ServiceTest.tsx


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports











function Diagnostics(props) {
  var serviceClass = props.serviceClass;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var hostDefinition = (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(serviceClass);

  var handleStartSimulator = function handleStartSimulator() {
    return (0,servers/* addServiceProvider */.Q6)(bus, hostDefinition);
  };

  if (!hostDefinition) return null;
  return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Developer zone"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleStartSimulator
  }, "start simulator"));
}

function ServiceTestRunnerSelect(props) {
  var serviceClass = props.serviceClass,
      onSelect = props.onSelect;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Select a device to test"), /*#__PURE__*/react.createElement(SelectService, {
    serviceClass: serviceClass,
    onSelect: onSelect
  }));
}

function ServiceTest(props) {
  var serviceSpec = props.serviceSpec,
      showStartSimulator = props.showStartSimulator,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? (0,testspec/* serviceTestFromServiceClass */.H)(serviceSpec === null || serviceSpec === void 0 ? void 0 : serviceSpec.classIdentifier) : _props$serviceTest;
  var serviceClass = serviceSpec.classIdentifier;

  var _useState = (0,react.useState)(undefined),
      service = _useState[0],
      setService = _useState[1];

  var handleSelect = function handleSelect(service) {
    return setService(service);
  }; // clear selected service when json changes


  (0,react.useEffect)(function () {
    setService(undefined);
  }, [serviceTest]); // clear service if device disconnects

  (0,react.useEffect)(function () {
    var _service$device;

    return service === null || service === void 0 ? void 0 : (_service$device = service.device) === null || _service$device === void 0 ? void 0 : _service$device.subscribe(constants/* DISCONNECT */.PYu, function () {
      setService(undefined);
    });
  }, [service]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, serviceSpec.name + " tests", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "go to specification",
    to: "/services/" + serviceSpec.shortId + "/"
  }, /*#__PURE__*/react.createElement(Info/* default */.Z, null))), (flags/* default.diagnostics */.Z.diagnostics || showStartSimulator) && /*#__PURE__*/react.createElement(Diagnostics, {
    serviceClass: serviceClass
  }), !service && /*#__PURE__*/react.createElement(ServiceTestRunnerSelect, {
    serviceClass: serviceClass,
    onSelect: handleSelect
  }), service && /*#__PURE__*/react.createElement(ServiceTestRunner/* default */.Z, {
    service: service,
    serviceTest: serviceTest
  }));
}

/***/ }),

/***/ 21838:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtestfuns.ts
var jdtestfuns = __webpack_require__(92671);
// EXTERNAL MODULE: ./jacdac-ts/node_modules/jsep/build/jsep.js
var jsep = __webpack_require__(25297);
var jsep_default = /*#__PURE__*/__webpack_require__.n(jsep);
;// CONCATENATED MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtest.ts
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="jdspec.d.ts" />
/// <reference path="jdtest.d.ts" />



var supportedExpressions = ["MemberExpression", "ArrayExpression", "BinaryExpression", "CallExpression", "Identifier", "Literal", "UnaryExpression", "LogicalExpression"]; // we parse a test with respect to an existing ServiceSpec

function parseSpecificationTestMarkdownToJSON(filecontent, spec, filename) {
  if (filename === void 0) {
    filename = "";
  }

  if (!spec) return undefined;
  filecontent = (filecontent || "").replace(/\r/g, "");
  var info = {
    description: "",
    serviceClassIdentifier: spec.classIdentifier,
    tests: []
  };
  var backticksType = "";
  var errors = [];
  var lineNo = 0;
  var currentTest = null;
  var testHeading = "";
  var testPrompt = "";

  try {
    for (var _iterator = _createForOfIteratorHelperLoose(filecontent.split(/\n/)), _step; !(_step = _iterator()).done;) {
      var line = _step.value;
      lineNo++;
      processLine(line);
    }
  } catch (e) {
    error("exception: " + e.message);
  }

  if (currentTest) finishTest();
  if (errors.length) info.errors = errors;
  return info;

  function processLine(line) {
    if (backticksType) {
      if (line.trim() == "```") {
        backticksType = null;
        if (backticksType == "default") return;
      }
    } else {
      var m = /^```(.*)/.exec(line);

      if (m) {
        backticksType = m[1] || "default";
        if (backticksType == "default") return;
      }
    }

    var interpret = backticksType == "default" || line.slice(0, 4) == "    " || /^\t/.exec(line);

    if (!interpret) {
      var _m = /^(#+)\s*(.*)/.exec(line);

      if (_m) {
        testHeading = "";
        testPrompt = "";
        var hd = _m[1],
            cont = _m[2];

        if (hd == "#") {
          if (!info.description) info.description = cont.trim();else error("use ## to start a test, not #");
        } else if (hd == "##") {
          if (currentTest) finishTest();
          testHeading = cont.trim();
        }
      } else {
        testPrompt += line;
      }
    } else {
      var expanded = line.replace(/\/\/.*/, "").trim();
      if (!expanded) return;
      processCommand(expanded);
    }
  }

  function argsRequiredOptional(args, optional) {
    if (optional === void 0) {
      optional = false;
    }

    return args.filter(function (a) {
      return !optional && typeof a === "string" || optional && typeof a === "object";
    });
  }

  function processCommand(expanded) {
    // TODO: if there is a prompt, the test has no commands, and
    // TODO: the first command is not ask/say
    // TODO: then add a say command
    if (!currentTest) {
      if (!testHeading) error("every test must have a description (via ##)");
      currentTest = {
        description: testHeading,
        prompt: testPrompt,
        registers: [],
        events: [],
        testCommands: []
      };
      testHeading = "";
      testPrompt = "";
    }

    var call = /^([a-zA-Z]\w*)\(.*\)$/.exec(expanded);

    if (!call) {
      error("a command must be a call to a registered test function (JavaScript syntax)");
      return;
    }

    var callee = call[1];
    var testCommandFunctions = (0,jdtestfuns/* getTestCommandFunctions */.f)();
    var cmdIndex = testCommandFunctions.findIndex(function (r) {
      return callee == r.id;
    });

    if (cmdIndex < 0) {
      error(callee + " is not a registered test command function.");
      return;
    }

    var root = jsep_default()(expanded);

    if (!root || !root.type || root.type != "CallExpression" || !root.callee || !root.arguments) {
      error("a command must be a call expression in JavaScript syntax");
    } else {
      // check for unsupported expression types
      (0,jdutils/* exprVisitor */.ao)(null, root, function (p, c) {
        if (supportedExpressions.indexOf(c.type) < 0) error("Expression of type " + c.type + " not currently supported");
      }); // check arguments

      var command = testCommandFunctions[cmdIndex];
      var minArgs = argsRequiredOptional(command.args).length;
      var maxArgs = command.args.length;
      if (root.arguments.length < minArgs) error(callee + " expects at least " + minArgs + " arguments; got " + root.arguments.length);else if (root.arguments.length > maxArgs) {
        error(callee + " expects at most " + maxArgs + " arguments; got " + root.arguments.length);
      } else {
        // deal with optional arguments
        var newExpressions = [];

        for (var i = root.arguments.length; i < command.args.length; i++) {
          var _ref = command.args[i],
              name = _ref[0],
              def = _ref[1];
          var lit = {
            type: "Literal",
            value: def,
            raw: def.toString()
          };
          newExpressions.push(lit);
        }

        root.arguments = root.arguments.concat(newExpressions); // type checking of arguments.

        processArguments(command, root.arguments); // check all calls in subexpressions

        processCalls(command, root.arguments);
      }
      currentTest.testCommands.push({
        prompt: testPrompt,
        call: root
      });
      testPrompt = "";
    }

    function processArguments(command, args) {
      var eventSymTable = [];
      args.forEach(function (arg, a) {
        var argType = command.args[a];
        if (typeof argType === "object") argType = command.args[a][0];

        if (argType === "register" || argType === "event") {
          if (arg.type !== "Identifier") error(callee + " expects a " + argType + " in argument position " + (a + 1));else if (argType === "event" && a === 0) {
            var pkt = lookupEvent(arg);
            if (pkt && eventSymTable.indexOf(pkt) === -1) eventSymTable.push(pkt);
          } else if (argType === "register") {
            try {
              lookupRegister(arg.name, "");
            } catch (e) {
              error(e.message);
            }
          }
        } else if (argType === "events") {
          if (arg.type != 'ArrayExpression') error("events function expects a list of service events");else {
            arg.elements.forEach(lookupEvent);
          }
        } else if (argType === "number" || argType === "boolean") {
          (0,jdutils/* exprVisitor */.ao)(root, arg, function (p, c) {
            if (p.type !== 'MemberExpression' && c.type === 'Identifier') {
              lookupReplace(eventSymTable, p, c);
            } else if (c.type === 'ArrayExpression') {
              error("array expression not allowed in this context");
            } else if (c.type === 'MemberExpression') {
              var member = c; // A member expression must be of form id1.id2

              if (member.object.type !== 'Identifier' || member.property.type !== 'Identifier' || member.computed) {
                error('property access must be of form id.property');
              } else {
                lookupReplace(eventSymTable, p, c);
              }
            }
          });
        } else {
          error("unexpected argument type (" + argType + ") in jdtestfuns.ts");
        }
      });
    }

    function processCalls(command, args) {
      var testExpressionFunctions = (0,jdtestfuns/* getTestExpressionFunctions */.V)();
      args.forEach(function (arg, a) {
        var argType = command.args[a];
        (0,jdutils/* exprVisitor */.ao)(root, arg, function (parent, callExpr) {
          if (callExpr.type !== 'CallExpression') return;
          if (callExpr.callee.type !== "Identifier") error("all calls must be direct calls");
          var id = callExpr.callee.name;
          var tef = testExpressionFunctions.find(function (r) {
            return id == r.id;
          });
          if (!tef) error(id + " is not a registered test expression function.");

          if (tef.context === "expression" || tef.context === "either") {
            if (argType != "boolean") error(id + " expression function can only be used inside a boolean expression"); // no nested calls

            if (command.context === "expression" || command.context === "either") error("cannot nest " + tef.id + " underneath " + command.id); // look under tef

            (0,jdutils/* exprVisitor */.ao)(null, callExpr, function (parent, ce) {
              if (ce.type !== 'CallExpression') return;
              if (ce.callee.type === "Identifier" && ce.callee.name) error("cannot nest " + ce.callee.name + " underneath " + id);
            });
          }

          var expected = tef.args.length;
          if (expected !== callExpr.arguments.length) error(callee + " expects " + expected + " arguments; got " + callExpr.arguments.length);
        });
      });
    }

    function lookupEvent(e) {
      var _spec$packets;

      var events = (_spec$packets = spec.packets) === null || _spec$packets === void 0 ? void 0 : _spec$packets.filter(function (pkt) {
        return pkt.kind == "event";
      });

      if (e.type !== 'Identifier') {
        error("event identifier expected");
      } else {
        var id = e.name;
        var pkt = events.find(function (p) {
          return p.name === id;
        });

        if (!pkt) {
          error("no event " + id + " in specification");
        } else {
          if (currentTest.events.indexOf(id) < 0) currentTest.events.push(id);
          return pkt;
        }
      }

      return null;
    }
  }

  function lookupRegister(root, fld) {
    var reg = (0,jdutils/* getRegister */.NY)(spec, root, fld);
    if (reg.pkt && (!reg.fld && !(0,jdutils/* isBoolOrNumericFormat */.zF)(reg.pkt.packFormat) || reg.fld && reg.fld.type && !(0,jdutils/* isBoolOrNumericFormat */.zF)(reg.fld.type))) error("only bool/numeric registers allowed in tests"); // if (!fld && regField.pkt.fields.length > 0)
    //    error(`register ${root} has fields, but no field specified`)

    if (currentTest.registers.indexOf(root) < 0) currentTest.registers.push(root);
  }

  function lookupReplace(events, parent, child) {
    if (Array.isArray(parent)) {
      var replace = lookup(events, parent, child);
      parent.forEach(function (i) {
        if (parent[i] === child) parent[i] = replace;
      });
    } else {
      // don't process identifiers that are callees of CallExpression
      if ((parent === null || parent === void 0 ? void 0 : parent.type) === "CallExpression" && child === parent.callee) return;

      var _replace = lookup(events, parent, child);

      if (_replace) {
        Object.keys(parent).forEach(function (k) {
          if (parent[k] === child) parent[k] = _replace;
        });
      }
    }

    function lookup(events, parent, child) {
      try {
        try {
          var _toName = toName(),
              root = _toName[0],
              fld = _toName[1];

          var val = (0,jdutils/* parseIntFloat */.Qv)(spec, fld ? root + "." + fld : root);
          var lit = {
            type: "Literal",
            value: val,
            raw: val.toString()
          };
          return lit;
        } catch (e) {
          var _toName2 = toName(),
              _root = _toName2[0],
              _fld = _toName2[1];

          lookupRegister(_root, _fld);
        }
      } catch (e) {
        if (events.length > 0) {
          var _toName3 = toName(),
              _root2 = _toName3[0],
              _fld2 = _toName3[1];

          var pkt = events.find(function (pkt) {
            return pkt.name === _root2;
          });
          if (!pkt) error("event " + _root2 + " not bound correctly");else if (!_fld2 && pkt.fields.length > 0) error("event " + _root2 + " has fields, but no field specified");else if (_fld2 && !pkt.fields.find(function (f) {
            return f.name === _fld2;
          })) error("Field " + _fld2 + " of event " + _root2 + " not found in specification");
        } else {
          error(e.message);
        }
      }

      return undefined;

      function toName() {
        if (child.type !== 'MemberExpression') return [child.name, ""];else {
          return [child.object.name, child.property.name];
        }
      }
    }
  }

  function finishTest() {
    info.tests.push(currentTest);
    currentTest = null;
  }

  function error(msg) {
    if (!msg) msg = "syntax error";
    if (errors.some(function (e) {
      return e.line == lineNo && e.message == msg;
    })) return;
    errors.push({
      file: filename,
      line: lineNo,
      message: msg
    });
  }
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/useLocalStorage.ts
var useLocalStorage = __webpack_require__(86581);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__(14247);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/test/ServiceTest.tsx + 1 modules
var ServiceTest = __webpack_require__(27169);
// EXTERNAL MODULE: ./src/components/github.ts + 2 modules
var github = __webpack_require__(99819);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
;// CONCATENATED MODULE: ./src/components/tools/ServiceTestEditor.tsx















var SERVICE_TEST_SERVICE_STORAGE_KEY = "jacdac:servicetesteditor:service";
var SERVICE_TEST_SOURCE_STORAGE_KEY = "jacdac:servicetesteditorsource";
var SERVICE_MARKDOWN_SOURCE_STORAGE_KEY = "jacdac:servicetesteditorsource:markdown";
function ServiceTestEditor() {
  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext.setError;

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)(SERVICE_TEST_SERVICE_STORAGE_KEY, constants/* SRV_BUTTON */.XJR),
      serviceClass = _useLocalStorage[0],
      setServiceClass = _useLocalStorage[1];

  var _useLocalStorage2 = (0,useLocalStorage/* default */.Z)(SERVICE_TEST_SOURCE_STORAGE_KEY, ""),
      source = _useLocalStorage2[0],
      setSource = _useLocalStorage2[1];

  var _useLocalStorage3 = (0,useLocalStorage/* default */.Z)(SERVICE_MARKDOWN_SOURCE_STORAGE_KEY, ""),
      markdownSource = _useLocalStorage3[0],
      setMarkdownSource = _useLocalStorage3[1];

  var serviceSpec = (0,react.useMemo)(function () {
    return (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);
  }, [serviceClass]);
  var json = (0,react.useMemo)(function () {
    return parseSpecificationTestMarkdownToJSON(source, serviceSpec);
  }, [source, serviceSpec]);
  var servicePath = json && "services/tests/" + (serviceSpec.camelName || serviceSpec.shortId || "0x" + serviceSpec.classIdentifier.toString(16)).toLowerCase();

  var handleLoadFromGithub = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var ghSource, _ghSource;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,github/* fetchText */.s8)("microsoft/jacdac", "main", "services/tests/" + serviceSpec.shortId + ".md", "text/plain");

            case 3:
              ghSource = _context.sent;
              setSource(ghSource || "");
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 10:
              _context.prev = 10;
              _context.next = 13;
              return (0,github/* fetchText */.s8)("microsoft/jacdac", "main", "services/" + serviceSpec.shortId + ".md", "text/plain");

            case 13:
              _ghSource = _context.sent;
              if (_ghSource) setMarkdownSource(_ghSource);else setError("Specification source not found");
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t1 = _context["catch"](10);
              setError(_context.t1);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7], [10, 17]]);
    }));

    return function handleLoadFromGithub() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(ServiceSpecificationSelect/* default */.Z, {
    label: "Select a service to test",
    serviceClass: serviceClass,
    setServiceClass: setServiceClass
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    disabled: !serviceSpec,
    onClick: handleLoadFromGithub
  }, "Load from GitHub")))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 2,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    sm: 7
  }, /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors,
    pullRequestTitle: json && "Service test: " + serviceSpec.name,
    pullRequestPath: servicePath
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    sm: 5
  }, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: markdownSource
  }))), /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Preview"
  }), json && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    xl: 7
  }, /*#__PURE__*/react.createElement(ServiceTest/* default */.Z, {
    showStartSimulator: true,
    serviceSpec: serviceSpec,
    serviceTest: json
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/service-test-editor.tsx



function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Service Test Editor"), /*#__PURE__*/react.createElement("p", null, "Read the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/reference/service-tests"
  }, "service test"), " ", "documentation."), /*#__PURE__*/react.createElement(ServiceTestEditor, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-test-editor-tsx-b04b0886c1cdc40af0dc.js.map