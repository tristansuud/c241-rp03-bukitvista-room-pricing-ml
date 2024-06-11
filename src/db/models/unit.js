'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Unit.init({
    unit_name: {
      type: DataTypes.STRING,
    },
    id_room: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Unit',
  });

  Unit.belongsTo(sequelize.models.Room, {
    foreignKey: 'id_room',
  });

  return Unit;
};