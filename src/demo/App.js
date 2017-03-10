import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';

import { VirtualKanban } from '../../lib';

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
        <AutoSizer>
          {({ width, height }) => (
            <VirtualKanban
              lists={this.state.lists}
              width={width}
              height={height}
              listWidth={200}
              itemCacheKey={({ id, lastModified }) => `${id}-${lastModified}`}
              onDragEndRow={(leProps) => console.log(leProps) }
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
