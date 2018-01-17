import { PropTypes } from 'react';
import { PropTypes as CustomPropTypes } from '../propTypes';

export const row = PropTypes.object;
export const rowId = CustomPropTypes.id.isRequired;
export const listId = CustomPropTypes.id.isRequired;
export const rowStyle = PropTypes.object;
export const itemComponent = PropTypes.func;
export const moveRow = PropTypes.func;
export const dragEndRow = PropTypes.func;
export const dropRow = PropTypes.func;
export const dndDisabled = PropTypes.bool.isRequired;
  // React DnD
export const isDragging = PropTypes.bool;
export const connectDropTarget = PropTypes.func;
export const connectDragSource = PropTypes.func;
export const connectDragPreview = PropTypes.func;
