'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

exports.generateLists = generateLists;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium molestie euismod. Sed dignissim fringilla turpis, vitae sollicitudin urna aliquet id. Donec leo sapien, sagittis ac erat at, gravida cursus felis. Nunc tincidunt mauris eget leo bibendum efficitur.';

function generateRandom(count) {
  return (0, _from2.default)({ length: count }, function (_, i) {
    var name = '' + i;

    return {
      id: i,
      name: i % 3 === 0 ? name + ' - ' + lorem : name, // play with dynamic heights
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