'use strict'
module.exports = (sequelize, DataTypes) => {
  const CartProducts = sequelize.define(
    'CartProducts',
    {
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      total: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {}
  )
  CartProducts.associate = function(models) {
    // associations can be defined here
  }
  return CartProducts
}
