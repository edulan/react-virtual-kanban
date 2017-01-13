import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';

import { PropTypes as CustomPropTypes } from '../../propTypes';

export default class Item extends Component {
  static propTypes = {
    rowId: CustomPropTypes.id.isRequired,
    listId: CustomPropTypes.id.isRequired,
    rowIndex: PropTypes.number.isRequired,
    listIndex: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    rowStyle: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { rowId, rowStyle, connectDragSource, connectDropTarget, isDragging } = this.props;

    const itemContainerClass = classnames({
      'ItemContainer': true,
      'ItemPlaceholder': isDragging,
    });

    return connectDragSource(connectDropTarget(
      <div className='ItemWrapper' style={rowStyle}>
        <div className={itemContainerClass}>
          <div className='ItemContent'>
            <p>{rowId}</p>
          </div>
        </div>
      </div>
    ));
  }
}
