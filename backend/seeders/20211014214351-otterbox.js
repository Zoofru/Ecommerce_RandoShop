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
     itemname: 'OtterBox Case for Galaxy S21+ 5G',
     price: 39.95,
     description: "Compatible with Galaxy S21+ 5G. Lasting antimicrobial technology helps protect case exterior against many common bacteria **It does not protect you or the screen**. Raised edges protect camera and screen",
     image: 'https://m.media-amazon.com/images/I/61Ex2QP0YwS._AC_SL1000_.jpg',
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
