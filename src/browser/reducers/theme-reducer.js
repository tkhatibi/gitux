import * as types from '../actions'
// import { isCloseDrawer } from '../lib/helpers/theme-helper'

const initialState = {
  isOpenDrawer: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
      return {...state, isOpenDrawer: !state.isOpenDrawer}
    default:
      return state
  }
}
