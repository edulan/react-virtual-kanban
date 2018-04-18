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

var _reactDndScrollzone = require('react-dnd-scrollzone');

var _reactDndScrollzone2 = _interopRequireDefault(_reactDndScrollzone);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _SortableItem = require('../SortableItem');

var _SortableItem2 = _interopRequireDefault(_SortableItem);

var _types = require('../types');

var _dragSpec = require('./dragSpec');

var dragSpec = _interopRequireWildcard(_dragSpec);

var _dropSpec = require('./dropSpec');

var dropSpec = _interopRequireWildcard(_dropSpec);

var _propTypes = require('./propTypes');

var propTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const identity = (c) => c;
var VERTICAL_SCROLL_SPEED = 20;
var VERTICAL_SCROLL_STRENGTH = 50;
var ListWithScrollZone = (0, _reactDndScrollzone2.default)(_reactVirtualized.List);
var verticalStrength = (0, _reactDndScrollzone.createVerticalStrength)(VERTICAL_SCROLL_STRENGTH);

var SortableList = function (_React$PureComponent) {
  (0, _inherits3.default)(SortableList, _React$PureComponent);

  function SortableList(props) {
    (0, _classCallCheck3.default)(this, SortableList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SortableList.__proto__ || (0, _getPrototypeOf2.default)(SortableList)).call(this, props));

    _this.cache = new _reactVirtualized.CellMeasurerCache({
      defaultHeight: 50,
      fixedWidth: true
    });
    _this.renderRow = _this.renderRow.bind(_this);
    _this.renderList = _this.renderList.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SortableList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
        captureDraggingState: true
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.list.rows !== this.props.list.rows && !!this._list) {
        this._list.wrappedInstance.recomputeRowHeights();
      }
    }
  }, {
    key: 'renderRow',
    value: function renderRow(_ref) {
      var index = _ref.index,
          key = _ref.key,
          style = _ref.style,
          parent = _ref.parent;

      var row = this.props.list.rows[index];
      return _react2.default.createElement(
        _reactVirtualized.CellMeasurer,
        {
          cache: this.cache,
          parent: parent,
          key: key,
          columnIndex: 0,
          rowIndex: index
        },
        _react2.default.createElement(_SortableItem2.default, {
          key: row.id,
          row: row,
          rowId: row.id,
          listId: this.props.listId,
          rowStyle: style,
          itemComponent: this.props.itemComponent,
          moveRow: this.props.moveRow,
          dropRow: this.props.dropRow,
          dragBeginRow: this.props.dragBeginRow,
          dragEndRow: this.props.dragEndRow,
          findItemIndex: this.props.findItemIndex,
          dndDisabled: this.props.dndDisabled
        })
      );
    }
  }, {
    key: 'renderList',
    value: function renderList(_ref2) {
      var _this2 = this;

      var width = _ref2.width,
          height = _ref2.height;

      // TODO: Check whether scrollbar is visible or not :/
      return _react2.default.createElement(
        _reactVirtualized.CellMeasurer,
        {
          cache: this.props.kanbanCache,
          parent: this.props.kanbanParent,
          key: this.props.kanbanKey,
          columnIndex: this.props.columnIndex,
          rowIndex: this.props.rowIndex
        },
        _react2.default.createElement(ListWithScrollZone, {
          ref: function ref(c) {
            return _this2._list = c;
          },
          className: 'KanbanList',
          width: width,
          height: height,
          rowHeight: this.cache.rowHeight,
          rowCount: this.props.list.rows.length,
          rowRenderer: this.renderRow,
          overscanRowCount: this.props.overscanRowCount,
          verticalStrength: verticalStrength,
          speed: VERTICAL_SCROLL_SPEED,
          deferredMeasurementCache: this.cache
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          list = _props.list,
          listId = _props.listId,
          DecoratedList = _props.listComponent,
          isDragging = _props.isDragging,
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget,
          listStyle = _props.listStyle;


      return _react2.default.createElement(
        DecoratedList,
        {
          list: list,
          listId: listId,
          listStyle: listStyle,
          isDragging: isDragging,
          connectDragSource: connectDragSource,
          connectDropTarget: connectDropTarget
        },
        _react2.default.createElement(
          _reactVirtualized.AutoSizer,
          null,
          function (dimensions) {
            return _this3.renderList(dimensions);
          }
        )
      );
    }
  }]);
  return SortableList;
}(_react2.default.PureComponent);

var connectDrop = (0, _reactDnd.DropTarget)([_types.LIST_TYPE, _types.ROW_TYPE], dropSpec, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
});

var connectDrag = (0, _reactDnd.DragSource)(_types.LIST_TYPE, dragSpec, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
});

exports.default = connectDrop(connectDrag(SortableList));