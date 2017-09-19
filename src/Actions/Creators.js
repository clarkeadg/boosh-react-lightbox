import Types from './Types'

/* LIGHTBOX */
const lightboxOpen = (images, index) => ({ type: Types.LIGHTBOX_OPEN, images: images, index: index })
const lightboxClose = () => ({ type: Types.LIGHTBOX_CLOSE })
const lightboxNext = () => ({ type: Types.LIGHTBOX_NEXT })
const lightboxPrev = () => ({ type: Types.LIGHTBOX_PREV })

/**
 Makes available all the action creators we've created.
 */
export default {

  lightboxOpen,
  lightboxClose,
  lightboxNext,
  lightboxPrev

}
