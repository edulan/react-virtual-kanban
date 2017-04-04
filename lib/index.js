'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualKanban = exports.decorators = undefined;

var _Kanban = require('./Kanban');

var _Kanban2 = _interopRequireDefault(_Kanban);

var _decorators = require('./decorators');

var decorators = _interopRequireWildcard(_decorators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.decorators = decorators;
exports.VirtualKanban = _Kanban2.default;