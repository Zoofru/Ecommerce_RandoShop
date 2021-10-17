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
      itemname: 'Volkner Luxury RV',
      price: 1700000.00,
      description: 'The Volkner Mobil Performance is an RV that truly provides all the comforts of home while you’re on the road. At forty feet long, this cleverly designed luxury RV features accommodations like a fully equipped kitchen, a double bedroom, and built-in garage to store your car.',
      image: 'https://cdn.thisiswhyimbroke.com/images/luxury-rv-with-onboard-garage-volkner-performance-300x250.jpg',
      genreofitem: 'random',
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
