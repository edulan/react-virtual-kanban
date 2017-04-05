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

var _propTypes = require('./propTypes');

var propTypes = _interopRequireWildcard(_propTypes);

var _PureComponent2 = require('../../PureComponent');

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemPreview = function (_PureComponent) {
  (0, _inherits3.default)(ItemPreview, _PureComponent);

  function ItemPreview() {
    (0, _classCallCheck3.default)(this, ItemPreview);
    return (0, _possibleConstructorReturn3.default)(this, (ItemPreview.__proto__ || (0, _getPrototypeOf2.default)(ItemPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(ItemPreview, [{
    key: 'render',
    value: function render() {
      // TODO: Grab a proper item width
      var _props = this.props,
          row = _props.row,
          rowStyle = _props.rowStyle,
          width = _props.containerWidth,
          isGhost = _props.isGhost;
      var height = rowStyle.height;


      return _react2.default.createElement(
        'div',
        { className: 'ItemWrapper ItemPreviewWrapper', style: { width: width, height: height } },
        _react2.default.createElement(
          'div',
          { className: 'ItemContainer', style: { opacity: isGhost ? 0.5 : 1 } },
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
}(_PureComponent3.default);

exports.default = ItemPreview;