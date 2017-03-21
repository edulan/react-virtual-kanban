import React from 'react';
import classnames from 'classnames';
import { decorators } from '../';

export default class Item extends decorators.Item {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { rowIndex, listIndex } = this.props;

    this.props.updateItem(rowIndex, listIndex);
  }

  render() {
    const { row, rowStyle, connectDragSource, connectDropTarget, isDragging } = this.props;

    const itemContainerClass = classnames({
      'ItemContainer': true,
      'ItemPlaceholder': isDragging,
    });

    return connectDragSource(connectDropTarget(
      <div className='ItemWrapper' style={rowStyle} onClick={this.onClick}>
        <div className={itemContainerClass}>
          <div className='ItemContent'>
            <p>{row.name}</p>
          </div>
        </div>
      </div>
    ));
  }
}
