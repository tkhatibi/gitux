import * as types from '../actions'
import { isLoggedIn } from '../lib/helpers/auth-helper'

const dashboardUrl = '/panel'
// const dashboardUrl = $config.dashboardUrl

const initialState = {
  isLoggedIn: isLoggedIn(),
  redirectUrl: dashboardUrl,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.AUTHORIZE:
      return {...state, isLoggedIn: true}
    case types.LOGOUT:
      return {...state, isLoggedIn: false}
    case types.NAVIGATE_TO_LOGIN:
      return {...state, redirectUrl: action.redirectUrl}
    case types.NAVIGATE_TO_PANEL:
      return {...state, redirectUrl: dashboardUrl}
    default:
      return state
  }
}
