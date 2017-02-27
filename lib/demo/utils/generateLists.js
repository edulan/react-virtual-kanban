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
      id: i
    };
  });
}

function generateLists(count, rowsPerList) {
  var rows = void 0;

  console.time('rows generation');
  rows = generateRandom(count * rowsPerList);

  var lists = rows.reduce(function (memo, row, i) {
    var group = memo[i % count];

    if (!group) {
      group = memo[i % count] = { id: i, rows: [] };
    }

    group.rows.push(row);

    return memo;
  }, []);

  console.timeEnd('rows generation');

  return lists;
}