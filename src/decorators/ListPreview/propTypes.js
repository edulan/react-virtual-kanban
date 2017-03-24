import { PropTypes } from 'react';
import { PropTypes as CustomPropTypes } from '../../propTypes';

export const list = PropTypes.object.isRequired;
export const listId = CustomPropTypes.id.isRequired;
export const isGhost = PropTypes.bool.isRequired;
