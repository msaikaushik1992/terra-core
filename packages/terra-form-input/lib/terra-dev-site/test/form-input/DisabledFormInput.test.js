'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../../../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledInput = function DisabledInput() {
  return _react2.default.createElement(_Input2.default, { 'aria-label': 'disabled form input', disabled: true, id: 'form-input-disabled' });
};

exports.default = DisabledInput;