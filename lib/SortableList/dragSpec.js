"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginDrag = beginDrag;
exports.endDrag = endDrag;
exports.isDragging = isDragging;
function beginDrag(props) {
  var data = {
    list: props.list,
    listId: props.listId,
    listIndex: props.listIndex,
    listStyle: props.listStyle
  };

  props.dragBeginList(data);

  return data;
}

function endDrag(props, monitor) {
  var _monitor$getItem = monitor.getItem(),
      row = _monitor$getItem.row,
      rowId = _monitor$getItem.rowId,
      rowIndex = _monitor$getItem.rowIndex,
      listIndex = _monitor$getItem.listIndex;

  props.dragEndList({ row: row, rowId: rowId, rowIndex: rowIndex, listIndex: listIndex });
}

function isDragging(_ref, monitor) {
  var listId = _ref.listId;

  var draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}