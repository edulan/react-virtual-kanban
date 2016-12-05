const path = require('path');
const webpack = require('webpack');
var paths = require('./paths');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const libraryName = 'ReactVirtualKanban';

const plugins = [
  new UglifyJsPlugin({
    beautify: true,
    comments: true,
    mangle: false
  }),
];

var config = {
  devtool: 'source-map',
  entry: [
    path.join(paths.appSrc, '*.js')
  ],
  output: {
    path: paths.appLib,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'commonjs',
  },
  // TODO: Should we declare externals?
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-addons-shallow-compare': 'var React.addons.shallowCompare',
    'react-virtualized': 'ReactVirtualized',
    'react-dnd': 'ReactDnD',
    'react-dnd-html5-backend': 'ReactDnDHTML5Backend',
    'classnames': 'classNames'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: paths.appSrc,
        query: require('./babel.prod')
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: paths.appSrc
      }
    ]
  },
  resolve: {
    root: paths.appSrc,
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;
