'use strict'

const Category = require('./category').models

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    inStock: DataTypes.BOOLEAN,
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Product.associate = function(models) {
    // associations can be defined here
    models.Product.belongsToMany(
      models.Category,
      {
        through: 'Product_categories'
      },
      { as: 'categories' }
    )

    models.Category.belongsToMany(models.Product, {
      through: 'Product_categories'
    })

    models.Product.belongsToMany(
      models.Cart,
      {
        through: models.CartProducts
      },
      { as: 'products' }
    )

    models.Product.hasMany(models.ProductImages)
    models.Product.hasMany(models.Review)
    models.Review.belongsTo(models.Product)
    models.ProductImages.belongsTo(models.Product)
  }
  return Product
}
