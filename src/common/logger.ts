import config from './../config'
import * as bunyan from 'bunyan'

const logStreams = []

if (config.logging.stdout.enabled) {
  logStreams.push({
    level: config.logging.stdout.level,
    name: 'console',
    stream: process.stdout,
  })
}

const logger = bunyan.createLogger({
  name: 'typescript-node',
  streams: logStreams,
})

export default logger
