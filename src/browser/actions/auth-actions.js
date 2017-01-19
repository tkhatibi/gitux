import * as types from '.'

export function login(token) {
  return {
    type: types.LOGIN,
    token,
  }
}
