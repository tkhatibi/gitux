import path from 'path'

const r = path.join(__dirname, '..', '..')
const env = process.env

const config = {
  root: r,
  env: env.NODE_ENV || 'dev',
  port: env.PORT || 8000,
  host: env.HOST || 'localhost',
  get baseUrl() {
    return `http://${this.host}:${this.port}`
  },
  get apiUrl() {
    return `https://api.github.com`
  },
}

export default config
