import update from 'react-addons-update';

export function updateLists(lists, { from, to }) {
  const { dragIndex, dragListIndex } = from;
  const { hoverIndex, hoverListIndex } = to;

  if (dragListIndex !== hoverListIndex) {
    return update(lists, {
      // Remove row from source list
      [dragListIndex]: {
        $splice: [
          [dragIndex, 1],
        ]
      },
      // Add row to target list
      [hoverListIndex]: {
        $splice: [
          [hoverIndex, 0, lists[dragListIndex][dragIndex]]
        ]
      },
    });
  }

  return update(lists, {
    [dragListIndex]: {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, lists[dragListIndex][dragIndex]]
      ]
    }
  });
}
