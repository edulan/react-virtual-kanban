export function beginDrag(props) {
  return {
    index: props.index,
    rowId: props.rowId,
    rowStyle: props.rowStyle,
    listIndex: props.listIndex,
  };
}

// TODO: Review
export function isDragging({ rowId }, monitor) {
   const draggingRowId = monitor.getItem().rowId;

   return rowId === draggingRowId;
}
