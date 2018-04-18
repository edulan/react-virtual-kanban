import React from 'react';
import { DragLayer } from 'react-dnd';

import * as ItemTypes from '../types';
import * as propTypes from './propTypes';

// TODO: Extract to utils dir
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

class KanbanDragLayer extends React.PureComponent {
  static propTypes = propTypes;

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
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
