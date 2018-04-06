'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDropTarget = exports.connectDragSource = exports.isDragging = exports.children = exports.rows = exports.listStyle = exports.listId = exports.list = undefined;

var _react = require('react');

var _propTypes = require('../../propTypes');

var list = exports.list = _react.PropTypes.object.isRequired;
var listId = exports.listId = _propTypes.PropTypes.id.isRequired;
var listStyle = exports.listStyle = _react.PropTypes.object.isRequired;
var rows = exports.rows = (0, _propTypes.deprecate)(_react.PropTypes.array, '`rows` is deprecated. Use `list.rows` instead');
var children = exports.children = _react.PropTypes.node;
var isDragging = exports.isDragging = _react.PropTypes.bool.isRequired;
var connectDragSource = exports.connectDragSource = _react.PropTypes.func.isRequired;
var connectDropTarget = exports.connectDropTarget = _react.PropTypes.func.isRequired;