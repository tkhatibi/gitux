import * as types from '../actions'

const initialState = {
  isLoggedIn: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.NAVIGATE_TO_SPECIFIED_URL:
      return {...state, redirectUrl: null}
    default:
      return state
  }
}
