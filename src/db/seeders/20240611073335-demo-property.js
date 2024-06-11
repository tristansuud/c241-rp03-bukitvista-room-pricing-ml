'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Properties', [
      {
        property_name: 'Property 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // make until 10
      {
        property_name: 'Property 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        property_name: 'Property 10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Properties', null, {});
  }
};

