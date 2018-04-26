const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie euismod. Sed dignissim fringilla turpis, vitae sollicitudin urna aliquet id. Donec leo sapien, sagittis ac erat at, gravida cursus felis. Nunc tincidunt mauris eget leo bibendum efficitur.';

function generateRandom(count) {
  return Array.from({length: count}, (_, i) => {
    let name =  `${i}`
    
    return {
      id: i,
      name: i % 3 === 0 ? `${name} - ${lorem}` : name, // play with dynamic heights
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
