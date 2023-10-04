const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bookRoute = require('./routes/bookRoutes')
dotenv.config()
const connectDB = require('./config/db')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')
const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 5000

app.use(errorHandler)

app.use('/api/v1', bookRoute)

app.listen(port, () => {
  console.log('server running')
})
