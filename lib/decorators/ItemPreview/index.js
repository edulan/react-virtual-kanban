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

var _propTypes = require('../../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemPreview = function (_Component) {
  (0, _inherits3.default)(ItemPreview, _Component);

  function ItemPreview() {
    (0, _classCallCheck3.default)(this, ItemPreview);
    return (0, _possibleConstructorReturn3.default)(this, (ItemPreview.__proto__ || (0, _getPrototypeOf2.default)(ItemPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(ItemPreview, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      // TODO: Grab a proper item width
      var _props = this.props,
          row = _props.row,
          rowStyle = _props.rowStyle,
          width = _props.containerWidth;
      var height = rowStyle.height;


      return _react2.default.createElement(
        'div',
        { className: 'ItemWrapper ItemPreviewWrapper', style: { width: width, height: height } },
        _react2.default.createElement(
          'div',
          { className: 'ItemContainer' },
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
      );
    }
  }]);
  return ItemPreview;
}(_react.Component);

exports.default = ItemPreview;