import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Grid } from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import DragLayer from '../DragLayer';
import defaultItemComponent from '../decorators/Item';
import defaultListComponent from '../decorators/List';
import defaultItemPreviewComponent from '../decorators/ItemPreview';
import defaultListPreviewComponent from '../decorators/ListPreview';

import List from '../List';

class Kanban extends Component {
  static propTypes = {
    lists: PropTypes.array,
    width: PropTypes.number,
    listWidth: PropTypes.number,
    height: PropTypes.number,
    listComponent: PropTypes.func,
    itemComponent: PropTypes.func,
    itemPreviewComponent: PropTypes.func,
    listPreviewComponent: PropTypes.func,
    onMoveRow: PropTypes.func,
    onMoveList: PropTypes.func,
  }

  static defaultProps = {
    itemComponent: defaultItemComponent,
    listComponent: defaultListComponent,
    itemPreviewComponent: defaultItemPreviewComponent,
    listPreviewComponent: defaultListPreviewComponent,
    onMoveRow: () => {},
    onMoveList: () => {},
  }

  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lists !== this.props.lists) {
      this._grid.forceUpdate();
    }
  }

  renderList({ columnIndex, key, style }) {
    const { id, rows } = this.props.lists[columnIndex];

    // TODO: Select which component should be rendered (Draggable or ReadOnly list)
    // TODO: Create a SortableList component
    return (
      <List
        key={key}
        listId={id}
        listIndex={columnIndex}
        listStyle={style}
        listComponent={this.props.listComponent}
        itemComponent={this.props.itemComponent}
        rows={rows}
        moveRow={this.props.onMoveRow}
        moveList={this.props.onMoveList}
      />
    );

  }

  render() {
    const { lists, width, height, listWidth, itemPreviewComponent, listPreviewComponent } = this.props;

    return (
      <div>
        <Grid
          className='KanbanGrid'
          ref={(c) => (this._grid = c)}
          width={width}
          height={height}
          columnWidth={listWidth}
          rowHeight={height - scrollbarSize()}
          columnCount={lists.length}
          rowCount={1}
          cellRenderer={this.renderList}
          overscanColumnCount={5}
        />
        <DragLayer
          itemPreviewComponent={itemPreviewComponent}
          listPreviewComponent={listPreviewComponent}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
