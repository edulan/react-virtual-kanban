import React, { Component } from 'react';

const DEFAULT_INITIAL_ELEMENTS = 10;

const HORIZONTAL_DIRECTION = 'horizontal';
const VERTICAL_DIRECTION = 'vertical';

const HORIZONTAL_KEYS = {
  flex: 'row',
  offset: 'offsetWidth',
  dimension: 'width',
  inverse_dimension: 'height',
  scroll: 'scrollLeft'
}

const VERTICAL_KEYS = {
  flex: 'column',
  offset: 'offsetHeight',
  dimension: 'height',
  inverse_dimension: 'width',
  scroll: 'scrollTop'
}

class ChopList extends Component {

  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);

    const direction = props.direction || VERTICAL_DIRECTION;
    const keys = direction === HORIZONTAL_DIRECTION ? HORIZONTAL_KEYS : VERTICAL_KEYS;

    this.state = {
      keys,
      offset: 0,
      burger: 0,
      windowSize: DEFAULT_INITIAL_ELEMENTS,
      initializing: true,
      debug: false,
    };
  }

  getCurrentChildrenMeanSize() {
    const childSizes = [...this.refs.innerScrollList.children].map(child => child[this.state.keys.offset]);

    return childSizes.reduce((h1, h2) => h1 + h2, 0) / childSizes.length;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.rowCount !== nextProps.rowCount ||
           this.state.offset !== nextState.offset ||
           this.state.burger !== nextState.burger ||
           this.state.windowSize !== nextState.windowSize;
  }

  chechInitialization() {
    const { keys, windowSize } = this.state;

    const estimatedSize = this.getCurrentChildrenMeanSize();

    // Just during the initialization
    if (this.state.initializing) {
      const containerSize = this.refs.list[keys.offset];
      const elementsSize = this.refs.innerScrollList.children.length * estimatedSize;

      if (containerSize > elementsSize) {
        const newWindowSize = windowSize + DEFAULT_INITIAL_ELEMENTS

        if (this.state.debug) {
          console.log(`Initializing with ${newWindowSize} elements...`);
        }

        this.setState({
          windowSize: newWindowSize
        });
      } else {
        const newWindowSize = Math.ceil(this.refs.list[keys.offset] / estimatedSize);

        // Set real scrollbar size
        this.refs.innerScrollContainer.style[keys.dimension] = `${this.props.rowCount * estimatedSize}px`;

        this.setState({
          initializing: false,
          windowSize: newWindowSize,
          overscan: this.props.overscan || newWindowSize,
          estimatedSize,
        });
      }
    }
  }

  handleResize() {
    if (!this.state.initializing) {
      return;
    }

    this.setState({
      initializing: true
    });

    this.chechInitialization();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    this.chechInitialization();
  }

  componentDidMount() {
    this.chechInitialization();

    window.addEventListener('resize', this.handleResize);
  }

  onScroll(event) {
    const { rowCount } = this.props;
    const { windowSize, overscan, keys, estimatedSize } = this.state;

    const scrollRelative = this.refs.list[keys.scroll];
    const offset = Math.min(Math.floor(scrollRelative / estimatedSize), rowCount - windowSize - overscan);
    const burger = Math.max(offset - overscan, 0) * estimatedSize;

    if (this.state.debug) {
      console.group();
      console.log('Offset', offset);
      console.log('Element size', estimatedSize);
      console.log('Elements', rowCount);
      console.log('Overscan', overscan);
      console.log('WindowSize', windowSize);
      console.log('Total', rowCount * estimatedSize);
      console.log('Burger', burger);
      console.groupEnd();
    }

    this.setState({
      offset,
      burger: Math.round(burger)
    });
  }

  renderElements(renderedElements, realOffset) {
    return (
      [...Array(renderedElements)].map((x, i) =>
        { return this.props.rowRenderer({key: 'k' + (i + realOffset), index: (i + realOffset)}) }
      )
    );
  }

  render() {
    const { offset, burger, overscan, keys, initializing, windowSize } = this.state;

    const containerStyle = { flexDirection: keys.flex, [`${keys.inverse_dimension}`]: '100%' };
    const burgerStyle = { [`${keys.dimension}`]: burger };

    let renderedElements = windowSize;
    let realOffset = 0;

    if (!initializing) {
      renderedElements = windowSize + Math.min(offset, overscan) + Math.min(this.props.rowCount - (overscan + offset), overscan)
      realOffset = Math.max(offset - overscan, 0);
    }

    return (
      <div ref='list' className="List" onScroll={this.onScroll.bind(this)}>
        <div ref='innerScrollContainer' className="innerScrollContainer" style={ containerStyle }>
          <div ref='burger' className="Burger" style={ burgerStyle }/>
          <div ref='innerScrollList' className="innerScrollList" style={ containerStyle }>
            {renderedElements > 0 && this.renderElements(renderedElements, realOffset)}
          </div>
        </div>
      </div>
    );
  }
};

ChopList.propTypes = {
  rowCount: React.PropTypes.number.isRequired,
  rowRenderer: React.PropTypes.func.isRequired,
  direction: React.PropTypes.oneOf([HORIZONTAL_DIRECTION, VERTICAL_DIRECTION]),
  overscan: React.PropTypes.number,
};

export default ChopList;
