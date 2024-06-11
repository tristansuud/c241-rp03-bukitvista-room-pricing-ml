'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Units', [
      {
        unit_name: 'Unit 1',
        id_room: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 2',
        id_room: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 3',
        id_room: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // make until 10
      {
        unit_name: 'Unit 4',
        id_room: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 5',
        id_room: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // make for each id_room 1 - 10 give 5 unit
      {
        unit_name: 'Unit 1',
        id_room: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 2',
        id_room: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 3',
        id_room: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 4',
        id_room: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 5',
        id_room: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // make for each id_room 1 - 10 give 5 unit
      {
        unit_name: 'Unit 1',
        id_room: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 2',
        id_room: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 3',
        id_room: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 4',
        id_room: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 5',
        id_room: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // make for each id_room 1 - 10 give 5 unit
      {
        unit_name: 'Unit 1',
        id_room: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 2',
        id_room: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 3',
        id_room: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 4',
        id_room: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit_name: 'Unit 5',
        id_room: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Units', null, {});
  }
};
