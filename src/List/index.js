import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { VirtualScroll, CellMeasurer } from 'react-virtualized';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import RowSizeCache from '../utils/RowSizeCache';
import SortableRow from '../SortableRow';
import Row from '../Row';

import { LIST_TYPE, ROW_TYPE } from '../types';

import './styles/index.css';

const listSource = {
  beginDrag(props) {
    return {
      listId: props.listId,
      listIndex: props.listIndex,
    };
  },

  isDragging({ listId }, monitor) {
    const draggingListId = monitor.getItem().listId;

    return listId === draggingListId;
  },
};

const listTarget = {
  hover(props, monitor) {
    if (!monitor.canDrop()) return;

    const item = monitor.getItem();
    const itemType = monitor.getItemType();

    if (itemType === LIST_TYPE) {
      const dragListIndex = item.listIndex;
      const hoverListIndex = props.listIndex;

      props.moveList({dragListIndex}, {hoverListIndex});

      // TODO: Review
      item.listIndex = hoverListIndex;
      return;
    }

    if (itemType === ROW_TYPE) {
      const { index: dragIndex, listIndex: dragListIndex } = item;
      const hoverIndex = 0;
      const hoverListIndex = props.listIndex;

      props.moveRow({dragIndex, dragListIndex}, {hoverIndex, hoverListIndex});

      item.index = hoverIndex;
      item.listIndex = hoverListIndex;
      return;
    }
  },

  canDrop(props, monitor) {
    const item = monitor.getItem();
    const itemType = monitor.getItemType();

    if (itemType === LIST_TYPE) {
      return item.listIndex !== props.listIndex;
    }

    if (itemType === ROW_TYPE) {
      return props.rows.length === 0;
    }
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

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  componentDidUpdate() {
    if (!this._list) return;

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
    const { listId, isDragging, connectDragSource, connectDropTarget } = this.props;

    const HEADER_HEIGHT = 30;
    // TODO: Review! This creates invalid dimensions when measuring
    const WRAPPER_PADDING = 0;

    const width = this.props.width - (WRAPPER_PADDING * 2);
    const height = this.props.height - HEADER_HEIGHT - 20;

    if (isDragging) {
      return (
        <div className='ListWrapper ListWrapperPlaceholder'></div>
      );
    }

    return connectDragSource(connectDropTarget(
      <div className='ListWrapper' style={{paddingLeft: WRAPPER_PADDING, paddingRight: WRAPPER_PADDING}}>
        <div className='ListHeader' style={{height: HEADER_HEIGHT}}>{this.props.listId}</div>
        {this.renderList({width, height})}
      </div>
    ));
  }
}

const connectDrop = DropTarget([LIST_TYPE, ROW_TYPE], listTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))

const connectDrag = DragSource(LIST_TYPE, listSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))

export default connectDrop(connectDrag(List));
