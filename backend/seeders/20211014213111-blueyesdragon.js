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
      itemname: 'Blue-Eyes White Dragon',
      price: 120,
      description : 'A legendary dragon that takes pride in its enormous power. Its power of destruction far exceeds comprehension. This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.',
      image: 'https://res.cloudinary.com/csicdn/image/upload/c_pad,fl_lossy,h_300,q_auto,w_300/v1/Images/Products/YuGiOh%20Art/Legendary%20Collection%20Kaiba/full/LCKCEN001A.jpg',
      genreofitem: 'cards',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
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
