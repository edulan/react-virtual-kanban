import React from 'react';

export const PropTypes = {
  id: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.symbol
  ]),

  decorator: React.PropTypes.func,
};
