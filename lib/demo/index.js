'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsPerf = require('react-addons-perf');

var _reactAddonsPerf2 = _interopRequireDefault(_reactAddonsPerf);

require('../../lib/styles.css');

var _generateLists = require('./utils/generateLists');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Perf = _reactAddonsPerf2.default;

function getLists() {
  var lists = window.localStorage.getItem('lists');

  return JSON.parse(lists) || (0, _generateLists.generateLists)(20, 50);
}

function setLists(lists) {
  window.localStorage.setItem('lists', (0, _stringify2.default)(lists));
}

_reactDom2.default.render(_react2.default.createElement(_App2.default, { getLists: getLists, setLists: setLists }), document.getElementById('root'));