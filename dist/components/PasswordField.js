"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));

var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PasswordField = _ref => {
  let {
    password = '',
    showPassword = false
  } = _ref;

  const [values, setValues] = _react.default.useState({
    // password: '',
    // showPassword: false,
    password,
    showPassword
  });

  const handleChange = prop => event => {
    console.log("event.target", event.target);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [prop]: event.target.value
    }));
  };

  const handleClickShowPassword = event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      showPassword: !values.showPassword
    }));
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    sx: {
      m: 1,
      width: '25ch'
    },
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_material.InputLabel, {
    htmlFor: "outlined-adornment-password"
  }, "Password"), /*#__PURE__*/_react.default.createElement(_material.OutlinedInput, {
    id: "outlined-adornment-password",
    type: values.showPassword ? 'text' : 'password',
    value: values.password,
    onChange: handleChange('password'),
    endAdornment: /*#__PURE__*/_react.default.createElement(_material.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword,
      edge: "end"
    }, values.showPassword ? /*#__PURE__*/_react.default.createElement(_VisibilityOff.default, null) : /*#__PURE__*/_react.default.createElement(_Visibility.default, null))),
    label: "Password"
  }));
}; // PasswordField.propTypes = {
//   password: PropTypes.string,
//   showPassword: PropTypes.bool
// };
// PasswordField.defaultProps = {
//   password: '',
//   showPassword: false
// };


var _default = PasswordField;
exports.default = _default;