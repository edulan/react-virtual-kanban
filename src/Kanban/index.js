import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ListsContainer from './ListsContainer';

import { updateLists } from './services/update_lists';
import { generateLists } from './services/generate_lists';

// TODO: Calculate in hover callback
function calculateInc(delta, width) {
  const threshold = width - delta;

  if (threshold < width * 0.25) return 50;
  if (threshold < width * 0.5) return 20;
  if (threshold < width) return 10;

  return 0;
}

class Kanban extends Component {
  static defaultProps = {
    columnWidth: 200,
  };

  constructor(props) {
    super(props);

    this.state = {
      scrollLeft: 0,
      isScrolling: false,
      lists: generateLists(25, 50),
    };

    this.moveRow = this.moveRow.bind(this);
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.stopScrolling = this.stopScrolling.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  moveRow(from, to) {
    this.setState({lists: updateLists(this.state.lists, {from, to}), from, to});
  }

  scrollToLeft(delta) {
    const inc = calculateInc(delta, this.props.columnWidth);
    // console.log(`scrollToLeft`);

    this.setState({isScrolling: true}, () => {
      this._scrollInterval = setInterval(() => this.updateScroll(-inc), 100);
    });
  }

  scrollToRight(delta) {
    const inc = calculateInc(delta, this.props.columnWidth);
    // console.log(`scrollToRight`);

    this.setState({isScrolling: true}, () => {
      this._scrollInterval = setInterval(() => this.updateScroll(inc), 10);
    });
  }

  scrollToTop() {
    // console.log(`scrollToTop`);
    this.setState({isScrolling: true});
  }

  scrollToBottom() {
    // console.log(`scrollToBottom`);
    this.setState({isScrolling: true});
  }

  updateScroll(inc) {
    // console.log(`updating scroll...`, inc);
    this.setState((state) => ({scrollLeft: state.scrollLeft + inc}));
  }

  stopScrolling() {
    if (!this.state.isScrolling) return;

    // console.log(`stop scrolling...`);
    this.setState({isScrolling: false}, () => {
      if (!this._scrollInterval) return;

      clearInterval(this._scrollInterval);
      this._scrollInterval = null;
    });
  }

  render() {
    const { width, height, columnWidth } = this.props;
    const { scrollLeft, isScrolling, lists } = this.state;

    return (
      <ListsContainer
        width={width}
        height={height}
        columnWidth={columnWidth}
        lists={lists}
        isScrolling={isScrolling}
        scrollLeft={scrollLeft}
        scrollToLeft={this.scrollToLeft}
        scrollToRight={this.scrollToRight}
        scrollToTop={this.scrollToTop}
        scrollToBottom={this.scrollToBottom}
        stopScrolling={this.stopScrolling}
        moveRow={this.moveRow}
      />
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
