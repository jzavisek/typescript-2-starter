import * as express from 'express'

export default {
  test(req: express.Request, res: express.Response): void {
    res.status(200).send('API configured')
  },
}
