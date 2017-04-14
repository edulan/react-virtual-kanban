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

export function findListIndex(lists, listId) {
  return lists.findIndex(({ id }) => id === listId);
}

export function findItemIndex(lists, itemId) {
  let index = -1;

  lists.forEach(({ rows }) => {
    if (index !== -1) return;
    index = rows.findIndex(({ id }) => id === itemId);
  });

  return index;
}

export function findItemListIndex(lists, itemId) {
  let index = -1;

  lists.forEach(({ rows }, i) => {
    if (index !== -1) return;

    if (rows.some(({ id }) => id === itemId)) {
      index = i;
    }
  });

  return index;
}

export function findItemListId(lists, itemId) {
  const list = lists.find(({ rows }) => {
    return rows.some(({ id }) => id === itemId);
  });

  return list && list.id;
}

function moveLists(lists, { fromId, toId }) {
  const fromIndex = findListIndex(lists, fromId);
  const toIndex = findListIndex(lists, toId);

  // Sanity checks
  if (fromIndex === -1 || toIndex === -1) {
    console.warn(`List not in bounds`);
    return lists;
  }

  const fromList = lists[fromIndex];

  if (!fromList) {
    console.warn(`List is not an object`);
    return lists;
  }

  return update(lists, {
    $splice: [
      [fromIndex, 1],
      [toIndex, 0, fromList],
    ]
  });
}

function moveItems(lists, { fromId, toId }) {
  const fromListIndex = findItemListIndex(lists, fromId);
  const toListIndex = findItemListIndex(lists, toId);
  const fromIndex = findItemIndex(lists, fromId);
  const toIndex = findItemIndex(lists, toId);

  // Sanity checks
  if (fromListIndex === -1) {
    console.warn(`List not in bounds`);
    return lists;
  }

  if (fromIndex === -1 || toIndex === -1) {
    console.warn(`Item not in bounds`);
    return lists;
  }

  const fromList = lists[fromListIndex];

  if (fromListIndex === toListIndex) {
    return update(lists, {
      [fromListIndex]: {
        rows: {
          $splice: [
            buildUpdateOperation(fromList.rows, {from: fromIndex, to: toIndex})
          ]
        }
      }
    });
  }

  const fromItem = fromList.rows[fromIndex];

  return update(lists, {
    // Remove item from source list
    [fromListIndex]: {
      rows: {
        $splice: [
          [fromIndex, 1],
        ]
      }
    },
    // Add item to target list
    [toListIndex]: {
      rows: {
        $splice: [
          [toIndex, 0, fromItem]
        ]
      }
    },
  });
}

function moveItemToList(lists, { fromId, toId }) {
  const fromIndex = findItemIndex(lists, fromId);
  const fromListIndex = findItemListIndex(lists, fromId);
  const toListIndex = findListIndex(lists, toId);

  if (fromIndex === -1) {
    console.warn(`Item not in bounds`);
    return lists;
  }

  const fromList = lists[fromListIndex];
  const toList = lists[toListIndex];

  if (!toList) {
    console.warn(`List is not an object`);
    return lists;
  }

  // Only move when list is empty
  if (toList.rows.length > 0) {
    return lists;
  }

  const fromItem = fromList.rows[fromIndex];

  return update(lists, {
    // Remove item from source list
    [fromListIndex]: {
      rows: {
        $splice: [
          [fromIndex, 1],
        ]
      }
    },
    // Add item to target list
    [toListIndex]: {
      rows: {
        $push: [
          fromItem
        ]
      }
    },
  });
}

export function updateLists(lists, { from, to }) {
  console.log('updatetLists');

  const { itemId: fromItemId, listId: fromListId } = from;
  const { itemId: toItemId, listId: toListId } = to;

  // Deprecation checks
  if (from.listIndex || from.rowIndex || to.listIndex || to.rowIndex) {
    console.warn(`Deprecated listIndex and rowIndex param. Use listId or itemId`);
    return lists;
  }

  // Move lists
  if (fromListId !== toListId && fromItemId === void 0 && toItemId === void 0) {
    return moveLists(lists, { fromId: fromListId, toId: toListId });
  }

  // Move item inside same list
  if (fromListId === toListId && fromItemId !== void 0 && toItemId !== void 0) {
    return moveItems(lists, { fromId: fromItemId, toId: toItemId });
  }

  // Move item to a different list
  if (fromListId === void 0 && toListId !== void 0 && fromItemId !== void 0 && toItemId === void 0) {
    return moveItemToList(lists, { fromId: fromItemId, toId: toListId });
  }

  return lists;
}
