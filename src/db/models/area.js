const { DataTypes, Model } = require('sequelize'); // Assuming Sequelize is installed

const sequelize = require("../../config/dbConnect"); // Assuming the connection is defined here

const AreaAttributes = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  area_name: {
    type: DataTypes.STRING,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

const Area = class Area extends Model { };

Area.init(AreaAttributes, {
  sequelize,
  timestamps: true,
  underscored: false,
});

module.exports = Area;