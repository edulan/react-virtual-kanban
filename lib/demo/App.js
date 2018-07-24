'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _2 = require('../');

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      lists: props.getLists(),
      isPrinting: false
    };

    setInterval(function () {
      _this.setState(function (prevState) {
        if (prevState.lists[0].rows.length > 0) {
          _this._initialLists = prevState.lists;
          return {
            lists: prevState.lists.map(function (list) {
              return (0, _extends3.default)({}, list, {
                rows: _lodash2.default.shuffle(list.rows)
              });
            })
          };
        } else {
          return { lists: _this._initialLists.concat() };
        }
      });
    }, 30000);

    _this.print = _this.print.bind(_this);
    return _this;
  }

  /**
   * This is how we tell the React VirtualKanban component that it needs to render
   * its entire contents before printing.
   */


  (0, _createClass3.default)(App, [{
    key: 'print',
    value: function print() {
      var _this2 = this;

      new _promise2.default(function (resolve) {
        _this2.setState({ isPrinting: true }, function () {
          return void 0;
        });
        // or use the redux store and fire an action here
        resolve();
      }).then(function () {
        return window.alert('There is no print specific styling applied to ' + 'this, but check dev tools and you\'ll see all lists rendered to the DOM. ' + 'Check now, while this alert is still up, before the preview opens, so you believe me');
      }).then(function () {
        return window.print();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'KanbanWrapper' },
        _react2.default.createElement(
          'button',
          { onClick: this.print },
          'Click to print this component! (does not work with ctrl+p).'
        ),
        _react2.default.createElement(
          _reactVirtualized.AutoSizer,
          null,
          function (_ref) {
            var width = _ref.width,
                height = _ref.height;
            return _react2.default.createElement(_2.VirtualKanban, {
              lists: _this3.state.lists,
              width: width,
              height: height,
              listWidth: 400,
              onMoveRow: function onMoveRow(_ref2) {
                var lists = _ref2.lists;
                return _this3.setState(function () {
                  return { lists: lists };
                });
              },
              onMoveList: function onMoveList(_ref3) {
                var lists = _ref3.lists;
                return _this3.setState(function () {
                  return { lists: lists };
                });
              },
              onDragBeginRow: function onDragBeginRow(data) {
                return void 0;
              },
              onDragEndRow: function onDragEndRow(data) {
                return void 0;
              },
              onDropRow: function onDropRow(data) {
                return void 0;
              },
              onDropList: function onDropList(data) {
                return void 0;
              },
              onDragBeginList: function onDragBeginList(data) {
                return void 0;
              },
              onDragEndList: function onDragEndList(data) {
                return void 0;
              },
              dndDisabled: false,
              isPrinting: _this3.state.isPrinting
            });
          }
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;