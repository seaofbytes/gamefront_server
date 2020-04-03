const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const parser = bodyParser()
const categoryRoutes = require('./routes/category')
const db = require('./db')

// Routers
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const reviewRoutes = require('./routes/review')
const checkoutRoutes = require('./routes/checkout')
const orderRoutes = require('./routes/order')
const newAdminBro = require('./admin/admin').newAdminBro
const adminRouter = require('./admin/admin').adminRouter

// Middleware
app.use(corsMiddleware)
app.use(parser)

// Routes
app.use(userRoutes)
app.use(productRoutes)
app.use(categoryRoutes)
app.use(cartRoutes)
app.use(reviewRoutes)
app.use(checkoutRoutes)
app.use(orderRoutes)
app.use(newAdminBro.options.rootPath, adminRouter)
app.get('/', (req, res) => {
  res.send('Hello world !')
})

app.listen(port, () => console.log(`The app is listening on port ${port}!`))
