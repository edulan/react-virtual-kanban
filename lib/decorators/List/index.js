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

var _propTypes = require('./propTypes');

var propTypes = _interopRequireWildcard(_propTypes);

var _PureComponent2 = require('../../PureComponent');

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
  'div',
  { className: 'ListFooter' },
  _react2.default.createElement(
    'div',
    { className: 'ListActions' },
    _react2.default.createElement(
      'button',
      { className: 'ListActionItem' },
      'Add a task...'
    )
  )
);

var List = function (_PureComponent) {
  (0, _inherits3.default)(List, _PureComponent);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          list = _props.list,
          listId = _props.listId,
          listStyle = _props.listStyle,
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget,
          isDragging = _props.isDragging,
          children = _props.children;


      var listContainerClass = (0, _classnames2.default)({
        'ListContainer': true,
        'ListPlaceholder': isDragging
      });

      return _react2.default.createElement(
        'div',
        { className: 'ListWrapper', style: listStyle },
        _react2.default.createElement(
          'div',
          { className: listContainerClass },
          connectDragSource(_react2.default.createElement(
            'div',
            { className: 'ListHeader' },
            _react2.default.createElement(
              'span',
              { className: 'ListTitle' },
              'List ',
              listId,
              ' (',
              list.rows.length,
              ')'
            )
          )),
          connectDropTarget(_react2.default.createElement(
            'div',
            { className: 'ListContent' },
            children
          )),
          _ref
        )
      );
    }
  }]);
  return List;
}(_PureComponent3.default);

exports.default = List;