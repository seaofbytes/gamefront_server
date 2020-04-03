'use strict'
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review',
    {
      rating: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {}
  )
  Review.associate = function(models) {
    models.Review.belongsTo(models.Product)
    models.Review.belongsTo(models.User)
    models.User.hasMany(models.Review)
    models.Product.hasMany(models.Review)
  }
  return Review
}
