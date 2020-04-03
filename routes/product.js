const { Router } = require('express')
const router = new Router()
const Product = require('../models').Product
const Category = require('../models').Category
const ProductImages = require('../models').ProductImages
const Review = require('../models').Review

// Create product
router.post('/product', async (req, res, next) => {
  try {
    const { name, price, description, inStock, image } = req.body

    const createdProduct = await Product.create({
      name,
      price,
      description,
      inStock,
      image
    })

    // This is how you relate the product to the category
    createdProduct.addCategory(1)
    createdProduct.addCategory(3)

    res.send(createdProduct)
  } catch (error) {
    next(error)
  }
})

// Get all products
router.get('/product', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({
      include: [Category, ProductImages, Review]
    })

    if (allProducts) {
      res.json(allProducts)
    } else {
      res.send(404).end()
    }
  } catch (error) {
    next(error)
  }
})

// Get a single product

router.get('/product/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id, {
      include: [Category, ProductImages, Review]
    })

    if (singleProduct) {
      res.json(singleProduct)
    } else {
      res.send(404).end()
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
