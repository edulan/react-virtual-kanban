# React Virtual Kanban
![NPM version](https://img.shields.io/npm/v/react-virtual-kanban.svg?style=flat)
![NPM license](https://img.shields.io/npm/l/react-virtual-kanban.svg?style=flat)
![Travis CI status](https://img.shields.io/travis/edulan/react-virtual-kanban.svg?style=flat)

A Kanban component in React.

Demo available here:
https://edulan.github.io/react-virtual-kanban/

## Features
* Fully virtualized
* Built-in drag and drop support
* Dynamic heights
* Customizable

## Installation
Via npm:
```shell
npm install react-virtual-kanban --save
```

## Usage
### Basic example
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { VirtualKanban } from 'react-virtual-kanban';

// Import only once
import 'react-virtual-kanban/lib/styles.css';

// Declare lists with the following structure
const lists = [
  {
    id: 1,
    rows: [
      {id: 1},
      {id: 2},
      {id: 3},
    ]
  },
  {
    id: 2,
    rows: [
      {id: 4},
      {id: 5},
      {id: 6},
    ]
  }
];

ReactDOM.render(
  <VirtualKanban
    lists={lists}
    width={800}
    height={600}
    listWidth={200}
  />,
  document.getElementById('root')
);
```

### Custom components
By default virtual kanban ships with default `List` and `Item` components but they are totally customizable.

If you just want to change component styles you can do so by adding specific CSS rules. But if you need more flexibility and want to change component structure, you can pass your own list or item components as a props. For example:

```javascript
import React from 'react';

class MyItem extends React.Component {
  render() {
    const { rowId } = this.props;

    return (
      <div>{rowId}</div>
    );
  }
}

ReactDOM.render(
  <VirtualKanban
    lists={lists}
    width={800}
    height={600}
    listWidth={200}
    itemComponent={MyItem}
  />,
  document.getElementById('root')
);
```

### Data structure
React virtual kanban has 2 levels of virtualization, one for lists and other for tasks inside lists. This requires that data structure passed as `lists` prop must follow the following schema:

```
[
  {
    id: any,
    ...listData,
    rows: [
      {
        id: any,
        ...itemData,
      }
    ]
  }
]
```

Note that item and list ids must be unique.

### Handling state
State is partially handled by react virtual kanban. Dragging state is managed internally but callbacks are offered for every action. The purpose of this is to optimize component rendering.

## Dependencies
React virtual kanban is built on top of two amazing libraries:

[react-dnd](https://github.com/react-dnd/react-dnd): for handling drag and drop logic

[react-virtualized](https://github.com/bvaughn/react-virtualized): for managing virtualization stuff

## API
| Property | Type | Default | Description |
|:---------------------------|:------------------|:-----------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| lists | Array | [] | Array of lists to be rendered |
| width | Number | | The width of the kanban board |
| height | Number | | The height of the kanban board |
| listWidth | Number | | Width of each list |
| listComponent | Function | List | List decorator component |
| itemComponent | Function | Item | Item decorator component |
| itemPreviewComponent | Function | ItemPreview | Item preview decorator component |
| listPreviewComponent | Function | ListPreview | List preview decorator component |
| onMoveRow | Function | noop | Move row callback |
| onMoveList | Function | noop | Move list callback |
| onDropRow | Function | noop | Drop row callback |
| onDropList | Function | noop | Drop list callback |
| overscanListCount | Number | 2 | Number of lists to render before/after the visible part |
| overscanRowCount | Number | 2 | Number of row items to render before/after the visible part |
| itemCacheKey | Function | `id` | Key generator function for caching Item components | 

## TODO
* Auto scrolling
* Performance++
* Doc and examples
* Integration with state managers (Redux, Mobx...)
* Animations
