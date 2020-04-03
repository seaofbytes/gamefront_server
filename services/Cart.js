const Cart = require('../models').Cart
const Product = require('../models').Product
const CartProducts = require('../models').CartProducts

const getCart = async userId => {
  const newCart = await Cart.findOrCreate({
    where: { UserId: userId, status: 'open' },
    include: [Product]
  })

  return newCart
}

const getCartItem = async (productId, cartId) => {
  const cartItem = await CartProducts.findOrCreate({
    where: {
      ProductId: productId,
      CartId: cartId
    }
  })

  return cartItem
}

const findCart = async userId => {
  const cart = await Cart.findOne({
    where: {
      UserId: userId,
      status: 'open'
    },
    include: [Product]
  })
  return cart
}

const checkQuantityAction = async (
  quantityAction,
  cartItem,
  productId,
  cartId,
  product
) => {
  if (quantityAction === 'add') {
    cartItem[0].update({
      quantity: cartItem[0].quantity + 1,
      total: cartItem[0].total + product.price
    })
  }

  if (quantityAction === 'remove') {
    if (cartItem[0].quantity <= 1) {
      cartItem[0].update({ quantity: 1 })
    } else {
      cartItem[0].update({
        quantity: cartItem[0].quantity - 1,
        total: cartItem[0].total - product.price
      })
    }
  }

  if (quantityAction === 'delete') {
    cartItem[0].destroy({
      where: {
        ProductId: productId,
        CartId: cartId
      }
    })
  }
}

module.exports = {
  getCart,
  findCart,
  getCartItem,
  checkQuantityAction
}
