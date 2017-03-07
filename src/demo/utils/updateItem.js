import update from 'react-addons-update';

export function updateItem(lists, listIndex, rowIndex, row) {
  return update(lists, {
    [listIndex]: {
      rows: {
        [rowIndex]: {
          $set: {...row, lastModified: Date.now()}
        }
      }
    }
  });
}
