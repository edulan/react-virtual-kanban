export function beginDrag(props) {
  return {
    row: props.row,
    index: props.index,
    listIndex: props.listIndex,
  };
}

// TODO: Review
export function isDragging({ row }, monitor) {
   const draggingRow = monitor.getItem().row;

   return row.id === draggingRow.id;
}
