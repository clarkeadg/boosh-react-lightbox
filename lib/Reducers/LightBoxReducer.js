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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWR1Y2Vycy9MaWdodEJveFJlZHVjZXIuanMiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImluZGV4IiwiaXNPcGVuIiwiaW1hZ2VzIiwib3BlbiIsInN0YXRlIiwiYWN0aW9uIiwibWVyZ2UiLCJjbG9zZSIsIm5leHQiLCJsZW5ndGgiLCJwcmV2IiwiQUNUSU9OX0hBTkRMRVJTIiwiTElHSFRCT1hfT1BFTiIsIkxJR0hUQk9YX0NMT1NFIiwiTElHSFRCT1hfTkVYVCIsIkxJR0hUQk9YX1BSRVYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTtBQUNPLElBQU1BLHdDQUFnQixpQ0FBVTtBQUNyQ0MsU0FBTyxDQUQ4QjtBQUVyQ0MsVUFBUSxLQUY2QjtBQUdyQ0MsVUFBUTtBQUg2QixDQUFWLENBQXRCOztBQU1QO0FBQ0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQ1hELE1BQU1FLEtBQU4sQ0FBWTtBQUNWTCxZQUFRLElBREU7QUFFVkMsWUFBUUcsT0FBT0gsTUFGTDtBQUdWRixXQUFPSyxPQUFPTDtBQUhKLEdBQVosQ0FEVztBQUFBLENBQWI7O0FBT0E7QUFDQSxJQUFNTyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FDWkQsTUFBTUUsS0FBTixDQUFZO0FBQ1ZMLFlBQVE7QUFERSxHQUFaLENBRFk7QUFBQSxDQUFkOztBQUtBO0FBQ0EsSUFBTU8sT0FBTyxTQUFQQSxJQUFPLENBQUNKLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQ1hELE1BQU1FLEtBQU4sQ0FBWTtBQUNWTixXQUFPLENBQUNJLE1BQU1KLEtBQU4sR0FBYyxDQUFmLElBQW9CSSxNQUFNRixNQUFOLENBQWFPO0FBRDlCLEdBQVosQ0FEVztBQUFBLENBQWI7O0FBS0E7QUFDQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBQ04sS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FDWEQsTUFBTUUsS0FBTixDQUFZO0FBQ1ZOLFdBQU8sQ0FBQ0ksTUFBTUosS0FBTixHQUFjSSxNQUFNRixNQUFOLENBQWFPLE1BQTNCLEdBQW9DLENBQXJDLElBQTBDTCxNQUFNRixNQUFOLENBQWFPO0FBRHBELEdBQVosQ0FEVztBQUFBLENBQWI7O0FBS0E7QUFDQSxJQUFNRSwwRkFDSCxnQkFBTUMsYUFESCxFQUNtQlQsSUFEbkIsbURBRUgsZ0JBQU1VLGNBRkgsRUFFb0JOLEtBRnBCLG1EQUdILGdCQUFNTyxhQUhILEVBR21CTixJQUhuQixtREFJSCxnQkFBTU8sYUFKSCxFQUltQkwsSUFKbkIsb0JBQU47O2tCQU9lLCtCQUFjWCxhQUFkLEVBQTZCWSxlQUE3QixDIiwiZmlsZSI6IkxpZ2h0Qm94UmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlcyBmcm9tICcuLi9BY3Rpb25zL1R5cGVzJ1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdzZWFtbGVzcy1pbW11dGFibGUnXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXhzYXVjZSdcblxuLy8gaW5pdGlhbCBzdGF0ZVxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSBJbW11dGFibGUoe1xuICBpbmRleDogMCxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgaW1hZ2VzOiBbXVxufSlcblxuLy8gb3BlblxuY29uc3Qgb3BlbiA9IChzdGF0ZSwgYWN0aW9uKSA9PlxuICBzdGF0ZS5tZXJnZSh7XG4gICAgaXNPcGVuOiB0cnVlLFxuICAgIGltYWdlczogYWN0aW9uLmltYWdlcyxcbiAgICBpbmRleDogYWN0aW9uLmluZGV4XG4gIH0pXG5cbi8vIGNsb3NlXG5jb25zdCBjbG9zZSA9IChzdGF0ZSwgYWN0aW9uKSA9PlxuICBzdGF0ZS5tZXJnZSh7XG4gICAgaXNPcGVuOiBmYWxzZVxuICB9KVxuXG4vLyBuZXh0XG5jb25zdCBuZXh0ID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gIHN0YXRlLm1lcmdlKHtcbiAgICBpbmRleDogKHN0YXRlLmluZGV4ICsgMSkgJSBzdGF0ZS5pbWFnZXMubGVuZ3RoXG4gIH0pXG5cbi8vIHByZXZpb3VzXG5jb25zdCBwcmV2ID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gIHN0YXRlLm1lcmdlKHtcbiAgICBpbmRleDogKHN0YXRlLmluZGV4ICsgc3RhdGUuaW1hZ2VzLmxlbmd0aCAtIDEpICUgc3RhdGUuaW1hZ2VzLmxlbmd0aFxuICB9KVxuXG4vLyBtYXAgb3VyIHR5cGVzIHRvIG91ciBoYW5kbGVyc1xuY29uc3QgQUNUSU9OX0hBTkRMRVJTID0ge1xuICBbVHlwZXMuTElHSFRCT1hfT1BFTl06IG9wZW4sXG4gIFtUeXBlcy5MSUdIVEJPWF9DTE9TRV06IGNsb3NlLFxuICBbVHlwZXMuTElHSFRCT1hfTkVYVF06IG5leHQsXG4gIFtUeXBlcy5MSUdIVEJPWF9QUkVWXTogcHJldlxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKElOSVRJQUxfU1RBVEUsIEFDVElPTl9IQU5ETEVSUylcbiJdfQ==