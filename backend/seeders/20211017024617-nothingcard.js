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
      itemname: 'The Nothing Card',
      price: 4.99,
      description: 'There’s no better gift for that one person that’s impossible to buy for than The Nothing Card. This fantastic, cost-effective, and positively hilarious gift idea can even be customized with a short personalized message.',
      image: 'https://cdn.thisiswhyimbroke.com/images/the-nothing-birthday-card-getnothingshop-300x250.jpg',
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
