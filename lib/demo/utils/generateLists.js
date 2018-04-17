'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

exports.generateLists = generateLists;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateRandom(count) {
  return (0, _from2.default)({ length: count }, function (_, i) {
    return {
      id: i,
      name: i + '-dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
      lastModified: Date.now()
    };
  });
}

function generateLists(count, rowsPerList) {
  var rows = void 0;

  rows = generateRandom(count * rowsPerList);

  var lists = rows.reduce(function (memo, row, i) {
    var group = memo[i % count];

    if (!group) {
      group = memo[i % count] = { id: i, rows: [] };
    }

    group.rows.push(row);

    return memo;
  }, []);

  return lists;
}