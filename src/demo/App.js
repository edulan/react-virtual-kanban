import React, { Component } from 'react';

import { VirtualKanban } from '../';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: props.getLists(),
    };

    this.dropRow = this.dropRow.bind(this);
    this.dropList = this.dropList.bind(this);
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
        <VirtualKanban
          lists={this.state.lists}
          width={1000}
          listWidth={200}
          height={600}
        />
      </div>
    );
  }
}

export default App;
