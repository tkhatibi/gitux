import path from 'path'
import config from '../common/config'

const server = {
  ...config,
  view: {
    engine: 'ejs',
    dir: 'views',
  },
}

export default server
