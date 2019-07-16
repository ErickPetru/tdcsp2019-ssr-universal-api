const express = require('express')
const cors = require('cors')
const methodOverride = require('method-override')

const server = express()
server.enable('trust proxy')
server.use(cors({ origin: true }))
server.use(express.json())
server.use('/tasks', require('./tasks'))
server.use(methodOverride())
server.use((err, req, res, next) => res.status(400).json({ error: err.message }))

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`App listening on port ${PORT}`))
