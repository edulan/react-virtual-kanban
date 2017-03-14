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
              onDragBeginList={(opts) => console.log('drag list begin', opts) }
              onDragEndList={(opts) => console.log('drag list end', opts) }
              onDragBeginRow={(opts) => console.log('drag row begin', opts) }
              onDragEndRow={(opts) => console.log('drag row end', opts) }
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
