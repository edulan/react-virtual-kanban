'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginDrag = beginDrag;
exports.endDrag = endDrag;
exports.isDragging = isDragging;
exports.canDrag = canDrag;

var _reactDom = require('react-dom');

var _query = require('dom-helpers/query');

function beginDrag(props, _, component) {
  var node = (0, _reactDom.findDOMNode)(component);
  var containerWidth = node ? (0, _query.width)(node) : 0;

  var data = {
    lists: props.lists,
    row: props.row,
    rowId: props.rowId,
    style: props.style,
    containerWidth: containerWidth
  };

  props.dragBeginRow(data);

  return data;
}

function endDrag(props, monitor) {
  var itemId = props.rowId;


  props.dragEndRow({ itemId: itemId });
}

/**
 * Determines whether current item is being dragged or not.
 *
 * This is the logic used to display the gaps (gray items) in the list.
 */
function isDragging(_ref, monitor) {
  var rowId = _ref.rowId;

  var draggingRowId = monitor.getItem().rowId;

  return rowId === draggingRowId;
}

function canDrag(props, monitor) {
  return !props.dndDisabled;
}