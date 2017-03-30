'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollableList = function (_Component) {
  (0, _inherits3.default)(ScrollableList, _Component);

  function ScrollableList() {
    (0, _classCallCheck3.default)(this, ScrollableList);
    return (0, _possibleConstructorReturn3.default)(this, (ScrollableList.__proto__ || (0, _getPrototypeOf2.default)(ScrollableList)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScrollableList, [{
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      this._list.recomputeRowHeights();
      this._scroller && this._scroller.updatePosition();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.scrollElement) return null;

      return _react2.default.createElement(
        _reactVirtualized.WindowScroller,
        {
          ref: function ref(c) {
            return _this2._scroller = c;
          },
          scrollElement: this.props.scrollElement
        },
        function (_ref) {
          var height = _ref.height,
              scrollTop = _ref.scrollTop;
          return _react2.default.createElement(_reactVirtualized.List, {
            ref: function ref(c) {
              return _this2._list = c;
            },
            autoHeight: true,
            className: 'KanbanList',
            style: { overflowY: 'hidden' },
            containerStyle: { transition: 'all 0.2s ease' },
            scrollTop: scrollTop,
            height: height,
            width: _this2.props.width,
            rowCount: _this2.props.rowCount,
            rowHeight: _this2.props.rowHeight,
            rowRenderer: _this2.props.rowRenderer
          });
        }
      );
    }
  }]);
  return ScrollableList;
}(_react.Component);

exports.default = ScrollableList;