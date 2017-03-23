import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import underscore from 'underscore';

import { addResizeListener, removeResizeListener } from  './resizeDetector';

const DEFAULT_INITIAL_ELEMENTS = 1; // 10

const HORIZONTAL_DIRECTION = 'horizontal';
const VERTICAL_DIRECTION = 'vertical';

const HORIZONTAL_KEYS = {
  flex: 'row',
  offset: 'offsetWidth',
  dimension: 'width',
  inverse_dimension: 'height',
  scroll: 'scrollLeft',
  before_margin: 'marginLeft',
  after_margin: 'marginRight',
}

const VERTICAL_KEYS = {
  flex: 'column',
  offset: 'offsetHeight',
  dimension: 'height',
  inverse_dimension: 'width',
  scroll: 'scrollTop',
  before_margin: 'marginTop',
  after_margin: 'marginBottom',
}

export default class ChopList extends Component {
  static propTypes = {
    itemCount: PropTypes.number.isRequired,
    itemRenderer: PropTypes.func.isRequired,
    direction: PropTypes.oneOf([HORIZONTAL_DIRECTION, VERTICAL_DIRECTION]),
    overscan: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.onScroll = this.onScroll.bind(this);

    // Review this
    this.handleResize = underscore.throttle(this.handleResize, 150);
    this.onScroll = underscore.throttle(this.onScroll, 50);

    const direction = props.direction || VERTICAL_DIRECTION;
    const keys = direction === HORIZONTAL_DIRECTION ? HORIZONTAL_KEYS : VERTICAL_KEYS;

    this.getOffset = (child) => {
      const style = window.getComputedStyle ? getComputedStyle(child, null) : child.currentStyle;

      // Ai parfavar :facepalm:
      const beforeMargin = parseInt(style[keys.before_margin], 10) || 0;
      const afterMargin = parseInt(style[keys.after_margin], 10) || 0;

      return child[keys.offset] + beforeMargin + afterMargin;
    }
    this.getDimension = () => keys.dimension;
    this.getInverseDimension = () => keys.inverse_dimension;
    this.getScroll = (child) => child[keys.scroll];
    this.getFlex = () => keys.flex;

    this.state = {
      offset: 0,
      burgerSize: 0,
      windowSize: DEFAULT_INITIAL_ELEMENTS,
      initializing: true,
      debug: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.itemCount !== nextProps.itemCount ||
           this.state.scrollContainerSize !== nextState.scrollContainerSize ||
           this.state.offset !== nextState.offset ||
           this.state.burgerSize !== nextState.burgerSize ||
           this.state.windowSize !== nextState.windowSize;
  }

  getRenderedItems() {
    // Skip bacon item
    return [...this.refs.innerScrollList.children].slice(0, -1);
  }

  getRenderedItemsSize() {
    const renderedItems = this.getRenderedItems();

    return renderedItems.reduce((totalSize, child) => {
      return totalSize + this.getOffset(child);
    }, 0);
  }

  chechInitialization() {
    const containerSize = this.getOffset(this.refs.list);

    if (!containerSize) {
      console.warn('Chop container has no size!!');

      this.setState({
        initializing: false,
      });
      return;
    }

    const renderedItemsSize = this.getRenderedItemsSize();
    const renderedItemsCount = this.getRenderedItems().length;
    const estimatedItemSize = renderedItemsSize / renderedItemsCount;

    if (containerSize > renderedItemsSize && renderedItemsCount < this.props.itemCount) {
      this.setState((prevState) => ({
        windowSize: prevState.windowSize + DEFAULT_INITIAL_ELEMENTS
      }));

      return;
    }

    const newWindowSize = Math.ceil(this.getOffset(this.refs.list) / estimatedItemSize);

    this.setState({
      initializing: false,
      windowSize: newWindowSize,
      overscan: this.props.overscan || newWindowSize,
      estimatedItemSize,
      scrollContainerSize: this.props.itemCount * estimatedItemSize,
    });
  }

  handleResize() {
    if (!this.state.initializing) {
      return;
    }

    this.chechInitialization();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    removeResizeListener(findDOMNode(this.refs.innerScrollList), this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.initializing) {
      return;
    }

    this.chechInitialization();
  }

  componentDidMount() {
    this.chechInitialization();

    window.addEventListener('resize', this.handleResize);
    addResizeListener(findDOMNode(this.refs.innerScrollList), this.handleResize.bind(this));
  }

  onScroll(event) {
    const { itemCount } = this.props;
    const { windowSize, overscan, estimatedItemSize } = this.state;

    const scrollRelative = this.getScroll(this.refs.list);
    const offset = Math.min(Math.floor(scrollRelative / estimatedItemSize), Math.max(itemCount - windowSize - overscan, 0));
    const burgerSize = Math.max(offset - overscan, 0) * estimatedItemSize;

    if (this.state.debug) {
      console.group();
      console.log('Offset', offset);
      console.log('Element size', estimatedItemSize);
      console.log('Elements', itemCount);
      console.log('Overscan', overscan);
      console.log('WindowSize', windowSize);
      console.log('Total', itemCount * estimatedItemSize);
      console.log('Burger', burgerSize);
      console.groupEnd();
    }

    this.setState({
      offset,
      burgerSize: Math.round(burgerSize)
    });
  }

  getStyles() {
    const containerStyle = { flexDirection: this.getFlex(), [this.getInverseDimension()]: '100%' };
    const burgerStyle = { [this.getDimension()]: this.state.burgerSize };
    const listStyle = { flexDirection: this.getFlex(), [this.getInverseDimension()]: '100%' };

    if (this.state.scrollContainerSize) {
      containerStyle[this.getDimension()] = this.state.scrollContainerSize;
    }

    return {
      containerStyle,
      burgerStyle,
      listStyle,
    };
  }

  // TODO: Extract me
  getItemsRangeToRender(props, state) {
    const { itemCount } = props;
    const { offset, overscan, windowSize, initializing } = state;

    let itemsCountToRender = Math.min(windowSize, itemCount);
    let renderOffset = 0;

    if (!initializing) {
      const previousOverscanCount = Math.min(offset, overscan);
      const nextOverscanCount = Math.min(itemCount - (overscan + offset), overscan);

      itemsCountToRender = Math.min(previousOverscanCount + windowSize + nextOverscanCount, itemCount);
      renderOffset = Math.max(offset - overscan, 0);
    }

    return Array.from({length: itemsCountToRender}, (_, i) => renderOffset + i);
  }

  renderElements(range) {
    return range.map((i) => this.props.itemRenderer({key: `k${i}`, index: i}));
  }

  render() {
    const { containerStyle, burgerStyle, listStyle } = this.getStyles();

    const range = this.getItemsRangeToRender(this.props, this.state);

    return (
      <div ref='list' className="List" onScroll={this.onScroll}>
        <div ref='innerScrollContainer' className="innerScrollContainer" style={containerStyle}>
          <div className="Burger" style={burgerStyle}/>
          <div ref='innerScrollList' className="innerScrollList" style={listStyle}>
            {this.renderElements(range)}
          </div>
        </div>
      </div>
    );
  }
};
