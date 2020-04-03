const { Router } = require('express')
const router = new Router()
const Category = require('../models').Category

router.post('/category', async (req, res, next) => {
  try {
    const { name } = req.body

    const createdCategory = await Category.create({
      name
    })

    res.send(createdCategory)
  } catch (error) {
    next(error)
  }
})

module.exports = router
