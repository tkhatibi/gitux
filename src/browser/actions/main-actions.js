import * as types from '.'

export function navigateToSpecifiedUrl() {
  return {
    type: types.NAVIGATE_TO_SPECIFIED_URL,
    redirectUrl,
  }
}
