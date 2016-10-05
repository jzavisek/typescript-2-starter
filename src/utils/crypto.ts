import config from './../config'
import * as bcrypt from 'bcrypt'
import * as Bluebird from 'bluebird'
import * as jwt from 'jwt-simple'

export default class Crypto {

  public static hashPassword(password: string): Bluebird<string> {
    return Bluebird.fromCallback<string>(done => bcrypt.hash(password, config.auth.saltRounds, done))
  }

  public static generateToken(userId: string): string {

    // Compute expiration date
    const expiresIn = new Date()
    expiresIn.setHours(expiresIn.getHours() + config.auth.tokenExpirationHours)

    const payload = {
      userId,
      expiresIn,
    }

    return jwt.encode(payload, config.auth.pepper)
  }

}
