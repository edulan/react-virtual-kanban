import { updateLists } from '../updateLists';

const lists = [
  {
    id: 1,
    rows: [
      {id: 1},
      {id: 2}
    ]
  },
  {
    id: 2,
    rows: [
      {id: 3},
      {id: 4}
    ]
  }
];

test('move lists', () => {
  const updatedList = updateLists(lists, {
    from: {listIndex: 0},
    to: {listIndex: 1}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('move item inside same list', () => {
  const updatedList = updateLists(lists, {
    from: {listIndex: 0, rowIndex: 0},
    to: {listIndex: 0, rowIndex: 1}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('move between lists', () => {
  const updatedList = updateLists(lists, {
    from: {listIndex: 0, rowIndex: 1},
    to: {listIndex: 1, rowIndex: 0}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('move item to an empty list', () => {
  const otherLists = [
    {
      id: 1,
      rows: [
        {id: 1},
        {id: 2}
      ]
    },
    {
      id: 2,
      rows: []
    }
  ];

  const updatedList = updateLists(otherLists, {
    from: {listIndex: 0, rowIndex: 0},
    to: {listIndex: 1, rowIndex: 0}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('move item from a list with a single element', () => {
  const otherLists = [
    {
      id: 1,
      rows: [
        {id: 1},
        {id: 2}
      ]
    },
    {
      id: 2,
      rows: [
        {id: 3}
      ]
    }
  ];

  const updatedList = updateLists(otherLists, {
    from: {listIndex: 1, rowIndex: 0},
    to: {listIndex: 0, rowIndex: 2}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('null move', () => {
  const updatedList = updateLists(lists, {
    from: {listIndex: 0, rowIndex: 0},
    to: {listIndex: 0, rowIndex: 0}
  });

  expect(updatedList).toMatchObject(lists);
});

test('lists immutability', () => {
  const updatedList = updateLists(lists, {
    from: {listIndex: 0, rowIndex: 0},
    to: {listIndex: 0, rowIndex: 1}
  });

  expect(updatedList).not.toBe(lists);
});

test('single list equality', () => {
  const updatedList = updateLists(lists, {
    from: {listIndex: 0},
    to: {listIndex: 1}
  });

  expect(updatedList[1]).toBe(lists[0]);
});

test('single item equality', () => {
  const updatedList = updateLists(lists, {
    from: {listIndex: 0, rowIndex: 0},
    to: {listIndex: 0, rowIndex: 1}
  });

  expect(updatedList[0][1]).toBe(lists[0][0]);
});
