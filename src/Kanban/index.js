import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Grid } from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import KanbanDragLayer from '../DragLayer';

import { updateLists } from './services/update_lists';

import 'react-virtualized/styles.css';
import './styles/index.css';

import List from '../List';

class Kanban extends Component {
  static defaultProps = {
    columnWidth: 270,
  }

  constructor(props) {
    super(props);

    this.state = {
      lists: props.lists,
    };

    this.moveRow = this.moveRow.bind(this);
    this.moveList = this.moveList.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.renderDragLayer = this.renderDragLayer.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.lists === this.state.lists) return;
    this._grid.forceUpdate();
  }

  moveRow(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to}), from, to});
  }

  moveList(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to}), from, to});
  }

  renderList({ columnIndex, key, style }) {
    const { id, rows } = this.state.lists[columnIndex];

    // TODO: Select which component should be rendered (Draggable or ReadOnly list)
    return (
      <List
        key={key}
        style={style}
        listId={id}
        listIndex={columnIndex}
        listComponent={this.props.listComponent}
        rows={rows}
        moveRow={this.moveRow}
        moveList={this.moveList}
      />
    );

  }

  renderLists() {
    const { width, height, columnWidth } = this.props;
    const { lists } = this.state;

    return (
      <Grid
        className='KanbanGrid'
        ref={(c) => (this._grid = c)}
        width={width}
        height={height}
        columnWidth={columnWidth}
        rowHeight={height - scrollbarSize()}
        columnCount={lists.length}
        rowCount={1}
        cellRenderer={this.renderList}
        overscanColumnCount={5}
      />
    );
  }

  renderDragLayer() {
    return (
      <KanbanDragLayer
        columnWidth={this.props.columnWidth}
        width={this.props.width}
        height={this.props.height}
        lists={this.state.lists}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderLists()}
        {this.renderDragLayer()}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
