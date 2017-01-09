import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
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
    this.renderList = this.renderList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({lists: nextProps.lists});
  }

  onMoveList(from, to) {
    this.setState(
      {lists: updateLists(this.state.lists, {from, to})},
      () => this.props.onMoveList(from, to)
    );
  }

  onMoveRow(from, to) {
    this.setState(
      {lists: updateLists(this.state.lists, {from, to})},
      () => this.props.onMoveRow(from, to)
    );
  }

  onDropList({ listId, listIndex }) {
    this.props.onDropList({listId, listIndex, lists: this.state.lists});
  }

  onDropRow({ rowId, listId, rowIndex, listIndex }) {
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
    const { id, rows } = this.state.lists[columnIndex];

    return (
      <SortableList
        key={key}
        listId={id}
        listIndex={columnIndex}
        listStyle={style}
        listComponent={this.props.listComponent}
        itemComponent={this.props.itemComponent}
        rows={rows}
        moveRow={this.onMoveRow}
        moveList={this.onMoveList}
        dropRow={this.onDropRow}
        dropList={this.onDropList}
      />
    );
  }

  render() {
    const { width, height, listWidth, itemPreviewComponent, listPreviewComponent } = this.props;
    const { lists } = this.state;

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
          overscanColumnCount={2}
          horizontalStrength={horizontalStrength}
          verticalStrength={() => {}}
          speed={100}
        />
        <DragLayer
          listWidth={listWidth}
          itemPreviewComponent={itemPreviewComponent}
          listPreviewComponent={listPreviewComponent}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
