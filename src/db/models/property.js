const { DataTypes, Model, Sequelize } = require('sequelize'); // Assuming Sequelize is installed

const sequelize = require("../../config/dbConnect"); // Assuming the connection is defined here

const Area = require("./area");

const PropertyAttributes = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  property_name: {
    type: DataTypes.STRING,
  },
  id_area: {
    type: DataTypes.STRING,
    references: {
      model: 'Areas',
      key: 'id',
    },
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

const Property = class Property extends Model { };

Property.init(PropertyAttributes, {
  sequelize,
  timestamps: true,
  underscored: false,
});

Property.hasOne(Area, {
  foreignKey: 'id',
  sourceKey: 'id_area'
});

module.exports = Property;