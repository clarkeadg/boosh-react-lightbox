import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

// initial state
export const INITIAL_STATE = Immutable({
  index: 0,
  isOpen: false,
  images: []
})

// open
const open = (state, action) =>
  state.merge({
    isOpen: true,
    images: action.images,
    index: action.index
  })

// close
const close = (state, action) =>
  state.merge({
    isOpen: false
  })

// next
const next = (state, action) =>
  state.merge({
    index: (state.index + 1) % state.images.length
  })

// previous
const prev = (state, action) =>
  state.merge({
    index: (state.index + state.images.length - 1) % state.images.length
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LIGHTBOX_OPEN]: open,
  [Types.LIGHTBOX_CLOSE]: close,
  [Types.LIGHTBOX_NEXT]: next,
  [Types.LIGHTBOX_PREV]: prev
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
