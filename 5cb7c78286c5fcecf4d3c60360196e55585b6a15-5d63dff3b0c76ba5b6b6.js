(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7788,9819],{

/***/ 31186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ 4381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34621);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67055);
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61008);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11291);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38582);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73935);











var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(childrenProp);
  var hasSecondaryAction = children.length && (0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(handleOwnRef, ref);

  var componentProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z;
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_3__/* .default.Provider */ .Z.Provider, {
      value: childContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContainerComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_3__/* .default.Provider */ .Z.Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    ref: handleRef
  }, componentProps), children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(styles, {
  name: 'MuiListItem'
})(ListItem));

/***/ }),

/***/ 65541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81253);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96156);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4381);







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body1, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      ListItemClasses = props.ListItemClasses,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
      dense: classes.dense
    }, ListItemClasses),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiMenuItem'
})(MenuItem));

/***/ }),

/***/ 29394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFirmwareBlobs; },
  "x": function() { return /* binding */ useFirmwareBlob; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flashing.ts
var flashing = __webpack_require__(91758);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(94904);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/github.ts + 2 modules
var github = __webpack_require__(99819);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(85061);
;// CONCATENATED MODULE: ./src/components/hooks/useIdleCallback.ts


function useIdleCallback(cb, timeout, deps) {
  (0,react.useEffect)(function () {
    if (typeof window === "undefined" || !cb) return;

    if ("requestIdleCallback" in window) {
      var id = window.requestIdleCallback(cb, {
        timeout: timeout
      });
      return function () {
        return window.cancelIdleCallback(id);
      };
    } else {
      var _id = setTimeout(cb, timeout);

      return function () {
        return clearTimeout(_id);
      };
    }
  }, [cb, timeout].concat((0,toConsumableArray/* default */.Z)(deps || [])));
}
;// CONCATENATED MODULE: ./src/components/firmware/useFirmwareBlobs.ts



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










function useFirmwareBlobs() {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(DbContext/* default */.ZP),
      db = _useContext2.db;

  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;
  var loadFirmwares = (0,react.useCallback)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var names, missingSlugs, _iterator, _step, slug, rel, fw;

    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("firmware: load");
            _context.next = 3;
            return firmwares === null || firmwares === void 0 ? void 0 : firmwares.list();

          case 3:
            names = _context.sent;

            if (names) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            missingSlugs = (0,utils/* unique */.Tw)((0,spec/* deviceSpecifications */.qx)().filter(function (spec) {
              return !!(spec !== null && spec !== void 0 && spec.firmwares.length);
            }) // needs some firmwares
            .map(function (spec) {
              return spec.repo;
            }).filter(function (repo) {
              return /^https:\/\/github.com\//.test(repo);
            }).map(function (repo) {
              return repo.substr("https://github.com/".length);
            }).filter(function (slug) {
              return names.indexOf(slug) < 0;
            }));
            _iterator = _createForOfIteratorHelperLoose(missingSlugs);

          case 8:
            if ((_step = _iterator()).done) {
              _context.next = 26;
              break;
            }

            slug = _step.value;
            console.log("db: fetch latest release of " + slug);
            _context.next = 13;
            return (0,github/* fetchLatestRelease */.pY)(slug, {
              ignoreThrottled: true
            });

          case 13:
            rel = _context.sent;

            if (rel !== null && rel !== void 0 && rel.version) {
              _context.next = 17;
              break;
            }

            console.warn("release not found");
            return _context.abrupt("return");

          case 17:
            console.log("db: fetch binary release " + slug + " " + rel.version);
            _context.next = 20;
            return (0,github/* fetchReleaseBinary */.dW)(slug, rel.version);

          case 20:
            fw = _context.sent;

            if (fw) {
              console.log("db: binary release " + slug + " " + rel.version + " downloaded");
              firmwares.set(slug, fw);
            } // throttle github queries


            _context.next = 24;
            return (0,utils/* delay */.gw)(5000);

          case 24:
            _context.next = 8;
            break;

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [db, firmwares]);
  useIdleCallback(loadFirmwares, 30000, [db, firmwares]);
  (0,useChange/* useChangeAsync */.R)(firmwares, /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(fw) {
      var names, uf2s, _iterator2, _step2, name, blob, uf2Blobs;

      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("firmwares: change");
              _context2.next = 3;
              return fw === null || fw === void 0 ? void 0 : fw.list();

            case 3:
              names = _context2.sent;
              console.log("import stored uf2", names);
              uf2s = [];

              if (!(names !== null && names !== void 0 && names.length)) {
                _context2.next = 19;
                break;
              }

              _iterator2 = _createForOfIteratorHelperLoose(names);

            case 8:
              if ((_step2 = _iterator2()).done) {
                _context2.next = 19;
                break;
              }

              name = _step2.value;
              _context2.next = 12;
              return fw.get(name);

            case 12:
              blob = _context2.sent;
              _context2.next = 15;
              return (0,flashing/* parseFirmwareFile */.Ub)(blob, name);

            case 15:
              uf2Blobs = _context2.sent;
              uf2Blobs === null || uf2Blobs === void 0 ? void 0 : uf2Blobs.forEach(function (uf2Blob) {
                uf2s.push(uf2Blob);
              });

            case 17:
              _context2.next = 8;
              break;

            case 19:
              bus.firmwareBlobs = uf2s;

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  return bus.firmwareBlobs;
}
function useFirmwareBlob(repoSlug) {
  repoSlug = repoSlug.replace(/^https:\/\/github\.com\//i, "");

  var _useContext3 = (0,react.useContext)(DbContext/* default */.ZP),
      db = _useContext3.db;

  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;
  var blobs = (0,useChange/* useChangeAsync */.R)(firmwares, /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
    var blob, uf2Blobs;
    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (repoSlug) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", undefined);

          case 2:
            _context3.next = 4;
            return firmwares === null || firmwares === void 0 ? void 0 : firmwares.get(repoSlug);

          case 4:
            blob = _context3.sent;

            if (blob) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", undefined);

          case 9:
            _context3.next = 11;
            return (0,flashing/* parseFirmwareFile */.Ub)(blob, repoSlug);

          case 11:
            uf2Blobs = _context3.sent;
            return _context3.abrupt("return", uf2Blobs);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [repoSlug]);

  var setFirmwareFile = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4(tag, f) {
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return firmwares === null || firmwares === void 0 ? void 0 : firmwares.set(repoSlug, f);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function setFirmwareFile(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return {
    firmwareBlobs: blobs,
    setFirmwareFile: setFirmwareFile
  };
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

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      drawerType = _useContext.drawerType;

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ })

}]);
//# sourceMappingURL=5cb7c78286c5fcecf4d3c60360196e55585b6a15-5d63dff3b0c76ba5b6b6.js.map