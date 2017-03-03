function generateRandom(count) {
  return Array.from({length: count}, (_, i) => {
    return {
      id: i,
      name: `${i}`,
      lastModified: Date.now(),
    };
  });
}

export function generateLists(count, rowsPerList) {
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
