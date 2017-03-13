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
  var dragListIndex = item.listIndex;
  var hoverListIndex = props.listIndex;

  if (dragListIndex === hoverListIndex) {
    return;
  }

  if (itemType === _types.LIST_TYPE) {
    item.listIndex = hoverListIndex;

    props.moveList({ listIndex: dragListIndex }, { listIndex: hoverListIndex });
    return;
  }

  if (itemType === _types.ROW_TYPE) {
    var dragIndex = item.rowIndex;
    var hoverIndex = 0;

    item.rowIndex = hoverIndex;
    item.listIndex = hoverListIndex;
    item.containerWidth = calculateContainerWidth(component) || item.containerWidth;

    props.moveRow({ rowIndex: dragIndex, listIndex: dragListIndex }, { rowIndex: hoverIndex, listIndex: hoverListIndex });
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
    return item.listIndex !== props.listIndex;
  }
}

function drop(props) {
  var listId = props.listId,
      listIndex = props.listIndex;


  props.dropList({ listId: listId, listIndex: listIndex });
}