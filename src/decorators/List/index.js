import React from 'react';
import classnames from 'classnames';

import './styles/index.css';

// TODO: Implement SCU

/**
 * Default list decorator component
 *
 * @return {React.Element}
 */
export default function List({ listId, style, connectDragSource, connectDropTarget, isDragging, children }) {
  let listContainerClass = classnames({
    'ListContainer': true,
    'ListPlaceholder': isDragging
  });

  return (connectDropTarget(
    <div className='ListWrapper' style={style}>
      <div className={listContainerClass}>
        {connectDragSource(
          <div className='ListHeader'>
            <span className='ListTitle'>List {listId}</span>
          </div>
        )}
        <div className='ListContent'>
          {children}
        </div>
        <div className='ListFooter'>
          <div className='ListActions'>
            <button className='ListActionItem'>Add a task...</button>
          </div>
        </div>
      </div>
    </div>
  ));
}
