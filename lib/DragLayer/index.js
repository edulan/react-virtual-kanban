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

var _reactDnd = require('react-dnd');

var _types = require('../types');

var ItemTypes = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(_ref) {
  var currentOffset = _ref.currentOffset;

  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  var x = currentOffset.x,
      y = currentOffset.y;

  var transform = 'translate(' + x + 'px, ' + y + 'px)';

  return {
    transform: transform
  };
}

var KanbanDragLayer = function (_Component) {
  (0, _inherits3.default)(KanbanDragLayer, _Component);

  function KanbanDragLayer(props) {
    (0, _classCallCheck3.default)(this, KanbanDragLayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (KanbanDragLayer.__proto__ || (0, _getPrototypeOf2.default)(KanbanDragLayer)).call(this, props));

    _this.renderItem = _this.renderItem.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(KanbanDragLayer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'renderItem',
    value: function renderItem(type, item) {
      var Preview = void 0;

      switch (type) {
        case ItemTypes.ROW_TYPE:
          Preview = this.props.itemPreviewComponent;

          return _react2.default.createElement(Preview, { row: item.row, rowId: item.rowId, rowStyle: item.rowStyle, containerWidth: item.containerWidth });
        case ItemTypes.LIST_TYPE:
          Preview = this.props.listPreviewComponent;

          return _react2.default.createElement(Preview, { list: item.list, listId: item.listId, listStyle: item.listStyle });
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          itemType = _props.itemType,
          isDragging = _props.isDragging;


      if (!isDragging) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'KanbanDragLayer' },
        _react2.default.createElement(
          'div',
          { style: getStyles(this.props) },
          this.renderItem(itemType, item)
        )
      );
    }
  }]);
  return KanbanDragLayer;
}(_react.Component);

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

exports.default = (0, _reactDnd.DragLayer)(collect)(KanbanDragLayer);