'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.updateLists = updateLists;

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rotateRight(range, offset) {
  var length = range.length;

  return range.map(function (_, index, list) {
    return list[(index + offset) % length];
  });
}

function rotateLeft(range, offset) {
  return rotateRight(range, range.length - Math.abs(offset % range.length));
}

function buildUpdateOperation(list, _ref) {
  var from = _ref.from,
      to = _ref.to;

  var lower = Math.min(from, to);
  var upper = Math.max(from, to);
  var range = list.slice(lower, upper + 1);
  var rotated = to - from > 0 ? rotateRight(range, 1) : rotateLeft(range, 1);

  return [lower, rotated.length].concat((0, _toConsumableArray3.default)(rotated));
}

function updateLists(lists, _ref2) {
  var from = _ref2.from,
      to = _ref2.to;
  var fromRowIndex = from.rowIndex,
      fromListIndex = from.listIndex;
  var toRowIndex = to.rowIndex,
      toListIndex = to.listIndex;


  var fromList = lists[fromListIndex];
  var fromRow = fromList.rows[fromRowIndex];

  // Move lists
  if (fromListIndex !== toListIndex && fromRowIndex === void 0 && toRowIndex === void 0) {
    return (0, _reactAddonsUpdate2.default)(lists, {
      $splice: [[fromListIndex, 1], [toListIndex, 0, fromList]]
    });
  }

  // Move rows between different lists
  if (fromListIndex !== toListIndex) {
    var _update;

    return (0, _reactAddonsUpdate2.default)(lists, (_update = {}, (0, _defineProperty3.default)(_update, fromListIndex, {
      rows: {
        $splice: [[fromRowIndex, 1]]
      }
    }), (0, _defineProperty3.default)(_update, toListIndex, {
      rows: {
        $splice: [[toRowIndex, 0, fromRow]]
      }
    }), _update));
  }

  // Move rows inside same list
  return (0, _reactAddonsUpdate2.default)(lists, (0, _defineProperty3.default)({}, fromListIndex, {
    rows: {
      $splice: [buildUpdateOperation(fromList.rows, { from: fromRowIndex, to: toRowIndex })]
    }
  }));
}