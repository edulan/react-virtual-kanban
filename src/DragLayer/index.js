import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';

import Row from '../Row';
import ListPreview from '../ListPreview';
import * as ItemTypes from '../types';

import './styles/index.css';

function getStyles({ currentOffset }) {
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform: transform,
  };
}

class KanbanDragLayer extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(type, item) {
    switch (type) {
    case ItemTypes.ROW_TYPE:
      return (
        // TODO: Move me toa RowPreview component
        <div className='RowPreviewWrapper' style={{width: this.props.columnWidth - 14}}>
          <Row row={item.row} />
        </div>
      );
    case ItemTypes.LIST_TYPE:
      return (
        <div className='ListPreviewWrapper' style={{width: 200}}>
          <ListPreview listId={item.listId} />
        </div>
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
      <div className='DragLayer'>
        <div style={getStyles(this.props)}>
          {this.renderItem(itemType, item)}
        </div>
      </div>
    );
  }
}

KanbanDragLayer.propTypes = {
  item: PropTypes.object,
  itemType: PropTypes.string,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired
};

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

export default DragLayer(collect)(KanbanDragLayer);
