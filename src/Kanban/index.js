import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import HTML5Backend from 'react-dnd-html5-backend';
import withScrolling, { createHorizontalStrength } from 'react-dnd-scrollzone';
import { Grid } from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import { updateLists } from './updateLists';

import * as decorators from '../decorators';
import DragLayer from '../DragLayer';
import SortableList from '../SortableList';

const GridWithScrollZone = withScrolling(Grid);
const horizontalStrength = createHorizontalStrength(200);
import { DragDropManager } from 'dnd-core';

/**
 * Grab dragDropManager from context
 *
 * More info: https://github.com/gaearon/react-dnd/issues/186
 */
const getDndContext = ((dragDropManager = new DragDropManager(HTML5Backend)) => (context) => (
  context.dragDropManager || dragDropManager
))();

class Kanban extends Component {
  static propTypes = {
    lists: PropTypes.array,
    width: PropTypes.number,
    listWidth: PropTypes.number,
    height: PropTypes.number,
    listComponent: PropTypes.func,
    itemComponent: PropTypes.func,
    itemPreviewComponent: PropTypes.func,
    listPreviewComponent: PropTypes.func,
    onMoveRow: PropTypes.func,
    onMoveList: PropTypes.func,
    onDropRow: PropTypes.func,
    onDropList: PropTypes.func,
    onDragEndRow: PropTypes.func,
    overscanListCount: PropTypes.number,
    overscanRowCount: PropTypes.number,
    scrollToList: PropTypes.number,
    scrollToAlignment: PropTypes.string,
    itemCacheKey: PropTypes.func,
  }

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
  }

  getChildContext() {
    return {
      dragDropManager: getDndContext(this.context),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({lists: nextProps.lists});
  }

  onMoveList(from, to) {
    this.setState(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
      () => this.props.onMoveList(from, to)
    );
  }

  onMoveRow(from, to) {
    this.setState(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
      () => this.props.onMoveRow(from, to)
    );
  }

  onDropList({ listId, listIndex }) {
    this.props.onDropList({listId, listIndex, lists: this.state.lists});
  }

  onDropRow({ rowId, listId, rowIndex, listIndex }) {
    this.props.onDropRow({rowId, listId, rowIndex, listIndex, lists: this.state.lists});
  }

  onDragEndRow({ rowId, listId, rowIndex, listIndex }) {
    this.props.onDragEndRow({ rowId, listId, rowIndex, listIndex });
  }

  onDragEnd({ rowId, listId, rowIndex, listIndex }) {
    this.props.onDropRow({rowId, listId, rowIndex, listIndex, lists: this.state.lists});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.lists !== this.state.lists) {
      this._grid.wrappedInstance.forceUpdate();
    }
  }

  renderList({ columnIndex, key, style }) {
    const list = this.state.lists[columnIndex];

    return (
      <SortableList
        key={list.id}
        listId={list.id}
        listIndex={columnIndex}
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
        <DragLayer
          itemPreviewComponent={itemPreviewComponent}
          listPreviewComponent={listPreviewComponent}
        />
      </div>
    );
  }
}

export default Kanban;
