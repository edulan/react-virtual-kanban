import { findDOMNode } from 'react-dom';

export function hover(props, monitor, component) {
  const item = monitor.getItem();
  const dragIndex = item.index;
  const dragListIndex = item.listIndex;
  const hoverIndex = props.index;
  const hoverListIndex = props.listIndex;

  if (dragIndex === hoverIndex && dragListIndex === hoverListIndex) {
    return;
  }

  // Determine rectangle on screen
  const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

  // Get vertical middle
  const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

  // Determine mouse position
  const clientOffset = monitor.getClientOffset();

  // Get pixels to the top
  const hoverClientY = clientOffset.y - hoverBoundingRect.top;

  // Dragging horizontaly between lists
  if (hoverBoundingRect.left < clientOffset.x &&
      clientOffset.x < hoverBoundingRect.right &&
      dragListIndex !== hoverListIndex) {
    props.moveRow({dragIndex, dragListIndex}, {hoverIndex, hoverListIndex});
    item.index = hoverIndex;
    item.listIndex = hoverListIndex;
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

  props.moveRow({dragIndex, dragListIndex}, {hoverIndex, hoverListIndex});

  item.index = hoverIndex;
  item.listIndex = hoverListIndex;
}

export function drop(props) {
  const rowId = props.rowId;
  const listIndex = props.listId;

  props.dropRow({rowId, listIndex});
}
