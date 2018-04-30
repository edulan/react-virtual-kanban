'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dndDisabled = exports.scrollToAlignment = exports.scrollToCell = exports.overscanRowCount = exports.overscanListCount = exports.onDragEndRow = exports.onDropList = exports.onDropRow = exports.onMoveList = exports.onMoveRow = exports.listPreviewComponent = exports.itemPreviewComponent = exports.itemComponent = exports.listComponent = exports.height = exports.listWidth = exports.width = exports.lists = undefined;

var _react = require('react');

var lists = exports.lists = _react.PropTypes.array;
var width = exports.width = _react.PropTypes.number;
var listWidth = exports.listWidth = _react.PropTypes.number;
var height = exports.height = _react.PropTypes.number;
var listComponent = exports.listComponent = _react.PropTypes.func;
var itemComponent = exports.itemComponent = _react.PropTypes.func;
var itemPreviewComponent = exports.itemPreviewComponent = _react.PropTypes.func;
var listPreviewComponent = exports.listPreviewComponent = _react.PropTypes.func;
var onMoveRow = exports.onMoveRow = _react.PropTypes.func;
var onMoveList = exports.onMoveList = _react.PropTypes.func;
var onDropRow = exports.onDropRow = _react.PropTypes.func;
var onDropList = exports.onDropList = _react.PropTypes.func;
var onDragEndRow = exports.onDragEndRow = _react.PropTypes.func;
var overscanListCount = exports.overscanListCount = _react.PropTypes.number;
var overscanRowCount = exports.overscanRowCount = _react.PropTypes.number;
var scrollToCell = exports.scrollToCell = _react.PropTypes.shape({
  columnIndex: _react.PropTypes.number,
  rowIndex: _react.PropTypes.number
}).isRequired;
var scrollToAlignment = exports.scrollToAlignment = _react.PropTypes.string;
var dndDisabled = exports.dndDisabled = _react.PropTypes.bool;