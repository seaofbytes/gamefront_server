const { Router } = require('express')
const router = new Router()
const Review = require('../models').Review
const auth = require('../middleware/auth')
const User = require('../models').User

// Get all reviews from Product
router.get('/product/:id/review', async (req, res, next) => {
  try {
    const productReviews = await Review.findAll({
      where: {
        ProductId: req.params.id
      }
    })

    if (productReviews) {
      res.send(productReviews)
    } else {
      res.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

// Create a product review
router.post('/review', auth, async (req, res, next) => {
  try {
    const { rating, description } = req.body
    const UserId = req.user.dataValues.id
    const ProductId = req.body.ProductId

    const user = await User.findByPk(UserId)
    const name = `${user.dataValues.firstName} ${user.dataValues.lastName}`

    const createdReview = await Review.create({
      rating,
      description,
      UserId,
      ProductId,
      name
    })

    res.send(createdReview)
  } catch (error) {
    next(error)
  }
})

module.exports = router
