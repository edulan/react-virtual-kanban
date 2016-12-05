import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';

import App from './App';

import { generateLists } from './utils/generate_lists';

import './index.css';

window.Perf = Perf;

ReactDOM.render(
  <App lists={generateLists(20, 7)} />,
  document.getElementById('root')
);
