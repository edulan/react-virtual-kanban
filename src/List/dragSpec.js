export function beginDrag(props) {
  return {
    listId: props.listId,
    listIndex: props.listIndex,
  };
}

export function isDragging({ listId }, monitor) {
  const draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}
