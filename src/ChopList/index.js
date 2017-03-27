import React, { Component } from 'react';
import Measure from 'react-measure';
import { property } from 'lodash';

import { propTypes, defaultProps, HORIZONTAL_DIRECTION, VERTICAL_DIRECTION } from './propTypes';
import { getItemsRangeToRender } from  './itemsChopper';

// TODO: Move to a prop
const DEFAULT_INITIAL_ELEMENTS = 1; // 10

const HORIZONTAL_LENSES = {
  size: property('offsetWidth'),
  scroll: property('scrollLeft'),
  dimension: property('width'),
  beforeMargin: property('marginLeft'),
  afterMargin: property('marginRight'),
  makeStyles: (width) => ({width}),
  log: () => {},
}

const VERTICAL_LENSES = {
  size: property('offsetHeight'),
  scroll: property('scrollTop'),
  dimension: property('height'),
  beforeMargin: property('marginTop'),
  afterMargin: property('marginBottom'),
  makeStyles: (height) => ({height}),
  log: (...args) => console.log(...args),
}

export default class ChopList extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);

    // Review this
    // this.onResize = debounce(this.onResize, 150);
    // this.onScroll = throttle(this.onScroll, 50);

    this.lenses = props.direction === HORIZONTAL_DIRECTION ? HORIZONTAL_LENSES : VERTICAL_LENSES;

    this.getSize = (child) => {
      if (!child) {
        console.warn(`empty child`);
        return 0;
      }

      // TODO: get-node-dimensions package for this
      const style = window.getComputedStyle ? getComputedStyle(child, null) : child.currentStyle;

      const size = this.lenses.size(child);
      const beforeMargin = parseInt(this.lenses.beforeMargin(style), 10) || 0;
      const afterMargin = parseInt(this.lenses.afterMargin(style), 10) || 0;

      return beforeMargin + size + afterMargin;
    }

    this.state = {
      offset: 0, // index
      windowCount: DEFAULT_INITIAL_ELEMENTS, // amount
      burgerCount: 0, // amount
      estimatedItemSize: 0, // px
      isBuffering: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.itemCount !== nextProps.itemCount ||
           this.state.estimatedItemSize !== nextState.estimatedItemSize ||
           this.state.offset !== nextState.offset ||
           this.state.burgerCount !== nextState.burgerCount ||
           this.state.windowCount !== nextState.windowCount;
  }

  getRenderedItems() {
    return [...this.refs.innerScrollList.children];
  }

  getRenderedItemsSizes() {
    return this.getRenderedItems().map((child) => this.getSize(child));
  }

  getRenderedItemsTotalSize() {
    return this.getRenderedItemsSizes().reduce((totalSize, size) => totalSize + size, 0);
  }

  shouldRenderMoreItems(totalSize, renderedSize, totalItems, renderedItems) {
    return renderedSize < totalSize && renderedItems < totalItems;
  }

  startBuffering() {
    this.lenses.log('buffering...');
    const containerSize = this.getSize(this.refs.list);

    if (!containerSize) {
      this.lenses.log('Chop container has no size!!');
      return;
    }

    const renderedItemsTotalSize = this.getRenderedItemsTotalSize();
    const renderedItemsCount = this.getRenderedItems().length;

    // TODO: Watch out for 0 division
    if (renderedItemsCount === 0) {
      return;
    }

    if (renderedItemsTotalSize === 0) {
      return;
    }

    const shouldRenderMoreItems = this.shouldRenderMoreItems(
      containerSize,
      renderedItemsTotalSize,
      this.props.itemCount,
      renderedItemsCount
    );

    if (shouldRenderMoreItems) {
      this.lenses.log(`need more items: rendered ${renderedItemsCount} items`);
      this.setState((prevState) => ({
        isBuffering: true,
        windowCount: prevState.windowCount + DEFAULT_INITIAL_ELEMENTS,
      }));
      return;
    }

    const estimatedItemSize = renderedItemsTotalSize / renderedItemsCount;
    const newWindowCount = Math.ceil(containerSize / estimatedItemSize);

    this.setState({
      isBuffering: false,
      windowCount: newWindowCount,
      estimatedItemSize,
    });
  }

  getOverscan() {
    return this.props.overscan || this.state.windowCount;
  }

  onResize() {
    if (this.state.isBuffering) {
      return;
    }

    this.lenses.log(`onResize`);
    this.startBuffering();
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.onResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isBuffering) {
      return;
    }

    this.lenses.log(`didUpdate`);
    this.startBuffering();
  }

  componentDidMount() {
    this.startBuffering();
    // window.addEventListener('resize', this.onResize);
  }

  onScroll(event) {
    const { itemCount } = this.props;
    const { windowCount, estimatedItemSize } = this.state;
    const overscan = this.getOverscan();

    // WARNING: Sometimes refs.list is undefined! Protect from that
    const currentScrollPosition = this.lenses.scroll(this.refs.list);

    const startIndex = Math.floor(currentScrollPosition / estimatedItemSize);
    const maxIndex = Math.max(0, itemCount - windowCount - overscan);
    const offsetCount = Math.min(startIndex, maxIndex);
    const burgerCount = Math.max(0, offsetCount - overscan);

    this.setState({
      offset: offsetCount,
      burgerCount
    });
  }

  getClasses() {
    if (this.props.direction === HORIZONTAL_DIRECTION) {
      return 'scrollHorizontal';
    }

    if (this.props.direction === VERTICAL_DIRECTION) {
      return 'scrollVertical';
    }

    return '';
  }

  getStyles() {
    const { itemCount } = this.props;
    const { estimatedItemSize, burgerCount } = this.state;

    const containerSize = Math.round(itemCount * estimatedItemSize);
    const burgerSize = Math.round(burgerCount * estimatedItemSize);

    const containerStyle = this.lenses.makeStyles(containerSize);
    const burgerStyle = this.lenses.makeStyles(burgerSize);

    return {
      containerStyle,
      burgerStyle,
    };
  }

  renderElements() {
    const { itemCount } = this.props;
    const { offset, windowCount } = this.state;
    const overscan = this.getOverscan();
    const range = getItemsRangeToRender({itemCount, windowCount, offset, overscan});

    return range.map((i) => this.props.itemRenderer({key: `k${i}`, index: i}));
  }

  render() {
    const scrollClassName = this.getClasses();
    const { containerStyle, burgerStyle } = this.getStyles();

    return (
      <div ref='list' className='ChopList' onScroll={this.onScroll}>
        <div ref='innerScrollContainer' className={`innerScrollContainer ${scrollClassName}`} style={containerStyle}>
          <div className='Burger' style={burgerStyle}/>
          <Measure
            onMeasure={this.onResize}
          >
            <div ref='innerScrollList' className={`innerScrollList ${scrollClassName}`}>
              {this.renderElements()}
            </div>
          </Measure>
        </div>
      </div>
    );
  }
};
