import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

import Row from '../Row';

const ROW_TYPE = 'row';

const rowSource = {
  beginDrag(props) {
    return {
      row: props.row,
      index: props.index,
      listIndex: props.listIndex,
    };
  },

  // TODO: Review
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
  render() {
    const { isDragging, connectDragSource, connectDropTarget, ...rowProps } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div style={{height: '100%', opacity}}>
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
  isDragging: monitor.isDragging(),
}))

export default connectDrop(connectDrag(SortableRow));
