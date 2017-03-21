import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';

import { VirtualKanban } from '../../lib';

import './App.css';

const keyGenerator = ({ id, lastModified }) => `${id}-${lastModified}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: props.getLists(),
    };

    setInterval(() => {
      this.setState((prevState) => {
        if (prevState.lists[0].rows.length > 0) {
          this._initialLists = prevState.lists;
          return {lists: prevState.lists.map((list) => ({...list, rows: []}))};
        } else {
          return {lists: this._initialLists.concat()};
        }
      });
    }, 3000);

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
              itemCacheKey={keyGenerator}
              onMoveRow={({ lists, itemId, listId, itemIndex, listIndex }) => this.setState(() => ({lists, lastMovedRow: {itemId, listId, itemIndex, listIndex}}))}
              onMoveList={({ lists }) => this.setState(() => ({lists}))}
              onDragEndRow={() => console.log(this.state.lastMovedRow) }
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
