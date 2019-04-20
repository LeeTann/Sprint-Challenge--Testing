const express = require('express')

const server = express()
const db = require('../data/dbConfig')

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Server Working' })
})


module.exports = server