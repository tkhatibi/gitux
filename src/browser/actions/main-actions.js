import { browserHistory } from 'react-router'

import * as types from '.'

export const navigateToPanel = () => (dispatch, getState) => {
  const { redirectUrl } = getState().panel
  dispatch({
    type: types.NAVIGATE_TO_PANEL,
    redirectUrl,
  })
  browserHistory.push(redirectUrl)
}
