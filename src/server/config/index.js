import path from 'path'
import config from '~/common/config'

const server = {
  ...config,
  view: {
    engine: 'ejs',
    dir: 'views',
  },
  staticFiles: {
    route: '/static',
    path: path.join(config.root, 'src', 'server', 'public'),
  },
}

export default server
