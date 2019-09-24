import { PropTypes } from 'prop-types';

export const lists = PropTypes.array;
export const item = PropTypes.object;
export const itemType = PropTypes.string;
export const currentOffset = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequire,
});
export const isDragging = PropTypes.bool.isRequired;
export const itemPreviewComponent = PropTypes.func.isRequired;
export const listPreviewComponent = PropTypes.func.isRequired;
