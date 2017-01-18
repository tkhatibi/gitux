import React from 'react'
import { render } from 'react-dom'
import config from './config'

global.$config = config

render(<p>gitux</p>, document.getElementById($config.reactWrapperId))
