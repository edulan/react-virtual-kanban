import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import HTML5Backend from 'react-dnd-html5-backend';
import withScrolling, { createHorizontalStrength } from 'react-dnd-scrollzone';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';
import scrollIntoView from 'scroll-into-view';

import { updateLists } from './updateLists';

import * as decorators from '../decorators';
import DragLayer from '../DragLayer';
import SortableList from '../SortableList';

import { DragDropManager } from 'dnd-core';

/**
 * Grab dragDropManager from context
 *
 * More info: https://github.com/gaearon/react-dnd/issues/186
 */
const getDndContext = ((dragDropManager = new DragDropManager(HTML5Backend)) => (context) => (
  context.dragDropManager || dragDropManager
))();

class Kanban extends Component {
  static propTypes = {
    lists: PropTypes.array,
    width: PropTypes.number,
    listWidth: PropTypes.number,
    height: PropTypes.number,
    listComponent: PropTypes.func,
    itemComponent: PropTypes.func,
    itemPreviewComponent: PropTypes.func,
    listPreviewComponent: PropTypes.func,
    onMoveRow: PropTypes.func,
    onMoveList: PropTypes.func,
    onDropRow: PropTypes.func,
    onDropList: PropTypes.func,
    overscanListCount: PropTypes.number,
    overscanRowCount: PropTypes.number,
    scrollToList: PropTypes.number,
    scrollToAlignment: PropTypes.string,
    itemCacheKey: PropTypes.func,
  }

  static defaultProps = {
    lists: [],
    itemComponent: decorators.Item,
    listComponent: decorators.List,
    itemPreviewComponent: decorators.ItemPreview,
    listPreviewComponent: decorators.ListPreview,
    onMoveRow: () => {},
    onMoveList: () => {},
    onDropRow: () => {},
    onDropList: () => {},
    overscanListCount: 2,
    overscanRowCount: 2,
    itemCacheKey: ({ id }) => `${id}`,
  }

  static childContextTypes = {
    dragDropManager: React.PropTypes.object,
  }

  static contextTypes = {
    dragDropManager: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      lists: props.lists
    };

    this.onMoveList =this.onMoveList.bind(this);
    this.onMoveRow =this.onMoveRow.bind(this);
    this.onDropList =this.onDropList.bind(this);
    this.onDropRow =this.onDropRow.bind(this);
    this.renderList = this.renderList.bind(this);

    this.refsByIndex = {};
  }

  getChildContext() {
    return {
      dragDropManager: getDndContext(this.context),
    };
  }

  scrollToList(index) {
    if (index === undefined) {
      return;
    }

    const targetNode = ReactDOM.findDOMNode(this.refsByIndex[index]);
    scrollIntoView(targetNode);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({lists: nextProps.lists});
  }

  onMoveList(from, to) {
    this.setState(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
      () => this.props.onMoveList(from, to)
    );
  }

  onMoveRow(from, to) {
    this.setState(
      (prevState) => ({lists: updateLists(prevState.lists, {from, to})}),
      () => this.props.onMoveRow(from, to)
    );
  }

  onDropList({ listId, listIndex }) {
    this.props.onDropList({listId, listIndex, lists: this.state.lists});
  }

  onDropRow({ rowId, listId, rowIndex, listIndex }) {
    this.props.onDropRow({rowId, listId, rowIndex, listIndex, lists: this.state.lists});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderList(list, columnIndex) {
    return (
      <SortableList
        ref={ref => this.refsByIndex[columnIndex] = ref}
        key={list.id}
        listId={list.id}
        listIndex={columnIndex}
        listStyle={{}}
        listComponent={this.props.listComponent}
        itemComponent={this.props.itemComponent}
        list={list}
        moveRow={this.onMoveRow}
        moveList={this.onMoveList}
        dropRow={this.onDropRow}
        dropList={this.onDropList}
        overscanRowCount={this.props.overscanRowCount}
        itemCacheKey={this.props.itemCacheKey}
      />
    );
  }

  render() {
    const { lists } = this.state;
    const {
      width,
      height,
      listWidth,
      itemPreviewComponent,
      listPreviewComponent,
      overscanListCount,
      scrollToList,
      scrollToAlignment,
    } = this.props;

    return (
      <div>
        <div
          className='KanbanGrid'
          ref={(c) => (this._grid = c)}
          style={{pointerEvents: 'auto'}}
        >
          {lists.map(this.renderList)}
        </div>
        <DragLayer
          itemPreviewComponent={itemPreviewComponent}
          listPreviewComponent={listPreviewComponent}
        />
      </div>
    );
  }
}

export default Kanban;
