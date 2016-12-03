import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Grid } from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import KanbanDragLayer from '../DragLayer';
import defaultItemComponent from '../decorators/Item';
import defaultListComponent from '../decorators/List';
import defaultItemPreviewComponent from '../decorators/ItemPreview';
import defaultListPreviewComponent from '../decorators/ListPreview';

import { updateLists } from './services/update_lists';

import 'react-virtualized/styles.css';
import './styles/index.css';

import List from '../List';

class Kanban extends Component {
  static propTypes = {
    lists: PropTypes.array,
    width: PropTypes.number,
    listWidth: PropTypes.number,
    height: PropTypes.number,
    listComponent: PropTypes.func,
    itemComponent: PropTypes.func,
    onMoveRow: PropTypes.func,
    onMoveList: PropTypes.func,
  }

  static defaultProps = {
    itemComponent: defaultItemComponent,
    listComponent: defaultListComponent,
    itemPreviewComponent: defaultItemPreviewComponent,
    listPreviewComponent: defaultListPreviewComponent,
    onMoveRow: () => {},
    onMoveList: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      lists: props.lists,
    };

    this.moveRow = this.moveRow.bind(this);
    this.moveList = this.moveList.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.lists === this.state.lists) return;
    this._grid.forceUpdate();
  }

  moveRow(from, to) {
    this.setState(
      {lists: updateLists(this.state.lists, {from, to}), from, to},
      () => this.props.onMoveRow(from, to),
    );
  }

  moveList(from, to) {
    this.setState(
      {lists: updateLists(this.state.lists, {from, to}), from, to},
      () => this.props.onMoveList(from, to),
    );
  }

  renderList({ columnIndex, key, style }) {
    const { id, rows } = this.state.lists[columnIndex];

    // TODO: Select which component should be rendered (Draggable or ReadOnly list)
    // TODO: Create a SortableList component
    return (
      <List
        key={key}
        style={style}
        listId={id}
        listIndex={columnIndex}
        listComponent={this.props.listComponent}
        itemComponent={this.props.itemComponent}
        rows={rows}
        moveRow={this.moveRow}
        moveList={this.moveList}
      />
    );

  }

  render() {
    const { width, height, listWidth, itemPreviewComponent, listPreviewComponent } = this.props;
    const { lists } = this.state;

    return (
      <div>
        <Grid
          className='KanbanGrid'
          ref={(c) => (this._grid = c)}
          width={width}
          height={height}
          columnWidth={listWidth}
          rowHeight={height - scrollbarSize()}
          columnCount={lists.length}
          rowCount={1}
          cellRenderer={this.renderList}
          overscanColumnCount={5}
        />
        <KanbanDragLayer
          itemPreviewComponent={itemPreviewComponent}
          listPreviewComponent={listPreviewComponent}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
