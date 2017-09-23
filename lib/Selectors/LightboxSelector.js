'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLightbox = undefined;

var _reselect = require('reselect');

/* Private */

var lightbox = function lightbox(state, props) {
  return state.lightbox;
};

/* Exports */

var getLightbox = exports.getLightbox = (0, _reselect.createSelector)([lightbox], function (box) {
  return box;
});