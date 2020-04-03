'use strict'
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      street: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      total: DataTypes.STRING
    },
    {}
  )
  Order.associate = function(models) {}
  return Order
}
