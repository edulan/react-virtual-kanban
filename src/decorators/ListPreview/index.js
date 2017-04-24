import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { PropTypes as CustomPropTypes } from '../../propTypes';

export default class ListPreview extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    listId: CustomPropTypes.id.isRequired,
    listStyle: PropTypes.object.isRequired,
    isGhost: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

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
