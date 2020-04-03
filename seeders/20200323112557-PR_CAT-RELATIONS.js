'use strict'

// ENUMS
// 1 - PS4
// 2 - XBOX
// 3 - PC
// 4 - NINTENDO
// 5 - ACC

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Product_categories',
      [
        // Crash
        {
          ProductId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Minecraft
        {
          ProductId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 2,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 2,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 2,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Nioh
        {
          ProductId: 3,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Uncharted Trilogy
        {
          ProductId: 4,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Doom Eternal
        {
          ProductId: 5,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 5,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 5,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 5,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Borderlands 3
        {
          ProductId: 6,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 6,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 6,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Rocket League
        {
          ProductId: 7,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 7,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 7,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 7,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Diablo 3 Reaper Of souls
        {
          ProductId: 8,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 8,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 8,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 8,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        // Subnautica
        {
          ProductId: 9,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 9,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProductId: 9,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        //Bloodborne
        {
          ProductId: 10,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Super Smash Bros
        {
          ProductId: 11,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product_categories', null, {})
  }
}
