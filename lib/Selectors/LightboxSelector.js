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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3RvcnMvTGlnaHRib3hTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJsaWdodGJveCIsInN0YXRlIiwicHJvcHMiLCJnZXRMaWdodGJveCIsImJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxTQUFrQkQsTUFBTUQsUUFBeEI7QUFBQSxDQUFqQjs7QUFFQTs7QUFFTyxJQUFNRyxvQ0FBYyw4QkFDekIsQ0FBRUgsUUFBRixDQUR5QixFQUV6QixVQUFFSSxHQUFGO0FBQUEsU0FBV0EsR0FBWDtBQUFBLENBRnlCLENBQXBCIiwiZmlsZSI6IkxpZ2h0Ym94U2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuXG4vKiBQcml2YXRlICovXG5cbmNvbnN0IGxpZ2h0Ym94ID0gKHN0YXRlLCBwcm9wcykgPT4gc3RhdGUubGlnaHRib3hcblxuLyogRXhwb3J0cyAqL1xuXG5leHBvcnQgY29uc3QgZ2V0TGlnaHRib3ggPSBjcmVhdGVTZWxlY3RvcihcbiAgWyBsaWdodGJveCBdLFxuICAoIGJveCApID0+IGJveFxuKVxuIl19