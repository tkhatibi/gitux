import path from 'path'
import config from '../common/config'

const server = {
  ...config,
  view: {
    engine: 'ejs',
    dir: 'views',
  },
  gihubApi: {
    clientSecret: 'feec23a7f779b67cd89a631245ec3f669508b26d',
    // clientId: 'c2984d0f08b17be909b1',
    authCallbackUrl: '/auth-cb?code=:currentUserCode',
  },
}

export default server
