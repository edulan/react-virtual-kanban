function generateRandom(count) {
  if (count === 0 ) {
    return [];
  }

  return Array.from({length: count}, (_, i) => {
    return {
      id: id(),
    };
  });
}

const id = ((i = 0) => () => i++)();

export function generateLists(count, rowsPerList) {
  if (rowsPerList === 0) {
    return Array.from(
      {length: count},
      (_, i) => ({id: id(), rows: []}),
    );
  }

  let rows;

  console.time('rows generation');
  rows = generateRandom(count * rowsPerList);

  const lists = rows.reduce((memo, row, i) => {
    let group = memo[i % count];

    if (!group) {
      group = memo[i % count] = {id: i, rows: []};
    }

    group.rows.push(row);

    return memo;
  }, []);

  console.timeEnd('rows generation');

  return lists;
}
