'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unit_type_name: {
        type: Sequelize.STRING
      },
      number_of_bookings: {
        type: Sequelize.INTEGER
      },
      bedroom: {
        type: Sequelize.INTEGER
      },
      bathroom: {
        type: Sequelize.INTEGER
      },
      beds: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      ac: {
        type: Sequelize.BOOLEAN
      },
      balcony: {
        type: Sequelize.BOOLEAN
      },
      beachfront: {
        type: Sequelize.BOOLEAN
      },
      breakfast: {
        type: Sequelize.BOOLEAN
      },
      building_staff: {
        type: Sequelize.BOOLEAN
      },
      cable_tv: {
        type: Sequelize.BOOLEAN
      },
      essentials: {
        type: Sequelize.BOOLEAN
      },
      garden: {
        type: Sequelize.BOOLEAN
      },
      gym: {
        type: Sequelize.BOOLEAN
      },
      hair_dryer: {
        type: Sequelize.BOOLEAN
      },
      hanger: {
        type: Sequelize.BOOLEAN
      },
      heating: {
        type: Sequelize.BOOLEAN
      },
      hot_water: {
        type: Sequelize.BOOLEAN
      },
      kitchen: {
        type: Sequelize.BOOLEAN
      },
      linens: {
        type: Sequelize.BOOLEAN
      },
      lock: {
        type: Sequelize.BOOLEAN
      },
      luggage_drop_off: {
        type: Sequelize.BOOLEAN
      },
      parking: {
        type: Sequelize.BOOLEAN
      },
      pool: {
        type: Sequelize.BOOLEAN
      },
      private_entrance: {
        type: Sequelize.BOOLEAN
      },
      shampoo: {
        type: Sequelize.BOOLEAN
      },
      tv: {
        type: Sequelize.BOOLEAN
      },
      washer: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      workspace: {
        type: Sequelize.BOOLEAN
      },
      lat: {
        type: Sequelize.INTEGER
      },
      Ing: {
        type: Sequelize.INTEGER
      },
      distance_to_coastline: {
        type: Sequelize.INTEGER
      },
      area_distance_to_airport: {
        type: Sequelize.INTEGER
      },
      property_bedrooms: {
        type: Sequelize.INTEGER
      },
      average_baseline_price: {
        type: Sequelize.DECIMAL
      },
      area_name: {
        type: Sequelize.STRING,
      },
      total_fas:{
        type: Sequelize.INTEGER
      },
      ratio_bedroom_bathroom:{
        type: Sequelize.DECIMAL
      },
      ratio_bedroom_cap:{
        type: Sequelize.DECIMAL
      },
      avg_price_distance_to_coast:{
        type: Sequelize.DECIMAL
      },
      avg_price_distance_to_airport:{
        type: Sequelize.DECIMAL
      },
      avg_price_bedroom:{
        type: Sequelize.DECIMAL
      },
      avg_price_beds:{
        type: Sequelize.DECIMAL
      },
      avg_price_bathroom:{
        type: Sequelize.DECIMAL
      },
      avg_price_total_fas:{
        type: Sequelize.DECIMAL
      },
      id_property: {
        type: Sequelize.STRING,
        references: {
          model: 'Properties',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};