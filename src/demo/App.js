import React, { Component } from 'react';

import { VirtualKanban } from '../';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: props.getLists(),
    };
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
