export function beginDrag(props) {
  const data = {
    list: props.list,
    listId: props.listId,
    listStyle: props.listStyle
  };

  props.dragBeginList(data);

  return data;
}

export function endDrag(props, monitor) {
  const { listId } = props;

  props.dragEndList({listId});
}

export function isDragging({ listId }, monitor) {
  const draggingListId = monitor.getItem().listId;

  return listId === draggingListId;
}
