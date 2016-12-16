export function beginDrag(props) {
  return {
    rowId: props.rowId,
    rowIndex: props.rowIndex,
    listIndex: props.listIndex,
    rowStyle: props.rowStyle,
  };
}

export function isDragging({ rowId }, monitor) {
   const draggingRowId = monitor.getItem().rowId;

   return rowId === draggingRowId;
}
