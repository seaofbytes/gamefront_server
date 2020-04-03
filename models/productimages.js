'use strict'
module.exports = (sequelize, DataTypes) => {
  const ProductImages = sequelize.define(
    'ProductImages',
    {
      url: DataTypes.STRING,
      productId: DataTypes.INTEGER
    },
    {}
  )
  ProductImages.associate = function(models) {}
  return ProductImages
}
