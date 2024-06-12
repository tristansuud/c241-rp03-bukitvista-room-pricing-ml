const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");

dotenv.config();

const dbName = "room_pricing";
const dbHost = "localhost";
const dbUsername = "root";
const dbPassword = "";
const dbDialect = "mysql";

const sequelizeConnection = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
});

module.exports = sequelizeConnection;