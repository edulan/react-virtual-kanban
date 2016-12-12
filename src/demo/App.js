import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';

import { VirtualKanban } from '../';

import { updateLists } from './utils/update_lists';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: props.getLists(),
    };

    this.moveRow = this.moveRow.bind(this);
    this.moveList = this.moveList.bind(this);
    this.dropRow = this.dropRow.bind(this);
    this.dropList = this.dropList.bind(this);
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

  dropRow(_to) {
    this.props.setLists(this.state.lists);
  }

  dropList(to) {
    this.props.setLists(this.state.lists);
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
                onDropRow={this.dropRow}
                onDropList={this.dropList}
              />
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
