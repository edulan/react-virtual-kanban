import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';

import { VirtualKanban } from '../';

import { updateLists } from './utils/update_lists';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: props.lists,
    };

    this.moveRow = this.moveRow.bind(this);
    this.moveList = this.moveList.bind(this);
  }

  moveRow(from, to) {
    this.setState(
      {lists: updateLists(this.state.lists, {from, to})}
    );
  }

  moveList(from, to) {
    this.setState(
      {lists: updateLists(this.state.lists, {from, to})}
    );
  }

  render() {
    return (
      <div className='KanbanWrapper'>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <VirtualKanban
                lists={this.state.lists}
                width={width}
                listWidth={270}
                height={height}
                onMoveRow={this.moveRow}
                onMoveList={this.moveList}
              />
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
