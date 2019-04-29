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

describe('POST "/games" endpoint testing', () => {

    it('should return status code 201', async () => {
        const newGame = { games: 'Punch Out', genre: 'fighting' }
        const res = await request(server).post('/games').send(newGame)

        expect(res.status).toBe(201)
    })

    it('should return JSON', async () => {
        const newGame = { games: 'Final Fantasy 7', genre: 'RPG' }
        const res = await request(server).post('/games').send(newGame)

        expect(res.type).toBe('application/json')
    })

    it('should return status code 422', async () => {
        const newGame = { games: 'Donkey Kong' }
        const res = await request(server).post('/games').send(newGame)

        expect(res.status).toBe(422)
    })
})

describe('GetByID "/games/:id" endpoint testing', () => {

    it('should return status code 200', async () => {
        const res = await request(server).get('/games/1')

        expect(res.status).toBe(200)
    })
})

describe('DELETE "/games/:id" endpoint testing', () => {

    it('should return the item number deleted', async () => {
        const res = await request(server).delete('/games/1')

        expect(res.body).toBe(0)
    })

    it('should return status code 200', async () => {
        const res = await request(server).delete('/games/1')

        expect(res.status).toBe(200)
    })
})