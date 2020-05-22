const httpStatus = require('http-status')
const request = require('supertest')

const app = require('../../../app')

describe('[Acceptance] Calculator routes', () => {
  context('POST /api/v1/calculator/divide', () => {
    const left = 10
    const right = 5

    let res

    before(async () => {
      res = await request(app).post('/api/v1/calculator/divide').send({ left, right })
    })

    it('should return 200', () => {
      expect(res.status).to.be.eql(httpStatus.OK)
    })

    it('should return the division', () => {
      expect(res.body).to.be.eql({ result: 2 })
    })
  })
})
