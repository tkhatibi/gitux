import * as types from '../actions'

const initialState = {
  isLoggedIn: false,
  redirectUrl: 'dashboard',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.NAVIGATE_TO_LOGIN:
      return {...state, redirectUrl: action.redirectUrl}
    case types.NAVIGATE_TO_PANEL:
      return {...state, redirectUrl: null}
    default:
      return state
  }
}
