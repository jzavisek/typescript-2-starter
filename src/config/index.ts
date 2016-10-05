/* tslint:disable:no-var-requires */

import * as path from 'path'

const env = process.env.NODE_ENV || 'local'

// Merge configs into one
const envConfigPath = path.join(__dirname, `./env/${env}.js`)
const defaultConfig = require('./default').default
const envConfig = require(envConfigPath).default
const resultConfig = Object.assign({}, defaultConfig, envConfig)

export default resultConfig
