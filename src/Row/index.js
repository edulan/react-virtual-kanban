import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import './styles/index.css';

class Row extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { row } = this.props;
    const { name } = row;

    return (
      <div className='Row'>
        <div className='RowContent'>
          {name}
        </div>
      </div>
    );
  }
}

export default Row;
