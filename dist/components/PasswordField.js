"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _OutlinedInput = _interopRequireDefault(require("@mui/material/OutlinedInput"));

var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));

var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));

var _PasswordFieldStyle = _interopRequireDefault(require("./PasswordFieldStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import EyeEnabledIcon from '../../images/logo-a-eye-enabled.svg'
// import EyeDisabledIcon from '../../images/logo-a-eye-disabled.svg'
const PasswordField = _ref => {
  let {
    passwordLabel = 'Password',
    password = '',
    showPassword = false,
    onPasswordChange = () => {}
  } = _ref;
  const s = _PasswordFieldStyle.default; // const theme = createTheme();
  // console.log(`eyeEnabledIcon`, eyeEnabledIcon)

  const [values, setValues] = _react.default.useState({
    passwordLabel,
    password,
    showPassword,
    onPasswordChange
  });

  const handleChange = prop => event => {
    // console.log('changed')
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [prop]: event.target.value
    })); // setValues(prev => ({ ...prev, password: event.target.value }));

    onPasswordChange(event.target.value);
  };

  const handleClickShowPassword = () => {
    // console.log('clicked')
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      showPassword: !values.showPassword
    }));
  }; // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };


  _react.default.useEffect(() => setValues({
    passwordLabel,
    password,
    showPassword
  }), [passwordLabel, password, showPassword]);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    sx: s.formControl,
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    sx: s.inputLabel,
    htmlFor: "outlined-adornment-password"
  }, values.passwordLabel), /*#__PURE__*/_react.default.createElement(_OutlinedInput.default, {
    sx: s.outlinedInput,
    id: "outlined-adornment-password",
    type: values.showPassword ? 'text' : 'password',
    value: values.password,
    onChange: handleChange('password'),
    endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
      sx: s.inputAdornment,
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      sx: s.iconButton,
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword // onMouseDown={handleMouseDownPassword}
      ,
      edge: "end"
    }, values.showPassword ? /*#__PURE__*/_react.default.createElement(_VisibilityOff.default, {
      sx: s.visibilityIcon
    }) : /*#__PURE__*/_react.default.createElement(_Visibility.default, {
      sx: s.visibilityIcon
    }))) // label="Password"

  })));
};

var _default = PasswordField;
exports.default = _default;