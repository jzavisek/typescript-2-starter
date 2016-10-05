import authController from './../controllers/auth-controller'
import testController from './../controllers/test-controller'
import * as express from 'express'

const router = express.Router()

router.get('/', testController.test)
router.post('/auth/registration', authController.register)
router.post('/auth/login', authController.login)

export default router
