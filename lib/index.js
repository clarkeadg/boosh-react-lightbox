'use strict';

var LightBoxActions = require('./Actions/Creators');
var LightBoxReducer = require('./Reducers/LightBoxReducer');
var LightBox = require('./Components/LightBox/LightBox');

module.exports = {
  LightBoxActions: LightBoxActions.default,
  LightBoxReducer: LightBoxReducer.default,
  LightBox: LightBox.default
};