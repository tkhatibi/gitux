import axios from 'axios'
import { getAccessToken } from '../helpers/auth-helper'

export default () => axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10000,
  headers: {
    Authorization: `token ${getAccessToken()}`,
    'X-Requested-With': 'XMLHttpRequest',
    // 'X-Custom-Header': 'foobar',
  }
})
