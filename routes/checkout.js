const { Router } = require('express')
const router = new Router()
const Cart = require('../models').Cart
const Order = require('../models').Order
const auth = require('../middleware/auth')

const stripe = require('stripe')('sk_test_tR1Fr1h7q5munHlXGRiY1mMu00JQBpeD7n')
const uuid = require('uuid/v4')

router.post('/checkout', auth, async (req, res) => {
  console.log('Request:', req.body)

  let error
  let status
  try {
    const { products, token } = req.body
    const UserId = req.user.dataValues.id

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const totalPrice = products.reduce((acc, currentProduct) => {
      return acc + currentProduct.total
    }, 0)

    const productNames = products.reduce((acc, currentProduct) => {
      return acc + currentProduct.product.name + ', '
    }, '')

    const idempotency_key = uuid()
    const charge = await stripe.charges.create(
      {
        amount: totalPrice * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased : ${productNames}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    )

    const currentCart = await Cart.findOne({
      where: {
        UserId: UserId,
        status: 'open'
      }
    })

    await Order.create({
      name: charge.billing_details.name,
      city: req.body.token.card.address_city,
      country: req.body.token.card.address_country,
      street: req.body.token.card.address_line1,
      zipCode: req.body.token.card.address_zip,
      total: charge.amount / 100,
      UserId: UserId,
      CartId: currentCart.id
    })

    await currentCart.update({
      status: 'completed'
    })

    console.log('Charge:', { charge })
    status = 'success'
  } catch (error) {
    console.error('Error:', error)
    status = 'failure'
  }

  res.json({ error, status })
})

module.exports = router
