import React, { Component } from 'react';

import './styles/index.css';

class Row extends Component {
  render() {
    const { row } = this.props;
    const { name } = row;

    return (
      <div className='Row'>{name}</div>
    );
  }
}

export default Row;
