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
    listStyle: props.listStyle
  };

  props.dragBeginList(data);

  return data;
}

function endDrag(props, monitor) {
  var listId = props.listId;


  props.dragEndList({ listId: listId });
}

function isDragging(_ref, monitor) {
  var listId = _ref.listId;

  var draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}