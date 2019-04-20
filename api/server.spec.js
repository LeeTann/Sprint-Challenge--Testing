const request = require('supertest')

const server = require('./server')

describe('GET "/games" endpoint testing', () => {

    it('this endpoint should return status code 200', async () => {
        const res = await request(server).get('/games')

        expect(res.status).toBe(200)
    })

    it('this endpoint type should return JSON', async () => {
        const res = await request(server).get('/games')

        expect(res.type).toBe('application/json')
    })

    it('this endpoint should return an array', async () => {
        const res = await request(server).get('/games')

        expect(Array.isArray(res.body)).toBeTruthy()
    })
})