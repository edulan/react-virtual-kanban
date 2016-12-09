import Chance from 'chance';

function generateRandom(count) {
  const chance = new Chance();

  return Array.from({length: count}, (_, i) => {
    const name = chance.sentence({words: Math.ceil(Math.random() * 8)});

    return {
      id: `r${i}`,
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
      group = memo[i % count] = {id: `l${i}`, rows: []};
    }

    group.rows.push(row);

    return memo;
  }, []);

  console.timeEnd('rows generation');

  return lists;
}
