import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import shuffle from 'lodash.shuffle';

import '../../lib/styles.css';

import { generateLists } from './utils/generateLists';

import App from './App';

window.Perf = Perf;

function getLists() {
  const lists = ([
    ...generateLists(5, 1),
    ...generateLists(10, 2),
    ...generateLists(5, 0)
  ]);

  console.log(lists);

  return shuffle(lists);
}

function setLists(lists) {
  window.localStorage.setItem('lists', JSON.stringify(lists));
}

ReactDOM.render(
  <App getLists={getLists} setLists={setLists} />,
  document.getElementById('root')
);
