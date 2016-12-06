import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class ListPreview extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { listId, listStyle } = this.props;
    const { width, height } = listStyle;

    return (
      <div className='ListWrapper ListPreviewWrapper' style={{width, height}}>
        <div className='ListContainer'>
          <div className='ListHeader'>
            <span className='ListTitle'>List {listId}</span>
          </div>
        </div>
      </div>
    );
  }
}
