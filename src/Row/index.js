import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import './styles/index.css';

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.row.name
    };
  }

  componentDidMount() {
    if (this.props.row.realtime) {
      this.interval = setInterval(() => {
        this.setState({
          name: this.state.name.split('').reverse().join('')
        });
      }, 5000);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { name } = this.state;

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
