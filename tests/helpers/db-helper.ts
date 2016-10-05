import * as mongoose from 'mongoose'
import * as Bluebird from 'bluebird'

export default {
  initialize: () => Bluebird.fromCallback(done => mongoose.connection.db.dropDatabase(done))
}
