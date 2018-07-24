import React from 'react';
import { List as VirtualList, CellMeasurer, CellMeasurerCache, AutoSizer } from 'react-virtualized';
import withScrolling, { createVerticalStrength } from 'react-dnd-scrollzone';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import SortableItem from '../SortableItem';

import { LIST_TYPE, ROW_TYPE } from '../types';
import * as dragSpec from './dragSpec';
import * as dropSpec from './dropSpec';
import * as propTypes from './propTypes';

const VERTICAL_SCROLL_SPEED = 20;
const VERTICAL_SCROLL_STRENGTH = 50;
const ListWithScrollZone = withScrolling(VirtualList);
const verticalStrength = createVerticalStrength(VERTICAL_SCROLL_STRENGTH);


class SortableList extends React.PureComponent {
  static propTypes = propTypes;

  constructor(props) {
    super(props);

    this.cache = new CellMeasurerCache({
      defaultHeight: 50,
      fixedWidth: true
    });
    this.renderRow = this.renderRow.bind(this);
    this.renderList = this.renderList.bind(this);
    this.recalculateRowHeights = this.recalculateRowHeights.bind(this);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  componentDidUpdate(prevProps) {
    const rowIndex = this.findHighestUpdatedRow(this.props.list.rows, prevProps.list.rows);
    if (rowIndex !== null) {
      this.cache.clearAll();
      if (this._list) this._list.wrappedInstance.recomputeRowHeights(rowIndex);
    }
  }

  findHighestUpdatedRow(rows, prevRows) {
    if (!window._) return null;
    return window._.findIndex(rows, (row, i) => !window._.isEqual(row, prevRows[i]));
  }

  recalculateRowHeights(index) {
    this.cache.clear(index);
    if (this._list) this._list.wrappedInstance.recomputeRowHeights(index);
  }

  renderRow({ index, key, style, parent}) {
    const row = this.props.list.rows[index];
    return (
      <CellMeasurer
        cache={this.cache}
        parent={parent}
        key={key}
        columnIndex={0}
        rowIndex={index}
      >
        <SortableItem
          key={row.id}
          row={row}
          rowId={row.id}
          listId={this.props.listId}
          style={style}
          itemComponent={this.props.itemComponent}
          moveRow={this.props.moveRow}
          dropRow={this.props.dropRow}
          dragBeginRow={this.props.dragBeginRow}
          dragEndRow={this.props.dragEndRow}
          findItemIndex={this.props.findItemIndex}
          dndDisabled={this.props.dndDisabled}
          recalculateRowHeights={this.recalculateRowHeights}
          rowIndex={index}
          itemComponentProps={this.props.itemComponentProps}
        />
      </CellMeasurer>
    );
  }

  renderList({ width, height }) {
    // TODO: Check whether scrollbar is visible or not :/
    return (
      <ListWithScrollZone
        ref={(c) => (this._list = c)}
        className='KanbanList'
        width={width}
        height={height}
        rowHeight={this.cache.rowHeight}
        rowCount={this.props.list.rows.length}
        rowRenderer={this.renderRow}
        overscanRowCount={this.props.overscanRowCount}
        verticalStrength={verticalStrength}
        speed={VERTICAL_SCROLL_SPEED}
        deferredMeasurementCache={this.cache}
        scrollToIndex={this.props.initialRowIndex}
      />
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
      style,
      listComponentProps,
    } = this.props;

    return (
      <DecoratedList
        list={list}
        listId={listId}
        listStyle={style}
        isDragging={isDragging}
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
        {...listComponentProps}
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
