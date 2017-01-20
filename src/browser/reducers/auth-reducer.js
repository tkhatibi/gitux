import * as types from '../actions'

const initialState = {
  isLoggedIn: false,
  requesting: false,
  error: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {...state, requesting: true, error: null}
    case types.LOGIN_SUCCESS:
      return {...state, isLoggedIn: true, requesting: false}
    case types.LOGIN_FAILD:
      return {...state, error: action.error, requesting: false}
    default:
      return state
  }
}
