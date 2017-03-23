import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import SortableItem from '../SortableItem';
import ChopList from '../ChopList';

import { LIST_TYPE, ROW_TYPE } from '../types';
import * as dragSpec from './dragSpec';
import * as dropSpec from './dropSpec';
import * as propTypes from './propTypes';

import PureComponent from '../PureComponent';

class SortableList extends PureComponent {
  static propTypes = propTypes;

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list.rows !== this.props.list.rows && !!this._list) {
      this._list.forceUpdate();
    }
  }

  renderRow({ index, key, style }) {
    const row = this.props.list.rows[index];

    return (
      <SortableItem
        key={row.id}
        row={row}
        rowId={row.id}
        listId={this.props.listId}
        rowStyle={style}
        itemComponent={this.props.itemComponent}
        moveRow={this.props.moveRow}
        dropRow={this.props.dropRow}
        dragEndRow={this.props.dragEndRow}
        findItemIndex={this.props.findItemIndex}
      />
    );
  }

  render() {
    const {
      list,
      listId,
      listComponent: DecoratedList,
      isDragging,
      connectDragSource,
      connectDropTarget,
      listStyle,
    } = this.props;

    return (
      <DecoratedList
        list={list}
        listId={listId}
        rows={list.rows}
        listStyle={listStyle}
        isDragging={isDragging}
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
      >
        <ChopList
          ref={(c) => (this._list = c)}
          rowCount={list.rows.length}
          rowRenderer={this.renderRow}
        />
      </DecoratedList>
    );
  }
}

const connectDrop = DropTarget([LIST_TYPE, ROW_TYPE], dropSpec, connect => ({
  connectDropTarget: connect.dropTarget(),
}))

const connectDrag = DragSource(LIST_TYPE, dragSpec, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))

export default connectDrop(connectDrag(SortableList));
