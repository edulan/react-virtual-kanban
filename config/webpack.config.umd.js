const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var paths = require('./paths');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const libraryName = 'ReactVirtualKanban';

const plugins = [
  new UglifyJsPlugin({
    beautify: true,
    comments: true,
    mangle: false
  }),
  new ExtractTextPlugin('[name].css', {
    allChunks: false,
    beautify: true,
    mangle: false
  })
];

var config = {
  devtool: 'source-map',
  entry: {
    'react-virtual-kanban': path.join(paths.appSrc, 'index.js')
  },
  output: {
    path: paths.appDist,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
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
        test: /\.css$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: paths.appSrc
      }
    ]
  },
  // resolve: {
  //   root: path.resolve('./src'),
  //   extensions: ['', '.js']
  // },
  plugins: plugins
};

module.exports = config;
