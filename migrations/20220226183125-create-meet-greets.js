'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      event_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true,
        allowNull: false
      },
      band_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        foreignKey: true,
        allowNull: false
      },
      meet_greet_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      available_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};