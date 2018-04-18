import React from 'react';

import * as propTypes from './propTypes';

export default class ListPreview extends React.PureComponent {
  static propTypes = propTypes;

  render() {
    const { listId, listStyle, isGhost } = this.props;
    const { width, height } = listStyle;

    return (
      <div className='ListWrapper ListPreviewWrapper' style={{width, height}}>
        <div className='ListContainer' style={{opacity: isGhost ? 0.5 : 1}}>
          <div className='ListHeader'>
            <span className='ListTitle'>List {listId}</span>
          </div>
        </div>
      </div>
    );
  }
}
