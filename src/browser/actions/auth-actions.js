import * as types from '.'
import axios from '../helpers/axios'

export const login = username => (dispatch, getState) => {
  console.log(username)
  axios.get(`${$config.apiUrl}/users/${username}`).then(response => {
    console.log(response)
  })
  // alert(token)
}
  // return {
  //   type: types.LOGIN,
  //   token,
  //   shouldCallAPI: state => !state.auth.loggedIn,
  //   callAPI: () => axios.get(`${$config.apiUrl}/zen`),
  // }
// }
