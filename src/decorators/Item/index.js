import React from 'react';
import classnames from 'classnames';

import './styles/index.css';

// TODO: Implement SCU

/**
 * Default item decorator component
 *
 * @return {React.Element}
 */
export default function Item({ row, style, connectDragSource, connectDropTarget, isDragging }) {
  const itemContainerClass = classnames({
    'ItemContainer': true,
    'ItemPlaceholder': isDragging,
  });

  return (
    <div className='ItemWrapper' style={style}>
      {connectDragSource(connectDropTarget(
        <div className={itemContainerClass}>
          <div className='ItemContent'>
            <p>{row.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
