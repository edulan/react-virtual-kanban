import React from 'react';
import { List as VirtualList, CellMeasurer, AutoSizer } from 'react-virtualized';
import withScrolling, { createVerticalStrength } from 'react-dnd-scrollzone';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { ItemCache } from './itemCache';
import SortableItem from '../SortableItem';

import { LIST_TYPE, ROW_TYPE } from '../types';
import * as dragSpec from './dragSpec';
import * as dropSpec from './dropSpec';
import * as propTypes from './propTypes';

import PureComponent from '../PureComponent';

const identity = (c) => c;
const VERTICAL_SCROLL_SPEED = 20;
const VERTICAL_SCROLL_STRENGTH = 50;
const ListWithScrollZone = withScrolling(VirtualList);
const verticalStrength = createVerticalStrength(VERTICAL_SCROLL_STRENGTH);
class SortableList extends PureComponent {
  static propTypes = propTypes;

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderItemForMeasure = this.renderItemForMeasure.bind(this);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list.rows !== this.props.list.rows && !!this._list) {
      this._list.wrappedInstance.recomputeRowHeights();
    }
  }

  renderRow({ index, key, style }) {
    const row = this.props.list.rows[index];

    return (
      <SortableItem
        key={row.id}
        row={row}
        rowId={row.id}
        listId={this.props.listId}
        rowStyle={style}
        itemComponent={this.props.itemComponent}
        moveRow={this.props.moveRow}
        dropRow={this.props.dropRow}
        dragBeginRow={this.props.dragBeginRow}
        dragEndRow={this.props.dragEndRow}
        findItemIndex={this.props.findItemIndex}
        dndDisabled={this.props.dndDisabled}
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
        rowStyle={{}}
        isDragging={false}
        connectDragSource={identity}
        connectDropTarget={identity}
      />
    );
  }

  renderList({ width, height }) {
    // TODO: Check whether scrollbar is visible or not :/

    return (
      <CellMeasurer
        width={width}
        columnCount={1}
        rowCount={this.props.list.rows.length}
        cellRenderer={this.renderItemForMeasure}
        cellSizeCache={new ItemCache(this.props.list.rows, this.props.itemCacheKey)}
      >
        {({ getRowHeight }) => (
          <ListWithScrollZone
            ref={(c) => (this._list = c)}
            className='KanbanList'
            width={width}
            height={height}
            rowHeight={getRowHeight}
            rowCount={this.props.list.rows.length}
            rowRenderer={this.renderRow}
            overscanRowCount={this.props.overscanRowCount}
            verticalStrength={verticalStrength}
            speed={VERTICAL_SCROLL_SPEED}
           />
         )}
      </CellMeasurer>
    );
  }

  render() {
    const {
      list,
      listId,
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
        rows={list.rows}
        listStyle={listStyle}
        isDragging={isDragging}
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
      >
        <AutoSizer>
          {(dimensions) => this.renderList(dimensions)}
        </AutoSizer>
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
