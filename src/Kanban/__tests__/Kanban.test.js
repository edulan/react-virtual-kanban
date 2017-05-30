import React from 'react';
import { DragDropContext } from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import { mount } from 'enzyme';

import Kanban from '../';
import SortableItem from '../../SortableItem';

function wrapInTestContext(DecoratedComponent) {
  class TestContextContainer extends React.Component {
    render() {
      return <DecoratedComponent {...this.props} />;
    }
  }

  return DragDropContext(TestBackend)(TestContextContainer);
}

const lists = [
  {
    id: 1,
    rows: [
      {id: 1, name: 'one'},
      {id: 2, name: 'two'},
      {id: 3, name: 'three'},
      {id: 4, name: 'four'}
    ]
  },
  {
    id: 2,
    rows: [
      {id: 5, name: 'five'},
      {id: 6, name: 'six'},
      {id: 7, name: 'seven'},
      {id: 8, name: 'eight'}
    ]
  },
  {
    id: 3,
    rows: [
      {id: 9, name: 'nine'},
      {id: 10, name: 'ten'},
      {id: 11, name: 'eleven'},
      {id: 12, name: 'twelve'}
    ]
  }
];

beforeAll(() => {
  // Polyfill for RAF
  window.requestAnimationFrame = function (...args) { window.setTimeout(...args) };
  window.cancelAnimationFrame = function (...args) { window.clearTimeout(...args) };
})

test('Kanban render', () => {
  const DecoratedKanban = wrapInTestContext(Kanban)

  const component = mount(
    <DecoratedKanban
      width={1440}
      height={900}
      listWidth={200}
    />
  );

  expect(component.find('.KanbanGrid').length).toBe(1);
});

describe('Kanban interaction', () => {
  let origGetBoundingClientRect;

  beforeEach(() => {
    origGetBoundingClientRect = Element.prototype.getBoundingClientRect

    // NOTE: `getBoundingClientRect` is not implemented in jsdom. We need to mock this
    // method in order for AutoSizer to work properly.
    Element.prototype.getBoundingClientRect = () => {
      return {left: 0, top: 0, right: 0, bottom: 0, x: 0, y: 0, width: 200, height: 600}
    }
  })

  afterEach(() => {
    Element.prototype.getBoundingClientRect = origGetBoundingClientRect
  })

  test('Kanban render with items', () => {
    const DecoratedKanban = wrapInTestContext(Kanban)

    const component = mount(
      <DecoratedKanban
        width={1440}
        height={900}
        listWidth={200}
        lists={lists}
      />
    );

    expect(component.find('SortableItem').length).toBe(12);
  });

  test('Kanban drag', () => {
    const DecoratedKanban = wrapInTestContext(Kanban)

    const component = mount(
      <DecoratedKanban
        width={1440}
        height={900}
        listWidth={200}
        lists={lists}
      />
    );

    const backend = component.get(0).getManager().getBackend();
    const souyritem = component.find(SortableItem).get(0)

    const sourceId = souyritem.getHandlerId();

    backend.simulateBeginDrag([sourceId]);

    expect(component.find('KanbanDragLayer').length).toBe(1);
  })

  test('Kanban hover', () => {
    const DecoratedKanban = wrapInTestContext(Kanban)

    const component = mount(
      <DecoratedKanban
        width={1440}
        height={900}
        listWidth={200}
        lists={lists}
      />
    );

    const backend = component.get(0).getManager().getBackend();
    const sourceItem = component.find(SortableItem).get(0)
    const targetItem = component.find(SortableItem).get(1)
    const sourceId = sourceItem.getHandlerId();
    const targetId = targetItem.decoratedComponentInstance.getHandlerId()

    backend.simulateBeginDrag([sourceId], {clientOffset: {x: 100, y: 100}, getSourceClientOffset: () => ({x: 100, y: 100})});
    backend.simulateHover([targetId]);

    expect(component.find('KanbanDragLayer').length).toBe(1);
  })

  test('Kanban onDragEndRow', () => {
    const DecoratedKanban = wrapInTestContext(Kanban)

    const onDragEndRow = jest.fn()
    const onDropRow = jest.fn()

    const component = mount(
      <DecoratedKanban
        width={1440}
        height={900}
        listWidth={200}
        lists={lists}
        onDragEndRow={onDragEndRow}
        onDropRow={onDropRow}
      />
    );

    const backend = component.get(0).getManager().getBackend();
    const sourceItem = component.find(SortableItem).get(0)
    const sourceId = sourceItem.getHandlerId();

    backend.simulateBeginDrag([sourceId], {clientOffset: {x: 9999, y: 9999}, getSourceClientOffset: () => ({x: 100, y: 100})});
    backend.simulateEndDrag();

    expect(onDragEndRow).toHaveBeenCalled();
    expect(onDropRow).not.toHaveBeenCalled();
  })
});
