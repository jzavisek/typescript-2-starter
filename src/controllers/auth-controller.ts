import Crypto from './../utils/crypto'
import db from './../database'
import * as express from 'express'
import * as models from './../interfaces/models'

export default {

  /**
   * Creates a new user account
   */
  async register(req: express.Request, res: express.Response): Promise<void> {
    const account: models.IUserLogin = req.body
    const user = await new db.User(account).save()
    const accessToken = Crypto.generateToken(user.id)
    res.status(201).json({
      accessToken,
      profile: {
        email: user.email,
        id: user.id,
      },
    })
  },

  /**
   * Logs in the user and generates an access token
   */
  login(req: express.Request, res: express.Response) {
    // const account: models.IUserLogin = req.body
    // ...
  },
}
