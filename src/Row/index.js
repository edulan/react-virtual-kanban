import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import './styles/index.css';

function shouldInvalidateRow(props, nextProps) {
  return props.row.name !== nextProps.row.name;
}

class Row extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillReceiveProps(nextProps) {
    if (shouldInvalidateRow(this.props, nextProps)) {
      this.props.invalidateRow(nextProps.index);
    }
  }

  render() {
    const { row } = this.props;
    const { name } = row;

    return (
      <div className='Row'>
        <div className='RowContent'>
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

export default Row;
