import { Component } from 'react';

export default class BaseComponent extends Component {
  componentWillReceiveProps(nextProps) {
    const propTypes = this.constructor.propTypes;

    if (!propTypes) {
      return;
    }

    const diffPropNames = Object
      .keys(nextProps || {})
      .filter((propName) => !propTypes[propName]);

    if (diffPropNames.length === 0) {
      return;
    }

    console.warn(`${this.constructor.displayName} received unexpected props \`${[...diffPropNames].join('`, `')}\``);
  }
}
