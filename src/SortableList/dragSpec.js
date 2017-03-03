export function beginDrag(props) {
  return {
    list: props.list,
    listId: props.listId,
    listIndex: props.listIndex,
    listStyle: props.listStyle
  };
}

export function isDragging({ listId }, monitor) {
  const draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}
