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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY3Rpb25zL0NyZWF0b3JzLmpzIl0sIm5hbWVzIjpbImxpZ2h0Ym94T3BlbiIsImltYWdlcyIsImluZGV4IiwidHlwZSIsIkxJR0hUQk9YX09QRU4iLCJsaWdodGJveENsb3NlIiwiTElHSFRCT1hfQ0xPU0UiLCJsaWdodGJveE5leHQiLCJMSUdIVEJPWF9ORVhUIiwibGlnaHRib3hQcmV2IiwiTElHSFRCT1hfUFJFViJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLFNBQW9CLEVBQUVDLE1BQU0sZ0JBQU1DLGFBQWQsRUFBNkJILFFBQVFBLE1BQXJDLEVBQTZDQyxPQUFPQSxLQUFwRCxFQUFwQjtBQUFBLENBQXJCO0FBQ0EsSUFBTUcsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBQU8sRUFBRUYsTUFBTSxnQkFBTUcsY0FBZCxFQUFQO0FBQUEsQ0FBdEI7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFPLEVBQUVKLE1BQU0sZ0JBQU1LLGFBQWQsRUFBUDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBTyxFQUFFTixNQUFNLGdCQUFNTyxhQUFkLEVBQVA7QUFBQSxDQUFyQjs7QUFFQTs7O2tCQUdlOztBQUViViw0QkFGYTtBQUdiSyw4QkFIYTtBQUliRSw0QkFKYTtBQUtiRTs7QUFMYSxDIiwiZmlsZSI6IkNyZWF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGVzIGZyb20gJy4vVHlwZXMnXG5cbi8qIExJR0hUQk9YICovXG5jb25zdCBsaWdodGJveE9wZW4gPSAoaW1hZ2VzLCBpbmRleCkgPT4gKHsgdHlwZTogVHlwZXMuTElHSFRCT1hfT1BFTiwgaW1hZ2VzOiBpbWFnZXMsIGluZGV4OiBpbmRleCB9KVxuY29uc3QgbGlnaHRib3hDbG9zZSA9ICgpID0+ICh7IHR5cGU6IFR5cGVzLkxJR0hUQk9YX0NMT1NFIH0pXG5jb25zdCBsaWdodGJveE5leHQgPSAoKSA9PiAoeyB0eXBlOiBUeXBlcy5MSUdIVEJPWF9ORVhUIH0pXG5jb25zdCBsaWdodGJveFByZXYgPSAoKSA9PiAoeyB0eXBlOiBUeXBlcy5MSUdIVEJPWF9QUkVWIH0pXG5cbi8qKlxuIE1ha2VzIGF2YWlsYWJsZSBhbGwgdGhlIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSBjcmVhdGVkLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgbGlnaHRib3hPcGVuLFxuICBsaWdodGJveENsb3NlLFxuICBsaWdodGJveE5leHQsXG4gIGxpZ2h0Ym94UHJldlxuXG59XG4iXX0=