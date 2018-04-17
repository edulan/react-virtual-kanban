function generateRandom(count) {
  return Array.from({length: count}, (_, i) => {
    return {
      id: i,
      name: `${i}-dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it`,
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
