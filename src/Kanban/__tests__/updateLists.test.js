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
    from: {listId: 1},
    to: {listId: 2}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('move item inside same list', () => {
  const updatedList = updateLists(lists, {
    from: {itemId: 1},
    to: {itemId: 2}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('move between lists', () => {
  const updatedList = updateLists(lists, {
    from: {itemId: 2},
    to: {itemId: 3}
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
    from: {itemId: 1},
    to: {listId: 2}
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
    from: {itemId: 3},
    to: {itemId: 2}
  });

  expect(JSON.stringify(updatedList)).toMatchSnapshot();
});

test('null move', () => {
  const updatedList = updateLists(lists, {
    from: {itemId: 1},
    to: {itemId: 1}
  });

  expect(updatedList).toMatchObject(lists);
});

test('lists immutability', () => {
  const updatedList = updateLists(lists, {
    from: {listId: 1},
    to: {listId: 2}
  });

  expect(updatedList).not.toBe(lists);
});

test('single list equality', () => {
  const updatedList = updateLists(lists, {
    from: {listId: 1},
    to: {listId: 2}
  });

  expect(updatedList[1]).toBe(lists[0]);
});

test('single item equality', () => {
  const updatedList = updateLists(lists, {
    from: {itemId: 1},
    to: {itemId: 2}
  });

  expect(updatedList[0][1]).toBe(lists[0][0]);
});
