import { browserHistory } from 'react-router'

import * as types from '.'
import { saveAccessToken, removeAccessToken } from '../lib/helpers/auth-helper'

const loginUrl = "/"

export const authorize = accessToken => (dispatch, getState) => {
  saveAccessToken(accessToken)
  dispatch({
    type: types.AUTHORIZE,
  })
}

export const logout = () => (dispatch, getState) => {
  removeAccessToken()
  dispatch({
    type: types.LOGOUT,
  })
  browserHistory.replace(loginUrl)
}

export const navigateToLogin = redirectUrl => (dispatch, getState) => {
  dispatch({
    type: types.NAVIGATE_TO_LOGIN,
    redirectUrl,
  })
  browserHistory.replace(loginUrl)
}

export const navigateToPanel = () => (dispatch, getState) => {
  const { redirectUrl } = getState().auth
  dispatch({
    type: types.NAVIGATE_TO_PANEL,
  })
  browserHistory.push(redirectUrl)
}
