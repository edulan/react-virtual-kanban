'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginDrag = beginDrag;
exports.isDragging = isDragging;

var _reactDom = require('react-dom');

var _query = require('dom-helpers/query');

function beginDrag(props, _, component) {
  var node = (0, _reactDom.findDOMNode)(component);
  var containerWidth = node ? (0, _query.width)(node) : 0;

  return {
    row: props.row,
    rowId: props.rowId,
    rowIndex: props.rowIndex,
    listIndex: props.listIndex,
    rowStyle: props.rowStyle,
    containerWidth: containerWidth
  };
}

function isDragging(_ref, monitor) {
  var rowId = _ref.rowId;

  var draggingRowId = monitor.getItem().rowId;

  return rowId === draggingRowId;
}