import { findDOMNode } from 'react-dom';

export function hover(props, monitor, component) {
  const { index: dragIndex, listIndex: dragListIndex } = monitor.getItem();
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
    monitor.getItem().index = hoverIndex;
    monitor.getItem().listIndex = hoverListIndex;
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

  monitor.getItem().index = hoverIndex;
  monitor.getItem().listIndex = hoverListIndex;
}
