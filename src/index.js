import React from 'react';
import ReactDOM from 'react-dom';
import Kanban from './Kanban';

import Perf from 'react-addons-perf';

import './index.css';

window.Perf = Perf;

ReactDOM.render(
  <div className='kanbanWrapper'>
    <Kanban />
  </div>,
  document.getElementById('root')
);
