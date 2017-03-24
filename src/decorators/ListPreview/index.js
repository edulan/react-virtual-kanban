import React from 'react';

import * as propTypes from './propTypes';

import PureComponent from '../../PureComponent';

export default class ListPreview extends PureComponent {
  static propTypes = propTypes;

  render() {
    const { listId, isGhost } = this.props;

    return (
      <div className='ListWrapper ListPreviewWrapper'>
        <div className='ListContainer' style={{opacity: isGhost ? 0.5 : 1}}>
          <div className='ListHeader'>
            <span className='ListTitle'>List {listId}</span>
          </div>
        </div>
      </div>
    );
  }
}
