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
      itemname: 'Adult Velociraptor Skeleton',
      price: 2749.99,
      description: 'This incredible replica of an adult velociraptor will blow all other centerpieces out of the water! This show-stopping display piece stands 4′ tall and measures over 6′ long from head to tail. A must for any dino lover looking to add prehistoric flair to their home.',
      image: 'https://cdn.thisiswhyimbroke.com/images/adult-velociraptor-skeleton-dragontoothart-300x250.jpg',
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
