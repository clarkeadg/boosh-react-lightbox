
const LightBoxActions = require('./Actions/Creators');
const LightBoxReducer = require('./Reducers/LightBoxReducer');
const LightBox        = require('./Components/LightBox/LightBox');

module.exports = {
  LightBoxActions:    LightBoxActions.default,
  LightBoxReducer:    LightBoxReducer.default,
  LightBox:           LightBox.default
}
