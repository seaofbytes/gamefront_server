const { Router } = require('express')
const router = new Router()
const Cart = require('../models').Cart
const auth = require('../middleware/auth')
const Product = require('../models').Product
const CartProducts = require('../models').CartProducts
const {
  getCart,
  findCart,
  getCartItem,
  checkQuantityAction
} = require('../services/Cart')

// Create or get cart
router.get('/user/cart', auth, async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id
    const newCart = await getCart(userId)
    res.send(newCart[0])
  } catch (error) {
    next(error)
  }
})

// Add or remove cart product

router.post('/user/cart/add', auth, async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id
    const quantityAction = req.body.quantityAction
    const cart = await findCart(userId)

    cart.addProduct(req.body.productId)

    const cartItem = await getCartItem(req.body.productId, cart.dataValues.id)

    const product = await Product.findByPk(req.body.productId)

    await checkQuantityAction(
      quantityAction,
      cartItem,
      req.body.productId,
      cart.dataValues.id,
      product
    )

    res.json(cartItem)
  } catch (error) {
    next(error)
  }
})

// Add or remove item quantity

router.post('/user/cart/quantity', auth, async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id
    const cart = await findCart(userId)
    const cartItem = await getCartItem(req.body.productId, cart.dataValues.id)

    await cartItem[0].update({ quantity: 999 })

    res.send(cart.Products)
  } catch (error) {
    next(error)
  }
})

module.exports = router
