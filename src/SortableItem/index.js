import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { PropTypes as CustomPropTypes } from '../propTypes';

import { ROW_TYPE } from '../types';
import * as dragSpec from './dragSpec';
import * as dropSpec from './dropSpec';

class SortableItem extends Component {
  static propTypes = {
    rowId: CustomPropTypes.id.isRequired,
    listId: CustomPropTypes.id.isRequired,
    rowIndex: PropTypes.number,
    listIndex: PropTypes.number,
    rowStyle: PropTypes.object,
    itemComponent: PropTypes.func,
    moveRow: PropTypes.func,
    dropRow: PropTypes.func,
    // React DnD
    isDragging: PropTypes.bool,
    connectDropTarget: PropTypes.func,
    connectDragSource: PropTypes.func,
    connectDragPreview: PropTypes.func,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const {
      rowId,
      listId,
      rowIndex,
      listIndex,
      itemComponent: DecoratedItem,
      isDragging,
      connectDragSource,
      connectDropTarget,
      rowStyle,
    } = this.props;

    return (
      <DecoratedItem
        rowId={rowId}
        listId={listId}
        rowIndex={rowIndex}
        listIndex={listIndex}
        rowStyle={rowStyle}
        isDragging={isDragging}
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
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
