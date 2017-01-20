import path from 'path'
import config from '../common/config'

const serverConfig = {
  ...config,
  view: {
    engine: 'ejs',
    dir: path.join(__dirname, 'views'),
  },
  githubApi: {
    clientSecret: 'feec23a7f779b67cd89a631245ec3f669508b26d',
    get accessTokenUrl() {
      return currentUserCode =>
        `https://github.com/login/oauth/access_token`+
        `?client_id=${config.githubApi.clientId}`+
        `&client_secret=${this.clientSecret}`+
        `&code=${currentUserCode}`
    },
  },
}

export default serverConfig
