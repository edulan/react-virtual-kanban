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
  var dragItemId = item.rowId;
  var hoverItemId = props.rowId,
      findItemIndex = props.findItemIndex;

  // Hovering over the same item

  if (dragItemId === hoverItemId) {
    return;
  }

  // Sometimes component may be null when it's been unmounted
  if (!component) {
    return;
  }

  var dragItemIndex = findItemIndex(dragItemId);
  var hoverItemIndex = findItemIndex(hoverItemId);

  // In order to avoid swap flickering when dragging element is smaller than
  // dropping one, we check whether dropping middle has been reached or not.

  // Determine rectangle on screen
  var node = (0, _reactDom.findDOMNode)(component);
  var hoverBoundingRect = node.getBoundingClientRect();

  // Get vertical middle
  var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

  // Determine mouse position
  var clientOffset = monitor.getClientOffset();

  // Get pixels to the top
  var hoverClientY = clientOffset.y - hoverBoundingRect.top;

  // Dragging downwards
  if (dragItemIndex < hoverItemIndex && hoverClientY < hoverMiddleY) {
    return;
  }

  // Dragging upwards
  if (dragItemIndex > hoverItemIndex && hoverClientY > hoverMiddleY) {
    return;
  }

  item.containerWidth = (0, _query.width)(node);

  props.moveRow({ itemId: dragItemId }, { itemId: hoverItemId });
}

function canDrop(props, monitor) {
  var item = monitor.getItem();

  return item.rowId === props.rowId;
}

function drop(props) {
  var itemId = props.rowId;


  props.dropRow({ itemId: itemId });
}