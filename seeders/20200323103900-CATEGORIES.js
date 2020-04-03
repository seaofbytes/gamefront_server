'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Playstation 4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'X-Box',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'PC',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nintendo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Accessories',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
}
