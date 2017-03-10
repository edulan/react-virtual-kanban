'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = hover;
exports.canDrop = canDrop;
exports.drop = drop;

var _reactDom = require('react-dom');

var _query = require('dom-helpers/query');

function hover(props, monitor, component) {
  var item = monitor.getItem();
  var dragIndex = item.rowIndex;
  var dragListIndex = item.listIndex;
  var hoverIndex = props.rowIndex;
  var hoverListIndex = props.listIndex;

  // Hovering over the same item
  if (dragIndex === hoverIndex && dragListIndex === hoverListIndex) {
    return;
  }

  // Sometimes component may be null (probably is being unmounted?)
  if (!component) {
    return;
  }

  // Determine rectangle on screen
  var node = (0, _reactDom.findDOMNode)(component);
  var hoverBoundingRect = node.getBoundingClientRect();

  // Get vertical middle
  var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

  // Determine mouse position
  var clientOffset = monitor.getClientOffset();

  // Get pixels to the top
  var hoverClientY = clientOffset.y - hoverBoundingRect.top;

  // Dragging horizontaly between lists
  if (hoverBoundingRect.left < clientOffset.x && clientOffset.x < hoverBoundingRect.right && dragListIndex !== hoverListIndex) {
    item.rowIndex = hoverIndex;
    item.listIndex = hoverListIndex;
    item.containerWidth = (0, _query.width)(node);

    props.moveRow({ rowIndex: dragIndex, listIndex: dragListIndex }, { rowIndex: hoverIndex, listIndex: hoverListIndex });
    return;
  }

  // Dragging downwards
  if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    return;
  }

  // Dragging upwards
  if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    return;
  }

  item.rowIndex = hoverIndex;
  item.listIndex = hoverListIndex;
  item.containerWidth = (0, _query.width)(node);

  props.moveRow({ rowIndex: dragIndex, listIndex: dragListIndex }, { rowIndex: hoverIndex, listIndex: hoverListIndex });
}

function canDrop(props, monitor) {
  var item = monitor.getItem();

  return item.rowId === props.rowId;
}

function drop(props) {
  var rowId = props.rowId,
      listId = props.listId,
      rowIndex = props.rowIndex,
      listIndex = props.listIndex;


  props.dropRow({ rowId: rowId, listId: listId, rowIndex: rowIndex, listIndex: listIndex });
}