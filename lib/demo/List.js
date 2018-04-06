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

var _src = require('../../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_decorators$List) {
  (0, _inherits3.default)(List, _decorators$List);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          listId = _props.listId,
          style = _props.style,
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
        { className: 'ListWrapper', style: style },
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
              listId
            )
          )),
          connectDropTarget(_react2.default.createElement(
            'div',
            { className: 'ListContent' },
            children
          )),
          _react2.default.createElement(
            'div',
            { className: 'ListFooter' },
            _react2.default.createElement(
              'div',
              { className: 'ListActions' },
              _react2.default.createElement(
                'button',
                { className: 'ListActionItem', onClick: this.props.onAddTask },
                'Add a task...'
              )
            )
          )
        )
      );
    }
  }]);
  return List;
}(_src.decorators.List);

exports.default = List;