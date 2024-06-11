'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {

    }
  }
  Room.init({
    room_name: {
      type: DataTypes.STRING,
    },
    id_property: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
  , {
    sequelize,
    modelName: 'Room',
  });

  Room.belongsTo(sequelize.models.Property, {
    foreignKey: 'id_property',
  });

  return Room;
};
