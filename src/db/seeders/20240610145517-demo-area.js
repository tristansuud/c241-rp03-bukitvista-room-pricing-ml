'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Areas', [
      {
        id: 'A0043',
        area_name: 'Ngupasan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0001',
        area_name: 'Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0039',
        area_name: 'Tamantirto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0050',
        area_name: 'Caturtunggal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0038',
        area_name: 'Sinduharjo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0047',
        area_name: 'Maguwoharjo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0040',
        area_name: 'Gunungketur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0046',
        area_name: 'Tamantirto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0045',
        area_name: 'Timbulharjo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0041',
        area_name: 'Ngupasan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0049',
        area_name: 'Sinduadi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0042',
        area_name: 'Sariharjo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0044',
        area_name: 'Banguntapan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0020',
        area_name: 'Nusa Penida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0008',
        area_name: 'Bingin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0027',
        area_name: 'Kintamani',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0002',
        area_name: 'Uluwatu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0010',
        area_name: 'Jimbaran',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0011',
        area_name: 'Ungasan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0009',
        area_name: 'Balangan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0035',
        area_name: 'Kutuh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0003',
        area_name: 'Canggu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0013',
        area_name: 'Padang Padang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0031',
        area_name: 'Pererenan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0004',
        area_name: 'Ubud',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0032',
        area_name: 'Umalas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0028',
        area_name: 'Karangasem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0015',
        area_name: 'Seminyak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0024',
        area_name: 'Tabanan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0033',
        area_name: 'Greece',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0025',
        area_name: 'Singaraja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0052',
        area_name: 'Kerobokan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0012',
        area_name: 'Nusa Dua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0036',
        area_name: 'Nusa Ceningan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0029',
        area_name: 'Mengwi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0037',
        area_name: 'Pecatu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'A0022',
        area_name: 'Sanur',
        createdAt: new Date(),
        updatedAt: new Date()
      },



    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Areas', null, {});  
  }
};
