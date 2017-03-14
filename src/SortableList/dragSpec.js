export function beginDrag(props) {
  const data = {
    list: props.list,
    listId: props.listId,
    listIndex: props.listIndex,
    listStyle: props.listStyle
  };

  props.dragBeginList(data);

  return data;
}

export function endDrag(props, monitor) {
  const {
    row,
    rowId,
    rowIndex,
    listIndex,
  } = monitor.getItem();

  props.dragEndList({ row, rowId, rowIndex, listIndex });
}

export function isDragging({ listId }, monitor) {
  const draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}
