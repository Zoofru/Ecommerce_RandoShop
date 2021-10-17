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
      itemname: 'Striped Shoes',
      price: 82.99,
      description: 'Womens Shoes',
      image: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/SITE_FLIPS/HOL_1/BROWSE/L1SND/DT/L1SND_DT_MSD_10._CB1198675311_.jpg',
      genreofitem: 'clothing',
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
