import { LIST_TYPE, ROW_TYPE } from '../types';

export function hover(props, monitor) {
  if (!monitor.canDrop()) return;

  const item = monitor.getItem();
  const itemType = monitor.getItemType();

  if (itemType === LIST_TYPE) {
    const dragListIndex = item.listIndex;
    const hoverListIndex = props.listIndex;

    props.moveList({dragListIndex}, {hoverListIndex});

    // TODO: Review
    item.listIndex = hoverListIndex;
    return;
  }

  if (itemType === ROW_TYPE) {
    const { index: dragIndex, listIndex: dragListIndex } = item;
    const hoverIndex = 0;
    const hoverListIndex = props.listIndex;

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
    return item.listIndex !== props.listIndex;
  }

  if (itemType === ROW_TYPE) {
    return props.rows.length === 0;
  }
}
