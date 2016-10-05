import * as mongoose from 'mongoose'
import Crypto from './../../utils/crypto'

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
}, { 
  collection: 'users'
})

// ------ Indexes -------------------------------------------------------------

schema.index({ email: 1 }, { unique: true, sparse: false })

// ------ Hooks ---------------------------------------------------------------

schema.pre('save', async function(done) {

  const user = this
  if (!user.isModified('password')) {
    return done()
  }

  try {
    const passwordHash = await Crypto.hashPassword(user.password)
    user.password = passwordHash
    done()
  } catch (err) {
    done(err)
  }
})

export default schema
