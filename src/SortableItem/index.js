import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { ROW_TYPE } from '../types';
import * as dragSpec from './dragSpec';
import * as dropSpec from './dropSpec';
import * as propTypes from './propTypes';

class SortableItem extends React.PureComponent {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.recalculateRowHeights = this.recalculateRowHeights.bind(this);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  recalculateRowHeights() {
    const { recalculateRowHeights, rowIndex} = this.props;
    recalculateRowHeights(rowIndex);
  }

  render() {
    const {
      row,
      rowId,
      listId,
      itemComponent: DecoratedItem,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;
    return (
      <DecoratedItem
        row={row}
        rowId={rowId}
        listId={listId}
        rowStyle={this.props.style}
        isDragging={isDragging}
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
        recalculateRowHeights={this.recalculateRowHeights}
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
