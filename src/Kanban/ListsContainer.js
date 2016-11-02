import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import { DropTarget } from 'react-dnd';
import { Grid } from 'react-virtualized';

import List from '../List';
import KanbanDragLayer from './DragLayer';

import { ROW_TYPE } from '../types';

import 'react-virtualized/styles.css';
import './styles/index.css';

const VERTICAL_THRESHOLD = 50;

const listContainerTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor, component) {
    console.log(`hover`);
    const { x, y } = monitor.getClientOffset();
    const { left, right, top, bottom } = findDOMNode(component).getBoundingClientRect();

    if (props.isScrolling &&
        x - left > props.columnWidth && right - x > props.columnWidth &&
        y - top > VERTICAL_THRESHOLD && bottom - y > VERTICAL_THRESHOLD) {
      props.stopScrolling();
      return;
    }

    if (!props.isScrolling && x - left <= props.columnWidth) {
      // console.log(`start scrolling left...`);
      props.scrollToLeft(props.columnWidth - (x - left));
      return;
    }

    if (!props.isScrolling && right - x <= props.columnWidth) {
      // console.log(`start scrolling right...`);
      props.scrollToRight(props.columnWidth - (right - x));
      return;
    }

    if (!props.isScrolling && y - top <= VERTICAL_THRESHOLD) {
      // console.log(`start scrolling up...`);
      props.scrollToTop();
      return;
    }

    if (!props.isScrolling && bottom - y <= VERTICAL_THRESHOLD) {
      // console.log(`start scrolling bottom...`);
      props.scrollToBottom();
      return;
    }
  },
};

class ListContainer extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    lists: PropTypes.array,
    scrollLeft: PropTypes.number,
    isScrolling: PropTypes.bool,
    scrollToLeft: PropTypes.func,
    scrollToRight: PropTypes.func,
    stopScrolling: PropTypes.func,
    moveRow: PropTypes.func,
  };

  static defaultProps = {
    columnWidth: 200,
  };

  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.renderDragLayer = this.renderDragLayer.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  onScroll({ scrollLeft }) {
    // console.log(`scrolling...`, scrollLeft);
  }

  renderList({ columnIndex, width, height }) {
    const rows = this.props.lists[columnIndex];

    return (
      <List
        width={200}
        height={height}
        listIndex={columnIndex}
        rows={rows}
        moveRow={this.props.moveRow}
        stopScrolling={this.props.stopScrolling}
      />
    );

  }

  renderLists() {
    const { width, height, lists, columnWidth, scrollLeft } = this.props;

    return (
      <Grid
        width={width}
        height={height}
        columnWidth={columnWidth}
        rowHeight={height}
        columnCount={lists.length}
        rowCount={1}
        scrollLeft={scrollLeft}
        cellRenderer={({ columnIndex }) => this.renderList({columnIndex, width, height})}
        overscanColumnCount={5}
        onScroll={this.onScroll}
      />
    );
  }

  renderDragLayer() {
    const { columnWidth } = this.props;

    return (
      <KanbanDragLayer columnWidth={columnWidth} />
    );
  }

  render() {
    const { width, height, connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={{width, height}}>
        {this.renderLists()}
        {this.renderDragLayer()}
      </div>
    );
  }
}

const connectDrop = DropTarget(ROW_TYPE, listContainerTarget, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}));

export default connectDrop(ListContainer);
