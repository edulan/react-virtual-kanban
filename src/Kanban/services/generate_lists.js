function generateRows(count) {
  return Array.from({length: count}, (_, i) => {
    return {
      id: i + 1,
      name: `R${i + 1}`,
    };
  });
}

export function generateLists(count, rowsPerList) {
  return generateRows(count * rowsPerList).reduce((memo, row, i) => {
    const group = memo[i % count];

    if (!group) {
      memo[i % count] = [row];
    } else {
      group.push(row);
    }

    return memo;
  }, []);
}
