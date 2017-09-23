'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Types = require('./Types');

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* LIGHTBOX */
var lightboxOpen = function lightboxOpen(images, index) {
  return { type: _Types2.default.LIGHTBOX_OPEN, images: images, index: index };
};
var lightboxClose = function lightboxClose() {
  return { type: _Types2.default.LIGHTBOX_CLOSE };
};
var lightboxNext = function lightboxNext() {
  return { type: _Types2.default.LIGHTBOX_NEXT };
};
var lightboxPrev = function lightboxPrev() {
  return { type: _Types2.default.LIGHTBOX_PREV };
};

/**
 Makes available all the action creators we've created.
 */
exports.default = {

  lightboxOpen: lightboxOpen,
  lightboxClose: lightboxClose,
  lightboxNext: lightboxNext,
  lightboxPrev: lightboxPrev

};