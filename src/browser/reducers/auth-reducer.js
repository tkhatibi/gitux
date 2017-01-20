import * as types from '../actions'

const initialState = {
  isLoggedIn: !!localStorage.accessToken,
  redirectUrl: '/',
}

export default function(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case types.NAVIGATE_TO_LOGIN:
      return {...state, redirectUrl: action.redirectUrl}
    case types.NAVIGATE_TO_PANEL:
      return {...state, redirectUrl: '/'}
    case types.AUTHORIZE:
      return {...state, isLoggedIn: true}
    default:
      return state
  }
}
