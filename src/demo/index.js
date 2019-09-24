import React from 'react';
import ReactDOM from 'react-dom';

import '../../lib/styles.css';

import { generateLists } from './utils/generateLists';

import App from './App';

function getLists() {
  const lists = window.localStorage.getItem('lists');

  return JSON.parse(lists) || generateLists(20, 50);
}

function setLists(lists) {
  window.localStorage.setItem('lists', JSON.stringify(lists));
}

ReactDOM.render(
  <App getLists={getLists} setLists={setLists} />,
  document.getElementById('root')
);
