import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';

import { VirtualKanban } from '../../src';

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
    }, 30000000);
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
