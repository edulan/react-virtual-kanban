import React from 'react';
import classnames from 'classnames';

import { decorators } from '../../lib';

export default class List extends decorators.List {
  render() {
    const {
      listId,
      style,
      connectDragSource,
      connectDropTarget,
      isDragging,
      children,
    } = this.props;

    let listContainerClass = classnames({
      'ListContainer': true,
      'ListPlaceholder': isDragging
    });

    return (
      <div className='ListWrapper' style={style}>
        <div className={listContainerClass}>
          {connectDragSource(
            <div className='ListHeader'>
              <span className='ListTitle'>List {listId}</span>
            </div>
          )}
          {connectDropTarget(
            <div className='ListContent'>
              {children}
            </div>
          )}
          <div className='ListFooter'>
            <div className='ListActions'>
              <button className='ListActionItem' onClick={this.props.onAddTask}>Add a task...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
