const { Router } = require('express')
const router = new Router()
const Order = require('../models').Order
const Cart = require('../models').Cart
const auth = require('../middleware/auth')
const CartProducts = require('../models').CartProducts

router.get('/orders', auth, async (req, res, next) => {
  try {
    const UserId = req.user.dataValues.id
    const completedUserOrders = await Order.findAll({
      where: {
        UserId: UserId
      },
      include: [Cart]
    })

    console.log(completedUserOrders, 'ORDERZZZZZZZZZZZZZZZZZZZ')

    const cartProducts = await Cart.findAll({
      where: {
        UserId: UserId
      },
      indluce: [CartProducts]
    })

    completedUserOrders.cartItems = cartProducts
    res.send(completedUserOrders)
  } catch (error) {
    next(error)
  }
})

module.exports = router
