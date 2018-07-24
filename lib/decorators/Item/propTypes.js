'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDropTarget = exports.connectDragSource = exports.rowStyle = exports.isDragging = exports.listId = exports.rowId = exports.row = undefined;

var _react = require('react');

var _propTypes = require('../../propTypes');

var row = exports.row = _react.PropTypes.object.isRequired;
var rowId = exports.rowId = _propTypes.PropTypes.id.isRequired;
var listId = exports.listId = _propTypes.PropTypes.id.isRequired;
var isDragging = exports.isDragging = _react.PropTypes.bool.isRequired;
var rowStyle = exports.rowStyle = _react.PropTypes.object.isRequired;
var connectDragSource = exports.connectDragSource = _react.PropTypes.func.isRequired;
var connectDropTarget = exports.connectDropTarget = _react.PropTypes.func.isRequired;