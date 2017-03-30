'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGhost = exports.listStyle = exports.listId = exports.list = undefined;

var _react = require('react');

var _propTypes = require('../../propTypes');

var list = exports.list = _react.PropTypes.object.isRequired;
var listId = exports.listId = _propTypes.PropTypes.id.isRequired;
var listStyle = exports.listStyle = _react.PropTypes.object.isRequired;
var isGhost = exports.isGhost = _react.PropTypes.bool.isRequired;