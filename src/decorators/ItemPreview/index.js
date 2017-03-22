import React from 'react';

import * as propTypes from './propTypes';

import PureComponent from '../../PureComponent';

export default class ItemPreview extends PureComponent {
  static propTypes = propTypes;

  render() {
    // TODO: Grab a proper item width
    const { row, containerWidth: width, isGhost } = this.props;

    return (
      <div className='ItemWrapper ItemPreviewWrapper' style={{width}}>
        <div className='ItemContainer' style={{opacity: isGhost ? 0.5 : 1}}>
          <div className='ItemContent'>
            <p>{row.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
