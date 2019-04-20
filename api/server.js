const express = require('express')

const server = express()
const db = require('../data/dbConfig')

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Server Working' })
})

server.get('/games', async (req, res) => {
    const games = await db('games')
    res.status(200).json(games)
})

server.post('/games', async (req, res) => {
    const { games, genre } = req.body

    if (games && genre) {
        const result = await db('games').insert(req.body)
        res.status(201).json(result)
    } else {
        res.status(422).json({ message: 'Come on man! we are missing info'})
    }
})

module.exports = server