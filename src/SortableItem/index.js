import React, { Component } from 'react';

import shallowCompare from 'react-addons-shallow-compare';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { ROW_TYPE } from '../types';
import * as dragSpec from './dragSpec';
import * as dropSpec from './dropSpec';

import './styles/index.css';

class SortableItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const { isDragging, itemComponent: DecoratedItem, connectDragSource, connectDropTarget, rowStyle, ...rowProps } = this.props;

    return (
      <DecoratedItem
        style={rowStyle}
        isDragging={isDragging}
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
        {...rowProps}
      />
    );
  }
}

const connectDrop = DropTarget(ROW_TYPE, dropSpec, connect => ({
  connectDropTarget: connect.dropTarget()
}))


const connectDrag = DragSource(ROW_TYPE, dragSpec, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))

export default connectDrop(connectDrag(SortableItem));
