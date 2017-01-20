import * as types from '../actions'

const initialState = {
  redirectUrl: 'dashboard',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.NAVIGATE_TO_LOGIN:
      return {...state, redirectUrl: action.redirectUrl}
    default:
      return state
  }
}
