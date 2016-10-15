import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { VirtualScroll, CellMeasurer } from 'react-virtualized';
import { DropTarget } from 'react-dnd';

import RowSizeCache from '../utils/RowSizeCache';
import SortableRow from '../SortableRow';
import Row from '../Row';

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
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    listIndex: PropTypes.number,
    rows: PropTypes.array,
    moveRow: PropTypes.func,
  };

  static defaultProps = {
    width: 200,
    height: 280,
    rowHeight: 62,
  };

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.renderRowForMeasure = this.renderRowForMeasure.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentWillMount() {
    this._cachedRows = new Map();
  }

  componentDidUpdate() {
    this._list.recomputeRowHeights();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    this._cachedRows = null;
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

  renderRowForMeasure({ rowIndex: index }) {
    const row = this.props.rows[index];

    return (
      <div style={{width: this.props.width, overflowY: 'scroll'}}>
        <div className='RowWrapper'>
          <Row row={row} />
        </div>
      </div>
    );
  }

  renderList({ width, height }) {
    return (
      <CellMeasurer
        width={width}
        columnCount={1}
        rowCount={this.props.rows.length}
        cellRenderer={this.renderRowForMeasure}
        cellSizeCache={new RowSizeCache(this.props.rows, this._cachedRows)}
      >
        {({ getRowHeight }) => {
          return (
            <VirtualScroll
              ref={(c) => (this._list = c)}
              className='List'
              width={width}
              height={height}
              rowHeight={getRowHeight}
              rowCount={this.props.rows.length}
              rowRenderer={this.renderRow}
              overscanRowCount={2}
             />
          );
         }}
       </CellMeasurer>
    );
  }

  render() {
    const { connectDropTarget } = this.props;

    const HEADER_HEIGHT = 30;
    // TODO: Review! This creates invalid dimensions when measuring
    const WRAPPER_PADDING = 0;

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

const connectDrop = DropTarget([LIST_TYPE, ROW_TYPE], listTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))

export default connectDrop(List);
