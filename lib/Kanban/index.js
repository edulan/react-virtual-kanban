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

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactDndScrollzone = require('react-dnd-scrollzone');

var _reactDndScrollzone2 = _interopRequireDefault(_reactDndScrollzone);

var _reactVirtualized = require('react-virtualized');

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _updateLists = require('./updateLists');

var _propTypes = require('./propTypes');

var propTypes = _interopRequireWildcard(_propTypes);

var _decorators = require('../decorators');

var decorators = _interopRequireWildcard(_decorators);

var _DragLayer = require('../DragLayer');

var _DragLayer2 = _interopRequireDefault(_DragLayer);

var _SortableList = require('../SortableList');

var _SortableList2 = _interopRequireDefault(_SortableList);

var _dndCore = require('dnd-core');

var _PureComponent2 = require('../PureComponent');

var _PureComponent3 = _interopRequireDefault(_PureComponent2);

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

var Kanban = function (_PureComponent) {
  (0, _inherits3.default)(Kanban, _PureComponent);

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
    _this.findItemIndex = _this.findItemIndex.bind(_this);
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
        var lists = _this2.state.lists;

        _this2.props.onMoveList({
          listId: from.listId,
          listIndex: (0, _updateLists.findListIndex)(lists, from.listId),
          lists: lists
        });
      });
    }
  }, {
    key: 'onMoveRow',
    value: function onMoveRow(from, to) {
      var _this3 = this;

      this.scheduleUpdate(function (prevState) {
        return { lists: (0, _updateLists.updateLists)(prevState.lists, { from: from, to: to }) };
      }, function () {
        var lists = _this3.state.lists;

        _this3.props.onMoveRow({
          itemId: from.itemId,
          listId: (0, _updateLists.findItemListId)(lists, from.itemId),
          itemIndex: (0, _updateLists.findItemIndex)(lists, from.itemId),
          listIndex: (0, _updateLists.findItemListIndex)(lists, from.itemId),
          lists: lists
        });
      });
    }
  }, {
    key: 'onDropList',
    value: function onDropList(_ref) {
      var listId = _ref.listId;

      this.props.onDropList(this.listEndData({ listId: listId }));
    }
  }, {
    key: 'itemEndData',
    value: function itemEndData(_ref2) {
      var itemId = _ref2.itemId;

      var lists = this.state.lists;

      return {
        itemId: itemId,
        get rowId() {
          return itemId;
        },
        listId: (0, _updateLists.findItemListId)(lists, itemId),
        rowIndex: (0, _updateLists.findItemIndex)(lists, itemId),
        listIndex: (0, _updateLists.findItemListIndex)(lists, itemId),
        lists: lists
      };
    }
  }, {
    key: 'listEndData',
    value: function listEndData(_ref3) {
      var listId = _ref3.listId;

      var lists = this.state.lists;

      return {
        listId: listId,
        listIndex: (0, _updateLists.findListIndex)(lists, listId),
        lists: lists
      };
    }
  }, {
    key: 'onDropRow',
    value: function onDropRow(_ref4) {
      var itemId = _ref4.itemId;

      this.props.onDropRow(this.itemEndData({ itemId: itemId }));
    }
  }, {
    key: 'onDragBeginRow',
    value: function onDragBeginRow(data) {
      this.props.onDragBeginRow(data);
    }
  }, {
    key: 'onDragEndRow',
    value: function onDragEndRow(_ref5) {
      var itemId = _ref5.itemId;

      this.props.onDragEndRow(this.itemEndData({ itemId: itemId }));
    }
  }, {
    key: 'onDragBeginList',
    value: function onDragBeginList(data) {
      this.props.onDragBeginList(data);
    }
  }, {
    key: 'onDragEndList',
    value: function onDragEndList(_ref6) {
      var listId = _ref6.listId;

      this.props.onDragEndList(this.listEndData({ listId: listId }));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.lists !== this.state.lists) {
        this._grid.wrappedInstance.forceUpdate();
      }
    }
  }, {
    key: 'findItemIndex',
    value: function findItemIndex(itemId) {
      return (0, _updateLists.findItemIndex)(this.state.lists, itemId);
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
        listStyle: style,
        listComponent: this.props.listComponent,
        itemComponent: this.props.itemComponent,
        list: list,
        moveRow: this.onMoveRow,
        moveList: this.onMoveList,
        dropRow: this.onDropRow,
        dropList: this.onDropList,
        dragEndRow: this.onDragEndRow,
        dragBeginRow: this.onDragBeginRow,
        dragEndList: this.onDragEndList,
        dragBeginList: this.onDragBeginList,
        overscanRowCount: this.props.overscanRowCount,
        itemCacheKey: this.props.itemCacheKey,
        findItemIndex: this.findItemIndex,
        dndDisabled: this.props.dndDisabled
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
          lists: lists,
          itemPreviewComponent: itemPreviewComponent,
          listPreviewComponent: listPreviewComponent
        })
      );
    }
  }]);
  return Kanban;
}(_PureComponent3.default);

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
  onDragBeginList: function onDragBeginList() {},
  onDragEndList: function onDragEndList() {},
  onDragBeginRow: function onDragBeginRow() {},
  onDragEndRow: function onDragEndRow() {},
  overscanListCount: 2,
  overscanRowCount: 2,
  itemCacheKey: function itemCacheKey(_ref8) {
    var id = _ref8.id;
    return '' + id;
  },
  dndDisabled: false
};
Kanban.childContextTypes = {
  dragDropManager: _react2.default.PropTypes.object
};
Kanban.contextTypes = {
  dragDropManager: _react2.default.PropTypes.object
};
exports.default = Kanban;