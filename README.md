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
* Custom Item and List components

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
    id: 'list#1',
    rows: [
      {id: 'item#1'},
      {id: 'item#2'},
      {id: 'item#3'},
      {id: 'item#4'}
    ]
  },
  {
    id: 'list#2',
    rows: [
      {id: 'item#5'},
      {id: 'item#6'},
      {id: 'item#7'},
      {id: 'item#8'}
    ]
  },
  {
    id: 'list#3',
    rows: [
      {id: 'item#9'},
      {id: 'item#10'},
      {id: 'item#11'},
      {id: 'item#12'}
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

## API
| Property | Type | Default | Description |
|:---------------------------|:------------------|:-----------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| lists | Array | `[]` | Array of lists to be rendered |
| width | Number | | The width of the kanban board |
| height | Number | | The height of the kanban board |
| listWidth | Number | | Width of each list |
| listComponent | Function | `List` | List decorator component |
| itemComponent | Function | `Item` | Item decorator component |
| itemPreviewComponent | Function | ItemPreview | Item preview decorator component |
| listPreviewComponent | Function | | List preview decorator component |
| onMoveRow | Function | | Move row callback |
| onMoveList | Function | | Move list callback |
| onDropRow | Function | | Drop row callback |
| onDropList | Function | | Drop list callback |
| overscanListCount | Number | 2 | Number of lists to render before/after the visible part |
| overscanRowCount | Number | 2 | Number of row items to render before/after the visible part |
| itemCacheKey | Function | `id` | Key generator function for caching Item components | 

## TODO
* Auto scrolling
* Performance++
* Doc and examples
* Integration with state managers (Redux, Mobx...)
* Animations
