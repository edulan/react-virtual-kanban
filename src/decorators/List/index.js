import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { WindowScroller } from 'react-virtualized';
import classnames from 'classnames';

import { PropTypes as CustomPropTypes, deprecate } from '../../propTypes';

function ListPlaceholder() {
  return (
    <div>
      Loading list...
    </div>
  );
}

export default class List extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    listId: CustomPropTypes.id.isRequired,
    listIndex: PropTypes.number.isRequired,
    rows: deprecate(PropTypes.array, '`rows` is deprecated. Use `list.rows` instead'),
    isDragging: PropTypes.bool.isRequired,
    listStyle: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      scrollElement: null,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      list,
      listId,
      listStyle,
      connectDragSource,
      connectDropTarget,
      isDragging,
      children,
    } = this.props;

    let listContainerClass = classnames({
      'ListContainer': true,
      'ListPlaceholder': isDragging
    });

    return (
      <div className='ListWrapper' style={listStyle}>
        <div className={listContainerClass}>
          {connectDragSource(
            <div className='ListHeader'>
              <span className='ListTitle'>List {listId} ({list.rows.length})</span>
            </div>
          )}
          {connectDropTarget(
            <div
              ref={(c) => (this.setState({scrollElement: c}, () => this._windowScroller.updatePosition()))}
              className='ListContent'
            >
              <WindowScroller
                ref={(c) => (this._windowScroller = c)}
                scrollElement={this.state.scrollElement}
              >
                {({ height, scrollTop }) => {
                  return this.state.scrollElement ? children({width: 180, height, scrollTop}) : <ListPlaceholder />
                }}
              </WindowScroller>
            </div>
          )}
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
