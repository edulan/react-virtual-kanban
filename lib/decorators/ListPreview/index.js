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

var ListPreview = function (_Component) {
  (0, _inherits3.default)(ListPreview, _Component);

  function ListPreview() {
    (0, _classCallCheck3.default)(this, ListPreview);
    return (0, _possibleConstructorReturn3.default)(this, (ListPreview.__proto__ || (0, _getPrototypeOf2.default)(ListPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListPreview, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          listId = _props.listId,
          listStyle = _props.listStyle;
      var width = listStyle.width,
          height = listStyle.height;


      return _react2.default.createElement(
        'div',
        { className: 'ListWrapper ListPreviewWrapper', style: { width: width, height: height } },
        _react2.default.createElement(
          'div',
          { className: 'ListContainer' },
          _react2.default.createElement(
            'div',
            { className: 'ListHeader' },
            _react2.default.createElement(
              'span',
              { className: 'ListTitle' },
              'List ',
              listId
            )
          )
        )
      );
    }
  }]);
  return ListPreview;
}(_react.Component);

exports.default = ListPreview;