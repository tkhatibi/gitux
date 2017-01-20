import * as types from '../actions'

const initialState = {
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.NAVIGATE_TO_PANEL:
      return {...state, redirectUrl: null}
    default:
      return state
  }
}
