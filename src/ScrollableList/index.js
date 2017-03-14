import React, { Component } from 'react';
import { List, WindowScroller } from 'react-virtualized';

export default class ScrollableList extends Component {
  recomputeRowHeights() {
    this._list.recomputeRowHeights();
    // this._scrolller.updateScrollPosition();
  }

  render() {
    if (!this.props.scrollElement) return null;

    return (
      <WindowScroller
        ref={(c) => (this._scrolller = c)}
        scrollElement={this.props.scrollElement}
      >
        {({ height, scrollTop }) => (
          <List
            ref={(c) => (this._list = c)}
            autoHeight
            className='KanbanList'
            style={{overflowY: 'hidden'}}
            containerStyle={{transition: 'all 0.2s ease'}}
            scrollTop={scrollTop}
            height={height}
            width={this.props.width}
            rowCount={this.props.rowCount}
            rowHeight={this.props.rowHeight}
            rowRenderer={this.props.rowRenderer}
          />
        )}
      </WindowScroller>
    );
  }
}
