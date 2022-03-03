'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      "name": "OceanSide",
      "date": "2022-01-01T12:00:00",
      "available_start_time": "2022-01-01T12:00:00",
      "end_time": "2022-01-01T19:30:00"
    },
   {
    "name": "CLiffSide",
    "date": "2022-02-01T12:00:00",
    "available_start_time": "2022-02-01T12:00:00",
    "end_time": "2022-01-01T19:30:00"
   },
 {
  "name": "SkySide",
  "date": "2022-03-01T12:00:00",
  "available_start_time": "2022-03-01T12:00:00",
  "end_time": "2022-01-01T19:30:00"
 }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
