'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.updateItem = updateItem;

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateItem(lists, listIndex, rowIndex, row) {
  return (0, _reactAddonsUpdate2.default)(lists, (0, _defineProperty3.default)({}, listIndex, {
    rows: (0, _defineProperty3.default)({}, rowIndex, {
      $set: (0, _extends3.default)({}, row, { lastModified: Date.now() })
    })
  }));
}