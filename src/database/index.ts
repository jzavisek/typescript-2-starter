import * as Bluebird from 'bluebird'
import * as mongoose from 'mongoose'
import config from './../config'
import log from './../common/logger'
import userSchema from './models/user'
import { IUser } from './../interfaces/models'

(<any>mongoose).Promise = Bluebird

export async function connect(): Promise<void> {
  log.info('Connecting to the database ...')
  await Bluebird.fromCallback(done => mongoose.connect(config.database.connectionString, done))
  log.info('Database ready.')
}

export function disconnect(): void {
  mongoose.connection.close()
}

const User = mongoose.model<IUser>('User', userSchema)
export default {
  User,
}
