import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class ItemPreview extends Component {
  static propTypes = {
    rowId: PropTypes.string.isRequired,
    rowStyle: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    // TODO: Grab a proper item width
    const { rowId, rowStyle } = this.props;
    const { height } = rowStyle;

    return (
      <div className='ItemWrapper ItemPreviewWrapper' style={{height}}>
        <div className='ItemContainer'>
          <div className='ItemContent'>
            <p>{rowId}</p>
          </div>
        </div>
      </div>
    );
  }
}
