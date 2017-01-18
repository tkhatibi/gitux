import path from 'path'
import express from 'express'
import config from './config'

global.$config = config

const server = express()

server.set('view engine', $config.view.engine)
server.set('views', path.join(__dirname, $config.view.dir))

// serves static assets
server.use($config.assets.baseUrl, express.static($config.assets.path))

// serves index for other requests
server.use((req, res, next) => {
  res.render('index', {
    assetsBaseUrl: $config.assets.baseUrl,
    reactWrapperId: $config.reactWrapperId,
  })
})

server.listen($config.port, $config.host, () => {
  console.info(`express listening on ${$config.baseUrl}`)
})
