// Admin
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroSequelize = require('admin-bro-sequelizejs')
const db = require('../models')
AdminBro.registerAdapter(AdminBroSequelize)

const newAdminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin',
  branding: {
    companyName: 'GAME'
  }
  //... other AdminBroOptions
})

const adminRouter = AdminBroExpress.buildRouter(newAdminBro)

module.exports = {
  newAdminBro,
  adminRouter
}
