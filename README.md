# React Virtual Kanban
![](https://img.shields.io/travis/edulan/react-virtual-kanban.svg)

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

### Customizing components
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

// ...

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

## TODO
* Auto scrolling
* Performance++
* Doc and examples
* Integration with state managers (Redux, Mobx...)
* Animations
