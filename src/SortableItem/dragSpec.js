import { findDOMNode } from 'react-dom';
import { width } from 'dom-helpers/query';

export function beginDrag(props, _, component) {
  const node = findDOMNode(component);
  const containerWidth = node ? width(node) : 0;

  return {
    rowId: props.rowId,
    rowIndex: props.rowIndex,
    listIndex: props.listIndex,
    rowStyle: props.rowStyle,
    containerWidth,
  };
}

export function isDragging({ rowId }, monitor) {
   const draggingRowId = monitor.getItem().rowId;

   return rowId === draggingRowId;
}
