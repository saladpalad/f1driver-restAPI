import driversRoutes from './routes/drivers.js'
import express from 'express'
import bodyParser from 'body-parser'



const app = express()
const PORT  = 8080;

app.use(bodyParser.json())

app.use('/drivers', driversRoutes)

app.get('/', (req, res) => {
    res.send('localhost says hi :)')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))