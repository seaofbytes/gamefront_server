const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const parser = bodyParser()
const db = require('./db')



// Middleware
app.use(corsMiddleware)
app.use(parser)


app.get('/', (req, res) => {
  res.send('Hello world !')
})

app.listen(port, () => console.log(`The app is listening on port ${port}!`))
