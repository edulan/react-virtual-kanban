import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';

export default class Item extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { rowId, style, connectDragSource, connectDropTarget, isDragging } = this.props;

    const itemContainerClass = classnames({
      'ItemContainer': true,
      'ItemPlaceholder': isDragging,
    });

    return connectDragSource(connectDropTarget(
      <div className='ItemWrapper' style={style}>
        <div className={itemContainerClass}>
          <div className='ItemContent'>
            <p>{rowId}</p>
          </div>
        </div>
      </div>
    ));
  }
}
