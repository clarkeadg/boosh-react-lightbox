'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _reactRedux = require('react-redux');

var _Creators = require('../../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _LightboxSelector = require('../../Selectors/LightboxSelector');

var _reactImageLightboxUniversal = require('react-image-lightbox-universal');

var _reactImageLightboxUniversal2 = _interopRequireDefault(_reactImageLightboxUniversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  LightBox: {
    displayName: 'LightBox'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Components/LightBox/LightBox.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}
/* React */


/* Actions */


/* Selectors */


/* Components */


var createHandlers = function createHandlers(dispatch) {

  var onClose = function onClose(node, data) {
    dispatch(_Creators2.default.lightboxClose());
  };
  var onNext = function onNext(node, data) {
    dispatch(_Creators2.default.lightboxNext());
  };
  var onPrev = function onPrev(node, data) {
    dispatch(_Creators2.default.lightboxPrev());
  };

  return {
    onClose: onClose,
    onNext: onNext,
    onPrev: onPrev
  };
};

var LightBox = _wrapComponent('LightBox')(function (_React$Component) {
  (0, _inherits3.default)(LightBox, _React$Component);

  function LightBox(props) {
    (0, _classCallCheck3.default)(this, LightBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LightBox.__proto__ || (0, _getPrototypeOf2.default)(LightBox)).call(this, props));

    _this.handlers = createHandlers(_this.props.dispatch);
    return _this;
  }

  (0, _createClass3.default)(LightBox, [{
    key: 'render',
    value: function render() {
      var lightbox = this.props.lightbox;

      if (!lightbox) return false;

      if (lightbox.isOpen) {
        return _react3.default.createElement(_reactImageLightboxUniversal2.default, {
          mainSrc: lightbox.images[lightbox.index],
          nextSrc: lightbox.images[(lightbox.index + 1) % lightbox.images.length],
          prevSrc: lightbox.images[(lightbox.index + lightbox.images.length - 1) % lightbox.images.length],
          onCloseRequest: this.handlers.onClose,
          onMovePrevRequest: this.handlers.onPrev,
          onMoveNextRequest: this.handlers.onNext });
      }

      return false;
    }
  }]);
  return LightBox;
}(_react3.default.Component));

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    lightbox: (0, _LightboxSelector.getLightbox)(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(LightBox);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0xpZ2h0Qm94L0xpZ2h0Qm94LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUhhbmRsZXJzIiwiZGlzcGF0Y2giLCJvbkNsb3NlIiwibm9kZSIsImRhdGEiLCJsaWdodGJveENsb3NlIiwib25OZXh0IiwibGlnaHRib3hOZXh0Iiwib25QcmV2IiwibGlnaHRib3hQcmV2IiwicHJvcHMiLCJoYW5kbGVycyIsImxpZ2h0Ym94IiwiaXNPcGVuIiwiaW1hZ2VzIiwiaW5kZXgiLCJsZW5ndGgiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIkxpZ2h0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUdBOzs7O0FBR0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhBOzs7QUFJQTs7O0FBR0E7OztBQUdBOzs7QUFHQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLFFBQVQsRUFBbUI7O0FBRXRDLE1BQUlDLFVBQVMsU0FBVEEsT0FBUyxDQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDaENILGFBQVMsbUJBQVFJLGFBQVIsRUFBVDtBQUNELEdBRkQ7QUFHQSxNQUFJQyxTQUFRLFNBQVJBLE1BQVEsQ0FBU0gsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQy9CSCxhQUFTLG1CQUFRTSxZQUFSLEVBQVQ7QUFDRCxHQUZEO0FBR0EsTUFBSUMsU0FBUSxTQUFSQSxNQUFRLENBQVNMLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUMvQkgsYUFBUyxtQkFBUVEsWUFBUixFQUFUO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQ0xQLG9CQURLO0FBRUxJLGtCQUZLO0FBR0xFO0FBSEssR0FBUDtBQUtELENBakJEOzs7OztBQXFCRSxvQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUVqQixVQUFLQyxRQUFMLEdBQWdCWCxlQUFlLE1BQUtVLEtBQUwsQ0FBV1QsUUFBMUIsQ0FBaEI7QUFGaUI7QUFHbEI7Ozs7NkJBRVE7QUFBQSxVQUVEVyxRQUZDLEdBRVksS0FBS0YsS0FGakIsQ0FFREUsUUFGQzs7QUFHUCxVQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEtBQVA7O0FBRWYsVUFBSUEsU0FBU0MsTUFBYixFQUFxQjtBQUNuQixlQUNFO0FBQ0ksbUJBQVNELFNBQVNFLE1BQVQsQ0FBZ0JGLFNBQVNHLEtBQXpCLENBRGI7QUFFSSxtQkFBU0gsU0FBU0UsTUFBVCxDQUFnQixDQUFDRixTQUFTRyxLQUFULEdBQWlCLENBQWxCLElBQXVCSCxTQUFTRSxNQUFULENBQWdCRSxNQUF2RCxDQUZiO0FBR0ksbUJBQVNKLFNBQVNFLE1BQVQsQ0FBZ0IsQ0FBQ0YsU0FBU0csS0FBVCxHQUFpQkgsU0FBU0UsTUFBVCxDQUFnQkUsTUFBakMsR0FBMEMsQ0FBM0MsSUFBZ0RKLFNBQVNFLE1BQVQsQ0FBZ0JFLE1BQWhGLENBSGI7QUFJSSwwQkFBZ0IsS0FBS0wsUUFBTCxDQUFjVCxPQUpsQztBQUtJLDZCQUFtQixLQUFLUyxRQUFMLENBQWNILE1BTHJDO0FBTUksNkJBQW1CLEtBQUtHLFFBQUwsQ0FBY0wsTUFOckMsR0FERjtBQVNEOztBQUVELGFBQU8sS0FBUDtBQUNEOzs7RUF6Qm9CLGdCQUFNVyxTOztBQTRCN0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFULEtBQVIsRUFBa0I7QUFDeEMsU0FBTztBQUNMRSxjQUFVLG1DQUFZTyxLQUFaLEVBQW1CVCxLQUFuQjtBQURMLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUVEsZUFBUixFQUF5QkUsUUFBekIsQyIsImZpbGUiOiJMaWdodEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vKiBBY3Rpb25zICovXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuLi8uLi9BY3Rpb25zL0NyZWF0b3JzJ1xuXG4vKiBTZWxlY3RvcnMgKi9cbmltcG9ydCB7IGdldExpZ2h0Ym94IH0gZnJvbSAnLi4vLi4vU2VsZWN0b3JzL0xpZ2h0Ym94U2VsZWN0b3InXG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveC11bml2ZXJzYWwnO1xuXG5sZXQgY3JlYXRlSGFuZGxlcnMgPSBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gIGxldCBvbkNsb3NlPSBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgZGlzcGF0Y2goQWN0aW9ucy5saWdodGJveENsb3NlKCkpXG4gIH07XG4gIGxldCBvbk5leHQ9IGZ1bmN0aW9uKG5vZGUsIGRhdGEpIHtcbiAgICBkaXNwYXRjaChBY3Rpb25zLmxpZ2h0Ym94TmV4dCgpKVxuICB9O1xuICBsZXQgb25QcmV2PSBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgZGlzcGF0Y2goQWN0aW9ucy5saWdodGJveFByZXYoKSlcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9uQ2xvc2UsXG4gICAgb25OZXh0LFxuICAgIG9uUHJldlxuICB9O1xufVxuXG5jbGFzcyBMaWdodEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVycyA9IGNyZWF0ZUhhbmRsZXJzKHRoaXMucHJvcHMuZGlzcGF0Y2gpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHsgbGlnaHRib3ggfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFsaWdodGJveCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGxpZ2h0Ym94LmlzT3Blbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpZ2h0Ym94XG4gICAgICAgICAgICBtYWluU3JjPXtsaWdodGJveC5pbWFnZXNbbGlnaHRib3guaW5kZXhdfVxuICAgICAgICAgICAgbmV4dFNyYz17bGlnaHRib3guaW1hZ2VzWyhsaWdodGJveC5pbmRleCArIDEpICUgbGlnaHRib3guaW1hZ2VzLmxlbmd0aF19XG4gICAgICAgICAgICBwcmV2U3JjPXtsaWdodGJveC5pbWFnZXNbKGxpZ2h0Ym94LmluZGV4ICsgbGlnaHRib3guaW1hZ2VzLmxlbmd0aCAtIDEpICUgbGlnaHRib3guaW1hZ2VzLmxlbmd0aF19XG4gICAgICAgICAgICBvbkNsb3NlUmVxdWVzdD17dGhpcy5oYW5kbGVycy5vbkNsb3NlfVxuICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9e3RoaXMuaGFuZGxlcnMub25QcmV2fVxuICAgICAgICAgICAgb25Nb3ZlTmV4dFJlcXVlc3Q9e3RoaXMuaGFuZGxlcnMub25OZXh0fS8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlnaHRib3g6IGdldExpZ2h0Ym94KHN0YXRlLCBwcm9wcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlnaHRCb3gpO1xuXG5cbiJdfQ==