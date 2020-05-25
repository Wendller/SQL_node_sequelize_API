const Sequelize = require("sequelize");
const dbConfig = require("../config/db");

const User = require("../models/User");

const dbconnection = new Sequelize(dbConfig);

User.init(dbconnection);

module.exports = dbconnection;
