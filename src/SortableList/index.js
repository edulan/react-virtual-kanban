import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { CellMeasurer } from 'react-virtualized';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { PropTypes as CustomPropTypes } from '../propTypes';

import { ItemCache } from './itemCache';
import ScrollableList from '../ScrollableList';
import SortableItem from '../SortableItem';

import { LIST_TYPE, ROW_TYPE } from '../types';
import * as dragSpec from './dragSpec';
import * as dropSpec from './dropSpec';

const identity = (c) => c;

class SortableList extends Component {
  static propTypes = {
    list: PropTypes.object,
    listId: CustomPropTypes.id.isRequired,
    listIndex: PropTypes.number,
    listStyle: PropTypes.object,
    listComponent: PropTypes.func,
    itemComponent: PropTypes.func,
    moveRow: PropTypes.func,
    moveList: PropTypes.func,
    dropRow: PropTypes.func,
    dropList: PropTypes.func,
    overscanRowCount: PropTypes.number,
    itemCacheKey: PropTypes.func,
    // React DnD
    isDragging: PropTypes.bool,
    connectDropTarget: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDragPreview: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {};

    this.renderRow = this.renderRow.bind(this);
    this.renderItemForMeasure = this.renderItemForMeasure.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list.rows !== this.props.list.rows && !!this._list) {
      this._list.recomputeRowHeights();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderRow({ index, key, style }) {
    const row = this.props.list.rows[index];

    return (
      <SortableItem
        key={row.id}
        row={row}
        rowId={row.id}
        listId={this.props.listId}
        rowIndex={index}
        listIndex={this.props.listIndex}
        rowStyle={style}
        itemComponent={this.props.itemComponent}
        moveRow={this.props.moveRow}
        dropRow={this.props.dropRow}
      />
    );
  }

  renderItemForMeasure({ rowIndex }) {
    const { itemComponent: DecoratedItem } = this.props;
    const row = this.props.list.rows[rowIndex];

    return (
      <DecoratedItem
        row={row}
        rowId={row.id}
        listId={this.props.listId}
        rowIndex={rowIndex}
        listIndex={this.props.listIndex}
        rowStyle={{}}
        isDragging={false}
        connectDragSource={identity}
        connectDropTarget={identity}
      />
    );
  }

  renderList() {
    return (
      <CellMeasurer
        width={this.props.listWidth - 40}
        columnCount={1}
        rowCount={this.props.list.rows.length}
        cellRenderer={this.renderItemForMeasure}
        cellSizeCache={new ItemCache(this.props.list.rows, this.props.itemCacheKey)}
      >
        {({ getRowHeight }) => (
          <ScrollableList
            ref={(c) => (this._list = c)}
            width={this.props.listWidth - 40}
            rowHeight={getRowHeight}
            rowCount={this.props.list.rows.length}
            rowRenderer={this.renderRow}
            overscanRowCount={this.props.overscanRowCount}
            scrollElement={this.state.scrollElement}
            // Hack way of forcing list re-rendering when listIndex changes
            listIndex={this.props.listIndex}
           />
         )}
      </CellMeasurer>
    );
  }

  render() {
    const {
      list,
      listId,
      listIndex,
      listComponent: DecoratedList,
      isDragging,
      connectDragSource,
      connectDropTarget,
      listStyle,
    } = this.props;

    return (
      <DecoratedList
        list={list}
        listId={listId}
        listIndex={listIndex}
        rows={list.rows}
        listStyle={listStyle}
        isDragging={isDragging}
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
      >
        <div
          className='Scrollable'
          // This is what makes scrollElement to get available height
          ref={(c) => this.setState({scrollElement: c})}
        >
          {this.renderList()}
        </div>
      </DecoratedList>
    );
  }
}

const connectDrop = DropTarget([LIST_TYPE, ROW_TYPE], dropSpec, connect => ({
  connectDropTarget: connect.dropTarget(),
}))

const connectDrag = DragSource(LIST_TYPE, dragSpec, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))

export default connectDrop(connectDrag(SortableList));
