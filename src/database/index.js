const Sequelize = require("sequelize");
const dbConfig = require("../config/db");

const User = require("../models/User");
const Address = require("../models/Address");
const Tech = require("../models/Tech");

const dbconnection = new Sequelize(dbConfig);

User.init(dbconnection);
Address.init(dbconnection);
Tech.init(dbconnection);

User.associate(dbconnection.models);
Address.associate(dbconnection.models);
Tech.associate(dbconnection.models);

module.exports = dbconnection;
