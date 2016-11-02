import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import classnames from 'classnames';

import Row from '../Row';

import { ROW_TYPE } from '../types';

import './styles/index.css';

const rowSource = {
  beginDrag(props) {
    return {
      row: props.row,
      index: props.index,
      listIndex: props.listIndex,
    };
  },

  isDragging({ row }, monitor) {
     const draggingRow = monitor.getItem().row;

     return row.id === draggingRow.id;
  },
};

const rowTarget = {
  hover(props, monitor, component) {
    const { index: dragIndex, listIndex: dragListIndex } = monitor.getItem();
    const hoverIndex = props.index;
    const hoverListIndex = props.listIndex;

    if (dragIndex === hoverIndex && dragListIndex === hoverListIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Dragging horizontaly between lists
    if (hoverBoundingRect.left < clientOffset.x &&
        clientOffset.x < hoverBoundingRect.right &&
        dragListIndex !== hoverListIndex) {
      props.moveRow({dragIndex, dragListIndex}, {hoverIndex, hoverListIndex});
      monitor.getItem().index = hoverIndex;
      monitor.getItem().listIndex = hoverListIndex;
      return;
    }

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveRow({dragIndex, dragListIndex}, {hoverIndex, hoverListIndex});

    monitor.getItem().index = hoverIndex;
    monitor.getItem().listIndex = hoverListIndex;
  }
};

class SortableRow extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const { isDragging, connectDragSource, connectDropTarget, ...rowProps } = this.props;

    const classes = classnames({
      RowWrapper: true,
      RowWrapperDragging: isDragging,
    });

    return connectDragSource(connectDropTarget(
      <div className={classes}>
        <Row {...rowProps} />
      </div>
    ));
  }
}

const connectDrop = DropTarget(ROW_TYPE, rowTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))


const connectDrag = DragSource(ROW_TYPE, rowSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))

export default connectDrop(connectDrag(SortableRow));
