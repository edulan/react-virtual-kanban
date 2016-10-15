import update from 'react-addons-update';

function rotateRight(range, offset) {
  const length = range.length;

  return range.map((_, index, list) => list[(index + offset) % length]);
}

function rotateLeft(range, offset) {
  return rotateRight(range, range.length - Math.abs(offset % range.length));
}

function buildUpdateOperation(list, { from, to }) {
  const lower = Math.min(from, to);
  const upper = Math.max(from, to);
  const range = list.slice(lower, upper + 1);
  const rotated = to - from > 0 ? rotateRight(range, 1) : rotateLeft(range, 1);

  return [lower, rotated.length, ...rotated];
}

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
        buildUpdateOperation(lists[dragListIndex], {from: dragIndex, to: hoverIndex})
      ]
    }
  });
}
