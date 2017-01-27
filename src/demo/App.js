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
              __DANGEROUSLY_MEASURE_TOTAL_CHILDREN_HEIGHT_DO_NOT_USE_OR_YOU_WILL_SUFFER_A_VERY_SLOW_AND_PAINFUL_DEATH={true}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
