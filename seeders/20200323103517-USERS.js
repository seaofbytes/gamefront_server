'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Sandi',
          lastName: 'Lukez',
          email: 'sandi@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Ira',
          lastName: 'Milotic',
          email: 'ira@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Johnny',
          lastName: 'Magdaleno',
          email: 'johnny@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
