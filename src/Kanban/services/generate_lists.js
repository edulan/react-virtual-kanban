import Chance from 'chance';

function generateRandom(count) {
  const chance = new Chance();

  return Array.from({length: count}, (_, i) => {
    const name = chance.sentence({words: Math.ceil(Math.random() * 8)});
    const realtime = Math.ceil(Math.random() * 5) === 1;

    return {
      id: String(i + 1),
      name,
      realtime,
    };
  });
}

export function generateLists(count, rowsPerList) {
  let rows;

  console.time('rows generation');
  rows = generateRandom(count * rowsPerList);
  console.timeEnd('rows generation');

  return rows.reduce((memo, row, i) => {
    const group = memo[i % count];

    if (!group) {
      memo[i % count] = [row];
    } else {
      group.push(row);
    }

    return memo;
  }, []);
}
