import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';
import shuffle from 'lodash.shuffle';

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
          return {lists: prevState.lists.map((list) => ({
            ...list,
            rows: shuffle(list.rows),
          }))};
        } else {
          return {lists: this._initialLists.concat()};
        }
      });
    }, 5000000);
  }

  render() {
    return (
      <div className='KanbanWrapper'>
        <VirtualKanban
          lists={this.state.lists}
          listWidth={200}
          itemCacheKey={keyGenerator}
          onDragBeginRow={(data) => console.log(data, 'onDragBeginRow')}
          onDragEndRow={(data) => console.log(data, 'onDragEndRow') }
          onDropRow={(data) => console.log(data, 'onDropRow') }
          onDropList={(data) => console.log(data, 'onDropList') }
          onDragBeginList={(data) => console.log(data, 'onDragBeginList')}
          onDragEndList={(data) => console.log(data, 'onDragEndList')}
        />
      </div>
    );
  }
}

export default App;
