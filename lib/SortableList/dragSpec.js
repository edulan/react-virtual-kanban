"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginDrag = beginDrag;
exports.isDragging = isDragging;
function beginDrag(props) {
  return {
    list: props.list,
    listId: props.listId,
    listIndex: props.listIndex,
    listStyle: props.listStyle
  };
}

function isDragging(_ref, monitor) {
  var listId = _ref.listId;

  var draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}