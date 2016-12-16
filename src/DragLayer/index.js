import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragLayer } from 'react-dnd';

import * as ItemTypes from '../types';

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
    listWidth: PropTypes.number.isRequired,
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
    let Preview;

    switch (type) {
    case ItemTypes.ROW_TYPE:
      Preview = this.props.itemPreviewComponent;

      return <Preview listWidth={this.props.listWidth} rowId={item.rowId} rowStyle={item.rowStyle} />;
    case ItemTypes.LIST_TYPE:
      Preview = this.props.listPreviewComponent;

      return <Preview listWidth={this.props.listWidth} listId={item.listId} listStyle={item.listStyle} />;
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
