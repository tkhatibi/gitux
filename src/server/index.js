import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

global.$config = require('./config').default

const server = express()

server.set('view engine', $config.view.engine)
server.set('views', $config.view.dir)

// To support JSON-encoded bodies
server.use(bodyParser.json())
// To support URL-encoded bodies
server.use(bodyParser.urlencoded({
  extended: true
}))

// serve static assets
server.use($config.assets.baseUrl, express.static($config.assets.path))

// github authorization callback
server.use('/auth-cb', (req, res, next) => {
  const accessTokenUrl = $config.githubApi.accessTokenUrl(req.query.code)
  axios.post(accessTokenUrl)
    .then(githubRes => {
      res.redirect(`/login?${githubRes.data}`)
    })
    .catch(error => {
      res.send(error)
    })
})

// render index for other requests
server.use((req, res, next) => {
  res.render('index', {
    assetsBaseUrl: $config.assets.baseUrl,
    reactWrapperId: $config.reactWrapperId,
    initialComponent: '',
    initialState: {},
  })
})

server.listen($config.port, $config.host, () => {
  console.info(`express listening on ${$config.baseUrl}`)
})
