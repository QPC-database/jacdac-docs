(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8788],{

/***/ 46438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ useFormControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (false) {}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormControlContext);
}
/* harmony default export */ __webpack_exports__["Z"] = (FormControlContext);

/***/ }),

/***/ 68725:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useFormControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46438);


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
}

/***/ }),

/***/ 76544:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Switch_Switch; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(12933);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__(68725);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(23729);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/SwitchBase.js










var styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = (0,useFormControl/* default */.Z)();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return /*#__PURE__*/react.createElement(IconButton/* default */.Z, (0,esm_extends/* default */.Z)({
    component: "span",
    className: (0,clsx_m/* default */.Z)(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 false ? 0 : void 0;
/* harmony default export */ var internal_SwitchBase = ((0,withStyles/* default */.Z)(styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js

 // @inheritedComponent IconButton








var Switch_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle',
      // For correct alignment with the text.
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(20px)'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4,
        '&$checked': {
          transform: 'translateX(16px)'
        }
      }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};
var Switch = /*#__PURE__*/react.forwardRef(function Switch(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "color", "edge", "size"]);

  var icon = /*#__PURE__*/react.createElement("span", {
    className: classes.thumb
  });
  return /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.Z)(classes.root, className, {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge], size === "small" && classes["size".concat((0,capitalize/* default */.Z)(size))])
  }, /*#__PURE__*/react.createElement(internal_SwitchBase, (0,esm_extends/* default */.Z)({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: (0,clsx_m/* default */.Z)(classes.switchBase, classes["color".concat((0,capitalize/* default */.Z)(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref
  }, other)), /*#__PURE__*/react.createElement("span", {
    className: classes.track
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Switch_Switch = ((0,withStyles/* default */.Z)(Switch_styles, {
  name: 'MuiSwitch'
})(Switch));

/***/ }),

/***/ 14632:
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
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

exports.Z = _default;

/***/ }),

/***/ 33629:
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRight');

exports.Z = _default;

/***/ }),

/***/ 29181:
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.Z = _default;

/***/ }),

/***/ 13840:
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error');

exports.Z = _default;

/***/ }),

/***/ 52995:
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
  d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"
}), 'Fingerprint');

exports.Z = _default;

/***/ }),

/***/ 58504:
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
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch');

exports.Z = _default;

/***/ }),

/***/ 89713:
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
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
}), 'Refresh');

exports.Z = _default;

/***/ }),

/***/ 21151:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("path", {
  fillOpacity: ".3",
  d: "M22 8V2L2 22h16V8z"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"
})), 'SignalCellularConnectedNoInternet0Bar');

exports.Z = _default;

/***/ }),

/***/ 82613:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CmdButton; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(13840);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
;// CONCATENATED MODULE: ./src/components/hooks/useAnalytics.ts
/*
requires "@microsoft/applicationinsights-web-basic": "^2.6.1",
import { ApplicationInsights } from "@microsoft/applicationinsights-web-basic"

// YOUR_INSTRUMENTATION_KEY_GOES_HERE
const instrumentationKey: string = undefined
const appInsights =
    instrumentationKey &&
    new ApplicationInsights({
        instrumentationKey,
        isStorageUseDisabled: true,
        isCookieUseDisabled: true,
    })
const page =
    typeof window !== "undefined"
        ? () =>
              appInsights?.track({
                  name: window.location.href,
                  time: new Date().toUTCString(),
                  baseType: "PageData",
              })
        : () => {}
const track =
    typeof window !== "undefined"
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (name: string, properties?: { [key: string]: any }) =>
              appInsights?.track({
                  name,
                  time: new Date().toUTCString(),
                  data: properties,
                  baseType: "EventData",
              })
        : // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (name, properties) => {}
if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).analytics = {
        page,
        track,
    }
}
*/
function useAnalytics() {
  var page = function page() {};

  var track = function track() {};

  return {
    page: page,
    track: track
  };
}
// EXTERNAL MODULE: ./src/components/hooks/useMounted.tsx
var useMounted = __webpack_require__(81888);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
;// CONCATENATED MODULE: ./src/components/CmdButton.tsx






 // tslint:disable-next-line: match-default-export-name no-submodule-imports







var ACK_RESET_DELAY = 500;
var ERROR_RESET_DELAY = 2000;
var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  var getBackgroundColor = theme.palette.type === "light" ? colorManipulator/* lighten */.$n : colorManipulator/* darken */._j;
  return (0,createStyles/* default */.Z)({
    ack: {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },
    error: {
      color: "#fff",
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.6)
    }
  });
});
function CmdButton(props) {
  var onClick = props.onClick,
      className = props.className,
      style = props.style,
      children = props.children,
      icon = props.icon,
      title = props.title,
      disabled = props.disabled,
      disableReset = props.disableReset,
      autoRun = props.autoRun,
      trackName = props.trackName,
      trackProperties = props.trackProperties,
      ackResetDelay = props.ackResetDelay,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["onClick", "className", "style", "children", "icon", "title", "disabled", "disableReset", "autoRun", "trackName", "trackProperties", "ackResetDelay"]);

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setAppError = _useContext.setError;

  var classes = useStyles();

  var _useState = (0,react.useState)(false),
      working = _useState[0],
      setWorking = _useState[1];

  var _useState2 = (0,react.useState)(false),
      ack = _useState2[0],
      setAck = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      error = _useState3[0],
      setError = _useState3[1];

  var _useAnalytics = useAnalytics(),
      track = _useAnalytics.track;

  var mounted = (0,useMounted/* default */.Z)();

  var _disabled = disabled || working;

  var run = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!working) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              // already working
              if (trackName) track("cmd." + trackName, trackProperties);
              _context.prev = 3;
              setError(undefined);
              setAck(false);
              setWorking(true);
              _context.next = 9;
              return onClick();

            case 9:
              if (mounted()) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return");

            case 11:
              setAck(true);

              if (disableReset) {
                _context.next = 18;
                break;
              }

              _context.next = 15;
              return (0,utils/* delay */.gw)(ackResetDelay || ACK_RESET_DELAY);

            case 15:
              if (mounted) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return");

            case 17:
              setAck(false);

            case 18:
              _context.next = 32;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](3);

              if (mounted()) {
                _context.next = 24;
                break;
              }

              return _context.abrupt("return");

            case 24:
              setAppError(_context.t0);
              setError(_context.t0);

              if (disableReset) {
                _context.next = 32;
                break;
              }

              _context.next = 29;
              return (0,utils/* delay */.gw)(ERROR_RESET_DELAY);

            case 29:
              if (mounted()) {
                _context.next = 31;
                break;
              }

              return _context.abrupt("return");

            case 31:
              setError(undefined);

            case 32:
              _context.prev = 32;
              if (mounted()) setWorking(false);
              return _context.finish(32);

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 20, 32, 35]]);
    }));

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(ev) {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ev.stopPropagation();
              run();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var statusIcon = error ? /*#__PURE__*/react.createElement(Error/* default */.Z, null) : undefined;
  var modeClassName = error ? classes.error : ack ? classes.ack : undefined;
  var elClassName = (0,clsx_m/* default */.Z)(className, modeClassName); // run once

  (0,react.useEffect)(function () {
    if (autoRun) run();
  }, [autoRun]);
  if (!children && icon) return /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, Object.assign({
    className: elClassName,
    style: style,
    onClick: handleClick,
    "aria-label": title,
    title: title,
    disabled: _disabled
  }, others), statusIcon || icon);else return /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, Object.assign({
    className: elClassName,
    style: style,
    startIcon: icon,
    endIcon: statusIcon,
    onClick: handleClick,
    "aria-label": title,
    title: title,
    disabled: _disabled
  }, others), children);
}

/***/ }),

/***/ 87993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DeviceActions; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52995);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89713);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82613);
/* harmony import */ var _hooks_useServiceProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63793);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29181);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88237);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54774);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38037);



// tslint:disable-next-line: no-submodule-imports match-default-export-name
 // tslint:disable-next-line: no-submodule-imports match-default-export-name










function DeviceActions(props) {
  var device = props.device,
      showSettings = props.showSettings,
      showReset = props.showReset,
      children = props.children,
      hideIdentity = props.hideIdentity,
      showStop = props.showStop;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      bus = _useContext.bus;

  var provider = (0,_hooks_useServiceProvider__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(device);
  var settings = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(device, function (_) {
    var _$services;

    return (_$services = _.services({
      serviceClass: _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_5__/* .SRV_SETTINGS */ .B9b
    })) === null || _$services === void 0 ? void 0 : _$services[0];
  });

  var handleIdentify = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return device.identify();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleIdentify() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleReset = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return device.reset();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleReset() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleStop = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              bus.removeServiceProvider(provider);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleStop() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleSettings = function handleSettings() {
    (0,gatsby_link__WEBPACK_IMPORTED_MODULE_7__/* .navigate */ .c4)("/tools/settings");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, showStop && provider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    trackName: "device.stop",
    size: "small",
    title: "stop simulator",
    onClick: handleStop,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null)
  }), !hideIdentity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    trackName: "device.identify",
    size: "small",
    title: "identify",
    onClick: handleIdentify,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null)
  }), showSettings && settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    trackName: "device.settings",
    size: "small",
    title: "settings",
    onClick: handleSettings,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null)
  }), showReset && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    trackName: "device.reset",
    size: "small",
    title: "reset",
    onClick: handleReset,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null)
  }), children);
}

/***/ }),

/***/ 48788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ JDomTreeView; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(12933);
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/TreeView/TreeViewContext.js

/**
 * @ignore - internal component.
 */

var TreeViewContext = react.createContext({});

if (false) {}

/* harmony default export */ var TreeView_TreeViewContext = (TreeViewContext);
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/TreeView/TreeView.js








var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }
};

function arrayDiff(arr1, arr2) {
  if (arr1.length !== arr2.length) return true;

  for (var i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return true;
  }

  return false;
}

var findNextFirstChar = function findNextFirstChar(firstChars, startIndex, char) {
  for (var i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }

  return -1;
};

var defaultExpandedDefault = [];
var defaultSelectedDefault = [];
var TreeView = /*#__PURE__*/react.forwardRef(function TreeView(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      defaultCollapseIcon = props.defaultCollapseIcon,
      defaultEndIcon = props.defaultEndIcon,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? defaultExpandedDefault : _props$defaultExpande,
      defaultExpandIcon = props.defaultExpandIcon,
      defaultParentIcon = props.defaultParentIcon,
      _props$defaultSelecte = props.defaultSelected,
      defaultSelected = _props$defaultSelecte === void 0 ? defaultSelectedDefault : _props$defaultSelecte,
      _props$disableSelecti = props.disableSelection,
      disableSelection = _props$disableSelecti === void 0 ? false : _props$disableSelecti,
      _props$multiSelect = props.multiSelect,
      multiSelect = _props$multiSelect === void 0 ? false : _props$multiSelect,
      expandedProp = props.expanded,
      onNodeSelect = props.onNodeSelect,
      onNodeToggle = props.onNodeToggle,
      selectedProp = props.selected,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disableSelection", "multiSelect", "expanded", "onNodeSelect", "onNodeToggle", "selected"]);

  var _React$useState = react.useState(null),
      tabbable = _React$useState[0],
      setTabbable = _React$useState[1];

  var _React$useState2 = react.useState(null),
      focusedNodeId = _React$useState2[0],
      setFocusedNodeId = _React$useState2[1];

  var nodeMap = react.useRef({});
  var firstCharMap = react.useRef({});
  var visibleNodes = react.useRef([]);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'TreeView',
    state: 'expanded'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var _useControlled3 = (0,useControlled/* default */.Z)({
    controlled: selectedProp,
    default: defaultSelected,
    name: 'TreeView',
    state: 'selected'
  }),
      _useControlled4 = (0,slicedToArray/* default */.Z)(_useControlled3, 2),
      selected = _useControlled4[0],
      setSelectedState = _useControlled4[1];
  /*
   * Status Helpers
   */


  var isExpanded = react.useCallback(function (id) {
    return Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false;
  }, [expanded]);
  var isSelected = react.useCallback(function (id) {
    return Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id;
  }, [selected]);

  var isTabbable = function isTabbable(id) {
    return tabbable === id;
  };

  var isFocused = function isFocused(id) {
    return focusedNodeId === id;
  };
  /*
   * Node Helpers
   */


  var getNextNode = function getNextNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex + 1 < visibleNodes.current.length) {
      return visibleNodes.current[nodeIndex + 1];
    }

    return null;
  };

  var getPreviousNode = function getPreviousNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex - 1 >= 0) {
      return visibleNodes.current[nodeIndex - 1];
    }

    return null;
  };

  var getLastNode = function getLastNode() {
    return visibleNodes.current[visibleNodes.current.length - 1];
  };

  var getFirstNode = function getFirstNode() {
    return visibleNodes.current[0];
  };

  var getParent = function getParent(id) {
    return nodeMap.current[id].parent;
  };

  var getNodesInRange = function getNodesInRange(a, b) {
    var aIndex = visibleNodes.current.indexOf(a);
    var bIndex = visibleNodes.current.indexOf(b);
    var start = Math.min(aIndex, bIndex);
    var end = Math.max(aIndex, bIndex);
    return visibleNodes.current.slice(start, end + 1);
  };
  /*
   * Focus Helpers
   */


  var focus = function focus(id) {
    if (id) {
      setTabbable(id);
      setFocusedNodeId(id);
    }
  };

  var focusNextNode = function focusNextNode(id) {
    return focus(getNextNode(id));
  };

  var focusPreviousNode = function focusPreviousNode(id) {
    return focus(getPreviousNode(id));
  };

  var focusFirstNode = function focusFirstNode() {
    return focus(getFirstNode());
  };

  var focusLastNode = function focusLastNode() {
    return focus(getLastNode());
  };

  var focusByFirstCharacter = function focusByFirstCharacter(id, char) {
    var start;
    var index;
    var lowercaseChar = char.toLowerCase();
    var firstCharIds = [];
    var firstChars = []; // This really only works since the ids are strings

    Object.keys(firstCharMap.current).forEach(function (nodeId) {
      var firstChar = firstCharMap.current[nodeId];
      var map = nodeMap.current[nodeId];
      var visible = map.parent ? isExpanded(map.parent) : true;

      if (visible) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    }); // Get start index for search based on position of currentItem

    start = firstCharIds.indexOf(id) + 1;

    if (start === nodeMap.current.length) {
      start = 0;
    } // Check remaining slots in the menu


    index = findNextFirstChar(firstChars, start, lowercaseChar); // If not found in remaining slots, check from beginning

    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    } // If match was found...


    if (index > -1) {
      focus(firstCharIds[index]);
    }
  };
  /*
   * Expansion Helpers
   */


  var toggleExpansion = function toggleExpansion(event) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusedNodeId;
    var newExpanded;

    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter(function (id) {
        return id !== value;
      });
      setTabbable(function (oldTabbable) {
        var map = nodeMap.current[oldTabbable];

        if (oldTabbable && (map && map.parent ? map.parent.id : null) === value) {
          return value;
        }

        return oldTabbable;
      });
    } else {
      newExpanded = [value].concat(expanded);
    }

    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }

    setExpandedState(newExpanded);
  };

  var expandAllSiblings = function expandAllSiblings(event, id) {
    var map = nodeMap.current[id];
    var parent = nodeMap.current[map.parent];
    var diff;

    if (parent) {
      diff = parent.children.filter(function (child) {
        return !isExpanded(child);
      });
    } else {
      var topLevelNodes = nodeMap.current[-1].children;
      diff = topLevelNodes.filter(function (node) {
        return !isExpanded(node);
      });
    }

    var newExpanded = expanded.concat(diff);

    if (diff.length > 0) {
      setExpandedState(newExpanded);

      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };
  /*
   * Selection Helpers
   */


  var lastSelectedNode = react.useRef(null);
  var lastSelectionWasRange = react.useRef(false);
  var currentRangeSelection = react.useRef([]);

  var handleRangeArrowSelect = function handleRangeArrowSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        next = nodes.next,
        current = nodes.current;

    if (!next || !current) {
      return;
    }

    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }

    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter(function (id) {
          return id === start || id !== current;
        });
        currentRangeSelection.current = currentRangeSelection.current.filter(function (id) {
          return id === start || id !== current;
        });
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }

    if (onNodeSelect) {
      onNodeSelect(event, base);
    }

    setSelectedState(base);
  };

  var handleRangeSelect = function handleRangeSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        end = nodes.end; // If last selection was a range selection ignore nodes that were selected.

    if (lastSelectionWasRange.current) {
      base = selected.filter(function (id) {
        return currentRangeSelection.current.indexOf(id) === -1;
      });
    }

    var range = getNodesInRange(start, end);
    currentRangeSelection.current = range;
    var newSelected = base.concat(range);
    newSelected = newSelected.filter(function (id, i) {
      return newSelected.indexOf(id) === i;
    });

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleMultipleSelect = function handleMultipleSelect(event, value) {
    var newSelected = [];

    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter(function (id) {
        return id !== value;
      });
    } else {
      newSelected = [value].concat(selected);
    }

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleSingleSelect = function handleSingleSelect(event, value) {
    var newSelected = multiSelect ? [value] : value;

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var selectNode = function selectNode(event, id) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }

      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }

    return false;
  };

  var selectRange = function selectRange(event, nodes) {
    var stacked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _nodes$start = nodes.start,
        start = _nodes$start === void 0 ? lastSelectedNode.current : _nodes$start,
        end = nodes.end,
        current = nodes.current;

    if (stacked) {
      handleRangeArrowSelect(event, {
        start: start,
        next: end,
        current: current
      });
    } else {
      handleRangeSelect(event, {
        start: start,
        end: end
      });
    }

    lastSelectionWasRange.current = true;
    return true;
  };

  var rangeSelectToFirst = function rangeSelectToFirst(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getFirstNode()
    });
  };

  var rangeSelectToLast = function rangeSelectToLast(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getLastNode()
    });
  };

  var selectNextNode = function selectNextNode(event, id) {
    return selectRange(event, {
      end: getNextNode(id),
      current: id
    }, true);
  };

  var selectPreviousNode = function selectPreviousNode(event, id) {
    return selectRange(event, {
      end: getPreviousNode(id),
      current: id
    }, true);
  };

  var selectAllNodes = function selectAllNodes(event) {
    return selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };
  /*
   * Mapping Helpers
   */


  var addNodeToNodeMap = function addNodeToNodeMap(id, childrenIds) {
    var currentMap = nodeMap.current[id];
    nodeMap.current[id] = (0,esm_extends/* default */.Z)({}, currentMap, {
      children: childrenIds,
      id: id
    });
    childrenIds.forEach(function (childId) {
      var currentChildMap = nodeMap.current[childId];
      nodeMap.current[childId] = (0,esm_extends/* default */.Z)({}, currentChildMap, {
        parent: id,
        id: childId
      });
    });
  };

  var getNodesToRemove = react.useCallback(function (id) {
    var map = nodeMap.current[id];
    var nodes = [];

    if (map) {
      nodes.push(id);

      if (map.children) {
        nodes.concat(map.children);
        map.children.forEach(function (node) {
          nodes.concat(getNodesToRemove(node));
        });
      }
    }

    return nodes;
  }, []);
  var cleanUpFirstCharMap = react.useCallback(function (nodes) {
    var newMap = (0,esm_extends/* default */.Z)({}, firstCharMap.current);

    nodes.forEach(function (node) {
      if (newMap[node]) {
        delete newMap[node];
      }
    });
    firstCharMap.current = newMap;
  }, []);
  var removeNodeFromNodeMap = react.useCallback(function (id) {
    var nodes = getNodesToRemove(id);
    cleanUpFirstCharMap(nodes);

    var newMap = (0,esm_extends/* default */.Z)({}, nodeMap.current);

    nodes.forEach(function (node) {
      var map = newMap[node];

      if (map) {
        if (map.parent) {
          var parentMap = newMap[map.parent];

          if (parentMap && parentMap.children) {
            var parentChildren = parentMap.children.filter(function (c) {
              return c !== node;
            });
            newMap[map.parent] = (0,esm_extends/* default */.Z)({}, parentMap, {
              children: parentChildren
            });
          }
        }

        delete newMap[node];
      }
    });
    nodeMap.current = newMap;
    setFocusedNodeId(function (oldFocusedNodeId) {
      if (oldFocusedNodeId === id) {
        return null;
      }

      return oldFocusedNodeId;
    });
  }, [getNodesToRemove, cleanUpFirstCharMap]);

  var mapFirstChar = function mapFirstChar(id, firstChar) {
    firstCharMap.current[id] = firstChar;
  };

  var prevChildIds = react.useRef([]);

  var _React$useState3 = react.useState(false),
      childrenCalculated = _React$useState3[0],
      setChildrenCalculated = _React$useState3[1];

  react.useEffect(function () {
    var childIds = [];
    react.Children.forEach(children, function (child) {
      if ( /*#__PURE__*/react.isValidElement(child) && child.props.nodeId) {
        childIds.push(child.props.nodeId);
      }
    });

    if (arrayDiff(prevChildIds.current, childIds)) {
      nodeMap.current[-1] = {
        parent: null,
        children: childIds
      };
      childIds.forEach(function (id, index) {
        if (index === 0) {
          setTabbable(id);
        }
      });
      visibleNodes.current = nodeMap.current[-1].children;
      prevChildIds.current = childIds;
      setChildrenCalculated(true);
    }
  }, [children]);
  react.useEffect(function () {
    var buildVisible = function buildVisible(nodes) {
      var list = [];

      for (var i = 0; i < nodes.length; i += 1) {
        var item = nodes[i];
        list.push(item);
        var childs = nodeMap.current[item].children;

        if (isExpanded(item) && childs) {
          list = list.concat(buildVisible(childs));
        }
      }

      return list;
    };

    if (childrenCalculated) {
      visibleNodes.current = buildVisible(nodeMap.current[-1].children);
    }
  }, [expanded, childrenCalculated, isExpanded, children]);

  var noopSelection = function noopSelection() {
    return false;
  };

  return /*#__PURE__*/react.createElement(TreeView_TreeViewContext.Provider, {
    value: {
      icons: {
        defaultCollapseIcon: defaultCollapseIcon,
        defaultExpandIcon: defaultExpandIcon,
        defaultParentIcon: defaultParentIcon,
        defaultEndIcon: defaultEndIcon
      },
      focus: focus,
      focusFirstNode: focusFirstNode,
      focusLastNode: focusLastNode,
      focusNextNode: focusNextNode,
      focusPreviousNode: focusPreviousNode,
      focusByFirstCharacter: focusByFirstCharacter,
      expandAllSiblings: expandAllSiblings,
      toggleExpansion: toggleExpansion,
      isExpanded: isExpanded,
      isFocused: isFocused,
      isSelected: isSelected,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      selectNextNode: disableSelection ? noopSelection : selectNextNode,
      selectPreviousNode: disableSelection ? noopSelection : selectPreviousNode,
      rangeSelectToFirst: disableSelection ? noopSelection : rangeSelectToFirst,
      rangeSelectToLast: disableSelection ? noopSelection : rangeSelectToLast,
      selectAllNodes: disableSelection ? noopSelection : selectAllNodes,
      isTabbable: isTabbable,
      multiSelect: multiSelect,
      getParent: getParent,
      mapFirstChar: mapFirstChar,
      addNodeToNodeMap: addNodeToNodeMap,
      removeNodeFromNodeMap: removeNodeFromNodeMap
    }
  }, /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
    role: "tree",
    "aria-multiselectable": multiSelect,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other), children));
});
 false ? 0 : void 0;
/* harmony default export */ var TreeView_TreeView = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiTreeView'
})(TreeView));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(14632);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowRight.js
var ArrowRight = __webpack_require__(33629);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(95926);
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__(87993);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__(28417);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__(5738);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(39055);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(59355);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/TreeItem/TreeItem.js


/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */








var TreeItem_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      outline: 0,
      WebkitTapHighlightColor: 'transparent',
      '&:focus > $content $label': {
        backgroundColor: theme.palette.action.hover
      },
      '&$selected > $content $label': {
        backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      },
      '&$selected > $content $label:hover, &$selected:focus > $content $label': {
        backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element when expanded. */
    expanded: {},

    /* Pseudo-class applied to the root element when selected. */
    selected: {},

    /* Styles applied to the `role="group"` element. */
    group: {
      margin: 0,
      padding: 0,
      marginLeft: 17
    },

    /* Styles applied to the tree node content. */
    content: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },

    /* Styles applied to the tree node icon and collapse/expand icon. */
    iconContainer: {
      marginRight: 4,
      width: 15,
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      '& svg': {
        fontSize: 18
      }
    },

    /* Styles applied to the label element. */
    label: {
      width: '100%',
      paddingLeft: 4,
      position: 'relative',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

var isPrintableCharacter = function isPrintableCharacter(str) {
  return str && str.length === 1 && str.match(/\S/);
};

var TreeItem = /*#__PURE__*/react.forwardRef(function TreeItem(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      collapseIcon = props.collapseIcon,
      endIcon = props.endIcon,
      expandIcon = props.expandIcon,
      iconProp = props.icon,
      label = props.label,
      nodeId = props.nodeId,
      onClick = props.onClick,
      onLabelClick = props.onLabelClick,
      onIconClick = props.onIconClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse/* default */.Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "collapseIcon", "endIcon", "expandIcon", "icon", "label", "nodeId", "onClick", "onLabelClick", "onIconClick", "onFocus", "onKeyDown", "onMouseDown", "TransitionComponent", "TransitionProps"]);

  var _React$useContext = react.useContext(TreeView_TreeViewContext),
      contextIcons = _React$useContext.icons,
      focus = _React$useContext.focus,
      focusFirstNode = _React$useContext.focusFirstNode,
      focusLastNode = _React$useContext.focusLastNode,
      focusNextNode = _React$useContext.focusNextNode,
      focusPreviousNode = _React$useContext.focusPreviousNode,
      focusByFirstCharacter = _React$useContext.focusByFirstCharacter,
      selectNode = _React$useContext.selectNode,
      selectRange = _React$useContext.selectRange,
      selectNextNode = _React$useContext.selectNextNode,
      selectPreviousNode = _React$useContext.selectPreviousNode,
      rangeSelectToFirst = _React$useContext.rangeSelectToFirst,
      rangeSelectToLast = _React$useContext.rangeSelectToLast,
      selectAllNodes = _React$useContext.selectAllNodes,
      expandAllSiblings = _React$useContext.expandAllSiblings,
      toggleExpansion = _React$useContext.toggleExpansion,
      isExpanded = _React$useContext.isExpanded,
      isFocused = _React$useContext.isFocused,
      isSelected = _React$useContext.isSelected,
      isTabbable = _React$useContext.isTabbable,
      multiSelect = _React$useContext.multiSelect,
      getParent = _React$useContext.getParent,
      mapFirstChar = _React$useContext.mapFirstChar,
      addNodeToNodeMap = _React$useContext.addNodeToNodeMap,
      removeNodeFromNodeMap = _React$useContext.removeNodeFromNodeMap;

  var nodeRef = react.useRef(null);
  var contentRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(nodeRef, ref);
  var icon = iconProp;
  var expandable = Boolean(Array.isArray(children) ? children.length : children);
  var expanded = isExpanded ? isExpanded(nodeId) : false;
  var focused = isFocused ? isFocused(nodeId) : false;
  var tabbable = isTabbable ? isTabbable(nodeId) : false;
  var selected = isSelected ? isSelected(nodeId) : false;
  var icons = contextIcons || {};
  var theme = (0,useTheme/* default */.Z)();

  if (!icon) {
    if (expandable) {
      if (!expanded) {
        icon = expandIcon || icons.defaultExpandIcon;
      } else {
        icon = collapseIcon || icons.defaultCollapseIcon;
      }

      if (!icon) {
        icon = icons.defaultParentIcon;
      }
    } else {
      icon = endIcon || icons.defaultEndIcon;
    }
  }

  var handleClick = function handleClick(event) {
    if (!focused) {
      focus(nodeId);
    }

    var multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey); // If already expanded and trying to toggle selection don't close

    if (expandable && !event.defaultPrevented && !(multiple && isExpanded(nodeId))) {
      toggleExpansion(event, nodeId);
    }

    if (multiple) {
      if (event.shiftKey) {
        selectRange(event, {
          end: nodeId
        });
      } else {
        selectNode(event, nodeId, true);
      }
    } else {
      selectNode(event, nodeId);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }

    if (onMouseDown) {
      onMouseDown(event);
    }
  };

  var handleNextArrow = function handleNextArrow(event) {
    if (expandable) {
      if (expanded) {
        focusNextNode(nodeId);
      } else {
        toggleExpansion(event);
      }
    }

    return true;
  };

  var handlePreviousArrow = function handlePreviousArrow(event) {
    if (expanded) {
      toggleExpansion(event, nodeId);
      return true;
    }

    var parent = getParent(nodeId);

    if (parent) {
      focus(parent);
      return true;
    }

    return false;
  };

  var handleKeyDown = function handleKeyDown(event) {
    var flag = false;
    var key = event.key;

    if (event.altKey || event.currentTarget !== event.target) {
      return;
    }

    var ctrlPressed = event.ctrlKey || event.metaKey;

    switch (key) {
      case ' ':
        if (nodeRef.current === event.currentTarget) {
          if (multiSelect && event.shiftKey) {
            flag = selectRange(event, {
              end: nodeId
            });
          } else if (multiSelect) {
            flag = selectNode(event, nodeId, true);
          } else {
            flag = selectNode(event, nodeId);
          }
        }

        event.stopPropagation();
        break;

      case 'Enter':
        if (nodeRef.current === event.currentTarget && expandable) {
          toggleExpansion(event);
          flag = true;
        }

        event.stopPropagation();
        break;

      case 'ArrowDown':
        if (multiSelect && event.shiftKey) {
          selectNextNode(event, nodeId);
        }

        focusNextNode(nodeId);
        flag = true;
        break;

      case 'ArrowUp':
        if (multiSelect && event.shiftKey) {
          selectPreviousNode(event, nodeId);
        }

        focusPreviousNode(nodeId);
        flag = true;
        break;

      case 'ArrowRight':
        if (theme.direction === 'rtl') {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }

        break;

      case 'ArrowLeft':
        if (theme.direction === 'rtl') {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }

        break;

      case 'Home':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToFirst(event, nodeId);
        }

        focusFirstNode();
        flag = true;
        break;

      case 'End':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToLast(event, nodeId);
        }

        focusLastNode();
        flag = true;
        break;

      default:
        if (key === '*') {
          expandAllSiblings(event, nodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === 'a') {
          flag = selectAllNodes(event);
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(nodeId, key);
          flag = true;
        }

    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (!focused && event.currentTarget === event.target) {
      focus(nodeId);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  react.useEffect(function () {
    if (addNodeToNodeMap) {
      var childIds = [];
      react.Children.forEach(children, function (child) {
        if ( /*#__PURE__*/react.isValidElement(child) && child.props.nodeId) {
          childIds.push(child.props.nodeId);
        }
      });
      addNodeToNodeMap(nodeId, childIds);
    }
  }, [children, nodeId, addNodeToNodeMap]);
  react.useEffect(function () {
    if (removeNodeFromNodeMap) {
      return function () {
        removeNodeFromNodeMap(nodeId);
      };
    }

    return undefined;
  }, [nodeId, removeNodeFromNodeMap]);
  react.useEffect(function () {
    if (mapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
    }
  }, [mapFirstChar, nodeId, label]);
  react.useEffect(function () {
    if (focused) {
      nodeRef.current.focus();
    }
  }, [focused]);
  var ariaSelected;

  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    // single-selection trees unset aria-selected
    ariaSelected = true;
  }

  return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, expanded && classes.expanded, selected && classes.selected),
    role: "treeitem",
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    ref: handleRef,
    tabIndex: tabbable ? 0 : -1
  }, other), /*#__PURE__*/react.createElement("div", {
    className: classes.content,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    ref: contentRef
  }, /*#__PURE__*/react.createElement("div", {
    onClick: onIconClick,
    className: classes.iconContainer
  }, icon), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    onClick: onLabelClick,
    component: "div",
    className: classes.label
  }, label)), children && /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    unmountOnExit: true,
    className: classes.group,
    in: expanded,
    component: "ul",
    role: "group"
  }, TransitionProps), children));
});
 false ? 0 : void 0;
/* harmony default export */ var TreeItem_TreeItem = ((0,withStyles/* default */.Z)(TreeItem_styles, {
  name: 'MuiTreeItem'
})(TreeItem));
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(76544);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SignalCellularConnectedNoInternet0Bar.js
var SignalCellularConnectedNoInternet0Bar = __webpack_require__(21151);
;// CONCATENATED MODULE: ./src/components/ui/StyledTreeView.tsx

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name


 // tslint:disable-next-line: no-submodule-imports match-default-export-name


var useTreeItemStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
    root: {
      color: theme.palette.text.secondary,
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: "var(--tree-view-bg-color, " + theme.palette.grey[400] + ")",
        color: 'var(--tree-view-color)'
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent'
      }
    },
    content: {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular
      }
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(1)
      }
    },
    expanded: {},
    selected: {
      color: theme.palette.background.default
    },
    label: {
      fontWeight: 'inherit',
      color: 'inherit'
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0)
    },
    labelIcon: {
      marginRight: theme.spacing(0.5)
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1
    }
  });
});
function StyledTreeItem(props) {
  var classes = useTreeItemStyles();

  var labelText = props.labelText,
      kind = props.kind,
      icon = props.icon,
      labelInfo = props.labelInfo,
      color = props.color,
      bgColor = props.bgColor,
      checked = props.checked,
      setChecked = props.setChecked,
      actions = props.actions,
      nodeId = props.nodeId,
      alert = props.alert,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["labelText", "kind", "icon", "labelInfo", "color", "bgColor", "checked", "setChecked", "actions", "nodeId", "alert"]);

  var _useState = (0,react.useState)(checked),
      checkedState = _useState[0],
      setCheckedState = _useState[1];

  var handleChecked = function handleChecked(ev, c) {
    ev.stopPropagation();
    setChecked(c);
    setCheckedState(c);
  };

  return /*#__PURE__*/react.createElement(TreeItem_TreeItem, Object.assign({
    nodeId: nodeId,
    label: /*#__PURE__*/react.createElement("div", {
      className: classes.labelRoot
    }, setChecked && /*#__PURE__*/react.createElement(Switch/* default */.Z, {
      checked: checkedState,
      color: "primary",
      inputProps: {
        'aria-label': 'secondary checkbox'
      },
      onChange: handleChecked
    }), kind && /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
      kind: kind,
      className: classes.labelIcon
    }), icon, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "body2",
      className: classes.labelText
    }, labelText), alert && /*#__PURE__*/react.createElement(SignalCellularConnectedNoInternet0Bar/* default */.Z, null), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      color: "inherit"
    }, alert && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      component: "span"
    }, alert), labelInfo, actions)),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(58504);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
;// CONCATENATED MODULE: ./src/components/JDomTreeView.tsx


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name








 // tslint:disable-next-line: no-submodule-imports match-default-export-name





 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function DeviceTreeItem(props) {
  var device = props.device,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes,
      serviceFilter = props.serviceFilter,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["device", "checked", "setChecked", "checkboxes", "serviceFilter"]);

  var id = device.id;
  var name = (0,useDeviceName/* default */.Z)(device, true);
  var physical = (0,useChange/* default */.Z)(device, function (d) {
    return d.physical;
  });
  var kind = physical ? "device" : "virtualdevice";
  var lost = (0,useEventRaised/* default */.Z)([constants/* LOST */.XWw, constants/* FOUND */.a6y], device, function (dev) {
    return !!(dev !== null && dev !== void 0 && dev.lost);
  });
  var services = (0,useChange/* default */.Z)(device, function () {
    return device.services({
      mixins: false
    }).filter(function (srv) {
      return !serviceFilter || serviceFilter(srv);
    });
  });

  var _useMediaQueries = (0,useMediaQueries/* default */.Z)(),
      mobile = _useMediaQueries.mobile;

  var showActions = !mobile;
  var dropped = (0,useChange/* default */.Z)(device.qos, function (qos) {
    return qos.dropped;
  });
  var serviceNames = (0,utils/* ellipseJoin */.VA)(services.filter(function (service) {
    return service.serviceClass !== constants/* SRV_CTRL */.CRz && service.serviceClass !== constants/* SRV_LOGGER */.w9j;
  }).map(function (service) {
    return service.name;
  }), 18);
  var alert = lost ? "lost device..." : dropped > 2 ? dropped + " pkt lost" : undefined;
  var labelInfo = [dropped > 1 && dropped + " lost", serviceNames].filter(function (r) {
    return !!r;
  }).join(", ");

  var handleChecked = function handleChecked(c) {
    return setChecked(id, c);
  };

  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: name,
    labelInfo: labelInfo,
    alert: alert,
    kind: kind,
    checked: (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1,
    setChecked: checkboxes && checkboxes.indexOf("device") > -1 && setChecked && handleChecked,
    actions: showActions && /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
      device: device,
      showReset: true
    })
  }, /*#__PURE__*/react.createElement(AnnounceFlagsTreeItem, {
    device: device
  }), services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react.createElement(ServiceTreeItem, Object.assign({
      key: service.id,
      service: service,
      checked: checked,
      setChecked: setChecked,
      checkboxes: checkboxes
    }, other));
  }));
}

function AnnounceFlagsTreeItem(props) {
  var device = props.device;
  var announceFlags = device.announceFlags,
      id = device.id;
  var text = [announceFlags & constants/* ControlAnnounceFlags.IsClient */.P99.IsClient && "client", announceFlags & constants/* ControlAnnounceFlags.SupportsACK */.P99.SupportsACK && "acks", announceFlags & constants/* ControlAnnounceFlags.SupportsBroadcast */.P99.SupportsBroadcast && "broadcast", announceFlags & constants/* ControlAnnounceFlags.SupportsFrames */.P99.SupportsFrames && "frames", (announceFlags & constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade) === constants/* ControlAnnounceFlags.StatusLightMono */.P99.StatusLightMono && "mono status LED", (announceFlags & constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade) === constants/* ControlAnnounceFlags.StatusLightRgbNoFade */.P99.StatusLightRgbNoFade && "rgb no fade status LED", (announceFlags & constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade) === constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade && "rgb fade status LED"].filter(function (f) {
    return !!f;
  }).join(", ");
  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id + ":flags",
    labelText: text,
    labelInfo: "0x" + announceFlags.toString(16)
  });
}

function ServiceTreeItem(props) {
  var service = props.service,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes,
      registerFilter = props.registerFilter,
      eventFilter = props.eventFilter,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["service", "checked", "setChecked", "checkboxes", "registerFilter", "eventFilter"]);

  var specification = service.specification,
      mixins = service.mixins,
      isMixin = service.isMixin;
  var showSpecificationAction = false;
  var id = service.id;
  var open = (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1;
  var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
  var registers = packets === null || packets === void 0 ? void 0 : packets.filter(spec/* isRegister */.x5).map(function (info) {
    return service.register(info.identifier);
  }).filter(function (reg) {
    return !registerFilter || registerFilter(reg);
  }).sort(function (l, r) {
    return l.name.localeCompare(r.name);
  });
  var events = packets === null || packets === void 0 ? void 0 : packets.filter(spec/* isEvent */.cO).map(function (info) {
    return service.event(info.identifier);
  }).filter(function (ev) {
    return !eventFilter || eventFilter(ev);
  });

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(service.register(constants/* BaseReg.InstanceName */.vCn.InstanceName)),
      instanceName = _useRegisterUnpackedV[0];

  var readingRegister = service.readingRegister;
  var reading = (0,useRegisterValue/* useRegisterHumanValue */.e_)(readingRegister);
  var name = service.name + (instanceName ? " " + instanceName : "");

  var _useMediaQueries2 = (0,useMediaQueries/* default */.Z)(),
      mobile = _useMediaQueries2.mobile;

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setDrawerType = _useContext.setDrawerType;

  var handleSpecClick = function handleSpecClick() {
    console.log("spec click", {
      mobile: mobile
    });
    if (mobile) setDrawerType(AppContext/* DrawerType.None */.jw.None);
  };

  var handleChecked = function handleChecked(c) {
    return setChecked(id, c);
  };

  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: name,
    labelInfo: reading,
    kind: isMixin ? constants/* SERVICE_MIXIN_NODE_NAME */.mLn : constants/* SERVICE_NODE_NAME */.M_U,
    checked: open,
    setChecked: (checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.indexOf("service")) > -1 && setChecked && handleChecked,
    actions: showSpecificationAction ? /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      color: "inherit",
      to: "/services/" + specification.shortId + "/",
      "aria-label": "Open specification",
      onClick: handleSpecClick
    }, /*#__PURE__*/react.createElement(Launch/* default */.Z, {
      fontSize: "small"
    })) : undefined
  }, registers === null || registers === void 0 ? void 0 : registers.map(function (register) {
    return /*#__PURE__*/react.createElement(RegisterTreeItem, Object.assign({
      key: register.id,
      register: register,
      checked: checked,
      setChecked: setChecked,
      checkboxes: checkboxes
    }, other));
  }), events === null || events === void 0 ? void 0 : events.map(function (event) {
    return /*#__PURE__*/react.createElement(EventTreeItem, Object.assign({
      key: event.id,
      event: event,
      checked: checked,
      setChecked: setChecked,
      checkboxes: checkboxes
    }, other));
  }), mixins === null || mixins === void 0 ? void 0 : mixins.map(function (mixin) {
    return /*#__PURE__*/react.createElement(ServiceTreeItem, Object.assign({
      key: mixin.id,
      service: mixin,
      checked: checked,
      setChecked: setChecked,
      checkboxes: checkboxes
    }, other));
  }));
}

function RegisterTreeItem(props) {
  var register = props.register,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes;
  var specification = register.specification,
      id = register.id;

  var _useState = (0,react.useState)(register.lastGetAttempts),
      attempts = _useState[0],
      setAttempts = _useState[1];

  var optional = !!(specification !== null && specification !== void 0 && specification.optional);
  var failedGet = attempts > 2;
  var labelText = "" + ((specification === null || specification === void 0 ? void 0 : specification.name) || register.id) + (optional ? "?" : "");
  var humanValue = (0,useRegisterValue/* useRegisterHumanValue */.e_)(register, {
    visible: true
  });

  var handleClick = function handleClick() {
    return register.sendGetAsync();
  };

  (0,react.useEffect)(function () {
    return register === null || register === void 0 ? void 0 : register.subscribe(constants/* GET_ATTEMPT */.tDM, function () {
      setAttempts(register.lastGetAttempts);
    });
  }, [register]);

  var handleChecked = function handleChecked(c) {
    setChecked(id, c);
  }; // if register is optional and no data, hide


  if (optional && failedGet && humanValue === undefined) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: labelText,
    labelInfo: humanValue || attempts > 0 && "#" + attempts || "",
    kind: (specification === null || specification === void 0 ? void 0 : specification.kind) || constants/* REGISTER_NODE_NAME */.nJc,
    alert: failedGet && !optional && humanValue === undefined && "???",
    checked: (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1,
    onClick: handleClick,
    setChecked: (checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.indexOf("register")) > -1 && setChecked && handleChecked
  });
}

function EventTreeItem(props) {
  var event = props.event,
      checked = props.checked,
      setChecked = props.setChecked,
      checkboxes = props.checkboxes;
  var specification = event.specification,
      id = event.id;
  var count = (0,useEventCount/* default */.Z)(event);

  var handleChecked = function handleChecked(c) {
    setChecked(id, c);
  };

  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: (specification === null || specification === void 0 ? void 0 : specification.name) || event.id,
    labelInfo: (count || "") + "",
    kind: constants/* EVENT_NODE_NAME */.Yuh,
    checked: (checked === null || checked === void 0 ? void 0 : checked.indexOf(id)) > -1,
    setChecked: (checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.indexOf("event")) > -1 && setChecked && handleChecked
  });
}

var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
    root: {
      flexGrow: 1
    },
    margins: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5)
    }
  });
});
function JDomTreeView(props) {
  var defaultExpanded = props.defaultExpanded,
      defaultSelected = props.defaultSelected,
      defaultChecked = props.defaultChecked,
      onChecked = props.onChecked,
      onToggle = props.onToggle,
      onSelect = props.onSelect,
      checkboxes = props.checkboxes,
      dashboard = props.dashboard,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ["defaultExpanded", "defaultSelected", "defaultChecked", "onChecked", "onToggle", "onSelect", "checkboxes", "dashboard"]);

  var classes = useStyles();

  var _useState2 = (0,react.useState)(defaultExpanded || []),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = (0,react.useState)(defaultSelected || []),
      selected = _useState3[0],
      setSelected = _useState3[1];

  var _useState4 = (0,react.useState)(defaultChecked || []),
      checked = _useState4[0],
      setChecked = _useState4[1];

  var devices = (0,useDevices/* default */.Z)({
    ignoreSelf: true
  });

  var handleToggle = function handleToggle(event, nodeIds) {
    setExpanded(nodeIds);
    if (onToggle) onToggle(nodeIds);
  };

  var handleSelect = function handleSelect(event, nodeIds) {
    setSelected(nodeIds);
    if (onSelect) onSelect(nodeIds);
  };

  var handleChecked = function handleChecked(id, v) {
    var i = checked.indexOf(id);
    if (!v && i > -1) checked.splice(i, 1);else if (v && i < 0) checked.push(id);
    setChecked(checked);
    if (onChecked) onChecked(checked);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, null), /*#__PURE__*/react.createElement(TreeView_TreeView, {
    className: (0,clsx_m/* default */.Z)(classes.root, classes.margins),
    defaultCollapseIcon: /*#__PURE__*/react.createElement(ArrowDropDown/* default */.Z, null),
    defaultExpandIcon: /*#__PURE__*/react.createElement(ArrowRight/* default */.Z, null),
    defaultEndIcon: /*#__PURE__*/react.createElement("div", {
      style: {
        width: 12
      }
    }),
    expanded: expanded,
    selected: selected,
    onNodeToggle: handleToggle,
    onNodeSelect: handleSelect
  }, devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
    return /*#__PURE__*/react.createElement(DeviceTreeItem, Object.assign({
      key: device.id,
      device: device,
      checked: checked,
      setChecked: handleChecked,
      checkboxes: checkboxes,
      expanded: expanded,
      selected: selected,
      dashboard: dashboard
    }, other));
  })));
}

/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8266);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48432);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass,
      ignoreSelf: true
    });
  });
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: true
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_jacdac_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 5738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceName; }
/* harmony export */ });
function useDeviceName(device, includeShortId) {
  var name = device.friendlyName;
  var r = name;
  if (includeShortId && name && name !== device.shortId) r += " (" + device.shortId + ")";
  return r;
}

/***/ }),

/***/ 81888:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return function () {
    return mounted.current;
  };
}

/***/ }),

/***/ 63793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



/**
 * Mounts a service provider
 */

function useServiceProvider(device) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z),
      bus = _useContext.bus;

  var provider = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, function (b) {
    return device && b.findServiceProvider(device.deviceId);
  });
  return provider;
}

/***/ }),

/***/ 95926:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventCount; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);


function useEventCount(event) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((event === null || event === void 0 ? void 0 : event.count) || 0),
      count = _useState[0],
      setCount = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return event === null || event === void 0 ? void 0 : event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver, function () {
      setCount(event.count);
    });
  }, [event]);
  return count;
}

/***/ }),

/***/ 28417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventRaised; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useEventRaised(eventName, node, query) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      version = _useState[0],
      setVersion = _useState[1];

  var value = query ? query(node) : undefined;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return node === null || node === void 0 ? void 0 : node.subscribe(eventName, function () {
      setVersion(version + 1);
    });
  }, [node, version]);
  return value;
}

/***/ }),

/***/ 89196:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e_": function() { return /* binding */ useRegisterHumanValue; },
/* harmony export */   "Pf": function() { return /* binding */ useRegisterUnpackedValue; },
/* harmony export */   "I8": function() { return /* binding */ useRegisterBoolValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);


function useRegisterHumanValue(register, options) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(register === null || register === void 0 ? void 0 : register.humanValue),
      value = _useState[0],
      setValue = _useState[1];

  var _ref = options || {
    visible: true
  },
      visible = _ref.visible; // update value


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ, function () {
      setValue(register === null || register === void 0 ? void 0 : register.humanValue);
    }));
  }, [register, visible]);
  return value;
}
function useRegisterUnpackedValue(register, options) {
  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(register === null || register === void 0 ? void 0 : register.unpackedValue),
      value = _useState2[0],
      setValue = _useState2[1];

  var _ref2 = options || {
    visible: true
  },
      visible = _ref2.visible;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ, function () {
      setValue(register === null || register === void 0 ? void 0 : register.unpackedValue);
    }));
  }, [register, visible]);
  return value || [];
}
function useRegisterBoolValue(register, options) {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(register === null || register === void 0 ? void 0 : register.boolValue),
      value = _useState3[0],
      setValue = _useState3[1];

  var _ref3 = options || {
    visible: true
  },
      visible = _ref3.visible; // update value


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ, function () {
      setValue(register === null || register === void 0 ? void 0 : register.boolValue);
    }));
  }, [register, visible]);
  return value;
}

/***/ })

}]);
//# sourceMappingURL=8788-a1134c04c2bf17210a07.js.map