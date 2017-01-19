import * as types from '.'

export function setRedirectUrl(redirectUrl) {
  return {
    type: types.SET_REDIRECT_URL,
    redirectUrl,
  }
}
