import * as express from 'express'
import log from './common/logger'
import config from './config'
import api from './routes/api'
import * as database from './database'
import * as bodyParser from 'body-parser'
import * as Bluebird from 'bluebird'

global.Promise = Bluebird

const app = express()

// Setup middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Setup routes
app.use('/', api)

// Define application startup method
app.start = async (port: number = config.port): Promise<void> => {
  log.info('Starting express app ...')
  await database.connect()
  await Bluebird.fromCallback(done => app.listen(port, done))
  log.info('App started.')
}

// Tests
if (require.main === module) {
  app.start()
}

export default app
