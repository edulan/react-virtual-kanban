import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { AutoSizer } from 'react-virtualized';

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
      lists: generateLists(10, 200),
    };

    this.moveRow = this.moveRow.bind(this);
    this.renderLists = this.renderLists.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  moveRow(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to})});
  }

  renderLists({ height }) {
    const { lists } = this.state;

    return (
      <div>
        <div className="Wrapper">
          {lists.map((rows, i) => {
            return (
              <div key={i} className="ListContainer">
                <List height={height} listIndex={i} rows={rows} moveRow={this.moveRow} />
              </div>
            );
          })}
        </div>
        <KanbanDragLayer />
      </div>
    );
  }

  render(){
    return (
      <AutoSizer>
        {({ height }) => this.renderLists({height})}
      </AutoSizer>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
