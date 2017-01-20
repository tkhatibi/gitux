import config from '../common/config'

const browserConfig = {
  ...config,
  dashboardUrl: '/panel',
  githubApi: {
    get authorizeUrl() {
      return `https://github.com/login/oauth/authorize?client_id=${config.githubApi.clientId}&scope=${config.githubApi.scope}`
    }
  }
}

export default browserConfig
