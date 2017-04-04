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

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('../../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);
    return (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).apply(this, arguments));
  }

  (0, _createClass3.default)(Item, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          rowStyle = _props.rowStyle,
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget,
          isDragging = _props.isDragging;


      var itemContainerClass = (0, _classnames2.default)({
        'ItemContainer': true,
        'ItemPlaceholder': isDragging
      });

      return connectDragSource(connectDropTarget(_react2.default.createElement(
        'div',
        { className: 'ItemWrapper', style: rowStyle },
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
}(_react.Component);

exports.default = Item;