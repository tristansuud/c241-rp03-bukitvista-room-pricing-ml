'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rooms', [
      {
        room_name: 'Room 1',
        id_property: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 2',
        id_property: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 3',
        id_property: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // make until 10
      {
        room_name: 'Room 4',
        id_property: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 5',
        id_property: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // make for each id_property 1 - 10 give 5 room
      {
        room_name: 'Room 1',
        id_property: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 2',
        id_property: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 3',
        id_property: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 4',
        id_property: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 5',
        id_property: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 1',
        id_property: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 2',
        id_property: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 3',
        id_property: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 4',
        id_property: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 5',
        id_property: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 1',
        id_property: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 2',
        id_property: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 3',
        id_property: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 4',
        id_property: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 5',
        id_property: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 1',
        id_property: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 2',
        id_property: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 3',
        id_property: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 4',
        id_property: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 5',
        id_property: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 1',
        id_property: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 2',
        id_property: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 3',
        id_property: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 4',
        id_property: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 5',
        id_property: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 1',
        id_property: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 2',
        id_property: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 3',
        id_property: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_name: 'Room 4',
        id_property: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rooms', null, {});
  }
};
