import axios from 'axios'

export default axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {
    // Authorization: `token ${oauthToken}`
    'X-Requested-With': 'XMLHttpRequest',
    // 'X-Custom-Header': 'foobar',
  }
})
