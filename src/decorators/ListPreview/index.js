import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { PropTypes as CustomPropTypes } from '../../propTypes';

export default class ListPreview extends Component {
  static propTypes = {
    listId: CustomPropTypes.id.isRequired,
    listStyle: PropTypes.object.isRequired,
  };

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
