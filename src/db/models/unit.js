const { DataTypes, Model } = require('sequelize'); // Assuming Sequelize is installed

const sequelize = require("../../config/dbConnect"); // Assuming the connection is defined here

const UnitAttributes = {
  unit_name: {
    type: DataTypes.STRING,
  },
  id_room: {
    type: DataTypes.INTEGER,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

const Unit = class Unit extends Model { };

Unit.init(UnitAttributes, {
  sequelize,
  timestamps: true,
  underscored: false,
});

module.exports = Unit;