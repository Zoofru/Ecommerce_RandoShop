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
      itemname: 'Long 8k HDMI 2.1 Cable 15ft',
      price: 23.99,
      description: '【Latest Standard-HDMI 2.1 Cable 】This HDMI 2.1 cable is the latest HDMI specification. Support 8k@60Hz, 4k@120Hz, Yurnero high speed HDMI cable combines audio and video into one convenient cable, and accurately processes each signal source. It has a unique dynamic HDR color. Wow~ you will find that the high definition that 8k HDMI brings to you is amazing, it shows every detail clearly in front of your eyes.',
      image: 'https://m.media-amazon.com/images/I/915nFuTwSyL._AC_SL1500_.jpg',
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
