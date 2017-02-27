'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = exports.PropTypes = {
  id: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.symbol]),

  decorator: _react2.default.PropTypes.func
};