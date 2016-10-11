import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Grid } from 'react-virtualized';

import KanbanDragLayer from './DragLayer';

import { updateLists } from './services/update_lists';
import { generateLists } from './services/generate_lists';

import 'react-virtualized/styles.css';
import './styles/index.css';

import List from '../List';

class Kanban extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: generateLists(20, 500),
    };

    this.moveRow = this.moveRow.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderLists = this.renderLists.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  moveRow(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to})});
  }

  renderList({ columnIndex, width, height }) {
    const rows = this.state.lists[columnIndex];

    return (
      <List
        width={200}
        height={height}
        listIndex={columnIndex}
        rows={rows}
        moveRow={this.moveRow}
      />
    );

  }

  renderLists() {
    const { width, height } = this.props;
    const { lists } = this.state;

    return (
      <Grid
        width={width}
        height={height}
        columnWidth={200}
        rowHeight={height}
        columnCount={lists.length}
        rowCount={1}
        cellRenderer={({ columnIndex }) => this.renderList({columnIndex, width, height})}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderLists()}
        <KanbanDragLayer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
