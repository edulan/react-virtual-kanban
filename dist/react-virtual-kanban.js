!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("React"), require("ReactDOM"), require("React.addons.shallowCompare")) : "function" == typeof define && define.amd ? define([ "React", "ReactDOM", "React.addons.shallowCompare" ], factory) : "object" == typeof exports ? exports.ReactVirtualKanban = factory(require("React"), require("ReactDOM"), require("React.addons.shallowCompare")) : root.ReactVirtualKanban = factory(root.React, root.ReactDOM, root["React.addons.shallowCompare"]);
}(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_126__) {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: !1
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.loaded = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.p = "", __webpack_require__(0);
    }([ /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.VirtualKanban = exports.decorators = void 0;
        var _Kanban = __webpack_require__(1), _Kanban2 = _interopRequireDefault(_Kanban), _decorators = __webpack_require__(178), decorators = _interopRequireWildcard(_decorators);
        exports.decorators = decorators, exports.VirtualKanban = _Kanban2["default"];
    }, /* 1 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(3), _reactDom2 = _interopRequireDefault(_reactDom), _reactDndHtml5Backend = __webpack_require__(4), _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend), _reactDndScrollzone = __webpack_require__(113), _reactDndScrollzone2 = _interopRequireDefault(_reactDndScrollzone), _scrollbarSize = __webpack_require__(121), _scrollbarSize2 = _interopRequireDefault(_scrollbarSize), _reactVirtualized = __webpack_require__(123), _scrollIntoView = __webpack_require__(170), _scrollIntoView2 = _interopRequireDefault(_scrollIntoView), _updateLists = __webpack_require__(171), _propTypes = __webpack_require__(177), _decorators = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(178)), decorators = _interopRequireWildcard(_decorators), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _DragLayer = __webpack_require__(189), _DragLayer2 = _interopRequireDefault(_DragLayer), _SortableList = __webpack_require__(251), _SortableList2 = _interopRequireDefault(_SortableList), _dndCore = __webpack_require__(192), _PureComponent2 = __webpack_require__(182), _PureComponent3 = _interopRequireDefault(_PureComponent2), GridWithScrollZone = (0, 
        _reactDndScrollzone2["default"])(_reactVirtualized.Grid), horizontalStrength = (0, 
        _reactDndScrollzone.createHorizontalStrength)(200), getDndContext = function() {
            var dragDropManager = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new _dndCore.DragDropManager(_reactDndHtml5Backend2["default"]);
            return function(context) {
                return context.dragDropManager || dragDropManager;
            };
        }(), Kanban = function(_PureComponent) {
            function Kanban(props) {
                _classCallCheck(this, Kanban);
                var _this = _possibleConstructorReturn(this, (Kanban.__proto__ || Object.getPrototypeOf(Kanban)).call(this, props));
                return _this.state = {
                    lists: props.lists
                }, _this.onMoveList = _this.onMoveList.bind(_this), _this.onMoveRow = _this.onMoveRow.bind(_this), 
                _this.onDropList = _this.onDropList.bind(_this), _this.onDropRow = _this.onDropRow.bind(_this), 
                _this.onDragBeginRow = _this.onDragBeginRow.bind(_this), _this.onDragEndRow = _this.onDragEndRow.bind(_this), 
                _this.onDragBeginList = _this.onDragBeginList.bind(_this), _this.onDragEndList = _this.onDragEndList.bind(_this), 
                _this.renderList = _this.renderList.bind(_this), _this.findItemIndex = _this.findItemIndex.bind(_this), 
                _this.drawFrame = _this.drawFrame.bind(_this), _this.findItemIndex = _this.findItemIndex.bind(_this), 
                _this.refsByIndex = {}, _this;
            }
            return _inherits(Kanban, _PureComponent), _createClass(Kanban, [ {
                key: "getChildContext",
                value: function() {
                    return {
                        dragDropManager: getDndContext(this.context)
                    };
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(nextProps) {
                    this.scheduleUpdate(function() {
                        return {
                            lists: nextProps.lists
                        };
                    });
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    cancelAnimationFrame(this._requestedFrame);
                }
            }, {
                key: "scrollToList",
                value: function(index) {
                    if (void 0 !== index) {
                        var targetNode = _reactDom2["default"].findDOMNode(this.refsByIndex[index]);
                        (0, _scrollIntoView2["default"])(targetNode);
                    }
                }
            }, {
                key: "scheduleUpdate",
                value: function(updateFn, callbackFn) {
                    this._pendingUpdateFn = updateFn, this._pendingUpdateCallbackFn = callbackFn, this._requestedFrame || (this._requestedFrame = requestAnimationFrame(this.drawFrame));
                }
            }, {
                key: "drawFrame",
                value: function() {
                    var nextState = this._pendingUpdateFn(this.state), callback = this._pendingUpdateCallbackFn;
                    this.setState(nextState, callback), this._pendingUpdateFn = null, this._pendingUpdateCallbackFn = null, 
                    this._requestedFrame = null;
                }
            }, {
                key: "onMoveList",
                value: function(from, to) {
                    var _this2 = this;
                    this.scheduleUpdate(function(prevState) {
                        return {
                            lists: (0, _updateLists.updateLists)(prevState.lists, {
                                from: from,
                                to: to
                            })
                        };
                    }, function() {
                        var lists = _this2.state.lists;
                        _this2.props.onMoveList({
                            listId: from.listId,
                            listIndex: (0, _updateLists.findListIndex)(lists, from.listId),
                            lists: lists
                        });
                    });
                }
            }, {
                key: "onMoveRow",
                value: function(from, to) {
                    var _this3 = this;
                    this.scheduleUpdate(function(prevState) {
                        return {
                            lists: (0, _updateLists.updateLists)(prevState.lists, {
                                from: from,
                                to: to
                            })
                        };
                    }, function() {
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
                key: "onDropList",
                value: function(_ref) {
                    var listId = _ref.listId;
                    this.props.onDropList(this.listEndData({
                        listId: listId
                    }));
                }
            }, {
                key: "itemEndData",
                value: function(_ref2) {
                    var itemId = _ref2.itemId, lists = this.state.lists;
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
                key: "listEndData",
                value: function(_ref3) {
                    var listId = _ref3.listId, lists = this.state.lists;
                    return {
                        listId: listId,
                        listIndex: (0, _updateLists.findListIndex)(lists, listId),
                        lists: lists
                    };
                }
            }, {
                key: "onDropRow",
                value: function(_ref4) {
                    var itemId = _ref4.itemId;
                    this.props.onDropRow(this.itemEndData({
                        itemId: itemId
                    }));
                }
            }, {
                key: "onDragBeginRow",
                value: function(data) {
                    this.props.onDragBeginRow(data);
                }
            }, {
                key: "onDragEndRow",
                value: function(_ref5) {
                    var itemId = _ref5.itemId;
                    this.props.onDragEndRow(this.itemEndData({
                        itemId: itemId
                    }));
                }
            }, {
                key: "onDragBeginList",
                value: function(data) {
                    this.props.onDragBeginList(data);
                }
            }, {
                key: "onDragEndList",
                value: function(_ref6) {
                    var listId = _ref6.listId;
                    this.props.onDragEndList(this.listEndData({
                        listId: listId
                    }));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "componentDidUpdate",
                value: function(_prevProps, prevState) {
                    prevState.lists !== this.state.lists && this._grid.wrappedInstance.forceUpdate();
                }
            }, {
                key: "findItemIndex",
                value: function(itemId) {
                    return (0, _updateLists.findItemIndex)(this.state.lists, itemId);
                }
            }, {
                key: "renderList",
                value: function(_ref7) {
                    var columnIndex = _ref7.columnIndex, style = (_ref7.key, _ref7.style), list = this.state.lists[columnIndex];
                    return _react2["default"].createElement(_SortableList2["default"], {
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
                key: "render",
                value: function() {
                    var _this4 = this, lists = this.state.lists, _props = this.props, width = _props.width, height = _props.height, listWidth = _props.listWidth, itemPreviewComponent = _props.itemPreviewComponent, listPreviewComponent = _props.listPreviewComponent, overscanListCount = _props.overscanListCount, scrollToList = _props.scrollToList, scrollToAlignment = _props.scrollToAlignment;
                    return _react2["default"].createElement("div", null, _react2["default"].createElement(GridWithScrollZone, {
                        lists: lists,
                        className: "KanbanGrid",
                        containerStyle: {
                            pointerEvents: "auto"
                        },
                        ref: function(c) {
                            return _this4._grid = c;
                        },
                        width: width,
                        height: height,
                        columnWidth: listWidth,
                        rowHeight: height - (0, _scrollbarSize2["default"])(),
                        columnCount: lists.length,
                        rowCount: 1,
                        cellRenderer: this.renderList,
                        overscanColumnCount: overscanListCount,
                        horizontalStrength: horizontalStrength,
                        scrollToColumn: scrollToList,
                        scrollToAlignment: scrollToAlignment,
                        verticalStrength: function() {},
                        speed: 100
                    }), _react2["default"].createElement(_DragLayer2["default"], {
                        lists: lists,
                        itemPreviewComponent: itemPreviewComponent,
                        listPreviewComponent: listPreviewComponent
                    }));
                }
            } ]), Kanban;
        }(_PureComponent3["default"]);
        Kanban.defaultProps = {
            lists: [],
            itemComponent: decorators.Item,
            listComponent: decorators.List,
            itemPreviewComponent: decorators.ItemPreview,
            listPreviewComponent: decorators.ListPreview,
            onMoveRow: function() {},
            onMoveList: function() {},
            onDropRow: function() {},
            onDropList: function() {},
            onDragBeginList: function() {},
            onDragEndList: function() {},
            onDragBeginRow: function() {},
            onDragEndRow: function() {},
            overscanListCount: 2,
            overscanRowCount: 2,
            itemCacheKey: function(_ref8) {
                var id = _ref8.id;
                return "" + id;
            },
            dndDisabled: !1
        }, Kanban.childContextTypes = {
            dragDropManager: _react2["default"].PropTypes.object
        }, Kanban.contextTypes = {
            dragDropManager: _react2["default"].PropTypes.object
        }, exports["default"] = Kanban;
    }, /* 2 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
    }, /* 3 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
    }, /* 4 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function createHTML5Backend(manager) {
            return new _HTML5Backend2["default"](manager);
        }
        exports.__esModule = !0, exports["default"] = createHTML5Backend;
        var _HTML5Backend = __webpack_require__(5), _HTML5Backend2 = _interopRequireDefault(_HTML5Backend), _getEmptyImage = __webpack_require__(112), _getEmptyImage2 = _interopRequireDefault(_getEmptyImage), _NativeTypes = __webpack_require__(111), NativeTypes = _interopRequireWildcard(_NativeTypes);
        exports.NativeTypes = NativeTypes, exports.getEmptyImage = _getEmptyImage2["default"];
    }, /* 5 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        exports.__esModule = !0;
        var _lodashDefaults = __webpack_require__(6), _lodashDefaults2 = _interopRequireDefault(_lodashDefaults), _shallowEqual = __webpack_require__(58), _shallowEqual2 = _interopRequireDefault(_shallowEqual), _EnterLeaveCounter = __webpack_require__(59), _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter), _BrowserDetector = __webpack_require__(106), _OffsetUtils = __webpack_require__(108), _NativeDragSources = __webpack_require__(110), _NativeTypes = __webpack_require__(111), NativeTypes = _interopRequireWildcard(_NativeTypes), HTML5Backend = function() {
            function HTML5Backend(manager) {
                _classCallCheck(this, HTML5Backend), this.actions = manager.getActions(), this.monitor = manager.getMonitor(), 
                this.registry = manager.getRegistry(), this.sourcePreviewNodes = {}, this.sourcePreviewNodeOptions = {}, 
                this.sourceNodes = {}, this.sourceNodeOptions = {}, this.enterLeaveCounter = new _EnterLeaveCounter2["default"](), 
                this.getSourceClientOffset = this.getSourceClientOffset.bind(this), this.handleTopDragStart = this.handleTopDragStart.bind(this), 
                this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this), this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this), 
                this.handleTopDragEnter = this.handleTopDragEnter.bind(this), this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this), 
                this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this), this.handleTopDragOver = this.handleTopDragOver.bind(this), 
                this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this), this.handleTopDrop = this.handleTopDrop.bind(this), 
                this.handleTopDropCapture = this.handleTopDropCapture.bind(this), this.handleSelectStart = this.handleSelectStart.bind(this), 
                this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this), 
                this.endDragNativeItem = this.endDragNativeItem.bind(this);
            }
            return HTML5Backend.prototype.setup = function() {
                if ("undefined" != typeof window) {
                    if (this.constructor.isSetUp) throw new Error("Cannot have two HTML5 backends at the same time.");
                    this.constructor.isSetUp = !0, this.addEventListeners(window);
                }
            }, HTML5Backend.prototype.teardown = function() {
                "undefined" != typeof window && (this.constructor.isSetUp = !1, this.removeEventListeners(window), 
                this.clearCurrentDragSourceNode());
            }, HTML5Backend.prototype.addEventListeners = function(target) {
                target.addEventListener("dragstart", this.handleTopDragStart), target.addEventListener("dragstart", this.handleTopDragStartCapture, !0), 
                target.addEventListener("dragend", this.handleTopDragEndCapture, !0), target.addEventListener("dragenter", this.handleTopDragEnter), 
                target.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), 
                target.addEventListener("dragover", this.handleTopDragOver), target.addEventListener("dragover", this.handleTopDragOverCapture, !0), 
                target.addEventListener("drop", this.handleTopDrop), target.addEventListener("drop", this.handleTopDropCapture, !0);
            }, HTML5Backend.prototype.removeEventListeners = function(target) {
                target.removeEventListener("dragstart", this.handleTopDragStart), target.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), 
                target.removeEventListener("dragend", this.handleTopDragEndCapture, !0), target.removeEventListener("dragenter", this.handleTopDragEnter), 
                target.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), 
                target.removeEventListener("dragover", this.handleTopDragOver), target.removeEventListener("dragover", this.handleTopDragOverCapture, !0), 
                target.removeEventListener("drop", this.handleTopDrop), target.removeEventListener("drop", this.handleTopDropCapture, !0);
            }, HTML5Backend.prototype.connectDragPreview = function(sourceId, node, options) {
                var _this = this;
                return this.sourcePreviewNodeOptions[sourceId] = options, this.sourcePreviewNodes[sourceId] = node, 
                function() {
                    delete _this.sourcePreviewNodes[sourceId], delete _this.sourcePreviewNodeOptions[sourceId];
                };
            }, HTML5Backend.prototype.connectDragSource = function(sourceId, node, options) {
                var _this2 = this;
                this.sourceNodes[sourceId] = node, this.sourceNodeOptions[sourceId] = options;
                var handleDragStart = function(e) {
                    return _this2.handleDragStart(e, sourceId);
                }, handleSelectStart = function(e) {
                    return _this2.handleSelectStart(e, sourceId);
                };
                return node.setAttribute("draggable", !0), node.addEventListener("dragstart", handleDragStart), 
                node.addEventListener("selectstart", handleSelectStart), function() {
                    delete _this2.sourceNodes[sourceId], delete _this2.sourceNodeOptions[sourceId], 
                    node.removeEventListener("dragstart", handleDragStart), node.removeEventListener("selectstart", handleSelectStart), 
                    node.setAttribute("draggable", !1);
                };
            }, HTML5Backend.prototype.connectDropTarget = function(targetId, node) {
                var _this3 = this, handleDragEnter = function(e) {
                    return _this3.handleDragEnter(e, targetId);
                }, handleDragOver = function(e) {
                    return _this3.handleDragOver(e, targetId);
                }, handleDrop = function(e) {
                    return _this3.handleDrop(e, targetId);
                };
                return node.addEventListener("dragenter", handleDragEnter), node.addEventListener("dragover", handleDragOver), 
                node.addEventListener("drop", handleDrop), function() {
                    node.removeEventListener("dragenter", handleDragEnter), node.removeEventListener("dragover", handleDragOver), 
                    node.removeEventListener("drop", handleDrop);
                };
            }, HTML5Backend.prototype.getCurrentSourceNodeOptions = function() {
                var sourceId = this.monitor.getSourceId(), sourceNodeOptions = this.sourceNodeOptions[sourceId];
                return _lodashDefaults2["default"](sourceNodeOptions || {}, {
                    dropEffect: "move"
                });
            }, HTML5Backend.prototype.getCurrentDropEffect = function() {
                return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
            }, HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function() {
                var sourceId = this.monitor.getSourceId(), sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];
                return _lodashDefaults2["default"](sourcePreviewNodeOptions || {}, {
                    anchorX: .5,
                    anchorY: .5,
                    captureDraggingState: !1
                });
            }, HTML5Backend.prototype.getSourceClientOffset = function(sourceId) {
                return _OffsetUtils.getNodeClientOffset(this.sourceNodes[sourceId]);
            }, HTML5Backend.prototype.isDraggingNativeItem = function() {
                var itemType = this.monitor.getItemType();
                return Object.keys(NativeTypes).some(function(key) {
                    return NativeTypes[key] === itemType;
                });
            }, HTML5Backend.prototype.beginDragNativeItem = function(type) {
                this.clearCurrentDragSourceNode();
                var SourceType = _NativeDragSources.createNativeDragSource(type);
                this.currentNativeSource = new SourceType(), this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource), 
                this.actions.beginDrag([ this.currentNativeHandle ]), // On Firefox, if mousemove fires, the drag is over but browser failed to tell us.
                // This is not true for other browsers.
                _BrowserDetector.isFirefox() && window.addEventListener("mousemove", this.endDragNativeItem, !0);
            }, HTML5Backend.prototype.endDragNativeItem = function() {
                this.isDraggingNativeItem() && (_BrowserDetector.isFirefox() && window.removeEventListener("mousemove", this.endDragNativeItem, !0), 
                this.actions.endDrag(), this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, 
                this.currentNativeSource = null);
            }, HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function() {
                var node = this.currentDragSourceNode;
                document.body.contains(node) || this.clearCurrentDragSourceNode() && this.actions.endDrag();
            }, HTML5Backend.prototype.setCurrentDragSourceNode = function(node) {
                this.clearCurrentDragSourceNode(), this.currentDragSourceNode = node, this.currentDragSourceNodeOffset = _OffsetUtils.getNodeClientOffset(node), 
                this.currentDragSourceNodeOffsetChanged = !1, // Receiving a mouse event in the middle of a dragging operation
                // means it has ended and the drag source node disappeared from DOM,
                // so the browser didn't dispatch the dragend event.
                window.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
            }, HTML5Backend.prototype.clearCurrentDragSourceNode = function() {
                return !!this.currentDragSourceNode && (this.currentDragSourceNode = null, this.currentDragSourceNodeOffset = null, 
                this.currentDragSourceNodeOffsetChanged = !1, window.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0), 
                !0);
            }, HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function() {
                var node = this.currentDragSourceNode;
                return !!node && (!!this.currentDragSourceNodeOffsetChanged || (this.currentDragSourceNodeOffsetChanged = !_shallowEqual2["default"](_OffsetUtils.getNodeClientOffset(node), this.currentDragSourceNodeOffset), 
                this.currentDragSourceNodeOffsetChanged));
            }, HTML5Backend.prototype.handleTopDragStartCapture = function() {
                this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
            }, HTML5Backend.prototype.handleDragStart = function(e, sourceId) {
                this.dragStartSourceIds.unshift(sourceId);
            }, HTML5Backend.prototype.handleTopDragStart = function(e) {
                var _this4 = this, dragStartSourceIds = this.dragStartSourceIds;
                this.dragStartSourceIds = null;
                var clientOffset = _OffsetUtils.getEventClientOffset(e);
                // Don't publish the source just yet (see why below)
                this.actions.beginDrag(dragStartSourceIds, {
                    publishSource: !1,
                    getSourceClientOffset: this.getSourceClientOffset,
                    clientOffset: clientOffset
                });
                var dataTransfer = e.dataTransfer, nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);
                if (this.monitor.isDragging()) {
                    if ("function" == typeof dataTransfer.setDragImage) {
                        // Use custom drag image if user specifies it.
                        // If child drag source refuses drag but parent agrees,
                        // use parent's node as drag image. Neither works in IE though.
                        var sourceId = this.monitor.getSourceId(), sourceNode = this.sourceNodes[sourceId], dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode, _getCurrentSourcePreviewNodeOptions = this.getCurrentSourcePreviewNodeOptions(), anchorX = _getCurrentSourcePreviewNodeOptions.anchorX, anchorY = _getCurrentSourcePreviewNodeOptions.anchorY, anchorPoint = {
                            anchorX: anchorX,
                            anchorY: anchorY
                        }, dragPreviewOffset = _OffsetUtils.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint);
                        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
                    }
                    try {
                        // Firefox won't drag without setting data
                        dataTransfer.setData("application/json", {});
                    } catch (err) {}
                    // IE doesn't support MIME types in setData
                    // Store drag source node so we can check whether
                    // it is removed from DOM and trigger endDrag manually.
                    this.setCurrentDragSourceNode(e.target);
                    // Now we are ready to publish the drag source.. or are we not?
                    var _getCurrentSourcePreviewNodeOptions2 = this.getCurrentSourcePreviewNodeOptions(), captureDraggingState = _getCurrentSourcePreviewNodeOptions2.captureDraggingState;
                    captureDraggingState ? // In some cases the user may want to override this behavior, e.g.
                    // to work around IE not supporting custom drag previews.
                    //
                    // When using a custom drag layer, the only way to prevent
                    // the default drag preview from drawing in IE is to screenshot
                    // the dragging state in which the node itself has zero opacity
                    // and height. In this case, though, returning null from render()
                    // will abruptly end the dragging, which is not obvious.
                    //
                    // This is the reason such behavior is strictly opt-in.
                    this.actions.publishDragSource() : // Usually we want to publish it in the next tick so that browser
                    // is able to screenshot the current (not yet dragging) state.
                    //
                    // It also neatly avoids a situation where render() returns null
                    // in the same tick for the source element, and browser freaks out.
                    setTimeout(function() {
                        return _this4.actions.publishDragSource();
                    });
                } else if (nativeType) // A native item (such as URL) dragged from inside the document
                this.beginDragNativeItem(nativeType); else {
                    if (!(dataTransfer.types || e.target.hasAttribute && e.target.hasAttribute("draggable"))) // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
                    // Just let it drag. It's a native type (URL or text) and will be picked up in dragenter handler.
                    return;
                    // If by this time no drag source reacted, tell browser not to drag.
                    e.preventDefault();
                }
            }, HTML5Backend.prototype.handleTopDragEndCapture = function() {
                this.clearCurrentDragSourceNode() && // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                this.actions.endDrag();
            }, HTML5Backend.prototype.handleTopDragEnterCapture = function(e) {
                this.dragEnterTargetIds = [];
                var isFirstEnter = this.enterLeaveCounter.enter(e.target);
                if (isFirstEnter && !this.monitor.isDragging()) {
                    var dataTransfer = e.dataTransfer, nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);
                    nativeType && // A native item (such as file or URL) dragged from outside the document
                    this.beginDragNativeItem(nativeType);
                }
            }, HTML5Backend.prototype.handleDragEnter = function(e, targetId) {
                this.dragEnterTargetIds.unshift(targetId);
            }, HTML5Backend.prototype.handleTopDragEnter = function(e) {
                var _this5 = this, dragEnterTargetIds = this.dragEnterTargetIds;
                if (this.dragEnterTargetIds = [], this.monitor.isDragging()) {
                    _BrowserDetector.isFirefox() || // Don't emit hover in `dragenter` on Firefox due to an edge case.
                    // If the target changes position as the result of `dragenter`, Firefox
                    // will still happily dispatch `dragover` despite target being no longer
                    // there. The easy solution is to only fire `hover` in `dragover` on FF.
                    this.actions.hover(dragEnterTargetIds, {
                        clientOffset: _OffsetUtils.getEventClientOffset(e)
                    });
                    var canDrop = dragEnterTargetIds.some(function(targetId) {
                        return _this5.monitor.canDropOnTarget(targetId);
                    });
                    canDrop && (// IE requires this to fire dragover events
                    e.preventDefault(), e.dataTransfer.dropEffect = this.getCurrentDropEffect());
                }
            }, HTML5Backend.prototype.handleTopDragOverCapture = function() {
                this.dragOverTargetIds = [];
            }, HTML5Backend.prototype.handleDragOver = function(e, targetId) {
                this.dragOverTargetIds.unshift(targetId);
            }, HTML5Backend.prototype.handleTopDragOver = function(e) {
                var _this6 = this, dragOverTargetIds = this.dragOverTargetIds;
                if (this.dragOverTargetIds = [], !this.monitor.isDragging()) // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                return e.preventDefault(), void (e.dataTransfer.dropEffect = "none");
                this.actions.hover(dragOverTargetIds, {
                    clientOffset: _OffsetUtils.getEventClientOffset(e)
                });
                var canDrop = dragOverTargetIds.some(function(targetId) {
                    return _this6.monitor.canDropOnTarget(targetId);
                });
                canDrop ? (// Show user-specified drop effect.
                e.preventDefault(), e.dataTransfer.dropEffect = this.getCurrentDropEffect()) : this.isDraggingNativeItem() ? (// Don't show a nice cursor but still prevent default
                // "drop and blow away the whole document" action.
                e.preventDefault(), e.dataTransfer.dropEffect = "none") : this.checkIfCurrentDragSourceRectChanged() && (// Prevent animating to incorrect position.
                // Drop effect must be other than 'none' to prevent animation.
                e.preventDefault(), e.dataTransfer.dropEffect = "move");
            }, HTML5Backend.prototype.handleTopDragLeaveCapture = function(e) {
                this.isDraggingNativeItem() && e.preventDefault();
                var isLastLeave = this.enterLeaveCounter.leave(e.target);
                isLastLeave && this.isDraggingNativeItem() && this.endDragNativeItem();
            }, HTML5Backend.prototype.handleTopDropCapture = function(e) {
                this.dropTargetIds = [], e.preventDefault(), this.isDraggingNativeItem() && this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer), 
                this.enterLeaveCounter.reset();
            }, HTML5Backend.prototype.handleDrop = function(e, targetId) {
                this.dropTargetIds.unshift(targetId);
            }, HTML5Backend.prototype.handleTopDrop = function(e) {
                var dropTargetIds = this.dropTargetIds;
                this.dropTargetIds = [], this.actions.hover(dropTargetIds, {
                    clientOffset: _OffsetUtils.getEventClientOffset(e)
                }), this.actions.drop(), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.endDragIfSourceWasRemovedFromDOM();
            }, HTML5Backend.prototype.handleSelectStart = function(e) {
                var target = e.target;
                // Only IE requires us to explicitly say
                // we want drag drop operation to start
                "function" == typeof target.dragDrop && (// Inputs and textareas should be selectable
                "INPUT" === target.tagName || "SELECT" === target.tagName || "TEXTAREA" === target.tagName || target.isContentEditable || (// For other targets, ask IE
                // to enable drag and drop
                e.preventDefault(), target.dragDrop()));
            }, HTML5Backend;
        }();
        exports["default"] = HTML5Backend, module.exports = exports["default"];
    }, /* 6 */
    /***/
    function(module, exports, __webpack_require__) {
        var apply = __webpack_require__(7), assignInWith = __webpack_require__(8), baseRest = __webpack_require__(29), customDefaultsAssignIn = __webpack_require__(57), defaults = baseRest(function(args) {
            return args.push(void 0, customDefaultsAssignIn), apply(assignInWith, void 0, args);
        });
        module.exports = defaults;
    }, /* 7 */
    /***/
    function(module, exports) {
        /**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
        function apply(func, thisArg, args) {
            switch (args.length) {
              case 0:
                return func.call(thisArg);

              case 1:
                return func.call(thisArg, args[0]);

              case 2:
                return func.call(thisArg, args[0], args[1]);

              case 3:
                return func.call(thisArg, args[0], args[1], args[2]);
            }
            return func.apply(thisArg, args);
        }
        module.exports = apply;
    }, /* 8 */
    /***/
    function(module, exports, __webpack_require__) {
        var copyObject = __webpack_require__(9), createAssigner = __webpack_require__(28), keysIn = __webpack_require__(40), assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
        });
        module.exports = assignInWith;
    }, /* 9 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
        function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            for (var index = -1, length = props.length; ++index < length; ) {
                var key = props[index], newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
                void 0 === newValue && (newValue = source[key]), isNew ? baseAssignValue(object, key, newValue) : assignValue(object, key, newValue);
            }
            return object;
        }
        var assignValue = __webpack_require__(10), baseAssignValue = __webpack_require__(11);
        module.exports = copyObject;
    }, /* 10 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
        function assignValue(object, key, value) {
            var objValue = object[key];
            hasOwnProperty.call(object, key) && eq(objValue, value) && (void 0 !== value || key in object) || baseAssignValue(object, key, value);
        }
        var baseAssignValue = __webpack_require__(11), eq = __webpack_require__(27), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
        module.exports = assignValue;
    }, /* 11 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
        function baseAssignValue(object, key, value) {
            "__proto__" == key && defineProperty ? defineProperty(object, key, {
                configurable: !0,
                enumerable: !0,
                value: value,
                writable: !0
            }) : object[key] = value;
        }
        var defineProperty = __webpack_require__(12);
        module.exports = baseAssignValue;
    }, /* 12 */
    /***/
    function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(13), defineProperty = function() {
            try {
                var func = getNative(Object, "defineProperty");
                return func({}, "", {}), func;
            } catch (e) {}
        }();
        module.exports = defineProperty;
    }, /* 13 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
        function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : void 0;
        }
        var baseIsNative = __webpack_require__(14), getValue = __webpack_require__(26);
        module.exports = getNative;
    }, /* 14 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
        function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) return !1;
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        var isFunction = __webpack_require__(15), isMasked = __webpack_require__(23), isObject = __webpack_require__(22), toSource = __webpack_require__(25), reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        module.exports = baseIsNative;
    }, /* 15 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
        function isFunction(value) {
            if (!isObject(value)) return !1;
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        var baseGetTag = __webpack_require__(16), isObject = __webpack_require__(22), asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
        module.exports = isFunction;
    }, /* 16 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
        function baseGetTag(value) {
            return null == value ? void 0 === value ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }
        var Symbol = __webpack_require__(17), getRawTag = __webpack_require__(20), objectToString = __webpack_require__(21), nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = Symbol ? Symbol.toStringTag : void 0;
        module.exports = baseGetTag;
    }, /* 17 */
    /***/
    function(module, exports, __webpack_require__) {
        var root = __webpack_require__(18), Symbol = root.Symbol;
        module.exports = Symbol;
    }, /* 18 */
    /***/
    function(module, exports, __webpack_require__) {
        var freeGlobal = __webpack_require__(19), freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")();
        module.exports = root;
    }, /* 19 */
    /***/
    function(module, exports) {
        /* WEBPACK VAR INJECTION */
        (function(global) {
            /** Detect free variable `global` from Node.js. */
            var freeGlobal = "object" == typeof global && global && global.Object === Object && global;
            module.exports = freeGlobal;
        }).call(exports, function() {
            return this;
        }());
    }, /* 20 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
        function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
                value[symToStringTag] = void 0;
                var unmasked = !0;
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]), 
            result;
        }
        var Symbol = __webpack_require__(17), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol ? Symbol.toStringTag : void 0;
        module.exports = getRawTag;
    }, /* 21 */
    /***/
    function(module, exports) {
        /**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        /** Used for built-in method references. */
        var objectProto = Object.prototype, nativeObjectToString = objectProto.toString;
        module.exports = objectToString;
    }, /* 22 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
        function isObject(value) {
            var type = typeof value;
            return null != value && ("object" == type || "function" == type);
        }
        module.exports = isObject;
    }, /* 23 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
        function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
        }
        var coreJsData = __webpack_require__(24), maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
        }();
        module.exports = isMasked;
    }, /* 24 */
    /***/
    function(module, exports, __webpack_require__) {
        var root = __webpack_require__(18), coreJsData = root["__core-js_shared__"];
        module.exports = coreJsData;
    }, /* 25 */
    /***/
    function(module, exports) {
        /**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
        function toSource(func) {
            if (null != func) {
                try {
                    return funcToString.call(func);
                } catch (e) {}
                try {
                    return func + "";
                } catch (e) {}
            }
            return "";
        }
        /** Used for built-in method references. */
        var funcProto = Function.prototype, funcToString = funcProto.toString;
        module.exports = toSource;
    }, /* 26 */
    /***/
    function(module, exports) {
        /**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
        function getValue(object, key) {
            return null == object ? void 0 : object[key];
        }
        module.exports = getValue;
    }, /* 27 */
    /***/
    function(module, exports) {
        /**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        module.exports = eq;
    }, /* 28 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
        function createAssigner(assigner) {
            return baseRest(function(object, sources) {
                var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
                for (customizer = assigner.length > 3 && "function" == typeof customizer ? (length--, 
                customizer) : void 0, guard && isIterateeCall(sources[0], sources[1], guard) && (customizer = length < 3 ? void 0 : customizer, 
                length = 1), object = Object(object); ++index < length; ) {
                    var source = sources[index];
                    source && assigner(object, source, index, customizer);
                }
                return object;
            });
        }
        var baseRest = __webpack_require__(29), isIterateeCall = __webpack_require__(36);
        module.exports = createAssigner;
    }, /* 29 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
        function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
        }
        var identity = __webpack_require__(30), overRest = __webpack_require__(31), setToString = __webpack_require__(32);
        module.exports = baseRest;
    }, /* 30 */
    /***/
    function(module, exports) {
        /**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
        function identity(value) {
            return value;
        }
        module.exports = identity;
    }, /* 31 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
        function overRest(func, start, transform) {
            return start = nativeMax(void 0 === start ? func.length - 1 : start, 0), function() {
                for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length; ) array[index] = args[start + index];
                index = -1;
                for (var otherArgs = Array(start + 1); ++index < start; ) otherArgs[index] = args[index];
                return otherArgs[start] = transform(array), apply(func, this, otherArgs);
            };
        }
        var apply = __webpack_require__(7), nativeMax = Math.max;
        module.exports = overRest;
    }, /* 32 */
    /***/
    function(module, exports, __webpack_require__) {
        var baseSetToString = __webpack_require__(33), shortOut = __webpack_require__(35), setToString = shortOut(baseSetToString);
        module.exports = setToString;
    }, /* 33 */
    /***/
    function(module, exports, __webpack_require__) {
        var constant = __webpack_require__(34), defineProperty = __webpack_require__(12), identity = __webpack_require__(30), baseSetToString = defineProperty ? function(func, string) {
            return defineProperty(func, "toString", {
                configurable: !0,
                enumerable: !1,
                value: constant(string),
                writable: !0
            });
        } : identity;
        module.exports = baseSetToString;
    }, /* 34 */
    /***/
    function(module, exports) {
        /**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
        function constant(value) {
            return function() {
                return value;
            };
        }
        module.exports = constant;
    }, /* 35 */
    /***/
    function(module, exports) {
        /**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
        function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
                var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                if (lastCalled = stamp, remaining > 0) {
                    if (++count >= HOT_COUNT) return arguments[0];
                } else count = 0;
                return func.apply(void 0, arguments);
            };
        }
        /** Used to detect hot functions by number of calls within a span of milliseconds. */
        var HOT_COUNT = 800, HOT_SPAN = 16, nativeNow = Date.now;
        module.exports = shortOut;
    }, /* 36 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
        function isIterateeCall(value, index, object) {
            if (!isObject(object)) return !1;
            var type = typeof index;
            return !!("number" == type ? isArrayLike(object) && isIndex(index, object.length) : "string" == type && index in object) && eq(object[index], value);
        }
        var eq = __webpack_require__(27), isArrayLike = __webpack_require__(37), isIndex = __webpack_require__(39), isObject = __webpack_require__(22);
        module.exports = isIterateeCall;
    }, /* 37 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
        function isArrayLike(value) {
            return null != value && isLength(value.length) && !isFunction(value);
        }
        var isFunction = __webpack_require__(15), isLength = __webpack_require__(38);
        module.exports = isArrayLike;
    }, /* 38 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
        function isLength(value) {
            return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;
        module.exports = isLength;
    }, /* 39 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
        function isIndex(value, length) {
            return length = null == length ? MAX_SAFE_INTEGER : length, !!length && ("number" == typeof value || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;
        module.exports = isIndex;
    }, /* 40 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
        function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, !0) : baseKeysIn(object);
        }
        var arrayLikeKeys = __webpack_require__(41), baseKeysIn = __webpack_require__(54), isArrayLike = __webpack_require__(37);
        module.exports = keysIn;
    }, /* 41 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
        function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
            for (var key in value) !inherited && !hasOwnProperty.call(value, key) || skipIndexes && (// Safari 9 has enumerable `arguments.length` in strict mode.
            "length" == key || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && ("offset" == key || "parent" == key) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || // Skip index properties.
            isIndex(key, length)) || result.push(key);
            return result;
        }
        var baseTimes = __webpack_require__(42), isArguments = __webpack_require__(43), isArray = __webpack_require__(46), isBuffer = __webpack_require__(47), isIndex = __webpack_require__(39), isTypedArray = __webpack_require__(50), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
        module.exports = arrayLikeKeys;
    }, /* 42 */
    /***/
    function(module, exports) {
        /**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
        function baseTimes(n, iteratee) {
            for (var index = -1, result = Array(n); ++index < n; ) result[index] = iteratee(index);
            return result;
        }
        module.exports = baseTimes;
    }, /* 43 */
    /***/
    function(module, exports, __webpack_require__) {
        var baseIsArguments = __webpack_require__(44), isObjectLike = __webpack_require__(45), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, propertyIsEnumerable = objectProto.propertyIsEnumerable, isArguments = baseIsArguments(function() {
            return arguments;
        }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        module.exports = isArguments;
    }, /* 44 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
        function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        var baseGetTag = __webpack_require__(16), isObjectLike = __webpack_require__(45), argsTag = "[object Arguments]";
        module.exports = baseIsArguments;
    }, /* 45 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
        function isObjectLike(value) {
            return null != value && "object" == typeof value;
        }
        module.exports = isObjectLike;
    }, /* 46 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
        var isArray = Array.isArray;
        module.exports = isArray;
    }, /* 47 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(module) {
            var root = __webpack_require__(18), stubFalse = __webpack_require__(49), freeExports = "object" == typeof exports && exports && !exports.nodeType && exports, freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, Buffer = moduleExports ? root.Buffer : void 0, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, isBuffer = nativeIsBuffer || stubFalse;
            module.exports = isBuffer;
        }).call(exports, __webpack_require__(48)(module));
    }, /* 48 */
    /***/
    function(module, exports) {
        module.exports = function(module) {
            // module.parent = undefined by default
            return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], 
            module.children = [], module.webpackPolyfill = 1), module;
        };
    }, /* 49 */
    /***/
    function(module, exports) {
        /**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
        function stubFalse() {
            return !1;
        }
        module.exports = stubFalse;
    }, /* 50 */
    /***/
    function(module, exports, __webpack_require__) {
        var baseIsTypedArray = __webpack_require__(51), baseUnary = __webpack_require__(52), nodeUtil = __webpack_require__(53), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        module.exports = isTypedArray;
    }, /* 51 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
        function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        var baseGetTag = __webpack_require__(16), isLength = __webpack_require__(38), isObjectLike = __webpack_require__(45), argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, 
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1, 
        module.exports = baseIsTypedArray;
    }, /* 52 */
    /***/
    function(module, exports) {
        /**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
        function baseUnary(func) {
            return function(value) {
                return func(value);
            };
        }
        module.exports = baseUnary;
    }, /* 53 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(module) {
            var freeGlobal = __webpack_require__(19), freeExports = "object" == typeof exports && exports && !exports.nodeType && exports, freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
                try {
                    return freeProcess && freeProcess.binding && freeProcess.binding("util");
                } catch (e) {}
            }();
            module.exports = nodeUtil;
        }).call(exports, __webpack_require__(48)(module));
    }, /* 54 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
        function baseKeysIn(object) {
            if (!isObject(object)) return nativeKeysIn(object);
            var isProto = isPrototype(object), result = [];
            for (var key in object) ("constructor" != key || !isProto && hasOwnProperty.call(object, key)) && result.push(key);
            return result;
        }
        var isObject = __webpack_require__(22), isPrototype = __webpack_require__(55), nativeKeysIn = __webpack_require__(56), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
        module.exports = baseKeysIn;
    }, /* 55 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
        function isPrototype(value) {
            var Ctor = value && value.constructor, proto = "function" == typeof Ctor && Ctor.prototype || objectProto;
            return value === proto;
        }
        /** Used for built-in method references. */
        var objectProto = Object.prototype;
        module.exports = isPrototype;
    }, /* 56 */
    /***/
    function(module, exports) {
        /**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
        function nativeKeysIn(object) {
            var result = [];
            if (null != object) for (var key in Object(object)) result.push(key);
            return result;
        }
        module.exports = nativeKeysIn;
    }, /* 57 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	 * of source objects to the destination object for all destination properties
	 * that resolve to `undefined`.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
            return void 0 === objValue || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key) ? srcValue : objValue;
        }
        var eq = __webpack_require__(27), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
        module.exports = customDefaultsAssignIn;
    }, /* 58 */
    /***/
    function(module, exports) {
        "use strict";
        function shallowEqual(objA, objB) {
            if (objA === objB) return !0;
            var keysA = Object.keys(objA), keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) return !1;
            for (var hasOwn = Object.prototype.hasOwnProperty, i = 0; i < keysA.length; i++) {
                if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) return !1;
                var valA = objA[keysA[i]], valB = objB[keysA[i]];
                if (valA !== valB) return !1;
            }
            return !0;
        }
        exports.__esModule = !0, exports["default"] = shallowEqual, module.exports = exports["default"];
    }, /* 59 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        exports.__esModule = !0;
        var _lodashUnion = __webpack_require__(60), _lodashUnion2 = _interopRequireDefault(_lodashUnion), _lodashWithout = __webpack_require__(103), _lodashWithout2 = _interopRequireDefault(_lodashWithout), EnterLeaveCounter = function() {
            function EnterLeaveCounter() {
                _classCallCheck(this, EnterLeaveCounter), this.entered = [];
            }
            return EnterLeaveCounter.prototype.enter = function(enteringNode) {
                var previousLength = this.entered.length;
                return this.entered = _lodashUnion2["default"](this.entered.filter(function(node) {
                    return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
                }), [ enteringNode ]), 0 === previousLength && this.entered.length > 0;
            }, EnterLeaveCounter.prototype.leave = function(leavingNode) {
                var previousLength = this.entered.length;
                return this.entered = _lodashWithout2["default"](this.entered.filter(function(node) {
                    return document.documentElement.contains(node);
                }), leavingNode), previousLength > 0 && 0 === this.entered.length;
            }, EnterLeaveCounter.prototype.reset = function() {
                this.entered = [];
            }, EnterLeaveCounter;
        }();
        exports["default"] = EnterLeaveCounter, module.exports = exports["default"];
    }, /* 60 */
    /***/
    function(module, exports, __webpack_require__) {
        var baseFlatten = __webpack_require__(61), baseRest = __webpack_require__(29), baseUniq = __webpack_require__(64), isArrayLikeObject = __webpack_require__(102), union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0));
        });
        module.exports = union;
    }, /* 61 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
        function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1, length = array.length;
            for (predicate || (predicate = isFlattenable), result || (result = []); ++index < length; ) {
                var value = array[index];
                depth > 0 && predicate(value) ? depth > 1 ? // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result) : arrayPush(result, value) : isStrict || (result[result.length] = value);
            }
            return result;
        }
        var arrayPush = __webpack_require__(62), isFlattenable = __webpack_require__(63);
        module.exports = baseFlatten;
    }, /* 62 */
    /***/
    function(module, exports) {
        /**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
        function arrayPush(array, values) {
            for (var index = -1, length = values.length, offset = array.length; ++index < length; ) array[offset + index] = values[index];
            return array;
        }
        module.exports = arrayPush;
    }, /* 63 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
        function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        var Symbol = __webpack_require__(17), isArguments = __webpack_require__(43), isArray = __webpack_require__(46), spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
        module.exports = isFlattenable;
    }, /* 64 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
        function baseUniq(array, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, length = array.length, isCommon = !0, result = [], seen = result;
            if (comparator) isCommon = !1, includes = arrayIncludesWith; else if (length >= LARGE_ARRAY_SIZE) {
                var set = iteratee ? null : createSet(array);
                if (set) return setToArray(set);
                isCommon = !1, includes = cacheHas, seen = new SetCache();
            } else seen = iteratee ? [] : result;
            outer: for (;++index < length; ) {
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                    for (var seenIndex = seen.length; seenIndex--; ) if (seen[seenIndex] === computed) continue outer;
                    iteratee && seen.push(computed), result.push(value);
                } else includes(seen, computed, comparator) || (seen !== result && seen.push(computed), 
                result.push(value));
            }
            return result;
        }
        var SetCache = __webpack_require__(65), arrayIncludes = __webpack_require__(91), arrayIncludesWith = __webpack_require__(96), cacheHas = __webpack_require__(97), createSet = __webpack_require__(98), setToArray = __webpack_require__(101), LARGE_ARRAY_SIZE = 200;
        module.exports = baseUniq;
    }, /* 65 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
        function SetCache(values) {
            var index = -1, length = null == values ? 0 : values.length;
            for (this.__data__ = new MapCache(); ++index < length; ) this.add(values[index]);
        }
        var MapCache = __webpack_require__(66), setCacheAdd = __webpack_require__(89), setCacheHas = __webpack_require__(90);
        // Add methods to `SetCache`.
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas, 
        module.exports = SetCache;
    }, /* 66 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
        function MapCache(entries) {
            var index = -1, length = null == entries ? 0 : entries.length;
            for (this.clear(); ++index < length; ) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        var mapCacheClear = __webpack_require__(67), mapCacheDelete = __webpack_require__(83), mapCacheGet = __webpack_require__(86), mapCacheHas = __webpack_require__(87), mapCacheSet = __webpack_require__(88);
        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear, MapCache.prototype["delete"] = mapCacheDelete, 
        MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, 
        module.exports = MapCache;
    }, /* 67 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
        function mapCacheClear() {
            this.size = 0, this.__data__ = {
                hash: new Hash(),
                map: new (Map || ListCache)(),
                string: new Hash()
            };
        }
        var Hash = __webpack_require__(68), ListCache = __webpack_require__(75), Map = __webpack_require__(82);
        module.exports = mapCacheClear;
    }, /* 68 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
        function Hash(entries) {
            var index = -1, length = null == entries ? 0 : entries.length;
            for (this.clear(); ++index < length; ) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        var hashClear = __webpack_require__(69), hashDelete = __webpack_require__(71), hashGet = __webpack_require__(72), hashHas = __webpack_require__(73), hashSet = __webpack_require__(74);
        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear, Hash.prototype["delete"] = hashDelete, Hash.prototype.get = hashGet, 
        Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, module.exports = Hash;
    }, /* 69 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
        function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
        }
        var nativeCreate = __webpack_require__(70);
        module.exports = hashClear;
    }, /* 70 */
    /***/
    function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(13), nativeCreate = getNative(Object, "create");
        module.exports = nativeCreate;
    }, /* 71 */
    /***/
    function(module, exports) {
        /**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
        function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            return this.size -= result ? 1 : 0, result;
        }
        module.exports = hashDelete;
    }, /* 72 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
        function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? void 0 : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : void 0;
        }
        var nativeCreate = __webpack_require__(70), HASH_UNDEFINED = "__lodash_hash_undefined__", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
        module.exports = hashGet;
    }, /* 73 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
        function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? void 0 !== data[key] : hasOwnProperty.call(data, key);
        }
        var nativeCreate = __webpack_require__(70), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
        module.exports = hashHas;
    }, /* 74 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
        function hashSet(key, value) {
            var data = this.__data__;
            return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate && void 0 === value ? HASH_UNDEFINED : value, 
            this;
        }
        var nativeCreate = __webpack_require__(70), HASH_UNDEFINED = "__lodash_hash_undefined__";
        module.exports = hashSet;
    }, /* 75 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
        function ListCache(entries) {
            var index = -1, length = null == entries ? 0 : entries.length;
            for (this.clear(); ++index < length; ) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        var listCacheClear = __webpack_require__(76), listCacheDelete = __webpack_require__(77), listCacheGet = __webpack_require__(79), listCacheHas = __webpack_require__(80), listCacheSet = __webpack_require__(81);
        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear, ListCache.prototype["delete"] = listCacheDelete, 
        ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, 
        ListCache.prototype.set = listCacheSet, module.exports = ListCache;
    }, /* 76 */
    /***/
    function(module, exports) {
        /**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
        function listCacheClear() {
            this.__data__ = [], this.size = 0;
        }
        module.exports = listCacheClear;
    }, /* 77 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
        function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) return !1;
            var lastIndex = data.length - 1;
            return index == lastIndex ? data.pop() : splice.call(data, index, 1), --this.size, 
            !0;
        }
        var assocIndexOf = __webpack_require__(78), arrayProto = Array.prototype, splice = arrayProto.splice;
        module.exports = listCacheDelete;
    }, /* 78 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
        function assocIndexOf(array, key) {
            for (var length = array.length; length--; ) if (eq(array[length][0], key)) return length;
            return -1;
        }
        var eq = __webpack_require__(27);
        module.exports = assocIndexOf;
    }, /* 79 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
        function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? void 0 : data[index][1];
        }
        var assocIndexOf = __webpack_require__(78);
        module.exports = listCacheGet;
    }, /* 80 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        var assocIndexOf = __webpack_require__(78);
        module.exports = listCacheHas;
    }, /* 81 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
        function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? (++this.size, data.push([ key, value ])) : data[index][1] = value, 
            this;
        }
        var assocIndexOf = __webpack_require__(78);
        module.exports = listCacheSet;
    }, /* 82 */
    /***/
    function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(13), root = __webpack_require__(18), Map = getNative(root, "Map");
        module.exports = Map;
    }, /* 83 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
        function mapCacheDelete(key) {
            var result = getMapData(this, key)["delete"](key);
            return this.size -= result ? 1 : 0, result;
        }
        var getMapData = __webpack_require__(84);
        module.exports = mapCacheDelete;
    }, /* 84 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
        function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data["string" == typeof key ? "string" : "hash"] : data.map;
        }
        var isKeyable = __webpack_require__(85);
        module.exports = getMapData;
    }, /* 85 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
        function isKeyable(value) {
            var type = typeof value;
            return "string" == type || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value;
        }
        module.exports = isKeyable;
    }, /* 86 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
        function mapCacheGet(key) {
            return getMapData(this, key).get(key);
        }
        var getMapData = __webpack_require__(84);
        module.exports = mapCacheGet;
    }, /* 87 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
        function mapCacheHas(key) {
            return getMapData(this, key).has(key);
        }
        var getMapData = __webpack_require__(84);
        module.exports = mapCacheHas;
    }, /* 88 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
        function mapCacheSet(key, value) {
            var data = getMapData(this, key), size = data.size;
            return data.set(key, value), this.size += data.size == size ? 0 : 1, this;
        }
        var getMapData = __webpack_require__(84);
        module.exports = mapCacheSet;
    }, /* 89 */
    /***/
    function(module, exports) {
        /**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
        function setCacheAdd(value) {
            return this.__data__.set(value, HASH_UNDEFINED), this;
        }
        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        module.exports = setCacheAdd;
    }, /* 90 */
    /***/
    function(module, exports) {
        /**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
        function setCacheHas(value) {
            return this.__data__.has(value);
        }
        module.exports = setCacheHas;
    }, /* 91 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
        function arrayIncludes(array, value) {
            var length = null == array ? 0 : array.length;
            return !!length && baseIndexOf(array, value, 0) > -1;
        }
        var baseIndexOf = __webpack_require__(92);
        module.exports = arrayIncludes;
    }, /* 92 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
        function baseIndexOf(array, value, fromIndex) {
            return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        var baseFindIndex = __webpack_require__(93), baseIsNaN = __webpack_require__(94), strictIndexOf = __webpack_require__(95);
        module.exports = baseIndexOf;
    }, /* 93 */
    /***/
    function(module, exports) {
        /**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
            for (var length = array.length, index = fromIndex + (fromRight ? 1 : -1); fromRight ? index-- : ++index < length; ) if (predicate(array[index], index, array)) return index;
            return -1;
        }
        module.exports = baseFindIndex;
    }, /* 94 */
    /***/
    function(module, exports) {
        /**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
        function baseIsNaN(value) {
            return value !== value;
        }
        module.exports = baseIsNaN;
    }, /* 95 */
    /***/
    function(module, exports) {
        /**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
        function strictIndexOf(array, value, fromIndex) {
            for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (array[index] === value) return index;
            return -1;
        }
        module.exports = strictIndexOf;
    }, /* 96 */
    /***/
    function(module, exports) {
        /**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
        function arrayIncludesWith(array, value, comparator) {
            for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (comparator(value, array[index])) return !0;
            return !1;
        }
        module.exports = arrayIncludesWith;
    }, /* 97 */
    /***/
    function(module, exports) {
        /**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
        function cacheHas(cache, key) {
            return cache.has(key);
        }
        module.exports = cacheHas;
    }, /* 98 */
    /***/
    function(module, exports, __webpack_require__) {
        var Set = __webpack_require__(99), noop = __webpack_require__(100), setToArray = __webpack_require__(101), INFINITY = 1 / 0, createSet = Set && 1 / setToArray(new Set([ , -0 ]))[1] == INFINITY ? function(values) {
            return new Set(values);
        } : noop;
        module.exports = createSet;
    }, /* 99 */
    /***/
    function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(13), root = __webpack_require__(18), Set = getNative(root, "Set");
        module.exports = Set;
    }, /* 100 */
    /***/
    function(module, exports) {
        /**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
        function noop() {}
        module.exports = noop;
    }, /* 101 */
    /***/
    function(module, exports) {
        /**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
        function setToArray(set) {
            var index = -1, result = Array(set.size);
            return set.forEach(function(value) {
                result[++index] = value;
            }), result;
        }
        module.exports = setToArray;
    }, /* 102 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
        function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        var isArrayLike = __webpack_require__(37), isObjectLike = __webpack_require__(45);
        module.exports = isArrayLikeObject;
    }, /* 103 */
    /***/
    function(module, exports, __webpack_require__) {
        var baseDifference = __webpack_require__(104), baseRest = __webpack_require__(29), isArrayLikeObject = __webpack_require__(102), without = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        module.exports = without;
    }, /* 104 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
        function baseDifference(array, values, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, isCommon = !0, length = array.length, result = [], valuesLength = values.length;
            if (!length) return result;
            iteratee && (values = arrayMap(values, baseUnary(iteratee))), comparator ? (includes = arrayIncludesWith, 
            isCommon = !1) : values.length >= LARGE_ARRAY_SIZE && (includes = cacheHas, isCommon = !1, 
            values = new SetCache(values));
            outer: for (;++index < length; ) {
                var value = array[index], computed = null == iteratee ? value : iteratee(value);
                if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                    for (var valuesIndex = valuesLength; valuesIndex--; ) if (values[valuesIndex] === computed) continue outer;
                    result.push(value);
                } else includes(values, computed, comparator) || result.push(value);
            }
            return result;
        }
        var SetCache = __webpack_require__(65), arrayIncludes = __webpack_require__(91), arrayIncludesWith = __webpack_require__(96), arrayMap = __webpack_require__(105), baseUnary = __webpack_require__(52), cacheHas = __webpack_require__(97), LARGE_ARRAY_SIZE = 200;
        module.exports = baseDifference;
    }, /* 105 */
    /***/
    function(module, exports) {
        /**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
        function arrayMap(array, iteratee) {
            for (var index = -1, length = null == array ? 0 : array.length, result = Array(length); ++index < length; ) result[index] = iteratee(array[index], index, array);
            return result;
        }
        module.exports = arrayMap;
    }, /* 106 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.__esModule = !0;
        var _lodashMemoize = __webpack_require__(107), _lodashMemoize2 = _interopRequireDefault(_lodashMemoize), isFirefox = _lodashMemoize2["default"](function() {
            return /firefox/i.test(navigator.userAgent);
        });
        exports.isFirefox = isFirefox;
        var isSafari = _lodashMemoize2["default"](function() {
            return Boolean(window.safari);
        });
        exports.isSafari = isSafari;
    }, /* 107 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
        function memoize(func, resolver) {
            if ("function" != typeof func || null != resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
            var memoized = function() {
                var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                if (cache.has(key)) return cache.get(key);
                var result = func.apply(this, args);
                return memoized.cache = cache.set(key, result) || cache, result;
            };
            return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
        }
        var MapCache = __webpack_require__(66), FUNC_ERROR_TEXT = "Expected a function";
        // Expose `MapCache`.
        memoize.Cache = MapCache, module.exports = memoize;
    }, /* 108 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function getNodeClientOffset(node) {
            var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
            if (!el) return null;
            var _el$getBoundingClientRect = el.getBoundingClientRect(), top = _el$getBoundingClientRect.top, left = _el$getBoundingClientRect.left;
            return {
                x: left,
                y: top
            };
        }
        function getEventClientOffset(e) {
            return {
                x: e.clientX,
                y: e.clientY
            };
        }
        function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
            // The browsers will use the image intrinsic size under different conditions.
            // Firefox only cares if it's an image, but WebKit also wants it to be detached.
            var isImage = "IMG" === dragPreview.nodeName && (_BrowserDetector.isFirefox() || !document.documentElement.contains(dragPreview)), dragPreviewNode = isImage ? sourceNode : dragPreview, dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode), offsetFromDragPreview = {
                x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
                y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
            }, sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight, anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY, dragPreviewWidth = isImage ? dragPreview.width : sourceWidth, dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
            // Work around @2x coordinate discrepancies in browsers
            _BrowserDetector.isSafari() && isImage ? (dragPreviewHeight /= window.devicePixelRatio, 
            dragPreviewWidth /= window.devicePixelRatio) : _BrowserDetector.isFirefox() && !isImage && (dragPreviewHeight *= window.devicePixelRatio, 
            dragPreviewWidth *= window.devicePixelRatio);
            // Interpolate coordinates depending on anchor point
            // If you know a simpler way to do this, let me know
            var interpolantX = new _MonotonicInterpolant2["default"]([ 0, .5, 1 ], [ // Dock to the left
            offsetFromDragPreview.x, // Align at the center
            offsetFromDragPreview.x / sourceWidth * dragPreviewWidth, // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth ]), interpolantY = new _MonotonicInterpolant2["default"]([ 0, .5, 1 ], [ // Dock to the top
            offsetFromDragPreview.y, // Align at the center
            offsetFromDragPreview.y / sourceHeight * dragPreviewHeight, // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight ]), x = interpolantX.interpolate(anchorX), y = interpolantY.interpolate(anchorY);
            // Work around Safari 8 positioning bug
            // We'll have to wait for @3x to see if this is entirely correct
            return _BrowserDetector.isSafari() && isImage && (y += (window.devicePixelRatio - 1) * dragPreviewHeight), 
            {
                x: x,
                y: y
            };
        }
        exports.__esModule = !0, exports.getNodeClientOffset = getNodeClientOffset, exports.getEventClientOffset = getEventClientOffset, 
        exports.getDragPreviewOffset = getDragPreviewOffset;
        var _BrowserDetector = __webpack_require__(106), _MonotonicInterpolant = __webpack_require__(109), _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant), ELEMENT_NODE = 1;
    }, /* 109 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        exports.__esModule = !0;
        var MonotonicInterpolant = function() {
            function MonotonicInterpolant(xs, ys) {
                _classCallCheck(this, MonotonicInterpolant);
                for (var length = xs.length, indexes = [], i = 0; i < length; i++) indexes.push(i);
                indexes.sort(function(a, b) {
                    return xs[a] < xs[b] ? -1 : 1;
                });
                for (var dys = [], dxs = [], ms = [], dx = void 0, dy = void 0, i = 0; i < length - 1; i++) dx = xs[i + 1] - xs[i], 
                dy = ys[i + 1] - ys[i], dxs.push(dx), dys.push(dy), ms.push(dy / dx);
                for (var c1s = [ ms[0] ], i = 0; i < dxs.length - 1; i++) {
                    var _m = ms[i], mNext = ms[i + 1];
                    if (_m * mNext <= 0) c1s.push(0); else {
                        dx = dxs[i];
                        var dxNext = dxs[i + 1], common = dx + dxNext;
                        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
                    }
                }
                c1s.push(ms[ms.length - 1]);
                for (var c2s = [], c3s = [], m = void 0, i = 0; i < c1s.length - 1; i++) {
                    m = ms[i];
                    var c1 = c1s[i], invDx = 1 / dxs[i], common = c1 + c1s[i + 1] - m - m;
                    c2s.push((m - c1 - common) * invDx), c3s.push(common * invDx * invDx);
                }
                this.xs = xs, this.ys = ys, this.c1s = c1s, this.c2s = c2s, this.c3s = c3s;
            }
            return MonotonicInterpolant.prototype.interpolate = function(x) {
                var xs = this.xs, ys = this.ys, c1s = this.c1s, c2s = this.c2s, c3s = this.c3s, i = xs.length - 1;
                if (x === xs[i]) return ys[i];
                for (// Search for the interval x is in, returning the corresponding y if x is one of the original xs
                var low = 0, high = c3s.length - 1, mid = void 0; low <= high; ) {
                    mid = Math.floor(.5 * (low + high));
                    var xHere = xs[mid];
                    if (xHere < x) low = mid + 1; else {
                        if (!(xHere > x)) return ys[mid];
                        high = mid - 1;
                    }
                }
                i = Math.max(0, high);
                // Interpolate
                var diff = x - xs[i], diffSq = diff * diff;
                return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
            }, MonotonicInterpolant;
        }();
        exports["default"] = MonotonicInterpolant, module.exports = exports["default"];
    }, /* 110 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
            var result = typesToTry.reduce(function(resultSoFar, typeToTry) {
                return resultSoFar || dataTransfer.getData(typeToTry);
            }, null);
            // eslint-disable-line eqeqeq
            return null != result ? result : defaultValue;
        }
        function createNativeDragSource(type) {
            var _nativeTypesConfig$type = nativeTypesConfig[type], exposeProperty = _nativeTypesConfig$type.exposeProperty, matchesTypes = _nativeTypesConfig$type.matchesTypes, getData = _nativeTypesConfig$type.getData;
            return function() {
                function NativeDragSource() {
                    _classCallCheck(this, NativeDragSource), this.item = Object.defineProperties({}, _defineProperty({}, exposeProperty, {
                        get: function() {
                            // eslint-disable-line no-console
                            return console.warn("Browser doesn't allow reading \"" + exposeProperty + '" until the drop event.'), 
                            null;
                        },
                        configurable: !0,
                        enumerable: !0
                    }));
                }
                return NativeDragSource.prototype.mutateItemByReadingDataTransfer = function(dataTransfer) {
                    delete this.item[exposeProperty], this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
                }, NativeDragSource.prototype.canDrag = function() {
                    return !0;
                }, NativeDragSource.prototype.beginDrag = function() {
                    return this.item;
                }, NativeDragSource.prototype.isDragging = function(monitor, handle) {
                    return handle === monitor.getSourceId();
                }, NativeDragSource.prototype.endDrag = function() {}, NativeDragSource;
            }();
        }
        function matchNativeItemType(dataTransfer) {
            var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
            return Object.keys(nativeTypesConfig).filter(function(nativeItemType) {
                var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
                return matchesTypes.some(function(t) {
                    return dataTransferTypes.indexOf(t) > -1;
                });
            })[0] || null;
        }
        exports.__esModule = !0;
        var _nativeTypesConfig;
        exports.createNativeDragSource = createNativeDragSource, exports.matchNativeItemType = matchNativeItemType;
        var _NativeTypes = __webpack_require__(111), NativeTypes = _interopRequireWildcard(_NativeTypes), nativeTypesConfig = (_nativeTypesConfig = {}, 
        _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
            exposeProperty: "files",
            matchesTypes: [ "Files" ],
            getData: function(dataTransfer) {
                return Array.prototype.slice.call(dataTransfer.files);
            }
        }), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
            exposeProperty: "urls",
            matchesTypes: [ "Url", "text/uri-list" ],
            getData: function(dataTransfer, matchesTypes) {
                return getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n");
            }
        }), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
            exposeProperty: "text",
            matchesTypes: [ "Text", "text/plain" ],
            getData: function(dataTransfer, matchesTypes) {
                return getDataFromDataTransfer(dataTransfer, matchesTypes, "");
            }
        }), _nativeTypesConfig);
    }, /* 111 */
    /***/
    function(module, exports) {
        "use strict";
        exports.__esModule = !0;
        var FILE = "__NATIVE_FILE__";
        exports.FILE = FILE;
        var URL = "__NATIVE_URL__";
        exports.URL = URL;
        var TEXT = "__NATIVE_TEXT__";
        exports.TEXT = TEXT;
    }, /* 112 */
    /***/
    function(module, exports) {
        "use strict";
        function getEmptyImage() {
            return emptyImage || (emptyImage = new Image(), emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), 
            emptyImage;
        }
        exports.__esModule = !0, exports["default"] = getEmptyImage;
        var emptyImage = void 0;
        module.exports = exports["default"];
    }, /* 113 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function createHorizontalStrength(_buffer) {
            return function(_ref, point) {
                var x = _ref.x, w = _ref.w, buffer = Math.min(w / 2, _buffer);
                if (point.x >= x && point.x <= x + w) {
                    if (point.x < x + buffer) return (point.x - x - buffer) / buffer;
                    if (point.x > x + w - buffer) return -(x + w - point.x - buffer) / buffer;
                }
                return 0;
            };
        }
        function createVerticalStrength(_buffer) {
            return function(_ref2, point) {
                var y = _ref2.y, h = _ref2.h, buffer = Math.min(h / 2, _buffer);
                if (point.y >= y && point.y <= y + h) {
                    if (point.y < y + buffer) return (point.y - y - buffer) / buffer;
                    if (point.y > y + h - buffer) return -(y + h - point.y - buffer) / buffer;
                }
                return 0;
            };
        }
        function createScrollingComponent(WrappedComponent) {
            var ScrollingComponent = function(_React$Component) {
                function ScrollingComponent(props, ctx) {
                    _classCallCheck(this, ScrollingComponent);
                    var _this = _possibleConstructorReturn(this, (ScrollingComponent.__proto__ || Object.getPrototypeOf(ScrollingComponent)).call(this, props, ctx));
                    return _this.handleDragOver = function(evt) {
                        for (var _this$props, _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) rest[_key - 1] = arguments[_key];
                        // give users a chance to preventDefault
                        "function" == typeof _this.props.onDragOver && (_this$props = _this.props).onDragOver.apply(_this$props, [ evt ].concat(rest)), 
                        _this.attached || (_this.attach(), _this.updateScrolling(evt));
                    }, _this.updateScrolling = (0, _lodash2["default"])(function(evt) {
                        var _this$container$getBo = _this.container.getBoundingClientRect(), x = _this$container$getBo.left, y = _this$container$getBo.top, w = _this$container$getBo.width, h = _this$container$getBo.height, box = {
                            x: x,
                            y: y,
                            w: w,
                            h: h
                        }, coords = {
                            x: evt.clientX,
                            y: evt.clientY
                        };
                        // calculate strength
                        _this.scaleX = _this.props.horizontalStrength(box, coords), _this.scaleY = _this.props.verticalStrength(box, coords), 
                        // start scrolling if we need to
                        _this.frame || !_this.scaleX && !_this.scaleY || _this.startScrolling();
                    }, 100, {
                        trailing: !1
                    }), _this.stopScrolling = function() {
                        _this.frame && (_this.detach(), _raf2["default"].cancel(_this.frame), _this.frame = null, 
                        _this.scaleX = 0, _this.scaleY = 0);
                    }, _this.scaleX = 0, _this.scaleY = 0, _this.frame = null, _this.attached = !1, 
                    _this;
                }
                return _inherits(ScrollingComponent, _React$Component), _createClass(ScrollingComponent, [ {
                    key: "componentDidMount",
                    value: function() {
                        this.container = (0, _reactDom.findDOMNode)(this.wrappedInstance), this.container.addEventListener("dragover", this.handleDragOver);
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.frame && _raf2["default"].cancel(this.frame), this.detach();
                    }
                }, {
                    key: "attach",
                    value: function() {
                        window.document.body.addEventListener("dragover", this.updateScrolling), window.document.body.addEventListener("dragend", this.stopScrolling), 
                        window.document.body.addEventListener("drop", this.stopScrolling), this.attached = !0;
                    }
                }, {
                    key: "detach",
                    value: function() {
                        window.document.body.removeEventListener("dragover", this.updateScrolling), window.document.body.removeEventListener("dragend", this.stopScrolling), 
                        window.document.body.removeEventListener("drop", this.stopScrolling), this.attached = !1;
                    }
                }, {
                    key: "startScrolling",
                    value: function() {
                        var _this2 = this, i = 0, tick = function tick() {
                            var scaleX = _this2.scaleX, scaleY = _this2.scaleY, container = _this2.container, _props = _this2.props, speed = _props.speed, onScrollChange = _props.onScrollChange;
                            // stop scrolling if there's nothing to do
                            if (0 === speed || scaleX + scaleY === 0) return void _this2.stopScrolling();
                            // there's a bug in safari where it seems like we can't get
                            // dragover events from a container that also emits a scroll
                            // event that same frame. So we double the speed and only adjust
                            // the scroll position at 30fps
                            if (i++ % 2) {
                                var scrollLeft = container.scrollLeft, scrollTop = container.scrollTop, scrollWidth = container.scrollWidth, scrollHeight = container.scrollHeight, clientWidth = container.clientWidth, clientHeight = container.clientHeight, newLeft = scaleX ? container.scrollLeft = (0, 
                                _util.intBetween)(0, scrollWidth - clientWidth, scrollLeft + scaleX * speed) : scrollLeft, newTop = scaleY ? container.scrollTop = (0, 
                                _util.intBetween)(0, scrollHeight - clientHeight, scrollTop + scaleY * speed) : scrollTop;
                                onScrollChange(newLeft, newTop);
                            }
                            _this2.frame = (0, _raf2["default"])(tick);
                        };
                        tick();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _this3 = this, _props2 = this.props, props = (_props2.speed, _props2.verticalStrength, 
                        _props2.horizontalStrength, _props2.onScrollChange, _objectWithoutProperties(_props2, [ "speed", "verticalStrength", "horizontalStrength", "onScrollChange" ]));
                        return _react2["default"].createElement(WrappedComponent, _extends({
                            ref: function(_ref3) {
                                _this3.wrappedInstance = _ref3;
                            }
                        }, props));
                    }
                } ]), ScrollingComponent;
            }(_react2["default"].Component);
            return ScrollingComponent.displayName = "Scrolling(" + (0, _reactDisplayName2["default"])(WrappedComponent) + ")", 
            ScrollingComponent.propTypes = {
                onScrollChange: _react2["default"].PropTypes.func,
                verticalStrength: _react2["default"].PropTypes.func,
                horizontalStrength: _react2["default"].PropTypes.func,
                speed: _react2["default"].PropTypes.number
            }, ScrollingComponent.defaultProps = {
                onScrollChange: _util.noop,
                verticalStrength: defaultVerticalStrength,
                horizontalStrength: defaultHorizontalStrength,
                speed: 30
            }, (0, _hoistNonReactStatics2["default"])(ScrollingComponent, WrappedComponent);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.defaultVerticalStrength = exports.defaultHorizontalStrength = void 0;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        exports.createHorizontalStrength = createHorizontalStrength, exports.createVerticalStrength = createVerticalStrength, 
        exports["default"] = createScrollingComponent;
        var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(3), _lodash = __webpack_require__(114), _lodash2 = _interopRequireDefault(_lodash), _raf = __webpack_require__(115), _raf2 = _interopRequireDefault(_raf), _reactDisplayName = __webpack_require__(118), _reactDisplayName2 = _interopRequireDefault(_reactDisplayName), _hoistNonReactStatics = __webpack_require__(119), _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics), _util = __webpack_require__(120), DEFAULT_BUFFER = 150, defaultHorizontalStrength = exports.defaultHorizontalStrength = createHorizontalStrength(DEFAULT_BUFFER), defaultVerticalStrength = exports.defaultVerticalStrength = createVerticalStrength(DEFAULT_BUFFER);
    }, /* 114 */
    /***/
    function(module, exports) {
        /* WEBPACK VAR INJECTION */
        (function(global) {
            /**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
            function debounce(func, wait, options) {
                function invokeFunc(time) {
                    var args = lastArgs, thisArg = lastThis;
                    return lastArgs = lastThis = void 0, lastInvokeTime = time, result = func.apply(thisArg, args);
                }
                function leadingEdge(time) {
                    // Invoke the leading edge.
                    // Reset any `maxWait` timer.
                    // Start the timer for the trailing edge.
                    return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
                }
                function remainingWait(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                }
                function shouldInvoke(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                    // Either this is the first call, activity has stopped and we're at the
                    // trailing edge, the system time has gone backwards and we're treating
                    // it as the trailing edge, or we've hit the `maxWait` limit.
                    return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                }
                function timerExpired() {
                    var time = now();
                    // Restart the timer.
                    return shouldInvoke(time) ? trailingEdge(time) : void (timerId = setTimeout(timerExpired, remainingWait(time)));
                }
                function trailingEdge(time) {
                    // Only invoke if we have `lastArgs` which means `func` has been
                    // debounced at least once.
                    // Only invoke if we have `lastArgs` which means `func` has been
                    // debounced at least once.
                    return timerId = void 0, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = void 0, 
                    result);
                }
                function cancel() {
                    void 0 !== timerId && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = void 0;
                }
                function flush() {
                    return void 0 === timerId ? result : trailingEdge(now());
                }
                function debounced() {
                    var time = now(), isInvoking = shouldInvoke(time);
                    if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
                        if (void 0 === timerId) return leadingEdge(lastCallTime);
                        if (maxing) // Handle invocations in a tight loop.
                        return timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime);
                    }
                    return void 0 === timerId && (timerId = setTimeout(timerExpired, wait)), result;
                }
                var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
                if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                return wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, 
                maxing = "maxWait" in options, maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, 
                trailing = "trailing" in options ? !!options.trailing : trailing), debounced.cancel = cancel, 
                debounced.flush = flush, debounced;
            }
            /**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
            function throttle(func, wait, options) {
                var leading = !0, trailing = !0;
                if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, 
                trailing = "trailing" in options ? !!options.trailing : trailing), debounce(func, wait, {
                    leading: leading,
                    maxWait: wait,
                    trailing: trailing
                });
            }
            /**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
            function isObject(value) {
                var type = typeof value;
                return !!value && ("object" == type || "function" == type);
            }
            /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
            function isObjectLike(value) {
                return !!value && "object" == typeof value;
            }
            /**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
            function isSymbol(value) {
                return "symbol" == typeof value || isObjectLike(value) && objectToString.call(value) == symbolTag;
            }
            /**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
            function toNumber(value) {
                if ("number" == typeof value) return value;
                if (isSymbol(value)) return NAN;
                if (isObject(value)) {
                    var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                    value = isObject(other) ? other + "" : other;
                }
                if ("string" != typeof value) return 0 === value ? value : +value;
                value = value.replace(reTrim, "");
                var isBinary = reIsBinary.test(value);
                return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
            }
            /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
            /** Used as the `TypeError` message for "Functions" methods. */
            var FUNC_ERROR_TEXT = "Expected a function", NAN = NaN, symbolTag = "[object Symbol]", reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), objectProto = Object.prototype, objectToString = objectProto.toString, nativeMax = Math.max, nativeMin = Math.min, now = function() {
                return root.Date.now();
            };
            module.exports = throttle;
        }).call(exports, function() {
            return this;
        }());
    }, /* 115 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(global) {
            for (var now = __webpack_require__(116), root = "undefined" == typeof window ? global : window, vendors = [ "moz", "webkit" ], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix], i = 0; !raf && i < vendors.length; i++) raf = root[vendors[i] + "Request" + suffix], 
            caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
            // Some versions of FF have rAF but not cAF
            if (!raf || !caf) {
                var last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
                raf = function(callback) {
                    if (0 === queue.length) {
                        var _now = now(), next = Math.max(0, frameDuration - (_now - last));
                        last = next + _now, setTimeout(function() {
                            var cp = queue.slice(0);
                            // Clear queue here to prevent
                            // callbacks from appending listeners
                            // to the current frame's queue
                            queue.length = 0;
                            for (var i = 0; i < cp.length; i++) if (!cp[i].cancelled) try {
                                cp[i].callback(last);
                            } catch (e) {
                                setTimeout(function() {
                                    throw e;
                                }, 0);
                            }
                        }, Math.round(next));
                    }
                    return queue.push({
                        handle: ++id,
                        callback: callback,
                        cancelled: !1
                    }), id;
                }, caf = function(handle) {
                    for (var i = 0; i < queue.length; i++) queue[i].handle === handle && (queue[i].cancelled = !0);
                };
            }
            module.exports = function(fn) {
                // Wrap in a new function to prevent
                // `cancel` potentially being assigned
                // to the native rAF function
                return raf.call(root, fn);
            }, module.exports.cancel = function() {
                caf.apply(root, arguments);
            }, module.exports.polyfill = function() {
                root.requestAnimationFrame = raf, root.cancelAnimationFrame = caf;
            };
        }).call(exports, function() {
            return this;
        }());
    }, /* 116 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            // Generated by CoffeeScript 1.7.1
            (function() {
                var getNanoSeconds, hrtime, loadTime;
                "undefined" != typeof performance && null !== performance && performance.now ? module.exports = function() {
                    return performance.now();
                } : "undefined" != typeof process && null !== process && process.hrtime ? (module.exports = function() {
                    return (getNanoSeconds() - loadTime) / 1e6;
                }, hrtime = process.hrtime, getNanoSeconds = function() {
                    var hr;
                    return hr = hrtime(), 1e9 * hr[0] + hr[1];
                }, loadTime = getNanoSeconds()) : Date.now ? (module.exports = function() {
                    return Date.now() - loadTime;
                }, loadTime = Date.now()) : (module.exports = function() {
                    return new Date().getTime() - loadTime;
                }, loadTime = new Date().getTime());
            }).call(this);
        }).call(exports, __webpack_require__(117));
    }, /* 117 */
    /***/
    function(module, exports) {
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
            return setTimeout(fun, 0);
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
            return clearTimeout(marker);
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
            clearTimeout(marker);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, runClearTimeout(timeout);
            }
        }
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        // shim for using process in browser
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", // empty string to avoid regexp issues
        process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, 
        process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }, /* 118 */
    /***/
    function(module, exports) {
        "use strict";
        exports.__esModule = !0;
        var getDisplayName = function(Component) {
            return Component.displayName || Component.name || ("string" == typeof Component ? Component : "Component");
        };
        exports["default"] = getDisplayName;
    }, /* 119 */
    /***/
    function(module, exports) {
        /**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
        "use strict";
        var REACT_STATICS = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }, KNOWN_STATICS = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            arguments: !0,
            arity: !0
        }, isGetOwnPropertySymbolsAvailable = "function" == typeof Object.getOwnPropertySymbols;
        module.exports = function(targetComponent, sourceComponent, customStatics) {
            if ("string" != typeof sourceComponent) {
                // don't hoist over string (html) components
                var keys = Object.getOwnPropertyNames(sourceComponent);
                /* istanbul ignore else */
                isGetOwnPropertySymbolsAvailable && (keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent)));
                for (var i = 0; i < keys.length; ++i) if (!(REACT_STATICS[keys[i]] || KNOWN_STATICS[keys[i]] || customStatics && customStatics[keys[i]])) try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
            }
            return targetComponent;
        };
    }, /* 120 */
    /***/
    function(module, exports) {
        "use strict";
        function noop() {}
        function intBetween(min, max, val) {
            return Math.floor(Math.min(max, Math.max(min, val)));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.noop = noop, exports.intBetween = intBetween;
    }, /* 121 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var size, canUseDOM = __webpack_require__(122);
        module.exports = function(recalc) {
            if ((!size || recalc) && canUseDOM) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.position = "absolute", scrollDiv.style.top = "-9999px", scrollDiv.style.width = "50px", 
                scrollDiv.style.height = "50px", scrollDiv.style.overflow = "scroll", document.body.appendChild(scrollDiv), 
                size = scrollDiv.offsetWidth - scrollDiv.clientWidth, document.body.removeChild(scrollDiv);
            }
            return size;
        };
    }, /* 122 */
    /***/
    function(module, exports) {
        "use strict";
        module.exports = !("undefined" == typeof window || !window.document || !window.document.createElement);
    }, /* 123 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _ArrowKeyStepper = __webpack_require__(124);
        Object.defineProperty(exports, "ArrowKeyStepper", {
            enumerable: !0,
            get: function() {
                return _ArrowKeyStepper.ArrowKeyStepper;
            }
        });
        var _AutoSizer = __webpack_require__(127);
        Object.defineProperty(exports, "AutoSizer", {
            enumerable: !0,
            get: function() {
                return _AutoSizer.AutoSizer;
            }
        });
        var _CellMeasurer = __webpack_require__(130);
        Object.defineProperty(exports, "CellMeasurer", {
            enumerable: !0,
            get: function() {
                return _CellMeasurer.CellMeasurer;
            }
        }), Object.defineProperty(exports, "defaultCellMeasurerCellSizeCache", {
            enumerable: !0,
            get: function() {
                return _CellMeasurer.defaultCellSizeCache;
            }
        }), Object.defineProperty(exports, "uniformSizeCellMeasurerCellSizeCache", {
            enumerable: !0,
            get: function() {
                return _CellMeasurer.defaultCellSizeCache;
            }
        });
        var _Collection = __webpack_require__(133);
        Object.defineProperty(exports, "Collection", {
            enumerable: !0,
            get: function() {
                return _Collection.Collection;
            }
        });
        var _ColumnSizer = __webpack_require__(142);
        Object.defineProperty(exports, "ColumnSizer", {
            enumerable: !0,
            get: function() {
                return _ColumnSizer.ColumnSizer;
            }
        });
        var _Table = __webpack_require__(152);
        Object.defineProperty(exports, "defaultTableCellDataGetter", {
            enumerable: !0,
            get: function() {
                return _Table.defaultCellDataGetter;
            }
        }), Object.defineProperty(exports, "defaultTableCellRenderer", {
            enumerable: !0,
            get: function() {
                return _Table.defaultCellRenderer;
            }
        }), Object.defineProperty(exports, "defaultTableHeaderRenderer", {
            enumerable: !0,
            get: function() {
                return _Table.defaultHeaderRenderer;
            }
        }), Object.defineProperty(exports, "defaultTableRowRenderer", {
            enumerable: !0,
            get: function() {
                return _Table.defaultRowRenderer;
            }
        }), Object.defineProperty(exports, "Table", {
            enumerable: !0,
            get: function() {
                return _Table.Table;
            }
        }), Object.defineProperty(exports, "Column", {
            enumerable: !0,
            get: function() {
                return _Table.Column;
            }
        }), Object.defineProperty(exports, "SortDirection", {
            enumerable: !0,
            get: function() {
                return _Table.SortDirection;
            }
        }), Object.defineProperty(exports, "SortIndicator", {
            enumerable: !0,
            get: function() {
                return _Table.SortIndicator;
            }
        });
        var _Grid = __webpack_require__(144);
        Object.defineProperty(exports, "defaultCellRangeRenderer", {
            enumerable: !0,
            get: function() {
                return _Grid.defaultCellRangeRenderer;
            }
        }), Object.defineProperty(exports, "Grid", {
            enumerable: !0,
            get: function() {
                return _Grid.Grid;
            }
        });
        var _InfiniteLoader = __webpack_require__(161);
        Object.defineProperty(exports, "InfiniteLoader", {
            enumerable: !0,
            get: function() {
                return _InfiniteLoader.InfiniteLoader;
            }
        });
        var _ScrollSync = __webpack_require__(163);
        Object.defineProperty(exports, "ScrollSync", {
            enumerable: !0,
            get: function() {
                return _ScrollSync.ScrollSync;
            }
        });
        var _List = __webpack_require__(165);
        Object.defineProperty(exports, "List", {
            enumerable: !0,
            get: function() {
                return _List.List;
            }
        });
        var _WindowScroller = __webpack_require__(167);
        Object.defineProperty(exports, "WindowScroller", {
            enumerable: !0,
            get: function() {
                return _WindowScroller.WindowScroller;
            }
        });
    }, /* 124 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ArrowKeyStepper = exports["default"] = void 0;
        var _ArrowKeyStepper2 = __webpack_require__(125), _ArrowKeyStepper3 = _interopRequireDefault(_ArrowKeyStepper2);
        exports["default"] = _ArrowKeyStepper3["default"], exports.ArrowKeyStepper = _ArrowKeyStepper3["default"];
    }, /* 125 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), ArrowKeyStepper = function(_Component) {
                function ArrowKeyStepper(props, context) {
                    _classCallCheck(this, ArrowKeyStepper);
                    var _this = _possibleConstructorReturn(this, (ArrowKeyStepper.__proto__ || Object.getPrototypeOf(ArrowKeyStepper)).call(this, props, context));
                    return _this.state = {
                        scrollToColumn: props.scrollToColumn,
                        scrollToRow: props.scrollToRow
                    }, _this._columnStartIndex = 0, _this._columnStopIndex = 0, _this._rowStartIndex = 0, 
                    _this._rowStopIndex = 0, _this._onKeyDown = _this._onKeyDown.bind(_this), _this._onSectionRendered = _this._onSectionRendered.bind(_this), 
                    _this;
                }
                return _inherits(ArrowKeyStepper, _Component), _createClass(ArrowKeyStepper, [ {
                    key: "componentWillUpdate",
                    value: function(nextProps, nextState) {
                        var scrollToColumn = nextProps.scrollToColumn, scrollToRow = nextProps.scrollToRow;
                        this.props.scrollToColumn !== scrollToColumn && this.setState({
                            scrollToColumn: scrollToColumn
                        }), this.props.scrollToRow !== scrollToRow && this.setState({
                            scrollToRow: scrollToRow
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _props = this.props, className = _props.className, children = _props.children, _state = this.state, scrollToColumn = _state.scrollToColumn, scrollToRow = _state.scrollToRow;
                        return _react2["default"].createElement("div", {
                            className: className,
                            onKeyDown: this._onKeyDown
                        }, children({
                            onSectionRendered: this._onSectionRendered,
                            scrollToColumn: scrollToColumn,
                            scrollToRow: scrollToRow
                        }));
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_onKeyDown",
                    value: function(event) {
                        var _props2 = this.props, columnCount = _props2.columnCount, disabled = _props2.disabled, mode = _props2.mode, rowCount = _props2.rowCount;
                        if (!disabled) {
                            var _state2 = this.state, scrollToColumnPrevious = _state2.scrollToColumn, scrollToRowPrevious = _state2.scrollToRow, _state3 = this.state, scrollToColumn = _state3.scrollToColumn, scrollToRow = _state3.scrollToRow;
                            // The above cases all prevent default event event behavior.
                            // This is to keep the grid from scrolling after the snap-to update.
                            switch (event.key) {
                              case "ArrowDown":
                                scrollToRow = "cells" === mode ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(this._rowStopIndex + 1, rowCount - 1);
                                break;

                              case "ArrowLeft":
                                scrollToColumn = "cells" === mode ? Math.max(scrollToColumn - 1, 0) : Math.max(this._columnStartIndex - 1, 0);
                                break;

                              case "ArrowRight":
                                scrollToColumn = "cells" === mode ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(this._columnStopIndex + 1, columnCount - 1);
                                break;

                              case "ArrowUp":
                                scrollToRow = "cells" === mode ? Math.max(scrollToRow - 1, 0) : Math.max(this._rowStartIndex - 1, 0);
                            }
                            scrollToColumn === scrollToColumnPrevious && scrollToRow === scrollToRowPrevious || (event.preventDefault(), 
                            this.setState({
                                scrollToColumn: scrollToColumn,
                                scrollToRow: scrollToRow
                            }));
                        }
                    }
                }, {
                    key: "_onSectionRendered",
                    value: function(_ref) {
                        var columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex;
                        this._columnStartIndex = columnStartIndex, this._columnStopIndex = columnStopIndex, 
                        this._rowStartIndex = rowStartIndex, this._rowStopIndex = rowStopIndex;
                    }
                } ]), ArrowKeyStepper;
            }(_react.Component);
            ArrowKeyStepper.defaultProps = {
                disabled: !1,
                mode: "edges",
                scrollToColumn: 0,
                scrollToRow: 0
            }, exports["default"] = ArrowKeyStepper, "production" !== process.env.NODE_ENV ? ArrowKeyStepper.propTypes = {
                children: _react.PropTypes.func.isRequired,
                className: _react.PropTypes.string,
                columnCount: _react.PropTypes.number.isRequired,
                disabled: _react.PropTypes.bool.isRequired,
                mode: _react.PropTypes.oneOf([ "cells", "edges" ]),
                rowCount: _react.PropTypes.number.isRequired,
                scrollToColumn: _react.PropTypes.number.isRequired,
                scrollToRow: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 126 */
    /***/
    function(module, exports) {
        module.exports = React.addons.shallowCompare;
    }, /* 127 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.AutoSizer = exports["default"] = void 0;
        var _AutoSizer2 = __webpack_require__(128), _AutoSizer3 = _interopRequireDefault(_AutoSizer2);
        exports["default"] = _AutoSizer3["default"], exports.AutoSizer = _AutoSizer3["default"];
    }, /* 128 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _detectElementResize = __webpack_require__(129), _detectElementResize2 = _interopRequireDefault(_detectElementResize), AutoSizer = function(_Component) {
                function AutoSizer(props) {
                    _classCallCheck(this, AutoSizer);
                    var _this = _possibleConstructorReturn(this, (AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call(this, props));
                    return _this.state = {
                        height: 0,
                        width: 0
                    }, _this._onResize = _this._onResize.bind(_this), _this._setRef = _this._setRef.bind(_this), 
                    _this;
                }
                return _inherits(AutoSizer, _Component), _createClass(AutoSizer, [ {
                    key: "componentDidMount",
                    value: function() {
                        // Delay access of parentNode until mount.
                        // This handles edge-cases where the component has already been unmounted before its ref has been set,
                        // As well as libraries like react-lite which have a slightly different lifecycle.
                        this._parentNode = this._autoSizer.parentNode, // Defer requiring resize handler in order to support server-side rendering.
                        // See issue #41
                        this._detectElementResize = (0, _detectElementResize2["default"])(), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), 
                        this._onResize();
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._detectElementResize && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _props = this.props, children = _props.children, disableHeight = _props.disableHeight, disableWidth = _props.disableWidth, _state = this.state, height = _state.height, width = _state.width, outerStyle = {
                            overflow: "visible"
                        };
                        return disableHeight || (outerStyle.height = 0), disableWidth || (outerStyle.width = 0), 
                        _react2["default"].createElement("div", {
                            ref: this._setRef,
                            style: outerStyle
                        }, children({
                            height: height,
                            width: width
                        }));
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_onResize",
                    value: function() {
                        var onResize = this.props.onResize, boundingRect = this._parentNode.getBoundingClientRect(), height = boundingRect.height || 0, width = boundingRect.width || 0, style = window.getComputedStyle(this._parentNode) || {}, paddingLeft = parseInt(style.paddingLeft, 10) || 0, paddingRight = parseInt(style.paddingRight, 10) || 0, paddingTop = parseInt(style.paddingTop, 10) || 0, paddingBottom = parseInt(style.paddingBottom, 10) || 0;
                        this.setState({
                            height: height - paddingTop - paddingBottom,
                            width: width - paddingLeft - paddingRight
                        }), onResize({
                            height: height,
                            width: width
                        });
                    }
                }, {
                    key: "_setRef",
                    value: function(autoSizer) {
                        this._autoSizer = autoSizer;
                    }
                } ]), AutoSizer;
            }(_react.Component);
            AutoSizer.defaultProps = {
                onResize: function() {}
            }, exports["default"] = AutoSizer, "production" !== process.env.NODE_ENV ? AutoSizer.propTypes = {
                /**
	  * Function responsible for rendering children.
	  * This function should implement the following signature:
	  * ({ height, width }) => PropTypes.element
	  */
                children: _react.PropTypes.func.isRequired,
                /** Disable dynamic :height property */
                disableHeight: _react.PropTypes.bool,
                /** Disable dynamic :width property */
                disableWidth: _react.PropTypes.bool,
                /** Callback to be invoked on-resize: ({ height, width }) */
                onResize: _react.PropTypes.func.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 129 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Detect Element Resize.
	 * https://github.com/sdecima/javascript-detect-element-resize
	 * Sebastian Decima
	 *
	 * Forked from version 0.5.3; includes the following modifications:
	 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
	 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
	 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
	 **/
        function createDetectElementResize() {
            // Check `document` and `window` in case of server-side rendering
            var _window;
            _window = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
            var attachEvent = "undefined" != typeof document && document.attachEvent;
            if (!attachEvent) {
                var requestFrame = function() {
                    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function(fn) {
                        return _window.setTimeout(fn, 20);
                    };
                    return function(fn) {
                        return raf(fn);
                    };
                }(), cancelFrame = function() {
                    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
                    return function(id) {
                        return cancel(id);
                    };
                }(), resetTriggers = function(element) {
                    var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
                    contract.scrollLeft = contract.scrollWidth, contract.scrollTop = contract.scrollHeight, 
                    expandChild.style.width = expand.offsetWidth + 1 + "px", expandChild.style.height = expand.offsetHeight + 1 + "px", 
                    expand.scrollLeft = expand.scrollWidth, expand.scrollTop = expand.scrollHeight;
                }, checkTriggers = function(element) {
                    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
                }, scrollListener = function(e) {
                    // Don't measure (which forces) reflow for scrolls that happen inside of children!
                    if (!(e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0)) {
                        var element = this;
                        resetTriggers(this), this.__resizeRAF__ && cancelFrame(this.__resizeRAF__), this.__resizeRAF__ = requestFrame(function() {
                            checkTriggers(element) && (element.__resizeLast__.width = element.offsetWidth, element.__resizeLast__.height = element.offsetHeight, 
                            element.__resizeListeners__.forEach(function(fn) {
                                fn.call(element, e);
                            }));
                        });
                    }
                }, animation = !1, animationstring = "animation", keyframeprefix = "", animationstartevent = "animationstart", domPrefixes = "Webkit Moz O ms".split(" "), startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), pfx = "", elm = document.createElement("fakeelement");
                if (void 0 !== elm.style.animationName && (animation = !0), animation === !1) for (var i = 0; i < domPrefixes.length; i++) if (void 0 !== elm.style[domPrefixes[i] + "AnimationName"]) {
                    pfx = domPrefixes[i], animationstring = pfx + "Animation", keyframeprefix = "-" + pfx.toLowerCase() + "-", 
                    animationstartevent = startEvents[i], animation = !0;
                    break;
                }
                var animationName = "resizeanim", animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ", animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
            }
            var createStyles = function() {
                if (!document.getElementById("detectElementResize")) {
                    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
                    var css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
                    style.id = "detectElementResize", style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), 
                    head.appendChild(style);
                }
            }, addResizeListener = function(element, fn) {
                if (attachEvent) element.attachEvent("onresize", fn); else {
                    if (!element.__resizeTriggers__) {
                        var elementStyle = _window.getComputedStyle(element);
                        elementStyle && "static" == elementStyle.position && (element.style.position = "relative"), 
                        createStyles(), element.__resizeLast__ = {}, element.__resizeListeners__ = [], (element.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", 
                        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', 
                        element.appendChild(element.__resizeTriggers__), resetTriggers(element), element.addEventListener("scroll", scrollListener, !0), 
                        /* Listen for a css animation to detect element display/re-attach */
                        animationstartevent && (element.__resizeTriggers__.__animationListener__ = function(e) {
                            e.animationName == animationName && resetTriggers(element);
                        }, element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__));
                    }
                    element.__resizeListeners__.push(fn);
                }
            }, removeResizeListener = function(element, fn) {
                attachEvent ? element.detachEvent("onresize", fn) : (element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1), 
                element.__resizeListeners__.length || (element.removeEventListener("scroll", scrollListener, !0), 
                element.__resizeTriggers__.__animationListener__ && (element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__), 
                element.__resizeTriggers__.__animationListener__ = null), element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__)));
            };
            return {
                addResizeListener: addResizeListener,
                removeResizeListener: removeResizeListener
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = createDetectElementResize;
    }, /* 130 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.defaultCellSizeCache = exports.CellMeasurer = exports["default"] = void 0;
        var _CellMeasurer2 = __webpack_require__(131), _CellMeasurer3 = _interopRequireDefault(_CellMeasurer2), _defaultCellSizeCache2 = __webpack_require__(132), _defaultCellSizeCache3 = _interopRequireDefault(_defaultCellSizeCache2);
        exports["default"] = _CellMeasurer3["default"], exports.CellMeasurer = _CellMeasurer3["default"], 
        exports.defaultCellSizeCache = _defaultCellSizeCache3["default"];
    }, /* 131 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _reactDom = __webpack_require__(3), _reactDom2 = _interopRequireDefault(_reactDom), _defaultCellSizeCache = __webpack_require__(132), _defaultCellSizeCache2 = _interopRequireDefault(_defaultCellSizeCache), CellMeasurer = function(_Component) {
                function CellMeasurer(props, state) {
                    _classCallCheck(this, CellMeasurer);
                    var _this = _possibleConstructorReturn(this, (CellMeasurer.__proto__ || Object.getPrototypeOf(CellMeasurer)).call(this, props, state));
                    return _this._cellSizeCache = props.cellSizeCache || new _defaultCellSizeCache2["default"](), 
                    _this.getColumnWidth = _this.getColumnWidth.bind(_this), _this.getRowHeight = _this.getRowHeight.bind(_this), 
                    _this.resetMeasurements = _this.resetMeasurements.bind(_this), _this.resetMeasurementForColumn = _this.resetMeasurementForColumn.bind(_this), 
                    _this.resetMeasurementForRow = _this.resetMeasurementForRow.bind(_this), _this;
                }
                return _inherits(CellMeasurer, _Component), _createClass(CellMeasurer, [ {
                    key: "getColumnWidth",
                    value: function(_ref) {
                        var index = _ref.index, columnWidth = this._cellSizeCache.getColumnWidth(index);
                        if (null != columnWidth) return columnWidth;
                        for (var rowCount = this.props.rowCount, maxWidth = 0, rowIndex = 0; rowIndex < rowCount; rowIndex++) {
                            var _measureCell2 = this._measureCell({
                                clientWidth: !0,
                                columnIndex: index,
                                rowIndex: rowIndex
                            }), width = _measureCell2.width;
                            maxWidth = Math.max(maxWidth, width);
                        }
                        return this._cellSizeCache.setColumnWidth(index, maxWidth), maxWidth;
                    }
                }, {
                    key: "getRowHeight",
                    value: function(_ref2) {
                        var index = _ref2.index, rowHeight = this._cellSizeCache.getRowHeight(index);
                        if (null != rowHeight) return rowHeight;
                        for (var columnCount = this.props.columnCount, maxHeight = 0, columnIndex = 0; columnIndex < columnCount; columnIndex++) {
                            var _measureCell3 = this._measureCell({
                                clientHeight: !0,
                                columnIndex: columnIndex,
                                rowIndex: index
                            }), height = _measureCell3.height;
                            maxHeight = Math.max(maxHeight, height);
                        }
                        return this._cellSizeCache.setRowHeight(index, maxHeight), maxHeight;
                    }
                }, {
                    key: "resetMeasurementForColumn",
                    value: function(columnIndex) {
                        this._cellSizeCache.clearColumnWidth(columnIndex);
                    }
                }, {
                    key: "resetMeasurementForRow",
                    value: function(rowIndex) {
                        this._cellSizeCache.clearRowHeight(rowIndex);
                    }
                }, {
                    key: "resetMeasurements",
                    value: function() {
                        this._cellSizeCache.clearAllColumnWidths(), this._cellSizeCache.clearAllRowHeights();
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this._renderAndMount();
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(nextProps) {
                        var cellSizeCache = this.props.cellSizeCache;
                        cellSizeCache !== nextProps.cellSizeCache && (this._cellSizeCache = nextProps.cellSizeCache), 
                        this._updateDivDimensions(nextProps);
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._unmountContainer();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var children = this.props.children;
                        return children({
                            getColumnWidth: this.getColumnWidth,
                            getRowHeight: this.getRowHeight,
                            resetMeasurements: this.resetMeasurements,
                            resetMeasurementForColumn: this.resetMeasurementForColumn,
                            resetMeasurementForRow: this.resetMeasurementForRow
                        });
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_getContainerNode",
                    value: function(props) {
                        var container = props.container;
                        return container ? _reactDom2["default"].findDOMNode("function" == typeof container ? container() : container) : document.body;
                    }
                }, {
                    key: "_measureCell",
                    value: function(_ref3) {
                        var _ref3$clientHeight = _ref3.clientHeight, clientHeight = void 0 !== _ref3$clientHeight && _ref3$clientHeight, _ref3$clientWidth = _ref3.clientWidth, clientWidth = void 0 === _ref3$clientWidth || _ref3$clientWidth, columnIndex = _ref3.columnIndex, rowIndex = _ref3.rowIndex, cellRenderer = this.props.cellRenderer, rendered = cellRenderer({
                            columnIndex: columnIndex,
                            index: rowIndex,
                            // Simplify List :rowRenderer use case
                            rowIndex: rowIndex
                        });
                        // Handle edge case where this method is called before the CellMeasurer has completed its initial render (and mounted).
                        this._renderAndMount(), // @TODO Keep an eye on this for future React updates as the interface may change:
                        // https://twitter.com/soprano/status/737316379712331776
                        _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, rendered, this._div);
                        var measurements = {
                            height: clientHeight && this._div.clientHeight,
                            width: clientWidth && this._div.clientWidth
                        };
                        return _reactDom2["default"].unmountComponentAtNode(this._div), measurements;
                    }
                }, {
                    key: "_renderAndMount",
                    value: function() {
                        this._div || (this._div = document.createElement("div"), this._div.style.display = "inline-block", 
                        this._div.style.position = "absolute", this._div.style.visibility = "hidden", this._div.style.zIndex = -1, 
                        this._updateDivDimensions(this.props), this._containerNode = this._getContainerNode(this.props), 
                        this._containerNode.appendChild(this._div));
                    }
                }, {
                    key: "_unmountContainer",
                    value: function() {
                        this._div && (this._containerNode.removeChild(this._div), this._div = null), this._containerNode = null;
                    }
                }, {
                    key: "_updateDivDimensions",
                    value: function(props) {
                        var height = props.height, width = props.width;
                        height && height !== this._divHeight && (this._divHeight = height, this._div.style.height = height + "px"), 
                        width && width !== this._divWidth && (this._divWidth = width, this._div.style.width = width + "px");
                    }
                } ]), CellMeasurer;
            }(_react.Component);
            exports["default"] = CellMeasurer, "production" !== process.env.NODE_ENV ? CellMeasurer.propTypes = {
                /**
	   * Renders a cell given its indices.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
                cellRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Optional, custom caching strategy for cell sizes.
	   */
                cellSizeCache: _react.PropTypes.object,
                /**
	   * Function responsible for rendering a virtualized component.
	   * This function should implement the following signature:
	   * ({ getColumnWidth, getRowHeight, resetMeasurements }) => PropTypes.element
	   */
                children: _react.PropTypes.func.isRequired,
                /**
	   * Number of columns in grid.
	   */
                columnCount: _react.PropTypes.number.isRequired,
                /**
	   * A Node, Component instance, or function that returns either.
	   * If this property is not specified the document body will be used.
	   */
                container: _react2["default"].PropTypes.oneOfType([ _react2["default"].PropTypes.func, _react2["default"].PropTypes.node ]),
                /**
	   * Assign a fixed :height in order to measure dynamic text :width only.
	   */
                height: _react.PropTypes.number,
                /**
	   * Number of rows in grid.
	   */
                rowCount: _react.PropTypes.number.isRequired,
                /**
	   * Assign a fixed :width in order to measure dynamic text :height only.
	   */
                width: _react.PropTypes.number
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 132 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), CellSizeCache = function() {
            function CellSizeCache() {
                var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref$uniformRowHeight = _ref.uniformRowHeight, uniformRowHeight = void 0 !== _ref$uniformRowHeight && _ref$uniformRowHeight, _ref$uniformColumnWid = _ref.uniformColumnWidth, uniformColumnWidth = void 0 !== _ref$uniformColumnWid && _ref$uniformColumnWid;
                _classCallCheck(this, CellSizeCache), this._uniformRowHeight = uniformRowHeight, 
                this._uniformColumnWidth = uniformColumnWidth, this._cachedColumnWidth = void 0, 
                this._cachedRowHeight = void 0, this._cachedColumnWidths = {}, this._cachedRowHeights = {};
            }
            return _createClass(CellSizeCache, [ {
                key: "clearAllColumnWidths",
                value: function() {
                    this._cachedColumnWidth = void 0, this._cachedColumnWidths = {};
                }
            }, {
                key: "clearAllRowHeights",
                value: function() {
                    this._cachedRowHeight = void 0, this._cachedRowHeights = {};
                }
            }, {
                key: "clearColumnWidth",
                value: function(index) {
                    this._cachedColumnWidth = void 0, delete this._cachedColumnWidths[index];
                }
            }, {
                key: "clearRowHeight",
                value: function(index) {
                    this._cachedRowHeight = void 0, delete this._cachedRowHeights[index];
                }
            }, {
                key: "getColumnWidth",
                value: function(index) {
                    return this._uniformColumnWidth ? this._cachedColumnWidth : this._cachedColumnWidths[index];
                }
            }, {
                key: "getRowHeight",
                value: function(index) {
                    return this._uniformRowHeight ? this._cachedRowHeight : this._cachedRowHeights[index];
                }
            }, {
                key: "setColumnWidth",
                value: function(index, width) {
                    this._cachedColumnWidth = width, this._cachedColumnWidths[index] = width;
                }
            }, {
                key: "setRowHeight",
                value: function(index, height) {
                    this._cachedRowHeight = height, this._cachedRowHeights[index] = height;
                }
            } ]), CellSizeCache;
        }();
        exports["default"] = CellSizeCache;
    }, /* 133 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Collection = exports["default"] = void 0;
        var _Collection2 = __webpack_require__(134), _Collection3 = _interopRequireDefault(_Collection2);
        exports["default"] = _Collection3["default"], exports.Collection = _Collection3["default"];
    }, /* 134 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
                return target;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            function defaultCellGroupRenderer(_ref5) {
                var cellCache = _ref5.cellCache, cellRenderer = _ref5.cellRenderer, cellSizeAndPositionGetter = _ref5.cellSizeAndPositionGetter, indices = _ref5.indices, isScrolling = _ref5.isScrolling;
                return indices.map(function(index) {
                    var cellMetadata = cellSizeAndPositionGetter({
                        index: index
                    }), cellRendererProps = {
                        index: index,
                        isScrolling: isScrolling,
                        key: index,
                        style: {
                            height: cellMetadata.height,
                            left: cellMetadata.x,
                            position: "absolute",
                            top: cellMetadata.y,
                            width: cellMetadata.width
                        }
                    };
                    // Avoid re-creating cells while scrolling.
                    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
                    // If a scroll is in progress- cache and reuse cells.
                    // This cache will be thrown away once scrolling complets.
                    // Avoid re-creating cells while scrolling.
                    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
                    // If a scroll is in progress- cache and reuse cells.
                    // This cache will be thrown away once scrolling complets.
                    return isScrolling ? (index in cellCache || (cellCache[index] = cellRenderer(cellRendererProps)), 
                    cellCache[index]) : cellRenderer(cellRendererProps);
                }).filter(function(renderedCell) {
                    return !!renderedCell;
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _CollectionView = __webpack_require__(135), _CollectionView2 = _interopRequireDefault(_CollectionView), _calculateSizeAndPositionData2 = __webpack_require__(138), _calculateSizeAndPositionData3 = _interopRequireDefault(_calculateSizeAndPositionData2), _getUpdatedOffsetForIndex = __webpack_require__(141), _getUpdatedOffsetForIndex2 = _interopRequireDefault(_getUpdatedOffsetForIndex), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), Collection = function(_Component) {
                function Collection(props, context) {
                    _classCallCheck(this, Collection);
                    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props, context));
                    // Cell cache during scroll (for perforamnce)
                    return _this._cellMetadata = [], _this._lastRenderedCellIndices = [], _this._cellCache = [], 
                    _this._isScrollingChange = _this._isScrollingChange.bind(_this), _this;
                }
                /** See Collection#recomputeCellSizesAndPositions */
                return _inherits(Collection, _Component), _createClass(Collection, [ {
                    key: "recomputeCellSizesAndPositions",
                    value: function() {
                        this._cellCache = [], this._collectionView.recomputeCellSizesAndPositions();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _this2 = this, props = _objectWithoutProperties(this.props, []);
                        return _react2["default"].createElement(_CollectionView2["default"], _extends({
                            cellLayoutManager: this,
                            isScrollingChange: this._isScrollingChange,
                            ref: function(_ref) {
                                _this2._collectionView = _ref;
                            }
                        }, props));
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "calculateSizeAndPositionData",
                    value: function() {
                        var _props = this.props, cellCount = _props.cellCount, cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter, sectionSize = _props.sectionSize, data = (0, 
                        _calculateSizeAndPositionData3["default"])({
                            cellCount: cellCount,
                            cellSizeAndPositionGetter: cellSizeAndPositionGetter,
                            sectionSize: sectionSize
                        });
                        this._cellMetadata = data.cellMetadata, this._sectionManager = data.sectionManager, 
                        this._height = data.height, this._width = data.width;
                    }
                }, {
                    key: "getLastRenderedIndices",
                    value: function() {
                        return this._lastRenderedCellIndices;
                    }
                }, {
                    key: "getScrollPositionForCell",
                    value: function(_ref2) {
                        var align = _ref2.align, cellIndex = _ref2.cellIndex, height = _ref2.height, scrollLeft = _ref2.scrollLeft, scrollTop = _ref2.scrollTop, width = _ref2.width, cellCount = this.props.cellCount;
                        if (cellIndex >= 0 && cellIndex < cellCount) {
                            var cellMetadata = this._cellMetadata[cellIndex];
                            scrollLeft = (0, _getUpdatedOffsetForIndex2["default"])({
                                align: align,
                                cellOffset: cellMetadata.x,
                                cellSize: cellMetadata.width,
                                containerSize: width,
                                currentOffset: scrollLeft,
                                targetIndex: cellIndex
                            }), scrollTop = (0, _getUpdatedOffsetForIndex2["default"])({
                                align: align,
                                cellOffset: cellMetadata.y,
                                cellSize: cellMetadata.height,
                                containerSize: height,
                                currentOffset: scrollTop,
                                targetIndex: cellIndex
                            });
                        }
                        return {
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop
                        };
                    }
                }, {
                    key: "getTotalSize",
                    value: function() {
                        return {
                            height: this._height,
                            width: this._width
                        };
                    }
                }, {
                    key: "cellRenderers",
                    value: function(_ref3) {
                        var _this3 = this, height = _ref3.height, isScrolling = _ref3.isScrolling, width = _ref3.width, x = _ref3.x, y = _ref3.y, _props2 = this.props, cellGroupRenderer = _props2.cellGroupRenderer, cellRenderer = _props2.cellRenderer;
                        // Store for later calls to getLastRenderedIndices()
                        return this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
                            height: height,
                            width: width,
                            x: x,
                            y: y
                        }), cellGroupRenderer({
                            cellCache: this._cellCache,
                            cellRenderer: cellRenderer,
                            cellSizeAndPositionGetter: function(_ref4) {
                                var index = _ref4.index;
                                return _this3._sectionManager.getCellMetadata({
                                    index: index
                                });
                            },
                            indices: this._lastRenderedCellIndices,
                            isScrolling: isScrolling
                        });
                    }
                }, {
                    key: "_isScrollingChange",
                    value: function(isScrolling) {
                        isScrolling || (this._cellCache = []);
                    }
                } ]), Collection;
            }(_react.Component);
            Collection.defaultProps = {
                "aria-label": "grid",
                cellGroupRenderer: defaultCellGroupRenderer
            }, exports["default"] = Collection, "production" !== process.env.NODE_ENV ? Collection.propTypes = {
                "aria-label": _react.PropTypes.string,
                /**
	   * Number of cells in Collection.
	   */
                cellCount: _react.PropTypes.number.isRequired,
                /**
	   * Responsible for rendering a group of cells given their indices.
	   * Should implement the following interface: ({
	   *   cellSizeAndPositionGetter:Function,
	   *   indices: Array<number>,
	   *   cellRenderer: Function
	   * }): Array<PropTypes.node>
	   */
                cellGroupRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
	   */
                cellRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Callback responsible for returning size and offset/position information for a given cell (index).
	   * ({ index: number }): { height: number, width: number, x: number, y: number }
	   */
                cellSizeAndPositionGetter: _react.PropTypes.func.isRequired,
                /**
	   * Optionally override the size of the sections a Collection's cells are split into.
	   */
                sectionSize: _react.PropTypes.number
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 135 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(136), _classnames2 = _interopRequireDefault(_classnames), _createCallbackMemoizer = __webpack_require__(137), _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer), _scrollbarSize = __webpack_require__(121), _scrollbarSize2 = _interopRequireDefault(_scrollbarSize), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), IS_SCROLLING_TIMEOUT = 150, SCROLL_POSITION_CHANGE_REASONS = {
                OBSERVED: "observed",
                REQUESTED: "requested"
            }, CollectionView = function(_Component) {
                function CollectionView(props, context) {
                    _classCallCheck(this, CollectionView);
                    var _this = _possibleConstructorReturn(this, (CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).call(this, props, context));
                    // Invokes callbacks only when their values have changed.
                    // Bind functions to instance so they don't lose context when passed around.
                    return _this.state = {
                        calculateSizeAndPositionDataOnNextUpdate: !1,
                        isScrolling: !1,
                        scrollLeft: 0,
                        scrollTop: 0
                    }, _this._onSectionRenderedMemoizer = (0, _createCallbackMemoizer2["default"])(), 
                    _this._onScrollMemoizer = (0, _createCallbackMemoizer2["default"])(!1), _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this), 
                    _this._onScroll = _this._onScroll.bind(_this), _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this), 
                    _this;
                }
                /**
	   * Forced recompute of cell sizes and positions.
	   * This function should be called if cell sizes have changed but nothing else has.
	   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
	   */
                return _inherits(CollectionView, _Component), _createClass(CollectionView, [ {
                    key: "recomputeCellSizesAndPositions",
                    value: function() {
                        this.setState({
                            calculateSizeAndPositionDataOnNextUpdate: !0
                        });
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var _props = this.props, cellLayoutManager = _props.cellLayoutManager, scrollLeft = _props.scrollLeft, scrollToCell = _props.scrollToCell, scrollTop = _props.scrollTop;
                        // If this component was first rendered server-side, scrollbar size will be undefined.
                        // In that event we need to remeasure.
                        this._scrollbarSizeMeasured || (this._scrollbarSize = (0, _scrollbarSize2["default"])(), 
                        this._scrollbarSizeMeasured = !0, this.setState({})), scrollToCell >= 0 ? this._updateScrollPositionForScrollToCell() : (scrollLeft >= 0 || scrollTop >= 0) && this._setScrollPosition({
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop
                        }), // Update onSectionRendered callback.
                        this._invokeOnSectionRenderedHelper();
                        var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge.height, totalWidth = _cellLayoutManager$ge.width;
                        // Initialize onScroll callback.
                        this._invokeOnScrollMemoizer({
                            scrollLeft: scrollLeft || 0,
                            scrollTop: scrollTop || 0,
                            totalHeight: totalHeight,
                            totalWidth: totalWidth
                        });
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(prevProps, prevState) {
                        var _props2 = this.props, height = _props2.height, scrollToAlignment = _props2.scrollToAlignment, scrollToCell = _props2.scrollToCell, width = _props2.width, _state = this.state, scrollLeft = _state.scrollLeft, scrollPositionChangeReason = _state.scrollPositionChangeReason, scrollTop = _state.scrollTop;
                        // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                        // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                        // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                        // So we only set these when we require an adjustment of the scroll position.
                        // See issue #2 for more information.
                        scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED && (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft && (this._scrollingContainer.scrollLeft = scrollLeft), 
                        scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop && (this._scrollingContainer.scrollTop = scrollTop)), 
                        // Update scroll offsets if the current :scrollToCell values requires it
                        height === prevProps.height && scrollToAlignment === prevProps.scrollToAlignment && scrollToCell === prevProps.scrollToCell && width === prevProps.width || this._updateScrollPositionForScrollToCell(), 
                        // Update onRowsRendered callback if start/stop indices have changed
                        this._invokeOnSectionRenderedHelper();
                    }
                }, {
                    key: "componentWillMount",
                    value: function() {
                        var cellLayoutManager = this.props.cellLayoutManager;
                        cellLayoutManager.calculateSizeAndPositionData(), // If this component is being rendered server-side, getScrollbarSize() will return undefined.
                        // We handle this case in componentDidMount()
                        this._scrollbarSize = (0, _scrollbarSize2["default"])(), void 0 === this._scrollbarSize ? (this._scrollbarSizeMeasured = !1, 
                        this._scrollbarSize = 0) : this._scrollbarSizeMeasured = !0;
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId);
                    }
                }, {
                    key: "componentWillUpdate",
                    value: function(nextProps, nextState) {
                        0 !== nextProps.cellCount || 0 === nextState.scrollLeft && 0 === nextState.scrollTop ? nextProps.scrollLeft === this.props.scrollLeft && nextProps.scrollTop === this.props.scrollTop || this._setScrollPosition({
                            scrollLeft: nextProps.scrollLeft,
                            scrollTop: nextProps.scrollTop
                        }) : this._setScrollPosition({
                            scrollLeft: 0,
                            scrollTop: 0
                        }), (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || nextState.calculateSizeAndPositionDataOnNextUpdate) && nextProps.cellLayoutManager.calculateSizeAndPositionData(), 
                        nextState.calculateSizeAndPositionDataOnNextUpdate && this.setState({
                            calculateSizeAndPositionDataOnNextUpdate: !1
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _this2 = this, _props3 = this.props, autoHeight = _props3.autoHeight, cellCount = _props3.cellCount, cellLayoutManager = _props3.cellLayoutManager, className = _props3.className, height = _props3.height, horizontalOverscanSize = _props3.horizontalOverscanSize, id = _props3.id, noContentRenderer = _props3.noContentRenderer, style = _props3.style, verticalOverscanSize = _props3.verticalOverscanSize, width = _props3.width, _state2 = this.state, isScrolling = _state2.isScrolling, scrollLeft = _state2.scrollLeft, scrollTop = _state2.scrollTop, _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge2.height, totalWidth = _cellLayoutManager$ge2.width, left = Math.max(0, scrollLeft - horizontalOverscanSize), top = Math.max(0, scrollTop - verticalOverscanSize), right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize), bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize), childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
                            height: bottom - top,
                            isScrolling: isScrolling,
                            width: right - left,
                            x: left,
                            y: top
                        }) : [], collectionStyle = {
                            boxSizing: "border-box",
                            direction: "ltr",
                            height: autoHeight ? "auto" : height,
                            overflow: "auto",
                            position: "relative",
                            WebkitOverflowScrolling: "touch",
                            width: width,
                            willChange: "transform"
                        }, verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0, horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;
                        return totalWidth + verticalScrollBarSize <= width && (collectionStyle.overflowX = "hidden"), 
                        totalHeight + horizontalScrollBarSize <= height && (collectionStyle.overflowY = "hidden"), 
                        _react2["default"].createElement("div", {
                            ref: function(_ref) {
                                _this2._scrollingContainer = _ref;
                            },
                            "aria-label": this.props["aria-label"],
                            className: (0, _classnames2["default"])("ReactVirtualized__Collection", className),
                            id: id,
                            onScroll: this._onScroll,
                            role: "grid",
                            style: _extends({}, collectionStyle, style),
                            tabIndex: 0
                        }, cellCount > 0 && _react2["default"].createElement("div", {
                            className: "ReactVirtualized__Collection__innerScrollContainer",
                            style: {
                                height: totalHeight,
                                maxHeight: totalHeight,
                                maxWidth: totalWidth,
                                overflow: "hidden",
                                pointerEvents: isScrolling ? "none" : "",
                                width: totalWidth
                            }
                        }, childrenToDisplay), 0 === cellCount && noContentRenderer());
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_enablePointerEventsAfterDelay",
                    value: function() {
                        var _this3 = this;
                        this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId), 
                        this._disablePointerEventsTimeoutId = setTimeout(function() {
                            var isScrollingChange = _this3.props.isScrollingChange;
                            isScrollingChange(!1), _this3._disablePointerEventsTimeoutId = null, _this3.setState({
                                isScrolling: !1
                            });
                        }, IS_SCROLLING_TIMEOUT);
                    }
                }, {
                    key: "_invokeOnSectionRenderedHelper",
                    value: function() {
                        var _props4 = this.props, cellLayoutManager = _props4.cellLayoutManager, onSectionRendered = _props4.onSectionRendered;
                        this._onSectionRenderedMemoizer({
                            callback: onSectionRendered,
                            indices: {
                                indices: cellLayoutManager.getLastRenderedIndices()
                            }
                        });
                    }
                }, {
                    key: "_invokeOnScrollMemoizer",
                    value: function(_ref2) {
                        var _this4 = this, scrollLeft = _ref2.scrollLeft, scrollTop = _ref2.scrollTop, totalHeight = _ref2.totalHeight, totalWidth = _ref2.totalWidth;
                        this._onScrollMemoizer({
                            callback: function(_ref3) {
                                var scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop, _props5 = _this4.props, height = _props5.height, onScroll = _props5.onScroll, width = _props5.width;
                                onScroll({
                                    clientHeight: height,
                                    clientWidth: width,
                                    scrollHeight: totalHeight,
                                    scrollLeft: scrollLeft,
                                    scrollTop: scrollTop,
                                    scrollWidth: totalWidth
                                });
                            },
                            indices: {
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop
                            }
                        });
                    }
                }, {
                    key: "_setScrollPosition",
                    value: function(_ref4) {
                        var scrollLeft = _ref4.scrollLeft, scrollTop = _ref4.scrollTop, newState = {
                            scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                        };
                        scrollLeft >= 0 && (newState.scrollLeft = scrollLeft), scrollTop >= 0 && (newState.scrollTop = scrollTop), 
                        (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) && this.setState(newState);
                    }
                }, {
                    key: "_updateScrollPositionForScrollToCell",
                    value: function() {
                        var _props6 = this.props, cellLayoutManager = _props6.cellLayoutManager, height = _props6.height, scrollToAlignment = _props6.scrollToAlignment, scrollToCell = _props6.scrollToCell, width = _props6.width, _state3 = this.state, scrollLeft = _state3.scrollLeft, scrollTop = _state3.scrollTop;
                        if (scrollToCell >= 0) {
                            var scrollPosition = cellLayoutManager.getScrollPositionForCell({
                                align: scrollToAlignment,
                                cellIndex: scrollToCell,
                                height: height,
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                width: width
                            });
                            scrollPosition.scrollLeft === scrollLeft && scrollPosition.scrollTop === scrollTop || this._setScrollPosition(scrollPosition);
                        }
                    }
                }, {
                    key: "_onScroll",
                    value: function(event) {
                        // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
                        // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
                        // See issue #404 for more information.
                        if (event.target === this._scrollingContainer) {
                            // Prevent pointer events from interrupting a smooth scroll
                            this._enablePointerEventsAfterDelay();
                            // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
                            // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
                            // This causes a series of rapid renders that is slow for long lists.
                            // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
                            var _props7 = this.props, cellLayoutManager = _props7.cellLayoutManager, height = _props7.height, isScrollingChange = _props7.isScrollingChange, width = _props7.width, scrollbarSize = this._scrollbarSize, _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge3.height, totalWidth = _cellLayoutManager$ge3.width, scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft)), scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));
                            // Certain devices (like Apple touchpad) rapid-fire duplicate events.
                            // Don't force a re-render if this is the case.
                            // The mouse may move faster then the animation frame does.
                            // Use requestAnimationFrame to avoid over-updating.
                            if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
                                // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
                                // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
                                // All things considered, this seems to be the best current work around that I'm aware of.
                                // For more information see https://github.com/bvaughn/react-virtualized/pull/124
                                var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;
                                // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
                                this.state.isScrolling || isScrollingChange(!0), this.setState({
                                    isScrolling: !0,
                                    scrollLeft: scrollLeft,
                                    scrollPositionChangeReason: scrollPositionChangeReason,
                                    scrollTop: scrollTop
                                });
                            }
                            this._invokeOnScrollMemoizer({
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                totalWidth: totalWidth,
                                totalHeight: totalHeight
                            });
                        }
                    }
                } ]), CollectionView;
            }(_react.Component);
            CollectionView.defaultProps = {
                "aria-label": "grid",
                horizontalOverscanSize: 0,
                noContentRenderer: function() {
                    return null;
                },
                onScroll: function() {
                    return null;
                },
                onSectionRendered: function() {
                    return null;
                },
                scrollToAlignment: "auto",
                style: {},
                verticalOverscanSize: 0
            }, exports["default"] = CollectionView, "production" !== process.env.NODE_ENV ? CollectionView.propTypes = {
                "aria-label": _react.PropTypes.string,
                /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
                autoHeight: _react.PropTypes.bool,
                /**
	   * Number of cells in collection.
	   */
                cellCount: _react.PropTypes.number.isRequired,
                /**
	   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
	   */
                cellLayoutManager: _react.PropTypes.object.isRequired,
                /**
	   * Optional custom CSS class name to attach to root Collection element.
	   */
                className: _react.PropTypes.string,
                /**
	   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
	   */
                height: _react.PropTypes.number.isRequired,
                /**
	   * Optional custom id to attach to root Collection element.
	   */
                id: _react.PropTypes.string,
                /**
	   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
                horizontalOverscanSize: _react.PropTypes.number.isRequired,
                isScrollingChange: _react.PropTypes.func,
                /**
	   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
	   */
                noContentRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
                onScroll: _react.PropTypes.func.isRequired,
                /**
	   * Callback invoked with information about the section of the Collection that was just rendered.
	   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
	   */
                onSectionRendered: _react.PropTypes.func.isRequired,
                /**
	   * Horizontal offset.
	   */
                scrollLeft: _react.PropTypes.number,
                /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
                scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
                /**
	   * Cell index to ensure visible (by forcefully scrolling if necessary).
	   */
                scrollToCell: _react.PropTypes.number,
                /**
	   * Vertical offset.
	   */
                scrollTop: _react.PropTypes.number,
                /**
	   * Optional custom inline style to attach to root Collection element.
	   */
                style: _react.PropTypes.object,
                /**
	   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
                verticalOverscanSize: _react.PropTypes.number.isRequired,
                /**
	   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
	   */
                width: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 136 */
    /***/
    function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
        /* global define */
        !function() {
            "use strict";
            function classNames() {
                for (var classes = [], i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    if (arg) {
                        var argType = typeof arg;
                        if ("string" === argType || "number" === argType) classes.push(arg); else if (Array.isArray(arg)) classes.push(classNames.apply(null, arg)); else if ("object" === argType) for (var key in arg) hasOwn.call(arg, key) && arg[key] && classes.push(key);
                    }
                }
                return classes.join(" ");
            }
            var hasOwn = {}.hasOwnProperty;
            "undefined" != typeof module && module.exports ? module.exports = classNames : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
            __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), // register as 'classnames', consistent with npm package name
            !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        }();
    }, /* 137 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
	 */
        function createCallbackMemoizer() {
            var requireAllKeys = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], cachedIndices = {};
            return function(_ref) {
                var callback = _ref.callback, indices = _ref.indices, keys = Object.keys(indices), allInitialized = !requireAllKeys || keys.every(function(key) {
                    var value = indices[key];
                    return Array.isArray(value) ? value.length > 0 : value >= 0;
                }), indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function(key) {
                    var cachedValue = cachedIndices[key], value = indices[key];
                    return Array.isArray(value) ? cachedValue.join(",") !== value.join(",") : cachedValue !== value;
                });
                cachedIndices = indices, allInitialized && indexChanged && callback(indices);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = createCallbackMemoizer;
    }, /* 138 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function calculateSizeAndPositionData(_ref) {
            for (var cellCount = _ref.cellCount, cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter, sectionSize = _ref.sectionSize, cellMetadata = [], sectionManager = new _SectionManager2["default"](sectionSize), height = 0, width = 0, index = 0; index < cellCount; index++) {
                var cellMetadatum = cellSizeAndPositionGetter({
                    index: index
                });
                if (null == cellMetadatum.height || isNaN(cellMetadatum.height) || null == cellMetadatum.width || isNaN(cellMetadatum.width) || null == cellMetadatum.x || isNaN(cellMetadatum.x) || null == cellMetadatum.y || isNaN(cellMetadatum.y)) throw Error("Invalid metadata returned for cell " + index + ":\n        x:" + cellMetadatum.x + ", y:" + cellMetadatum.y + ", width:" + cellMetadatum.width + ", height:" + cellMetadatum.height);
                height = Math.max(height, cellMetadatum.y + cellMetadatum.height), width = Math.max(width, cellMetadatum.x + cellMetadatum.width), 
                cellMetadata[index] = cellMetadatum, sectionManager.registerCell({
                    cellMetadatum: cellMetadatum,
                    index: index
                });
            }
            return {
                cellMetadata: cellMetadata,
                height: height,
                sectionManager: sectionManager,
                width: width
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = calculateSizeAndPositionData;
        var _SectionManager = __webpack_require__(139), _SectionManager2 = _interopRequireDefault(_SectionManager);
    }, /* 139 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _Section = __webpack_require__(140), _Section2 = _interopRequireDefault(_Section), SECTION_SIZE = 100, SectionManager = function() {
            function SectionManager() {
                var sectionSize = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SECTION_SIZE;
                _classCallCheck(this, SectionManager), this._sectionSize = sectionSize, this._cellMetadata = [], 
                this._sections = {};
            }
            /**
	   * Gets all cell indices contained in the specified region.
	   * A region may encompass 1 or more Sections.
	   */
            return _createClass(SectionManager, [ {
                key: "getCellIndices",
                value: function(_ref) {
                    var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y, indices = {};
                    // Object keys are strings; this function returns numbers
                    return this.getSections({
                        height: height,
                        width: width,
                        x: x,
                        y: y
                    }).forEach(function(section) {
                        return section.getCellIndices().forEach(function(index) {
                            indices[index] = index;
                        });
                    }), Object.keys(indices).map(function(index) {
                        return indices[index];
                    });
                }
            }, {
                key: "getCellMetadata",
                value: function(_ref2) {
                    var index = _ref2.index;
                    return this._cellMetadata[index];
                }
            }, {
                key: "getSections",
                value: function(_ref3) {
                    for (var height = _ref3.height, width = _ref3.width, x = _ref3.x, y = _ref3.y, sectionXStart = Math.floor(x / this._sectionSize), sectionXStop = Math.floor((x + width - 1) / this._sectionSize), sectionYStart = Math.floor(y / this._sectionSize), sectionYStop = Math.floor((y + height - 1) / this._sectionSize), sections = [], sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
                        var key = sectionX + "." + sectionY;
                        this._sections[key] || (this._sections[key] = new _Section2["default"]({
                            height: this._sectionSize,
                            width: this._sectionSize,
                            x: sectionX * this._sectionSize,
                            y: sectionY * this._sectionSize
                        })), sections.push(this._sections[key]);
                    }
                    return sections;
                }
            }, {
                key: "getTotalSectionCount",
                value: function() {
                    return Object.keys(this._sections).length;
                }
            }, {
                key: "toString",
                value: function() {
                    var _this = this;
                    return Object.keys(this._sections).map(function(index) {
                        return _this._sections[index].toString();
                    });
                }
            }, {
                key: "registerCell",
                value: function(_ref4) {
                    var cellMetadatum = _ref4.cellMetadatum, index = _ref4.index;
                    this._cellMetadata[index] = cellMetadatum, this.getSections(cellMetadatum).forEach(function(section) {
                        return section.addCellIndex({
                            index: index
                        });
                    });
                }
            } ]), SectionManager;
        }();
        exports["default"] = SectionManager;
    }, /* 140 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), Section = function() {
            function Section(_ref) {
                var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y;
                _classCallCheck(this, Section), this.height = height, this.width = width, this.x = x, 
                this.y = y, this._indexMap = {}, this._indices = [];
            }
            /** Add a cell to this section. */
            return _createClass(Section, [ {
                key: "addCellIndex",
                value: function(_ref2) {
                    var index = _ref2.index;
                    this._indexMap[index] || (this._indexMap[index] = !0, this._indices.push(index));
                }
            }, {
                key: "getCellIndices",
                value: function() {
                    return this._indices;
                }
            }, {
                key: "toString",
                value: function() {
                    return this.x + "," + this.y + " " + this.width + "x" + this.height;
                }
            } ]), Section;
        }();
        /** @rlow */
        exports["default"] = Section;
    }, /* 141 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Determines a new offset that ensures a certain cell is visible, given the current offset.
	 * If the cell is already visible then the current offset will be returned.
	 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
	 *
	 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
	 * @param cellOffset Offset (x or y) position for cell
	 * @param cellSize Size (width or height) of cell
	 * @param containerSize Total size (width or height) of the container
	 * @param currentOffset Container's current (x or y) offset
	 * @return Offset to use to ensure the specified cell is visible
	 */
        function getUpdatedOffsetForIndex(_ref) {
            var _ref$align = _ref.align, align = void 0 === _ref$align ? "auto" : _ref$align, cellOffset = _ref.cellOffset, cellSize = _ref.cellSize, containerSize = _ref.containerSize, currentOffset = _ref.currentOffset, maxOffset = cellOffset, minOffset = maxOffset - containerSize + cellSize;
            switch (align) {
              case "start":
                return maxOffset;

              case "end":
                return minOffset;

              case "center":
                return maxOffset - (containerSize - cellSize) / 2;

              default:
                return Math.max(minOffset, Math.min(maxOffset, currentOffset));
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = getUpdatedOffsetForIndex;
    }, /* 142 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ColumnSizer = exports["default"] = void 0;
        var _ColumnSizer2 = __webpack_require__(143), _ColumnSizer3 = _interopRequireDefault(_ColumnSizer2);
        exports["default"] = _ColumnSizer3["default"], exports.ColumnSizer = _ColumnSizer3["default"];
    }, /* 143 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _Grid = __webpack_require__(144), _Grid2 = _interopRequireDefault(_Grid), ColumnSizer = function(_Component) {
                function ColumnSizer(props, context) {
                    _classCallCheck(this, ColumnSizer);
                    var _this = _possibleConstructorReturn(this, (ColumnSizer.__proto__ || Object.getPrototypeOf(ColumnSizer)).call(this, props, context));
                    return _this._registerChild = _this._registerChild.bind(_this), _this;
                }
                return _inherits(ColumnSizer, _Component), _createClass(ColumnSizer, [ {
                    key: "componentDidUpdate",
                    value: function(prevProps, prevState) {
                        var _props = this.props, columnMaxWidth = _props.columnMaxWidth, columnMinWidth = _props.columnMinWidth, columnCount = _props.columnCount, width = _props.width;
                        columnMaxWidth === prevProps.columnMaxWidth && columnMinWidth === prevProps.columnMinWidth && columnCount === prevProps.columnCount && width === prevProps.width || this._registeredChild && this._registeredChild.recomputeGridSize();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _props2 = this.props, children = _props2.children, columnMaxWidth = _props2.columnMaxWidth, columnMinWidth = _props2.columnMinWidth, columnCount = _props2.columnCount, width = _props2.width, safeColumnMinWidth = columnMinWidth || 1, safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width, columnWidth = width / columnCount;
                        columnWidth = Math.max(safeColumnMinWidth, columnWidth), columnWidth = Math.min(safeColumnMaxWidth, columnWidth), 
                        columnWidth = Math.floor(columnWidth);
                        var adjustedWidth = Math.min(width, columnWidth * columnCount);
                        return children({
                            adjustedWidth: adjustedWidth,
                            getColumnWidth: function() {
                                return columnWidth;
                            },
                            registerChild: this._registerChild
                        });
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_registerChild",
                    value: function(child) {
                        if (null !== child && !(child instanceof _Grid2["default"])) throw Error("Unexpected child type registered; only Grid children are supported.");
                        this._registeredChild = child, this._registeredChild && this._registeredChild.recomputeGridSize();
                    }
                } ]), ColumnSizer;
            }(_react.Component);
            exports["default"] = ColumnSizer, "production" !== process.env.NODE_ENV ? ColumnSizer.propTypes = {
                /**
	   * Function responsible for rendering a virtualized Grid.
	   * This function should implement the following signature:
	   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
	   *
	   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
	   * The :registerChild should be passed to the Grid's :ref property.
	   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
	   */
                children: _react.PropTypes.func.isRequired,
                /** Optional maximum allowed column width */
                columnMaxWidth: _react.PropTypes.number,
                /** Optional minimum allowed column width */
                columnMinWidth: _react.PropTypes.number,
                /** Number of columns in Grid or Table child */
                columnCount: _react.PropTypes.number.isRequired,
                /** Width of Grid or Table child */
                width: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 144 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.defaultCellRangeRenderer = exports.Grid = exports["default"] = void 0;
        var _Grid2 = __webpack_require__(145), _Grid3 = _interopRequireDefault(_Grid2), _defaultCellRangeRenderer2 = __webpack_require__(151), _defaultCellRangeRenderer3 = _interopRequireDefault(_defaultCellRangeRenderer2);
        exports["default"] = _Grid3["default"], exports.Grid = _Grid3["default"], exports.defaultCellRangeRenderer = _defaultCellRangeRenderer3["default"];
    }, /* 145 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = void 0;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(136), _classnames2 = _interopRequireDefault(_classnames), _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(146), _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset), _ScalingCellSizeAndPositionManager = __webpack_require__(147), _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager), _createCallbackMemoizer = __webpack_require__(137), _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer), _getOverscanIndices = __webpack_require__(149), _getOverscanIndices2 = _interopRequireDefault(_getOverscanIndices), _scrollbarSize = __webpack_require__(121), _scrollbarSize2 = _interopRequireDefault(_scrollbarSize), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _updateScrollIndexHelper = __webpack_require__(150), _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper), _defaultCellRangeRenderer = __webpack_require__(151), _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer), DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150, SCROLL_POSITION_CHANGE_REASONS = {
                OBSERVED: "observed",
                REQUESTED: "requested"
            }, Grid = function(_Component) {
                function Grid(props, context) {
                    _classCallCheck(this, Grid);
                    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props, context));
                    // Invokes onSectionRendered callback only when start/stop row or column indices change
                    // Bind functions to instance so they don't lose context when passed around
                    // See defaultCellRangeRenderer() for more information on the usage of these caches
                    return _this.state = {
                        isScrolling: !1,
                        scrollDirectionHorizontal: _getOverscanIndices.SCROLL_DIRECTION_FORWARD,
                        scrollDirectionVertical: _getOverscanIndices.SCROLL_DIRECTION_FORWARD,
                        scrollLeft: 0,
                        scrollTop: 0
                    }, _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2["default"])(), _this._onScrollMemoizer = (0, 
                    _createCallbackMemoizer2["default"])(!1), _this._debounceScrollEndedCallback = _this._debounceScrollEndedCallback.bind(_this), 
                    _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this), 
                    _this._onScroll = _this._onScroll.bind(_this), _this._updateScrollLeftForScrollToColumn = _this._updateScrollLeftForScrollToColumn.bind(_this), 
                    _this._updateScrollTopForScrollToRow = _this._updateScrollTopForScrollToRow.bind(_this), 
                    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth), _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight), 
                    _this._columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2["default"]({
                        cellCount: props.columnCount,
                        cellSizeGetter: function(index) {
                            return _this._columnWidthGetter(index);
                        },
                        estimatedCellSize: _this._getEstimatedColumnSize(props)
                    }), _this._rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2["default"]({
                        cellCount: props.rowCount,
                        cellSizeGetter: function(index) {
                            return _this._rowHeightGetter(index);
                        },
                        estimatedCellSize: _this._getEstimatedRowSize(props)
                    }), _this._cellCache = {}, _this._styleCache = {}, _this;
                }
                /**
	   * Pre-measure all columns and rows in a Grid.
	   * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
	   * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
	   */
                return _inherits(Grid, _Component), _createClass(Grid, [ {
                    key: "measureAllCells",
                    value: function() {
                        var _props = this.props, columnCount = _props.columnCount, rowCount = _props.rowCount;
                        this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1), this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
                    }
                }, {
                    key: "recomputeGridSize",
                    value: function() {
                        var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref$columnIndex = _ref.columnIndex, columnIndex = void 0 === _ref$columnIndex ? 0 : _ref$columnIndex, _ref$rowIndex = _ref.rowIndex, rowIndex = void 0 === _ref$rowIndex ? 0 : _ref$rowIndex;
                        this._columnSizeAndPositionManager.resetCell(columnIndex), this._rowSizeAndPositionManager.resetCell(rowIndex), 
                        // Clear cell cache in case we are scrolling;
                        // Invalid row heights likely mean invalid cached content as well.
                        this._cellCache = {}, this._styleCache = {}, this.forceUpdate();
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var _props2 = this.props, scrollLeft = _props2.scrollLeft, scrollToColumn = _props2.scrollToColumn, scrollTop = _props2.scrollTop, scrollToRow = _props2.scrollToRow;
                        // If this component was first rendered server-side, scrollbar size will be undefined.
                        // In that event we need to remeasure.
                        this._scrollbarSizeMeasured || (this._scrollbarSize = (0, _scrollbarSize2["default"])(), 
                        this._scrollbarSizeMeasured = !0, this.setState({})), (scrollLeft >= 0 || scrollTop >= 0) && this._setScrollPosition({
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop
                        }), (scrollToColumn >= 0 || scrollToRow >= 0) && (this._updateScrollLeftForScrollToColumn(), 
                        this._updateScrollTopForScrollToRow()), // Update onRowsRendered callback
                        this._invokeOnGridRenderedHelper(), // Initialize onScroll callback
                        this._invokeOnScrollMemoizer({
                            scrollLeft: scrollLeft || 0,
                            scrollTop: scrollTop || 0,
                            totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
                            totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
                        });
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(prevProps, prevState) {
                        var _this2 = this, _props3 = this.props, autoHeight = _props3.autoHeight, columnCount = _props3.columnCount, height = _props3.height, rowCount = _props3.rowCount, scrollToAlignment = _props3.scrollToAlignment, scrollToColumn = _props3.scrollToColumn, scrollToRow = _props3.scrollToRow, width = _props3.width, _state = this.state, scrollLeft = _state.scrollLeft, scrollPositionChangeReason = _state.scrollPositionChangeReason, scrollTop = _state.scrollTop, columnOrRowCountJustIncreasedFromZero = columnCount > 0 && 0 === prevProps.columnCount || rowCount > 0 && 0 === prevProps.rowCount;
                        // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
                        if (// Make sure requested changes to :scrollLeft or :scrollTop get applied.
                        // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                        // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                        // So we only set these when we require an adjustment of the scroll position.
                        // See issue #2 for more information.
                        scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED && (scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero) && (this._scrollingContainer.scrollLeft = scrollLeft), 
                        // @TRICKY :autoHeight property instructs Grid to leave :scrollTop management to an external HOC (eg WindowScroller).
                        // In this case we should avoid checking scrollingContainer.scrollTop since it forces layout/flow.
                        !autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero) && (this._scrollingContainer.scrollTop = scrollTop)), 
                        // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
                        // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
                        (0, _updateScrollIndexHelper2["default"])({
                            cellSizeAndPositionManager: this._columnSizeAndPositionManager,
                            previousCellsCount: prevProps.columnCount,
                            previousCellSize: prevProps.columnWidth,
                            previousScrollToAlignment: prevProps.scrollToAlignment,
                            previousScrollToIndex: prevProps.scrollToColumn,
                            previousSize: prevProps.width,
                            scrollOffset: scrollLeft,
                            scrollToAlignment: scrollToAlignment,
                            scrollToIndex: scrollToColumn,
                            size: width,
                            updateScrollIndexCallback: function(scrollToColumn) {
                                return _this2._updateScrollLeftForScrollToColumn(_extends({}, _this2.props, {
                                    scrollToColumn: scrollToColumn
                                }));
                            }
                        }), (0, _updateScrollIndexHelper2["default"])({
                            cellSizeAndPositionManager: this._rowSizeAndPositionManager,
                            previousCellsCount: prevProps.rowCount,
                            previousCellSize: prevProps.rowHeight,
                            previousScrollToAlignment: prevProps.scrollToAlignment,
                            previousScrollToIndex: prevProps.scrollToRow,
                            previousSize: prevProps.height,
                            scrollOffset: scrollTop,
                            scrollToAlignment: scrollToAlignment,
                            scrollToIndex: scrollToRow,
                            size: height,
                            updateScrollIndexCallback: function(scrollToRow) {
                                return _this2._updateScrollTopForScrollToRow(_extends({}, _this2.props, {
                                    scrollToRow: scrollToRow
                                }));
                            }
                        }), // Update onRowsRendered callback if start/stop indices have changed
                        this._invokeOnGridRenderedHelper(), scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
                            var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize(), totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
                            this._invokeOnScrollMemoizer({
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                totalColumnsWidth: totalColumnsWidth,
                                totalRowsHeight: totalRowsHeight
                            });
                        }
                    }
                }, {
                    key: "componentWillMount",
                    value: function() {
                        // If this component is being rendered server-side, getScrollbarSize() will return undefined.
                        // We handle this case in componentDidMount()
                        this._scrollbarSize = (0, _scrollbarSize2["default"])(), void 0 === this._scrollbarSize ? (this._scrollbarSizeMeasured = !1, 
                        this._scrollbarSize = 0) : this._scrollbarSizeMeasured = !0, this._calculateChildrenToRender();
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId);
                    }
                }, {
                    key: "componentWillUpdate",
                    value: function(nextProps, nextState) {
                        var _this3 = this;
                        0 === nextProps.columnCount && 0 !== nextState.scrollLeft || 0 === nextProps.rowCount && 0 !== nextState.scrollTop ? this._setScrollPosition({
                            scrollLeft: 0,
                            scrollTop: 0
                        }) : nextProps.scrollLeft === this.props.scrollLeft && nextProps.scrollTop === this.props.scrollTop || this._setScrollPosition({
                            scrollLeft: nextProps.scrollLeft,
                            scrollTop: nextProps.scrollTop
                        }), nextProps.columnWidth === this.props.columnWidth && nextProps.rowHeight === this.props.rowHeight || (this._styleCache = {}), 
                        this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth), this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight), 
                        this._columnSizeAndPositionManager.configure({
                            cellCount: nextProps.columnCount,
                            estimatedCellSize: this._getEstimatedColumnSize(nextProps)
                        }), this._rowSizeAndPositionManager.configure({
                            cellCount: nextProps.rowCount,
                            estimatedCellSize: this._getEstimatedRowSize(nextProps)
                        }), // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
                        (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2["default"])({
                            cellCount: this.props.columnCount,
                            cellSize: this.props.columnWidth,
                            computeMetadataCallback: function() {
                                return _this3._columnSizeAndPositionManager.resetCell(0);
                            },
                            computeMetadataCallbackProps: nextProps,
                            nextCellsCount: nextProps.columnCount,
                            nextCellSize: nextProps.columnWidth,
                            nextScrollToIndex: nextProps.scrollToColumn,
                            scrollToIndex: this.props.scrollToColumn,
                            updateScrollOffsetForScrollToIndex: function() {
                                return _this3._updateScrollLeftForScrollToColumn(nextProps, nextState);
                            }
                        }), (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2["default"])({
                            cellCount: this.props.rowCount,
                            cellSize: this.props.rowHeight,
                            computeMetadataCallback: function() {
                                return _this3._rowSizeAndPositionManager.resetCell(0);
                            },
                            computeMetadataCallbackProps: nextProps,
                            nextCellsCount: nextProps.rowCount,
                            nextCellSize: nextProps.rowHeight,
                            nextScrollToIndex: nextProps.scrollToRow,
                            scrollToIndex: this.props.scrollToRow,
                            updateScrollOffsetForScrollToIndex: function() {
                                return _this3._updateScrollTopForScrollToRow(nextProps, nextState);
                            }
                        }), this._calculateChildrenToRender(nextProps, nextState);
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _this4 = this, _props4 = this.props, autoContainerWidth = _props4.autoContainerWidth, autoHeight = _props4.autoHeight, className = _props4.className, containerStyle = _props4.containerStyle, height = _props4.height, id = _props4.id, noContentRenderer = _props4.noContentRenderer, style = _props4.style, tabIndex = _props4.tabIndex, width = _props4.width, isScrolling = this.state.isScrolling, gridStyle = {
                            boxSizing: "border-box",
                            direction: "ltr",
                            height: autoHeight ? "auto" : height,
                            position: "relative",
                            width: width,
                            WebkitOverflowScrolling: "touch",
                            willChange: "transform"
                        }, totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize(), totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize(), verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0, horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;
                        // Also explicitly init styles to 'auto' if scrollbars are required.
                        // This works around an obscure edge case where external CSS styles have not yet been loaded,
                        // But an initial scroll index of offset is set as an external prop.
                        // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
                        // This was originally reported via clauderic/react-infinite-calendar/issues/23
                        gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? "hidden" : "auto", 
                        gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? "hidden" : "auto";
                        var childrenToDisplay = this._childrenToDisplay, showNoContentRenderer = 0 === childrenToDisplay.length && height > 0 && width > 0;
                        return _react2["default"].createElement("div", {
                            ref: function(_ref2) {
                                _this4._scrollingContainer = _ref2;
                            },
                            "aria-label": this.props["aria-label"],
                            className: (0, _classnames2["default"])("ReactVirtualized__Grid", className),
                            id: id,
                            onScroll: this._onScroll,
                            role: "grid",
                            style: _extends({}, gridStyle, style),
                            tabIndex: tabIndex
                        }, childrenToDisplay.length > 0 && _react2["default"].createElement("div", {
                            className: "ReactVirtualized__Grid__innerScrollContainer",
                            style: _extends({
                                width: autoContainerWidth ? "auto" : totalColumnsWidth,
                                height: totalRowsHeight,
                                maxWidth: totalColumnsWidth,
                                maxHeight: totalRowsHeight,
                                overflow: "hidden",
                                pointerEvents: isScrolling ? "none" : ""
                            }, containerStyle)
                        }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_calculateChildrenToRender",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state, cellRenderer = props.cellRenderer, cellRangeRenderer = props.cellRangeRenderer, columnCount = props.columnCount, height = props.height, overscanColumnCount = props.overscanColumnCount, overscanRowCount = props.overscanRowCount, rowCount = props.rowCount, width = props.width, isScrolling = state.isScrolling, scrollDirectionHorizontal = state.scrollDirectionHorizontal, scrollDirectionVertical = state.scrollDirectionVertical, scrollLeft = state.scrollLeft, scrollTop = state.scrollTop;
                        // Render only enough columns and rows to cover the visible area of the grid.
                        if (this._childrenToDisplay = [], height > 0 && width > 0) {
                            var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
                                containerSize: width,
                                offset: scrollLeft
                            }), visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
                                containerSize: height,
                                offset: scrollTop
                            }), horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
                                containerSize: width,
                                offset: scrollLeft
                            }), verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
                                containerSize: height,
                                offset: scrollTop
                            });
                            // Store for _invokeOnGridRenderedHelper()
                            this._renderedColumnStartIndex = visibleColumnIndices.start, this._renderedColumnStopIndex = visibleColumnIndices.stop, 
                            this._renderedRowStartIndex = visibleRowIndices.start, this._renderedRowStopIndex = visibleRowIndices.stop;
                            var overscanColumnIndices = (0, _getOverscanIndices2["default"])({
                                cellCount: columnCount,
                                overscanCellsCount: overscanColumnCount,
                                scrollDirection: scrollDirectionHorizontal,
                                startIndex: this._renderedColumnStartIndex,
                                stopIndex: this._renderedColumnStopIndex
                            }), overscanRowIndices = (0, _getOverscanIndices2["default"])({
                                cellCount: rowCount,
                                overscanCellsCount: overscanRowCount,
                                scrollDirection: scrollDirectionVertical,
                                startIndex: this._renderedRowStartIndex,
                                stopIndex: this._renderedRowStopIndex
                            });
                            // Store for _invokeOnGridRenderedHelper()
                            this._columnStartIndex = overscanColumnIndices.overscanStartIndex, this._columnStopIndex = overscanColumnIndices.overscanStopIndex, 
                            this._rowStartIndex = overscanRowIndices.overscanStartIndex, this._rowStopIndex = overscanRowIndices.overscanStopIndex, 
                            this._childrenToDisplay = cellRangeRenderer({
                                cellCache: this._cellCache,
                                cellRenderer: cellRenderer,
                                columnSizeAndPositionManager: this._columnSizeAndPositionManager,
                                columnStartIndex: this._columnStartIndex,
                                columnStopIndex: this._columnStopIndex,
                                horizontalOffsetAdjustment: horizontalOffsetAdjustment,
                                isScrolling: isScrolling,
                                rowSizeAndPositionManager: this._rowSizeAndPositionManager,
                                rowStartIndex: this._rowStartIndex,
                                rowStopIndex: this._rowStopIndex,
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                styleCache: this._styleCache,
                                verticalOffsetAdjustment: verticalOffsetAdjustment,
                                visibleColumnIndices: visibleColumnIndices,
                                visibleRowIndices: visibleRowIndices
                            });
                        }
                    }
                }, {
                    key: "_debounceScrollEnded",
                    value: function() {
                        var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
                        this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId), 
                        this._disablePointerEventsTimeoutId = setTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
                    }
                }, {
                    key: "_debounceScrollEndedCallback",
                    value: function() {
                        this._disablePointerEventsTimeoutId = null;
                        var styleCache = this._styleCache;
                        // Reset cell and style caches once scrolling stops.
                        // This makes Grid simpler to use (since cells commonly change).
                        // And it keeps the caches from growing too large.
                        // Performance is most sensitive when a user is scrolling.
                        this._cellCache = {}, this._styleCache = {};
                        // Copy over the visible cell styles so avoid unnecessary re-render.
                        for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
                            var key = rowIndex + "-" + columnIndex;
                            this._styleCache[key] = styleCache[key];
                        }
                        this.setState({
                            isScrolling: !1
                        });
                    }
                }, {
                    key: "_getEstimatedColumnSize",
                    value: function(props) {
                        return "number" == typeof props.columnWidth ? props.columnWidth : props.estimatedColumnSize;
                    }
                }, {
                    key: "_getEstimatedRowSize",
                    value: function(props) {
                        return "number" == typeof props.rowHeight ? props.rowHeight : props.estimatedRowSize;
                    }
                }, {
                    key: "_invokeOnGridRenderedHelper",
                    value: function() {
                        var onSectionRendered = this.props.onSectionRendered;
                        this._onGridRenderedMemoizer({
                            callback: onSectionRendered,
                            indices: {
                                columnOverscanStartIndex: this._columnStartIndex,
                                columnOverscanStopIndex: this._columnStopIndex,
                                columnStartIndex: this._renderedColumnStartIndex,
                                columnStopIndex: this._renderedColumnStopIndex,
                                rowOverscanStartIndex: this._rowStartIndex,
                                rowOverscanStopIndex: this._rowStopIndex,
                                rowStartIndex: this._renderedRowStartIndex,
                                rowStopIndex: this._renderedRowStopIndex
                            }
                        });
                    }
                }, {
                    key: "_invokeOnScrollMemoizer",
                    value: function(_ref3) {
                        var _this5 = this, scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop, totalColumnsWidth = _ref3.totalColumnsWidth, totalRowsHeight = _ref3.totalRowsHeight;
                        this._onScrollMemoizer({
                            callback: function(_ref4) {
                                var scrollLeft = _ref4.scrollLeft, scrollTop = _ref4.scrollTop, _props5 = _this5.props, height = _props5.height, onScroll = _props5.onScroll, width = _props5.width;
                                onScroll({
                                    clientHeight: height,
                                    clientWidth: width,
                                    scrollHeight: totalRowsHeight,
                                    scrollLeft: scrollLeft,
                                    scrollTop: scrollTop,
                                    scrollWidth: totalColumnsWidth
                                });
                            },
                            indices: {
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop
                            }
                        });
                    }
                }, {
                    key: "_setScrollPosition",
                    value: function(_ref5) {
                        var scrollLeft = _ref5.scrollLeft, scrollTop = _ref5.scrollTop, newState = {
                            scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                        };
                        scrollLeft >= 0 && (newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD, 
                        newState.scrollLeft = scrollLeft), scrollTop >= 0 && (newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD, 
                        newState.scrollTop = scrollTop), (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) && this.setState(newState);
                    }
                }, {
                    key: "_wrapPropertyGetter",
                    value: function(value) {
                        return value instanceof Function ? value : function() {
                            return value;
                        };
                    }
                }, {
                    key: "_wrapSizeGetter",
                    value: function(size) {
                        return this._wrapPropertyGetter(size);
                    }
                }, {
                    key: "_updateScrollLeftForScrollToColumn",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state, columnCount = props.columnCount, scrollToAlignment = props.scrollToAlignment, scrollToColumn = props.scrollToColumn, width = props.width, scrollLeft = state.scrollLeft;
                        if (scrollToColumn >= 0 && columnCount > 0) {
                            var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn)), calculatedScrollLeft = this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
                                align: scrollToAlignment,
                                containerSize: width,
                                currentOffset: scrollLeft,
                                targetIndex: targetIndex
                            });
                            scrollLeft !== calculatedScrollLeft && this._setScrollPosition({
                                scrollLeft: calculatedScrollLeft
                            });
                        }
                    }
                }, {
                    key: "_updateScrollTopForScrollToRow",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state, height = props.height, rowCount = props.rowCount, scrollToAlignment = props.scrollToAlignment, scrollToRow = props.scrollToRow, scrollTop = state.scrollTop;
                        if (scrollToRow >= 0 && rowCount > 0) {
                            var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow)), calculatedScrollTop = this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
                                align: scrollToAlignment,
                                containerSize: height,
                                currentOffset: scrollTop,
                                targetIndex: targetIndex
                            });
                            scrollTop !== calculatedScrollTop && this._setScrollPosition({
                                scrollTop: calculatedScrollTop
                            });
                        }
                    }
                }, {
                    key: "_onScroll",
                    value: function(event) {
                        // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
                        // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
                        // See issue #404 for more information.
                        if (event.target === this._scrollingContainer) {
                            // Prevent pointer events from interrupting a smooth scroll
                            this._debounceScrollEnded();
                            // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
                            // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
                            // This causes a series of rapid renders that is slow for long lists.
                            // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
                            var _props6 = this.props, height = _props6.height, width = _props6.width, scrollbarSize = this._scrollbarSize, totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize(), totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize(), scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), event.target.scrollLeft), scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), event.target.scrollTop);
                            // Certain devices (like Apple touchpad) rapid-fire duplicate events.
                            // Don't force a re-render if this is the case.
                            // The mouse may move faster then the animation frame does.
                            // Use requestAnimationFrame to avoid over-updating.
                            if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
                                // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
                                var scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD, scrollDirectionVertical = scrollTop > this.state.scrollTop ? _getOverscanIndices.SCROLL_DIRECTION_FORWARD : _getOverscanIndices.SCROLL_DIRECTION_BACKWARD;
                                this.setState({
                                    isScrolling: !0,
                                    scrollDirectionHorizontal: scrollDirectionHorizontal,
                                    scrollDirectionVertical: scrollDirectionVertical,
                                    scrollLeft: scrollLeft,
                                    scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED,
                                    scrollTop: scrollTop
                                });
                            }
                            this._invokeOnScrollMemoizer({
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                totalColumnsWidth: totalColumnsWidth,
                                totalRowsHeight: totalRowsHeight
                            });
                        }
                    }
                } ]), Grid;
            }(_react.Component);
            Grid.defaultProps = {
                "aria-label": "grid",
                cellRangeRenderer: _defaultCellRangeRenderer2["default"],
                estimatedColumnSize: 100,
                estimatedRowSize: 30,
                noContentRenderer: function() {
                    return null;
                },
                onScroll: function() {
                    return null;
                },
                onSectionRendered: function() {
                    return null;
                },
                overscanColumnCount: 0,
                overscanRowCount: 10,
                scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
                scrollToAlignment: "auto",
                style: {},
                tabIndex: 0
            }, exports["default"] = Grid, "production" !== process.env.NODE_ENV ? Grid.propTypes = {
                "aria-label": _react.PropTypes.string,
                /**
	   * Set the width of the inner scrollable container to 'auto'.
	   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
	   */
                autoContainerWidth: _react.PropTypes.bool,
                /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
                autoHeight: _react.PropTypes.bool,
                /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
                cellRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Responsible for rendering a group of cells given their index ranges.
	   * Should implement the following interface: ({
	   *   cellCache: Map,
	   *   cellRenderer: Function,
	   *   columnSizeAndPositionManager: CellSizeAndPositionManager,
	   *   columnStartIndex: number,
	   *   columnStopIndex: number,
	   *   isScrolling: boolean,
	   *   rowSizeAndPositionManager: CellSizeAndPositionManager,
	   *   rowStartIndex: number,
	   *   rowStopIndex: number,
	   *   scrollLeft: number,
	   *   scrollTop: number
	   * }): Array<PropTypes.node>
	   */
                cellRangeRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Optional custom CSS class name to attach to root Grid element.
	   */
                className: _react.PropTypes.string,
                /**
	   * Number of columns in grid.
	   */
                columnCount: _react.PropTypes.number.isRequired,
                /**
	   * Either a fixed column width (number) or a function that returns the width of a column given its index.
	   * Should implement the following interface: (index: number): number
	   */
                columnWidth: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
                /** Optional inline style applied to inner cell-container */
                containerStyle: _react.PropTypes.object,
                /**
	   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
	   * The estimated total width is adjusted as columns are rendered.
	   */
                estimatedColumnSize: _react.PropTypes.number.isRequired,
                /**
	   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
                estimatedRowSize: _react.PropTypes.number.isRequired,
                /**
	   * Height of Grid; this property determines the number of visible (vs virtualized) rows.
	   */
                height: _react.PropTypes.number.isRequired,
                /**
	   * Optional custom id to attach to root Grid element.
	   */
                id: _react.PropTypes.string,
                /**
	   * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
	   */
                noContentRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
                onScroll: _react.PropTypes.func.isRequired,
                /**
	   * Callback invoked with information about the section of the Grid that was just rendered.
	   * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
	   */
                onSectionRendered: _react.PropTypes.func.isRequired,
                /**
	   * Number of columns to render before/after the visible section of the grid.
	   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
                overscanColumnCount: _react.PropTypes.number.isRequired,
                /**
	   * Number of rows to render above/below the visible section of the grid.
	   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
                overscanRowCount: _react.PropTypes.number.isRequired,
                /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * Should implement the following interface: ({ index: number }): number
	   */
                rowHeight: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
                /**
	   * Number of rows in grid.
	   */
                rowCount: _react.PropTypes.number.isRequired,
                /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
                scrollingResetTimeInterval: _react.PropTypes.number,
                /** Horizontal offset. */
                scrollLeft: _react.PropTypes.number,
                /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
                scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
                /**
	   * Column index to ensure visible (by forcefully scrolling if necessary)
	   */
                scrollToColumn: _react.PropTypes.number,
                /** Vertical offset. */
                scrollTop: _react.PropTypes.number,
                /**
	   * Row index to ensure visible (by forcefully scrolling if necessary)
	   */
                scrollToRow: _react.PropTypes.number,
                /** Optional inline style */
                style: _react.PropTypes.object,
                /** Tab index for focus */
                tabIndex: _react.PropTypes.number,
                /**
	   * Width of Grid; this property determines the number of visible (vs virtualized) columns.
	   */
                width: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 146 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Helper method that determines when to recalculate row or column metadata.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param cellsSize Width or height of cells for the current axis
	 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
	 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
	 * @param nextCellsCount Newly updated number of rows or columns in the current axis
	 * @param nextCellsSize Newly updated width or height of cells for the current axis
	 * @param nextScrollToIndex Newly updated scroll-to-index
	 * @param scrollToIndex Scroll-to-index
	 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
	 */
        function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
            var cellCount = _ref.cellCount, cellSize = _ref.cellSize, computeMetadataCallback = _ref.computeMetadataCallback, computeMetadataCallbackProps = _ref.computeMetadataCallbackProps, nextCellsCount = _ref.nextCellsCount, nextCellSize = _ref.nextCellSize, nextScrollToIndex = _ref.nextScrollToIndex, scrollToIndex = _ref.scrollToIndex, updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
            // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
            // In that event users should use the manual recompute methods to inform of changes.
            cellCount === nextCellsCount && ("number" != typeof cellSize && "number" != typeof nextCellSize || cellSize === nextCellSize) || (computeMetadataCallback(computeMetadataCallbackProps), 
            // Updated cell metadata may have hidden the previous scrolled-to item.
            // In this case we should also update the scrollTop to ensure it stays visible.
            scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex && updateScrollOffsetForScrollToIndex());
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = calculateSizeAndPositionDataAndUpdateScrollOffset;
    }, /* 147 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.DEFAULT_MAX_SCROLL_SIZE = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _CellSizeAndPositionManager = __webpack_require__(148), _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager), DEFAULT_MAX_SCROLL_SIZE = exports.DEFAULT_MAX_SCROLL_SIZE = 15e5, ScalingCellSizeAndPositionManager = function() {
            function ScalingCellSizeAndPositionManager(_ref) {
                var _ref$maxScrollSize = _ref.maxScrollSize, maxScrollSize = void 0 === _ref$maxScrollSize ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize, params = _objectWithoutProperties(_ref, [ "maxScrollSize" ]);
                _classCallCheck(this, ScalingCellSizeAndPositionManager), // Favor composition over inheritance to simplify IE10 support
                this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2["default"](params), 
                this._maxScrollSize = maxScrollSize;
            }
            return _createClass(ScalingCellSizeAndPositionManager, [ {
                key: "configure",
                value: function(params) {
                    this._cellSizeAndPositionManager.configure(params);
                }
            }, {
                key: "getCellCount",
                value: function() {
                    return this._cellSizeAndPositionManager.getCellCount();
                }
            }, {
                key: "getEstimatedCellSize",
                value: function() {
                    return this._cellSizeAndPositionManager.getEstimatedCellSize();
                }
            }, {
                key: "getLastMeasuredIndex",
                value: function() {
                    return this._cellSizeAndPositionManager.getLastMeasuredIndex();
                }
            }, {
                key: "getOffsetAdjustment",
                value: function(_ref2) {
                    var containerSize = _ref2.containerSize, offset = _ref2.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize(), offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - totalSize));
                }
            }, {
                key: "getSizeAndPositionOfCell",
                value: function(index) {
                    return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
                }
            }, {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function() {
                    return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
                }
            }, {
                key: "getTotalSize",
                value: function() {
                    return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
                }
            }, {
                key: "getUpdatedOffsetForIndex",
                value: function(_ref3) {
                    var _ref3$align = _ref3.align, align = void 0 === _ref3$align ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex, totalSize = _ref3.totalSize;
                    currentOffset = this._safeOffsetToOffset({
                        containerSize: containerSize,
                        offset: currentOffset
                    });
                    var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: align,
                        containerSize: containerSize,
                        currentOffset: currentOffset,
                        targetIndex: targetIndex,
                        totalSize: totalSize
                    });
                    return this._offsetToSafeOffset({
                        containerSize: containerSize,
                        offset: offset
                    });
                }
            }, {
                key: "getVisibleCellRange",
                value: function(_ref4) {
                    var containerSize = _ref4.containerSize, offset = _ref4.offset;
                    return offset = this._safeOffsetToOffset({
                        containerSize: containerSize,
                        offset: offset
                    }), this._cellSizeAndPositionManager.getVisibleCellRange({
                        containerSize: containerSize,
                        offset: offset
                    });
                }
            }, {
                key: "resetCell",
                value: function(index) {
                    this._cellSizeAndPositionManager.resetCell(index);
                }
            }, {
                key: "_getOffsetPercentage",
                value: function(_ref5) {
                    var containerSize = _ref5.containerSize, offset = _ref5.offset, totalSize = _ref5.totalSize;
                    return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
                }
            }, {
                key: "_offsetToSafeOffset",
                value: function(_ref6) {
                    var containerSize = _ref6.containerSize, offset = _ref6.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize();
                    if (totalSize === safeTotalSize) return offset;
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: totalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - containerSize));
                }
            }, {
                key: "_safeOffsetToOffset",
                value: function(_ref7) {
                    var containerSize = _ref7.containerSize, offset = _ref7.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize();
                    if (totalSize === safeTotalSize) return offset;
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (totalSize - containerSize));
                }
            } ]), ScalingCellSizeAndPositionManager;
        }();
        exports["default"] = ScalingCellSizeAndPositionManager;
    }, /* 148 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), CellSizeAndPositionManager = function() {
            function CellSizeAndPositionManager(_ref) {
                var cellCount = _ref.cellCount, cellSizeGetter = _ref.cellSizeGetter, estimatedCellSize = _ref.estimatedCellSize;
                _classCallCheck(this, CellSizeAndPositionManager), this._cellSizeGetter = cellSizeGetter, 
                this._cellCount = cellCount, this._estimatedCellSize = estimatedCellSize, // Cache of size and position data for cells, mapped by cell index.
                // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
                this._cellSizeAndPositionData = {}, // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
                this._lastMeasuredIndex = -1;
            }
            return _createClass(CellSizeAndPositionManager, [ {
                key: "configure",
                value: function(_ref2) {
                    var cellCount = _ref2.cellCount, estimatedCellSize = _ref2.estimatedCellSize;
                    this._cellCount = cellCount, this._estimatedCellSize = estimatedCellSize;
                }
            }, {
                key: "getCellCount",
                value: function() {
                    return this._cellCount;
                }
            }, {
                key: "getEstimatedCellSize",
                value: function() {
                    return this._estimatedCellSize;
                }
            }, {
                key: "getLastMeasuredIndex",
                value: function() {
                    return this._lastMeasuredIndex;
                }
            }, {
                key: "getSizeAndPositionOfCell",
                value: function(index) {
                    if (index < 0 || index >= this._cellCount) throw Error("Requested index " + index + " is outside of range 0.." + this._cellCount);
                    if (index > this._lastMeasuredIndex) {
                        for (var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell(), _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size, i = this._lastMeasuredIndex + 1; i <= index; i++) {
                            var _size = this._cellSizeGetter({
                                index: i
                            });
                            if (null == _size || isNaN(_size)) throw Error("Invalid size returned for cell " + i + " of value " + _size);
                            this._cellSizeAndPositionData[i] = {
                                offset: _offset,
                                size: _size
                            }, _offset += _size;
                        }
                        this._lastMeasuredIndex = index;
                    }
                    return this._cellSizeAndPositionData[index];
                }
            }, {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function() {
                    return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
                        offset: 0,
                        size: 0
                    };
                }
            }, {
                key: "getTotalSize",
                value: function() {
                    var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                    return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
                }
            }, {
                key: "getUpdatedOffsetForIndex",
                value: function(_ref3) {
                    var _ref3$align = _ref3.align, align = void 0 === _ref3$align ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
                    if (containerSize <= 0) return 0;
                    var datum = this.getSizeAndPositionOfCell(targetIndex), maxOffset = datum.offset, minOffset = maxOffset - containerSize + datum.size, idealOffset = void 0;
                    switch (align) {
                      case "start":
                        idealOffset = maxOffset;
                        break;

                      case "end":
                        idealOffset = minOffset;
                        break;

                      case "center":
                        idealOffset = maxOffset - (containerSize - datum.size) / 2;
                        break;

                      default:
                        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
                    }
                    var totalSize = this.getTotalSize();
                    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
                }
            }, {
                key: "getVisibleCellRange",
                value: function(_ref4) {
                    var containerSize = _ref4.containerSize, offset = _ref4.offset, totalSize = this.getTotalSize();
                    if (0 === totalSize) return {};
                    var maxOffset = offset + containerSize, start = this._findNearestCell(offset), datum = this.getSizeAndPositionOfCell(start);
                    offset = datum.offset + datum.size;
                    for (var stop = start; offset < maxOffset && stop < this._cellCount - 1; ) stop++, 
                    offset += this.getSizeAndPositionOfCell(stop).size;
                    return {
                        start: start,
                        stop: stop
                    };
                }
            }, {
                key: "resetCell",
                value: function(index) {
                    this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
                }
            }, {
                key: "_binarySearch",
                value: function(_ref5) {
                    for (var high = _ref5.high, low = _ref5.low, offset = _ref5.offset, middle = void 0, currentOffset = void 0; low <= high; ) {
                        if (middle = low + Math.floor((high - low) / 2), currentOffset = this.getSizeAndPositionOfCell(middle).offset, 
                        currentOffset === offset) return middle;
                        currentOffset < offset ? low = middle + 1 : currentOffset > offset && (high = middle - 1);
                    }
                    if (low > 0) return low - 1;
                }
            }, {
                key: "_exponentialSearch",
                value: function(_ref6) {
                    for (var index = _ref6.index, offset = _ref6.offset, interval = 1; index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset; ) index += interval, 
                    interval *= 2;
                    return this._binarySearch({
                        high: Math.min(index, this._cellCount - 1),
                        low: Math.floor(index / 2),
                        offset: offset
                    });
                }
            }, {
                key: "_findNearestCell",
                value: function(offset) {
                    if (isNaN(offset)) throw Error("Invalid offset " + offset + " specified");
                    // Our search algorithms find the nearest match at or below the specified offset.
                    // So make sure the offset is at least 0 or no match will be found.
                    offset = Math.max(0, offset);
                    var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell(), lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
                    return lastMeasuredCellSizeAndPosition.offset >= offset ? this._binarySearch({
                        high: lastMeasuredIndex,
                        low: 0,
                        offset: offset
                    }) : this._exponentialSearch({
                        index: lastMeasuredIndex,
                        offset: offset
                    });
                }
            } ]), CellSizeAndPositionManager;
        }();
        exports["default"] = CellSizeAndPositionManager;
    }, /* 149 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Calculates the number of cells to overscan before and after a specified range.
	 * This function ensures that overscanning doesn't exceed the available cells.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD
	 * @param overscanCellsCount Maximum number of cells to over-render in either direction
	 * @param startIndex Begin of range of visible cells
	 * @param stopIndex End of range of visible cells
	 */
        function getOverscanIndices(_ref) {
            var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex, overscanStartIndex = void 0, overscanStopIndex = void 0;
            switch (scrollDirection) {
              case SCROLL_DIRECTION_FORWARD:
                overscanStartIndex = startIndex, overscanStopIndex = stopIndex + overscanCellsCount;
                break;

              case SCROLL_DIRECTION_BACKWARD:
                overscanStartIndex = startIndex - overscanCellsCount, overscanStopIndex = stopIndex;
            }
            return {
                overscanStartIndex: Math.max(0, overscanStartIndex),
                overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = getOverscanIndices;
        var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1, SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;
    }, /* 150 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
	 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
	 *
	 * @param cellsSize Width or height of cells for the current axis
	 * @param cellSizeAndPositionManager Manages size and position metadata of cells
	 * @param previousCellsCount Previous number of rows or columns
	 * @param previousCellsSize Previous width or height of cells
	 * @param previousScrollToIndex Previous scroll-to-index
	 * @param previousSize Previous width or height of the virtualized container
	 * @param scrollOffset Current scrollLeft or scrollTop
	 * @param scrollToIndex Scroll-to-index
	 * @param size Width or height of the virtualized container
	 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
	 */
        function updateScrollIndexHelper(_ref) {
            var cellSize = _ref.cellSize, cellSizeAndPositionManager = _ref.cellSizeAndPositionManager, previousCellsCount = _ref.previousCellsCount, previousCellSize = _ref.previousCellSize, previousScrollToAlignment = _ref.previousScrollToAlignment, previousScrollToIndex = _ref.previousScrollToIndex, previousSize = _ref.previousSize, scrollOffset = _ref.scrollOffset, scrollToAlignment = _ref.scrollToAlignment, scrollToIndex = _ref.scrollToIndex, size = _ref.size, updateScrollIndexCallback = _ref.updateScrollIndexCallback, cellCount = cellSizeAndPositionManager.getCellCount(), hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount, sizeHasChanged = size !== previousSize || !previousCellSize || "number" == typeof cellSize && cellSize !== previousCellSize;
            // If we have a new scroll target OR if height/row-height has changed,
            // We should ensure that the scroll target is visible.
            hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex) ? updateScrollIndexCallback(scrollToIndex) : !hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount) && scrollOffset > cellSizeAndPositionManager.getTotalSize() - size && updateScrollIndexCallback(cellCount - 1);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = updateScrollIndexHelper;
    }, /* 151 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Default implementation of cellRangeRenderer used by Grid.
	 * This renderer supports cell-caching while the user is scrolling.
	 */
        function defaultCellRangeRenderer(_ref) {
            for (var cellCache = _ref.cellCache, cellRenderer = _ref.cellRenderer, columnSizeAndPositionManager = _ref.columnSizeAndPositionManager, columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment, isScrolling = _ref.isScrolling, rowSizeAndPositionManager = _ref.rowSizeAndPositionManager, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex, styleCache = (_ref.scrollLeft, 
            _ref.scrollTop, _ref.styleCache), verticalOffsetAdjustment = _ref.verticalOffsetAdjustment, visibleColumnIndices = _ref.visibleColumnIndices, visibleRowIndices = _ref.visibleRowIndices, renderedCells = [], rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) for (var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex), columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
                var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex), isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop, key = rowIndex + "-" + columnIndex, style = void 0;
                // Cache style objects so shallow-compare doesn't re-render unnecessarily.
                styleCache[key] ? style = styleCache[key] : (style = {
                    height: rowDatum.size,
                    left: columnDatum.offset + horizontalOffsetAdjustment,
                    position: "absolute",
                    top: rowDatum.offset + verticalOffsetAdjustment,
                    width: columnDatum.size
                }, styleCache[key] = style);
                var cellRendererParams = {
                    columnIndex: columnIndex,
                    isScrolling: isScrolling,
                    isVisible: isVisible,
                    key: key,
                    rowIndex: rowIndex,
                    style: style
                }, renderedCell = void 0;
                // Avoid re-creating cells while scrolling.
                // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
                // If a scroll is in progress- cache and reuse cells.
                // This cache will be thrown away once scrolling completes.
                // However if we are scaling scroll positions and sizes, we should also avoid caching.
                // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
                // For more info refer to issue #395
                !isScrolling || horizontalOffsetAdjustment || verticalOffsetAdjustment ? renderedCell = cellRenderer(cellRendererParams) : (cellCache[key] || (cellCache[key] = cellRenderer(cellRendererParams)), 
                renderedCell = cellCache[key]), null != renderedCell && renderedCell !== !1 && renderedCells.push(renderedCell);
            }
            return renderedCells;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = defaultCellRangeRenderer;
    }, /* 152 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SortIndicator = exports.SortDirection = exports.Column = exports.Table = exports.defaultRowRenderer = exports.defaultHeaderRenderer = exports.defaultCellRenderer = exports.defaultCellDataGetter = exports["default"] = void 0;
        var _Table2 = __webpack_require__(153), _Table3 = _interopRequireDefault(_Table2), _defaultCellDataGetter2 = __webpack_require__(159), _defaultCellDataGetter3 = _interopRequireDefault(_defaultCellDataGetter2), _defaultCellRenderer2 = __webpack_require__(158), _defaultCellRenderer3 = _interopRequireDefault(_defaultCellRenderer2), _defaultHeaderRenderer2 = __webpack_require__(155), _defaultHeaderRenderer3 = _interopRequireDefault(_defaultHeaderRenderer2), _defaultRowRenderer2 = __webpack_require__(160), _defaultRowRenderer3 = _interopRequireDefault(_defaultRowRenderer2), _Column2 = __webpack_require__(154), _Column3 = _interopRequireDefault(_Column2), _SortDirection2 = __webpack_require__(157), _SortDirection3 = _interopRequireDefault(_SortDirection2), _SortIndicator2 = __webpack_require__(156), _SortIndicator3 = _interopRequireDefault(_SortIndicator2);
        exports["default"] = _Table3["default"], exports.defaultCellDataGetter = _defaultCellDataGetter3["default"], 
        exports.defaultCellRenderer = _defaultCellRenderer3["default"], exports.defaultHeaderRenderer = _defaultHeaderRenderer3["default"], 
        exports.defaultRowRenderer = _defaultRowRenderer3["default"], exports.Table = _Table3["default"], 
        exports.Column = _Column3["default"], exports.SortDirection = _SortDirection3["default"], 
        exports.SortIndicator = _SortIndicator3["default"];
    }, /* 153 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _classnames = __webpack_require__(136), _classnames2 = _interopRequireDefault(_classnames), _Column = __webpack_require__(154), _Column2 = _interopRequireDefault(_Column), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(3), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _Grid = __webpack_require__(144), _Grid2 = _interopRequireDefault(_Grid), _defaultRowRenderer = __webpack_require__(160), _defaultRowRenderer2 = _interopRequireDefault(_defaultRowRenderer), _SortDirection = __webpack_require__(157), _SortDirection2 = _interopRequireDefault(_SortDirection), Table = function(_Component) {
                function Table(props) {
                    _classCallCheck(this, Table);
                    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));
                    return _this.state = {
                        scrollbarWidth: 0
                    }, _this._createColumn = _this._createColumn.bind(_this), _this._createRow = _this._createRow.bind(_this), 
                    _this._onScroll = _this._onScroll.bind(_this), _this._onSectionRendered = _this._onSectionRendered.bind(_this), 
                    _this;
                }
                return _inherits(Table, _Component), _createClass(Table, [ {
                    key: "forceUpdateGrid",
                    value: function() {
                        this.Grid.forceUpdate();
                    }
                }, {
                    key: "measureAllRows",
                    value: function() {
                        this.Grid.measureAllCells();
                    }
                }, {
                    key: "recomputeRowHeights",
                    value: function() {
                        var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.Grid.recomputeGridSize({
                            rowIndex: index
                        }), this.forceUpdateGrid();
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this._setScrollbarWidth();
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this._setScrollbarWidth();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _this2 = this, _props = this.props, children = _props.children, className = _props.className, disableHeader = _props.disableHeader, gridClassName = _props.gridClassName, gridStyle = _props.gridStyle, headerHeight = _props.headerHeight, height = _props.height, id = _props.id, noRowsRenderer = _props.noRowsRenderer, rowClassName = _props.rowClassName, rowStyle = _props.rowStyle, scrollToIndex = _props.scrollToIndex, style = _props.style, width = _props.width, scrollbarWidth = this.state.scrollbarWidth, availableRowsHeight = disableHeader ? height : height - headerHeight, rowClass = rowClassName instanceof Function ? rowClassName({
                            index: -1
                        }) : rowClassName, rowStyleObject = rowStyle instanceof Function ? rowStyle({
                            index: -1
                        }) : rowStyle;
                        // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
                        // This is done because Grid is a pure component and won't update unless its properties or state has changed.
                        // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
                        // Precompute and cache column styles before rendering rows and columns to speed things up
                        return this._cachedColumnStyles = [], _react2["default"].Children.toArray(children).forEach(function(column, index) {
                            var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);
                            _this2._cachedColumnStyles[index] = _extends({}, flexStyles, {
                                overflow: "hidden"
                            });
                        }), _react2["default"].createElement("div", {
                            className: (0, _classnames2["default"])("ReactVirtualized__Table", className),
                            id: id,
                            style: style
                        }, !disableHeader && _react2["default"].createElement("div", {
                            className: (0, _classnames2["default"])("ReactVirtualized__Table__headerRow", rowClass),
                            style: _extends({}, rowStyleObject, {
                                height: headerHeight,
                                overflow: "hidden",
                                paddingRight: scrollbarWidth,
                                width: width
                            })
                        }, this._getRenderedHeaderRow()), _react2["default"].createElement(_Grid2["default"], _extends({}, this.props, {
                            autoContainerWidth: !0,
                            className: (0, _classnames2["default"])("ReactVirtualized__Table__Grid", gridClassName),
                            cellRenderer: this._createRow,
                            columnWidth: width,
                            columnCount: 1,
                            height: availableRowsHeight,
                            id: void 0,
                            noContentRenderer: noRowsRenderer,
                            onScroll: this._onScroll,
                            onSectionRendered: this._onSectionRendered,
                            ref: function(_ref) {
                                _this2.Grid = _ref;
                            },
                            scrollbarWidth: scrollbarWidth,
                            scrollToRow: scrollToIndex,
                            style: _extends({}, gridStyle, {
                                overflowX: "hidden"
                            })
                        })));
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_createColumn",
                    value: function(_ref2) {
                        var column = _ref2.column, columnIndex = _ref2.columnIndex, isScrolling = _ref2.isScrolling, rowData = _ref2.rowData, rowIndex = _ref2.rowIndex, _column$props = column.props, cellDataGetter = _column$props.cellDataGetter, cellRenderer = _column$props.cellRenderer, className = _column$props.className, columnData = _column$props.columnData, dataKey = _column$props.dataKey, cellData = cellDataGetter({
                            columnData: columnData,
                            dataKey: dataKey,
                            rowData: rowData
                        }), renderedCell = cellRenderer({
                            cellData: cellData,
                            columnData: columnData,
                            dataKey: dataKey,
                            isScrolling: isScrolling,
                            rowData: rowData,
                            rowIndex: rowIndex
                        }), style = this._cachedColumnStyles[columnIndex], title = "string" == typeof renderedCell ? renderedCell : null;
                        return _react2["default"].createElement("div", {
                            key: "Row" + rowIndex + "-Col" + columnIndex,
                            className: (0, _classnames2["default"])("ReactVirtualized__Table__rowColumn", className),
                            style: style,
                            title: title
                        }, renderedCell);
                    }
                }, {
                    key: "_createHeader",
                    value: function(_ref3) {
                        var column = _ref3.column, index = _ref3.index, _props2 = this.props, headerClassName = _props2.headerClassName, headerStyle = _props2.headerStyle, onHeaderClick = _props2.onHeaderClick, sort = _props2.sort, sortBy = _props2.sortBy, sortDirection = _props2.sortDirection, _column$props2 = column.props, dataKey = _column$props2.dataKey, disableSort = _column$props2.disableSort, headerRenderer = _column$props2.headerRenderer, label = _column$props2.label, columnData = _column$props2.columnData, sortEnabled = !disableSort && sort, classNames = (0, 
                        _classnames2["default"])("ReactVirtualized__Table__headerColumn", headerClassName, column.props.headerClassName, {
                            ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
                        }), style = this._getFlexStyleForColumn(column, headerStyle), renderedHeader = headerRenderer({
                            columnData: columnData,
                            dataKey: dataKey,
                            disableSort: disableSort,
                            label: label,
                            sortBy: sortBy,
                            sortDirection: sortDirection
                        }), a11yProps = {};
                        return (sortEnabled || onHeaderClick) && !function() {
                            // If this is a sortable header, clicking it should update the table data's sorting.
                            var newSortDirection = sortBy !== dataKey || sortDirection === _SortDirection2["default"].DESC ? _SortDirection2["default"].ASC : _SortDirection2["default"].DESC, onClick = function() {
                                sortEnabled && sort({
                                    sortBy: dataKey,
                                    sortDirection: newSortDirection
                                }), onHeaderClick && onHeaderClick({
                                    columnData: columnData,
                                    dataKey: dataKey
                                });
                            }, onKeyDown = function(event) {
                                "Enter" !== event.key && " " !== event.key || onClick();
                            };
                            a11yProps["aria-label"] = column.props["aria-label"] || label || dataKey, a11yProps.role = "rowheader", 
                            a11yProps.tabIndex = 0, a11yProps.onClick = onClick, a11yProps.onKeyDown = onKeyDown;
                        }(), _react2["default"].createElement("div", _extends({}, a11yProps, {
                            key: "Header-Col" + index,
                            className: classNames,
                            style: style
                        }), renderedHeader);
                    }
                }, {
                    key: "_createRow",
                    value: function(_ref4) {
                        var _this3 = this, index = _ref4.rowIndex, isScrolling = _ref4.isScrolling, key = _ref4.key, style = _ref4.style, _props3 = this.props, children = _props3.children, onRowClick = _props3.onRowClick, onRowDoubleClick = _props3.onRowDoubleClick, onRowMouseOver = _props3.onRowMouseOver, onRowMouseOut = _props3.onRowMouseOut, rowClassName = _props3.rowClassName, rowGetter = _props3.rowGetter, rowRenderer = _props3.rowRenderer, rowStyle = _props3.rowStyle, scrollbarWidth = this.state.scrollbarWidth, rowClass = rowClassName instanceof Function ? rowClassName({
                            index: index
                        }) : rowClassName, rowStyleObject = rowStyle instanceof Function ? rowStyle({
                            index: index
                        }) : rowStyle, rowData = rowGetter({
                            index: index
                        }), columns = _react2["default"].Children.toArray(children).map(function(column, columnIndex) {
                            return _this3._createColumn({
                                column: column,
                                columnIndex: columnIndex,
                                isScrolling: isScrolling,
                                rowData: rowData,
                                rowIndex: index,
                                scrollbarWidth: scrollbarWidth
                            });
                        }), className = (0, _classnames2["default"])("ReactVirtualized__Table__row", rowClass), flattenedStyle = _extends({}, style, rowStyleObject, {
                            height: this._getRowHeight(index),
                            overflow: "hidden",
                            paddingRight: scrollbarWidth
                        });
                        return rowRenderer({
                            className: className,
                            columns: columns,
                            index: index,
                            isScrolling: isScrolling,
                            key: key,
                            onRowClick: onRowClick,
                            onRowDoubleClick: onRowDoubleClick,
                            onRowMouseOver: onRowMouseOver,
                            onRowMouseOut: onRowMouseOut,
                            rowData: rowData,
                            style: flattenedStyle
                        });
                    }
                }, {
                    key: "_getFlexStyleForColumn",
                    value: function(column) {
                        var customStyle = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, flexValue = column.props.flexGrow + " " + column.props.flexShrink + " " + column.props.width + "px", style = _extends({}, customStyle, {
                            flex: flexValue,
                            msFlex: flexValue,
                            WebkitFlex: flexValue
                        });
                        return column.props.maxWidth && (style.maxWidth = column.props.maxWidth), column.props.minWidth && (style.minWidth = column.props.minWidth), 
                        style;
                    }
                }, {
                    key: "_getRenderedHeaderRow",
                    value: function() {
                        var _this4 = this, _props4 = this.props, children = _props4.children, disableHeader = _props4.disableHeader, items = disableHeader ? [] : _react2["default"].Children.toArray(children);
                        return items.map(function(column, index) {
                            return _this4._createHeader({
                                column: column,
                                index: index
                            });
                        });
                    }
                }, {
                    key: "_getRowHeight",
                    value: function(rowIndex) {
                        var rowHeight = this.props.rowHeight;
                        return rowHeight instanceof Function ? rowHeight({
                            index: rowIndex
                        }) : rowHeight;
                    }
                }, {
                    key: "_onScroll",
                    value: function(_ref5) {
                        var clientHeight = _ref5.clientHeight, scrollHeight = _ref5.scrollHeight, scrollTop = _ref5.scrollTop, onScroll = this.props.onScroll;
                        onScroll({
                            clientHeight: clientHeight,
                            scrollHeight: scrollHeight,
                            scrollTop: scrollTop
                        });
                    }
                }, {
                    key: "_onSectionRendered",
                    value: function(_ref6) {
                        var rowOverscanStartIndex = _ref6.rowOverscanStartIndex, rowOverscanStopIndex = _ref6.rowOverscanStopIndex, rowStartIndex = _ref6.rowStartIndex, rowStopIndex = _ref6.rowStopIndex, onRowsRendered = this.props.onRowsRendered;
                        onRowsRendered({
                            overscanStartIndex: rowOverscanStartIndex,
                            overscanStopIndex: rowOverscanStopIndex,
                            startIndex: rowStartIndex,
                            stopIndex: rowStopIndex
                        });
                    }
                }, {
                    key: "_setScrollbarWidth",
                    value: function() {
                        var Grid = (0, _reactDom.findDOMNode)(this.Grid), clientWidth = Grid.clientWidth || 0, offsetWidth = Grid.offsetWidth || 0, scrollbarWidth = offsetWidth - clientWidth;
                        this.setState({
                            scrollbarWidth: scrollbarWidth
                        });
                    }
                } ]), Table;
            }(_react.Component);
            Table.defaultProps = {
                disableHeader: !1,
                estimatedRowSize: 30,
                headerHeight: 0,
                headerStyle: {},
                noRowsRenderer: function() {
                    return null;
                },
                onRowsRendered: function() {
                    return null;
                },
                onScroll: function() {
                    return null;
                },
                overscanRowCount: 10,
                rowRenderer: _defaultRowRenderer2["default"],
                rowStyle: {},
                scrollToAlignment: "auto",
                style: {}
            }, exports["default"] = Table, "production" !== process.env.NODE_ENV ? Table.propTypes = {
                "aria-label": _react.PropTypes.string,
                /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
                autoHeight: _react.PropTypes.bool,
                /** One or more Columns describing the data displayed in this row */
                children: function children(props, propName, componentName) {
                    for (var children = _react2["default"].Children.toArray(props.children), i = 0; i < children.length; i++) if (children[i].type !== _Column2["default"]) return new Error("Table only accepts children of type Column");
                },
                /** Optional CSS class name */
                className: _react.PropTypes.string,
                /** Disable rendering the header at all */
                disableHeader: _react.PropTypes.bool,
                /**
	   * Used to estimate the total height of a Table before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
                estimatedRowSize: _react.PropTypes.number.isRequired,
                /** Optional custom CSS class name to attach to inner Grid element. */
                gridClassName: _react.PropTypes.string,
                /** Optional inline style to attach to inner Grid element. */
                gridStyle: _react.PropTypes.object,
                /** Optional CSS class to apply to all column headers */
                headerClassName: _react.PropTypes.string,
                /** Fixed height of header row */
                headerHeight: _react.PropTypes.number.isRequired,
                /** Fixed/available height for out DOM element */
                height: _react.PropTypes.number.isRequired,
                /** Optional id */
                id: _react.PropTypes.string,
                /** Optional renderer to be used in place of table body rows when rowCount is 0 */
                noRowsRenderer: _react.PropTypes.func,
                /**
	  * Optional callback when a column's header is clicked.
	  * ({ columnData: any, dataKey: string }): void
	  */
                onHeaderClick: _react.PropTypes.func,
                /** Optional custom inline style to attach to table header columns. */
                headerStyle: _react.PropTypes.object,
                /**
	   * Callback invoked when a user clicks on a table row.
	   * ({ index: number }): void
	   */
                onRowClick: _react.PropTypes.func,
                /**
	   * Callback invoked when a user double-clicks on a table row.
	   * ({ index: number }): void
	   */
                onRowDoubleClick: _react.PropTypes.func,
                /**
	   * Callback invoked when the mouse leaves a table row.
	   * ({ index: number }): void
	   */
                onRowMouseOut: _react.PropTypes.func,
                /**
	   * Callback invoked when a user moves the mouse over a table row.
	   * ({ index: number }): void
	   */
                onRowMouseOver: _react.PropTypes.func,
                /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
                onRowsRendered: _react.PropTypes.func,
                /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
                onScroll: _react.PropTypes.func.isRequired,
                /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
                overscanRowCount: _react.PropTypes.number.isRequired,
                /**
	   * Optional CSS class to apply to all table rows (including the header row).
	   * This property can be a CSS class name (string) or a function that returns a class name.
	   * If a function is provided its signature should be: ({ index: number }): string
	   */
                rowClassName: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.func ]),
                /**
	   * Callback responsible for returning a data row given an index.
	   * ({ index: number }): any
	   */
                rowGetter: _react.PropTypes.func.isRequired,
                /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
                rowHeight: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
                /** Number of rows in table. */
                rowCount: _react.PropTypes.number.isRequired,
                /**
	   * Responsible for rendering a table row given an array of columns:
	   * Should implement the following interface: ({
	   *   className: string,
	   *   columns: Array,
	   *   index: number,
	   *   isScrolling: boolean,
	   *   onRowClick: ?Function,
	   *   onRowDoubleClick: ?Function,
	   *   onRowMouseOver: ?Function,
	   *   onRowMouseOut: ?Function,
	   *   rowData: any,
	   *   style: any
	   * }): PropTypes.node
	   */
                rowRenderer: _react.PropTypes.func,
                /** Optional custom inline style to attach to table rows. */
                rowStyle: _react.PropTypes.oneOfType([ _react.PropTypes.object, _react.PropTypes.func ]).isRequired,
                /** See Grid#scrollToAlignment */
                scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
                /** Row index to ensure visible (by forcefully scrolling if necessary) */
                scrollToIndex: _react.PropTypes.number,
                /** Vertical offset. */
                scrollTop: _react.PropTypes.number,
                /**
	   * Sort function to be called if a sortable header is clicked.
	   * ({ sortBy: string, sortDirection: SortDirection }): void
	   */
                sort: _react.PropTypes.func,
                /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
                sortBy: _react.PropTypes.string,
                /** Table data is currently sorted in this direction (if it is sorted at all) */
                sortDirection: _react.PropTypes.oneOf([ _SortDirection2["default"].ASC, _SortDirection2["default"].DESC ]),
                /** Optional inline style */
                style: _react.PropTypes.object,
                /** Tab index for focus */
                tabIndex: _react.PropTypes.number,
                /** Width of list */
                width: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 154 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _react = __webpack_require__(2), _defaultHeaderRenderer = __webpack_require__(155), _defaultHeaderRenderer2 = _interopRequireDefault(_defaultHeaderRenderer), _defaultCellRenderer = __webpack_require__(158), _defaultCellRenderer2 = _interopRequireDefault(_defaultCellRenderer), _defaultCellDataGetter = __webpack_require__(159), _defaultCellDataGetter2 = _interopRequireDefault(_defaultCellDataGetter), Column = function(_Component) {
                function Column() {
                    return _classCallCheck(this, Column), _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
                }
                return _inherits(Column, _Component), Column;
            }(_react.Component);
            Column.defaultProps = {
                cellDataGetter: _defaultCellDataGetter2["default"],
                cellRenderer: _defaultCellRenderer2["default"],
                flexGrow: 0,
                flexShrink: 1,
                headerRenderer: _defaultHeaderRenderer2["default"],
                style: {}
            }, exports["default"] = Column, "production" !== process.env.NODE_ENV ? Column.propTypes = {
                /** Optional aria-label value to set on the column header */
                "aria-label": _react.PropTypes.string,
                /**
	   * Callback responsible for returning a cell's data, given its :dataKey
	   * ({ columnData: any, dataKey: string, rowData: any }): any
	   */
                cellDataGetter: _react.PropTypes.func,
                /**
	   * Callback responsible for rendering a cell's contents.
	   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
	   */
                cellRenderer: _react.PropTypes.func,
                /** Optional CSS class to apply to cell */
                className: _react.PropTypes.string,
                /** Optional additional data passed to this column's :cellDataGetter */
                columnData: _react.PropTypes.object,
                /** Uniquely identifies the row-data attribute correspnding to this cell */
                dataKey: _react.PropTypes.any.isRequired,
                /** If sort is enabled for the table at large, disable it for this column */
                disableSort: _react.PropTypes.bool,
                /** Flex grow style; defaults to 0 */
                flexGrow: _react.PropTypes.number,
                /** Flex shrink style; defaults to 1 */
                flexShrink: _react.PropTypes.number,
                /** Optional CSS class to apply to this column's header */
                headerClassName: _react.PropTypes.string,
                /**
	   * Optional callback responsible for rendering a column header contents.
	   * ({ columnData: object, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }): PropTypes.node
	   */
                headerRenderer: _react.PropTypes.func.isRequired,
                /** Header label for this column */
                label: _react.PropTypes.string,
                /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
                maxWidth: _react.PropTypes.number,
                /** Minimum width of column. */
                minWidth: _react.PropTypes.number,
                /** Optional inline style to apply to cell */
                style: _react.PropTypes.object,
                /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
                width: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 155 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Default table header renderer.
	 */
        function defaultHeaderRenderer(_ref) {
            var dataKey = (_ref.columnData, _ref.dataKey), label = (_ref.disableSort, _ref.label), sortBy = _ref.sortBy, sortDirection = _ref.sortDirection, showSortIndicator = sortBy === dataKey, children = [ _react2["default"].createElement("span", {
                className: "ReactVirtualized__Table__headerTruncatedText",
                key: "label",
                title: label
            }, label) ];
            return showSortIndicator && children.push(_react2["default"].createElement(_SortIndicator2["default"], {
                key: "SortIndicator",
                sortDirection: sortDirection
            })), children;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = defaultHeaderRenderer;
        var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _SortIndicator = __webpack_require__(156), _SortIndicator2 = _interopRequireDefault(_SortIndicator);
    }, /* 156 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            /**
	 * Displayed beside a header to indicate that a Table is currently sorted by this column.
	 */
            function SortIndicator(_ref) {
                var sortDirection = _ref.sortDirection, classNames = (0, _classnames2["default"])("ReactVirtualized__Table__sortableHeaderIcon", {
                    "ReactVirtualized__Table__sortableHeaderIcon--ASC": sortDirection === _SortDirection2["default"].ASC,
                    "ReactVirtualized__Table__sortableHeaderIcon--DESC": sortDirection === _SortDirection2["default"].DESC
                });
                return _react2["default"].createElement("svg", {
                    className: classNames,
                    width: 18,
                    height: 18,
                    viewBox: "0 0 24 24"
                }, sortDirection === _SortDirection2["default"].ASC ? _react2["default"].createElement("path", {
                    d: "M7 14l5-5 5 5z"
                }) : _react2["default"].createElement("path", {
                    d: "M7 10l5 5 5-5z"
                }), _react2["default"].createElement("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }));
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports["default"] = SortIndicator;
            var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(136), _classnames2 = _interopRequireDefault(_classnames), _SortDirection = __webpack_require__(157), _SortDirection2 = _interopRequireDefault(_SortDirection);
            "production" !== process.env.NODE_ENV ? SortIndicator.propTypes = {
                sortDirection: _react.PropTypes.oneOf([ _SortDirection2["default"].ASC, _SortDirection2["default"].DESC ])
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 157 */
    /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SortDirection = {
            /**
	   * Sort items in ascending order.
	   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
	   */
            ASC: "ASC",
            /**
	   * Sort items in descending order.
	   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
	   */
            DESC: "DESC"
        };
        exports["default"] = SortDirection;
    }, /* 158 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Default cell renderer that displays an attribute as a simple string
	 * You should override the column's cellRenderer if your data is some other type of object.
	 */
        function defaultCellRenderer(_ref) {
            var cellData = _ref.cellData;
            _ref.cellDataKey, _ref.columnData, _ref.rowData, _ref.rowIndex;
            return null == cellData ? "" : String(cellData);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = defaultCellRenderer;
    }, /* 159 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Default accessor for returning a cell value for a given attribute.
	 * This function expects to operate on either a vanilla Object or an Immutable Map.
	 * You should override the column's cellDataGetter if your data is some other type of object.
	 */
        function defaultCellDataGetter(_ref) {
            var dataKey = (_ref.columnData, _ref.dataKey), rowData = _ref.rowData;
            return rowData.get instanceof Function ? rowData.get(dataKey) : rowData[dataKey];
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = defaultCellDataGetter;
    }, /* 160 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Default row renderer for Table.
	 */
        function defaultRowRenderer(_ref) {
            var className = _ref.className, columns = _ref.columns, index = _ref.index, key = (_ref.isScrolling, 
            _ref.key), onRowClick = _ref.onRowClick, onRowDoubleClick = _ref.onRowDoubleClick, onRowMouseOver = _ref.onRowMouseOver, onRowMouseOut = _ref.onRowMouseOut, style = (_ref.rowData, 
            _ref.style), a11yProps = {};
            return (onRowClick || onRowDoubleClick || onRowMouseOver || onRowMouseOut) && (a11yProps["aria-label"] = "row", 
            a11yProps.role = "row", a11yProps.tabIndex = 0, onRowClick && (a11yProps.onClick = function() {
                return onRowClick({
                    index: index
                });
            }), onRowDoubleClick && (a11yProps.onDoubleClick = function() {
                return onRowDoubleClick({
                    index: index
                });
            }), onRowMouseOut && (a11yProps.onMouseOut = function() {
                return onRowMouseOut({
                    index: index
                });
            }), onRowMouseOver && (a11yProps.onMouseOver = function() {
                return onRowMouseOver({
                    index: index
                });
            })), _react2["default"].createElement("div", _extends({}, a11yProps, {
                className: className,
                key: key,
                style: style
            }), columns);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        };
        exports["default"] = defaultRowRenderer;
        var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react);
    }, /* 161 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.InfiniteLoader = exports["default"] = void 0;
        var _InfiniteLoader2 = __webpack_require__(162), _InfiniteLoader3 = _interopRequireDefault(_InfiniteLoader2);
        exports["default"] = _InfiniteLoader3["default"], exports.InfiniteLoader = _InfiniteLoader3["default"];
    }, /* 162 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            function isRangeVisible(_ref2) {
                var lastRenderedStartIndex = _ref2.lastRenderedStartIndex, lastRenderedStopIndex = _ref2.lastRenderedStopIndex, startIndex = _ref2.startIndex, stopIndex = _ref2.stopIndex;
                return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
            }
            /**
	 * Returns all of the ranges within a larger range that contain unloaded rows.
	 */
            function scanForUnloadedRanges(_ref3) {
                for (var isRowLoaded = _ref3.isRowLoaded, minimumBatchSize = _ref3.minimumBatchSize, rowCount = _ref3.rowCount, startIndex = _ref3.startIndex, stopIndex = _ref3.stopIndex, unloadedRanges = [], rangeStartIndex = null, rangeStopIndex = null, index = startIndex; index <= stopIndex; index++) {
                    var loaded = isRowLoaded({
                        index: index
                    });
                    loaded ? null !== rangeStopIndex && (unloadedRanges.push({
                        startIndex: rangeStartIndex,
                        stopIndex: rangeStopIndex
                    }), rangeStartIndex = rangeStopIndex = null) : (rangeStopIndex = index, null === rangeStartIndex && (rangeStartIndex = index));
                }
                // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
                // Scan forward to try filling our :minimumBatchSize.
                if (null !== rangeStopIndex) {
                    for (var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1), _index = rangeStopIndex + 1; _index <= potentialStopIndex && !isRowLoaded({
                        index: _index
                    }); _index++) rangeStopIndex = _index;
                    unloadedRanges.push({
                        startIndex: rangeStartIndex,
                        stopIndex: rangeStopIndex
                    });
                }
                // Check to see if our first range ended prematurely.
                // In this case we should scan backwards to try filling our :minimumBatchSize.
                if (unloadedRanges.length) for (var firstUnloadedRange = unloadedRanges[0]; firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0; ) {
                    var _index2 = firstUnloadedRange.startIndex - 1;
                    if (isRowLoaded({
                        index: _index2
                    })) break;
                    firstUnloadedRange.startIndex = _index2;
                }
                return unloadedRanges;
            }
            /**
	 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
	 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
	 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
	 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
	 * Else the inner Grid will not be re-rendered and visuals may be stale.
	 */
            function forceUpdateReactVirtualizedComponent(component) {
                "function" == typeof component.forceUpdateGrid ? component.forceUpdateGrid() : component.forceUpdate();
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }();
            exports.isRangeVisible = isRangeVisible, exports.scanForUnloadedRanges = scanForUnloadedRanges, 
            exports.forceUpdateReactVirtualizedComponent = forceUpdateReactVirtualizedComponent;
            var _react = __webpack_require__(2), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _createCallbackMemoizer = __webpack_require__(137), _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer), InfiniteLoader = function(_Component) {
                function InfiniteLoader(props, context) {
                    _classCallCheck(this, InfiniteLoader);
                    var _this = _possibleConstructorReturn(this, (InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call(this, props, context));
                    return _this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer2["default"])(), 
                    _this._onRowsRendered = _this._onRowsRendered.bind(_this), _this._registerChild = _this._registerChild.bind(_this), 
                    _this;
                }
                return _inherits(InfiniteLoader, _Component), _createClass(InfiniteLoader, [ {
                    key: "render",
                    value: function() {
                        var children = this.props.children;
                        return children({
                            onRowsRendered: this._onRowsRendered,
                            registerChild: this._registerChild
                        });
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_loadUnloadedRanges",
                    value: function(unloadedRanges) {
                        var _this2 = this, loadMoreRows = this.props.loadMoreRows;
                        unloadedRanges.forEach(function(unloadedRange) {
                            var promise = loadMoreRows(unloadedRange);
                            promise && promise.then(function() {
                                // Refresh the visible rows if any of them have just been loaded.
                                // Otherwise they will remain in their unloaded visual state.
                                isRangeVisible({
                                    lastRenderedStartIndex: _this2._lastRenderedStartIndex,
                                    lastRenderedStopIndex: _this2._lastRenderedStopIndex,
                                    startIndex: unloadedRange.startIndex,
                                    stopIndex: unloadedRange.stopIndex
                                }) && _this2._registeredChild && forceUpdateReactVirtualizedComponent(_this2._registeredChild);
                            });
                        });
                    }
                }, {
                    key: "_onRowsRendered",
                    value: function(_ref) {
                        var _this3 = this, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex, _props = this.props, isRowLoaded = _props.isRowLoaded, minimumBatchSize = _props.minimumBatchSize, rowCount = _props.rowCount, threshold = _props.threshold;
                        this._lastRenderedStartIndex = startIndex, this._lastRenderedStopIndex = stopIndex;
                        var unloadedRanges = scanForUnloadedRanges({
                            isRowLoaded: isRowLoaded,
                            minimumBatchSize: minimumBatchSize,
                            rowCount: rowCount,
                            startIndex: Math.max(0, startIndex - threshold),
                            stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
                        }), squashedUnloadedRanges = unloadedRanges.reduce(function(reduced, unloadedRange) {
                            return reduced.concat([ unloadedRange.startIndex, unloadedRange.stopIndex ]);
                        }, []);
                        this._loadMoreRowsMemoizer({
                            callback: function() {
                                _this3._loadUnloadedRanges(unloadedRanges);
                            },
                            indices: {
                                squashedUnloadedRanges: squashedUnloadedRanges
                            }
                        });
                    }
                }, {
                    key: "_registerChild",
                    value: function(registeredChild) {
                        this._registeredChild = registeredChild;
                    }
                } ]), InfiniteLoader;
            }(_react.Component);
            /**
	 * Determines if the specified start/stop range is visible based on the most recently rendered range.
	 */
            InfiniteLoader.defaultProps = {
                minimumBatchSize: 10,
                rowCount: 0,
                threshold: 15
            }, exports["default"] = InfiniteLoader, "production" !== process.env.NODE_ENV ? InfiniteLoader.propTypes = {
                /**
	   * Function responsible for rendering a virtualized component.
	   * This function should implement the following signature:
	   * ({ onRowsRendered, registerChild }) => PropTypes.element
	   *
	   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
	   * The :registerChild callback should be set as the virtualized component's :ref.
	   */
                children: _react.PropTypes.func.isRequired,
                /**
	   * Function responsible for tracking the loaded state of each row.
	   * It should implement the following signature: ({ index: number }): boolean
	   */
                isRowLoaded: _react.PropTypes.func.isRequired,
                /**
	   * Callback to be invoked when more rows must be loaded.
	   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
	   * The returned Promise should be resolved once row data has finished loading.
	   * It will be used to determine when to refresh the list with the newly-loaded data.
	   * This callback may be called multiple times in reaction to a single scroll event.
	   */
                loadMoreRows: _react.PropTypes.func.isRequired,
                /**
	   * Minimum number of rows to be loaded at a time.
	   * This property can be used to batch requests to reduce HTTP requests.
	   */
                minimumBatchSize: _react.PropTypes.number.isRequired,
                /**
	   * Number of rows in list; can be arbitrary high number if actual number is unknown.
	   */
                rowCount: _react.PropTypes.number.isRequired,
                /**
	   * Threshold at which to pre-fetch data.
	   * A threshold X means that data will start loading when a user scrolls within X rows.
	   * This value defaults to 15.
	   */
                threshold: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 163 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ScrollSync = exports["default"] = void 0;
        var _ScrollSync2 = __webpack_require__(164), _ScrollSync3 = _interopRequireDefault(_ScrollSync2);
        exports["default"] = _ScrollSync3["default"], exports.ScrollSync = _ScrollSync3["default"];
    }, /* 164 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), ScrollSync = function(_Component) {
                function ScrollSync(props, context) {
                    _classCallCheck(this, ScrollSync);
                    var _this = _possibleConstructorReturn(this, (ScrollSync.__proto__ || Object.getPrototypeOf(ScrollSync)).call(this, props, context));
                    return _this.state = {
                        clientHeight: 0,
                        clientWidth: 0,
                        scrollHeight: 0,
                        scrollLeft: 0,
                        scrollTop: 0,
                        scrollWidth: 0
                    }, _this._onScroll = _this._onScroll.bind(_this), _this;
                }
                return _inherits(ScrollSync, _Component), _createClass(ScrollSync, [ {
                    key: "render",
                    value: function() {
                        var children = this.props.children, _state = this.state, clientHeight = _state.clientHeight, clientWidth = _state.clientWidth, scrollHeight = _state.scrollHeight, scrollLeft = _state.scrollLeft, scrollTop = _state.scrollTop, scrollWidth = _state.scrollWidth;
                        return children({
                            clientHeight: clientHeight,
                            clientWidth: clientWidth,
                            onScroll: this._onScroll,
                            scrollHeight: scrollHeight,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            scrollWidth: scrollWidth
                        });
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_onScroll",
                    value: function(_ref) {
                        var clientHeight = _ref.clientHeight, clientWidth = _ref.clientWidth, scrollHeight = _ref.scrollHeight, scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, scrollWidth = _ref.scrollWidth;
                        this.setState({
                            clientHeight: clientHeight,
                            clientWidth: clientWidth,
                            scrollHeight: scrollHeight,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            scrollWidth: scrollWidth
                        });
                    }
                } ]), ScrollSync;
            }(_react.Component);
            exports["default"] = ScrollSync, "production" !== process.env.NODE_ENV ? ScrollSync.propTypes = {
                /**
	   * Function responsible for rendering 2 or more virtualized components.
	   * This function should implement the following signature:
	   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
	   */
                children: _react.PropTypes.func.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 165 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.List = exports["default"] = void 0;
        var _List2 = __webpack_require__(166), _List3 = _interopRequireDefault(_List2);
        exports["default"] = _List3["default"], exports.List = _List3["default"];
    }, /* 166 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
                return target;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _Grid = __webpack_require__(144), _Grid2 = _interopRequireDefault(_Grid), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(136), _classnames2 = _interopRequireDefault(_classnames), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), List = function(_Component) {
                function List(props, context) {
                    _classCallCheck(this, List);
                    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props, context));
                    return _this._cellRenderer = _this._cellRenderer.bind(_this), _this._onScroll = _this._onScroll.bind(_this), 
                    _this._onSectionRendered = _this._onSectionRendered.bind(_this), _this;
                }
                return _inherits(List, _Component), _createClass(List, [ {
                    key: "forceUpdateGrid",
                    value: function() {
                        this.Grid.forceUpdate();
                    }
                }, {
                    key: "measureAllRows",
                    value: function() {
                        this.Grid.measureAllCells();
                    }
                }, {
                    key: "recomputeRowHeights",
                    value: function() {
                        var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.Grid.recomputeGridSize({
                            rowIndex: index
                        }), this.forceUpdateGrid();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _this2 = this, _props = this.props, className = _props.className, noRowsRenderer = _props.noRowsRenderer, scrollToIndex = _props.scrollToIndex, width = _props.width, classNames = (0, 
                        _classnames2["default"])("ReactVirtualized__List", className);
                        return _react2["default"].createElement(_Grid2["default"], _extends({}, this.props, {
                            autoContainerWidth: !0,
                            cellRenderer: this._cellRenderer,
                            className: classNames,
                            columnWidth: width,
                            columnCount: 1,
                            noContentRenderer: noRowsRenderer,
                            onScroll: this._onScroll,
                            onSectionRendered: this._onSectionRendered,
                            ref: function(_ref) {
                                _this2.Grid = _ref;
                            },
                            scrollToRow: scrollToIndex
                        }));
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_cellRenderer",
                    value: function(_ref2) {
                        var rowIndex = _ref2.rowIndex, style = _ref2.style, rest = _objectWithoutProperties(_ref2, [ "rowIndex", "style" ]), rowRenderer = this.props.rowRenderer;
                        // By default, List cells should be 100% width.
                        // This prevents them from flowing under a scrollbar (if present).
                        return style.width = "100%", rowRenderer(_extends({
                            index: rowIndex,
                            style: style
                        }, rest));
                    }
                }, {
                    key: "_onScroll",
                    value: function(_ref3) {
                        var clientHeight = _ref3.clientHeight, scrollHeight = _ref3.scrollHeight, scrollTop = _ref3.scrollTop, onScroll = this.props.onScroll;
                        onScroll({
                            clientHeight: clientHeight,
                            scrollHeight: scrollHeight,
                            scrollTop: scrollTop
                        });
                    }
                }, {
                    key: "_onSectionRendered",
                    value: function(_ref4) {
                        var rowOverscanStartIndex = _ref4.rowOverscanStartIndex, rowOverscanStopIndex = _ref4.rowOverscanStopIndex, rowStartIndex = _ref4.rowStartIndex, rowStopIndex = _ref4.rowStopIndex, onRowsRendered = this.props.onRowsRendered;
                        onRowsRendered({
                            overscanStartIndex: rowOverscanStartIndex,
                            overscanStopIndex: rowOverscanStopIndex,
                            startIndex: rowStartIndex,
                            stopIndex: rowStopIndex
                        });
                    }
                } ]), List;
            }(_react.Component);
            List.defaultProps = {
                estimatedRowSize: 30,
                noRowsRenderer: function() {
                    return null;
                },
                onRowsRendered: function() {
                    return null;
                },
                onScroll: function() {
                    return null;
                },
                overscanRowCount: 10,
                scrollToAlignment: "auto",
                style: {}
            }, exports["default"] = List, "production" !== process.env.NODE_ENV ? List.propTypes = {
                "aria-label": _react.PropTypes.string,
                /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
                autoHeight: _react.PropTypes.bool,
                /** Optional CSS class name */
                className: _react.PropTypes.string,
                /**
	   * Used to estimate the total height of a List before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
                estimatedRowSize: _react.PropTypes.number.isRequired,
                /** Height constraint for list (determines how many actual rows are rendered) */
                height: _react.PropTypes.number.isRequired,
                /** Optional renderer to be used in place of rows when rowCount is 0 */
                noRowsRenderer: _react.PropTypes.func.isRequired,
                /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
                onRowsRendered: _react.PropTypes.func.isRequired,
                /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
                overscanRowCount: _react.PropTypes.number.isRequired,
                /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
                onScroll: _react.PropTypes.func.isRequired,
                /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
                rowHeight: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
                /** Responsible for rendering a row given an index; ({ index: number }): node */
                rowRenderer: _react.PropTypes.func.isRequired,
                /** Number of rows in list. */
                rowCount: _react.PropTypes.number.isRequired,
                /** See Grid#scrollToAlignment */
                scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
                /** Row index to ensure visible (by forcefully scrolling if necessary) */
                scrollToIndex: _react.PropTypes.number,
                /** Vertical offset. */
                scrollTop: _react.PropTypes.number,
                /** Optional inline style */
                style: _react.PropTypes.object,
                /** Tab index for focus */
                tabIndex: _react.PropTypes.number,
                /** Width of list */
                width: _react.PropTypes.number.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 167 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.IS_SCROLLING_TIMEOUT = exports.WindowScroller = exports["default"] = void 0;
        var _onScroll = __webpack_require__(168);
        Object.defineProperty(exports, "IS_SCROLLING_TIMEOUT", {
            enumerable: !0,
            get: function() {
                return _onScroll.IS_SCROLLING_TIMEOUT;
            }
        });
        var _WindowScroller2 = __webpack_require__(169), _WindowScroller3 = _interopRequireDefault(_WindowScroller2);
        exports["default"] = _WindowScroller3["default"], exports.WindowScroller = _WindowScroller3["default"];
    }, /* 168 */
    /***/
    function(module, exports) {
        "use strict";
        function enablePointerEventsIfDisabled() {
            disablePointerEventsTimeoutId && (disablePointerEventsTimeoutId = null, document.body.style.pointerEvents = originalBodyPointerEvents, 
            originalBodyPointerEvents = null);
        }
        function enablePointerEventsAfterDelayCallback() {
            enablePointerEventsIfDisabled(), mountedInstances.forEach(function(component) {
                return component._enablePointerEventsAfterDelayCallback();
            });
        }
        function enablePointerEventsAfterDelay() {
            disablePointerEventsTimeoutId && clearTimeout(disablePointerEventsTimeoutId), disablePointerEventsTimeoutId = setTimeout(enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
        }
        function onScrollWindow(event) {
            null == originalBodyPointerEvents && (originalBodyPointerEvents = document.body.style.pointerEvents, 
            document.body.style.pointerEvents = "none", enablePointerEventsAfterDelay()), mountedInstances.forEach(function(component) {
                return component._onScrollWindow(event);
            });
        }
        function registerScrollListener(component) {
            mountedInstances.length || window.addEventListener("scroll", onScrollWindow), mountedInstances.push(component);
        }
        function unregisterScrollListener(component) {
            mountedInstances = mountedInstances.filter(function(c) {
                return c !== component;
            }), mountedInstances.length || (window.removeEventListener("scroll", onScrollWindow), 
            disablePointerEventsTimeoutId && (clearTimeout(disablePointerEventsTimeoutId), enablePointerEventsIfDisabled()));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.registerScrollListener = registerScrollListener, exports.unregisterScrollListener = unregisterScrollListener;
        var mountedInstances = [], originalBodyPointerEvents = null, disablePointerEventsTimeoutId = null, IS_SCROLLING_TIMEOUT = exports.IS_SCROLLING_TIMEOUT = 150;
    }, /* 169 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(2), _reactDom = __webpack_require__(3), _reactDom2 = _interopRequireDefault(_reactDom), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _onScroll = __webpack_require__(168), WindowScroller = function(_Component) {
                function WindowScroller(props) {
                    _classCallCheck(this, WindowScroller);
                    var _this = _possibleConstructorReturn(this, (WindowScroller.__proto__ || Object.getPrototypeOf(WindowScroller)).call(this, props)), height = "undefined" != typeof window ? window.innerHeight : 0;
                    return _this.state = {
                        isScrolling: !1,
                        height: height,
                        scrollTop: 0
                    }, _this._onScrollWindow = _this._onScrollWindow.bind(_this), _this._onResizeWindow = _this._onResizeWindow.bind(_this), 
                    _this._enablePointerEventsAfterDelayCallback = _this._enablePointerEventsAfterDelayCallback.bind(_this), 
                    _this;
                }
                return _inherits(WindowScroller, _Component), _createClass(WindowScroller, [ {
                    key: "updatePosition",
                    value: function() {
                        // Subtract documentElement top to handle edge-case where a user is navigating back (history) from an already-scrolled bage.
                        // In this case the body's top position will be a negative number and this element's top will be increased (by that amount).
                        this._positionFromTop = _reactDom2["default"].findDOMNode(this).getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var height = this.state.height;
                        this.updatePosition(), height !== window.innerHeight && this.setState({
                            height: window.innerHeight
                        }), (0, _onScroll.registerScrollListener)(this), window.addEventListener("resize", this._onResizeWindow, !1);
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        (0, _onScroll.unregisterScrollListener)(this), window.removeEventListener("resize", this._onResizeWindow, !1);
                    }
                }, {
                    key: "render",
                    value: function() {
                        var children = this.props.children, _state = this.state, isScrolling = _state.isScrolling, scrollTop = _state.scrollTop, height = _state.height;
                        return children({
                            height: height,
                            isScrolling: isScrolling,
                            scrollTop: scrollTop
                        });
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(nextProps, nextState) {
                        return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                    }
                }, {
                    key: "_enablePointerEventsAfterDelayCallback",
                    value: function() {
                        this.setState({
                            isScrolling: !1
                        });
                    }
                }, {
                    key: "_onResizeWindow",
                    value: function(event) {
                        var onResize = this.props.onResize;
                        this.updatePosition();
                        var height = window.innerHeight || 0;
                        this.setState({
                            height: height
                        }), onResize({
                            height: height
                        });
                    }
                }, {
                    key: "_onScrollWindow",
                    value: function(event) {
                        var onScroll = this.props.onScroll, scrollY = "scrollY" in window ? window.scrollY : document.documentElement.scrollTop, scrollTop = Math.max(0, scrollY - this._positionFromTop);
                        this.setState({
                            isScrolling: !0,
                            scrollTop: scrollTop
                        }), onScroll({
                            scrollTop: scrollTop
                        });
                    }
                } ]), WindowScroller;
            }(_react.Component);
            WindowScroller.defaultProps = {
                onResize: function() {},
                onScroll: function() {}
            }, exports["default"] = WindowScroller, "production" !== process.env.NODE_ENV ? WindowScroller.propTypes = {
                /**
	   * Function responsible for rendering children.
	   * This function should implement the following signature:
	   * ({ height, scrollTop }) => PropTypes.element
	   */
                children: _react.PropTypes.func.isRequired,
                /** Callback to be invoked on-resize: ({ height }) */
                onResize: _react.PropTypes.func.isRequired,
                /** Callback to be invoked on-scroll: ({ scrollTop }) */
                onScroll: _react.PropTypes.func.isRequired
            } : void 0;
        }).call(exports, __webpack_require__(117));
    }, /* 170 */
    /***/
    function(module, exports, __webpack_require__) {
        function setElementScroll(element, x, y) {
            element === window ? element.scrollTo(x, y) : (element.scrollLeft = x, element.scrollTop = y);
        }
        function getTargetScrollLocation(target, parent, align) {
            var parentPosition, x, y, differenceX, differenceY, targetWidth, targetHeight, targetPosition = target.getBoundingClientRect(), leftAlign = align && null != align.left ? align.left : .5, topAlign = align && null != align.top ? align.top : .5, leftOffset = align && null != align.leftOffset ? align.leftOffset : 0, topOffset = align && null != align.topOffset ? align.topOffset : 0, leftScalar = leftAlign, topScalar = topAlign;
            if (parent === window) targetWidth = Math.min(targetPosition.width, window.innerWidth), 
            targetHeight = Math.min(targetPosition.height, window.innerHeight), x = targetPosition.left + window.pageXOffset - window.innerWidth * leftScalar + targetWidth * leftScalar, 
            y = targetPosition.top + window.pageYOffset - window.innerHeight * topScalar + targetHeight * topScalar, 
            x = Math.max(Math.min(x, document.body.scrollWidth - window.innerWidth * leftScalar), 0), 
            y = Math.max(Math.min(y, document.body.scrollHeight - window.innerHeight * topScalar), 0), 
            x -= leftOffset, y -= topOffset, differenceX = x - window.pageXOffset, differenceY = y - window.pageYOffset; else {
                targetWidth = targetPosition.width, targetHeight = targetPosition.height, parentPosition = parent.getBoundingClientRect();
                var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft), offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
                x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar, y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar, 
                x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0), y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0), 
                x -= leftOffset, y -= topOffset, differenceX = x - parent.scrollLeft, differenceY = y - parent.scrollTop;
            }
            return {
                x: x,
                y: y,
                differenceX: differenceX,
                differenceY: differenceY
            };
        }
        function animate(parent) {
            raf(function() {
                var scrollSettings = parent._scrollSettings;
                if (scrollSettings) {
                    var location = getTargetScrollLocation(scrollSettings.target, parent, scrollSettings.align), time = Date.now() - scrollSettings.startTime, timeValue = Math.min(1 / scrollSettings.time * time, 1);
                    if (time > scrollSettings.time + 20) return setElementScroll(parent, location.x, location.y), 
                    parent._scrollSettings = null, scrollSettings.end(COMPLETE);
                    var easeValue = 1 - scrollSettings.ease(timeValue);
                    setElementScroll(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue), 
                    animate(parent);
                }
            });
        }
        function transitionScrollTo(target, parent, settings, callback) {
            function end(endType) {
                parent._scrollSettings = null, parent.parentElement && parent.parentElement._scrollSettings && parent.parentElement._scrollSettings.end(endType), 
                callback(endType), parent.removeEventListener("touchstart", endHandler);
            }
            var endHandler, idle = !parent._scrollSettings, lastSettings = parent._scrollSettings, now = Date.now();
            lastSettings && lastSettings.end(CANCELED), parent._scrollSettings = {
                startTime: lastSettings ? lastSettings.startTime : Date.now(),
                target: target,
                time: settings.time + (lastSettings ? now - lastSettings.startTime : 0),
                ease: settings.ease,
                align: settings.align,
                end: end
            }, endHandler = end.bind(null, CANCELED), parent.addEventListener("touchstart", endHandler), 
            idle && animate(parent);
        }
        function isScrollable(element) {
            return parent === window || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && "hidden" !== getComputedStyle(element).overflow;
        }
        function defaultValidTarget() {
            return !0;
        }
        var raf = __webpack_require__(115), COMPLETE = "complete", CANCELED = "canceled";
        module.exports = function(target, settings, callback) {
            function done(endType) {
                parents--, parents || callback && callback(endType);
            }
            if (target) {
                "function" == typeof settings && (callback = settings, settings = null), settings || (settings = {}), 
                settings.time = isNaN(settings.time) ? 1e3 : settings.time, settings.ease = settings.ease || function(v) {
                    return 1 - Math.pow(1 - v, v / 2);
                };
                for (var parent = target.parentElement, parents = 0, validTarget = settings.validTarget || defaultValidTarget; parent; ) {
                    if (validTarget(parent, parents) && isScrollable(parent) && (parents++, transitionScrollTo(target, parent, settings, done)), 
                    parent = parent.parentElement, !parent) return;
                    "BODY" === parent.tagName && (parent = window);
                }
            }
        };
    }, /* 171 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function _toConsumableArray(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
                return arr2;
            }
            return Array.from(arr);
        }
        function rotateRight(range, offset) {
            var length = range.length;
            return range.map(function(_, index, list) {
                return list[(index + offset) % length];
            });
        }
        function rotateLeft(range, offset) {
            return rotateRight(range, range.length - Math.abs(offset % range.length));
        }
        function buildUpdateOperation(list, _ref) {
            var from = _ref.from, to = _ref.to, lower = Math.min(from, to), upper = Math.max(from, to), range = list.slice(lower, upper + 1), rotated = to - from > 0 ? rotateRight(range, 1) : rotateLeft(range, 1);
            return [ lower, rotated.length ].concat(_toConsumableArray(rotated));
        }
        function findListIndex(lists, listId) {
            return lists.findIndex(function(_ref2) {
                var id = _ref2.id;
                return id === listId;
            });
        }
        function findItemIndex(lists, itemId) {
            var index = -1;
            return lists.forEach(function(_ref3) {
                var rows = _ref3.rows;
                index === -1 && (index = rows.findIndex(function(_ref4) {
                    var id = _ref4.id;
                    return id === itemId;
                }));
            }), index;
        }
        function findItemListIndex(lists, itemId) {
            var index = -1;
            return lists.forEach(function(_ref5, i) {
                var rows = _ref5.rows;
                index === -1 && rows.some(function(_ref6) {
                    var id = _ref6.id;
                    return id === itemId;
                }) && (index = i);
            }), index;
        }
        function findItemListId(lists, itemId) {
            var list = lists.find(function(_ref7) {
                var rows = _ref7.rows;
                return rows.some(function(_ref8) {
                    var id = _ref8.id;
                    return id === itemId;
                });
            });
            return list && list.id;
        }
        function moveLists(lists, _ref9) {
            var fromId = _ref9.fromId, toId = _ref9.toId, fromIndex = findListIndex(lists, fromId), toIndex = findListIndex(lists, toId);
            // Sanity checks
            if (fromIndex === -1 || toIndex === -1) return lists;
            var fromList = lists[fromIndex];
            return fromList ? (0, _reactAddonsUpdate2["default"])(lists, {
                $splice: [ [ fromIndex, 1 ], [ toIndex, 0, fromList ] ]
            }) : lists;
        }
        function moveItems(lists, _ref10) {
            var _update2, fromId = _ref10.fromId, toId = _ref10.toId, fromListIndex = findItemListIndex(lists, fromId), toListIndex = findItemListIndex(lists, toId), fromIndex = findItemIndex(lists, fromId), toIndex = findItemIndex(lists, toId);
            // Sanity checks
            if (fromListIndex === -1) return lists;
            if (fromIndex === -1 || toIndex === -1) return lists;
            var fromList = lists[fromListIndex];
            if (fromListIndex === toListIndex) return (0, _reactAddonsUpdate2["default"])(lists, _defineProperty({}, fromListIndex, {
                rows: {
                    $splice: [ buildUpdateOperation(fromList.rows, {
                        from: fromIndex,
                        to: toIndex
                    }) ]
                }
            }));
            var fromItem = fromList.rows[fromIndex];
            return (0, _reactAddonsUpdate2["default"])(lists, (_update2 = {}, _defineProperty(_update2, fromListIndex, {
                rows: {
                    $splice: [ [ fromIndex, 1 ] ]
                }
            }), _defineProperty(_update2, toListIndex, {
                rows: {
                    $splice: [ [ toIndex, 0, fromItem ] ]
                }
            }), _update2));
        }
        function moveItemToList(lists, _ref11) {
            var _update3, fromId = _ref11.fromId, toId = _ref11.toId, fromIndex = findItemIndex(lists, fromId), fromListIndex = findItemListIndex(lists, fromId), toListIndex = findListIndex(lists, toId);
            if (fromIndex === -1) return lists;
            var fromList = lists[fromListIndex], toList = lists[toListIndex];
            if (!toList) return lists;
            // Only move when list is empty
            if (toList.rows.length > 0) return lists;
            var fromItem = fromList.rows[fromIndex];
            return (0, _reactAddonsUpdate2["default"])(lists, (_update3 = {}, _defineProperty(_update3, fromListIndex, {
                rows: {
                    $splice: [ [ fromIndex, 1 ] ]
                }
            }), _defineProperty(_update3, toListIndex, {
                rows: {
                    $push: [ fromItem ]
                }
            }), _update3));
        }
        function updateLists(lists, _ref12) {
            var from = _ref12.from, to = _ref12.to, fromItemId = from.itemId, fromListId = from.listId, toItemId = to.itemId, toListId = to.listId;
            // Deprecation checks
            // Deprecation checks
            // Move lists
            // Move item inside same list
            // Move item to a different list
            return from.listIndex || from.rowIndex || to.listIndex || to.rowIndex ? lists : fromListId !== toListId && void 0 === fromItemId && void 0 === toItemId ? moveLists(lists, {
                fromId: fromListId,
                toId: toListId
            }) : fromListId === toListId && void 0 !== fromItemId && void 0 !== toItemId ? moveItems(lists, {
                fromId: fromItemId,
                toId: toItemId
            }) : void 0 === fromListId && void 0 !== toListId && void 0 !== fromItemId && void 0 === toItemId ? moveItemToList(lists, {
                fromId: fromItemId,
                toId: toListId
            }) : lists;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.findListIndex = findListIndex, exports.findItemIndex = findItemIndex, 
        exports.findItemListIndex = findItemListIndex, exports.findItemListId = findItemListId, 
        exports.updateLists = updateLists;
        var _reactAddonsUpdate = __webpack_require__(172), _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
    }, /* 172 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(173);
    }, /* 173 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
            /* global hasOwnProperty:true */
            "use strict";
            function shallowCopy(x) {
                return Array.isArray(x) ? x.concat() : x && "object" == typeof x ? _assign(new x.constructor(), x) : x;
            }
            function invariantArrayCase(value, spec, command) {
                Array.isArray(value) ? void 0 : "production" !== process.env.NODE_ENV ? invariant(!1, "update(): expected target of %s to be an array; got %s.", command, value) : _prodInvariant("1", command, value);
                var specValue = spec[command];
                Array.isArray(specValue) ? void 0 : "production" !== process.env.NODE_ENV ? invariant(!1, "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", command, specValue) : _prodInvariant("2", command, specValue);
            }
            /**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
            function update(value, spec) {
                if ("object" != typeof spec ? "production" !== process.env.NODE_ENV ? invariant(!1, "update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?", ALL_COMMANDS_LIST.join(", "), COMMAND_SET) : _prodInvariant("3", ALL_COMMANDS_LIST.join(", "), COMMAND_SET) : void 0, 
                hasOwnProperty.call(spec, COMMAND_SET)) return 1 !== Object.keys(spec).length ? "production" !== process.env.NODE_ENV ? invariant(!1, "Cannot have more than one key in an object with %s", COMMAND_SET) : _prodInvariant("4", COMMAND_SET) : void 0, 
                spec[COMMAND_SET];
                var nextValue = shallowCopy(value);
                if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
                    var mergeObj = spec[COMMAND_MERGE];
                    mergeObj && "object" == typeof mergeObj ? void 0 : "production" !== process.env.NODE_ENV ? invariant(!1, "update(): %s expects a spec of type 'object'; got %s", COMMAND_MERGE, mergeObj) : _prodInvariant("5", COMMAND_MERGE, mergeObj), 
                    nextValue && "object" == typeof nextValue ? void 0 : "production" !== process.env.NODE_ENV ? invariant(!1, "update(): %s expects a target of type 'object'; got %s", COMMAND_MERGE, nextValue) : _prodInvariant("6", COMMAND_MERGE, nextValue), 
                    _assign(nextValue, spec[COMMAND_MERGE]);
                }
                hasOwnProperty.call(spec, COMMAND_PUSH) && (invariantArrayCase(value, spec, COMMAND_PUSH), 
                spec[COMMAND_PUSH].forEach(function(item) {
                    nextValue.push(item);
                })), hasOwnProperty.call(spec, COMMAND_UNSHIFT) && (invariantArrayCase(value, spec, COMMAND_UNSHIFT), 
                spec[COMMAND_UNSHIFT].forEach(function(item) {
                    nextValue.unshift(item);
                })), hasOwnProperty.call(spec, COMMAND_SPLICE) && (Array.isArray(value) ? void 0 : "production" !== process.env.NODE_ENV ? invariant(!1, "Expected %s target to be an array; got %s", COMMAND_SPLICE, value) : _prodInvariant("7", COMMAND_SPLICE, value), 
                Array.isArray(spec[COMMAND_SPLICE]) ? void 0 : "production" !== process.env.NODE_ENV ? invariant(!1, "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant("8", COMMAND_SPLICE, spec[COMMAND_SPLICE]), 
                spec[COMMAND_SPLICE].forEach(function(args) {
                    Array.isArray(args) ? void 0 : "production" !== process.env.NODE_ENV ? invariant(!1, "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant("8", COMMAND_SPLICE, spec[COMMAND_SPLICE]), 
                    nextValue.splice.apply(nextValue, args);
                })), hasOwnProperty.call(spec, COMMAND_APPLY) && ("function" != typeof spec[COMMAND_APPLY] ? "production" !== process.env.NODE_ENV ? invariant(!1, "update(): expected spec of %s to be a function; got %s.", COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant("9", COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0, 
                nextValue = spec[COMMAND_APPLY](nextValue));
                for (var k in spec) ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k] || (nextValue[k] = update(value[k], spec[k]));
                return nextValue;
            }
            var _prodInvariant = __webpack_require__(174), _assign = __webpack_require__(175), invariant = __webpack_require__(176), hasOwnProperty = {}.hasOwnProperty, COMMAND_PUSH = "$push", COMMAND_UNSHIFT = "$unshift", COMMAND_SPLICE = "$splice", COMMAND_SET = "$set", COMMAND_MERGE = "$merge", COMMAND_APPLY = "$apply", ALL_COMMANDS_LIST = [ COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY ], ALL_COMMANDS_SET = {};
            ALL_COMMANDS_LIST.forEach(function(command) {
                ALL_COMMANDS_SET[command] = !0;
            }), module.exports = update;
        }).call(exports, __webpack_require__(117));
    }, /* 174 */
    /***/
    function(module, exports) {
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
        "use strict";
        /**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */
        function reactProdInvariant(code) {
            for (var argCount = arguments.length - 1, message = "Minified React error #" + code + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + code, argIdx = 0; argIdx < argCount; argIdx++) message += "&args[]=" + encodeURIComponent(arguments[argIdx + 1]);
            message += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var error = new Error(message);
            // we don't care about reactProdInvariant's own frame
            throw error.name = "Invariant Violation", error.framesToPop = 1, error;
        }
        module.exports = reactProdInvariant;
    }, /* 175 */
    /***/
    function(module, exports) {
        "use strict";
        function toObject(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        function shouldUseNative() {
            try {
                if (!Object.assign) return !1;
                // Detect buggy property enumeration order in older V8 versions.
                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String("abc");
                if (// eslint-disable-line
                test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                });
                if ("0123456789" !== order2.join("")) return !1;
                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
            } catch (e) {
                // We don't expect any of the above to throw, but better to be safe.
                return !1;
            }
        }
        /* eslint-disable no-unused-vars */
        var hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = shouldUseNative() ? Object.assign : function(target, source) {
            for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (Object.getOwnPropertySymbols) {
                    symbols = Object.getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        };
    }, /* 176 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
            "use strict";
            function invariant(condition, format, a, b, c, d, e, f) {
                if (validateFormat(format), !condition) {
                    var error;
                    if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                        var args = [ a, b, c, d, e, f ], argIndex = 0;
                        error = new Error(format.replace(/%s/g, function() {
                            return args[argIndex++];
                        })), error.name = "Invariant Violation";
                    }
                    // we don't care about invariant's own frame
                    throw error.framesToPop = 1, error;
                }
            }
            /**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
            var validateFormat = function(format) {};
            "production" !== process.env.NODE_ENV && (validateFormat = function(format) {
                if (void 0 === format) throw new Error("invariant requires an error message argument");
            }), module.exports = invariant;
        }).call(exports, __webpack_require__(117));
    }, /* 177 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.dndDisabled = exports.itemCacheKey = exports.scrollToAlignment = exports.scrollToList = exports.overscanRowCount = exports.overscanListCount = exports.onDragEndRow = exports.onDropList = exports.onDropRow = exports.onMoveList = exports.onMoveRow = exports.listPreviewComponent = exports.itemPreviewComponent = exports.itemComponent = exports.listComponent = exports.height = exports.listWidth = exports.width = exports.lists = void 0;
        var _react = __webpack_require__(2);
        exports.lists = _react.PropTypes.array, exports.width = _react.PropTypes.number, 
        exports.listWidth = _react.PropTypes.number, exports.height = _react.PropTypes.number, 
        exports.listComponent = _react.PropTypes.func, exports.itemComponent = _react.PropTypes.func, 
        exports.itemPreviewComponent = _react.PropTypes.func, exports.listPreviewComponent = _react.PropTypes.func, 
        exports.onMoveRow = _react.PropTypes.func, exports.onMoveList = _react.PropTypes.func, 
        exports.onDropRow = _react.PropTypes.func, exports.onDropList = _react.PropTypes.func, 
        exports.onDragEndRow = _react.PropTypes.func, exports.overscanListCount = _react.PropTypes.number, 
        exports.overscanRowCount = _react.PropTypes.number, exports.scrollToList = _react.PropTypes.number, 
        exports.scrollToAlignment = _react.PropTypes.string, exports.itemCacheKey = _react.PropTypes.func, 
        exports.dndDisabled = _react.PropTypes.bool;
    }, /* 178 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ListPreview = exports.List = exports.ItemPreview = exports.Item = void 0;
        var _Item2 = __webpack_require__(179), _Item3 = _interopRequireDefault(_Item2), _ItemPreview2 = __webpack_require__(183), _ItemPreview3 = _interopRequireDefault(_ItemPreview2), _List2 = __webpack_require__(185), _List3 = _interopRequireDefault(_List2), _ListPreview2 = __webpack_require__(187), _ListPreview3 = _interopRequireDefault(_ListPreview2);
        exports.Item = _Item3["default"], exports.ItemPreview = _ItemPreview3["default"], 
        exports.List = _List3["default"], exports.ListPreview = _ListPreview3["default"];
    }, /* 179 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(136), _classnames2 = _interopRequireDefault(_classnames), _propTypes = __webpack_require__(180), _PureComponent2 = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(182)), _PureComponent3 = _interopRequireDefault(_PureComponent2), Item = function(_PureComponent) {
            function Item() {
                return _classCallCheck(this, Item), _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
            }
            return _inherits(Item, _PureComponent), _createClass(Item, [ {
                key: "render",
                value: function() {
                    var _props = this.props, row = _props.row, rowStyle = _props.rowStyle, connectDragSource = _props.connectDragSource, connectDropTarget = _props.connectDropTarget, isDragging = _props.isDragging, itemContainerClass = (0, 
                    _classnames2["default"])({
                        ItemContainer: !0,
                        ItemPlaceholder: isDragging
                    });
                    return connectDragSource(connectDropTarget(_react2["default"].createElement("div", {
                        className: "ItemWrapper",
                        style: rowStyle
                    }, _react2["default"].createElement("div", {
                        className: itemContainerClass
                    }, _react2["default"].createElement("div", {
                        className: "ItemContent"
                    }, _react2["default"].createElement("p", null, row.name))))));
                }
            } ]), Item;
        }(_PureComponent3["default"]);
        exports["default"] = Item;
    }, /* 180 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.connectDropTarget = exports.connectDragSource = exports.rowStyle = exports.isDragging = exports.listId = exports.rowId = exports.row = void 0;
        var _react = __webpack_require__(2), _propTypes = __webpack_require__(181);
        exports.row = _react.PropTypes.object.isRequired, exports.rowId = _propTypes.PropTypes.id.isRequired, 
        exports.listId = _propTypes.PropTypes.id.isRequired, exports.isDragging = _react.PropTypes.bool.isRequired, 
        exports.rowStyle = _react.PropTypes.object.isRequired, exports.connectDragSource = _react.PropTypes.func.isRequired, 
        exports.connectDropTarget = _react.PropTypes.func.isRequired;
    }, /* 181 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Wraps a singular React.PropTypes.[type] with
	 * a console.warn call that is only called if the
	 * prop is not undefined/null and is only called
	 * once.
	 * @param  {Object} propType React.PropType type
	 * @param  {String} message  Deprecation message
	 * @return {Function}        ReactPropTypes checkType
	 */
        function deprecate(propType, message) {
            var warned = !1;
            return function() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                var props = args[0], propName = args[1], prop = props[propName];
                return void 0 === prop || null === prop || warned || (warned = !0), propType.call.apply(propType, [ this ].concat(args));
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.PropTypes = void 0, exports.deprecate = deprecate;
        var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react);
        exports.PropTypes = {
            id: _react2["default"].PropTypes.oneOfType([ _react2["default"].PropTypes.string, _react2["default"].PropTypes.number, _react2["default"].PropTypes.symbol ]),
            decorator: _react2["default"].PropTypes.func
        };
    }, /* 182 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _reactAddonsShallowCompare = __webpack_require__(126), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), PureComponent = function(_Component) {
            function PureComponent() {
                return _classCallCheck(this, PureComponent), _possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).apply(this, arguments));
            }
            return _inherits(PureComponent, _Component), _createClass(PureComponent, [ {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            } ]), PureComponent;
        }(_react.Component);
        exports["default"] = PureComponent;
    }, /* 183 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(184), _PureComponent2 = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(182)), _PureComponent3 = _interopRequireDefault(_PureComponent2), ItemPreview = function(_PureComponent) {
            function ItemPreview() {
                return _classCallCheck(this, ItemPreview), _possibleConstructorReturn(this, (ItemPreview.__proto__ || Object.getPrototypeOf(ItemPreview)).apply(this, arguments));
            }
            return _inherits(ItemPreview, _PureComponent), _createClass(ItemPreview, [ {
                key: "render",
                value: function() {
                    // TODO: Grab a proper item width
                    var _props = this.props, row = _props.row, rowStyle = _props.rowStyle, width = _props.containerWidth, isGhost = _props.isGhost, height = rowStyle.height;
                    return _react2["default"].createElement("div", {
                        className: "ItemWrapper ItemPreviewWrapper",
                        style: {
                            width: width,
                            height: height
                        }
                    }, _react2["default"].createElement("div", {
                        className: "ItemContainer",
                        style: {
                            opacity: isGhost ? .5 : 1
                        }
                    }, _react2["default"].createElement("div", {
                        className: "ItemContent"
                    }, _react2["default"].createElement("p", null, row.name))));
                }
            } ]), ItemPreview;
        }(_PureComponent3["default"]);
        exports["default"] = ItemPreview;
    }, /* 184 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.isGhost = exports.containerWidth = exports.rowStyle = exports.rowId = exports.row = void 0;
        var _react = __webpack_require__(2), _propTypes = __webpack_require__(181);
        exports.row = _react.PropTypes.object.isRequired, exports.rowId = _propTypes.PropTypes.id.isRequired, 
        exports.rowStyle = _react.PropTypes.object.isRequired, exports.containerWidth = _react.PropTypes.number.isRequired, 
        exports.isGhost = _react.PropTypes.bool.isRequired;
    }, /* 185 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(136), _classnames2 = _interopRequireDefault(_classnames), _propTypes = __webpack_require__(186), _PureComponent2 = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(182)), _PureComponent3 = _interopRequireDefault(_PureComponent2), _ref = _react2["default"].createElement("div", {
            className: "ListFooter"
        }, _react2["default"].createElement("div", {
            className: "ListActions"
        }, _react2["default"].createElement("button", {
            className: "ListActionItem"
        }, "Add a task..."))), List = function(_PureComponent) {
            function List() {
                return _classCallCheck(this, List), _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
            }
            return _inherits(List, _PureComponent), _createClass(List, [ {
                key: "render",
                value: function() {
                    var _props = this.props, list = _props.list, listId = _props.listId, listStyle = _props.listStyle, connectDragSource = _props.connectDragSource, connectDropTarget = _props.connectDropTarget, isDragging = _props.isDragging, children = _props.children, listContainerClass = (0, 
                    _classnames2["default"])({
                        ListContainer: !0,
                        ListPlaceholder: isDragging
                    });
                    return _react2["default"].createElement("div", {
                        className: "ListWrapper",
                        style: listStyle
                    }, _react2["default"].createElement("div", {
                        className: listContainerClass
                    }, connectDragSource(_react2["default"].createElement("div", {
                        className: "ListHeader"
                    }, _react2["default"].createElement("span", {
                        className: "ListTitle"
                    }, "List ", listId, " (", list.rows.length, ")"))), connectDropTarget(_react2["default"].createElement("div", {
                        className: "ListContent"
                    }, children)), _ref));
                }
            } ]), List;
        }(_PureComponent3["default"]);
        exports["default"] = List;
    }, /* 186 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.connectDropTarget = exports.connectDragSource = exports.isDragging = exports.children = exports.rows = exports.listStyle = exports.listId = exports.list = void 0;
        var _react = __webpack_require__(2), _propTypes = __webpack_require__(181);
        exports.list = _react.PropTypes.object.isRequired, exports.listId = _propTypes.PropTypes.id.isRequired, 
        exports.listStyle = _react.PropTypes.object.isRequired, exports.rows = (0, _propTypes.deprecate)(_react.PropTypes.array, "`rows` is deprecated. Use `list.rows` instead"), 
        exports.children = _react.PropTypes.node, exports.isDragging = _react.PropTypes.bool.isRequired, 
        exports.connectDragSource = _react.PropTypes.func.isRequired, exports.connectDropTarget = _react.PropTypes.func.isRequired;
    }, /* 187 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(188), _PureComponent2 = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(182)), _PureComponent3 = _interopRequireDefault(_PureComponent2), ListPreview = function(_PureComponent) {
            function ListPreview() {
                return _classCallCheck(this, ListPreview), _possibleConstructorReturn(this, (ListPreview.__proto__ || Object.getPrototypeOf(ListPreview)).apply(this, arguments));
            }
            return _inherits(ListPreview, _PureComponent), _createClass(ListPreview, [ {
                key: "render",
                value: function() {
                    var _props = this.props, listId = _props.listId, listStyle = _props.listStyle, isGhost = _props.isGhost, width = listStyle.width, height = listStyle.height;
                    return _react2["default"].createElement("div", {
                        className: "ListWrapper ListPreviewWrapper",
                        style: {
                            width: width,
                            height: height
                        }
                    }, _react2["default"].createElement("div", {
                        className: "ListContainer",
                        style: {
                            opacity: isGhost ? .5 : 1
                        }
                    }, _react2["default"].createElement("div", {
                        className: "ListHeader"
                    }, _react2["default"].createElement("span", {
                        className: "ListTitle"
                    }, "List ", listId))));
                }
            } ]), ListPreview;
        }(_PureComponent3["default"]);
        exports["default"] = ListPreview;
    }, /* 188 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.isGhost = exports.listStyle = exports.listId = exports.list = void 0;
        var _react = __webpack_require__(2), _propTypes = __webpack_require__(181);
        exports.list = _react.PropTypes.object.isRequired, exports.listId = _propTypes.PropTypes.id.isRequired, 
        exports.listStyle = _react.PropTypes.object.isRequired, exports.isGhost = _react.PropTypes.bool.isRequired;
    }, /* 189 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        // TODO: Extract to utils dir
        function getStyles(_ref) {
            var currentOffset = _ref.currentOffset;
            if (!currentOffset) return {
                display: "none"
            };
            var x = currentOffset.x, y = currentOffset.y, transform = "translate(" + x + "px, " + y + "px)";
            return {
                transform: transform
            };
        }
        function collect(monitor) {
            return {
                item: monitor.getItem(),
                itemType: monitor.getItemType(),
                currentOffset: monitor.getSourceClientOffset(),
                isDragging: monitor.isDragging()
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactDnd = __webpack_require__(190), _types = __webpack_require__(249), ItemTypes = _interopRequireWildcard(_types), _propTypes = __webpack_require__(250), _updateLists = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(171)), _PureComponent2 = __webpack_require__(182), _PureComponent3 = _interopRequireDefault(_PureComponent2), KanbanDragLayer = function(_PureComponent) {
            function KanbanDragLayer(props) {
                _classCallCheck(this, KanbanDragLayer);
                var _this = _possibleConstructorReturn(this, (KanbanDragLayer.__proto__ || Object.getPrototypeOf(KanbanDragLayer)).call(this, props));
                return _this.renderItem = _this.renderItem.bind(_this), _this;
            }
            return _inherits(KanbanDragLayer, _PureComponent), _createClass(KanbanDragLayer, [ {
                key: "renderItem",
                value: function(type, item) {
                    var _props = this.props, lists = _props.lists, ItemPreview = _props.itemPreviewComponent, ListPreview = _props.listPreviewComponent;
                    switch (type) {
                      case ItemTypes.ROW_TYPE:
                        return _react2["default"].createElement(ItemPreview, {
                            row: item.row,
                            rowId: item.rowId,
                            rowStyle: item.rowStyle,
                            containerWidth: item.containerWidth,
                            isGhost: (0, _updateLists.findItemIndex)(lists, item.rowId) === -1
                        });

                      case ItemTypes.LIST_TYPE:
                        return _react2["default"].createElement(ListPreview, {
                            list: item.list,
                            listId: item.listId,
                            listStyle: item.listStyle,
                            isGhost: (0, _updateLists.findListIndex)(lists, item.listId) === -1
                        });

                      default:
                        return null;
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var _props2 = this.props, item = _props2.item, itemType = _props2.itemType, isDragging = _props2.isDragging;
                    return isDragging ? _react2["default"].createElement("div", {
                        className: "KanbanDragLayer"
                    }, _react2["default"].createElement("div", {
                        style: getStyles(this.props)
                    }, this.renderItem(itemType, item))) : null;
                }
            } ]), KanbanDragLayer;
        }(_PureComponent3["default"]);
        exports["default"] = (0, _reactDnd.DragLayer)(collect)(KanbanDragLayer);
    }, /* 190 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequire(obj) {
            return obj && obj.__esModule ? obj["default"] : obj;
        }
        exports.__esModule = !0;
        var _DragDropContext = __webpack_require__(191);
        exports.DragDropContext = _interopRequire(_DragDropContext);
        var _DragLayer = __webpack_require__(226);
        exports.DragLayer = _interopRequire(_DragLayer);
        var _DragSource = __webpack_require__(229);
        exports.DragSource = _interopRequire(_DragSource);
        var _DropTarget = __webpack_require__(244);
        exports.DropTarget = _interopRequire(_DropTarget);
    }, /* 191 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function DragDropContext(backendOrModule) {
            _utilsCheckDecoratorArguments2["default"].apply(void 0, [ "DragDropContext", "backend" ].concat(_slice.call(arguments)));
            // Auto-detect ES6 default export for people still using ES5
            var backend = void 0;
            backend = "object" == typeof backendOrModule && "function" == typeof backendOrModule["default"] ? backendOrModule["default"] : backendOrModule, 
            _invariant2["default"]("function" == typeof backend, "Expected the backend to be a function or an ES6 module exporting a default function. Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html");
            var childContext = {
                dragDropManager: new _dndCore.DragDropManager(backend)
            };
            return function(DecoratedComponent) {
                var displayName = DecoratedComponent.displayName || DecoratedComponent.name || "Component";
                return function(_Component) {
                    function DragDropContextContainer() {
                        _classCallCheck(this, DragDropContextContainer), _Component.apply(this, arguments);
                    }
                    return _inherits(DragDropContextContainer, _Component), DragDropContextContainer.prototype.getDecoratedComponentInstance = function() {
                        return this.refs.child;
                    }, DragDropContextContainer.prototype.getManager = function() {
                        return childContext.dragDropManager;
                    }, DragDropContextContainer.prototype.getChildContext = function() {
                        return childContext;
                    }, DragDropContextContainer.prototype.render = function() {
                        return _react2["default"].createElement(DecoratedComponent, _extends({}, this.props, {
                            ref: "child"
                        }));
                    }, _createClass(DragDropContextContainer, null, [ {
                        key: "DecoratedComponent",
                        value: DecoratedComponent,
                        enumerable: !0
                    }, {
                        key: "displayName",
                        value: "DragDropContext(" + displayName + ")",
                        enumerable: !0
                    }, {
                        key: "childContextTypes",
                        value: {
                            dragDropManager: _react.PropTypes.object.isRequired
                        },
                        enumerable: !0
                    } ]), DragDropContextContainer;
                }(_react.Component);
            };
        }
        exports.__esModule = !0;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _slice = Array.prototype.slice, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        exports["default"] = DragDropContext;
        var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _dndCore = __webpack_require__(192), _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _utilsCheckDecoratorArguments = __webpack_require__(225), _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
        module.exports = exports["default"];
    }, /* 192 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _DragDropManager = __webpack_require__(193);
        Object.defineProperty(exports, "DragDropManager", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_DragDropManager)["default"];
            }
        });
        var _DragSource = __webpack_require__(222);
        Object.defineProperty(exports, "DragSource", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_DragSource)["default"];
            }
        });
        var _DropTarget = __webpack_require__(223);
        Object.defineProperty(exports, "DropTarget", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_DropTarget)["default"];
            }
        });
        var _createTestBackend = __webpack_require__(224);
        Object.defineProperty(exports, "createTestBackend", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_createTestBackend)["default"];
            }
        });
    }, /* 193 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _createStore = __webpack_require__(194), _createStore2 = _interopRequireDefault(_createStore), _reducers = __webpack_require__(201), _reducers2 = _interopRequireDefault(_reducers), _dragDrop = __webpack_require__(203), dragDropActions = _interopRequireWildcard(_dragDrop), _DragDropMonitor = __webpack_require__(217), _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor), DragDropManager = function() {
            function DragDropManager(createBackend) {
                var context = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                _classCallCheck(this, DragDropManager);
                var store = (0, _createStore2["default"])(_reducers2["default"]);
                this.context = context, this.store = store, this.monitor = new _DragDropMonitor2["default"](store), 
                this.registry = this.monitor.registry, this.backend = createBackend(this), store.subscribe(this.handleRefCountChange.bind(this));
            }
            return _createClass(DragDropManager, [ {
                key: "handleRefCountChange",
                value: function() {
                    var shouldSetUp = this.store.getState().refCount > 0;
                    shouldSetUp && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !shouldSetUp && this.isSetUp && (this.backend.teardown(), 
                    this.isSetUp = !1);
                }
            }, {
                key: "getContext",
                value: function() {
                    return this.context;
                }
            }, {
                key: "getMonitor",
                value: function() {
                    return this.monitor;
                }
            }, {
                key: "getBackend",
                value: function() {
                    return this.backend;
                }
            }, {
                key: "getRegistry",
                value: function() {
                    return this.registry;
                }
            }, {
                key: "getActions",
                value: function() {
                    function bindActionCreator(actionCreator) {
                        return function() {
                            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                            var action = actionCreator.apply(manager, args);
                            "undefined" != typeof action && dispatch(action);
                        };
                    }
                    var manager = this, dispatch = this.store.dispatch;
                    return Object.keys(dragDropActions).filter(function(key) {
                        return "function" == typeof dragDropActions[key];
                    }).reduce(function(boundActions, key) {
                        var action = dragDropActions[key];
                        // eslint-disable-line no-param-reassign
                        return boundActions[key] = bindActionCreator(action), boundActions;
                    }, {});
                }
            } ]), DragDropManager;
        }();
        exports["default"] = DragDropManager;
    }, /* 194 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
        function createStore(reducer, preloadedState, enhancer) {
            function ensureCanMutateNextListeners() {
                nextListeners === currentListeners && (nextListeners = currentListeners.slice());
            }
            /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
            function getState() {
                return currentState;
            }
            /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
            function subscribe(listener) {
                if ("function" != typeof listener) throw new Error("Expected listener to be a function.");
                var isSubscribed = !0;
                return ensureCanMutateNextListeners(), nextListeners.push(listener), function() {
                    if (isSubscribed) {
                        isSubscribed = !1, ensureCanMutateNextListeners();
                        var index = nextListeners.indexOf(listener);
                        nextListeners.splice(index, 1);
                    }
                };
            }
            /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
            function dispatch(action) {
                if (!(0, _isPlainObject2["default"])(action)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" == typeof action.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (isDispatching) throw new Error("Reducers may not dispatch actions.");
                try {
                    isDispatching = !0, currentState = currentReducer(currentState, action);
                } finally {
                    isDispatching = !1;
                }
                for (var listeners = currentListeners = nextListeners, i = 0; i < listeners.length; i++) listeners[i]();
                return action;
            }
            /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
            function replaceReducer(nextReducer) {
                if ("function" != typeof nextReducer) throw new Error("Expected the nextReducer to be a function.");
                currentReducer = nextReducer, dispatch({
                    type: ActionTypes.INIT
                });
            }
            /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
            function observable() {
                var _ref, outerSubscribe = subscribe;
                return _ref = {
                    /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
                    subscribe: function(observer) {
                        function observeState() {
                            observer.next && observer.next(getState());
                        }
                        if ("object" != typeof observer) throw new TypeError("Expected the observer to be an object.");
                        observeState();
                        var unsubscribe = outerSubscribe(observeState);
                        return {
                            unsubscribe: unsubscribe
                        };
                    }
                }, _ref[_symbolObservable2["default"]] = function() {
                    return this;
                }, _ref;
            }
            var _ref2;
            if ("function" == typeof preloadedState && "undefined" == typeof enhancer && (enhancer = preloadedState, 
            preloadedState = void 0), "undefined" != typeof enhancer) {
                if ("function" != typeof enhancer) throw new Error("Expected the enhancer to be a function.");
                return enhancer(createStore)(reducer, preloadedState);
            }
            if ("function" != typeof reducer) throw new Error("Expected the reducer to be a function.");
            var currentReducer = reducer, currentState = preloadedState, currentListeners = [], nextListeners = currentListeners, isDispatching = !1;
            // When a store is created, an "INIT" action is dispatched so that every
            // reducer returns their initial state. This effectively populates
            // the initial state tree.
            return dispatch({
                type: ActionTypes.INIT
            }), _ref2 = {
                dispatch: dispatch,
                subscribe: subscribe,
                getState: getState,
                replaceReducer: replaceReducer
            }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
        }
        exports.__esModule = !0, exports.ActionTypes = void 0, exports["default"] = createStore;
        var _isPlainObject = __webpack_require__(195), _isPlainObject2 = _interopRequireDefault(_isPlainObject), _symbolObservable = __webpack_require__(198), _symbolObservable2 = _interopRequireDefault(_symbolObservable), ActionTypes = exports.ActionTypes = {
            INIT: "@@redux/INIT"
        };
    }, /* 195 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
        function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) return !1;
            var proto = getPrototype(value);
            if (null === proto) return !0;
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var baseGetTag = __webpack_require__(16), getPrototype = __webpack_require__(196), isObjectLike = __webpack_require__(45), objectTag = "[object Object]", funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectCtorString = funcToString.call(Object);
        module.exports = isPlainObject;
    }, /* 196 */
    /***/
    function(module, exports, __webpack_require__) {
        var overArg = __webpack_require__(197), getPrototype = overArg(Object.getPrototypeOf, Object);
        module.exports = getPrototype;
    }, /* 197 */
    /***/
    function(module, exports) {
        /**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
        function overArg(func, transform) {
            return function(arg) {
                return func(transform(arg));
            };
        }
        module.exports = overArg;
    }, /* 198 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(199);
    }, /* 199 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(global, module) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var root, _ponyfill = __webpack_require__(200), _ponyfill2 = _interopRequireDefault(_ponyfill);
            /* global window */
            root = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : module;
            var result = (0, _ponyfill2["default"])(root);
            exports["default"] = result;
        }).call(exports, function() {
            return this;
        }(), __webpack_require__(48)(module));
    }, /* 200 */
    /***/
    function(module, exports) {
        "use strict";
        function symbolObservablePonyfill(root) {
            var result, _Symbol = root.Symbol;
            return "function" == typeof _Symbol ? _Symbol.observable ? result = _Symbol.observable : (result = _Symbol("observable"), 
            _Symbol.observable = result) : result = "@@observable", result;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = symbolObservablePonyfill;
    }, /* 201 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function reduce() {
            var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, action = arguments[1];
            return {
                dirtyHandlerIds: (0, _dirtyHandlerIds2["default"])(state.dirtyHandlerIds, action, state.dragOperation),
                dragOffset: (0, _dragOffset2["default"])(state.dragOffset, action),
                refCount: (0, _refCount2["default"])(state.refCount, action),
                dragOperation: (0, _dragOperation2["default"])(state.dragOperation, action),
                stateId: (0, _stateId2["default"])(state.stateId)
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = reduce;
        var _dragOffset = __webpack_require__(202), _dragOffset2 = _interopRequireDefault(_dragOffset), _dragOperation = __webpack_require__(206), _dragOperation2 = _interopRequireDefault(_dragOperation), _refCount = __webpack_require__(208), _refCount2 = _interopRequireDefault(_refCount), _dirtyHandlerIds = __webpack_require__(209), _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds), _stateId = __webpack_require__(216), _stateId2 = _interopRequireDefault(_stateId);
    }, /* 202 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function areOffsetsEqual(offsetA, offsetB) {
            return offsetA === offsetB || offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
        }
        function dragOffset() {
            var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : initialState, action = arguments[1];
            switch (action.type) {
              case _dragDrop.BEGIN_DRAG:
                return {
                    initialSourceClientOffset: action.sourceClientOffset,
                    initialClientOffset: action.clientOffset,
                    clientOffset: action.clientOffset
                };

              case _dragDrop.HOVER:
                return areOffsetsEqual(state.clientOffset, action.clientOffset) ? state : _extends({}, state, {
                    clientOffset: action.clientOffset
                });

              case _dragDrop.END_DRAG:
              case _dragDrop.DROP:
                return initialState;

              default:
                return state;
            }
        }
        function getSourceClientOffset(state) {
            var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
            return clientOffset && initialClientOffset && initialSourceClientOffset ? {
                x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
                y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
            } : null;
        }
        function getDifferenceFromInitialOffset(state) {
            var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
            return clientOffset && initialClientOffset ? {
                x: clientOffset.x - initialClientOffset.x,
                y: clientOffset.y - initialClientOffset.y
            } : null;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        };
        exports["default"] = dragOffset, exports.getSourceClientOffset = getSourceClientOffset, 
        exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;
        var _dragDrop = __webpack_require__(203), initialState = {
            initialSourceClientOffset: null,
            initialClientOffset: null,
            clientOffset: null
        };
    }, /* 203 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function beginDrag(sourceIds) {
            var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                publishSource: !0,
                clientOffset: null
            }, publishSource = options.publishSource, clientOffset = options.clientOffset, getSourceClientOffset = options.getSourceClientOffset;
            (0, _invariant2["default"])((0, _isArray2["default"])(sourceIds), "Expected sourceIds to be an array.");
            var monitor = this.getMonitor(), registry = this.getRegistry();
            (0, _invariant2["default"])(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
            for (var i = 0; i < sourceIds.length; i++) (0, _invariant2["default"])(registry.getSource(sourceIds[i]), "Expected sourceIds to be registered.");
            for (var sourceId = null, _i = sourceIds.length - 1; _i >= 0; _i--) if (monitor.canDragSource(sourceIds[_i])) {
                sourceId = sourceIds[_i];
                break;
            }
            if (null !== sourceId) {
                var sourceClientOffset = null;
                clientOffset && ((0, _invariant2["default"])("function" == typeof getSourceClientOffset, "When clientOffset is provided, getSourceClientOffset must be a function."), 
                sourceClientOffset = getSourceClientOffset(sourceId));
                var source = registry.getSource(sourceId), item = source.beginDrag(monitor, sourceId);
                (0, _invariant2["default"])((0, _isObject2["default"])(item), "Item must be an object."), 
                registry.pinSource(sourceId);
                var itemType = registry.getSourceType(sourceId);
                return {
                    type: BEGIN_DRAG,
                    itemType: itemType,
                    item: item,
                    sourceId: sourceId,
                    clientOffset: clientOffset,
                    sourceClientOffset: sourceClientOffset,
                    isSourcePublic: publishSource
                };
            }
        }
        function publishDragSource() {
            var monitor = this.getMonitor();
            if (monitor.isDragging()) return {
                type: PUBLISH_DRAG_SOURCE
            };
        }
        function hover(targetIdsArg) {
            var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref$clientOffset = _ref.clientOffset, clientOffset = void 0 === _ref$clientOffset ? null : _ref$clientOffset;
            (0, _invariant2["default"])((0, _isArray2["default"])(targetIdsArg), "Expected targetIds to be an array.");
            var targetIds = targetIdsArg.slice(0), monitor = this.getMonitor(), registry = this.getRegistry();
            (0, _invariant2["default"])(monitor.isDragging(), "Cannot call hover while not dragging."), 
            (0, _invariant2["default"])(!monitor.didDrop(), "Cannot call hover after drop.");
            // First check invariants.
            for (var i = 0; i < targetIds.length; i++) {
                var targetId = targetIds[i];
                (0, _invariant2["default"])(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
                var target = registry.getTarget(targetId);
                (0, _invariant2["default"])(target, "Expected targetIds to be registered.");
            }
            // Remove those targetIds that don't match the targetType.  This
            // fixes shallow isOver which would only be non-shallow because of
            // non-matching targets.
            for (var draggedItemType = monitor.getItemType(), _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
                var _targetId = targetIds[_i2], targetType = registry.getTargetType(_targetId);
                (0, _matchesType2["default"])(targetType, draggedItemType) || targetIds.splice(_i2, 1);
            }
            // Finally call hover on all matching targets.
            for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
                var _targetId2 = targetIds[_i3], _target = registry.getTarget(_targetId2);
                _target.hover(monitor, _targetId2);
            }
            return {
                type: HOVER,
                targetIds: targetIds,
                clientOffset: clientOffset
            };
        }
        function drop() {
            var _this = this, monitor = this.getMonitor(), registry = this.getRegistry();
            (0, _invariant2["default"])(monitor.isDragging(), "Cannot call drop while not dragging."), 
            (0, _invariant2["default"])(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
            var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
            targetIds.reverse(), targetIds.forEach(function(targetId, index) {
                var target = registry.getTarget(targetId), dropResult = target.drop(monitor, targetId);
                (0, _invariant2["default"])("undefined" == typeof dropResult || (0, _isObject2["default"])(dropResult), "Drop result must either be an object or undefined."), 
                "undefined" == typeof dropResult && (dropResult = 0 === index ? {} : monitor.getDropResult()), 
                _this.store.dispatch({
                    type: DROP,
                    dropResult: dropResult
                });
            });
        }
        function endDrag() {
            var monitor = this.getMonitor(), registry = this.getRegistry();
            (0, _invariant2["default"])(monitor.isDragging(), "Cannot call endDrag while not dragging.");
            var sourceId = monitor.getSourceId(), source = registry.getSource(sourceId, !0);
            return source.endDrag(monitor, sourceId), registry.unpinSource(), {
                type: END_DRAG
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = void 0, 
        exports.beginDrag = beginDrag, exports.publishDragSource = publishDragSource, exports.hover = hover, 
        exports.drop = drop, exports.endDrag = endDrag;
        var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _isArray = __webpack_require__(46), _isArray2 = _interopRequireDefault(_isArray), _isObject = __webpack_require__(22), _isObject2 = _interopRequireDefault(_isObject), _matchesType = __webpack_require__(205), _matchesType2 = _interopRequireDefault(_matchesType), BEGIN_DRAG = exports.BEGIN_DRAG = "dnd-core/BEGIN_DRAG", PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE", HOVER = exports.HOVER = "dnd-core/HOVER", DROP = exports.DROP = "dnd-core/DROP", END_DRAG = exports.END_DRAG = "dnd-core/END_DRAG";
    }, /* 204 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
            "use strict";
            /**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
            var invariant = function(condition, format, a, b, c, d, e, f) {
                if ("production" !== process.env.NODE_ENV && void 0 === format) throw new Error("invariant requires an error message argument");
                if (!condition) {
                    var error;
                    if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                        var args = [ a, b, c, d, e, f ], argIndex = 0;
                        error = new Error(format.replace(/%s/g, function() {
                            return args[argIndex++];
                        })), error.name = "Invariant Violation";
                    }
                    // we don't care about invariant's own frame
                    throw error.framesToPop = 1, error;
                }
            };
            module.exports = invariant;
        }).call(exports, __webpack_require__(117));
    }, /* 205 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function matchesType(targetType, draggedItemType) {
            return (0, _isArray2["default"])(targetType) ? targetType.some(function(t) {
                return t === draggedItemType;
            }) : targetType === draggedItemType;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = matchesType;
        var _isArray = __webpack_require__(46), _isArray2 = _interopRequireDefault(_isArray);
    }, /* 206 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function dragOperation() {
            var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : initialState, action = arguments[1];
            switch (action.type) {
              case _dragDrop.BEGIN_DRAG:
                return _extends({}, state, {
                    itemType: action.itemType,
                    item: action.item,
                    sourceId: action.sourceId,
                    isSourcePublic: action.isSourcePublic,
                    dropResult: null,
                    didDrop: !1
                });

              case _dragDrop.PUBLISH_DRAG_SOURCE:
                return _extends({}, state, {
                    isSourcePublic: !0
                });

              case _dragDrop.HOVER:
                return _extends({}, state, {
                    targetIds: action.targetIds
                });

              case _registry.REMOVE_TARGET:
                return state.targetIds.indexOf(action.targetId) === -1 ? state : _extends({}, state, {
                    targetIds: (0, _without2["default"])(state.targetIds, action.targetId)
                });

              case _dragDrop.DROP:
                return _extends({}, state, {
                    dropResult: action.dropResult,
                    didDrop: !0,
                    targetIds: []
                });

              case _dragDrop.END_DRAG:
                return _extends({}, state, {
                    itemType: null,
                    item: null,
                    sourceId: null,
                    dropResult: null,
                    didDrop: !1,
                    isSourcePublic: null,
                    targetIds: []
                });

              default:
                return state;
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        };
        exports["default"] = dragOperation;
        var _without = __webpack_require__(103), _without2 = _interopRequireDefault(_without), _dragDrop = __webpack_require__(203), _registry = __webpack_require__(207), initialState = {
            itemType: null,
            item: null,
            sourceId: null,
            targetIds: [],
            dropResult: null,
            didDrop: !1,
            isSourcePublic: null
        };
    }, /* 207 */
    /***/
    function(module, exports) {
        "use strict";
        function addSource(sourceId) {
            return {
                type: ADD_SOURCE,
                sourceId: sourceId
            };
        }
        function addTarget(targetId) {
            return {
                type: ADD_TARGET,
                targetId: targetId
            };
        }
        function removeSource(sourceId) {
            return {
                type: REMOVE_SOURCE,
                sourceId: sourceId
            };
        }
        function removeTarget(targetId) {
            return {
                type: REMOVE_TARGET,
                targetId: targetId
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.addSource = addSource, exports.addTarget = addTarget, exports.removeSource = removeSource, 
        exports.removeTarget = removeTarget;
        var ADD_SOURCE = exports.ADD_SOURCE = "dnd-core/ADD_SOURCE", ADD_TARGET = exports.ADD_TARGET = "dnd-core/ADD_TARGET", REMOVE_SOURCE = exports.REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE", REMOVE_TARGET = exports.REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
    }, /* 208 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function refCount() {
            var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, action = arguments[1];
            switch (action.type) {
              case _registry.ADD_SOURCE:
              case _registry.ADD_TARGET:
                return state + 1;

              case _registry.REMOVE_SOURCE:
              case _registry.REMOVE_TARGET:
                return state - 1;

              default:
                return state;
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = refCount;
        var _registry = __webpack_require__(207);
    }, /* 209 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function dirtyHandlerIds() {
            var action = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NONE, 
            arguments[1]), dragOperation = arguments[2];
            switch (action.type) {
              case _dragDrop.HOVER:
                break;

              case _registry.ADD_SOURCE:
              case _registry.ADD_TARGET:
              case _registry.REMOVE_TARGET:
              case _registry.REMOVE_SOURCE:
                return NONE;

              case _dragDrop.BEGIN_DRAG:
              case _dragDrop.PUBLISH_DRAG_SOURCE:
              case _dragDrop.END_DRAG:
              case _dragDrop.DROP:
              default:
                return ALL;
            }
            var targetIds = action.targetIds, prevTargetIds = dragOperation.targetIds, result = (0, 
            _xor2["default"])(targetIds, prevTargetIds), didChange = !1;
            if (0 === result.length) {
                for (var i = 0; i < targetIds.length; i++) if (targetIds[i] !== prevTargetIds[i]) {
                    didChange = !0;
                    break;
                }
            } else didChange = !0;
            if (!didChange) return NONE;
            var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1], innermostTargetId = targetIds[targetIds.length - 1];
            return prevInnermostTargetId !== innermostTargetId && (prevInnermostTargetId && result.push(prevInnermostTargetId), 
            innermostTargetId && result.push(innermostTargetId)), result;
        }
        function areDirty(state, handlerIds) {
            return state !== NONE && (state === ALL || "undefined" == typeof handlerIds || (0, 
            _intersection2["default"])(handlerIds, state).length > 0);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = dirtyHandlerIds, exports.areDirty = areDirty;
        var _xor = __webpack_require__(210), _xor2 = _interopRequireDefault(_xor), _intersection = __webpack_require__(213), _intersection2 = _interopRequireDefault(_intersection), _dragDrop = __webpack_require__(203), _registry = __webpack_require__(207), NONE = [], ALL = [];
    }, /* 210 */
    /***/
    function(module, exports, __webpack_require__) {
        var arrayFilter = __webpack_require__(211), baseRest = __webpack_require__(29), baseXor = __webpack_require__(212), isArrayLikeObject = __webpack_require__(102), xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        module.exports = xor;
    }, /* 211 */
    /***/
    function(module, exports) {
        /**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
        function arrayFilter(array, predicate) {
            for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                var value = array[index];
                predicate(value, index, array) && (result[resIndex++] = value);
            }
            return result;
        }
        module.exports = arrayFilter;
    }, /* 212 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of methods like `_.xor`, without support for
	 * iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of values.
	 */
        function baseXor(arrays, iteratee, comparator) {
            var length = arrays.length;
            if (length < 2) return length ? baseUniq(arrays[0]) : [];
            for (var index = -1, result = Array(length); ++index < length; ) for (var array = arrays[index], othIndex = -1; ++othIndex < length; ) othIndex != index && (result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator));
            return baseUniq(baseFlatten(result, 1), iteratee, comparator);
        }
        var baseDifference = __webpack_require__(104), baseFlatten = __webpack_require__(61), baseUniq = __webpack_require__(64);
        module.exports = baseXor;
    }, /* 213 */
    /***/
    function(module, exports, __webpack_require__) {
        var arrayMap = __webpack_require__(105), baseIntersection = __webpack_require__(214), baseRest = __webpack_require__(29), castArrayLikeObject = __webpack_require__(215), intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        module.exports = intersection;
    }, /* 214 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
        function baseIntersection(arrays, iteratee, comparator) {
            for (var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = []; othIndex--; ) {
                var array = arrays[othIndex];
                othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee))), maxLength = nativeMin(array.length, maxLength), 
                caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : void 0;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer: for (;++index < length && result.length < maxLength; ) {
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                if (value = comparator || 0 !== value ? value : 0, !(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                    for (othIndex = othLength; --othIndex; ) {
                        var cache = caches[othIndex];
                        if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                    }
                    seen && seen.push(computed), result.push(value);
                }
            }
            return result;
        }
        var SetCache = __webpack_require__(65), arrayIncludes = __webpack_require__(91), arrayIncludesWith = __webpack_require__(96), arrayMap = __webpack_require__(105), baseUnary = __webpack_require__(52), cacheHas = __webpack_require__(97), nativeMin = Math.min;
        module.exports = baseIntersection;
    }, /* 215 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
        function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
        }
        var isArrayLikeObject = __webpack_require__(102);
        module.exports = castArrayLikeObject;
    }, /* 216 */
    /***/
    function(module, exports) {
        "use strict";
        function stateId() {
            var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return state + 1;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = stateId;
    }, /* 217 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _isArray = __webpack_require__(46), _isArray2 = _interopRequireDefault(_isArray), _matchesType = __webpack_require__(205), _matchesType2 = _interopRequireDefault(_matchesType), _HandlerRegistry = __webpack_require__(218), _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry), _dragOffset = __webpack_require__(202), _dirtyHandlerIds = __webpack_require__(209), DragDropMonitor = function() {
            function DragDropMonitor(store) {
                _classCallCheck(this, DragDropMonitor), this.store = store, this.registry = new _HandlerRegistry2["default"](store);
            }
            return _createClass(DragDropMonitor, [ {
                key: "subscribeToStateChange",
                value: function(listener) {
                    var _this = this, options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, handlerIds = options.handlerIds;
                    (0, _invariant2["default"])("function" == typeof listener, "listener must be a function."), 
                    (0, _invariant2["default"])("undefined" == typeof handlerIds || (0, _isArray2["default"])(handlerIds), "handlerIds, when specified, must be an array of strings.");
                    var prevStateId = this.store.getState().stateId, handleChange = function() {
                        var state = _this.store.getState(), currentStateId = state.stateId;
                        try {
                            var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, 
                            _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);
                            canSkipListener || listener();
                        } finally {
                            prevStateId = currentStateId;
                        }
                    };
                    return this.store.subscribe(handleChange);
                }
            }, {
                key: "subscribeToOffsetChange",
                value: function(listener) {
                    var _this2 = this;
                    (0, _invariant2["default"])("function" == typeof listener, "listener must be a function.");
                    var previousState = this.store.getState().dragOffset, handleChange = function() {
                        var nextState = _this2.store.getState().dragOffset;
                        nextState !== previousState && (previousState = nextState, listener());
                    };
                    return this.store.subscribe(handleChange);
                }
            }, {
                key: "canDragSource",
                value: function(sourceId) {
                    var source = this.registry.getSource(sourceId);
                    return (0, _invariant2["default"])(source, "Expected to find a valid source."), 
                    !this.isDragging() && source.canDrag(this, sourceId);
                }
            }, {
                key: "canDropOnTarget",
                value: function(targetId) {
                    var target = this.registry.getTarget(targetId);
                    if ((0, _invariant2["default"])(target, "Expected to find a valid target."), !this.isDragging() || this.didDrop()) return !1;
                    var targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
                    return (0, _matchesType2["default"])(targetType, draggedItemType) && target.canDrop(this, targetId);
                }
            }, {
                key: "isDragging",
                value: function() {
                    return Boolean(this.getItemType());
                }
            }, {
                key: "isDraggingSource",
                value: function(sourceId) {
                    var source = this.registry.getSource(sourceId, !0);
                    if ((0, _invariant2["default"])(source, "Expected to find a valid source."), !this.isDragging() || !this.isSourcePublic()) return !1;
                    var sourceType = this.registry.getSourceType(sourceId), draggedItemType = this.getItemType();
                    return sourceType === draggedItemType && source.isDragging(this, sourceId);
                }
            }, {
                key: "isOverTarget",
                value: function(targetId) {
                    var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        shallow: !1
                    }, shallow = options.shallow;
                    if (!this.isDragging()) return !1;
                    var targetType = this.registry.getTargetType(targetId), draggedItemType = this.getItemType();
                    if (!(0, _matchesType2["default"])(targetType, draggedItemType)) return !1;
                    var targetIds = this.getTargetIds();
                    if (!targetIds.length) return !1;
                    var index = targetIds.indexOf(targetId);
                    return shallow ? index === targetIds.length - 1 : index > -1;
                }
            }, {
                key: "getItemType",
                value: function() {
                    return this.store.getState().dragOperation.itemType;
                }
            }, {
                key: "getItem",
                value: function() {
                    return this.store.getState().dragOperation.item;
                }
            }, {
                key: "getSourceId",
                value: function() {
                    return this.store.getState().dragOperation.sourceId;
                }
            }, {
                key: "getTargetIds",
                value: function() {
                    return this.store.getState().dragOperation.targetIds;
                }
            }, {
                key: "getDropResult",
                value: function() {
                    return this.store.getState().dragOperation.dropResult;
                }
            }, {
                key: "didDrop",
                value: function() {
                    return this.store.getState().dragOperation.didDrop;
                }
            }, {
                key: "isSourcePublic",
                value: function() {
                    return this.store.getState().dragOperation.isSourcePublic;
                }
            }, {
                key: "getInitialClientOffset",
                value: function() {
                    return this.store.getState().dragOffset.initialClientOffset;
                }
            }, {
                key: "getInitialSourceClientOffset",
                value: function() {
                    return this.store.getState().dragOffset.initialSourceClientOffset;
                }
            }, {
                key: "getClientOffset",
                value: function() {
                    return this.store.getState().dragOffset.clientOffset;
                }
            }, {
                key: "getSourceClientOffset",
                value: function() {
                    return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
                }
            }, {
                key: "getDifferenceFromInitialOffset",
                value: function() {
                    return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
                }
            } ]), DragDropMonitor;
        }();
        exports["default"] = DragDropMonitor;
    }, /* 218 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function validateSourceContract(source) {
            (0, _invariant2["default"])("function" == typeof source.canDrag, "Expected canDrag to be a function."), 
            (0, _invariant2["default"])("function" == typeof source.beginDrag, "Expected beginDrag to be a function."), 
            (0, _invariant2["default"])("function" == typeof source.endDrag, "Expected endDrag to be a function.");
        }
        function validateTargetContract(target) {
            (0, _invariant2["default"])("function" == typeof target.canDrop, "Expected canDrop to be a function."), 
            (0, _invariant2["default"])("function" == typeof target.hover, "Expected hover to be a function."), 
            (0, _invariant2["default"])("function" == typeof target.drop, "Expected beginDrag to be a function.");
        }
        function validateType(type, allowArray) {
            return allowArray && (0, _isArray2["default"])(type) ? void type.forEach(function(t) {
                return validateType(t, !1);
            }) : void (0, _invariant2["default"])("string" == typeof type || "symbol" === ("undefined" == typeof type ? "undefined" : _typeof(type)), allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
        }
        function getNextHandlerId(role) {
            var id = (0, _getNextUniqueId2["default"])().toString();
            switch (role) {
              case HandlerRoles.SOURCE:
                return "S" + id;

              case HandlerRoles.TARGET:
                return "T" + id;

              default:
                (0, _invariant2["default"])(!1, "Unknown role: " + role);
            }
        }
        function parseRoleFromHandlerId(handlerId) {
            switch (handlerId[0]) {
              case "S":
                return HandlerRoles.SOURCE;

              case "T":
                return HandlerRoles.TARGET;

              default:
                (0, _invariant2["default"])(!1, "Cannot parse handler ID: " + handlerId);
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _isArray = __webpack_require__(46), _isArray2 = _interopRequireDefault(_isArray), _asap = __webpack_require__(219), _asap2 = _interopRequireDefault(_asap), _registry = __webpack_require__(207), _getNextUniqueId = __webpack_require__(221), _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId), HandlerRoles = {
            SOURCE: "SOURCE",
            TARGET: "TARGET"
        }, HandlerRegistry = function() {
            function HandlerRegistry(store) {
                _classCallCheck(this, HandlerRegistry), this.store = store, this.types = {}, this.handlers = {}, 
                this.pinnedSourceId = null, this.pinnedSource = null;
            }
            return _createClass(HandlerRegistry, [ {
                key: "addSource",
                value: function(type, source) {
                    validateType(type), validateSourceContract(source);
                    var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
                    return this.store.dispatch((0, _registry.addSource)(sourceId)), sourceId;
                }
            }, {
                key: "addTarget",
                value: function(type, target) {
                    validateType(type, !0), validateTargetContract(target);
                    var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
                    return this.store.dispatch((0, _registry.addTarget)(targetId)), targetId;
                }
            }, {
                key: "addHandler",
                value: function(role, type, handler) {
                    var id = getNextHandlerId(role);
                    return this.types[id] = type, this.handlers[id] = handler, id;
                }
            }, {
                key: "containsHandler",
                value: function(handler) {
                    var _this = this;
                    return Object.keys(this.handlers).some(function(key) {
                        return _this.handlers[key] === handler;
                    });
                }
            }, {
                key: "getSource",
                value: function(sourceId, includePinned) {
                    (0, _invariant2["default"])(this.isSourceId(sourceId), "Expected a valid source ID.");
                    var isPinned = includePinned && sourceId === this.pinnedSourceId, source = isPinned ? this.pinnedSource : this.handlers[sourceId];
                    return source;
                }
            }, {
                key: "getTarget",
                value: function(targetId) {
                    return (0, _invariant2["default"])(this.isTargetId(targetId), "Expected a valid target ID."), 
                    this.handlers[targetId];
                }
            }, {
                key: "getSourceType",
                value: function(sourceId) {
                    return (0, _invariant2["default"])(this.isSourceId(sourceId), "Expected a valid source ID."), 
                    this.types[sourceId];
                }
            }, {
                key: "getTargetType",
                value: function(targetId) {
                    return (0, _invariant2["default"])(this.isTargetId(targetId), "Expected a valid target ID."), 
                    this.types[targetId];
                }
            }, {
                key: "isSourceId",
                value: function(handlerId) {
                    var role = parseRoleFromHandlerId(handlerId);
                    return role === HandlerRoles.SOURCE;
                }
            }, {
                key: "isTargetId",
                value: function(handlerId) {
                    var role = parseRoleFromHandlerId(handlerId);
                    return role === HandlerRoles.TARGET;
                }
            }, {
                key: "removeSource",
                value: function(sourceId) {
                    var _this2 = this;
                    (0, _invariant2["default"])(this.getSource(sourceId), "Expected an existing source."), 
                    this.store.dispatch((0, _registry.removeSource)(sourceId)), (0, _asap2["default"])(function() {
                        delete _this2.handlers[sourceId], delete _this2.types[sourceId];
                    });
                }
            }, {
                key: "removeTarget",
                value: function(targetId) {
                    var _this3 = this;
                    (0, _invariant2["default"])(this.getTarget(targetId), "Expected an existing target."), 
                    this.store.dispatch((0, _registry.removeTarget)(targetId)), (0, _asap2["default"])(function() {
                        delete _this3.handlers[targetId], delete _this3.types[targetId];
                    });
                }
            }, {
                key: "pinSource",
                value: function(sourceId) {
                    var source = this.getSource(sourceId);
                    (0, _invariant2["default"])(source, "Expected an existing source."), this.pinnedSourceId = sourceId, 
                    this.pinnedSource = source;
                }
            }, {
                key: "unpinSource",
                value: function() {
                    (0, _invariant2["default"])(this.pinnedSource, "No source is pinned at the time."), 
                    this.pinnedSourceId = null, this.pinnedSource = null;
                }
            } ]), HandlerRegistry;
        }();
        exports["default"] = HandlerRegistry;
    }, /* 219 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function throwFirstError() {
            if (pendingErrors.length) throw pendingErrors.shift();
        }
        function asap(task) {
            var rawTask;
            rawTask = freeTasks.length ? freeTasks.pop() : new RawTask(), rawTask.task = task, 
            rawAsap(rawTask);
        }
        // We wrap tasks with recyclable task objects.  A task object implements
        // `call`, just like a function.
        function RawTask() {
            this.task = null;
        }
        // rawAsap provides everything we need except exception management.
        var rawAsap = __webpack_require__(220), freeTasks = [], pendingErrors = [], requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
        /**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
        module.exports = asap, // The sole purpose of wrapping the task is to catch the exception and recycle
        // the task object after its single use.
        RawTask.prototype.call = function() {
            try {
                this.task.call();
            } catch (error) {
                asap.onerror ? // This hook exists purely for testing purposes.
                // Its name will be periodically randomized to break any code that
                // depends on its existence.
                asap.onerror(error) : (// In a web browser, exceptions are not fatal. However, to avoid
                // slowing down the queue of pending tasks, we rethrow the error in a
                // lower priority turn.
                pendingErrors.push(error), requestErrorThrow());
            } finally {
                this.task = null, freeTasks[freeTasks.length] = this;
            }
        };
    }, /* 220 */
    /***/
    function(module, exports) {
        /* WEBPACK VAR INJECTION */
        (function(global) {
            "use strict";
            function rawAsap(task) {
                queue.length || (requestFlush(), flushing = !0), // Equivalent to push, but avoids a function call.
                queue[queue.length] = task;
            }
            // The flush function processes all tasks that have been scheduled with
            // `rawAsap` unless and until one of those tasks throws an exception.
            // If a task throws an exception, `flush` ensures that its state will remain
            // consistent and will resume where it left off when called again.
            // However, `flush` does not make any arrangements to be called again if an
            // exception is thrown.
            function flush() {
                for (;index < queue.length; ) {
                    var currentIndex = index;
                    // Prevent leaking memory for long chains of recursive calls to `asap`.
                    // If we call `asap` within tasks scheduled by `asap`, the queue will
                    // grow, but to avoid an O(n) walk for every task we execute, we don't
                    // shift tasks off the queue after they have been executed.
                    // Instead, we periodically shift 1024 tasks off the queue.
                    if (// Advance the index before calling the task. This ensures that we will
                    // begin flushing on the next task the task throws an error.
                    index += 1, queue[currentIndex].call(), index > capacity) {
                        // Manually shift all values starting at the index back to the
                        // beginning of the queue.
                        for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) queue[scan] = queue[scan + index];
                        queue.length -= index, index = 0;
                    }
                }
                queue.length = 0, index = 0, flushing = !1;
            }
            // To request a high priority event, we induce a mutation observer by toggling
            // the text of a text node between "1" and "-1".
            function makeRequestCallFromMutationObserver(callback) {
                var toggle = 1, observer = new BrowserMutationObserver(callback), node = document.createTextNode("");
                return observer.observe(node, {
                    characterData: !0
                }), function() {
                    toggle = -toggle, node.data = toggle;
                };
            }
            // The message channel technique was discovered by Malte Ubl and was the
            // original foundation for this library.
            // http://www.nonblocking.io/2011/06/windownexttick.html
            // Safari 6.0.5 (at least) intermittently fails to create message ports on a
            // page's first load. Thankfully, this version of Safari supports
            // MutationObservers, so we don't need to fall back in that case.
            // function makeRequestCallFromMessageChannel(callback) {
            //     var channel = new MessageChannel();
            //     channel.port1.onmessage = callback;
            //     return function requestCall() {
            //         channel.port2.postMessage(0);
            //     };
            // }
            // For reasons explained above, we are also unable to use `setImmediate`
            // under any circumstances.
            // Even if we were, there is another bug in Internet Explorer 10.
            // It is not sufficient to assign `setImmediate` to `requestFlush` because
            // `setImmediate` must be called *by name* and therefore must be wrapped in a
            // closure.
            // Never forget.
            // function makeRequestCallFromSetImmediate(callback) {
            //     return function requestCall() {
            //         setImmediate(callback);
            //     };
            // }
            // Safari 6.0 has a problem where timers will get lost while the user is
            // scrolling. This problem does not impact ASAP because Safari 6.0 supports
            // mutation observers, so that implementation is used instead.
            // However, if we ever elect to use timers in Safari, the prevalent work-around
            // is to add a scroll event listener that calls for a flush.
            // `setTimeout` does not call the passed callback if the delay is less than
            // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
            // even then.
            function makeRequestCallFromTimer(callback) {
                return function() {
                    function handleTimer() {
                        // Whichever timer succeeds will cancel both timers and
                        // execute the callback.
                        clearTimeout(timeoutHandle), clearInterval(intervalHandle), callback();
                    }
                    // We dispatch a timeout with a specified delay of 0 for engines that
                    // can reliably accommodate that request. This will usually be snapped
                    // to a 4 milisecond delay, but once we're flushing, there's no delay
                    // between events.
                    var timeoutHandle = setTimeout(handleTimer, 0), intervalHandle = setInterval(handleTimer, 50);
                };
            }
            // Use the fastest means possible to execute a task in its own turn, with
            // priority over other events including IO, animation, reflow, and redraw
            // events in browsers.
            //
            // An exception thrown by a task will permanently interrupt the processing of
            // subsequent tasks. The higher level `asap` function ensures that if an
            // exception is thrown by a task, that the task queue will continue flushing as
            // soon as possible, but if you use `rawAsap` directly, you are responsible to
            // either ensure that no exceptions are thrown from your task, or to manually
            // call `rawAsap.requestFlush` if an exception is thrown.
            module.exports = rawAsap;
            var requestFlush, queue = [], flushing = !1, index = 0, capacity = 1024, scope = "undefined" != typeof global ? global : self, BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
            // MutationObservers are desirable because they have high priority and work
            // reliably everywhere they are implemented.
            // They are implemented in all modern browsers.
            //
            // - Android 4-4.3
            // - Chrome 26-34
            // - Firefox 14-29
            // - Internet Explorer 11
            // - iPad Safari 6-7.1
            // - iPhone Safari 7-7.1
            // - Safari 6-7
            requestFlush = "function" == typeof BrowserMutationObserver ? makeRequestCallFromMutationObserver(flush) : makeRequestCallFromTimer(flush), 
            // `requestFlush` requests that the high priority event queue be flushed as
            // soon as possible.
            // This is useful to prevent an error thrown in a task from stalling the event
            // queue if the exception handled by Node.js’s
            // `process.on("uncaughtException")` or by a domain.
            rawAsap.requestFlush = requestFlush, // This is for `asap.js` only.
            // Its name will be periodically randomized to break any code that depends on
            // its existence.
            rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
        }).call(exports, function() {
            return this;
        }());
    }, /* 221 */
    /***/
    function(module, exports) {
        "use strict";
        function getNextUniqueId() {
            return nextUniqueId++;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = getNextUniqueId;
        var nextUniqueId = 0;
    }, /* 222 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), DragSource = function() {
            function DragSource() {
                _classCallCheck(this, DragSource);
            }
            return _createClass(DragSource, [ {
                key: "canDrag",
                value: function() {
                    return !0;
                }
            }, {
                key: "isDragging",
                value: function(monitor, handle) {
                    return handle === monitor.getSourceId();
                }
            }, {
                key: "endDrag",
                value: function() {}
            } ]), DragSource;
        }();
        exports["default"] = DragSource;
    }, /* 223 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), DropTarget = function() {
            function DropTarget() {
                _classCallCheck(this, DropTarget);
            }
            return _createClass(DropTarget, [ {
                key: "canDrop",
                value: function() {
                    return !0;
                }
            }, {
                key: "hover",
                value: function() {}
            }, {
                key: "drop",
                value: function() {}
            } ]), DropTarget;
        }();
        exports["default"] = DropTarget;
    }, /* 224 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function createBackend(manager) {
            return new TestBackend(manager);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        exports["default"] = createBackend;
        var _noop = __webpack_require__(100), _noop2 = _interopRequireDefault(_noop), TestBackend = function() {
            function TestBackend(manager) {
                _classCallCheck(this, TestBackend), this.actions = manager.getActions();
            }
            return _createClass(TestBackend, [ {
                key: "setup",
                value: function() {
                    this.didCallSetup = !0;
                }
            }, {
                key: "teardown",
                value: function() {
                    this.didCallTeardown = !0;
                }
            }, {
                key: "connectDragSource",
                value: function() {
                    return _noop2["default"];
                }
            }, {
                key: "connectDragPreview",
                value: function() {
                    return _noop2["default"];
                }
            }, {
                key: "connectDropTarget",
                value: function() {
                    return _noop2["default"];
                }
            }, {
                key: "simulateBeginDrag",
                value: function(sourceIds, options) {
                    this.actions.beginDrag(sourceIds, options);
                }
            }, {
                key: "simulatePublishDragSource",
                value: function() {
                    this.actions.publishDragSource();
                }
            }, {
                key: "simulateHover",
                value: function(targetIds, options) {
                    this.actions.hover(targetIds, options);
                }
            }, {
                key: "simulateDrop",
                value: function() {
                    this.actions.drop();
                }
            }, {
                key: "simulateEndDrag",
                value: function() {
                    this.actions.endDrag();
                }
            } ]), TestBackend;
        }();
    }, /* 225 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function checkDecoratorArguments(functionName, signature) {
                if ("production" !== process.env.NODE_ENV) {
                    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
                    for (var i = 0; i < args.length; i++) {
                        var arg = args[i];
                        if (arg && arg.prototype && arg.prototype.render) // eslint-disable-line no-console
                        return void console.error("You seem to be applying the arguments in the wrong order. " + ("It should be " + functionName + "(" + signature + ")(Component), not the other way around. ") + "Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order");
                    }
                }
            }
            exports.__esModule = !0, exports["default"] = checkDecoratorArguments, module.exports = exports["default"];
        }).call(exports, __webpack_require__(117));
    }, /* 226 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function DragLayer(collect) {
            var options = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return _utilsCheckDecoratorArguments2["default"].apply(void 0, [ "DragLayer", "collect[, options]" ].concat(_slice.call(arguments))), 
            _invariant2["default"]("function" == typeof collect, 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', "Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html", collect), 
            _invariant2["default"](_lodashIsPlainObject2["default"](options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', options), 
            function(DecoratedComponent) {
                var _options$arePropsEqual = options.arePropsEqual, arePropsEqual = void 0 === _options$arePropsEqual ? _utilsShallowEqualScalar2["default"] : _options$arePropsEqual, displayName = DecoratedComponent.displayName || DecoratedComponent.name || "Component";
                return function(_Component) {
                    function DragLayerContainer(props, context) {
                        _classCallCheck(this, DragLayerContainer), _Component.call(this, props), this.handleChange = this.handleChange.bind(this), 
                        this.manager = context.dragDropManager, _invariant2["default"]("object" == typeof this.manager, "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", displayName, displayName), 
                        this.state = this.getCurrentState();
                    }
                    return _inherits(DragLayerContainer, _Component), DragLayerContainer.prototype.getDecoratedComponentInstance = function() {
                        return this.refs.child;
                    }, DragLayerContainer.prototype.shouldComponentUpdate = function(nextProps, nextState) {
                        return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2["default"](nextState, this.state);
                    }, _createClass(DragLayerContainer, null, [ {
                        key: "DecoratedComponent",
                        value: DecoratedComponent,
                        enumerable: !0
                    }, {
                        key: "displayName",
                        value: "DragLayer(" + displayName + ")",
                        enumerable: !0
                    }, {
                        key: "contextTypes",
                        value: {
                            dragDropManager: _react.PropTypes.object.isRequired
                        },
                        enumerable: !0
                    } ]), DragLayerContainer.prototype.componentDidMount = function() {
                        this.isCurrentlyMounted = !0;
                        var monitor = this.manager.getMonitor();
                        this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange), 
                        this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange), 
                        this.handleChange();
                    }, DragLayerContainer.prototype.componentWillUnmount = function() {
                        this.isCurrentlyMounted = !1, this.unsubscribeFromOffsetChange(), this.unsubscribeFromStateChange();
                    }, DragLayerContainer.prototype.handleChange = function() {
                        if (this.isCurrentlyMounted) {
                            var nextState = this.getCurrentState();
                            _utilsShallowEqual2["default"](nextState, this.state) || this.setState(nextState);
                        }
                    }, DragLayerContainer.prototype.getCurrentState = function() {
                        var monitor = this.manager.getMonitor();
                        return collect(monitor);
                    }, DragLayerContainer.prototype.render = function() {
                        return _react2["default"].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
                            ref: "child"
                        }));
                    }, DragLayerContainer;
                }(_react.Component);
            };
        }
        exports.__esModule = !0;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _slice = Array.prototype.slice, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        exports["default"] = DragLayer;
        var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _utilsShallowEqual = __webpack_require__(227), _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual), _utilsShallowEqualScalar = __webpack_require__(228), _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar), _lodashIsPlainObject = __webpack_require__(195), _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject), _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _utilsCheckDecoratorArguments = __webpack_require__(225), _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
        module.exports = exports["default"];
    }, /* 227 */
    /***/
    function(module, exports) {
        "use strict";
        function shallowEqual(objA, objB) {
            if (objA === objB) return !0;
            var keysA = Object.keys(objA), keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) return !1;
            for (var hasOwn = Object.prototype.hasOwnProperty, i = 0; i < keysA.length; i++) {
                if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) return !1;
                var valA = objA[keysA[i]], valB = objB[keysA[i]];
                if (valA !== valB) return !1;
            }
            return !0;
        }
        exports.__esModule = !0, exports["default"] = shallowEqual, module.exports = exports["default"];
    }, /* 228 */
    /***/
    function(module, exports) {
        "use strict";
        function shallowEqualScalar(objA, objB) {
            if (objA === objB) return !0;
            if ("object" != typeof objA || null === objA || "object" != typeof objB || null === objB) return !1;
            var keysA = Object.keys(objA), keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) return !1;
            for (var hasOwn = Object.prototype.hasOwnProperty, i = 0; i < keysA.length; i++) {
                if (!hasOwn.call(objB, keysA[i])) return !1;
                var valA = objA[keysA[i]], valB = objB[keysA[i]];
                if (valA !== valB || "object" == typeof valA || "object" == typeof valB) return !1;
            }
            return !0;
        }
        exports.__esModule = !0, exports["default"] = shallowEqualScalar, module.exports = exports["default"];
    }, /* 229 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function DragSource(type, spec, collect) {
            var options = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
            _utilsCheckDecoratorArguments2["default"].apply(void 0, [ "DragSource", "type, spec, collect[, options]" ].concat(_slice.call(arguments)));
            var getType = type;
            "function" != typeof type && (_invariant2["default"](_utilsIsValidType2["default"](type), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', type), 
            getType = function() {
                return type;
            }), _invariant2["default"](_lodashIsPlainObject2["default"](spec), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', spec);
            var createSource = _createSourceFactory2["default"](spec);
            return _invariant2["default"]("function" == typeof collect, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect), 
            _invariant2["default"](_lodashIsPlainObject2["default"](options), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect), 
            function(DecoratedComponent) {
                return _decorateHandler2["default"]({
                    connectBackend: function(backend, sourceId) {
                        return backend.connectDragSource(sourceId);
                    },
                    containerDisplayName: "DragSource",
                    createHandler: createSource,
                    registerHandler: _registerSource2["default"],
                    createMonitor: _createSourceMonitor2["default"],
                    createConnector: _createSourceConnector2["default"],
                    DecoratedComponent: DecoratedComponent,
                    getType: getType,
                    collect: collect,
                    options: options
                });
            };
        }
        exports.__esModule = !0;
        var _slice = Array.prototype.slice;
        exports["default"] = DragSource;
        var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _lodashIsPlainObject = __webpack_require__(195), _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject), _utilsCheckDecoratorArguments = __webpack_require__(225), _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments), _decorateHandler = __webpack_require__(230), _decorateHandler2 = _interopRequireDefault(_decorateHandler), _registerSource = __webpack_require__(236), _registerSource2 = _interopRequireDefault(_registerSource), _createSourceFactory = __webpack_require__(237), _createSourceFactory2 = _interopRequireDefault(_createSourceFactory), _createSourceMonitor = __webpack_require__(238), _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor), _createSourceConnector = __webpack_require__(239), _createSourceConnector2 = _interopRequireDefault(_createSourceConnector), _utilsIsValidType = __webpack_require__(243), _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);
        module.exports = exports["default"];
    }, /* 230 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            function decorateHandler(_ref) {
                var DecoratedComponent = _ref.DecoratedComponent, createHandler = _ref.createHandler, createMonitor = _ref.createMonitor, createConnector = _ref.createConnector, registerHandler = _ref.registerHandler, containerDisplayName = _ref.containerDisplayName, getType = _ref.getType, collect = _ref.collect, options = _ref.options, _options$arePropsEqual = options.arePropsEqual, arePropsEqual = void 0 === _options$arePropsEqual ? _utilsShallowEqualScalar2["default"] : _options$arePropsEqual, displayName = DecoratedComponent.displayName || DecoratedComponent.name || "Component";
                return function(_Component) {
                    function DragDropContainer(props, context) {
                        _classCallCheck(this, DragDropContainer), _Component.call(this, props, context), 
                        this.handleChange = this.handleChange.bind(this), this.handleChildRef = this.handleChildRef.bind(this), 
                        _invariant2["default"]("object" == typeof this.context.dragDropManager, "Could not find the drag and drop manager in the context of %s. Make sure to wrap the top-level component of your app with DragDropContext. Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", displayName, displayName), 
                        this.manager = this.context.dragDropManager, this.handlerMonitor = createMonitor(this.manager), 
                        this.handlerConnector = createConnector(this.manager.getBackend()), this.handler = createHandler(this.handlerMonitor), 
                        this.disposable = new _disposables.SerialDisposable(), this.receiveProps(props), 
                        this.state = this.getCurrentState(), this.dispose();
                    }
                    return _inherits(DragDropContainer, _Component), DragDropContainer.prototype.getHandlerId = function() {
                        return this.handlerId;
                    }, DragDropContainer.prototype.getDecoratedComponentInstance = function() {
                        return this.decoratedComponentInstance;
                    }, DragDropContainer.prototype.shouldComponentUpdate = function(nextProps, nextState) {
                        return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2["default"](nextState, this.state);
                    }, _createClass(DragDropContainer, null, [ {
                        key: "DecoratedComponent",
                        value: DecoratedComponent,
                        enumerable: !0
                    }, {
                        key: "displayName",
                        value: containerDisplayName + "(" + displayName + ")",
                        enumerable: !0
                    }, {
                        key: "contextTypes",
                        value: {
                            dragDropManager: _react.PropTypes.object.isRequired
                        },
                        enumerable: !0
                    } ]), DragDropContainer.prototype.componentDidMount = function() {
                        this.isCurrentlyMounted = !0, this.disposable = new _disposables.SerialDisposable(), 
                        this.currentType = null, this.receiveProps(this.props), this.handleChange();
                    }, DragDropContainer.prototype.componentWillReceiveProps = function(nextProps) {
                        arePropsEqual(nextProps, this.props) || (this.receiveProps(nextProps), this.handleChange());
                    }, DragDropContainer.prototype.componentWillUnmount = function() {
                        this.dispose(), this.isCurrentlyMounted = !1;
                    }, DragDropContainer.prototype.receiveProps = function(props) {
                        this.handler.receiveProps(props), this.receiveType(getType(props));
                    }, DragDropContainer.prototype.receiveType = function(type) {
                        if (type !== this.currentType) {
                            this.currentType = type;
                            var _registerHandler = registerHandler(type, this.handler, this.manager), handlerId = _registerHandler.handlerId, unregister = _registerHandler.unregister;
                            this.handlerId = handlerId, this.handlerMonitor.receiveHandlerId(handlerId), this.handlerConnector.receiveHandlerId(handlerId);
                            var globalMonitor = this.manager.getMonitor(), unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, {
                                handlerIds: [ handlerId ]
                            });
                            this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
                        }
                    }, DragDropContainer.prototype.handleChange = function() {
                        if (this.isCurrentlyMounted) {
                            var nextState = this.getCurrentState();
                            _utilsShallowEqual2["default"](nextState, this.state) || this.setState(nextState);
                        }
                    }, DragDropContainer.prototype.dispose = function() {
                        this.disposable.dispose(), this.handlerConnector.receiveHandlerId(null);
                    }, DragDropContainer.prototype.handleChildRef = function(component) {
                        this.decoratedComponentInstance = component, this.handler.receiveComponent(component);
                    }, DragDropContainer.prototype.getCurrentState = function() {
                        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);
                        return "production" !== process.env.NODE_ENV && _invariant2["default"](_lodashIsPlainObject2["default"](nextState), "Expected `collect` specified as the second argument to %s for %s to return a plain object of props to inject. Instead, received %s.", containerDisplayName, displayName, nextState), 
                        nextState;
                    }, DragDropContainer.prototype.render = function() {
                        return _react2["default"].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
                            ref: this.handleChildRef
                        }));
                    }, DragDropContainer;
                }(_react.Component);
            }
            exports.__esModule = !0;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }();
            exports["default"] = decorateHandler;
            var _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _disposables = __webpack_require__(231), _utilsShallowEqual = __webpack_require__(227), _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual), _utilsShallowEqualScalar = __webpack_require__(228), _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar), _lodashIsPlainObject = __webpack_require__(195), _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject), _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant);
            module.exports = exports["default"];
        }).call(exports, __webpack_require__(117));
    }, /* 231 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var _interopRequireWildcard = function(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        };
        exports.__esModule = !0;
        var _isDisposable2 = __webpack_require__(232), _isDisposable3 = _interopRequireWildcard(_isDisposable2);
        exports.isDisposable = _isDisposable3["default"];
        var _Disposable2 = __webpack_require__(233), _Disposable3 = _interopRequireWildcard(_Disposable2);
        exports.Disposable = _Disposable3["default"];
        var _CompositeDisposable2 = __webpack_require__(234), _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);
        exports.CompositeDisposable = _CompositeDisposable3["default"];
        var _SerialDisposable2 = __webpack_require__(235), _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);
        exports.SerialDisposable = _SerialDisposable3["default"];
    }, /* 232 */
    /***/
    function(module, exports) {
        "use strict";
        function isDisposable(obj) {
            return Boolean(obj && "function" == typeof obj.dispose);
        }
        exports.__esModule = !0, exports["default"] = isDisposable, module.exports = exports["default"];
    }, /* 233 */
    /***/
    function(module, exports) {
        "use strict";
        var _classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        exports.__esModule = !0;
        var noop = function() {}, Disposable = function() {
            function Disposable(action) {
                _classCallCheck(this, Disposable), this.isDisposed = !1, this.action = action || noop;
            }
            return Disposable.prototype.dispose = function() {
                this.isDisposed || (this.action.call(null), this.isDisposed = !0);
            }, _createClass(Disposable, null, [ {
                key: "empty",
                enumerable: !0,
                value: {
                    dispose: noop
                }
            } ]), Disposable;
        }();
        exports["default"] = Disposable, module.exports = exports["default"];
    }, /* 234 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var _interopRequireWildcard = function(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }, _classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        };
        exports.__esModule = !0;
        var _isDisposable = __webpack_require__(232), _isDisposable2 = _interopRequireWildcard(_isDisposable), CompositeDisposable = function() {
            function CompositeDisposable() {
                for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) disposables[_key] = arguments[_key];
                _classCallCheck(this, CompositeDisposable), Array.isArray(disposables[0]) && 1 === disposables.length && (disposables = disposables[0]);
                for (var i = 0; i < disposables.length; i++) if (!_isDisposable2["default"](disposables[i])) throw new Error("Expected a disposable");
                this.disposables = disposables, this.isDisposed = !1;
            }
            /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */
            /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */
            /**
	   * Disposes all disposables in the group and removes them from the group.
	   */
            return CompositeDisposable.prototype.add = function(item) {
                this.isDisposed ? item.dispose() : this.disposables.push(item);
            }, CompositeDisposable.prototype.remove = function(item) {
                if (this.isDisposed) return !1;
                var index = this.disposables.indexOf(item);
                return index !== -1 && (this.disposables.splice(index, 1), item.dispose(), !0);
            }, CompositeDisposable.prototype.dispose = function() {
                if (!this.isDisposed) {
                    for (var len = this.disposables.length, currentDisposables = new Array(len), i = 0; i < len; i++) currentDisposables[i] = this.disposables[i];
                    this.isDisposed = !0, this.disposables = [], this.length = 0;
                    for (var i = 0; i < len; i++) currentDisposables[i].dispose();
                }
            }, CompositeDisposable;
        }();
        exports["default"] = CompositeDisposable, module.exports = exports["default"];
    }, /* 235 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var _interopRequireWildcard = function(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }, _classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        };
        exports.__esModule = !0;
        var _isDisposable = __webpack_require__(232), _isDisposable2 = _interopRequireWildcard(_isDisposable), SerialDisposable = function() {
            function SerialDisposable() {
                _classCallCheck(this, SerialDisposable), this.isDisposed = !1, this.current = null;
            }
            /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */
            /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */
            /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */
            return SerialDisposable.prototype.getDisposable = function() {
                return this.current;
            }, SerialDisposable.prototype.setDisposable = function() {
                var value = void 0 === arguments[0] ? null : arguments[0];
                if (null != value && !_isDisposable2["default"](value)) throw new Error("Expected either an empty value or a valid disposable");
                var isDisposed = this.isDisposed, previous = void 0;
                isDisposed || (previous = this.current, this.current = value), previous && previous.dispose(), 
                isDisposed && value && value.dispose();
            }, SerialDisposable.prototype.dispose = function() {
                if (!this.isDisposed) {
                    this.isDisposed = !0;
                    var previous = this.current;
                    this.current = null, previous && previous.dispose();
                }
            }, SerialDisposable;
        }();
        exports["default"] = SerialDisposable, module.exports = exports["default"];
    }, /* 236 */
    /***/
    function(module, exports) {
        "use strict";
        function registerSource(type, source, manager) {
            function unregisterSource() {
                registry.removeSource(sourceId);
            }
            var registry = manager.getRegistry(), sourceId = registry.addSource(type, source);
            return {
                handlerId: sourceId,
                unregister: unregisterSource
            };
        }
        exports.__esModule = !0, exports["default"] = registerSource, module.exports = exports["default"];
    }, /* 237 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function createSourceFactory(spec) {
                Object.keys(spec).forEach(function(key) {
                    _invariant2["default"](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(", "), key), 
                    _invariant2["default"]("function" == typeof spec[key], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html", key, key, spec[key]);
                }), REQUIRED_SPEC_METHODS.forEach(function(key) {
                    _invariant2["default"]("function" == typeof spec[key], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html", key, key, spec[key]);
                });
                var Source = function() {
                    function Source(monitor) {
                        _classCallCheck(this, Source), this.monitor = monitor, this.props = null, this.component = null;
                    }
                    return Source.prototype.receiveProps = function(props) {
                        this.props = props;
                    }, Source.prototype.receiveComponent = function(component) {
                        this.component = component;
                    }, Source.prototype.canDrag = function() {
                        return !spec.canDrag || spec.canDrag(this.props, this.monitor);
                    }, Source.prototype.isDragging = function(globalMonitor, sourceId) {
                        return spec.isDragging ? spec.isDragging(this.props, this.monitor) : sourceId === globalMonitor.getSourceId();
                    }, Source.prototype.beginDrag = function() {
                        var item = spec.beginDrag(this.props, this.monitor, this.component);
                        return "production" !== process.env.NODE_ENV && _invariant2["default"](_lodashIsPlainObject2["default"](item), "beginDrag() must return a plain object that represents the dragged item. Instead received %s. Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html", item), 
                        item;
                    }, Source.prototype.endDrag = function() {
                        spec.endDrag && spec.endDrag(this.props, this.monitor, this.component);
                    }, Source;
                }();
                return function(monitor) {
                    return new Source(monitor);
                };
            }
            exports.__esModule = !0, exports["default"] = createSourceFactory;
            var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _lodashIsPlainObject = __webpack_require__(195), _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject), ALLOWED_SPEC_METHODS = [ "canDrag", "beginDrag", "canDrag", "isDragging", "endDrag" ], REQUIRED_SPEC_METHODS = [ "beginDrag" ];
            module.exports = exports["default"];
        }).call(exports, __webpack_require__(117));
    }, /* 238 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function createSourceMonitor(manager) {
            return new SourceMonitor(manager);
        }
        exports.__esModule = !0, exports["default"] = createSourceMonitor;
        var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), isCallingCanDrag = !1, isCallingIsDragging = !1, SourceMonitor = function() {
            function SourceMonitor(manager) {
                _classCallCheck(this, SourceMonitor), this.internalMonitor = manager.getMonitor();
            }
            return SourceMonitor.prototype.receiveHandlerId = function(sourceId) {
                this.sourceId = sourceId;
            }, SourceMonitor.prototype.canDrag = function() {
                _invariant2["default"](!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html");
                try {
                    return isCallingCanDrag = !0, this.internalMonitor.canDragSource(this.sourceId);
                } finally {
                    isCallingCanDrag = !1;
                }
            }, SourceMonitor.prototype.isDragging = function() {
                _invariant2["default"](!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html");
                try {
                    return isCallingIsDragging = !0, this.internalMonitor.isDraggingSource(this.sourceId);
                } finally {
                    isCallingIsDragging = !1;
                }
            }, SourceMonitor.prototype.getItemType = function() {
                return this.internalMonitor.getItemType();
            }, SourceMonitor.prototype.getItem = function() {
                return this.internalMonitor.getItem();
            }, SourceMonitor.prototype.getDropResult = function() {
                return this.internalMonitor.getDropResult();
            }, SourceMonitor.prototype.didDrop = function() {
                return this.internalMonitor.didDrop();
            }, SourceMonitor.prototype.getInitialClientOffset = function() {
                return this.internalMonitor.getInitialClientOffset();
            }, SourceMonitor.prototype.getInitialSourceClientOffset = function() {
                return this.internalMonitor.getInitialSourceClientOffset();
            }, SourceMonitor.prototype.getSourceClientOffset = function() {
                return this.internalMonitor.getSourceClientOffset();
            }, SourceMonitor.prototype.getClientOffset = function() {
                return this.internalMonitor.getClientOffset();
            }, SourceMonitor.prototype.getDifferenceFromInitialOffset = function() {
                return this.internalMonitor.getDifferenceFromInitialOffset();
            }, SourceMonitor;
        }();
        module.exports = exports["default"];
    }, /* 239 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function createSourceConnector(backend) {
            function reconnectDragSource() {
                disconnectCurrentDragSource && (disconnectCurrentDragSource(), disconnectCurrentDragSource = null), 
                currentHandlerId && currentDragSourceNode && (disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions));
            }
            function reconnectDragPreview() {
                disconnectCurrentDragPreview && (disconnectCurrentDragPreview(), disconnectCurrentDragPreview = null), 
                currentHandlerId && currentDragPreviewNode && (disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions));
            }
            function receiveHandlerId(handlerId) {
                handlerId !== currentHandlerId && (currentHandlerId = handlerId, reconnectDragSource(), 
                reconnectDragPreview());
            }
            var currentHandlerId = void 0, currentDragSourceNode = void 0, currentDragSourceOptions = void 0, disconnectCurrentDragSource = void 0, currentDragPreviewNode = void 0, currentDragPreviewOptions = void 0, disconnectCurrentDragPreview = void 0, hooks = _wrapConnectorHooks2["default"]({
                dragSource: function(node, options) {
                    node === currentDragSourceNode && _areOptionsEqual2["default"](options, currentDragSourceOptions) || (currentDragSourceNode = node, 
                    currentDragSourceOptions = options, reconnectDragSource());
                },
                dragPreview: function(node, options) {
                    node === currentDragPreviewNode && _areOptionsEqual2["default"](options, currentDragPreviewOptions) || (currentDragPreviewNode = node, 
                    currentDragPreviewOptions = options, reconnectDragPreview());
                }
            });
            return {
                receiveHandlerId: receiveHandlerId,
                hooks: hooks
            };
        }
        exports.__esModule = !0, exports["default"] = createSourceConnector;
        var _wrapConnectorHooks = __webpack_require__(240), _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks), _areOptionsEqual = __webpack_require__(242), _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);
        module.exports = exports["default"];
    }, /* 240 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function throwIfCompositeComponentElement(element) {
            // Custom components can no longer be wrapped directly in React DnD 2.0
            // so that we don't need to depend on findDOMNode() from react-dom.
            if ("string" != typeof element.type) {
                var displayName = element.type.displayName || element.type.name || "the component";
                throw new Error("Only native element nodes can now be passed to React DnD connectors. " + ("You can either wrap " + displayName + " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
            }
        }
        function wrapHookToRecognizeElement(hook) {
            return function() {
                var elementOrNode = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], options = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                // When passed a node, call the hook straight away.
                if (!_react.isValidElement(elementOrNode)) {
                    var node = elementOrNode;
                    return void hook(node, options);
                }
                // If passed a ReactElement, clone it and attach this function as a ref.
                // This helps us achieve a neat API where user doesn't even know that refs
                // are being used under the hood.
                var element = elementOrNode;
                throwIfCompositeComponentElement(element);
                // When no options are passed, use the hook directly
                var ref = options ? function(node) {
                    return hook(node, options);
                } : hook;
                return _utilsCloneWithRef2["default"](element, ref);
            };
        }
        function wrapConnectorHooks(hooks) {
            var wrappedHooks = {};
            return Object.keys(hooks).forEach(function(key) {
                var hook = hooks[key], wrappedHook = wrapHookToRecognizeElement(hook);
                wrappedHooks[key] = function() {
                    return wrappedHook;
                };
            }), wrappedHooks;
        }
        exports.__esModule = !0, exports["default"] = wrapConnectorHooks;
        var _utilsCloneWithRef = __webpack_require__(241), _utilsCloneWithRef2 = _interopRequireDefault(_utilsCloneWithRef), _react = __webpack_require__(2);
        module.exports = exports["default"];
    }, /* 241 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function cloneWithRef(element, newRef) {
            var previousRef = element.ref;
            return _invariant2["default"]("string" != typeof previousRef, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"), 
            previousRef ? _react.cloneElement(element, {
                ref: function(node) {
                    newRef(node), previousRef && previousRef(node);
                }
            }) : _react.cloneElement(element, {
                ref: newRef
            });
        }
        exports.__esModule = !0, exports["default"] = cloneWithRef;
        var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _react = __webpack_require__(2);
        module.exports = exports["default"];
    }, /* 242 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function areOptionsEqual(nextOptions, currentOptions) {
            return currentOptions === nextOptions || null !== currentOptions && null !== nextOptions && _utilsShallowEqual2["default"](currentOptions, nextOptions);
        }
        exports.__esModule = !0, exports["default"] = areOptionsEqual;
        var _utilsShallowEqual = __webpack_require__(227), _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
        module.exports = exports["default"];
    }, /* 243 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function isValidType(type, allowArray) {
            return "string" == typeof type || "symbol" == typeof type || allowArray && _lodashIsArray2["default"](type) && type.every(function(t) {
                return isValidType(t, !1);
            });
        }
        exports.__esModule = !0, exports["default"] = isValidType;
        var _lodashIsArray = __webpack_require__(46), _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
        module.exports = exports["default"];
    }, /* 244 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function DropTarget(type, spec, collect) {
            var options = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
            _utilsCheckDecoratorArguments2["default"].apply(void 0, [ "DropTarget", "type, spec, collect[, options]" ].concat(_slice.call(arguments)));
            var getType = type;
            "function" != typeof type && (_invariant2["default"](_utilsIsValidType2["default"](type, !0), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', type), 
            getType = function() {
                return type;
            }), _invariant2["default"](_lodashIsPlainObject2["default"](spec), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', spec);
            var createTarget = _createTargetFactory2["default"](spec);
            return _invariant2["default"]("function" == typeof collect, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect), 
            _invariant2["default"](_lodashIsPlainObject2["default"](options), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect), 
            function(DecoratedComponent) {
                return _decorateHandler2["default"]({
                    connectBackend: function(backend, targetId) {
                        return backend.connectDropTarget(targetId);
                    },
                    containerDisplayName: "DropTarget",
                    createHandler: createTarget,
                    registerHandler: _registerTarget2["default"],
                    createMonitor: _createTargetMonitor2["default"],
                    createConnector: _createTargetConnector2["default"],
                    DecoratedComponent: DecoratedComponent,
                    getType: getType,
                    collect: collect,
                    options: options
                });
            };
        }
        exports.__esModule = !0;
        var _slice = Array.prototype.slice;
        exports["default"] = DropTarget;
        var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _lodashIsPlainObject = __webpack_require__(195), _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject), _utilsCheckDecoratorArguments = __webpack_require__(225), _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments), _decorateHandler = __webpack_require__(230), _decorateHandler2 = _interopRequireDefault(_decorateHandler), _registerTarget = __webpack_require__(245), _registerTarget2 = _interopRequireDefault(_registerTarget), _createTargetFactory = __webpack_require__(246), _createTargetFactory2 = _interopRequireDefault(_createTargetFactory), _createTargetMonitor = __webpack_require__(247), _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor), _createTargetConnector = __webpack_require__(248), _createTargetConnector2 = _interopRequireDefault(_createTargetConnector), _utilsIsValidType = __webpack_require__(243), _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);
        module.exports = exports["default"];
    }, /* 245 */
    /***/
    function(module, exports) {
        "use strict";
        function registerTarget(type, target, manager) {
            function unregisterTarget() {
                registry.removeTarget(targetId);
            }
            var registry = manager.getRegistry(), targetId = registry.addTarget(type, target);
            return {
                handlerId: targetId,
                unregister: unregisterTarget
            };
        }
        exports.__esModule = !0, exports["default"] = registerTarget, module.exports = exports["default"];
    }, /* 246 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function createTargetFactory(spec) {
                Object.keys(spec).forEach(function(key) {
                    _invariant2["default"](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(", "), key), 
                    _invariant2["default"]("function" == typeof spec[key], "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html", key, key, spec[key]);
                });
                var Target = function() {
                    function Target(monitor) {
                        _classCallCheck(this, Target), this.monitor = monitor, this.props = null, this.component = null;
                    }
                    return Target.prototype.receiveProps = function(props) {
                        this.props = props;
                    }, Target.prototype.receiveMonitor = function(monitor) {
                        this.monitor = monitor;
                    }, Target.prototype.receiveComponent = function(component) {
                        this.component = component;
                    }, Target.prototype.canDrop = function() {
                        return !spec.canDrop || spec.canDrop(this.props, this.monitor);
                    }, Target.prototype.hover = function() {
                        spec.hover && spec.hover(this.props, this.monitor, this.component);
                    }, Target.prototype.drop = function() {
                        if (spec.drop) {
                            var dropResult = spec.drop(this.props, this.monitor, this.component);
                            return "production" !== process.env.NODE_ENV && _invariant2["default"]("undefined" == typeof dropResult || _lodashIsPlainObject2["default"](dropResult), "drop() must either return undefined, or an object that represents the drop result. Instead received %s. Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html", dropResult), 
                            dropResult;
                        }
                    }, Target;
                }();
                return function(monitor) {
                    return new Target(monitor);
                };
            }
            exports.__esModule = !0, exports["default"] = createTargetFactory;
            var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), _lodashIsPlainObject = __webpack_require__(195), _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject), ALLOWED_SPEC_METHODS = [ "canDrop", "hover", "drop" ];
            module.exports = exports["default"];
        }).call(exports, __webpack_require__(117));
    }, /* 247 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function createTargetMonitor(manager) {
            return new TargetMonitor(manager);
        }
        exports.__esModule = !0, exports["default"] = createTargetMonitor;
        var _invariant = __webpack_require__(204), _invariant2 = _interopRequireDefault(_invariant), isCallingCanDrop = !1, TargetMonitor = function() {
            function TargetMonitor(manager) {
                _classCallCheck(this, TargetMonitor), this.internalMonitor = manager.getMonitor();
            }
            return TargetMonitor.prototype.receiveHandlerId = function(targetId) {
                this.targetId = targetId;
            }, TargetMonitor.prototype.canDrop = function() {
                _invariant2["default"](!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html");
                try {
                    return isCallingCanDrop = !0, this.internalMonitor.canDropOnTarget(this.targetId);
                } finally {
                    isCallingCanDrop = !1;
                }
            }, TargetMonitor.prototype.isOver = function(options) {
                return this.internalMonitor.isOverTarget(this.targetId, options);
            }, TargetMonitor.prototype.getItemType = function() {
                return this.internalMonitor.getItemType();
            }, TargetMonitor.prototype.getItem = function() {
                return this.internalMonitor.getItem();
            }, TargetMonitor.prototype.getDropResult = function() {
                return this.internalMonitor.getDropResult();
            }, TargetMonitor.prototype.didDrop = function() {
                return this.internalMonitor.didDrop();
            }, TargetMonitor.prototype.getInitialClientOffset = function() {
                return this.internalMonitor.getInitialClientOffset();
            }, TargetMonitor.prototype.getInitialSourceClientOffset = function() {
                return this.internalMonitor.getInitialSourceClientOffset();
            }, TargetMonitor.prototype.getSourceClientOffset = function() {
                return this.internalMonitor.getSourceClientOffset();
            }, TargetMonitor.prototype.getClientOffset = function() {
                return this.internalMonitor.getClientOffset();
            }, TargetMonitor.prototype.getDifferenceFromInitialOffset = function() {
                return this.internalMonitor.getDifferenceFromInitialOffset();
            }, TargetMonitor;
        }();
        module.exports = exports["default"];
    }, /* 248 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function createTargetConnector(backend) {
            function reconnectDropTarget() {
                disconnectCurrentDropTarget && (disconnectCurrentDropTarget(), disconnectCurrentDropTarget = null), 
                currentHandlerId && currentDropTargetNode && (disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions));
            }
            function receiveHandlerId(handlerId) {
                handlerId !== currentHandlerId && (currentHandlerId = handlerId, reconnectDropTarget());
            }
            var currentHandlerId = void 0, currentDropTargetNode = void 0, currentDropTargetOptions = void 0, disconnectCurrentDropTarget = void 0, hooks = _wrapConnectorHooks2["default"]({
                dropTarget: function(node, options) {
                    node === currentDropTargetNode && _areOptionsEqual2["default"](options, currentDropTargetOptions) || (currentDropTargetNode = node, 
                    currentDropTargetOptions = options, reconnectDropTarget());
                }
            });
            return {
                receiveHandlerId: receiveHandlerId,
                hooks: hooks
            };
        }
        exports.__esModule = !0, exports["default"] = createTargetConnector;
        var _wrapConnectorHooks = __webpack_require__(240), _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks), _areOptionsEqual = __webpack_require__(242), _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);
        module.exports = exports["default"];
    }, /* 249 */
    /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.ROW_TYPE = "row", exports.LIST_TYPE = "list";
    }, /* 250 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.listPreviewComponent = exports.itemPreviewComponent = exports.isDragging = exports.currentOffset = exports.itemType = exports.item = exports.lists = void 0;
        var _react = __webpack_require__(2);
        exports.lists = _react.PropTypes.array, exports.item = _react.PropTypes.object, 
        exports.itemType = _react.PropTypes.string, exports.currentOffset = _react.PropTypes.shape({
            x: _react.PropTypes.number.isRequired,
            y: _react.PropTypes.number.isRequire
        }), exports.isDragging = _react.PropTypes.bool.isRequired, exports.itemPreviewComponent = _react.PropTypes.func.isRequired, 
        exports.listPreviewComponent = _react.PropTypes.func.isRequired;
    }, /* 251 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactVirtualized = __webpack_require__(123), _reactDnd = __webpack_require__(190), _reactDndHtml5Backend = __webpack_require__(4), _itemCache = __webpack_require__(252), _SortableItem = __webpack_require__(253), _SortableItem2 = _interopRequireDefault(_SortableItem), _types = __webpack_require__(249), _dragSpec = __webpack_require__(280), dragSpec = _interopRequireWildcard(_dragSpec), _dropSpec = __webpack_require__(281), dropSpec = _interopRequireWildcard(_dropSpec), _propTypes = __webpack_require__(282), _PureComponent2 = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(182)), _PureComponent3 = _interopRequireDefault(_PureComponent2), identity = function(c) {
            return c;
        }, SortableList = function(_PureComponent) {
            function SortableList(props) {
                _classCallCheck(this, SortableList);
                var _this = _possibleConstructorReturn(this, (SortableList.__proto__ || Object.getPrototypeOf(SortableList)).call(this, props));
                return _this.renderRow = _this.renderRow.bind(_this), _this.renderList = _this.renderList.bind(_this), 
                _this.renderItemForMeasure = _this.renderItemForMeasure.bind(_this), _this;
            }
            return _inherits(SortableList, _PureComponent), _createClass(SortableList, [ {
                key: "componentDidMount",
                value: function() {
                    this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
                        captureDraggingState: !0
                    });
                }
            }, {
                key: "componentDidUpdate",
                value: function(prevProps) {
                    prevProps.list.rows !== this.props.list.rows && this._list && this._list.recomputeRowHeights();
                }
            }, {
                key: "renderRow",
                value: function(_ref) {
                    var index = _ref.index, style = (_ref.key, _ref.style), row = this.props.list.rows[index];
                    return _react2["default"].createElement(_SortableItem2["default"], {
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
                    });
                }
            }, {
                key: "renderItemForMeasure",
                value: function(_ref2) {
                    var rowIndex = _ref2.rowIndex, DecoratedItem = this.props.itemComponent, row = this.props.list.rows[rowIndex];
                    return _react2["default"].createElement(DecoratedItem, {
                        row: row,
                        rowId: row.id,
                        listId: this.props.listId,
                        rowStyle: {},
                        isDragging: !1,
                        connectDragSource: identity,
                        connectDropTarget: identity
                    });
                }
            }, {
                key: "renderList",
                value: function(_ref3) {
                    var _this2 = this, width = _ref3.width, height = _ref3.height;
                    // TODO: Check whether scrollbar is visible or not :/
                    return _react2["default"].createElement(_reactVirtualized.CellMeasurer, {
                        width: width,
                        columnCount: 1,
                        rowCount: this.props.list.rows.length,
                        cellRenderer: this.renderItemForMeasure,
                        cellSizeCache: new _itemCache.ItemCache(this.props.list.rows, this.props.itemCacheKey)
                    }, function(_ref4) {
                        var getRowHeight = _ref4.getRowHeight;
                        return _react2["default"].createElement(_reactVirtualized.List, {
                            ref: function(c) {
                                return _this2._list = c;
                            },
                            className: "KanbanList",
                            width: width,
                            height: height,
                            rowHeight: getRowHeight,
                            rowCount: _this2.props.list.rows.length,
                            rowRenderer: _this2.renderRow,
                            overscanRowCount: _this2.props.overscanRowCount
                        });
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var _this3 = this, _props = this.props, list = _props.list, listId = _props.listId, DecoratedList = _props.listComponent, isDragging = _props.isDragging, connectDragSource = _props.connectDragSource, connectDropTarget = _props.connectDropTarget, listStyle = _props.listStyle;
                    return _react2["default"].createElement(DecoratedList, {
                        list: list,
                        listId: listId,
                        rows: list.rows,
                        listStyle: listStyle,
                        isDragging: isDragging,
                        connectDragSource: connectDragSource,
                        connectDropTarget: connectDropTarget
                    }, _react2["default"].createElement(_reactVirtualized.AutoSizer, null, function(dimensions) {
                        return _this3.renderList(dimensions);
                    }));
                }
            } ]), SortableList;
        }(_PureComponent3["default"]), connectDrop = (0, _reactDnd.DropTarget)([ _types.LIST_TYPE, _types.ROW_TYPE ], dropSpec, function(connect) {
            return {
                connectDropTarget: connect.dropTarget()
            };
        }), connectDrag = (0, _reactDnd.DragSource)(_types.LIST_TYPE, dragSpec, function(connect, monitor) {
            return {
                connectDragSource: connect.dragSource(),
                connectDragPreview: connect.dragPreview(),
                isDragging: monitor.isDragging()
            };
        });
        exports["default"] = connectDrop(connectDrag(SortableList));
    }, /* 252 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), cachedItems = new Map();
        exports.ItemCache = function() {
            function ItemCache(items, cacheKey) {
                var store = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cachedItems;
                _classCallCheck(this, ItemCache), this.items = items, this.cacheKey = cacheKey, 
                this.store = store;
            }
            return _createClass(ItemCache, [ {
                key: "clearAllRowHeights",
                value: function() {
                    this.store.clear();
                }
            }, {
                key: "clearRowHeight",
                value: function(index) {
                    var item = this.items[index];
                    this.store["delete"](this.cacheKey(item));
                }
            }, {
                key: "getRowHeight",
                value: function(index) {
                    var item = this.items[index];
                    return this.store.get(this.cacheKey(item));
                }
            }, {
                key: "setRowHeight",
                value: function(index, height) {
                    var item = this.items[index];
                    this.store.set(this.cacheKey(item), height);
                }
            }, {
                key: "clearAllColumnWidths",
                value: function() {}
            }, {
                key: "clearColumnWidth",
                value: function(index) {}
            }, {
                key: "getColumnWidth",
                value: function(index) {}
            }, {
                key: "setColumnWidth",
                value: function(index, width) {}
            } ]), ItemCache;
        }();
    }, /* 253 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _reactDnd = __webpack_require__(190), _reactDndHtml5Backend = __webpack_require__(4), _types = __webpack_require__(249), _dragSpec = __webpack_require__(254), dragSpec = _interopRequireWildcard(_dragSpec), _dropSpec = __webpack_require__(278), dropSpec = _interopRequireWildcard(_dropSpec), _propTypes = __webpack_require__(279), _PureComponent2 = (_interopRequireWildcard(_propTypes), 
        __webpack_require__(182)), _PureComponent3 = _interopRequireDefault(_PureComponent2), SortableItem = function(_PureComponent) {
            function SortableItem() {
                return _classCallCheck(this, SortableItem), _possibleConstructorReturn(this, (SortableItem.__proto__ || Object.getPrototypeOf(SortableItem)).apply(this, arguments));
            }
            return _inherits(SortableItem, _PureComponent), _createClass(SortableItem, [ {
                key: "componentDidMount",
                value: function() {
                    this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
                        captureDraggingState: !0
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var _props = this.props, row = _props.row, rowId = _props.rowId, listId = _props.listId, DecoratedItem = _props.itemComponent, isDragging = _props.isDragging, connectDragSource = _props.connectDragSource, connectDropTarget = _props.connectDropTarget, rowStyle = _props.rowStyle;
                    return _react2["default"].createElement(DecoratedItem, {
                        row: row,
                        rowId: rowId,
                        listId: listId,
                        rowStyle: rowStyle,
                        isDragging: isDragging,
                        connectDragSource: connectDragSource,
                        connectDropTarget: connectDropTarget
                    });
                }
            } ]), SortableItem;
        }(_PureComponent3["default"]), connectDrop = (0, _reactDnd.DropTarget)(_types.ROW_TYPE, dropSpec, function(connect) {
            return {
                connectDropTarget: connect.dropTarget()
            };
        }), connectDrag = (0, _reactDnd.DragSource)(_types.ROW_TYPE, dragSpec, function(connect, monitor) {
            return {
                connectDragSource: connect.dragSource(),
                connectDragPreview: connect.dragPreview(),
                isDragging: monitor.isDragging()
            };
        });
        exports["default"] = connectDrop(connectDrag(SortableItem));
    }, /* 254 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function beginDrag(props, _, component) {
            var node = (0, _reactDom.findDOMNode)(component), containerWidth = node ? (0, _query.width)(node) : 0, data = {
                lists: props.lists,
                row: props.row,
                rowId: props.rowId,
                rowStyle: props.rowStyle,
                containerWidth: containerWidth
            };
            return props.dragBeginRow(data), data;
        }
        function endDrag(props, monitor) {
            var itemId = props.rowId;
            props.dragEndRow({
                itemId: itemId
            });
        }
        /**
	 * Determines whether current item is being dragged or not.
	 *
	 * This is the logic used to display the gaps (gray items) in the list.
	 */
        function isDragging(_ref, monitor) {
            var rowId = _ref.rowId, draggingRowId = monitor.getItem().rowId;
            return rowId === draggingRowId;
        }
        function canDrag(props, monitor) {
            return !props.dndDisabled;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.beginDrag = beginDrag, exports.endDrag = endDrag, exports.isDragging = isDragging, 
        exports.canDrag = canDrag;
        var _reactDom = __webpack_require__(3), _query = __webpack_require__(255);
    }, /* 255 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            matches: __webpack_require__(256),
            height: __webpack_require__(258),
            width: __webpack_require__(263),
            offset: __webpack_require__(259),
            offsetParent: __webpack_require__(264),
            position: __webpack_require__(273),
            contains: __webpack_require__(260),
            scrollParent: __webpack_require__(276),
            scrollTop: __webpack_require__(274),
            querySelectorAll: __webpack_require__(257),
            closest: __webpack_require__(277)
        };
    }, /* 256 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function ie8MatchesSelector(node, selector) {
            for (var matches = qsa(node.document || node.ownerDocument, selector), i = 0; matches[i] && matches[i] !== node; ) i++;
            return !!matches[i];
        }
        var matches, canUseDOM = __webpack_require__(122), qsa = __webpack_require__(257);
        if (canUseDOM) {
            var body = document.body, nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
            matches = nativeMatch ? function(node, selector) {
                return nativeMatch.call(node, selector);
            } : ie8MatchesSelector;
        }
        module.exports = matches;
    }, /* 257 */
    /***/
    function(module, exports) {
        "use strict";
        //     Zepto.js
        //     (c) 2010-2015 Thomas Fuchs
        //     Zepto.js may be freely distributed under the MIT license.
        var simpleSelectorRE = /^[\w-]*$/, toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
        module.exports = function(element, selector) {
            var found, maybeID = "#" === selector[0], maybeClass = "." === selector[0], nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, isSimple = simpleSelectorRE.test(nameOnly);
            return isSimple ? maybeID ? (element = element.getElementById ? element : document, 
            (found = element.getElementById(nameOnly)) ? [ found ] : []) : toArray(element.getElementsByClassName && maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector)) : toArray(element.querySelectorAll(selector));
        };
    }, /* 258 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var offset = __webpack_require__(259), getWindow = __webpack_require__(261);
        module.exports = function(node, client) {
            var win = getWindow(node);
            return win ? win.innerHeight : client ? node.clientHeight : offset(node).height;
        };
    }, /* 259 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var contains = __webpack_require__(260), getWindow = __webpack_require__(261), ownerDocument = __webpack_require__(262);
        module.exports = function(node) {
            var doc = ownerDocument(node), win = getWindow(doc), docElem = doc && doc.documentElement, box = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            };
            if (doc) // Make sure it's not a disconnected DOM node
            // Make sure it's not a disconnected DOM node
            return contains(docElem, node) ? (void 0 !== node.getBoundingClientRect && (box = node.getBoundingClientRect()), 
            (box.width || box.height) && (box = {
                top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
                width: (null == box.width ? node.offsetWidth : box.width) || 0,
                height: (null == box.height ? node.offsetHeight : box.height) || 0
            }), box) : box;
        };
    }, /* 260 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var canUseDOM = __webpack_require__(122), contains = function() {
            var root = canUseDOM && document.documentElement;
            return root && root.contains ? function(context, node) {
                return context.contains(node);
            } : root && root.compareDocumentPosition ? function(context, node) {
                return context === node || !!(16 & context.compareDocumentPosition(node));
            } : function(context, node) {
                if (node) do if (node === context) return !0; while (node = node.parentNode);
                return !1;
            };
        }();
        module.exports = contains;
    }, /* 261 */
    /***/
    function(module, exports) {
        "use strict";
        module.exports = function(node) {
            return node === node.window ? node : 9 === node.nodeType && (node.defaultView || node.parentWindow);
        };
    }, /* 262 */
    /***/
    function(module, exports) {
        "use strict";
        function ownerDocument(node) {
            return node && node.ownerDocument || document;
        }
        exports.__esModule = !0, exports["default"] = ownerDocument, module.exports = exports["default"];
    }, /* 263 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var offset = __webpack_require__(259), getWindow = __webpack_require__(261);
        module.exports = function(node, client) {
            var win = getWindow(node);
            return win ? win.innerWidth : client ? node.clientWidth : offset(node).width;
        };
    }, /* 264 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function nodeName(node) {
            return node.nodeName && node.nodeName.toLowerCase();
        }
        function offsetParent(node) {
            for (var doc = (0, _ownerDocument2["default"])(node), offsetParent = node && node.offsetParent; offsetParent && "html" !== nodeName(node) && "static" === (0, 
            _style2["default"])(offsetParent, "position"); ) offsetParent = offsetParent.offsetParent;
            return offsetParent || doc.documentElement;
        }
        var babelHelpers = __webpack_require__(265);
        exports.__esModule = !0, exports["default"] = offsetParent;
        var _ownerDocument = __webpack_require__(262), _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument), _style = __webpack_require__(266), _style2 = babelHelpers.interopRequireDefault(_style);
        module.exports = exports["default"];
    }, /* 265 */
    /***/
    function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !function(root, factory) {
            __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }(this, function(global) {
            var babelHelpers = global;
            babelHelpers.interopRequireDefault = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }, babelHelpers._extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            };
        });
    }, /* 266 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var camelize = __webpack_require__(267), hyphenate = __webpack_require__(269), _getComputedStyle = __webpack_require__(271), removeStyle = __webpack_require__(272), has = Object.prototype.hasOwnProperty;
        module.exports = function(node, property, value) {
            var css = "", props = property;
            if ("string" == typeof property) {
                if (void 0 === value) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));
                (props = {})[property] = value;
            }
            for (var key in props) has.call(props, key) && (props[key] || 0 === props[key] ? css += hyphenate(key) + ":" + props[key] + ";" : removeStyle(node, hyphenate(key)));
            node.style.cssText += ";" + css;
        };
    }, /* 267 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */
        "use strict";
        var camelize = __webpack_require__(268), msPattern = /^-ms-/;
        module.exports = function(string) {
            return camelize(string.replace(msPattern, "ms-"));
        };
    }, /* 268 */
    /***/
    function(module, exports) {
        "use strict";
        var rHyphen = /-(.)/g;
        module.exports = function(string) {
            return string.replace(rHyphen, function(_, chr) {
                return chr.toUpperCase();
            });
        };
    }, /* 269 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */
        "use strict";
        var hyphenate = __webpack_require__(270), msPattern = /^ms-/;
        module.exports = function(string) {
            return hyphenate(string).replace(msPattern, "-ms-");
        };
    }, /* 270 */
    /***/
    function(module, exports) {
        "use strict";
        var rUpper = /([A-Z])/g;
        module.exports = function(string) {
            return string.replace(rUpper, "-$1").toLowerCase();
        };
    }, /* 271 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var babelHelpers = __webpack_require__(265), _utilCamelizeStyle = __webpack_require__(267), _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle), rposition = /^(top|right|bottom|left)$/, rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
        module.exports = function(node) {
            if (!node) throw new TypeError("No Element passed to `getComputedStyle()`");
            var doc = node.ownerDocument;
            return "defaultView" in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
                //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
                getPropertyValue: function(prop) {
                    var style = node.style;
                    prop = (0, _utilCamelizeStyle2["default"])(prop), "float" == prop && (prop = "styleFloat");
                    var current = node.currentStyle[prop] || null;
                    if (null == current && style && style[prop] && (current = style[prop]), rnumnonpx.test(current) && !rposition.test(prop)) {
                        // Remember the original values
                        var left = style.left, runStyle = node.runtimeStyle, rsLeft = runStyle && runStyle.left;
                        // Put in the new values to get a computed value out
                        rsLeft && (runStyle.left = node.currentStyle.left), style.left = "fontSize" === prop ? "1em" : current, 
                        current = style.pixelLeft + "px", // Revert the changed values
                        style.left = left, rsLeft && (runStyle.left = rsLeft);
                    }
                    return current;
                }
            };
        };
    }, /* 272 */
    /***/
    function(module, exports) {
        "use strict";
        module.exports = function(node, key) {
            return "removeProperty" in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
        };
    }, /* 273 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function nodeName(node) {
            return node.nodeName && node.nodeName.toLowerCase();
        }
        function position(node, offsetParent) {
            var offset, parentOffset = {
                top: 0,
                left: 0
            };
            // Subtract parent offsets and node margins
            // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
            // because it is its only offset parent
            return "fixed" === (0, _style2["default"])(node, "position") ? offset = node.getBoundingClientRect() : (offsetParent = offsetParent || (0, 
            _offsetParent2["default"])(node), offset = (0, _offset2["default"])(node), "html" !== nodeName(offsetParent) && (parentOffset = (0, 
            _offset2["default"])(offsetParent)), parentOffset.top += parseInt((0, _style2["default"])(offsetParent, "borderTopWidth"), 10) - (0, 
            _scrollTop2["default"])(offsetParent) || 0, parentOffset.left += parseInt((0, _style2["default"])(offsetParent, "borderLeftWidth"), 10) - (0, 
            _scrollLeft2["default"])(offsetParent) || 0), babelHelpers._extends({}, offset, {
                top: offset.top - parentOffset.top - (parseInt((0, _style2["default"])(node, "marginTop"), 10) || 0),
                left: offset.left - parentOffset.left - (parseInt((0, _style2["default"])(node, "marginLeft"), 10) || 0)
            });
        }
        var babelHelpers = __webpack_require__(265);
        exports.__esModule = !0, exports["default"] = position;
        var _offset = __webpack_require__(259), _offset2 = babelHelpers.interopRequireDefault(_offset), _offsetParent = __webpack_require__(264), _offsetParent2 = babelHelpers.interopRequireDefault(_offsetParent), _scrollTop = __webpack_require__(274), _scrollTop2 = babelHelpers.interopRequireDefault(_scrollTop), _scrollLeft = __webpack_require__(275), _scrollLeft2 = babelHelpers.interopRequireDefault(_scrollLeft), _style = __webpack_require__(266), _style2 = babelHelpers.interopRequireDefault(_style);
        module.exports = exports["default"];
    }, /* 274 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var getWindow = __webpack_require__(261);
        module.exports = function(node, val) {
            var win = getWindow(node);
            return void 0 === val ? win ? "pageYOffset" in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop : void (win ? win.scrollTo("pageXOffset" in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val) : node.scrollTop = val);
        };
    }, /* 275 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var getWindow = __webpack_require__(261);
        module.exports = function(node, val) {
            var win = getWindow(node);
            return void 0 === val ? win ? "pageXOffset" in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft : void (win ? win.scrollTo(val, "pageYOffset" in win ? win.pageYOffset : win.document.documentElement.scrollTop) : node.scrollLeft = val);
        };
    }, /* 276 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var css = __webpack_require__(266), height = __webpack_require__(258);
        module.exports = function(node) {
            var position = css(node, "position"), excludeStatic = "absolute" === position, ownerDoc = node.ownerDocument;
            if ("fixed" === position) return ownerDoc || document;
            for (;(node = node.parentNode) && 9 !== node.nodeType; ) {
                var isStatic = excludeStatic && "static" === css(node, "position"), style = css(node, "overflow") + css(node, "overflow-y") + css(node, "overflow-x");
                if (!isStatic && /(auto|scroll)/.test(style) && height(node) < node.scrollHeight) return node;
            }
            return document;
        };
    }, /* 277 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function closest(node, selector, context) {
            for (;node && (isDoc(node) || !(0, _matches2["default"])(node, selector)); ) node = node === context || isDoc(node) ? void 0 : node.parentNode;
            return node;
        }
        var babelHelpers = __webpack_require__(265);
        exports.__esModule = !0, exports["default"] = closest;
        var _matches = __webpack_require__(256), _matches2 = babelHelpers.interopRequireDefault(_matches), isDoc = function(obj) {
            return null != obj && obj.nodeType === obj.DOCUMENT_NODE;
        };
        module.exports = exports["default"];
    }, /* 278 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function hover(props, monitor, component) {
            var item = monitor.getItem(), dragItemId = item.rowId, hoverItemId = props.rowId, findItemIndex = props.findItemIndex;
            // Hovering over the same item
            if (dragItemId !== hoverItemId && component) // Sometimes component may be null when it's been unmounted
            {
                var dragItemIndex = findItemIndex(dragItemId), hoverItemIndex = findItemIndex(hoverItemId), node = (0, 
                _reactDom.findDOMNode)(component), hoverBoundingRect = node.getBoundingClientRect(), hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2, clientOffset = monitor.getClientOffset(), hoverClientY = clientOffset.y - hoverBoundingRect.top;
                // Dragging downwards
                dragItemIndex < hoverItemIndex && hoverClientY < hoverMiddleY || dragItemIndex > hoverItemIndex && hoverClientY > hoverMiddleY || (item.containerWidth = (0, 
                _query.width)(node), props.moveRow({
                    itemId: dragItemId
                }, {
                    itemId: hoverItemId
                }));
            }
        }
        function canDrop(props, monitor) {
            var item = monitor.getItem();
            return item.rowId === props.rowId;
        }
        function drop(props) {
            var itemId = props.rowId;
            props.dropRow({
                itemId: itemId
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hover = hover, exports.canDrop = canDrop, exports.drop = drop;
        var _reactDom = __webpack_require__(3), _query = __webpack_require__(255);
    }, /* 279 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.connectDragPreview = exports.connectDragSource = exports.connectDropTarget = exports.isDragging = exports.dndDisabled = exports.dropRow = exports.dragEndRow = exports.moveRow = exports.itemComponent = exports.rowStyle = exports.listId = exports.rowId = exports.row = void 0;
        var _react = __webpack_require__(2), _propTypes = __webpack_require__(181);
        exports.row = _react.PropTypes.object, exports.rowId = _propTypes.PropTypes.id.isRequired, 
        exports.listId = _propTypes.PropTypes.id.isRequired, exports.rowStyle = _react.PropTypes.object, 
        exports.itemComponent = _react.PropTypes.func, exports.moveRow = _react.PropTypes.func, 
        exports.dragEndRow = _react.PropTypes.func, exports.dropRow = _react.PropTypes.func, 
        exports.dndDisabled = _react.PropTypes.bool.isRequired, exports.isDragging = _react.PropTypes.bool, 
        exports.connectDropTarget = _react.PropTypes.func, exports.connectDragSource = _react.PropTypes.func, 
        exports.connectDragPreview = _react.PropTypes.func;
    }, /* 280 */
    /***/
    function(module, exports) {
        "use strict";
        function beginDrag(props) {
            var data = {
                list: props.list,
                listId: props.listId,
                listStyle: props.listStyle
            };
            return props.dragBeginList(data), data;
        }
        function endDrag(props, monitor) {
            var listId = props.listId;
            props.dragEndList({
                listId: listId
            });
        }
        function isDragging(_ref, monitor) {
            var listId = _ref.listId, draggingListId = monitor.getItem().listId;
            return listId === draggingListId;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.beginDrag = beginDrag, exports.endDrag = endDrag, exports.isDragging = isDragging;
    }, /* 281 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function calculateContainerWidth(component) {
            var innerScrollContainer = (0, _query.querySelectorAll)((0, _reactDom.findDOMNode)(component), ".ReactVirtualized__Grid__innerScrollContainer")[0];
            return innerScrollContainer ? (0, _query.width)(innerScrollContainer) : 0;
        }
        function hover(props, monitor, component) {
            if (monitor.isOver({
                shallow: !0
            }) && monitor.canDrop()) {
                var item = monitor.getItem(), itemType = monitor.getItemType(), dragListId = item.listId, hoverListId = props.listId;
                if (dragListId !== hoverListId) {
                    if (itemType === _types.LIST_TYPE) return void props.moveList({
                        listId: dragListId
                    }, {
                        listId: hoverListId
                    });
                    if (itemType === _types.ROW_TYPE) {
                        var dragItemId = item.rowId;
                        return item.containerWidth = calculateContainerWidth(component) || item.containerWidth, 
                        void props.moveRow({
                            itemId: dragItemId
                        }, {
                            listId: hoverListId
                        });
                    }
                }
            }
        }
        function canDrop(props, monitor) {
            var item = monitor.getItem(), itemType = monitor.getItemType();
            return itemType === _types.LIST_TYPE || (itemType === _types.ROW_TYPE ? item.listId !== props.listId : void 0);
        }
        function drop(props, monitor) {
            if (monitor.isOver({
                shallow: !0
            })) {
                var listId = props.listId;
                props.dropList({
                    listId: listId
                });
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hover = hover, exports.canDrop = canDrop, exports.drop = drop;
        var _reactDom = __webpack_require__(3), _query = __webpack_require__(255), _types = __webpack_require__(249);
    }, /* 282 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.connectDragPreview = exports.connectDragSource = exports.connectDropTarget = exports.isDragging = exports.dndDisabled = exports.itemCacheKey = exports.overscanRowCount = exports.dragEndRow = exports.dropList = exports.dropRow = exports.moveList = exports.moveRow = exports.itemComponent = exports.listComponent = exports.listStyle = exports.listId = exports.list = void 0;
        var _react = __webpack_require__(2), _propTypes = __webpack_require__(181);
        exports.list = _react.PropTypes.object, exports.listId = _propTypes.PropTypes.id.isRequired, 
        exports.listStyle = _react.PropTypes.object, exports.listComponent = _react.PropTypes.func, 
        exports.itemComponent = _react.PropTypes.func, exports.moveRow = _react.PropTypes.func, 
        exports.moveList = _react.PropTypes.func, exports.dropRow = _react.PropTypes.func, 
        exports.dropList = _react.PropTypes.func, exports.dragEndRow = _react.PropTypes.func, 
        exports.overscanRowCount = _react.PropTypes.number, exports.itemCacheKey = _react.PropTypes.func, 
        exports.dndDisabled = _react.PropTypes.bool.isRequired, exports.isDragging = _react.PropTypes.bool, 
        exports.connectDropTarget = _react.PropTypes.func, exports.connectDragSource = _react.PropTypes.func, 
        exports.connectDragPreview = _react.PropTypes.func;
    } ]);
});
//# sourceMappingURL=react-virtual-kanban.js.map