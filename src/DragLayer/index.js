import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragLayer } from 'react-dnd';

import * as ItemTypes from '../types';

import { findItemIndex, findListIndex } from '../Kanban/updateLists';

function getStyles({ currentOffset }) {
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
  };
}

class KanbanDragLayer extends Component {
  static propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    currentOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    isDragging: PropTypes.bool.isRequired,
    itemPreviewComponent: PropTypes.func.isRequired,
    listPreviewComponent: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderItem(type, item) {
    const {
      lists,
      itemPreviewComponent: ItemPreview,
      listPreviewComponent: ListPreview,
    } = this.props;

    switch (type) {
    case ItemTypes.ROW_TYPE:
      return (
        <ItemPreview
          row={item.row}
          rowId={item.rowId}
          rowStyle={item.rowStyle}
          containerWidth={item.containerWidth}
          isGhost={findItemIndex(lists, item.rowId) === -1}
        />
      );
    case ItemTypes.LIST_TYPE:
      return (
        <ListPreview
          list={item.list}
          listId={item.listId}
          listStyle={item.listStyle}
          isGhost={findListIndex(lists, item.listId) === -1}
        />
      );
    default:
      return null;
    }
  }

  render() {
    const { item, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }

    return (
      <div className='KanbanDragLayer'>
        <div style={getStyles(this.props)}>
          {this.renderItem(itemType, item)}
        </div>
      </div>
    );
  }
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

export default DragLayer(collect)(KanbanDragLayer);
