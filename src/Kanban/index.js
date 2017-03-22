import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import withScrolling, { createHorizontalStrength } from 'react-dnd-scrollzone';
import { Grid } from 'react-virtualized';
import ChopList from '../SortableList/ChopList';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import {
  updateLists,
  findListIndex,
  findItemIndex,
  findItemListIndex,
  findItemListId,
} from './updateLists';

import * as propTypes from './propTypes';
import * as decorators from '../decorators';
import DragLayer from '../DragLayer';
import SortableList from '../SortableList';

const GridWithScrollZone = withScrolling(Grid);
const horizontalStrength = createHorizontalStrength(200);
import { DragDropManager } from 'dnd-core';

import PureComponent from '../PureComponent';

/**
 * Grab dragDropManager from context
 *
 * More info: https://github.com/gaearon/react-dnd/issues/186
 */
const getDndContext = ((dragDropManager = new DragDropManager(HTML5Backend)) => (context) => (
  context.dragDropManager || dragDropManager
))();

class Kanban extends PureComponent {
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
    onDragEndRow: () => {},
    overscanListCount: 2,
    overscanRowCount: 2,
    itemCacheKey: ({ id }) => `${id}`,
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
      lists: props.lists
    };

    this.onMoveList =this.onMoveList.bind(this);
    this.onMoveRow =this.onMoveRow.bind(this);
    this.onDropList =this.onDropList.bind(this);
    this.onDropRow =this.onDropRow.bind(this);
    this.onDragEndRow = this.onDragEndRow.bind(this);
    this.renderList = this.renderList.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
    this.findItemIndex = this.findItemIndex.bind(this);
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
    const lists = this.state.lists;

    this.props.onDropList({
      listId,
      listIndex: findListIndex(lists, listId),
      lists,
    });
  }

  onDropRow({ itemId }) {
    const lists = this.state.lists;

    this.props.onDropRow({
      itemId,
      get rowId() {
        console.warn('onDropRow: `rowId` is deprecated. Use `itemId` instead');
        return itemId;
      },
      listId: findItemListId(lists, itemId),
      rowIndex: findItemIndex(lists, itemId),
      listIndex: findItemListIndex(lists, itemId),
      lists,
    });
  }

  onDragEndRow({ itemId }) {
    const lists = this.state.lists;

    this.props.onDragEndRow({
      itemId,
      lists,
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.lists !== this.state.lists) {
      this._grid.forceUpdate();
    }
  }

  findItemIndex(itemId) {
    return findItemIndex(this.state.lists, itemId);
  }

  renderList({ index, key, style }) {
    const list = this.state.lists[index];

    return (
      <SortableList
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
        overscanRowCount={this.props.overscanRowCount}
        itemCacheKey={this.props.itemCacheKey}
        findItemIndex={this.findItemIndex}
      />
    );
  }

  render() {
    const { lists } = this.state;
    const {
      width,
      height,
      listWidth,
      itemPreviewComponent,
      listPreviewComponent,
      overscanListCount,
      scrollToList,
      scrollToAlignment,
    } = this.props;

    return (
      <div>
        <ChopList
          ref={(c) => (this._grid = c)}
          rowCount={lists.length}
          rowRenderer={this.renderList}
          direction='horizontal'
        >
        </ChopList>

        {/*
        <GridWithScrollZone
          lists={lists}
          className='KanbanGrid'
          // Needed for fixing disappearing items when scrolling
          containerStyle={{pointerEvents: 'auto'}}
          ref={(c) => (this._grid = c)}
          width={width}
          height={height}
          columnWidth={listWidth}
          rowHeight={height - scrollbarSize()}
          columnCount={lists.length}
          rowCount={1}
          cellRenderer={this.renderList}
          overscanColumnCount={overscanListCount}
          horizontalStrength={horizontalStrength}
          scrollToColumn={scrollToList}
          scrollToAlignment={scrollToAlignment}
          verticalStrength={() => {}}
          speed={100}
        />
          */}
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
