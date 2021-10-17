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
     itemname: 'Hisense 50-Inch Tv',
     price: 399.99,
     description: 'Powered by exclusive technologies to amplify color, contrast, brightness, and smooth motion, the Hisense UHD smart TV combine incredible, ultra-bright 4k detail with the intuitively smart Roku TV to take your TV experience to the next level',
     image: 'https://m.media-amazon.com/images/I/71NCjY2xS7L._AC_SL1500_.jpg',
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
