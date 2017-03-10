import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import HTML5Backend from 'react-dnd-html5-backend';
import withScrolling, { createHorizontalStrength } from 'react-dnd-scrollzone';
import { Grid } from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

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

    this.renderList = this.renderList.bind(this);
  }

  getChildContext() {
    return {
      dragDropManager: getDndContext(this.context),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lists !== this.props.lists) {
      this._grid.wrappedInstance.forceUpdate();
    }
  }

  renderList({ columnIndex, key, style }) {
    const list = this.props.lists[columnIndex];

    return (
      <SortableList
        key={list.id}
        listId={list.id}
        listIndex={columnIndex}
        listStyle={style}
        listComponent={this.props.listComponent}
        itemComponent={this.props.itemComponent}
        list={list}
        moveRow={this.props.onMoveRow}
        moveList={this.props.onMoveList}
        dropRow={this.props.onDropRow}
        dropList={this.props.onDropList}
        overscanRowCount={this.props.overscanRowCount}
        itemCacheKey={this.props.itemCacheKey}
      />
    );
  }

  render() {
    const {
      width,
      height,
      lists,
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
          scrollToColumn={scrollToList}
          scrollToAlignment={scrollToAlignment}
          horizontalStrength={horizontalStrength}
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
