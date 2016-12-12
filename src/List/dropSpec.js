import { LIST_TYPE, ROW_TYPE } from '../types';

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
    const dragListIndex = item.listIndex;

    props.moveList({dragListIndex}, {hoverListIndex});

    // TODO: Review
    item.listIndex = hoverListIndex;
    return;
  }

  if (itemType === ROW_TYPE) {
    const { index: dragIndex, listIndex: dragListIndex } = item;
    const hoverIndex = props.rows.length;

    props.moveRow({dragIndex, dragListIndex}, {hoverIndex, hoverListIndex});

    item.index = hoverIndex;
    item.listIndex = hoverListIndex;
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
  const listId = props.listId;

  props.dropList({listId});
}
