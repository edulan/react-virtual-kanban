import React from 'react';
import classnames from 'classnames';

import * as propTypes from './propTypes';

import PureComponent from '../../PureComponent';

export default class Item extends PureComponent {
  static propTypes = propTypes;

  render() {
    const { row, rowStyle, connectDragSource, connectDropTarget, isDragging } = this.props;

    const itemContainerClass = classnames({
      'ItemContainer': true,
      'ItemPlaceholder': isDragging,
    });

    return connectDragSource(connectDropTarget(
      <div className='ItemWrapper' style={rowStyle}>
        <div className={itemContainerClass}>
          <div className='ItemContent'>
            <p>{row.name}</p>
          </div>
        </div>
      </div>
    ));
  }
}
