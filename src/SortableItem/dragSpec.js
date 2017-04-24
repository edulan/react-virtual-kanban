import { findDOMNode } from 'react-dom';
import { width } from 'dom-helpers/query';

export function beginDrag(props, _, component) {
  const node = findDOMNode(component);
  const containerWidth = node ? width(node) : 0;

  return {
    row: props.row,
    rowId: props.rowId,
    rowStyle: props.rowStyle,
    containerWidth,
  };
}

/**
 * Determines whether current item is being dragged or not.
 *
 * This is the logic used to display the gaps (gray items) in the list.
 */
export function isDragging({ rowId }, monitor) {
   const draggingRowId = monitor.getItem().rowId;

   return rowId === draggingRowId;
}

export function endDrag(props, monitor) {
  const { listId } = props;
  const {
    row,
    rowId,
    rowIndex,
    listIndex,
  } = monitor.getItem();

  props.dragEndRow({ listId, row, rowId, rowIndex, listIndex });
}
