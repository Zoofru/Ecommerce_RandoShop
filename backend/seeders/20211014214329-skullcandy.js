'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('items', [{
      itemname: 'Skullcandy Earbud - Black',
      price: 84.99,
      description: 'Bluetooth wireless technology. Removable stability, ear gels for secure fit. Sound Pressure Level - 95±3dB. Up to 16 hours of total battery life. IP55 sweat, water, and dust resistant. Call, track, and volume touch controls',
      image: 'https://m.media-amazon.com/images/I/71k+G-1GxDL._AC_SL1500_.jpg',
      genreofitem: 'electronics',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('items', null, {})
  }
};
