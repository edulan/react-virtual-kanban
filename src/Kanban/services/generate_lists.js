import Chance from 'chance';

const chance = new Chance();

function generateRandom(count) {
  return Array.from({length: count}, (_, i) => {
    const name = chance.sentence({words: Math.ceil(Math.random() * 8)});

    return {
      id: String(i + 1),
      name,
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

export function generateRandomWord() {
  return chance.word();
}
