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
      lists: generateLists(5, 500),
    };

    this.moveRow = this.moveRow.bind(this);
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
    const { width, height, columnWidth } = this.props;
    const { lists } = this.state;

    return (
      <Grid
        style={{overflowY: 'hidden'}}
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
    const { columnWidth } = this.props;

    return (
      <KanbanDragLayer columnWidth={columnWidth} />
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

Kanban.defaultProps = {
  columnWidth: 200,
};


export default DragDropContext(HTML5Backend)(Kanban);
