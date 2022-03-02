'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('bands', [{
    "name": "cats",
    "genre": "Metal",
    "available_start_time": "2022-01-01T19:00:00",
    "end_time": "2022-01-01T19:30:00"
   },
  {
    "name": "MeowOFDoom",
    "genre": "Metal",
    "available_start_time": "2022-01-01T18:00:00",
    "end_time": "2022-01-01T18:30:00"
  },
{
    "name": "Rawr",
    "genre": "Metal",
    "available_start_time": "2022-01-01T18:31:00",
    "end_time": "2022-01-01T18:59:00"
}])
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('bands', null, {})
  }
};
