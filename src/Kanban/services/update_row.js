import update from 'react-addons-update';

export function updateRow(lists, listIndex, rowIndex, row) {
  return update(lists, {
    [listIndex]: {
      [rowIndex]: {
        $set: row
      }
    }
  });
}
