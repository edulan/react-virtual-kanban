import React from 'react';
import ReactDOM from 'react-dom';
import { AutoSizer } from 'react-virtualized';
import Perf from 'react-addons-perf';

import Kanban from './Kanban';

import { generateLists } from './utils/generate_lists';

import 'react-virtualized/styles.css';
import './index.css';

window.Perf = Perf;

const lists = generateLists(50, 7);

ReactDOM.render(
  <div className='KanbanWrapper'>
    <AutoSizer>
      {({ width, height }) => {
        return (
          <Kanban
            lists={lists}
            width={width}
            height={height}
          />
        );
      }}
    </AutoSizer>
  </div>,
  document.getElementById('root')
);
