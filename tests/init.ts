import config from './../src/config'
import * as chai from 'chai'
import app from './../src/server'

before(async function() {
  this.app = app
  await this.app.start(config.port)
})
