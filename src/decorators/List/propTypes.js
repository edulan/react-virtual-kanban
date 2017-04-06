import { PropTypes } from 'react';
import { PropTypes as CustomPropTypes, deprecate } from '../../propTypes';

export const list = PropTypes.object.isRequired;
export const listId = CustomPropTypes.id.isRequired;
export const listStyle = PropTypes.object.isRequired;
export const rows = deprecate(PropTypes.array, '`rows` is deprecated. Use `list.rows` instead');
export const children = PropTypes.node;
export const isDragging = PropTypes.bool.isRequired;
export const connectDragSource = PropTypes.func.isRequired;
export const connectDropTarget = PropTypes.func.isRequired;
