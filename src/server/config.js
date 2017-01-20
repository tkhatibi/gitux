import path from 'path'
import config from '../common/config'
import axios from 'axios'

const serverConfig = {
  ...config,
  view: {
    engine: 'ejs',
    dir: 'views',
  },
  gihubApi: {
    clientSecret: 'feec23a7f779b67cd89a631245ec3f669508b26d',
    authCallbackUrl: '/auth-cb?code=:currentUserCode', // It is used in express
    getAccessTokenUrl: currentUserCode => {
      return `https://github.com/login/oauth/access_token?client_id=${config.gihubApi.clientId}&client_secret=${this.clientSecret}&code=${currentUserCode}`
    },
    getAccessToken: currentUserCode => {
      return axios.post(this.getAccessToken(currentUserCode))
        .then(res => console.log(res))
        .catch(error => console.error(error))
    }
  },
}

export default serverConfig
