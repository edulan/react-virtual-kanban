'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactVirtualized = require('react-virtualized');

var _decorateComponentWithProps = require('decorate-component-with-props');

var _decorateComponentWithProps2 = _interopRequireDefault(_decorateComponentWithProps);

var _ = require('../');

var _updateItem2 = require('./utils/updateItem');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      lists: props.getLists()
    };

    _this.updateItem = _this.updateItem.bind(_this);
    _this.onMoveRow = _this.onMoveRow.bind(_this);
    _this.onMoveList = _this.onMoveList.bind(_this);

    _this.decoratedItem = (0, _decorateComponentWithProps2.default)(_Item2.default, { updateItem: _this.updateItem });
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'updateItem',
    value: function updateItem(rowIndex, listIndex) {
      this.setState(function (prevState) {
        var prevRow = prevState.lists[listIndex].rows[rowIndex];
        var lists = (0, _updateItem2.updateItem)(prevState.lists, listIndex, rowIndex, (0, _extends3.default)({}, prevRow, { name: prevRow.name + ' ' + prevRow.name }));

        return { lists: lists };
      });
    }
  }, {
    key: 'onMoveRow',
    value: function onMoveRow(from, to) {
      this.setState(function (prevState) {
        return { lists: (0, _.updateLists)(prevState.lists, { from: from, to: to }) };
      });
    }
  }, {
    key: 'onMoveList',
    value: function onMoveList(from, to) {
      this.setState(function (prevState) {
        return { lists: (0, _.updateLists)(prevState.lists, { from: from, to: to }) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'KanbanWrapper' },
        _react2.default.createElement(
          _reactVirtualized.AutoSizer,
          null,
          function (_ref) {
            var width = _ref.width,
                height = _ref.height;
            return _react2.default.createElement(_.VirtualKanban, {
              lists: _this2.state.lists,
              width: width,
              height: height,
              listWidth: 200,
              itemComponent: _this2.decoratedItem,
              onMoveRow: _this2.onMoveRow,
              onMoveList: _this2.onMoveList,
              itemCacheKey: function itemCacheKey(_ref2) {
                var id = _ref2.id,
                    lastModified = _ref2.lastModified;
                return id + '-' + lastModified;
              }
            });
          }
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;