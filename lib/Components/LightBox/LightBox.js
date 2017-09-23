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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Creators = require('../../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _LightboxSelector = require('../../Selectors/LightboxSelector');

var _reactImageLightboxUniversal = require('react-image-lightbox-universal');

var _reactImageLightboxUniversal2 = _interopRequireDefault(_reactImageLightboxUniversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Selectors */
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

/* Components */


/* Actions */

/* React */

var LightBox = function (_React$Component) {
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
        return _react2.default.createElement(_reactImageLightboxUniversal2.default, {
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
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    lightbox: (0, _LightboxSelector.getLightbox)(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(LightBox);