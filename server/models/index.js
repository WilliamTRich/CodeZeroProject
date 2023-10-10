//Imports
const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/userModel")(sequelize, Sequelize)

module.exports = db