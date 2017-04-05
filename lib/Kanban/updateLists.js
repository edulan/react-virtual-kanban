'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.findListIndex = findListIndex;
exports.findItemIndex = findItemIndex;
exports.findItemListIndex = findItemListIndex;
exports.findItemListId = findItemListId;
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

function findListIndex(lists, listId) {
  return lists.findIndex(function (_ref2) {
    var id = _ref2.id;
    return id === listId;
  });
}

function findItemIndex(lists, itemId) {
  var index = -1;

  lists.forEach(function (_ref3) {
    var rows = _ref3.rows;

    if (index !== -1) return;
    index = rows.findIndex(function (_ref4) {
      var id = _ref4.id;
      return id === itemId;
    });
  });

  return index;
}

function findItemListIndex(lists, itemId) {
  var index = -1;

  lists.forEach(function (_ref5, i) {
    var rows = _ref5.rows;

    if (index !== -1) return;

    if (rows.some(function (_ref6) {
      var id = _ref6.id;
      return id === itemId;
    })) {
      index = i;
    }
  });

  return index;
}

function findItemListId(lists, itemId) {
  var list = lists.find(function (_ref7) {
    var rows = _ref7.rows;

    return rows.some(function (_ref8) {
      var id = _ref8.id;
      return id === itemId;
    });
  });

  return list && list.id;
}

function moveLists(lists, _ref9) {
  var fromId = _ref9.fromId,
      toId = _ref9.toId;

  var fromIndex = findListIndex(lists, fromId);
  var toIndex = findListIndex(lists, toId);

  // Sanity checks
  if (fromIndex === -1 || toIndex === -1) {
    return lists;
  }

  var fromList = lists[fromIndex];

  if (!fromList) {
    return lists;
  }

  return (0, _reactAddonsUpdate2.default)(lists, {
    $splice: [[fromIndex, 1], [toIndex, 0, fromList]]
  });
}

function moveItems(lists, _ref10) {
  var _update2;

  var fromId = _ref10.fromId,
      toId = _ref10.toId;

  var fromListIndex = findItemListIndex(lists, fromId);
  var toListIndex = findItemListIndex(lists, toId);
  var fromIndex = findItemIndex(lists, fromId);
  var toIndex = findItemIndex(lists, toId);

  // Sanity checks
  if (fromListIndex === -1) {
    return lists;
  }

  if (fromIndex === -1 || toIndex === -1) {
    return lists;
  }

  var fromList = lists[fromListIndex];

  if (fromListIndex === toListIndex) {
    return (0, _reactAddonsUpdate2.default)(lists, (0, _defineProperty3.default)({}, fromListIndex, {
      rows: {
        $splice: [buildUpdateOperation(fromList.rows, { from: fromIndex, to: toIndex })]
      }
    }));
  }

  var fromItem = fromList.rows[fromIndex];

  return (0, _reactAddonsUpdate2.default)(lists, (_update2 = {}, (0, _defineProperty3.default)(_update2, fromListIndex, {
    rows: {
      $splice: [[fromIndex, 1]]
    }
  }), (0, _defineProperty3.default)(_update2, toListIndex, {
    rows: {
      $splice: [[toIndex, 0, fromItem]]
    }
  }), _update2));
}

function moveItemToList(lists, _ref11) {
  var _update3;

  var fromId = _ref11.fromId,
      toId = _ref11.toId;

  var fromIndex = findItemIndex(lists, fromId);
  var fromListIndex = findItemListIndex(lists, fromId);
  var toListIndex = findListIndex(lists, toId);

  if (fromIndex === -1) {
    return lists;
  }

  var fromList = lists[fromListIndex];
  var toList = lists[toListIndex];

  if (!toList) {
    return lists;
  }

  // Only move when list is empty
  if (toList.rows.length > 0) {
    return lists;
  }

  var fromItem = fromList.rows[fromIndex];

  return (0, _reactAddonsUpdate2.default)(lists, (_update3 = {}, (0, _defineProperty3.default)(_update3, fromListIndex, {
    rows: {
      $splice: [[fromIndex, 1]]
    }
  }), (0, _defineProperty3.default)(_update3, toListIndex, {
    rows: {
      $push: [fromItem]
    }
  }), _update3));
}

function updateLists(lists, _ref12) {
  var from = _ref12.from,
      to = _ref12.to;
  var fromItemId = from.itemId,
      fromListId = from.listId;
  var toItemId = to.itemId,
      toListId = to.listId;

  // Deprecation checks

  if (from.listIndex || from.rowIndex || to.listIndex || to.rowIndex) {
    return lists;
  }

  // Move lists
  if (fromListId !== toListId && fromItemId === void 0 && toItemId === void 0) {
    return moveLists(lists, { fromId: fromListId, toId: toListId });
  }

  // Move item inside same list
  if (fromListId === toListId && fromItemId !== void 0 && toItemId !== void 0) {
    return moveItems(lists, { fromId: fromItemId, toId: toItemId });
  }

  // Move item to a different list
  if (fromListId === void 0 && toListId !== void 0 && fromItemId !== void 0 && toItemId === void 0) {
    return moveItemToList(lists, { fromId: fromItemId, toId: toListId });
  }

  return lists;
}