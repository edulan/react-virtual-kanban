import { findDOMNode } from 'react-dom';
import { width, querySelectorAll } from 'dom-helpers/query';

import { LIST_TYPE, ROW_TYPE } from '../types';

function calculateContainerWidth(component) {
  const innerScrollContainer = querySelectorAll(
    findDOMNode(component),
    '.ReactVirtualized__Grid__innerScrollContainer'
  )[0];

  if (!innerScrollContainer) return 0;

  return width(innerScrollContainer);
}

export function hover(props, monitor, component) {
  if (!monitor.isOver({shallow: true})) return;
  if (!monitor.canDrop()) return;

  const item = monitor.getItem();
  const itemType = monitor.getItemType();
  const dragListIndex = item.listIndex;
  const hoverListIndex = props.listIndex;

  if (dragListIndex === hoverListIndex) {
    return;
  }

  if (itemType === LIST_TYPE) {
    item.listIndex = hoverListIndex;

    props.moveList({listIndex: dragListIndex}, {listIndex: hoverListIndex});
    return;
  }

  if (itemType === ROW_TYPE) {
    const dragIndex = item.rowIndex;
    const hoverIndex = 0;

    item.rowIndex = hoverIndex;
    item.listIndex = hoverListIndex;
    item.containerWidth = calculateContainerWidth(component) || item.containerWidth;

    props.moveRow({rowIndex: dragIndex, listIndex: dragListIndex}, {rowIndex: hoverIndex, listIndex: hoverListIndex});
    return;
  }
}

export function canDrop(props, monitor) {
  const item = monitor.getItem();
  const itemType = monitor.getItemType();

  if (itemType === LIST_TYPE) {
    return true;
  }

  if (itemType === ROW_TYPE) {
    return item.listIndex !== props.listIndex;
  }
}

export function drop(props) {
  const { listId, listIndex } = props;

  props.dropList({listId, listIndex});
}
