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
      itemname: 'Green Laser Gloves',
      price: 190.00,
      description: 'Become the life of any party by showing up wearing these green laser gloves. They’ll allow you to emit neon green laser beams from four of your fingers, thus guaranteeing that you will be the life of whatever party, rave, or concert you attend.',
      image: 'https://cdn.thisiswhyimbroke.com/images/green-laser-gloves-ekodesignco-300x250.jpg',
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
