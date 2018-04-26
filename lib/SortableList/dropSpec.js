'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = hover;
exports.canDrop = canDrop;
exports.drop = drop;

var _reactDom = require('react-dom');

var _query = require('dom-helpers/query');

var _types = require('../types');

function calculateContainerWidth(component) {
  var innerScrollContainer = (0, _query.querySelectorAll)((0, _reactDom.findDOMNode)(component), '.ReactVirtualized__Grid__innerScrollContainer')[0];

  if (!innerScrollContainer) return 0;

  return (0, _query.width)(innerScrollContainer);
}

function hover(props, monitor, component) {
  if (!monitor.isOver({ shallow: true })) return;
  if (!monitor.canDrop()) return;

  var item = monitor.getItem();
  var itemType = monitor.getItemType();
  var dragListId = item.listId;
  var hoverListId = props.listId;


  if (dragListId === hoverListId) {
    return;
  }

  if (itemType === _types.LIST_TYPE) {
    props.moveList({ listId: dragListId }, { listId: hoverListId });
    return;
  }

  if (itemType === _types.ROW_TYPE) {
    var dragItemId = item.rowId;

    item.containerWidth = calculateContainerWidth(component) || item.containerWidth;

    props.moveRow({ itemId: dragItemId }, { listId: hoverListId });
    return;
  }
}

function canDrop(props, monitor) {
  var item = monitor.getItem();
  var itemType = monitor.getItemType();

  if (itemType === _types.LIST_TYPE) {
    return true;
  }

  if (itemType === _types.ROW_TYPE) {
    return item.listId !== props.listId;
  }
}

function drop(props, monitor) {
  if (!monitor.isOver({ shallow: true })) return;

  var listId = props.listId;


  props.dropList({ listId: listId });
}