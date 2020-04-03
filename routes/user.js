'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  )
  User.associate = function(models) {
    models.User.hasMany(models.Cart)
    models.User.hasMany(models.Order)
    models.Order.belongsTo(models.User)
    models.Cart.belongsTo(models.User)
    models.User.hasMany(models.Review)
    models.Review.belongsTo(models.User)
  }
  return User
}
