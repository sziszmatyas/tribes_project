import request from 'supertest'
import app from '../src/app'

describe('GET /api/hello', () => {
  it('Hello API Request', async () => {
    const result = await request(app).get('/api/hello')
    const { message } = result.body

    expect(message).toEqual('without a name I am not gonna say hello')
    expect(result.statusCode).toEqual(400)
  })
})

describe('GET /api/hello?name=Fox', () => {
  it('Hello API Request', async () => {
    const result = await request(app).get('/api/hello?name=Fox')
    const { message } = result.body

    expect(message).toEqual('hello Fox')
    expect(result.statusCode).toEqual(200)
  })
})
