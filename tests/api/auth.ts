import * as request from 'supertest'
import { expect } from 'chai'
import dbHelper from './../helpers/db-helper'

describe('auth', function() {

  beforeEach(dbHelper.initialize)

  describe('POST /auth/registration', function() {
    it('should return 201 with accessToken', async function() {
      const requestData = {
        username: 'john-test@example.com',
        password: 'password',
      }

      const res = await request(this.app)
        .post('/auth/registration')
        .send(requestData)
        .expect(201)

      expect(res.body).to.have.property('accessToken')
      expect(res.body).to.have.property('profile')
    })
  })
})
