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

  static defaultProps = {
    overscan: 1,
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
      windowCount: DEFAULT_INITIAL_ELEMENTS,
      initializing: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.itemCount !== nextProps.itemCount ||
           this.state.scrollContainerSize !== nextState.scrollContainerSize ||
           this.state.offset !== nextState.offset ||
           this.state.burgerSize !== nextState.burgerSize ||
           this.state.windowCount !== nextState.windowCount;
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

  shouldRenderItems(totalSize, renderedSize, totalItems, renderedItems) {
    return renderedSize < totalSize && renderedItems < totalItems;
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

    const shouldRenderItems = this.shouldRenderItems(
      containerSize,
      renderedItemsSize,
      this.props.itemCount,
      renderedItemsCount
    );

    if (shouldRenderItems) {
      this.setState((prevState) => ({
        windowCount: prevState.windowCount + DEFAULT_INITIAL_ELEMENTS
      }));
      return;
    }

    const estimatedItemSize = renderedItemsSize / renderedItemsCount;
    const newWindowCount = Math.ceil(containerSize / estimatedItemSize);

    this.setState({
      initializing: false,
      windowCount: newWindowCount,
      // Derived, can be removed
      overscan: this.props.overscan || newWindowCount,
      estimatedItemSize,
      // Remove, it can be derived
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
    const { windowCount, overscan, estimatedItemSize } = this.state;

    const currentScrollPosition = this.getScroll(this.refs.list);

    const startIndex = Math.floor(currentScrollPosition / estimatedItemSize);
    const maxIndex = Math.max(0, itemCount - windowCount - overscan);
    const offsetCount = Math.min(startIndex, maxIndex);
    // const offsetCount = startIndex;

    console.log(startIndex, maxIndex, offsetCount);

    const burgerItemsCount = Math.max(0, offsetCount - overscan);
    const burgerSize = Math.round(burgerItemsCount * estimatedItemSize);

    this.setState({
      offset: offsetCount,
      burgerSize
    });
  }

  getStyles() {
    const { scrollContainerSize, burgerSize } = this.state;

    const containerStyle = { flexDirection: this.getFlex(), [this.getInverseDimension()]: '100%' };
    const listStyle = { flexDirection: this.getFlex(), [this.getInverseDimension()]: '100%' };
    const burgerStyle = { [this.getDimension()]: burgerSize };

    if (scrollContainerSize) {
      containerStyle[this.getDimension()] = scrollContainerSize;
    }

    return {
      containerStyle,
      burgerStyle,
      listStyle,
    };
  }

  // TODO: Extract me and review carefully
  getItemsRangeToRender(props, state) {
    const { itemCount } = props;
    const { offset, overscan, windowCount, initializing } = state;

    let itemsCountToRender = Math.min(windowCount, itemCount - offset);
    let renderOffset = 0;

    console.log(`itemsCountToRender`, itemsCountToRender);

    if (!initializing) {
      const previousOverscanCount = Math.min(offset, overscan);
      const nextOverscanCount = Math.min(itemCount - (overscan + offset), overscan);

      itemsCountToRender = Math.min(previousOverscanCount + windowCount + nextOverscanCount, itemCount);
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
