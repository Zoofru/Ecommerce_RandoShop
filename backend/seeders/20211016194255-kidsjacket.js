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
      itemname: 'Jean Jacket - Kids',
      price: 46.99,
      description: 'Kids Jacket',
      image: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/SITE_FLIPS/HOL_1/BROWSE/L1SND/DT/L1SND_DT_MSD_25._CB639644280_.jpg',
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
