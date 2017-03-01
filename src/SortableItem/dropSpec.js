import { findDOMNode } from 'react-dom';
import { width } from 'dom-helpers/query';

export function hover(props, monitor, component) {
  const item = monitor.getItem();
  const dragIndex = item.rowIndex;
  const dragListIndex = item.listIndex;
  const hoverIndex = props.rowIndex;
  const hoverListIndex = props.listIndex;

  // Hovering over the same item
  if (dragIndex === hoverIndex && dragListIndex === hoverListIndex) {
    return;
  }

  // Sometimes component may be null (probably is being unmounted?)
  if (!component) {
    console.warn(`null component for #${item.rowId}`);
    return;
  }

  // Determine rectangle on screen
  const node = findDOMNode(component);
  const hoverBoundingRect = node.getBoundingClientRect();

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
    item.rowIndex = hoverIndex;
    item.listIndex = hoverListIndex;
    item.containerWidth = width(node);

    props.moveRow(
      {rowIndex: dragIndex, listIndex: dragListIndex},
      {rowIndex: hoverIndex, listIndex: hoverListIndex}
    );
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
  item.containerWidth = width(node);

  props.moveRow(
    {rowIndex: dragIndex, listIndex: dragListIndex},
    {rowIndex: hoverIndex, listIndex: hoverListIndex}
  );
}

export function drop(props) {
  const { rowId, listId, rowIndex, listIndex } = props;

  props.dropRow({rowId, listId, rowIndex, listIndex});
}
