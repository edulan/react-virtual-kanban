import { PropTypes } from 'react';
import { PropTypes as CustomPropTypes } from '../propTypes';

export const list = PropTypes.object;
export const listId = CustomPropTypes.id.isRequired;
export const listStyle = PropTypes.object;
export const listComponent = PropTypes.func;
export const itemComponent = PropTypes.func;
export const moveRow = PropTypes.func;
export const moveList = PropTypes.func;
export const dropRow = PropTypes.func;
export const dropList = PropTypes.func;
export const dragEndRow = PropTypes.func;
export const overscanRowCount = PropTypes.number;
export const itemCacheKey = PropTypes.func;
export const dndDisabled = PropTypes.bool.isRequired;
  // React DnD
export const isDragging = PropTypes.bool;
export const connectDropTarget = PropTypes.func;
export const connectDragSource = PropTypes.func;
export const connectDragPreview = PropTypes.func;
