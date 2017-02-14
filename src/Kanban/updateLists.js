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
  const { rowIndex: fromRowIndex, listIndex: fromListIndex } = from;
  const { rowIndex: toRowIndex, listIndex: toListIndex } = to;

  const fromList = lists[fromListIndex];
  const fromRow = fromList.rows[fromRowIndex];

  // Move lists
  if (fromListIndex !== toListIndex && fromRowIndex === void 0 && toRowIndex === void 0) {
    return update(lists, {
      $splice: [
        [fromListIndex, 1],
        [toListIndex, 0, fromList],
      ]
    });
  }

  // Move rows between different lists
  if (fromListIndex !== toListIndex) {
    //debugger;

    return update(lists, {
      // Remove row from source list
      [fromListIndex]: {
        rows: {
          $splice: [
            [fromRowIndex, 1],
          ]
        }
      },
      // Add row to target list
      [toListIndex]: {
        rows: {
          $splice: [
            [toRowIndex, 0, fromRow]
          ]
        }
      },
    });
  }

  // Move rows inside same list
  return update(lists, {
    [fromListIndex]: {
      rows: {
        $splice: [
          buildUpdateOperation(fromList.rows, {from: fromRowIndex, to: toRowIndex})
        ]
      }
    }
  });
}
