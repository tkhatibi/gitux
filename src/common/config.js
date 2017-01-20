/**
 * It is used by webpack config too, so it must be ES5 format
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var r = _path2.default.join(__dirname, '..', '..');
var env = process.env;

var config = {
  root: r,
  env: env.NODE_ENV || 'dev',
  port: env.PORT || 8000,
  host: env.HOST || 'localhost',
  reactWrapperId: 'root',
  assets: {
    baseUrl: '/static',
    path: _path2.default.join(r, 'public')
  },
  githubApi: {
    clientId: 'c2984d0f08b17be909b1',
    scope: 'repo',
  },
  get baseUrl() {
    return 'http://' + this.host + ':' + this.port;
  },
  get apiUrl() {
    return 'https://api.github.com';
  }
};

exports.default = config;

// import path from 'path'

// const r = path.join(__dirname, '..', '..')
// const env = process.env

// const config = {
//   root: r,
//   env: env.NODE_ENV || 'dev',
//   port: env.PORT || 8000,
//   host: env.HOST || 'localhost',
//   reactWrapperId: 'root',
//   assets: {
//     baseUrl: '/static',
//     path: path.join(r, 'public'),
//   },
//   get baseUrl() {
//     return `http://${this.host}:${this.port}`
//   },
//   get apiUrl() {
//     return `https://api.github.com`
//   },
// }

// export default config
