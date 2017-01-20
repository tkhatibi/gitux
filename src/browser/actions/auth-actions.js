import axios from '../lib/expands/axios'
import { browserHistory } from 'react-router'

import * as types from '.'

export const authorize = accessToken => (dispatch, getState) => {
  localStorage.accessToken = accessToken
  dispatch({
    type: types.AUTHORIZE,
  })
}

export const navigateToLogin = redirectUrl => (dispatch, getState) => {
  dispatch({
    type: types.NAVIGATE_TO_LOGIN,
    redirectUrl,
  })
  browserHistory.replace("/login")
}

export const navigateToPanel = () => (dispatch, getState) => {
  const { redirectUrl } = getState().auth
  dispatch({
    type: types.NAVIGATE_TO_PANEL,
  })
  browserHistory.push(redirectUrl)
}
