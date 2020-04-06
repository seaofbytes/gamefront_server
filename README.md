# Server for the gamefront webshop

## Installation
- clone the project : git clone https://github.com/seaofbytes/gamefront_server
- install dependencies with npm / yarn install
- change the config file to match your server
- run sequelize db:migrate to create migrations
- run sequelize db:seed:all to seed the database

## Summary
This is the backend for my webshop project, built along with frontend in two weeks. The back end is built in Express, using Sequelize ORM, Sequelize-cli and Postgres.
The backend also features a fully functional CMS style admin panel ( Admin bro ). 

# Frontend for the server
 [Frontend](https://github.com/seaofbytes/gamefront_client)


## The server for the webshop is built with: 
- [NodeJS](https://nodejs.org/en/https://reactjs.org/)
- [Express](https://www.npmjs.com/package/jsonwebtoken)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://github.com/sequelize/cli)
- [Docker](https://www.docker.com/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)   
- [AdminBro](https://github.com/SoftwareBrothers/admin-bro) 
- [bcrypt](https://www.npmjs.com/package/bcrypt) 


## Routes
### User:
**POST /user** - creates a new user Account ( password is stored using JWT bcrypt).\
**POST /login** - checks the username and password of a User and logs them in if correct.


### Product:
**POST /product** - create product.\
**GET /product** - get all products.\
**GET /product/:id** - get a single product.

### Cart:
**GET /user/cart** - get or create a cart.\
**POST /user/cart/** - route that handles adding to cart and increasing/removing quantity.

### Review:
**GET /product/:id/review** - get all reviews from Product\
**POST /review** - Create a new review.

### ProductImages:
**GET /product/:id/review** - get all reviews from Product.\
**POST /review** - Create a new review.

### Checkout:
**POST /checkout** - checks if stripe payment is successful and creates a Order if it is.\


## Admin panel showcase:
[![Products](https://imgshare.io/images/2020/04/06/admin1.png)](https://imgshare.io/image/1Ygfg)
[![Categories
.png](https://imgshare.io/images/2020/04/06/admin2.png)](https://imgshare.io/image/1YVH7)
