import axios from 'axios'
import { getAccessToken } from '../helpers/auth-helper'

const configureHeaders = () => {
  let headers = {}
  const accessToken = getAccessToken()
  if (typeof accessToken !== 'undefined') {
    headers.Authorization = `token ${accessToken}`
  }
  return headers
}

export default () => axios.create({
  baseURL: 'https://api.github.com/',
  // timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    ...configureHeaders(),
    // 'X-Custom-Header': 'foobar',
  }
})
