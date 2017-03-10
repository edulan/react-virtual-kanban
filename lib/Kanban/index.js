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

    _this.renderList = _this.renderList.bind(_this);
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
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.lists !== this.props.lists) {
        this._grid.wrappedInstance.forceUpdate();
      }
    }
  }, {
    key: 'renderList',
    value: function renderList(_ref) {
      var columnIndex = _ref.columnIndex,
          key = _ref.key,
          style = _ref.style;

      var list = this.props.lists[columnIndex];

      return _react2.default.createElement(_SortableList2.default, {
        key: list.id,
        listId: list.id,
        listIndex: columnIndex,
        listStyle: style,
        listComponent: this.props.listComponent,
        itemComponent: this.props.itemComponent,
        list: list,
        moveRow: this.props.onMoveRow,
        moveList: this.props.onMoveList,
        dropRow: this.props.onDropRow,
        dropList: this.props.onDropList,
        overscanRowCount: this.props.overscanRowCount,
        itemCacheKey: this.props.itemCacheKey
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          height = _props.height,
          lists = _props.lists,
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
            return _this2._grid = c;
          },
          width: width,
          height: height,
          columnWidth: listWidth,
          rowHeight: height - (0, _scrollbarSize2.default)(),
          columnCount: lists.length,
          rowCount: 1,
          cellRenderer: this.renderList,
          overscanColumnCount: overscanListCount,
          scrollToColumn: scrollToList,
          scrollToAlignment: scrollToAlignment,
          horizontalStrength: horizontalStrength,
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
  overscanListCount: 2,
  overscanRowCount: 2,
  itemCacheKey: function itemCacheKey(_ref2) {
    var id = _ref2.id;
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