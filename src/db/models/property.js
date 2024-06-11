const { DataTypes, Model } = require('sequelize'); // Assuming Sequelize is installed

const sequelize = require("../../config/dbConnect"); // Assuming the connection is defined here

const PropertyAttributes = {
  property_name: {
    type: DataTypes.STRING,
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

module.exports = Property;