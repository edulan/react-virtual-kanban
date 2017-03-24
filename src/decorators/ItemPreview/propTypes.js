import { PropTypes } from 'react';
import { PropTypes as CustomPropTypes } from '../../propTypes';

export const row = PropTypes.object.isRequired;
export const rowId = CustomPropTypes.id.isRequired;
export const containerWidth = PropTypes.number.isRequired;
export const isGhost = PropTypes.bool.isRequired;
