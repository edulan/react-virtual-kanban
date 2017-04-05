'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropTypes = undefined;
exports.deprecate = deprecate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = exports.PropTypes = {
  id: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.symbol]),

  decorator: _react2.default.PropTypes.func
};

/**
 * Wraps a singular React.PropTypes.[type] with
 * a console.warn call that is only called if the
 * prop is not undefined/null and is only called
 * once.
 * @param  {Object} propType React.PropType type
 * @param  {String} message  Deprecation message
 * @return {Function}        ReactPropTypes checkType
 */
function deprecate(propType, message) {
  var warned = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var props = args[0],
        propName = args[1];

    var prop = props[propName];
    if (prop !== undefined && prop !== null && !warned) {
      warned = true;
    }
    return propType.call.apply(propType, [this].concat(args));
  };
}