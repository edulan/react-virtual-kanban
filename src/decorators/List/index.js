import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';

import { PropTypes as CustomPropTypes } from '../../propTypes';

export default class List extends Component {
  static propTypes = {
    listId: CustomPropTypes.id.isRequired,
    listIndex: PropTypes.number.isRequired,
    rows: PropTypes.array.isRequired,
    isDragging: PropTypes.bool.isRequired,
    listStyle: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      listId,
      rows,
      listStyle,
      connectDragSource,
      connectDropTarget,
      isDragging,
      children,
      totalChildrenHeight,
    } = this.props;

    let listContainerClass = classnames({
      'ListContainer': true,
      'ListPlaceholder': isDragging
    });

    console.log('this.props', this.props);
    console.log('totalChildrenHeight', totalChildrenHeight);

    return connectDropTarget(
      <div className='ListWrapper' style={listStyle}>
        <div className={listContainerClass}>
          {connectDragSource(
            <div className='ListHeader'>
              <span className='ListTitle'>List {listId} ({rows.length})</span>
            </div>
          )}
          <div className='ListContent' style={{height: totalChildrenHeight}}>
            {children}
          </div>
          <div className='ListFooter'>
            <div className='ListActions'>
              <button className='ListActionItem'>Add a task...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
