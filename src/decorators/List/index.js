import React from 'react';
import classnames from 'classnames';

import * as propTypes from './propTypes';

import PureComponent from '../../PureComponent';

export default class List extends PureComponent {
  static propTypes = propTypes;

  render() {
    const {
      list,
      listId,
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
      <div className='ListWrapper'>
        <div className={listContainerClass}>
          {connectDragSource(
            <div className='ListHeader'>
              <span className='ListTitle'>List {listId} ({list.rows.length})</span>
            </div>
          )}
          {connectDropTarget(
            <div className='ListContent'>
              {children}
            </div>
          )}
          <div className='ListFooter'>
            <div className='ListActions'>
              <button className='ListActionItem'>Add a task...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
