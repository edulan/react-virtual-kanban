import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Grid } from 'react-virtualized';

import KanbanDragLayer from '../DragLayer';

import { updateLists } from './services/update_lists';

import 'react-virtualized/styles.css';
import './styles/index.css';

import List from '../List';

class Kanban extends Component {
  static defaultProps = {
    columnWidth: 200,
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

  moveRow(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to}), from, to});
  }

  moveList(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to}), from, to});
  }

  renderList({ columnIndex, width, height }) {
    const { id, rows } = this.state.lists[columnIndex];

    return (
      <List
        width={200}
        height={height}
        listId={id}
        listIndex={columnIndex}
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
        width={width}
        height={height}
        columnWidth={columnWidth}
        rowHeight={height}
        columnCount={lists.length}
        rowCount={1}
        cellRenderer={({ columnIndex }) => this.renderList({columnIndex, width, height})}
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
