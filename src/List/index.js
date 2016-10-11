import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { VirtualScroll } from 'react-virtualized';
import { DropTarget } from 'react-dnd';

import SortableRow from '../SortableRow';

import { LIST_TYPE, ROW_TYPE } from '../types';

import './styles/index.css';

const listTarget = {
  hover(props, monitor) {
    if (!monitor.canDrop()) return;

    const { index: dragIndex, listIndex: dragListIndex } = monitor.getItem();
    const hoverIndex = 0;
    const hoverListIndex = props.listIndex;

    props.moveRow({dragIndex, dragListIndex}, {hoverIndex, hoverListIndex});

    monitor.getItem().index = hoverIndex;
    monitor.getItem().listIndex = hoverListIndex;
  },

  canDrop(props) {
    return props.rows.length === 0;
  }
};

class List extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidUpdate({ rows }) {
    this._list.forceUpdateGrid();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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

  renderList({ width, height }) {
    const { rowHeight } = this.props;

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

  render() {
    const { connectDropTarget } = this.props;

    const HEADER_HEIGHT = 30;
    const WRAPPER_PADDING = 5;

    const width = this.props.width - (WRAPPER_PADDING * 2);
    const height = this.props.height - HEADER_HEIGHT - 20;

    return connectDropTarget(
      <div className='ListWrapper' style={{paddingLeft: WRAPPER_PADDING, paddingRight: WRAPPER_PADDING}}>
        <div className='ListHeader' style={{height: HEADER_HEIGHT}}>L{this.props.listIndex}</div>
        {this.renderList({width, height})}
      </div>
    );
  }
}

List.defaultProps = {
  width: 200,
  height: 280,
  rowHeight: 62,
};

const connectDrop = DropTarget([LIST_TYPE, ROW_TYPE], listTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))

export default connectDrop(List);
