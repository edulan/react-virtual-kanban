import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { PropTypes as CustomPropTypes } from '../../propTypes';

export default class ItemPreview extends Component {
  static propTypes = {
    row: PropTypes.object.isRequired,
    rowId: CustomPropTypes.id.isRequired,
    rowStyle: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    // TODO: Grab a proper item width
    const { row, rowStyle, containerWidth: width } = this.props;
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
