const { DataTypes, Model } = require('sequelize'); // Assuming Sequelize is installed

const sequelize = require("../../config/dbConnect"); // Assuming the connection is defined here

const Property = require("./property");

const RoomAttributes = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  room_name: {
    type: DataTypes.STRING,
  },
  id_property: {
    type: DataTypes.STRING,
    references: {
      model: 'Properties',
      key: 'id',
    },
  },
  capacity: {
    type: DataTypes.INTEGER,
  },
  bedroom: {
    type: DataTypes.INTEGER,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

const Room = class Room extends Model { };

Room.init(RoomAttributes, {
  sequelize,
  timestamps: true,
  underscored: false,
});

module.exports = Room;