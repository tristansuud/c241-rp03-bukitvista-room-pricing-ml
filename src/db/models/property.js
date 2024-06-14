const { DataTypes, Model, Sequelize } = require('sequelize'); // Assuming Sequelize is installed

const sequelize = require("../../config/dbConnect"); // Assuming the connection is defined here

const PropertyAttributes = {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  property_name: Sequelize.STRING,
  property_design: Sequelize.DECIMAL,
  property_type: Sequelize.DECIMAL,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

const Property = class Property extends Model { };

Property.init(PropertyAttributes, {
  sequelize,
  timestamps: true,
  underscored: false,
  allowNull: true,
});

module.exports = Property;