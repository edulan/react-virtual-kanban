import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Grid } from 'react-virtualized';

import KanbanDragLayer from './DragLayer';

import { updateLists } from './services/update_lists';
import { updateRow } from './services/update_row';
import { generateLists, generateRandomWord } from './services/generate_lists';

import 'react-virtualized/styles.css';
import './styles/index.css';

import List from '../List';

class Kanban extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: generateLists(20, 20),
    };

    this.moveRow = this.moveRow.bind(this);
    this.updateRow = this.updateRow.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.renderDragLayer = this.renderDragLayer.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      const { lists } = this.state;
      const randomListIndex = Math.floor(Math.random() * 50) % lists.length;
      const randomList = lists[randomListIndex];
      const randomRowIndex = Math.floor(Math.random() * 10) % randomList.length;
      const randomRow = randomList[randomRowIndex];

      this.updateRow(randomListIndex, randomRowIndex, {...randomRow, name: `${randomRow.name} ${generateRandomWord()}`});
    }, 50);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  moveRow(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to}), from, to});
  }

  updateRow(listIndex, rowIndex, row) {
    this.setState({lists: updateRow(this.state.lists, listIndex, rowIndex, row)});
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
      <KanbanDragLayer columnWidth={columnWidth} lists={this.state.lists} />
    );
  }

  render() {
    const { width, height } = this.props;

    return (
      <div style={{width, height}}>
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
