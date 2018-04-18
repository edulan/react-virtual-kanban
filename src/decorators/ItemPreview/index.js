import React from 'react';

import * as propTypes from './propTypes';

export default class ItemPreview extends React.PureComponent {
  static propTypes = propTypes;

  render() {
    // TODO: Grab a proper item width
    const { row, rowStyle, containerWidth: width, isGhost } = this.props;
    const { height } = rowStyle;

    return (
      <div className='ItemWrapper ItemPreviewWrapper' style={{width, height}}>
        <div className='ItemContainer' style={{opacity: isGhost ? 0.5 : 1}}>
          <div className='ItemContent'>
            <p>{row.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
