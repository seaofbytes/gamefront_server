'use strict'
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {
      status: {
        type: DataTypes.ENUM,
        values: ['open', 'closed', 'completed']
      }
    },
    {}
  )
  Cart.associate = function(models) {
    models.Cart.belongsToMany(models.Product, {
      through: models.CartProducts
    })

    models.Cart.hasOne(models.Order)
    models.Order.belongsTo(models.Cart)
  }
  return Cart
}
