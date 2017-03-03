import React from 'react';

export const PropTypes = {
  id: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.symbol
  ]),

  decorator: React.PropTypes.func,
};

/**
 * Wraps a singular React.PropTypes.[type] with
 * a console.warn call that is only called if the
 * prop is not undefined/null and is only called
 * once.
 * @param  {Object} propType React.PropType type
 * @param  {String} message  Deprecation message
 * @return {Function}        ReactPropTypes checkType
 */
export function deprecate(propType, message) {
  let warned = false;
  return function(...args) {
    const [props, propName] = args;
    const prop = props[propName];
    if (prop !== undefined && prop !== null && !warned) {
      warned = true;
      console.warn(message);
    }
    return propType.call(this, ...args);
  };
}
