import React from 'react';
import ReactDOM from 'react-dom';
import { AutoSizer } from 'react-virtualized';

import Kanban from './Kanban';

import Perf from 'react-addons-perf';

import 'react-virtualized/styles.css';
import './index.css';

window.Perf = Perf;

ReactDOM.render(
  <div className='KanbanWrapper'>
    <AutoSizer>
      {({ width, height }) => <Kanban width={width} height={height} />}
    </AutoSizer>
  </div>,
  document.getElementById('root')
);
