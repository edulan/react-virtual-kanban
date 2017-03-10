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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_decorators$Item) {
  (0, _inherits3.default)(Item, _decorators$Item);

  function Item(props) {
    (0, _classCallCheck3.default)(this, Item);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Item, [{
    key: 'onClick',
    value: function onClick() {
      var _props = this.props,
          rowIndex = _props.rowIndex,
          listIndex = _props.listIndex;


      this.props.updateItem(rowIndex, listIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          row = _props2.row,
          rowStyle = _props2.rowStyle,
          connectDragSource = _props2.connectDragSource,
          connectDropTarget = _props2.connectDropTarget,
          isDragging = _props2.isDragging;


      var itemContainerClass = (0, _classnames2.default)({
        'ItemContainer': true,
        'ItemPlaceholder': isDragging
      });

      return connectDragSource(connectDropTarget(_react2.default.createElement(
        'div',
        { className: 'ItemWrapper', style: rowStyle, onClick: this.onClick },
        _react2.default.createElement(
          'div',
          { className: itemContainerClass },
          _react2.default.createElement(
            'div',
            { className: 'ItemContent' },
            _react2.default.createElement(
              'p',
              null,
              row.name
            )
          )
        )
      )));
    }
  }]);
  return Item;
}(_.decorators.Item);

exports.default = Item;