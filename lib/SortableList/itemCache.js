"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemCache = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Cache singleton
var cachedRows = new _map2.default();

var ItemCache = exports.ItemCache = function () {
  function ItemCache(items) {
    var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cachedRows;
    (0, _classCallCheck3.default)(this, ItemCache);

    this.items = items;
    this.store = store;
  }

  (0, _createClass3.default)(ItemCache, [{
    key: "clearAllRowHeights",
    value: function clearAllRowHeights() {
      this.store.clear();
    }
  }, {
    key: "clearRowHeight",
    value: function clearRowHeight(index) {
      var id = this.items[index].id;


      this.store.delete(id);
    }
  }, {
    key: "getRowHeight",
    value: function getRowHeight(index) {
      var id = this.items[index].id;


      return this.store.get(id);
    }
  }, {
    key: "setRowHeight",
    value: function setRowHeight(index, height) {
      var id = this.items[index].id;


      this.store.set(id, height);
    }

    // Not implemented

  }, {
    key: "clearAllColumnWidths",
    value: function clearAllColumnWidths() {}
  }, {
    key: "clearColumnWidth",
    value: function clearColumnWidth(index) {}
  }, {
    key: "getColumnWidth",
    value: function getColumnWidth(index) {}
  }, {
    key: "setColumnWidth",
    value: function setColumnWidth(index, width) {}
  }]);
  return ItemCache;
}();