import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';

import Row from '../Row';
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

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(type, item, lists) {
    const { listIndex, index } = item;

    switch (type) {
    case ItemTypes.ROW_TYPE:
      return (
        // TODO: Move me toa RowPreview component
        <div style={{width: this.props.columnWidth - 14, transform: 'rotate(4deg)'}}>
          <Row row={lists[listIndex][index]} invalidateRow={() => {}} />
        </div>
      );
    default:
      return null;
    }
  }

  render() {
    const { item, itemType, isDragging, lists } = this.props;

    if (!isDragging) {
      return null;
    }

    return (
      <div className='DragLayer'>
        <div style={getStyles(this.props)}>
          {this.renderRow(itemType, item, lists)}
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
