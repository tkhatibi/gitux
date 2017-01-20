import * as types from '../actions'
import { isLoggedIn } from '../lib/helpers/auth-helper'

const initialState = {
  isLoggedIn: isLoggedIn(),
  redirectUrl: '/panel',
  // redirectUrl: $config.dashboardUrl,
}

export default function(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case types.NAVIGATE_TO_LOGIN:
      return {...state, redirectUrl: action.redirectUrl}
    case types.NAVIGATE_TO_PANEL:
      return {...state, redirectUrl: '/panel'}
    case types.AUTHORIZE:
      return {...state, isLoggedIn: true}
    default:
      return state
  }
}
