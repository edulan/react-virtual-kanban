import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import withScrolling, { createHorizontalStrength } from 'react-dnd-scrollzone';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';
import { Grid, CellMeasurerCache } from 'react-virtualized';

import {
  updateLists,
  findListIndex,
  findItemIndex,
  findItemListIndex,
  findItemListId,
} from './updateLists';

import * as propTypes from './propTypes';
import * as decorators from '../decorators';
import shallowCompare from 'react-addons-shallow-compare';
import DragLayer from '../DragLayer';
import SortableList from '../SortableList';

const GridWithScrollZone = withScrolling(Grid);
const HORIZONTAL_SCROLL_SPEED = 50;
const HORIZONTAL_SCROLL_STRENGTH = 200;
const horizontalStrength = createHorizontalStrength(HORIZONTAL_SCROLL_STRENGTH);
import { DragDropManager } from 'dnd-core';

/**
 * Grab dragDropManager from context
 *
 * More info: https://github.com/gaearon/react-dnd/issues/186
 */
const getDndContext = ((dragDropManager = new DragDropManager(HTML5Backend)) => (context) => (
  context.dragDropManager || dragDropManager
))();

class Kanban extends React.PureComponent {
  static propTypes = propTypes;

  static defaultProps = {
    lists: [],
    itemComponent: decorators.Item,
    listComponent: decorators.List,
    itemPreviewComponent: decorators.ItemPreview,
    listPreviewComponent: decorators.ListPreview,
    onMoveRow: () => {},
    onMoveList: () => {},
    onDropRow: () => {},
    onDropList: () => {},
    onDragBeginList: () => {},
    onDragEndList: () => {},
    onDragBeginRow: () => {},
    onDragEndRow: () => {},
    overscanListCount: 2,
    overscanRowCount: 2,
    dndDisabled: false,
  }

  static childContextTypes = {
    dragDropManager: React.PropTypes.object,
  }

  static contextTypes = {
    dragDropManager: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      lists: props.lists,
    };

    this.kanbanCache = new CellMeasurerCache({
      fixedWidth: true,
      fixedHeight: true,
      minWidth: this.props.listWidth,
    });

    this.onMoveList = this.onMoveList.bind(this);
    this.onMoveRow = this.onMoveRow.bind(this);

    this.onDropList = this.onDropList.bind(this);
    this.onDropRow = this.onDropRow.bind(this);

    this.onDragBeginRow = this.onDragBeginRow.bind(this);
    this.onDragEndRow = this.onDragEndRow.bind(this);
    this.onDragBeginList = this.onDragBeginList.bind(this);
    this.onDragEndList = this.onDragEndList.bind(this);

    this.renderList = this.renderList.bind(this);
    this.findItemIndex = this.findItemIndex.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
    this.findItemIndex = this.findItemIndex.bind(this);

    this.refsByIndex = {};
  }

  getChildContext() {
    return {
      dragDropManager: getDndContext(this.context),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.scheduleUpdate(() => ({lists: nextProps.lists}));
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._requestedFrame);
  }

  scheduleUpdate(updateFn, callbackFn) {
    this._pendingUpdateFn = updateFn;
    this._pendingUpdateCallbackFn = callbackFn;

    if (!this._requestedFrame) {
      this._requestedFrame = requestAnimationFrame(this.drawFrame);
    }
  }

  drawFrame() {
    const nextState = this._pendingUpdateFn(this.state);
    const callback = this._pendingUpdateCallbackFn;

    this.setState(nextState, callback);

    this._pendingUpdateFn = null;
    this._pendingUpdateCallbackFn = null;
    this._requestedFrame = null;
  }

  onMoveList(from, to) {
    this.scheduleUpdate(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
      () => {
        const lists = this.state.lists;

        this.props.onMoveList({
          listId: from.listId,
          listIndex: findListIndex(lists, from.listId),
          lists,
        });
      }
    );
  }

  onMoveRow(from, to) {
    this.scheduleUpdate(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
      () => {
          const lists = this.state.lists;

          this.props.onMoveRow({
            itemId: from.itemId,
            listId: findItemListId(lists, from.itemId),
            itemIndex: findItemIndex(lists, from.itemId),
            listIndex: findItemListIndex(lists, from.itemId),
            lists: lists,
        });
      }
    );
  }

  onDropList({ listId }) {
    this.props.onDropList(this.listEndData({ listId }));
  }

  itemEndData({ itemId }) {
    const lists = this.state.lists;

    return {
      itemId,
      get rowId() {
        console.warn('onDropRow: `rowId` is deprecated. Use `itemId` instead');
        return itemId;
      },
      listId: findItemListId(lists, itemId),
      rowIndex: findItemIndex(lists, itemId),
      listIndex: findItemListIndex(lists, itemId),
      lists,
    }
  }

  listEndData({ listId }) {
    const lists = this.state.lists;

    return {
      listId,
      listIndex: findListIndex(lists, listId),
      lists,
    };
  }

  onDropRow({ itemId }) {
    this.props.onDropRow(this.itemEndData({ itemId }));
  }

  onDragBeginRow(data) {
    this.props.onDragBeginRow(data);
  }

  onDragEndRow({ itemId }) {
    this.props.onDragEndRow(this.itemEndData({ itemId }));
  }

  onDragBeginList(data) {
    this.props.onDragBeginList(data);
  }

  onDragEndList({ listId }) {
    this.props.onDragEndList(this.listEndData({ listId }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.lists !== this.state.lists) {
      this._grid.wrappedInstance.forceUpdate();
    }
  }

  findItemIndex(itemId) {
    return findItemIndex(this.state.lists, itemId);
  }

  renderList({ columnIndex, rowIndex, key, style, parent }) {
    const list = this.state.lists[columnIndex];

    return (
      <SortableList
        ref={(ref) => {this.refsByIndex[columnIndex] = ref;}}
        key={list.id}
        listId={list.id}
        listStyle={style}
        listComponent={this.props.listComponent}
        itemComponent={this.props.itemComponent}
        list={list}
        moveRow={this.onMoveRow}
        moveList={this.onMoveList}
        dropRow={this.onDropRow}
        dropList={this.onDropList}
        dragEndRow={this.onDragEndRow}
        dragBeginRow={this.onDragBeginRow}
        dragEndList={this.onDragEndList}
        dragBeginList={this.onDragBeginList}
        overscanRowCount={this.props.overscanRowCount}
        findItemIndex={this.findItemIndex}
        dndDisabled={this.props.dndDisabled}
        kanbanParent={parent}
        kanbanCache={this.kanbanCache}
        kanbanKey={key}
        columnIndex={columnIndex}
        rowIndex={rowIndex}
      />
    );
  }

  render() {
    const { lists } = this.state;
    const {
      width,
      height,
      itemPreviewComponent,
      listPreviewComponent,
      overscanListCount,
      scrollToColumn,
      scrollToAlignment,
    } = this.props;
    return (
      <div>
        <GridWithScrollZone
          lists={lists}
          className='KanbanGrid'
          // Needed for fixing disappearing items when scrolling
          containerStyle={{pointerEvents: 'auto'}}
          ref={(c) => (this._grid = c)}
          width={width}
          height={height}
          columnWidth={this.kanbanCache.columnWidth}
          rowHeight={height - scrollbarSize()}
          columnCount={lists.length}
          rowCount={1}
          cellRenderer={this.renderList}
          overscanColumnCount={overscanListCount}
          horizontalStrength={horizontalStrength}
          scrollToColumn={scrollToColumn}
          scrollToAlignment={scrollToAlignment}
          verticalStrength={() => {}}
          speed={HORIZONTAL_SCROLL_SPEED}
          deferredMeasurementCache={this.kanbanCache}
        />
        <DragLayer
          lists={lists}
          itemPreviewComponent={itemPreviewComponent}
          listPreviewComponent={listPreviewComponent}
        />
      </div>
    );
  }
}

export default Kanban;
