import React, { Component } from 'react';

import { VirtualKanban } from '../../src';

import './App.css';

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
        <VirtualKanban
          lists={this.state.lists}
        />
      </div>
    );
  }
}

export default App;
