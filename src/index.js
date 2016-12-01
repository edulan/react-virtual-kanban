import React from 'react';
import ReactDOM from 'react-dom';
import { AutoSizer } from 'react-virtualized';
import Perf from 'react-addons-perf';

import Kanban from './Kanban';

import { generateLists } from './utils/generate_lists';

import 'react-virtualized/styles.css';
import './index.css';

window.Perf = Perf;

const lists = generateLists(50, 70);

/**
 * List decorator component
 *
 * @return {React.Element}
 */
function ListDecorator({ listId, children, style, connectDragSource, connectDropTarget, isDragging }) {
  let listContainerClass = 'ListContainer';

  if (isDragging) {
    // List placeholder styles
    listContainerClass = `${listContainerClass} ListPlaceholder`;
  }

  return (connectDropTarget(
    <div className='ListWrapper' style={style}>
      <div className={listContainerClass}>
        {connectDragSource(
          <div className='ListHeader'>
            <h2>sdafsadfdsa</h2>
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

function CardDecorator() {
  return null;
}

ReactDOM.render(
  <div className='KanbanWrapper'>
    <AutoSizer>
      {({ width, height }) => {
        return (
          <Kanban
            lists={lists}
            width={width}
            height={height}
            listComponent={ListDecorator}
            cardComponent={CardDecorator}
          />
        );
      }}
    </AutoSizer>
  </div>,
  document.getElementById('root')
);
