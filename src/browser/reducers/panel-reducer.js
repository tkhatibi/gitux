import * as types from '../actions'

const initialState = {
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_REDIRECT_URL:
      return {...state, redirectUrl: action.redirectUrl}
    default:
      return state
  }
}
