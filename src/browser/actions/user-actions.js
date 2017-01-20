import * as types from '.'
import axios from '../lib/expands/axios'

export const getCurrentUserProfile = () => ({
  type: types.GET_CURRENT_USER_PROFILE,
  shouldCallAPI: state => state.user.current === null,
  callAPI: () => axios.get(`/user`),
})
