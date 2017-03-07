import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';
import decorateComponentWithProps from 'decorate-component-with-props';

import { VirtualKanban, updateLists } from '../';
import { updateItem } from './utils/updateItem';
import Item from './Item';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: props.getLists(),
    };

    this.updateItem = this.updateItem.bind(this);
    this.onMoveRow = this.onMoveRow.bind(this);
    this.onMoveList = this.onMoveList.bind(this);

    this.decoratedItem = decorateComponentWithProps(
      Item,
      {updateItem: this.updateItem}
    );
  }

  updateItem(rowIndex, listIndex) {
    this.setState((prevState) => {
      const prevRow = prevState.lists[listIndex].rows[rowIndex];
      const lists = updateItem(
        prevState.lists,
        listIndex,
        rowIndex,
        {...prevRow, name: `${prevRow.name} ${prevRow.name}`}
      );

      return {lists};
    });
  }

  onMoveRow(from, to) {
    this.setState(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
    );
  }

  onMoveList(from, to) {
    this.setState(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
    );
  }

  render() {
    return (
      <div className='KanbanWrapper'>
        <AutoSizer>
          {({ width, height }) => (
            <VirtualKanban
              lists={this.state.lists}
              width={width}
              height={height}
              listWidth={200}
              itemComponent={this.decoratedItem}
              onMoveRow={this.onMoveRow}
              onMoveList={this.onMoveList}
              itemCacheKey={({ id, lastModified }) => `${id}-${lastModified}`}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
