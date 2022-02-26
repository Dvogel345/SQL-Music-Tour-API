'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage-events', {
      stage_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        allowNull: false,
        autoIncrement: true,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        allowNull: false,
        autoIncrement: true,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      available_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage-events');
  }
};