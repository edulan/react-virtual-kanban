import React, { Component } from 'react';
import { VirtualKanban } from '../../src';

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
          width={width}
          height={height}
          listWidth={200}
          itemCacheKey={({ id, lastModified }) => `${id}-${lastModified}`}
        />
      </div>
    );
  }
}

export default App;
