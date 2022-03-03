'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greets extends Model {
    static associate({Band, Event}) {
       // band
       MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  meet_greets.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    meet_greet_id: DataTypes.INTEGER,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meet_greets',
  });
  return meet_greets;
};