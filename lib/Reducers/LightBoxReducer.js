'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ACTION_HANDLERS;

var _Types = require('../Actions/Types');

var _Types2 = _interopRequireDefault(_Types);

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _reduxsauce = require('reduxsauce');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initial state
var INITIAL_STATE = exports.INITIAL_STATE = (0, _seamlessImmutable2.default)({
  index: 0,
  isOpen: false,
  images: []
});

// open
var open = function open(state, action) {
  return state.merge({
    isOpen: true,
    images: action.images,
    index: action.index
  });
};

// close
var close = function close(state, action) {
  return state.merge({
    isOpen: false
  });
};

// next
var next = function next(state, action) {
  return state.merge({
    index: (state.index + 1) % state.images.length
  });
};

// previous
var prev = function prev(state, action) {
  return state.merge({
    index: (state.index + state.images.length - 1) % state.images.length
  });
};

// map our types to our handlers
var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LIGHTBOX_OPEN, open), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LIGHTBOX_CLOSE, close), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LIGHTBOX_NEXT, next), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LIGHTBOX_PREV, prev), _ACTION_HANDLERS);

exports.default = (0, _reduxsauce.createReducer)(INITIAL_STATE, ACTION_HANDLERS);