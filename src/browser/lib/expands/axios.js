import axios from 'axios'
import { getAccessToken } from '../helpers/auth-helper'

export default axios.create({
  // baseURL: '/api/',
  timeout: 3000,
  headers: {
    Authorization: `token ${getAccessToken()}`,
    'X-Requested-With': 'XMLHttpRequest',
    // 'X-Custom-Header': 'foobar',
  }
})
