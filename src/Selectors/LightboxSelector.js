import { createSelector } from 'reselect'

/* Private */

const lightbox = (state, props) => state.lightbox

/* Exports */

export const getLightbox = createSelector(
  [ lightbox ],
  ( box ) => box
)
