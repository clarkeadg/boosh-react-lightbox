
/* React */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

/* Actions */
import Actions from '../../Actions/Creators'

/* Selectors */
import { getLightbox } from '../../Selectors/LightboxSelector'

/* Components */
import Lightbox from 'react-image-lightbox-universal';

let createHandlers = function(dispatch) {

  let onClose= function(node, data) {
    dispatch(Actions.lightboxClose())
  };
  let onNext= function(node, data) {
    dispatch(Actions.lightboxNext())
  };
  let onPrev= function(node, data) {
    dispatch(Actions.lightboxPrev())
  };

  return {
    onClose,
    onNext,
    onPrev
  };
}

class LightBox extends React.Component {

  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }

  render() {

    let { lightbox } = this.props;
    if (!lightbox) return false;

    if (lightbox.isOpen) {
      return (
        <Lightbox
            mainSrc={lightbox.images[lightbox.index]}
            nextSrc={lightbox.images[(lightbox.index + 1) % lightbox.images.length]}
            prevSrc={lightbox.images[(lightbox.index + lightbox.images.length - 1) % lightbox.images.length]}
            onCloseRequest={this.handlers.onClose}
            onMovePrevRequest={this.handlers.onPrev}
            onMoveNextRequest={this.handlers.onNext}/>
      );
    }

    return false;
  }
}

const mapStateToProps = (state, props) => {
  return {
    lightbox: getLightbox(state, props)
  }
}

export default connect(mapStateToProps)(LightBox);


