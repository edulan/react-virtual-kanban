import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class ItemPreview extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    // TODO: Grab a proper item width
    const { row, rowStyle, listWidth: width } = this.props;
    const { height } = rowStyle;

    return (
      <div className='ItemWrapper ItemPreviewWrapper' style={{width, height}}>
        <div className='ItemContainer'>
          <div className='ItemContent'>
            <p>{row.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
