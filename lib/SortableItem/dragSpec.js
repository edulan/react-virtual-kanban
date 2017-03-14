'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginDrag = beginDrag;
exports.endDrag = endDrag;
exports.isDragging = isDragging;

var _reactDom = require('react-dom');

var _query = require('dom-helpers/query');

function beginDrag(props, _, component) {
  var node = (0, _reactDom.findDOMNode)(component);
  var containerWidth = node ? (0, _query.width)(node) : 0;

  var data = {
    row: props.row,
    rowId: props.rowId,
    rowIndex: props.rowIndex,
    listIndex: props.listIndex,
    rowStyle: props.rowStyle,
    containerWidth: containerWidth
  };

  props.dragBeginRow(data);

  return data;
}

function endDrag(props, monitor) {
  var _monitor$getItem = monitor.getItem(),
      row = _monitor$getItem.row,
      rowId = _monitor$getItem.rowId,
      rowIndex = _monitor$getItem.rowIndex,
      listIndex = _monitor$getItem.listIndex;

  props.dragEndRow({ row: row, rowId: rowId, rowIndex: rowIndex, listIndex: listIndex });
}

function isDragging(_ref, monitor) {
  var rowId = _ref.rowId;

  var draggingRowId = monitor.getItem().rowId;

  return rowId === draggingRowId;
}