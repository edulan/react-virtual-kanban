import { PropTypes } from 'prop-types';
import { PropTypes as CustomPropTypes } from '../../propTypes';

export const row = PropTypes.object.isRequired;
export const rowId = CustomPropTypes.id.isRequired;
export const listId = CustomPropTypes.id.isRequired;
export const isDragging = PropTypes.bool.isRequired;
export const rowStyle = PropTypes.object.isRequired;
export const connectDragSource = PropTypes.func.isRequired;
export const connectDropTarget = PropTypes.func.isRequired;
