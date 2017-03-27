import { PropTypes } from 'react';

export const HORIZONTAL_DIRECTION = 'horizontal';
export const VERTICAL_DIRECTION = 'vertical';

export const propTypes = {
  itemCount: PropTypes.number.isRequired,
  itemRenderer: PropTypes.func.isRequired,
  overscan: PropTypes.number,
  direction: PropTypes.oneOf([HORIZONTAL_DIRECTION, VERTICAL_DIRECTION]),
};

export const defaultProps = {
  overscan: 0,
  direction: VERTICAL_DIRECTION,
};
