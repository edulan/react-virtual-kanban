import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classnames from 'classnames';

export default class List extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { listId, style, connectDragSource, connectDropTarget, isDragging, children } = this.props;

    let listContainerClass = classnames({
      'ListContainer': true,
      'ListPlaceholder': isDragging
    });

    return (connectDropTarget(
      <div className='ListWrapper' style={style}>
        <div className={listContainerClass}>
          {connectDragSource(
            <div className='ListHeader'>
              <span className='ListTitle'>List {listId}</span>
            </div>
          )}
          <div className='ListContent'>
            {children}
          </div>
          <div className='ListFooter'>
            <div className='ListActions'>
              <button className='ListActionItem'>Add a task...</button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}
