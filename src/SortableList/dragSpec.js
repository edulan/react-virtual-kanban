export function beginDrag(props) {
  return {
    listId: props.listId,
    listIndex: props.listIndex,
    listStyle: props.listStyle
  };
}

export function isDragging({ listId }, monitor) {
  const draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}
