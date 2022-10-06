const driversRoutes = require('./routes/drivers.js')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

const app = express()
const PORT  = 8080;
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(bodyParser.json())

app.use('/drivers', driversRoutes)

app.get('/', (req, res) => {
    res.send('localhost is running')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))