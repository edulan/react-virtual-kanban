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

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactDndScrollzone = require('react-dnd-scrollzone');

var _reactDndScrollzone2 = _interopRequireDefault(_reactDndScrollzone);

var _reactVirtualized = require('react-virtualized');

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _updateLists = require('./updateLists');

var _decorators = require('../decorators');

var decorators = _interopRequireWildcard(_decorators);

var _DragLayer = require('../DragLayer');

var _DragLayer2 = _interopRequireDefault(_DragLayer);

var _SortableList = require('../SortableList');

var _SortableList2 = _interopRequireDefault(_SortableList);

var _dndCore = require('dnd-core');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridWithScrollZone = (0, _reactDndScrollzone2.default)(_reactVirtualized.Grid);
var horizontalStrength = (0, _reactDndScrollzone.createHorizontalStrength)(200);


/**
 * Grab dragDropManager from context
 *
 * More info: https://github.com/gaearon/react-dnd/issues/186
 */
var getDndContext = function () {
  var dragDropManager = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _dndCore.DragDropManager(_reactDndHtml5Backend2.default);
  return function (context) {
    return context.dragDropManager || dragDropManager;
  };
}();

var Kanban = function (_Component) {
  (0, _inherits3.default)(Kanban, _Component);

  function Kanban(props) {
    (0, _classCallCheck3.default)(this, Kanban);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Kanban.__proto__ || (0, _getPrototypeOf2.default)(Kanban)).call(this, props));

    _this.state = {
      lists: props.lists
    };

    _this.onMoveList = _this.onMoveList.bind(_this);
    _this.onMoveRow = _this.onMoveRow.bind(_this);
    _this.onDropList = _this.onDropList.bind(_this);
    _this.onDropRow = _this.onDropRow.bind(_this);
    _this.onDragBeginRow = _this.onDragBeginRow.bind(_this);
    _this.onDragEndRow = _this.onDragEndRow.bind(_this);
    _this.onDragBeginList = _this.onDragBeginList.bind(_this);
    _this.onDragEndList = _this.onDragEndList.bind(_this);
    _this.renderList = _this.renderList.bind(_this);
    _this.drawFrame = _this.drawFrame.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Kanban, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dragDropManager: getDndContext(this.context)
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.scheduleUpdate(function () {
        return { lists: nextProps.lists };
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      cancelAnimationFrame(this._requestedFrame);
    }
  }, {
    key: 'scheduleUpdate',
    value: function scheduleUpdate(updateFn, callbackFn) {
      this._pendingUpdateFn = updateFn;
      this._pendingUpdateCallbackFn = callbackFn;

      if (!this._requestedFrame) {
        this._requestedFrame = requestAnimationFrame(this.drawFrame);
      }
    }
  }, {
    key: 'drawFrame',
    value: function drawFrame() {
      var nextState = this._pendingUpdateFn(this.state);
      var callback = this._pendingUpdateCallbackFn;

      this.setState(nextState, callback);

      this._pendingUpdateFn = null;
      this._pendingUpdateCallbackFn = null;
      this._requestedFrame = null;
    }
  }, {
    key: 'onMoveList',
    value: function onMoveList(from, to) {
      var _this2 = this;

      this.scheduleUpdate(function (prevState) {
        return { lists: (0, _updateLists.updateLists)(prevState.lists, { from: from, to: to }) };
      }, function () {
        return _this2.props.onMoveList(from, to);
      });
    }
  }, {
    key: 'onMoveRow',
    value: function onMoveRow(from, to) {
      var _this3 = this;

      this.scheduleUpdate(function (prevState) {
        return { lists: (0, _updateLists.updateLists)(prevState.lists, { from: from, to: to }) };
      }, function () {
        return _this3.props.onMoveRow(from, to);
      });
    }
  }, {
    key: 'onDropList',
    value: function onDropList(_ref) {
      var listId = _ref.listId,
          listIndex = _ref.listIndex;

      this.props.onDropList({ listId: listId, listIndex: listIndex, lists: this.state.lists });
    }
  }, {
    key: 'onDropRow',
    value: function onDropRow(_ref2) {
      var rowId = _ref2.rowId,
          listId = _ref2.listId,
          rowIndex = _ref2.rowIndex,
          listIndex = _ref2.listIndex;

      this.props.onDropRow({ rowId: rowId, listId: listId, rowIndex: rowIndex, listIndex: listIndex, lists: this.state.lists });
    }
  }, {
    key: 'onDragEndRow',
    value: function onDragEndRow(_ref3) {
      var rowId = _ref3.rowId,
          listId = _ref3.listId,
          rowIndex = _ref3.rowIndex,
          listIndex = _ref3.listIndex;

      this.props.onDragEndRow({ rowId: rowId, listId: this.state.lists[listIndex].id, rowIndex: rowIndex, listIndex: listIndex });
    }
  }, {
    key: 'onDragBeginRow',
    value: function onDragBeginRow(_ref4) {
      var rowId = _ref4.rowId,
          listId = _ref4.listId,
          rowIndex = _ref4.rowIndex,
          listIndex = _ref4.listIndex;

      this.props.onDragBeginRow({ rowId: rowId, listId: this.state.lists[listIndex].id, rowIndex: rowIndex, listIndex: listIndex });
    }
  }, {
    key: 'onDragEndList',
    value: function onDragEndList(_ref5) {
      var rowId = _ref5.rowId,
          listId = _ref5.listId,
          rowIndex = _ref5.rowIndex,
          listIndex = _ref5.listIndex;

      this.props.onDragEndList({ rowId: rowId, listId: this.state.lists[listIndex].id, rowIndex: rowIndex, listIndex: listIndex });
    }
  }, {
    key: 'onDragBeginList',
    value: function onDragBeginList(_ref6) {
      var rowId = _ref6.rowId,
          listId = _ref6.listId,
          rowIndex = _ref6.rowIndex,
          listIndex = _ref6.listIndex;

      this.props.onDragBeginList({ rowId: rowId, listId: this.state.lists[listIndex].id, rowIndex: rowIndex, listIndex: listIndex });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.lists !== this.state.lists) {
        this._grid.wrappedInstance.forceUpdate();
      }
    }
  }, {
    key: 'renderList',
    value: function renderList(_ref7) {
      var columnIndex = _ref7.columnIndex,
          key = _ref7.key,
          style = _ref7.style;

      var list = this.state.lists[columnIndex];

      return _react2.default.createElement(_SortableList2.default, {
        key: list.id,
        listId: list.id,
        listIndex: columnIndex,
        listStyle: style,
        listComponent: this.props.listComponent,
        itemComponent: this.props.itemComponent,
        list: list,
        moveRow: this.onMoveRow,
        moveList: this.onMoveList,
        dropRow: this.onDropRow,
        dropList: this.onDropList,
        dragBeginRow: this.onDragBeginRow,
        dragEndRow: this.onDragEndRow,
        dragBeginList: this.onDragBeginList,
        dragEndList: this.onDragEndList,
        overscanRowCount: this.props.overscanRowCount,
        itemCacheKey: this.props.itemCacheKey
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var lists = this.state.lists;
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          listWidth = _props.listWidth,
          itemPreviewComponent = _props.itemPreviewComponent,
          listPreviewComponent = _props.listPreviewComponent,
          overscanListCount = _props.overscanListCount,
          scrollToList = _props.scrollToList,
          scrollToAlignment = _props.scrollToAlignment;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(GridWithScrollZone, {
          lists: lists,
          className: 'KanbanGrid'
          // Needed for fixing disappearing items when scrolling
          , containerStyle: { pointerEvents: 'auto' },
          ref: function ref(c) {
            return _this4._grid = c;
          },
          width: width,
          height: height,
          columnWidth: listWidth,
          rowHeight: height - (0, _scrollbarSize2.default)(),
          columnCount: lists.length,
          rowCount: 1,
          cellRenderer: this.renderList,
          overscanColumnCount: overscanListCount,
          horizontalStrength: horizontalStrength,
          scrollToColumn: scrollToList,
          scrollToAlignment: scrollToAlignment,
          verticalStrength: function verticalStrength() {},
          speed: 100
        }),
        _react2.default.createElement(_DragLayer2.default, {
          itemPreviewComponent: itemPreviewComponent,
          listPreviewComponent: listPreviewComponent
        })
      );
    }
  }]);
  return Kanban;
}(_react.Component);

Kanban.defaultProps = {
  lists: [],
  itemComponent: decorators.Item,
  listComponent: decorators.List,
  itemPreviewComponent: decorators.ItemPreview,
  listPreviewComponent: decorators.ListPreview,
  onMoveRow: function onMoveRow() {},
  onMoveList: function onMoveList() {},
  onDropRow: function onDropRow() {},
  onDropList: function onDropList() {},
  onDragBeginRow: function onDragBeginRow() {},
  onDragEndRow: function onDragEndRow() {},
  onDragBeginList: function onDragBeginList() {},
  onDragEndList: function onDragEndList() {},
  overscanListCount: 2,
  overscanRowCount: 2,
  itemCacheKey: function itemCacheKey(_ref8) {
    var id = _ref8.id;
    return '' + id;
  }
};
Kanban.childContextTypes = {
  dragDropManager: _react2.default.PropTypes.object
};
Kanban.contextTypes = {
  dragDropManager: _react2.default.PropTypes.object
};
exports.default = Kanban;