"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const PasswordFieldStyle = {
  formControl: {},
  inputLabel: {
    color: 'rgba(0, 56, 93, 0.5)',
    transform: 'translate(16px, 13.5px) scale(1)',
    '&.Mui-focused, &.MuiFormLabel-filled': {
      // transform: 'translate(16px, -7.5px) scale(0.75)',
      transform: 'translate(16px, 4px) scale(0.75)'
    }
  },
  outlinedInput: () => ({
    // height: 50,
    paddingRight: '8px',
    borderRadius: 2,
    color: 'rgba(0, 56, 93, 0.8)',
    '.MuiOutlinedInput-input': {
      position: 'relative',
      top: 4,
      paddingTop: '13.5px',
      paddingBottom: '13.5px',
      paddingLeft: '16px'
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: '1px solid rgba(0, 56, 93, 0.1)'
    }
  }),
  inputAdornment: {
    marginRight: '8px'
  },
  iconButton: {
    marginRight: '-8px'
  },
  visibilityIcon: {
    width: '16px',
    height: '16px',
    fill: 'rgba(0, 56, 93, 0.5)',
    color: 'rgba(0, 56, 93, 0.5)'
  }
};
var _default = PasswordFieldStyle;
exports.default = _default;