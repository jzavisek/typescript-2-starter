import * as mongoose from 'mongoose'

export interface IUserLogin {
  email: string
  password: string
}

export interface IUser extends mongoose.Document {
  id: string
  email: string
  password: string
}
