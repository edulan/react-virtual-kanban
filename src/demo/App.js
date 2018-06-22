import React, { Component } from 'react';
import { AutoSizer } from 'react-virtualized';
import _ from 'lodash';

import { VirtualKanban } from '../';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: props.getLists(),
      isPrinting: false,
    };

    setInterval(() => {
      this.setState((prevState) => {
        if (prevState.lists[0].rows.length > 0) {
          this._initialLists = prevState.lists;
          return {
            lists: prevState.lists.map((list) => ({
              ...list,
              rows: _.shuffle(list.rows),
            }))
          };
        } else {
          return {lists: this._initialLists.concat()};
        }
      });
    }, 30000);

    this.print = this.print.bind(this);
  }

  /**
   * This is how we tell the React VirtualKanban component that it needs to render
   * its entire contents before printing.
   */
  print() {
    new Promise((resolve) => {
      this.setState({ isPrinting: true }, () => console.log('state', this.state));
      // or use the redux store and fire an action here
      resolve();
    })
      .then(() => window.alert('There is no print specific styling applied to ' +
      'this, but check dev tools and you\'ll see all lists rendered to the DOM. ' +
      'Check now, while this alert is still up, before the preview opens, so you believe me'))
      .then(() => window.print());
  }

  render() {
    return (
      <div className='KanbanWrapper'>
        <button onClick={this.print}>
          Click to print this component! (does not work with ctrl+p).
        </button>
        <AutoSizer>
          {({ width, height }) => (
            <VirtualKanban
              lists={this.state.lists}
              width={width}
              height={height}
              listWidth={400}
              onMoveRow={({ lists }) => this.setState(() => ({lists}))}
              onMoveList={({ lists }) => this.setState(() => ({lists}))}
              onDragBeginRow={(data) => console.log(data, 'onDragBeginRow')}
              onDragEndRow={(data) => console.log(data, 'onDragEndRow') }
              onDropRow={(data) => console.log(data, 'onDropRow') }
              onDropList={(data) => console.log(data, 'onDropList') }
              onDragBeginList={(data) => console.log(data, 'onDragBeginList')}
              onDragEndList={(data) => console.log(data, 'onDragEndList')}
              dndDisabled={false}
              isPrinting={this.state.isPrinting}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
