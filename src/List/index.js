import React, { Component } from 'react';
import { VirtualScroll } from 'react-virtualized';

import SortableRow from '../SortableRow';

import './styles/index.css';

class List extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  componentDidUpdate({ rows }) {
    this._list.forceUpdateGrid();
  }

  renderRow({ index }) {
    const row = this.props.rows[index];

    return (
      <SortableRow
        index={index}
        listIndex={this.props.listIndex}
        row={row}
        moveRow={this.props.moveRow}
      />
    );
  }

  render() {
    const { width, height, rowHeight } = this.props;

    return (
      <VirtualScroll
        ref={(c) => (this._list = c)}
        className='List'
        width={width}
        height={height}
        rowHeight={rowHeight}
        rowCount={this.props.rows.length}
        rowRenderer={this.renderRow}
        overscanRowCount={2}
       />
    );
  }
}

List.defaultProps = {
  width: 160,
  height: 280,
  rowHeight: 50,
};

export default List;
