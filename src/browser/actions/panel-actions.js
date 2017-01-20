import { browserHistory } from 'react-router'

import * as types from '.'

export const navigateToLogin = redirectUrl => (dispatch, getState) => {
  dispatch({
    type: types.NAVIGATE_TO_PANEL,
    redirectUrl,
  })
  browserHistory.replace("/login")
}
