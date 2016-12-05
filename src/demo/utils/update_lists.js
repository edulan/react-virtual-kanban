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
  const { dragIndex = -1, dragListIndex } = from;
  const { hoverIndex = -1, hoverListIndex } = to;

  // Move lists
  if (dragListIndex !== hoverListIndex && dragIndex === -1 && hoverIndex === -1) {
    return update(lists, {
      $splice: [
        [dragListIndex, 1],
        [hoverListIndex, 0, lists[dragListIndex]],
      ]
    });
  }

  // Move rows between different lists
  if (dragListIndex !== hoverListIndex) {
    return update(lists, {
      // Remove row from source list
      [dragListIndex]: {
        rows: {
          $splice: [
            [dragIndex, 1],
          ]
        }
      },
      // Add row to target list
      [hoverListIndex]: {
        rows: {
          $splice: [
            [hoverIndex, 0, lists[dragListIndex].rows[dragIndex]]
          ]
        }
      },
    });
  }

  // Move rows inside same list
  return update(lists, {
    [dragListIndex]: {
      rows: {
        $splice: [
          buildUpdateOperation(lists[dragListIndex].rows, {from: dragIndex, to: hoverIndex})
        ]
      }
    }
  });
}
