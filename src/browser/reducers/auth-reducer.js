import * as types from '../actions'

const initialState = {
  isLoggedIn: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {...state, isLoggedIn: true}
    default:
      return state
  }
}
