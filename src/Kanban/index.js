import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import withScrolling, { createHorizontalStrength } from 'react-dnd-scrollzone';
import { Grid } from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import DragLayer from '../DragLayer';
import * as decorators from '../decorators';

import SortableList from '../SortableList';

const GridWithScrollZone = withScrolling(Grid);
const horizontalStrength = createHorizontalStrength(200);

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
    onDropRow: PropTypes.func,
    onDropList: PropTypes.func,
  }

  static defaultProps = {
    itemComponent: decorators.Item,
    listComponent: decorators.List,
    itemPreviewComponent: decorators.ItemPreview,
    listPreviewComponent: decorators.ListPreview,
    onMoveRow: () => {},
    onMoveList: () => {},
    onDropRow: () => {},
    onDropList: () => {},
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
      this._grid.wrappedInstance.forceUpdate();
    }
  }

  renderList({ columnIndex, key, style }) {
    const { id, rows } = this.props.lists[columnIndex];

    return (
      <SortableList
        key={key}
        listId={id}
        listIndex={columnIndex}
        listStyle={style}
        listComponent={this.props.listComponent}
        itemComponent={this.props.itemComponent}
        rows={rows}
        moveRow={this.props.onMoveRow}
        moveList={this.props.onMoveList}
        dropRow={this.props.onDropRow}
        dropList={this.props.onDropList}
      />
    );

  }

  render() {
    const { lists, width, height, listWidth, itemPreviewComponent, listPreviewComponent } = this.props;

    return (
      <div>
        <GridWithScrollZone
          lists={lists}
          className='KanbanGrid'
          // Needed for fixing disappearing items when scrolling
          containerStyle={{pointerEvents: 'auto'}}
          ref={(c) => (this._grid = c)}
          width={width}
          height={height}
          columnWidth={listWidth}
          rowHeight={height - scrollbarSize()}
          columnCount={lists.length}
          rowCount={1}
          cellRenderer={this.renderList}
          overscanColumnCount={2}
          horizontalStrength={horizontalStrength}
          verticalStrength={() => {}}
          speed={100}
        />
        <DragLayer
          listWidth={listWidth}
          itemPreviewComponent={itemPreviewComponent}
          listPreviewComponent={listPreviewComponent}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
