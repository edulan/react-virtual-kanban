'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGhost = exports.containerWidth = exports.rowStyle = exports.rowId = exports.row = undefined;

var _react = require('react');

var _propTypes = require('../../propTypes');

var row = exports.row = _react.PropTypes.object.isRequired;
var rowId = exports.rowId = _propTypes.PropTypes.id.isRequired;
var rowStyle = exports.rowStyle = _react.PropTypes.object.isRequired;
var containerWidth = exports.containerWidth = _react.PropTypes.number.isRequired;
var isGhost = exports.isGhost = _react.PropTypes.bool.isRequired;